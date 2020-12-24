import { Component, OnInit } from '@angular/core';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4maps from "@amcharts/amcharts4/maps";
import * as am4charts from "@amcharts/amcharts4/charts"
import am4geodata_worldLow from "@amcharts/amcharts4-geodata/worldLow";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

am4core.useTheme(am4themes_animated);

interface Year {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  constructor() { }
  icon = "pause";
  changeIcon(){
    if(this.icon == "pause")
      this.icon = "play_arrow";
    else
      this.icon = "pause";
  }
  selectedValue: any = "2019";
  years: Year[] = [{ value: '2015', viewValue: '2015' }, { value: '2016', viewValue: '2016' }, { value: '2017', viewValue: '2017' },
  { value: '2018', viewValue: '2018' }, { value: '2019', viewValue: '2019' }];

  imageSeries: any;
  title: any;
  i = 0;
  mapData = [[
    {
      "id": "AF",
      "Country": "Afghanistan",
      "Happiness Rank": 153,
      "Happiness Score": 3.575
    },
    {
      "id": "AL",
      "Country": "Albania",
      "Happiness Rank": 95,
      "Happiness Score": 4.959
    },
    {
      "id": "DZ",
      "Country": "Algeria",
      "Happiness Rank": 68,
      "Happiness Score": 5.605
    },
    {
      "id": "AR",
      "Country": "Argentina",
      "Happiness Rank": 30,
      "Happiness Score": 6.574
    },
    {
      "id": "AM",
      "Country": "Armenia",
      "Happiness Rank": 127,
      "Happiness Score": 4.35
    },
    {
      "id": "AU",
      "Country": "Australia",
      "Happiness Rank": 10,
      "Happiness Score": 7.284
    },
    {
      "id": "AT",
      "Country": "Austria",
      "Happiness Rank": 13,
      "Happiness Score": 7.2
    },
    {
      "id": "AZ",
      "Country": "Azerbaijan",
      "Happiness Rank": 80,
      "Happiness Score": 5.212
    },
    {
      "id": "BH",
      "Country": "Bahrain",
      "Happiness Rank": 49,
      "Happiness Score": 5.96
    },
    {
      "id": "BD",
      "Country": "Bangladesh",
      "Happiness Rank": 109,
      "Happiness Score": 4.694
    },
    {
      "id": "BY",
      "Country": "Belarus",
      "Happiness Rank": 59,
      "Happiness Score": 5.813
    },
    {
      "id": "BE",
      "Country": "Belgium",
      "Happiness Rank": 19,
      "Happiness Score": 6.937
    },
    {
      "id": "BJ",
      "Country": "Benin",
      "Happiness Rank": 155,
      "Happiness Score": 3.34
    },
    {
      "id": "BT",
      "Country": "Bhutan",
      "Happiness Rank": 79,
      "Happiness Score": 5.253
    },
    {
      "id": "BO",
      "Country": "Bolivia",
      "Happiness Rank": 51,
      "Happiness Score": 5.89
    },
    {
      "id": "BA",
      "Country": "Bosnia and Herzegovina",
      "Happiness Rank": 96,
      "Happiness Score": 4.949
    },
    {
      "id": "BW",
      "Country": "Botswana",
      "Happiness Rank": 128,
      "Happiness Score": 4.332
    },
    {
      "id": "BR",
      "Country": "Brazil",
      "Happiness Rank": 16,
      "Happiness Score": 6.983
    },
    {
      "id": "BG",
      "Country": "Bulgaria",
      "Happiness Rank": 134,
      "Happiness Score": 4.218
    },
    {
      "id": "BF",
      "Country": "Burkina Faso",
      "Happiness Rank": 152,
      "Happiness Score": 3.587
    },
    {
      "id": "BI",
      "Country": "Burundi",
      "Happiness Rank": 157,
      "Happiness Score": 2.905
    },
    {
      "id": "KH",
      "Country": "Cambodia",
      "Happiness Rank": 145,
      "Happiness Score": 3.819
    },
    {
      "id": "CM",
      "Country": "Cameroon",
      "Happiness Rank": 133,
      "Happiness Score": 4.252
    },
    {
      "id": "CA",
      "Country": "Canada",
      "Happiness Rank": 5,
      "Happiness Score": 7.427
    },
    {
      "id": "TD",
      "Country": "Chad",
      "Happiness Rank": 149,
      "Happiness Score": 3.667
    },
    {
      "id": "CL",
      "Country": "Chile",
      "Happiness Rank": 27,
      "Happiness Score": 6.67
    },
    {
      "id": "CN",
      "Country": "China",
      "Happiness Rank": 84,
      "Happiness Score": 5.14
    },
    {
      "id": "CO",
      "Country": "Colombia",
      "Happiness Rank": 33,
      "Happiness Score": 6.477
    },
    {
      "id": "CD",
      "Country": "Congo (Brazzaville)",
      "Happiness Rank": 139,
      "Happiness Score": 3.989
    },
    {
      "id": "CG",
      "Country": "Congo (Kinshasa)",
      "Happiness Rank": 120,
      "Happiness Score": 4.517
    },
    {
      "id": "CR",
      "Country": "Costa Rica",
      "Happiness Rank": 12,
      "Happiness Score": 7.226
    },
    {
      "id": "HR",
      "Country": "Croatia",
      "Happiness Rank": 62,
      "Happiness Score": 5.759
    },
    {
      "id": "CY",
      "Country": "Cyprus",
      "Happiness Rank": 67,
      "Happiness Score": 5.689
    },
    {
      "id": "CZ",
      "Country": "Czech Republic",
      "Happiness Rank": 31,
      "Happiness Score": 6.505
    },
    {
      "id": "DK",
      "Country": "Denmark",
      "Happiness Rank": 3,
      "Happiness Score": 7.527
    },
    {
      "id": "DO",
      "Country": "Dominican Republic",
      "Happiness Rank": 98,
      "Happiness Score": 4.885
    },
    {
      "id": "EC",
      "Country": "Ecuador",
      "Happiness Rank": 48,
      "Happiness Score": 5.975
    },
    {
      "id": "EG",
      "Country": "Egypt",
      "Happiness Rank": 135,
      "Happiness Score": 4.194
    },
    {
      "id": "SV",
      "Country": "El Salvador",
      "Happiness Rank": 42,
      "Happiness Score": 6.13
    },
    {
      "id": "EE",
      "Country": "Estonia",
      "Happiness Rank": 73,
      "Happiness Score": 5.429
    },
    {
      "id": "ET",
      "Country": "Ethiopia",
      "Happiness Rank": 122,
      "Happiness Score": 4.512
    },
    {
      "id": "FI",
      "Country": "Finland",
      "Happiness Rank": 6,
      "Happiness Score": 7.406
    },
    {
      "id": "FR",
      "Country": "France",
      "Happiness Rank": 29,
      "Happiness Score": 6.575
    },
    {
      "id": "GA",
      "Country": "Gabon",
      "Happiness Rank": 143,
      "Happiness Score": 3.896
    },
    {
      "id": "GE",
      "Country": "Georgia",
      "Happiness Rank": 130,
      "Happiness Score": 4.297
    },
    {
      "id": "DE",
      "Country": "Germany",
      "Happiness Rank": 26,
      "Happiness Score": 6.75
    },
    {
      "id": "GH",
      "Country": "Ghana",
      "Happiness Rank": 114,
      "Happiness Score": 4.633
    },
    {
      "id": "GR",
      "Country": "Greece",
      "Happiness Rank": 102,
      "Happiness Score": 4.857
    },
    {
      "id": "GT",
      "Country": "Guatemala",
      "Happiness Rank": 43,
      "Happiness Score": 6.123
    },
    {
      "id": "GN",
      "Country": "Guinea",
      "Happiness Rank": 150,
      "Happiness Score": 3.656
    },
    {
      "id": "HT",
      "Country": "Haiti",
      "Happiness Rank": 119,
      "Happiness Score": 4.518
    },
    {
      "id": "HN",
      "Country": "Honduras",
      "Happiness Rank": 105,
      "Happiness Score": 4.788
    },
    {
      "id": "HK",
      "Country": "Hong Kong",
      "Happiness Rank": 72,
      "Happiness Score": 5.474
    },
    {
      "id": "HU",
      "Country": "Hungary",
      "Happiness Rank": 104,
      "Happiness Score": 4.8
    },
    {
      "id": "IS",
      "Country": "Iceland",
      "Happiness Rank": 2,
      "Happiness Score": 7.561
    },
    {
      "id": "IN",
      "Country": "India",
      "Happiness Rank": 117,
      "Happiness Score": 4.565
    },
    {
      "id": "ID",
      "Country": "Indonesia",
      "Happiness Rank": 74,
      "Happiness Score": 5.399
    },
    {
      "id": "IR",
      "Country": "Iran",
      "Happiness Rank": 110,
      "Happiness Score": 4.686
    },
    {
      "id": "IQ",
      "Country": "Iraq",
      "Happiness Rank": 112,
      "Happiness Score": 4.677
    },
    {
      "id": "IE",
      "Country": "Ireland",
      "Happiness Rank": 18,
      "Happiness Score": 6.94
    },
    {
      "id": "IL",
      "Country": "Israel",
      "Happiness Rank": 11,
      "Happiness Score": 7.278
    },
    {
      "id": "IT",
      "Country": "Italy",
      "Happiness Rank": 50,
      "Happiness Score": 5.948
    },
    {
      "id": "CI",
      "Country": "Ivory Coast",
      "Happiness Rank": 151,
      "Happiness Score": 3.655
    },
    {
      "id": "JM",
      "Country": "Jamaica",
      "Happiness Rank": 65,
      "Happiness Score": 5.709
    },
    {
      "id": "JP",
      "Country": "Japan",
      "Happiness Rank": 46,
      "Happiness Score": 5.987
    },
    {
      "id": "JO",
      "Country": "Jordan",
      "Happiness Rank": 82,
      "Happiness Score": 5.192
    },
    {
      "id": "KZ",
      "Country": "Kazakhstan",
      "Happiness Rank": 54,
      "Happiness Score": 5.855
    },
    {
      "id": "KE",
      "Country": "Kenya",
      "Happiness Rank": 125,
      "Happiness Score": 4.419
    },
    {
      "id": "XK",
      "Country": "Kosovo",
      "Happiness Rank": 69,
      "Happiness Score": 5.589
    },
    {
      "id": "KW",
      "Country": "Kuwait",
      "Happiness Rank": 39,
      "Happiness Score": 6.295
    },
    {
      "id": "KG",
      "Country": "Kyrgyzstan",
      "Happiness Rank": 77,
      "Happiness Score": 5.286
    },
    {
      "id": "LV",
      "Country": "Latvia",
      "Happiness Rank": 89,
      "Happiness Score": 5.098
    },
    {
      "id": "LB",
      "Country": "Lebanon",
      "Happiness Rank": 103,
      "Happiness Score": 4.839
    },
    {
      "id": "LR",
      "Country": "Liberia",
      "Happiness Rank": 116,
      "Happiness Score": 4.571
    },
    {
      "id": "LY",
      "Country": "Libya",
      "Happiness Rank": 63,
      "Happiness Score": 5.754
    },
    {
      "id": "LT",
      "Country": "Lithuania",
      "Happiness Rank": 56,
      "Happiness Score": 5.833
    },
    {
      "id": "LU",
      "Country": "Luxembourg",
      "Happiness Rank": 17,
      "Happiness Score": 6.946
    },
    {
      "id": "MG",
      "Country": "Madagascar",
      "Happiness Rank": 147,
      "Happiness Score": 3.681
    },
    {
      "id": "MW",
      "Country": "Malawi",
      "Happiness Rank": 131,
      "Happiness Score": 4.292
    },
    {
      "id": "MY",
      "Country": "Malaysia",
      "Happiness Rank": 61,
      "Happiness Score": 5.77
    },
    {
      "id": "ML",
      "Country": "Mali",
      "Happiness Rank": 138,
      "Happiness Score": 3.995
    },
    {
      "id": "MT",
      "Country": "Malta",
      "Happiness Rank": 37,
      "Happiness Score": 6.302
    },
    {
      "id": "MR",
      "Country": "Mauritania",
      "Happiness Rank": 124,
      "Happiness Score": 4.436
    },
    {
      "id": "MU",
      "Country": "Mauritius",
      "Happiness Rank": 71,
      "Happiness Score": 5.477
    },
    {
      "id": "MX",
      "Country": "Mexico",
      "Happiness Rank": 14,
      "Happiness Score": 7.187
    },
    {
      "id": "MD",
      "Country": "Moldova",
      "Happiness Rank": 52,
      "Happiness Score": 5.889
    },
    {
      "id": "MN",
      "Country": "Mongolia",
      "Happiness Rank": 100,
      "Happiness Score": 4.874
    },
    {
      "id": "ME",
      "Country": "Montenegro",
      "Happiness Rank": 82,
      "Happiness Score": 5.192
    },
    {
      "id": "MA",
      "Country": "Morocco",
      "Happiness Rank": 92,
      "Happiness Score": 5.013
    },
    {
      "id": "MM",
      "Country": "Myanmar",
      "Happiness Rank": 129,
      "Happiness Score": 4.307
    },
    {
      "id": "NP",
      "Country": "Nepal",
      "Happiness Rank": 121,
      "Happiness Score": 4.514
    },
    {
      "id": "NL",
      "Country": "Netherlands",
      "Happiness Rank": 7,
      "Happiness Score": 7.378
    },
    {
      "id": "NZ",
      "Country": "New Zealand",
      "Happiness Rank": 9,
      "Happiness Score": 7.286
    },
    {
      "id": "NI",
      "Country": "Nicaragua",
      "Happiness Rank": 57,
      "Happiness Score": 5.828
    },
    {
      "id": "NE",
      "Country": "Niger",
      "Happiness Rank": 144,
      "Happiness Score": 3.845
    },
    {
      "id": "NG",
      "Country": "Nigeria",
      "Happiness Rank": 78,
      "Happiness Score": 5.268
    },
    {
      "id": "CY",
      "Country": "Northern Cyprus",
      "Happiness Rank": 66,
      "Happiness Score": 5.695
    },
    {
      "id": "NO",
      "Country": "Norway",
      "Happiness Rank": 4,
      "Happiness Score": 7.522
    },
    {
      "id": "PK",
      "Country": "Pakistan",
      "Happiness Rank": 81,
      "Happiness Score": 5.194
    },
    {
      "id": "PT",
      "Country": "Palestinian Territories",
      "Happiness Rank": 108,
      "Happiness Score": 4.715
    },
    {
      "id": "PA",
      "Country": "Panama",
      "Happiness Rank": 25,
      "Happiness Score": 6.786
    },
    {
      "id": "PY",
      "Country": "Paraguay",
      "Happiness Rank": 53,
      "Happiness Score": 5.878
    },
    {
      "id": "PE",
      "Country": "Peru",
      "Happiness Rank": 58,
      "Happiness Score": 5.824
    },
    {
      "id": "PH",
      "Country": "Philippines",
      "Happiness Rank": 90,
      "Happiness Score": 5.073
    },
    {
      "id": "PL",
      "Country": "Poland",
      "Happiness Rank": 60,
      "Happiness Score": 5.791
    },
    {
      "id": "PT",
      "Country": "Portugal",
      "Happiness Rank": 88,
      "Happiness Score": 5.102
    },
    {
      "id": "QA",
      "Country": "Qatar",
      "Happiness Rank": 28,
      "Happiness Score": 6.611
    },
    {
      "id": "RO",
      "Country": "Romania",
      "Happiness Rank": 86,
      "Happiness Score": 5.124
    },
    {
      "id": "RU",
      "Country": "Russia",
      "Happiness Rank": 64,
      "Happiness Score": 5.716
    },
    {
      "id": "RW",
      "Country": "Rwanda",
      "Happiness Rank": 154,
      "Happiness Score": 3.465
    },
    {
      "id": "SA",
      "Country": "Saudi Arabia",
      "Happiness Rank": 35,
      "Happiness Score": 6.411
    },
    {
      "id": "SN",
      "Country": "Senegal",
      "Happiness Rank": 142,
      "Happiness Score": 3.904
    },
    {
      "id": "RS",
      "Country": "Serbia",
      "Happiness Rank": 87,
      "Happiness Score": 5.123
    },
    {
      "id": "SL",
      "Country": "Sierra Leone",
      "Happiness Rank": 123,
      "Happiness Score": 4.507
    },
    {
      "id": "SG",
      "Country": "Singapore",
      "Happiness Rank": 24,
      "Happiness Score": 6.798
    },
    {
      "id": "SK",
      "Country": "Slovakia",
      "Happiness Rank": 45,
      "Happiness Score": 5.995
    },
    {
      "id": "SI",
      "Country": "Slovenia",
      "Happiness Rank": 55,
      "Happiness Score": 5.848
    },
    {
      "id": "SO",
      "Country": "Somalia",
      "Happiness Rank": 91,
      "Happiness Score": 5.057
    },
    {
      "id": "ZA",
      "Country": "South Africa",
      "Happiness Rank": 113,
      "Happiness Score": 4.642
    },
    {
      "id": "SK",
      "Country": "South Korea",
      "Happiness Rank": 47,
      "Happiness Score": 5.984
    },
    {
      "id": "ES",
      "Country": "Spain",
      "Happiness Rank": 36,
      "Happiness Score": 6.329
    },
    {
      "id": "LK",
      "Country": "Sri Lanka",
      "Happiness Rank": 132,
      "Happiness Score": 4.271
    },
    {
      "id": "SE",
      "Country": "Sweden",
      "Happiness Rank": 8,
      "Happiness Score": 7.364
    },
    {
      "id": "CH",
      "Country": "Switzerland",
      "Happiness Rank": 1,
      "Happiness Score": 7.587
    },
    {
      "id": "SY",
      "Country": "Syria",
      "Happiness Rank": 156,
      "Happiness Score": 3.006
    },
    {
      "id": "TW",
      "Country": "Taiwan",
      "Happiness Rank": 38,
      "Happiness Score": 6.298
    },
    {
      "id": "TJ",
      "Country": "Tajikistan",
      "Happiness Rank": 106,
      "Happiness Score": 4.786
    },
    {
      "id": "TZ",
      "Country": "Tanzania",
      "Happiness Rank": 146,
      "Happiness Score": 3.781
    },
    {
      "id": "TH",
      "Country": "Thailand",
      "Happiness Rank": 34,
      "Happiness Score": 6.455
    },
    {
      "id": "TG",
      "Country": "Togo",
      "Happiness Rank": 158,
      "Happiness Score": 2.839
    },
    {
      "id": "TT",
      "Country": "Trinidad & Tobago",
      "Happiness Rank": 41,
      "Happiness Score": 6.168
    },
    {
      "id": "TN",
      "Country": "Tunisia",
      "Happiness Rank": 107,
      "Happiness Score": 4.739
    },
    {
      "id": "TR",
      "Country": "Turkey",
      "Happiness Rank": 76,
      "Happiness Score": 5.332
    },
    {
      "id": "TM",
      "Country": "Turkmenistan",
      "Happiness Rank": 70,
      "Happiness Score": 5.548
    },
    {
      "id": "UG",
      "Country": "Uganda",
      "Happiness Rank": 141,
      "Happiness Score": 3.931
    },
    {
      "id": "UA",
      "Country": "Ukraine",
      "Happiness Rank": 111,
      "Happiness Score": 4.681
    },
    {
      "id": "AE",
      "Country": "United Arab Emirates",
      "Happiness Rank": 20,
      "Happiness Score": 6.901
    },
    {
      "id": "GB",
      "Country": "United Kingdom",
      "Happiness Rank": 21,
      "Happiness Score": 6.867
    },
    {
      "id": "US",
      "Country": "United States",
      "Happiness Rank": 15,
      "Happiness Score": 7.119
    },
    {
      "id": "UY",
      "Country": "Uruguay",
      "Happiness Rank": 32,
      "Happiness Score": 6.485
    },
    {
      "id": "UZ",
      "Country": "Uzbekistan",
      "Happiness Rank": 44,
      "Happiness Score": 6.003
    },
    {
      "id": "VE",
      "Country": "Venezuela",
      "Happiness Rank": 23,
      "Happiness Score": 6.81
    },
    {
      "id": "VN",
      "Country": "Vietnam",
      "Happiness Rank": 75,
      "Happiness Score": 5.36
    },
    {
      "id": "YE",
      "Country": "Yemen",
      "Happiness Rank": 136,
      "Happiness Score": 4.077
    },
    {
      "id": "ZM",
      "Country": "Zambia",
      "Happiness Rank": 85,
      "Happiness Score": 5.129
    },
    {
      "id": "ZW",
      "Country": "Zimbabwe",
      "Happiness Rank": 115,
      "Happiness Score": 4.61
    }
   ],

   [
    {
      "id": "AF",
      "Country": "Afghanistan",
      "Happiness Rank": 154,
      "Happiness Score": 3.36
    },
    {
      "id": "AL",
      "Country": "Albania",
      "Happiness Rank": 109,
      "Happiness Score": 4.655
    },
    {
      "id": "DZ",
      "Country": "Algeria",
      "Happiness Rank": 38,
      "Happiness Score": 6.355
    },
    {
      "id": "AR",
      "Country": "Argentina",
      "Happiness Rank": 26,
      "Happiness Score": 6.65
    },
    {
      "id": "AM",
      "Country": "Armenia",
      "Happiness Rank": 121,
      "Happiness Score": 4.36
    },
    {
      "id": "AU",
      "Country": "Australia",
      "Happiness Rank": 9,
      "Happiness Score": 7.313
    },
    {
      "id": "AT",
      "Country": "Austria",
      "Happiness Rank": 12,
      "Happiness Score": 7.119
    },
    {
      "id": "AZ",
      "Country": "Azerbaijan",
      "Happiness Rank": 81,
      "Happiness Score": 5.291
    },
    {
      "id": "BH",
      "Country": "Bahrain",
      "Happiness Rank": 42,
      "Happiness Score": 6.218
    },
    {
      "id": "BD",
      "Country": "Bangladesh",
      "Happiness Rank": 110,
      "Happiness Score": 4.643
    },
    {
      "id": "BY",
      "Country": "Belarus",
      "Happiness Rank": 61,
      "Happiness Score": 5.802
    },
    {
      "id": "BE",
      "Country": "Belgium",
      "Happiness Rank": 18,
      "Happiness Score": 6.929
    },
    {
      "id": "BJ",
      "Country": "Benin",
      "Happiness Rank": 153,
      "Happiness Score": 3.484
    },
    {
      "id": "BT",
      "Country": "Bhutan",
      "Happiness Rank": 84,
      "Happiness Score": 5.196
    },
    {
      "id": "BO",
      "Country": "Bolivia",
      "Happiness Rank": 59,
      "Happiness Score": 5.822
    },
    {
      "id": "BA",
      "Country": "Bosnia and Herzegovina",
      "Happiness Rank": 87,
      "Happiness Score": 5.163
    },
    {
      "id": "BW",
      "Country": "Botswana",
      "Happiness Rank": 137,
      "Happiness Score": 3.974
    },
    {
      "id": "BR",
      "Country": "Brazil",
      "Happiness Rank": 17,
      "Happiness Score": 6.952
    },
    {
      "id": "BG",
      "Country": "Bulgaria",
      "Happiness Rank": 129,
      "Happiness Score": 4.217
    },
    {
      "id": "BF",
      "Country": "Burkina Faso",
      "Happiness Rank": 145,
      "Happiness Score": 3.739
    },
    {
      "id": "BI",
      "Country": "Burundi",
      "Happiness Rank": 157,
      "Happiness Score": 2.905
    },
    {
      "id": "KH",
      "Country": "Cambodia",
      "Happiness Rank": 140,
      "Happiness Score": 3.907
    },
    {
      "id": "CM",
      "Country": "Cameroon",
      "Happiness Rank": 114,
      "Happiness Score": 4.513
    },
    {
      "id": "CA",
      "Country": "Canada",
      "Happiness Rank": 6,
      "Happiness Score": 7.404
    },
    {
      "id": "TD",
      "Country": "Chad",
      "Happiness Rank": 144,
      "Happiness Score": 3.763
    },
    {
      "id": "CL",
      "Country": "Chile",
      "Happiness Rank": 24,
      "Happiness Score": 6.705
    },
    {
      "id": "CN",
      "Country": "China",
      "Happiness Rank": 83,
      "Happiness Score": 5.245
    },
    {
      "id": "CO",
      "Country": "Colombia",
      "Happiness Rank": 31,
      "Happiness Score": 6.481
    },
    {
      "id": "CD",
      "Country": "Congo (Brazzaville)",
      "Happiness Rank": 127,
      "Happiness Score": 4.236
    },
    {
      "id": "CG",
      "Country": "Congo (Kinshasa)",
      "Happiness Rank": 125,
      "Happiness Score": 4.272
    },
    {
      "id": "CR",
      "Country": "Costa Rica",
      "Happiness Rank": 14,
      "Happiness Score": 7.087
    },
    {
      "id": "HR",
      "Country": "Croatia",
      "Happiness Rank": 74,
      "Happiness Score": 5.488
    },
    {
      "id": "CY",
      "Country": "Cyprus",
      "Happiness Rank": 69,
      "Happiness Score": 5.546
    },
    {
      "id": "CZ",
      "Country": "Czech Republic",
      "Happiness Rank": 27,
      "Happiness Score": 6.596
    },
    {
      "id": "DK",
      "Country": "Denmark",
      "Happiness Rank": 1,
      "Happiness Score": 7.526
    },
    {
      "id": "DO",
      "Country": "Dominican Republic",
      "Happiness Rank": 89,
      "Happiness Score": 5.155
    },
    {
      "id": "EC",
      "Country": "Ecuador",
      "Happiness Rank": 51,
      "Happiness Score": 5.976
    },
    {
      "id": "EG",
      "Country": "Egypt",
      "Happiness Rank": 120,
      "Happiness Score": 4.362
    },
    {
      "id": "SV",
      "Country": "El Salvador",
      "Happiness Rank": 46,
      "Happiness Score": 6.068
    },
    {
      "id": "EE",
      "Country": "Estonia",
      "Happiness Rank": 72,
      "Happiness Score": 5.517
    },
    {
      "id": "ET",
      "Country": "Ethiopia",
      "Happiness Rank": 115,
      "Happiness Score": 4.508
    },
    {
      "id": "FI",
      "Country": "Finland",
      "Happiness Rank": 5,
      "Happiness Score": 7.413
    },
    {
      "id": "FR",
      "Country": "France",
      "Happiness Rank": 32,
      "Happiness Score": 6.478
    },
    {
      "id": "GA",
      "Country": "Gabon",
      "Happiness Rank": 134,
      "Happiness Score": 4.121
    },
    {
      "id": "GE",
      "Country": "Georgia",
      "Happiness Rank": 126,
      "Happiness Score": 4.252
    },
    {
      "id": "DE",
      "Country": "Germany",
      "Happiness Rank": 16,
      "Happiness Score": 6.994
    },
    {
      "id": "GH",
      "Country": "Ghana",
      "Happiness Rank": 124,
      "Happiness Score": 4.276
    },
    {
      "id": "GR",
      "Country": "Greece",
      "Happiness Rank": 99,
      "Happiness Score": 5.033
    },
    {
      "id": "GT",
      "Country": "Guatemala",
      "Happiness Rank": 39,
      "Happiness Score": 6.324
    },
    {
      "id": "GN",
      "Country": "Guinea",
      "Happiness Rank": 151,
      "Happiness Score": 3.607
    },
    {
      "id": "HT",
      "Country": "Haiti",
      "Happiness Rank": 136,
      "Happiness Score": 4.028
    },
    {
      "id": "HN",
      "Country": "Honduras",
      "Happiness Rank": 104,
      "Happiness Score": 4.871
    },
    {
      "id": "HK",
      "Country": "Hong Kong",
      "Happiness Rank": 75,
      "Happiness Score": 5.458
    },
    {
      "id": "HU",
      "Country": "Hungary",
      "Happiness Rank": 91,
      "Happiness Score": 5.145
    },
    {
      "id": "IS",
      "Country": "Iceland",
      "Happiness Rank": 3,
      "Happiness Score": 7.501
    },
    {
      "id": "IN",
      "Country": "India",
      "Happiness Rank": 118,
      "Happiness Score": 4.404
    },
    {
      "id": "ID",
      "Country": "Indonesia",
      "Happiness Rank": 79,
      "Happiness Score": 5.314
    },
    {
      "id": "IR",
      "Country": "Iran",
      "Happiness Rank": 105,
      "Happiness Score": 4.813
    },
    {
      "id": "IQ",
      "Country": "Iraq",
      "Happiness Rank": 112,
      "Happiness Score": 4.575
    },
    {
      "id": "IE",
      "Country": "Ireland",
      "Happiness Rank": 19,
      "Happiness Score": 6.907
    },
    {
      "id": "IL",
      "Country": "Israel",
      "Happiness Rank": 11,
      "Happiness Score": 7.267
    },
    {
      "id": "IT",
      "Country": "Italy",
      "Happiness Rank": 50,
      "Happiness Score": 5.977
    },
    {
      "id": "CI",
      "Country": "Ivory Coast",
      "Happiness Rank": 139,
      "Happiness Score": 3.916
    },
    {
      "id": "JM",
      "Country": "Jamaica",
      "Happiness Rank": 73,
      "Happiness Score": 5.51
    },
    {
      "id": "JP",
      "Country": "Japan",
      "Happiness Rank": 53,
      "Happiness Score": 5.921
    },
    {
      "id": "JO",
      "Country": "Jordan",
      "Happiness Rank": 80,
      "Happiness Score": 5.303
    },
    {
      "id": "KZ",
      "Country": "Kazakhstan",
      "Happiness Rank": 54,
      "Happiness Score": 5.919
    },
    {
      "id": "KE",
      "Country": "Kenya",
      "Happiness Rank": 122,
      "Happiness Score": 4.356
    },
    {
      "id": "XK",
      "Country": "Kosovo",
      "Happiness Rank": 77,
      "Happiness Score": 5.401
    },
    {
      "id": "KW",
      "Country": "Kuwait",
      "Happiness Rank": 41,
      "Happiness Score": 6.239
    },
    {
      "id": "KG",
      "Country": "Kyrgyzstan",
      "Happiness Rank": 85,
      "Happiness Score": 5.185
    },
    {
      "id": "LV",
      "Country": "Latvia",
      "Happiness Rank": 68,
      "Happiness Score": 5.56
    },
    {
      "id": "LB",
      "Country": "Lebanon",
      "Happiness Rank": 93,
      "Happiness Score": 5.129
    },
    {
      "id": "LR",
      "Country": "Liberia",
      "Happiness Rank": 150,
      "Happiness Score": 3.622
    },
    {
      "id": "LY",
      "Country": "Libya",
      "Happiness Rank": 67,
      "Happiness Score": 5.615
    },
    {
      "id": "LT",
      "Country": "Lithuania",
      "Happiness Rank": 60,
      "Happiness Score": 5.813
    },
    {
      "id": "LU",
      "Country": "Luxembourg",
      "Happiness Rank": 20,
      "Happiness Score": 6.871
    },
    {
      "id": "MG",
      "Country": "Madagascar",
      "Happiness Rank": 148,
      "Happiness Score": 3.695
    },
    {
      "id": "MW",
      "Country": "Malawi",
      "Happiness Rank": 132,
      "Happiness Score": 4.156
    },
    {
      "id": "MY",
      "Country": "Malaysia",
      "Happiness Rank": 47,
      "Happiness Score": 6.005
    },
    {
      "id": "ML",
      "Country": "Mali",
      "Happiness Rank": 135,
      "Happiness Score": 4.073
    },
    {
      "id": "MT",
      "Country": "Malta",
      "Happiness Rank": 30,
      "Happiness Score": 6.488
    },
    {
      "id": "MR",
      "Country": "Mauritania",
      "Happiness Rank": 130,
      "Happiness Score": 4.201
    },
    {
      "id": "MU",
      "Country": "Mauritius",
      "Happiness Rank": 66,
      "Happiness Score": 5.648
    },
    {
      "id": "MX",
      "Country": "Mexico",
      "Happiness Rank": 21,
      "Happiness Score": 6.778
    },
    {
      "id": "MD",
      "Country": "Moldova",
      "Happiness Rank": 55,
      "Happiness Score": 5.897
    },
    {
      "id": "MN",
      "Country": "Mongolia",
      "Happiness Rank": 101,
      "Happiness Score": 4.907
    },
    {
      "id": "ME",
      "Country": "Montenegro",
      "Happiness Rank": 88,
      "Happiness Score": 5.161
    },
    {
      "id": "MA",
      "Country": "Morocco",
      "Happiness Rank": 90,
      "Happiness Score": 5.151
    },
    {
      "id": "MM",
      "Country": "Myanmar",
      "Happiness Rank": 119,
      "Happiness Score": 4.395
    },
    {
      "id": "NP",
      "Country": "Nepal",
      "Happiness Rank": 107,
      "Happiness Score": 4.793
    },
    {
      "id": "NL",
      "Country": "Netherlands",
      "Happiness Rank": 7,
      "Happiness Score": 7.339
    },
    {
      "id": "NZ",
      "Country": "New Zealand",
      "Happiness Rank": 8,
      "Happiness Score": 7.334
    },
    {
      "id": "NI",
      "Country": "Nicaragua",
      "Happiness Rank": 48,
      "Happiness Score": 5.992
    },
    {
      "id": "NE",
      "Country": "Niger",
      "Happiness Rank": 142,
      "Happiness Score": 3.856
    },
    {
      "id": "NG",
      "Country": "Nigeria",
      "Happiness Rank": 103,
      "Happiness Score": 4.875
    },
    {
      "id": "CY",
      "Country": "Northern Cyprus",
      "Happiness Rank": 62,
      "Happiness Score": 5.771
    },
    {
      "id": "NO",
      "Country": "Norway",
      "Happiness Rank": 4,
      "Happiness Score": 7.498
    },
    {
      "id": "PK",
      "Country": "Pakistan",
      "Happiness Rank": 92,
      "Happiness Score": 5.132
    },
    {
      "id": "PT",
      "Country": "Palestinian Territories",
      "Happiness Rank": 108,
      "Happiness Score": 4.754
    },
    {
      "id": "PA",
      "Country": "Panama",
      "Happiness Rank": 25,
      "Happiness Score": 6.701
    },
    {
      "id": "PY",
      "Country": "Paraguay",
      "Happiness Rank": 70,
      "Happiness Score": 5.538
    },
    {
      "id": "PE",
      "Country": "Peru",
      "Happiness Rank": 64,
      "Happiness Score": 5.743
    },
    {
      "id": "PH",
      "Country": "Philippines",
      "Happiness Rank": 82,
      "Happiness Score": 5.279
    },
    {
      "id": "PL",
      "Country": "Poland",
      "Happiness Rank": 57,
      "Happiness Score": 5.835
    },
    {
      "id": "PT",
      "Country": "Portugal",
      "Happiness Rank": 94,
      "Happiness Score": 5.123
    },
    {
      "id": "QA",
      "Country": "Qatar",
      "Happiness Rank": 36,
      "Happiness Score": 6.375
    },
    {
      "id": "RO",
      "Country": "Romania",
      "Happiness Rank": 71,
      "Happiness Score": 5.528
    },
    {
      "id": "RU",
      "Country": "Russia",
      "Happiness Rank": 56,
      "Happiness Score": 5.856
    },
    {
      "id": "RW",
      "Country": "Rwanda",
      "Happiness Rank": 152,
      "Happiness Score": 3.515
    },
    {
      "id": "SA",
      "Country": "Saudi Arabia",
      "Happiness Rank": 34,
      "Happiness Score": 6.379
    },
    {
      "id": "SN",
      "Country": "Senegal",
      "Happiness Rank": 128,
      "Happiness Score": 4.219
    },
    {
      "id": "RS",
      "Country": "Serbia",
      "Happiness Rank": 86,
      "Happiness Score": 5.177
    },
    {
      "id": "SL",
      "Country": "Sierra Leone",
      "Happiness Rank": 111,
      "Happiness Score": 4.635
    },
    {
      "id": "SG",
      "Country": "Singapore",
      "Happiness Rank": 22,
      "Happiness Score": 6.739
    },
    {
      "id": "SK",
      "Country": "Slovakia",
      "Happiness Rank": 45,
      "Happiness Score": 6.078
    },
    {
      "id": "SI",
      "Country": "Slovenia",
      "Happiness Rank": 63,
      "Happiness Score": 5.768
    },
    {
      "id": "SO",
      "Country": "Somalia",
      "Happiness Rank": 76,
      "Happiness Score": 5.44
    },
    {
      "id": "ZA",
      "Country": "South Africa",
      "Happiness Rank": 116,
      "Happiness Score": 4.459
    },
    {
      "id": "SK",
      "Country": "South Korea",
      "Happiness Rank": 57,
      "Happiness Score": 5.835
    },
    {
      "id": "ES",
      "Country": "Spain",
      "Happiness Rank": 37,
      "Happiness Score": 6.361
    },
    {
      "id": "LK",
      "Country": "Sri Lanka",
      "Happiness Rank": 117,
      "Happiness Score": 4.415
    },
    {
      "id": "SE",
      "Country": "Sweden",
      "Happiness Rank": 10,
      "Happiness Score": 7.291
    },
    {
      "id": "CH",
      "Country": "Switzerland",
      "Happiness Rank": 2,
      "Happiness Score": 7.509
    },
    {
      "id": "SY",
      "Country": "Syria",
      "Happiness Rank": 156,
      "Happiness Score": 3.069
    },
    {
      "id": "TW",
      "Country": "Taiwan",
      "Happiness Rank": 34,
      "Happiness Score": 6.379
    },
    {
      "id": "TJ",
      "Country": "Tajikistan",
      "Happiness Rank": 100,
      "Happiness Score": 4.996
    },
    {
      "id": "TZ",
      "Country": "Tanzania",
      "Happiness Rank": 149,
      "Happiness Score": 3.666
    },
    {
      "id": "TH",
      "Country": "Thailand",
      "Happiness Rank": 33,
      "Happiness Score": 6.474
    },
    {
      "id": "TG",
      "Country": "Togo",
      "Happiness Rank": 155,
      "Happiness Score": 3.303
    },
    {
      "id": "TT",
      "Country": "Trinidad & Tobago",
      "Happiness Rank": 43,
      "Happiness Score": 6.168
    },
    {
      "id": "TN",
      "Country": "Tunisia",
      "Happiness Rank": 98,
      "Happiness Score": 5.045
    },
    {
      "id": "TR",
      "Country": "Turkey",
      "Happiness Rank": 78,
      "Happiness Score": 5.389
    },
    {
      "id": "TM",
      "Country": "Turkmenistan",
      "Happiness Rank": 65,
      "Happiness Score": 5.658
    },
    {
      "id": "UG",
      "Country": "Uganda",
      "Happiness Rank": 145,
      "Happiness Score": 3.739
    },
    {
      "id": "UA",
      "Country": "Ukraine",
      "Happiness Rank": 123,
      "Happiness Score": 4.324
    },
    {
      "id": "AE",
      "Country": "United Arab Emirates",
      "Happiness Rank": 28,
      "Happiness Score": 6.573
    },
    {
      "id": "GB",
      "Country": "United Kingdom",
      "Happiness Rank": 23,
      "Happiness Score": 6.725
    },
    {
      "id": "US",
      "Country": "United States",
      "Happiness Rank": 13,
      "Happiness Score": 7.104
    },
    {
      "id": "UY",
      "Country": "Uruguay",
      "Happiness Rank": 29,
      "Happiness Score": 6.545
    },
    {
      "id": "UZ",
      "Country": "Uzbekistan",
      "Happiness Rank": 49,
      "Happiness Score": 5.987
    },
    {
      "id": "VE",
      "Country": "Venezuela",
      "Happiness Rank": 44,
      "Happiness Score": 6.084
    },
    {
      "id": "VN",
      "Country": "Vietnam",
      "Happiness Rank": 96,
      "Happiness Score": 5.061
    },
    {
      "id": "YE",
      "Country": "Yemen",
      "Happiness Rank": 147,
      "Happiness Score": 3.724
    },
    {
      "id": "ZM",
      "Country": "Zambia",
      "Happiness Rank": 106,
      "Happiness Score": 4.795
    },
    {
      "id": "ZW",
      "Country": "Zimbabwe",
      "Happiness Rank": 131,
      "Happiness Score": 4.193
    }
   ],
 
   [
    {
       "id":"AF","Country":"Afghanistan","Happiness Rank":141,"Happiness Score":3.79399991  },
    {
       "id":"AL","Country":"Albania","Happiness Rank":109,"Happiness Score":4.644000053  },
    {
       "id":"DZ","Country":"Algeria","Happiness Rank":53,"Happiness Score":5.872000217  },
    {
       "id":"AR","Country":"Argentina","Happiness Rank":24,"Happiness Score":6.598999977  },
    {
       "id":"AM","Country":"Armenia","Happiness Rank":121,"Happiness Score":4.375999928  },
    {
       "id":"AU","Country":"Australia","Happiness Rank":10,"Happiness Score":7.28399992  },
    {
       "id":"AT","Country":"Austria","Happiness Rank":13,"Happiness Score":7.006000042  },
    {
       "id":"AZ","Country":"Azerbaijan","Happiness Rank":85,"Happiness Score":5.234000206  },
    {
       "id":"BH","Country":"Bahrain","Happiness Rank":41,"Happiness Score":6.086999893  },
    {
       "id":"BD","Country":"Bangladesh","Happiness Rank":110,"Happiness Score":4.607999802  },
    {
       "id":"BY","Country":"Belarus","Happiness Rank":67,"Happiness Score":5.568999767  },
    {
       "id":"BE","Country":"Belgium","Happiness Rank":17,"Happiness Score":6.890999794  },
    {
       "id":"BJ","Country":"Benin","Happiness Rank":143,"Happiness Score":3.657000065  },
    {
       "id":"BT","Country":"Bhutan","Happiness Rank":97,"Happiness Score":5.011000156  },
    {
       "id":"BO","Country":"Bolivia","Happiness Rank":58,"Happiness Score":5.822999954  },
    {
       "id":"BA","Country":"Bosnia and Herzegovina","Happiness Rank":90,"Happiness Score":5.18200016  },
    {
       "id":"BW","Country":"Botswana","Happiness Rank":142,"Happiness Score":3.766000032  },
    {
       "id":"BR","Country":"Brazil","Happiness Rank":22,"Happiness Score":6.635000229  },
    {
       "id":"BG","Country":"Bulgaria","Happiness Rank":105,"Happiness Score":4.714000225  },
    {
       "id":"BF","Country":"Burkina Faso","Happiness Rank":134,"Happiness Score":4.032000065  },
    {
       "id":"BI","Country":"Burundi","Happiness Rank":154,"Happiness Score":2.904999971  },
    {
       "id":"KH","Country":"Cambodia","Happiness Rank":129,"Happiness Score":4.168000221  },
    {
       "id":"CM","Country":"Cameroon","Happiness Rank":107,"Happiness Score":4.695000172  },
    {
       "id":"CA","Country":"Canada","Happiness Rank":7,"Happiness Score":7.315999985  },
    {
       "id":"TD","Country":"Chad","Happiness Rank":137,"Happiness Score":3.936000109  },
    {
       "id":"CL","Country":"Chile","Happiness Rank":20,"Happiness Score":6.65199995  },
    {
       "id":"CN","Country":"China","Happiness Rank":79,"Happiness Score":5.272999763  },
    {
       "id":"CO","Country":"Colombia","Happiness Rank":36,"Happiness Score":6.356999874  },
    {
       "id":"CD","Country":"Congo (Brazzaville)","Happiness Rank":124,"Happiness Score":4.290999889  },
    {
       "id":"CG","Country":"Congo (Kinshasa)","Happiness Rank":126,"Happiness Score":4.28000021  },
    {
       "id":"CR","Country":"Costa Rica","Happiness Rank":12,"Happiness Score":7.078999996  },
    {
       "id":"HR","Country":"Croatia","Happiness Rank":77,"Happiness Score":5.293000221  },
    {
       "id":"CY","Country":"Cyprus","Happiness Rank":65,"Happiness Score":5.620999813  },
    {
       "id":"CZ","Country":"Czech Republic","Happiness Rank":23,"Happiness Score":6.609000206  },
    {
       "id":"DK","Country":"Denmark","Happiness Rank":2,"Happiness Score":7.521999836  },
    {
       "id":"DO","Country":"Dominican Republic","Happiness Rank":86,"Happiness Score":5.230000019  },
    {
       "id":"EC","Country":"Ecuador","Happiness Rank":44,"Happiness Score":6.007999897  },
    {
       "id":"EG","Country":"Egypt","Happiness Rank":104,"Happiness Score":4.735000134  },
    {
       "id":"SV","Country":"El Salvador","Happiness Rank":45,"Happiness Score":6.002999783  },
    {
       "id":"EE","Country":"Estonia","Happiness Rank":66,"Happiness Score":5.611000061  },
    {
       "id":"ET","Country":"Ethiopia","Happiness Rank":119,"Happiness Score":4.460000038  },
    {
       "id":"FI","Country":"Finland","Happiness Rank":5,"Happiness Score":7.468999863  },
    {
       "id":"FR","Country":"France","Happiness Rank":31,"Happiness Score":6.441999912  },
    {
       "id":"GA","Country":"Gabon","Happiness Rank":118,"Happiness Score":4.465000153  },
    {
       "id":"GE","Country":"Georgia","Happiness Rank":125,"Happiness Score":4.285999775  },
    {
       "id":"DE","Country":"Germany","Happiness Rank":16,"Happiness Score":6.951000214  },
    {
       "id":"GH","Country":"Ghana","Happiness Rank":131,"Happiness Score":4.119999886  },
    {
       "id":"GR","Country":"Greece","Happiness Rank":87,"Happiness Score":5.227000237  },
    {
       "id":"GT","Country":"Guatemala","Happiness Rank":29,"Happiness Score":6.453999996  },
    {
       "id":"GN","Country":"Guinea","Happiness Rank":149,"Happiness Score":3.506999969  },
    {
       "id":"HT","Country":"Haiti","Happiness Rank":145,"Happiness Score":3.602999926  },
    {
       "id":"HN","Country":"Honduras","Happiness Rank":91,"Happiness Score":5.181000233  },
    {
       "id":"HK","Country":"Hong Kong","Happiness Rank":71,"Happiness Score":5.472000122  },
    {
       "id":"HU","Country":"Hungary","Happiness Rank":75,"Happiness Score":5.323999882  },
    {
       "id":"IS","Country":"Iceland","Happiness Rank":3,"Happiness Score":7.504000187  },
    {
       "id":"IN","Country":"India","Happiness Rank":122,"Happiness Score":4.315000057  },
    {
       "id":"ID","Country":"Indonesia","Happiness Rank":81,"Happiness Score":5.262000084  },
    {
       "id":"IR","Country":"Iran","Happiness Rank":108,"Happiness Score":4.691999912  },
    {
       "id":"IQ","Country":"Iraq","Happiness Rank":117,"Happiness Score":4.497000217  },
    {
       "id":"IE","Country":"Ireland","Happiness Rank":15,"Happiness Score":6.977000237  },
    {
       "id":"IL","Country":"Israel","Happiness Rank":11,"Happiness Score":7.212999821  },
    {
       "id":"IT","Country":"Italy","Happiness Rank":48,"Happiness Score":5.964000225  },
    {
       "id":"CI","Country":"Ivory Coast","Happiness Rank":128,"Happiness Score":4.179999828  },
    {
       "id":"JM","Country":"Jamaica","Happiness Rank":76,"Happiness Score":5.31099987  },
    {
       "id":"JP","Country":"Japan","Happiness Rank":51,"Happiness Score":5.920000076  },
    {
       "id":"JO","Country":"Jordan","Happiness Rank":74,"Happiness Score":5.335999966  },
    {
       "id":"KZ","Country":"Kazakhstan","Happiness Rank":60,"Happiness Score":5.818999767  },
    {
       "id":"KE","Country":"Kenya","Happiness Rank":112,"Happiness Score":4.552999973  },
    {
       "id":"XK","Country":"Kosovo","Happiness Rank":78,"Happiness Score":5.278999805  },
    {
       "id":"KW","Country":"Kuwait","Happiness Rank":39,"Happiness Score":6.105000019  },
    {
       "id":"KG","Country":"Kyrgyzstan","Happiness Rank":98,"Happiness Score":5.004000187  },
    {
       "id":"LV","Country":"Latvia","Happiness Rank":54,"Happiness Score":5.849999905  },
    {
       "id":"LB","Country":"Lebanon","Happiness Rank":88,"Happiness Score":5.224999905  },
    {
       "id":"LR","Country":"Liberia","Happiness Rank":148,"Happiness Score":3.532999992  },
    {
       "id":"LY","Country":"Libya","Happiness Rank":68,"Happiness Score":5.525000095  },
    {
       "id":"LT","Country":"Lithuania","Happiness Rank":52,"Happiness Score":5.90199995  },
    {
       "id":"LU","Country":"Luxembourg","Happiness Rank":18,"Happiness Score":6.862999916  },
    {
       "id":"MG","Country":"Madagascar","Happiness Rank":144,"Happiness Score":3.644000053  },
    {
       "id":"MW","Country":"Malawi","Happiness Rank":136,"Happiness Score":3.970000029  },
    {
       "id":"MY","Country":"Malaysia","Happiness Rank":42,"Happiness Score":6.084000111  },
    {
       "id":"ML","Country":"Mali","Happiness Rank":127,"Happiness Score":4.190000057  },
    {
       "id":"MT","Country":"Malta","Happiness Rank":27,"Happiness Score":6.52699995  },
    {
       "id":"MR","Country":"Mauritania","Happiness Rank":123,"Happiness Score":4.291999817  },
    {
       "id":"MU","Country":"Mauritius","Happiness Rank":64,"Happiness Score":5.629000187  },
    {
       "id":"MX","Country":"Mexico","Happiness Rank":25,"Happiness Score":6.578000069  },
    {
       "id":"MD","Country":"Moldova","Happiness Rank":56,"Happiness Score":5.837999821  },
    {
       "id":"MN","Country":"Mongolia","Happiness Rank":100,"Happiness Score":4.954999924  },
    {
       "id":"ME","Country":"Montenegro","Happiness Rank":83,"Happiness Score":5.236999989  },
    {
       "id":"MA","Country":"Morocco","Happiness Rank":84,"Happiness Score":5.235000134  },
    {
       "id":"MM","Country":"Myanmar","Happiness Rank":114,"Happiness Score":4.545000076  },
    {
       "id":"NP","Country":"Nepal","Happiness Rank":99,"Happiness Score":4.961999893  },
    {
       "id":"NL","Country":"Netherlands","Happiness Rank":6,"Happiness Score":7.376999855  },
    {
       "id":"NZ","Country":"New Zealand","Happiness Rank":8,"Happiness Score":7.31400013  },
    {
       "id":"NI","Country":"Nicaragua","Happiness Rank":43,"Happiness Score":6.071000099  },
    {
       "id":"NE","Country":"Niger","Happiness Rank":135,"Happiness Score":4.027999878  },
    {
       "id":"NG","Country":"Nigeria","Happiness Rank":95,"Happiness Score":5.073999882  },
    {
       "id":"CY","Country":"Northern Cyprus","Happiness Rank":61,"Happiness Score":5.809999943  },
    {
       "id":"NO","Country":"Norway","Happiness Rank":1,"Happiness Score":7.537000179  },
    {
       "id":"PK","Country":"Pakistan","Happiness Rank":80,"Happiness Score":5.269000053  },
    {
       "id":"PT","Country":"Palestinian Territories","Happiness Rank":103,"Happiness Score":4.775000095  },
    {
       "id":"PA","Country":"Panama","Happiness Rank":30,"Happiness Score":6.452000141  },
    {
       "id":"PY","Country":"Paraguay","Happiness Rank":70,"Happiness Score":5.493000031  },
    {
       "id":"PE","Country":"Peru","Happiness Rank":63,"Happiness Score":5.715000153  },
    {
       "id":"PH","Country":"Philippines","Happiness Rank":72,"Happiness Score":5.429999828  },
    {
       "id":"PL","Country":"Poland","Happiness Rank":46,"Happiness Score":5.97300005  },
    {
       "id":"PT","Country":"Portugal","Happiness Rank":89,"Happiness Score":5.195000172  },
    {
       "id":"QA","Country":"Qatar","Happiness Rank":35,"Happiness Score":6.375  },
    {
       "id":"RO","Country":"Romania","Happiness Rank":57,"Happiness Score":5.824999809  },
    {
       "id":"RU","Country":"Russia","Happiness Rank":49,"Happiness Score":5.962999821  },
    {
       "id":"RW","Country":"Rwanda","Happiness Rank":151,"Happiness Score":3.470999956  },
    {
       "id":"SA","Country":"Saudi Arabia","Happiness Rank":37,"Happiness Score":6.343999863  },
    {
       "id":"SN","Country":"Senegal","Happiness Rank":115,"Happiness Score":4.534999847  },
    {
       "id":"RS","Country":"Serbia","Happiness Rank":73,"Happiness Score":5.394999981  },
    {
       "id":"SL","Country":"Sierra Leone","Happiness Rank":106,"Happiness Score":4.709000111  },
    {
       "id":"SG","Country":"Singapore","Happiness Rank":26,"Happiness Score":6.572000027  },
    {
       "id":"SK","Country":"Slovakia","Happiness Rank":40,"Happiness Score":6.09800005  },
    {
       "id":"SI","Country":"Slovenia","Happiness Rank":62,"Happiness Score":5.757999897  },
    {
       "id":"SO","Country":"Somalia","Happiness Rank":93,"Happiness Score":5.151000023  },
    {
       "id":"ZA","Country":"South Africa","Happiness Rank":101,"Happiness Score":4.828999996  },
    {
       "id":"SK","Country":"South Korea","Happiness Rank":55,"Happiness Score":5.837999821  },
    {
       "id":"ES","Country":"Spain","Happiness Rank":34,"Happiness Score":6.402999878  },
    {
       "id":"LK","Country":"Sri Lanka","Happiness Rank":120,"Happiness Score":4.440000057  },
    {
       "id":"SE","Country":"Sweden","Happiness Rank":9,"Happiness Score":7.28399992  },
    {
       "id":"CH","Country":"Switzerland","Happiness Rank":4,"Happiness Score":7.493999958  },
    {
       "id":"SY","Country":"Syria","Happiness Rank":152,"Happiness Score":3.461999893  },
    {
       "id":"TW","Country":"Taiwan","Happiness Rank":33,"Happiness Score":6.421999931  },
    {
       "id":"TJ","Country":"Tajikistan","Happiness Rank":96,"Happiness Score":5.040999889  },
    {
       "id":"TZ","Country":"Tanzania","Happiness Rank":153,"Happiness Score":3.348999977  },
    {
       "id":"TH","Country":"Thailand","Happiness Rank":32,"Happiness Score":6.423999786  },
    {
       "id":"TG","Country":"Togo","Happiness Rank":150,"Happiness Score":3.494999886  },
    {
       "id":"TT","Country":"Trinidad & Tobago","Happiness Rank":38,"Happiness Score":6.168000221  },
    {
       "id":"TN","Country":"Tunisia","Happiness Rank":102,"Happiness Score":4.804999828  },
    {
       "id":"TR","Country":"Turkey","Happiness Rank":69,"Happiness Score":5.5  },
    {
       "id":"TM","Country":"Turkmenistan","Happiness Rank":59,"Happiness Score":5.822000027  },
    {
       "id":"UG","Country":"Uganda","Happiness Rank":133,"Happiness Score":4.080999851  },
    {
       "id":"UA","Country":"Ukraine","Happiness Rank":132,"Happiness Score":4.096000195  },
    {
       "id":"AE","Country":"United Arab Emirates","Happiness Rank":21,"Happiness Score":6.647999763  },
    {
       "id":"GB","Country":"United Kingdom","Happiness Rank":19,"Happiness Score":6.714000225  },
    {
       "id":"US","Country":"United States","Happiness Rank":14,"Happiness Score":6.993000031  },
    {
       "id":"UY","Country":"Uruguay","Happiness Rank":28,"Happiness Score":6.453999996  },
    {
       "id":"UZ","Country":"Uzbekistan","Happiness Rank":47,"Happiness Score":5.971000195  },
    {
       "id":"VE","Country":"Venezuela","Happiness Rank":82,"Happiness Score":5.25  },
    {
       "id":"VN","Country":"Vietnam","Happiness Rank":94,"Happiness Score":5.073999882  },
    {
       "id":"YE","Country":"Yemen","Happiness Rank":146,"Happiness Score":3.592999935  },
    {
       "id":"ZM","Country":"Zambia","Happiness Rank":116,"Happiness Score":4.513999939  },
    {
       "id":"ZW","Country":"Zimbabwe","Happiness Rank":138,"Happiness Score":3.875  }
  ],
 
  [
    {
       "id":"AF","Country":"Afghanistan","Happiness Rank":145,"Happiness Score":3.632  },
    {
       "id":"AL","Country":"Albania","Happiness Rank":112,"Happiness Score":4.586  },
    {
       "id":"DZ","Country":"Algeria","Happiness Rank":84,"Happiness Score":5.295  },
    {
       "id":"AR","Country":"Argentina","Happiness Rank":29,"Happiness Score":6.388  },
    {
       "id":"AM","Country":"Armenia","Happiness Rank":129,"Happiness Score":4.321  },
    {
       "id":"AU","Country":"Australia","Happiness Rank":10,"Happiness Score":7.272  },
    {
       "id":"AT","Country":"Austria","Happiness Rank":12,"Happiness Score":7.139  },
    {
       "id":"AZ","Country":"Azerbaijan","Happiness Rank":87,"Happiness Score":5.201  },
    {
       "id":"BH","Country":"Bahrain","Happiness Rank":43,"Happiness Score":6.105  },
    {
       "id":"BD","Country":"Bangladesh","Happiness Rank":115,"Happiness Score":4.5  },
    {
       "id":"BY","Country":"Belarus","Happiness Rank":73,"Happiness Score":5.483  },
    {
       "id":"BE","Country":"Belgium","Happiness Rank":16,"Happiness Score":6.927  },
    {
       "id":"BJ","Country":"Benin","Happiness Rank":136,"Happiness Score":4.141  },
    {
       "id":"BT","Country":"Bhutan","Happiness Rank":97,"Happiness Score":5.082  },
    {
       "id":"BO","Country":"Bolivia","Happiness Rank":62,"Happiness Score":5.752  },
    {
       "id":"BA","Country":"Bosnia and Herzegovina","Happiness Rank":93,"Happiness Score":5.129  },
    {
       "id":"BW","Country":"Botswana","Happiness Rank":146,"Happiness Score":3.59  },
    {
       "id":"BR","Country":"Brazil","Happiness Rank":28,"Happiness Score":6.419  },
    {
       "id":"BG","Country":"Bulgaria","Happiness Rank":100,"Happiness Score":4.933  },
    {
       "id":"BF","Country":"Burkina Faso","Happiness Rank":121,"Happiness Score":4.424  },
    {
       "id":"BI","Country":"Burundi","Happiness Rank":156,"Happiness Score":2.905  },
    {
       "id":"KH","Country":"Cambodia","Happiness Rank":120,"Happiness Score":4.433  },
    {
       "id":"CM","Country":"Cameroon","Happiness Rank":99,"Happiness Score":4.975  },
    {
       "id":"CA","Country":"Canada","Happiness Rank":7,"Happiness Score":7.328  },
    {
       "id":"TD","Country":"Chad","Happiness Rank":131,"Happiness Score":4.301  },
    {
       "id":"CL","Country":"Chile","Happiness Rank":25,"Happiness Score":6.476  },
    {
       "id":"CN","Country":"China","Happiness Rank":86,"Happiness Score":5.246  },
    {
       "id":"CO","Country":"Colombia","Happiness Rank":37,"Happiness Score":6.26  },
    {
       "id":"CD","Country":"Congo (Brazzaville)","Happiness Rank":114,"Happiness Score":4.559  },
    {
       "id":"CG","Country":"Congo (Kinshasa)","Happiness Rank":132,"Happiness Score":4.245  },
    {
       "id":"CR","Country":"Costa Rica","Happiness Rank":13,"Happiness Score":7.072  },
    {
       "id":"HR","Country":"Croatia","Happiness Rank":82,"Happiness Score":5.321  },
    {
       "id":"CY","Country":"Cyprus","Happiness Rank":61,"Happiness Score":5.762  },
    {
       "id":"CZ","Country":"Czech Republic","Happiness Rank":21,"Happiness Score":6.711  },
    {
       "id":"DK","Country":"Denmark","Happiness Rank":3,"Happiness Score":7.555  },
    {
       "id":"DO","Country":"Dominican Republic","Happiness Rank":83,"Happiness Score":5.302  },
    {
       "id":"EC","Country":"Ecuador","Happiness Rank":48,"Happiness Score":5.973  },
    {
       "id":"EG","Country":"Egypt","Happiness Rank":122,"Happiness Score":4.419  },
    {
       "id":"SV","Country":"El Salvador","Happiness Rank":40,"Happiness Score":6.167  },
    {
       "id":"EE","Country":"Estonia","Happiness Rank":63,"Happiness Score":5.739  },
    {
       "id":"ET","Country":"Ethiopia","Happiness Rank":127,"Happiness Score":4.35  },
    {
       "id":"FI","Country":"Finland","Happiness Rank":1,"Happiness Score":7.632  },
    {
       "id":"FR","Country":"France","Happiness Rank":23,"Happiness Score":6.489  },
    {
       "id":"GA","Country":"Gabon","Happiness Rank":103,"Happiness Score":4.758  },
    {
       "id":"GE","Country":"Georgia","Happiness Rank":128,"Happiness Score":4.34  },
    {
       "id":"DE","Country":"Germany","Happiness Rank":15,"Happiness Score":6.965  },
    {
       "id":"GH","Country":"Ghana","Happiness Rank":108,"Happiness Score":4.657  },
    {
       "id":"GR","Country":"Greece","Happiness Rank":79,"Happiness Score":5.358  },
    {
       "id":"GT","Country":"Guatemala","Happiness Rank":30,"Happiness Score":6.382  },
    {
       "id":"GN","Country":"Guinea","Happiness Rank":140,"Happiness Score":3.964  },
    {
       "id":"HT","Country":"Haiti","Happiness Rank":148,"Happiness Score":3.582  },
    {
       "id":"HN","Country":"Honduras","Happiness Rank":72,"Happiness Score":5.504  },
    {
       "id":"HK","Country":"Hong Kong","Happiness Rank":76,"Happiness Score":5.43  },
    {
       "id":"HU","Country":"Hungary","Happiness Rank":69,"Happiness Score":5.62  },
    {
       "id":"IS","Country":"Iceland","Happiness Rank":4,"Happiness Score":7.495  },
    {
       "id":"IN","Country":"India","Happiness Rank":133,"Happiness Score":4.19  },
    {
       "id":"ID","Country":"Indonesia","Happiness Rank":96,"Happiness Score":5.093  },
    {
       "id":"IR","Country":"Iran","Happiness Rank":106,"Happiness Score":4.707  },
    {
       "id":"IQ","Country":"Iraq","Happiness Rank":117,"Happiness Score":4.456  },
    {
       "id":"IE","Country":"Ireland","Happiness Rank":14,"Happiness Score":6.977  },
    {
       "id":"IL","Country":"Israel","Happiness Rank":19,"Happiness Score":6.814  },
    {
       "id":"IT","Country":"Italy","Happiness Rank":47,"Happiness Score":6  },
    {
       "id":"CI","Country":"Ivory Coast","Happiness Rank":107,"Happiness Score":4.671  },
    {
       "id":"JM","Country":"Jamaica","Happiness Rank":56,"Happiness Score":5.89  },
    {
       "id":"JP","Country":"Japan","Happiness Rank":54,"Happiness Score":5.915  },
    {
       "id":"JO","Country":"Jordan","Happiness Rank":90,"Happiness Score":5.161  },
    {
       "id":"KZ","Country":"Kazakhstan","Happiness Rank":60,"Happiness Score":5.79  },
    {
       "id":"KE","Country":"Kenya","Happiness Rank":124,"Happiness Score":4.41  },
    {
       "id":"XK","Country":"Kosovo","Happiness Rank":66,"Happiness Score":5.662  },
    {
       "id":"KW","Country":"Kuwait","Happiness Rank":45,"Happiness Score":6.083  },
    {
       "id":"KG","Country":"Kyrgyzstan","Happiness Rank":92,"Happiness Score":5.131  },
    {
       "id":"LV","Country":"Latvia","Happiness Rank":53,"Happiness Score":5.933  },
    {
       "id":"LB","Country":"Lebanon","Happiness Rank":80,"Happiness Score":5.358  },
    {
       "id":"LR","Country":"Liberia","Happiness Rank":149,"Happiness Score":3.495  },
    {
       "id":"LY","Country":"Libya","Happiness Rank":70,"Happiness Score":5.566  },
    {
       "id":"LT","Country":"Lithuania","Happiness Rank":50,"Happiness Score":5.952  },
    {
       "id":"LU","Country":"Luxembourg","Happiness Rank":17,"Happiness Score":6.91  },
    {
       "id":"MG","Country":"Madagascar","Happiness Rank":143,"Happiness Score":3.774  },
    {
       "id":"MW","Country":"Malawi","Happiness Rank":147,"Happiness Score":3.587  },
    {
       "id":"MY","Country":"Malaysia","Happiness Rank":35,"Happiness Score":6.322  },
    {
       "id":"ML","Country":"Mali","Happiness Rank":118,"Happiness Score":4.447  },
    {
       "id":"MT","Country":"Malta","Happiness Rank":22,"Happiness Score":6.627  },
    {
       "id":"MR","Country":"Mauritania","Happiness Rank":126,"Happiness Score":4.356  },
    {
       "id":"MU","Country":"Mauritius","Happiness Rank":55,"Happiness Score":5.891  },
    {
       "id":"MX","Country":"Mexico","Happiness Rank":24,"Happiness Score":6.488  },
    {
       "id":"MD","Country":"Moldova","Happiness Rank":67,"Happiness Score":5.64  },
    {
       "id":"MN","Country":"Mongolia","Happiness Rank":94,"Happiness Score":5.125  },
    {
       "id":"ME","Country":"Montenegro","Happiness Rank":81,"Happiness Score":5.347  },
    {
       "id":"MA","Country":"Morocco","Happiness Rank":85,"Happiness Score":5.254  },
    {
       "id":"MM","Country":"Myanmar","Happiness Rank":130,"Happiness Score":4.308  },
    {
       "id":"NP","Country":"Nepal","Happiness Rank":101,"Happiness Score":4.88  },
    {
       "id":"NL","Country":"Netherlands","Happiness Rank":6,"Happiness Score":7.441  },
    {
       "id":"NZ","Country":"New Zealand","Happiness Rank":8,"Happiness Score":7.324  },
    {
       "id":"NI","Country":"Nicaragua","Happiness Rank":41,"Happiness Score":6.141  },
    {
       "id":"NE","Country":"Niger","Happiness Rank":134,"Happiness Score":4.166  },
    {
       "id":"NG","Country":"Nigeria","Happiness Rank":91,"Happiness Score":5.155  },
    {
       "id":"CY","Country":"Northern Cyprus","Happiness Rank":58,"Happiness Score":5.835  },
    {
       "id":"NO","Country":"Norway","Happiness Rank":2,"Happiness Score":7.594  },
    {
       "id":"PK","Country":"Pakistan","Happiness Rank":75,"Happiness Score":5.472  },
    {
       "id":"PT","Country":"Palestinian Territories","Happiness Rank":104,"Happiness Score":4.743  },
    {
       "id":"PA","Country":"Panama","Happiness Rank":27,"Happiness Score":6.43  },
    {
       "id":"PY","Country":"Paraguay","Happiness Rank":64,"Happiness Score":5.681  },
    {
       "id":"PE","Country":"Peru","Happiness Rank":65,"Happiness Score":5.663  },
    {
       "id":"PH","Country":"Philippines","Happiness Rank":71,"Happiness Score":5.524  },
    {
       "id":"PL","Country":"Poland","Happiness Rank":42,"Happiness Score":6.123  },
    {
       "id":"PT","Country":"Portugal","Happiness Rank":77,"Happiness Score":5.41  },
    {
       "id":"QA","Country":"Qatar","Happiness Rank":32,"Happiness Score":6.374  },
    {
       "id":"RO","Country":"Romania","Happiness Rank":52,"Happiness Score":5.945  },
    {
       "id":"RU","Country":"Russia","Happiness Rank":59,"Happiness Score":5.81  },
    {
       "id":"RW","Country":"Rwanda","Happiness Rank":151,"Happiness Score":3.408  },
    {
       "id":"SA","Country":"Saudi Arabia","Happiness Rank":33,"Happiness Score":6.371  },
    {
       "id":"SN","Country":"Senegal","Happiness Rank":109,"Happiness Score":4.631  },
    {
       "id":"RS","Country":"Serbia","Happiness Rank":78,"Happiness Score":5.398  },
    {
       "id":"SL","Country":"Sierra Leone","Happiness Rank":113,"Happiness Score":4.571  },
    {
       "id":"SG","Country":"Singapore","Happiness Rank":34,"Happiness Score":6.343  },
    {
       "id":"SK","Country":"Slovakia","Happiness Rank":39,"Happiness Score":6.173  },
    {
       "id":"SI","Country":"Slovenia","Happiness Rank":51,"Happiness Score":5.948  },
    {
       "id":"SO","Country":"Somalia","Happiness Rank":98,"Happiness Score":4.982  },
    {
       "id":"ZA","Country":"South Africa","Happiness Rank":105,"Happiness Score":4.724  },
    {
       "id":"SK","Country":"South Korea","Happiness Rank":57,"Happiness Score":5.875  },
    {
       "id":"ES","Country":"Spain","Happiness Rank":36,"Happiness Score":6.31  },
    {
       "id":"LK","Country":"Sri Lanka","Happiness Rank":116,"Happiness Score":4.471  },
    {
       "id":"SE","Country":"Sweden","Happiness Rank":9,"Happiness Score":7.314  },
    {
       "id":"CH","Country":"Switzerland","Happiness Rank":5,"Happiness Score":7.487  },
    {
       "id":"SY","Country":"Syria","Happiness Rank":150,"Happiness Score":3.462  },
    {
       "id":"TW","Country":"Taiwan","Happiness Rank":26,"Happiness Score":6.441  },
    {
       "id":"TJ","Country":"Tajikistan","Happiness Rank":88,"Happiness Score":5.199  },
    {
       "id":"TZ","Country":"Tanzania","Happiness Rank":153,"Happiness Score":3.303  },
    {
       "id":"TH","Country":"Thailand","Happiness Rank":46,"Happiness Score":6.072  },
    {
       "id":"TG","Country":"Togo","Happiness Rank":139,"Happiness Score":3.999  },
    {
       "id":"TT","Country":"Trinidad & Tobago","Happiness Rank":38,"Happiness Score":6.192  },
    {
       "id":"TN","Country":"Tunisia","Happiness Rank":111,"Happiness Score":4.592  },
    {
       "id":"TR","Country":"Turkey","Happiness Rank":74,"Happiness Score":5.483  },
    {
       "id":"TM","Country":"Turkmenistan","Happiness Rank":68,"Happiness Score":5.636  },
    {
       "id":"UG","Country":"Uganda","Happiness Rank":135,"Happiness Score":4.161  },
    {
       "id":"UA","Country":"Ukraine","Happiness Rank":138,"Happiness Score":4.103  },
    {
       "id":"AE","Country":"United Arab Emirates","Happiness Rank":20,"Happiness Score":6.774  },
    {
       "id":"GB","Country":"United Kingdom","Happiness Rank":11,"Happiness Score":7.19  },
    {
       "id":"US","Country":"United States","Happiness Rank":18,"Happiness Score":6.886  },
    {
       "id":"UY","Country":"Uruguay","Happiness Rank":31,"Happiness Score":6.379  },
    {
       "id":"UZ","Country":"Uzbekistan","Happiness Rank":44,"Happiness Score":6.096  },
    {
       "id":"VE","Country":"Venezuela","Happiness Rank":102,"Happiness Score":4.806  },
    {
       "id":"VN","Country":"Vietnam","Happiness Rank":95,"Happiness Score":5.103  },
    {
       "id":"YE","Country":"Yemen","Happiness Rank":152,"Happiness Score":3.355  },
    {
       "id":"ZM","Country":"Zambia","Happiness Rank":125,"Happiness Score":4.377  },
    {
       "id":"ZW","Country":"Zimbabwe","Happiness Rank":144,"Happiness Score":3.692  }
  ],
  
  [
    {
       "id":"AF","Country":"Afghanistan","Happiness Rank":154,"Happiness Score":3.203  },
    {
       "id":"AL","Country":"Albania","Happiness Rank":107,"Happiness Score":4.719  },
    {
       "id":"DZ","Country":"Algeria","Happiness Rank":88,"Happiness Score":5.211  },
    {
       "id":"AR","Country":"Argentina","Happiness Rank":47,"Happiness Score":6.086  },
    {
       "id":"AM","Country":"Armenia","Happiness Rank":116,"Happiness Score":4.559  },
    {
       "id":"AU","Country":"Australia","Happiness Rank":11,"Happiness Score":7.228  },
    {
       "id":"AT","Country":"Austria","Happiness Rank":10,"Happiness Score":7.246  },
    {
       "id":"AZ","Country":"Azerbaijan","Happiness Rank":90,"Happiness Score":5.208  },
    {
       "id":"BH","Country":"Bahrain","Happiness Rank":37,"Happiness Score":6.199  },
    {
       "id":"BD","Country":"Bangladesh","Happiness Rank":125,"Happiness Score":4.456  },
    {
       "id":"BY","Country":"Belarus","Happiness Rank":81,"Happiness Score":5.323  },
    {
       "id":"BE","Country":"Belgium","Happiness Rank":18,"Happiness Score":6.923  },
    {
       "id":"BJ","Country":"Benin","Happiness Rank":102,"Happiness Score":4.883  },
    {
       "id":"BT","Country":"Bhutan","Happiness Rank":95,"Happiness Score":5.082  },
    {
       "id":"BO","Country":"Bolivia","Happiness Rank":61,"Happiness Score":5.779  },
    {
       "id":"BA","Country":"Bosnia and Herzegovina","Happiness Rank":78,"Happiness Score":5.386  },
    {
       "id":"BW","Country":"Botswana","Happiness Rank":148,"Happiness Score":3.488  },
    {
       "id":"BR","Country":"Brazil","Happiness Rank":32,"Happiness Score":6.3  },
    {
       "id":"BG","Country":"Bulgaria","Happiness Rank":97,"Happiness Score":5.011  },
    {
       "id":"BF","Country":"Burkina Faso","Happiness Rank":115,"Happiness Score":4.587  },
    {
       "id":"BI","Country":"Burundi","Happiness Rank":145,"Happiness Score":3.775  },
    {
       "id":"KH","Country":"Cambodia","Happiness Rank":109,"Happiness Score":4.7  },
    {
       "id":"CM","Country":"Cameroon","Happiness Rank":96,"Happiness Score":5.044  },
    {
       "id":"CA","Country":"Canada","Happiness Rank":9,"Happiness Score":7.278  },
    {
       "id":"TD","Country":"Chad","Happiness Rank":132,"Happiness Score":4.35  },
    {
       "id":"CL","Country":"Chile","Happiness Rank":26,"Happiness Score":6.444  },
    {
       "id":"CN","Country":"China","Happiness Rank":93,"Happiness Score":5.191  },
    {
       "id":"CO","Country":"Colombia","Happiness Rank":43,"Happiness Score":6.125  },
    {
       "id":"CD","Country":"Congo (Brazzaville)","Happiness Rank":103,"Happiness Score":4.812  },
    {
       "id":"CG","Country":"Congo (Kinshasa)","Happiness Rank":127,"Happiness Score":4.418  },
    {
       "id":"CR","Country":"Costa Rica","Happiness Rank":12,"Happiness Score":7.167  },
    {
       "id":"HR","Country":"Croatia","Happiness Rank":75,"Happiness Score":5.432  },
    {
       "id":"CY","Country":"Cyprus","Happiness Rank":49,"Happiness Score":6.046  },
    {
       "id":"CZ","Country":"Czech Republic","Happiness Rank":20,"Happiness Score":6.852  },
    {
       "id":"DK","Country":"Denmark","Happiness Rank":2,"Happiness Score":7.6  },
    {
       "id":"DO","Country":"Dominican Republic","Happiness Rank":77,"Happiness Score":5.425  },
    {
       "id":"EC","Country":"Ecuador","Happiness Rank":50,"Happiness Score":6.028  },
    {
       "id":"EG","Country":"Egypt","Happiness Rank":137,"Happiness Score":4.166  },
    {
       "id":"SV","Country":"El Salvador","Happiness Rank":35,"Happiness Score":6.253  },
    {
       "id":"EE","Country":"Estonia","Happiness Rank":55,"Happiness Score":5.893  },
    {
       "id":"ET","Country":"Ethiopia","Happiness Rank":134,"Happiness Score":4.286  },
    {
       "id":"FI","Country":"Finland","Happiness Rank":1,"Happiness Score":7.769  },
    {
       "id":"FR","Country":"France","Happiness Rank":24,"Happiness Score":6.592  },
    {
       "id":"GA","Country":"Gabon","Happiness Rank":104,"Happiness Score":4.799  },
    {
       "id":"GE","Country":"Georgia","Happiness Rank":119,"Happiness Score":4.519  },
    {
       "id":"DE","Country":"Germany","Happiness Rank":17,"Happiness Score":6.985  },
    {
       "id":"GH","Country":"Ghana","Happiness Rank":98,"Happiness Score":4.996  },
    {
       "id":"GR","Country":"Greece","Happiness Rank":82,"Happiness Score":5.287  },
    {
       "id":"GT","Country":"Guatemala","Happiness Rank":27,"Happiness Score":6.436  },
    {
       "id":"GN","Country":"Guinea","Happiness Rank":118,"Happiness Score":4.534  },
    {
       "id":"HT","Country":"Haiti","Happiness Rank":147,"Happiness Score":3.597  },
    {
       "id":"HN","Country":"Honduras","Happiness Rank":59,"Happiness Score":5.86  },
    {
       "id":"HK","Country":"Hong Kong","Happiness Rank":76,"Happiness Score":5.43  },
    {
       "id":"HU","Country":"Hungary","Happiness Rank":62,"Happiness Score":5.758  },
    {
       "id":"IS","Country":"Iceland","Happiness Rank":4,"Happiness Score":7.494  },
    {
       "id":"IN","Country":"India","Happiness Rank":140,"Happiness Score":4.015  },
    {
       "id":"ID","Country":"Indonesia","Happiness Rank":92,"Happiness Score":5.192  },
    {
       "id":"IR","Country":"Iran","Happiness Rank":117,"Happiness Score":4.548  },
    {
       "id":"IQ","Country":"Iraq","Happiness Rank":126,"Happiness Score":4.437  },
    {
       "id":"IE","Country":"Ireland","Happiness Rank":16,"Happiness Score":7.021  },
    {
       "id":"IL","Country":"Israel","Happiness Rank":13,"Happiness Score":7.139  },
    {
       "id":"IT","Country":"Italy","Happiness Rank":36,"Happiness Score":6.223  },
    {
       "id":"CI","Country":"Ivory Coast","Happiness Rank":99,"Happiness Score":4.944  },
    {
       "id":"JM","Country":"Jamaica","Happiness Rank":56,"Happiness Score":5.89  },
    {
       "id":"JP","Country":"Japan","Happiness Rank":58,"Happiness Score":5.886  },
    {
       "id":"JO","Country":"Jordan","Happiness Rank":101,"Happiness Score":4.906  },
    {
       "id":"KZ","Country":"Kazakhstan","Happiness Rank":60,"Happiness Score":5.809  },
    {
       "id":"KE","Country":"Kenya","Happiness Rank":121,"Happiness Score":4.509  },
    {
       "id":"XK","Country":"Kosovo","Happiness Rank":46,"Happiness Score":6.1  },
    {
       "id":"KW","Country":"Kuwait","Happiness Rank":51,"Happiness Score":6.021  },
    {
       "id":"KG","Country":"Kyrgyzstan","Happiness Rank":86,"Happiness Score":5.261  },
    {
       "id":"LV","Country":"Latvia","Happiness Rank":53,"Happiness Score":5.94  },
    {
       "id":"LB","Country":"Lebanon","Happiness Rank":91,"Happiness Score":5.197  },
    {
       "id":"LR","Country":"Liberia","Happiness Rank":141,"Happiness Score":3.975  },
    {
       "id":"LY","Country":"Libya","Happiness Rank":72,"Happiness Score":5.525  },
    {
       "id":"LT","Country":"Lithuania","Happiness Rank":42,"Happiness Score":6.149  },
    {
       "id":"LU","Country":"Luxembourg","Happiness Rank":14,"Happiness Score":7.09  },
    {
       "id":"MG","Country":"Madagascar","Happiness Rank":143,"Happiness Score":3.933  },
    {
       "id":"MW","Country":"Malawi","Happiness Rank":150,"Happiness Score":3.41  },
    {
       "id":"MY","Country":"Malaysia","Happiness Rank":80,"Happiness Score":5.339  },
    {
       "id":"ML","Country":"Mali","Happiness Rank":128,"Happiness Score":4.39  },
    {
       "id":"MT","Country":"Malta","Happiness Rank":22,"Happiness Score":6.726  },
    {
       "id":"MR","Country":"Mauritania","Happiness Rank":122,"Happiness Score":4.49  },
    {
       "id":"MU","Country":"Mauritius","Happiness Rank":57,"Happiness Score":5.888  },
    {
       "id":"MX","Country":"Mexico","Happiness Rank":23,"Happiness Score":6.595  },
    {
       "id":"MD","Country":"Moldova","Happiness Rank":71,"Happiness Score":5.529  },
    {
       "id":"MN","Country":"Mongolia","Happiness Rank":83,"Happiness Score":5.285  },
    {
       "id":"ME","Country":"Montenegro","Happiness Rank":73,"Happiness Score":5.523  },
    {
       "id":"MA","Country":"Morocco","Happiness Rank":89,"Happiness Score":5.208  },
    {
       "id":"MM","Country":"Myanmar","Happiness Rank":131,"Happiness Score":4.36  },
    {
       "id":"NP","Country":"Nepal","Happiness Rank":100,"Happiness Score":4.913  },
    {
       "id":"NL","Country":"Netherlands","Happiness Rank":5,"Happiness Score":7.488  },
    {
       "id":"NZ","Country":"New Zealand","Happiness Rank":8,"Happiness Score":7.307  },
    {
       "id":"NI","Country":"Nicaragua","Happiness Rank":45,"Happiness Score":6.105  },
    {
       "id":"NE","Country":"Niger","Happiness Rank":114,"Happiness Score":4.628  },
    {
       "id":"NG","Country":"Nigeria","Happiness Rank":85,"Happiness Score":5.265  },
    {
       "id":"CY","Country":"Northern Cyprus","Happiness Rank":64,"Happiness Score":5.718  },
    {
       "id":"NO","Country":"Norway","Happiness Rank":3,"Happiness Score":7.554  },
    {
       "id":"PK","Country":"Pakistan","Happiness Rank":67,"Happiness Score":5.653  },
    {
       "id":"PT","Country":"Palestinian Territories","Happiness Rank":110,"Happiness Score":4.696  },
    {
       "id":"PA","Country":"Panama","Happiness Rank":31,"Happiness Score":6.321  },
    {
       "id":"PY","Country":"Paraguay","Happiness Rank":63,"Happiness Score":5.743  },
    {
       "id":"PE","Country":"Peru","Happiness Rank":65,"Happiness Score":5.697  },
    {
       "id":"PH","Country":"Philippines","Happiness Rank":69,"Happiness Score":5.631  },
    {
       "id":"PL","Country":"Poland","Happiness Rank":40,"Happiness Score":6.182  },
    {
       "id":"PT","Country":"Portugal","Happiness Rank":66,"Happiness Score":5.693  },
    {
       "id":"QA","Country":"Qatar","Happiness Rank":29,"Happiness Score":6.374  },
    {
       "id":"RO","Country":"Romania","Happiness Rank":48,"Happiness Score":6.07  },
    {
       "id":"RU","Country":"Russia","Happiness Rank":68,"Happiness Score":5.648  },
    {
       "id":"RW","Country":"Rwanda","Happiness Rank":152,"Happiness Score":3.334  },
    {
       "id":"SA","Country":"Saudi Arabia","Happiness Rank":28,"Happiness Score":6.375  },
    {
       "id":"SN","Country":"Senegal","Happiness Rank":111,"Happiness Score":4.681  },
    {
       "id":"RS","Country":"Serbia","Happiness Rank":70,"Happiness Score":5.603  },
    {
       "id":"SL","Country":"Sierra Leone","Happiness Rank":129,"Happiness Score":4.374  },
    {
       "id":"SG","Country":"Singapore","Happiness Rank":34,"Happiness Score":6.262  },
    {
       "id":"SK","Country":"Slovakia","Happiness Rank":38,"Happiness Score":6.198  },
    {
       "id":"SI","Country":"Slovenia","Happiness Rank":44,"Happiness Score":6.118  },
    {
       "id":"SO","Country":"Somalia","Happiness Rank":112,"Happiness Score":4.668  },
    {
       "id":"ZA","Country":"South Africa","Happiness Rank":106,"Happiness Score":4.722  },
    {
       "id":"SK","Country":"South Korea","Happiness Rank":54,"Happiness Score":5.895  },
    {
       "id":"ES","Country":"Spain","Happiness Rank":30,"Happiness Score":6.354  },
    {
       "id":"LK","Country":"Sri Lanka","Happiness Rank":130,"Happiness Score":4.366  },
    {
       "id":"SE","Country":"Sweden","Happiness Rank":7,"Happiness Score":7.343  },
    {
       "id":"CH","Country":"Switzerland","Happiness Rank":6,"Happiness Score":7.48  },
    {
       "id":"SY","Country":"Syria","Happiness Rank":149,"Happiness Score":3.462  },
    {
       "id":"TW","Country":"Taiwan","Happiness Rank":25,"Happiness Score":6.446  },
    {
       "id":"TJ","Country":"Tajikistan","Happiness Rank":74,"Happiness Score":5.467  },
    {
       "id":"TZ","Country":"Tanzania","Happiness Rank":153,"Happiness Score":3.231  },
    {
       "id":"TH","Country":"Thailand","Happiness Rank":52,"Happiness Score":6.008  },
    {
       "id":"TG","Country":"Togo","Happiness Rank":139,"Happiness Score":4.085  },
    {
       "id":"TT","Country":"Trinidad & Tobago","Happiness Rank":39,"Happiness Score":6.192  },
    {
       "id":"TN","Country":"Tunisia","Happiness Rank":124,"Happiness Score":4.461  },
    {
       "id":"TR","Country":"Turkey","Happiness Rank":79,"Happiness Score":5.373  },
    {
       "id":"TM","Country":"Turkmenistan","Happiness Rank":87,"Happiness Score":5.247  },
    {
       "id":"UG","Country":"Uganda","Happiness Rank":136,"Happiness Score":4.189  },
    {
       "id":"UA","Country":"Ukraine","Happiness Rank":133,"Happiness Score":4.332  },
    {
       "id":"AE","Country":"United Arab Emirates","Happiness Rank":21,"Happiness Score":6.825  },
    {
       "id":"GB","Country":"United Kingdom","Happiness Rank":15,"Happiness Score":7.054  },
    {
       "id":"US","Country":"United States","Happiness Rank":19,"Happiness Score":6.892  },
    {
       "id":"UY","Country":"Uruguay","Happiness Rank":33,"Happiness Score":6.293  },
    {
       "id":"UZ","Country":"Uzbekistan","Happiness Rank":41,"Happiness Score":6.174  },
    {
       "id":"VE","Country":"Venezuela","Happiness Rank":108,"Happiness Score":4.707  },
    {
       "id":"VN","Country":"Vietnam","Happiness Rank":94,"Happiness Score":5.175  },
    {
       "id":"YE","Country":"Yemen","Happiness Rank":151,"Happiness Score":3.38  },
    {
       "id":"ZM","Country":"Zambia","Happiness Rank":138,"Happiness Score":4.107  },
    {
       "id":"ZW","Country":"Zimbabwe","Happiness Rank":146,"Happiness Score":3.663  }
  ]];
  
  
  ngOnInit() {
    this.loadChart();
    this.imageSeries.data = this.mapData[4];
    this.title.text = "[bold font-size: 18]Happiness Score of the World in " + "2019";
  }

