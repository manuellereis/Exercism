export const hourPerday = 8;
export const monthDays = 22;
export const dayRate = (ratePerHour) => ratePerHour * hourPerday;
export function daysInBudget (ocamento, ratePerHour){
  return Math.floor(ocamento / (ratePerHour * hourPerday)) 
}
export function priceWithMonthlyDiscount (ratePerHour, Days, discount){
  const count = (Days / monthDays) * monthDays * dayRate(ratePerHour)
  const restDays = monthDays
  return Math.ceil(count - discount * count + remainingDays * dayRate(ratePerHour))
}

