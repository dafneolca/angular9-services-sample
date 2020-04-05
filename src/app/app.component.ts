import { Component, OnInit } from "@angular/core";
import { CountService } from "./services/count.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  countActivated: number = 0;
  countDeactivated: number = 0;

  constructor(private count: CountService) {}

  ngOnInit() {
    this.countActivated = this.count.countActivated;
    this.countDeactivated = this.count.countDeactivated;
  }
}
