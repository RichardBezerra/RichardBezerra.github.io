var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "900",
        "ok": "900",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "94",
        "ok": "94",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "801",
        "ok": "801",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "151",
        "ok": "151",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "97",
        "ok": "97",
        "ko": "-"
    },
    "percentiles1": {
        "total": "143",
        "ok": "143",
        "ko": "-"
    },
    "percentiles2": {
        "total": "149",
        "ok": "149",
        "ko": "-"
    },
    "percentiles3": {
        "total": "158",
        "ok": "158",
        "ko": "-"
    },
    "percentiles4": {
        "total": "645",
        "ok": "645",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 899,
    "percentage": 100
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 1,
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
        "total": "28.125",
        "ok": "28.125",
        "ko": "-"
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
        "total": "450",
        "ok": "450",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "105",
        "ok": "105",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "801",
        "ok": "801",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "150",
        "ok": "150",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "88",
        "ok": "88",
        "ko": "-"
    },
    "percentiles1": {
        "total": "148",
        "ok": "148",
        "ko": "-"
    },
    "percentiles2": {
        "total": "152",
        "ok": "152",
        "ko": "-"
    },
    "percentiles3": {
        "total": "158",
        "ok": "158",
        "ko": "-"
    },
    "percentiles4": {
        "total": "784",
        "ok": "784",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 449,
    "percentage": 100
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 1,
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
        "total": "14.062",
        "ok": "14.062",
        "ko": "-"
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
        "total": "450",
        "ok": "450",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "94",
        "ok": "94",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "650",
        "ok": "650",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "152",
        "ok": "152",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "106",
        "ok": "106",
        "ko": "-"
    },
    "percentiles1": {
        "total": "141",
        "ok": "141",
        "ko": "-"
    },
    "percentiles2": {
        "total": "145",
        "ok": "145",
        "ko": "-"
    },
    "percentiles3": {
        "total": "153",
        "ok": "153",
        "ko": "-"
    },
    "percentiles4": {
        "total": "640",
        "ok": "640",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 450,
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
        "total": "14.062",
        "ok": "14.062",
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
