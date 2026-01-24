// import { Routes, Route, Navigate } from "react-router-dom";
// import Signin from "./Pages/Signin/Signin";
// import Signup from "./Pages/Signup/Signup";
// import Dashboard from "./Pages/Dashboard";

// export default function App() {
//   return (
//     <Routes>
//       <Route path="/" element={<Navigate to="/signin" />} />
//       <Route path="/signin" element={<Signin />} />
//       <Route path="/signup" element={<Signup />} />
//       <Route path="/dashboard" element={<Dashboard />} />
//     </Routes>
//   );
// }

import { Routes, Route, Navigate } from "react-router-dom";

import Dashboard from "./Pages/Dashboard/Dashboard";
import Problems from "./Pages/Problems/Problems";
import ProblemDetail from "./Pages/ProblemDetail/ProblemDetail";
import Status from "./Pages/Status/Status";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/problems" element={<Problems />} />
      <Route path="/problems/:id" element={<ProblemDetail />} />
      <Route path="/status" element={<Status />} />

      {/* optional: if user goes to unknown page */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}
