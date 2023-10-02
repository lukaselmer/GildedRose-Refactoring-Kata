import { Item } from './Item'

export class ConjuredItem extends Item {
  updateQuality() {
    this.decreaseSellIn()
    this.decreaseQualityToMin0(this.expired ? 2 : 1)
  }
}
