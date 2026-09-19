using System;
using System.Collections.Generic;

namespace StudentGradeManagementSystem
{
    class Student
    {
        public string Name { get; set; }
        public int Id { get; set; }
        public List<double> Grades { get; set; }

        public Student(string name, int id)
        {
            Name = name;
            Id = id;
            Grades = new List<double>();
        }

        public double CalculateAverage()
        {
            if (Grades.Count == 0)
            {
                return 0.0;
            }

            double total = 0;
            foreach (double grade in Grades)
            {
                total += grade;
            }

            return total / Grades.Count;
        }
    }

    class Program
    {
        static List<Student> students = new List<Student>();

        static void Main(string[] args)
        {
            bool running = true;

            while (running)
            {
                Console.WriteLine("\n=== Student Grade Management System ===");
                Console.WriteLine("1. Add New Student");
                Console.WriteLine("2. Add Grade to Student");
                Console.WriteLine("3. Display All Student Records");
                Console.WriteLine("4. Exit");
                Console.Write("Select an option (1-4): ");

                string input = Console.ReadLine();

                switch (input)
                {
                    case "1":
                        AddStudent();
                        break;
                    case "2":
                        AddGradeToStudent();
                        break;
                    case "3":
                        DisplayRecords();
                        break;
                    case "4":
                        running = false;
                        Console.WriteLine("Exiting application. Goodbye!");
                        break;
                    default:
                        Console.WriteLine("Invalid option. Please choose a valid menu item.");
                        break;
                }
            }
        }

        static void AddStudent()
        {
            Console.Write("Enter Student Name: ");
            string name = Console.ReadLine();

            Console.Write("Enter Student ID: ");
            if (int.TryParse(Console.ReadLine(), out int id))
            {
                students.Add(new Student(name, id));
                Console.WriteLine($"Student '{name}' added successfully.");
            }
            else
            {
                Console.WriteLine("Invalid ID format. Student creation canceled.");
            }
        }

        static void AddGradeToStudent()
        {
            if (students.Count == 0)
            {
                Console.WriteLine("No students available. Add a student first.");
                return;
            }

            Console.Write("Enter Student ID to add grade: ");
            if (int.TryParse(Console.ReadLine(), out int id))
            {
                Student student = FindStudentById(id);

                if (student != null)
                {
                    Console.Write("Enter numerical grade (0-100): ");
                    if (double.TryParse(Console.ReadLine(), out double grade) && grade >= 0 && grade <= 100)
                    {
                        student.Grades.Add(grade);
                        Console.WriteLine($"Grade {grade} added to {student.Name}.");
                    }
                    else
                    {
                        Console.WriteLine("Invalid grade entry. Must be a number between 0 and 100.");
                    }
                }
                else
                {
                    Console.WriteLine("Student ID not found.");
                }
            }
            else
            {
                Console.WriteLine("Invalid input for ID.");
            }
        }

        static Student FindStudentById(int id)
        {
            for (int i = 0; i < students.Count; i++)
            {
                if (students[i].Id == id)
                {
                    return students[i];
                }
            }
            return null;
        }

        static void DisplayRecords()
        {
            if (students.Count == 0)
            {
                Console.WriteLine("No student records found.");
                return;
            }

            Console.WriteLine("\n--- Student Records ---");
            foreach (var student in students)
            {
                double average = student.CalculateAverage();
                string gradesList = student.Grades.Count > 0 ? string.Join(", ", student.Grades) : "No grades recorded";
                
                Console.WriteLine($"ID: {student.Id} | Name: {student.Name}");
                Console.WriteLine($"Grades: [{gradesList}]");
                Console.WriteLine($"Average Grade: {average:F2}");
                Console.WriteLine("-----------------------");
            }
        }
    }
}