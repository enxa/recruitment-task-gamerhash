export const smoothSite = (node, params) => {
  let previousPosition = 0
  let currentPosition = 0
  let easing = 0.1
  
  // let easing = params.easing || 0.05

  let lerp = (a, b, n) => Math.round((1 - n) * a + n * b)
  let animate = () => {
    document.body.style.height = `${node.scrollHeight}px`
    node.style.transform = `translateY(${-1*previousPosition}px)`
    node.style.position = 'fixed'
    
    currentPosition = window.pageYOffset || document.documentElement.scrollTop
    previousPosition = lerp(previousPosition, currentPosition, easing)
    requestAnimationFrame(() => animate())
  }
  animate()
}