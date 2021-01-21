var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "117390",
        "ok": "86028",
        "ko": "31362"
    },
    "minResponseTime": {
        "total": "77",
        "ok": "77",
        "ko": "85"
    },
    "maxResponseTime": {
        "total": "10083",
        "ok": "10045",
        "ko": "10083"
    },
    "meanResponseTime": {
        "total": "2618",
        "ok": "848",
        "ko": "7473"
    },
    "standardDeviation": {
        "total": "3901",
        "ok": "1829",
        "ko": "3952"
    },
    "percentiles1": {
        "total": "159",
        "ok": "156",
        "ko": "10000"
    },
    "percentiles2": {
        "total": "3364",
        "ok": "227",
        "ko": "10000"
    },
    "percentiles3": {
        "total": "10000",
        "ok": "7232",
        "ko": "10001"
    },
    "percentiles4": {
        "total": "10001",
        "ok": "7541",
        "ko": "10002"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 68175,
    "percentage": 58
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 5752,
    "percentage": 5
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 12101,
    "percentage": 10
},
    "group4": {
    "name": "failed",
    "count": 31362,
    "percentage": 27
},
    "meanNumberOfRequestsPerSecond": {
        "total": "179.495",
        "ok": "131.541",
        "ko": "47.954"
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
        "ok": "43015",
        "ko": "15680"
    },
    "minResponseTime": {
        "total": "154",
        "ok": "154",
        "ko": "10000"
    },
    "maxResponseTime": {
        "total": "10083",
        "ok": "10045",
        "ko": "10083"
    },
    "meanResponseTime": {
        "total": "3841",
        "ok": "1596",
        "ko": "10000"
    },
    "standardDeviation": {
        "total": "4232",
        "ok": "2359",
        "ko": "1"
    },
    "percentiles1": {
        "total": "1184",
        "ok": "162",
        "ko": "10000"
    },
    "percentiles2": {
        "total": "10000",
        "ok": "1623",
        "ko": "10000"
    },
    "percentiles3": {
        "total": "10001",
        "ok": "7391",
        "ko": "10001"
    },
    "percentiles4": {
        "total": "10001",
        "ok": "7663",
        "ko": "10003"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 25162,
    "percentage": 43
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 5752,
    "percentage": 10
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 12101,
    "percentage": 21
},
    "group4": {
    "name": "failed",
    "count": 15680,
    "percentage": 27
},
    "meanNumberOfRequestsPerSecond": {
        "total": "89.748",
        "ok": "65.772",
        "ko": "23.976"
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
        "total": "58695",
        "ok": "43013",
        "ko": "15682"
    },
    "minResponseTime": {
        "total": "77",
        "ok": "77",
        "ko": "85"
    },
    "maxResponseTime": {
        "total": "10027",
        "ok": "793",
        "ko": "10027"
    },
    "meanResponseTime": {
        "total": "1394",
        "ok": "99",
        "ko": "4946"
    },
    "standardDeviation": {
        "total": "3088",
        "ok": "54",
        "ko": "4296"
    },
    "percentiles1": {
        "total": "84",
        "ok": "80",
        "ko": "3214"
    },
    "percentiles2": {
        "total": "192",
        "ok": "88",
        "ko": "10000"
    },
    "percentiles3": {
        "total": "10000",
        "ok": "220",
        "ko": "10001"
    },
    "percentiles4": {
        "total": "10001",
        "ok": "331",
        "ko": "10001"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 43013,
    "percentage": 73
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
    "count": 15682,
    "percentage": 27
},
    "meanNumberOfRequestsPerSecond": {
        "total": "89.748",
        "ok": "65.769",
        "ko": "23.979"
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
