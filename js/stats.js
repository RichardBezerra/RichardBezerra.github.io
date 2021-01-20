var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "76760",
        "ok": "30803",
        "ko": "45957"
    },
    "minResponseTime": {
        "total": "77",
        "ok": "77",
        "ko": "154"
    },
    "maxResponseTime": {
        "total": "10034",
        "ok": "8807",
        "ko": "10034"
    },
    "meanResponseTime": {
        "total": "5548",
        "ok": "1115",
        "ko": "8519"
    },
    "standardDeviation": {
        "total": "4602",
        "ok": "2074",
        "ko": "3240"
    },
    "percentiles1": {
        "total": "7429",
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
        "ok": "7303",
        "ko": "10001"
    },
    "percentiles4": {
        "total": "10001",
        "ok": "7571",
        "ko": "10003"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 22138,
    "percentage": 29
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 2480,
    "percentage": 3
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 6185,
    "percentage": 8
},
    "group4": {
    "name": "failed",
    "count": 45957,
    "percentage": 60
},
    "meanNumberOfRequestsPerSecond": {
        "total": "193.838",
        "ok": "77.785",
        "ko": "116.053"
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
        "ok": "15412",
        "ko": "22968"
    },
    "minResponseTime": {
        "total": "154",
        "ok": "154",
        "ko": "10000"
    },
    "maxResponseTime": {
        "total": "10032",
        "ok": "8807",
        "ko": "10032"
    },
    "meanResponseTime": {
        "total": "6838",
        "ok": "2124",
        "ko": "10000"
    },
    "standardDeviation": {
        "total": "4188",
        "ok": "2561",
        "ko": "1"
    },
    "percentiles1": {
        "total": "10000",
        "ok": "1175",
        "ko": "10000"
    },
    "percentiles2": {
        "total": "10000",
        "ok": "3203",
        "ko": "10000"
    },
    "percentiles3": {
        "total": "10001",
        "ok": "7429",
        "ko": "10001"
    },
    "percentiles4": {
        "total": "10001",
        "ok": "7712",
        "ko": "10004"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 6747,
    "percentage": 18
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 2480,
    "percentage": 6
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 6185,
    "percentage": 16
},
    "group4": {
    "name": "failed",
    "count": 22968,
    "percentage": 60
},
    "meanNumberOfRequestsPerSecond": {
        "total": "96.919",
        "ok": "38.919",
        "ko": "58"
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
        "ok": "15391",
        "ko": "22989"
    },
    "minResponseTime": {
        "total": "77",
        "ok": "77",
        "ko": "154"
    },
    "maxResponseTime": {
        "total": "10034",
        "ok": "789",
        "ko": "10034"
    },
    "meanResponseTime": {
        "total": "4258",
        "ok": "105",
        "ko": "7039"
    },
    "standardDeviation": {
        "total": "4636",
        "ok": "55",
        "ko": "4074"
    },
    "percentiles1": {
        "total": "1172",
        "ok": "82",
        "ko": "10000"
    },
    "percentiles2": {
        "total": "10000",
        "ok": "96",
        "ko": "10000"
    },
    "percentiles3": {
        "total": "10001",
        "ok": "233",
        "ko": "10001"
    },
    "percentiles4": {
        "total": "10001",
        "ok": "308",
        "ko": "10002"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 15391,
    "percentage": 40
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
    "count": 22989,
    "percentage": 60
},
    "meanNumberOfRequestsPerSecond": {
        "total": "96.919",
        "ok": "38.866",
        "ko": "58.053"
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
