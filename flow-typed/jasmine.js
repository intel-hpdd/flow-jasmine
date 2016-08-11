// @flow

type doneT = {
  ():void,
  fail:() => void
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
  toHaveBeenCalledWith:(...rest:mixed[]) => void,
  toHaveBeenCalled:() => void,
  toHaveClass:(expected:string) => void,
  toHaveBeenCalledOnce:() => void
};

declare var jasmine:Jasmine;
declare class Jasmine {
  any(t:any):any;
  clock(): {
    install:() => void,
    uninstall:() => void,
    tick:(ms:number) => void
  };
  createSpy(name:string):spy
}

type spy = {
  (...rest:any[]):any,
  and:{
    returnValue:(val:mixed) => spy,
    callFake:(fn:(...rest:mixed[]) => any) => spy,
    callThrough:() => spy
  }
};
