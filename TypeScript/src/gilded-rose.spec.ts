import { beforeAll, describe, expect, it } from 'vitest'
import { GildedRose } from './gilded-rose'
import { Item } from './items/itemUtils/Item'
import { initLogger } from './logger'

beforeAll(() => initLogger('fake'))

describe('Gilded Rose', () => {
  it('should foo', () => {
    const gildedRose = new GildedRose([new Item('foo', 0, 0)])
    const items = gildedRose.updateQuality()
    expect(items[0].name).toMatchInlineSnapshot('"foo"')
  })
})
