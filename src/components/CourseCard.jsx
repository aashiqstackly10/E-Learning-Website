
import { Link } from "react-router-dom";
import { Clock, Star, ArrowUpRight } from "lucide-react";

function CourseCard({ course }) {
  return (
    <article className="course-card">
      <Link
        to={`/courses/${course.id}`}
        className="course-image-wrap"
        aria-label={`View ${course.title}`}
      >
        <img
          className="course-image"
          src={course.image}
          alt={course.title}
          loading="lazy"
          onError={(event) => {
            event.currentTarget.style.visibility = "hidden";
          }}
        />
        <span className="course-category">{course.category}</span>
      </Link>

      <div className="course-content">
        <div className="course-meta">
          <span>
            <Clock size={13} style={{ display: "inline", marginRight: 4 }} />
            {course.duration}
          </span>

          <span className="course-rating">
            <Star
              size={13}
              fill="currentColor"
              style={{ display: "inline", marginRight: 4 }}
            />
            {course.rating}
          </span>
        </div>

        <h3 className="course-title">
          <Link to={`/courses/${course.id}`}>{course.title}</Link>
        </h3>

        <p className="course-instructor">
          By {course.instructor} · {course.level}
        </p>

        <div className="course-bottom">
          <div className="course-price">
            ${course.price}
            <small>One-time price</small>
          </div>

          <Link
            to={`/courses/${course.id}`}
            className="btn btn-primary"
          >
            View Course <ArrowUpRight size={15} />
          </Link>
        </div>
      </div>
    </article>
  );
}

export default CourseCard;
