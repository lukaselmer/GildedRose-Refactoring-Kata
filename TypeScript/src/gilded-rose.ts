import { Item } from './items/itemUtils/Item'
import { backstagePass, agedBrie, normal } from './items/itemUtils/itemTypes'
import { handleBackstagePass } from './items/itemHandlers/handleBackstagePass'
import { handleBrie } from './items/itemHandlers/handleBrie'
import { handleNormalItem } from './items/itemHandlers/handleNormalItem'

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
