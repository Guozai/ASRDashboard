using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.EntityFrameworkCore;

namespace ASRDashboard.Models
{
    public class SlotDataAccessLayer
    {
        private readonly s3177105Context db = new s3177105Context();

        public IEnumerable<Slot> GetAll()
        {
            return db.Slot.ToList();
        }

        // Get all slots for a single staff
        public IEnumerable<Slot> GetForStaff(string StaffID)
        {
            return db.Slot.Where(x => x.StaffId == StaffID).ToList();
        }

        // Get all slots for a single student
        public IEnumerable<Slot> GetForStudent(string StudentID)
        {
            return db.Slot.Where(x => x.StudentId == StudentID).ToList();
        }

        // To Add new Slot record.
        public int Add(Slot slot)
        {
            db.Slot.Add(slot);
            db.SaveChanges();
            return 1;
        }

        // To Update the records of a particular Slot.
        public int Update(Slot slot)
        {
            db.Entry(slot).State = EntityState.Modified;
            db.SaveChanges();
            return 1;
        }

        // Get the details of a particular Slot.
        public Slot GetData(string RoomID, DateTime StartTime)
        {
            var slot = db.Slot.FirstOrDefault(
                x => x.RoomId == RoomID && x.StartTime == StartTime);
            return slot;
        }

        // To Delete the record of a particular Slot.
        public int Delete(string RoomID, DateTime StartTime)
        {
            var slot = db.Slot.FirstOrDefault(
                x => x.RoomId == RoomID && x.StartTime == StartTime);
            db.Slot.Remove(slot);
            db.SaveChanges();
            return 1;
        }
    }
}
