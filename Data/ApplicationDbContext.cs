using LandmarkRemark.Models;
using IdentityServer4.EntityFramework.Options;
using Microsoft.AspNetCore.ApiAuthorization.IdentityServer;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using LandmarkRemark.Models.Interfaces;

namespace LandmarkRemark.Data
{
    public class ApplicationDbContext : ApiAuthorizationDbContext<ApplicationUser>
    {
        public ApplicationDbContext(
            DbContextOptions options,
            IOptions<OperationalStoreOptions> operationalStoreOptions) : base(options, operationalStoreOptions)
        {
        }
        public DbSet<Coordinates> Coordinates { get; set; }
        public DbSet<Marker> Markers { get; set; }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            // Ensure auto-generated models still build themselves
            base.OnModelCreating(modelBuilder);

            // Setup primary keys as auto-incrementing values
            modelBuilder.Entity<Coordinates>()
                .Property(coord => coord.Id)
                .ValueGeneratedOnAdd();

            modelBuilder.Entity<Marker>()
                .Property(mark => mark.Id)
                .ValueGeneratedOnAdd();
        }
    }
}
