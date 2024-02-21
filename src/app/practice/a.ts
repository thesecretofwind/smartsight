import {  Subject, switchMap } from "rxjs";

export class AbortableFetch {
  search!: Subject<any>;

  constructor() {
    this.search = new Subject();
    this.init();
  }

  init() {
    this.search.pipe(
      switchMap(value => httpGet(value))
    )
    .subscribe(val => console.log(val))
  }

  trigger(value: string) {
    this.search.next(value)
  }
}

export function httpGet(url: string) {
  return new Promise(resolve => {
    setTimeout(() => resolve(`result: ${url}`), 2000)
  })
}


const switchFetch = new AbortableFetch();

switchFetch.trigger((123).toString());

setTimeout(() => {
  switchFetch.trigger((456).toString())
},1000)
