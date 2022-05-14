const { indexHandler, sayHelloHandler } = require("../routes/handlers");

describe("Test Route Handlers", () => {
  test("Index page responds with the current Server time", () => {
    const currentTime = new Date();
    const res = { send: jest.fn() };

    // Freeze time to allow proper comparison
    jest.useFakeTimers();
    jest.setSystemTime(currentTime);

    indexHandler({}, res);

    expect(res.send.mock.calls.length).toEqual(1);
    expect(res.send.mock.calls[0][0]).toContain(`${currentTime}`);
  });

  test("Hello page greets the name given as a route parameter", () => {
    const res = { send: jest.fn() };
    const mockedName = "Lorenzo";

    sayHelloHandler({ params: { name: mockedName } }, res);

    expect(res.send.mock.calls.length).toEqual(1);
    expect(res.send.mock.calls[0][0]).toEqual(`Hello ${mockedName}!`);
  });

  test("Hello page responds with a generic appelative if route parameter is not given", () => {
    const res = { send: jest.fn() };
    const expectedGenericName = "Friend";

    sayHelloHandler({ params: {} }, res);

    expect(res.send.mock.calls.length).toEqual(1);
    expect(res.send.mock.calls[0][0]).toEqual(`Hello ${expectedGenericName}!`);
  });
});
