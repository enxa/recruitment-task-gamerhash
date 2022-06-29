import { viewport } from '$lib/viewport.js'

export const animateInViewport = (node) => {
  let enterViewport = () => {
    node.setAttribute('style', `
      clip-path: polygon(0 0, 100% 0%, 100% 100%, 0% 100%);
      transition: 1.2s clip-path ease-in-out;
    `)
  }

  let exitViewport = () => {
    node.setAttribute('style', `
      clip-path: polygon(0 0, 0 0, 0 100%, 0% 100%);
      transition: 1.2s clip-path ease-in-out;
    `)
  }

  viewport(node, enterViewport, exitViewport)
}