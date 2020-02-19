
const dev = require('../../dczk/build/contracts/DCZK.json')
module.exports = {
  /* '0.3': {
    net: 'Kovan',
    dczk: dev.networks['42'].address,
    abi: dev.abi
  }, */
  0.3: {
    net: 'Kovan',
    dczk: '0x621949FE9028A687aB9a3C04F6c6d6ab36A2E5db',
    abi: require('../dczk/abi/DCZK/0.3/DCZK.json')
  },
  0.2: {
    net: 'Kovan',
    dczk: '0x27De52bed4BD1aAf4F8fAcDB494Bc6527D5B93b1',
    abi: require('../dczk/abi/DCZK/0.2/DCZK.json')
  },
  0.1: {
    net: 'Kovan',
    dczk: '0x1807123556d328E1eff32C2c743B89E079CE1f65',
    abi: require('../dczk/abi/DCZK/0.1/DCZK.json')
  }
}
