
export const sortByAssetClass = (items, values) => {

  let results = []
  for (let value of values) {
    for (let item of items) {
      if (item.assetClass.toUpperCase() === value.toUpperCase()) {
        results.push(item)
      }
    }
  }
  return results
}

export const sortByString = (items, key, reverse = false) => {
  return items.sort(function (a, b) {
    if (a[key] < b[key]) {
      return reverse ? 1 : -1;
    }
    if (a[key] > b[key]) {
      return reverse ? -1 : 1;
    }
    return 0;
  });
}

export const sortByNumber = (items, key, reverse = false) => {
  return items.sort((a, b) => reverse ? b[key] - a[key] : a[key] - b[key]);
}