import { Message, MessageBox } from 'element-ui'

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

/**
 * @param {stirng} tips
 * @param {string} title
 * @param {string} type
 * @param {function} fn
*/
export function comfirmBox(tips, title, type, fn) {
  if (!tips) tips = '此操作将永久删除该条数据, 是否继续?'
  if (!title) title = '提示'
  if (!type) type = 'warning'
  MessageBox.confirm(tips, title, {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type,
  })
    .then(async () => {
      const { msg } = await fn()
      Message({
        showClose: true,
        type: 'success',
        message: msg,
      })
    })
    .catch(err => {
      Message({
        showClose: true,
        type: 'info',
        message: err === 'cancel' ? '取消删除' : err,
      })
    })
}