const trackList = {
    companyName: "林道国际",
    companyCode: "ldx",
    trackStatus: "done",
    trackStatusDescription: "已签收",
    trackList: [
        {
            datetime: "2018-07-24 11:14",
            info: "xxxxxxxxxxxxxx 已签收"
        },
        {
            datetime: "2018-07-24 11:14",
            info: "xxxxxxxxxxxxxx 业务员 正在派送"
        },
        {
            datetime: "2018-07-24 11:14",
            info: "xxxxxxxxxxxxxx 站点 到达"
        },
        {
            datetime: "2018-07-24 11:14",
            info: "xxxxxxxxxxxxxx 站点 准备发往"
        },
        {
            datetime: "2018-07-24 11:14",
            info: "xxxxxxxxxxxxxx 快递员已收货"
        },
        {
            datetime: "2018-07-24 11:14",
            info: "xxxxxxxxxxxxxx 已签收"
        },
        {
            datetime: "2018-07-24 11:14",
            info: "xxxxxxxxxxxxxx 业务员 正在派送"
        },
        {
            datetime: "2018-07-24 11:14",
            info: "xxxxxxxxxxxxxx 站点 到达"
        },
        {
            datetime: "2018-07-24 11:14",
            info: "xxxxxxxxxxxxxx 站点 准备发往"
        },
        {
            datetime: "2018-07-24 11:14",
            info: "xxxxxxxxxxxxxx 快递员已收货"
        },
        {
            datetime: "2018-07-24 11:14",
            info: "xxxxxxxxxxxxxx 已签收"
        },
        {
            datetime: "2018-07-24 11:14",
            info: "xxxxxxxxxxxxxx 业务员 正在派送"
        },
        {
            datetime: "2018-07-24 11:14",
            info: "xxxxxxxxxxxxxx 站点 到达"
        },
        {
            datetime: "2018-07-24 11:14",
            info: "xxxxxxxxxxxxxx 站点 准备发往"
        },
        {
            datetime: "2018-07-24 11:14",
            info: "xxxxxxxxxxxxxx 快递员已收货"
        },
        {
            datetime: "2018-07-24 11:14",
            info: "xxxxxxxxxxxxxx 已签收"
        },
        {
            datetime: "2018-07-24 11:14",
            info: "xxxxxxxxxxxxxx 业务员 正在派送"
        },
        {
            datetime: "2018-07-24 11:14",
            info: "xxxxxxxxxxxxxx 站点 到达"
        },
        {
            datetime: "2018-07-24 11:14",
            info: "xxxxxxxxxxxxxx 站点 准备发往"
        },
        {
            datetime: "2018-07-24 11:14",
            info: "xxxxxxxxxxxxxx 快递员已收货"
        }
    ]
};

const companyList = [
    {
        code: "ldx",
        name: "林道国际"
    },
    {
        code: "sf",
        name: "顺丰"
    },
    {
        code: "",
        name: "AAAA"
    },
    {
        code: "",
        name: "BBBB"
    },
    {
        code: "",
        name: "cccc"
    },
    {
        code: "",
        name: "dddd"
    },
    {
        code: "",
        name: "eeee"
    },
    {
        code: "",
        name: "ffff"
    },
    {
        code: "",
        name: "gggg"
    },
    {
        code: "",
        name: "hhhh"
    },
    {
        code: "",
        name: "iiii"
    },
    {
        code: "",
        name: "jjjj"
    },
    {
        code: "",
        name: "kkkkk"
    },
    {
        code: "",
        name: "llll"
    },
    {
        code: "",
        name: "mmmm"
    },
    {
        code: "",
        name: "nnnn"
    },
    {
        code: "",
        name: "oooo"
    }
];

const loginInfo = {
    userId: '123', 
    nickName: '陈永兆',
    avatarUrl: 'https://wx.qlogo.cn/mmopen/vi_32/DYAIOgq83eq39tluZ9mtvRBovz3icCn89jibEnXMqGIqYJptzIb0DKdRwk23EI9umsgFEFBe7KcJQdcibo6QNcF6Q/132',
    loginCode: '123321123321',
    phoneNumber: '123123123123',
    companyCode: '223',
    email: 'dasdasad@dadasd.com',
    authLevel: 3
};

const list = [
    {
        id: '111222',
        number: "123456789",
        status: "done",
        statusText: "已签收"
    },
    {
        id: '222333',
        number: "123456789",
        status: "delivery",
        statusText: "派送中"
    }
];

