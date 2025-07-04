using API.RequestHelpers;
using Core.Entities;
using Core.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers;

[Route("api/[controller]")]
[ApiController]

public class BaseApiController : ControllerBase
{
    protected async Task<ActionResult> CreatePagedResult<T>(IGenericRepository<T> repo,
      ISpecification<T> spec, int PageIndex, int pageSize) where T : BaseEntity
      {
        var items = await repo.ListAsync(spec);
        var count = await repo.CountAsync(spec);

         var pagination = new Pagination<T>(PageIndex, pageSize, count, items);
         return Ok(pagination);
        
      }
}
