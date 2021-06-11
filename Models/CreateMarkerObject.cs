using LandmarkRemark.Models.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LandmarkRemark.Models
{
    public class CreateMarkerObject : ICreateMarker
    {

        public float Longitude { get; set; }
        public float Latitude { get; set; }
        public string Comment { get; set; }
    }
}
