var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "8360",
        "ok": "8360",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "139",
        "ok": "139",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "491",
        "ok": "491",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "213",
        "ok": "213",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "71",
        "ok": "71",
        "ko": "-"
    },
    "percentiles1": {
        "total": "179",
        "ok": "181",
        "ko": "-"
    },
    "percentiles2": {
        "total": "283",
        "ok": "283",
        "ko": "-"
    },
    "percentiles3": {
        "total": "290",
        "ok": "290",
        "ko": "-"
    },
    "percentiles4": {
        "total": "294",
        "ok": "294",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 8360,
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
        "total": "21.942",
        "ok": "21.942",
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
        "total": "4180",
        "ok": "4180",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "279",
        "ok": "279",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "491",
        "ok": "491",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "284",
        "ok": "284",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "5",
        "ok": "5",
        "ko": "-"
    },
    "percentiles1": {
        "total": "283",
        "ok": "283",
        "ko": "-"
    },
    "percentiles2": {
        "total": "286",
        "ok": "286",
        "ko": "-"
    },
    "percentiles3": {
        "total": "292",
        "ok": "292",
        "ko": "-"
    },
    "percentiles4": {
        "total": "294",
        "ok": "294",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 4180,
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
        "total": "10.971",
        "ok": "10.971",
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
        "total": "4180",
        "ok": "4180",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "139",
        "ok": "139",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "186",
        "ok": "186",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "142",
        "ok": "142",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "2",
        "ok": "2",
        "ko": "-"
    },
    "percentiles1": {
        "total": "141",
        "ok": "141",
        "ko": "-"
    },
    "percentiles2": {
        "total": "143",
        "ok": "143",
        "ko": "-"
    },
    "percentiles3": {
        "total": "146",
        "ok": "146",
        "ko": "-"
    },
    "percentiles4": {
        "total": "148",
        "ok": "148",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 4180,
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
        "total": "10.971",
        "ok": "10.971",
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
