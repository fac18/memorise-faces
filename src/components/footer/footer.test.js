import React from "react";
import { render } from "@testing-library/react";
import Footer from "./footer";

test("The Footer renders as expected", () => {
  const { getByText } = render(<Footer />);
  getByText("Created by Renata and Alex powered by React ");
});
