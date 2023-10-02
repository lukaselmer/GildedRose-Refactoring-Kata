import { Item } from './item/Item'
import { backstagePass, agedBrie, normal } from './item/itemTypes'
import { handleBackstagePass } from './handleBackstagePass'
import { handleBrie } from './handleBrie'
import { handleNormalItem } from './handleNormalItem'

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
