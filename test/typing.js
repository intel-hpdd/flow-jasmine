//@flow

describe('my fake suite', () => {
  beforeEach(() => {

  });

  afterEach(() => {

  });

  it('should not error', () => {
    expect('this').toBe('this');
  });

  fit('should be awesome', () => {
    expect('this').toEqual('this');
  });
});

//should error
describe(1, 2);

//should pass
const spy = jasmine.createSpy('foo');
spy.and.callFake((x) => x + 1);

//should error
const spy2 = jasmine.createSpy('foo');
spy2.and.callFake(3);

//should error
const spy3 = jasmine.createSpy(100);
(spy3:Object);

//should pass
const spy4 = jasmine.createSpy('bar');
spy4.and.callThrough();

//should pass
const spy5 = jasmine.createSpy('blap');
spy5.and.returnValue('moose');

//should pass
const foo = {
  bar () {}
};
const spy6 = spyOn(foo, 'bar');
spy6.and.callThrough();
