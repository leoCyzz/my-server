const userBrief = {
	token: '1234567890',
	user: {
		nickName: 'test',
		avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
		level: 5
	},
	address: {
		name: '收件人',
		phone: '12345678912',
		district: '上海 上海市 闵行区',
		districtCode: '110011',
		detail: '某某弄某某街道某某号'
	}
};

class NineCoastApp {
    constructor(req, res){
		this.req = req
		this.res = res
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

	getWelcomeInfo() {
		return {
			status: 0,
			data: 'https://image.freepik.com/free-photo/3d-wooden-table-grunge-black-background_1048-10179.jpg'
		}
	}
	getNewsList() {
		return {
			status: 0,
			data: [
				{
					imgUrl: 'https://image.freepik.com/free-photo/3d-wooden-table-grunge-black-background_1048-10179.jpg'
				},
				{
					imgUrl: 'https://image.freepik.com/free-psd/monstera-leaves-living-room_53876-93346.jpg'
				},
				{
					imgUrl: 'https://image.freepik.com/free-psd/styled-botanical-design-poster_53876-93350.jpg'
				}
			]
		}
	}
	
	getHomeCategories() {
		return {
			status: 0,
			data: {
				latest: [
					{ id: '0', imgUrl: 'https://image.freepik.com/free-vector/wine_24908-53989.jpg', title: '黑羊肖恩赤霞珠干红葡萄酒', price: 666.12 },
					{ id: '1', imgUrl: '', title: '黑羊肖恩赤霞珠干红葡萄酒' },
					{ id: '2', imgUrl: 'https://image.freepik.com/free-vector/wine.jpg', title: '黑羊肖恩赤霞珠干红葡萄酒' },
					{ id: '3', imgUrl: 'https://image.freepik.com/free-vector/wine_24908-53989.jpg', title: '黑羊肖恩赤霞珠干红葡萄酒', price: 500 },
				],
				hot: [
					{ id: '0', imgUrl: 'https://image.freepik.com/free-vector/wine_24908-53989.jpg', title: '黑羊肖恩赤霞珠干红葡萄酒', price: 666.12 },
					{ id: '1', imgUrl: 'https://image.freepik.com/free-vector/wine_24908-53989.jpg', title: '黑羊肖恩赤霞珠干红葡萄酒' },
					{ id: '2', imgUrl: 'https://image.freepik.com/free-vector/wine_24908-53989.jpg', title: '黑羊肖恩赤霞珠干红葡萄酒' },
					{ id: '3', imgUrl: 'https://image.freepik.com/free-vector/wine_24908-53989.jpg', title: '黑羊肖恩赤霞珠干红葡萄酒', price: 500 },
				],
				promotion: [
					{ id: '0', imgUrl: 'https://image.freepik.com/free-vector/wine_24908-53989.jpg', title: '黑羊肖恩赤霞珠干红葡萄酒', price: 666.12 },
					{ id: '1', imgUrl: 'https://image.freepik.com/free-vector/wine_24908-53989.jpg', title: '黑羊肖恩赤霞珠干红葡萄酒' },
					{ id: '2', imgUrl: 'https://image.freepik.com/free-vector/wine_24908-53989.jpg', title: '黑羊肖恩赤霞珠干红葡萄酒' },
					{ id: '3', imgUrl: 'https://image.freepik.com/free-vector/wine_24908-53989.jpg', title: '黑羊肖恩赤霞珠干红葡萄酒', price: 500 },
				]
			}
		}
	}

	getHomeProductList(req) {
		let array = [];
		for (let index = 0; index < 10; index++) {
			const id = Math.ceil(Math.random()*1000000000).toString();
			let price = Math.ceil(Math.random()*100);
			price = price % 2 === 0 ? price : 0;
			const item = {
				id,
				imgUrl: 'https://image.freepik.com/free-vector/wine_24908-53989.jpg',
				title: '黑羊肖恩赤霞珠干红葡萄酒',
				price
			};
			array.push(item);
			
		}
		return {
			status: 0,
			data: array
		}
	}

	getProductsByName() {
		return {
			status: 0,
			data: [
				{
					title: '简标定制',
					content: [
						{ 
							id: '0', 
							imgUrl: 'https://image.freepik.com/free-vector/wine_24908-53989.jpg', 
							nameZh: '黑羊肖恩赤霞珠干红葡萄酒',
							nameEn: 'asdasfasdafg',
							dimension: '1箱(共12瓶)',
							type: '简标'
						},
						{ 
							id: '1', 
							imgUrl: 'https://image.freepik.com/free-vector/wine_24908-53989.jpg', 
							nameZh: '黑羊肖恩赤霞珠干红葡萄酒',
							nameEn: 'asdasfasdafg',
							dimension: '1箱(共12瓶)',
							type: '简标'
						},
						{ 
							id: '2', 
							imgUrl: 'https://image.freepik.com/free-vector/wine_24908-53989.jpg', 
							nameZh: '黑羊肖恩赤霞珠干红葡萄酒',
							nameEn: 'asdasfasdafg',
							dimension: '1箱(共12瓶)',
							type: '简标'
						},
						{ 
							id: '3', 
							imgUrl: 'https://image.freepik.com/free-vector/wine_24908-53989.jpg', 
							nameZh: '黑羊肖恩赤霞珠干红葡萄酒',
							nameEn: 'asdasfasdafg',
							dimension: '1箱(共12瓶)',
							type: '简标'
						},
					],
				},
				{
					title: '品牌现货',
					content: [
						{ 
							id: '0', 
							imgUrl: 'https://image.freepik.com/free-vector/wine_24908-53989.jpg', 
							nameZh: '黑羊肖恩赤霞珠干红葡萄酒',
							nameEn: 'asdasfasdafg',
							dimension: '1箱(共12瓶)',
							type: '现货',
							price: 123
						},
						{ 
							id: '1', 
							imgUrl: 'https://image.freepik.com/free-vector/wine_24908-53989.jpg', 
							nameZh: '黑羊肖恩赤霞珠干红葡萄酒',
							nameEn: 'asdasfasdafg',
							dimension: '1箱(共12瓶)',
							type: '现货',
							price: 222
						},
						{ 
							id: '2', 
							imgUrl: 'https://image.freepik.com/free-vector/wine_24908-53989.jpg', 
							nameZh: '黑羊肖恩赤霞珠干红葡萄酒',
							nameEn: 'asdasfasdafg',
							dimension: '1箱(共12瓶)',
							type: '现货',
							price: 333
						},
						{ 
							id: '3', 
							imgUrl: 'https://image.freepik.com/free-vector/wine_24908-53989.jpg', 
							nameZh: '黑羊肖恩赤霞珠干红葡萄酒',
							nameEn: 'asdasfasdafg',
							dimension: '1箱(共12瓶)',
							type: '现货',
							price: 444
						},
					],
				},
			]
		}
	}

	getLoginState() {
		return {
			status: 0,
			data: userBrief
		}
	}

	getProductsByFilter(req) {
		// console.log(req.query);
		let array = [];
		const end =Math.ceil(Math.random()*10) % 3;
		if (end) {
			for (let index = 0; index < 20; index++) {
				const title= Math.ceil(Math.random()*10) + '-' + index;
				const id = Math.ceil(Math.random()*1000000000).toString();
				let price = Math.ceil(Math.random()*100);
				price = price % 2 === 0 ? price : 0;
				const item = {
					id,
					imgUrl: 'https://image.freepik.com/free-vector/wine_24908-53989.jpg',
					title: title + '黑羊肖恩赤霞珠干红葡萄酒',
					price
				};
				array.push(item);
				
			}
		}
		
		return {
			status: 0,
			data: array
		}
	}

	getProductFilterList(req) {
		return {
			status: 0,
			data: [
				{ 
					title: '国家',
					list: [
						{ type: 'country', key: 'FRA', name: '法国' },
						{ type: 'country', key: 'CHN', name: '中国' },
						{ type: 'country', key: 'AUS', name: '澳大利亚' },
						{ type: 'country', key: 'CL', name: '智利' },
						{ type: 'country', key: 'OTHER', name: '其他' }
					],
				},
				{ 
					title: '产地',
					list: [
						{ type: 'area', key: 'bld', name: '波尔多' },
						{ type: 'area', key: 'lgdk', name: '朗格多克' },
						{ type: 'area', key: 'bgd', name: '勃艮第' },
						{ type: 'area', key: 'other', name: '其他' }
					],
				},
				{ 
					title: '葡萄品种',
					list: [
						{ type: 'grape', key: 'byl', name: '白玉露' },
						{ type: 'grape', key: 'xl', name: '西拉' },
						{ type: 'grape', key: 'cxz', name: '赤霞珠' },
						{ type: 'grape', key: 'ghn', name: '歌海娜' },
						{ type: 'grape', key: 'other', name: '其他' }
					],
				},
				{ 
					title: '酒精度',
					list: [
						{ type: 'alcohol', key: '10', name: '<=10%' },
						{ type: 'alcohol', key: '103', name: '10%~13%' },
						{ type: 'alcohol', key: '135', name: '13%~15%' },
						{ type: 'alcohol', key: '15', name: '>=15%' }
					],
				},
				{ 
					title: '灌装地区',
					list: [
						{ type: 'mfg', key: '1', name: '国内灌装' },
						{ type: 'mfg', key: '2', name: '保税区灌装' },
						{ type: 'mfg', key: '3', name: '国外灌装' },
						{ type: 'mfg', key: '4', name: '其他' }
					],
				}
			]
		}
	}

	login(req) {
		const {account, pwd} = req.body;
		if (account === 'a' && pwd === 'a') {
			return {
				status: 0,
				data: userBrief
			}
		} else {
			return {
				status: 1,
				msg: '账号或密码错误'
			}
		}
		
	}

	getUserCompany() {
		return {
			status: 0,
			data: {
				name: '上海九岸网络科技有限公司',
				phone: '12342143123',
				address: 'xxx弄xxx号',
				area: '上海 上海市 闵行区'
			}
		}
	}

	updateUserInfo() {
		return {
			status: 0,
			data: 'success'
		}
	}

	updatePwd() {
		return {
			status: 0,
			data: 'success'
		}
	}

	updatePhone() {
		return {
			status: 0,
			data: 'success'
		}
	}

	logon() {
		return {
			status: 0,
			data: {
				id: '123'
			}
		}
	}
	signUp() {
		return {
			status: 0,
			data: 'success'
		}
	}

	getAddressList() {
		return {
			status: 0,
			data: [
				{
					id: '1',
					name: '我是收件人',
					phone: '123456789',
					district: '上海 上海市 闵行区',
					code: '123456',
					detail: 'xxxx路xxx弄xxx号',
					isDefault: true
				},
				{
					id: '2',
					name: '我是收件人',
					phone: '22345566879',
					district: '上海 上海市 闵行区',
					detail: 'xxxx路xxx弄xxx号'
				}
			]
		}
	}

	getAddressInfo() {
		return {
			status: 0,
			data: {
					id: '1',
					name: '我是收件人',
					phone: '123456789',
					district: '上海 上海市 闵行区',
					code: '135465',
					detail: 'xxxx路xxx弄xxx号',
					isDefault: true
				}
		}
	}

	updateAddress() {
		return {
			status: 0,
			data: 'sucdess'
		}
	}

	deleteAddress() {
		return {
			status: 0,
			data: 'sucdess'
		}
	}

	getOrderList() {
		return {
			status: 0,
			data: [
				{
					id: '1',
					orderNum: '123123123',
					imgUrl: 'https://image.freepik.com/free-vector/wine_24908-53989.jpg',
					warehouse: '上海仓',
					nameZh: '金羊毛精选干红',
					nameEn: 'Golden Fleece',
					quantity: '2箱(共24瓶)',
					type: 1,
					status: 1,
					isSample: true,
					sumPrice: 123456
				},
				{
					id: '2',
					orderNum: '2233445566',
					imgUrl: 'https://image.freepik.com/free-vector/wine_24908-53989.jpg',
					warehouse: '上海仓',
					nameZh: '金羊毛精选干红',
					nameEn: 'Golden Fleece',
					quantity: '2箱(共24瓶)',
					type: 1,
					status: 1,
					isSample: true,
					sumPrice: 123456
				}
			]
		}
	}

	getOrderDetail() {
		return {
			status: 0,
			data: {
				id: '123',
				reciver: {
					id: '1',
					name: '我是收件人',
					phone: '123456789',
					district: '上海 上海市 闵行区',
					detail: 'xxxx路xxx弄xxx号'
				},
				product: {
					imgUrl: 'https://image.freepik.com/free-vector/wine_24908-53989.jpg',
					nameZh: '金羊毛精选干红',
					nameEn: 'Golden Fleece',
					quantity: '2箱(共24瓶)',
					type: '现货',
					dimension: '6瓶/箱',
					unitPrice: 6,
					price: 123,
					freight: 12,
					sumPrice: 135,
				},
				pay: {
					orderNum: '123',
					payNum: '123',
					creationTime: '2019-07-15 12:00:00', 
					dealTime: '2019-07-15 12:00:00'
				}
			}
		}
	}

	confirmOrder() {
		return {
			status: 0,
			data: {
				id: '123',
				reciver: {
					id: '',
					name: '',
					phone: '',
					detail: '',
					district: ''
				},
				product: {
					imgUrl: '',
					nameZh: '',
					nameEn: '',
					quantity: '2箱(共24瓶)',
					type: '现货',
					dimension: {
						unit: '箱',
						value: 6
					},
					price: 123,
					freight: 12,
					sumPrice: 135,
				},
			}
		}
	}

	cancelOrder() {
		return {
			status: 0,
			data: 'success'
		}
	}

	getProductInfo() {
		// const type = Math.random() 
		return {
			status: 0,
			data: {
				id: '13123123',
				type: 2, 
				imgs: [
					'https://image.freepik.com/free-photo/3d-wooden-table-grunge-black-background_1048-10179.jpg',
					'https://image.freepik.com/free-psd/monstera-leaves-living-room_53876-93346.jpg',
					'https://image.freepik.com/free-psd/styled-botanical-design-poster_53876-93350.jpg'
				],
				dimension: '6瓶/箱',
				range: [
					{
						id: '1',
						quantity: 1,
						unit: '样品',
						price: 20
					},
					{
						id: '2',
						quantity: 50,
						unit: '箱',
						price: 10
					}
				],
				info: {
					nameEn: 'Golden Fleece',
					nameZh: '金羊毛精选干红',
					country: '澳大利亚',
					area: '南澳产区',
					warehouse: '上海仓',
					brief: '本品产自于法国，酒呈深宝石红色，浓郁的黑莓、月桂和薰衣草的气息；口感充满活力，单宁精致，结构清晰，余味悠长。',
					alcohol: '10%vol',
					grapeType: '歌海娜',
					year: 2016,
					recommendTemp:'14-18℃',
					palate: '品鉴表现',
					collocation: '搭配牛肉、羊肉和烤猪肉等食物',
					occasion: '自饮、聚会、团圆、婚宴等',
					bottleSize: ''
				},
				detail: [
					'https://image.freepik.com/free-psd/monstera-leaves-living-room_53876-93346.jpg',
					'https://image.freepik.com/free-psd/styled-botanical-design-poster_53876-93350.jpg'
				]
			}
		}
	}
	addCart() {
		return {
			status: 0,
			data: 'success'
		}
	}

	getCartList() {
		return {
			status: 0,
			data: [
				{
					id: '1',
					productId:'123',
					type: '现货',
					warehouse: '上海仓',
					nameZh: '金羊毛精选干红',
					nameEn: 'Golden Fleece',
					sum: '1箱(共12瓶)',
					qty: 24, // 共几瓶
					isSample: false,
					price: 123.12,
					imgUrl: 'https://image.freepik.com/free-vector/wine_24908-53989.jpg'
				}
			],
		}
	}

	calCartPrice() {
		return {
			status: 0,
			data: {
				sum: '2箱（共24瓶）',
				sumPrice: 123,
			 	freight: 33
			}
		}
	}

	deleteCart() {
		return {
			status: 0,
			data: 'success'
		}
	}

	getFavoriteList() {
		return {
			status: 0,
			data: [
				{
					id: '1',
					productId: '123',
					type: '现货',
					nameZh: '金羊毛精选干红',
					nameEn: 'Golden Fleece',
					dimension: '6瓶/箱',
					price: 123,
					imgUrl: 'https://image.freepik.com/free-vector/wine_24908-53989.jpg'
				},
				{
					id: '2',
					productId: '12d1223',
					type: '现货',
					nameZh: '金羊毛精选干红',
					nameEn: 'Golden Fleece',
					dimension: '6瓶/箱',
					price: 123,
					imgUrl: 'https://image.freepik.com/free-vector/wine_24908-53989.jpg'
				}
			]
		}
	}

	deleteFavorite() {
		return {
			status: 0,
			data: 'success'
		}
	}

	addFavorite() {
		return {
			status: 0,
			data: 'success'
		}
	}

	genConfirmOrder() {
		return {
			status: 0,
			data: {
				freight: 20,
				sumPrice: 200,
				list: [
					{
						id: '123',
						imgUrl: 'https://image.freepik.com/free-vector/wine_24908-53989.jpg',
						nameZh: '金羊毛精选干红',
						type: '样品',
						warehouse: '上海仓',
						unitPrice: 30,
						sum: '2箱(共24瓶)',
						sumPrice: 200
					},
					{
						id: '123',
						imgUrl: 'https://image.freepik.com/free-vector/wine_24908-53989.jpg',
						nameZh: '金羊毛精选干红',
						type: '样品',
						warehouse: '上海仓',
						unitPrice: 30,
						sum: '2箱(共24瓶)',
						sumPrice: 200
					}
				]
			}
		}
	}

	getSLDesignInfo() {
		return {
			status: 0,
			data: {
				product: {
					id: '111',
					nameZh: '金羊毛精选干红',
					nameEn: 'Golden Fleece',
					imgUrl: 'https://image.freepik.com/free-vector/wine_24908-53989.jpg',
					dimension: '6瓶/箱',
					minQty: 500,
					samplePrice: 30
				},
				boxList: [
					{
						id: '222',
						imgUrl: 'https://image.freepik.com/free-vector/wine_24908-53989.jpg',
						name: '标准彩箱',
						option: '默认配置',
						isDefault: true
					},
					{
						id: '333',
						imgUrl: 'https://image.freepik.com/free-vector/wine_24908-53989.jpg',
						name: '横卧彩箱',
						option: '起订量1000箱',
						isDefault: false
					},
					{
						id: '444',
						imgUrl: 'https://image.freepik.com/free-vector/wine_24908-53989.jpg',
						name: '横卧彩箱',
						option: '起订量1000箱',
						isDefault: false
					},
					{
						id: '555',
						imgUrl: 'https://image.freepik.com/free-vector/wine_24908-53989.jpg',
						name: '横卧彩箱',
						option: '起订量1000箱',
						isDefault: false
					}
				]
			}
		}
	}

	getWineLabelList() {
		return {
			status: 0,
			data: [
				{
					id: '111',
					imgUrl: 'https://image.freepik.com/free-vector/wine_24908-53989.jpg',
					name: '这是酒标名称',
					sn: '001',
					price: 1000
				},
				{
					id: '222',
					imgUrl: 'https://image.freepik.com/free-vector/wine_24908-53989.jpg',
					name: '这是酒标名称',
					sn: '001',
					price: 1000
				},
				{
					id: '333',
					imgUrl: 'https://image.freepik.com/free-vector/wine_24908-53989.jpg',
					name: '这是酒标名称',
					sn: '001',
					price: 1000
				},
				{
					id: '444',
					imgUrl: 'https://image.freepik.com/free-vector/wine_24908-53989.jpg',
					name: '这是酒标名称',
					sn: '001',
					price: 1000
				},
				{
					id: '555',
					imgUrl: 'https://image.freepik.com/free-vector/wine_24908-53989.jpg',
					name: '这是酒标名称',
					sn: '001',
					price: 1000
				},
				{
					id: '666',
					imgUrl: 'https://image.freepik.com/free-vector/wine_24908-53989.jpg',
					name: '这是酒标名称',
					sn: '001',
					price: 1000
				},
				{
					id: '777',
					imgUrl: 'https://image.freepik.com/free-vector/wine_24908-53989.jpg',
					name: '这是酒标名称',
					sn: '001',
					price: 1000
				},
				{
					id: '888',
					imgUrl: 'https://image.freepik.com/free-vector/wine_24908-53989.jpg',
					name: '这是酒标名称',
					sn: '001',
					price: 1000
				},
				{
					id: '999',
					imgUrl: 'https://image.freepik.com/free-vector/wine_24908-53989.jpg',
					name: '这是酒标名称',
					sn: '001',
					price: 1000
				},
				{
					id: '1000',
					imgUrl: 'https://image.freepik.com/free-vector/wine_24908-53989.jpg',
					name: '这是酒标名称',
					sn: '001',
					price: 1000
				},
			]
		}
	}

	getLabelFilterList(req) {
		return {
			status: 0,
			data: [
				{ 
					title: '国家',
					list: [
						{ type: 'country', key: 'FRA', name: '法国' },
						{ type: 'country', key: 'CHN', name: '中国' },
						{ type: 'country', key: 'AUS', name: '澳大利亚' },
						{ type: 'country', key: 'CL', name: '智利' },
						{ type: 'country', key: 'OTHER', name: '其他' }
					],
				},
				{ 
					title: '类型',
					list: [
						{ type: 'type', key: 'bld', name: '波尔多' },
						{ type: 'type', key: 'lgdk', name: '朗格多克' },
						{ type: 'type', key: 'bgd', name: '勃艮第' },
						{ type: 'type', key: 'other', name: '其他' }
					],
				},
				{ 
					title: '风格',
					list: [
						{ type: 'style', key: 'byl', name: '白玉露' },
						{ type: 'style', key: 'xl', name: '西拉' },
						{ type: 'style', key: 'cxz', name: '赤霞珠' },
						{ type: 'style', key: 'ghn', name: '歌海娜' },
						{ type: 'style', key: 'other', name: '其他' }
					],
				},
				{ 
					title: '材质',
					list: [
						{ type: 'material', key: '10', name: '<=10%' },
						{ type: 'material', key: '103', name: '10%~13%' },
						{ type: 'material', key: '135', name: '13%~15%' },
						{ type: 'material', key: '15', name: '>=15%' }
					],
				}
			]
		}
	}

	calSLCombinePrice() {
		return {
			status: 0,
			data: 999
		}
	}

	uploadAvatar () {
		return {
			status: 0,
			data: 'https://image.freepik.com/free-vector/wine_24908-53989.jpg'
		}
	}
}

module.exports = NineCoastApp;