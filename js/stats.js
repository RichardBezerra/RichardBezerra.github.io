var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "76760",
        "ok": "32184",
        "ko": "44576"
    },
    "minResponseTime": {
        "total": "100",
        "ok": "100",
        "ko": "201"
    },
    "maxResponseTime": {
        "total": "10029",
        "ok": "7961",
        "ko": "10029"
    },
    "meanResponseTime": {
        "total": "5350",
        "ok": "1016",
        "ko": "8479"
    },
    "standardDeviation": {
        "total": "4618",
        "ok": "1882",
        "ko": "3289"
    },
    "percentiles1": {
        "total": "7302",
        "ok": "202",
        "ko": "10000"
    },
    "percentiles2": {
        "total": "10000",
        "ok": "1218",
        "ko": "10000"
    },
    "percentiles3": {
        "total": "10001",
        "ok": "7287",
        "ko": "10001"
    },
    "percentiles4": {
        "total": "10001",
        "ok": "7493",
        "ko": "10001"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 23272,
    "percentage": 30
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 8912,
    "percentage": 12
},
    "group4": {
    "name": "failed",
    "count": 44576,
    "percentage": 58
},
    "meanNumberOfRequestsPerSecond": {
        "total": "194.329",
        "ok": "81.478",
        "ko": "112.851"
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
        "ok": "16092",
        "ko": "22288"
    },
    "minResponseTime": {
        "total": "200",
        "ok": "200",
        "ko": "10000"
    },
    "maxResponseTime": {
        "total": "10027",
        "ok": "7961",
        "ko": "10027"
    },
    "meanResponseTime": {
        "total": "6612",
        "ok": "1919",
        "ko": "10000"
    },
    "standardDeviation": {
        "total": "4265",
        "ok": "2336",
        "ko": "1"
    },
    "percentiles1": {
        "total": "10000",
        "ok": "1218",
        "ko": "10000"
    },
    "percentiles2": {
        "total": "10000",
        "ok": "3240",
        "ko": "10000"
    },
    "percentiles3": {
        "total": "10001",
        "ok": "7402",
        "ko": "10001"
    },
    "percentiles4": {
        "total": "10001",
        "ok": "7535",
        "ko": "10001"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 7180,
    "percentage": 19
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 8912,
    "percentage": 23
},
    "group4": {
    "name": "failed",
    "count": 22288,
    "percentage": 58
},
    "meanNumberOfRequestsPerSecond": {
        "total": "97.165",
        "ok": "40.739",
        "ko": "56.425"
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
        "ok": "16092",
        "ko": "22288"
    },
    "minResponseTime": {
        "total": "100",
        "ok": "100",
        "ko": "201"
    },
    "maxResponseTime": {
        "total": "10029",
        "ok": "479",
        "ko": "10029"
    },
    "meanResponseTime": {
        "total": "4088",
        "ok": "114",
        "ko": "6958"
    },
    "standardDeviation": {
        "total": "4613",
        "ok": "28",
        "ko": "4124"
    },
    "percentiles1": {
        "total": "337",
        "ok": "105",
        "ko": "10000"
    },
    "percentiles2": {
        "total": "10000",
        "ok": "108",
        "ko": "10000"
    },
    "percentiles3": {
        "total": "10001",
        "ok": "166",
        "ko": "10001"
    },
    "percentiles4": {
        "total": "10001",
        "ok": "249",
        "ko": "10001"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 16092,
    "percentage": 42
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
    "count": 22288,
    "percentage": 58
},
    "meanNumberOfRequestsPerSecond": {
        "total": "97.165",
        "ok": "40.739",
        "ko": "56.425"
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
