var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "76760",
        "ok": "31310",
        "ko": "45450"
    },
    "minResponseTime": {
        "total": "77",
        "ok": "77",
        "ko": "154"
    },
    "maxResponseTime": {
        "total": "10026",
        "ok": "7947",
        "ko": "10026"
    },
    "meanResponseTime": {
        "total": "5391",
        "ok": "979",
        "ko": "8430"
    },
    "standardDeviation": {
        "total": "4628",
        "ok": "1865",
        "ko": "3337"
    },
    "percentiles1": {
        "total": "7282",
        "ok": "156",
        "ko": "10000"
    },
    "percentiles2": {
        "total": "10000",
        "ok": "1169",
        "ko": "10000"
    },
    "percentiles3": {
        "total": "10001",
        "ok": "7233",
        "ko": "10001"
    },
    "percentiles4": {
        "total": "10001",
        "ok": "7431",
        "ko": "10001"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 22654,
    "percentage": 30
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 3180,
    "percentage": 4
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 5476,
    "percentage": 7
},
    "group4": {
    "name": "failed",
    "count": 45450,
    "percentage": 59
},
    "meanNumberOfRequestsPerSecond": {
        "total": "194.822",
        "ok": "79.467",
        "ko": "115.355"
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
        "ok": "15655",
        "ko": "22725"
    },
    "minResponseTime": {
        "total": "154",
        "ok": "154",
        "ko": "10000"
    },
    "maxResponseTime": {
        "total": "10026",
        "ok": "7947",
        "ko": "10026"
    },
    "meanResponseTime": {
        "total": "6682",
        "ok": "1865",
        "ko": "10000"
    },
    "standardDeviation": {
        "total": "4264",
        "ok": "2320",
        "ko": "1"
    },
    "percentiles1": {
        "total": "10000",
        "ok": "1169",
        "ko": "10000"
    },
    "percentiles2": {
        "total": "10000",
        "ok": "3192",
        "ko": "10000"
    },
    "percentiles3": {
        "total": "10001",
        "ok": "7332",
        "ko": "10001"
    },
    "percentiles4": {
        "total": "10001",
        "ok": "7487",
        "ko": "10001"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 6999,
    "percentage": 18
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 3180,
    "percentage": 8
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 5476,
    "percentage": 14
},
    "group4": {
    "name": "failed",
    "count": 22725,
    "percentage": 59
},
    "meanNumberOfRequestsPerSecond": {
        "total": "97.411",
        "ok": "39.734",
        "ko": "57.678"
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
        "ok": "15655",
        "ko": "22725"
    },
    "minResponseTime": {
        "total": "77",
        "ok": "77",
        "ko": "154"
    },
    "maxResponseTime": {
        "total": "10026",
        "ok": "485",
        "ko": "10026"
    },
    "meanResponseTime": {
        "total": "4099",
        "ok": "92",
        "ko": "6860"
    },
    "standardDeviation": {
        "total": "4618",
        "ok": "31",
        "ko": "4164"
    },
    "percentiles1": {
        "total": "400",
        "ok": "80",
        "ko": "10000"
    },
    "percentiles2": {
        "total": "10000",
        "ok": "86",
        "ko": "10000"
    },
    "percentiles3": {
        "total": "10001",
        "ok": "167",
        "ko": "10001"
    },
    "percentiles4": {
        "total": "10001",
        "ok": "220",
        "ko": "10001"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 15655,
    "percentage": 41
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
    "count": 22725,
    "percentage": 59
},
    "meanNumberOfRequestsPerSecond": {
        "total": "97.411",
        "ok": "39.734",
        "ko": "57.678"
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
