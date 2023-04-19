'use strict';

const { emitter, eventPool } = require('../eventPool.js');

let newPickedUpPackageAlert = eventPool[0];


emitter.emit(newPickedUpPackageAlert, {
  event: 'pickup',
  time: 'now',
  payload: {
    store: '321 Cakes',
    orderId: '642111',
    customer: 'Joes blue',
    address: 'kent, WA',
  }
});