  loadChart(){
    // Create map instance
    let chart = am4core.create("chartdiv", am4maps.MapChart);

    this.title = chart.titles.create();
    
    this.title.textAlign = "middle";

    // Set map definition
    chart.geodata = am4geodata_worldLow;

    // Set projection
    chart.projection = new am4maps.projections.Miller();

    // Create map polygon series
    let polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());
    polygonSeries.exclude = ["AQ"];
    polygonSeries.useGeodata = true;
    polygonSeries.nonScalingStroke = true;
    polygonSeries.strokeWidth = 0.5;
    polygonSeries.calculateVisualCenter = true;

    this.imageSeries = chart.series.push(new am4maps.MapImageSeries());
    // imageSeries.data = this.mapData;
    this.imageSeries.dataFields.value = "Happiness Score";

    let imageTemplate = this.imageSeries.mapImages.template;
    imageTemplate.nonScaling = true

    let circle = imageTemplate.createChild(am4core.Circle);
    circle.fillOpacity = 0.7;
    circle.tooltipText = "{Country}: [bold]{Happiness Score}[/]";


    this.imageSeries.heatRules.push({
      "target": circle,
      "property": "radius",
      "min": 1,
      "max": 10,
      "dataField": "value"
    })

    this.imageSeries.heatRules.push({
      "target": circle,
      "property": "fill",
      min: chart.colors.getIndex(0).brighten(1),
      max: chart.colors.getIndex(0).brighten(-0.9),
      "dataField": "value"
    })

