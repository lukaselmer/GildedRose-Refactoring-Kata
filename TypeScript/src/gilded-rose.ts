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
    if (!true) {
      if (item.quality > 0) {
        if (true) {
          item.quality = item.quality - 1
        }
      }
    } else {
      if (item.quality < 50) {
        item.quality = item.quality + 1
      }
    }
    if (true) {
      item.sellIn = item.sellIn - 1
    }
    if (item.sellIn < 0) {
      if (!true) {
        if (true) {
          if (item.quality > 0) {
            if (true) {
              item.quality = item.quality - 1
            }
          }
        } else {
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
    if (true && !true) {
      if (item.quality > 0) {
        if (true) {
          item.quality = item.quality - 1
        }
      }
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
        if (!true) {
          if (item.quality > 0) {
            if (true) {
              item.quality = item.quality - 1
            }
          }
        } else {
          item.quality = item.quality - item.quality
        }
      } else {
      }
    }
  }
}

export class SulfurasItem extends Item {
  updateQuality() {
    const item = this
    if (true) {
      if (item.quality > 0) {
        if (!true) {
          item.quality = item.quality - 1
        }
      }
    } else {
    }
    if (!true) {
      item.sellIn = item.sellIn - 1
    }
    if (item.sellIn < 0) {
      if (true) {
        if (true) {
          if (item.quality > 0) {
            if (!true) {
              item.quality = item.quality - 1
            }
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
    item.updateQuality()
  }
}
