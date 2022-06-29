export const viewport = (node, enterViewport = () => {}, exitViewport = () => {}) => {
  let intersectionObserver
  
  let initializeIntersectionObserver = () => {
    intersectionObserver = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          let eventName = entry.isIntersecting ? 'enterViewport' : 'exitViewport'
          entry.target.dispatchEvent(new CustomEvent(eventName))
          if (eventName === 'enterViewport') enterViewport()
          if (eventName === 'exitViewport') exitViewport()
        })
      }
    )
  }

  if (!intersectionObserver) initializeIntersectionObserver()
  intersectionObserver.observe(node)
  
  return {
    destroy() {
      intersectionObserver.unobserve(node)
    }
  }
}