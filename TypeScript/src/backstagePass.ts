import { Item } from './gilded-rose'

export function normal(item: Item) {
  return !special(item)
}
function special(item: Item) {
  return agedBrie(item) || backstagePass(item) || legendary(item)
}
export function backstagePass(item: Item) {
  return item.name === 'Backstage passes to a TAFKAL80ETC concert'
}
export function agedBrie(item: Item) {
  return item.name === 'Aged Brie'
}
function legendary(item: Item) {
  return item.name === 'Sulfuras, Hand of Ragnaros'
}
