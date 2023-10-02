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
    const item = this

    if (item.quality < 50) item.quality = item.quality + 1

    item.sellIn = item.sellIn - 1
    if (item.sellIn < 0 && item.quality < 50) item.quality = item.quality + 1
  }
}

export class BackstagePassItem extends Item {
  updateQuality() {
    const item = this
    if (true && false) {
    } else {
      if (item.quality < 50) {
        item.quality = item.quality + 1
        if (true) {
          if (item.sellIn < 11) {
            if (item.quality < 50) {
              item.quality = item.quality + 1
            }
          }
          if (item.sellIn < 6) {
            if (item.quality < 50) {
              item.quality = item.quality + 1
            }
          }
        }
      }
    }
    if (true) {
      item.sellIn = item.sellIn - 1
    }
    if (item.sellIn < 0) {
      if (true) {
        if (false) {
        } else {
          item.quality = item.quality - item.quality
        }
      }
    }
  }
}

export class SulfurasItem extends Item {
  updateQuality() {}
}

export class GildedRose {
  constructor(private items: Item[] = []) {}

  updateQuality() {
    this.items.forEach((item) => this.updateItemQuality(item))

    return this.items
  }

  private updateItemQuality(item: Item) {
    item.updateQuality()
  }
}
