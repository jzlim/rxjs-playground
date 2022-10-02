import {
  of,
  map,
  distinctUntilChanged,
  filter,
  Observable,
  Subject,
  fromEvent,
  switchMap,
  tap,
  debounceTime,
} from 'rxjs';

// 'of()' is a creation operator
// to create an Observable instance
// for the below case it will emit 0,1,2,3,4,5 in sequence to the Observer
const observableSeed = of(0, 1, 2, 3, 4, 5);

// 01 - distinctUntilChanged, map
// observableSeed
//   .pipe(
//     distinctUntilChanged(),
//     map((x) => x * 10)
//   )
//   .subscribe({
//     next(x) {
//       console.log('got value ' + x);
//     },
//     error(err) {
//       console.error('something wrong occurred: ' + err);
//     },
//     complete() {
//       console.log('done');
//     },
//   });

// 02 - filter by `userId === 1`
// API: https://jsonplaceholder.typicode.com/todos/
// API: https://jsonplaceholder.typicode.com/todos/1
// const apiRequest = new Observable((observer) => {
//   const request = fetch('https://jsonplaceholder.typicode.com/todos/')
//     .then((resp) => resp.json())
//     .then((json) => {
//       observer.next(json);
//       observer.complete();
//     });
// });
// apiRequest.pipe(map((x) => x.filter((y) => y.userId === 1))).subscribe({
//   next(x) {
//     console.table(x);
//   },
//   error(err) {
//     console.error('something wrong occurred: ' + err);
//   },
//   complete() {
//     console.log('done');
//   },
// });

// 03 - autocomplete search
// API: https://restcountries.com/v3.1/name/{name}
const inputDocument = document.querySelector('input[name="searchCountry"]');
fromEvent(inputDocument, 'input')
  .pipe(
    debounceTime(1000),
    map((x) => x.target.value),
    tap((x) => console.log(`==============latest keyword: ${x}==============`)),
    switchMap((x) => searchCountryRequest(x))
  )
  .subscribe({
    next(x) {
      if (x?.length > 0) {
        x.forEach((c) => console.log(c.name.official, c.flag));
      }
    },
    error(err) {
      console.error('something wrong occurred: ' + err);
    },
    complete() {
      console.log('done');
    },
  });

const searchCountryRequest = (countryName) =>
  new Observable((observer) => {
    fetch(`https://restcountries.com/v3.1/name/${countryName}`)
      .then((resp) => resp.json())
      .then((json) => {
        observer.next(json);
        observer.complete();
      });
  });

// BACKUP
// const keywords = new Subject('');
// const keywords$ = keywords.asObservable();
// const inputDocument = document.querySelector('input[name="searchCountry"]');
// const inputSubscription = fromEvent(inputDocument, 'input').subscribe((x) =>
//   keywords.next(x.target.value)
// );

// keywords$
//   .pipe(
//     // debounceTime(1000),
//     tap((x) => console.log(`==============latest keyword: ${x}==============`)),
//     switchMap((x) => searchCountryRequest(x))
//   )
//   .subscribe({
//     next(x) {
//       if (x?.length > 0) {
//         x.forEach((c) => console.log(c.name.official, c.flag));
//       }
//     },
//     error(err) {
//       console.error('something wrong occurred: ' + err);
//     },
//     complete() {
//       console.log('done');
//     },
//   });

// const searchCountryRequest = (countryName) =>
//   new Observable((observer) => {
//     fetch(`https://restcountries.com/v3.1/name/${countryName}`)
//       .then((resp) => resp.json())
//       .then((json) => {
//         observer.next(json);
//         observer.complete();
//       });
//   });
// searchCountryRequest('Malaysia')
//   .pipe()
//   .subscribe({
//     next(x) {
//       if (x?.length > 0) {
//         x.forEach((c) => console.log(c.name.official, c.flag));
//       }
//     },
//     error(err) {
//       console.error('something wrong occurred: ' + err);
//     },
//     complete() {
//       console.log('done');
//     },
//   });
