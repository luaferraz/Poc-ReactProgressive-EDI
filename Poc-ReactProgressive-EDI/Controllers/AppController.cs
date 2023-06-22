using Microsoft.AspNetCore.Mvc;

namespace Poc_ReactProgressive_EDI.Controllers
{
    public class AppController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
