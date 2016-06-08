// @flow

declare function describe (name:string, fn:() => void):void;
declare function fdescribe (name:string, fn:() => void):void;
declare function beforeEach (fn:() => void):void;
declare function afterEach (fn:() => void):void;
declare function it (name:string, fn:() => void):void;
declare function fit (name:string, fn:() => void):void;
declare function expect (expected:mixed):{
  toEqual:(actual:mixed) => void,
  toBe:(actual:mixed) => void
};

declare var jasmine:Jasmine;
declare class Jasmine {
  createSpy(name:string): {
    and: {
      returnValue: (val:mixed) => Jasmine,
      callFake: (fn:(...rest:mixed[]) => mixed) => Jasmine,
      callThrough: () => Jasmine
    }
  }
}
