import { Item } from './Item'

export function normal(item: Item) {
  return !special(item)
}

function special(item: Item) {
  return agedBrie(item) || backstagePass(item) || legendary(item) || conjured(item)
}

export function backstagePass(item: Item) {
  return item.name.includes('Backstage passes')
}

export function agedBrie(item: Item) {
  return item.name.includes('Aged Brie')
}

export function conjured(item: Item) {
  return item.name.includes('Conjured')
}

function legendary(item: Item) {
  return item.name.includes('Sulfuras')
}
