import { Item } from './Item'

export class BackstagePassItem extends Item {
  updateQuality() {
    if (this.expiringVerySoon) this.increaseQualityToMax50(3)
    else if (this.expiringSoon) this.increaseQualityToMax50(2)
    else this.increaseQualityToMax50()

    this.decreaseSellIn()
    if (this.expired) this.expire()
  }

  protected get expiringSoon() {
    return this.sellIn < 11
  }

  protected get expiringVerySoon() {
    return this.sellIn < 6
  }

  protected expire() {
    this.quality = 0
  }
}
