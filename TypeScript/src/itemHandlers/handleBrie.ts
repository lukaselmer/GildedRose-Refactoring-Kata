import { Item } from '../items/itemUtils/Item'
import { increaseQualityToMax50 } from '../items/itemUtils/quality'
import { decreaseSellIn, expired } from '../items/itemUtils/sellIn'

export function handleBrie(item: Item) {
  decreaseSellIn(item)
  increaseQualityToMax50(item, expired(item) ? 2 : 1)
}
