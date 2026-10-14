
import { useState } from "react";
import { Search } from "lucide-react";
import courses from "../data/courses";
import CourseCard from "../components/CourseCard";
import "../styles/courses.css";

function Courses() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    ...new Set(courses.map((course) => course.category)),
  ];

  const filteredCourses = courses.filter((course) => {
    const search = searchTerm.toLowerCase();

    const matchesSearch =
      course.title.toLowerCase().includes(search) ||
      course.instructor.toLowerCase().includes(search);

    const matchesCategory =
      selectedCategory === "All" ||
      course.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <main className="courses-page">
      <section className="courses-header">
        <div className="courses-header-inner">
          <p className="courses-label">LEARN SOMETHING NEW</p>
          <h1>Explore Our Courses</h1>
          <p>
            Find the right course for you and start learning new skills.
          </p>
        </div>
      </section>

      <section className="courses-content">
        <div className="courses-toolbar">
          <div className="courses-search">
            <Search size={18} />

            <input
              type="text"
              placeholder="Search courses or instructors..."
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
            />
          </div>

          <select
            value={selectedCategory}
            onChange={(event) => setSelectedCategory(event.target.value)}
            aria-label="Filter by category"
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category === "All" ? "All Categories" : category}
              </option>
            ))}
          </select>
        </div>

        <div className="courses-results-heading">
          <h2>Available Courses</h2>
          <span>
            {filteredCourses.length}{" "}
            {filteredCourses.length === 1 ? "course" : "courses"} found
          </span>
        </div>

        {filteredCourses.length > 0 ? (
          <div className="courses-list-grid">
            {filteredCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        ) : (
          <div className="courses-empty">
            <h3>No courses found</h3>
            <p>Try a different search or category.</p>

            <button
              type="button"
              onClick={() => {
                setSearchTerm("");
                setSelectedCategory("All");
              }}
            >
              Clear Filters
            </button>
          </div>
        )}
      </section>
    </main>
  );
}

export default Courses;
