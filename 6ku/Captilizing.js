function capMe(names) {
  return names.map(elem => 
    elem[0].toUpperCase() + elem.slice(1).toLowerCase()
  )
}