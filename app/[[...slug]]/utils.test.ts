import { describe, expect, it } from "vitest";
import { matchPath } from "./utils";

describe("matchPath", () => {
  it("matches static path", () => {
    const result = matchPath(["about"], "/about");
    expect(result).toEqual({ matched: true, params: {} });
  });

  it("matches dynamic param", () => {
    const result = matchPath(["product", "42"], "/product/:id");
    expect(result).toEqual({ matched: true, params: { id: "42" } });
  });

  it("does not match when length differs", () => {
    const result = matchPath(["product"], "/product/:id");
    expect(result.matched).toBe(false);
  });

  it("does not match wrong static path", () => {
    const result = matchPath(["contact"], "/about");
    expect(result.matched).toBe(false);
  });

  it("matches multiple dynamic params", () => {
    const result = matchPath(
      ["users", "123", "comments", "456"],
      "/users/:userId/comments/:commentId"
    );
    expect(result).toEqual({
      matched: true,
      params: { userId: "123", commentId: "456" },
    });
  });
});
