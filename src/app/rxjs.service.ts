import { Injectable } from '@angular/core';
import { Observable, interval,Subject, BehaviorSubject,of } from "rxjs";
import { max,min,count, concatAll, filter } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class RxjsService {

  constructor() {
    // create an observable
  //   const observable = new Observable(subscriber =>{
  //     console.log('Hello RxJs');
  //     subscriber.next(10);
  //     subscriber.next([10,19,100]);
  //     setTimeout(()=>{
  //       subscriber.next("Call Me")
  //     },1000);

  //   });
    
  //  // subscribe to the observable
  //   observable.subscribe((xyz)=>{
  //     console.log(xyz);
  //   });

    // const detailedObservable = new Observable(subscriber=>{
    //   try {
    //     subscriber.next('ONE');
    //     subscriber.next('TWO');
    //     //subscriber.error('Not Found');
    //     //subscriber.complete(); // i.e. subscription is done
    //     throw new Error(); // throw an error
    //   } catch (error) {
    //     subscriber.error('ERR ');
    //   }
    // });

    // // write clean observers
    // detailedObservable.subscribe({
    //   next: val => console.log('TRY : '+val),
    //   error: err => console.error('ERROR : '+err),
    //   complete: () => console.log('FINALLY ')
    // });
    //console.log("-- "+user);
    //observable.toPromise();

    // const val = Math.random();
    // HOT & COLD Observables
    // const _coldObservable = new Observable(subs=>{
    //   subs.next(val); // simple random function
    // });
    // // subscription 1
    // _coldObservable.subscribe(d=>{
    //   console.log("SUB 1 "+d);
    // });

    // // subscription 2
    // _coldObservable.subscribe(d=>{
    //   console.log("SUB 2 "+d);
    // });

    // COLD
    // const _cold = new Observable(observer=>{
    //   var _interval = interval(1500);
    //   _interval.subscribe((val:number)=>{
    //     observer.next(val); // emit the value to the observer
    //   });
    // });

    // // subscriber 1
    // _cold.subscribe((val)=>{
    //   console.log('Subscriber 1 ',val);
    // });

    // // subscriber 2
    // setTimeout(()=>{
    //   _cold.subscribe((val)=>{
    //     console.log('Subscriber 2 ',val);
    //   });
    // },2000);

    // Subjects : broadcasting flavor of Observables
    // const subject$ = new Subject();
    
    // // sub 1
    // subject$.subscribe({
    //   next: x => console.log('SUB 1 '+x)
    // });

    // // sub 2
    // subject$.subscribe({
    //   next: x => console.log('SUB 2 '+x)
    // });

    // subject$.next(1);
    // subject$.next(9);

    // HOT
    // const hotSubject$ = new Subject();
    // // emit values
    // interval(1000).subscribe(val=>{
    //   hotSubject$.next(val);
    // });

    // const hotObservable$ = new Observable(observer=>{
    //   hotSubject$.subscribe(val=>{
    //     observer.next(val);
    //   });
    // });

    // // sub 1
    // hotObservable$.subscribe(val=>{
    //   console.log('HOT SUB 1 '+val);
    // });

    // // sub 2 
    // setTimeout(()=>{
    //   hotObservable$.subscribe(val=>{
    //     console.log('HOT SUB 2 '+val);
    //   });
    // },2000);

    //
    // const behaviorSubject$ = new BehaviorSubject('');
    // // sub 1
    // behaviorSubject$.subscribe(v=>{
    //   console.log('BEHAVE SUB 1 '+v);
    // });

    // Map mp = new HashMap();
    // mp.put(1,'Test');
    // System.out.println(mp.put(1,'Test')); // it will return us the previous value i.e. null / empty 

    // mp.put(1,'Sample');
    // System.out.println(mp.put(1,'Sample')); // it will return us the previous value i.e. Test
  
    // last emitted value
//     console.log('VAL 0'+behaviorSubject$.value);
    
//     behaviorSubject$.next('ONE '+Math.random()); // event 1
//     // last emitted value
//     console.log('VAL 1'+behaviorSubject$.value);
    
//     behaviorSubject$.next('TWO '+Math.random());  // event 2
//     // last emitted value
//     console.log('VAL 2'+behaviorSubject$.value);
    
//     // sub 2 
//     behaviorSubject$.subscribe(v=>{
//       console.log('BEHAVE SUB 2 '+v);
//     });

//     behaviorSubject$.next('THREE '+Math.random());  // // event 3
// // last emitted value
// console.log('VAL 3'+behaviorSubject$.value);
    
//
    // Higher Order Observables
    // const ob$ = new Observable(sub=>{
    //   sub.next(2);
    //   sub.next(4);
    //   setTimeout(() => {
    //       sub.next(10);
    //       sub.complete();
    //   }, 1000);
    // });

    // ob$.subscribe(x=>console.log(x));

    // operators
    const odds$ = of(1,3,5,7,9,11,13,15); // gives us an observable
    const evens$ = of(2,4,6,8,10,12);
    // odds$.subscribe(num=>{
    //   console.log(num);
    // });

    const outer$ = new Observable(sub=>{
          sub.next(odds$);
          sub.next(evens$);
          sub.complete();
        });
    
        // sub 
        // outer$.subscribe((inner:Observable<number>)=>{
        //   inner.subscribe(u=>{
        //     console.log(u);
        //   });
        // });
        // //
        // odds$.pipe(max()).subscribe(_mx=>{
        //   console.log(`MAX VAL is ${_mx}`);
        // });
        // concatAll
        //outer$.pipe(concatAll()).subscribe(x=>console.log(x));
        // filtering
        odds$
        .pipe(
          filter(x => x %3 == 0))
          .subscribe(x=>console.log(x));
    // end of constructor
   }
}
