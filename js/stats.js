var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "118680",
        "ok": "118680",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "140",
        "ok": "140",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "3326",
        "ok": "3326",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "221",
        "ok": "221",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "128",
        "ok": "128",
        "ko": "-"
    },
    "percentiles1": {
        "total": "213",
        "ok": "213",
        "ko": "-"
    },
    "percentiles2": {
        "total": "283",
        "ok": "283",
        "ko": "-"
    },
    "percentiles3": {
        "total": "288",
        "ok": "288",
        "ko": "-"
    },
    "percentiles4": {
        "total": "297",
        "ok": "297",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 118065,
    "percentage": 99
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 76,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 539,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "91.929",
        "ok": "91.929",
        "ko": "-"
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
        "total": "59340",
        "ok": "59340",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "278",
        "ok": "278",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "3326",
        "ok": "3326",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "297",
        "ok": "297",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "145",
        "ok": "145",
        "ko": "-"
    },
    "percentiles1": {
        "total": "283",
        "ok": "283",
        "ko": "-"
    },
    "percentiles2": {
        "total": "284",
        "ok": "284",
        "ko": "-"
    },
    "percentiles3": {
        "total": "293",
        "ok": "293",
        "ko": "-"
    },
    "percentiles4": {
        "total": "944",
        "ok": "944",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 58725,
    "percentage": 99
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 76,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 539,
    "percentage": 1
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "45.964",
        "ok": "45.964",
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
        "total": "59340",
        "ok": "59340",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "140",
        "ok": "140",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "324",
        "ok": "324",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "144",
        "ok": "144",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "6",
        "ok": "6",
        "ko": "-"
    },
    "percentiles1": {
        "total": "143",
        "ok": "143",
        "ko": "-"
    },
    "percentiles2": {
        "total": "144",
        "ok": "144",
        "ko": "-"
    },
    "percentiles3": {
        "total": "148",
        "ok": "148",
        "ko": "-"
    },
    "percentiles4": {
        "total": "157",
        "ok": "157",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 59340,
    "percentage": 100
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
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "45.964",
        "ok": "45.964",
        "ko": "-"
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
