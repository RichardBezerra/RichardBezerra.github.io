var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "76760",
        "ok": "30402",
        "ko": "46358"
    },
    "minResponseTime": {
        "total": "77",
        "ok": "77",
        "ko": "77"
    },
    "maxResponseTime": {
        "total": "10090",
        "ok": "8044",
        "ko": "10090"
    },
    "meanResponseTime": {
        "total": "5563",
        "ok": "1068",
        "ko": "8510"
    },
    "standardDeviation": {
        "total": "4599",
        "ok": "1972",
        "ko": "3247"
    },
    "percentiles1": {
        "total": "7414",
        "ok": "158",
        "ko": "10000"
    },
    "percentiles2": {
        "total": "10000",
        "ok": "1176",
        "ko": "10000"
    },
    "percentiles3": {
        "total": "10001",
        "ok": "7276",
        "ko": "10001"
    },
    "percentiles4": {
        "total": "10001",
        "ok": "7467",
        "ko": "10001"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 21558,
    "percentage": 28
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 2944,
    "percentage": 4
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 5900,
    "percentage": 8
},
    "group4": {
    "name": "failed",
    "count": 46358,
    "percentage": 60
},
    "meanNumberOfRequestsPerSecond": {
        "total": "193.35",
        "ok": "76.579",
        "ko": "116.771"
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
        "ok": "15206",
        "ko": "23174"
    },
    "minResponseTime": {
        "total": "77",
        "ok": "154",
        "ko": "77"
    },
    "maxResponseTime": {
        "total": "10029",
        "ok": "8044",
        "ko": "10029"
    },
    "meanResponseTime": {
        "total": "6835",
        "ok": "2032",
        "ko": "9988"
    },
    "standardDeviation": {
        "total": "4190",
        "ok": "2432",
        "ko": "333"
    },
    "percentiles1": {
        "total": "10000",
        "ok": "1176",
        "ko": "10000"
    },
    "percentiles2": {
        "total": "10000",
        "ok": "3199",
        "ko": "10000"
    },
    "percentiles3": {
        "total": "10001",
        "ok": "7378",
        "ko": "10001"
    },
    "percentiles4": {
        "total": "10001",
        "ok": "7555",
        "ko": "10001"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 6362,
    "percentage": 17
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 2944,
    "percentage": 8
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 5900,
    "percentage": 15
},
    "group4": {
    "name": "failed",
    "count": 23174,
    "percentage": 60
},
    "meanNumberOfRequestsPerSecond": {
        "total": "96.675",
        "ok": "38.302",
        "ko": "58.373"
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
        "ok": "15196",
        "ko": "23184"
    },
    "minResponseTime": {
        "total": "77",
        "ok": "77",
        "ko": "77"
    },
    "maxResponseTime": {
        "total": "10090",
        "ok": "526",
        "ko": "10090"
    },
    "meanResponseTime": {
        "total": "4290",
        "ok": "104",
        "ko": "7033"
    },
    "standardDeviation": {
        "total": "4639",
        "ok": "49",
        "ko": "4075"
    },
    "percentiles1": {
        "total": "1177",
        "ok": "82",
        "ko": "10000"
    },
    "percentiles2": {
        "total": "10000",
        "ok": "98",
        "ko": "10000"
    },
    "percentiles3": {
        "total": "10001",
        "ok": "223",
        "ko": "10001"
    },
    "percentiles4": {
        "total": "10001",
        "ok": "281",
        "ko": "10001"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 15196,
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
    "count": 23184,
    "percentage": 60
},
    "meanNumberOfRequestsPerSecond": {
        "total": "96.675",
        "ok": "38.277",
        "ko": "58.398"
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
