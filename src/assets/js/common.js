let debounce = (fn, delay, rundelay) => {
  let timer = null
  let startTime
  return () => {
    let current = this
    let lastTime = +new Date()
    let arg = arguments
    clearTimeout(timer)
    // debugger
    if (!startTime) {
      startTime = lastTime
    }
    if (lastTime - startTime > rundelay) {
      fn.apply(current, arg)
      startTime = lastTime
    } else {
      timer = setTimeout(() => {
        fn.apply(current, arg)
      }, delay)
    }
  }
}
let eventLister = (() => {
  if (window.addEventListener) {
    return (el, type, fn, bubble = false) => {
      el.addEventListener(type, fn, bubble)
    }
  } else {
    return (el, type, fn) => {
      el.attachEvent('on' + type, fn)
    }
  }
})()
let findParent = (ele, type = '') => {
  if (!type) {
    return ele.parentNode
  } else {
    let type1 = type.substring(0, 1)
    let type2 = type.substring(1)
    switch (type1) {
      case '.':
        if (ele.parentNode.className.indexOf(type2) !== -1) {
          return ele.parentNode
        } else {
          return findParent(ele.parentNode, type)
        }
      case '#':
        if (ele.parentNode.id.indexOf(type2) !== -1) {
          return ele.parentNode
        } else {
          return findParent(ele.parentNode, type)
        }
      default:
        if (ele.parentNode.nodeName.indexOf(type2) !== -1) {
          return ele.parentNode
        } else {
          return findParent(ele.parentNode, type)
        }
    }
  }
}
export {debounce, eventLister, findParent}
