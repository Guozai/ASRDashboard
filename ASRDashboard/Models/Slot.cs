using System;
using System.Collections.Generic;

namespace ASRDashboard.Models
{
    public partial class Slot
    {
        public string RoomId { get; set; }
        public DateTime StartTime { get; set; }
        public string StaffId { get; set; }
        public string StudentId { get; set; }

        public Room Room { get; set; }
        public Staff Staff { get; set; }
        public Student Student { get; set; }
    }
}
