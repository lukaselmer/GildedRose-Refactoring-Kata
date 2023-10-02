import { Item } from './items/Item'

export class NormalItem extends Item {
  updateQuality() {
    this.decreaseSellIn()
    this.decreaseQualityToMin0(this.expired ? 2 : 1)
  }
}
