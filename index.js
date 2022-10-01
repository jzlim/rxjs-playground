import './01-basic-observable.js';

// Example: DOM click event (vanilla vs rxjs)
// document.addEventListener('click', () => console.log('Clicked!'));

// import { fromEvent } from 'rxjs';
// fromEvent(document, 'click').subscribe(() => console.log('Clicked!'));

// EXAMPLE: purity of function (vanilla vs rxjs)
// let count = 0;
// document.addEventListener('click', () =>
//   console.log(`Clicked ${++count} times`)
// );

// import { fromEvent, scan } from 'rxjs';
// fromEvent(document, 'click')
//   .pipe(scan((count) => count + 1, 0))
//   .subscribe((count) => console.log(`Clicked ${count} times`));

// EXAMPLE: to listen to an click event with
// restriction of one click per second
// vanilla JS
// let count = 0;
// let rate = 1000;
// let lastClick = Date.now() - rate;
// document.addEventListener('click', () => {
//   if (Date.now() - lastClick >= rate) {
//     console.log(`Clicked ${++count} times`);
//     lastClick = Date.now();
//   }
// });

// RxJS way
// import { fromEvent, throttleTime, scan } from 'rxjs';
// fromEvent(document, 'click')
//   .pipe(
//     throttleTime(1000), // to limit value emitted for only every one second
//     scan((count) => count + 1, 0)
//   )
//   .subscribe((count) => console.log(`Clicked ${count} times`));
