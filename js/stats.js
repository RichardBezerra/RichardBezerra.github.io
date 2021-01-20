var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "76760",
        "ok": "28966",
        "ko": "47794"
    },
    "minResponseTime": {
        "total": "75",
        "ok": "75",
        "ko": "78"
    },
    "maxResponseTime": {
        "total": "10033",
        "ok": "8061",
        "ko": "10033"
    },
    "meanResponseTime": {
        "total": "5804",
        "ok": "1017",
        "ko": "8705"
    },
    "standardDeviation": {
        "total": "4603",
        "ok": "1946",
        "ko": "3072"
    },
    "percentiles1": {
        "total": "10000",
        "ok": "155",
        "ko": "10000"
    },
    "percentiles2": {
        "total": "10000",
        "ok": "1169",
        "ko": "10000"
    },
    "percentiles3": {
        "total": "10001",
        "ok": "7277",
        "ko": "10001"
    },
    "percentiles4": {
        "total": "10001",
        "ok": "7462",
        "ko": "10001"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 20832,
    "percentage": 27
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 3108,
    "percentage": 4
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 5026,
    "percentage": 7
},
    "group4": {
    "name": "failed",
    "count": 47794,
    "percentage": 62
},
    "meanNumberOfRequestsPerSecond": {
        "total": "193.35",
        "ok": "72.962",
        "ko": "120.388"
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
        "ok": "14483",
        "ko": "23897"
    },
    "minResponseTime": {
        "total": "78",
        "ok": "151",
        "ko": "78"
    },
    "maxResponseTime": {
        "total": "10033",
        "ok": "8061",
        "ko": "10033"
    },
    "meanResponseTime": {
        "total": "6952",
        "ok": "1938",
        "ko": "9991"
    },
    "standardDeviation": {
        "total": "4184",
        "ok": "2425",
        "ko": "288"
    },
    "percentiles1": {
        "total": "10000",
        "ok": "1169",
        "ko": "10000"
    },
    "percentiles2": {
        "total": "10000",
        "ok": "3191",
        "ko": "10000"
    },
    "percentiles3": {
        "total": "10001",
        "ok": "7386",
        "ko": "10001"
    },
    "percentiles4": {
        "total": "10001",
        "ok": "7549",
        "ko": "10002"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 6349,
    "percentage": 17
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 3108,
    "percentage": 8
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 5026,
    "percentage": 13
},
    "group4": {
    "name": "failed",
    "count": 23897,
    "percentage": 62
},
    "meanNumberOfRequestsPerSecond": {
        "total": "96.675",
        "ok": "36.481",
        "ko": "60.194"
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
        "ok": "14483",
        "ko": "23897"
    },
    "minResponseTime": {
        "total": "75",
        "ok": "75",
        "ko": "151"
    },
    "maxResponseTime": {
        "total": "10029",
        "ok": "691",
        "ko": "10029"
    },
    "meanResponseTime": {
        "total": "4656",
        "ok": "97",
        "ko": "7419"
    },
    "standardDeviation": {
        "total": "4715",
        "ok": "43",
        "ko": "3934"
    },
    "percentiles1": {
        "total": "1211",
        "ok": "79",
        "ko": "10000"
    },
    "percentiles2": {
        "total": "10000",
        "ok": "86",
        "ko": "10000"
    },
    "percentiles3": {
        "total": "10001",
        "ok": "209",
        "ko": "10001"
    },
    "percentiles4": {
        "total": "10001",
        "ok": "252",
        "ko": "10001"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 14483,
    "percentage": 38
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
    "count": 23897,
    "percentage": 62
},
    "meanNumberOfRequestsPerSecond": {
        "total": "96.675",
        "ok": "36.481",
        "ko": "60.194"
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
