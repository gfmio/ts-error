
const isBrowser = typeof window !== "undefined";
const hasConsole = typeof console !== "undefined";
const noConsole = typeof window.location.search !== "undefined" &&
    window.location.search.substr(0, 10) === "?noConsole";

const logToBrowser = (...items: any[]) => {
    for (const item of items) {
        const p = document.createElement("p");
        p.appendChild(document.createTextNode(item));
        document.body.appendChild(p);
    }
};

// log() uses console.log if defined and the url does not have the query string ?noConsole
// Otherwise, it prints to the document body in a web browser or does nothing otherwise (which should never happen).
export const log = hasConsole && !noConsole
    ? (...args: any[]) => {
        // Wrapper for Opera
        // tslint:disable-next-line:no-console
        console.log(...args);
    }
    : isBrowser ? logToBrowser : (...items: any[]) => { /* Cannot log */ };

export const printConsoleStatement = () => {
    const objectSetPrototypeOfIsDefined = typeof Object.setPrototypeOf === "function";
    log("Object.setPrototypeOf is " + (objectSetPrototypeOfIsDefined ? "" : "un") + "defined");
    const objectGetPrototypeOfIsDefined = typeof Object.getPrototypeOf === "function";
    log("Object.getPrototypeOf is " + (objectGetPrototypeOfIsDefined ? "" : "un") + "defined");
    const objectDefinePropertyIsDefined = typeof Object.defineProperty === "function";
    log("Object.defineProperty is " + (objectDefinePropertyIsDefined ? "" : "un") + "defined");
    const objectCreateIsDefined = typeof Object.create === "function";
    log("Object.create is " + (objectCreateIsDefined ? "" : "un") + "defined");
    const objectHasOwnPropertyIsDefined = typeof Object.prototype.hasOwnProperty === "function";
    log("Object.hasOwnProperty is " + (objectHasOwnPropertyIsDefined ? "" : "un") + "defined");

    if (isBrowser) {
        if (hasConsole) {
            if (noConsole) {
                // tslint:disable-next-line:max-line-length
                log("Your browser support console, but you have passed the noConsole flag. The test results will be displayed below.");
            } else {
                logToBrowser("Open your JavaScript console / developer tools to see the test results");
            }
        } else {
            log("This browser does not have a console. The test results will be displayed below.");
        }
    } else {
        log("You should only run this code in a browser. The node.js tests are provided separately.");
    }
};

// Test helpers

let failedTests: number = 0;
let passedTests: number = 0;

export const printOverallResults = () => {
    log(`${ passedTests + failedTests } tests`);
    log(`${ passedTests } passing`);
    log(`${ failedTests} failing`);
};

export const describe = (text: string, fn: () => void) => {
    log(`\n\n${text}`);
    fn();
};

export const it = (text: string, fn: () => void) => {
    try {
        fn();
        log(`${text}: Passing`);
        passedTests += 1;
    } catch (e) {
        log(`${text}: Failed\n${e.message}`);
        log(e);
        failedTests += 1;
    }
};

export const expect = <T>(value: T) => ({
    to: {
        equal: (assertedValue: any) => {
            if (assertedValue !== value) {
                const e = new Error(`Expected value: ${assertedValue}\nObserved value: ${value}`);
                (e as any).expectedValue = assertedValue;
                (e as any).observedValue = value;
                throw e;
            }
        },
    },
});

export const startsWith = (testString: any, startValue: any): boolean => {
    if (typeof testString !== "string") {
        throw new Error("testString is not a string");
    }
    if (typeof startValue !== "string") {
        throw new Error("startValue is not a string");
    }
    if (startValue === "") {
        return true;
    }
    if (typeof testString.startsWith === "function") {
        return testString.startsWith(startValue);
    }
    if (typeof testString.indexOf === "function") {
        return testString.indexOf(startValue) === 0;
    }
    return testString.substr(0, startValue.length) === startValue;
};
