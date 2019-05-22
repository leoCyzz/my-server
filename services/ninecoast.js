const menu_data1 = {
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
							"text": "生产产地",
							"link": "/base/mfg"
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
							"link": "/product/bulk"
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

const menu_data = {
	"menu": [
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
					"text": "生产产地",
					"link": "/base/mfg"
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
					"link": "/product/bulk"
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
};
const new_token = {
    token: '12345678',
    name: 'admin'
};

const sysRoleList = [
	{ id: '1', name: '管理员' },
	{ id: '2', name: '运营' },
	{ id: '3', name: '销售' },
];

const sysUserList = [
	{ id: '1', account: 'ncyy1', name: '运营1', role: '运营', creationTime: '2019/05/20 12:00:00', state: 0 },
	{ id: '2', account: 'ncyy2', name: '运营2', role: '运营', creationTime: '2019/05/21 12:00:00', state: 1 },
	{ id: '3', account: 'ncxs1', name: '销售1', role: '销售', creationTime: '2019/05/21 13:00:00', state: 1 },
];

class NineCoast {
    constructor(req, res){
		this.req = req
		this.res = res
    }
    getMenuData () {
        let self = this;
        let status = 200;
        let res = {status: 1, msg: ''};
        // console.log(self.req.headers);
        if (self.req.headers.token === new_token.token) {
            res = {status: 0, msg: '', data: menu_data};
        } else {
			// status = 401;
            res = {status: 401, msg: 'Unauthorized'};
        }
        return self.res.status(status).json(res);
    }

    login () {
        let self = this;
        const body = self.req.body;
        let res = { status: 1, msg: '' };
        if (body.account === 'admin' && body.password === '888888') {
            res =  { status: 0, msg: '', data: new_token };
        } else {
            res =  { status: 1, msg: '账户或密码错误'};
        }
        return self.res.status(200).json(res);
	}
	
	getSysRoles() {
		let self = this;
        let status = 200;
        let res = {status: 1, msg: ''};
        // console.log(self.req.headers);
        if (self.req.headers.token === new_token.token) {
            res = {status: 0, msg: '', data: sysRoleList};
        } else {
            res = {status: 1, msg: 'Unauthorized'};
        }
        return self.res.status(status).json(res);
	}

	getSysUsers() {
		let self = this;
		let status = 200;
        let res = {status: 1, msg: ''};
        if (self.req.headers.token === new_token.token) {
            res = {status: 0, msg: '', data: {users: sysUserList, total: 200}};
        } else {
            res = {status: 1, msg: 'Unauthorized'};
        }
        return self.res.status(status).json(res);
	}

	getSysUserInfo() {
		let self = this;
		let status = 200;
        let res = {status: 1, msg: ''};
        if (self.req.headers.token === new_token.token) {
            res = {status: 0, msg: '', data: {id: '1',
			account: 'ncyy1',
			name: '运营1',
			role: '2',
			creationTime: '2019/05/20 12:00:00',
			state: 0}};
        } else {
            res = {status: 1, msg: 'Unauthorized'};
        }
        return self.res.status(status).json(res);
	}

	updateSysUserInfo() {
		let self = this;
		let status = 200;
        let res = {status: 1, msg: ''};
        if (self.req.headers.token === new_token.token) {
			const body = self.req.body;
			let data = null;
			if (body && body.id) {
				data = Object.assign(body, {
					creationTime: '2019/05/21 12:00:00',
					state: 0
				});
			} else {
				data = Object.assign(body, {
					id: 'hhhh',
					creationTime: '2019/05/21 12:00:00',
					state: 0
				});
			}
			console.log(data);
			res = {status: 0, msg: '', data}
        } else {
            res = {status: 1, msg: 'Unauthorized'};
        }
        return self.res.status(status).json(res);
	}
	
	togggleSysUserState() {
		let self = this;
		let status = 200;
        let res = {status: 1, msg: ''};
        if (self.req.headers.token === new_token.token) {
            res = {status: 0, msg: '', data: {id: 1, state: 0}};
        } else {
            res = {status: 1, msg: 'Unauthorized'};
        }
        return self.res.status(status).json(res);
	}

	deleteSysUserInfo() {
		let self = this;
		let status = 200;
        let res = {status: 1, msg: ''};
        if (self.req.headers.token === new_token.token) {
            res = {status: 0, msg: '', data: 'success'};
        } else {
            res = {status: 1, msg: 'Unauthorized'};
        }
        return self.res.status(status).json(res);
	}
}

module.exports = NineCoast