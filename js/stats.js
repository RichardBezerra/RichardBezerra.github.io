var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "76760",
        "ok": "30237",
        "ko": "46523"
    },
    "minResponseTime": {
        "total": "139",
        "ok": "139",
        "ko": "279"
    },
    "maxResponseTime": {
        "total": "60001",
        "ok": "8340",
        "ko": "60001"
    },
    "meanResponseTime": {
        "total": "5646",
        "ok": "1142",
        "ko": "8573"
    },
    "standardDeviation": {
        "total": "4564",
        "ok": "1976",
        "ko": "3174"
    },
    "percentiles1": {
        "total": "7616",
        "ok": "282",
        "ko": "10000"
    },
    "percentiles2": {
        "total": "10000",
        "ok": "1299",
        "ko": "10000"
    },
    "percentiles3": {
        "total": "10001",
        "ok": "7413",
        "ko": "10001"
    },
    "percentiles4": {
        "total": "10003",
        "ok": "7663",
        "ko": "10006"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 21860,
    "percentage": 28
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 57,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 8320,
    "percentage": 11
},
    "group4": {
    "name": "failed",
    "count": 46523,
    "percentage": 61
},
    "meanNumberOfRequestsPerSecond": {
        "total": "176.866",
        "ok": "69.671",
        "ko": "107.196"
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
        "ok": "15123",
        "ko": "23257"
    },
    "minResponseTime": {
        "total": "279",
        "ok": "279",
        "ko": "283"
    },
    "maxResponseTime": {
        "total": "60001",
        "ok": "8340",
        "ko": "60001"
    },
    "meanResponseTime": {
        "total": "6891",
        "ok": "2110",
        "ko": "9999"
    },
    "standardDeviation": {
        "total": "4157",
        "ok": "2436",
        "ko": "368"
    },
    "percentiles1": {
        "total": "10000",
        "ok": "1299",
        "ko": "10000"
    },
    "percentiles2": {
        "total": "10000",
        "ok": "3326",
        "ko": "10000"
    },
    "percentiles3": {
        "total": "10001",
        "ok": "7541",
        "ko": "10001"
    },
    "percentiles4": {
        "total": "10004",
        "ok": "7813",
        "ko": "10006"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 6759,
    "percentage": 18
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 44,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 8320,
    "percentage": 22
},
    "group4": {
    "name": "failed",
    "count": 23257,
    "percentage": 61
},
    "meanNumberOfRequestsPerSecond": {
        "total": "88.433",
        "ok": "34.846",
        "ko": "53.588"
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
        "ok": "15114",
        "ko": "23266"
    },
    "minResponseTime": {
        "total": "139",
        "ok": "139",
        "ko": "279"
    },
    "maxResponseTime": {
        "total": "10185",
        "ok": "859",
        "ko": "10185"
    },
    "meanResponseTime": {
        "total": "4401",
        "ok": "174",
        "ko": "7147"
    },
    "standardDeviation": {
        "total": "4613",
        "ok": "64",
        "ko": "3993"
    },
    "percentiles1": {
        "total": "1306",
        "ok": "145",
        "ko": "10000"
    },
    "percentiles2": {
        "total": "10000",
        "ok": "172",
        "ko": "10000"
    },
    "percentiles3": {
        "total": "10001",
        "ok": "302",
        "ko": "10001"
    },
    "percentiles4": {
        "total": "10002",
        "ok": "377",
        "ko": "10005"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 15101,
    "percentage": 39
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 13,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 23266,
    "percentage": 61
},
    "meanNumberOfRequestsPerSecond": {
        "total": "88.433",
        "ok": "34.825",
        "ko": "53.608"
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
