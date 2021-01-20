var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "76760",
        "ok": "22133",
        "ko": "54627"
    },
    "minResponseTime": {
        "total": "139",
        "ok": "139",
        "ko": "278"
    },
    "maxResponseTime": {
        "total": "10109",
        "ok": "8275",
        "ko": "10109"
    },
    "meanResponseTime": {
        "total": "6683",
        "ok": "1093",
        "ko": "8948"
    },
    "standardDeviation": {
        "total": "4386",
        "ok": "1901",
        "ko": "2789"
    },
    "percentiles1": {
        "total": "10000",
        "ok": "281",
        "ko": "10000"
    },
    "percentiles2": {
        "total": "10000",
        "ok": "1297",
        "ko": "10000"
    },
    "percentiles3": {
        "total": "10001",
        "ok": "7372",
        "ko": "10001"
    },
    "percentiles4": {
        "total": "10001",
        "ok": "7578",
        "ko": "10003"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 15995,
    "percentage": 21
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 23,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 6115,
    "percentage": 8
},
    "group4": {
    "name": "failed",
    "count": 54627,
    "percentage": 71
},
    "meanNumberOfRequestsPerSecond": {
        "total": "191.9",
        "ok": "55.333",
        "ko": "136.567"
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
        "ok": "11073",
        "ko": "27307"
    },
    "minResponseTime": {
        "total": "278",
        "ok": "278",
        "ko": "10000"
    },
    "maxResponseTime": {
        "total": "10032",
        "ok": "8275",
        "ko": "10032"
    },
    "meanResponseTime": {
        "total": "7699",
        "ok": "2022",
        "ko": "10000"
    },
    "standardDeviation": {
        "total": "3828",
        "ok": "2343",
        "ko": "1"
    },
    "percentiles1": {
        "total": "10000",
        "ok": "1297",
        "ko": "10000"
    },
    "percentiles2": {
        "total": "10000",
        "ok": "3321",
        "ko": "10001"
    },
    "percentiles3": {
        "total": "10001",
        "ok": "7486",
        "ko": "10001"
    },
    "percentiles4": {
        "total": "10002",
        "ok": "7657",
        "ko": "10004"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 4935,
    "percentage": 13
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 23,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 6115,
    "percentage": 16
},
    "group4": {
    "name": "failed",
    "count": 27307,
    "percentage": 71
},
    "meanNumberOfRequestsPerSecond": {
        "total": "95.95",
        "ok": "27.683",
        "ko": "68.267"
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
        "ok": "11060",
        "ko": "27320"
    },
    "minResponseTime": {
        "total": "139",
        "ok": "139",
        "ko": "278"
    },
    "maxResponseTime": {
        "total": "10109",
        "ok": "765",
        "ko": "10109"
    },
    "meanResponseTime": {
        "total": "5668",
        "ok": "163",
        "ko": "7896"
    },
    "standardDeviation": {
        "total": "4665",
        "ok": "51",
        "ko": "3653"
    },
    "percentiles1": {
        "total": "10000",
        "ok": "144",
        "ko": "10000"
    },
    "percentiles2": {
        "total": "10000",
        "ok": "156",
        "ko": "10000"
    },
    "percentiles3": {
        "total": "10001",
        "ok": "244",
        "ko": "10001"
    },
    "percentiles4": {
        "total": "10001",
        "ok": "362",
        "ko": "10002"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 11060,
    "percentage": 29
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
    "count": 27320,
    "percentage": 71
},
    "meanNumberOfRequestsPerSecond": {
        "total": "95.95",
        "ok": "27.65",
        "ko": "68.3"
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
