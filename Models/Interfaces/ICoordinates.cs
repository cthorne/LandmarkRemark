using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LandmarkRemark.Models.Interfaces
{
    public interface ICoordinates
    {
        float Longitude { get; set; }
        float Latitude { get; set; }
    }
}
