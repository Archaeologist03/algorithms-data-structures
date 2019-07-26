// 6kyu

function isValidWalk(walk) {
  if (walk.length !== 10) return false;
  
  const obj = {
    n: 0,
    s: 0,
    w: 0,
    e: 0,
  };
  
  walk.forEach(step => obj[step]++)
  
  return obj.n === obj.s && obj.w === obj.e ? true : false;
}

console.log(isValidWalk(['n','s','n','s','n','s','n','s','n','s']))
console.log(isValidWalk(['s']))
console.log(isValidWalk(['n','n','n','s','n','s','n','s','n','s']))
console.log(isValidWalk(['n','n','n','s','s','s','n','s','e','w']))