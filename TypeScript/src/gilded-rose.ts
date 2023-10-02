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
  if (agedBrie(item)) increaseQualityToMax50(item)
  if (backstagePass(item)) increaseBackstageQuality(item)

  if (normal(item)) decreaseQualityToMin0(item)

  if (!legendary(item)) decreaseSellIn(item)

  if (expired(item) && normal(item)) {
    decreaseQualityToMin0(item)
  }

  if (expired(item) && agedBrie(item)) increaseQualityToMax50(item)
  if (expired(item) && backstagePass(item)) expireBackstagePass(item)
}

function decreaseQualityToMin0(item: Item) {
  item.quality = Math.max(0, item.quality - 1)
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

function increaseBackstageQuality(item: Item) {
  if (item.sellIn < 6) increaseQualityToMax50(item, 3)
  else if (item.sellIn < 11) increaseQualityToMax50(item, 2)
  else increaseQualityToMax50(item)
}

function increaseQualityToMax50(item: Item, increaseBy = 1) {
  item.quality = Math.min(50, item.quality + increaseBy)
}

function increaseQuality(item: Item) {
  item.quality = item.quality + 1
}

function decreaseQuality(item: Item) {
  item.quality = item.quality - 1
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
