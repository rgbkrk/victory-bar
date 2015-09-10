// [["a", "b", "c"],{label:"foo",data:[1,2,3]},{label:"bar",data:[4,5,6]}]

var populations = [
    {
        label: "AL",
        "Under 5 Years": "310504",
        "5 to 13 Years": "552339",
        "14 to 17 Years": "259034",
        "18 to 24 Years": "450818",
        "25 to 44 Years": "1231572",
        "45 to 64 Years": "1215966",
        "65 Years and Over": "641667"
    },
    {
        label: "AK",
        "Under 5 Years": "52083",
        "5 to 13 Years": "85640",
        "14 to 17 Years": "42153",
        "18 to 24 Years": "74257",
        "25 to 44 Years": "198724",
        "45 to 64 Years": "183159",
        "65 Years and Over": "50277"
    },
    {
        label: "AZ",
        "Under 5 Years": "515910",
        "5 to 13 Years": "828669",
        "14 to 17 Years": "362642",
        "18 to 24 Years": "601943",
        "25 to 44 Years": "1804762",
        "45 to 64 Years": "1523681",
        "65 Years and Over": "862573"
    },
    {
        label: "AR",
        "Under 5 Years": "202070",
        "5 to 13 Years": "343207",
        "14 to 17 Years": "157204",
        "18 to 24 Years": "264160",
        "25 to 44 Years": "754420",
        "45 to 64 Years": "727124",
        "65 Years and Over": "407205"
    },
    {
        label: "CA",
        "Under 5 Years": "2704659",
        "5 to 13 Years": "4499890",
        "14 to 17 Years": "2159981",
        "18 to 24 Years": "3853788",
        "25 to 44 Years": "10604510",
        "45 to 64 Years": "8819342",
        "65 Years and Over": "4114496"
    },
    {
        label: "CO",
        "Under 5 Years": "358280",
        "5 to 13 Years": "587154",
        "14 to 17 Years": "261701",
        "18 to 24 Years": "466194",
        "25 to 44 Years": "1464939",
        "45 to 64 Years": "1290094",
        "65 Years and Over": "511094"
    },
    {
        label: "CT",
        "Under 5 Years": "211637",
        "5 to 13 Years": "403658",
        "14 to 17 Years": "196918",
        "18 to 24 Years": "325110",
        "25 to 44 Years": "916955",
        "45 to 64 Years": "968967",
        "65 Years and Over": "478007"
    },
    {
        label: "DE",
        "Under 5 Years": "59319",
        "5 to 13 Years": "99496",
        "14 to 17 Years": "47414",
        "18 to 24 Years": "84464",
        "25 to 44 Years": "230183",
        "45 to 64 Years": "230528",
        "65 Years and Over": "121688"
    },
    {
        label: "DC",
        "Under 5 Years": "36352",
        "5 to 13 Years": "50439",
        "14 to 17 Years": "25225",
        "18 to 24 Years": "75569",
        "25 to 44 Years": "193557",
        "45 to 64 Years": "140043",
        "65 Years and Over": "70648"
    },
    {
        label: "FL",
        "Under 5 Years": "1140516",
        "5 to 13 Years": "1938695",
        "14 to 17 Years": "925060",
        "18 to 24 Years": "1607297",
        "25 to 44 Years": "4782119",
        "45 to 64 Years": "4746856",
        "65 Years and Over": "3187797"
    },
    {
        label: "GA",
        "Under 5 Years": "740521",
        "5 to 13 Years": "1250460",
        "14 to 17 Years": "557860",
        "18 to 24 Years": "919876",
        "25 to 44 Years": "2846985",
        "45 to 64 Years": "2389018",
        "65 Years and Over": "981024"
    },
    {
        label: "HI",
        "Under 5 Years": "87207",
        "5 to 13 Years": "134025",
        "14 to 17 Years": "64011",
        "18 to 24 Years": "124834",
        "25 to 44 Years": "356237",
        "45 to 64 Years": "331817",
        "65 Years and Over": "190067"
    },
    {
        label: "ID",
        "Under 5 Years": "121746",
        "5 to 13 Years": "201192",
        "14 to 17 Years": "89702",
        "18 to 24 Years": "147606",
        "25 to 44 Years": "406247",
        "45 to 64 Years": "375173",
        "65 Years and Over": "182150"
    },
    {
        label: "IL",
        "Under 5 Years": "894368",
        "5 to 13 Years": "1558919",
        "14 to 17 Years": "725973",
        "18 to 24 Years": "1311479",
        "25 to 44 Years": "3596343",
        "45 to 64 Years": "3239173",
        "65 Years and Over": "1575308"
    },
    {
        label: "IN",
        "Under 5 Years": "443089",
        "5 to 13 Years": "780199",
        "14 to 17 Years": "361393",
        "18 to 24 Years": "605863",
        "25 to 44 Years": "1724528",
        "45 to 64 Years": "1647881",
        "65 Years and Over": "813839"
    },
    {
        label: "IA",
        "Under 5 Years": "201321",
        "5 to 13 Years": "345409",
        "14 to 17 Years": "165883",
        "18 to 24 Years": "306398",
        "25 to 44 Years": "750505",
        "45 to 64 Years": "788485",
        "65 Years and Over": "444554"
    },
    {
        label: "KS",
        "Under 5 Years": "202529",
        "5 to 13 Years": "342134",
        "14 to 17 Years": "155822",
        "18 to 24 Years": "293114",
        "25 to 44 Years": "728166",
        "45 to 64 Years": "713663",
        "65 Years and Over": "366706"
    },
    {
        label: "KY",
        "Under 5 Years": "284601",
        "5 to 13 Years": "493536",
        "14 to 17 Years": "229927",
        "18 to 24 Years": "381394",
        "25 to 44 Years": "1179637",
        "45 to 64 Years": "1134283",
        "65 Years and Over": "565867"
    },
    {
        label: "LA",
        "Under 5 Years": "310716",
        "5 to 13 Years": "542341",
        "14 to 17 Years": "254916",
        "18 to 24 Years": "471275",
        "25 to 44 Years": "1162463",
        "45 to 64 Years": "1128771",
        "65 Years and Over": "540314"
    },
    {
        label: "ME",
        "Under 5 Years": "71459",
        "5 to 13 Years": "133656",
        "14 to 17 Years": "69752",
        "18 to 24 Years": "112682",
        "25 to 44 Years": "331809",
        "45 to 64 Years": "397911",
        "65 Years and Over": "199187"
    },
    {
        label: "MD",
        "Under 5 Years": "371787",
        "5 to 13 Years": "651923",
        "14 to 17 Years": "316873",
        "18 to 24 Years": "543470",
        "25 to 44 Years": "1556225",
        "45 to 64 Years": "1513754",
        "65 Years and Over": "679565"
    },
    {
        label: "MA",
        "Under 5 Years": "383568",
        "5 to 13 Years": "701752",
        "14 to 17 Years": "341713",
        "18 to 24 Years": "665879",
        "25 to 44 Years": "1782449",
        "45 to 64 Years": "1751508",
        "65 Years and Over": "871098"
    },
    {
        label: "MI",
        "Under 5 Years": "625526",
        "5 to 13 Years": "1179503",
        "14 to 17 Years": "585169",
        "18 to 24 Years": "974480",
        "25 to 44 Years": "2628322",
        "45 to 64 Years": "2706100",
        "65 Years and Over": "1304322"
    },
    {
        label: "MN",
        "Under 5 Years": "358471",
        "5 to 13 Years": "606802",
        "14 to 17 Years": "289371",
        "18 to 24 Years": "507289",
        "25 to 44 Years": "1416063",
        "45 to 64 Years": "1391878",
        "65 Years and Over": "650519"
    },
    {
        label: "MS",
        "Under 5 Years": "220813",
        "5 to 13 Years": "371502",
        "14 to 17 Years": "174405",
        "18 to 24 Years": "305964",
        "25 to 44 Years": "764203",
        "45 to 64 Years": "730133",
        "65 Years and Over": "371598"
    },
    {
        label: "MO",
        "Under 5 Years": "399450",
        "5 to 13 Years": "690476",
        "14 to 17 Years": "331543",
        "18 to 24 Years": "560463",
        "25 to 44 Years": "1569626",
        "45 to 64 Years": "1554812",
        "65 Years and Over": "805235"
    },
    {
        label: "MT",
        "Under 5 Years": "61114",
        "5 to 13 Years": "106088",
        "14 to 17 Years": "53156",
        "18 to 24 Years": "95232",
        "25 to 44 Years": "236297",
        "45 to 64 Years": "278241",
        "65 Years and Over": "137312"
    },
    {
        label: "NE",
        "Under 5 Years": "132092",
        "5 to 13 Years": "215265",
        "14 to 17 Years": "99638",
        "18 to 24 Years": "186657",
        "25 to 44 Years": "457177",
        "45 to 64 Years": "451756",
        "65 Years and Over": "240847"
    },
    {
        label: "NV",
        "Under 5 Years": "199175",
        "5 to 13 Years": "325650",
        "14 to 17 Years": "142976",
        "18 to 24 Years": "212379",
        "25 to 44 Years": "769913",
        "45 to 64 Years": "653357",
        "65 Years and Over": "296717"
    },
    {
        label: "NH",
        "Under 5 Years": "75297",
        "5 to 13 Years": "144235",
        "14 to 17 Years": "73826",
        "18 to 24 Years": "119114",
        "25 to 44 Years": "345109",
        "45 to 64 Years": "388250",
        "65 Years and Over": "169978"
    },
    {
        label: "NJ",
        "Under 5 Years": "557421",
        "5 to 13 Years": "1011656",
        "14 to 17 Years": "478505",
        "18 to 24 Years": "769321",
        "25 to 44 Years": "2379649",
        "45 to 64 Years": "2335168",
        "65 Years and Over": "1150941"
    },
    {
        label: "NM",
        "Under 5 Years": "148323",
        "5 to 13 Years": "241326",
        "14 to 17 Years": "112801",
        "18 to 24 Years": "203097",
        "25 to 44 Years": "517154",
        "45 to 64 Years": "501604",
        "65 Years and Over": "260051"
    },
    {
        label: "NY",
        "Under 5 Years": "1208495",
        "5 to 13 Years": "2141490",
        "14 to 17 Years": "1058031",
        "18 to 24 Years": "1999120",
        "25 to 44 Years": "5355235",
        "45 to 64 Years": "5120254",
        "65 Years and Over": "2607672"
    },
    {
        label: "NC",
        "Under 5 Years": "652823",
        "5 to 13 Years": "1097890",
        "14 to 17 Years": "492964",
        "18 to 24 Years": "883397",
        "25 to 44 Years": "2575603",
        "45 to 64 Years": "2380685",
        "65 Years and Over": "1139052"
    },
    {
        label: "ND",
        "Under 5 Years": "41896",
        "5 to 13 Years": "67358",
        "14 to 17 Years": "33794",
        "18 to 24 Years": "82629",
        "25 to 44 Years": "154913",
        "45 to 64 Years": "166615",
        "65 Years and Over": "94276"
    },
    {
        label: "OH",
        "Under 5 Years": "743750",
        "5 to 13 Years": "1340492",
        "14 to 17 Years": "646135",
        "18 to 24 Years": "1081734",
        "25 to 44 Years": "3019147",
        "45 to 64 Years": "3083815",
        "65 Years and Over": "1570837"
    },
    {
        label: "OK",
        "Under 5 Years": "266547",
        "5 to 13 Years": "438926",
        "14 to 17 Years": "200562",
        "18 to 24 Years": "369916",
        "25 to 44 Years": "957085",
        "45 to 64 Years": "918688",
        "65 Years and Over": "490637"
    },
    {
        label: "OR",
        "Under 5 Years": "243483",
        "5 to 13 Years": "424167",
        "14 to 17 Years": "199925",
        "18 to 24 Years": "338162",
        "25 to 44 Years": "1044056",
        "45 to 64 Years": "1036269",
        "65 Years and Over": "503998"
    },
    {
        label: "PA",
        "Under 5 Years": "737462",
        "5 to 13 Years": "1345341",
        "14 to 17 Years": "679201",
        "18 to 24 Years": "1203944",
        "25 to 44 Years": "3157759",
        "45 to 64 Years": "3414001",
        "65 Years and Over": "1910571"
    },
    {
        label: "RI",
        "Under 5 Years": "60934",
        "5 to 13 Years": "111408",
        "14 to 17 Years": "56198",
        "18 to 24 Years": "114502",
        "25 to 44 Years": "277779",
        "45 to 64 Years": "282321",
        "65 Years and Over": "147646"
    },
    {
        label: "SC",
        "Under 5 Years": "303024",
        "5 to 13 Years": "517803",
        "14 to 17 Years": "245400",
        "18 to 24 Years": "438147",
        "25 to 44 Years": "1193112",
        "45 to 64 Years": "1186019",
        "65 Years and Over": "596295"
    },
    {
        label: "SD",
        "Under 5 Years": "58566",
        "5 to 13 Years": "94438",
        "14 to 17 Years": "45305",
        "18 to 24 Years": "82869",
        "25 to 44 Years": "196738",
        "45 to 64 Years": "210178",
        "65 Years and Over": "116100"
    },
    {
        label: "TN",
        "Under 5 Years": "416334",
        "5 to 13 Years": "725948",
        "14 to 17 Years": "336312",
        "18 to 24 Years": "550612",
        "25 to 44 Years": "1719433",
        "45 to 64 Years": "1646623",
        "65 Years and Over": "819626"
    },
    {
        label: "TX",
        "Under 5 Years": "2027307",
        "5 to 13 Years": "3277946",
        "14 to 17 Years": "1420518",
        "18 to 24 Years": "2454721",
        "25 to 44 Years": "7017731",
        "45 to 64 Years": "5656528",
        "65 Years and Over": "2472223"
    },
    {
        label: "UT",
        "Under 5 Years": "268916",
        "5 to 13 Years": "413034",
        "14 to 17 Years": "167685",
        "18 to 24 Years": "329585",
        "25 to 44 Years": "772024",
        "45 to 64 Years": "538978",
        "65 Years and Over": "246202"
    },
    {
        label: "VT",
        "Under 5 Years": "32635",
        "5 to 13 Years": "62538",
        "14 to 17 Years": "33757",
        "18 to 24 Years": "61679",
        "25 to 44 Years": "155419",
        "45 to 64 Years": "188593",
        "65 Years and Over": "86649"
    },
    {
        label: "VA",
        "Under 5 Years": "522672",
        "5 to 13 Years": "887525",
        "14 to 17 Years": "413004",
        "18 to 24 Years": "768475",
        "25 to 44 Years": "2203286",
        "45 to 64 Years": "2033550",
        "65 Years and Over": "940577"
    },
    {
        label: "WA",
        "Under 5 Years": "433119",
        "5 to 13 Years": "750274",
        "14 to 17 Years": "357782",
        "18 to 24 Years": "610378",
        "25 to 44 Years": "1850983",
        "45 to 64 Years": "1762811",
        "65 Years and Over": "783877"
    },
    {
        label: "WV",
        "Under 5 Years": "105435",
        "5 to 13 Years": "189649",
        "14 to 17 Years": "91074",
        "18 to 24 Years": "157989",
        "25 to 44 Years": "470749",
        "45 to 64 Years": "514505",
        "65 Years and Over": "285067"
    },
    {
        label: "WI",
        "Under 5 Years": "362277",
        "5 to 13 Years": "640286",
        "14 to 17 Years": "311849",
        "18 to 24 Years": "553914",
        "25 to 44 Years": "1487457",
        "45 to 64 Years": "1522038",
        "65 Years and Over": "750146"
    },
    {
        label: "WY",
        "Under 5 Years": "38253",
        "5 to 13 Years": "60890",
        "14 to 17 Years": "29314",
        "18 to 24 Years": "53980",
        "25 to 44 Years": "137338",
        "45 to 64 Years": "147279",
        "65 Years and Over": "65614"
    }
]

module.exports = populations;