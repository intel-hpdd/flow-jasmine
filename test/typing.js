//@flow

describe('my fake suite', () => {
  beforeEach(() => {});

  beforeEach(async () => {
    await new Promise(res => {
      res(3);
    });
  });

  afterEach(() => {});

  it('should not error', () => {
    expect('this').toBe('this');
  });

  fit('should be awesome', () => {
    expect('this').toEqual('this');
  });

  it('should work async', async () => {
    await new Promise(res => res(4));
  });
});

// $ExpectError
describe(1, 2);

const spy = jasmine.createSpy('foo');
spy.and.callFake(x => x + 1);

const spy2 = jasmine.createSpy('foo');
spy2.and.callFake(3);

const spy3 = jasmine.createSpy(100);
(spy3: Object);

const spy4 = jasmine.createSpy('bar');
spy4.and.callThrough();

const spy5 = jasmine.createSpy('blap');
spy5.and.returnValue('moose');

const foo = {
  bar() {}
};
const spy6 = spyOn(foo, 'bar');
spy6.and.callThrough();
