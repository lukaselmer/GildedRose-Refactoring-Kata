import { beforeAll, describe, expect, it } from 'vitest'
import { GildedRose } from './gilded-rose'
import { Item } from './items/itemUtils/Item'
import { initLogger } from './logger'

beforeAll(() => initLogger('fake'))

describe('Gilded Rose', () => {
  it('decreases the quality of conjured items by 2', () => {
    const gildedRose = new GildedRose([new Item('Conjured Mana Cake', 2, 5)])
    const items = gildedRose.updateQuality()
    expect(items[0].name).toMatchInlineSnapshot('"Conjured Mana Cake"')
    expect(items[0].sellIn).toMatchInlineSnapshot('1')
    expect(items[0].quality).toMatchInlineSnapshot('3')
  })

  it('decreases the quality of conjured items after expiry by 4', () => {
    const gildedRose = new GildedRose([new Item('Conjured Mana Cake', 0, 10)])
    const items = gildedRose.updateQuality()
    expect(items[0].name).toMatchInlineSnapshot('"Conjured Mana Cake"')
    expect(items[0].sellIn).toMatchInlineSnapshot('-1')
    expect(items[0].quality).toMatchInlineSnapshot('6')
  })
})
