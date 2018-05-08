import Mock from 'mockjs'

let Random = Mock.Random
let menuList = () => {
  let template = []
  for (let i = 0; i < 11; i++) {
    let tem = {
      src: Random.url('http'),
      img: Random.dataImage('90x90'),
      name: Random.cname()
    }
    template.push(tem)
  }
  return template
}

let number = Random.integer(1000, 5000)
let count = Random.integer(1, 20)
let shopList = () => {
  let template = []
  for (let i = 0; i < count; i++) {
    let tem = {
      img: Random.dataImage('130x130'),
      isBrand: Random.boolean(),
      singList: ['广告', '票'],
      name: Random.ctitle(),
      rate: Random.float(0, 4.99999, 1, 1),
      goodNum: Random.integer(0, 10000),
      startM: Random.integer(0, 50),
      distributionFee: Random.integer(0, 10),
      distance: Random.float(0, 100, 2, 2),
      time: Random.integer(0, 100),
      idGoodShop: Random.boolean(),
      active: [
        {
          title: '首',
          content: Random.csentence(5, 20)
        },
        {
          title: '减',
          content: Random.csentence(5, 20)
        },
        {
          title: '折',
          content: Random.csentence(5, 20)
        },
        {
          title: '折',
          content: Random.csentence(5, 20)
        },
        {
          title: '惠',
          content: Random.csentence(5, 20)
        },
        {
          title: '返',
          content: Random.csentence(5, 20)
        }
      ]
    }
    template.push(tem)
  }
  return template
}

let addressList = () => {
  let template = []
  for (let i = 0; i < 12; i++) {
    let tem = {
      title: Random.ctitle(),
      detail: Random.csentence(5, 40)
    }
    template.push(tem)
  }
  return template
}
Mock.mock('api/getMenu', menuList)
Mock.mock('api/getNumber', number)
Mock.mock('api/getShopList', shopList)
Mock.mock('api/getAddpList', addressList)
