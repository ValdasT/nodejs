
const print = (err, contents) => { 
  if (err) console.error(err)
  else console.log(contents )
}

const opA = (cb) => {
  setTimeout(() => {
    cb(null, 'A')
  }, 500)
}

const opB = (cb) => {
  setTimeout(() => {
    cb(null, 'B')
  }, 250)
}

const opC = (cb) => {
  setTimeout(() => {
    cb(null, 'C')
  }, 125)
}

const run = () => {
  opA(print);
  opB(print);
  opC(print);
  // opC((err, data) => {
  //   print(err, data)
  //   opB((err, data) => {
  //     print(err, data)
  //     opA((err, data) => {
  //       print(err, data)
  //     })
  //   })
  // })
}

run()
