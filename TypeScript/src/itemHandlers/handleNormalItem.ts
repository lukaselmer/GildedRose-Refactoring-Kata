import { Item } from '../items/itemUtils/Item'
import { decreaseQualityToMin0 } from '../items/itemUtils/quality'
import { decreaseSellIn, expired } from '../items/itemUtils/sellIn'

export function handleNormalItem(item: Item): void {
  decreaseSellIn(item)
  decreaseQualityToMin0(item, expired(item) ? 2 : 1)
}
