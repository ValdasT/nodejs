
// to run type node --inspect app.js

//For most cases however, it is better to cause the process to start with an active breakpoint at the very beginning of the program using the --inspect-brk flag:
//node --inspect-brk app.js
// than open chrome browser url: chrome://inspect

function f (n = 99) {
    if (n === 0) throw Error()
    f(n - 1)
  }
  f()