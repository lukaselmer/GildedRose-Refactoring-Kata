abstract class Item {
  constructor(public name: string, public sellIn: number, public quality: number) {}

  abstract updateQuality(): void
}

export class NormalItem extends Item {
  updateQuality() {
    const item = this
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
}

export class AgedBrieItem extends Item {
  updateQuality() {
    const item = this
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
}

export class BackstagePassItem extends Item {
  updateQuality() {
    const item = this
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
}

export class SulfurasItem extends Item {
  updateQuality() {
    const item = this
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
