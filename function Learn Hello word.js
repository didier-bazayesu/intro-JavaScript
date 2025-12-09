function returnHelloWord() {
    return function () {
        return function () {
            return function () {
                return function () {
                    let d = 4
                    return ("hello world " + d);
                }
            }
        }
    }
}
const a = returnHelloWord()()()()();
console.log(a);
