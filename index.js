function destructivelyAppendKitten(name){
 kittens.push(name)
  return kittens
}

function destructivelyPrependKitten(name){
  kittens.unshift(name)
  return kittens
}

function destructivelyRemoveLastKitten(){
  kittens.pop()
  return kittens
}

function destructivelyRemoveFirstKitten(){
  kittens.shift()
  return kittens
}

function appendKitten(name){
  return [kittens.appendKitten()]
}

function prependKitten(name){
  return [kitten, ...array]
}

function removeLastKitten(){
  return slice(0, kitten.length-1)
}