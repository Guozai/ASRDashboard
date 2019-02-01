using System.Collections.Generic;
using ASRDashboard.Models;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860
namespace ASRDashboard.Controllers
{
    [Route("api/[controller]")]
    public class SlotController : Controller
    {
        private readonly SlotDataAccessLayer slotDataAccessLayer = new SlotDataAccessLayer();

        [HttpGet]
        [Route("Index")]
        public IEnumerable<Slot> Get()
        {
            return slotDataAccessLayer.GetAll();
        }

        [HttpPost]
        [Route("Create")]
        public int Create([FromBody] Slot slot)
        {
            return slotDataAccessLayer.Add(slot);
        }

        [HttpGet]
        [Route("Details/{id}")]
        public Slot Details(int id)
        {
            return slotDataAccessLayer.GetData(id);
        }

        [HttpPut]
        [Route("Edit")]
        public int Edit([FromBody] Slot slot)
        {
            return slotDataAccessLayer.Update(slot);
        }

        [HttpDelete]
        [Route("Delete/{id}")]
        public int Delete(int id)
        {
            return slotDataAccessLayer.Delete(id);
        }
    }
}
