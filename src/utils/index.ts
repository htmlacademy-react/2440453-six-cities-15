function calcHiddenPremiumClass(isPremium: boolean, className: string): string {
  const classHiddenPremium = !isPremium ? ' visually-hidden' : '';
  return (`${className}${classHiddenPremium}`);
}

function calcBookmarkActiveClass(isFavorite: boolean, className: string): string {
  const classActive = isFavorite ? ` ${className}--active` : '';
  return (classActive);
}

function calcRaitingPersent(rating:number): string {
  const roundRating = Math.round(+rating);
  return (`${roundRating * 20}%`);
}

export { calcHiddenPremiumClass, calcRaitingPersent, calcBookmarkActiveClass };
