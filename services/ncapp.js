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

	getHomeProducts() {
		return {
			status: 0,
			data: {
				latest: [
					{ id: '0', imgUrl: 'https://image.freepik.com/free-vector/wine_24908-53989.jpg', title: '黑羊肖恩赤霞珠干红葡萄酒', price: 666.12 },
					{ id: '1', imgUrl: 'https://image.freepik.com/free-vector/wine_24908-53989.jpg', title: '黑羊肖恩赤霞珠干红葡萄酒' },
					{ id: '2', imgUrl: 'https://image.freepik.com/free-vector/wine_24908-53989.jpg', title: '黑羊肖恩赤霞珠干红葡萄酒' },
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

	getProuductList(req) {
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
						{ id: '0', imgUrl: 'https://image.freepik.com/free-vector/wine_24908-53989.jpg', title: '黑羊肖恩赤霞珠干红葡萄酒', price: 666.12 },
						{ id: '1', imgUrl: 'https://image.freepik.com/free-vector/wine_24908-53989.jpg', title: '黑羊肖恩赤霞珠干红葡萄酒' },
						{ id: '2', imgUrl: 'https://image.freepik.com/free-vector/wine_24908-53989.jpg', title: '黑羊肖恩赤霞珠干红葡萄酒' },
						{ id: '3', imgUrl: 'https://image.freepik.com/free-vector/wine_24908-53989.jpg', title: '黑羊肖恩赤霞珠干红葡萄酒', price: 500 },
					],
				},
				{
					title: '品牌现货',
					content: [
						{ id: '0', imgUrl: 'https://image.freepik.com/free-vector/wine_24908-53989.jpg', title: '1黑羊肖恩赤霞珠干红葡萄酒', price: 666.12 },
						{ id: '1', imgUrl: 'https://image.freepik.com/free-vector/wine_24908-53989.jpg', title: '2黑羊肖恩赤霞珠干红葡萄酒' },
						{ id: '2', imgUrl: 'https://image.freepik.com/free-vector/wine_24908-53989.jpg', title: '3黑羊肖恩赤霞珠干红葡萄酒' },
						{ id: '3', imgUrl: 'https://image.freepik.com/free-vector/wine_24908-53989.jpg', title: '4黑羊肖恩赤霞珠干红葡萄酒', price: 500 },
					],
				},
			]
		}
	}
}

module.exports = NineCoastApp;