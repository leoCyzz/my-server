const menu_data = {
	"app": {
		"name": "NineCoast",
		"description": ""
	},
	"user": {
		"name": "Admin",
    	"avatar": "./assets/tmp/img/avatar.jpg",
    	"email": "admin@ninecoast.com"
	},
	"menu": [
		{
			"text": "",
			"i18n": "",
			"group": true,
			"hideInBreadcrumb": true,
			"children": [
				{
					"text": "欢迎页",
					"icon": "anticon-dashboard",
					"link": "/dashboard"
				},
				{
					"text": "系统信息",
					"icon": "anticon-setting",
					"children": [
						{
							"text": "系统用户",
							"link": "/system/user"
						},
						{
							"text": "系统角色",
							"link": "/system/role"
						},
						{
							"text": "个人设置",
							"link": "/system/self"
						}
					]
				},
				{
					"text": "基本信息",
					"icon": "anticon-database",
					"children": [
						{
							"text": "国家设置",
							"link": "/base/country"
						},
						{
							"text": "产区设置",
							"link": "/base/production-area"
						},
						{
							"text": "葡萄酒类别设置",
							"link": "/base/wine-type"
						},
						{
							"text": "葡萄种类设置",
							"link": "/base/grape-type"
						},
						{
							"text": "酒精度设置",
							"link": "/base/alcohol"
						},
						{
							"text": "酒标类别",
							"link": "/base/label-type"
						},
						{
							"text": "酒标设计",
							"link": "/base/label-design"
						},
						{
							"text": "酒标材质",
							"link": "/base/label-material"
						},
						{
							"text": "汇率设置",
							"link": "/base/exchange"
						}
					]
				},
				{
					"text": "产品信息",
					"icon": "anticon-copy",
					"children": [
						{
							"text": "原酒",
							"link": "/product/liquor"
						},
						{
							"text": "酒瓶",
							"link": "/product/bottle"
						},
						{
							"text": "酒帽",
							"link": "/product/cap"
						},
						{
							"text": "酒塞",
							"link": "/product/cork"
						},
						{
							"text": "酒标",
							"link": "/product/label"
						},
						{
							"text": "外箱",
							"link": "/product/box"
						},
						{
							"text": "葡萄酒",
							"link": "/product/wine"
						},
						{
							"text": "产品费用",
							"link": "/product/cost"
						},
						{
							"text": "产品加价率",
							"link": "/product/markup"
						}
					]
				},
				{
					"text": "客户",
					"icon": "anticon-solution",
					"children": [
						{
							"text": "公司客户",
							"link": "/customer/company"
						},
						{
							"text": "用户列表",
							"link": "/customer/user"
						},
						{
							"text": "用户订单",
							"link": "/customer/order"
						}
					]
				},
				{
					"text": "APP",
					"icon": "anticon-mobile",
					"children": [
						{
							"text": "生产产地",
							"link": "/mobile/mfg"
						},
						{
							"text": "App新闻",
							"link": "/mobile/news"
						},
						{
							"text": "App欢迎页",
							"link": "/mobile/welcome"
						}
					]
				}
			]
		}
	]
};

const new_token = {
    token: '123456789',
    name: 'admin',
    email: `123@123.com`,
    id: 10000,
    time: +new Date
};

class NineCoast {
    constructor(req, res){
		this.req = req
		this.res = res
    }
    getMenuData () {
        let self = this;
        let status = 200;
        let res = {status: '', errMsg: ''};
        // console.log(self.req.headers);
        if (self.req.headers.token === '123456789') {
            res = Object.assign({status: 'success', errMsg: ''}, menu_data);
        } else {
            status = 401;
            res = {status: 'failed', errMsg: 'Unauthorized'};
        }
        return self.res.status(status).json(res);
    }

    login () {
        let self = this;
        const body = self.req.body;
        let res = { status: '', errMsg: '' };
        if (body.account === 'admin' && body.password === '888888') {
            res =  { status: 'success', errMsg: '', user: new_token };
        } else {
            res =  { status: 'failed', errMsg: '账户或密码错误'};
        }
        return self.res.status(200).json(res);
    }
}

module.exports = NineCoast