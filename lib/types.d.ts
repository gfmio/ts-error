/// <reference types="node" />
export declare class ExtendableError extends Error {
    // public static prepareStackTrace?: (err: Error, stackTraces: NodeJS.CallSite[]) => any;
    // public static stackTraceLimit: number;
    // // tslint:disable-next-line:ban-types
    // public static captureStackTrace(targetObject: Object, constructorOpt?: Function): void;

    public name: string;
    public message: string;
    public stack?: string;
}
export default ExtendableError;
