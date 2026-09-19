namespace EventEase.Services
{
    public class AttendanceService
    {
        private readonly Dictionary<int, List<string>> _attendance = new()
        {
            { 1, new List<string> { "Ali Khan", "Sarah Ahmed", "Hamza Sheikh" } },
            { 2, new List<string> { "Zainab Malik", "Bilal Hassan" } },
            { 3, new List<string> { "Usman Tariq", "Ayesha Noor" } }
        };

        public List<string> GetAttendees(int eventId)
        {
            return _attendance.ContainsKey(eventId) ? _attendance[eventId] : new List<string>();
        }
    }
}