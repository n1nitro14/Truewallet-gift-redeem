const truewallet = require('./truewallet')

var linktw = 'https://gift.truemoney.com/campaign/?v=o4Xmn12jhkkejaffip'
//กดรับซอง
truewallet.pay('0800934345', linktw)
  .then(async (res) => {
  if (res.status === 'SUCCESS') {
    console.log(res.status + 'You have recharged the amount' + res.amount)
  } else {
    console.log(res.status + 'Reason : ' + res.reason)
  }
}) //truewallet.pay(เบอร์ที่รับซอง, ลิ้งซองอั่งเปา)
