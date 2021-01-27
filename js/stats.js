var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "153789",
        "ok": "129293",
        "ko": "24496"
    },
    "minResponseTime": {
        "total": "3",
        "ok": "78",
        "ko": "3"
    },
    "maxResponseTime": {
        "total": "10001",
        "ok": "7396",
        "ko": "10001"
    },
    "meanResponseTime": {
        "total": "120",
        "ok": "123",
        "ko": "102"
    },
    "standardDeviation": {
        "total": "368",
        "ok": "261",
        "ko": "699"
    },
    "percentiles1": {
        "total": "83",
        "ok": "84",
        "ko": "78"
    },
    "percentiles2": {
        "total": "100",
        "ok": "101",
        "ko": "82"
    },
    "percentiles3": {
        "total": "117",
        "ok": "118",
        "ko": "114"
    },
    "percentiles4": {
        "total": "1117",
        "ok": "1126",
        "ko": "117"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 126771,
    "percentage": 82
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 1591,
    "percentage": 1
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 931,
    "percentage": 1
},
    "group4": {
    "name": "failed",
    "count": 24496,
    "percentage": 16
},
    "meanNumberOfRequestsPerSecond": {
        "total": "233.367",
        "ok": "196.196",
        "ko": "37.171"
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
        "ok": "64779",
        "ko": "24231"
    },
    "minResponseTime": {
        "total": "3",
        "ok": "79",
        "ko": "3"
    },
    "maxResponseTime": {
        "total": "10001",
        "ok": "7396",
        "ko": "10001"
    },
    "meanResponseTime": {
        "total": "143",
        "ok": "158",
        "ko": "102"
    },
    "standardDeviation": {
        "total": "482",
        "ok": "365",
        "ko": "702"
    },
    "percentiles1": {
        "total": "84",
        "ok": "85",
        "ko": "78"
    },
    "percentiles2": {
        "total": "109",
        "ok": "111",
        "ko": "82"
    },
    "percentiles3": {
        "total": "119",
        "ok": "123",
        "ko": "114"
    },
    "percentiles4": {
        "total": "2112",
        "ok": "2231",
        "ko": "117"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 62257,
    "percentage": 70
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 1591,
    "percentage": 2
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 931,
    "percentage": 1
},
    "group4": {
    "name": "failed",
    "count": 24231,
    "percentage": 27
},
    "meanNumberOfRequestsPerSecond": {
        "total": "135.068",
        "ok": "98.299",
        "ko": "36.769"
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
        "total": "64779",
        "ok": "64514",
        "ko": "265"
    },
    "minResponseTime": {
        "total": "77",
        "ok": "78",
        "ko": "77"
    },
    "maxResponseTime": {
        "total": "435",
        "ok": "435",
        "ko": "383"
    },
    "meanResponseTime": {
        "total": "89",
        "ok": "89",
        "ko": "93"
    },
    "standardDeviation": {
        "total": "21",
        "ok": "21",
        "ko": "45"
    },
    "percentiles1": {
        "total": "82",
        "ok": "82",
        "ko": "80"
    },
    "percentiles2": {
        "total": "98",
        "ok": "98",
        "ko": "97"
    },
    "percentiles3": {
        "total": "103",
        "ok": "103",
        "ko": "101"
    },
    "percentiles4": {
        "total": "108",
        "ok": "108",
        "ko": "380"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 64514,
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
    "count": 265,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "98.299",
        "ok": "97.897",
        "ko": "0.402"
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
