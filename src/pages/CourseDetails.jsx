
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Clock, Star, BookOpen, CheckCircle } from "lucide-react";
import courses from "../data/courses";
import "../styles/course-details.css";

function CourseDetails() {
  const { id } = useParams();
  const course = courses.find((item) => item.id === id);

  const [enrolled, setEnrolled] = useState(() => {
    try {
      const savedCourses = JSON.parse(
        localStorage.getItem("learnhub-enrolled") || "[]"
      );
      return savedCourses.some((item) => item.id === id);
    } catch {
      return false;
    }
  });

  function handleEnrollment() {
    try {
      const savedCourses = JSON.parse(
        localStorage.getItem("learnhub-enrolled") || "[]"
      );

      const alreadyEnrolled = savedCourses.some(
        (item) => item.id === course.id
      );

      if (!alreadyEnrolled) {
        savedCourses.push({
          id: course.id,
          title: course.title,
          image: course.image,
          instructor: course.instructor,
          duration: course.duration,
          progress: 0,
        });

        localStorage.setItem(
          "learnhub-enrolled",
          JSON.stringify(savedCourses)
        );
      }

      setEnrolled(true);
    } catch {
      alert("Unable to save your enrollment. Please try again.");
    }
  }

  if (!course) {
    return (
      <main className="course-details-page">
        <div className="course-not-found">
          <h2>Course not found</h2>
          <p>The course you are looking for does not exist.</p>
          <Link to="/courses">Back to Courses</Link>
        </div>
      </main>
    );
  }

  return (
    <main className="course-details-page">
      <section className="course-details-header">
        <div className="course-details-header-inner">
          <Link to="/courses" className="course-back-link">
            ← Back to Courses
          </Link>

          <span className="course-details-category">
            {course.category}
          </span>

          <h1>{course.title}</h1>

          <p className="course-details-description">
            {course.description}
          </p>

          <div className="course-details-meta">
            <span>
              <Star size={17} />
              {course.rating} Rating
            </span>

            <span>Instructor: {course.instructor}</span>

            <span>
              <Clock size={17} />
              {course.duration}
            </span>
          </div>
        </div>
      </section>

      <section className="course-details-layout">
        <div className="course-details-main">
          <img
            src={course.image}
            alt={course.title}
            className="course-details-image"
          />

          <section className="course-about-section">
            <h2>About This Course</h2>
            <p>{course.description}</p>
          </section>

          <section className="course-lessons-section">
            <h2>Course Content</h2>

            <p className="course-lesson-count">
              {course.lessons?.length || 0} lessons included
            </p>

            {course.lessons?.length > 0 ? (
              <div className="course-lesson-list">
                {course.lessons.map((lesson, index) => (
                  <div className="course-lesson" key={index}>
                    <span className="course-lesson-number">
                      {index + 1}
                    </span>

                    <span className="course-lesson-title">
                      {lesson}
                    </span>

                    <BookOpen size={17} />
                  </div>
                ))}
              </div>
            ) : (
              <p>Course lessons will be added soon.</p>
            )}
          </section>
        </div>

        <aside className="course-enrollment-card">
          <img src={course.image} alt="" />

          <div className="course-enrollment-content">
            <p className="course-enrollment-label">COURSE PRICE</p>

            <h2>₹{course.price}</h2>

            <p className="course-enrollment-note">
              One-time payment for course access.
            </p>

            <div className="course-enrollment-info">
              <p>
                <Clock size={17} />
                Duration: {course.duration}
              </p>

              <p>
                <BookOpen size={17} />
                {course.lessons?.length || 0} lessons
              </p>
            </div>

            {enrolled ? (
              <>
                <div className="course-enrolled-message">
                  <CheckCircle size={19} />
                  Successfully enrolled
                </div>

                <Link
                  to="/my-learning"
                  className="course-learning-button"
                >
                  Go to My Learning
                </Link>
              </>
            ) : (
              <button
                type="button"
                className="course-enroll-button"
                onClick={handleEnrollment}
              >
                Enroll Now
              </button>
            )}

            <p className="course-enrollment-footer">
              Learn at your own pace.
            </p>
          </div>
        </aside>
      </section>
    </main>
  );
}

export default CourseDetails;
