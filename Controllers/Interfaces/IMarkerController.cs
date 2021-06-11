using LandmarkRemark.Models;
using LandmarkRemark.Models.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LandmarkRemark.Controllers.Interfaces
{
    public interface IMarkerController
    {
        Task<IEnumerable<IMarker>> GetAll();
        Task<IMarker> Get(int id);
        Task<IEnumerable<IMarker>> GetSearchMatches(string searchText);
        Task Create(CreateMarkerObject input);
    }
}
