import helloForname from "./helloForname.js"
import {hello as holi }from "./hello.js"
// import {hello }from "./hello.js"

const main = () => {
const msg = helloForname

console.log(msg('facuwu'));
console.log(holi());
}

export default main()