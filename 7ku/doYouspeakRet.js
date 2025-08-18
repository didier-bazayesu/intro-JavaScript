function reverseByCenter(s) {
    s = s.split('')
    // ...
    if (s.length % 2 === 0) {
        let part1 = s.length / 2
        let p1 = s.slice(0, part1)
        let p2 = s.slice(part1, s.length)
        return [...p2, ...p1].join('')

    } else {
        let part1 = (s.length - 1) / 2
        let word = s[part1]
        let p1 = s.slice(0, part1)
        let p2 = s.slice(part1 + 1, s.length)


        return [...p2, word, ...p1].join('')


    }


}