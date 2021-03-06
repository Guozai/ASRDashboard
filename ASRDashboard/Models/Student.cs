﻿using System;
using System.Collections.Generic;

namespace ASRDashboard.Models
{
    public partial class Student
    {
        public Student()
        {
            AspNetUsers = new HashSet<AspNetUsers>();
            Slot = new HashSet<Slot>();
        }

        public string StudentId { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }

        public ICollection<AspNetUsers> AspNetUsers { get; set; }
        public ICollection<Slot> Slot { get; set; }
    }
}
