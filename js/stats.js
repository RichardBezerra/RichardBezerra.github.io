var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "59340",
        "ok": "59340",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "79",
        "ok": "79",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "6324",
        "ok": "6324",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "118",
        "ok": "118",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "307",
        "ok": "307",
        "ko": "-"
    },
    "percentiles1": {
        "total": "83",
        "ok": "83",
        "ko": "-"
    },
    "percentiles2": {
        "total": "84",
        "ok": "84",
        "ko": "-"
    },
    "percentiles3": {
        "total": "87",
        "ok": "87",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1109",
        "ok": "1109",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 58293,
    "percentage": 98
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 606,
    "percentage": 1
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 441,
    "percentage": 1
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "91.858",
        "ok": "91.858",
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
        "total": "29670",
        "ok": "29670",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "81",
        "ok": "81",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "6324",
        "ok": "6324",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "153",
        "ok": "153",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "430",
        "ok": "430",
        "ko": "-"
    },
    "percentiles1": {
        "total": "84",
        "ok": "84",
        "ko": "-"
    },
    "percentiles2": {
        "total": "85",
        "ok": "85",
        "ko": "-"
    },
    "percentiles3": {
        "total": "91",
        "ok": "91",
        "ko": "-"
    },
    "percentiles4": {
        "total": "2707",
        "ok": "2707",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 28623,
    "percentage": 96
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 606,
    "percentage": 2
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 441,
    "percentage": 1
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "45.929",
        "ok": "45.929",
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
        "total": "29670",
        "ok": "29670",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "79",
        "ok": "79",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "395",
        "ok": "395",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "83",
        "ok": "83",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "19",
        "ok": "19",
        "ko": "-"
    },
    "percentiles1": {
        "total": "81",
        "ok": "81",
        "ko": "-"
    },
    "percentiles2": {
        "total": "82",
        "ok": "82",
        "ko": "-"
    },
    "percentiles3": {
        "total": "84",
        "ok": "84",
        "ko": "-"
    },
    "percentiles4": {
        "total": "93",
        "ok": "93",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 29670,
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
        "total": "45.929",
        "ok": "45.929",
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
