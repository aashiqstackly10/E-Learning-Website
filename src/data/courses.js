import reactImage from "../assets/images/react.jpg";
import cppImage from "../assets/images/cpp.jpg";
import javaImage from "../assets/images/java.jpg";
import javascriptImage from "../assets/images/javascript.jpg";
import pythonImage from "../assets/images/python.jpg";
import htmlImage from "../assets/images/html.jpg";
import englishImage from "../assets/images/english.jpg";
import dataScienceImage from "../assets/images/datascience.jpg";
import sqlImage from "../assets/images/sql.jpg";

const courses = [
  {
    id: "1",
    title: "React JS for Beginners",
    category: "Web Development",
    instructor: "Kevin",
    level: "Beginner",
    duration: "6 weeks",
    price: 499,
    rating: 4.5,
    image: reactImage,
    description:
      "Learn React JS, components, props, state, and hooks. Build simple interactive web applications.",
    lessons: [
      "Introduction to React",
      "Installing React with Vite",
      "Components and JSX",
      "Props and State",
      "Using React Hooks",
      "Building a Mini Project",
    ],
  },
  {
    id: "2",
    title: "C++ Programming",
    category: "Programming",
    instructor: "Roshaan",
    level: "Beginner",
    duration: "5 weeks",
    price: 399,
    rating: 4.3,
    image: cppImage,
    description:
      "Learn C++ programming, variables, loops, functions, arrays, and object-oriented programming.",
    lessons: [
      "Introduction to C++",
      "Variables and Data Types",
      "Conditions and Loops",
      "Functions and Arrays",
      "Object-Oriented Programming",
      "Practice Programs",
    ],
  },
  {
    id: "3",
    title: "Java Programming",
    category: "Programming",
    instructor: "Ken",
    level: "Beginner",
    duration: "7 weeks",
    price: 599,
    rating: 4.6,
    image: javaImage,
    description:
      "Learn Java syntax, classes, objects, inheritance, and exception handling.",
    lessons: [
      "Introduction to Java",
      "Java Variables and Operators",
      "Conditions and Loops",
      "Classes and Objects",
      "Inheritance and Polymorphism",
      "Exception Handling",
    ],
  },
  {
    id: "4",
    title: "JavaScript Essentials",
    category: "Web Development",
    instructor: "Zain",
    level: "Beginner",
    duration: "4 weeks",
    price: 349,
    rating: 4.4,
    image: javascriptImage,
    description:
      "Learn JavaScript fundamentals and use them to add interactivity to websites.",
    lessons: [
      "Introduction to JavaScript",
      "Variables and Data Types",
      "Functions and Events",
      "Arrays and Objects",
      "DOM Manipulation",
      "Building an Interactive Page",
    ],
  },
  {
    id: "5",
    title: "Python Programming",
    category: "Programming",
    instructor: "Antony",
    level: "Beginner",
    duration: "6 weeks",
    price: 449,
    rating: 4.7,
    image: pythonImage,
    description:
      "Learn Python using simple examples covering variables, conditions, loops, functions, and files.",
    lessons: [
      "Introduction to Python",
      "Variables and Data Types",
      "Conditions and Loops",
      "Functions",
      "Lists and Dictionaries",
      "File Handling and Mini Project",
    ],
  },
  {
    id: "6",
    title: "HTML and Web Design",
    category: "Web Development",
    instructor: "John",
    level: "Beginner",
    duration: "3 weeks",
    price: 299,
    rating: 4.2,
    image: htmlImage,
    description:
      "Learn to create web pages using HTML elements, links, images, forms, and semantic tags.",
    lessons: [
      "Introduction to HTML",
      "Headings and Paragraphs",
      "Links and Images",
      "Lists and Tables",
      "Forms and Input Fields",
      "Creating a Simple Website",
    ],
  },
  {
    id: "7",
    title: "English Literature Basics",
    category: "Language",
    instructor: "Joseph",
    level: "Beginner",
    duration: "4 weeks",
    price: 249,
    rating: 4.1,
    image: englishImage,
    description:
      "Explore poetry, short stories, drama, and basic literary concepts.",
    lessons: [
      "Introduction to Literature",
      "Understanding Poetry",
      "Elements of a Short Story",
      "Characters and Themes",
      "Introduction to Drama",
      "Reading and Text Analysis",
    ],
  },
  {
    id: "8",
    title: "Introduction to Data Science",
    category: "Data Science",
    instructor: "Noah",
    level: "Intermediate",
    duration: "8 weeks",
    price: 699,
    rating: 4.8,
    image: dataScienceImage,
    description:
      "Learn data preparation, basic analysis, statistics, and data visualization.",
    lessons: [
      "What Is Data Science?",
      "Introduction to Data",
      "Data Cleaning Basics",
      "Exploratory Data Analysis",
      "Basic Statistics",
      "Data Visualization",
    ],
  },
  {
    id: "9",
    title: "SQL and Database Basics",
    category: "Database",
    instructor: "Stanly",
    level: "Beginner",
    duration: "4 weeks",
    price: 349,
    rating: 4.5,
    image: sqlImage,
    description:
      "Learn database concepts and SQL commands to create tables and manage data.",
    lessons: [
      "Introduction to Databases",
      "Creating Tables",
      "SELECT and WHERE Queries",
      "INSERT, UPDATE and DELETE",
      "Sorting and Aggregate Functions",
      "Introduction to Joins",
    ],
  },
];

export default courses;