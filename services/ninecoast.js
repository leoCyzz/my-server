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
	"user": {
		"id": "1",
		"name": "hhh",
		"role": "运营"
	},
	"menu": [
		{
		  text: '系统信息',
		  icon: 'anticon-setting',
		  title: '系统信息',
		  key: 'sys0',
		  children: [
			{
			  text: '系统用户',
			  isLeaf: true,
			  title: '系统用户',
			  key: 'sys1',
			  link: '/system/user',
			},
			{
			  text: '系统角色',
			  isLeaf: true,
			  title: '系统角色',
			  key: 'sys2',
			  link: '/system/role',
			},
			{
			  text: '个人设置',
			  isLeaf: true,
			  title: '个人设置',
			  key: 'sys3',
			  link: '/system/self',
			},
		  ],
		},
		{
		  text: '基础信息维护',
		  icon: 'anticon-database',
		  title: '基础信息维护',
		  key: 'base',
		  children: [
			{
			  text: '九岸简介',
			  isLeaf: true,
			  title: '九岸简介',
			  key: 'base-ninecoast',
			  link: '/base/ninecoast',
			},
			{
			  text: '国家地区设置',
			  isLeaf: true,
			  title: '国家地区设置',
			  key: 'base-district',
			  link: '/base/district',
			},
			{
			  text: '默认分类类别',
			  isLeaf: true,
			  title: '默认分类类别',
			  key: 'base-category',
			  link: '/base/category',
			},
			{
			  text: '图片上传',
			  isLeaf: true,
			  title: '图片上传',
			  key: 'base-picture',
			  link: '/base/picture',
			},
		  ],
		},
		{
		  text: '产品信息',
		  icon: 'anticon-copy',
		  title: '产品信息',
		  key: 'product',
		  children: [
			{
			  text: '原酒',
			  isLeaf: true,
			  title: '原酒',
			  key: 'product-bulk',
			  link: '/product/bulk',
			},
			{
			  text: '材料',
			  isLeaf: true,
			  title: '材料',
			  key: 'product-material',
			  link: '/product/material',
			},
			{
			  text: '产品',
			  isLeaf: true,
			  title: '产品',
			  key: 'product-wine',
			  link: '/product/wine',
			},
			{
			  text: '其他费用',
			  isLeaf: true,
			  title: '其他费用',
			  key: 'product-other',
			  link: '/product/other',
			},
		  ],
		},
		{
		  text: '客户',
		  icon: 'anticon-solution',
		  title: '客户',
		  key: 'customer',
		  children: [
			{
			  text: '公司客户',
			  isLeaf: true,
			  title: '公司客户',
			  key: 'customer-company',
			  link: '/customer/company',
			},
			{
			  text: '用户列表',
			  isLeaf: true,
			  title: '用户列表',
			  key: 'customer-user',
			  link: '/customer/user',
			},
			{
			  text: '用户订单',
			  isLeaf: true,
			  title: '用户订单',
			  key: 'customer-order',
			  link: '/customer/order',
			},
		  ],
		},
		{
		  text: 'APP维护',
		  icon: 'anticon-mobile',
		  title: 'APP维护',
		  key: 'app',
		  isLeaf: true,
		  link: '/mobile'
		},
	  ]
};
const new_token = {
    token: '12345678'
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

const BaseElementList = [
	{ id: '1', name: '原料1' },
	{ id: '2', name: '原料2' },
	{ id: '3', name: '原料3' },
	{ id: '4', name: '原料4' },
	{ id: '5', name: '原料5' },
	{ id: '6', name: '原料6' },
	{ id: '7', name: '原料7' },
	{ id: '8', name: '原料8' },
	{ id: '9', name: '原料9' },
	{ id: '10', name: '原料10' }
];

const counrtyList = [
	{id: 1, name: '中国', code: 'CHN'},
	{id: 2, name: '美国', code: 'USA'},
	{id: 3, name: '法国', code: 'FRA'},
	{id: 4, name: '澳大利亚', code: 'AUS'},
	{id: 5, name: '智利', code: 'CL'},
];

const productionAreaList = [
	{id: 1, name: 'AA', country: '中国'},
	{id: 2, name: 'BB', country: '美国'},
	{id: 3, name: 'CC', country: '法国'},
	{id: 4, name: 'DD', country: '澳大利亚'},
	{id: 5, name: 'EE', country: '智利'},
];

const warehouseList = [
	{id: 1, name: '上海仓', code: '123', address: 'xx xx xxx'},
	{id: 2, name: '南通仓', code: '456', address: 'xx xx xxx'},
	{id: 3, name: '成都仓', code: '789', address: 'xx xx xxx'},
];

const bulkList = [
	{id: 1, name: 'AA', country: '澳大利亚', vendor: 'AA供应商', cost: 1000, currency: 'AUD', minQty: 10000, imageUrl: '/assets/tmp/img/2.png'},
	{id: 2, name: 'BB', country: '法国', vendor: 'BB供应商', cost: 2000, currency: 'USD', minQty: 20000, imageUrl: '/assets/tmp/img/2.png'},
	{id: 3, name: 'CC', country: '澳大利亚', vendor: 'CC供应商', cost: 3000, currency: 'USD', minQty: 30000, imageUrl: '/assets/tmp/img/2.png'},
	{id: 4, name: 'DD', country: '智利', vendor: 'DD供应商', cost: 4000, currency: 'CNY', minQty: 20000, imageUrl: '/assets/tmp/img/2.png'},
	{id: 5, name: 'EE', country: '法国', vendor: 'EE供应商', cost: 5000, currency: 'USD', minQty: 10000, imageUrl: '/assets/tmp/img/2.png'},
	{id: 6, name: 'FF', country: '澳大利亚', vendor: 'FF供应商', cost: 6000, currency: 'AUD', minQty: 40000, imageUrl: '/assets/tmp/img/2.png'},
	{id: 7, name: 'GG', country: '智利', vendor: 'GG供应商', cost: 7000, currency: 'USD', minQty: 30000, imageUrl: '/assets/tmp/img/2.png'},
	{id: 8, name: 'HH', country: '法国', vendor: 'HH供应商', cost: 8000, currency: 'CNY', minQty: 20000, imageUrl: '/assets/tmp/img/2.png'},
	{id: 9, name: 'II', country: '澳大利亚', vendor: 'II供应商', cost: 9000, currency: 'AUD', minQty: 20000, imageUrl: '/assets/tmp/img/2.png'},
	{id: 10, name: 'JJ', country: '智利', vendor: 'JJ供应商', cost: 10000, currency: 'AUD', minQty: 60000, imageUrl: '/assets/tmp/img/2.png'}
];

const imageList = [
	{id: 1, name: '图片1', type: 'bulk', url: '/assets/tmp/img/1.png'},
	{id: 2, name: '图片2', type: 'bulk', url: '/assets/tmp/img/2.png'},
	{id: 3, name: '图片3', type: 'bulk', url: '/assets/tmp/img/3.png'},
	{id: 4, name: '图片4', type: 'bulk', url: '/assets/tmp/img/4.png'},
	{id: 5, name: '图片5', type: 'bulk', url: '/assets/tmp/img/5.png'},
	{id: 6, name: '图片6', type: 'bulk', url: '/assets/tmp/img/6.png'}
];

const salesList = [
	{ id: '1',  name: '销售1' },
	{ id: '2',  name: '销售2' },
	{ id: '3',  name: '销售3' },
	{ id: '4',  name: '销售4' },
	{ id: '5',  name: '销售5' }
];

const customerCompanyList = [
	{id: '1', name: '客户1', code: 'KH1', level: 5, contacts: 'aaa', phone: '123456789012', address: 'xxx xx xxxx xx', sales: '销售1', remarks: 'xxxxxxxxxxxxxxxxxxxx\\naaaaaaaaaaaaaaaaaaaaaa'},
	{id: '2', name: '客户2', code: 'KH2', level: 5, contacts: 'aaa', phone: '123456789012', address: 'xxx xx xxxx xx', sales: '销售1', remarks: 'xxxxxxxxxxxxxxxxxxxx\\naaaaaaaaaaaaaaaaaaaaaa'},
	{id: '3', name: '客户3', code: 'KH3', level: 5, contacts: 'aaa', phone: '123456789012', address: 'xxx xx xxxx xx', sales: '销售1', remarks: 'xxxxxxxxxxxxxxxxxxxx\\naaaaaaaaaaaaaaaaaaaaaa'},
	{id: '4', name: '客户4', code: 'KH4', level: 5, contacts: 'aaa', phone: '123456789012', address: 'xxx xx xxxx xx', sales: '销售1', remarks: 'xxxxxxxxxxxxxxxxxxxx\\naaaaaaaaaaaaaaaaaaaaaa'},
	{id: '5', name: '客户5', code: 'KH5', level: 5, contacts: 'aaa', phone: '123456789012', address: 'xxx xx xxxx xx', sales: '销售1', remarks: 'xxxxxxxxxxxxxxxxxxxx\\naaaaaaaaaaaaaaaaaaaaaa'},
	{id: '6', name: '客户6', code: 'KH6', level: 5, contacts: 'aaa', phone: '123456789012', address: 'xxx xx xxxx xx', sales: '销售1', remarks: 'xxxxxxxxxxxxxxxxxxxx\\naaaaaaaaaaaaaaaaaaaaaa'},
	{id: '7', name: '客户7', code: 'KH7', level: 5, contacts: 'aaa', phone: '123456789012', address: 'xxx xx xxxx xx', sales: '销售1', remarks: 'xxxxxxxxxxxxxxxxxxxx\\naaaaaaaaaaaaaaaaaaaaaa'},
	{id: '8', name: '客户8', code: 'KH8', level: 5, contacts: 'aaa', phone: '123456789012', address: 'xxx xx xxxx xx', sales: '销售1', remarks: 'xxxxxxxxxxxxxxxxxxxx\\naaaaaaaaaaaaaaaaaaaaaa'},
	{id: '9', name: '客户9', code: 'KH9', level: 5, contacts: 'aaa', phone: '123456789012', address: 'xxx xx xxxx xx', sales: '销售1', remarks: 'xxxxxxxxxxxxxxxxxxxx\\naaaaaaaaaaaaaaaaaaaaaa'}
];

const newsList = [
	{id: '1', title: '新闻1', creationTime: '2019/02/26 00:00:00', topIndex: 1, listImgUrl: '', detailImgUrl: ''},
	{id: '2', title: '新闻2', creationTime: '2019/02/26 01:00:00', topIndex: 2, listImgUrl: '', detailImgUrl: ''},
	{id: '3', title: '新闻3', creationTime: '2019/02/26 02:00:00', topIndex: 3, listImgUrl: '', detailImgUrl: ''},
	{id: '4', title: '新闻4', creationTime: '2019/02/26 03:00:00', topIndex: 4, listImgUrl: '', detailImgUrl: ''},
	{id: '5', title: '新闻5', creationTime: '2019/02/26 04:00:00', topIndex: 5, listImgUrl: '', detailImgUrl: ''},
	{id: '6', title: '新闻6', creationTime: '2019/02/26 05:00:00', topIndex: 6, listImgUrl: '', detailImgUrl: ''},
	{id: '7', title: '新闻7', creationTime: '2019/02/26 06:00:00', topIndex: 7, listImgUrl: '', detailImgUrl: ''},
	{id: '8', title: '新闻8', creationTime: '2019/02/26 07:00:00', topIndex: 8, listImgUrl: '', detailImgUrl: ''},
	{id: '9', title: '新闻9', creationTime: '2019/02/26 08:00:00', topIndex: 9, listImgUrl: '', detailImgUrl: ''},
	{id: '10', title: '新闻10', creationTime: '2019/02/26 09:00:00', topIndex: 10, listImgUrl: '', detailImgUrl: ''}

];

class NineCoast {
    constructor(req, res){
		this.req = req
		this.res = res
	}

    getSysData (req) {
        let res = {status: 1, msg: ''};
        if (req.headers.token === new_token.token) {
            res = {status: 0, msg: '', data: menu_data};
        } else {
			// status = 401;
            res = {status: 401, msg: 'Unauthorized'};
        }
        return res;
    }

    login (req) {
        const body = req.body;
        let res = { status: 1, msg: '' };
        if (body.account === 'admin' && body.password === '888888') {
            res =  { status: 0, msg: '', data: new_token };
        } else {
            res =  { status: 1, msg: '账户或密码错误'};
        }
        return res;
	}

	getSysUsers(req) {
        return {status: 0, msg: '', data: {users: sysUserList, total: 200}};
	}

	getSysUserInfo() {
        return {
			status: 0, 
			data: {
				id: '1',
				account: 'ncyy1',
				name: '运营1',
				role: '2',
				creationTime: '2019/05/20 12:00:00',
				state: 0
			}
		};  
	}

	updateSysUserInfo(req) {
        let res = {status: 1, msg: ''};
        if (req.headers.token === new_token.token) {
			const body = req.body;
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
			res = {status: 0, msg: '', data}
        } else {
            res = {status: 1, msg: 'Unauthorized'};
        }
        return res;
	}
	
	togggleSysUserState(req) {
        return {status: 0, msg: '', data: {id: 1, state: 0}};
	}

	deleteSysUserInfo(req) {
        return {status: 0, msg: '', data: 'success'};
	}

	getSysRoles(req) {
        return {status: 0, msg: '', data: sysRoleList};
	}

	getSysRoleInfo(req) {
		return {
			status: 0,
			data: {
				id: '1',
				name: '运营',
			}
		};
	}

	updateSysRoleInfo(req) {
		return {
			status: 0,
			data: {
				id: '1',
				name: '运营',
			}
		};
	}

	deleteSysRoleInfo() {
		return {
			status: 0,
			data: 'success'
		};
	}

	getSysRoleMenu() {
		return {
			status: 0,
			data: ['sys0', 'base1', 'base2']
		};

	}

	updateSysRoleMenu(req) {
		console.log(req.body);
		return {
			status: 0,
			data: 'success'
		};
	}

	updateSelfInfo(req) {
		const body = req.body;
		const res = body.newPwd === '123' ? { status: 0, data: 'success'} : { status: 1, msg: '错误'} ;
		return res;
	}

	getBaseElements(req) {
        return {status: 0, msg: '', data: BaseElementList};
	}

	getBaseElementInfo(req) {
		return {
			status: 0,
			data: BaseElementList[0]
		};
	}

	updateBaseElementInfo(req) {
		return {
			status: 0,
			data: BaseElementList[0]
		};
	}

	deleteBaseElementInfo() {
		return {
			status: 0,
			data: 'success'
		};
	}

	getNinecoastInfo() {
		return {
			status: 0,
			data: {
				name: '九岸红酒',
				phone: '123456789-102',
				address: '上海市闵行区古北路1899号',
				brief: `上海九岸网络技术有限公司，是中国领先的散装葡萄酒进口商，全球定制酒专家。
				公司与法国、意大利、西班牙、澳大利亚、智利、南非、摩尔多瓦、阿根廷等国家领先的酿酒商和装瓶商，建立了长期稳定的战略合作关系，共同打造 “全球定制酒平台(www.ninecoast.cn)”。
				公司可为客户提供原产地整柜定制（包含名庄定制）、保税区简标酒定制、保税区灌装定制、进口原酒国内装瓶定制等全面定制服务。`
			}
		}
	}

	updateNinecoastInfo() {
		return {
			status: 0,
			data: {
				name: '九岸红酒',
				phone: '123456789-999',
				address: '上海市闵行区古北路1899号',
				brief: `修改完成`
			}
		}
	}


	getPorts(req) {
        return {status: 0, msg: '', data: counrtyList};
	}

	getPortInfo() {
		return {
			status: 0,
			data: counrtyList[0]
		};
	}

	updatePortInfo(req) {
		return {
			status: 0,
			data: counrtyList[0]
		};
	}

	deletePortInfo() {
		return {
			status: 0,
			data: 'success'
		};
	}

	getProductionAreaList(req) {
        return {status: 0, msg: '', data: productionAreaList};
	}

	getProductionAreaInfo() {
		return {
			status: 0,
			data: {
				id: 1,
				country: 1,
				name: 'aa'
			}
		};
	}

	updateProductionAreaInfo(req) {
		return {
			status: 0,
			data: {
				id: 1,
				country: 1,
				name: 'aa'
			}
		};
	}

	deleteProductionAreaInfo() {
		return {
			status: 0,
			data: 'success'
		};
	}


	getCountries(req) {
        return {status: 0, msg: '', data: counrtyList};
	}

	getCountryInfo() {
		return {
			status: 0,
			data: counrtyList[0]
		};
	}

	updateCountryInfo(req) {
		return {
			status: 0,
			data: counrtyList[0]
		};
	}

	deleteCountryInfo() {
		return {
			status: 0,
			data: 'success'
		};
	}

	getWarehouseList(req) {
        return {status: 0, msg: '', data: warehouseList};
	}

	getWarehouseInfo() {
		return {
			status: 0,
			data: warehouseList[0]
		};
	}

	updateWarehouseInfo(req) {
		return {
			status: 0,
			data: warehouseList[0]
		};
	}

	deleteWarehouseInfo() {
		return {
			status: 0,
			data: 'success'
		};
	}

	getBulkList() {
		return {status: 0, msg: '', data: bulkList};
	}

	getBulkInfo() {
		return {
			status: 0,
			data: {id: 1, name: 'AA', country: '1', vendor: 'AA供应商', cost: 1000, currency: 'AUD', minQty: 10000, imageUrl: '/assets/tmp/img/2.png'},
		};
	}

	updateBulkInfo(req) {
		return {
			status: 0,
			data: {id: 1, name: '修改', country: '1', vendor: 'AA供应商', cost: 1000, currency: 'AUD', minQty: 10000, imageUrl: '/assets/tmp/img/2.png'},
		};
	}

	deleteBulkInfo() {
		return {
			status: 0,
			data: 'success'
		};
	}

	getImgList() {
		return {status: 0, msg: '', data: imageList};
	}


	getCustomerSales() {
		return {status: 0, msg: '', data: salesList};
	}

	getCustomerCompanies() {
		return {status: 0, msg: '', data: {companies: customerCompanyList, total: 200}};
	}

	getCustomerCompanyInfo() {
		return {
			status: 0,
			data: {id: '1', name: '客户1', code: 'KH1', level: 5, contacts: 'aaa', phone: '123456789012', address: 'xxx xx xxxx xx', sales: '1', remarks: 'xxxxxxxxxxxxxxxxxxxx\\naaaaaaaaaaaaaaaaaaaaaa'}
		};
	}

	updateCustomerCompanyInfo() {
		return {
			status: 0,
			data: {id: '1', name: '修改', code: 'KH1', level: 5, contacts: 'aaa', phone: '123456789012', address: 'xxx xx xxxx xx', sales: '销售', remarks: 'xxxxxxxxxxxxxxxxxxxx\\naaaaaaaaaaaaaaaaaaaaaa'}
		};
	}

	deleteCustomerCompanyInfo() {
		return {
			status: 0,
			data: 'success'
		};
	}

	getNewsList() {
		return {status: 0, msg: '', data: newsList};
	}

	getNewsInfo() {
		return {
			status: 0,
			data: {id: '1', title: '新闻1', creationTime: '2019/02/26 00:00:00', topIndex: 1, listImgUrl: '', detailImgUrl: ''}
		};
	}

	updateNewsInfo() {
		return {
			status: 0,
			data: {id: '1', title: '修改', creationTime: '2019/02/26 00:00:00', topIndex: 1, listImgUrl: '', detailImgUrl: ''}
		};
	}

	deleteNewsInfo() {
		return {
			status: 0,
			data: 'success'
		};
	}


	doAction(actionName) {
		let status = 200;
		if(this[actionName]) {
			const res = this[actionName](this.req);
			return this.res.status(status).json(res);
		} else {
			return this.res.status(404).json('');
		}	
	}
}

module.exports = NineCoast