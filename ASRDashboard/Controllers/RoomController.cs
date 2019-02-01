using System.Collections.Generic;
using ASRDashboard.Models;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860
namespace ASRDashboard.Controllers
{
    [Route("api/[controller]")]
    public class RoomController : Controller
    {
        private readonly RoomDataAccessLayer roomDataAccessLayer = new RoomDataAccessLayer();

        [HttpGet]
        [Route("Index")]
        public IEnumerable<Room> Get()
        {
            return roomDataAccessLayer.GetAll();
        }

        [HttpPost]
        [Route("Create")]
        public int Create([FromBody] Room room)
        {
            return roomDataAccessLayer.Add(room);
        }

        [HttpGet]
        [Route("Details/{id}")]
        public Room Details(int id)
        {
            return roomDataAccessLayer.GetData(id);
        }

        [HttpPut]
        [Route("Edit")]
        public int Edit([FromBody] Room room)
        {
            return roomDataAccessLayer.Update(room);
        }

        [HttpDelete]
        [Route("Delete/{id}")]
        public int Delete(int id)
        {
            return roomDataAccessLayer.Delete(id);
        }
    }
}
