import { writable } from 'svelte/store'

export const modalIsOpen = writable(false)

export const headerLinks = writable([
  {
    icon: '/images/icon-2.svg',
    name: 'how much can i earn',
    url: 'http://www.gamerhash.com'
  },
  {
    icon: '/images/icon.svg',
    name: 'how to mine?',
    url: 'http://www.gamerhash.com'
  },
  {
    icon: '/images/icon-1.svg',
    name: 'buy devices',
    url: 'http://www.gamerhash.com'
  }
])