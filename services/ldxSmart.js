const menu_data = {
	"app": {
		"name": "zwMid",
		"description": ""
	},
	"user": {
		"name": "Admin",
    	"avatar": "./assets/tmp/img/avatar.jpg",
    	"email": "zwMid@kdbund.com"
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
					"text": "页面创造",
					"i18n": "zw.menu.designer.main",
					"icon": "anticon-layout",
					"children": [
						{
							"text": "页面列表",
							"link": "/designer/index",
							"i18n": "zw.menu.designer.index"
						},
						{
							"text": "页面编辑0",
							"link": "/designer/edit/0",
							"i18n": "zw.menu.designer.edit.p0"
						},
						{
							"text": "页面编辑1",
							"link": "/designer/edit/1",
							"i18n": "zw.menu.designer.edit.p1"
						},
						{
							"text": "页面显示0",
							"link": "/designer/show/0",
							"i18n": "zw.menu.designer.show.p0"
						},
						{
							"text": "页面显示1",
							"link": "/designer/show/1",
							"i18n": "zw.menu.designer.show.p1"
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

const pageConfig = {
    main: {
        id: '',
        name: '',
        title: '',
        mode: 'page',
        author: '',
        updateTime: '2019/03/19 17:11:05',
        children: [{
            id: 'c82311b11d094b94a7754badf90c1699',
            type: 'container',
            name: '',
            visible: true,
            width: 25,
            layout: 'horizontal',
            children: [{
                id: '92b8be16a91c4e0981be20b2dd0af766',
                type: 'datePicker',
                name: 'mawbDate',
                visible: true,
                width: 25,
                disabled: false,
                required: false,
                defaultValue: null,
                hasLabel: true,
                label: 'mawbDate',
                labelWidth: 20,
                events: [],
                mode: 'single',
                format: 'YYYY/MM/DD',
                showTime: false,
                placeholder1: '',
                placeholder2: '',
                defaultDate1: '',
                defaultDate2: '',
                value: null
            }, {
                id: '1da93e6ffe1a46a68af10da742a2241b',
                type: 'input',
                name: 'mawbNo',
                visible: true,
                width: 25,
                disabled: false,
                required: true,
                defaultValue: '',
                hasLabel: true,
                label: 'mawbNo',
                labelWidth: 20,
                events: [{
                    id: '12312312312312312312312312',
                    type: 'change',
                    local: {
                        name: 'a1',
                        params:['92b8be16a91c4e0981be20b2dd0af766','1da93e6ffe1a46a68af10da742a2241b']
                    },
                    remote: {
                        queue: ['1', '2']
                    }
                }],
                placeholder: '',
                inputType: 'text',
                readonly: false,
                areaRows: 3,
                value: '',
                prefix: '',
                suffix: ''
            }, {
                id: 'a3b68de855864fc6bcdfb886a399d71b',
                type: 'selectbox',
                name: 'flight',
                visible: true,
                width: 25,
                disabled: false,
                required: false,
                defaultValue: '',
                hasLabel: true,
                label: 'flight',
                labelWidth: 20,
                events: [],
                placeholder: '',
                dataSource: 'static',
                dataAction: '',
                selectOptions: []
            }, {
                id: '5a7fbdd4ab9d42f895d38100c20a0126',
                type: 'input',
                name: 'airCode',
                visible: true,
                width: 25,
                disabled: false,
                required: false,
                defaultValue: '',
                hasLabel: true,
                label: 'airCode',
                labelWidth: 20,
                events: [],
                placeholder: '',
                inputType: 'text',
                readonly: true,
                areaRows: 3,
                value: '',
                prefix: '',
                suffix: ''
            }, {
                id: '2defcb62ce14415aa8b8a3434defcf69',
                type: 'input',
                name: 'shippingPort',
                visible: true,
                width: 25,
                disabled: false,
                defaultValue: '',
                hasLabel: true,
                label: 'shippingPort',
                labelWidth: 20,
                events: [],
                placeholder: '',
                inputType: 'text',
                readonly: true,
                areaRows: 3,
                value: '',
                prefix: '',
                suffix: ''
            }, {
                id: 'ab81f460a5764f589b23fccccf2e5241',
                type: 'input',
                name: 'destinationPort',
                visible: true,
                width: 25,
                disabled: false,
                required: false,
                defaultValue: '',
                hasLabel: true,
                label: 'destinatePort',
                labelWidth: 20,
                events: [],
                placeholder: '',
                inputType: 'text',
                readonly: true,
                areaRows: 3,
                value: '',
                prefix: '',
                suffix: ''
            }, {
                id: '28fd4fa9c95e42d7a2a39c25c34c7d38',
                type: 'input',
                name: 'clearNo',
                visible: true,
                width: 25,
                disabled: false,
                required: true,
                defaultValue: '',
                hasLabel: true,
                label: 'clearNo',
                labelWidth: 20,
                events: [],
                placeholder: '',
                inputType: 'text',
                readonly: true,
                areaRows: 3,
                value: '',
                prefix: '',
                suffix: ''
            }, {
                id: 'e97adb5fef8f4c8197d68d15a7c5fc8f',
                type: 'input',
                name: 'fakeNo',
                visible: true,
                width: 25,
                disabled: false,
                required: true,
                defaultValue: '',
                hasLabel: true,
                label: 'fakeNo',
                labelWidth: 20,
                events: [],
                placeholder: '',
                inputType: 'text',
                readonly: true,
                areaRows: 3,
                value: '',
                prefix: '',
                suffix: ''
            }, {
                id: 'dedc62a082ff4f079461aad71ecc7895',
                type: 'input',
                name: 'awbNo',
                visible: true,
                width: 25,
                disabled: false,
                required: true,
                defaultValue: '',
                hasLabel: true,
                label: 'awbNo',
                labelWidth: 20,
                events: [],
                placeholder: '',
                inputType: 'text',
                readonly: false,
                areaRows: 3,
                value: '',
                prefix: '',
                suffix: ''
            }, {
                id: 'f33a3730b9e74f9486a7300e3dee6be5',
                type: 'button',
                name: '',
                visible: true,
                width: 25,
                disabled: false,
                text: 'printLabel',
                btnType: 'default',
                events: [
                    {
                        type: 'click',
                        local: {
                            name: 'A1',
                            params: ['1da93e6ffe1a46a68af10da742a2241b']
                        },
                        remote: {
                            queue: []
                        },
                        afterRemote: {
                            name: 'A2',
                            params: ''
                        }
                    }
                ]
            }, {
                id: '9ea1925c904d46d284b4be8b8750d3e1',
                type: 'button',
                name: 'airPack',
                visible: true,
                width: 25,
                disabled: false,
                text: 'airPack',
                btnType: 'default'
            }]
        }],
        actions: [{
            id: '1',
            type: 'query',
            name: 'aaaa',
            compNames: [],
            filters: [],
            functions: [],
            transfers: [],
            defaultDataList: []
        }],
        events: []
    },
    modals: []
};

const editPage = {
    id: '',
    name: '',
    title: '',
    mode: 'page',
    author: '',
    updateTime: '2019/03/19 17:11:05',
    children: [{
        id: 'c82311b11d094b94a7754badf90c1699',
        type: 'container',
        name: '',
        visible: true,
        width: 25,
        layout: 'horizontal',
        children: [{
            id: '92b8be16a91c4e0981be20b2dd0af766',
            type: 'datePicker',
            name: 'mawbDate',
            visible: true,
            width: 25,
            disabled: false,
            required: false,
            defaultValue: null,
            hasLabel: true,
            label: 'mawbDate',
            labelWidth: 20,
            events: [],
            mode: 'single',
            format: 'YYYY/MM/DD',
            showTime: false,
            placeholder1: '',
            placeholder2: '',
            defaultDate1: '',
            defaultDate2: '',
            value: null
        }, {
            id: '1da93e6ffe1a46a68af10da742a2241b',
            type: 'input',
            name: 'mawbNo',
            visible: true,
            width: 25,
            disabled: false,
            required: true,
            defaultValue: '',
            hasLabel: true,
            label: 'mawbNo',
            labelWidth: 20,
            events: [],
            placeholder: '',
            inputType: 'text',
            readonly: false,
            areaRows: 3,
            value: '',
            prefix: '',
            suffix: ''
        }, {
            id: 'a3b68de855864fc6bcdfb886a399d71b',
            type: 'selectbox',
            name: 'flight',
            visible: true,
            width: 25,
            disabled: false,
            required: false,
            defaultValue: '',
            hasLabel: true,
            label: 'flight',
            labelWidth: 20,
            events: [],
            placeholder: '',
            dataSource: 'static',
            dataAction: '',
            selectOptions: []
        }, {
            id: '5a7fbdd4ab9d42f895d38100c20a0126',
            type: 'input',
            name: 'airCode',
            visible: true,
            width: 25,
            disabled: false,
            required: false,
            defaultValue: '',
            hasLabel: true,
            label: 'airCode',
            labelWidth: 20,
            events: [],
            placeholder: '',
            inputType: 'text',
            readonly: true,
            areaRows: 3,
            value: '',
            prefix: '',
            suffix: ''
        }, {
            id: '2defcb62ce14415aa8b8a3434defcf69',
            type: 'input',
            name: 'shippingPort',
            visible: true,
            width: 25,
            disabled: false,
            defaultValue: '',
            hasLabel: true,
            label: 'shippingPort',
            labelWidth: 20,
            events: [],
            placeholder: '',
            inputType: 'text',
            readonly: true,
            areaRows: 3,
            value: '',
            prefix: '',
            suffix: ''
        }, {
            id: 'ab81f460a5764f589b23fccccf2e5241',
            type: 'input',
            name: 'destinationPort',
            visible: true,
            width: 25,
            disabled: false,
            required: false,
            defaultValue: '',
            hasLabel: true,
            label: 'destinatePort',
            labelWidth: 20,
            events: [],
            placeholder: '',
            inputType: 'text',
            readonly: true,
            areaRows: 3,
            value: '',
            prefix: '',
            suffix: ''
        }, {
            id: '28fd4fa9c95e42d7a2a39c25c34c7d38',
            type: 'input',
            name: 'clearNo',
            visible: true,
            width: 25,
            disabled: false,
            required: true,
            defaultValue: '',
            hasLabel: true,
            label: 'clearNo',
            labelWidth: 20,
            events: [],
            placeholder: '',
            inputType: 'text',
            readonly: true,
            areaRows: 3,
            value: '',
            prefix: '',
            suffix: ''
        }, {
            id: 'e97adb5fef8f4c8197d68d15a7c5fc8f',
            type: 'input',
            name: 'fakeNo',
            visible: true,
            width: 25,
            disabled: false,
            required: true,
            defaultValue: '',
            hasLabel: true,
            label: 'fakeNo',
            labelWidth: 20,
            events: [],
            placeholder: '',
            inputType: 'text',
            readonly: true,
            areaRows: 3,
            value: '',
            prefix: '',
            suffix: ''
        }, {
            id: 'dedc62a082ff4f079461aad71ecc7895',
            type: 'input',
            name: 'awbNo',
            visible: true,
            width: 25,
            disabled: false,
            required: true,
            defaultValue: '',
            hasLabel: true,
            label: 'awbNo',
            labelWidth: 20,
            events: [],
            placeholder: '',
            inputType: 'text',
            readonly: false,
            areaRows: 3,
            value: '',
            prefix: '',
            suffix: ''
        }, {
            id: 'f33a3730b9e74f9486a7300e3dee6be5',
            type: 'button',
            name: '',
            visible: true,
            width: 25,
            disabled: false,
            text: 'printLabel',
            btnType: 'default'
        }, {
            id: '9ea1925c904d46d284b4be8b8750d3e1',
            type: 'button',
            name: 'airPack',
            visible: true,
            width: 25,
            disabled: false,
            text: 'airPack',
            btnType: 'default'
        }]
    }],
    actions: [],
    events:[]
};

const translations = [{
    key: "t1",
    value: "t2"
}];

const pageList = [
    { id: '1', title: 'page1', updateTime: '2019/04/01 01:00' },
    { id: '2', title: 'page2', updateTime: '2019/04/02 02:00' },
    { id: '3', title: 'page3', updateTime: '2019/04/03 03:00' },
    { id: '4', title: 'page4', updateTime: '2019/04/04 04:00' },
    { id: '5', title: 'page5', updateTime: '2019/04/05 05:00' },
    { id: '6', title: 'page6', updateTime: '2019/04/06 06:00' },
    { id: '7', title: 'page7', updateTime: '2019/04/07 07:00' },
    { id: '8', title: 'page8', updateTime: '2019/04/08 08:00' },
    { id: '9', title: 'page9', updateTime: '2019/04/09 09:00' },
    { id: '10', title: 'page10', updateTime: '2019/04/10 10:00' },
    { id: '11', title: 'page11', updateTime: '2019/04/11 11:00' },
    { id: '12', title: 'page12', updateTime: '2019/04/12 12:00' },
    { id: '13', title: 'page13', updateTime: '2019/04/13 13:00' },
    { id: '14', title: 'page14', updateTime: '2019/04/14 14:00' },
    { id: '15', title: 'page15', updateTime: '2019/04/15 15:00' },
    { id: '16', title: 'page16', updateTime: '2019/04/16 16:00' },
    { id: '17', title: 'page17', updateTime: '2019/04/17 17:00' },
    { id: '18', title: 'page18', updateTime: '2019/04/18 18:00' },
    { id: '19', title: 'page19', updateTime: '2019/04/19 19:00' },
    { id: '20', title: 'page20', updateTime: '2019/04/20 20:00' },
    { id: '21', title: 'page21', updateTime: '2019/04/21 21:00' },
    { id: '22', title: 'page22', updateTime: '2019/04/22 22:00' },
    { id: '23', title: 'page23', updateTime: '2019/04/23 23:00' },
    { id: '24', title: 'page24', updateTime: '2019/04/24 24:00' }
]

const tableList = [
	{
		"id": "59145e9b2a6f9f25ac311573",
		"name": "产品信息",
		"fields": [
			{ "name": "时效", "id": "5915755e8225d516987db9b8" },
			{ "name": "默认配送服务", "id": "59cdf6f126b45e5a51108194" },
			{ "name": "默认目的地区", "id": "59f7b788ff11900cf1e7c5aa" },
			{ "name": "出口服务ID", "id": "5ac1fae5ff11900c1029da34" },
			{ "name": "燃油费率", "id": "5a057be7ff11905277d8b08c" },
			{ "name": "进口服务ID", "id": "5ac1fad0ff11900c1029da09" },
			{ "name": "抛重系数", "id": "591575bc8225d516987db9b9" },
			{ "name": "产品名称", "id": "593a61ad0c52f86ec9f3d6d9" },
			{ "name": "站点", "id": "59145f032a6f9f25ac311575" },
			{ "name": "抛重方式", "id": "5a5dee10ff119036952fb5ac" }
		]
	},
	{
		"id": "59144df22a6f9f25ac311551",
		"name": "客户",
		"fields": [
			{ "name": "余额", "id": "5a12b4fbff11902184e21546" },
			{ "name": "客户别名", "id": "5baaff02ff1190591563dbc2" },
			{ "name": "出账日", "id": "5b56a98dff1190187ecf8d6e" },
			{ "name": "业务类型", "id": "5baafedeff1190591563db9c" },
			{ "name": "客户代码", "id": "591544228225d516987db979" },
			{ "name": "常用收件国家地区", "id": "59c65111c54a6731a5024097" },
			{ "name": "常用发件地址", "id": "591544f98225d516987db97e" },
			{ "name": "常用英文发件地址", "id": "59434d66ad98c34baca0a1ba" },
			{ "name": "常用发件城市", "id": "591545108225d516987db97f" },
			{ "name": "常用英文发件城市", "id": "5c495d64c32d3350447f209d" },
			{ "name": "常用发件公司", "id": "594a457b0c52f81ffe1bcbe9" },
			{ "name": "常用发件区县", "id": "5c495c81c32d3350447f209b" },
			{ "name": "常用英文发件区县", "id": "5c495d91c32d3350447f209e" },
			{ "name": "常用发件省份", "id": "59c0bf9f26b45e11bb4e2375" },
			{ "name": "常用英文发件省份", "id": "5c495cc1c32d3350447f209c" },
			{ "name": "常用发件国家地区", "id": "59c650dec54a6731a5024096" },
			{ "name": "常用发件联系电话", "id": "591544d68225d516987db97d" },
			{ "name": "常用发件邮编", "id": "591545738225d516987db981" },
			{ "name": "常用发件人", "id": "591544a98225d516987db97c" },
			{ "name": "联系人", "id": "59cf524f26b45e5a511083a1" },
			{ "name": "创建时间", "id": "5c4841c0c32d331070634d32" },
			{ "name": "创建方式", "id": "5bb5b656ff11904e8f294abf" },
			{ "name": "信用额度", "id": "5c495e0bc32d3350447f209f" },
			{ "name": "信用等级", "id": "5c495e33c32d3350447f20a0" },
			{ "name": "币种", "id": "5a27637eff11903c15b9a991" },
			{ "name": "口座", "id": "5b56abdeff1190187ecf8e08" },
			{ "name": "交货地址", "id": "591544358225d516987db97a" },
			{ "name": "折扣", "id": "591545b88225d516987db983" },
			{ "name": "邮箱", "id": "5c4841d1c32d331070634d33" },
			{ "name": "预估余额", "id": "5c492a31ff119035c1756073" },
			{ "name": "进出口编号", "id": "5b56a8b2ff1190187ecf8d3b" },
			{ "name": "法人号", "id": "5a79595dff11905f47ebc843" },
			{ "name": "客户名称", "id": "59144e032a6f9f25ac311552" },
			{ "name": "英文名称", "id": "5a6580faff119020e545a110" },
			{ "name": "付款期限", "id": "5b56a9acff1190187ecf8d70" },
			{ "name": "常用产品", "id": "591545ec8225d516987db984" },
			{ "name": "国家地区", "id": "5b56aa20ff1190187ecf8d7f" },
			{ "name": "备注", "id": "5a7959d8ff11905f47ebc8b4" },
			{ "name": "结算方式", "id": "591545968225d516987db982" },
			{ "name": "站点", "id": "59152ed58225d516987db970" },
			{ "name": "特殊标记", "id": "5bdfc780ff11905a2d59abbd" },
			{ "name": "状态", "id": "5b56a9d5ff1190187ecf8d74" },
			{ "name": "电话", "id": "591544728225d516987db97b" },
			{ "name": "经办人", "id": "5a433ffcff1190023a409edc" },
			{ "name": "客户类型", "id": "5a4340bdff1190023a409f24" },
			{ "name": "创建用户", "id": "591d5f652a6f9f3a34e31179" },
			{ "name": "微信", "id": "591d5d3e2a6f9f3a34e31178" }
		]
	}
];

const actionList = [];

class LdxSmart {
    constructor(req, res){
		this.req = req
		this.res = res
	}

    getTranslations() {
        let self = this;
        let status = 200;
        let res = {status: 'success', errMsg: '', translations};
        return self.res.status(status).json(res);
    }

    getTableList() {
        let self = this;
        let status = 200;
        let res = {status: 'success', errMsg: '', data: tableList};
        return self.res.status(status).json(res);
    }

    getLocalActionList() {
        let self = this;
        let status = 200;
        let res = {status: 'success', errMsg: '', data: actionList};
        return self.res.status(status).json(res);
    }

    getPageList() {
        let self = this;
        let status = 200;
        let { title, index, size } = self.req.query;
        let res = {status: '', errMsg: ''};
        let newPageList = [];
        let resPageList = [];
        size = parseInt(size,10);
        index = parseInt(index, 10);
        const startIndex = size * (index - 1);
        const endIndex = size * index - 1;
        if (title === '') {
            newPageList = pageList;
        } else {
            newPageList = pageList.filter(pageInfo => {
                return pageInfo.title.indexOf(title) > -1;
            });
        }
        
        const total = newPageList.length;
        if (total > 0) {
            resPageList = newPageList.filter((pageinfo, index) => index >= startIndex && index <= endIndex )
        }
        res = {status: 'success', errMsg: '', pageList: resPageList, total: total};
        return self.res.status(status).json(res);
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
        if (body.userName === 'admin' && body.password === '888888') {
            res =  { status: 'success', errMsg: '', user: new_token };
        } else {
            res =  { status: 'failed', errMsg: '账户或密码错误'};
        }
        return self.res.status(200).json(res);
    }

    getShowPageInfo() {
        let self = this;
        const { id } = self.req.query;
       
        let res = { status: '', errMsg: '' };
        if (id === '1') {
            res =  { status: 'success', errMsg: '', page: pageConfig };
        } else {
            res =  { status: 'failed', errMsg: '错误ID'};
        }
        return self.res.status(200).json(res);
    }

    getEditPageInfo() {
        let self = this;
        const { id } = self.req.query;
        console.log(self.req.query);
        let res = { status: '', errMsg: '' };
        if (id === '1') {
            res =  { status: 'success', errMsg: '', config: editPage };
        } else {
            res =  { status: 'failed', errMsg: '错误ID'};
        }
        return self.res.status(200).json(res);
    }

    getAsyncTest() {
        let self = this;
        const { id } = self.req.query;
       
        let res = { status: 'success', errMsg: '' };
        return self.res.status(200).json(res);
    }

    testAsyncAction () {
        let self = this;
        const body = self.req.body;

        let res =  { status: 'success', errMsg: '', value: 3 };

        return self.res.status(200).json(res);
    }
}

module.exports = LdxSmart