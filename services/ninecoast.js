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
			key: 'sys',
			children: [
				{
					text: '系统用户',
					isLeaf: true,
					title: '系统用户',
					key: 'sys-user',
					link: '/system/user',
				},
				{
					text: '系统角色',
					isLeaf: true,
					title: '系统角色',
					key: 'sys-role',
					link: '/system/role',
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
					key: 'base-upload',
					link: '/base/upload',
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
					text: '原酒及材料',
					isLeaf: true,
					title: '原酒及材料',
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
			link: '/mobile',
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
	{id: 1, name: '上海仓', code: '110102', address: 'xx xx xxx'},
	{id: 2, name: '南通仓', code: '456', address: 'xx xx xxx'},
	{id: 3, name: '成都仓', code: '789', address: 'xx xx xxx'},
];

const imageList = [
	{id: 1, name: '图片1', type: 'bulk', url: '/assets/tmp/img/1.png'},
	{id: 2, name: '图片2', type: 'bulk', url: '/assets/tmp/img/2.png'},
	{id: 3, name: '图片3', type: 'bulk', url: '/assets/tmp/img/3.png'},
	{id: 4, name: '图片4', type: 'bulk', url: '/assets/tmp/img/4.png'},
	{id: 5, name: '图片5', type: 'bulk', url: '/assets/tmp/img/5.png'},
	{id: 6, name: '图片6', type: 'bulk', url: '/assets/tmp/img/6.png'}
];

const newImageList = [
	{id: 1, name: '图片1', type: 'welcome', url: '/assets/tmp/img'},
	{id: 2, name: '图片2', type: 'welcome', url: '/assets/tmp/img'},
	{id: 3, name: '图片3', type: 'welcome', url: '/assets/tmp/img'},
	{id: 4, name: '图片4', type: 'welcome', url: '/assets/tmp/img'},
	{id: 5, name: '图片5', type: 'welcome', url: '/assets/tmp/img'},
	{id: 6, name: '图片6', type: 'welcome', url: '/assets/tmp/img'}
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

const appUsers = [
	{id: '1', account: '1234567651', nickName: 'aa', level: 0, phone: '2313123123123', companyName: 'xxxx公司', companyId: '1', businessArea: 'xxxx', license: 'xxx.png', creationTime: '2019/06/01 17:50:00'},
	{id: '2', account: '1234567652', nickName: 'bb', level: 1, phone: '2313123123123', companyName: 'xxxx公司', companyId: '1', businessArea: 'xxxx', license: 'xxx.png', creationTime: '2019/06/02 17:50:00'},
	{id: '3', account: '1234567653', nickName: 'cc', level: 2, phone: '2313123123123', companyName: 'xxxx公司', companyId: '1', businessArea: 'xxxx', license: 'xxx.png', creationTime: '2019/06/03 17:50:00'},
	{id: '4', account: '1234567654', nickName: 'dd', level: 3, phone: '2313123123123', companyName: 'xxxx公司', companyId: '1', businessArea: 'xxxx', license: 'xxx.png', creationTime: '2019/06/04 17:51:00'},
	{id: '5', account: '1234567655', nickName: 'ee', level: 4, phone: '2313123123123', companyName: 'xxxx公司', companyId: '1', businessArea: 'xxxx', license: 'xxx.png', creationTime: '2019/01/04 17:50:00'},
	{id: '6', account: '1234567656', nickName: 'ff', level: 5, phone: '2313123123123', companyName: 'xxxx公司', companyId: '1', businessArea: 'xxxx', license: 'xxx.png', creationTime: '2019/02/04 17:50:00'},
	{id: '7', account: '1234567657', nickName: 'gg', level: 2, phone: '2313123123123', companyName: 'xxxx公司', companyId: '1', businessArea: 'xxxx', license: 'xxx.png', creationTime: '2019/03/04 17:50:00'},
	{id: '8', account: '1234567658', nickName: 'hh', level: 2, phone: '2313123123123', companyName: 'xxxx公司', companyId: '1', businessArea: 'xxxx', license: 'xxx.png', creationTime: '2019/04/04 17:50:00'},
	{id: '9', account: '1234567659', nickName: 'ii', level: 1, phone: '2313123123123', companyName: 'xxxx公司', companyId: '1', businessArea: 'xxxx', license: 'xxx.png', creationTime: '2019/05/04 17:50:00'},
	{id: '10', account: '1234567660', nickName: 'jj', level: 1, phone: '2313123123123', companyName: 'xxxx公司', companyId: '1', businessArea: 'xxxx', license: 'xxx.png', creationTime: '2019/06/04 17:50:00'}
];

const exchangeRateList = [
	{id: '1', local: 'CNY', foreign: 'USD', rate: '0.147'},
	{id: '2', local: 'USD', foreign: 'CNY', rate: '7'},
	{id: '3', local: 'USD', foreign: 'AUD', rate: '1.1'}
];

const orderFreightList = [
	{id: '1', oriCode: '110011', oriAddress: 'xx xxx xxx', desCode: '120011', desAddress: 'xx xxx xxx', price: 12.31},
	{id: '2', oriCode: '110011', oriAddress: 'xx xxx xxx', desCode: '120011', desAddress: 'xx xxx xxx', price: 12.31},
	{id: '3', oriCode: '110011', oriAddress: 'xx xxx xxx', desCode: '120011', desAddress: 'xx xxx xxx', price: 12.31},
	{id: '4', oriCode: '110011', oriAddress: 'xx xxx xxx', desCode: '120011', desAddress: 'xx xxx xxx', price: 12.31},
	{id: '5', oriCode: '110011', oriAddress: 'xx xxx xxx', desCode: '120011', desAddress: 'xx xxx xxx', price: 12.31},
	{id: '6', oriCode: '110011', oriAddress: 'xx xxx xxx', desCode: '120011', desAddress: 'xx xxx xxx', price: 12.31},
	{id: '7', oriCode: '110011', oriAddress: 'xx xxx xxx', desCode: '120011', desAddress: 'xx xxx xxx', price: 12.31}
];

const OceanFreightList = [
	{id: '1', oriCountry: '法国', desPort: 'xx港口', fee: 123.45, currency: 'USD', containerType: '半柜'},
	{id: '2', oriCountry: '法国', desPort: 'xx港口', fee: 123.45, currency: 'USD', containerType: '整柜'},
	{id: '3', oriCountry: '法国', desPort: 'xx港口', fee: 123.45, currency: 'USD', containerType: '半柜'},
	{id: '4', oriCountry: '法国', desPort: 'xx港口', fee: 123.45, currency: 'USD', containerType: '整柜'},
	{id: '5', oriCountry: '法国', desPort: 'xx港口', fee: 123.45, currency: 'USD', containerType: '半柜'},
];

const CustomsInspectionList = [
	{id: '1', oriQty: 10000, desQty: 20000, fee: 123456, currency: 'USD'},
	{id: '2', oriQty: 10000, desQty: 20000, fee: 123456, currency: 'USD'},
	{id: '3', oriQty: 10000, desQty: 20000, fee: 123456, currency: 'USD'},
	{id: '4', oriQty: 10000, desQty: 20000, fee: 123456, currency: 'USD'},
	{id: '5', oriQty: 10000, desQty: 20000, fee: 123456, currency: 'USD'},
];

const Laminates = [
	{id: '1', name: '层板', cost: 12.34, currency: 'USD'},
	{id: '1', name: '层板', cost: 12.34, currency: 'USD'},
	{id: '1', name: '层板', cost: 12.34, currency: 'USD'},
	{id: '1', name: '层板', cost: 12.34, currency: 'USD'},
	{id: '1', name: '层板', cost: 12.34, currency: 'USD'},
	{id: '1', name: '层板', cost: 12.34, currency: 'USD'}
];

const BulkList = [
	{id: '1', name: '原酒', country: '法国', vendor: '某某某供应商', cost: 12.34, currency: 'USD', minQty: 10000},
	{id: '1', name: '原酒', country: '法国', vendor: '某某某供应商', cost: 12.34, currency: 'USD', minQty: 10000},
	{id: '1', name: '原酒', country: '法国', vendor: '某某某供应商', cost: 12.34, currency: 'USD', minQty: 10000},
	{id: '1', name: '原酒', country: '法国', vendor: '某某某供应商', cost: 12.34, currency: 'USD', minQty: 10000},
	{id: '1', name: '原酒', country: '法国', vendor: '某某某供应商', cost: 12.34, currency: 'USD', minQty: 10000},
	{id: '1', name: '原酒', country: '法国', vendor: '某某某供应商', cost: 12.34, currency: 'USD', minQty: 10000},
];

const Boxes = [
	{id: '1', name: '酒箱', dimension: '规格', trayQty: 1000, cost: 12.34, currency: 'USD', minQty: 10000, image: '/assets/tmp/img/2.png'},
	{id: '1', name: '酒箱', dimension: '规格', trayQty: 1000, cost: 12.34, currency: 'USD', minQty: 10000, image: '/assets/tmp/img/2.png'},
	{id: '1', name: '酒箱', dimension: '规格', trayQty: 1000, cost: 12.34, currency: 'USD', minQty: 10000, image: '/assets/tmp/img/2.png'},
	{id: '1', name: '酒箱', dimension: '规格', trayQty: 1000, cost: 12.34, currency: 'USD', minQty: 10000, image: '/assets/tmp/img/2.png'},
	{id: '1', name: '酒箱', dimension: '规格', trayQty: 1000, cost: 12.34, currency: 'USD', minQty: 10000, image: '/assets/tmp/img/2.png'},
];

const Caps = [
	{ id: '1', name: '酒帽', cost: 12.34, currency: 'USD', minQty: 10000, image: '/assets/tmp/img/2.png', maxFitLevel: 5, hasScrew: false },
	{ id: '1', name: '酒帽', cost: 12.34, currency: 'USD', minQty: 10000, image: '/assets/tmp/img/2.png', maxFitLevel: 5, hasScrew: false },
	{ id: '1', name: '酒帽', cost: 12.34, currency: 'USD', minQty: 10000, image: '/assets/tmp/img/2.png', maxFitLevel: 5, hasScrew: false },
	{ id: '1', name: '酒帽', cost: 12.34, currency: 'USD', minQty: 10000, image: '/assets/tmp/img/2.png', maxFitLevel: 5, hasScrew: false },
	{ id: '1', name: '酒帽', cost: 12.34, currency: 'USD', minQty: 10000, image: '/assets/tmp/img/2.png', maxFitLevel: 5, hasScrew: false },
	{ id: '1', name: '酒帽', cost: 12.34, currency: 'USD', minQty: 10000, image: '/assets/tmp/img/2.png', maxFitLevel: 5, hasScrew: false },
	{ id: '1', name: '酒帽', cost: 12.34, currency: 'USD', minQty: 10000, image: '/assets/tmp/img/2.png', maxFitLevel: 5, hasScrew: false },
	{ id: '1', name: '酒帽', cost: 12.34, currency: 'USD', minQty: 10000, image: '/assets/tmp/img/2.png', maxFitLevel: 5, hasScrew: false },
	{ id: '1', name: '酒帽', cost: 12.34, currency: 'USD', minQty: 10000, image: '/assets/tmp/img/2.png', maxFitLevel: 5, hasScrew: false },
];

const Corks = [
	{id: '1', name: '酒塞', cost: 12.34, currency: 'USD', minQty: 10000, image: '/assets/tmp/img/2.png', maxFitLevel: 5},
	{id: '1', name: '酒塞', cost: 12.34, currency: 'USD', minQty: 10000, image: '/assets/tmp/img/2.png', maxFitLevel: 5},
	{id: '1', name: '酒塞', cost: 12.34, currency: 'USD', minQty: 10000, image: '/assets/tmp/img/2.png', maxFitLevel: 5},
	{id: '1', name: '酒塞', cost: 12.34, currency: 'USD', minQty: 10000, image: '/assets/tmp/img/2.png', maxFitLevel: 5},
	{id: '1', name: '酒塞', cost: 12.34, currency: 'USD', minQty: 10000, image: '/assets/tmp/img/2.png', maxFitLevel: 5},
	{id: '1', name: '酒塞', cost: 12.34, currency: 'USD', minQty: 10000, image: '/assets/tmp/img/2.png', maxFitLevel: 5},
];

const Labels = [
	{id: '1', name: '酒标', code: '001', country: '法国', cost: 12.34, currency: 'USD', minQty: 10000, image: '/assets/tmp/img/2.png', type: '类型', style: '风格', material: '材质', maxFitLevel: 5},
	{id: '1', name: '酒标', code: '001', country: '法国', cost: 12.34, currency: 'USD', minQty: 10000, image: '/assets/tmp/img/2.png', type: '类型', style: '风格', material: '材质', maxFitLevel: 5},
	{id: '1', name: '酒标', code: '001', country: '法国', cost: 12.34, currency: 'USD', minQty: 10000, image: '/assets/tmp/img/2.png', type: '类型', style: '风格', material: '材质', maxFitLevel: 5},
	{id: '1', name: '酒标', code: '001', country: '法国', cost: 12.34, currency: 'USD', minQty: 10000, image: '/assets/tmp/img/2.png', type: '类型', style: '风格', material: '材质', maxFitLevel: 5},
	{id: '1', name: '酒标', code: '001', country: '法国', cost: 12.34, currency: 'USD', minQty: 10000, image: '/assets/tmp/img/2.png', type: '类型', style: '风格', material: '材质', maxFitLevel: 5},
	{id: '1', name: '酒标', code: '001', country: '法国', cost: 12.34, currency: 'USD', minQty: 10000, image: '/assets/tmp/img/2.png', type: '类型', style: '风格', material: '材质', maxFitLevel: 5},
	{id: '1', name: '酒标', code: '001', country: '法国', cost: 12.34, currency: 'USD', minQty: 10000, image: '/assets/tmp/img/2.png', type: '类型', style: '风格', material: '材质', maxFitLevel: 5},
	{id: '1', name: '酒标', code: '001', country: '法国', cost: 12.34, currency: 'USD', minQty: 10000, image: '/assets/tmp/img/2.png', type: '类型', style: '风格', material: '材质', maxFitLevel: 5},
	{id: '1', name: '酒标', code: '001', country: '法国', cost: 12.34, currency: 'USD', minQty: 10000, image: '/assets/tmp/img/2.png', type: '类型', style: '风格', material: '材质', maxFitLevel: 5},
];

const newsList = [
	{id: '1', title: '这是一个新闻标题1', creationTime: '2019/02/26 00:00:00', topIndex: 1, url: '/assets/tmp/img/'},
	{id: '2', title: '这是一个新闻标题2', creationTime: '2019/02/26 01:00:00', topIndex: 2, url: '/assets/tmp/img/'},
	{id: '3', title: '这是一个新闻标题3', creationTime: '2019/02/26 02:00:00', topIndex: 3, url: '/assets/tmp/img/'},
	{id: '4', title: '这是一个新闻标题4', creationTime: '2019/02/26 03:00:00', topIndex: 4, url: '/assets/tmp/img/'},
	{id: '5', title: '这是一个新闻标题5', creationTime: '2019/02/26 04:00:00', topIndex: 5, url: '/assets/tmp/img/'},
	{id: '6', title: '这是一个新闻标题6', creationTime: '2019/02/26 05:00:00', topIndex: 0, url: '/assets/tmp/img/'},
	{id: '7', title: '这是一个新闻标题7', creationTime: '2019/02/26 06:00:00', topIndex: 0, url: '/assets/tmp/img/'},
	{id: '8', title: '这是一个新闻标题8', creationTime: '2019/02/26 07:00:00', topIndex: 0, url: '/assets/tmp/img/'},
	{id: '9', title: '这是一个新闻标题9', creationTime: '2019/02/26 08:00:00', topIndex: 0, url: '/assets/tmp/img/'},
	{id: '10', title: '这是一个新闻标题10', creationTime: '2019/02/26 09:00:00', topIndex: 0, url: '/assets/tmp/img/'}
];

const Bottles = [
	{
		id: '1',
		name: '酒瓶',
		country: '法国',
		dimension: 123, 
		height: 123,
		weight: 123, 
		isHighBottle: false, 
		isAbnormalBottle: false,
		hasScrew: false, 
		largeCabQty: 123,
		largeCabTrayQty: 123,
		smallCabQty: 123, 
		smallCabTrayQty: 123, 
		cost: 12.34, 
		currency: 'USD', 
		minQty: 10000, 
		image: 'xxx.png',
		maxFitLevel: 5
	},
	{
		id: '1',
		name: '酒瓶',
		country: '法国',
		dimension: 123, 
		height: 123,
		weight: 123, 
		isHighBottle: false, 
		isAbnormalBottle: false,
		hasScrew: false, 
		largeCabQty: 123,
		largeCabTrayQty: 123,
		smallCabQty: 123, 
		smallCabTrayQty: 123, 
		cost: 12.34, 
		currency: 'USD', 
		minQty: 10000, 
		image: 'xxx.png',
		maxFitLevel: 5
	}
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
				id: '2',
				account: 'ncyy2',
				name: '运营2',
				role: '2',
				creationTime: '2019/05/20 12:00:00',
				state: 1
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
			data: ['sys', 'base-category', 'base-district', 'product']
		};

	}

	updateSysRoleMenu(req) {
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

// Base Start

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
			data: {id: 3123, name: '修改'}
		};
	}

	deleteBaseElementInfo() {
		return {
			status: 0,
			msg:'false',
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

	getExchangeRateList() {
		return {status: 0, data: exchangeRateList};
	}

	getExchangeRateInfo() {
		return {status: 0, data: exchangeRateList[0]};
	}

	updateExchangeRateInfo(req) {
		return {
			status: 0,
			data: exchangeRateList[0]
		};
	}

	deleteExchangeRateInfo() {
		return {
			status: 0,
			data: 'success'
		};
	}

// Base End

// Product start

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

	getImgList(req) {
		if (req.query.type === 'welcome' || req.query.type === 'news') {
			return {status: 0, msg: '', data: newImageList}
		}
		return {status: 0, msg: '', data: imageList};
	}

	getOrderFreightList() {
		return {status: 0, msg: '', data: orderFreightList};
	}

	getOrderFreightInfo() {
		return {
			status: 0,
			data: orderFreightList[0]
		};
	}

	updateOrderFreightInfo(req) {
		return {
			status: 0,
			data: 'success'
		};
	}

	deleteOrderFreightInfo() {
		return {
			status: 0,
			data: 'success'
		};
	}

	getOceanFreightList() {
		return {status: 0, msg: '', data: OceanFreightList};
	}

	getOceanFreightInfo() {
		return {
			status: 0,
			data: {id: '1', oriCountry: '1', desPort: '2', fee: 123.45, currency: 'USD', containerType: '1'}
		};
	}

	updateOceanFreightInfo(req) {
		return {
			status: 0,
			data: 'success'
		};
	}

	deleteOceanFreightInfo() {
		return {
			status: 0,
			data: 'success'
		};
	}

	getCustomsInspectionList() {
		return {status: 0, msg: '', data: CustomsInspectionList};
	}

	getCustomsInspectionInfo() {
		return {
			status: 0,
			data: {id: '1', oriQty: 10000, desQty: 20000, fee: 123456, currency: 'USD'},
		};
	}

	updateCustomsInspectionInfo(req) {
		return {
			status: 0,
			data: 'success'
		};
	}

	deleteCustomsInspectionInfo() {
		return {
			status: 0,
			data: 'success'
		};
	}

	getLaminates() {
		return {status: 0, msg: '', data: {list: Laminates, total: 20}};
	}

	getLaminateInfo() {
		return {
			status: 0,
			data: {id: '1', name: '层板', cost: 12.34, currency: 'USD'},
		};
	}

	updateLaminateInfo(req) {
		return {
			status: 0,
			data: 'success'
		};
	}

	deleteLaminateInfo() {
		return {
			status: 0,
			data: 'success'
		};
	}

	getBulkList() {
		return {status: 0, msg: '', data:  {list: BulkList, total: 20 }};
	}

	getBulkInfo() {
		return {
			status: 0,
			data: {id: '1', name: '原酒', country: '法国', vendor: '某某某供应商', cost: 12.34, currency: 'USD', minQty: 10000}
		};
	}

	updateBulkInfo(req) {
		return {
			status: 0,
			data: 'success'
		};
	}

	deleteBulkInfo() {
		return {
			status: 0,
			data: 'success'
		};
	}

	getBoxes() {
		return {status: 0, msg: '', data:  {list: Boxes, total: 20 }};
	}

	getBoxInfo() {
		return {
			status: 0,
			data: {id: '1', name: '酒箱', dimension: '规格', trayQty: 1000, cost: 12.34, currency: 'USD', minQty: 10000, image: '/assets/tmp/img/2.png'}
		};
	}

	updateBoxInfo(req) {
		return {
			status: 0,
			data: 'success'
		};
	}

	deleteBoxInfo() {
		return {
			status: 0,
			data: 'success'
		};
	}

	getCaps() {
		return {status: 0, msg: '', data:  {list: Caps, total: 20 }};
	}

	getCapInfo() {
		return {
			status: 0,
			data: { id: '1', name: '酒帽', cost: 12.34, currency: 'USD', minQty: 10000, image: '/assets/tmp/img/2.png', maxFitLevel: 5, hasScrew: false }
		};
	}

	updateCapInfo(req) {
		return {
			status: 0,
			data: 'success'
		};
	}

	deleteCapInfo() {
		return {
			status: 0,
			data: 'success'
		};
	}
	
	getCorks() {
		return {status: 0, msg: '', data:  {list: Corks, total: 20 }};
	}

	getCorkInfo() {
		return {
			status: 0,
			data:{id: '1', name: '酒塞', cost: 12.34, currency: 'USD', minQty: 10000, image: '/assets/tmp/img/2.png', maxFitLevel: 5},
		};
	}

	updateCorkInfo(req) {
		return {
			status: 0,
			data: 'success'
		};
	}

	deleteCorkInfo() {
		return {
			status: 0,
			data: 'success'
		};
	}


	getLabels() {
		return {status: 0, msg: '', data:  {list: Labels, total: 20 }};
	}

	getLabelInfo() {
		return {
			status: 0,
			data:{id: '1', name: '酒标', code: '001', country: '法国', cost: 12.34, currency: 'USD', minQty: 10000, image: '/assets/tmp/img/2.png', type: '类型', style: '风格', material: '材质', maxFitLevel: 5},
		};
	}

	updateLabelInfo(req) {
		return {
			status: 0,
			data: 'success'
		};
	}

	deleteLabelInfo() {
		return {
			status: 0,
			data: 'success'
		};
	}

	getBottles() {
		return {status: 0, msg: '', data:  {list: Bottles, total: 20 }};
	}

	getBottleInfo() {
		return {
			status: 0,
			data: {
				id: '1',
				name: '酒瓶',
				country: '法国',
				dimension: 123, 
				height: 123,
				weight: 123, 
				isHighBottle: false, 
				isAbnormalBottle: false,
				hasScrew: false, 
				largeCabQty: 123,
				largeCabTrayQty: 123,
				smallCabQty: 123, 
				smallCabTrayQty: 123, 
				cost: 12.34, 
				currency: 'USD', 
				minQty: 10000, 
				image: 'xxx.png',
				maxFitLevel: 5
			},
		};
	}

	updateBottleInfo(req) {
		return {
			status: 0,
			data: 'success'
		};
	}

	deleteBottleInfo() {
		return {
			status: 0,
			data: 'success'
		};
	}

// Product End

// customer start

	getCustomerSales() {
		return {status: 0, msg: '', data: salesList};
	}

	getCustomerCompanies() {
		return {status: 0, msg: '', data: customerCompanyList};
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

	getAppUsers() {
		return {status: 0, msg: '', data: {users: appUsers, total: 200}};
	}


	getAppUserInfo() {
		return {
			status: 0,
			data: appUsers[0]
		};
	}

	updateAppUserInfo() {
		return {
			status: 0,
			data: 'success'
		};
	}

	deleteAppUserInfo() {
		return {
			status: 0,
			data: 'success'
		};
	}

	getAppUserAuthInfo() {
		return {
			status: 0,
			data: {
				id: '1',
				 level: 1,
				company: ''
			}
		};
	}
	updateAppUserAuth() {
		return {status: 0, data: 'success'}
	}
// customer End

// app start


	getAppAds() {
		return {status: 0, msg: '', data: {list: newsList, total: 20}};
	}

	getAppAdInfo() {
		return {
			status: 0,
			data: {id: '1', title: '这是一个新闻标题1', creationTime: '2019/02/26 00:00:00', topIndex: 1, url: '2'}
		};
	}

	updateAppAdInfo() {
		return {
			status: 0,
			data: 'success'
		};
	}

	deleteAppAdInfo() {
		return {
			status: 0,
			data: 'success'
		};
	}

	updateAdInfo(req) {
		console.log(req.body);
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