import { describe, expect, it } from "vitest";
import { validateEmail } from "./validators";

describe("validateEmail", () => {
  it("accepts valid email addresses", () => {
    expect(validateEmail("user@example.com")).toBe(true);
    expect(validateEmail("first.last+tag@sub.domain.jp")).toBe(true);
  });

  it("rejects invalid email addresses", () => {
    expect(validateEmail("invalid-email")).toBe(false);
    expect(validateEmail("no-domain@")).toBe(false);
    expect(validateEmail("missing@dot")).toBe(false);
    expect(validateEmail("")).toBe(false);
  });
});
