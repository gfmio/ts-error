/**
 * CJS Tests (for node.js)
 */

// tslint:disable:no-implicit-dependencies no-submodule-imports max-classes-per-file

import { expect } from "chai";
import { describe, it } from "mocha";

import { ExtendableError } from "../../lib/cjs";

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
  it("should have a stack trace starting with its name", () => {
    expect(extendableError.stack!.startsWith(extendableError.name)).to.equal(
      true,
    );
  });
});

describe("CJS: An ExtendableError", () => {
  it("should have a string representation starting with its name", () => {
    expect(
      extendableError.toString().startsWith(extendableError.name),
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
  it("should have a stack trace starting with its name", () => {
    expect(customError.stack!.startsWith(customError.name)).to.equal(true);
  });
});

describe("CJS: A CustomError", () => {
  it("should have a string representation starting with its name", () => {
    expect(customError.toString().startsWith(customError.name)).to.equal(true);
  });
});

describe("CJS: A CustomError", () => {
  it("should have the message property passed in its constructor", () => {
    expect(customError.message).to.equal(cjsCustomErrorMessage);
  });
});
