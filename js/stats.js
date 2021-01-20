var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "8360",
        "ok": "5922",
        "ko": "2438"
    },
    "minResponseTime": {
        "total": "76",
        "ok": "76",
        "ko": "76"
    },
    "maxResponseTime": {
        "total": "10017",
        "ok": "342",
        "ko": "10017"
    },
    "meanResponseTime": {
        "total": "2489",
        "ok": "117",
        "ko": "8250"
    },
    "standardDeviation": {
        "total": "4182",
        "ok": "39",
        "ko": "3621"
    },
    "percentiles1": {
        "total": "155",
        "ok": "132",
        "ko": "10000"
    },
    "percentiles2": {
        "total": "182",
        "ok": "156",
        "ko": "10001"
    },
    "percentiles3": {
        "total": "10001",
        "ok": "158",
        "ko": "10001"
    },
    "percentiles4": {
        "total": "10001",
        "ok": "161",
        "ko": "10002"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 5922,
    "percentage": 71
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
    "count": 2438,
    "percentage": 29
},
    "meanNumberOfRequestsPerSecond": {
        "total": "21.942",
        "ok": "15.543",
        "ko": "6.399"
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
        "ok": "2961",
        "ko": "1219"
    },
    "minResponseTime": {
        "total": "76",
        "ok": "153",
        "ko": "76"
    },
    "maxResponseTime": {
        "total": "10006",
        "ok": "342",
        "ko": "10006"
    },
    "meanResponseTime": {
        "total": "2646",
        "ok": "156",
        "ko": "8694"
    },
    "standardDeviation": {
        "total": "4242",
        "ok": "5",
        "ko": "3173"
    },
    "percentiles1": {
        "total": "157",
        "ok": "156",
        "ko": "10000"
    },
    "percentiles2": {
        "total": "7242",
        "ok": "157",
        "ko": "10001"
    },
    "percentiles3": {
        "total": "10001",
        "ok": "158",
        "ko": "10001"
    },
    "percentiles4": {
        "total": "10001",
        "ok": "163",
        "ko": "10002"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 2961,
    "percentage": 71
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
    "count": 1219,
    "percentage": 29
},
    "meanNumberOfRequestsPerSecond": {
        "total": "10.971",
        "ok": "7.772",
        "ko": "3.199"
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
        "ok": "2961",
        "ko": "1219"
    },
    "minResponseTime": {
        "total": "76",
        "ok": "76",
        "ko": "76"
    },
    "maxResponseTime": {
        "total": "10017",
        "ok": "131",
        "ko": "10017"
    },
    "meanResponseTime": {
        "total": "2332",
        "ok": "78",
        "ko": "7806"
    },
    "standardDeviation": {
        "total": "4115",
        "ok": "2",
        "ko": "3970"
    },
    "percentiles1": {
        "total": "78",
        "ok": "78",
        "ko": "10000"
    },
    "percentiles2": {
        "total": "82",
        "ok": "78",
        "ko": "10001"
    },
    "percentiles3": {
        "total": "10001",
        "ok": "79",
        "ko": "10001"
    },
    "percentiles4": {
        "total": "10001",
        "ok": "83",
        "ko": "10002"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 2961,
    "percentage": 71
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
    "count": 1219,
    "percentage": 29
},
    "meanNumberOfRequestsPerSecond": {
        "total": "10.971",
        "ok": "7.772",
        "ko": "3.199"
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
