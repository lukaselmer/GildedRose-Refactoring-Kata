import { Item } from './itemUtils/Item'
import { backstagePass, agedBrie, normal } from './itemUtils/itemTypes'
import { handleBackstagePass } from './itemHandlers/handleBackstagePass'
import { handleBrie } from './itemHandlers/handleBrie'
import { handleNormalItem } from './itemHandlers/handleNormalItem'

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
