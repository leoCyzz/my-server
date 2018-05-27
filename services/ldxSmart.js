const menu_data = {
    'app': {
        'name': 'Ldx Smart',
        'description': 'LdxSmart'
    },
    'user': {
        'name': 'Admin',
        'avatar': './assets/img/zorro.svg',
        'email': 'abc@abc.com'
    },
    'menu': [
        {
            'text': 'Main Navigation',
            'translate': 'main_navigation',
            'group': true,
            'children': [
                {
                    'text': 'Dashboard',
                    'link': '/dashboard',
                    'translate': 'dashboard',
                    'icon': 'icon-speedometer'
                },
                {
                    'text': 'Shortcut Menu',
                    'translate': 'shortcut_menu',
                    'icon': 'icon-rocket',
                    'shortcut_root': true
                },
                {
                    'text': 'Page',
                    'translate': 'page_design',
                    'children': [
                        {
                            'text': 'Page List',
                            'translate': 'page_list',
                            'link': '/formbuilder/index',
                            'icon': ''
                        },
                        {
                            'text': 'Page Edit',
                            'translate': 'page_edit',
                            'link': '/formbuilder/edit/0',
                            'icon': ''
                        },
                        {
                            'text': 'Page Show',
                            'translate': 'page_show',
                            'link': '/formbuilder/show/0',
                            'icon': ''
                        },
                        {
                            'text': 'Page Show1',
                            'translate': 'page_show1',
                            'link': '/formbuilder/show/1',
                            'icon': ''
                        }
                    ]
                }
            ]
        },
        {
            'text': 'Pro',
            'translate': 'pro',
            'group': true,
            'children': [
                {
                    'text': 'User',
                    'translate': 'pro_user',
                    'link': '/passport',
                    'icon': 'icon-user',
                    'children': [
                        {
                            'text': 'login',
                            'link': '/passport/login',
                            'translate': 'pro_login',
                            'reuse': false
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
        creationTime: '2018-05-26',
        name: 'testPage',
        type: 'page',
        controlType: 'FormGroup',
        translate: '',
        children: [
            {
                name: 'formContainer',
                type: 'container',
                controlType: 'FormGroup',
                translate: '',
                visible: true,
                disabled: false,
                events: [],
                children: [
                    {
                        type: 'form',
                        name: 'form1',
                        controlType: 'FormGroup',
                        disabled: false,
                        translate: '',
                        visible: true,
                        events: [],
                        value: '',
                        children: [
                            {
                                type: 'inputText',
                                name: 'account',
                                label: 'account',
                                translate: 'account',
                                controlType: 'FormControl',
                                disabled: false,
                                required: true,
                                value: '',
                                validators: [
                                    {
                                        type: 'minLength',
                                        name: 'minLength',
                                        value: 6,
                                        error: {
                                            message: ''
                                        }
                                    }
                                ]
                            },
                            {
                                type: 'inputText',
                                name: 'password',
                                label: 'password',
                                translate: 'password',
                                props: {
                                    
                                },
                                controlType: 'FormControl',
                                disabled: false,
                                required: true,
                                value: '',
                                validators: [
                                    {
                                        type: 'minLength',
                                        name: 'minLength',
                                        value: 6,
                                        error: {
                                            message: ''
                                        }
                                    }
                                ]
                            },
                            {
                                type: 'inputText',
                                name: 'confirmPwd',
                                label: 'confirmPwd',
                                translate: 'confirmPwd',
                                props: {
                                    
                                },
                                controlType: 'FormControl',
                                disabled: false,
                                required: true,
                                value: '',
                                validators: [
                                    {
                                        type: 'minLength',
                                        name: 'minLength',
                                        value: 6,
                                        error: {
                                            message: ''
                                        }
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        name: 'confirmbutton',
                        type: 'button',
                        controlType: '',
                        translate: '',
                        visible: true,
                        disabled: false,
                        label: 'confirm',
                        children: []
                    }
                ]
            }
        ],
        actions: [],
        dataTables: []
    },
    modalPages: []
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

    getShowPageConfig() {
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

    getEditPageConfig() {
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
}

module.exports = LdxSmart