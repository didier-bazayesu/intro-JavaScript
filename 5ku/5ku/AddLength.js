function addLength(str) {
    //start-here
    return str.split(' ').map(elem => elem + ` ${elem.length}`)
}
