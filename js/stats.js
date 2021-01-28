var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "260819",
        "ok": "260818",
        "ko": "1"
    },
    "minResponseTime": {
        "total": "78",
        "ok": "78",
        "ko": "1141"
    },
    "maxResponseTime": {
        "total": "4379",
        "ok": "4379",
        "ko": "1141"
    },
    "meanResponseTime": {
        "total": "90",
        "ok": "90",
        "ko": "1141"
    },
    "standardDeviation": {
        "total": "106",
        "ok": "106",
        "ko": "0"
    },
    "percentiles1": {
        "total": "83",
        "ok": "83",
        "ko": "1141"
    },
    "percentiles2": {
        "total": "84",
        "ok": "84",
        "ko": "1141"
    },
    "percentiles3": {
        "total": "86",
        "ok": "86",
        "ko": "1141"
    },
    "percentiles4": {
        "total": "93",
        "ok": "93",
        "ko": "1141"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 259770,
    "percentage": 100
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 676,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 372,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 1,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "273.395",
        "ok": "273.394",
        "ko": "0.001"
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
        "total": "130410",
        "ok": "130409",
        "ko": "1"
    },
    "minResponseTime": {
        "total": "80",
        "ok": "80",
        "ko": "1141"
    },
    "maxResponseTime": {
        "total": "4379",
        "ok": "4379",
        "ko": "1141"
    },
    "meanResponseTime": {
        "total": "97",
        "ok": "97",
        "ko": "1141"
    },
    "standardDeviation": {
        "total": "148",
        "ok": "148",
        "ko": "0"
    },
    "percentiles1": {
        "total": "84",
        "ok": "84",
        "ko": "1141"
    },
    "percentiles2": {
        "total": "85",
        "ok": "85",
        "ko": "1141"
    },
    "percentiles3": {
        "total": "87",
        "ok": "87",
        "ko": "1141"
    },
    "percentiles4": {
        "total": "113",
        "ok": "112",
        "ko": "1141"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 129361,
    "percentage": 99
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 676,
    "percentage": 1
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 372,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 1,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "136.698",
        "ok": "136.697",
        "ko": "0.001"
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
        "total": "130409",
        "ok": "130409",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "78",
        "ok": "78",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "415",
        "ok": "415",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "83",
        "ok": "83",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "20",
        "ok": "20",
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
        "total": "83",
        "ok": "83",
        "ko": "-"
    },
    "percentiles4": {
        "total": "88",
        "ok": "88",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 130409,
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
        "total": "136.697",
        "ok": "136.697",
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
