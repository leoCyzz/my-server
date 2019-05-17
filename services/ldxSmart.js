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
					"i18n": "zw.menu.show",
					"icon": "anticon-layout",
					"children": [
						{
							"text": "页面显示0",
							"link": "/show/0",
							"i18n": "zw.menu.show.p0"
						},
						{
							"text": "页面显示1",
							"link": "/show/1",
							"i18n": "zw.menu.show.p1"
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
        "id": "123",
        "pageId": "8cdde26a690142fd8af35b93a7e44b26",
        "name": "demo",
        "title": "",
        "mode": "page",
        "updateTime": "",
        "children": [{
            "id": "ffe74649fe4341e2b31064fb3c9d8657",
            "type": "container",
            "name": "",
            "visible": true,
            "layout": "horizontal",
            "children": [{
                "id": "e4d55be39236453ba3850d7aecb17e59",
                "type": "checkbox",
                "name": "check1",
                "visible": true,
                "disabled": false,
                "required": false,
                "label": "",
                "defaultValue": null,
                "events": [],
                "checkOptions": [{
                    "text": "",
                    "value": "",
                    "checked": false
                }, {
                    "text": "",
                    "value": "",
                    "checked": false
                }]
            }, {
                "id": "ee98fa06e9bf4ed386d9f5802bfcf064",
                "type": "datepicker",
                "name": "datepicker1",
                "visible": true,
                "disabled": false,
                "required": false,
                "label": "",
                "defaultValue": null,
                "events": [],
                "mode": "single",
                "placeholder1": "",
                "placeholder2": "",
                "showTime": false,
                "format": "YYYY/MM/DD",
                "initDate1": "",
                "initDate2": ""
            }, {
                "id": "1d457bd5a48e441fada585572f68b1ef",
                "type": "input",
                "name": "input1",
                "visible": true,
                "disabled": false,
                "required": false,
                "label": "",
                "defaultValue": null,
                "events": [{
                    "id": "096f8dbddfa746acb7c273576221d090",
                    "type": "change",
                    "local": {
                        "name": "",
                        "comps": []
                    },
                    "afterRemote": {
                        "name": "",
                        "comps": []
                    }
                }],
                "inputType": "text",
                "placeholder": "",
                "readonly": false,
                "areaRows": 5,
                "prefix": "",
                "suffix": ""
            }, {
                "id": "518ada63e4e147cc81cd5f3c58c1af09",
                "type": "inputnumber",
                "name": "inputnumber1",
                "visible": true,
                "disabled": false,
                "required": false,
                "label": "",
                "defaultValue": null,
                "events": [],
                "placeholder": "",
                "max": 999,
                "min": 0,
                "step": 1
            }, {
                "id": "3097cd341edc4d9d922fa73b57ba05ad",
                "type": "radio",
                "name": "radio1",
                "visible": true,
                "disabled": false,
                "required": false,
                "label": "",
                "defaultValue": null,
                "events": [],
                "radioOptions": [{
                    "text": "",
                    "value": ""
                }, {
                    "text": "",
                    "value": ""
                }]
            }]
        }, {
            "id": "61040a46b5564541b1b924faa7543a9f",
            "type": "container",
            "name": "",
            "visible": true,
            "layout": "horizontal",
            "children": [{
                "id": "9d383ba83a2543caa5e5d2cb7f730701",
                "type": "scale",
                "name": "scale1",
                "visible": true,
                "disabled": false,
                "required": false,
                "label": "",
                "defaultValue": null,
                "events": [],
                "isAuto": false,
                "placeholder": "",
                "socketAddr": ""
            }, {
                "id": "600dd799e2db48d6bb71ba1b87617eed",
                "type": "select",
                "name": "select1",
                "visible": true,
                "disabled": false,
                "required": false,
                "label": "",
                "defaultValue": null,
                "events": [],
                "placeholder": "",
                "selectOptions": []
            }, {
                "id": "be33b1915d274b8c894685a02ee278a0",
                "type": "upload",
                "name": "upload1",
                "visible": true,
                "disabled": false,
                "required": false,
                "label": "",
                "defaultValue": null,
                "events": [],
                "text": "",
                "accept": [],
                "fileType": "",
                "multiple": false,
                "limit": 1,
                "size": 10
            }, {
                "id": "a107a1f8a90549ef9e22a493b01def8c",
                "type": "button",
                "name": "button1",
                "visible": true,
                "text": "",
                "btnType": "default",
                "disabled": false,
                "events": [{
                    "id": "6b2dcdee923044c79e1047a701a1664c",
                    "type": "click",
                    "local": {
                        "name": "",
                        "comps": []
                    },
                    "afterRemote": {
                        "name": "",
                        "comps": []
                    }
                }]
            }]
        }, {
            "id": "b5704aad22a345d3b1ffab80ae124dda",
            "type": "print",
            "name": "print1",
            "visible": true,
            "disabled": false,
            "required": false,
            "label": "",
            "defaultValue": null,
            "events": [],
            "printTimes": 1,
            "tempName": "",
            "height": 200
        }, {
            "id": "9f35e0e97f364456915e6b7d7fc65675",
            "type": "table",
            "name": "table1",
            "visible": true,
            "disabled": false,
            "required": false,
            "label": "",
            "defaultValue": null,
            "events": [],
            "hasSerialNumber": true,
            "hasCheckkbox": false,
            "columns": [],
            "pageSize": 20
        }],
        "events": [{
            "id": "a4ef6141ec1c478e9b943b396bb0fdfb",
            "type": "init",
            "local": {
                "name": "",
                "comps": []
            },
            "afterRemote": {
                "name": "",
                "comps": []
            }
        }],
        "remotes": {
            "8cdde26a690142fd8af35b93a7e44b26": {},
            "1d457bd5a48e441fada585572f68b1ef": {
                "096f8dbddfa746acb7c273576221d090": {
                    "queue": []
                }
            },
            "a107a1f8a90549ef9e22a493b01def8c": {
                "6b2dcdee923044c79e1047a701a1664c": {
                    "queue": []
                }
            },
            "": {
                "a4ef6141ec1c478e9b943b396bb0fdfb": {
                    "queue": ["3342376aa1444d1eb79a9073201d8796"]
                }
            }
        },
        "dataGroups": [{
            "name": "product",
            "tableId": "59145e9b2a6f9f25ac311573",
            "addRecord": false,
            "fkMap": [],
            "uniqueFields": []
        }, {
            "name": "customer",
            "tableId": "59144df22a6f9f25ac311551",
            "addRecord": false,
            "fkMap": [],
            "uniqueFields": []
        }],
        "dataItems": {
            "e4d55be39236453ba3850d7aecb17e59": {
                "fieldId": "5915755e8225d516987db9b8",
                "groupName": "product",
                "operator": "0",
                "value": ""
            },
            "ee98fa06e9bf4ed386d9f5802bfcf064": {
                "fieldId": "5baaff02ff1190591563dbc2",
                "groupName": "customer",
                "operator": 0,
                "value": ""
            },
            "1d457bd5a48e441fada585572f68b1ef": {
                "fieldId": "591575bc8225d516987db9b9",
                "groupName": "product",
                "operator": 0,
                "value": ""
            },
            "518ada63e4e147cc81cd5f3c58c1af09": {
                "fieldId": "5baafedeff1190591563db9c",
                "groupName": "customer",
                "operator": 0,
                "value": ""
            },
            "3097cd341edc4d9d922fa73b57ba05ad": {
                "fieldId": "59f7b788ff11900cf1e7c5aa",
                "groupName": "product",
                "operator": 0,
                "value": ""
            },
            "9d383ba83a2543caa5e5d2cb7f730701": {
                "fieldId": "5a12b4fbff11902184e21546",
                "groupName": "customer",
                "operator": 0,
                "value": ""
            },
            "600dd799e2db48d6bb71ba1b87617eed": {
                "fieldId": "59f7b788ff11900cf1e7c5aa",
                "groupName": "product",
                "operator": 0,
                "value": ""
            },
            "be33b1915d274b8c894685a02ee278a0": {
                "fieldId": null,
                "groupName": null,
                "operator": 0,
                "value": ""
            },
            "b5704aad22a345d3b1ffab80ae124dda": {
                "fieldId": null,
                "groupName": null,
                "operator": 0,
                "value": ""
            },
            "9f35e0e97f364456915e6b7d7fc65675": {
                "fieldId": null,
                "groupName": null,
                "operator": 0,
                "value": ""
            }
        },
        "actions": [{
            "id": "3342376aa1444d1eb79a9073201d8796",
            "name": "save1",
            "type": "save",
            "filters": [{
                "fieldId": "59f7b788ff11900cf1e7c5aa",
                "groupName": "product",
                "operator": "5",
                "value": "2"
            }],
            "extraFuncs": {
                "prepare": [{
                    "groupName": "product",
                    "functionName": "1212"
                }],
                "after": [{
                    "groupName": "customer",
                    "functionName": "1212"
                }],
                "validate": [{
                    "groupName": "product",
                    "functionName": "1212"
                }]
            },
            "transfers": [{
                "origin": {
                    "fieldId": "59cdf6f126b45e5a51108194",
                    "groupName": "product"
                },
                "refers": {
                    "fieldId": "591544f98225d516987db97e",
                    "groupName": "customer"
                }
            }],
            "defaultDataList": [{
                "fieldId": "59f7b788ff11900cf1e7c5aa",
                "groupName": "product",
                "operator": 0,
                "value": "1"
            }]
        }],
        "actionItems": {
            "3342376aa1444d1eb79a9073201d8796": ["e4d55be39236453ba3850d7aecb17e59", "518ada63e4e147cc81cd5f3c58c1af09", "be33b1915d274b8c894685a02ee278a0", "a107a1f8a90549ef9e22a493b01def8c", "600dd799e2db48d6bb71ba1b87617eed", "9f35e0e97f364456915e6b7d7fc65675"]
        }
    },
    modals: []
};