    imageTemplate.adapter.add("latitude", function (latitude, target) {
      const ctx = target.dataItem.dataContext as any;
      let polygon = polygonSeries.getPolygonById(ctx.id);
      if (polygon) {
        return polygon.visualLatitude;
      }
      return latitude;
    })

    imageTemplate.adapter.add("longitude", function (longitude, target) {
      const ctx = target.dataItem.dataContext as any;
      let polygon = polygonSeries.getPolygonById(ctx.id);
      if (polygon) {
        return polygon.visualLongitude;
      }
      return longitude;
    })

    let heatLegend = chart.createChild(am4charts.HeatLegend);
    heatLegend.minColor = chart.colors.getIndex(0).brighten(1);
    heatLegend.maxColor = chart.colors.getIndex(0).brighten(-0.9);
    heatLegend.minValue = 2.8;
    heatLegend.maxValue = 7.7;
    heatLegend.orientation = "vertical";
    // heatLegend = "Series: [bold {color}]{name}[/]";

    setInterval(()=>{
      if(this.icon=="pause")
        this.i++;
      if(this.i==5)
        this.i=0;
      this.imageSeries.data = this.mapData[this.i];
      this.title.text = "[bold font-size: 18]Happiness Score of the World in " + (2015+this.i).toString();
      
   }, 3000);
  }
  
  
}
