function array(string) {
  // TODO
      let ary = string.split(',')
  if(ary.length >= 3){
      ary.shift()
      ary.pop()
      return ary.join(' ')
  }else {
  
   return null
  }
}