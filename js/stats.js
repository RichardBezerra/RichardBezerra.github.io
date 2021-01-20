var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "76760",
        "ok": "22796",
        "ko": "53964"
    },
    "minResponseTime": {
        "total": "76",
        "ok": "76",
        "ko": "77"
    },
    "maxResponseTime": {
        "total": "10082",
        "ok": "8189",
        "ko": "10082"
    },
    "meanResponseTime": {
        "total": "6568",
        "ok": "1118",
        "ko": "8870"
    },
    "standardDeviation": {
        "total": "4440",
        "ok": "2077",
        "ko": "2893"
    },
    "percentiles1": {
        "total": "10000",
        "ok": "157",
        "ko": "10000"
    },
    "percentiles2": {
        "total": "10000",
        "ok": "1175",
        "ko": "10000"
    },
    "percentiles3": {
        "total": "10001",
        "ok": "7297",
        "ko": "10001"
    },
    "percentiles4": {
        "total": "10003",
        "ok": "7544",
        "ko": "10006"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 16252,
    "percentage": 21
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 2082,
    "percentage": 3
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 4462,
    "percentage": 6
},
    "group4": {
    "name": "failed",
    "count": 53964,
    "percentage": 70
},
    "meanNumberOfRequestsPerSecond": {
        "total": "191.9",
        "ok": "56.99",
        "ko": "134.91"
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
        "total": "38380",
        "ok": "11401",
        "ko": "26979"
    },
    "minResponseTime": {
        "total": "77",
        "ok": "153",
        "ko": "77"
    },
    "maxResponseTime": {
        "total": "10082",
        "ok": "8189",
        "ko": "10082"
    },
    "meanResponseTime": {
        "total": "7658",
        "ok": "2137",
        "ko": "9991"
    },
    "standardDeviation": {
        "total": "3859",
        "ok": "2559",
        "ko": "313"
    },
    "percentiles1": {
        "total": "10000",
        "ok": "1175",
        "ko": "10000"
    },
    "percentiles2": {
        "total": "10000",
        "ok": "3202",
        "ko": "10000"
    },
    "percentiles3": {
        "total": "10001",
        "ok": "7407",
        "ko": "10001"
    },
    "percentiles4": {
        "total": "10004",
        "ok": "7628",
        "ko": "10008"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 4857,
    "percentage": 13
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 2082,
    "percentage": 5
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 4462,
    "percentage": 12
},
    "group4": {
    "name": "failed",
    "count": 26979,
    "percentage": 70
},
    "meanNumberOfRequestsPerSecond": {
        "total": "95.95",
        "ok": "28.503",
        "ko": "67.448"
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
        "total": "38380",
        "ok": "11395",
        "ko": "26985"
    },
    "minResponseTime": {
        "total": "76",
        "ok": "76",
        "ko": "77"
    },
    "maxResponseTime": {
        "total": "10072",
        "ok": "652",
        "ko": "10072"
    },
    "meanResponseTime": {
        "total": "5479",
        "ok": "99",
        "ko": "7750"
    },
    "standardDeviation": {
        "total": "4707",
        "ok": "55",
        "ko": "3759"
    },
    "percentiles1": {
        "total": "7576",
        "ok": "80",
        "ko": "10000"
    },
    "percentiles2": {
        "total": "10000",
        "ok": "87",
        "ko": "10000"
    },
    "percentiles3": {
        "total": "10001",
        "ok": "220",
        "ko": "10001"
    },
    "percentiles4": {
        "total": "10002",
        "ok": "315",
        "ko": "10004"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 11395,
    "percentage": 30
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
    "count": 26985,
    "percentage": 70
},
    "meanNumberOfRequestsPerSecond": {
        "total": "95.95",
        "ok": "28.488",
        "ko": "67.463"
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
