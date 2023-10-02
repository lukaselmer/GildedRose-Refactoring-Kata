import { Item } from './Item'

export function expired(item: Item) {
  return item.sellIn < 0
}

export function decreaseSellIn(item: Item) {
  item.sellIn = item.sellIn - 1
}
