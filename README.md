# event-driven-applications

## UML
<img width="1189" alt="Screenshot 2023-04-17 at 5 52 18 PM" src="https://user-images.githubusercontent.com/105818064/232641223-9f370104-5469-4271-9043-0639322a524f.png">

### Tests
Testing to make sure that each step only gets called 1 time, and has the correct item in the payload.

```
describe('Package Delivery System', () => {
  let payload;

  beforeEach(() => {
    payload = { payload: { orderId: 12345 } };
  });

  test('emits newPickedUpPackageAlert event after receiving newPackagePickUpAlert event', () => {
    const callback = jest.fn();
    emitter.on(eventPool[1], callback);

    emitter.emit(eventPool[0], payload);

    expect(callback).toHaveBeenCalledTimes(1);
    expect(callback).toHaveBeenCalledWith(payload);
  });

  test('emits deliveredPackageVendorNotification event after receiving newPickedUpPackageAlert event', () => {
    const callback = jest.fn();
    emitter.on(eventPool[2], callback);

    emitter.emit(eventPool[1], payload);

    expect(callback).toHaveBeenCalledTimes(1);
  });

  test('emits thankYouMessage event after receiving deliveredPackageVendorNotification event', () => {
    const callback = jest.fn();
    emitter.on(eventPool[3], callback);

    emitter.emit(eventPool[2], payload);

    expect(callback).toHaveBeenCalledTimes(1);
    expect(callback).toHaveBeenCalledWith({ ...payload, event: 'delivered' });
  });
});
```
