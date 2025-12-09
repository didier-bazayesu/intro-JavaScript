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
const a = returnHelloWord();
const b = a();
const c = b();
const d = c();
const e = d();
console.log(e)