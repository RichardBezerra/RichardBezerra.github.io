var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "76760",
        "ok": "31450",
        "ko": "45310"
    },
    "minResponseTime": {
        "total": "77",
        "ok": "77",
        "ko": "154"
    },
    "maxResponseTime": {
        "total": "10034",
        "ok": "8251",
        "ko": "10034"
    },
    "meanResponseTime": {
        "total": "5462",
        "ok": "1080",
        "ko": "8503"
    },
    "standardDeviation": {
        "total": "4611",
        "ok": "2045",
        "ko": "3247"
    },
    "percentiles1": {
        "total": "7347",
        "ok": "157",
        "ko": "10000"
    },
    "percentiles2": {
        "total": "10000",
        "ok": "1171",
        "ko": "10000"
    },
    "percentiles3": {
        "total": "10001",
        "ok": "7296",
        "ko": "10001"
    },
    "percentiles4": {
        "total": "10001",
        "ok": "7593",
        "ko": "10002"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 22741,
    "percentage": 30
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 2885,
    "percentage": 4
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 5824,
    "percentage": 8
},
    "group4": {
    "name": "failed",
    "count": 45310,
    "percentage": 59
},
    "meanNumberOfRequestsPerSecond": {
        "total": "193.838",
        "ok": "79.419",
        "ko": "114.419"
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
        "total": "38380",
        "ok": "15725",
        "ko": "22655"
    },
    "minResponseTime": {
        "total": "154",
        "ok": "154",
        "ko": "10000"
    },
    "maxResponseTime": {
        "total": "10034",
        "ok": "8251",
        "ko": "10034"
    },
    "meanResponseTime": {
        "total": "6746",
        "ok": "2059",
        "ko": "10000"
    },
    "standardDeviation": {
        "total": "4230",
        "ok": "2539",
        "ko": "1"
    },
    "percentiles1": {
        "total": "10000",
        "ok": "1171",
        "ko": "10000"
    },
    "percentiles2": {
        "total": "10000",
        "ok": "3199",
        "ko": "10000"
    },
    "percentiles3": {
        "total": "10001",
        "ok": "7432",
        "ko": "10001"
    },
    "percentiles4": {
        "total": "10001",
        "ok": "7738",
        "ko": "10002"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 7017,
    "percentage": 18
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 2884,
    "percentage": 8
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 5824,
    "percentage": 15
},
    "group4": {
    "name": "failed",
    "count": 22655,
    "percentage": 59
},
    "meanNumberOfRequestsPerSecond": {
        "total": "96.919",
        "ok": "39.71",
        "ko": "57.21"
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
        "total": "38380",
        "ok": "15725",
        "ko": "22655"
    },
    "minResponseTime": {
        "total": "77",
        "ok": "77",
        "ko": "154"
    },
    "maxResponseTime": {
        "total": "10030",
        "ok": "876",
        "ko": "10030"
    },
    "meanResponseTime": {
        "total": "4177",
        "ok": "102",
        "ko": "7006"
    },
    "standardDeviation": {
        "total": "4618",
        "ok": "53",
        "ko": "4075"
    },
    "percentiles1": {
        "total": "1162",
        "ok": "80",
        "ko": "10000"
    },
    "percentiles2": {
        "total": "10000",
        "ok": "89",
        "ko": "10000"
    },
    "percentiles3": {
        "total": "10001",
        "ok": "236",
        "ko": "10001"
    },
    "percentiles4": {
        "total": "10001",
        "ok": "300",
        "ko": "10001"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 15724,
    "percentage": 41
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 1,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 22655,
    "percentage": 59
},
    "meanNumberOfRequestsPerSecond": {
        "total": "96.919",
        "ok": "39.71",
        "ko": "57.21"
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
