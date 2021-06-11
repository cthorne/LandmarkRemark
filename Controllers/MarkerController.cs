using LandmarkRemark.Controllers.Interfaces;
using LandmarkRemark.Data;
using LandmarkRemark.Models;
using LandmarkRemark.Models.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;

namespace LandmarkRemark.Controllers
{
    //[Authorize]
    [ApiController]
    [Route("[controller]/[action]")]
    public class MarkerController : ControllerBase, IMarkerController
    {
        private readonly ApplicationDbContext _context;
        private readonly UserManager<ApplicationUser> _userManager;

        public MarkerController(ApplicationDbContext context, UserManager<ApplicationUser> userManager)
        {
            _context = context;
            _userManager = userManager;
        }

        /// <summary>
        /// HTTP Get to Retrieve all Markers from Database
        /// </summary>
        /// <returns>IENumerable of all Marker objects</returns>
        [HttpGet]
        public async Task<IEnumerable<IMarker>> GetAll()
        {
            return await _context.Markers.Include(markers => markers.Coordinates)
                .Include(markers => markers.User)
                .ToListAsync();
        }

        /// <summary>
        /// Retrieves specific Markers from database based on text
        /// </summary>
        /// <param name="searchText"></param>
        /// <returns>All markers matching username or comment text based on input.</returns>
        [HttpGet("{searchText}")]
        [Route("")]
        public async Task<IEnumerable<IMarker>> GetSearchMatches(string searchText)
        {
            // Check if route searchText is null, if so return all from search
            if (!string.IsNullOrWhiteSpace(searchText))
            {
                return await _context.Markers.Include(markers => markers.Coordinates)
                    .Include(markers => markers.User)
                    .Where(marker => marker.User.UserName.Contains(searchText) || marker.Comment.Contains(searchText))
                    .ToListAsync();
            }
            
            return await GetAll();
        }

        /// <summary>
        /// Retrieve specific marker based on id
        /// </summary>
        /// <param name="id"></param>
        /// <returns>Singular Marker object</returns>
        [HttpGet("{id}")]
        public async Task<IMarker> Get(int id)
        {
            return await _context.Markers.Include(markers => markers.Coordinates)
                .Include(markers => markers.User)
                .Where(m => m.Id == id)
                .FirstOrDefaultAsync();
        }

        /// <summary>
        /// Create a new marker, triggered from UI
        /// </summary>
        /// <param name="input"></param>
        /// <returns>No return value</returns>
        [HttpPost]
        public async Task Create(CreateMarkerObject input)
        {
            // Retrieve current user from claim and id
            var userIdClaim = User.Claims.FirstOrDefault(c => c.Type == ClaimTypes.NameIdentifier);
            var user = await _userManager.FindByIdAsync(userIdClaim.Value);

            // Build object from JSON input
            var marker = new Marker
            {
                Comment = input.Comment,
                User = user,
                Coordinates = new Coordinates
                {
                    Latitude = input.Latitude,
                    Longitude = input.Longitude
                }
            };

            // Add to collection
            _context.Markers.Add(marker);

            // Commit object to table
            _context.SaveChanges();
        }
    }
}
