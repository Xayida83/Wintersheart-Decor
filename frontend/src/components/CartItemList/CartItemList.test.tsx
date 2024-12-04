import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { CartItemList } from "./CartItemList";
import { MemoryRouter } from "react-router-dom";

const mockItems = [
  { id: 1, name: "Item 1", price: 10, totalPrice: 20, quantity: 2, imageUrl: "image1.jpg" },
  { id: 2, name: "Item 2", price: 15, totalPrice: 15, quantity: 1, imageUrl: "image2.jpg" },
];

describe("CartItemList", () => {
  it("renders cart items correctly", () => {
    render(
      <MemoryRouter>
        <CartItemList items={mockItems} onRemove={() => {}} />
      </MemoryRouter>
    );

    // Kontrollera att objekten i listan renderas
    expect(screen.getByText("Item 1")).toBeInTheDocument();
    expect(screen.getByText("Item 2")).toBeInTheDocument();
    expect(screen.getByText("Price: $20")).toBeInTheDocument();
    expect(screen.getByText("Price: $15")).toBeInTheDocument();
    expect(screen.getByText("2")).toBeInTheDocument();
    expect(screen.getByText("1")).toBeInTheDocument();
  });

  it("calls onRemove with correct id when Remove button is clicked", () => {
    const mockOnRemove = vi.fn();

    render(
      <MemoryRouter>
        <CartItemList items={mockItems} onRemove={mockOnRemove} />
      </MemoryRouter>
    );

    //* Hämta alla Remove-knappar
    const removeButtons = screen.getAllByText("Remove");

    //* Klicka på första knappen
    fireEvent.click(removeButtons[0]);

    //* Kontrollera att onRemove anropades med rätt id
    expect(mockOnRemove).toHaveBeenCalledWith(1);

    //* Klicka på andra knappen
    fireEvent.click(removeButtons[1]);

    //* Kontrollera att onRemove anropades med rätt id igen
    expect(mockOnRemove).toHaveBeenCalledWith(2);
  });
});
