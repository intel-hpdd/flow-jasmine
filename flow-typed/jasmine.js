// @flow

type doneT = {
  (): void,
  fail: () => void
};

declare function describe (name:string, fn:() => void):void;
declare function fdescribe (name:string, fn:() => void):void;
declare function xdescribe (name:string, fn:() => void):void;
declare function beforeEach (fn:() => void):void;
declare function beforeEachAsync (fn:() => Promise<mixed>):void;
declare function afterEach (fn:() => void):void;
declare function it (name:string, fn:(done:doneT) => void):void;
declare function fit (name:string, fn:(done:doneT) => void):void;
declare function xit (name:string, fn:(done:doneT) => void):void;
declare function expect (expected:mixed):expectation;

type expectation = {
  not:expectation,
  toEqual:(actual:mixed) => void,
  toBe:(actual:mixed) => void,
  toBeNull:() => void,
  toHaveBeenCalledOnceWith:(...rest:mixed[]) => void,
  toHaveBeenCalled:() => void,
  toHaveClass:(expected:string) => void
};

declare var jasmine:Jasmine;
declare class Jasmine {
  clock(): {
    install: () => void,
    uninstall: () => void,
    tick: (ms:number) => void
  };
  createSpy(name:string): {
    and: {
      returnValue: (val:mixed) => Jasmine,
      callFake: (fn:(...rest:mixed[]) => mixed) => Jasmine,
      callThrough: () => Jasmine
    }
  };
}
