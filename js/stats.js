var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "58695",
        "ok": "50822",
        "ko": "7873"
    },
    "minResponseTime": {
        "total": "102",
        "ok": "102",
        "ko": "10000"
    },
    "maxResponseTime": {
        "total": "10105",
        "ok": "10105",
        "ko": "10013"
    },
    "meanResponseTime": {
        "total": "2610",
        "ok": "1465",
        "ko": "10000"
    },
    "standardDeviation": {
        "total": "3615",
        "ok": "2306",
        "ko": "0"
    },
    "percentiles1": {
        "total": "149",
        "ok": "117",
        "ko": "10000"
    },
    "percentiles2": {
        "total": "3202",
        "ok": "1149",
        "ko": "10000"
    },
    "percentiles3": {
        "total": "10000",
        "ok": "7257",
        "ko": "10001"
    },
    "percentiles4": {
        "total": "10001",
        "ok": "7457",
        "ko": "10001"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 30536,
    "percentage": 52
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 8082,
    "percentage": 14
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 12204,
    "percentage": 21
},
    "group4": {
    "name": "failed",
    "count": 7873,
    "percentage": 13
},
    "meanNumberOfRequestsPerSecond": {
        "total": "90.439",
        "ok": "78.308",
        "ko": "12.131"
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
        "ok": "50822",
        "ko": "7873"
    },
    "minResponseTime": {
        "total": "102",
        "ok": "102",
        "ko": "10000"
    },
    "maxResponseTime": {
        "total": "10105",
        "ok": "10105",
        "ko": "10013"
    },
    "meanResponseTime": {
        "total": "2610",
        "ok": "1465",
        "ko": "10000"
    },
    "standardDeviation": {
        "total": "3615",
        "ok": "2306",
        "ko": "0"
    },
    "percentiles1": {
        "total": "149",
        "ok": "117",
        "ko": "10000"
    },
    "percentiles2": {
        "total": "3201",
        "ok": "1149",
        "ko": "10000"
    },
    "percentiles3": {
        "total": "10000",
        "ok": "7257",
        "ko": "10001"
    },
    "percentiles4": {
        "total": "10001",
        "ok": "7457",
        "ko": "10001"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 30536,
    "percentage": 52
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 8082,
    "percentage": 14
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 12204,
    "percentage": 21
},
    "group4": {
    "name": "failed",
    "count": 7873,
    "percentage": 13
},
    "meanNumberOfRequestsPerSecond": {
        "total": "90.439",
        "ok": "78.308",
        "ko": "12.131"
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
