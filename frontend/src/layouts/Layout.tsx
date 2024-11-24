import {Outlet, Link} from 'react-router-dom';

export const Layout = () => {
  return (
    <div>
      <main>
        <Outlet />
      </main>
      <header>
        <nav>
          <Link to="/">Home</Link> | <Link to="/cart">Cart</Link>
        </nav>
      </header>
  </div>
  )
}