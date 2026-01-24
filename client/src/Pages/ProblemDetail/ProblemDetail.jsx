import "./ProblemDetail.css";

export default function ProblemDetail() {
  return (
    <div className="page">
      <div className="container grid pd">
        <div className="pd__main card card-pad">
          <div className="pd__header">
            <div>
              <h1 className="h1">A. Two Sum</h1>
              <p className="p">Time limit: 1s • Memory: 256MB</p>
            </div>
            <button className="btn">Submit</button>
          </div>

          <div className="pd__section">
            <h2 className="h2">Problem</h2>
            <p className="pd__text">
              Given an array of integers, find indices of two numbers such that they add up to a target.
            </p>
          </div>

          <div className="pd__grid">
            <div className="pd__box">
              <h3 className="pd__boxTitle">Input</h3>
              <p className="pd__text">n, array a, and target.</p>
            </div>
            <div className="pd__box">
              <h3 className="pd__boxTitle">Output</h3>
              <p className="pd__text">Two indices (1-based).</p>
            </div>
          </div>

          <div className="pd__section">
            <h2 className="h2">Example</h2>
            <pre className="pd__pre">
Input
4
2 7 11 15
9

Output
1 2
            </pre>
          </div>
        </div>

        <aside className="pd__side card card-pad">
          <h2 className="h2">Meta</h2>
          <div className="pd__meta">
            <div className="pd__row">
              <span className="pd__k">Difficulty</span>
              <span className="badge">800</span>
            </div>
            <div className="pd__row">
              <span className="pd__k">Tags</span>
              <div className="pd__tags">
                <span className="tag">arrays</span>
                <span className="tag">hashing</span>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
