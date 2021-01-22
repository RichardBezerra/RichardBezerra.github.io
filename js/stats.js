var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "109633",
        "ok": "101876",
        "ko": "7757"
    },
    "minResponseTime": {
        "total": "78",
        "ok": "78",
        "ko": "10000"
    },
    "maxResponseTime": {
        "total": "10131",
        "ok": "10131",
        "ko": "10022"
    },
    "meanResponseTime": {
        "total": "1432",
        "ok": "780",
        "ko": "10000"
    },
    "standardDeviation": {
        "total": "2925",
        "ok": "1786",
        "ko": "1"
    },
    "percentiles1": {
        "total": "84",
        "ok": "84",
        "ko": "10000"
    },
    "percentiles2": {
        "total": "1090",
        "ok": "108",
        "ko": "10000"
    },
    "percentiles3": {
        "total": "10000",
        "ok": "6767",
        "ko": "10001"
    },
    "percentiles4": {
        "total": "10001",
        "ok": "7368",
        "ko": "10001"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 81326,
    "percentage": 74
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 7988,
    "percentage": 7
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 12562,
    "percentage": 11
},
    "group4": {
    "name": "failed",
    "count": 7757,
    "percentage": 7
},
    "meanNumberOfRequestsPerSecond": {
        "total": "168.666",
        "ok": "156.732",
        "ko": "11.934"
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
        "ok": "50938",
        "ko": "7757"
    },
    "minResponseTime": {
        "total": "80",
        "ok": "80",
        "ko": "10000"
    },
    "maxResponseTime": {
        "total": "10131",
        "ok": "10131",
        "ko": "10022"
    },
    "meanResponseTime": {
        "total": "2598",
        "ok": "1470",
        "ko": "10000"
    },
    "standardDeviation": {
        "total": "3613",
        "ok": "2329",
        "ko": "1"
    },
    "percentiles1": {
        "total": "92",
        "ok": "86",
        "ko": "10000"
    },
    "percentiles2": {
        "total": "3148",
        "ok": "1158",
        "ko": "10000"
    },
    "percentiles3": {
        "total": "10000",
        "ok": "7241",
        "ko": "10001"
    },
    "percentiles4": {
        "total": "10001",
        "ok": "7445",
        "ko": "10001"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 30388,
    "percentage": 52
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 7988,
    "percentage": 14
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 12562,
    "percentage": 21
},
    "group4": {
    "name": "failed",
    "count": 7757,
    "percentage": 13
},
    "meanNumberOfRequestsPerSecond": {
        "total": "90.3",
        "ok": "78.366",
        "ko": "11.934"
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
        "total": "50938",
        "ok": "50938",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "78",
        "ok": "78",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "495",
        "ok": "495",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "90",
        "ok": "90",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "34",
        "ok": "34",
        "ko": "-"
    },
    "percentiles1": {
        "total": "81",
        "ok": "81",
        "ko": "-"
    },
    "percentiles2": {
        "total": "82",
        "ok": "82",
        "ko": "-"
    },
    "percentiles3": {
        "total": "142",
        "ok": "142",
        "ko": "-"
    },
    "percentiles4": {
        "total": "246",
        "ok": "246",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 50938,
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
        "total": "78.366",
        "ok": "78.366",
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
