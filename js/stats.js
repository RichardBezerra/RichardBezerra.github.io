var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "76760",
        "ok": "30418",
        "ko": "46342"
    },
    "minResponseTime": {
        "total": "77",
        "ok": "77",
        "ko": "77"
    },
    "maxResponseTime": {
        "total": "10073",
        "ok": "8223",
        "ko": "10073"
    },
    "meanResponseTime": {
        "total": "5605",
        "ok": "1080",
        "ko": "8576"
    },
    "standardDeviation": {
        "total": "4600",
        "ok": "2012",
        "ko": "3182"
    },
    "percentiles1": {
        "total": "7465",
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
        "ok": "7289",
        "ko": "10001"
    },
    "percentiles4": {
        "total": "10001",
        "ok": "7483",
        "ko": "10002"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 21637,
    "percentage": 28
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 2808,
    "percentage": 4
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 5973,
    "percentage": 8
},
    "group4": {
    "name": "failed",
    "count": 46342,
    "percentage": 60
},
    "meanNumberOfRequestsPerSecond": {
        "total": "192.864",
        "ok": "76.427",
        "ko": "116.437"
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
        "ok": "15220",
        "ko": "23160"
    },
    "minResponseTime": {
        "total": "77",
        "ok": "154",
        "ko": "77"
    },
    "maxResponseTime": {
        "total": "10033",
        "ok": "8223",
        "ko": "10033"
    },
    "meanResponseTime": {
        "total": "6841",
        "ok": "2056",
        "ko": "9986"
    },
    "standardDeviation": {
        "total": "4193",
        "ok": "2486",
        "ko": "373"
    },
    "percentiles1": {
        "total": "10000",
        "ok": "1175",
        "ko": "10000"
    },
    "percentiles2": {
        "total": "10000",
        "ok": "3200",
        "ko": "10000"
    },
    "percentiles3": {
        "total": "10001",
        "ok": "7388",
        "ko": "10001"
    },
    "percentiles4": {
        "total": "10001",
        "ok": "7574",
        "ko": "10002"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 6439,
    "percentage": 17
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 2808,
    "percentage": 7
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 5973,
    "percentage": 16
},
    "group4": {
    "name": "failed",
    "count": 23160,
    "percentage": 60
},
    "meanNumberOfRequestsPerSecond": {
        "total": "96.432",
        "ok": "38.241",
        "ko": "58.191"
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
        "ok": "15198",
        "ko": "23182"
    },
    "minResponseTime": {
        "total": "77",
        "ok": "77",
        "ko": "77"
    },
    "maxResponseTime": {
        "total": "10073",
        "ok": "685",
        "ko": "10073"
    },
    "meanResponseTime": {
        "total": "4370",
        "ok": "104",
        "ko": "7167"
    },
    "standardDeviation": {
        "total": "4656",
        "ok": "49",
        "ko": "4017"
    },
    "percentiles1": {
        "total": "1181",
        "ok": "82",
        "ko": "10000"
    },
    "percentiles2": {
        "total": "10000",
        "ok": "101",
        "ko": "10000"
    },
    "percentiles3": {
        "total": "10001",
        "ok": "217",
        "ko": "10001"
    },
    "percentiles4": {
        "total": "10001",
        "ok": "273",
        "ko": "10001"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 15198,
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
    "count": 23182,
    "percentage": 60
},
    "meanNumberOfRequestsPerSecond": {
        "total": "96.432",
        "ok": "38.186",
        "ko": "58.246"
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
