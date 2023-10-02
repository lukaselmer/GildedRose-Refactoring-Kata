import { beforeAll, describe, expect, it } from 'vitest'
import { GildedRose } from './gilded-rose'
import { NormalItem } from './items/NormalItem'
import { initLogger } from './logger'

beforeAll(() => initLogger('fake'))

describe('Gilded Rose', () => {
  it('should foo', () => {
    const gildedRose = new GildedRose([new NormalItem('foo', 0, 0)])
    const items = gildedRose.updateQuality()
    expect(items[0].name).toMatchInlineSnapshot('"foo"')
  })
})
