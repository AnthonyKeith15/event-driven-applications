'use strict';

const { emitter, eventPool } = require('./eventPool.js')

const { Server } = require('socket.io');
const PORT = process.env.PORT || 3001;

const io = new Server(PORT);

io.on('connection', (socket) => {
  console.log('client has connected ' + socket.id)
})

const state = {
  isPackageReadyToBePickedUp: false,
  isPackagePickedUp: false,
  isPackageDelivered: false,
  isVendorNotified: false,
  didVendorPickUp: false
}

let thankYouMessage = eventPool[3];


emitter.on(thankYouMessage, (payload) => {
  console.log('Thank you for delivering ', payload.payload.orderId)
} )


require('./driver/handler.js')
require('./vendor/handler.js');

