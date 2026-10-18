using EventEase.Models;

namespace EventEase.Services
{
    public class AppState
    {
        public List<EventItem> Events { get; set; } = new()
        {
            new EventItem { Id = 1, Title = "Tech Conference 2026", Description = "Annual technology and software summit.", Date = DateTime.Now.AddDays(10), Location = "Auditorium A", Capacity = 100, RegisteredCount = 45 },
            new EventItem { Id = 2, Title = "Web Dev Workshop", Description = "Hands-on Blazor and UI/UX training session.", Date = DateTime.Now.AddDays(15), Location = "Lab 3", Capacity = 30, RegisteredCount = 20 },
            new EventItem { Id = 3, Title = "AI & Data Science Meetup", Description = "Exploring practical applications of Generative AI.", Date = DateTime.Now.AddDays(20), Location = "Main Hall", Capacity = 80, RegisteredCount = 60 }
        };
    }
}