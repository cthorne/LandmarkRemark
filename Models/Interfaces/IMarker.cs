using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LandmarkRemark.Models.Interfaces
{
    public interface IMarker
    {
        Coordinates Coordinates { get; set; }
        ApplicationUser User { get; set; }
        string Comment { get; set; }
    }
}
