import { Item } from './item/Item'
import { decreaseQualityToMin0, increaseQualityToMax50, expire } from './item/quality'
import { backstagePass, agedBrie, normal } from './item/itemTypes'
import { decreaseSellIn, expired } from './item/sellIn'

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

function handleBackstagePass(item: Item) {
  increaseBackstageQuality(item)
  decreaseSellIn(item)
  if (expired(item)) expire(item)
}

function increaseBackstageQuality(item: Item) {
  if (item.sellIn < 6) increaseQualityToMax50(item, 3)
  else if (item.sellIn < 11) increaseQualityToMax50(item, 2)
  else increaseQualityToMax50(item)
}
