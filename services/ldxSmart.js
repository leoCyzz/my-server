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


class LdxSmart {
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
       
        let res = { status: '', errMsg: '' };
        if (id === '1') {
            res =  { status: 'success', errMsg: '', page: editPage };
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