var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "117390",
        "ok": "88848",
        "ko": "28542"
    },
    "minResponseTime": {
        "total": "76",
        "ok": "76",
        "ko": "154"
    },
    "maxResponseTime": {
        "total": "60001",
        "ok": "9728",
        "ko": "60001"
    },
    "meanResponseTime": {
        "total": "2447",
        "ok": "864",
        "ko": "7376"
    },
    "standardDeviation": {
        "total": "3779",
        "ok": "1842",
        "ko": "4011"
    },
    "percentiles1": {
        "total": "158",
        "ok": "156",
        "ko": "10000"
    },
    "percentiles2": {
        "total": "3200",
        "ok": "230",
        "ko": "10000"
    },
    "percentiles3": {
        "total": "10000",
        "ok": "7226",
        "ko": "10001"
    },
    "percentiles4": {
        "total": "10001",
        "ok": "7468",
        "ko": "10001"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 69673,
    "percentage": 59
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 6642,
    "percentage": 6
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 12533,
    "percentage": 11
},
    "group4": {
    "name": "failed",
    "count": 28542,
    "percentage": 24
},
    "meanNumberOfRequestsPerSecond": {
        "total": "169.15",
        "ok": "128.023",
        "ko": "41.127"
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
        "ok": "44424",
        "ko": "14271"
    },
    "minResponseTime": {
        "total": "154",
        "ok": "154",
        "ko": "10000"
    },
    "maxResponseTime": {
        "total": "60001",
        "ok": "9728",
        "ko": "60001"
    },
    "meanResponseTime": {
        "total": "3671",
        "ok": "1636",
        "ko": "10004"
    },
    "standardDeviation": {
        "total": "4142",
        "ok": "2365",
        "ko": "419"
    },
    "percentiles1": {
        "total": "1180",
        "ok": "160",
        "ko": "10000"
    },
    "percentiles2": {
        "total": "7597",
        "ok": "2730",
        "ko": "10000"
    },
    "percentiles3": {
        "total": "10001",
        "ok": "7348",
        "ko": "10001"
    },
    "percentiles4": {
        "total": "10001",
        "ok": "7556",
        "ko": "10001"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 25249,
    "percentage": 43
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 6642,
    "percentage": 11
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 12533,
    "percentage": 21
},
    "group4": {
    "name": "failed",
    "count": 14271,
    "percentage": 24
},
    "meanNumberOfRequestsPerSecond": {
        "total": "84.575",
        "ok": "64.012",
        "ko": "20.563"
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
        "ok": "44424",
        "ko": "14271"
    },
    "minResponseTime": {
        "total": "76",
        "ok": "76",
        "ko": "154"
    },
    "maxResponseTime": {
        "total": "60000",
        "ok": "668",
        "ko": "60000"
    },
    "meanResponseTime": {
        "total": "1224",
        "ok": "92",
        "ko": "4748"
    },
    "standardDeviation": {
        "total": "2900",
        "ok": "45",
        "ko": "4265"
    },
    "percentiles1": {
        "total": "79",
        "ok": "79",
        "ko": "3197"
    },
    "percentiles2": {
        "total": "158",
        "ok": "80",
        "ko": "10000"
    },
    "percentiles3": {
        "total": "10000",
        "ok": "198",
        "ko": "10001"
    },
    "percentiles4": {
        "total": "10001",
        "ok": "276",
        "ko": "10001"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 44424,
    "percentage": 76
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
    "count": 14271,
    "percentage": 24
},
    "meanNumberOfRequestsPerSecond": {
        "total": "84.575",
        "ok": "64.012",
        "ko": "20.563"
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
