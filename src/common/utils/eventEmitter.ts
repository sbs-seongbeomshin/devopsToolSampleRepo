import { EventEmitter } from 'events';

const Events = {
  SEND_EMAIL : 'send-email',
}

const eventEmitter = new EventEmitter();

export { eventEmitter, Events };