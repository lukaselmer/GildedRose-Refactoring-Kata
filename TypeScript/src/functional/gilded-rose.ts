import { Item } from './items/itemUtils/Item'
import { backstagePass, agedBrie, normal, conjured } from './items/itemUtils/itemTypes'
import { handleBackstagePass } from './items/itemHandlers/handleBackstagePass'
import { handleBrie } from './items/itemHandlers/handleBrie'
import { handleNormalItem } from './items/itemHandlers/handleNormalItem'
import { handleConjuredItem } from './items/itemHandlers/handleConjuredItem'

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
  else if (conjured(item)) handleConjuredItem(item)
  else if (normal(item)) handleNormalItem(item)
}
