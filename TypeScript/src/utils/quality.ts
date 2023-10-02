import { Item } from '../Item'

export function decreaseQualityToMin0(item: Item, by = 1) {
  item.quality = Math.max(0, item.quality - by)
}

export function expireBackstagePass(item: Item) {
  item.quality = 0
}

export function increaseQualityToMax50(item: Item, by = 1) {
  item.quality = Math.min(50, item.quality + by)
}
