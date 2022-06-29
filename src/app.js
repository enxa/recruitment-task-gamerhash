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

export const gamercoinSection = writable({
  header: 'We are creating GamerCoin (GHX) - native token for gamers!',
  body: 'GamerCoin is a token of GamerHash platform - it\'s the last puzzle of gaming ecosystem and fuel which makes 500.00 users life easier.<br>Gamers will have many ways to earn GHX trough mining or entertainment on the platform. Keeping tokens in the wallet will bring many benefits & spending GHX in the Marketplace will open special offers',
  subheader: 'It\'s a game changer for gaming generation!'
})

export const wallet = writable({
  coinName: 'GAMERCOIN (GHX)',
  coinToken: '0x728f30fa2f100742c7949d1961804fa8e0b1387d'
})

export const crypto = writable([
  {
    name: 'Bitcoin',
    currencyCode: 'BTN',
    valueBTC: 0.48,
    valueUSD: 3925.36,
    icon: '/images/btc-icon.svg'
  },
  {
    name: 'Ethereum',
    currencyCode: 'ETH',
    valueBTC: 0.48,
    valueUSD: 3925.36,
    icon: '/images/etc-icon.svg'
  },
  {
    name: 'Lite Coin',
    currencyCode: 'LTC',
    valueBTC: 0.48,
    valueUSD: 3925.36,
    icon: '/images/ltc-icon.svg'
  }
])

export const cryptoSelectIsOpen = writable(false)

export const devices = writable([
  {
    name: 'low-end',
    value: 9004.21,
    icon: '/images/low-end.svg',
  },
  {
    name: 'mid-shelf',
    value: 9004.21,
    icon: '/images/mid-shelf.svg',
  },
  {
    name: 'high-end',
    value: 9004.21,
    icon: '/images/high-end.svg',
  },
  {
    name: '7x GPU',
    value: 9004.21,
    icon: '/images/7xGPU.svg',
  },
])