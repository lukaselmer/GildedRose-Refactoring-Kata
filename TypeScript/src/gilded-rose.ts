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
  for (let i = 0; i < items.length; i++) {
    const item = items[i]

    if (normal(item) && item.quality > 0) {
      item.quality = item.quality - 1
    }

    if (agedBrie(item) || backstagePass(item)) {
      if (item.quality < 50) {
        item.quality = item.quality + 1
        if (backstagePass(item)) {
          if (item.sellIn < 11) {
            if (item.quality < 50) {
              item.quality = item.quality + 1
            }
          }
          if (item.sellIn < 6) {
            if (item.quality < 50) {
              item.quality = item.quality + 1
            }
          }
        }
      }
    }

    if (!legendary(item)) {
      item.sellIn = item.sellIn - 1
    }
    if (item.sellIn < 0) {
      if (!agedBrie(item)) {
        if (!backstagePass(item)) {
          if (item.quality > 0) {
            if (!legendary(item)) {
              item.quality = item.quality - 1
            }
          }
        } else {
          item.quality = item.quality - item.quality
        }
      } else {
        if (item.quality < 50) {
          item.quality = item.quality + 1
        }
      }
    }
  }
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
