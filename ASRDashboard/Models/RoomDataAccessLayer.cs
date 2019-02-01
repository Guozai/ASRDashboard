﻿using System.Collections.Generic;
using System.Linq;
using Microsoft.EntityFrameworkCore;

namespace ASRDashboard.Models
{
    public class RoomDataAccessLayer
    {
        private readonly s3177105Context db = new s3177105Context();

        public IEnumerable<Room> GetAll()
        {
            return db.Room.ToList();
        }

        // To Add new Room record.
        public int Add(Room room)
        {
            db.Room.Add(room);
            db.SaveChanges();
            return 1;
        }

        // To Update the records of a particular Room.
        public int Update(Room room)
        {
            db.Entry(room).State = EntityState.Modified;
            db.SaveChanges();
            return 1;
        }

        // Get the details of a particular Room.
        public Room GetData(int id)
        {
            var room = db.Room.Find(id);
            return room;
        }

        // To Delete the record of a particular Room.
        public int Delete(int id)
        {
            var room = db.Room.Find(id);
            db.Room.Remove(room);
            db.SaveChanges();
            return 1;
        }
    }
}
