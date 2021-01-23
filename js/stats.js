var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "58695",
        "ok": "51057",
        "ko": "7638"
    },
    "minResponseTime": {
        "total": "27",
        "ok": "101",
        "ko": "27"
    },
    "maxResponseTime": {
        "total": "11964",
        "ok": "11964",
        "ko": "10010"
    },
    "meanResponseTime": {
        "total": "2713",
        "ok": "1667",
        "ko": "9709"
    },
    "standardDeviation": {
        "total": "3592",
        "ok": "2449",
        "ko": "1678"
    },
    "percentiles1": {
        "total": "1110",
        "ok": "118",
        "ko": "10000"
    },
    "percentiles2": {
        "total": "4750",
        "ok": "3134",
        "ko": "10000"
    },
    "percentiles3": {
        "total": "10000",
        "ok": "7294",
        "ko": "10001"
    },
    "percentiles4": {
        "total": "10001",
        "ok": "7498",
        "ko": "10001"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 28909,
    "percentage": 49
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 7791,
    "percentage": 13
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 14357,
    "percentage": 24
},
    "group4": {
    "name": "failed",
    "count": 7638,
    "percentage": 13
},
    "meanNumberOfRequestsPerSecond": {
        "total": "90.3",
        "ok": "78.549",
        "ko": "11.751"
    }
},
contents: {
"req_health-check-9583d": {
        type: "REQUEST",
        name: "Health Check",
path: "Health Check",
pathFormatted: "req_health-check-9583d",
stats: {
    "name": "Health Check",
    "numberOfRequests": {
        "total": "58695",
        "ok": "51057",
        "ko": "7638"
    },
    "minResponseTime": {
        "total": "27",
        "ok": "101",
        "ko": "27"
    },
    "maxResponseTime": {
        "total": "11964",
        "ok": "11964",
        "ko": "10010"
    },
    "meanResponseTime": {
        "total": "2713",
        "ok": "1667",
        "ko": "9709"
    },
    "standardDeviation": {
        "total": "3592",
        "ok": "2449",
        "ko": "1678"
    },
    "percentiles1": {
        "total": "1110",
        "ok": "118",
        "ko": "10000"
    },
    "percentiles2": {
        "total": "4750",
        "ok": "3134",
        "ko": "10000"
    },
    "percentiles3": {
        "total": "10000",
        "ok": "7294",
        "ko": "10001"
    },
    "percentiles4": {
        "total": "10001",
        "ok": "7498",
        "ko": "10001"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 28909,
    "percentage": 49
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 7791,
    "percentage": 13
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 14357,
    "percentage": 24
},
    "group4": {
    "name": "failed",
    "count": 7638,
    "percentage": 13
},
    "meanNumberOfRequestsPerSecond": {
        "total": "90.3",
        "ok": "78.549",
        "ko": "11.751"
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
