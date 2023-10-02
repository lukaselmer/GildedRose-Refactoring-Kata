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

abstract class Item {
  constructor(public name: string, public sellIn: number, public quality: number) {}

  abstract updateQuality(): void

  protected decreaseQualityToMin0() {
    if (this.quality > 0) this.quality = this.quality - 1
  }

  protected decreaseSellIn() {
    this.sellIn = this.sellIn - 1
  }

  protected increaseQualityToMax50() {
    if (this.quality < 50) this.quality = this.quality + 1
  }

  protected expired() {
    return this.sellIn < 0
  }
}

export class NormalItem extends Item {
  updateQuality() {
    this.decreaseQualityToMin0()
    this.decreaseSellIn()
    if (this.sellIn < 0 && this.quality > 0) this.quality = this.quality - 1
  }
}

export class AgedBrieItem extends Item {
  updateQuality() {
    this.increaseQualityToMax50()
    this.decreaseSellIn()
    if (this.expired()) this.increaseQualityToMax50()
  }
}

export class BackstagePassItem extends Item {
  updateQuality() {
    this.increaseQualityToMax50()
    if (this.sellIn < 11) this.increaseQualityToMax50()
    if (this.sellIn < 6) this.increaseQualityToMax50()

    this.decreaseSellIn()
    if (this.sellIn < 0) this.expire()
  }

  private expire() {
    this.quality = 0
  }
}

export class SulfurasItem extends Item {
  updateQuality() {}
}
