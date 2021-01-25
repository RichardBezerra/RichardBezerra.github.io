var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "58695",
        "ok": "43649",
        "ko": "15046"
    },
    "minResponseTime": {
        "total": "15",
        "ok": "142",
        "ko": "15"
    },
    "maxResponseTime": {
        "total": "10149",
        "ok": "10149",
        "ko": "10015"
    },
    "meanResponseTime": {
        "total": "2716",
        "ok": "1845",
        "ko": "5242"
    },
    "standardDeviation": {
        "total": "3643",
        "ok": "2515",
        "ko": "4984"
    },
    "percentiles1": {
        "total": "248",
        "ok": "213",
        "ko": "10000"
    },
    "percentiles2": {
        "total": "3801",
        "ok": "3180",
        "ko": "10000"
    },
    "percentiles3": {
        "total": "10000",
        "ok": "7362",
        "ko": "10001"
    },
    "percentiles4": {
        "total": "10001",
        "ok": "7599",
        "ko": "10001"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 23079,
    "percentage": 39
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 6967,
    "percentage": 12
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 13603,
    "percentage": 23
},
    "group4": {
    "name": "failed",
    "count": 15046,
    "percentage": 26
},
    "meanNumberOfRequestsPerSecond": {
        "total": "90.439",
        "ok": "67.256",
        "ko": "23.183"
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
        "ok": "43649",
        "ko": "15046"
    },
    "minResponseTime": {
        "total": "15",
        "ok": "142",
        "ko": "15"
    },
    "maxResponseTime": {
        "total": "10149",
        "ok": "10149",
        "ko": "10015"
    },
    "meanResponseTime": {
        "total": "2716",
        "ok": "1845",
        "ko": "5242"
    },
    "standardDeviation": {
        "total": "3643",
        "ok": "2515",
        "ko": "4984"
    },
    "percentiles1": {
        "total": "248",
        "ok": "213",
        "ko": "10000"
    },
    "percentiles2": {
        "total": "3801",
        "ok": "3180",
        "ko": "10000"
    },
    "percentiles3": {
        "total": "10000",
        "ok": "7362",
        "ko": "10001"
    },
    "percentiles4": {
        "total": "10001",
        "ok": "7599",
        "ko": "10001"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 23079,
    "percentage": 39
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 6967,
    "percentage": 12
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 13603,
    "percentage": 23
},
    "group4": {
    "name": "failed",
    "count": 15046,
    "percentage": 26
},
    "meanNumberOfRequestsPerSecond": {
        "total": "90.439",
        "ok": "67.256",
        "ko": "23.183"
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
