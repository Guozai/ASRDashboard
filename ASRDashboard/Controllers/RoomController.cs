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

        //[HttpGet]
        //[Route("RoomID")]
        //public IEnumerable<Room> GetForRoom(string RoomID)
        //{
        //    return roomDataAccessLayer.GetForRoom(RoomID);
        //}

        [HttpPost]
        [Route("Create")]
        public int Create([FromBody] Room room)
        {
            return roomDataAccessLayer.Add(room);
        }

        [HttpGet]
        [Route("Details/{RoomID}")]
        public Room Details(string RoomID)
        {
            return roomDataAccessLayer.GetData(RoomID);
        }

        [HttpPut]
        [Route("Edit")]
        public int Edit([FromBody] Room room)
        {
            return roomDataAccessLayer.Update(room);
        }

        [HttpDelete]
        [Route("Delete/{RoomID}")]
        public int Delete(string RoomID)
        {
            return roomDataAccessLayer.Delete(RoomID);
        }
    }
}
