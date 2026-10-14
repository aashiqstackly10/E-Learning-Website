import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BookOpen, Clock, GraduationCap, ArrowRight } from "lucide-react";

import "../styles/my-learning.css";

const STORAGE_KEY = "learnhub-enrolled";

function readEnrolledCourses() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
    return Array.isArray(saved) ? saved : [];
  } catch {
    return [];
  }
}

function MyLearning() {
  const [enrolledCourses, setEnrolledCourses] = useState(
    readEnrolledCourses
  );

  useEffect(() => {
    function refreshCourses() {
      setEnrolledCourses(readEnrolledCourses());
    }

    window.addEventListener("storage", refreshCourses);
    window.addEventListener("focus", refreshCourses);

    return () => {
      window.removeEventListener("storage", refreshCourses);
      window.removeEventListener("focus", refreshCourses);
    };
  }, []);

  function updateProgress(courseId) {
    const updatedCourses = enrolledCourses.map((course) => {
      if (course.id !== courseId) return course;

      return {
        ...course,
        progress: Math.min((Number(course.progress) || 0) + 25, 100),
      };
    });

    setEnrolledCourses(updatedCourses);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedCourses));
  }

  const completedCount = enrolledCourses.filter(
    (course) => Number(course.progress) >= 100
  ).length;

  return (
    <main className="learning-page">
      <section className="learning-hero">
        <div>
          <p className="other-page-label">YOUR LEARNING SPACE</p>
          <h1>My Learning</h1>
          <p>Pick up where you left off and keep building your skills.</p>
        </div>

        <div className="learning-hero-icon">
          <GraduationCap size={54} strokeWidth={1.5} />
        </div>
      </section>

      <section className="learning-content">
        <div className="learning-stats">
          <div className="learning-stat-card">
            <BookOpen size={23} />
            <div>
              <span>Enrolled Courses</span>
              <strong>{enrolledCourses.length}</strong>
            </div>
          </div>

          <div className="learning-stat-card">
            <GraduationCap size={23} />
            <div>
              <span>Completed Courses</span>
              <strong>{completedCount}</strong>
            </div>
          </div>
        </div>

        <div className="learning-section-heading">
          <div>
            <h2>My Courses</h2>
            <p>Your enrolled courses appear here.</p>
          </div>

          <Link to="/courses" className="learning-browse-link">
            Browse Courses <ArrowRight size={17} />
          </Link>
        </div>

        {enrolledCourses.length === 0 ? (
          <div className="learning-empty">
            <div className="learning-empty-icon">
              <BookOpen size={35} />
            </div>
            <h3>You haven't enrolled in any courses yet</h3>
            <p>
              Explore our available courses and choose what you would like
              to learn.
            </p>
            <Link to="/courses" className="other-primary-button">
              Explore Courses
            </Link>
          </div>
        ) : (
          <div className="learning-course-grid">
            {enrolledCourses.map((course) => {
              const progress = Math.min(
                Math.max(Number(course.progress) || 0, 0),
                100
              );

              return (
                <article className="learning-course-card" key={course.id}>
                  <img
                    src={course.image}
                    alt={course.title}
                    className="learning-course-image"
                  />

                  <div className="learning-course-body">
                    <span className="learning-course-tag">
                      {progress === 100 ? "Completed" : "Enrolled"}
                    </span>

                    <h3>{course.title}</h3>
                    <p className="learning-instructor">
                      Instructor: {course.instructor}
                    </p>

                    <div className="learning-duration">
                      <Clock size={16} />
                      {course.duration}
                    </div>

                    <div className="learning-progress-heading">
                      <span>Course Progress</span>
                      <strong>{progress}%</strong>
                    </div>

                    <div
                      className="learning-progress-track"
                      role="progressbar"
                      aria-valuenow={progress}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      aria-label={`${course.title} progress`}
                    >
                      <div
                        className="learning-progress-fill"
                        style={{ width: `${progress}%` }}
                      />
                    </div>

                    <div className="learning-course-actions">
                      <Link
                        to={`/courses/${course.id}`}
                        className="learning-continue-link"
                      >
                        View Course <ArrowRight size={16} />
                      </Link>

                      {progress < 100 && (
                        <button
                          type="button"
                          className="learning-progress-button"
                          onClick={() => updateProgress(course.id)}
                        >
                          Update Progress
                        </button>
                      )}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </section>
    </main>
  );
}

export default MyLearning;