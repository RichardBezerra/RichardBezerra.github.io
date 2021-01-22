var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "109571",
        "ok": "68188",
        "ko": "41383"
    },
    "minResponseTime": {
        "total": "78",
        "ok": "78",
        "ko": "78"
    },
    "maxResponseTime": {
        "total": "10191",
        "ok": "10191",
        "ko": "10018"
    },
    "meanResponseTime": {
        "total": "1499",
        "ok": "1218",
        "ko": "1961"
    },
    "standardDeviation": {
        "total": "2968",
        "ok": "2193",
        "ko": "3880"
    },
    "percentiles1": {
        "total": "83",
        "ok": "84",
        "ko": "81"
    },
    "percentiles2": {
        "total": "1095",
        "ok": "1104",
        "ko": "108"
    },
    "percentiles3": {
        "total": "10000",
        "ok": "7209",
        "ko": "10000"
    },
    "percentiles4": {
        "total": "10001",
        "ok": "7418",
        "ko": "10001"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 46110,
    "percentage": 42
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 8593,
    "percentage": 8
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 13485,
    "percentage": 12
},
    "group4": {
    "name": "failed",
    "count": 41383,
    "percentage": 38
},
    "meanNumberOfRequestsPerSecond": {
        "total": "168.831",
        "ok": "105.066",
        "ko": "63.764"
    }
},
contents: {
"req_criar-75b16": {
        type: "REQUEST",
        name: "Criar",
path: "Criar",
pathFormatted: "req_criar-75b16",
stats: {
    "name": "Criar",
    "numberOfRequests": {
        "total": "58695",
        "ok": "50876",
        "ko": "7819"
    },
    "minResponseTime": {
        "total": "79",
        "ok": "79",
        "ko": "10000"
    },
    "maxResponseTime": {
        "total": "10191",
        "ok": "10191",
        "ko": "10018"
    },
    "meanResponseTime": {
        "total": "2721",
        "ok": "1602",
        "ko": "10000"
    },
    "standardDeviation": {
        "total": "3637",
        "ok": "2422",
        "ko": "1"
    },
    "percentiles1": {
        "total": "1087",
        "ok": "85",
        "ko": "10000"
    },
    "percentiles2": {
        "total": "5224",
        "ok": "3103",
        "ko": "10000"
    },
    "percentiles3": {
        "total": "10000",
        "ok": "7257",
        "ko": "10001"
    },
    "percentiles4": {
        "total": "10001",
        "ok": "7479",
        "ko": "10001"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 28798,
    "percentage": 49
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 8593,
    "percentage": 15
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 13485,
    "percentage": 23
},
    "group4": {
    "name": "failed",
    "count": 7819,
    "percentage": 13
},
    "meanNumberOfRequestsPerSecond": {
        "total": "90.439",
        "ok": "78.391",
        "ko": "12.048"
    }
}
    },"req_autenticar-51f1b": {
        type: "REQUEST",
        name: "Autenticar",
path: "Autenticar",
pathFormatted: "req_autenticar-51f1b",
stats: {
    "name": "Autenticar",
    "numberOfRequests": {
        "total": "50876",
        "ok": "17312",
        "ko": "33564"
    },
    "minResponseTime": {
        "total": "78",
        "ok": "78",
        "ko": "78"
    },
    "maxResponseTime": {
        "total": "613",
        "ok": "600",
        "ko": "613"
    },
    "meanResponseTime": {
        "total": "89",
        "ok": "89",
        "ko": "89"
    },
    "standardDeviation": {
        "total": "32",
        "ok": "33",
        "ko": "32"
    },
    "percentiles1": {
        "total": "81",
        "ok": "81",
        "ko": "81"
    },
    "percentiles2": {
        "total": "82",
        "ok": "82",
        "ko": "82"
    },
    "percentiles3": {
        "total": "129",
        "ok": "129",
        "ko": "129"
    },
    "percentiles4": {
        "total": "237",
        "ok": "238",
        "ko": "237"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 17312,
    "percentage": 34
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 33564,
    "percentage": 66
},
    "meanNumberOfRequestsPerSecond": {
        "total": "78.391",
        "ok": "26.675",
        "ko": "51.716"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
