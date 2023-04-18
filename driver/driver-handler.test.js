const { emitter, eventPool } = require('../eventPool.js');

require('./handler.js')
require('../vendor/handler.js');
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