const editPage = {
	"id": "123",
	"pageId": "8cdde26a690142fd8af35b93a7e44b26",
	"name": "demo",
	"title": "",
	"mode": "page",
	"updateTime": "",
	"children": [{
		"id": "ffe74649fe4341e2b31064fb3c9d8657",
		"type": "container",
		"name": "",
		"visible": true,
		"layout": "horizontal",
		"children": [{
			"id": "e4d55be39236453ba3850d7aecb17e59",
			"type": "checkbox",
			"name": "check1",
			"visible": true,
			"disabled": false,
			"required": true,
			"label": "checkLabel",
			"defaultValue": null,
			"events": [],
			"checkOptions": [{
				"text": "",
				"value": "",
				"checked": false
			}, {
				"text": "",
				"value": "",
				"checked": false
			}]
		}, {
			"id": "ee98fa06e9bf4ed386d9f5802bfcf064",
			"type": "datepicker",
			"name": "datepicker1",
			"visible": true,
			"disabled": false,
			"required": false,
			"label": "",
			"defaultValue": null,
			"events": [],
			"mode": "single",
			"placeholder1": "",
			"placeholder2": "",
			"showTime": false,
			"format": "YYYY/MM/DD",
			"initDate1": "",
			"initDate2": ""
		}, {
			"id": "1d457bd5a48e441fada585572f68b1ef",
			"type": "input",
			"name": "input1",
			"visible": true,
			"disabled": false,
			"required": false,
			"label": "",
			"defaultValue": null,
			"events": [{
				"id": "096f8dbddfa746acb7c273576221d090",
				"type": "change",
				"local": {
					"name": "",
					"comps": []
				},
				"afterRemote": {
					"name": "",
					"comps": []
				}
			}],
			"inputType": "text",
			"placeholder": "",
			"readonly": false,
			"areaRows": 5,
			"prefix": "",
			"suffix": ""
		}, {
			"id": "518ada63e4e147cc81cd5f3c58c1af09",
			"type": "inputnumber",
			"name": "inputnumber1",
			"visible": true,
			"disabled": false,
			"required": false,
			"label": "",
			"defaultValue": null,
			"events": [],
			"placeholder": "",
			"max": 999,
			"min": 0,
			"step": 1
		}, {
			"id": "3097cd341edc4d9d922fa73b57ba05ad",
			"type": "radio",
			"name": "radio1",
			"visible": true,
			"disabled": false,
			"required": false,
			"label": "",
			"defaultValue": null,
			"events": [],
			"radioOptions": [{
				"text": "",
				"value": ""
			}, {
				"text": "",
				"value": ""
			}]
		}]
	}, {
		"id": "61040a46b5564541b1b924faa7543a9f",
		"type": "container",
		"name": "",
		"visible": true,
		"layout": "horizontal",
		"children": [{
			"id": "9d383ba83a2543caa5e5d2cb7f730701",
			"type": "scale",
			"name": "scale1",
			"visible": true,
			"disabled": false,
			"required": false,
			"label": "",
			"defaultValue": null,
			"events": [],
			"isAuto": false,
			"placeholder": "",
			"socketAddr": ""
		}, {
			"id": "600dd799e2db48d6bb71ba1b87617eed",
			"type": "select",
			"name": "select1",
			"visible": true,
			"disabled": false,
			"required": false,
			"label": "",
			"defaultValue": null,
			"events": [],
			"placeholder": "",
			"selectOptions": []
		}, {
			"id": "be33b1915d274b8c894685a02ee278a0",
			"type": "upload",
			"name": "upload1",
			"visible": true,
			"disabled": false,
			"required": false,
			"label": "",
			"defaultValue": null,
			"events": [],
			"text": "",
			"accept": [],
			"fileType": "",
			"multiple": false,
			"limit": 1,
			"size": 10
		}, {
			"id": "a107a1f8a90549ef9e22a493b01def8c",
			"type": "button",
			"name": "button1",
			"visible": true,
			"text": "",
			"btnType": "default",
			"disabled": false,
			"events": [{
				"id": "6b2dcdee923044c79e1047a701a1664c",
				"type": "click",
				"local": {
					"name": "",
					"comps": []
				},
				"afterRemote": {
					"name": "",
					"comps": []
				}
			}]
		}]
	}, {
		"id": "b5704aad22a345d3b1ffab80ae124dda",
		"type": "print",
		"name": "print1",
		"visible": true,
		"disabled": false,
		"required": false,
		"label": "",
		"defaultValue": null,
		"events": [],
		"printTimes": 1,
		"tempName": "",
		"height": 200
	}, {
		"id": "9f35e0e97f364456915e6b7d7fc65675",
		"type": "table",
		"name": "table1",
		"visible": true,
		"disabled": false,
		"required": false,
		"label": "",
		"defaultValue": null,
		"events": [],
		"hasSerialNumber": true,
		"hasCheckkbox": false,
		"columns": [],
		"pageSize": 20
	}],
	"events": [{
		"id": "a4ef6141ec1c478e9b943b396bb0fdfb",
		"type": "init",
		"local": {
			"name": "",
			"comps": []
		},
		"afterRemote": {
			"name": "",
			"comps": []
		}
	}],
	"remotes": {
		"8cdde26a690142fd8af35b93a7e44b26": {},
		"1d457bd5a48e441fada585572f68b1ef": {
			"096f8dbddfa746acb7c273576221d090": {
				"queue": []
			}
		},
		"a107a1f8a90549ef9e22a493b01def8c": {
			"6b2dcdee923044c79e1047a701a1664c": {
				"queue": []
			}
		},
		"": {
			"a4ef6141ec1c478e9b943b396bb0fdfb": {
				"queue": ["3342376aa1444d1eb79a9073201d8796"]
			}
		}
	},
	"dataGroups": [{
		"name": "product",
		"tableId": "59145e9b2a6f9f25ac311573",
		"addRecord": false,
		"fkMap": [],
		"uniqueFields": []
	}, {
		"name": "customer",
		"tableId": "59144df22a6f9f25ac311551",
		"addRecord": false,
		"fkMap": [],
		"uniqueFields": []
	}],
	"dataItems": {
		"e4d55be39236453ba3850d7aecb17e59": {
			"fieldId": "5915755e8225d516987db9b8",
			"groupName": "product",
			"operator": "0",
			"value": ""
		},
		"ee98fa06e9bf4ed386d9f5802bfcf064": {
			"fieldId": "5baaff02ff1190591563dbc2",
			"groupName": "customer",
			"operator": 0,
			"value": ""
		},
		"1d457bd5a48e441fada585572f68b1ef": {
			"fieldId": "591575bc8225d516987db9b9",
			"groupName": "product",
			"operator": 0,
			"value": ""
		},
		"518ada63e4e147cc81cd5f3c58c1af09": {
			"fieldId": "5baafedeff1190591563db9c",
			"groupName": "customer",
			"operator": 0,
			"value": ""
		},
		"3097cd341edc4d9d922fa73b57ba05ad": {
			"fieldId": "59f7b788ff11900cf1e7c5aa",
			"groupName": "product",
			"operator": 0,
			"value": ""
		},
		"9d383ba83a2543caa5e5d2cb7f730701": {
			"fieldId": "5a12b4fbff11902184e21546",
			"groupName": "customer",
			"operator": 0,
			"value": ""
		},
		"600dd799e2db48d6bb71ba1b87617eed": {
			"fieldId": "59f7b788ff11900cf1e7c5aa",
			"groupName": "product",
			"operator": 0,
			"value": ""
		},
		"be33b1915d274b8c894685a02ee278a0": {
			"fieldId": null,
			"groupName": null,
			"operator": 0,
			"value": ""
		},
		"b5704aad22a345d3b1ffab80ae124dda": {
			"fieldId": null,
			"groupName": null,
			"operator": 0,
			"value": ""
		},
		"9f35e0e97f364456915e6b7d7fc65675": {
			"fieldId": null,
			"groupName": null,
			"operator": 0,
			"value": ""
		}
	},
	"actions": [{
		"id": "3342376aa1444d1eb79a9073201d8796",
		"name": "save1",
		"type": "save",
		"filters": [{
			"fieldId": "59f7b788ff11900cf1e7c5aa",
			"groupName": "product",
			"operator": "5",
			"value": "2"
		}],
		"extraFuncs": {
			"prepare": [{
				"groupName": "product",
				"functionName": "1212"
			}],
			"after": [{
				"groupName": "customer",
				"functionName": "1212"
			}],
			"validate": [{
				"groupName": "product",
				"functionName": "1212"
			}]
		},
		"transfers": [{
			"origin": {
				"fieldId": "59cdf6f126b45e5a51108194",
				"groupName": "product"
			},
			"refers": {
				"fieldId": "591544f98225d516987db97e",
				"groupName": "customer"
			}
		}],
		"defaultDataList": [{
			"fieldId": "59f7b788ff11900cf1e7c5aa",
			"groupName": "product",
			"operator": 0,
			"value": "1"
		}]
	}],
	"actionItems": {
		"3342376aa1444d1eb79a9073201d8796": ["e4d55be39236453ba3850d7aecb17e59", "518ada63e4e147cc81cd5f3c58c1af09", "be33b1915d274b8c894685a02ee278a0", "a107a1f8a90549ef9e22a493b01def8c", "600dd799e2db48d6bb71ba1b87617eed", "9f35e0e97f364456915e6b7d7fc65675"]
	}
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