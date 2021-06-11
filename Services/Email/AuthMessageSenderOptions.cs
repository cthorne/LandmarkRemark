using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

// Code utilised from: 
// https://docs.microsoft.com/en-us/aspnet/core/security/authentication/accconfirm?view=aspnetcore-3.1&tabs=visual-studio
namespace LandmarkRemark.Services.Email
{
    public class AuthMessageSenderOptions
    {
        public string SendGridUser { get; set; }
        public string SendGridKey { get; set; }
    }
}
