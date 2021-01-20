var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "8360",
        "ok": "8355",
        "ko": "5"
    },
    "minResponseTime": {
        "total": "100",
        "ok": "100",
        "ko": "101"
    },
    "maxResponseTime": {
        "total": "671",
        "ok": "603",
        "ko": "671"
    },
    "meanResponseTime": {
        "total": "156",
        "ok": "156",
        "ko": "430"
    },
    "standardDeviation": {
        "total": "53",
        "ok": "52",
        "ko": "229"
    },
    "percentiles1": {
        "total": "163",
        "ok": "161",
        "ko": "576"
    },
    "percentiles2": {
        "total": "208",
        "ok": "208",
        "ko": "591"
    },
    "percentiles3": {
        "total": "212",
        "ok": "212",
        "ko": "655"
    },
    "percentiles4": {
        "total": "213",
        "ok": "213",
        "ko": "668"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 8355,
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
    "count": 5,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "21.942",
        "ok": "21.929",
        "ko": "0.013"
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
        "total": "4180",
        "ok": "4178",
        "ko": "2"
    },
    "minResponseTime": {
        "total": "101",
        "ok": "201",
        "ko": "101"
    },
    "maxResponseTime": {
        "total": "603",
        "ok": "603",
        "ko": "209"
    },
    "meanResponseTime": {
        "total": "208",
        "ok": "208",
        "ko": "155"
    },
    "standardDeviation": {
        "total": "10",
        "ok": "9",
        "ko": "54"
    },
    "percentiles1": {
        "total": "208",
        "ok": "208",
        "ko": "155"
    },
    "percentiles2": {
        "total": "210",
        "ok": "210",
        "ko": "182"
    },
    "percentiles3": {
        "total": "212",
        "ok": "212",
        "ko": "204"
    },
    "percentiles4": {
        "total": "215",
        "ok": "215",
        "ko": "208"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 4178,
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
    "count": 2,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "10.971",
        "ok": "10.966",
        "ko": "0.005"
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
        "total": "4180",
        "ok": "4177",
        "ko": "3"
    },
    "minResponseTime": {
        "total": "100",
        "ok": "100",
        "ko": "576"
    },
    "maxResponseTime": {
        "total": "671",
        "ok": "136",
        "ko": "671"
    },
    "meanResponseTime": {
        "total": "104",
        "ok": "104",
        "ko": "613"
    },
    "standardDeviation": {
        "total": "14",
        "ok": "2",
        "ko": "42"
    },
    "percentiles1": {
        "total": "104",
        "ok": "104",
        "ko": "591"
    },
    "percentiles2": {
        "total": "105",
        "ok": "105",
        "ko": "631"
    },
    "percentiles3": {
        "total": "106",
        "ok": "106",
        "ko": "663"
    },
    "percentiles4": {
        "total": "108",
        "ok": "108",
        "ko": "669"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 4177,
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
    "count": 3,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "10.971",
        "ok": "10.963",
        "ko": "0.008"
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
