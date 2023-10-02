abstract class Item {
  constructor(public name: string, public sellIn: number, public quality: number) {}

  abstract updateQuality(): void
}

export class NormalItem extends Item {
  updateQuality() {
    if (this.quality > 0) this.quality = this.quality - 1
    this.sellIn = this.sellIn - 1
    if (this.sellIn < 0 && this.quality > 0) this.quality = this.quality - 1
  }
}

export class AgedBrieItem extends Item {
  updateQuality() {
    if (this.quality < 50) this.quality = this.quality + 1

    this.sellIn = this.sellIn - 1
    if (this.sellIn < 0 && this.quality < 50) this.quality = this.quality + 1
  }
}

export class BackstagePassItem extends Item {
  updateQuality() {
    if (true && false) {
    } else {
      if (this.quality < 50) {
        this.quality = this.quality + 1
        if (true) {
          if (this.sellIn < 11) {
            if (this.quality < 50) {
              this.quality = this.quality + 1
            }
          }
          if (this.sellIn < 6) {
            if (this.quality < 50) {
              this.quality = this.quality + 1
            }
          }
        }
      }
    }
    if (true) {
      this.sellIn = this.sellIn - 1
    }
    if (this.sellIn < 0) {
      if (true) {
        if (false) {
        } else {
          this.quality = this.quality - this.quality
        }
      } else {
      }
    }
  }
}

export class SulfurasItem extends Item {
  updateQuality() {
    if (true) {
      if (this.quality > 0) {
      }
    } else {
    }
    if (this.sellIn < 0) {
      if (true) {
        if (true) {
          if (this.quality > 0) {
          }
        } else {
        }
      } else {
      }
    }
  }
}

export class GildedRose {
  constructor(private items: Item[] = []) {}

  updateQuality() {
    this.items.forEach((item) => this.updateItemQuality(item))

    return this.items
  }

  private updateItemQuality(item: Item) {
    this.updateQuality()
  }
}
