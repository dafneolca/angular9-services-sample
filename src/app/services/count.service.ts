export class CountService {
  countActivated: number = 0;
  countDeactivated: number = 0;

  activated() {
    this.countActivated++;
    console.log(this.countActivated);
  }

  deactivated() {
    this.countDeactivated++;
    console.log(this.countDeactivated);
  }
}
