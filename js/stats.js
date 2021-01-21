var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "117390",
        "ok": "85638",
        "ko": "31752"
    },
    "minResponseTime": {
        "total": "76",
        "ok": "76",
        "ko": "155"
    },
    "maxResponseTime": {
        "total": "60001",
        "ok": "10072",
        "ko": "60001"
    },
    "meanResponseTime": {
        "total": "2671",
        "ok": "929",
        "ko": "7367"
    },
    "standardDeviation": {
        "total": "3904",
        "ok": "1920",
        "ko": "4019"
    },
    "percentiles1": {
        "total": "162",
        "ok": "157",
        "ko": "10000"
    },
    "percentiles2": {
        "total": "3478",
        "ok": "344",
        "ko": "10000"
    },
    "percentiles3": {
        "total": "10000",
        "ok": "7262",
        "ko": "10001"
    },
    "percentiles4": {
        "total": "10001",
        "ok": "7623",
        "ko": "10001"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 66521,
    "percentage": 57
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 5498,
    "percentage": 5
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 13619,
    "percentage": 12
},
    "group4": {
    "name": "failed",
    "count": 31752,
    "percentage": 27
},
    "meanNumberOfRequestsPerSecond": {
        "total": "178.948",
        "ok": "130.546",
        "ko": "48.402"
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
        "ok": "42819",
        "ko": "15876"
    },
    "minResponseTime": {
        "total": "153",
        "ok": "153",
        "ko": "10000"
    },
    "maxResponseTime": {
        "total": "60001",
        "ok": "10072",
        "ko": "60001"
    },
    "meanResponseTime": {
        "total": "3981",
        "ok": "1748",
        "ko": "10003"
    },
    "standardDeviation": {
        "total": "4229",
        "ok": "2455",
        "ko": "397"
    },
    "percentiles1": {
        "total": "1209",
        "ok": "201",
        "ko": "10000"
    },
    "percentiles2": {
        "total": "10000",
        "ok": "3181",
        "ko": "10000"
    },
    "percentiles3": {
        "total": "10001",
        "ok": "7440",
        "ko": "10001"
    },
    "percentiles4": {
        "total": "10001",
        "ok": "7792",
        "ko": "10001"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 23730,
    "percentage": 40
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 5470,
    "percentage": 9
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 13619,
    "percentage": 23
},
    "group4": {
    "name": "failed",
    "count": 15876,
    "percentage": 27
},
    "meanNumberOfRequestsPerSecond": {
        "total": "89.474",
        "ok": "65.273",
        "ko": "24.201"
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
        "total": "58695",
        "ok": "42819",
        "ko": "15876"
    },
    "minResponseTime": {
        "total": "76",
        "ok": "76",
        "ko": "155"
    },
    "maxResponseTime": {
        "total": "10019",
        "ok": "902",
        "ko": "10019"
    },
    "meanResponseTime": {
        "total": "1360",
        "ok": "110",
        "ko": "4731"
    },
    "standardDeviation": {
        "total": "3025",
        "ok": "73",
        "ko": "4272"
    },
    "percentiles1": {
        "total": "90",
        "ok": "81",
        "ko": "3203"
    },
    "percentiles2": {
        "total": "257",
        "ok": "97",
        "ko": "10000"
    },
    "percentiles3": {
        "total": "10000",
        "ok": "282",
        "ko": "10001"
    },
    "percentiles4": {
        "total": "10001",
        "ok": "395",
        "ko": "10001"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 42791,
    "percentage": 73
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 28,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 15876,
    "percentage": 27
},
    "meanNumberOfRequestsPerSecond": {
        "total": "89.474",
        "ok": "65.273",
        "ko": "24.201"
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
