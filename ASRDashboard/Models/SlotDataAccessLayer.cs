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
        public Slot GetData(int id)
        {
            var slot = db.Slot.Find(id);
            return slot;
        }

        // To Delete the record of a particular Slot.
        public int Delete(int id)
        {
            var slot = db.Slot.Find(id);
            db.Slot.Remove(slot);
            db.SaveChanges();
            return 1;
        }
    }
}
