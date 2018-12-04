const menu_data = {
    app: {
        name: 'Ldx Smart',
        description: 'LdxSmart'
    },
    user: {
        name: 'Admin',
        avatar: './assets/zorro.svg',
        email: 'abc@abc.com'
    },
    menu: [
        {
            text: 'Main Navigation',
            translate: 'main_navigation',
            group: true,
            children: [
                {
                    text: 'Dashboard',
                    link: '/dashboard',
                    translate: 'dashboard',
                    icon: { type: 'icon', value: 'appstore' }
                },
                {
                    text: 'Page',
                    translate: 'page_design',
                    children: [
                        {
                            text: 'Page index',
                            translate: 'formbuilderpage_index',
                            link: '/fb/index',
                            icon: { type: 'icon', value: '' }
                        },
                        {
                            text: 'Page Edit0',
                            translate: 'formbuilderpage_edit',
                            link: '/fb/edit/0',
                            icon: { type: 'icon', value: '' }
                        },
                        {
                            text: 'Page Edit1',
                            translate: 'formbuilderpage_edit',
                            link: '/fb/edit/1',
                            icon: { type: 'icon', value: '' }
                        },
                        {
                            text: 'Page Edit2',
                            translate: 'formbuilderpage_edit',
                            link: '/fb/edit/2',
                            icon: { type: 'icon', value: '' }
                        },
                        {
                            text: 'Page Show',
                            translate: 'formbuilderpage_show',
                            link: '/fb/show/0',
                            icon: { type: 'icon', value: '' }
                        },
                        {
                            text: 'Page Show1',
                            translate: 'page_show1',
                            link: '/fb/show/1',
                            icon: { type: 'icon', value: '' }
                        }
                    ]
                }
            ]
        },
        {
            text: 'Pro',
            translate: 'pro',
            group: true,
            children: [
                {
                    text: 'User',
                    translate: 'pro_user',
                    link: '/passport',
                    icon: { type: 'icon', value: '' },
                    children: [
                        {
                            text: 'login',
                            link: '/passport/login',
                            translate: 'pro_login',
                            reuse: false
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
    mainPage: {
        id: '',
        title: 'Test Show Page',
        author: 'admin',
        creationTime: '2018-11-19',
        name: 'testPage',
        type: 'page',
        children: [
            {
                id: 'container1',
                name: 'mainContainer',
                type: 'container',
                controlType: 'FormGroup',
                visible: true,
                validators: [
                    {
                        type: 'custom',
                        functionName: ''
                    }
                ],
                children: [
                    {
                        id: 'account2',
                        name: 'account',
                        type: 'input',
                        controlType: 'FormControl',
                        nzSpan: 6,
                        visible: true,
                        validators: [
                            {
                                type: 'reg',
                                regText: '',
                            },
                            {
                                type: 'minLength',
                                minLength: '1'
                            }
                            // ,
                            // {
                            //     type: 'sync',
                            //     funcName: 'syncxx',
                            //     validateName: 'syncxx'
                            // },
                            // {
                            //     type: 'async',
                            //     funcName: 'syncxx',
                            //     validateName: 'syncxx'
                            // }
                        ],
                        required: true,
                        disabled: false,
                        defaultValue: '',
                        label: 'account',
                        placeholder: 'account',
                        events: []
                    },
                    {
                        id: 'text3',
                        name: 'text1',
                        type: 'input',
                        controlType: 'FormControl',
                        nzSpan: 6,
                        visible: true,
                        required: false,
                        disabled: false,
                        defaultValue: '',
                        label: 'text1',
                        placeholder: 'text1'
                    }
                ]
            },
            {
                id: 'btn4',
                name: 'btn1',
                type: 'button',
                controlType: '',
                nzSpan: '',
                visible: true,
                disabled: false,
                text: 'Button',
                events: [
                    {
                        type: 'click',
                        queue: ['ac1', 'ac2']
                    }
                ]
            }
        ],
        actions: [
            {
                id: 'ac1',
                type: 'sync',
                data: ['dataItem', 'dataItem'],
                functionName: '',
                result: '??'

            },
            {
                id: 'ac2',
                type: 'async',
                url: '',
                group: [
                    {
                        type: 'query',
                        data: ['dataItem', 'dataItem'],
                        result: []
                    },
                    {
                        type: 'save',
                        data: ['dataItem', 'dataItem'],
                        result: []
                    }
                ],
                result: '??'
            }
        ],
        dataGroup: []
    },
    modalPages: []
};

const editPage = {
    id: 'form123',
    title: 'Test Edit Page',
    author: 'admin',
    creationTime: '2018-11-19',
    name: 'testPage',
    type: 'page',
    layout: 'vertical',
    children: [
        {
            id: 'container1',
            name: 'mainContainer',
            type: 'container',
            controlType: 'FormGroup',
            layout: 'horizontal',
            visible: true,
            validators: [
                {
                    type: 'custom',
                    functionName: ''
                }
            ],
            children: [
                {
                    id: 'account2',
                    name: 'account',
                    type: 'input',
                    controlType: 'FormControl',
                    layout: 'horizontal',
                    nzSpan: 6,
                    visible: true,
                    validators: [
                        {
                            type: 'reg',
                            regText: '',
                        },
                        {
                            type: 'minLength',
                            minLength: '1'
                        }
                    ],
                    required: true,
                    disabled: false,
                    defaultValue: '',
                    label: 'account',
                    placeholder: 'account',
                    events: []
                },
                {
                    id: 'text3',
                    name: 'text1',
                    type: 'input',
                    controlType: 'FormControl',
                    layout: 'horizontal',
                    nzSpan: 6,
                    visible: true,
                    required: false,
                    disabled: false,
                    defaultValue: '',
                    label: 'text1',
                    placeholder: 'text1'
                }
            ]
        },
        {
            id: 'btn4',
            name: 'btn1',
            type: 'button',
            controlType: '',
            layout: 'horizontal',
            nzSpan: '',
            visible: true,
            disabled: false,
            text: 'Button',
            events: [
                {
                    type: 'click',
                    queue: ['ac1', 'ac2']
                }
            ]
        }
    ],
    actions: [
        {
            id: 'ac1',
            type: 'sync',
            data: ['dataItem', 'dataItem'],
            functionName: '',
            result: '??'

        },
        {
            id: 'ac2',
            type: 'async',
            url: '',
            group: [
                {
                    type: 'query',
                    data: ['dataItem', 'dataItem'],
                    result: []
                },
                {
                    type: 'save',
                    data: ['dataItem', 'dataItem'],
                    result: []
                }
            ],
            result: '??'
        }
    ],
    dataGroup: []
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
        if (self.req.headers.token) {
            res = {status: 'success', errMsg: '', menu: menu_data};
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
            res =  { status: 'success', errMsg: '', token: new_token, menu: menu_data };
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
            res =  { status: 'success', errMsg: '', pageInfo: pageConfig };
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