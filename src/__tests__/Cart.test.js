import { fireEvent, render, screen, act } from "@testing-library/react";
import RestaurantMenu from "../components/RestaurantMenu";
import Header from "../components/Header";
import Cart from "../components/Cart";
import MOCK_DATA from "../__tests__/mocks/resMenuMock.json";
import { Provider } from "react-redux";
import appStore from "../utils/reduxStore/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

test("should load Restaurant Menu Component", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantMenu />
          <Cart />
        </Provider>
      </BrowserRouter>
    )
  );

  const accordionHeader = screen.getByText("Pot Rice (3)");

  fireEvent.click(accordionHeader);

  const foodItems = screen.getAllByTestId("foodItems");

  expect(foodItems.length).toBe(3);

  const addBtns = screen.getAllByRole("button", { name: "Add+" });

  fireEvent.click(addBtns[0]);

  expect(screen.getByText("🛒(1)")).toBeInTheDocument();

  expect(screen.getAllByTestId("foodItems").length).toBe(4);

  fireEvent.click(screen.getByRole("button", { name: "Clear Cart" }));

  expect(screen.getAllByTestId("foodItems").length).toBe(3);

  expect(screen.getByText("Add Some Items To Cart")).toBeInTheDocument();
});
