export const calcTotalPrice = (items) => items.reduce((sum, game) => sum += game.price, 0);
