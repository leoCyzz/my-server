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
					"text": "仪表盘",
					"i18n": "menu.dashboard",
					"icon": "anticon-dashboard",
					"children": [
						{
							"text": "仪表盘",
							"link": "/dashboard",
							"i18n": "menu.dashboard"
						}
					]
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
							"text": "系统权限",
							"link": "/system/auth"
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
					"children": []
				},
				{
					"text": "产品信息",
					"icon": "anticon-copy",
					"children": []
				},
				{
					"text": "客户",
					"icon": "anticon-solution",
					"children": []
				},
				{
					"text": "APP",
					"icon": "anticon-mobile",
					"children": []
				}
				// {
				// 	"text": "页面创造",
				// 	"i18n": "zw.menu.show",
				// 	"icon": "anticon-layout",
				// 	"children": [
				// 		{
				// 			"text": "页面显示0",
				// 			"link": "/show/0",
				// 			"i18n": "zw.menu.show.p0"
				// 		},
				// 		{
				// 			"text": "页面显示1",
				// 			"link": "/show/1",
				// 			"i18n": "zw.menu.show.p1"
				// 		}
				// 	]
				// }
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