import { Component, OnDestroy, OnInit } from "@angular/core";
import { Observable, Subscription } from "rxjs";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit, OnDestroy {
  private sub: Subscription;

  constructor() {}

  ngOnInit() {
    const customIntervalObservable = Observable.create((observer) => {
      let count = 0;
      setInterval(() => {
        observer.next(count);
        if (count === 2) {
          observer.complete();
        }
        if (count > 3) {
          observer.error(new Error("Count is greater than 3."));
        }
        count++;
      }, 1000);
    });

    this.sub = customIntervalObservable.subscribe(
      (data) => {
        console.log(data);
      },
      (error) => {
        console.error(error);
      },
      () => {
        console.log("Completed.");
      }
    );
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}