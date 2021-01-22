var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "117390",
        "ok": "85814",
        "ko": "31576"
    },
    "minResponseTime": {
        "total": "137",
        "ok": "137",
        "ko": "142"
    },
    "maxResponseTime": {
        "total": "10028",
        "ok": "10014",
        "ko": "10028"
    },
    "meanResponseTime": {
        "total": "2619",
        "ok": "924",
        "ko": "7224"
    },
    "standardDeviation": {
        "total": "3867",
        "ok": "1889",
        "ko": "4106"
    },
    "percentiles1": {
        "total": "154",
        "ok": "148",
        "ko": "10000"
    },
    "percentiles2": {
        "total": "3291",
        "ok": "351",
        "ko": "10000"
    },
    "percentiles3": {
        "total": "10000",
        "ok": "7248",
        "ko": "10001"
    },
    "percentiles4": {
        "total": "10001",
        "ok": "7674",
        "ko": "10002"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 67526,
    "percentage": 58
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 5765,
    "percentage": 5
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 12523,
    "percentage": 11
},
    "group4": {
    "name": "failed",
    "count": 31576,
    "percentage": 27
},
    "meanNumberOfRequestsPerSecond": {
        "total": "179.221",
        "ok": "131.014",
        "ko": "48.208"
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
        "total": "58695",
        "ok": "42908",
        "ko": "15787"
    },
    "minResponseTime": {
        "total": "142",
        "ok": "142",
        "ko": "9663"
    },
    "maxResponseTime": {
        "total": "10027",
        "ok": "10014",
        "ko": "10027"
    },
    "meanResponseTime": {
        "total": "3915",
        "ok": "1676",
        "ko": "10000"
    },
    "standardDeviation": {
        "total": "4244",
        "ok": "2450",
        "ko": "78"
    },
    "percentiles1": {
        "total": "1178",
        "ok": "156",
        "ko": "10000"
    },
    "percentiles2": {
        "total": "10000",
        "ok": "2646",
        "ko": "10000"
    },
    "percentiles3": {
        "total": "10001",
        "ok": "7436",
        "ko": "10001"
    },
    "percentiles4": {
        "total": "10001",
        "ok": "7877",
        "ko": "10003"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 24713,
    "percentage": 42
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 5672,
    "percentage": 10
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 12523,
    "percentage": 21
},
    "group4": {
    "name": "failed",
    "count": 15787,
    "percentage": 27
},
    "meanNumberOfRequestsPerSecond": {
        "total": "89.611",
        "ok": "65.508",
        "ko": "24.102"
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
        "total": "58695",
        "ok": "42906",
        "ko": "15789"
    },
    "minResponseTime": {
        "total": "137",
        "ok": "137",
        "ko": "142"
    },
    "maxResponseTime": {
        "total": "10028",
        "ok": "1054",
        "ko": "10028"
    },
    "meanResponseTime": {
        "total": "1323",
        "ok": "172",
        "ko": "4450"
    },
    "standardDeviation": {
        "total": "2921",
        "ok": "80",
        "ko": "4280"
    },
    "percentiles1": {
        "total": "145",
        "ok": "143",
        "ko": "3175"
    },
    "percentiles2": {
        "total": "286",
        "ok": "148",
        "ko": "10000"
    },
    "percentiles3": {
        "total": "10000",
        "ok": "354",
        "ko": "10001"
    },
    "percentiles4": {
        "total": "10001",
        "ok": "476",
        "ko": "10001"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 42813,
    "percentage": 73
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 93,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 15789,
    "percentage": 27
},
    "meanNumberOfRequestsPerSecond": {
        "total": "89.611",
        "ok": "65.505",
        "ko": "24.105"
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
