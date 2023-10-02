import { Item } from '../itemUtils/Item'
import { decreaseQualityToMin0 } from '../itemUtils/quality'
import { decreaseSellIn, expired } from '../itemUtils/sellIn'

export function handleNormalItem(item: Item): void {
  decreaseSellIn(item)
  decreaseQualityToMin0(item, expired(item) ? 2 : 1)
}
