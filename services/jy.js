class NineCoastApp {
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


    login() {
        return {
            UserId: '123',
            UserName: 'qqq'
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
            LogisticsInfo: [

            ]
        }
    }
}
module.exports = NineCoastApp;