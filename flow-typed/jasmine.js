// @flow

declare function describe (name:string, fn:() => void):void;
declare function fdescribe (name:string, fn:() => void):void;
declare function beforeEach (fn:() => void):void;
declare function it (name:string, fn:() => void):void;
declare function expect (expected:mixed):{
  toEqual:(actual:mixed) => void
};
