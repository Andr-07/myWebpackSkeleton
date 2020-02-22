async function start() {
    await Promise.resolve('async is working')
}

start().then(console.log('babel here'))

const unused = 42;

class Util {
    static id = Date.now()
}

console.log('Util id: ', Util.id)

import('lodash').then(_ => {
    console.log('LOdash', _.random(0, 42, true))
})