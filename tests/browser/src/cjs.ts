/**
 * Tests (in browser)
 */

// tslint:disable:no-implicit-dependencies no-submodule-imports max-classes-per-file

import { ExtendableError } from "../../../lib/cjs";
import {
  describe,
  expect,
  it,
  log,
  printConsoleStatement,
  printOverallResults,
  startsWith,
} from "./helpers";

// Test objects

class CustomError extends ExtendableError {
  constructor(message?: string) {
    super(message);
  }
}

const cjsExtendableErrorMessage = "CJS extendable error";
const cjsCustomErrorMessage = "CJS custom error";

const extendableError = new ExtendableError(cjsExtendableErrorMessage);
const customError = new CustomError(cjsCustomErrorMessage);

window.onload = () => {
  // Show helper message about console
  printConsoleStatement();

  // Tests

  // CJS ExtendableError

  describe("CJS: An ExtendableError", () => {
    it("should be instance of Error", () => {
      expect(extendableError instanceof Error).to.equal(true);
    });
  });

  describe("CJS: An ExtendableError", () => {
    it("should be instance of ExtendableError", () => {
      expect(extendableError instanceof ExtendableError).to.equal(true);
    });
  });

  describe("CJS: An ExtendableError", () => {
    it("should not be instance of CustomError", () => {
      expect(extendableError instanceof CustomError).to.equal(false);
    });
  });

  describe("CJS: An ExtendableError", () => {
    it('should have the name "ExtendableError"', () => {
      expect(extendableError.name).to.equal("ExtendableError");
    });
  });

  describe("CJS: An ExtendableError", () => {
    it("should have a string representation starting with its name", () => {
      expect(
        startsWith(extendableError.toString(), extendableError.name),
      ).to.equal(true);
    });
  });

  describe("CJS: An ExtendableError", () => {
    it("should have the message property passed in its constructor", () => {
      expect(extendableError.message).to.equal(cjsExtendableErrorMessage);
    });
  });

  // CJS CustomError

  describe("CJS: A CustomError", () => {
    it("should be instance of Error", () => {
      expect(customError instanceof Error).to.equal(true);
    });
  });

  describe("CJS: A CustomError", () => {
    it("should be instance of ExtendableError", () => {
      expect(customError instanceof ExtendableError).to.equal(true);
    });
  });

  describe("CJS: A CustomError", () => {
    it("should be instance of CustomError", () => {
      expect(customError instanceof CustomError).to.equal(true);
    });
  });

  describe("CJS: A CustomError", () => {
    it('should have the name "CustomError"', () => {
      expect(customError.name).to.equal("CustomError");
    });
  });

  describe("CJS: A CustomError", () => {
    it("should have a string representation starting with its name", () => {
      expect(startsWith(customError.toString(), customError.name)).to.equal(
        true,
      );
    });
  });

  describe("CJS: A CustomError", () => {
    it("should have the message property passed in its constructor", () => {
      expect(customError.message).to.equal(cjsCustomErrorMessage);
    });
  });

  // Sample usage
  try {
    log("This is how plain old errors get printed:");
    throw new Error("Plain Old Error Test");
  } catch (e) {
    log("e.toString() ", e.toString());
    log("e.stack ", e.stack);
    log("e ", e);
  }
  try {
    log("This is how ExtendableErrors get printed:");
    throw new ExtendableError("Extendable Error Test");
  } catch (e) {
    log("e.toString() ", e.toString());
    log("e.stack ", e.stack);
    log("e ", e);
  }
  try {
    log("This is how CustomErrors get printed:");
    throw new CustomError("Custom Error Test");
  } catch (e) {
    log("e.toString() ", e.toString());
    log("e.stack ", e.stack);
    log("e ", e);
  }

  // Print test results
  printOverallResults();
};
