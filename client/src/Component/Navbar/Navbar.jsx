import "./Navbar.css";

export default function Navbar() {
  return (
    <header className="nav">
      <div className="container nav__inner">
        <a className="nav__brand" href="/">
          <span className="nav__logo">CF</span>
          <span className="nav__name">CodeArena</span>
        </a>

        <nav className="nav__links hide-md">
          <a href="/contests">Contests</a>
          <a href="/problems">Problems</a>
          <a href="/status">Status</a>
          <a href="/profile">Profile</a>
        </nav>

        <div className="nav__actions">
          <input className="nav__search" placeholder="Search..." />
          <a className="nav__btn" href="/signin">Sign in</a>
        </div>
      </div>
    </header>
  );
}
