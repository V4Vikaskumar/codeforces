import "./Problems.css";

export default function Problems() {
  return (
    <div className="page">
      <div className="container grid problems">
        <div className="problems__top">
          <div>
            <h1 className="h1">Problems</h1>
            <p className="p">Browse and solve programming problems.</p>
          </div>

          <div className="problems__filters">
            <input className="input" placeholder="Search by title / tag..." />
            <select className="input">
              <option>Difficulty</option>
              <option>800+</option>
              <option>1200+</option>
              <option>1600+</option>
              <option>2000+</option>
            </select>
          </div>
        </div>

        <div className="card card-pad">
          <div className="table-wrap">
            <table className="tbl">
              <thead>
                <tr>
                  <th className="w-id">#</th>
                  <th>Title</th>
                  <th className="hide-md">Tags</th>
                  <th className="w-diff">Diff</th>
                  <th className="w-sol">Solved</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>A</td>
                  <td><a className="link" href="/problems/1">Two Sum</a></td>
                  <td className="hide-md">
                    <span className="tag">arrays</span>
                    <span className="tag">hashing</span>
                  </td>
                  <td><span className="badge">800</span></td>
                  <td>14520</td>
                </tr>

                <tr>
                  <td>B</td>
                  <td><a className="link" href="/problems/2">String Game</a></td>
                  <td className="hide-md">
                    <span className="tag">strings</span>
                    <span className="tag">greedy</span>
                  </td>
                  <td><span className="badge">1200</span></td>
                  <td>8211</td>
                </tr>

                <tr>
                  <td>C</td>
                  <td><a className="link" href="/problems/3">Graph Paths</a></td>
                  <td className="hide-md">
                    <span className="tag">graphs</span>
                    <span className="tag">dfs</span>
                  </td>
                  <td><span className="badge">1600</span></td>
                  <td>3920</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
}
