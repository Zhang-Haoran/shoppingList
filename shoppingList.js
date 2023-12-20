let shoppingList = ['⽜奶', '鸡蛋', '⾯包']

shoppingList.push('苹果', '香蕉')
console.log(shoppingList)

console.log(shoppingList.slice(0, shoppingList.length - 1))

const isFull = (shoppingList) => {
  if (shoppingList.length > 5) {
    console.log('你的购物车满了')
  }
}
isFull(shoppingList)

for (let i = 0; i < shoppingList.length; i++) {
  console.log(`${i + 1}. ${shoppingList[i]} `)
}

const isIncluded = (itemName) => {
  return shoppingList.includes(itemName) ? true : false
}
console.log(`包含牛奶？ ${isIncluded('牛奶')}`)

let item = {
  name: '⽜奶',
  price: 12,
  quantity: 1,
}
