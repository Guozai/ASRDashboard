using System;
using System.Collections.Generic;

namespace ASRDashboard.Models
{
    public partial class Room
    {
        public Room()
        {
            Slot = new HashSet<Slot>();
        }

        public string RoomId { get; set; }

        public ICollection<Slot> Slot { get; set; }
    }
}
