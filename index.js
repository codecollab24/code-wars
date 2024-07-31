function disemvowel(str) {
  return [...str].filter(el => !(['a', 'e', 'i', 'o', 'u']).includes(el.toLowerCase())).join('');
}

console.log(disemvowel("This website is for losers LOL!"));