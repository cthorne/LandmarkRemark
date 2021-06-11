using LandmarkRemark.Models.Interfaces;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace LandmarkRemark.Models
{
    public class Marker : IMarker
    {

        [Key]
        public int Id { get; set; }
        public Coordinates Coordinates { get; set; }
        public ApplicationUser User { get; set; }
        public string Comment { get; set; }
    }
}
