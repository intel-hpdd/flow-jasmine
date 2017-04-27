// @flow

type doneT = {
  (): void,
  fail: () => void
};

type doneCb = doneT => mixed;
type asyncCb = empty => Promise<mixed>;
type doneOrAsyncCb = doneCb & asyncCb;

declare function describe(name: string, fn: () => void): void;
declare function fdescribe(name: string, fn: () => void): void;
declare function xdescribe(name: string, fn: () => void): void;
declare function beforeEach(fn: doneOrAsyncCb): void;
declare function beforeEachAsync(fn: asyncCb): void;
declare function afterEach(fn: doneOrAsyncCb): void;
declare function it(name: string, fn: doneOrAsyncCb): void;
declare function itAsync(name: string, fn: asyncCb): void;
declare function fit(name: string, fn: doneOrAsyncCb): void;
declare function xit(name: string, fn: doneOrAsyncCb): void;
declare function expect(expected: mixed): expectation;
declare function spyOn(fn: any, name: string): spy;

type expectation = {
  not: expectation,
  toEqual: (actual: mixed) => void,
  toBe: (actual: mixed) => void,
  toBeNull: () => void,
  toHaveBeenCalledOnceWith: (...rest: mixed[]) => void,
  toHaveBeenCalledTwiceWith: (...rest: mixed[]) => void,
  toHaveBeenCalledNTimesWith: (times: number, ...rest: mixed[]) => void,
  toHaveBeenCalledWith: (...rest: mixed[]) => void,
  toHaveBeenCalled: () => void,
  toHaveClass: (expected: string) => void,
  toHaveBeenCalledOnce: () => void,
  toThrow: (err: Error | Class<Error>) => void,
  toThrowError: (err: Error | Class<Error>, msg: string) => void
};

declare var jasmine: Jasmine;
declare class Jasmine {
  any(t: any): any,
  clock(): {
    install: () => void,
    uninstall: () => void,
    tick: (ms: number) => void
  },
  createSpy(name: string): spy
}

type spy = {
  (...rest: any[]): any,
  and: {
    returnValue: (val: mixed) => spy,
    callFake: (fn: (...rest: mixed[]) => any) => spy,
    callThrough: () => spy
  }
};

export type spyT = spy;
