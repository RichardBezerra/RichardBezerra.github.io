var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "900",
        "ok": "900",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "94",
        "ok": "94",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "424",
        "ok": "424",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "121",
        "ok": "121",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "25",
        "ok": "25",
        "ko": "-"
    },
    "percentiles1": {
        "total": "113",
        "ok": "113",
        "ko": "-"
    },
    "percentiles2": {
        "total": "143",
        "ok": "143",
        "ko": "-"
    },
    "percentiles3": {
        "total": "150",
        "ok": "150",
        "ko": "-"
    },
    "percentiles4": {
        "total": "156",
        "ok": "156",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 900,
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
        "total": "27.273",
        "ok": "27.273",
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
        "total": "450",
        "ok": "450",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "104",
        "ok": "104",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "204",
        "ok": "204",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "126",
        "ok": "126",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "17",
        "ok": "17",
        "ko": "-"
    },
    "percentiles1": {
        "total": "118",
        "ok": "118",
        "ko": "-"
    },
    "percentiles2": {
        "total": "147",
        "ok": "147",
        "ko": "-"
    },
    "percentiles3": {
        "total": "151",
        "ok": "151",
        "ko": "-"
    },
    "percentiles4": {
        "total": "156",
        "ok": "156",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 450,
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
        "total": "13.636",
        "ok": "13.636",
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
        "total": "450",
        "ok": "450",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "94",
        "ok": "94",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "424",
        "ok": "424",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "116",
        "ok": "116",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "30",
        "ok": "30",
        "ko": "-"
    },
    "percentiles1": {
        "total": "103",
        "ok": "103",
        "ko": "-"
    },
    "percentiles2": {
        "total": "141",
        "ok": "141",
        "ko": "-"
    },
    "percentiles3": {
        "total": "146",
        "ok": "146",
        "ko": "-"
    },
    "percentiles4": {
        "total": "150",
        "ok": "150",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 450,
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
        "total": "13.636",
        "ok": "13.636",
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
