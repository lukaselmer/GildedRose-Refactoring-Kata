import { beforeEach, beforeAll, describe, expect, it } from 'vitest'
import { discardLogs, fakeLogs, initLogger } from '../logger'
import { extendedScenario, goldenMasterTexTests } from './items/scenarios/scenarios'

beforeAll(() => initLogger('fake'))
beforeEach(discardLogs)

describe('Gilded Rose Integration Tests', () => {
  it('generates the correct output for 2 days', () => {
    expect(fakeLogs()).toMatchInlineSnapshot('""')
    goldenMasterTexTests(2)
    expect(fakeLogs()).toMatchInlineSnapshot(`
      "-------- day 0 --------
      name, sellIn, quality
      +5 Dexterity Vest, 10, 20
      Aged Brie, 2, 0
      Elixir of the Mongoose, 5, 7
      Sulfuras, Hand of Ragnaros, 0, 80
      Sulfuras, Hand of Ragnaros, -1, 80
      Backstage passes to a TAFKAL80ETC concert, 15, 20
      Backstage passes to a TAFKAL80ETC concert, 10, 49
      Backstage passes to a TAFKAL80ETC concert, 5, 49
      Conjured Mana Cake, 3, 6

      -------- day 1 --------
      name, sellIn, quality
      +5 Dexterity Vest, 9, 19
      Aged Brie, 1, 1
      Elixir of the Mongoose, 4, 6
      Sulfuras, Hand of Ragnaros, 0, 80
      Sulfuras, Hand of Ragnaros, -1, 80
      Backstage passes to a TAFKAL80ETC concert, 14, 21
      Backstage passes to a TAFKAL80ETC concert, 9, 50
      Backstage passes to a TAFKAL80ETC concert, 4, 50
      Conjured Mana Cake, 2, 4
      "
    `)
  })

  it('generates the correct output for 30 days', () => {
    expect(fakeLogs()).toMatchInlineSnapshot('""')
    goldenMasterTexTests(31)
    expect(fakeLogs()).toMatchInlineSnapshot(`
      "-------- day 0 --------
      name, sellIn, quality
      +5 Dexterity Vest, 10, 20
      Aged Brie, 2, 0
      Elixir of the Mongoose, 5, 7
      Sulfuras, Hand of Ragnaros, 0, 80
      Sulfuras, Hand of Ragnaros, -1, 80
      Backstage passes to a TAFKAL80ETC concert, 15, 20
      Backstage passes to a TAFKAL80ETC concert, 10, 49
      Backstage passes to a TAFKAL80ETC concert, 5, 49
      Conjured Mana Cake, 3, 6

      -------- day 1 --------
      name, sellIn, quality
      +5 Dexterity Vest, 9, 19
      Aged Brie, 1, 1
      Elixir of the Mongoose, 4, 6
      Sulfuras, Hand of Ragnaros, 0, 80
      Sulfuras, Hand of Ragnaros, -1, 80
      Backstage passes to a TAFKAL80ETC concert, 14, 21
      Backstage passes to a TAFKAL80ETC concert, 9, 50
      Backstage passes to a TAFKAL80ETC concert, 4, 50
      Conjured Mana Cake, 2, 4

      -------- day 2 --------
      name, sellIn, quality
      +5 Dexterity Vest, 8, 18
      Aged Brie, 0, 2
      Elixir of the Mongoose, 3, 5
      Sulfuras, Hand of Ragnaros, 0, 80
      Sulfuras, Hand of Ragnaros, -1, 80
      Backstage passes to a TAFKAL80ETC concert, 13, 22
      Backstage passes to a TAFKAL80ETC concert, 8, 50
      Backstage passes to a TAFKAL80ETC concert, 3, 50
      Conjured Mana Cake, 1, 2

      -------- day 3 --------
      name, sellIn, quality
      +5 Dexterity Vest, 7, 17
      Aged Brie, -1, 4
      Elixir of the Mongoose, 2, 4
      Sulfuras, Hand of Ragnaros, 0, 80
      Sulfuras, Hand of Ragnaros, -1, 80
      Backstage passes to a TAFKAL80ETC concert, 12, 23
      Backstage passes to a TAFKAL80ETC concert, 7, 50
      Backstage passes to a TAFKAL80ETC concert, 2, 50
      Conjured Mana Cake, 0, 0

      -------- day 4 --------
      name, sellIn, quality
      +5 Dexterity Vest, 6, 16
      Aged Brie, -2, 6
      Elixir of the Mongoose, 1, 3
      Sulfuras, Hand of Ragnaros, 0, 80
      Sulfuras, Hand of Ragnaros, -1, 80
      Backstage passes to a TAFKAL80ETC concert, 11, 24
      Backstage passes to a TAFKAL80ETC concert, 6, 50
      Backstage passes to a TAFKAL80ETC concert, 1, 50
      Conjured Mana Cake, -1, 0

      -------- day 5 --------
      name, sellIn, quality
      +5 Dexterity Vest, 5, 15
      Aged Brie, -3, 8
      Elixir of the Mongoose, 0, 2
      Sulfuras, Hand of Ragnaros, 0, 80
      Sulfuras, Hand of Ragnaros, -1, 80
      Backstage passes to a TAFKAL80ETC concert, 10, 25
      Backstage passes to a TAFKAL80ETC concert, 5, 50
      Backstage passes to a TAFKAL80ETC concert, 0, 50
      Conjured Mana Cake, -2, 0

      -------- day 6 --------
      name, sellIn, quality
      +5 Dexterity Vest, 4, 14
      Aged Brie, -4, 10
      Elixir of the Mongoose, -1, 0
      Sulfuras, Hand of Ragnaros, 0, 80
      Sulfuras, Hand of Ragnaros, -1, 80
      Backstage passes to a TAFKAL80ETC concert, 9, 27
      Backstage passes to a TAFKAL80ETC concert, 4, 50
      Backstage passes to a TAFKAL80ETC concert, -1, 0
      Conjured Mana Cake, -3, 0

      -------- day 7 --------
      name, sellIn, quality
      +5 Dexterity Vest, 3, 13
      Aged Brie, -5, 12
      Elixir of the Mongoose, -2, 0
      Sulfuras, Hand of Ragnaros, 0, 80
      Sulfuras, Hand of Ragnaros, -1, 80
      Backstage passes to a TAFKAL80ETC concert, 8, 29
      Backstage passes to a TAFKAL80ETC concert, 3, 50
      Backstage passes to a TAFKAL80ETC concert, -2, 0
      Conjured Mana Cake, -4, 0

      -------- day 8 --------
      name, sellIn, quality
      +5 Dexterity Vest, 2, 12
      Aged Brie, -6, 14
      Elixir of the Mongoose, -3, 0
      Sulfuras, Hand of Ragnaros, 0, 80
      Sulfuras, Hand of Ragnaros, -1, 80
      Backstage passes to a TAFKAL80ETC concert, 7, 31
      Backstage passes to a TAFKAL80ETC concert, 2, 50
      Backstage passes to a TAFKAL80ETC concert, -3, 0
      Conjured Mana Cake, -5, 0

      -------- day 9 --------
      name, sellIn, quality
      +5 Dexterity Vest, 1, 11
      Aged Brie, -7, 16
      Elixir of the Mongoose, -4, 0
      Sulfuras, Hand of Ragnaros, 0, 80
      Sulfuras, Hand of Ragnaros, -1, 80
      Backstage passes to a TAFKAL80ETC concert, 6, 33
      Backstage passes to a TAFKAL80ETC concert, 1, 50
      Backstage passes to a TAFKAL80ETC concert, -4, 0
      Conjured Mana Cake, -6, 0

      -------- day 10 --------
      name, sellIn, quality
      +5 Dexterity Vest, 0, 10
      Aged Brie, -8, 18
      Elixir of the Mongoose, -5, 0
      Sulfuras, Hand of Ragnaros, 0, 80
      Sulfuras, Hand of Ragnaros, -1, 80
      Backstage passes to a TAFKAL80ETC concert, 5, 35
      Backstage passes to a TAFKAL80ETC concert, 0, 50
      Backstage passes to a TAFKAL80ETC concert, -5, 0
      Conjured Mana Cake, -7, 0

      -------- day 11 --------
      name, sellIn, quality
      +5 Dexterity Vest, -1, 8
      Aged Brie, -9, 20
      Elixir of the Mongoose, -6, 0
      Sulfuras, Hand of Ragnaros, 0, 80
      Sulfuras, Hand of Ragnaros, -1, 80
      Backstage passes to a TAFKAL80ETC concert, 4, 38
      Backstage passes to a TAFKAL80ETC concert, -1, 0
      Backstage passes to a TAFKAL80ETC concert, -6, 0
      Conjured Mana Cake, -8, 0

      -------- day 12 --------
      name, sellIn, quality
      +5 Dexterity Vest, -2, 6
      Aged Brie, -10, 22
      Elixir of the Mongoose, -7, 0
      Sulfuras, Hand of Ragnaros, 0, 80
      Sulfuras, Hand of Ragnaros, -1, 80
      Backstage passes to a TAFKAL80ETC concert, 3, 41
      Backstage passes to a TAFKAL80ETC concert, -2, 0
      Backstage passes to a TAFKAL80ETC concert, -7, 0
      Conjured Mana Cake, -9, 0

      -------- day 13 --------
      name, sellIn, quality
      +5 Dexterity Vest, -3, 4
      Aged Brie, -11, 24
      Elixir of the Mongoose, -8, 0
      Sulfuras, Hand of Ragnaros, 0, 80
      Sulfuras, Hand of Ragnaros, -1, 80
      Backstage passes to a TAFKAL80ETC concert, 2, 44
      Backstage passes to a TAFKAL80ETC concert, -3, 0
      Backstage passes to a TAFKAL80ETC concert, -8, 0
      Conjured Mana Cake, -10, 0

      -------- day 14 --------
      name, sellIn, quality
      +5 Dexterity Vest, -4, 2
      Aged Brie, -12, 26
      Elixir of the Mongoose, -9, 0
      Sulfuras, Hand of Ragnaros, 0, 80
      Sulfuras, Hand of Ragnaros, -1, 80
      Backstage passes to a TAFKAL80ETC concert, 1, 47
      Backstage passes to a TAFKAL80ETC concert, -4, 0
      Backstage passes to a TAFKAL80ETC concert, -9, 0
      Conjured Mana Cake, -11, 0

      -------- day 15 --------
      name, sellIn, quality
      +5 Dexterity Vest, -5, 0
      Aged Brie, -13, 28
      Elixir of the Mongoose, -10, 0
      Sulfuras, Hand of Ragnaros, 0, 80
      Sulfuras, Hand of Ragnaros, -1, 80
      Backstage passes to a TAFKAL80ETC concert, 0, 50
      Backstage passes to a TAFKAL80ETC concert, -5, 0
      Backstage passes to a TAFKAL80ETC concert, -10, 0
      Conjured Mana Cake, -12, 0

      -------- day 16 --------
      name, sellIn, quality
      +5 Dexterity Vest, -6, 0
      Aged Brie, -14, 30
      Elixir of the Mongoose, -11, 0
      Sulfuras, Hand of Ragnaros, 0, 80
      Sulfuras, Hand of Ragnaros, -1, 80
      Backstage passes to a TAFKAL80ETC concert, -1, 0
      Backstage passes to a TAFKAL80ETC concert, -6, 0
      Backstage passes to a TAFKAL80ETC concert, -11, 0
      Conjured Mana Cake, -13, 0

      -------- day 17 --------
      name, sellIn, quality
      +5 Dexterity Vest, -7, 0
      Aged Brie, -15, 32
      Elixir of the Mongoose, -12, 0
      Sulfuras, Hand of Ragnaros, 0, 80
      Sulfuras, Hand of Ragnaros, -1, 80
      Backstage passes to a TAFKAL80ETC concert, -2, 0
      Backstage passes to a TAFKAL80ETC concert, -7, 0
      Backstage passes to a TAFKAL80ETC concert, -12, 0
      Conjured Mana Cake, -14, 0

      -------- day 18 --------
      name, sellIn, quality
      +5 Dexterity Vest, -8, 0
      Aged Brie, -16, 34
      Elixir of the Mongoose, -13, 0
      Sulfuras, Hand of Ragnaros, 0, 80
      Sulfuras, Hand of Ragnaros, -1, 80
      Backstage passes to a TAFKAL80ETC concert, -3, 0
      Backstage passes to a TAFKAL80ETC concert, -8, 0
      Backstage passes to a TAFKAL80ETC concert, -13, 0
      Conjured Mana Cake, -15, 0

      -------- day 19 --------
      name, sellIn, quality
      +5 Dexterity Vest, -9, 0
      Aged Brie, -17, 36
      Elixir of the Mongoose, -14, 0
      Sulfuras, Hand of Ragnaros, 0, 80
      Sulfuras, Hand of Ragnaros, -1, 80
      Backstage passes to a TAFKAL80ETC concert, -4, 0
      Backstage passes to a TAFKAL80ETC concert, -9, 0
      Backstage passes to a TAFKAL80ETC concert, -14, 0
      Conjured Mana Cake, -16, 0

      -------- day 20 --------
      name, sellIn, quality
      +5 Dexterity Vest, -10, 0
      Aged Brie, -18, 38
      Elixir of the Mongoose, -15, 0
      Sulfuras, Hand of Ragnaros, 0, 80
      Sulfuras, Hand of Ragnaros, -1, 80
      Backstage passes to a TAFKAL80ETC concert, -5, 0
      Backstage passes to a TAFKAL80ETC concert, -10, 0
      Backstage passes to a TAFKAL80ETC concert, -15, 0
      Conjured Mana Cake, -17, 0

      -------- day 21 --------
      name, sellIn, quality
      +5 Dexterity Vest, -11, 0
      Aged Brie, -19, 40
      Elixir of the Mongoose, -16, 0
      Sulfuras, Hand of Ragnaros, 0, 80
      Sulfuras, Hand of Ragnaros, -1, 80
      Backstage passes to a TAFKAL80ETC concert, -6, 0
      Backstage passes to a TAFKAL80ETC concert, -11, 0
      Backstage passes to a TAFKAL80ETC concert, -16, 0
      Conjured Mana Cake, -18, 0

      -------- day 22 --------
      name, sellIn, quality
      +5 Dexterity Vest, -12, 0
      Aged Brie, -20, 42
      Elixir of the Mongoose, -17, 0
      Sulfuras, Hand of Ragnaros, 0, 80
      Sulfuras, Hand of Ragnaros, -1, 80
      Backstage passes to a TAFKAL80ETC concert, -7, 0
      Backstage passes to a TAFKAL80ETC concert, -12, 0
      Backstage passes to a TAFKAL80ETC concert, -17, 0
      Conjured Mana Cake, -19, 0

      -------- day 23 --------
      name, sellIn, quality
      +5 Dexterity Vest, -13, 0
      Aged Brie, -21, 44
      Elixir of the Mongoose, -18, 0
      Sulfuras, Hand of Ragnaros, 0, 80
      Sulfuras, Hand of Ragnaros, -1, 80
      Backstage passes to a TAFKAL80ETC concert, -8, 0
      Backstage passes to a TAFKAL80ETC concert, -13, 0
      Backstage passes to a TAFKAL80ETC concert, -18, 0
      Conjured Mana Cake, -20, 0

      -------- day 24 --------
      name, sellIn, quality
      +5 Dexterity Vest, -14, 0
      Aged Brie, -22, 46
      Elixir of the Mongoose, -19, 0
      Sulfuras, Hand of Ragnaros, 0, 80
      Sulfuras, Hand of Ragnaros, -1, 80
      Backstage passes to a TAFKAL80ETC concert, -9, 0
      Backstage passes to a TAFKAL80ETC concert, -14, 0
      Backstage passes to a TAFKAL80ETC concert, -19, 0
      Conjured Mana Cake, -21, 0

      -------- day 25 --------
      name, sellIn, quality
      +5 Dexterity Vest, -15, 0
      Aged Brie, -23, 48
      Elixir of the Mongoose, -20, 0
      Sulfuras, Hand of Ragnaros, 0, 80
      Sulfuras, Hand of Ragnaros, -1, 80
      Backstage passes to a TAFKAL80ETC concert, -10, 0
      Backstage passes to a TAFKAL80ETC concert, -15, 0
      Backstage passes to a TAFKAL80ETC concert, -20, 0
      Conjured Mana Cake, -22, 0

      -------- day 26 --------
      name, sellIn, quality
      +5 Dexterity Vest, -16, 0
      Aged Brie, -24, 50
      Elixir of the Mongoose, -21, 0
      Sulfuras, Hand of Ragnaros, 0, 80
      Sulfuras, Hand of Ragnaros, -1, 80
      Backstage passes to a TAFKAL80ETC concert, -11, 0
      Backstage passes to a TAFKAL80ETC concert, -16, 0
      Backstage passes to a TAFKAL80ETC concert, -21, 0
      Conjured Mana Cake, -23, 0

      -------- day 27 --------
      name, sellIn, quality
      +5 Dexterity Vest, -17, 0
      Aged Brie, -25, 50
      Elixir of the Mongoose, -22, 0
      Sulfuras, Hand of Ragnaros, 0, 80
      Sulfuras, Hand of Ragnaros, -1, 80
      Backstage passes to a TAFKAL80ETC concert, -12, 0
      Backstage passes to a TAFKAL80ETC concert, -17, 0
      Backstage passes to a TAFKAL80ETC concert, -22, 0
      Conjured Mana Cake, -24, 0

      -------- day 28 --------
      name, sellIn, quality
      +5 Dexterity Vest, -18, 0
      Aged Brie, -26, 50
      Elixir of the Mongoose, -23, 0
      Sulfuras, Hand of Ragnaros, 0, 80
      Sulfuras, Hand of Ragnaros, -1, 80
      Backstage passes to a TAFKAL80ETC concert, -13, 0
      Backstage passes to a TAFKAL80ETC concert, -18, 0
      Backstage passes to a TAFKAL80ETC concert, -23, 0
      Conjured Mana Cake, -25, 0

      -------- day 29 --------
      name, sellIn, quality
      +5 Dexterity Vest, -19, 0
      Aged Brie, -27, 50
      Elixir of the Mongoose, -24, 0
      Sulfuras, Hand of Ragnaros, 0, 80
      Sulfuras, Hand of Ragnaros, -1, 80
      Backstage passes to a TAFKAL80ETC concert, -14, 0
      Backstage passes to a TAFKAL80ETC concert, -19, 0
      Backstage passes to a TAFKAL80ETC concert, -24, 0
      Conjured Mana Cake, -26, 0

      -------- day 30 --------
      name, sellIn, quality
      +5 Dexterity Vest, -20, 0
      Aged Brie, -28, 50
      Elixir of the Mongoose, -25, 0
      Sulfuras, Hand of Ragnaros, 0, 80
      Sulfuras, Hand of Ragnaros, -1, 80
      Backstage passes to a TAFKAL80ETC concert, -15, 0
      Backstage passes to a TAFKAL80ETC concert, -20, 0
      Backstage passes to a TAFKAL80ETC concert, -25, 0
      Conjured Mana Cake, -27, 0
      "
    `)
  })

  it('generates the correct output for 30 days', () => {
    expect(fakeLogs()).toMatchInlineSnapshot('""')
    extendedScenario(31)
    expect(fakeLogs()).toMatchInlineSnapshot(`
      "-------- day 0 --------
      name, sellIn, quality
      +12 Dexterity Vest, 10, 20
      Super Aged Brie, 2, 0
      Elixir of the Pandas, 5, 7
      Sulfuras, Hand of Ragnaros, 0, 80
      Sulfuras, Hand of Thor, -1, 80
      Backstage passes to a SUPER concert, 15, 20
      Backstage passes to a ANOTHER concert, 10, 49
      Backstage pass to a ABC concert, 5, 49
      Conjured Health Cake, 3, 23

      -------- day 1 --------
      name, sellIn, quality
      +12 Dexterity Vest, 9, 19
      Super Aged Brie, 1, 1
      Elixir of the Pandas, 4, 6
      Sulfuras, Hand of Ragnaros, 0, 80
      Sulfuras, Hand of Thor, -1, 80
      Backstage passes to a SUPER concert, 14, 21
      Backstage passes to a ANOTHER concert, 9, 50
      Backstage pass to a ABC concert, 4, 48
      Conjured Health Cake, 2, 21

      -------- day 2 --------
      name, sellIn, quality
      +12 Dexterity Vest, 8, 18
      Super Aged Brie, 0, 2
      Elixir of the Pandas, 3, 5
      Sulfuras, Hand of Ragnaros, 0, 80
      Sulfuras, Hand of Thor, -1, 80
      Backstage passes to a SUPER concert, 13, 22
      Backstage passes to a ANOTHER concert, 8, 50
      Backstage pass to a ABC concert, 3, 47
      Conjured Health Cake, 1, 19

      -------- day 3 --------
      name, sellIn, quality
      +12 Dexterity Vest, 7, 17
      Super Aged Brie, -1, 4
      Elixir of the Pandas, 2, 4
      Sulfuras, Hand of Ragnaros, 0, 80
      Sulfuras, Hand of Thor, -1, 80
      Backstage passes to a SUPER concert, 12, 23
      Backstage passes to a ANOTHER concert, 7, 50
      Backstage pass to a ABC concert, 2, 46
      Conjured Health Cake, 0, 17

      -------- day 4 --------
      name, sellIn, quality
      +12 Dexterity Vest, 6, 16
      Super Aged Brie, -2, 6
      Elixir of the Pandas, 1, 3
      Sulfuras, Hand of Ragnaros, 0, 80
      Sulfuras, Hand of Thor, -1, 80
      Backstage passes to a SUPER concert, 11, 24
      Backstage passes to a ANOTHER concert, 6, 50
      Backstage pass to a ABC concert, 1, 45
      Conjured Health Cake, -1, 13

      -------- day 5 --------
      name, sellIn, quality
      +12 Dexterity Vest, 5, 15
      Super Aged Brie, -3, 8
      Elixir of the Pandas, 0, 2
      Sulfuras, Hand of Ragnaros, 0, 80
      Sulfuras, Hand of Thor, -1, 80
      Backstage passes to a SUPER concert, 10, 25
      Backstage passes to a ANOTHER concert, 5, 50
      Backstage pass to a ABC concert, 0, 44
      Conjured Health Cake, -2, 9

      -------- day 6 --------
      name, sellIn, quality
      +12 Dexterity Vest, 4, 14
      Super Aged Brie, -4, 10
      Elixir of the Pandas, -1, 0
      Sulfuras, Hand of Ragnaros, 0, 80
      Sulfuras, Hand of Thor, -1, 80
      Backstage passes to a SUPER concert, 9, 27
      Backstage passes to a ANOTHER concert, 4, 50
      Backstage pass to a ABC concert, -1, 42
      Conjured Health Cake, -3, 5

      -------- day 7 --------
      name, sellIn, quality
      +12 Dexterity Vest, 3, 13
      Super Aged Brie, -5, 12
      Elixir of the Pandas, -2, 0
      Sulfuras, Hand of Ragnaros, 0, 80
      Sulfuras, Hand of Thor, -1, 80
      Backstage passes to a SUPER concert, 8, 29
      Backstage passes to a ANOTHER concert, 3, 50
      Backstage pass to a ABC concert, -2, 40
      Conjured Health Cake, -4, 1

      -------- day 8 --------
      name, sellIn, quality
      +12 Dexterity Vest, 2, 12
      Super Aged Brie, -6, 14
      Elixir of the Pandas, -3, 0
      Sulfuras, Hand of Ragnaros, 0, 80
      Sulfuras, Hand of Thor, -1, 80
      Backstage passes to a SUPER concert, 7, 31
      Backstage passes to a ANOTHER concert, 2, 50
      Backstage pass to a ABC concert, -3, 38
      Conjured Health Cake, -5, 0

      -------- day 9 --------
      name, sellIn, quality
      +12 Dexterity Vest, 1, 11
      Super Aged Brie, -7, 16
      Elixir of the Pandas, -4, 0
      Sulfuras, Hand of Ragnaros, 0, 80
      Sulfuras, Hand of Thor, -1, 80
      Backstage passes to a SUPER concert, 6, 33
      Backstage passes to a ANOTHER concert, 1, 50
      Backstage pass to a ABC concert, -4, 36
      Conjured Health Cake, -6, 0

      -------- day 10 --------
      name, sellIn, quality
      +12 Dexterity Vest, 0, 10
      Super Aged Brie, -8, 18
      Elixir of the Pandas, -5, 0
      Sulfuras, Hand of Ragnaros, 0, 80
      Sulfuras, Hand of Thor, -1, 80
      Backstage passes to a SUPER concert, 5, 35
      Backstage passes to a ANOTHER concert, 0, 50
      Backstage pass to a ABC concert, -5, 34
      Conjured Health Cake, -7, 0

      -------- day 11 --------
      name, sellIn, quality
      +12 Dexterity Vest, -1, 8
      Super Aged Brie, -9, 20
      Elixir of the Pandas, -6, 0
      Sulfuras, Hand of Ragnaros, 0, 80
      Sulfuras, Hand of Thor, -1, 80
      Backstage passes to a SUPER concert, 4, 38
      Backstage passes to a ANOTHER concert, -1, 0
      Backstage pass to a ABC concert, -6, 32
      Conjured Health Cake, -8, 0

      -------- day 12 --------
      name, sellIn, quality
      +12 Dexterity Vest, -2, 6
      Super Aged Brie, -10, 22
      Elixir of the Pandas, -7, 0
      Sulfuras, Hand of Ragnaros, 0, 80
      Sulfuras, Hand of Thor, -1, 80
      Backstage passes to a SUPER concert, 3, 41
      Backstage passes to a ANOTHER concert, -2, 0
      Backstage pass to a ABC concert, -7, 30
      Conjured Health Cake, -9, 0

      -------- day 13 --------
      name, sellIn, quality
      +12 Dexterity Vest, -3, 4
      Super Aged Brie, -11, 24
      Elixir of the Pandas, -8, 0
      Sulfuras, Hand of Ragnaros, 0, 80
      Sulfuras, Hand of Thor, -1, 80
      Backstage passes to a SUPER concert, 2, 44
      Backstage passes to a ANOTHER concert, -3, 0
      Backstage pass to a ABC concert, -8, 28
      Conjured Health Cake, -10, 0

      -------- day 14 --------
      name, sellIn, quality
      +12 Dexterity Vest, -4, 2
      Super Aged Brie, -12, 26
      Elixir of the Pandas, -9, 0
      Sulfuras, Hand of Ragnaros, 0, 80
      Sulfuras, Hand of Thor, -1, 80
      Backstage passes to a SUPER concert, 1, 47
      Backstage passes to a ANOTHER concert, -4, 0
      Backstage pass to a ABC concert, -9, 26
      Conjured Health Cake, -11, 0

      -------- day 15 --------
      name, sellIn, quality
      +12 Dexterity Vest, -5, 0
      Super Aged Brie, -13, 28
      Elixir of the Pandas, -10, 0
      Sulfuras, Hand of Ragnaros, 0, 80
      Sulfuras, Hand of Thor, -1, 80
      Backstage passes to a SUPER concert, 0, 50
      Backstage passes to a ANOTHER concert, -5, 0
      Backstage pass to a ABC concert, -10, 24
      Conjured Health Cake, -12, 0

      -------- day 16 --------
      name, sellIn, quality
      +12 Dexterity Vest, -6, 0
      Super Aged Brie, -14, 30
      Elixir of the Pandas, -11, 0
      Sulfuras, Hand of Ragnaros, 0, 80
      Sulfuras, Hand of Thor, -1, 80
      Backstage passes to a SUPER concert, -1, 0
      Backstage passes to a ANOTHER concert, -6, 0
      Backstage pass to a ABC concert, -11, 22
      Conjured Health Cake, -13, 0

      -------- day 17 --------
      name, sellIn, quality
      +12 Dexterity Vest, -7, 0
      Super Aged Brie, -15, 32
      Elixir of the Pandas, -12, 0
      Sulfuras, Hand of Ragnaros, 0, 80
      Sulfuras, Hand of Thor, -1, 80
      Backstage passes to a SUPER concert, -2, 0
      Backstage passes to a ANOTHER concert, -7, 0
      Backstage pass to a ABC concert, -12, 20
      Conjured Health Cake, -14, 0

      -------- day 18 --------
      name, sellIn, quality
      +12 Dexterity Vest, -8, 0
      Super Aged Brie, -16, 34
      Elixir of the Pandas, -13, 0
      Sulfuras, Hand of Ragnaros, 0, 80
      Sulfuras, Hand of Thor, -1, 80
      Backstage passes to a SUPER concert, -3, 0
      Backstage passes to a ANOTHER concert, -8, 0
      Backstage pass to a ABC concert, -13, 18
      Conjured Health Cake, -15, 0

      -------- day 19 --------
      name, sellIn, quality
      +12 Dexterity Vest, -9, 0
      Super Aged Brie, -17, 36
      Elixir of the Pandas, -14, 0
      Sulfuras, Hand of Ragnaros, 0, 80
      Sulfuras, Hand of Thor, -1, 80
      Backstage passes to a SUPER concert, -4, 0
      Backstage passes to a ANOTHER concert, -9, 0
      Backstage pass to a ABC concert, -14, 16
      Conjured Health Cake, -16, 0

      -------- day 20 --------
      name, sellIn, quality
      +12 Dexterity Vest, -10, 0
      Super Aged Brie, -18, 38
      Elixir of the Pandas, -15, 0
      Sulfuras, Hand of Ragnaros, 0, 80
      Sulfuras, Hand of Thor, -1, 80
      Backstage passes to a SUPER concert, -5, 0
      Backstage passes to a ANOTHER concert, -10, 0
      Backstage pass to a ABC concert, -15, 14
      Conjured Health Cake, -17, 0

      -------- day 21 --------
      name, sellIn, quality
      +12 Dexterity Vest, -11, 0
      Super Aged Brie, -19, 40
      Elixir of the Pandas, -16, 0
      Sulfuras, Hand of Ragnaros, 0, 80
      Sulfuras, Hand of Thor, -1, 80
      Backstage passes to a SUPER concert, -6, 0
      Backstage passes to a ANOTHER concert, -11, 0
      Backstage pass to a ABC concert, -16, 12
      Conjured Health Cake, -18, 0

      -------- day 22 --------
      name, sellIn, quality
      +12 Dexterity Vest, -12, 0
      Super Aged Brie, -20, 42
      Elixir of the Pandas, -17, 0
      Sulfuras, Hand of Ragnaros, 0, 80
      Sulfuras, Hand of Thor, -1, 80
      Backstage passes to a SUPER concert, -7, 0
      Backstage passes to a ANOTHER concert, -12, 0
      Backstage pass to a ABC concert, -17, 10
      Conjured Health Cake, -19, 0

      -------- day 23 --------
      name, sellIn, quality
      +12 Dexterity Vest, -13, 0
      Super Aged Brie, -21, 44
      Elixir of the Pandas, -18, 0
      Sulfuras, Hand of Ragnaros, 0, 80
      Sulfuras, Hand of Thor, -1, 80
      Backstage passes to a SUPER concert, -8, 0
      Backstage passes to a ANOTHER concert, -13, 0
      Backstage pass to a ABC concert, -18, 8
      Conjured Health Cake, -20, 0

      -------- day 24 --------
      name, sellIn, quality
      +12 Dexterity Vest, -14, 0
      Super Aged Brie, -22, 46
      Elixir of the Pandas, -19, 0
      Sulfuras, Hand of Ragnaros, 0, 80
      Sulfuras, Hand of Thor, -1, 80
      Backstage passes to a SUPER concert, -9, 0
      Backstage passes to a ANOTHER concert, -14, 0
      Backstage pass to a ABC concert, -19, 6
      Conjured Health Cake, -21, 0

      -------- day 25 --------
      name, sellIn, quality
      +12 Dexterity Vest, -15, 0
      Super Aged Brie, -23, 48
      Elixir of the Pandas, -20, 0
      Sulfuras, Hand of Ragnaros, 0, 80
      Sulfuras, Hand of Thor, -1, 80
      Backstage passes to a SUPER concert, -10, 0
      Backstage passes to a ANOTHER concert, -15, 0
      Backstage pass to a ABC concert, -20, 4
      Conjured Health Cake, -22, 0

      -------- day 26 --------
      name, sellIn, quality
      +12 Dexterity Vest, -16, 0
      Super Aged Brie, -24, 50
      Elixir of the Pandas, -21, 0
      Sulfuras, Hand of Ragnaros, 0, 80
      Sulfuras, Hand of Thor, -1, 80
      Backstage passes to a SUPER concert, -11, 0
      Backstage passes to a ANOTHER concert, -16, 0
      Backstage pass to a ABC concert, -21, 2
      Conjured Health Cake, -23, 0

      -------- day 27 --------
      name, sellIn, quality
      +12 Dexterity Vest, -17, 0
      Super Aged Brie, -25, 50
      Elixir of the Pandas, -22, 0
      Sulfuras, Hand of Ragnaros, 0, 80
      Sulfuras, Hand of Thor, -1, 80
      Backstage passes to a SUPER concert, -12, 0
      Backstage passes to a ANOTHER concert, -17, 0
      Backstage pass to a ABC concert, -22, 0
      Conjured Health Cake, -24, 0

      -------- day 28 --------
      name, sellIn, quality
      +12 Dexterity Vest, -18, 0
      Super Aged Brie, -26, 50
      Elixir of the Pandas, -23, 0
      Sulfuras, Hand of Ragnaros, 0, 80
      Sulfuras, Hand of Thor, -1, 80
      Backstage passes to a SUPER concert, -13, 0
      Backstage passes to a ANOTHER concert, -18, 0
      Backstage pass to a ABC concert, -23, 0
      Conjured Health Cake, -25, 0

      -------- day 29 --------
      name, sellIn, quality
      +12 Dexterity Vest, -19, 0
      Super Aged Brie, -27, 50
      Elixir of the Pandas, -24, 0
      Sulfuras, Hand of Ragnaros, 0, 80
      Sulfuras, Hand of Thor, -1, 80
      Backstage passes to a SUPER concert, -14, 0
      Backstage passes to a ANOTHER concert, -19, 0
      Backstage pass to a ABC concert, -24, 0
      Conjured Health Cake, -26, 0

      -------- day 30 --------
      name, sellIn, quality
      +12 Dexterity Vest, -20, 0
      Super Aged Brie, -28, 50
      Elixir of the Pandas, -25, 0
      Sulfuras, Hand of Ragnaros, 0, 80
      Sulfuras, Hand of Thor, -1, 80
      Backstage passes to a SUPER concert, -15, 0
      Backstage passes to a ANOTHER concert, -20, 0
      Backstage pass to a ABC concert, -25, 0
      Conjured Health Cake, -27, 0
      "
    `)
  })
})
