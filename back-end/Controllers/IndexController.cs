using System.Net;
using System.Reflection;
using System.Net.Http.Headers;
using Microsoft.AspNetCore.Mvc;

namespace back_end.Controllers;

[Route("/")]
[ApiController]
public class IndexController : ControllerBase
{
    [HttpGet()]
    [Route("/")]
    public ActionResult<string> Get()
    {
        return "olá mundo aqui quem fala é o atumalaco";
    }

}
