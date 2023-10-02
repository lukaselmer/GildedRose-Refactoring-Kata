import { Item } from './item/Item'
import { backstagePass, agedBrie, normal } from './item/itemTypes'
import { handleBackstagePass } from './handlers/handleBackstagePass'
import { handleBrie } from './handlers/handleBrie'
import { handleNormalItem } from './handlers/handleNormalItem'

export class GildedRose {
  constructor(private items: Item[] = []) {}

  updateQuality() {
    this.items.forEach(updateItemQuality)
    return this.items
  }
}

function updateItemQuality(item: Item) {
  if (backstagePass(item)) handleBackstagePass(item)
  else if (agedBrie(item)) handleBrie(item)
  else if (normal(item)) handleNormalItem(item)
}
