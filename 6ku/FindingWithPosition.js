function alphabetPosition(text) {
    let final = '';

    // Convert to lowercase and remove all non-letter characters
    let s = text
        .toLowerCase()
        .split('')
        .filter(el => 'abcdefghijklmnopqrstuvwxyz'.includes(el))
        .join('');

    for (let i = 0; i < s.length; i++) {
        if (s[i] === 'a') { final += '1 '; }
        else if (s[i] === 'b') { final += '2 '; }
        else if (s[i] === 'c') { final += '3 '; }
        else if (s[i] === 'd') { final += '4 '; }
        else if (s[i] === 'e') { final += '5 '; }
        else if (s[i] === 'f') { final += '6 '; }
        else if (s[i] === 'g') { final += '7 '; }
        else if (s[i] === 'h') { final += '8 '; }
        else if (s[i] === 'i') { final += '9 '; }
        else if (s[i] === 'j') { final += '10 '; }
        else if (s[i] === 'k') { final += '11 '; }
        else if (s[i] === 'l') { final += '12 '; }
        else if (s[i] === 'm') { final += '13 '; }
        else if (s[i] === 'n') { final += '14 '; }
        else if (s[i] === 'o') { final += '15 '; }
        else if (s[i] === 'p') { final += '16 '; }
        else if (s[i] === 'q') { final += '17 '; }
        else if (s[i] === 'r') { final += '18 '; }
        else if (s[i] === 's') { final += '19 '; }
        else if (s[i] === 't') { final += '20 '; }
        else if (s[i] === 'u') { final += '21 '; }
        else if (s[i] === 'v') { final += '22 '; }
        else if (s[i] === 'w') { final += '23 '; }
        else if (s[i] === 'x') { final += '24 '; }
        else if (s[i] === 'y') { final += '25 '; }
        else if (s[i] === 'z') { final += '26 '; }
    }

    return final.trim();
}
