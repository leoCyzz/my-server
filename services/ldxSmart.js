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
			"text": "zwMid",
			"i18n": "zw.menu.main",
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
            res =  { status: 'success', errMsg: '', token: new_token };
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