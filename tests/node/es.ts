/**
 * ES Tests (for node.js)
 */

// tslint:disable:no-implicit-dependencies no-submodule-imports max-classes-per-file

import * as chai from "chai";
import "mocha";

const expect = chai.expect;

import { ExtendableError } from "../../lib/es";

// Test objects

class CustomError extends ExtendableError {
  constructor(message?: string) {
    super(message);
  }
}

const esExtendableErrorMessage = "ES extendable error";
const esCustomErrorMessage = "ES custom error";

const extendableError = new ExtendableError(esExtendableErrorMessage);
const customError = new CustomError(esCustomErrorMessage);

// Tests

// ES ExtendableError

describe("ES: An ExtendableError", () => {
  it("should be instance of Error", () => {
    expect(extendableError instanceof Error).to.equal(true);
  });
});

describe("ES: An ExtendableError", () => {
  it("should be instance of ExtendableError", () => {
    expect(extendableError instanceof ExtendableError).to.equal(true);
  });
});

describe("ES: An ExtendableError", () => {
  it("should not be instance of CustomError", () => {
    expect(extendableError instanceof CustomError).to.equal(false);
  });
});

describe("ES: An ExtendableError", () => {
  it('should have the name "ExtendableError"', () => {
    expect(extendableError.name).to.equal("ExtendableError");
  });
});

describe("ES: An ExtendableError", () => {
  it("should have a stack trace starting with its name", () => {
    expect(extendableError.stack.startsWith(extendableError.name)).to.equal(
      true,
    );
  });
});

describe("ES: An ExtendableError", () => {
  it("should have a string representation starting with its name", () => {
    expect(
      extendableError.toString().startsWith(extendableError.name),
    ).to.equal(true);
  });
});

describe("ES: An ExtendableError", () => {
  it("should have the message property passed in its constructor", () => {
    expect(extendableError.message).to.equal(esExtendableErrorMessage);
  });
});

// ES CustomError

describe("ES: A CustomError", () => {
  it("should be instance of Error", () => {
    expect(customError instanceof Error).to.equal(true);
  });
});

describe("ES: A CustomError", () => {
  it("should be instance of CustomError", () => {
    expect(customError instanceof CustomError).to.equal(true);
  });
});

describe("ES: A CustomError", () => {
  it("should be instance of CustomError", () => {
    expect(customError instanceof CustomError).to.equal(true);
  });
});

describe("ES: A CustomError", () => {
  it('should have the name "CustomError"', () => {
    expect(customError.name).to.equal("CustomError");
  });
});

describe("ES: A CustomError", () => {
  it("should have a stack trace starting with its name", () => {
    expect(customError.stack.startsWith(customError.name)).to.equal(true);
  });
});

describe("ES: A CustomError", () => {
  it("should have a string representation starting with its name", () => {
    expect(customError.toString().startsWith(customError.name)).to.equal(true);
  });
});

describe("ES: A CustomError", () => {
  it("should have the message property passed in its constructor", () => {
    expect(customError.message).to.equal(esCustomErrorMessage);
  });
});
