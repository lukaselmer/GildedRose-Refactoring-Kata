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
  if (normal(item) && item.quality > 0) decreaseQuality(item)

  if (agedBrie(item)) {
    increaseQualityToMax50(item)
  }

  if (backstagePass(item)) {
    increaseQualityToMax50(item)
    if (backstagePass(item) && item.sellIn < 11) increaseQualityToMax50(item)
    if (backstagePass(item) && item.sellIn < 6) increaseQualityToMax50(item)
  }

  if (!legendary(item)) {
    item.sellIn = item.sellIn - 1
  }

  if (item.sellIn < 0) {
    if (!agedBrie(item)) {
      if (!backstagePass(item)) {
        if (item.quality > 0) {
          if (!legendary(item)) {
            decreaseQuality(item)
          }
        }
      } else {
        item.quality = item.quality - item.quality
      }
    } else {
      if (item.quality < 50) {
        increaseQuality(item)
      }
    }
  }
}

function increaseQualityToMax50(item: Item) {
  item.quality = Math.min(50, item.quality + 1)
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
