var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "58695",
        "ok": "41890",
        "ko": "16805"
    },
    "minResponseTime": {
        "total": "4",
        "ok": "80",
        "ko": "4"
    },
    "maxResponseTime": {
        "total": "10174",
        "ok": "10174",
        "ko": "10013"
    },
    "meanResponseTime": {
        "total": "2544",
        "ok": "1733",
        "ko": "4563"
    },
    "standardDeviation": {
        "total": "3597",
        "ok": "2452",
        "ko": "4950"
    },
    "percentiles1": {
        "total": "92",
        "ok": "142",
        "ko": "8"
    },
    "percentiles2": {
        "total": "3134",
        "ok": "3110",
        "ko": "10000"
    },
    "percentiles3": {
        "total": "10000",
        "ok": "7252",
        "ko": "10001"
    },
    "percentiles4": {
        "total": "10001",
        "ok": "7487",
        "ko": "10001"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 21668,
    "percentage": 37
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 8066,
    "percentage": 14
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 12156,
    "percentage": 21
},
    "group4": {
    "name": "failed",
    "count": 16805,
    "percentage": 29
},
    "meanNumberOfRequestsPerSecond": {
        "total": "90.3",
        "ok": "64.446",
        "ko": "25.854"
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
        "ok": "41890",
        "ko": "16805"
    },
    "minResponseTime": {
        "total": "4",
        "ok": "80",
        "ko": "4"
    },
    "maxResponseTime": {
        "total": "10174",
        "ok": "10174",
        "ko": "10013"
    },
    "meanResponseTime": {
        "total": "2544",
        "ok": "1733",
        "ko": "4563"
    },
    "standardDeviation": {
        "total": "3597",
        "ok": "2452",
        "ko": "4950"
    },
    "percentiles1": {
        "total": "92",
        "ok": "142",
        "ko": "8"
    },
    "percentiles2": {
        "total": "3134",
        "ok": "3110",
        "ko": "10000"
    },
    "percentiles3": {
        "total": "10000",
        "ok": "7252",
        "ko": "10001"
    },
    "percentiles4": {
        "total": "10001",
        "ok": "7487",
        "ko": "10001"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 21668,
    "percentage": 37
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 8066,
    "percentage": 14
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 12156,
    "percentage": 21
},
    "group4": {
    "name": "failed",
    "count": 16805,
    "percentage": 29
},
    "meanNumberOfRequestsPerSecond": {
        "total": "90.3",
        "ok": "64.446",
        "ko": "25.854"
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
