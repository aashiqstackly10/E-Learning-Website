
import { Link } from "react-router-dom";
import {
  ArrowRight,
  BookOpen,
  GraduationCap,
  Users,
  Award,
  PlayCircle,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import courses from "../data/courses";
import CourseCard from "../components/CourseCard";
import "../styles/home.css";

function Home() {
  const featuredCourses = courses.slice(0, 3);

  const benefits = [
    {
      icon: BookOpen,
      title: "Practical Courses",
      description:
        "Learn useful skills through structured lessons designed to help you grow.",
    },
    {
      icon: Users,
      title: "Learn at Your Pace",
      description:
        "Study when it suits you and make progress according to your own schedule.",
    },
    {
      icon: Award,
      title: "Build Your Skills",
      description:
        "Strengthen your knowledge and prepare yourself for new opportunities.",
    },
  ];

  return (
    <main className="lh-home">
      <section className="lh-hero">
        <div className="lh-hero-inner">
          <div className="lh-hero-content">
            <div className="lh-hero-badge">
              <Sparkles size={16} />
              <span>Your journey starts here</span>
            </div>

            <h1>
              Learn something new.
              <br />
              <span>Change your future.</span>
            </h1>

            <p className="lh-hero-description">
              Discover courses, develop valuable skills, and take the next
              step toward your goals with LearnHub.
            </p>

            <div className="lh-hero-actions">
              <Link to="/courses" className="lh-primary-btn">
                Explore Courses <ArrowRight size={18} />
              </Link>

              <Link to="/register" className="lh-secondary-btn">
                Get Started
              </Link>
            </div>

            <div className="lh-hero-trust">
              <div className="lh-trust-icon">
                <GraduationCap size={21} />
              </div>
              <div>
                <strong>Learn at your own pace</strong>
                <span>Build skills one lesson at a time</span>
              </div>
            </div>
          </div>

          <div className="lh-hero-visual">
            <div className="lh-visual-decoration lh-decoration-one" />
            <div className="lh-visual-decoration lh-decoration-two" />

            <div className="lh-learning-card">
              <div className="lh-learning-card-top">
                <div className="lh-mini-logo">
                  <BookOpen size={21} />
                </div>

                <span className="lh-live-label">
                  <span className="lh-live-dot" />
                  Learning made simple
                </span>
              </div>

              <div className="lh-learning-illustration">
                <div className="lh-illustration-circle">
                  <GraduationCap size={76} strokeWidth={1.5} />
                </div>

                <div className="lh-illustration-book book-one" />
                <div className="lh-illustration-book book-two" />
                <div className="lh-illustration-book book-three" />
              </div>

              <div className="lh-learning-card-bottom">
                <div>
                  <span className="lh-card-eyebrow">
                    YOUR NEXT CHAPTER
                  </span>
                  <h3>Knowledge opens doors.</h3>
                  <p>Start learning today.</p>
                </div>

                <div className="lh-play-icon">
                  <PlayCircle size={30} />
                </div>
              </div>
            </div>

            {/* Both small boxes are below the large card */}
            <div className="lh-hero-notes">
              <div className="lh-floating-note lh-note-top">
                <span className="lh-floating-icon">
                  <CheckCircle2 size={20} />
                </span>
                <div>
                  <strong>Keep growing</strong>
                  <span>One step at a time</span>
                </div>
              </div>

              <div className="lh-floating-note lh-note-bottom">
                <div className="lh-floating-avatar">
                  <GraduationCap size={21} />
                </div>
                <div>
                  <strong>Your future self</strong>
                  <span>Will thank you.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="lh-stats">
        <div className="lh-stats-inner">
          <div className="lh-stat-item">
            <BookOpen size={25} />
            <div>
              <strong>9+</strong>
              <span>Courses to explore</span>
            </div>
          </div>

          <div className="lh-stat-item">
            <GraduationCap size={27} />
            <div>
              <strong>Learn</strong>
              <span>New skills every day</span>
            </div>
          </div>

          <div className="lh-stat-item">
            <Users size={25} />
            <div>
              <strong>Anytime</strong>
              <span>Learn at your pace</span>
            </div>
          </div>

          <div className="lh-stat-item">
            <Award size={25} />
            <div>
              <strong>Grow</strong>
              <span>Work toward your goals</span>
            </div>
          </div>
        </div>
      </section>

      <section className="lh-featured-section">
        <div className="lh-section-heading">
          <div>
            <span className="lh-section-label">START LEARNING</span>
            <h2>Explore popular courses</h2>
            <p>
              Find a subject you love and start building skills that matter.
            </p>
          </div>

          <Link to="/courses" className="lh-view-all">
            View all courses <ArrowRight size={17} />
          </Link>
        </div>

        <div className="lh-featured-grid">
          {featuredCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </section>

      <section className="lh-benefits-section">
        <div className="lh-benefits-heading">
          <span className="lh-section-label">WHY LEARNHUB?</span>
          <h2>A better way to learn</h2>
          <p>
            Make learning part of your everyday life with a platform built
            around your progress.
          </p>
        </div>

        <div className="lh-benefits-grid">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;

            return (
              <article className="lh-benefit-card" key={benefit.title}>
                <div className={`lh-benefit-icon benefit-${index + 1}`}>
                  <Icon size={27} />
                </div>
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="lh-cta-section">
        <div className="lh-cta-content">
          <span className="lh-cta-label">
            <Sparkles size={15} /> YOUR NEXT CHAPTER STARTS NOW
          </span>

          <h2>Invest in yourself. Start learning today.</h2>

          <p>
            Take the first step toward your goals. Discover a course and
            start learning at your own pace.
          </p>

          <Link to="/register" className="lh-cta-button">
            Create Your Free Account <ArrowRight size={18} />
          </Link>
        </div>

        <div className="lh-cta-decoration">
          <GraduationCap size={100} strokeWidth={1.2} />
        </div>
      </section>
    </main>
  );
}

export default Home;
