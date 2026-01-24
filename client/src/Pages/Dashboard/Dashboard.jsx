import Navbar from "../../Component/Navbar/Navbar";
import "../Dashboard/Dashboard.css";

export default function Dashboard() {
  return (
    <>
      <Navbar />

      <div className="dash">
        <div className="container">
          {/* Top hero */}
          <div className="dash__hero card">
            <div className="dash__heroLeft">
              <h1 className="dash__title">Welcome to CodeArena</h1>
              <p className="dash__sub">
                Practice problems, join contests, and track your submissions — Codeforces style.
              </p>

              <div className="dash__cta">
                <a className="btn" href="/problems">Start Solving</a>
                <a className="btn btn--ghost" href="/status">View Status</a>
              </div>

              <div className="dash__stats">
                <div className="dash__stat">
                  <div className="dash__num">1,250+</div>
                  <div className="dash__lbl">Problems</div>
                </div>
                <div className="dash__stat">
                  <div className="dash__num">120+</div>
                  <div className="dash__lbl">Contests</div>
                </div>
                <div className="dash__stat">
                  <div className="dash__num">50k+</div>
                  <div className="dash__lbl">Submissions</div>
                </div>
              </div>
            </div>

            <div className="dash__heroRight">
              <div className="dash__panel">
                <div className="dash__panelTitle">Quick Links</div>

                <a className="dash__link" href="/problems">
                  <span>📘 Problems</span>
                  <span className="dash__arrow">→</span>
                </a>
                <a className="dash__link" href="/status">
                  <span>✅ Status</span>
                  <span className="dash__arrow">→</span>
                </a>
                <a className="dash__link" href="/contests">
                  <span>🏆 Contests</span>
                  <span className="dash__arrow">→</span>
                </a>
              </div>
            </div>
          </div>

          {/* Two columns */}
          <div className="dash__grid">
            {/* Recent contests */}
            <div className="card card-pad">
              <div className="dash__sectionHead">
                <h2 className="dash__h2">Upcoming Contests</h2>
                <a className="dash__more" href="/contests">See all</a>
              </div>

              <div className="dash__list">
                <div className="dash__item">
                  <div>
                    <div className="dash__itemTitle">CodeArena Round #1</div>
                    <div className="dash__muted">Starts in 2 days • 2 hours</div>
                  </div>
                  <span className="badge">Register</span>
                </div>

                <div className="dash__item">
                  <div>
                    <div className="dash__itemTitle">Beginner Contest</div>
                    <div className="dash__muted">Starts in 5 days • 90 min</div>
                  </div>
                  <span className="badge">Register</span>
                </div>

                <div className="dash__item">
                  <div>
                    <div className="dash__itemTitle">Practice Marathon</div>
                    <div className="dash__muted">Starts in 9 days • 3 hours</div>
                  </div>
                  <span className="badge">Register</span>
                </div>
              </div>
            </div>

            {/* Recent activity */}
            <div className="card card-pad">
              <div className="dash__sectionHead">
                <h2 className="dash__h2">Recent Activity</h2>
                <a className="dash__more" href="/status">Open status</a>
              </div>

              <div className="dash__list">
                <div className="dash__item">
                  <div>
                    <div className="dash__itemTitle">A. Two Sum</div>
                    <div className="dash__muted">Accepted • 2 min ago</div>
                  </div>
                  <span className="pill pill--ok">AC</span>
                </div>

                <div className="dash__item">
                  <div>
                    <div className="dash__itemTitle">C. Graph Paths</div>
                    <div className="dash__muted">Wrong Answer • 15 min ago</div>
                  </div>
                  <span className="pill pill--wa">WA</span>
                </div>

                <div className="dash__item">
                  <div>
                    <div className="dash__itemTitle">B. String Game</div>
                    <div className="dash__muted">Running • 30 min ago</div>
                  </div>
                  <span className="pill pill--run">RUN</span>
                </div>
              </div>
            </div>
          </div>

          {/* Footer small */}
          <p className="dash__footer">
            Tip: Go to <b>Problems</b> to start solving. Later you can add login/signup + backend.
          </p>
        </div>
      </div>
    </>
  );
}
