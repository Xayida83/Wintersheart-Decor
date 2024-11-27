import { render, screen } from "@testing-library/react";
import { Navbar } from "./Navbar";
import { BrowserRouter as Router} from "react-router-dom";
import { describe, expect, it } from "vitest";

describe('Navbar Component', () => {
  it('renders all navigation links', () => {
    render(
      <Router>
        <Navbar />
      </Router>
    );

    const links = screen.getAllByRole('link');
    expect(links).toHaveLength(2);
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Go Back')).toBeInTheDocument();
    expect(screen.getByText('Cart')).toBeInTheDocument();
  });
});