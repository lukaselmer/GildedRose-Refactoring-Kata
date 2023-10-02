import { Item } from '../itemUtils/Item'
import { increaseQualityToMax50, expire } from '../itemUtils/quality'
import { decreaseSellIn, expired } from '../itemUtils/sellIn'

export function handleBackstagePass(item: Item) {
  increaseBackstageQuality(item)
  decreaseSellIn(item)
  if (expired(item)) expire(item)
}
function increaseBackstageQuality(item: Item) {
  if (item.sellIn < 6) increaseQualityToMax50(item, 3)
  else if (item.sellIn < 11) increaseQualityToMax50(item, 2)
  else increaseQualityToMax50(item)
}
