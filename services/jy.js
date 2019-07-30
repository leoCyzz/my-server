const logisticsInfo = [
    {
      Time: '2019-06-19 19:57',
      State: '已签收',
      Log: '代签收(丰巢 ),,期待再次为您服务',
    },
    {
      Time: '2019-06-19 18:54',
      State: '派送中',
      Log: '快件交给，正在派送途中（联系电话：）',
    },
    {
      Time: '2019-06-19 18:39',
      State: '运送中',
      Log: '快件到达 【苏州工业园群星苑营业点】',
    },
    {
      Time: '2019-06-19 17:55',
      State: '运送中',
      Log: '快件已发车',
    },
    {
      Time: '2019-06-19 17:55',
      State: '运送中',
      Log: '快件在【苏州吴中集散中心】已装车,准备发往 【苏州工业园群星苑营业点】',
    },
    {
      Time: '2019-06-19 16:54',
      State: '运送中',
      Log: '快件到达 【苏州吴中集散中心】',
    },
    {
      Time: '2019-06-19 15:24',
      State: '运送中',
      Log: '快件已发车',
    },
    {
      Time: '2019-06-19 14:40',
      State: '运送中',
      Log: '快件在【上海虹桥集散中心2】已装车,准备发往 【苏州吴中集散中心】',
    },
    {
      Time: '2019-06-19 13:46',
      State: '运送中',
      Log: '快件到达 【上海虹桥集散中心2】',
    },
    {
      Time: '2019-06-19 13:07',
      State: '运送中',
      Log: '快件已发车',
    },
    {
      Time: '2019-06-19 13:06',
      State: '运送中',
      Log: '快件在【上海闵行宝虹营业点】已装车,准备发往下一站',
    },
    {
      Time: '2019-06-19 11:22',
      State: '已取件',
      Log: '已收取快件',
    }
  ];

class JYWeb {
    constructor(req, res){
		this.req = req
		this.res = res
    }
	doAction(actionName) {
        let status = 200;
        const actName = actionName.split('/');
        const funName = actName[1];
		if(this[funName]) {
			const res = this[funName](this.req);
			return this.res.status(status).json(res);
		} else {
			return this.res.status(404).json('');
		}	
    }


    login(req) {
        console.log(req.body);
        return {
            UserId: '123',
            UserName: 'hhh'
        }
    }

    trackInfo() {
        return {
          TrackInfo: {
            WaybillNo: '123123123',
            ProductName: '产品1',
            LogisticsInfo: logisticsInfo
          }
        }
    }

    newsInfo() {
        return {
          NewsInfo: [
            {
              Title: '关于某某某的通知',
              Time: '2019-07-25',
              Content: `这是一条新闻这是一条新闻这是一条新闻这是一条新闻这是一条新闻
              这是一条新闻这是一条新闻这是一条新闻这是一条新闻这是一条新闻，
              这是一条新闻这是一条新闻这是一条新闻这是一条新闻这是一条新闻这是一条新闻，
              这是一条新闻这是一条新闻这是一条新闻。这是一条新闻这是一条新闻这是一条新闻。
              这是一条新闻这是一条新闻这是一条新闻这是一条新闻这是一条新闻，
              这是一条新闻这是一条新闻这是一条新闻这是一条新闻这是一条新闻。`
            },
            {
              Title: '关于某某某的通知',
              Time: '2019-07-25',
              Content: `这是一条新闻这是一条新闻这是一条新闻这是一条新闻这是一条新闻
              这是一条新闻这是一条新闻这是一条新闻这是一条新闻这是一条新闻，
              这是一条新闻这是一条新闻这是一条新闻这是一条新闻这是一条新闻这是一条新闻，
              这是一条新闻这是一条新闻这是一条新闻。这是一条新闻这是一条新闻这是一条新闻。
              这是一条新闻这是一条新闻这是一条新闻这是一条新闻这是一条新闻，
              这是一条新闻这是一条新闻这是一条新闻这是一条新闻这是一条新闻。`
            },
            {
              Title: '关于某某某的通知',
              Time: '2019-07-25',
              Content: `这是一条新闻这是一条新闻这是一条新闻这是一条新闻这是一条新闻
              这是一条新闻这是一条新闻这是一条新闻这是一条新闻这是一条新闻，
              这是一条新闻这是一条新闻这是一条新闻这是一条新闻这是一条新闻这是一条新闻，
              这是一条新闻这是一条新闻这是一条新闻。这是一条新闻这是一条新闻这是一条新闻。
              这是一条新闻这是一条新闻这是一条新闻这是一条新闻这是一条新闻，
              这是一条新闻这是一条新闻这是一条新闻这是一条新闻这是一条新闻。`
            },
            {
              Title: '关于某某某的通知',
              Time: '2019-07-25',
              Content: `这是一条新闻这是一条新闻这是一条新闻这是一条新闻这是一条新闻
              这是一条新闻这是一条新闻这是一条新闻这是一条新闻这是一条新闻，
              这是一条新闻这是一条新闻这是一条新闻这是一条新闻这是一条新闻这是一条新闻，
              这是一条新闻这是一条新闻这是一条新闻。这是一条新闻这是一条新闻这是一条新闻。
              这是一条新闻这是一条新闻这是一条新闻这是一条新闻这是一条新闻，
              这是一条新闻这是一条新闻这是一条新闻这是一条新闻这是一条新闻。`
            }
          ]
        }
    }

