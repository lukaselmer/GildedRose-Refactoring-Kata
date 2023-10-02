export abstract class Item {
  constructor(public name: string, public sellIn: number, public quality: number) {}

  abstract updateQuality(): void

  protected decreaseQualityToMin0(by = 1) {
    this.quality = Math.max(0, this.quality - by)
  }

  protected decreaseSellIn() {
    this.sellIn = this.sellIn - 1
  }

  protected increaseQualityToMax50(by = 1) {
    this.quality = Math.min(50, this.quality + by)
  }

  protected get expired() {
    return this.sellIn < 0
  }
}
