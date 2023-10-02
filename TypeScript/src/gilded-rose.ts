export class Item {
  constructor(public name: string, public sellIn: number, public quality: number) {}
}

export class GildedRose {
  constructor(private items: Item[] = []) {}

  updateQuality() {
    updateQualityFn(this.items)
    return this.items
  }
}

function updateQualityFn(items: Item[]) {
  items.forEach(updateItemQuality)
}

function updateItemQuality(item: Item) {
  if (backstagePass(item)) handleBackstagePass(item)
  else if (agedBrie(item)) handleBrie(item)
  else if (normal(item)) handleNormalItem(item)
}

function handleNormalItem(item: Item) {
  decreaseSellIn(item)
  decreaseQualityToMin0(item)
  decreaseQualityToMin0(item, expired(item) ? 0 : 1)
}

function decreaseQualityToMin0(item: Item, by = 1) {
  item.quality = Math.max(0, item.quality - 1)
}

function handleBrie(item: Item) {
  decreaseSellIn(item)
  increaseQualityToMax50(item, expired(item) ? 2 : 1)
}

function handleBackstagePass(item: Item) {
  increaseBackstageQuality(item)
  decreaseSellIn(item)
  if (expired(item)) expireBackstagePass(item)
}

function increaseBackstageQuality(item: Item) {
  if (item.sellIn < 6) increaseQualityToMax50(item, 3)
  else if (item.sellIn < 11) increaseQualityToMax50(item, 2)
  else increaseQualityToMax50(item)
}

function expireBackstagePass(item: Item) {
  item.quality = 0
}

function expired(item: Item) {
  return item.sellIn < 0
}

function decreaseSellIn(item: Item) {
  item.sellIn = item.sellIn - 1
}

function increaseQualityToMax50(item: Item, by = 1) {
  item.quality = Math.min(50, item.quality + by)
}

function normal(item: Item) {
  return !special(item)
}

function special(item: Item) {
  return agedBrie(item) || backstagePass(item) || legendary(item)
}

function backstagePass(item: Item) {
  return item.name === 'Backstage passes to a TAFKAL80ETC concert'
}

function agedBrie(item: Item) {
  return item.name === 'Aged Brie'
}

function legendary(item: Item) {
  return item.name === 'Sulfuras, Hand of Ragnaros'
}
