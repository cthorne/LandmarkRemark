using LandmarkRemark.Models.Interfaces;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace LandmarkRemark.Models
{
    public class Coordinates : ICoordinates
    {
        [Key]
        public int Id { get; set; }
        public float Longitude { get; set; }
        public float Latitude { get; set; }
    }   
}
