/*
 * @Todo: 请补充模块描述
 *
 * @Author: grayson<grayson.gao@bvox.com>
 * @Date: 2024-09-02 11:12:21
 *
 * Copyright © 2019-2024 bvox.com. All Rights Reserved.
 */

import { render, screen } from "@testing-library/react";
import App from "./components/App";

test("renders learn react link", () => {
  // @ts-ignore
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
