function toCamelCase(str) {
    if (str.includes('_')) {
        return str.split('_').map(e => e.charAt(0).toUpperCase() + e.slice(1)).join('')

    } else if (str.includes('-')) {
        return str.split('-').map(e => {

            if (e[0] == e[0].toUpperCase()) {
                return e[0].toLowerCase() + e.slice(1)
            } else {
                return e.toUpperCase() + e.slice(1)
            }

        }).join('')
    } else {
        return str.split(' ').map(e => {
            if (e[0] === e[0].toLowerCase()) {
                return e[0].toUpperCase() + e.slice(1)

            } else {
                return e[0].toLowerCase() + e.slice(1)
            }
        }).join('')


    }

}


'https://www.codewars.com/kata/517abf86da9663f1d2000003/train/javascript'
'https://www.codewars.com/kata/52ed326b8df6540e06000029'
'https://www.codewars.com/kata/5b728f801db5cec7320000c7/train/javascript'