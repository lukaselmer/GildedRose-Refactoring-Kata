import { GildedRose } from '../../gilded-rose'
import { Item } from '../itemUtils/Item'
import { consoleLog } from '../../logger'

export function goldenMasterTexTests(days: number) {
  const items = [
    new Item('+5 Dexterity Vest', 10, 20), //
    new Item('Aged Brie', 2, 0), //
    new Item('Elixir of the Mongoose', 5, 7), //
    new Item('Sulfuras, Hand of Ragnaros', 0, 80), //
    new Item('Sulfuras, Hand of Ragnaros', -1, 80),
    new Item('Backstage passes to a TAFKAL80ETC concert', 15, 20),
    new Item('Backstage passes to a TAFKAL80ETC concert', 10, 49),
    new Item('Backstage passes to a TAFKAL80ETC concert', 5, 49),
    new Item('Conjured Mana Cake', 3, 6),
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

export function extendedScenario(days: number) {
  const items = [
    new Item('+12 Dexterity Vest', 10, 20), //
    new Item('Super Aged Brie', 2, 0), //
    new Item('Elixir of the Pandas', 5, 7), //
    new Item('Sulfuras, Hand of Ragnaros', 0, 80), //
    new Item('Sulfuras, Hand of Thor', -1, 80),
    new Item('Backstage passes to a SUPER concert', 15, 20),
    new Item('Backstage passes to a ANOTHER concert', 10, 49),
    new Item('Backstage pass to a ABC concert', 5, 49),
    new Item('Conjured Health Cake', 3, 23),
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
