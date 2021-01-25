var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "58695",
        "ok": "38569",
        "ko": "20126"
    },
    "minResponseTime": {
        "total": "4",
        "ok": "80",
        "ko": "4"
    },
    "maxResponseTime": {
        "total": "10116",
        "ok": "10116",
        "ko": "10012"
    },
    "meanResponseTime": {
        "total": "2556",
        "ok": "1718",
        "ko": "4163"
    },
    "standardDeviation": {
        "total": "3630",
        "ok": "2462",
        "ko": "4783"
    },
    "percentiles1": {
        "total": "86",
        "ok": "88",
        "ko": "8"
    },
    "percentiles2": {
        "total": "3136",
        "ok": "3110",
        "ko": "10000"
    },
    "percentiles3": {
        "total": "10000",
        "ok": "7258",
        "ko": "10001"
    },
    "percentiles4": {
        "total": "10001",
        "ok": "7448",
        "ko": "10001"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 20474,
    "percentage": 35
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 6927,
    "percentage": 12
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 11168,
    "percentage": 19
},
    "group4": {
    "name": "failed",
    "count": 20126,
    "percentage": 34
},
    "meanNumberOfRequestsPerSecond": {
        "total": "89.885",
        "ok": "59.064",
        "ko": "30.821"
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
        "ok": "38569",
        "ko": "20126"
    },
    "minResponseTime": {
        "total": "4",
        "ok": "80",
        "ko": "4"
    },
    "maxResponseTime": {
        "total": "10116",
        "ok": "10116",
        "ko": "10012"
    },
    "meanResponseTime": {
        "total": "2556",
        "ok": "1718",
        "ko": "4163"
    },
    "standardDeviation": {
        "total": "3630",
        "ok": "2462",
        "ko": "4783"
    },
    "percentiles1": {
        "total": "86",
        "ok": "88",
        "ko": "8"
    },
    "percentiles2": {
        "total": "3135",
        "ok": "3110",
        "ko": "10000"
    },
    "percentiles3": {
        "total": "10000",
        "ok": "7258",
        "ko": "10001"
    },
    "percentiles4": {
        "total": "10001",
        "ok": "7448",
        "ko": "10001"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 20474,
    "percentage": 35
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 6927,
    "percentage": 12
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 11168,
    "percentage": 19
},
    "group4": {
    "name": "failed",
    "count": 20126,
    "percentage": 34
},
    "meanNumberOfRequestsPerSecond": {
        "total": "89.885",
        "ok": "59.064",
        "ko": "30.821"
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
