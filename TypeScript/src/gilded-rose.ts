abstract class Item {
  constructor(public name: string, public sellIn: number, public quality: number) {}
}

export class NormalItem extends Item {}

export class AgedBrieItem extends Item {}

export class BackstagePassItem extends Item {}

export class SulfurasItem extends Item {}

export class GildedRose {
  constructor(private items: Item[] = []) {}

  updateQuality() {
    for (let i = 0; i < this.items.length; i++) {
      const item = this.items[i]
      if (!(item instanceof AgedBrieItem) && !(item instanceof BackstagePassItem)) {
        if (item.quality > 0) {
          if (!(item instanceof SulfurasItem)) {
            item.quality = item.quality - 1
          }
        }
      } else {
        if (item.quality < 50) {
          item.quality = item.quality + 1
          if (item instanceof BackstagePassItem) {
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
      if (!(item instanceof SulfurasItem)) {
        item.sellIn = item.sellIn - 1
      }
      if (item.sellIn < 0) {
        if (!(item instanceof AgedBrieItem)) {
          if (!(item instanceof BackstagePassItem)) {
            if (item.quality > 0) {
              if (!(item instanceof SulfurasItem)) {
                item.quality = item.quality - 1
              }
            }
          } else {
            item.quality = item.quality - item.quality
          }
        } else {
          if (item.quality < 50) {
            item.quality = item.quality + 1
          }
        }
      }
    }

    return this.items
  }
}
