function duplicateCount(text){
  let textArr = [...text.toLowerCase()];
  let dict = {}
  let dupCount = 0

  textArr.forEach(el => {
    Object.keys(dict).includes(el) ? dict[el] += 1 : dict[el] = 1
  })
  
  Object.values(dict).forEach(el => {
    if (el > 1) dupCount += 1
  })

  return dupCount
}

console.log(duplicateCount("aabbcde"));