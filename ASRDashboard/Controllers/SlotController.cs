using System;
using System.Collections.Generic;
using System.Globalization;
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

        [HttpGet]
        [Route("Staff")]
        //[Route("api/Slot/Staff")]
        public IEnumerable<Slot> GetForStaff(string StaffID)
        {
            return slotDataAccessLayer.GetForStaff(StaffID);
        }

        [HttpGet]
        [Route("Student")]
        //[Route("api/Slot/Student")]
        public IEnumerable<Slot> GetForStudent(string StudentID)
        {
            return slotDataAccessLayer.GetForStudent(StudentID);
        }

        [HttpPost]
        [Route("Create")]
        public int Create([FromBody] Slot slot)
        {
            return slotDataAccessLayer.Add(slot);
        }

        [HttpGet]
        [Route("Details/{RoomID}/{StartTime}")]
        public Slot Details(string RoomID, string dateTime)
        {
            var StartTime = DateTime.ParseExact(dateTime, "dd/MM/yyyy HH:mm:ss", CultureInfo.InvariantCulture);
            return slotDataAccessLayer.GetData(RoomID, StartTime);
        }

        [HttpPut]
        [Route("Edit/{RoomID}/{StartTime}")]
        public int Edit(string RoomID, string dateTime, [FromBody] Slot slot)
        {
            return slotDataAccessLayer.Update(slot);
        }

        [HttpDelete]
        [Route("Delete/{RoomID}/{StartTime}")]
        public int Delete(string RoomID, string dateTime)
        {
            var StartTime = DateTime.ParseExact(dateTime, "dd/MM/yyyy HH:mm:ss", CultureInfo.InvariantCulture);
            return slotDataAccessLayer.Delete(RoomID, StartTime);
        }
    }
}
