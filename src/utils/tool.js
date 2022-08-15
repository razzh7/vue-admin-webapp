export const matchMap = (mapArr, val, isMapIcon = false) => {
  const mapItem = mapArr.find(item => item.dictValue == val)
  if (isMapIcon) {
    if (mapItem.dictLabel === '微信') {
      return 'weixin'
    }
    if (mapItem.dictLabel === '支付宝') {
      return 'zhifubao'
    }
    if (mapItem.dictLabel.includes('卡')) {
      return 'bankcard'
    }
  }

  if (mapItem) {
    return mapItem.dictLabel
  } else {
    return ''
  }
}