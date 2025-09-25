function ensureQuestion(s) {
    // Code here

    s = s.split('');

    let n = s.some(elem => elem == '?');
    if (n) return s.join('')
    s.push('?')
    return s.join('')
}
