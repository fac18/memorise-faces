import React from "react";
import { render } from "@testing-library/react";
import Header from "./header"

test("Header component renders correctly", () => {
    const { getByText } = render(<Header/>);
    getByText("Memorise FACes");
});