    offer () {
        return {
            ProductInfo: [
                { ErrorMes: "UPS红单 Product has no quotation.", ProductName: "UPS红单", Freight: 0},
                { ErrorMes: "UPS蓝单 Product has no quotation.", ProductName: "UPS蓝单", Freight: 0},
                { ErrorMes: "迪拜DHL Product has no quotation.", ProductName: "迪拜DHL", Freight: 0},
                { ErrorMes: "上海DHL Product has no quotation.", ProductName: "上海DHL", Freight: 0},
                { ErrorMes: "上海FEDEX--IP Product has no quotation.", ProductName: "上海FEDEX--IP", Freight: 0},
                { ErrorMes: "上海FEDEX--IE Product has no quotation.", ProductName: "上海FEDEX--IE", Freight: 0},
                { ErrorMes: "CKEEX自有专线 Product has no quotation.", ProductName: "CKEEX自有专线", Freight: 0}
            ]
        }
    }
    quote () {
        return {
            Freight: 1234
        }
    }

    ship() {
        return {
            WaybillNo: '98798799887799'
        }
    }

    record() {
        return {
            RecordInfo: [
                {
                    WaybillNo: '123',
                    WaybillId: '2222',
                    ProductName: '产品1',
                    CustomerName: '客户名称',
                    CargoType: '货物1',
                    Pieces: 1,
                    GoodsNum: 2,
                    Weight:12.33,
                    ReceiveAdd: 'asdadadasdasd',
                    Date: '2019-07-30 12:00:00',
                    LatestLogisticsInfo: '已签收',
                    Remark: '备注'
                }
            ]
        }
    }

    trackInfod() {
        return {
            UserId: '111',
            WaybillId: '222',
            WaybillNo: '3333',
            ProductName: '',
            ProductName: '产品1',
            CustomerName: '客户名称',
            CargoType: '货物1',
            Pieces: 1,
            GoodsNum: 2,
            Weight:12.33,
            Remark: '备注',
            Sender: {
                Address: '寄件地址寄件地址寄件地址',
                AddressEn: 'esdadqwdqwqwe',
                ZipCode: '234234',
                Contacts: '寄件人',
                Telephone: '12345465456',
                Company: '寄件公司寄件公司'
            },
            Receiver: {
                Address: '收件地址收件地址收件地址',
                AddressEn: 'dasdadassdadsa',
                ZipCode: '3123123',
                Contacts: '收件人',
                Telephone: '22333222323',
                Company: '收件公司收件公司'
            },
            GoodsDetail: [
                {
                    Name: '物品1',
                    NameEn: 'Goods1',
                    Number: 1
                },
                {
                    Name: '物品2',
                    NameEn: 'Goods2',
                    Number: 2
                }
            ],
            LogisticsInfo: logisticsInfo
        }
    }
}
module.exports = JYWeb;