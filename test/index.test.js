import index from '../index';

describe('index handler function', () => {
  const callbackSpy = jest.fn();

  it('shoud exist', () => {
    expect(index.handler).not.toBeUndefined();
  });

  it('should eventually call `callback` with a boolean', (done) => {
    Promise.resolve(index.handler(null, null, callbackSpy))
    .then(() => {
      expect(typeof callbackSpy.mock.calls[0][0]).toBe('boolean');
      done();
    });
  });
});