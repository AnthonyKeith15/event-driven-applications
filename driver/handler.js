'use strict';

const { emitter, eventPool } = require('../eventPool.js');

let newPackagePickUpAlert = eventPool[0];
let newPickedUpPackageAlert = eventPool[1];
let deliveredPackageVendorNotification = eventPool[2];
let thankYouMessage = eventPool[3];

emitter.on(newPackagePickUpAlert, (payload) => {

  console.log(newPackagePickUpAlert, payload)
  emitter.emit(newPickedUpPackageAlert, payload)

  console.log('DRIVER: Picked up ', payload.payload.orderId)
  payload.event = 'in-transit';
  
  console.log(payload)
  emitter.emit(deliveredPackageVendorNotification, payload)

  emitter.emit(thankYouMessage, payload)

  console.log('DRIVER: Delivered ', payload.payload.orderId)
  payload.event = 'delivered';
  console.log(payload)
});




module.exports = emitter