const packageDetail = {
    packageNo: '123456789',
    payType: '到付',
    taxType: '寄付',
    goodsList: [
        {
          name: '铁柜',
          englishName: 'IRON STORAGE CABINET',
          quantity: '4',
          unitPrice: '7.50',
          sumPrice: '30.00',
          material: '100% IRON',
          craft: 'IRON',
          usage: ''
        },
        {
          name: '塑料管',
          englishName: 'PLASTIC PIPE',
          quantity: '4',
          unitPrice: '7.50',
          sumPrice: '30.00',
          material: '100% IRON',
          craft: 'IRON',
          usage: ''
        }
      ],
    sender: {
        company: '1',
        contact: '2',
        phone: '3',
        district: '4',
        zipcode: '5',
        address: '6',
        englishAddress: '7'
    },
    recipient: {
        company: '1',
        contact: '2',
        phone: '3',
        district: '4',
        zipcode: '5',
        address: '6',
        englishAddress: '7'
    },
    third: {
        company: '1',
        contact: '2',
        phone: '3',
        district: '4',
        zipcode: '5',
        address: '6',
        englishAddress: '7'
    }
};

const recordInfo = {
    packageNo: '1',
    pieces: 1,
    weight: 3.30,
    deliveryTime: '2018-08-02',
    flight: 'FA123',
    trackList: trackList.trackList
};

class WeChat {
    constructor(req, res){
		this.req = req
		this.res = res
    }

    getTrackInfo() {
        let self = this;
        const { trackNo, companyCode } = self.req.query;
        console.log(self.req.query);
        let res = { status: '', errMsg: '' };
        if (trackNo === "123" && companyCode === "ldx") {
            res = { status: 'success', errMsg: '', trackInfo: trackList, trackNo: trackNo };
        } else {
            res = { status: 'error', errMsg: '', trackInfo: {}, trackNo: trackNo }
        }
        
        return self.res.status(200).json(res);
    }

    getCompanyList() {
        let self = this;
        // const { trackNo, trackCompany } = self.req.query;
        
        let res = { status: '', errMsg: '' };
        res = { status: 'success', errMsg: '', companyList: companyList };
  
        return self.res.status(200).json(res);
    }

    login() {
        let self = this;
        let res = { status: 'success', errMsg: '', loginInfo: loginInfo };
        return self.res.status(200).json(res);
    }

    wechatLogin() {
        let self = this;
        let res = { status: 'success', errMsg: '', loginInfo: loginInfo};
        return self.res.status(200).json(res);
    }

    estimate() {
        let self = this;
        let res = { status: 'success', errMsg: '', price: 123 };
        return self.res.status(200).json(res);
    }

    queryName() {
        let self = this;
        let res = { status: 'success', errMsg: '', result: {name1: 'ok', name2: 'export', name3: 'error'} };
        return self.res.status(200).json(res);
    }

    estimate() {
        let self = this;
        let res = { status: 'success', errMsg: '', price: 123 };
        return self.res.status(200).json(res);
    }

    submitSuggestion() {
        let self = this;
        console.log(self.req.body);
        let res = { status: 'success', errMsg: ''};
        return self.res.status(200).json(res);
    }

    getRecordingList() {
        let self = this;
        let recording = JSON.parse(self.req.query.recording);
        let date = recording["date"];
        let res = { status: '', errMsg: ''};
        if (date === '2018-08-02') {
            res = { status: 'success', errMsg: '', list: list };
        } else {
            res = { status: 'success', errMsg: '', list: [] };
        }
        
        return self.res.status(200).json(res);
    }

    getPackageDetail() {
        let self = this;
        console.log(self.req.query);
        let res = { status: 'success', errMsg: '', details: packageDetail};
        return self.res.status(200).json(res);
    }

    getRecordInfo() {
        let self = this;
        console.log(self.req.query);
        let res = { status: 'success', errMsg: '', recordInfo: recordInfo};
        return self.res.status(200).json(res);
    }

    phoneBind() {
        let self = this;
        console.log(self.req.body);
        let res = { status: 'success', errMsg: ''};
        return self.res.status(200).json(res);
    }
    companyBind() {
        let self = this;
        console.log(self.req.body);
        let res = { status: 'success', errMsg: ''};
        return self.res.status(200).json(res);
    }
    emailBind() {
        let self = this;
        console.log(self.req.body);
        let res = { status: 'success', errMsg: ''};
        return self.res.status(200).json(res);
    }
}

module.exports = WeChat;