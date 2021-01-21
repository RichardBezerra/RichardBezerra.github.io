var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "117390",
        "ok": "83108",
        "ko": "34282"
    },
    "minResponseTime": {
        "total": "75",
        "ok": "75",
        "ko": "152"
    },
    "maxResponseTime": {
        "total": "60001",
        "ok": "10052",
        "ko": "60001"
    },
    "meanResponseTime": {
        "total": "2804",
        "ok": "908",
        "ko": "7398"
    },
    "standardDeviation": {
        "total": "3993",
        "ok": "1894",
        "ko": "4011"
    },
    "percentiles1": {
        "total": "157",
        "ok": "155",
        "ko": "10000"
    },
    "percentiles2": {
        "total": "7166",
        "ok": "249",
        "ko": "10000"
    },
    "percentiles3": {
        "total": "10000",
        "ok": "7233",
        "ko": "10001"
    },
    "percentiles4": {
        "total": "10001",
        "ok": "7446",
        "ko": "10001"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 64325,
    "percentage": 55
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 6461,
    "percentage": 6
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 12322,
    "percentage": 10
},
    "group4": {
    "name": "failed",
    "count": 34282,
    "percentage": 29
},
    "meanNumberOfRequestsPerSecond": {
        "total": "177.326",
        "ok": "125.541",
        "ko": "51.785"
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
        "ok": "41554",
        "ko": "17141"
    },
    "minResponseTime": {
        "total": "152",
        "ok": "152",
        "ko": "10000"
    },
    "maxResponseTime": {
        "total": "60001",
        "ok": "10052",
        "ko": "60001"
    },
    "meanResponseTime": {
        "total": "4144",
        "ok": "1727",
        "ko": "10003"
    },
    "standardDeviation": {
        "total": "4282",
        "ok": "2416",
        "ko": "382"
    },
    "percentiles1": {
        "total": "1230",
        "ok": "162",
        "ko": "10000"
    },
    "percentiles2": {
        "total": "10000",
        "ok": "3182",
        "ko": "10000"
    },
    "percentiles3": {
        "total": "10001",
        "ok": "7344",
        "ko": "10001"
    },
    "percentiles4": {
        "total": "10001",
        "ok": "7539",
        "ko": "10001"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 22771,
    "percentage": 39
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 6461,
    "percentage": 11
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 12322,
    "percentage": 21
},
    "group4": {
    "name": "failed",
    "count": 17141,
    "percentage": 29
},
    "meanNumberOfRequestsPerSecond": {
        "total": "88.663",
        "ok": "62.77",
        "ko": "25.893"
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
        "ok": "41554",
        "ko": "17141"
    },
    "minResponseTime": {
        "total": "75",
        "ok": "75",
        "ko": "152"
    },
    "maxResponseTime": {
        "total": "10023",
        "ok": "622",
        "ko": "10023"
    },
    "meanResponseTime": {
        "total": "1463",
        "ok": "90",
        "ko": "4794"
    },
    "standardDeviation": {
        "total": "3157",
        "ok": "41",
        "ko": "4296"
    },
    "percentiles1": {
        "total": "78",
        "ok": "78",
        "ko": "3196"
    },
    "percentiles2": {
        "total": "186",
        "ok": "79",
        "ko": "10000"
    },
    "percentiles3": {
        "total": "10000",
        "ok": "179",
        "ko": "10001"
    },
    "percentiles4": {
        "total": "10001",
        "ok": "268",
        "ko": "10001"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 41554,
    "percentage": 71
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
    "count": 17141,
    "percentage": 29
},
    "meanNumberOfRequestsPerSecond": {
        "total": "88.663",
        "ok": "62.77",
        "ko": "25.893"
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
