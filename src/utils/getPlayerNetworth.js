//this funcion recieves the player.estWorthPrev which is divided by a dot(.). it returns the field without the dot
export const getPlayerNetworth = (money) => {
  const initialMoney = money
  // console.log('initialMoney', initialMoney)
  const moneyParts = initialMoney.toString()
  // console.log('moneyParts', moneyParts)
  const networth = moneyParts.replace('.', '')
  // console.log('player', player)
  return +networth
}
