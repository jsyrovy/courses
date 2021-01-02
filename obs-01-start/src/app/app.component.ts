import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { UserService } from "./user.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit, OnDestroy {
  userActivated = false;
  private sub: Subscription;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.sub = this.userService.activated.subscribe((activated) => {
      this.userActivated = activated;
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
