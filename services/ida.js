const ida_info = {
    packageConfig: {
        declaration: {
            declarationMode: "dm1",
            declarationMainType: "dmt",
            declarationType: "dt",
            cargoType: "ct",
            identifier: "id",
            destinationOffice: "do",
            destinationCategory: "dc",
            declarationDate: "dd"
        },
        interalRemark: "ir",
        importer: {
            name: "im-n1",
            zipcode: "im-z1",
            address1: "im-a1",
            address2: "im-a2",
            address3: "im-a3",
            address4: "im-a4",
            phone: "im-p1",
            manager: "im-m1",
            storage: "im-s1",
        },
        sender: {
            name: "se-n1",
            address1: "se-a1",
            address2: "se-a2",
            address3: "se-a3",
            address4: "se-a4",
            zipcode: "se-z1",
            checkMember: "se-cm1",
        },
        packageInfo: {
            awb: "awb",
            total: "t",
            gross: "g",
            importDate: "iD",
            importPlace: ["im-p1", "im-p2"],
            tradeCode: "tradeCode",
            otherLaws: "oL",
            controlNumber: "cN",
            food: "f",
            plant: "p",
            animal: "a",
            importApproval: ["ia-p1", "ia-p2" ],
            invoiceCode: "iC",
            invoiceValue: ["iv-p1", "iv-p2", "iv-p3", "iv-p4" ],
            fare: ["f-p1", "f-p2", "f-p2" ],
            insurance: ["i-p1", "i-p2", "i-p3" ],
            envaluation: "e",
            envaluateCode: "ec",
            revision: ["r-p1", "r-p2", "r-p3", "r-p4" ],
            paymentExt: "pE",
            bpReason: "bR",
            paymentType: "pT",
            bankAccount: "bA",
            collateralAccount: ["ca-p1", "ca-p2" ],
            customsRemark: "cR",
            importRemark: "iR",
            senderRemark: "sR",
            internalAccount: "iA",
        }
    },
    goodsDetails: [
        {
            hscode: ["h1", "h2"],
            name: "name",
            origin: ["o1", "o2"],
            number1: ["n1", "n2"],
            number2: ["n1", "n2"],
            bpr: "bpr",
            reduceCode: "rc",
            interalTaxType: "itt"
        }
    ]
};

const rr = {
	"kind": "Listing",
	"data": {
		"modhash": "",
		"dist": 27,
		"children": [{
			"kind": "t3",
			"data": {
				"title": "Beginner's Thread / Easy Questions (June 2019)",
			}
		}, {
			"kind": "t3",
			"data": {
				"title": "Who's Available? [June 2019]",
			}
		}]
	}
};

const fe = {
	"kind": "Listing",
	"data": {
		"modhash": "",
		"dist": 27,
		"children": [{
			"kind": "t3",
			"data": {
				"title": "Beginner's Thread / Easy Questions (June 2022)",
			}
		}, {
			"kind": "t3",
			"data": {
				"title": "Who's Available? [June 2022]",
			}
		}]
	}
};

class IDA {
    constructor(req, res){
		this.req = req
		this.res = res
    }
    
    getIDAInfo() {
        let self = this;
        let status = 200;
        let res = {status: '', errMsg: ''};
        res = {status: 'success', errMsg: '', idaInfo: ida_info};
        
        return self.res.status(status).json(res);
    }

    reactjs() {
        let self = this;
        let status = 200;
        let res = {status: '', errMsg: ''};
        res = rr;
        
        return self.res.status(status).json(res);  
    }


    frontend() {
        let self = this;
        let status = 200;
        let res = {status: '', errMsg: ''};
        res = fe;
        
        return self.res.status(status).json(res);  
    }
}

module.exports = IDA