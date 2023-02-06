export const getSlicedArray = (array, pageQty, pageNo) => {
    return array.slice(pageNo*pageQty, (pageNo*pageQty)+pageQty)
}

export const succesiveFilterArray = (array, filterObj) => {
    const localFilterKeys = Object.keys(filterObj).filter(k => filterObj[k] !== null);
    let filteredArray = [...array];
    localFilterKeys.forEach(key => {
        filteredArray = filteredArray.filter(obj => obj[key] === filterObj[key])
    })
    return filteredArray;
}