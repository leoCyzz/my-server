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
					{ id: '3', imgUrl: 'https://image.freepik.com/free-vector/wine_24908-53989.jpg', title: '黑羊肖恩赤霞珠干红葡萄酒' },
					{ id: '3', imgUrl: 'https://image.freepik.com/free-vector/wine_24908-53989.jpg', title: '黑羊肖恩赤霞珠干红葡萄酒', price: 500 },
				],
				hot: [
					{ id: '0', imgUrl: 'https://image.freepik.com/free-vector/wine_24908-53989.jpg', title: '黑羊肖恩赤霞珠干红葡萄酒', price: 666.12 },
					{ id: '1', imgUrl: 'https://image.freepik.com/free-vector/wine_24908-53989.jpg', title: '黑羊肖恩赤霞珠干红葡萄酒' },
					{ id: '3', imgUrl: 'https://image.freepik.com/free-vector/wine_24908-53989.jpg', title: '黑羊肖恩赤霞珠干红葡萄酒' },
					{ id: '3', imgUrl: 'https://image.freepik.com/free-vector/wine_24908-53989.jpg', title: '黑羊肖恩赤霞珠干红葡萄酒', price: 500 },
				],
				promotion: [
					{ id: '0', imgUrl: 'https://image.freepik.com/free-vector/wine_24908-53989.jpg', title: '黑羊肖恩赤霞珠干红葡萄酒', price: 666.12 },
					{ id: '1', imgUrl: 'https://image.freepik.com/free-vector/wine_24908-53989.jpg', title: '黑羊肖恩赤霞珠干红葡萄酒' },
					{ id: '3', imgUrl: 'https://image.freepik.com/free-vector/wine_24908-53989.jpg', title: '黑羊肖恩赤霞珠干红葡萄酒' },
					{ id: '3', imgUrl: 'https://image.freepik.com/free-vector/wine_24908-53989.jpg', title: '黑羊肖恩赤霞珠干红葡萄酒', price: 500 },
				]
			}
		}
	}
}

module.exports = NineCoastApp;