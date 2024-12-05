import { render, screen } from "@testing-library/react";
import { Navbar } from "./Navbar";
import { MemoryRouter } from "react-router-dom";
import { CartProvider } from "../../context/CartContext";
import { describe, expect, it } from "vitest";

describe('Navbar Component', () => {
  it('renders all navigation links', () => {
    render(
      <MemoryRouter>
        <CartProvider>
          <Navbar />
        </CartProvider>
      </MemoryRouter>
    );

    const links = screen.getAllByRole('link');
    expect(links).toHaveLength(2);
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Cart')).toBeInTheDocument();
  });
});