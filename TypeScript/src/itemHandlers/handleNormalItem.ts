import { Item } from '../item/Item'
import { decreaseQualityToMin0 } from '../item/quality'
import { decreaseSellIn, expired } from '../item/sellIn'

export function handleNormalItem(item: Item): void {
  decreaseSellIn(item)
  decreaseQualityToMin0(item, expired(item) ? 2 : 1)
}
