const deliverInfo = [
    {
        "date":"2019-03-07 00:11:43",
        "place":"大连口岸",
        "info":"已收货"
    },
    {
        "date":"2019-03-07 07:32:00",
        "place":"LDX机场口岸",
        "info":"空港から出発"
    },
    {
        "date":"2019-03-07 10:33:00",
        "place":"LDX机场口岸",
        "info":"关西空港に到着"
    },
    {
        "date":"2019-03-07 14:06:00",
        "place":"日本大阪",
        "info":"进口清关完成"
    },
    {
        "date":"2019-03-07 16:28:00",
        "place":"日本林道",
        "info":"⇒集荷"
    },
    {
        "date":"2019-03-07 16:28:00",
        "place":"日本林道",
        "info":"↓集荷"
    },
    {
        "date":"2019-03-07 22:57:00",
        "place":"日本林道",
        "info":"⇒輸送中"
    },
    {
        "date":"2019-03-07 22:57:00",
        "place":"日本林道",
        "info":"↓輸送中"
    },
    {
        "date":"2019-03-08 07:59:00",
        "place":"日本林道",
        "info":"⇒配達中"
    },
    {
        "date":"2019-03-08 07:59:00",
        "place":"日本林道",
        "info":"↓配達中"
    },
    {
        "date":"2019-03-08 13:58:00",
        "place":"日本林道",
        "info":"⇒配達完了"
    }
];

const companyInfo = {
    address: '',
    companyName: '东莞市华胜国际物流公司',
    contacter: 'xxx',
    desc: '简介',
    email: '',
    tel: ''
};
class ZWCloud { 
    constructor(req, res){
		this.req = req
		this.res = res
    }

    getExpressCompanyInfo() {
        let self = this;
        const { detailCompanyId } = self.req.query;
        let res = { status: '', errMsg: '' };
        if ( detailCompanyId === "yibo" ) {
            res = companyInfo;
        } else {
            res = '';
        }
        return self.res.status(200).json(res);
    }

    getExpressDelivery() {
        let self = this;
        const { detailCompanyId, detailTicketNo } = self.req.query;
        let res = { status: '', errMsg: '' };
        if (detailTicketNo === "123456" && detailCompanyId === "kdb") {
            res = { resultCode: 0, orderNum: "357491304866", deliverInfo: deliverInfo };
        } else {
            res = { resultCode: 1 }
        }
        
        return self.res.status(200).json(res);
    }
}
module.exports = ZWCloud;