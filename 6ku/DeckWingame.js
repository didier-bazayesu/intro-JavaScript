function winner(deckSteve, deckJosh) {
    // TODO

    let joshScore = 0
    let SteveJosh = 0
    let equal = 0

    let steve = deckSteve.map((elem, i) => {
        if (elem === 'K') return deckSteve[i] = 13;
        if (elem === 'T') return deckSteve[i] = 10;
        if (elem === 'J') return deckSteve[i] = 11;
        if (elem === 'Q') return deckSteve[i] = 12;
        if (elem === 'A') return deckSteve[i] = 14;
        return elem
    })

    let josh = deckJosh.map((el, i) => {
        if (el == 'K') return deckJosh[i] = 13;
        if (el == 'T') return deckJosh[i] = 10;
        if (el == "J") return deckJosh[i] = 11;
        if (el == "Q") return deckJosh[i] = 12;
        if (el == "A") return deckJosh[i] = 14;
        return el
    })

    josh = josh.map(Number)
    steve = steve.map(Number)

    for (let i = 0; i < josh.length; i++) {
        if (josh[i] > steve[i]) {
            joshScore++
        }
        else if (josh[i] < steve[i]) {
            SteveJosh++
        } else {
            equal++
        }
    }

    return SteveJosh >
        joshScore ? `Steve wins ${SteveJosh} to ${joshScore}` :
        SteveJosh < joshScore ? `Josh wins ${joshScore} to ${SteveJosh}` : 'Tie'



}