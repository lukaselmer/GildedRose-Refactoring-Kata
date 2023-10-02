import { GildedRose } from './gilded-rose'
import { SulfurasItem } from './items/SulfurasItem'
import { BackstagePassItem } from './items/BackstagePassItem'
import { AgedBrieItem } from './items/AgedBrieItem'
import { NormalItem } from './items/NormalItem'
import { consoleLog } from './logger'
import { ConjuredItem } from './items/ConjuredItem'

export function goldenMasterTexTests(days: number) {
  const items = [
    new NormalItem('+5 Dexterity Vest', 10, 20), //
    new AgedBrieItem('Aged Brie', 2, 0), //
    new NormalItem('Elixir of the Mongoose', 5, 7), //
    new SulfurasItem('Sulfuras, Hand of Ragnaros', 0, 80), //
    new SulfurasItem('Sulfuras, Hand of Ragnaros', -1, 80),
    new BackstagePassItem('Backstage passes to a TAFKAL80ETC concert', 15, 20),
    new BackstagePassItem('Backstage passes to a TAFKAL80ETC concert', 10, 49),
    new BackstagePassItem('Backstage passes to a TAFKAL80ETC concert', 5, 49),
    new ConjuredItem('Conjured Mana Cake', 3, 6),
  ]

  const gildedRose = new GildedRose(items)

  for (let i = 0; i < days; i++) {
    consoleLog('-------- day ' + i + ' --------')
    consoleLog('name, sellIn, quality')
    items.forEach((element) => {
      consoleLog(element.name + ', ' + element.sellIn + ', ' + element.quality)
    })
    consoleLog()
    gildedRose.updateQuality()
  }
}
