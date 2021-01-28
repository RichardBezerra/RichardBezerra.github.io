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
        "total": "80",
        "ok": "80",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "384",
        "ok": "384",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "87",
        "ok": "87",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "26",
        "ok": "26",
        "ko": "-"
    },
    "percentiles1": {
        "total": "84",
        "ok": "84",
        "ko": "-"
    },
    "percentiles2": {
        "total": "86",
        "ok": "86",
        "ko": "-"
    },
    "percentiles3": {
        "total": "89",
        "ok": "89",
        "ko": "-"
    },
    "percentiles4": {
        "total": "96",
        "ok": "96",
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
        "total": "25.714",
        "ok": "25.714",
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
        "total": "82",
        "ok": "82",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "99",
        "ok": "99",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "86",
        "ok": "86",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "2",
        "ok": "2",
        "ko": "-"
    },
    "percentiles1": {
        "total": "85",
        "ok": "85",
        "ko": "-"
    },
    "percentiles2": {
        "total": "86",
        "ok": "86",
        "ko": "-"
    },
    "percentiles3": {
        "total": "90",
        "ok": "90",
        "ko": "-"
    },
    "percentiles4": {
        "total": "95",
        "ok": "95",
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
        "total": "12.857",
        "ok": "12.857",
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
        "total": "80",
        "ok": "80",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "384",
        "ok": "384",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "87",
        "ok": "87",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "37",
        "ok": "37",
        "ko": "-"
    },
    "percentiles1": {
        "total": "82",
        "ok": "82",
        "ko": "-"
    },
    "percentiles2": {
        "total": "83",
        "ok": "83",
        "ko": "-"
    },
    "percentiles3": {
        "total": "86",
        "ok": "86",
        "ko": "-"
    },
    "percentiles4": {
        "total": "381",
        "ok": "381",
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
        "total": "12.857",
        "ok": "12.857",
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
