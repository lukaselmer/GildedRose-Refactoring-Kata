import { Item } from './item/Item'
import { increaseQualityToMax50 } from './item/quality'
import { decreaseSellIn, expired } from './item/sellIn'

export function handleBrie(item: Item) {
  decreaseSellIn(item)
  increaseQualityToMax50(item, expired(item) ? 2 : 1)
}
