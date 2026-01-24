import "./Status.css";

export default function Status() {
  return (
    <div className="page">
      <div className="container grid">
        <div>
          <h1 className="h1">Status</h1>
          <p className="p">Recent submissions</p>
        </div>

        <div className="card card-pad">
          <div className="table-wrap">
            <table className="tbl">
              <thead>
                <tr>
                  <th>When</th>
                  <th>Who</th>
                  <th>Problem</th>
                  <th className="hide-md">Lang</th>
                  <th>Verdict</th>
                  <th className="hide-md">Time</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>2 min ago</td>
                  <td>rahul123</td>
                  <td><a className="link" href="/problems/1">A. Two Sum</a></td>
                  <td className="hide-md">C++</td>
                  <td><span className="st ok">Accepted</span></td>
                  <td className="hide-md">31 ms</td>
                </tr>
                <tr>
                  <td>10 min ago</td>
                  <td>devX</td>
                  <td><a className="link" href="/problems/3">C. Graph Paths</a></td>
                  <td className="hide-md">Java</td>
                  <td><span className="st wa">Wrong Answer</span></td>
                  <td className="hide-md">—</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
}
