import { Item } from '../itemUtils/Item'
import { decreaseQualityToMin0 } from '../itemUtils/quality'
import { decreaseSellIn, expired } from '../itemUtils/sellIn'

export function handleConjuredItem(item: Item): void {
  decreaseSellIn(item)
  decreaseQualityToMin0(item, expired(item) ? 4 : 2)
}
