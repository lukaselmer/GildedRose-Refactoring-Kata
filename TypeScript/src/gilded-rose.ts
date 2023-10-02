import { Item } from './item/Item'
import { decreaseQualityToMin0, increaseQualityToMax50 } from './item/quality'
import { backstagePass, agedBrie, normal } from './item/itemTypes'
import { decreaseSellIn, expired } from './item/sellIn'
import { handleBackstagePass } from './handleBackstagePass'

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

function handleNormalItem(item: Item) {
  decreaseSellIn(item)
  decreaseQualityToMin0(item, expired(item) ? 2 : 1)
}

function handleBrie(item: Item) {
  decreaseSellIn(item)
  increaseQualityToMax50(item, expired(item) ? 2 : 1)
}
