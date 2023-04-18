'use strict';

const Events = require('events');
const eventEmitter = new Events();

const eventPool = [
  'newPackagePickUpAlert',
  'newPickedUpPackageAlert',
  'deliveredPackageVendorNotification',
  'thankYouMessage'
];

module.exports = {
  eventPool: eventPool,
  emitter: eventEmitter
}