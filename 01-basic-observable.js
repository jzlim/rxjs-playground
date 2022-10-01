import { Observable } from 'rxjs';

// 01 - Observables are able to deliver values either synchronously or asynchronously.

// const observable = new Observable((subscriber) => {
//   subscriber.next(1);
//   subscriber.next(2);
//   subscriber.next(3);
//   setTimeout(() => {
//     subscriber.next(4);
//     subscriber.complete();
//   }, 3000);
// });

// console.log('just before subscribe');
// observable.subscribe({
//   next(x) {
//     console.log('got value ' + x);
//   },
//   error(err) {
//     console.error('something wrong occurred: ' + err);
//   },
//   complete() {
//     console.log('done');
//   },
// });
// console.log('just after subscribe');

// 02 - subscription with disposing (complete())
// const observable = new Observable((subscriber) => {
//   subscriber.next('Returned some values from API');
//   subscriber.complete();
// });

// observable.subscribe({
//   next(x) {
//     console.log(x);
//   },
//   error(err) {
//     console.error('something wrong occurred: ' + err);
//   },
//   complete() {
//     console.log('done');
//   },
// });

// 03 - subscription with disposing (unsubscribe())
// const observable = new Observable((subscriber) => {
//   setInterval(() => {
//     subscriber.next(Math.random() * 10);
//   }, 1000);
// });

// const subscription = observable.subscribe({
//   next(x) {
//     console.log('got value ' + x);
//   },
//   error(err) {
//     console.error('something wrong occurred: ' + err);
//   },
//   complete() {
//     console.log('done');
//   },
// });

// // unsubscribe the subscription to avoid resource leak
// setTimeout(() => {
//   console.log('unsubscribe the subscription');
//   subscription.unsubscribe();
// }, 5000);
