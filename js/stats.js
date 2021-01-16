var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "137878",
        "ok": "137724",
        "ko": "154"
    },
    "minResponseTime": {
        "total": "1",
        "ok": "1",
        "ko": "5"
    },
    "maxResponseTime": {
        "total": "1070",
        "ok": "1070",
        "ko": "459"
    },
    "meanResponseTime": {
        "total": "30",
        "ok": "30",
        "ko": "34"
    },
    "standardDeviation": {
        "total": "37",
        "ok": "37",
        "ko": "48"
    },
    "percentiles1": {
        "total": "23",
        "ok": "23",
        "ko": "22"
    },
    "percentiles2": {
        "total": "37",
        "ok": "37",
        "ko": "38"
    },
    "percentiles3": {
        "total": "67",
        "ok": "67",
        "ko": "79"
    },
    "percentiles4": {
        "total": "180",
        "ok": "180",
        "ko": "239"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 137688,
    "percentage": 100
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 36,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 154,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "361.885",
        "ok": "361.48",
        "ko": "0.404"
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
        "total": "68939",
        "ok": "68939",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "2",
        "ok": "2",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1070",
        "ok": "1070",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "32",
        "ok": "32",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "38",
        "ok": "38",
        "ko": "-"
    },
    "percentiles1": {
        "total": "24",
        "ok": "24",
        "ko": "-"
    },
    "percentiles2": {
        "total": "38",
        "ok": "38",
        "ko": "-"
    },
    "percentiles3": {
        "total": "70",
        "ok": "70",
        "ko": "-"
    },
    "percentiles4": {
        "total": "189",
        "ok": "189",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 68917,
    "percentage": 100
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 22,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "180.942",
        "ok": "180.942",
        "ko": "-"
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
        "total": "68939",
        "ok": "68785",
        "ko": "154"
    },
    "minResponseTime": {
        "total": "1",
        "ok": "1",
        "ko": "5"
    },
    "maxResponseTime": {
        "total": "1038",
        "ok": "1038",
        "ko": "459"
    },
    "meanResponseTime": {
        "total": "28",
        "ok": "28",
        "ko": "34"
    },
    "standardDeviation": {
        "total": "35",
        "ok": "35",
        "ko": "48"
    },
    "percentiles1": {
        "total": "21",
        "ok": "21",
        "ko": "22"
    },
    "percentiles2": {
        "total": "35",
        "ok": "35",
        "ko": "38"
    },
    "percentiles3": {
        "total": "64",
        "ok": "64",
        "ko": "79"
    },
    "percentiles4": {
        "total": "172",
        "ok": "172",
        "ko": "239"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 68771,
    "percentage": 100
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 14,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 154,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "180.942",
        "ok": "180.538",
        "ko": "0.404"
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
