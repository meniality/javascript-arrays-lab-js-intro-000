var kittens = [`Milo`, `Otis`, `Garfield`]

function destructivelyAppendKitten(name){
  kittens.push(name)
  return kittens
}

function destructivelyPrependKitten(name){
  kittens.shift(name)
  return kittens
}