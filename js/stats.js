var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "117390",
        "ok": "82456",
        "ko": "34934"
    },
    "minResponseTime": {
        "total": "137",
        "ok": "137",
        "ko": "143"
    },
    "maxResponseTime": {
        "total": "10093",
        "ok": "10093",
        "ko": "10042"
    },
    "meanResponseTime": {
        "total": "2888",
        "ok": "973",
        "ko": "7409"
    },
    "standardDeviation": {
        "total": "4000",
        "ok": "1944",
        "ko": "3967"
    },
    "percentiles1": {
        "total": "169",
        "ok": "149",
        "ko": "10000"
    },
    "percentiles2": {
        "total": "7242",
        "ok": "359",
        "ko": "10000"
    },
    "percentiles3": {
        "total": "10000",
        "ok": "7263",
        "ko": "10001"
    },
    "percentiles4": {
        "total": "10001",
        "ok": "7562",
        "ko": "10001"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 64140,
    "percentage": 55
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 5706,
    "percentage": 5
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 12610,
    "percentage": 11
},
    "group4": {
    "name": "failed",
    "count": 34934,
    "percentage": 30
},
    "meanNumberOfRequestsPerSecond": {
        "total": "178.948",
        "ok": "125.695",
        "ko": "53.253"
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
        "ok": "41228",
        "ko": "17467"
    },
    "minResponseTime": {
        "total": "143",
        "ok": "143",
        "ko": "10000"
    },
    "maxResponseTime": {
        "total": "10093",
        "ok": "10093",
        "ko": "10042"
    },
    "meanResponseTime": {
        "total": "4223",
        "ok": "1775",
        "ko": "10000"
    },
    "standardDeviation": {
        "total": "4307",
        "ok": "2504",
        "ko": "1"
    },
    "percentiles1": {
        "total": "1365",
        "ok": "161",
        "ko": "10000"
    },
    "percentiles2": {
        "total": "10000",
        "ok": "3175",
        "ko": "10000"
    },
    "percentiles3": {
        "total": "10001",
        "ok": "7409",
        "ko": "10001"
    },
    "percentiles4": {
        "total": "10001",
        "ok": "7787",
        "ko": "10001"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 22973,
    "percentage": 39
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 5646,
    "percentage": 10
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 12609,
    "percentage": 21
},
    "group4": {
    "name": "failed",
    "count": 17467,
    "percentage": 30
},
    "meanNumberOfRequestsPerSecond": {
        "total": "89.474",
        "ok": "62.848",
        "ko": "26.627"
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
        "ok": "41228",
        "ko": "17467"
    },
    "minResponseTime": {
        "total": "137",
        "ok": "137",
        "ko": "143"
    },
    "maxResponseTime": {
        "total": "10031",
        "ok": "3190",
        "ko": "10031"
    },
    "meanResponseTime": {
        "total": "1554",
        "ok": "171",
        "ko": "4818"
    },
    "standardDeviation": {
        "total": "3145",
        "ok": "77",
        "ko": "4248"
    },
    "percentiles1": {
        "total": "146",
        "ok": "143",
        "ko": "3190"
    },
    "percentiles2": {
        "total": "356",
        "ok": "148",
        "ko": "10000"
    },
    "percentiles3": {
        "total": "10000",
        "ok": "340",
        "ko": "10001"
    },
    "percentiles4": {
        "total": "10001",
        "ok": "456",
        "ko": "10001"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 41167,
    "percentage": 70
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 60,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 1,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 17467,
    "percentage": 30
},
    "meanNumberOfRequestsPerSecond": {
        "total": "89.474",
        "ok": "62.848",
        "ko": "26.627"
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
