var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "178019",
        "ok": "178018",
        "ko": "1"
    },
    "minResponseTime": {
        "total": "92",
        "ok": "92",
        "ko": "119"
    },
    "maxResponseTime": {
        "total": "6760",
        "ok": "6760",
        "ko": "119"
    },
    "meanResponseTime": {
        "total": "132",
        "ok": "132",
        "ko": "119"
    },
    "standardDeviation": {
        "total": "250",
        "ok": "250",
        "ko": "0"
    },
    "percentiles1": {
        "total": "103",
        "ok": "103",
        "ko": "119"
    },
    "percentiles2": {
        "total": "111",
        "ok": "111",
        "ko": "119"
    },
    "percentiles3": {
        "total": "118",
        "ok": "118",
        "ko": "119"
    },
    "percentiles4": {
        "total": "1129",
        "ok": "1129",
        "ko": "119"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 175365,
    "percentage": 99
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 1609,
    "percentage": 1
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 1044,
    "percentage": 1
},
    "group4": {
    "name": "failed",
    "count": 1,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "274.297",
        "ok": "274.296",
        "ko": "0.002"
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
        "total": "89010",
        "ok": "89009",
        "ko": "1"
    },
    "minResponseTime": {
        "total": "101",
        "ok": "101",
        "ko": "119"
    },
    "maxResponseTime": {
        "total": "6760",
        "ok": "6760",
        "ko": "119"
    },
    "meanResponseTime": {
        "total": "165",
        "ok": "165",
        "ko": "119"
    },
    "standardDeviation": {
        "total": "350",
        "ok": "350",
        "ko": "0"
    },
    "percentiles1": {
        "total": "111",
        "ok": "111",
        "ko": "119"
    },
    "percentiles2": {
        "total": "116",
        "ok": "116",
        "ko": "119"
    },
    "percentiles3": {
        "total": "121",
        "ok": "121",
        "ko": "119"
    },
    "percentiles4": {
        "total": "2232",
        "ok": "2232",
        "ko": "119"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 86356,
    "percentage": 97
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 1609,
    "percentage": 2
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 1044,
    "percentage": 1
},
    "group4": {
    "name": "failed",
    "count": 1,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "137.149",
        "ok": "137.148",
        "ko": "0.002"
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
        "total": "89009",
        "ok": "89009",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "92",
        "ok": "92",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "523",
        "ok": "523",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "100",
        "ok": "100",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "14",
        "ok": "14",
        "ko": "-"
    },
    "percentiles1": {
        "total": "99",
        "ok": "99",
        "ko": "-"
    },
    "percentiles2": {
        "total": "101",
        "ok": "101",
        "ko": "-"
    },
    "percentiles3": {
        "total": "103",
        "ok": "103",
        "ko": "-"
    },
    "percentiles4": {
        "total": "107",
        "ok": "107",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 89009,
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
        "total": "137.148",
        "ok": "137.148",
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
