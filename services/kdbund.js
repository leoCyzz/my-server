const companyList = [
    { "code": "ldx", "name": "林道国际" },
    { "code": "sf", "name": "顺丰速运" },
    { "code": "zto", "name": "中通快递" },
    { "code": "AA", "name": "AA" },
    { "code": "BB", "name": "BB" },
    { "code": "CC", "name": "CC" },
    { "code": "DD", "name": "DD" },
    { "code": "EE", "name": "EE" },
    { "code": "FF", "name": "FF" },
    { "code": "GG", "name": "GG" },
    { "code": "HH", "name": "HH" },
    { "code": "II", "name": "II" },
    { "code": "JJ", "name": "JJ" },
    { "code": "KK", "name": "KK" },
    { "code": "LL", "name": "LL" },
    { "code": "MM", "name": "MM" },
    { "code": "NN", "name": "NN" },
    { "code": "XX", "name": "XX" },
    { "code": "YY", "name": "YY" },
    { "code": "ZZ", "name": "ZZ" }
];

const ldxTrackInfo = {
    trackNo: "123456",
    code: "ldx",
    status: 3,
    detailList: [
        {
            dateTime: "2018-12-17 14:22:00",
            detailInfo: "同事或家人签收-已签收"
        },
        {
            dateTime: "2018-12-17 13:37:00",
            detailInfo: "派送不成功-原因：联系好下午送"
        },
        {
            dateTime: "2018-12-17 07:44:00",
            detailInfo: "上海七宝公司-黄飞龙片区(15000850374,021-67880308)-派件中"
        },
        {
            dateTime: "2018-12-16 22:30:00",
            detailInfo: "已到达-上海七宝公司"
        },
        {
            dateTime: "2018-12-16 22:27:00",
            detailInfo: "上海青浦市内分拨-已发往-上海七宝公司"
        },
        {
            dateTime: "2018-12-16 22:25:00",
            detailInfo: "上海中转部-已发往-上海青浦市内分拨"
        },
        {
            dateTime: "2018-12-15 00:39:00",
            detailInfo: "广东龙岗公司-已进行装袋扫描"
        },
        {
            dateTime: "2018-12-15 00:39:00",
            detailInfo: "广东龙岗公司-已发往-上海中转部"
        },
        {
            dateTime: "2018-12-15 00:37:00",
            detailInfo: "广东龙岗公司-已装袋发往-上海中转部"
        },
        {
            dateTime: "2018-12-14 10:00:00",
            detailInfo: "坂田营业点-陈标展(15220178199,)-已收件"
        }
    ]
};
const sfTrackInfo = {
    trackNo: "123456",
    code: "sf",
    status: 2,
    detailList: [
        {
            dateTime: "2018-12-17 07:44:00",
            detailInfo: "上海七宝公司-黄飞龙片区(15000850374,021-67880308)-派件中"
        },
        {
            dateTime: "2018-12-16 22:30:00",
            detailInfo: "已到达-上海七宝公司"
        },
        {
            dateTime: "2018-12-16 22:27:00",
            detailInfo: "上海青浦市内分拨-已发往-上海七宝公司"
        },
        {
            dateTime: "2018-12-16 22:25:00",
            detailInfo: "上海中转部-已发往-上海青浦市内分拨"
        },
        {
            dateTime: "2018-12-15 00:39:00",
            detailInfo: "广东龙岗公司-已进行装袋扫描"
        },
        {
            dateTime: "2018-12-15 00:39:00",
            detailInfo: "广东龙岗公司-已发往-上海中转部"
        },
        {
            dateTime: "2018-12-15 00:37:00",
            detailInfo: "广东龙岗公司-已装袋发往-上海中转部"
        },
        {
            dateTime: "2018-12-14 10:00:00",
            detailInfo: "坂田营业点-陈标展(15220178199,)-已收件"
        }
    ]
};


class KdbundWechat { 
    constructor(req, res){
		this.req = req
		this.res = res
    }

    getCompanyList() {
        let self = this;
        const res = { status: 'success', errMsg: '', data: companyList };
        return self.res.status(200).json(res);
    }

    queryTrackInfo() {
        let self = this;
        const { trackNo, code } = self.req.query;
        let res = { status: '', errMsg: '' };
        if (trackNo === "123456" && code === "ldx") {
            res = { status: 'success', errMsg: '', data: ldxTrackInfo };
        } else if (trackNo === "123456" && code === "sf") {
            res = { status: 'success', errMsg: '', data: sfTrackInfo };
        } else {
            res = { status: 'error', errMsg: '', data: {trackNo: trackNo, code: code, status: -1, detailList: []} }
        }
        
        return self.res.status(200).json(res);
    }
}

module.exports = KdbundWechat;