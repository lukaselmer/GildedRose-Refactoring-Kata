import { Item } from '../itemUtils/Item'
import { increaseQualityToMax50 } from '../itemUtils/quality'
import { decreaseSellIn, expired } from '../itemUtils/sellIn'

export function handleBrie(item: Item) {
  decreaseSellIn(item)
  increaseQualityToMax50(item, expired(item) ? 2 : 1)
}
