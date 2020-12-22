import { Component, OnInit } from '@angular/core';
/* Imports */
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

/* Chart code */
// Themes begin
am4core.useTheme(am4themes_animated);
// Themes end

@Component({
  selector: 'app-donut',
  templateUrl: './donut.component.html',
  styleUrls: ['./donut.component.css']
})
export class DonutComponent implements OnInit {

  countries = [
    "Afghanistan",
    "Albania",
    "Algeria",
    "Argentina",
    "Armenia",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Bahrain",
    "Bangladesh",
    "Belarus",
    "Belgium",
    "Benin",
    "Bhutan",
    "Bolivia",
    "Bosnia and Herzegovina",
    "Botswana",
    "Brazil",
    "Bulgaria",
    "Burkina Faso",
    "Burundi",
    "Cambodia",
    "Cameroon",
    "Canada",
    "Chad",
    "Chile",
    "China",
    "Colombia",
    "Congo (Brazzaville)",
    "Congo (Kinshasa)",
    "Costa Rica",
    "Croatia",
    "Cyprus",
    "Czech Republic",
    "Denmark",
    "Dominican Republic",
    "Ecuador",
    "Egypt",
    "El Salvador",
    "Estonia",
    "Ethiopia",
    "Finland",
    "France",
    "Gabon",
    "Georgia",
    "Germany",
    "Ghana",
    "Greece",
    "Guatemala",
    "Guinea",
    "Haiti",
    "Honduras",
    "Hong Kong",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "Iran",
    "Iraq",
    "Ireland",
    "Israel",
    "Italy",
    "Ivory Coast",
    "Jamaica",
    "Japan",
    "Jordan",
    "Kazakhstan",
    "Kenya",
    "Kosovo",
    "Kuwait",
    "Kyrgyzstan",
    "Latvia",
    "Lebanon",
    "Liberia",
    "Libya",
    "Lithuania",
    "Luxembourg",
    "Madagascar",
    "Malawi",
    "Malaysia",
    "Mali",
    "Malta",
    "Mauritania",
    "Mauritius",
    "Mexico",
    "Moldova",
    "Mongolia",
    "Montenegro",
    "Morocco",
    "Myanmar",
    "Nepal",
    "Netherlands",
    "New Zealand",
    "Nicaragua",
    "Niger",
    "Nigeria",
    "Northern Cyprus",
    "Norway",
    "Pakistan",
    "Palestinian Territories",
    "Panama",
    "Paraguay",
    "Peru",
    "Philippines",
    "Poland",
    "Portugal",
    "Qatar",
    "Romania",
    "Russia",
    "Rwanda",
    "Saudi Arabia",
    "Senegal",
    "Serbia",
    "Sierra Leone",
    "Singapore",
    "Slovakia",
    "Slovenia",
    "Somalia",
    "South Africa",
    "South Korea",
    "Spain",
    "Sri Lanka",
    "Sweden",
    "Switzerland",
    "Syria",
    "Taiwan",
    "Tajikistan",
    "Tanzania",
    "Thailand",
    "Togo",
    "Trinidad & Tobago",
    "Tunisia",
    "Turkey",
    "Turkmenistan",
    "Uganda",
    "Ukraine",
    "United Arab Emirates",
    "United Kingdom",
    "United States",
    "Uruguay",
    "Uzbekistan",
    "Venezuela",
    "Vietnam",
    "Yemen",
    "Zambia",
    "Zimbabwe"
  ];
  constructor() { }
  selectedValue = 'Afghanistan';
  onSelectCountry() {
    this.chart.data = this.data2015[this.selectedValue];
    this.chart2.data = this.data2016[this.selectedValue];
    this.chart3.data = this.data2017[this.selectedValue];
    this.chart4.data = this.data2018[this.selectedValue];
    this.chart5.data = this.data2019[this.selectedValue];
  }
  chart: any;
  chart2: any;
  chart3: any;
  chart4: any;
  chart5: any;

  data2015 = {

    "Afghanistan":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.32
        }, {
          "Factor": "Social support"
          , "Value": 0.30
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.30
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.23
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.10
        },
        {
          "Factor": "Generosity"
          , "Value": 0.37
        }, {
          "Factor": "Dystopia Residual"
          , "Value": 1.95
        }
      ]
    ,
    "Albania":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.88
        }, {
          "Factor": "Social support"
          , "Value": 0.80
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.81
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.36
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.06
        },
        {
          "Factor": "Generosity"
          , "Value": 0.14
        }, {
          "Factor": "Dystopia Residual"
          , "Value": 1.90
        }
      ]
    ,
    "Algeria":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.94
        }, {
          "Factor": "Social support"
          , "Value": 1.08
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.62
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.29
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.17
        },
        {
          "Factor": "Generosity"
          , "Value": 0.08
        }, {
          "Factor": "Dystopia Residual"
          , "Value": 2.43
        }
      ]
    ,
    "Argentina":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.05
        }, {
          "Factor": "Social support"
          , "Value": 1.25
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.79
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.45
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.08
        },
        {
          "Factor": "Generosity"
          , "Value": 0.11
        }, {
          "Factor": "Dystopia Residual"
          , "Value": 2.84
        }
      ]
    ,
    "Armenia":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.77
        }, {
          "Factor": "Social support"
          , "Value": 0.78
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.73
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.20
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.04
        },
        {
          "Factor": "Generosity"
          , "Value": 0.08
        }, {
          "Factor": "Dystopia Residual"
          , "Value": 1.76
        }
      ]
    ,
    "Australia":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.33
        }, {
          "Factor": "Social support"
          , "Value": 1.31
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.93
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.65
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.36
        },
        {
          "Factor": "Generosity"
          , "Value": 0.44
        }, {
          "Factor": "Dystopia Residual"
          , "Value": 2.27
        }
      ]
    ,
    "Austria":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.34
        }, {
          "Factor": "Social support"
          , "Value": 1.30
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.89
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.62
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.19
        },
        {
          "Factor": "Generosity"
          , "Value": 0.33
        }, {
          "Factor": "Dystopia Residual"
          , "Value": 2.53
        }
      ]
    ,
    "Azerbaijan":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.02
        }, {
          "Factor": "Social support"
          , "Value": 0.94
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.64
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.37
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.16
        },
        {
          "Factor": "Generosity"
          , "Value": 0.08
        }, {
          "Factor": "Dystopia Residual"
          , "Value": 2.00
        }
      ]
    ,
    "Bahrain":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.32
        }, {
          "Factor": "Social support"
          , "Value": 1.22
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.75
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.45
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.31
        },
        {
          "Factor": "Generosity"
          , "Value": 0.17
        }, {
          "Factor": "Dystopia Residual"
          , "Value": 1.74
        }
      ]
    ,
    "Bangladesh":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.40
        }, {
          "Factor": "Social support"
          , "Value": 0.43
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.60
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.41
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.13
        },
        {
          "Factor": "Generosity"
          , "Value": 0.21
        }, {
          "Factor": "Dystopia Residual"
          , "Value": 2.52
        }
      ]
    ,
    "Belarus":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.03
        }, {
          "Factor": "Social support"
          , "Value": 1.23
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.74
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.38
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.19
        },
        {
          "Factor": "Generosity"
          , "Value": 0.11
        }, {
          "Factor": "Dystopia Residual"
          , "Value": 2.13
        }
      ]
    ,
    "Belgium":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.31
        }, {
          "Factor": "Social support"
          , "Value": 1.29
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.90
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.58
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.23
        },
        {
          "Factor": "Generosity"
          , "Value": 0.22
        }, {
          "Factor": "Dystopia Residual"
          , "Value": 2.41
        }
      ]
    ,
    "Benin":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.29
        }, {
          "Factor": "Social support"
          , "Value": 0.35
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.32
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.48
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.08
        },
        {
          "Factor": "Generosity"
          , "Value": 0.18
        }, {
          "Factor": "Dystopia Residual"
          , "Value": 1.63
        }
      ]
    ,
    "Bhutan":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.77
        }, {
          "Factor": "Social support"
          , "Value": 1.10
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.57
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.53
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.15
        },
        {
          "Factor": "Generosity"
          , "Value": 0.48
        }, {
          "Factor": "Dystopia Residual"
          , "Value": 1.64
        }
      ]
    ,
    "Bolivia":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.68
        }, {
          "Factor": "Social support"
          , "Value": 0.98
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.54
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.57
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.09
        },
        {
          "Factor": "Generosity"
          , "Value": 0.21
        }, {
          "Factor": "Dystopia Residual"
          , "Value": 2.82
        }
      ]
    ,
    "Bosnia and Herzegovina":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.83
        }, {
          "Factor": "Social support"
          , "Value": 0.92
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.79
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.09
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.00
        },
        {
          "Factor": "Generosity"
          , "Value": 0.25
        }, {
          "Factor": "Dystopia Residual"
          , "Value": 2.06
        }
      ]
    ,
    "Botswana":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.99
        }, {
          "Factor": "Social support"
          , "Value": 1.10
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.05
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.49
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.12
        },
        {
          "Factor": "Generosity"
          , "Value": 0.10
        }, {
          "Factor": "Dystopia Residual"
          , "Value": 1.46
        }
      ]
    ,
    "Brazil":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.98
        }, {
          "Factor": "Social support"
          , "Value": 1.23
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.70
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.49
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.18
        },
        {
          "Factor": "Generosity"
          , "Value": 0.15
        }, {
          "Factor": "Dystopia Residual"
          , "Value": 3.26
        }
      ]
    ,
    "Bulgaria":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.01
        }, {
          "Factor": "Social support"
          , "Value": 1.11
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.77
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.31
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.01
        },
        {
          "Factor": "Generosity"
          , "Value": 0.12
        }, {
          "Factor": "Dystopia Residual"
          , "Value": 0.90
        }
      ]
    ,
    "Burkina Faso":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.26
        }, {
          "Factor": "Social support"
          , "Value": 0.85
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.27
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.39
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.13
        },
        {
          "Factor": "Generosity"
          , "Value": 0.22
        }, {
          "Factor": "Dystopia Residual"
          , "Value": 1.46
        }
      ]
    ,
    "Burundi":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.02
        }, {
          "Factor": "Social support"
          , "Value": 0.42
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.22
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.12
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.10
        },
        {
          "Factor": "Generosity"
          , "Value": 0.20
        }, {
          "Factor": "Dystopia Residual"
          , "Value": 1.83
        }
      ]
    ,
    "Cambodia":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.46
        }, {
          "Factor": "Social support"
          , "Value": 0.63
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.61
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.66
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.07
        },
        {
          "Factor": "Generosity"
          , "Value": 0.40
        }, {
          "Factor": "Dystopia Residual"
          , "Value": 0.98
        }
      ]
    ,
    "Cameroon":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.42
        }, {
          "Factor": "Social support"
          , "Value": 0.89
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.23
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.49
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.06
        },
        {
          "Factor": "Generosity"
          , "Value": 0.21
        }, {
          "Factor": "Dystopia Residual"
          , "Value": 1.95
        }
      ]
    ,
    "Canada":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.33
        }, {
          "Factor": "Social support"
          , "Value": 1.32
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.91
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.63
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.33
        },
        {
          "Factor": "Generosity"
          , "Value": 0.46
        }, {
          "Factor": "Dystopia Residual"
          , "Value": 2.45
        }
      ]
    ,
    "Chad":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.34
        }, {
          "Factor": "Social support"
          , "Value": 0.76
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.15
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.24
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.05
        },
        {
          "Factor": "Generosity"
          , "Value": 0.18
        }, {
          "Factor": "Dystopia Residual"
          , "Value": 1.94
        }
      ]
    ,
    "Chile":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.11
        }, {
          "Factor": "Social support"
          , "Value": 1.12
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.86
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.44
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.13
        },
        {
          "Factor": "Generosity"
          , "Value": 0.33
        }, {
          "Factor": "Dystopia Residual"
          , "Value": 2.68
        }
      ]
    ,
    "China":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.89
        }, {
          "Factor": "Social support"
          , "Value": 0.95
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.82
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.52
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.03
        },
        {
          "Factor": "Generosity"
          , "Value": 0.08
        }, {
          "Factor": "Dystopia Residual"
          , "Value": 1.86
        }
      ]
    ,
    "Colombia":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.92
        }, {
          "Factor": "Social support"
          , "Value": 1.24
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.69
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.53
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.05
        },
        {
          "Factor": "Generosity"
          , "Value": 0.18
        }, {
          "Factor": "Dystopia Residual"
          , "Value": 2.86
        }
      ]
    ,
    "Congo (Brazzaville)":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.68
        }, {
          "Factor": "Social support"
          , "Value": 0.66
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.31
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.41
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.12
        },
        {
          "Factor": "Generosity"
          , "Value": 0.12
        }, {
          "Factor": "Dystopia Residual"
          , "Value": 1.68
        }
      ]
    ,
    "Congo (Kinshasa)":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.00
        }, {
          "Factor": "Social support"
          , "Value": 1.00
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.10
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.23
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.08
        },
        {
          "Factor": "Generosity"
          , "Value": 0.25
        }, {
          "Factor": "Dystopia Residual"
          , "Value": 2.87
        }
      ]
    ,
    "Costa Rica":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.96
        }, {
          "Factor": "Social support"
          , "Value": 1.24
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.86
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.63
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.11
        },
        {
          "Factor": "Generosity"
          , "Value": 0.25
        }, {
          "Factor": "Dystopia Residual"
          , "Value": 3.18
        }
      ]
    ,
    "Croatia":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.08
        }, {
          "Factor": "Social support"
          , "Value": 0.80
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.79
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.26
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.02
        },
        {
          "Factor": "Generosity"
          , "Value": 0.05
        }, {
          "Factor": "Dystopia Residual"
          , "Value": 2.75
        }
      ]
    ,
    "Cyprus":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.21
        }, {
          "Factor": "Social support"
          , "Value": 0.89
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.92
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.41
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.06
        },
        {
          "Factor": "Generosity"
          , "Value": 0.31
        }, {
          "Factor": "Dystopia Residual"
          , "Value": 1.89
        }
      ]
    ,
    "Czech Republic":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.18
        }, {
          "Factor": "Social support"
          , "Value": 1.21
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.84
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.46
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.03
        },
        {
          "Factor": "Generosity"
          , "Value": 0.11
        }, {
          "Factor": "Dystopia Residual"
          , "Value": 2.68
        }
      ]
    ,
    "Denmark":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.33
        }, {
          "Factor": "Social support"
          , "Value": 1.36
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.87
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.65
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.48
        },
        {
          "Factor": "Generosity"
          , "Value": 0.34
        }, {
          "Factor": "Dystopia Residual"
          , "Value": 2.49
        }
      ]
    ,
    "Dominican Republic":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.90
        }, {
          "Factor": "Social support"
          , "Value": 1.17
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.67
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.58
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.14
        },
        {
          "Factor": "Generosity"
          , "Value": 0.22
        }, {
          "Factor": "Dystopia Residual"
          , "Value": 1.21
        }
      ]
    ,
    "Ecuador":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.86
        }, {
          "Factor": "Social support"
          , "Value": 1.00
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.79
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.49
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.18
        },
        {
          "Factor": "Generosity"
          , "Value": 0.12
        }, {
          "Factor": "Dystopia Residual"
          , "Value": 2.54
        }
      ]
    ,
    "Egypt":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.88
        }, {
          "Factor": "Social support"
          , "Value": 0.75
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.62
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.17
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.06
        },
        {
          "Factor": "Generosity"
          , "Value": 0.11
        }, {
          "Factor": "Dystopia Residual"
          , "Value": 1.60
        }
      ]
    ,
    "El Salvador":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.76
        }, {
          "Factor": "Social support"
          , "Value": 1.03
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.68
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.40
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.12
        },
        {
          "Factor": "Generosity"
          , "Value": 0.11
        }, {
          "Factor": "Dystopia Residual"
          , "Value": 3.04
        }
      ]
    ,
    "Estonia":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.15
        }, {
          "Factor": "Social support"
          , "Value": 1.23
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.77
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.45
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.15
        },
        {
          "Factor": "Generosity"
          , "Value": 0.09
        }, {
          "Factor": "Dystopia Residual"
          , "Value": 1.59
        }
      ]
    ,
    "Ethiopia":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.19
        }, {
          "Factor": "Social support"
          , "Value": 0.60
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.44
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.43
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.15
        },
        {
          "Factor": "Generosity"
          , "Value": 0.24
        }, {
          "Factor": "Dystopia Residual"
          , "Value": 2.45
        }
      ]
    ,
    "Finland":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.29
        }, {
          "Factor": "Social support"
          , "Value": 1.32
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.89
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.64
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.41
        },
        {
          "Factor": "Generosity"
          , "Value": 0.23
        }, {
          "Factor": "Dystopia Residual"
          , "Value": 2.62
        }
      ]
    ,
    "France":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.28
        }, {
          "Factor": "Social support"
          , "Value": 1.26
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.95
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.55
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.21
        },
        {
          "Factor": "Generosity"
          , "Value": 0.12
        }, {
          "Factor": "Dystopia Residual"
          , "Value": 2.21
        }
      ]
    ,
    "Gabon":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.06
        }, {
          "Factor": "Social support"
          , "Value": 0.91
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.43
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.32
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.11
        },
        {
          "Factor": "Generosity"
          , "Value": 0.07
        }, {
          "Factor": "Dystopia Residual"
          , "Value": 1.00
        }
      ]
    ,
    "Georgia":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.74
        }, {
          "Factor": "Social support"
          , "Value": 0.39
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.73
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.41
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.38
        },
        {
          "Factor": "Generosity"
          , "Value": 0.06
        }, {
          "Factor": "Dystopia Residual"
          , "Value": 1.60
        }
      ]
    ,
    "Germany":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.33
        }, {
          "Factor": "Social support"
          , "Value": 1.30
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.89
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.61
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.22
        },
        {
          "Factor": "Generosity"
          , "Value": 0.28
        }, {
          "Factor": "Dystopia Residual"
          , "Value": 2.12
        }
      ]
    ,
    "Ghana":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.55
        }, {
          "Factor": "Social support"
          , "Value": 0.68
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.40
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.42
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.04
        },
        {
          "Factor": "Generosity"
          , "Value": 0.23
        }, {
          "Factor": "Dystopia Residual"
          , "Value": 2.31
        }
      ]
    ,
    "Greece":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.15
        }, {
          "Factor": "Social support"
          , "Value": 0.93
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.88
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.08
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.01
        },
        {
          "Factor": "Generosity"
          , "Value": 0.00
        }, {
          "Factor": "Dystopia Residual"
          , "Value": 1.80
        }
      ]
    ,
    "Guatemala":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.75
        }, {
          "Factor": "Social support"
          , "Value": 1.04
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.64
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.58
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.09
        },
        {
          "Factor": "Generosity"
          , "Value": 0.27
        }, {
          "Factor": "Dystopia Residual"
          , "Value": 2.74
        }
      ]
    ,
    "Guinea":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.17
        }, {
          "Factor": "Social support"
          , "Value": 0.46
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.24
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.38
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.12
        },
        {
          "Factor": "Generosity"
          , "Value": 0.29
        }, {
          "Factor": "Dystopia Residual"
          , "Value": 1.99
        }
      ]
    ,
    "Haiti":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.27
        }, {
          "Factor": "Social support"
          , "Value": 0.74
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.39
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.24
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.17
        },
        {
          "Factor": "Generosity"
          , "Value": 0.46
        }, {
          "Factor": "Dystopia Residual"
          , "Value": 2.24
        }
      ]
    ,
    "Honduras":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.60
        }, {
          "Factor": "Social support"
          , "Value": 0.95
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.70
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.40
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.07
        },
        {
          "Factor": "Generosity"
          , "Value": 0.23
        }, {
          "Factor": "Dystopia Residual"
          , "Value": 1.84
        }
      ]
    ,
    "Hong Kong":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.39
        }, {
          "Factor": "Social support"
          , "Value": 1.06
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 1.01
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.60
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.37
        },
        {
          "Factor": "Generosity"
          , "Value": 0.39
        }, {
          "Factor": "Dystopia Residual"
          , "Value": 0.65
        }
      ]
    ,
    "Hungary":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.12
        }, {
          "Factor": "Social support"
          , "Value": 1.20
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.76
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.32
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.03
        },
        {
          "Factor": "Generosity"
          , "Value": 0.13
        }, {
          "Factor": "Dystopia Residual"
          , "Value": 1.24
        }
      ]
    ,
    "Iceland":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.30
        }, {
          "Factor": "Social support"
          , "Value": 1.40
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.95
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.63
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.14
        },
        {
          "Factor": "Generosity"
          , "Value": 0.44
        }, {
          "Factor": "Dystopia Residual"
          , "Value": 2.70
        }
      ]
    ,
    "India":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.64
        }, {
          "Factor": "Social support"
          , "Value": 0.38
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.52
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.40
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.08
        },
        {
          "Factor": "Generosity"
          , "Value": 0.26
        }, {
          "Factor": "Dystopia Residual"
          , "Value": 2.28
        }
      ]
    ,
    "Indonesia":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.83
        }, {
          "Factor": "Social support"
          , "Value": 1.09
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.64
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.47
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.00
        },
        {
          "Factor": "Generosity"
          , "Value": 0.52
        }, {
          "Factor": "Dystopia Residual"
          , "Value": 1.86
        }
      ]
    ,
    "Iran":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.01
        }, {
          "Factor": "Social support"
          , "Value": 0.54
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.70
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.30
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.06
        },
        {
          "Factor": "Generosity"
          , "Value": 0.38
        }, {
          "Factor": "Dystopia Residual"
          , "Value": 1.69
        }
      ]
    ,
    "Iraq":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.99
        }, {
          "Factor": "Social support"
          , "Value": 0.82
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.60
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.00
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.14
        },
        {
          "Factor": "Generosity"
          , "Value": 0.18
        }, {
          "Factor": "Dystopia Residual"
          , "Value": 1.95
        }
      ]
    ,
    "Ireland":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.34
        }, {
          "Factor": "Social support"
          , "Value": 1.37
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.90
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.62
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.29
        },
        {
          "Factor": "Generosity"
          , "Value": 0.46
        }, {
          "Factor": "Dystopia Residual"
          , "Value": 1.98
        }
      ]
    ,
    "Israel":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.23
        }, {
          "Factor": "Social support"
          , "Value": 1.22
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.91
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.41
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.08
        },
        {
          "Factor": "Generosity"
          , "Value": 0.33
        }, {
          "Factor": "Dystopia Residual"
          , "Value": 3.09
        }
      ]
    ,
    "Italy":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.25
        }, {
          "Factor": "Social support"
          , "Value": 1.20
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.95
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.26
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.03
        },
        {
          "Factor": "Generosity"
          , "Value": 0.23
        }, {
          "Factor": "Dystopia Residual"
          , "Value": 2.03
        }
      ]
    ,
    "Ivory Coast":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.47
        }, {
          "Factor": "Social support"
          , "Value": 0.77
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.15
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.47
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.18
        },
        {
          "Factor": "Generosity"
          , "Value": 0.20
        }, {
          "Factor": "Dystopia Residual"
          , "Value": 1.42
        }
      ]
    ,
    "Jamaica":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.81
        }, {
          "Factor": "Social support"
          , "Value": 1.15
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.69
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.50
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.02
        },
        {
          "Factor": "Generosity"
          , "Value": 0.21
        }, {
          "Factor": "Dystopia Residual"
          , "Value": 2.32
        }
      ]
    ,
    "Japan":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.27
        }, {
          "Factor": "Social support"
          , "Value": 1.26
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.99
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.50
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.18
        },
        {
          "Factor": "Generosity"
          , "Value": 0.11
        }, {
          "Factor": "Dystopia Residual"
          , "Value": 1.68
        }
      ]
    ,
    "Jordan":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.90
        }, {
          "Factor": "Social support"
          , "Value": 1.05
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.70
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.41
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.14
        },
        {
          "Factor": "Generosity"
          , "Value": 0.11
        }, {
          "Factor": "Dystopia Residual"
          , "Value": 1.88
        }
      ]
    ,
    "Kazakhstan":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.12
        }, {
          "Factor": "Social support"
          , "Value": 1.12
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.64
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.52
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.08
        },
        {
          "Factor": "Generosity"
          , "Value": 0.12
        }, {
          "Factor": "Dystopia Residual"
          , "Value": 2.25
        }
      ]
    ,
    "Kenya":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.36
        }, {
          "Factor": "Social support"
          , "Value": 1.00
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.41
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.42
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.06
        },
        {
          "Factor": "Generosity"
          , "Value": 0.38
        }, {
          "Factor": "Dystopia Residual"
          , "Value": 1.79
        }
      ]
    ,
    "Kosovo":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.80
        }, {
          "Factor": "Social support"
          , "Value": 0.81
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.63
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.25
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.05
        },
        {
          "Factor": "Generosity"
          , "Value": 0.28
        }, {
          "Factor": "Dystopia Residual"
          , "Value": 2.77
        }
      ]
    ,
    "Kuwait":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.55
        }, {
          "Factor": "Social support"
          , "Value": 1.17
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.72
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.55
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.26
        },
        {
          "Factor": "Generosity"
          , "Value": 0.16
        }, {
          "Factor": "Dystopia Residual"
          , "Value": 1.88
        }
      ]
    ,
    "Kyrgyzstan":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.47
        }, {
          "Factor": "Social support"
          , "Value": 1.15
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.65
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.43
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.04
        },
        {
          "Factor": "Generosity"
          , "Value": 0.30
        }, {
          "Factor": "Dystopia Residual"
          , "Value": 2.23
        }
      ]
    ,
    "Latvia":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.11
        }, {
          "Factor": "Social support"
          , "Value": 1.10
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.72
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.30
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.06
        },
        {
          "Factor": "Generosity"
          , "Value": 0.18
        }, {
          "Factor": "Dystopia Residual"
          , "Value": 1.62
        }
      ]
    ,
    "Lebanon":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.03
        }, {
          "Factor": "Social support"
          , "Value": 0.80
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.84
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.34
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.05
        },
        {
          "Factor": "Generosity"
          , "Value": 0.22
        }, {
          "Factor": "Dystopia Residual"
          , "Value": 1.57
        }
      ]
    ,
    "Liberia":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.07
        }, {
          "Factor": "Social support"
          , "Value": 0.79
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.34
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.29
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.06
        },
        {
          "Factor": "Generosity"
          , "Value": 0.24
        }, {
          "Factor": "Dystopia Residual"
          , "Value": 2.78
        }
      ]
    ,
    "Libya":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.13
        }, {
          "Factor": "Social support"
          , "Value": 1.12
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.70
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.42
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.11
        },
        {
          "Factor": "Generosity"
          , "Value": 0.18
        }, {
          "Factor": "Dystopia Residual"
          , "Value": 2.09
        }
      ]
    ,
    "Lithuania":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.15
        }, {
          "Factor": "Social support"
          , "Value": 1.26
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.73
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.21
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.01
        },
        {
          "Factor": "Generosity"
          , "Value": 0.03
        }, {
          "Factor": "Dystopia Residual"
          , "Value": 2.45
        }
      ]
    ,
    "Luxembourg":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.56
        }, {
          "Factor": "Social support"
          , "Value": 1.22
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.92
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.62
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.38
        },
        {
          "Factor": "Generosity"
          , "Value": 0.28
        }, {
          "Factor": "Dystopia Residual"
          , "Value": 1.97
        }
      ]
    ,
    "Madagascar":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.21
        }, {
          "Factor": "Social support"
          , "Value": 0.67
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.47
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.19
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.08
        },
        {
          "Factor": "Generosity"
          , "Value": 0.21
        }, {
          "Factor": "Dystopia Residual"
          , "Value": 1.85
        }
      ]
    ,
    "Malawi":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.02
        }, {
          "Factor": "Social support"
          , "Value": 0.41
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.23
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.43
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.07
        },
        {
          "Factor": "Generosity"
          , "Value": 0.33
        }, {
          "Factor": "Dystopia Residual"
          , "Value": 2.81
        }
      ]
    ,
    "Malaysia":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.12
        }, {
          "Factor": "Social support"
          , "Value": 1.07
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.72
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.53
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.11
        },
        {
          "Factor": "Generosity"
          , "Value": 0.33
        }, {
          "Factor": "Dystopia Residual"
          , "Value": 1.89
        }
      ]
    ,
    "Mali":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.26
        }, {
          "Factor": "Social support"
          , "Value": 1.04
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.21
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.39
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.12
        },
        {
          "Factor": "Generosity"
          , "Value": 0.19
        }, {
          "Factor": "Dystopia Residual"
          , "Value": 1.79
        }
      ]
    ,
    "Malta":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.21
        }, {
          "Factor": "Social support"
          , "Value": 1.30
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.89
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.60
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.14
        },
        {
          "Factor": "Generosity"
          , "Value": 0.52
        }, {
          "Factor": "Dystopia Residual"
          , "Value": 1.65
        }
      ]
    ,
    "Mauritania":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.45
        }, {
          "Factor": "Social support"
          , "Value": 0.87
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.36
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.24
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.17
        },
        {
          "Factor": "Generosity"
          , "Value": 0.22
        }, {
          "Factor": "Dystopia Residual"
          , "Value": 2.12
        }
      ]
    ,
    "Mauritius":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.01
        }, {
          "Factor": "Social support"
          , "Value": 0.99
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.71
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.56
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.08
        },
        {
          "Factor": "Generosity"
          , "Value": 0.38
        }, {
          "Factor": "Dystopia Residual"
          , "Value": 1.76
        }
      ]
    ,
    "Mexico":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.02
        }, {
          "Factor": "Social support"
          , "Value": 0.91
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.81
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.48
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.21
        },
        {
          "Factor": "Generosity"
          , "Value": 0.14
        }, {
          "Factor": "Dystopia Residual"
          , "Value": 3.60
        }
      ]
    ,
    "Moldova":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.59
        }, {
          "Factor": "Social support"
          , "Value": 1.02
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.62
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.33
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.02
        },
        {
          "Factor": "Generosity"
          , "Value": 0.21
        }, {
          "Factor": "Dystopia Residual"
          , "Value": 3.11
        }
      ]
    ,
    "Mongolia":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.83
        }, {
          "Factor": "Social support"
          , "Value": 1.30
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.60
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.44
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.03
        },
        {
          "Factor": "Generosity"
          , "Value": 0.33
        }, {
          "Factor": "Dystopia Residual"
          , "Value": 1.35
        }
      ]
    ,
    "Montenegro":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.97
        }, {
          "Factor": "Social support"
          , "Value": 0.91
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.73
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.18
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.14
        },
        {
          "Factor": "Generosity"
          , "Value": 0.16
        }, {
          "Factor": "Dystopia Residual"
          , "Value": 2.10
        }
      ]
    ,
    "Morocco":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.73
        }, {
          "Factor": "Social support"
          , "Value": 0.64
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.61
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.42
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.09
        },
        {
          "Factor": "Generosity"
          , "Value": 0.07
        }, {
          "Factor": "Dystopia Residual"
          , "Value": 2.45
        }
      ]
    ,
    "Myanmar":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.27
        }, {
          "Factor": "Social support"
          , "Value": 0.71
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.48
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.44
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.19
        },
        {
          "Factor": "Generosity"
          , "Value": 0.80
        }, {
          "Factor": "Dystopia Residual"
          , "Value": 1.42
        }
      ]
    ,
    "Nepal":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.36
        }, {
          "Factor": "Social support"
          , "Value": 0.86
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.57
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.38
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.06
        },
        {
          "Factor": "Generosity"
          , "Value": 0.32
        }, {
          "Factor": "Dystopia Residual"
          , "Value": 1.96
        }
      ]
    ,
    "Netherlands":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.33
        }, {
          "Factor": "Social support"
          , "Value": 1.28
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.89
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.62
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.32
        },
        {
          "Factor": "Generosity"
          , "Value": 0.48
        }, {
          "Factor": "Dystopia Residual"
          , "Value": 2.47
        }
      ]
    ,
    "New Zealand":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.25
        }, {
          "Factor": "Social support"
          , "Value": 1.32
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.91
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.64
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.43
        },
        {
          "Factor": "Generosity"
          , "Value": 0.48
        }, {
          "Factor": "Dystopia Residual"
          , "Value": 2.26
        }
      ]
    ,
    "Nicaragua":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.59
        }, {
          "Factor": "Social support"
          , "Value": 1.14
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.74
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.55
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.19
        },
        {
          "Factor": "Generosity"
          , "Value": 0.28
        }, {
          "Factor": "Dystopia Residual"
          , "Value": 2.32
        }
      ]
    ,
    "Niger":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.07
        }, {
          "Factor": "Social support"
          , "Value": 0.77
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.30
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.48
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.16
        },
        {
          "Factor": "Generosity"
          , "Value": 0.19
        }, {
          "Factor": "Dystopia Residual"
          , "Value": 1.88
        }
      ]
    ,
    "Nigeria":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.65
        }, {
          "Factor": "Social support"
          , "Value": 0.90
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.16
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.34
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.04
        },
        {
          "Factor": "Generosity"
          , "Value": 0.27
        }, {
          "Factor": "Dystopia Residual"
          , "Value": 2.89
        }
      ]
    ,
    "Northern Cyprus":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.21
        }, {
          "Factor": "Social support"
          , "Value": 1.07
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.92
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.49
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.14
        },
        {
          "Factor": "Generosity"
          , "Value": 0.26
        }, {
          "Factor": "Dystopia Residual"
          , "Value": 1.60
        }
      ]
    ,
    "Norway":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.46
        }, {
          "Factor": "Social support"
          , "Value": 1.33
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.89
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.67
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.37
        },
        {
          "Factor": "Generosity"
          , "Value": 0.35
        }, {
          "Factor": "Dystopia Residual"
          , "Value": 2.47
        }
      ]
    ,
    "Pakistan":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.60
        }, {
          "Factor": "Social support"
          , "Value": 0.41
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.51
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.12
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.10
        },
        {
          "Factor": "Generosity"
          , "Value": 0.34
        }, {
          "Factor": "Dystopia Residual"
          , "Value": 3.11
        }
      ]
    ,
    "Palestinian Territories":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.60
        }, {
          "Factor": "Social support"
          , "Value": 0.93
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.66
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.24
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.13
        },
        {
          "Factor": "Generosity"
          , "Value": 0.11
        }, {
          "Factor": "Dystopia Residual"
          , "Value": 2.04
        }
      ]
    ,
    "Panama":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.06
        }, {
          "Factor": "Social support"
          , "Value": 1.20
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.80
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.54
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.09
        },
        {
          "Factor": "Generosity"
          , "Value": 0.24
        }, {
          "Factor": "Dystopia Residual"
          , "Value": 2.85
        }
      ]
    ,
    "Paraguay":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.76
        }, {
          "Factor": "Social support"
          , "Value": 1.30
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.66
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.54
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.08
        },
        {
          "Factor": "Generosity"
          , "Value": 0.34
        }, {
          "Factor": "Dystopia Residual"
          , "Value": 2.19
        }
      ]
    ,
    "Peru":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.90
        }, {
          "Factor": "Social support"
          , "Value": 0.97
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.73
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.41
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.06
        },
        {
          "Factor": "Generosity"
          , "Value": 0.15
        }, {
          "Factor": "Dystopia Residual"
          , "Value": 2.59
        }
      ]
    ,
    "Philippines":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.71
        }, {
          "Factor": "Social support"
          , "Value": 1.04
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.58
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.63
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.12
        },
        {
          "Factor": "Generosity"
          , "Value": 0.25
        }, {
          "Factor": "Dystopia Residual"
          , "Value": 1.75
        }
      ]
    ,
    "Poland":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.13
        }, {
          "Factor": "Social support"
          , "Value": 1.28
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.78
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.53
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.04
        },
        {
          "Factor": "Generosity"
          , "Value": 0.17
        }, {
          "Factor": "Dystopia Residual"
          , "Value": 1.87
        }
      ]
    ,
    "Portugal":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.16
        }, {
          "Factor": "Social support"
          , "Value": 1.14
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.88
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.51
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.01
        },
        {
          "Factor": "Generosity"
          , "Value": 0.14
        }, {
          "Factor": "Dystopia Residual"
          , "Value": 1.26
        }
      ]
    ,
    "Qatar":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.69
        }, {
          "Factor": "Social support"
          , "Value": 1.08
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.80
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.64
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.52
        },
        {
          "Factor": "Generosity"
          , "Value": 0.33
        }, {
          "Factor": "Dystopia Residual"
          , "Value": 1.56
        }
      ]
    ,
    "Romania":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.04
        }, {
          "Factor": "Social support"
          , "Value": 0.89
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.77
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.35
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.01
        },
        {
          "Factor": "Generosity"
          , "Value": 0.14
        }, {
          "Factor": "Dystopia Residual"
          , "Value": 1.93
        }
      ]
    ,
    "Russia":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.14
        }, {
          "Factor": "Social support"
          , "Value": 1.24
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.67
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.37
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.03
        },
        {
          "Factor": "Generosity"
          , "Value": 0.00
        }, {
          "Factor": "Dystopia Residual"
          , "Value": 2.27
        }
      ]
    ,
    "Rwanda":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.22
        }, {
          "Factor": "Social support"
          , "Value": 0.77
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.43
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.59
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.55
        },
        {
          "Factor": "Generosity"
          , "Value": 0.23
        }, {
          "Factor": "Dystopia Residual"
          , "Value": 0.67
        }
      ]
    ,
    "Saudi Arabia":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.40
        }, {
          "Factor": "Social support"
          , "Value": 1.08
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.72
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.31
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.33
        },
        {
          "Factor": "Generosity"
          , "Value": 0.14
        }, {
          "Factor": "Dystopia Residual"
          , "Value": 2.44
        }
      ]
    ,
    "Senegal":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.36
        }, {
          "Factor": "Social support"
          , "Value": 0.98
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.44
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.37
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.11
        },
        {
          "Factor": "Generosity"
          , "Value": 0.21
        }, {
          "Factor": "Dystopia Residual"
          , "Value": 1.44
        }
      ]
    ,
    "Serbia":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.92
        }, {
          "Factor": "Social support"
          , "Value": 1.01
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.75
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.20
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.03
        },
        {
          "Factor": "Generosity"
          , "Value": 0.19
        }, {
          "Factor": "Dystopia Residual"
          , "Value": 2.02
        }
      ]
    ,
    "Sierra Leone":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.33
        }, {
          "Factor": "Social support"
          , "Value": 0.96
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.00
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.41
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.09
        },
        {
          "Factor": "Generosity"
          , "Value": 0.21
        }, {
          "Factor": "Dystopia Residual"
          , "Value": 2.51
        }
      ]
    ,
    "Singapore":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.52
        }, {
          "Factor": "Social support"
          , "Value": 1.02
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 1.03
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.54
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.49
        },
        {
          "Factor": "Generosity"
          , "Value": 0.31
        }, {
          "Factor": "Dystopia Residual"
          , "Value": 1.89
        }
      ]
    ,
    "Slovakia":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.17
        }, {
          "Factor": "Social support"
          , "Value": 1.27
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.79
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.32
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.03
        },
        {
          "Factor": "Generosity"
          , "Value": 0.17
        }, {
          "Factor": "Dystopia Residual"
          , "Value": 2.25
        }
      ]
    ,
    "Slovenia":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.18
        }, {
          "Factor": "Social support"
          , "Value": 1.27
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.87
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.61
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.04
        },
        {
          "Factor": "Generosity"
          , "Value": 0.25
        }, {
          "Factor": "Dystopia Residual"
          , "Value": 1.62
        }
      ]
    ,
    "Somalia":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.19
        }, {
          "Factor": "Social support"
          , "Value": 0.95
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.44
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.47
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.40
        },
        {
          "Factor": "Generosity"
          , "Value": 0.50
        }, {
          "Factor": "Dystopia Residual"
          , "Value": 2.11
        }
      ]
    ,
    "South Africa":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.92
        }, {
          "Factor": "Social support"
          , "Value": 1.18
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.28
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.33
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.09
        },
        {
          "Factor": "Generosity"
          , "Value": 0.12
        }, {
          "Factor": "Dystopia Residual"
          , "Value": 1.72
        }
      ]
    ,
    "South Korea":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.24
        }, {
          "Factor": "Social support"
          , "Value": 0.96
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.97
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.33
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.08
        },
        {
          "Factor": "Generosity"
          , "Value": 0.19
        }, {
          "Factor": "Dystopia Residual"
          , "Value": 2.22
        }
      ]
    ,
    "Spain":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.23
        }, {
          "Factor": "Social support"
          , "Value": 1.31
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.96
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.46
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.06
        },
        {
          "Factor": "Generosity"
          , "Value": 0.18
        }, {
          "Factor": "Dystopia Residual"
          , "Value": 2.12
        }
      ]
    ,
    "Sri Lanka":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.84
        }, {
          "Factor": "Social support"
          , "Value": 1.02
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.71
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.54
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.09
        },
        {
          "Factor": "Generosity"
          , "Value": 0.41
        }, {
          "Factor": "Dystopia Residual"
          , "Value": 0.67
        }
      ]
    ,
    "Sweden":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.33
        }, {
          "Factor": "Social support"
          , "Value": 1.29
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.91
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.66
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.44
        },
        {
          "Factor": "Generosity"
          , "Value": 0.36
        }, {
          "Factor": "Dystopia Residual"
          , "Value": 2.37
        }
      ]
    ,
    "Switzerland":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.40
        }, {
          "Factor": "Social support"
          , "Value": 1.35
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.94
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.67
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.42
        },
        {
          "Factor": "Generosity"
          , "Value": 0.30
        }, {
          "Factor": "Dystopia Residual"
          , "Value": 2.52
        }
      ]
    ,
    "Syria":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.66
        }, {
          "Factor": "Social support"
          , "Value": 0.47
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.72
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.16
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.19
        },
        {
          "Factor": "Generosity"
          , "Value": 0.47
        }, {
          "Factor": "Dystopia Residual"
          , "Value": 0.33
        }
      ]
    ,
    "Taiwan":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.29
        }, {
          "Factor": "Social support"
          , "Value": 1.08
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.88
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.40
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.08
        },
        {
          "Factor": "Generosity"
          , "Value": 0.25
        }, {
          "Factor": "Dystopia Residual"
          , "Value": 2.32
        }
      ]
    ,
    "Tajikistan":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.39
        }, {
          "Factor": "Social support"
          , "Value": 0.86
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.57
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.47
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.15
        },
        {
          "Factor": "Generosity"
          , "Value": 0.23
        }, {
          "Factor": "Dystopia Residual"
          , "Value": 2.11
        }
      ]
    ,
    "Tanzania":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.29
        }, {
          "Factor": "Social support"
          , "Value": 1.00
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.38
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.33
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.06
        },
        {
          "Factor": "Generosity"
          , "Value": 0.34
        }, {
          "Factor": "Dystopia Residual"
          , "Value": 1.38
        }
      ]
    ,
    "Thailand":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.97
        }, {
          "Factor": "Social support"
          , "Value": 1.27
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.74
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.56
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.03
        },
        {
          "Factor": "Generosity"
          , "Value": 0.58
        }, {
          "Factor": "Dystopia Residual"
          , "Value": 2.32
        }
      ]
    ,
    "Togo":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.21
        }, {
          "Factor": "Social support"
          , "Value": 0.14
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.28
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.36
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.11
        },
        {
          "Factor": "Generosity"
          , "Value": 0.17
        }, {
          "Factor": "Dystopia Residual"
          , "Value": 1.57
        }
      ]
    ,
    "Trinidad & Tobago":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.21
        }, {
          "Factor": "Social support"
          , "Value": 1.18
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.61
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.56
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.01
        },
        {
          "Factor": "Generosity"
          , "Value": 0.32
        }, {
          "Factor": "Dystopia Residual"
          , "Value": 2.27
        }
      ]
    ,
    "Tunisia":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.88
        }, {
          "Factor": "Social support"
          , "Value": 0.60
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.74
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.26
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.06
        },
        {
          "Factor": "Generosity"
          , "Value": 0.06
        }, {
          "Factor": "Dystopia Residual"
          , "Value": 2.12
        }
      ]
    ,
    "Turkey":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.06
        }, {
          "Factor": "Social support"
          , "Value": 0.95
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.73
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.23
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.16
        },
        {
          "Factor": "Generosity"
          , "Value": 0.12
        }, {
          "Factor": "Dystopia Residual"
          , "Value": 2.09
        }
      ]
    ,
    "Turkmenistan":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.96
        }, {
          "Factor": "Social support"
          , "Value": 1.23
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.54
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.48
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.31
        },
        {
          "Factor": "Generosity"
          , "Value": 0.17
        }, {
          "Factor": "Dystopia Residual"
          , "Value": 1.87
        }
      ]
    ,
    "Uganda":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.21
        }, {
          "Factor": "Social support"
          , "Value": 1.13
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.34
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.46
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.07
        },
        {
          "Factor": "Generosity"
          , "Value": 0.29
        }, {
          "Factor": "Dystopia Residual"
          , "Value": 1.43
        }
      ]
    ,
    "Ukraine":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.80
        }, {
          "Factor": "Social support"
          , "Value": 1.20
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.67
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.25
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.03
        },
        {
          "Factor": "Generosity"
          , "Value": 0.15
        }, {
          "Factor": "Dystopia Residual"
          , "Value": 1.57
        }
      ]
    ,
    "United Arab Emirates":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.43
        }, {
          "Factor": "Social support"
          , "Value": 1.13
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.81
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.64
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.39
        },
        {
          "Factor": "Generosity"
          , "Value": 0.26
        }, {
          "Factor": "Dystopia Residual"
          , "Value": 2.25
        }
      ]
    ,
    "United Kingdom":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.27
        }, {
          "Factor": "Social support"
          , "Value": 1.29
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.91
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.60
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.32
        },
        {
          "Factor": "Generosity"
          , "Value": 0.52
        }, {
          "Factor": "Dystopia Residual"
          , "Value": 1.97
        }
      ]
    ,
    "United States":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.39
        }, {
          "Factor": "Social support"
          , "Value": 1.25
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.86
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.55
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.16
        },
        {
          "Factor": "Generosity"
          , "Value": 0.40
        }, {
          "Factor": "Dystopia Residual"
          , "Value": 2.51
        }
      ]
    ,
    "Uruguay":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.06
        }, {
          "Factor": "Social support"
          , "Value": 1.21
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.81
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.60
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.25
        },
        {
          "Factor": "Generosity"
          , "Value": 0.23
        }, {
          "Factor": "Dystopia Residual"
          , "Value": 2.32
        }
      ]
    ,
    "Uzbekistan":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.63
        }, {
          "Factor": "Social support"
          , "Value": 1.34
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.60
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.66
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.31
        },
        {
          "Factor": "Generosity"
          , "Value": 0.23
        }, {
          "Factor": "Dystopia Residual"
          , "Value": 2.24
        }
      ]
    ,
    "Venezuela":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.04
        }, {
          "Factor": "Social support"
          , "Value": 1.26
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.72
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.43
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.11
        },
        {
          "Factor": "Generosity"
          , "Value": 0.06
        }, {
          "Factor": "Dystopia Residual"
          , "Value": 3.19
        }
      ]
    ,
    "Vietnam":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.63
        }, {
          "Factor": "Social support"
          , "Value": 0.91
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.75
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.59
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.10
        },
        {
          "Factor": "Generosity"
          , "Value": 0.17
        }, {
          "Factor": "Dystopia Residual"
          , "Value": 2.20
        }
      ]
    ,
    "Yemen":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.55
        }, {
          "Factor": "Social support"
          , "Value": 0.68
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.40
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.36
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.08
        },
        {
          "Factor": "Generosity"
          , "Value": 0.09
        }, {
          "Factor": "Dystopia Residual"
          , "Value": 1.92
        }
      ]
    ,
    "Zambia":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.47
        }, {
          "Factor": "Social support"
          , "Value": 0.92
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.30
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.49
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.12
        },
        {
          "Factor": "Generosity"
          , "Value": 0.20
        }, {
          "Factor": "Dystopia Residual"
          , "Value": 2.63
        }
      ]
    ,
    "Zimbabwe":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.27
        }, {
          "Factor": "Social support"
          , "Value": 1.03
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.33
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.26
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.08
        },
        {
          "Factor": "Generosity"
          , "Value": 0.19
        }, {
          "Factor": "Dystopia Residual"
          , "Value": 2.44
        }
      ]


  }

  data2016 = {

    "Afghanistan":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.38
        }, {
          "Factor": "Social support"
          , "Value": 0.11
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.17
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.16
        }, {
          "Factor": "Percpetions of corruption"
          , "Value": 0.07
        },
        {
          "Factor": "Generosity"
          , "Value": 0.31
        }, {
          "Factor": "Dystopia Residual"
          , "Value": 2.15
        }
      ]
    ,
    "Albania":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.96
        }, {
          "Factor": "Social support"
          , "Value": 0.50
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.73
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.32
        }, {
          "Factor": "Percpetions of corruption"
          , "Value": 0.05
        },
        {
          "Factor": "Generosity"
          , "Value": 0.17
        }, {
          "Factor": "Dystopia Residual"
          , "Value": 1.93
        }
      ]
    ,
    "Algeria":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.05
        }, {
          "Factor": "Social support"
          , "Value": 0.83
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.62
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.21
        }, {
          "Factor": "Percpetions of corruption"
          , "Value": 0.16
        },
        {
          "Factor": "Generosity"
          , "Value": 0.07
        }, {
          "Factor": "Dystopia Residual"
          , "Value": 3.41
        }
      ]
    ,
    "Argentina":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.15
        }, {
          "Factor": "Social support"
          , "Value": 1.07
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.70
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.42
        }, {
          "Factor": "Percpetions of corruption"
          , "Value": 0.07
        },
        {
          "Factor": "Generosity"
          , "Value": 0.11
        }, {
          "Factor": "Dystopia Residual"
          , "Value": 3.13
        }
      ]
    ,
    "Armenia":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.86
        }, {
          "Factor": "Social support"
          , "Value": 0.62
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.64
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.14
        }, {
          "Factor": "Percpetions of corruption"
          , "Value": 0.04
        },
        {
          "Factor": "Generosity"
          , "Value": 0.08
        }, {
          "Factor": "Dystopia Residual"
          , "Value": 1.98
        }
      ]
    ,
    "Australia":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.44
        }, {
          "Factor": "Social support"
          , "Value": 1.10
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.85
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.57
        }, {
          "Factor": "Percpetions of corruption"
          , "Value": 0.32
        },
        {
          "Factor": "Generosity"
          , "Value": 0.47
        }, {
          "Factor": "Dystopia Residual"
          , "Value": 2.55
        }
      ]
    ,
    "Austria":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.45
        }, {
          "Factor": "Social support"
          , "Value": 1.08
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.81
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.54
        }, {
          "Factor": "Percpetions of corruption"
          , "Value": 0.21
        },
        {
          "Factor": "Generosity"
          , "Value": 0.33
        }, {
          "Factor": "Dystopia Residual"
          , "Value": 2.69
        }
      ]
    ,
    "Azerbaijan":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.12
        }, {
          "Factor": "Social support"
          , "Value": 0.76
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.55
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.35
        }, {
          "Factor": "Percpetions of corruption"
          , "Value": 0.18
        },
        {
          "Factor": "Generosity"
          , "Value": 0.06
        }, {
          "Factor": "Dystopia Residual"
          , "Value": 2.27
        }
      ]
    ,
    "Bahrain":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.44
        }, {
          "Factor": "Social support"
          , "Value": 0.94
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.66
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.47
        }, {
          "Factor": "Percpetions of corruption"
          , "Value": 0.26
        },
        {
          "Factor": "Generosity"
          , "Value": 0.17
        }, {
          "Factor": "Dystopia Residual"
          , "Value": 2.27
        }
      ]
    ,
    "Bangladesh":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.54
        }, {
          "Factor": "Social support"
          , "Value": 0.25
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.53
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.40
        }, {
          "Factor": "Percpetions of corruption"
          , "Value": 0.13
        },
        {
          "Factor": "Generosity"
          , "Value": 0.19
        }, {
          "Factor": "Dystopia Residual"
          , "Value": 2.61
        }
      ]
    ,
    "Belarus":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.13
        }, {
          "Factor": "Social support"
          , "Value": 1.05
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.63
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.29
        }, {
          "Factor": "Percpetions of corruption"
          , "Value": 0.17
        },
        {
          "Factor": "Generosity"
          , "Value": 0.14
        }, {
          "Factor": "Dystopia Residual"
          , "Value": 2.39
        }
      ]
    ,
    "Belgium":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.43
        }, {
          "Factor": "Social support"
          , "Value": 1.05
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.82
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.51
        }, {
          "Factor": "Percpetions of corruption"
          , "Value": 0.26
        },
        {
          "Factor": "Generosity"
          , "Value": 0.24
        }, {
          "Factor": "Dystopia Residual"
          , "Value": 2.61
        }
      ]
    ,
    "Benin":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.39
        }, {
          "Factor": "Social support"
          , "Value": 0.10
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.21
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.40
        }, {
          "Factor": "Percpetions of corruption"
          , "Value": 0.07
        },
        {
          "Factor": "Generosity"
          , "Value": 0.20
        }, {
          "Factor": "Dystopia Residual"
          , "Value": 2.11
        }
      ]
    ,
    "Bhutan":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.85
        }, {
          "Factor": "Social support"
          , "Value": 0.91
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.50
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.46
        }, {
          "Factor": "Percpetions of corruption"
          , "Value": 0.16
        },
        {
          "Factor": "Generosity"
          , "Value": 0.49
        }, {
          "Factor": "Dystopia Residual"
          , "Value": 1.83
        }
      ]
    ,
    "Bolivia":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.79
        }, {
          "Factor": "Social support"
          , "Value": 0.84
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.47
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.51
        }, {
          "Factor": "Percpetions of corruption"
          , "Value": 0.08
        },
        {
          "Factor": "Generosity"
          , "Value": 0.22
        }, {
          "Factor": "Dystopia Residual"
          , "Value": 2.92
        }
      ]
    ,
    "Bosnia and Herzegovina":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.93
        }, {
          "Factor": "Social support"
          , "Value": 0.64
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.71
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.10
        }, {
          "Factor": "Percpetions of corruption"
          , "Value": 0.00
        },
        {
          "Factor": "Generosity"
          , "Value": 0.30
        }, {
          "Factor": "Dystopia Residual"
          , "Value": 2.48
        }
      ]
    ,
    "Botswana":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.09
        }, {
          "Factor": "Social support"
          , "Value": 0.89
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.35
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.44
        }, {
          "Factor": "Percpetions of corruption"
          , "Value": 0.11
        },
        {
          "Factor": "Generosity"
          , "Value": 0.12
        }, {
          "Factor": "Dystopia Residual"
          , "Value": 0.97
        }
      ]
    ,
    "Brazil":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.09
        }, {
          "Factor": "Social support"
          , "Value": 1.04
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.61
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.40
        }, {
          "Factor": "Percpetions of corruption"
          , "Value": 0.14
        },
        {
          "Factor": "Generosity"
          , "Value": 0.16
        }, {
          "Factor": "Dystopia Residual"
          , "Value": 3.51
        }
      ]
    ,
    "Bulgaria":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.11
        }, {
          "Factor": "Social support"
          , "Value": 0.93
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.68
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.21
        }, {
          "Factor": "Percpetions of corruption"
          , "Value": 0.01
        },
        {
          "Factor": "Generosity"
          , "Value": 0.13
        }, {
          "Factor": "Dystopia Residual"
          , "Value": 1.15
        }
      ]
    ,
    "Burkina Faso":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.32
        }, {
          "Factor": "Social support"
          , "Value": 0.63
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.21
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.33
        }, {
          "Factor": "Percpetions of corruption"
          , "Value": 0.13
        },
        {
          "Factor": "Generosity"
          , "Value": 0.24
        }, {
          "Factor": "Dystopia Residual"
          , "Value": 1.87
        }
      ]
    ,
    "Burundi":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.07
        }, {
          "Factor": "Social support"
          , "Value": 0.23
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.16
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.04
        }, {
          "Factor": "Percpetions of corruption"
          , "Value": 0.09
        },
        {
          "Factor": "Generosity"
          , "Value": 0.20
        }, {
          "Factor": "Dystopia Residual"
          , "Value": 2.10
        }
      ]
    ,
    "Cambodia":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.56
        }, {
          "Factor": "Social support"
          , "Value": 0.54
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.42
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.59
        }, {
          "Factor": "Percpetions of corruption"
          , "Value": 0.08
        },
        {
          "Factor": "Generosity"
          , "Value": 0.40
        }, {
          "Factor": "Dystopia Residual"
          , "Value": 1.32
        }
      ]
    ,
    "Cameroon":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.52
        }, {
          "Factor": "Social support"
          , "Value": 0.63
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.13
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.43
        }, {
          "Factor": "Percpetions of corruption"
          , "Value": 0.06
        },
        {
          "Factor": "Generosity"
          , "Value": 0.23
        }, {
          "Factor": "Dystopia Residual"
          , "Value": 2.52
        }
      ]
    ,
    "Canada":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.44
        }, {
          "Factor": "Social support"
          , "Value": 1.10
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.83
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.57
        }, {
          "Factor": "Percpetions of corruption"
          , "Value": 0.31
        },
        {
          "Factor": "Generosity"
          , "Value": 0.45
        }, {
          "Factor": "Dystopia Residual"
          , "Value": 2.70
        }
      ]
    ,
    "Chad":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.42
        }, {
          "Factor": "Social support"
          , "Value": 0.63
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.04
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.13
        }, {
          "Factor": "Percpetions of corruption"
          , "Value": 0.05
        },
        {
          "Factor": "Generosity"
          , "Value": 0.19
        }, {
          "Factor": "Dystopia Residual"
          , "Value": 2.31
        }
      ]
    ,
    "Chile":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.22
        }, {
          "Factor": "Social support"
          , "Value": 0.91
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.82
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.38
        }, {
          "Factor": "Percpetions of corruption"
          , "Value": 0.11
        },
        {
          "Factor": "Generosity"
          , "Value": 0.32
        }, {
          "Factor": "Dystopia Residual"
          , "Value": 2.96
        }
      ]
    ,
    "China":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.03
        }, {
          "Factor": "Social support"
          , "Value": 0.79
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.74
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.44
        }, {
          "Factor": "Percpetions of corruption"
          , "Value": 0.03
        },
        {
          "Factor": "Generosity"
          , "Value": 0.05
        }, {
          "Factor": "Dystopia Residual"
          , "Value": 2.17
        }
      ]
    ,
    "Colombia":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.03
        }, {
          "Factor": "Social support"
          , "Value": 1.02
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.60
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.45
        }, {
          "Factor": "Percpetions of corruption"
          , "Value": 0.05
        },
        {
          "Factor": "Generosity"
          , "Value": 0.16
        }, {
          "Factor": "Dystopia Residual"
          , "Value": 3.17
        }
      ]
    ,
    "Congo (Brazzaville)":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.77
        }, {
          "Factor": "Social support"
          , "Value": 0.48
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.28
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.38
        }, {
          "Factor": "Percpetions of corruption"
          , "Value": 0.10
        },
        {
          "Factor": "Generosity"
          , "Value": 0.12
        }, {
          "Factor": "Dystopia Residual"
          , "Value": 2.11
        }
      ]
    ,
    "Congo (Kinshasa)":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.06
        }, {
          "Factor": "Social support"
          , "Value": 0.81
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.19
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.16
        }, {
          "Factor": "Percpetions of corruption"
          , "Value": 0.06
        },
        {
          "Factor": "Generosity"
          , "Value": 0.25
        }, {
          "Factor": "Dystopia Residual"
          , "Value": 2.75
        }
      ]
    ,
    "Costa Rica":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.07
        }, {
          "Factor": "Social support"
          , "Value": 1.02
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.76
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.55
        }, {
          "Factor": "Percpetions of corruption"
          , "Value": 0.11
        },
        {
          "Factor": "Generosity"
          , "Value": 0.23
        }, {
          "Factor": "Dystopia Residual"
          , "Value": 3.35
        }
      ]
    ,
    "Croatia":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.19
        }, {
          "Factor": "Social support"
          , "Value": 0.61
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.71
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.24
        }, {
          "Factor": "Percpetions of corruption"
          , "Value": 0.04
        },
        {
          "Factor": "Generosity"
          , "Value": 0.18
        }, {
          "Factor": "Dystopia Residual"
          , "Value": 2.52
        }
      ]
    ,
    "Cyprus":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.32
        }, {
          "Factor": "Social support"
          , "Value": 0.71
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.85
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.30
        }, {
          "Factor": "Percpetions of corruption"
          , "Value": 0.05
        },
        {
          "Factor": "Generosity"
          , "Value": 0.28
        }, {
          "Factor": "Dystopia Residual"
          , "Value": 2.04
        }
      ]
    ,
    "Czech Republic":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.31
        }, {
          "Factor": "Social support"
          , "Value": 1.01
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.76
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.41
        }, {
          "Factor": "Percpetions of corruption"
          , "Value": 0.04
        },
        {
          "Factor": "Generosity"
          , "Value": 0.10
        }, {
          "Factor": "Dystopia Residual"
          , "Value": 2.96
        }
      ]
    ,
    "Denmark":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.44
        }, {
          "Factor": "Social support"
          , "Value": 1.16
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.80
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.58
        }, {
          "Factor": "Percpetions of corruption"
          , "Value": 0.44
        },
        {
          "Factor": "Generosity"
          , "Value": 0.36
        }, {
          "Factor": "Dystopia Residual"
          , "Value": 2.74
        }
      ]
    ,
    "Dominican Republic":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.03
        }, {
          "Factor": "Social support"
          , "Value": 0.99
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.58
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.52
        }, {
          "Factor": "Percpetions of corruption"
          , "Value": 0.12
        },
        {
          "Factor": "Generosity"
          , "Value": 0.21
        }, {
          "Factor": "Dystopia Residual"
          , "Value": 1.70
        }
      ]
    ,
    "Ecuador":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.97
        }, {
          "Factor": "Social support"
          , "Value": 0.86
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.69
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.40
        }, {
          "Factor": "Percpetions of corruption"
          , "Value": 0.18
        },
        {
          "Factor": "Generosity"
          , "Value": 0.10
        }, {
          "Factor": "Dystopia Residual"
          , "Value": 2.77
        }
      ]
    ,
    "Egypt":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.95
        }, {
          "Factor": "Social support"
          , "Value": 0.50
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.52
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.19
        }, {
          "Factor": "Percpetions of corruption"
          , "Value": 0.10
        },
        {
          "Factor": "Generosity"
          , "Value": 0.13
        }, {
          "Factor": "Dystopia Residual"
          , "Value": 1.97
        }
      ]
    ,
    "El Salvador":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.87
        }, {
          "Factor": "Social support"
          , "Value": 0.81
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.60
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.37
        }, {
          "Factor": "Percpetions of corruption"
          , "Value": 0.11
        },
        {
          "Factor": "Generosity"
          , "Value": 0.09
        }, {
          "Factor": "Dystopia Residual"
          , "Value": 3.22
        }
      ]
    ,
    "Estonia":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.28
        }, {
          "Factor": "Social support"
          , "Value": 1.05
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.68
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.42
        }, {
          "Factor": "Percpetions of corruption"
          , "Value": 0.19
        },
        {
          "Factor": "Generosity"
          , "Value": 0.08
        }, {
          "Factor": "Dystopia Residual"
          , "Value": 1.82
        }
      ]
    ,
    "Ethiopia":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.29
        }, {
          "Factor": "Social support"
          , "Value": 0.38
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.35
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.37
        }, {
          "Factor": "Percpetions of corruption"
          , "Value": 0.17
        },
        {
          "Factor": "Generosity"
          , "Value": 0.30
        }, {
          "Factor": "Dystopia Residual"
          , "Value": 2.66
        }
      ]
    ,
    "Finland":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.41
        }, {
          "Factor": "Social support"
          , "Value": 1.13
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.81
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.57
        }, {
          "Factor": "Percpetions of corruption"
          , "Value": 0.41
        },
        {
          "Factor": "Generosity"
          , "Value": 0.25
        }, {
          "Factor": "Dystopia Residual"
          , "Value": 2.83
        }
      ]
    ,
    "France":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.39
        }, {
          "Factor": "Social support"
          , "Value": 1.01
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.84
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.47
        }, {
          "Factor": "Percpetions of corruption"
          , "Value": 0.18
        },
        {
          "Factor": "Generosity"
          , "Value": 0.12
        }, {
          "Factor": "Dystopia Residual"
          , "Value": 2.47
        }
      ]
    ,
    "Gabon":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.16
        }, {
          "Factor": "Social support"
          , "Value": 0.72
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.35
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.28
        }, {
          "Factor": "Percpetions of corruption"
          , "Value": 0.09
        },
        {
          "Factor": "Generosity"
          , "Value": 0.06
        }, {
          "Factor": "Dystopia Residual"
          , "Value": 1.45
        }
      ]
    ,
    "Georgia":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.84
        }, {
          "Factor": "Social support"
          , "Value": 0.19
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.64
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.32
        }, {
          "Factor": "Percpetions of corruption"
          , "Value": 0.32
        },
        {
          "Factor": "Generosity"
          , "Value": 0.07
        }, {
          "Factor": "Dystopia Residual"
          , "Value": 1.87
        }
      ]
    ,
    "Germany":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.45
        }, {
          "Factor": "Social support"
          , "Value": 1.10
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.81
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.53
        }, {
          "Factor": "Percpetions of corruption"
          , "Value": 0.29
        },
        {
          "Factor": "Generosity"
          , "Value": 0.30
        }, {
          "Factor": "Dystopia Residual"
          , "Value": 2.51
        }
      ]
    ,
    "Ghana":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.63
        }, {
          "Factor": "Social support"
          , "Value": 0.49
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.30
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.41
        }, {
          "Factor": "Percpetions of corruption"
          , "Value": 0.03
        },
        {
          "Factor": "Generosity"
          , "Value": 0.21
        }, {
          "Factor": "Dystopia Residual"
          , "Value": 2.20
        }
      ]
    ,
    "Greece":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.25
        }, {
          "Factor": "Social support"
          , "Value": 0.75
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.80
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.06
        }, {
          "Factor": "Percpetions of corruption"
          , "Value": 0.04
        },
        {
          "Factor": "Generosity"
          , "Value": 0.00
        }, {
          "Factor": "Dystopia Residual"
          , "Value": 2.13
        }
      ]
    ,
    "Guatemala":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.83
        }, {
          "Factor": "Social support"
          , "Value": 0.87
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.54
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.50
        }, {
          "Factor": "Percpetions of corruption"
          , "Value": 0.09
        },
        {
          "Factor": "Generosity"
          , "Value": 0.29
        }, {
          "Factor": "Dystopia Residual"
          , "Value": 3.20
        }
      ]
    ,
    "Guinea":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.22
        }, {
          "Factor": "Social support"
          , "Value": 0.31
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.19
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.31
        }, {
          "Factor": "Percpetions of corruption"
          , "Value": 0.12
        },
        {
          "Factor": "Generosity"
          , "Value": 0.30
        }, {
          "Factor": "Dystopia Residual"
          , "Value": 2.16
        }
      ]
    ,
    "Haiti":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.34
        }, {
          "Factor": "Social support"
          , "Value": 0.30
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.27
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.12
        }, {
          "Factor": "Percpetions of corruption"
          , "Value": 0.14
        },
        {
          "Factor": "Generosity"
          , "Value": 0.48
        }, {
          "Factor": "Dystopia Residual"
          , "Value": 2.37
        }
      ]
    ,
    "Honduras":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.69
        }, {
          "Factor": "Social support"
          , "Value": 0.76
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.58
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.27
        }, {
          "Factor": "Percpetions of corruption"
          , "Value": 0.07
        },
        {
          "Factor": "Generosity"
          , "Value": 0.20
        }, {
          "Factor": "Dystopia Residual"
          , "Value": 2.30
        }
      ]
    ,
    "Hong Kong":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.51
        }, {
          "Factor": "Social support"
          , "Value": 0.87
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.95
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.48
        }, {
          "Factor": "Percpetions of corruption"
          , "Value": 0.32
        },
        {
          "Factor": "Generosity"
          , "Value": 0.40
        }, {
          "Factor": "Dystopia Residual"
          , "Value": 0.93
        }
      ]
    ,
    "Hungary":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.24
        }, {
          "Factor": "Social support"
          , "Value": 0.93
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.68
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.20
        }, {
          "Factor": "Percpetions of corruption"
          , "Value": 0.04
        },
        {
          "Factor": "Generosity"
          , "Value": 0.10
        }, {
          "Factor": "Dystopia Residual"
          , "Value": 1.95
        }
      ]
    ,
    "Iceland":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.43
        }, {
          "Factor": "Social support"
          , "Value": 1.18
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.87
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.57
        }, {
          "Factor": "Percpetions of corruption"
          , "Value": 0.15
        },
        {
          "Factor": "Generosity"
          , "Value": 0.48
        }, {
          "Factor": "Dystopia Residual"
          , "Value": 2.83
        }
      ]
    ,
    "India":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.74
        }, {
          "Factor": "Social support"
          , "Value": 0.29
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.45
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.40
        }, {
          "Factor": "Percpetions of corruption"
          , "Value": 0.09
        },
        {
          "Factor": "Generosity"
          , "Value": 0.25
        }, {
          "Factor": "Dystopia Residual"
          , "Value": 2.18
        }
      ]
    ,
    "Indonesia":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.95
        }, {
          "Factor": "Social support"
          , "Value": 0.88
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.49
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.39
        }, {
          "Factor": "Percpetions of corruption"
          , "Value": 0.00
        },
        {
          "Factor": "Generosity"
          , "Value": 0.57
        }, {
          "Factor": "Dystopia Residual"
          , "Value": 2.03
        }
      ]
    ,
    "Iran":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.12
        }, {
          "Factor": "Social support"
          , "Value": 0.39
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.64
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.23
        }, {
          "Factor": "Percpetions of corruption"
          , "Value": 0.06
        },
        {
          "Factor": "Generosity"
          , "Value": 0.39
        }, {
          "Factor": "Dystopia Residual"
          , "Value": 2.00
        }
      ]
    ,
    "Iraq":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.07
        }, {
          "Factor": "Social support"
          , "Value": 0.59
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.51
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.25
        }, {
          "Factor": "Percpetions of corruption"
          , "Value": 0.14
        },
        {
          "Factor": "Generosity"
          , "Value": 0.20
        }, {
          "Factor": "Dystopia Residual"
          , "Value": 1.82
        }
      ]
    ,
    "Ireland":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.48
        }, {
          "Factor": "Social support"
          , "Value": 1.16
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.81
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.54
        }, {
          "Factor": "Percpetions of corruption"
          , "Value": 0.30
        },
        {
          "Factor": "Generosity"
          , "Value": 0.45
        }, {
          "Factor": "Dystopia Residual"
          , "Value": 2.16
        }
      ]
    ,
    "Israel":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.34
        }, {
          "Factor": "Social support"
          , "Value": 1.00
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.85
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.36
        }, {
          "Factor": "Percpetions of corruption"
          , "Value": 0.09
        },
        {
          "Factor": "Generosity"
          , "Value": 0.32
        }, {
          "Factor": "Dystopia Residual"
          , "Value": 3.31
        }
      ]
    ,
    "Italy":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.35
        }, {
          "Factor": "Social support"
          , "Value": 1.04
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.85
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.19
        }, {
          "Factor": "Percpetions of corruption"
          , "Value": 0.03
        },
        {
          "Factor": "Generosity"
          , "Value": 0.17
        }, {
          "Factor": "Dystopia Residual"
          , "Value": 2.35
        }
      ]
    ,
    "Ivory Coast":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.56
        }, {
          "Factor": "Social support"
          , "Value": 0.58
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.04
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.41
        }, {
          "Factor": "Percpetions of corruption"
          , "Value": 0.16
        },
        {
          "Factor": "Generosity"
          , "Value": 0.20
        }, {
          "Factor": "Dystopia Residual"
          , "Value": 1.97
        }
      ]
    ,
    "Jamaica":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.89
        }, {
          "Factor": "Social support"
          , "Value": 0.96
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.59
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.44
        }, {
          "Factor": "Percpetions of corruption"
          , "Value": 0.04
        },
        {
          "Factor": "Generosity"
          , "Value": 0.22
        }, {
          "Factor": "Dystopia Residual"
          , "Value": 2.36
        }
      ]
    ,
    "Japan":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.38
        }, {
          "Factor": "Social support"
          , "Value": 1.06
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.91
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.47
        }, {
          "Factor": "Percpetions of corruption"
          , "Value": 0.19
        },
        {
          "Factor": "Generosity"
          , "Value": 0.10
        }, {
          "Factor": "Dystopia Residual"
          , "Value": 1.81
        }
      ]
    ,
    "Jordan":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.00
        }, {
          "Factor": "Social support"
          , "Value": 0.86
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.61
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.36
        }, {
          "Factor": "Percpetions of corruption"
          , "Value": 0.13
        },
        {
          "Factor": "Generosity"
          , "Value": 0.14
        }, {
          "Factor": "Dystopia Residual"
          , "Value": 2.20
        }
      ]
    ,
    "Kazakhstan":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.23
        }, {
          "Factor": "Social support"
          , "Value": 0.96
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.57
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.41
        }, {
          "Factor": "Percpetions of corruption"
          , "Value": 0.11
        },
        {
          "Factor": "Generosity"
          , "Value": 0.15
        }, {
          "Factor": "Dystopia Residual"
          , "Value": 2.49
        }
      ]
    ,
    "Kenya":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.52
        }, {
          "Factor": "Social support"
          , "Value": 0.76
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.30
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.41
        }, {
          "Factor": "Percpetions of corruption"
          , "Value": 0.07
        },
        {
          "Factor": "Generosity"
          , "Value": 0.41
        }, {
          "Factor": "Dystopia Residual"
          , "Value": 1.88
        }
      ]
    ,
    "Kosovo":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.90
        }, {
          "Factor": "Social support"
          , "Value": 0.66
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.54
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.14
        }, {
          "Factor": "Percpetions of corruption"
          , "Value": 0.07
        },
        {
          "Factor": "Generosity"
          , "Value": 0.28
        }, {
          "Factor": "Dystopia Residual"
          , "Value": 2.81
        }
      ]
    ,
    "Kuwait":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.62
        }, {
          "Factor": "Social support"
          , "Value": 0.88
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.64
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.43
        }, {
          "Factor": "Percpetions of corruption"
          , "Value": 0.24
        },
        {
          "Factor": "Generosity"
          , "Value": 0.16
        }, {
          "Factor": "Dystopia Residual"
          , "Value": 2.28
        }
      ]
    ,
    "Kyrgyzstan":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.56
        }, {
          "Factor": "Social support"
          , "Value": 0.95
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.55
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.40
        }, {
          "Factor": "Percpetions of corruption"
          , "Value": 0.05
        },
        {
          "Factor": "Generosity"
          , "Value": 0.38
        }, {
          "Factor": "Dystopia Residual"
          , "Value": 2.28
        }
      ]
    ,
    "Latvia":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.22
        }, {
          "Factor": "Social support"
          , "Value": 0.95
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.64
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.28
        }, {
          "Factor": "Percpetions of corruption"
          , "Value": 0.09
        },
        {
          "Factor": "Generosity"
          , "Value": 0.17
        }, {
          "Factor": "Dystopia Residual"
          , "Value": 2.21
        }
      ]
    ,
    "Lebanon":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.12
        }, {
          "Factor": "Social support"
          , "Value": 0.64
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.76
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.26
        }, {
          "Factor": "Percpetions of corruption"
          , "Value": 0.03
        },
        {
          "Factor": "Generosity"
          , "Value": 0.24
        }, {
          "Factor": "Dystopia Residual"
          , "Value": 2.07
        }
      ]
    ,
    "Liberia":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.11
        }, {
          "Factor": "Social support"
          , "Value": 0.50
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.23
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.26
        }, {
          "Factor": "Percpetions of corruption"
          , "Value": 0.05
        },
        {
          "Factor": "Generosity"
          , "Value": 0.24
        }, {
          "Factor": "Dystopia Residual"
          , "Value": 2.23
        }
      ]
    ,
    "Libya":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.07
        }, {
          "Factor": "Social support"
          , "Value": 0.95
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.52
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.41
        }, {
          "Factor": "Percpetions of corruption"
          , "Value": 0.10
        },
        {
          "Factor": "Generosity"
          , "Value": 0.17
        }, {
          "Factor": "Dystopia Residual"
          , "Value": 2.39
        }
      ]
    ,
    "Lithuania":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.27
        }, {
          "Factor": "Social support"
          , "Value": 1.06
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.65
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.19
        }, {
          "Factor": "Percpetions of corruption"
          , "Value": 0.02
        },
        {
          "Factor": "Generosity"
          , "Value": 0.02
        }, {
          "Factor": "Dystopia Residual"
          , "Value": 2.61
        }
      ]
    ,
    "Luxembourg":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.70
        }, {
          "Factor": "Social support"
          , "Value": 1.04
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.85
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.55
        }, {
          "Factor": "Percpetions of corruption"
          , "Value": 0.35
        },
        {
          "Factor": "Generosity"
          , "Value": 0.28
        }, {
          "Factor": "Dystopia Residual"
          , "Value": 2.11
        }
      ]
    ,
    "Madagascar":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.28
        }, {
          "Factor": "Social support"
          , "Value": 0.46
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.37
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.14
        }, {
          "Factor": "Percpetions of corruption"
          , "Value": 0.08
        },
        {
          "Factor": "Generosity"
          , "Value": 0.22
        }, {
          "Factor": "Dystopia Residual"
          , "Value": 2.15
        }
      ]
    ,
    "Malawi":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.09
        }, {
          "Factor": "Social support"
          , "Value": 0.15
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.29
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.41
        }, {
          "Factor": "Percpetions of corruption"
          , "Value": 0.08
        },
        {
          "Factor": "Generosity"
          , "Value": 0.31
        }, {
          "Factor": "Dystopia Residual"
          , "Value": 2.83
        }
      ]
    ,
    "Malaysia":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.25
        }, {
          "Factor": "Social support"
          , "Value": 0.88
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.62
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.39
        }, {
          "Factor": "Percpetions of corruption"
          , "Value": 0.09
        },
        {
          "Factor": "Generosity"
          , "Value": 0.41
        }, {
          "Factor": "Dystopia Residual"
          , "Value": 2.35
        }
      ]
    ,
    "Mali":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.31
        }, {
          "Factor": "Social support"
          , "Value": 0.86
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.16
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.28
        }, {
          "Factor": "Percpetions of corruption"
          , "Value": 0.14
        },
        {
          "Factor": "Generosity"
          , "Value": 0.21
        }, {
          "Factor": "Dystopia Residual"
          , "Value": 2.11
        }
      ]
    ,
    "Malta":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.31
        }, {
          "Factor": "Social support"
          , "Value": 1.10
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.80
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.55
        }, {
          "Factor": "Percpetions of corruption"
          , "Value": 0.18
        },
        {
          "Factor": "Generosity"
          , "Value": 0.56
        }, {
          "Factor": "Dystopia Residual"
          , "Value": 1.99
        }
      ]
    ,
    "Mauritania":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.61
        }, {
          "Factor": "Social support"
          , "Value": 0.84
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.29
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.13
        }, {
          "Factor": "Percpetions of corruption"
          , "Value": 0.18
        },
        {
          "Factor": "Generosity"
          , "Value": 0.23
        }, {
          "Factor": "Dystopia Residual"
          , "Value": 1.93
        }
      ]
    ,
    "Mauritius":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.14
        }, {
          "Factor": "Social support"
          , "Value": 0.76
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.66
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.46
        }, {
          "Factor": "Percpetions of corruption"
          , "Value": 0.05
        },
        {
          "Factor": "Generosity"
          , "Value": 0.37
        }, {
          "Factor": "Dystopia Residual"
          , "Value": 2.20
        }
      ]
    ,
    "Mexico":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.12
        }, {
          "Factor": "Social support"
          , "Value": 0.71
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.71
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.38
        }, {
          "Factor": "Percpetions of corruption"
          , "Value": 0.18
        },
        {
          "Factor": "Generosity"
          , "Value": 0.12
        }, {
          "Factor": "Dystopia Residual"
          , "Value": 3.56
        }
      ]
    ,
    "Moldova":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.69
        }, {
          "Factor": "Social support"
          , "Value": 0.83
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.52
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.25
        }, {
          "Factor": "Percpetions of corruption"
          , "Value": 0.02
        },
        {
          "Factor": "Generosity"
          , "Value": 0.20
        }, {
          "Factor": "Dystopia Residual"
          , "Value": 3.38
        }
      ]
    ,
    "Mongolia":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.99
        }, {
          "Factor": "Social support"
          , "Value": 1.09
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.55
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.36
        }, {
          "Factor": "Percpetions of corruption"
          , "Value": 0.03
        },
        {
          "Factor": "Generosity"
          , "Value": 0.35
        }, {
          "Factor": "Dystopia Residual"
          , "Value": 1.54
        }
      ]
    ,
    "Montenegro":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.08
        }, {
          "Factor": "Social support"
          , "Value": 0.74
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.64
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.15
        }, {
          "Factor": "Percpetions of corruption"
          , "Value": 0.13
        },
        {
          "Factor": "Generosity"
          , "Value": 0.17
        }, {
          "Factor": "Dystopia Residual"
          , "Value": 2.26
        }
      ]
    ,
    "Morocco":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.84
        }, {
          "Factor": "Social support"
          , "Value": 0.39
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.59
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.26
        }, {
          "Factor": "Percpetions of corruption"
          , "Value": 0.08
        },
        {
          "Factor": "Generosity"
          , "Value": 0.04
        }, {
          "Factor": "Dystopia Residual"
          , "Value": 2.95
        }
      ]
    ,
    "Myanmar":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.34
        }, {
          "Factor": "Social support"
          , "Value": 0.70
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.40
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.43
        }, {
          "Factor": "Percpetions of corruption"
          , "Value": 0.20
        },
        {
          "Factor": "Generosity"
          , "Value": 0.82
        }, {
          "Factor": "Dystopia Residual"
          , "Value": 1.51
        }
      ]
    ,
    "Nepal":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.45
        }, {
          "Factor": "Social support"
          , "Value": 0.70
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.50
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.37
        }, {
          "Factor": "Percpetions of corruption"
          , "Value": 0.07
        },
        {
          "Factor": "Generosity"
          , "Value": 0.38
        }, {
          "Factor": "Dystopia Residual"
          , "Value": 2.33
        }
      ]
    ,
    "Netherlands":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.46
        }, {
          "Factor": "Social support"
          , "Value": 1.03
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.81
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.55
        }, {
          "Factor": "Percpetions of corruption"
          , "Value": 0.30
        },
        {
          "Factor": "Generosity"
          , "Value": 0.47
        }, {
          "Factor": "Dystopia Residual"
          , "Value": 2.71
        }
      ]
    ,
    "New Zealand":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.36
        }, {
          "Factor": "Social support"
          , "Value": 1.17
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.83
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.58
        }, {
          "Factor": "Percpetions of corruption"
          , "Value": 0.42
        },
        {
          "Factor": "Generosity"
          , "Value": 0.49
        }, {
          "Factor": "Dystopia Residual"
          , "Value": 2.48
        }
      ]
    ,
    "Nicaragua":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.69
        }, {
          "Factor": "Social support"
          , "Value": 0.90
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.65
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.47
        }, {
          "Factor": "Percpetions of corruption"
          , "Value": 0.16
        },
        {
          "Factor": "Generosity"
          , "Value": 0.30
        }, {
          "Factor": "Dystopia Residual"
          , "Value": 2.82
        }
      ]
    ,
    "Niger":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.13
        }, {
          "Factor": "Social support"
          , "Value": 0.61
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.26
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.38
        }, {
          "Factor": "Percpetions of corruption"
          , "Value": 0.17
        },
        {
          "Factor": "Generosity"
          , "Value": 0.21
        }, {
          "Factor": "Dystopia Residual"
          , "Value": 2.09
        }
      ]
    ,
    "Nigeria":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.75
        }, {
          "Factor": "Social support"
          , "Value": 0.64
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.05
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.28
        }, {
          "Factor": "Percpetions of corruption"
          , "Value": 0.03
        },
        {
          "Factor": "Generosity"
          , "Value": 0.23
        }, {
          "Factor": "Dystopia Residual"
          , "Value": 2.89
        }
      ]
    ,
    "Northern Cyprus":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.31
        }, {
          "Factor": "Social support"
          , "Value": 0.82
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.84
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.44
        }, {
          "Factor": "Percpetions of corruption"
          , "Value": 0.17
        },
        {
          "Factor": "Generosity"
          , "Value": 0.26
        }, {
          "Factor": "Dystopia Residual"
          , "Value": 1.93
        }
      ]
    ,
    "Norway":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.58
        }, {
          "Factor": "Social support"
          , "Value": 1.13
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.80
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.60
        }, {
          "Factor": "Percpetions of corruption"
          , "Value": 0.36
        },
        {
          "Factor": "Generosity"
          , "Value": 0.38
        }, {
          "Factor": "Dystopia Residual"
          , "Value": 2.66
        }
      ]
    ,
    "Pakistan":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.69
        }, {
          "Factor": "Social support"
          , "Value": 0.26
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.40
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.15
        }, {
          "Factor": "Percpetions of corruption"
          , "Value": 0.14
        },
        {
          "Factor": "Generosity"
          , "Value": 0.31
        }, {
          "Factor": "Dystopia Residual"
          , "Value": 3.18
        }
      ]
    ,
    "Palestinian Territories":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.67
        }, {
          "Factor": "Social support"
          , "Value": 0.72
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.57
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.18
        }, {
          "Factor": "Percpetions of corruption"
          , "Value": 0.11
        },
        {
          "Factor": "Generosity"
          , "Value": 0.11
        }, {
          "Factor": "Dystopia Residual"
          , "Value": 2.40
        }
      ]
    ,
    "Panama":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.18
        }, {
          "Factor": "Social support"
          , "Value": 0.99
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.71
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.49
        }, {
          "Factor": "Percpetions of corruption"
          , "Value": 0.08
        },
        {
          "Factor": "Generosity"
          , "Value": 0.24
        }, {
          "Factor": "Dystopia Residual"
          , "Value": 3.01
        }
      ]
    ,
    "Paraguay":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.89
        }, {
          "Factor": "Social support"
          , "Value": 1.11
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.58
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.46
        }, {
          "Factor": "Percpetions of corruption"
          , "Value": 0.07
        },
        {
          "Factor": "Generosity"
          , "Value": 0.25
        }, {
          "Factor": "Dystopia Residual"
          , "Value": 2.16
        }
      ]
    ,
    "Peru":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.00
        }, {
          "Factor": "Social support"
          , "Value": 0.81
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.63
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.38
        }, {
          "Factor": "Percpetions of corruption"
          , "Value": 0.05
        },
        {
          "Factor": "Generosity"
          , "Value": 0.15
        }, {
          "Factor": "Dystopia Residual"
          , "Value": 2.73
        }
      ]
    ,
    "Philippines":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.81
        }, {
          "Factor": "Social support"
          , "Value": 0.88
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.47
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.55
        }, {
          "Factor": "Percpetions of corruption"
          , "Value": 0.12
        },
        {
          "Factor": "Generosity"
          , "Value": 0.22
        }, {
          "Factor": "Dystopia Residual"
          , "Value": 2.23
        }
      ]
    ,
    "Poland":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.25
        }, {
          "Factor": "Social support"
          , "Value": 1.05
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.69
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.45
        }, {
          "Factor": "Percpetions of corruption"
          , "Value": 0.06
        },
        {
          "Factor": "Generosity"
          , "Value": 0.14
        }, {
          "Factor": "Dystopia Residual"
          , "Value": 2.20
        }
      ]
    ,
    "Portugal":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.28
        }, {
          "Factor": "Social support"
          , "Value": 0.94
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.79
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.45
        }, {
          "Factor": "Percpetions of corruption"
          , "Value": 0.02
        },
        {
          "Factor": "Generosity"
          , "Value": 0.12
        }, {
          "Factor": "Dystopia Residual"
          , "Value": 1.53
        }
      ]
    ,
    "Qatar":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.82
        }, {
          "Factor": "Social support"
          , "Value": 0.88
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.72
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.57
        }, {
          "Factor": "Percpetions of corruption"
          , "Value": 0.48
        },
        {
          "Factor": "Generosity"
          , "Value": 0.32
        }, {
          "Factor": "Dystopia Residual"
          , "Value": 1.58
        }
      ]
    ,
    "Romania":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.17
        }, {
          "Factor": "Social support"
          , "Value": 0.73
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.68
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.37
        }, {
          "Factor": "Percpetions of corruption"
          , "Value": 0.01
        },
        {
          "Factor": "Generosity"
          , "Value": 0.13
        }, {
          "Factor": "Dystopia Residual"
          , "Value": 2.45
        }
      ]
    ,
    "Russia":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.23
        }, {
          "Factor": "Social support"
          , "Value": 1.05
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.59
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.33
        }, {
          "Factor": "Percpetions of corruption"
          , "Value": 0.04
        },
        {
          "Factor": "Generosity"
          , "Value": 0.03
        }, {
          "Factor": "Dystopia Residual"
          , "Value": 2.59
        }
      ]
    ,
    "Rwanda":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.33
        }, {
          "Factor": "Social support"
          , "Value": 0.62
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.32
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.54
        }, {
          "Factor": "Percpetions of corruption"
          , "Value": 0.51
        },
        {
          "Factor": "Generosity"
          , "Value": 0.24
        }, {
          "Factor": "Dystopia Residual"
          , "Value": 0.97
        }
      ]
    ,
    "Saudi Arabia":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.49
        }, {
          "Factor": "Social support"
          , "Value": 0.85
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.59
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.38
        }, {
          "Factor": "Percpetions of corruption"
          , "Value": 0.30
        },
        {
          "Factor": "Generosity"
          , "Value": 0.15
        }, {
          "Factor": "Dystopia Residual"
          , "Value": 2.61
        }
      ]
    ,
    "Senegal":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.44
        }, {
          "Factor": "Social support"
          , "Value": 0.77
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.40
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.31
        }, {
          "Factor": "Percpetions of corruption"
          , "Value": 0.12
        },
        {
          "Factor": "Generosity"
          , "Value": 0.19
        }, {
          "Factor": "Dystopia Residual"
          , "Value": 1.98
        }
      ]
    ,
    "Serbia":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.03
        }, {
          "Factor": "Social support"
          , "Value": 0.81
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.65
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.16
        }, {
          "Factor": "Percpetions of corruption"
          , "Value": 0.04
        },
        {
          "Factor": "Generosity"
          , "Value": 0.21
        }, {
          "Factor": "Dystopia Residual"
          , "Value": 2.28
        }
      ]
    ,
    "Sierra Leone":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.36
        }, {
          "Factor": "Social support"
          , "Value": 0.63
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.00
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.31
        }, {
          "Factor": "Percpetions of corruption"
          , "Value": 0.08
        },
        {
          "Factor": "Generosity"
          , "Value": 0.24
        }, {
          "Factor": "Dystopia Residual"
          , "Value": 3.01
        }
      ]
    ,
    "Singapore":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.65
        }, {
          "Factor": "Social support"
          , "Value": 0.87
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.95
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.49
        }, {
          "Factor": "Percpetions of corruption"
          , "Value": 0.47
        },
        {
          "Factor": "Generosity"
          , "Value": 0.33
        }, {
          "Factor": "Dystopia Residual"
          , "Value": 1.99
        }
      ]
    ,
    "Slovakia":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.28
        }, {
          "Factor": "Social support"
          , "Value": 1.08
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.70
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.23
        }, {
          "Factor": "Percpetions of corruption"
          , "Value": 0.03
        },
        {
          "Factor": "Generosity"
          , "Value": 0.14
        }, {
          "Factor": "Dystopia Residual"
          , "Value": 2.61
        }
      ]
    ,
    "Slovenia":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.30
        }, {
          "Factor": "Social support"
          , "Value": 1.06
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.79
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.53
        }, {
          "Factor": "Percpetions of corruption"
          , "Value": 0.04
        },
        {
          "Factor": "Generosity"
          , "Value": 0.26
        }, {
          "Factor": "Dystopia Residual"
          , "Value": 1.80
        }
      ]
    ,
    "Somalia":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.00
        }, {
          "Factor": "Social support"
          , "Value": 0.34
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.11
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.57
        }, {
          "Factor": "Percpetions of corruption"
          , "Value": 0.31
        },
        {
          "Factor": "Generosity"
          , "Value": 0.27
        }, {
          "Factor": "Dystopia Residual"
          , "Value": 3.84
        }
      ]
    ,
    "South Africa":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.02
        }, {
          "Factor": "Social support"
          , "Value": 0.96
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.19
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.42
        }, {
          "Factor": "Percpetions of corruption"
          , "Value": 0.08
        },
        {
          "Factor": "Generosity"
          , "Value": 0.14
        }, {
          "Factor": "Dystopia Residual"
          , "Value": 1.64
        }
      ]
    ,
    "South Korea":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.36
        }, {
          "Factor": "Social support"
          , "Value": 0.72
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.89
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.25
        }, {
          "Factor": "Percpetions of corruption"
          , "Value": 0.08
        },
        {
          "Factor": "Generosity"
          , "Value": 0.19
        }, {
          "Factor": "Dystopia Residual"
          , "Value": 2.35
        }
      ]
    ,
    "Spain":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.34
        }, {
          "Factor": "Social support"
          , "Value": 1.13
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.88
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.38
        }, {
          "Factor": "Percpetions of corruption"
          , "Value": 0.06
        },
        {
          "Factor": "Generosity"
          , "Value": 0.18
        }, {
          "Factor": "Dystopia Residual"
          , "Value": 2.40
        }
      ]
    ,
    "Sri Lanka":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.97
        }, {
          "Factor": "Social support"
          , "Value": 0.85
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.62
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.51
        }, {
          "Factor": "Percpetions of corruption"
          , "Value": 0.08
        },
        {
          "Factor": "Generosity"
          , "Value": 0.47
        }, {
          "Factor": "Dystopia Residual"
          , "Value": 0.92
        }
      ]
    ,
    "Sweden":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.45
        }, {
          "Factor": "Social support"
          , "Value": 1.09
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.83
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.58
        }, {
          "Factor": "Percpetions of corruption"
          , "Value": 0.41
        },
        {
          "Factor": "Generosity"
          , "Value": 0.38
        }, {
          "Factor": "Dystopia Residual"
          , "Value": 2.55
        }
      ]
    ,
    "Switzerland":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.53
        }, {
          "Factor": "Social support"
          , "Value": 1.15
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.86
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.59
        }, {
          "Factor": "Percpetions of corruption"
          , "Value": 0.41
        },
        {
          "Factor": "Generosity"
          , "Value": 0.28
        }, {
          "Factor": "Dystopia Residual"
          , "Value": 2.69
        }
      ]
    ,
    "Syria":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.75
        }, {
          "Factor": "Social support"
          , "Value": 0.15
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.63
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.07
        }, {
          "Factor": "Percpetions of corruption"
          , "Value": 0.17
        },
        {
          "Factor": "Generosity"
          , "Value": 0.48
        }, {
          "Factor": "Dystopia Residual"
          , "Value": 0.82
        }
      ]
    ,
    "Taiwan":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.40
        }, {
          "Factor": "Social support"
          , "Value": 0.93
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.80
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.32
        }, {
          "Factor": "Percpetions of corruption"
          , "Value": 0.07
        },
        {
          "Factor": "Generosity"
          , "Value": 0.25
        }, {
          "Factor": "Dystopia Residual"
          , "Value": 2.62
        }
      ]
    ,
    "Tajikistan":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.49
        }, {
          "Factor": "Social support"
          , "Value": 0.76
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.53
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.43
        }, {
          "Factor": "Percpetions of corruption"
          , "Value": 0.14
        },
        {
          "Factor": "Generosity"
          , "Value": 0.26
        }, {
          "Factor": "Dystopia Residual"
          , "Value": 2.39
        }
      ]
    ,
    "Tanzania":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.47
        }, {
          "Factor": "Social support"
          , "Value": 0.78
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.36
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.32
        }, {
          "Factor": "Percpetions of corruption"
          , "Value": 0.05
        },
        {
          "Factor": "Generosity"
          , "Value": 0.31
        }, {
          "Factor": "Dystopia Residual"
          , "Value": 1.38
        }
      ]
    ,
    "Thailand":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.09
        }, {
          "Factor": "Social support"
          , "Value": 1.04
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.65
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.50
        }, {
          "Factor": "Percpetions of corruption"
          , "Value": 0.03
        },
        {
          "Factor": "Generosity"
          , "Value": 0.59
        }, {
          "Factor": "Dystopia Residual"
          , "Value": 2.58
        }
      ]
    ,
    "Togo":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.28
        }, {
          "Factor": "Social support"
          , "Value": 0.00
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.25
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.35
        }, {
          "Factor": "Percpetions of corruption"
          , "Value": 0.12
        },
        {
          "Factor": "Generosity"
          , "Value": 0.18
        }, {
          "Factor": "Dystopia Residual"
          , "Value": 2.14
        }
      ]
    ,
    "Trinidad & Tobago":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.33
        }, {
          "Factor": "Social support"
          , "Value": 0.99
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.53
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.48
        }, {
          "Factor": "Percpetions of corruption"
          , "Value": 0.01
        },
        {
          "Factor": "Generosity"
          , "Value": 0.32
        }, {
          "Factor": "Dystopia Residual"
          , "Value": 2.51
        }
      ]
    ,
    "Tunisia":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.98
        }, {
          "Factor": "Social support"
          , "Value": 0.43
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.60
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.24
        }, {
          "Factor": "Percpetions of corruption"
          , "Value": 0.08
        },
        {
          "Factor": "Generosity"
          , "Value": 0.04
        }, {
          "Factor": "Dystopia Residual"
          , "Value": 2.68
        }
      ]
    ,
    "Turkey":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.16
        }, {
          "Factor": "Social support"
          , "Value": 0.88
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.65
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.24
        }, {
          "Factor": "Percpetions of corruption"
          , "Value": 0.12
        },
        {
          "Factor": "Generosity"
          , "Value": 0.05
        }, {
          "Factor": "Dystopia Residual"
          , "Value": 2.29
        }
      ]
    ,
    "Turkmenistan":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.08
        }, {
          "Factor": "Social support"
          , "Value": 1.04
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.44
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.37
        }, {
          "Factor": "Percpetions of corruption"
          , "Value": 0.28
        },
        {
          "Factor": "Generosity"
          , "Value": 0.23
        }, {
          "Factor": "Dystopia Residual"
          , "Value": 2.21
        }
      ]
    ,
    "Uganda":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.35
        }, {
          "Factor": "Social support"
          , "Value": 0.91
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.20
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.44
        }, {
          "Factor": "Percpetions of corruption"
          , "Value": 0.06
        },
        {
          "Factor": "Generosity"
          , "Value": 0.27
        }, {
          "Factor": "Dystopia Residual"
          , "Value": 1.51
        }
      ]
    ,
    "Ukraine":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.87
        }, {
          "Factor": "Social support"
          , "Value": 1.01
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.59
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.13
        }, {
          "Factor": "Percpetions of corruption"
          , "Value": 0.02
        },
        {
          "Factor": "Generosity"
          , "Value": 0.20
        }, {
          "Factor": "Dystopia Residual"
          , "Value": 1.50
        }
      ]
    ,
    "United Arab Emirates":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.57
        }, {
          "Factor": "Social support"
          , "Value": 0.87
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.73
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.56
        }, {
          "Factor": "Percpetions of corruption"
          , "Value": 0.36
        },
        {
          "Factor": "Generosity"
          , "Value": 0.27
        }, {
          "Factor": "Dystopia Residual"
          , "Value": 2.22
        }
      ]
    ,
    "United Kingdom":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.40
        }, {
          "Factor": "Social support"
          , "Value": 1.09
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.81
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.50
        }, {
          "Factor": "Percpetions of corruption"
          , "Value": 0.27
        },
        {
          "Factor": "Generosity"
          , "Value": 0.50
        }, {
          "Factor": "Dystopia Residual"
          , "Value": 2.15
        }
      ]
    ,
    "United States":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.51
        }, {
          "Factor": "Social support"
          , "Value": 1.05
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.78
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.48
        }, {
          "Factor": "Percpetions of corruption"
          , "Value": 0.15
        },
        {
          "Factor": "Generosity"
          , "Value": 0.41
        }, {
          "Factor": "Dystopia Residual"
          , "Value": 2.73
        }
      ]
    ,
    "Uruguay":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.18
        }, {
          "Factor": "Social support"
          , "Value": 1.03
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.72
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.54
        }, {
          "Factor": "Percpetions of corruption"
          , "Value": 0.21
        },
        {
          "Factor": "Generosity"
          , "Value": 0.18
        }, {
          "Factor": "Dystopia Residual"
          , "Value": 2.67
        }
      ]
    ,
    "Uzbekistan":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.74
        }, {
          "Factor": "Social support"
          , "Value": 1.17
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.50
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.61
        }, {
          "Factor": "Percpetions of corruption"
          , "Value": 0.28
        },
        {
          "Factor": "Generosity"
          , "Value": 0.34
        }, {
          "Factor": "Dystopia Residual"
          , "Value": 2.35
        }
      ]
    ,
    "Venezuela":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.13
        }, {
          "Factor": "Social support"
          , "Value": 1.03
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.62
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.20
        }, {
          "Factor": "Percpetions of corruption"
          , "Value": 0.08
        },
        {
          "Factor": "Generosity"
          , "Value": 0.04
        }, {
          "Factor": "Dystopia Residual"
          , "Value": 2.97
        }
      ]
    ,
    "Vietnam":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.74
        }, {
          "Factor": "Social support"
          , "Value": 0.79
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.66
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.56
        }, {
          "Factor": "Percpetions of corruption"
          , "Value": 0.12
        },
        {
          "Factor": "Generosity"
          , "Value": 0.25
        }, {
          "Factor": "Dystopia Residual"
          , "Value": 1.94
        }
      ]
    ,
    "Yemen":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.58
        }, {
          "Factor": "Social support"
          , "Value": 0.47
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.31
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.23
        }, {
          "Factor": "Percpetions of corruption"
          , "Value": 0.06
        },
        {
          "Factor": "Generosity"
          , "Value": 0.10
        }, {
          "Factor": "Dystopia Residual"
          , "Value": 1.97
        }
      ]
    ,
    "Zambia":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.61
        }, {
          "Factor": "Social support"
          , "Value": 0.64
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.24
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.43
        }, {
          "Factor": "Percpetions of corruption"
          , "Value": 0.11
        },
        {
          "Factor": "Generosity"
          , "Value": 0.18
        }, {
          "Factor": "Dystopia Residual"
          , "Value": 2.59
        }
      ]
    ,
    "Zimbabwe":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.35
        }, {
          "Factor": "Social support"
          , "Value": 0.71
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.16
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.25
        }, {
          "Factor": "Percpetions of corruption"
          , "Value": 0.09
        },
        {
          "Factor": "Generosity"
          , "Value": 0.19
        }, {
          "Factor": "Dystopia Residual"
          , "Value": 2.44
        }
      ]


  }

  data2018 = {

    "Afghanistan":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.33
        }, {
          "Factor": "Social support"
          , "Value": 0.54
        }, {
          "Factor": "Healthy life expectancy"
          , "Value": 0.26
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.09
        }, {
          "Factor": "Generosity"
          , "Value": 0.19
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.04
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 2.20
        }]
    ,
    "Albania":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.92
        }, {
          "Factor": "Social support"
          , "Value": 0.82
        }, {
          "Factor": "Healthy life expectancy"
          , "Value": 0.79
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.42
        }, {
          "Factor": "Generosity"
          , "Value": 0.15
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.03
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 1.46
        }]
    ,
    "Algeria":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.98
        }, {
          "Factor": "Social support"
          , "Value": 1.15
        }, {
          "Factor": "Healthy life expectancy"
          , "Value": 0.69
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.08
        }, {
          "Factor": "Generosity"
          , "Value": 0.06
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.14
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 2.21
        }]
    ,
    "Argentina":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.07
        }, {
          "Factor": "Social support"
          , "Value": 1.47
        }, {
          "Factor": "Healthy life expectancy"
          , "Value": 0.74
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.57
        }, {
          "Factor": "Generosity"
          , "Value": 0.06
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.05
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 2.42
        }]
    ,
    "Armenia":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.82
        }, {
          "Factor": "Social support"
          , "Value": 0.99
        }, {
          "Factor": "Healthy life expectancy"
          , "Value": 0.67
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.26
        }, {
          "Factor": "Generosity"
          , "Value": 0.08
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.03
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 1.48
        }]
    ,
    "Australia":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.34
        }, {
          "Factor": "Social support"
          , "Value": 1.57
        }, {
          "Factor": "Healthy life expectancy"
          , "Value": 0.91
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.65
        }, {
          "Factor": "Generosity"
          , "Value": 0.36
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.30
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 2.14
        }]
    ,
    "Austria":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.34
        }, {
          "Factor": "Social support"
          , "Value": 1.50
        }, {
          "Factor": "Healthy life expectancy"
          , "Value": 0.89
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.62
        }, {
          "Factor": "Generosity"
          , "Value": 0.24
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.22
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 2.32
        }]
    ,
    "Azerbaijan":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.02
        }, {
          "Factor": "Social support"
          , "Value": 1.16
        }, {
          "Factor": "Healthy life expectancy"
          , "Value": 0.60
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.43
        }, {
          "Factor": "Generosity"
          , "Value": 0.03
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.18
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 1.78
        }]
    ,
    "Bahrain":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.34
        }, {
          "Factor": "Social support"
          , "Value": 1.37
        }, {
          "Factor": "Healthy life expectancy"
          , "Value": 0.70
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.59
        }, {
          "Factor": "Generosity"
          , "Value": 0.24
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.12
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 1.74
        }]
    ,
    "Bangladesh":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.53
        }, {
          "Factor": "Social support"
          , "Value": 0.85
        }, {
          "Factor": "Healthy life expectancy"
          , "Value": 0.58
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.58
        }, {
          "Factor": "Generosity"
          , "Value": 0.15
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.14
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 1.66
        }]
    ,
    "Belarus":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.04
        }, {
          "Factor": "Social support"
          , "Value": 1.50
        }, {
          "Factor": "Healthy life expectancy"
          , "Value": 0.70
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.31
        }, {
          "Factor": "Generosity"
          , "Value": 0.10
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.15
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 1.68
        }]
    ,
    "Belgium":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.32
        }, {
          "Factor": "Social support"
          , "Value": 1.48
        }, {
          "Factor": "Healthy life expectancy"
          , "Value": 0.89
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.58
        }, {
          "Factor": "Generosity"
          , "Value": 0.19
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.24
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 2.21
        }]
    ,
    "Benin":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.38
        }, {
          "Factor": "Social support"
          , "Value": 0.37
        }, {
          "Factor": "Healthy life expectancy"
          , "Value": 0.24
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.44
        }, {
          "Factor": "Generosity"
          , "Value": 0.16
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.07
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 2.48
        }]
    ,
    "Bhutan":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.80
        }, {
          "Factor": "Social support"
          , "Value": 1.33
        }, {
          "Factor": "Healthy life expectancy"
          , "Value": 0.53
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.54
        }, {
          "Factor": "Generosity"
          , "Value": 0.36
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.17
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 1.35
        }]
    ,
    "Bolivia":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.75
        }, {
          "Factor": "Social support"
          , "Value": 1.22
        }, {
          "Factor": "Healthy life expectancy"
          , "Value": 0.51
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.61
        }, {
          "Factor": "Generosity"
          , "Value": 0.14
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.05
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 2.47
        }]
    ,
    "Bosnia and Herzegovina":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.92
        }, {
          "Factor": "Social support"
          , "Value": 1.08
        }, {
          "Factor": "Healthy life expectancy"
          , "Value": 0.76
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.28
        }, {
          "Factor": "Generosity"
          , "Value": 0.22
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.00
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 1.88
        }]
    ,
    "Botswana":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.02
        }, {
          "Factor": "Social support"
          , "Value": 1.17
        }, {
          "Factor": "Healthy life expectancy"
          , "Value": 0.42
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.56
        }, {
          "Factor": "Generosity"
          , "Value": 0.04
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.09
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 0.29
        }]
    ,
    "Brazil":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.99
        }, {
          "Factor": "Social support"
          , "Value": 1.47
        }, {
          "Factor": "Healthy life expectancy"
          , "Value": 0.68
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.49
        }, {
          "Factor": "Generosity"
          , "Value": 0.11
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.09
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 2.59
        }]
    ,
    "Bulgaria":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.05
        }, {
          "Factor": "Social support"
          , "Value": 1.51
        }, {
          "Factor": "Healthy life expectancy"
          , "Value": 0.71
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.36
        }, {
          "Factor": "Generosity"
          , "Value": 0.06
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.01
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 1.22
        }]
    ,
    "Burkina Faso":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.31
        }, {
          "Factor": "Social support"
          , "Value": 1.10
        }, {
          "Factor": "Healthy life expectancy"
          , "Value": 0.25
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.31
        }, {
          "Factor": "Generosity"
          , "Value": 0.17
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.13
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 2.14
        }]
    ,
    "Burundi":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.09
        }, {
          "Factor": "Social support"
          , "Value": 0.63
        }, {
          "Factor": "Healthy life expectancy"
          , "Value": 0.14
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.07
        }, {
          "Factor": "Generosity"
          , "Value": 0.15
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.08
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 1.75
        }]
    ,
    "Cambodia":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.55
        }, {
          "Factor": "Social support"
          , "Value": 1.09
        }, {
          "Factor": "Healthy life expectancy"
          , "Value": 0.46
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.70
        }, {
          "Factor": "Generosity"
          , "Value": 0.26
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.07
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 1.32
        }]
    ,
    "Cameroon":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.54
        }, {
          "Factor": "Social support"
          , "Value": 0.89
        }, {
          "Factor": "Healthy life expectancy"
          , "Value": 0.18
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.45
        }, {
          "Factor": "Generosity"
          , "Value": 0.18
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.04
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 2.69
        }]
    ,
    "Canada":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.33
        }, {
          "Factor": "Social support"
          , "Value": 1.53
        }, {
          "Factor": "Healthy life expectancy"
          , "Value": 0.90
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.65
        }, {
          "Factor": "Generosity"
          , "Value": 0.32
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.29
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 2.31
        }]
    ,
    "Chad":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.36
        }, {
          "Factor": "Social support"
          , "Value": 0.91
        }, {
          "Factor": "Healthy life expectancy"
          , "Value": 0.05
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.19
        }, {
          "Factor": "Generosity"
          , "Value": 0.18
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.06
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 2.55
        }]
    ,
    "Chile":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.13
        }, {
          "Factor": "Social support"
          , "Value": 1.33
        }, {
          "Factor": "Healthy life expectancy"
          , "Value": 0.81
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.43
        }, {
          "Factor": "Generosity"
          , "Value": 0.20
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.06
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 2.52
        }]
    ,
    "China":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.99
        }, {
          "Factor": "Social support"
          , "Value": 1.14
        }, {
          "Factor": "Healthy life expectancy"
          , "Value": 0.80
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.60
        }, {
          "Factor": "Generosity"
          , "Value": 0.03
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.10
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 1.59
        }]
    ,
    "Colombia":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.96
        }, {
          "Factor": "Social support"
          , "Value": 1.44
        }, {
          "Factor": "Healthy life expectancy"
          , "Value": 0.64
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.53
        }, {
          "Factor": "Generosity"
          , "Value": 0.10
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.04
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 2.56
        }]
    ,
    "Congo (Brazzaville)":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.68
        }, {
          "Factor": "Social support"
          , "Value": 0.81
        }, {
          "Factor": "Healthy life expectancy"
          , "Value": 0.34
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.51
        }, {
          "Factor": "Generosity"
          , "Value": 0.09
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.08
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 2.04
        }]
    ,
    "Congo (Kinshasa)":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.07
        }, {
          "Factor": "Social support"
          , "Value": 1.14
        }, {
          "Factor": "Healthy life expectancy"
          , "Value": 0.20
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.31
        }, {
          "Factor": "Generosity"
          , "Value": 0.20
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.05
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 2.27
        }]
    ,
    "Costa Rica":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.01
        }, {
          "Factor": "Social support"
          , "Value": 1.46
        }, {
          "Factor": "Healthy life expectancy"
          , "Value": 0.82
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.63
        }, {
          "Factor": "Generosity"
          , "Value": 0.14
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.10
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 2.91
        }]
    ,
    "Croatia":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.11
        }, {
          "Factor": "Social support"
          , "Value": 1.16
        }, {
          "Factor": "Healthy life expectancy"
          , "Value": 0.74
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.38
        }, {
          "Factor": "Generosity"
          , "Value": 0.12
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.04
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 1.77
        }]
    ,
    "Cyprus":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.23
        }, {
          "Factor": "Social support"
          , "Value": 1.19
        }, {
          "Factor": "Healthy life expectancy"
          , "Value": 0.91
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.42
        }, {
          "Factor": "Generosity"
          , "Value": 0.20
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.04
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 1.77
        }]
    ,
    "Czech Republic":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.23
        }, {
          "Factor": "Social support"
          , "Value": 1.49
        }, {
          "Factor": "Healthy life expectancy"
          , "Value": 0.85
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.54
        }, {
          "Factor": "Generosity"
          , "Value": 0.06
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.03
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 2.49
        }]
    ,
    "Denmark":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.35
        }, {
          "Factor": "Social support"
          , "Value": 1.59
        }, {
          "Factor": "Healthy life expectancy"
          , "Value": 0.87
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.68
        }, {
          "Factor": "Generosity"
          , "Value": 0.28
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.41
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 2.37
        }]
    ,
    "Dominican Republic":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.98
        }, {
          "Factor": "Social support"
          , "Value": 1.44
        }, {
          "Factor": "Healthy life expectancy"
          , "Value": 0.61
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.58
        }, {
          "Factor": "Generosity"
          , "Value": 0.12
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.11
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 1.46
        }]
    ,
    "Ecuador":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.89
        }, {
          "Factor": "Social support"
          , "Value": 1.33
        }, {
          "Factor": "Healthy life expectancy"
          , "Value": 0.74
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.56
        }, {
          "Factor": "Generosity"
          , "Value": 0.11
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.12
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 2.23
        }]
    ,
    "Egypt":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.89
        }, {
          "Factor": "Social support"
          , "Value": 1.02
        }, {
          "Factor": "Healthy life expectancy"
          , "Value": 0.55
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.31
        }, {
          "Factor": "Generosity"
          , "Value": 0.09
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.11
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 1.45
        }]
    ,
    "El Salvador":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.81
        }, {
          "Factor": "Social support"
          , "Value": 1.23
        }, {
          "Factor": "Healthy life expectancy"
          , "Value": 0.64
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.46
        }, {
          "Factor": "Generosity"
          , "Value": 0.07
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.08
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 2.88
        }]
    ,
    "Estonia":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.20
        }, {
          "Factor": "Social support"
          , "Value": 1.53
        }, {
          "Factor": "Healthy life expectancy"
          , "Value": 0.74
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.55
        }, {
          "Factor": "Generosity"
          , "Value": 0.09
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.17
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 1.46
        }]
    ,
    "Ethiopia":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.31
        }, {
          "Factor": "Social support"
          , "Value": 0.95
        }, {
          "Factor": "Healthy life expectancy"
          , "Value": 0.39
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.45
        }, {
          "Factor": "Generosity"
          , "Value": 0.22
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.15
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 1.88
        }]
    ,
    "Finland":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.30
        }, {
          "Factor": "Social support"
          , "Value": 1.59
        }, {
          "Factor": "Healthy life expectancy"
          , "Value": 0.87
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.68
        }, {
          "Factor": "Generosity"
          , "Value": 0.20
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.39
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 2.58
        }]
    ,
    "France":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.29
        }, {
          "Factor": "Social support"
          , "Value": 1.47
        }, {
          "Factor": "Healthy life expectancy"
          , "Value": 0.91
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.52
        }, {
          "Factor": "Generosity"
          , "Value": 0.10
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.18
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 2.03
        }]
    ,
    "Gabon":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.04
        }, {
          "Factor": "Social support"
          , "Value": 1.16
        }, {
          "Factor": "Healthy life expectancy"
          , "Value": 0.40
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.36
        }, {
          "Factor": "Generosity"
          , "Value": 0.03
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.05
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 1.71
        }]
    ,
    "Georgia":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.85
        }, {
          "Factor": "Social support"
          , "Value": 0.59
        }, {
          "Factor": "Healthy life expectancy"
          , "Value": 0.64
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.38
        }, {
          "Factor": "Generosity"
          , "Value": 0.04
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.21
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 1.62
        }]
    ,
    "Germany":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.34
        }, {
          "Factor": "Social support"
          , "Value": 1.47
        }, {
          "Factor": "Healthy life expectancy"
          , "Value": 0.86
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.59
        }, {
          "Factor": "Generosity"
          , "Value": 0.27
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.28
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 2.15
        }]
    ,
    "Ghana":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.59
        }, {
          "Factor": "Social support"
          , "Value": 0.90
        }, {
          "Factor": "Healthy life expectancy"
          , "Value": 0.34
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.50
        }, {
          "Factor": "Generosity"
          , "Value": 0.21
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.03
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 2.09
        }]
    ,
    "Greece":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.15
        }, {
          "Factor": "Social support"
          , "Value": 1.20
        }, {
          "Factor": "Healthy life expectancy"
          , "Value": 0.88
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.13
        }, {
          "Factor": "Generosity"
          , "Value": 0.00
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.04
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 1.95
        }]
    ,
    "Guatemala":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.78
        }, {
          "Factor": "Social support"
          , "Value": 1.27
        }, {
          "Factor": "Healthy life expectancy"
          , "Value": 0.61
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.60
        }, {
          "Factor": "Generosity"
          , "Value": 0.18
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.07
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 2.87
        }]
    ,
    "Guinea":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.34
        }, {
          "Factor": "Social support"
          , "Value": 0.79
        }, {
          "Factor": "Healthy life expectancy"
          , "Value": 0.21
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.39
        }, {
          "Factor": "Generosity"
          , "Value": 0.18
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.09
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 1.94
        }]
    ,
    "Haiti":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.32
        }, {
          "Factor": "Social support"
          , "Value": 0.71
        }, {
          "Factor": "Healthy life expectancy"
          , "Value": 0.29
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.03
        }, {
          "Factor": "Generosity"
          , "Value": 0.39
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.10
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 1.74
        }]
    ,
    "Honduras":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.62
        }, {
          "Factor": "Social support"
          , "Value": 1.21
        }, {
          "Factor": "Healthy life expectancy"
          , "Value": 0.62
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.46
        }, {
          "Factor": "Generosity"
          , "Value": 0.20
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.07
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 2.33
        }]
    ,
    "Hong Kong":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.41
        }, {
          "Factor": "Social support"
          , "Value": 1.29
        }, {
          "Factor": "Healthy life expectancy"
          , "Value": 1.03
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.52
        }, {
          "Factor": "Generosity"
          , "Value": 0.25
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.29
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 0.64
        }]
    ,
    "Hungary":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.17
        }, {
          "Factor": "Social support"
          , "Value": 1.40
        }, {
          "Factor": "Healthy life expectancy"
          , "Value": 0.73
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.26
        }, {
          "Factor": "Generosity"
          , "Value": 0.06
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.02
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 1.97
        }]
    ,
    "Iceland":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.34
        }, {
          "Factor": "Social support"
          , "Value": 1.64
        }, {
          "Factor": "Healthy life expectancy"
          , "Value": 0.91
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.68
        }, {
          "Factor": "Generosity"
          , "Value": 0.35
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.14
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 2.43
        }]
    ,
    "India":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.72
        }, {
          "Factor": "Social support"
          , "Value": 0.75
        }, {
          "Factor": "Healthy life expectancy"
          , "Value": 0.48
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.54
        }, {
          "Factor": "Generosity"
          , "Value": 0.17
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.09
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 1.43
        }]
    ,
    "Indonesia":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.90
        }, {
          "Factor": "Social support"
          , "Value": 1.22
        }, {
          "Factor": "Healthy life expectancy"
          , "Value": 0.52
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.54
        }, {
          "Factor": "Generosity"
          , "Value": 0.48
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.02
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 1.42
        }]
    ,
    "Iran":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.06
        }, {
          "Factor": "Social support"
          , "Value": 0.77
        }, {
          "Factor": "Healthy life expectancy"
          , "Value": 0.69
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.46
        }, {
          "Factor": "Generosity"
          , "Value": 0.28
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.13
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 1.32
        }]
    ,
    "Iraq":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.01
        }, {
          "Factor": "Social support"
          , "Value": 0.97
        }, {
          "Factor": "Healthy life expectancy"
          , "Value": 0.54
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.30
        }, {
          "Factor": "Generosity"
          , "Value": 0.15
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.10
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 1.39
        }]
    ,
    "Ireland":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.45
        }, {
          "Factor": "Social support"
          , "Value": 1.58
        }, {
          "Factor": "Healthy life expectancy"
          , "Value": 0.88
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.61
        }, {
          "Factor": "Generosity"
          , "Value": 0.31
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.31
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 1.84
        }]
    ,
    "Israel":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.30
        }, {
          "Factor": "Social support"
          , "Value": 1.56
        }, {
          "Factor": "Healthy life expectancy"
          , "Value": 0.88
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.53
        }, {
          "Factor": "Generosity"
          , "Value": 0.35
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.27
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 1.91
        }]
    ,
    "Italy":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.26
        }, {
          "Factor": "Social support"
          , "Value": 1.50
        }, {
          "Factor": "Healthy life expectancy"
          , "Value": 0.95
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.28
        }, {
          "Factor": "Generosity"
          , "Value": 0.14
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.03
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 1.84
        }]
    ,
    "Ivory Coast":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.54
        }, {
          "Factor": "Social support"
          , "Value": 0.87
        }, {
          "Factor": "Healthy life expectancy"
          , "Value": 0.08
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.47
        }, {
          "Factor": "Generosity"
          , "Value": 0.15
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.10
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 2.46
        }]
    ,
    "Jamaica":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.82
        }, {
          "Factor": "Social support"
          , "Value": 1.49
        }, {
          "Factor": "Healthy life expectancy"
          , "Value": 0.69
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.57
        }, {
          "Factor": "Generosity"
          , "Value": 0.10
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.03
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 2.18
        }]
    ,
    "Japan":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.29
        }, {
          "Factor": "Social support"
          , "Value": 1.46
        }, {
          "Factor": "Healthy life expectancy"
          , "Value": 0.99
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.55
        }, {
          "Factor": "Generosity"
          , "Value": 0.08
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.15
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 1.39
        }]
    ,
    "Jordan":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.82
        }, {
          "Factor": "Social support"
          , "Value": 1.26
        }, {
          "Factor": "Healthy life expectancy"
          , "Value": 0.65
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.47
        }, {
          "Factor": "Generosity"
          , "Value": 0.13
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.13
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 1.70
        }]
    ,
    "Kazakhstan":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.14
        }, {
          "Factor": "Social support"
          , "Value": 1.52
        }, {
          "Factor": "Healthy life expectancy"
          , "Value": 0.63
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.45
        }, {
          "Factor": "Generosity"
          , "Value": 0.15
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.12
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 1.78
        }]
    ,
    "Kenya":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.49
        }, {
          "Factor": "Social support"
          , "Value": 1.05
        }, {
          "Factor": "Healthy life expectancy"
          , "Value": 0.45
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.50
        }, {
          "Factor": "Generosity"
          , "Value": 0.35
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.06
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 1.50
        }]
    ,
    "Kosovo":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.85
        }, {
          "Factor": "Social support"
          , "Value": 1.23
        }, {
          "Factor": "Healthy life expectancy"
          , "Value": 0.58
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.45
        }, {
          "Factor": "Generosity"
          , "Value": 0.27
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.02
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 2.25
        }]
    ,
    "Kuwait":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.47
        }, {
          "Factor": "Social support"
          , "Value": 1.30
        }, {
          "Factor": "Healthy life expectancy"
          , "Value": 0.68
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.55
        }, {
          "Factor": "Generosity"
          , "Value": 0.17
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.11
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 1.81
        }]
    ,
    "Kyrgyzstan":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.53
        }, {
          "Factor": "Social support"
          , "Value": 1.42
        }, {
          "Factor": "Healthy life expectancy"
          , "Value": 0.59
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.54
        }, {
          "Factor": "Generosity"
          , "Value": 0.28
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.04
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 1.74
        }]
    ,
    "Latvia":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.15
        }, {
          "Factor": "Social support"
          , "Value": 1.45
        }, {
          "Factor": "Healthy life expectancy"
          , "Value": 0.67
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.36
        }, {
          "Factor": "Generosity"
          , "Value": 0.09
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.07
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 2.14
        }]
    ,
    "Lebanon":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.96
        }, {
          "Factor": "Social support"
          , "Value": 1.18
        }, {
          "Factor": "Healthy life expectancy"
          , "Value": 0.79
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.50
        }, {
          "Factor": "Generosity"
          , "Value": 0.21
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.14
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 1.58
        }]
    ,
    "Liberia":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.08
        }, {
          "Factor": "Social support"
          , "Value": 0.86
        }, {
          "Factor": "Healthy life expectancy"
          , "Value": 0.27
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.42
        }, {
          "Factor": "Generosity"
          , "Value": 0.21
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.03
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 1.64
        }]
    ,
    "Libya":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.98
        }, {
          "Factor": "Social support"
          , "Value": 1.35
        }, {
          "Factor": "Healthy life expectancy"
          , "Value": 0.55
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.50
        }, {
          "Factor": "Generosity"
          , "Value": 0.12
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.15
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 1.92
        }]
    ,
    "Lithuania":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.20
        }, {
          "Factor": "Social support"
          , "Value": 1.53
        }, {
          "Factor": "Healthy life expectancy"
          , "Value": 0.72
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.35
        }, {
          "Factor": "Generosity"
          , "Value": 0.03
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.01
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 2.13
        }]
    ,
    "Luxembourg":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.58
        }, {
          "Factor": "Social support"
          , "Value": 1.52
        }, {
          "Factor": "Healthy life expectancy"
          , "Value": 0.90
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.63
        }, {
          "Factor": "Generosity"
          , "Value": 0.20
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.32
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 1.77
        }]
    ,
    "Madagascar":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.26
        }, {
          "Factor": "Social support"
          , "Value": 0.91
        }, {
          "Factor": "Healthy life expectancy"
          , "Value": 0.40
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.22
        }, {
          "Factor": "Generosity"
          , "Value": 0.15
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.05
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 1.78
        }]
    ,
    "Malawi":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.19
        }, {
          "Factor": "Social support"
          , "Value": 0.54
        }, {
          "Factor": "Healthy life expectancy"
          , "Value": 0.31
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.53
        }, {
          "Factor": "Generosity"
          , "Value": 0.21
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.08
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 1.73
        }]
    ,
    "Malaysia":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.16
        }, {
          "Factor": "Social support"
          , "Value": 1.26
        }, {
          "Factor": "Healthy life expectancy"
          , "Value": 0.67
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.36
        }, {
          "Factor": "Generosity"
          , "Value": 0.31
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.06
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 2.51
        }]
    ,
    "Mali":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.37
        }, {
          "Factor": "Social support"
          , "Value": 1.23
        }, {
          "Factor": "Healthy life expectancy"
          , "Value": 0.15
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.37
        }, {
          "Factor": "Generosity"
          , "Value": 0.14
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.06
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 2.13
        }]
    ,
    "Malta":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.27
        }, {
          "Factor": "Social support"
          , "Value": 1.52
        }, {
          "Factor": "Healthy life expectancy"
          , "Value": 0.88
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.65
        }, {
          "Factor": "Generosity"
          , "Value": 0.38
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.14
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 1.78
        }]
    ,
    "Mauritania":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.56
        }, {
          "Factor": "Social support"
          , "Value": 1.25
        }, {
          "Factor": "Healthy life expectancy"
          , "Value": 0.29
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.13
        }, {
          "Factor": "Generosity"
          , "Value": 0.13
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.09
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 1.91
        }]
    ,
    "Mauritius":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.09
        }, {
          "Factor": "Social support"
          , "Value": 1.39
        }, {
          "Factor": "Healthy life expectancy"
          , "Value": 0.68
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.58
        }, {
          "Factor": "Generosity"
          , "Value": 0.24
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.05
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 1.85
        }]
    ,
    "Mexico":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.04
        }, {
          "Factor": "Social support"
          , "Value": 1.25
        }, {
          "Factor": "Healthy life expectancy"
          , "Value": 0.76
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.48
        }, {
          "Factor": "Generosity"
          , "Value": 0.07
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.10
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 2.79
        }]
    ,
    "Moldova":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.66
        }, {
          "Factor": "Social support"
          , "Value": 1.30
        }, {
          "Factor": "Healthy life expectancy"
          , "Value": 0.62
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.23
        }, {
          "Factor": "Generosity"
          , "Value": 0.17
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.00
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 2.66
        }]
    ,
    "Mongolia":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.91
        }, {
          "Factor": "Social support"
          , "Value": 1.52
        }, {
          "Factor": "Healthy life expectancy"
          , "Value": 0.57
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.40
        }, {
          "Factor": "Generosity"
          , "Value": 0.25
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.03
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 1.44
        }]
    ,
    "Montenegro":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.02
        }, {
          "Factor": "Social support"
          , "Value": 1.28
        }, {
          "Factor": "Healthy life expectancy"
          , "Value": 0.73
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.26
        }, {
          "Factor": "Generosity"
          , "Value": 0.11
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.08
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 1.87
        }]
    ,
    "Morocco":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.78
        }, {
          "Factor": "Social support"
          , "Value": 0.80
        }, {
          "Factor": "Healthy life expectancy"
          , "Value": 0.67
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.46
        }, {
          "Factor": "Generosity"
          , "Value": 0.03
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.07
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 2.45
        }]
    ,
    "Myanmar":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.68
        }, {
          "Factor": "Social support"
          , "Value": 1.17
        }, {
          "Factor": "Healthy life expectancy"
          , "Value": 0.43
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.58
        }, {
          "Factor": "Generosity"
          , "Value": 0.60
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.18
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 0.67
        }]
    ,
    "Nepal":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.42
        }, {
          "Factor": "Social support"
          , "Value": 1.23
        }, {
          "Factor": "Healthy life expectancy"
          , "Value": 0.54
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.53
        }, {
          "Factor": "Generosity"
          , "Value": 0.30
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.08
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 1.78
        }]
    ,
    "Netherlands":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.36
        }, {
          "Factor": "Social support"
          , "Value": 1.49
        }, {
          "Factor": "Healthy life expectancy"
          , "Value": 0.88
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.64
        }, {
          "Factor": "Generosity"
          , "Value": 0.33
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.29
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 2.45
        }]
    ,
    "New Zealand":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.27
        }, {
          "Factor": "Social support"
          , "Value": 1.60
        }, {
          "Factor": "Healthy life expectancy"
          , "Value": 0.88
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.67
        }, {
          "Factor": "Generosity"
          , "Value": 0.36
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.39
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 2.16
        }]
    ,
    "Nicaragua":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.67
        }, {
          "Factor": "Social support"
          , "Value": 1.32
        }, {
          "Factor": "Healthy life expectancy"
          , "Value": 0.70
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.53
        }, {
          "Factor": "Generosity"
          , "Value": 0.21
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.13
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 2.59
        }]
    ,
    "Niger":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.13
        }, {
          "Factor": "Social support"
          , "Value": 0.87
        }, {
          "Factor": "Healthy life expectancy"
          , "Value": 0.22
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.39
        }, {
          "Factor": "Generosity"
          , "Value": 0.17
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.10
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 2.28
        }]
    ,
    "Nigeria":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.69
        }, {
          "Factor": "Social support"
          , "Value": 1.17
        }, {
          "Factor": "Healthy life expectancy"
          , "Value": 0.05
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.46
        }, {
          "Factor": "Generosity"
          , "Value": 0.20
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.03
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 2.55
        }]
    ,
    "Northern Cyprus":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.23
        }, {
          "Factor": "Social support"
          , "Value": 1.21
        }, {
          "Factor": "Healthy life expectancy"
          , "Value": 0.91
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.49
        }, {
          "Factor": "Generosity"
          , "Value": 0.18
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.15
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 1.66
        }]
    ,
    "Norway":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.46
        }, {
          "Factor": "Social support"
          , "Value": 1.58
        }, {
          "Factor": "Healthy life expectancy"
          , "Value": 0.86
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.69
        }, {
          "Factor": "Generosity"
          , "Value": 0.29
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.34
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 2.38
        }]
    ,
    "Pakistan":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.65
        }, {
          "Factor": "Social support"
          , "Value": 0.81
        }, {
          "Factor": "Healthy life expectancy"
          , "Value": 0.42
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.33
        }, {
          "Factor": "Generosity"
          , "Value": 0.22
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.11
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 2.92
        }]
    ,
    "Palestinian Territories":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.64
        }, {
          "Factor": "Social support"
          , "Value": 1.22
        }, {
          "Factor": "Healthy life expectancy"
          , "Value": 0.60
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.27
        }, {
          "Factor": "Generosity"
          , "Value": 0.09
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.08
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 1.85
        }]
    ,
    "Panama":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.11
        }, {
          "Factor": "Social support"
          , "Value": 1.44
        }, {
          "Factor": "Healthy life expectancy"
          , "Value": 0.76
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.60
        }, {
          "Factor": "Generosity"
          , "Value": 0.13
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.06
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 2.34
        }]
    ,
    "Paraguay":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.83
        }, {
          "Factor": "Social support"
          , "Value": 1.52
        }, {
          "Factor": "Healthy life expectancy"
          , "Value": 0.61
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.54
        }, {
          "Factor": "Generosity"
          , "Value": 0.16
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.07
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 1.93
        }]
    ,
    "Peru":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.93
        }, {
          "Factor": "Social support"
          , "Value": 1.25
        }, {
          "Factor": "Healthy life expectancy"
          , "Value": 0.67
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.53
        }, {
          "Factor": "Generosity"
          , "Value": 0.09
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.03
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 2.15
        }]
    ,
    "Philippines":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.78
        }, {
          "Factor": "Social support"
          , "Value": 1.31
        }, {
          "Factor": "Healthy life expectancy"
          , "Value": 0.51
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.64
        }, {
          "Factor": "Generosity"
          , "Value": 0.12
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.10
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 2.06
        }]
    ,
    "Poland":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.18
        }, {
          "Factor": "Social support"
          , "Value": 1.45
        }, {
          "Factor": "Healthy life expectancy"
          , "Value": 0.78
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.55
        }, {
          "Factor": "Generosity"
          , "Value": 0.11
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.06
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 2.00
        }]
    ,
    "Portugal":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.19
        }, {
          "Factor": "Social support"
          , "Value": 1.43
        }, {
          "Factor": "Healthy life expectancy"
          , "Value": 0.88
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.56
        }, {
          "Factor": "Generosity"
          , "Value": 0.06
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.02
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 1.27
        }]
    ,
    "Qatar":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.65
        }, {
          "Factor": "Social support"
          , "Value": 1.30
        }, {
          "Factor": "Healthy life expectancy"
          , "Value": 0.75
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.65
        }, {
          "Factor": "Generosity"
          , "Value": 0.26
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.17
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 1.59
        }]
    ,
    "Romania":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.12
        }, {
          "Factor": "Social support"
          , "Value": 1.22
        }, {
          "Factor": "Healthy life expectancy"
          , "Value": 0.73
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.53
        }, {
          "Factor": "Generosity"
          , "Value": 0.09
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.00
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 2.27
        }]
    ,
    "Russia":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.15
        }, {
          "Factor": "Social support"
          , "Value": 1.48
        }, {
          "Factor": "Healthy life expectancy"
          , "Value": 0.60
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.40
        }, {
          "Factor": "Generosity"
          , "Value": 0.07
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.03
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 2.09
        }]
    ,
    "Rwanda":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.33
        }, {
          "Factor": "Social support"
          , "Value": 0.90
        }, {
          "Factor": "Healthy life expectancy"
          , "Value": 0.40
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.64
        }, {
          "Factor": "Generosity"
          , "Value": 0.20
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.44
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 0.50
        }]
    ,
    "Saudi Arabia":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.38
        }, {
          "Factor": "Social support"
          , "Value": 1.33
        }, {
          "Factor": "Healthy life expectancy"
          , "Value": 0.63
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.51
        }, {
          "Factor": "Generosity"
          , "Value": 0.10
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.13
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 2.29
        }]
    ,
    "Senegal":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.43
        }, {
          "Factor": "Social support"
          , "Value": 1.12
        }, {
          "Factor": "Healthy life expectancy"
          , "Value": 0.43
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.41
        }, {
          "Factor": "Generosity"
          , "Value": 0.14
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.08
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 2.03
        }]
    ,
    "Serbia":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.97
        }, {
          "Factor": "Social support"
          , "Value": 1.37
        }, {
          "Factor": "Healthy life expectancy"
          , "Value": 0.69
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.29
        }, {
          "Factor": "Generosity"
          , "Value": 0.13
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.04
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 1.90
        }]
    ,
    "Sierra Leone":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.26
        }, {
          "Factor": "Social support"
          , "Value": 0.81
        }, {
          "Factor": "Healthy life expectancy"
          , "Value": 0.00
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.35
        }, {
          "Factor": "Generosity"
          , "Value": 0.24
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.05
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 2.86
        }]
    ,
    "Singapore":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.53
        }, {
          "Factor": "Social support"
          , "Value": 1.45
        }, {
          "Factor": "Healthy life expectancy"
          , "Value": 1.01
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.63
        }, {
          "Factor": "Generosity"
          , "Value": 0.26
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.46
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 1.01
        }]
    ,
    "Slovakia":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.21
        }, {
          "Factor": "Social support"
          , "Value": 1.54
        }, {
          "Factor": "Healthy life expectancy"
          , "Value": 0.78
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.35
        }, {
          "Factor": "Generosity"
          , "Value": 0.12
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.01
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 2.16
        }]
    ,
    "Slovenia":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.22
        }, {
          "Factor": "Social support"
          , "Value": 1.51
        }, {
          "Factor": "Healthy life expectancy"
          , "Value": 0.86
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.63
        }, {
          "Factor": "Generosity"
          , "Value": 0.16
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.05
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 1.52
        }]
    ,
    "Somalia":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.00
        }, {
          "Factor": "Social support"
          , "Value": 0.71
        }, {
          "Factor": "Healthy life expectancy"
          , "Value": 0.12
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.67
        }, {
          "Factor": "Generosity"
          , "Value": 0.24
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.28
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 2.96
        }]
    ,
    "South Africa":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.94
        }, {
          "Factor": "Social support"
          , "Value": 1.41
        }, {
          "Factor": "Healthy life expectancy"
          , "Value": 0.33
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.52
        }, {
          "Factor": "Generosity"
          , "Value": 0.10
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.06
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 1.37
        }]
    ,
    "South Korea":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.27
        }, {
          "Factor": "Social support"
          , "Value": 1.20
        }, {
          "Factor": "Healthy life expectancy"
          , "Value": 0.95
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.24
        }, {
          "Factor": "Generosity"
          , "Value": 0.17
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.05
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 1.98
        }]
    ,
    "Spain":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.25
        }, {
          "Factor": "Social support"
          , "Value": 1.54
        }, {
          "Factor": "Healthy life expectancy"
          , "Value": 0.96
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.45
        }, {
          "Factor": "Generosity"
          , "Value": 0.14
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.07
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 1.89
        }]
    ,
    "Sri Lanka":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.92
        }, {
          "Factor": "Social support"
          , "Value": 1.31
        }, {
          "Factor": "Healthy life expectancy"
          , "Value": 0.67
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.58
        }, {
          "Factor": "Generosity"
          , "Value": 0.31
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.05
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 0.63
        }]
    ,
    "Sweden":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.35
        }, {
          "Factor": "Social support"
          , "Value": 1.50
        }, {
          "Factor": "Healthy life expectancy"
          , "Value": 0.91
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.66
        }, {
          "Factor": "Generosity"
          , "Value": 0.28
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.38
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 2.22
        }]
    ,
    "Switzerland":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.42
        }, {
          "Factor": "Social support"
          , "Value": 1.55
        }, {
          "Factor": "Healthy life expectancy"
          , "Value": 0.93
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.66
        }, {
          "Factor": "Generosity"
          , "Value": 0.26
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.36
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 2.32
        }]
    ,
    "Syria":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.69
        }, {
          "Factor": "Social support"
          , "Value": 0.38
        }, {
          "Factor": "Healthy life expectancy"
          , "Value": 0.54
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.09
        }, {
          "Factor": "Generosity"
          , "Value": 0.38
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.14
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 1.24
        }]
    ,
    "Taiwan":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.36
        }, {
          "Factor": "Social support"
          , "Value": 1.44
        }, {
          "Factor": "Healthy life expectancy"
          , "Value": 0.86
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.42
        }, {
          "Factor": "Generosity"
          , "Value": 0.15
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.08
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 2.14
        }]
    ,
    "Tajikistan":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.47
        }, {
          "Factor": "Social support"
          , "Value": 1.17
        }, {
          "Factor": "Healthy life expectancy"
          , "Value": 0.60
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.29
        }, {
          "Factor": "Generosity"
          , "Value": 0.19
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.03
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 2.45
        }]
    ,
    "Tanzania":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.46
        }, {
          "Factor": "Social support"
          , "Value": 0.99
        }, {
          "Factor": "Healthy life expectancy"
          , "Value": 0.38
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.48
        }, {
          "Factor": "Generosity"
          , "Value": 0.27
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.10
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 0.63
        }]
    ,
    "Thailand":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.02
        }, {
          "Factor": "Social support"
          , "Value": 1.42
        }, {
          "Factor": "Healthy life expectancy"
          , "Value": 0.71
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.64
        }, {
          "Factor": "Generosity"
          , "Value": 0.36
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.03
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 1.90
        }]
    ,
    "Togo":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.26
        }, {
          "Factor": "Social support"
          , "Value": 0.47
        }, {
          "Factor": "Healthy life expectancy"
          , "Value": 0.25
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.43
        }, {
          "Factor": "Generosity"
          , "Value": 0.16
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.10
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 2.32
        }]
    ,
    "Trinidad & Tobago":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.22
        }, {
          "Factor": "Social support"
          , "Value": 1.49
        }, {
          "Factor": "Healthy life expectancy"
          , "Value": 0.56
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.57
        }, {
          "Factor": "Generosity"
          , "Value": 0.17
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.02
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 2.15
        }]
    ,
    "Tunisia":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.90
        }, {
          "Factor": "Social support"
          , "Value": 0.91
        }, {
          "Factor": "Healthy life expectancy"
          , "Value": 0.69
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.27
        }, {
          "Factor": "Generosity"
          , "Value": 0.04
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.06
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 1.72
        }]
    ,
    "Turkey":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.15
        }, {
          "Factor": "Social support"
          , "Value": 1.38
        }, {
          "Factor": "Healthy life expectancy"
          , "Value": 0.69
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.32
        }, {
          "Factor": "Generosity"
          , "Value": 0.11
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.11
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 1.73
        }]
    ,
    "Turkmenistan":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.02
        }, {
          "Factor": "Social support"
          , "Value": 1.53
        }, {
          "Factor": "Healthy life expectancy"
          , "Value": 0.52
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.42
        }, {
          "Factor": "Generosity"
          , "Value": 0.20
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.04
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 1.92
        }]
    ,
    "Uganda":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.32
        }, {
          "Factor": "Social support"
          , "Value": 1.09
        }, {
          "Factor": "Healthy life expectancy"
          , "Value": 0.24
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.45
        }, {
          "Factor": "Generosity"
          , "Value": 0.26
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.06
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 1.74
        }]
    ,
    "Ukraine":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.79
        }, {
          "Factor": "Social support"
          , "Value": 1.41
        }, {
          "Factor": "Healthy life expectancy"
          , "Value": 0.61
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.16
        }, {
          "Factor": "Generosity"
          , "Value": 0.19
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.01
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 0.93
        }]
    ,
    "United Arab Emirates":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 2.10
        }, {
          "Factor": "Social support"
          , "Value": 0.78
        }, {
          "Factor": "Healthy life expectancy"
          , "Value": 0.67
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.28
        }, {
          "Factor": "Generosity"
          , "Value": 0.19
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.00
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 2.76
        }]
    ,
    "United Kingdom":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.24
        }, {
          "Factor": "Social support"
          , "Value": 1.43
        }, {
          "Factor": "Healthy life expectancy"
          , "Value": 0.89
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.46
        }, {
          "Factor": "Generosity"
          , "Value": 0.26
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.08
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 2.82
        }]
    ,
    "United States":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.40
        }, {
          "Factor": "Social support"
          , "Value": 1.47
        }, {
          "Factor": "Healthy life expectancy"
          , "Value": 0.82
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.55
        }, {
          "Factor": "Generosity"
          , "Value": 0.29
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.13
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 2.23
        }]
    ,
    "Uruguay":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.09
        }, {
          "Factor": "Social support"
          , "Value": 1.46
        }, {
          "Factor": "Healthy life expectancy"
          , "Value": 0.77
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.63
        }, {
          "Factor": "Generosity"
          , "Value": 0.13
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.15
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 2.15
        }]
    ,
    "Uzbekistan":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.72
        }, {
          "Factor": "Social support"
          , "Value": 1.58
        }, {
          "Factor": "Healthy life expectancy"
          , "Value": 0.60
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.72
        }, {
          "Factor": "Generosity"
          , "Value": 0.33
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.26
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 1.88
        }]
    ,
    "Venezuela":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.00
        }, {
          "Factor": "Social support"
          , "Value": 1.47
        }, {
          "Factor": "Healthy life expectancy"
          , "Value": 0.66
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.13
        }, {
          "Factor": "Generosity"
          , "Value": 0.06
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.05
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 1.44
        }]
    ,
    "Vietnam":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.71
        }, {
          "Factor": "Social support"
          , "Value": 1.36
        }, {
          "Factor": "Healthy life expectancy"
          , "Value": 0.70
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.62
        }, {
          "Factor": "Generosity"
          , "Value": 0.18
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.08
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 1.45
        }]
    ,
    "Yemen":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.44
        }, {
          "Factor": "Social support"
          , "Value": 1.07
        }, {
          "Factor": "Healthy life expectancy"
          , "Value": 0.34
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.24
        }, {
          "Factor": "Generosity"
          , "Value": 0.08
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.06
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 1.11
        }]
    ,
    "Zambia":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.56
        }, {
          "Factor": "Social support"
          , "Value": 1.05
        }, {
          "Factor": "Healthy life expectancy"
          , "Value": 0.29
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.50
        }, {
          "Factor": "Generosity"
          , "Value": 0.22
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.08
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 1.67
        }]
    ,
    "Zimbabwe":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.36
        }, {
          "Factor": "Social support"
          , "Value": 1.09
        }, {
          "Factor": "Healthy life expectancy"
          , "Value": 0.25
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.41
        }, {
          "Factor": "Generosity"
          , "Value": 0.13
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.10
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 1.36
        }]

  }

  data2017 = {

    "Afghanistan":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.40
        }, {
          "Factor": "Social support"
          , "Value": 0.58
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.18
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.11
        }, {
          "Factor": "Generosity"
          , "Value": 0.31
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.06
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 2.15
        }]
    ,
    "Albania":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.00
        }, {
          "Factor": "Social support"
          , "Value": 0.80
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.73
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.38
        }, {
          "Factor": "Generosity"
          , "Value": 0.20
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.04
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 1.49
        }]
    ,
    "Algeria":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.09
        }, {
          "Factor": "Social support"
          , "Value": 1.15
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.62
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.23
        }, {
          "Factor": "Generosity"
          , "Value": 0.07
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.15
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 2.57
        }]
    ,
    "Argentina":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.19
        }, {
          "Factor": "Social support"
          , "Value": 1.44
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.70
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.49
        }, {
          "Factor": "Generosity"
          , "Value": 0.11
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.06
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 2.61
        }]
    ,
    "Armenia":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.90
        }, {
          "Factor": "Social support"
          , "Value": 1.01
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.64
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.20
        }, {
          "Factor": "Generosity"
          , "Value": 0.08
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.03
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 1.52
        }]
    ,
    "Australia":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.48
        }, {
          "Factor": "Social support"
          , "Value": 1.51
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.84
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.60
        }, {
          "Factor": "Generosity"
          , "Value": 0.48
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.30
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 2.07
        }]
    ,
    "Austria":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.49
        }, {
          "Factor": "Social support"
          , "Value": 1.46
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.82
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.57
        }, {
          "Factor": "Generosity"
          , "Value": 0.32
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.22
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 2.14
        }]
    ,
    "Azerbaijan":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.15
        }, {
          "Factor": "Social support"
          , "Value": 1.15
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.54
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.40
        }, {
          "Factor": "Generosity"
          , "Value": 0.05
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.18
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 1.76
        }]
    ,
    "Bahrain":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.49
        }, {
          "Factor": "Social support"
          , "Value": 1.32
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.65
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.54
        }, {
          "Factor": "Generosity"
          , "Value": 0.17
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.26
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 1.66
        }]
    ,
    "Bangladesh":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.59
        }, {
          "Factor": "Social support"
          , "Value": 0.74
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.53
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.48
        }, {
          "Factor": "Generosity"
          , "Value": 0.17
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.12
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 1.98
        }]
    ,
    "Belarus":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.16
        }, {
          "Factor": "Social support"
          , "Value": 1.44
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.64
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.30
        }, {
          "Factor": "Generosity"
          , "Value": 0.16
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.16
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 1.72
        }]
    ,
    "Belgium":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.46
        }, {
          "Factor": "Social support"
          , "Value": 1.46
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.82
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.54
        }, {
          "Factor": "Generosity"
          , "Value": 0.23
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.25
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 2.12
        }]
    ,
    "Benin":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.43
        }, {
          "Factor": "Social support"
          , "Value": 0.44
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.21
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.43
        }, {
          "Factor": "Generosity"
          , "Value": 0.21
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.06
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 1.89
        }]
    ,
    "Bhutan":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.89
        }, {
          "Factor": "Social support"
          , "Value": 1.34
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.50
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.50
        }, {
          "Factor": "Generosity"
          , "Value": 0.47
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.17
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 1.14
        }]
    ,
    "Bolivia":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.83
        }, {
          "Factor": "Social support"
          , "Value": 1.23
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.47
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.56
        }, {
          "Factor": "Generosity"
          , "Value": 0.23
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.06
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 2.44
        }]
    ,
    "Bosnia and Herzegovina":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.98
        }, {
          "Factor": "Social support"
          , "Value": 1.07
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.71
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.20
        }, {
          "Factor": "Generosity"
          , "Value": 0.33
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.00
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 1.89
        }]
    ,
    "Botswana":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.12
        }, {
          "Factor": "Social support"
          , "Value": 1.22
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.34
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.51
        }, {
          "Factor": "Generosity"
          , "Value": 0.10
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.10
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 0.38
        }]
    ,
    "Brazil":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.11
        }, {
          "Factor": "Social support"
          , "Value": 1.43
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.62
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.44
        }, {
          "Factor": "Generosity"
          , "Value": 0.16
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.11
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 2.77
        }]
    ,
    "Bulgaria":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.16
        }, {
          "Factor": "Social support"
          , "Value": 1.43
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.71
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.29
        }, {
          "Factor": "Generosity"
          , "Value": 0.11
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.01
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 1.00
        }]
    ,
    "Burkina Faso":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.35
        }, {
          "Factor": "Social support"
          , "Value": 1.04
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.22
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.32
        }, {
          "Factor": "Generosity"
          , "Value": 0.25
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.12
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 1.73
        }]
    ,
    "Burundi":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.09
        }, {
          "Factor": "Social support"
          , "Value": 0.63
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.15
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.06
        }, {
          "Factor": "Generosity"
          , "Value": 0.20
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.08
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 1.68
        }]
    ,
    "Cambodia":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.60
        }, {
          "Factor": "Social support"
          , "Value": 1.01
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.43
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.63
        }, {
          "Factor": "Generosity"
          , "Value": 0.39
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.07
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 1.04
        }]
    ,
    "Cameroon":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.56
        }, {
          "Factor": "Social support"
          , "Value": 0.95
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.13
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.43
        }, {
          "Factor": "Generosity"
          , "Value": 0.24
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.05
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 2.33
        }]
    ,
    "Canada":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.48
        }, {
          "Factor": "Social support"
          , "Value": 1.48
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.83
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.61
        }, {
          "Factor": "Generosity"
          , "Value": 0.44
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.29
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 2.19
        }]
    ,
    "Chad":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.44
        }, {
          "Factor": "Social support"
          , "Value": 0.95
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.04
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.16
        }, {
          "Factor": "Generosity"
          , "Value": 0.22
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.05
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 2.07
        }]
    ,
    "Chile":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.25
        }, {
          "Factor": "Social support"
          , "Value": 1.28
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.82
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.38
        }, {
          "Factor": "Generosity"
          , "Value": 0.33
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.08
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 2.51
        }]
    ,
    "China":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.08
        }, {
          "Factor": "Social support"
          , "Value": 1.16
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.74
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.47
        }, {
          "Factor": "Generosity"
          , "Value": 0.03
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.02
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 1.76
        }]
    ,
    "Colombia":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.07
        }, {
          "Factor": "Social support"
          , "Value": 1.40
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.60
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.48
        }, {
          "Factor": "Generosity"
          , "Value": 0.15
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.05
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 2.62
        }]
    ,
    "Congo (Brazzaville)":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.81
        }, {
          "Factor": "Social support"
          , "Value": 0.83
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.29
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.44
        }, {
          "Factor": "Generosity"
          , "Value": 0.12
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.08
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 1.72
        }]
    ,
    "Congo (Kinshasa)":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.09
        }, {
          "Factor": "Social support"
          , "Value": 1.23
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.19
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.24
        }, {
          "Factor": "Generosity"
          , "Value": 0.25
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.06
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 2.22
        }]
    ,
    "Costa Rica":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.11
        }, {
          "Factor": "Social support"
          , "Value": 1.42
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.76
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.58
        }, {
          "Factor": "Generosity"
          , "Value": 0.21
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.10
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 2.90
        }]
    ,
    "Croatia":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.22
        }, {
          "Factor": "Social support"
          , "Value": 0.97
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.70
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.26
        }, {
          "Factor": "Generosity"
          , "Value": 0.25
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.04
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 1.85
        }]
    ,
    "Cyprus":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.36
        }, {
          "Factor": "Social support"
          , "Value": 1.13
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.84
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.36
        }, {
          "Factor": "Generosity"
          , "Value": 0.27
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.04
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 1.62
        }]
    ,
    "Czech Republic":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.35
        }, {
          "Factor": "Social support"
          , "Value": 1.43
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.75
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.49
        }, {
          "Factor": "Generosity"
          , "Value": 0.09
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.04
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 2.45
        }]
    ,
    "Denmark":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.48
        }, {
          "Factor": "Social support"
          , "Value": 1.55
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.79
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.63
        }, {
          "Factor": "Generosity"
          , "Value": 0.36
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.40
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 2.31
        }]
    ,
    "Dominican Republic":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.08
        }, {
          "Factor": "Social support"
          , "Value": 1.40
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.57
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.55
        }, {
          "Factor": "Generosity"
          , "Value": 0.19
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.11
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 1.32
        }]
    ,
    "Ecuador":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.00
        }, {
          "Factor": "Social support"
          , "Value": 1.29
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.69
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.46
        }, {
          "Factor": "Generosity"
          , "Value": 0.15
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.14
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 2.29
        }]
    ,
    "Egypt":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.99
        }, {
          "Factor": "Social support"
          , "Value": 1.00
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.52
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.28
        }, {
          "Factor": "Generosity"
          , "Value": 0.13
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.11
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 1.70
        }]
    ,
    "El Salvador":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.91
        }, {
          "Factor": "Social support"
          , "Value": 1.18
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.60
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.43
        }, {
          "Factor": "Generosity"
          , "Value": 0.08
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.09
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 2.71
        }]
    ,
    "Estonia":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.32
        }, {
          "Factor": "Social support"
          , "Value": 1.48
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.70
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.48
        }, {
          "Factor": "Generosity"
          , "Value": 0.10
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.18
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 1.36
        }]
    ,
    "Ethiopia":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.34
        }, {
          "Factor": "Social support"
          , "Value": 0.86
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.35
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.41
        }, {
          "Factor": "Generosity"
          , "Value": 0.31
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.17
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 2.02
        }]
    ,
    "Finland":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.44
        }, {
          "Factor": "Social support"
          , "Value": 1.54
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.81
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.62
        }, {
          "Factor": "Generosity"
          , "Value": 0.25
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.38
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 2.43
        }]
    ,
    "France":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.43
        }, {
          "Factor": "Social support"
          , "Value": 1.39
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.84
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.47
        }, {
          "Factor": "Generosity"
          , "Value": 0.13
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.17
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 2.01
        }]
    ,
    "Gabon":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.20
        }, {
          "Factor": "Social support"
          , "Value": 1.16
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.36
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.31
        }, {
          "Factor": "Generosity"
          , "Value": 0.04
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.08
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 1.32
        }]
    ,
    "Georgia":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.95
        }, {
          "Factor": "Social support"
          , "Value": 0.57
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.65
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.31
        }, {
          "Factor": "Generosity"
          , "Value": 0.05
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.25
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 1.50
        }]
    ,
    "Germany":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.49
        }, {
          "Factor": "Social support"
          , "Value": 1.47
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.80
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.56
        }, {
          "Factor": "Generosity"
          , "Value": 0.34
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.28
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 2.02
        }]
    ,
    "Ghana":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.67
        }, {
          "Factor": "Social support"
          , "Value": 0.87
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.30
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.42
        }, {
          "Factor": "Generosity"
          , "Value": 0.26
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.03
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 1.58
        }]
    ,
    "Greece":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.29
        }, {
          "Factor": "Social support"
          , "Value": 1.24
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.81
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.10
        }, {
          "Factor": "Generosity"
          , "Value": 0.00
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.04
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 1.75
        }]
    ,
    "Guatemala":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.87
        }, {
          "Factor": "Social support"
          , "Value": 1.26
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.54
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.53
        }, {
          "Factor": "Generosity"
          , "Value": 0.28
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.08
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 2.89
        }]
    ,
    "Guinea":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.24
        }, {
          "Factor": "Social support"
          , "Value": 0.79
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.19
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.35
        }, {
          "Factor": "Generosity"
          , "Value": 0.26
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.11
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 1.55
        }]
    ,
    "Haiti":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.37
        }, {
          "Factor": "Social support"
          , "Value": 0.64
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.28
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.03
        }, {
          "Factor": "Generosity"
          , "Value": 0.49
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.10
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 1.70
        }]
    ,
    "Honduras":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.73
        }, {
          "Factor": "Social support"
          , "Value": 1.14
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.58
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.35
        }, {
          "Factor": "Generosity"
          , "Value": 0.24
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.07
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 2.07
        }]
    ,
    "Hong Kong":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.55
        }, {
          "Factor": "Social support"
          , "Value": 1.26
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.94
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.49
        }, {
          "Factor": "Generosity"
          , "Value": 0.37
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.29
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 0.55
        }]
    ,
    "Hungary":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.29
        }, {
          "Factor": "Social support"
          , "Value": 1.34
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.69
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.18
        }, {
          "Factor": "Generosity"
          , "Value": 0.08
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.04
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 1.72
        }]
    ,
    "Iceland":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.48
        }, {
          "Factor": "Social support"
          , "Value": 1.61
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.83
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.63
        }, {
          "Factor": "Generosity"
          , "Value": 0.48
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.15
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 2.32
        }]
    ,
    "India":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.79
        }, {
          "Factor": "Social support"
          , "Value": 0.75
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.46
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.47
        }, {
          "Factor": "Generosity"
          , "Value": 0.23
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.09
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 1.52
        }]
    ,
    "Indonesia":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.00
        }, {
          "Factor": "Social support"
          , "Value": 1.27
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.49
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.44
        }, {
          "Factor": "Generosity"
          , "Value": 0.61
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.02
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 1.43
        }]
    ,
    "Iran":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.16
        }, {
          "Factor": "Social support"
          , "Value": 0.71
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.64
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.25
        }, {
          "Factor": "Generosity"
          , "Value": 0.39
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.05
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 1.50
        }]
    ,
    "Iraq":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.10
        }, {
          "Factor": "Social support"
          , "Value": 0.98
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.50
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.29
        }, {
          "Factor": "Generosity"
          , "Value": 0.20
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.11
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 1.32
        }]
    ,
    "Ireland":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.54
        }, {
          "Factor": "Social support"
          , "Value": 1.56
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.81
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.57
        }, {
          "Factor": "Generosity"
          , "Value": 0.43
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.30
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 1.77
        }]
    ,
    "Israel":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.38
        }, {
          "Factor": "Social support"
          , "Value": 1.38
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.84
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.41
        }, {
          "Factor": "Generosity"
          , "Value": 0.33
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.09
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 2.80
        }]
    ,
    "Italy":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.40
        }, {
          "Factor": "Social support"
          , "Value": 1.44
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.85
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.26
        }, {
          "Factor": "Generosity"
          , "Value": 0.17
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.03
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 1.81
        }]
    ,
    "Ivory Coast":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.60
        }, {
          "Factor": "Social support"
          , "Value": 0.90
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.05
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.45
        }, {
          "Factor": "Generosity"
          , "Value": 0.20
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.13
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 1.84
        }]
    ,
    "Jamaica":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.93
        }, {
          "Factor": "Social support"
          , "Value": 1.37
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.64
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.47
        }, {
          "Factor": "Generosity"
          , "Value": 0.23
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.06
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 1.61
        }]
    ,
    "Japan":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.42
        }, {
          "Factor": "Social support"
          , "Value": 1.44
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.91
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.51
        }, {
          "Factor": "Generosity"
          , "Value": 0.12
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.16
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 1.36
        }]
    ,
    "Jordan":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.99
        }, {
          "Factor": "Social support"
          , "Value": 1.24
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.60
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.42
        }, {
          "Factor": "Generosity"
          , "Value": 0.17
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.12
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 1.79
        }]
    ,
    "Kazakhstan":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.28
        }, {
          "Factor": "Social support"
          , "Value": 1.38
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.61
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.44
        }, {
          "Factor": "Generosity"
          , "Value": 0.20
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.12
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 1.78
        }]
    ,
    "Kenya":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.56
        }, {
          "Factor": "Social support"
          , "Value": 1.07
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.31
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.45
        }, {
          "Factor": "Generosity"
          , "Value": 0.44
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.06
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 1.65
        }]
    ,
    "Kosovo":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.95
        }, {
          "Factor": "Social support"
          , "Value": 1.14
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.54
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.26
        }, {
          "Factor": "Generosity"
          , "Value": 0.32
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.06
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 2.01
        }]
    ,
    "Kuwait":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.63
        }, {
          "Factor": "Social support"
          , "Value": 1.26
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.63
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.50
        }, {
          "Factor": "Generosity"
          , "Value": 0.23
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.22
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 1.64
        }]
    ,
    "Kyrgyzstan":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.60
        }, {
          "Factor": "Social support"
          , "Value": 1.39
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.55
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.45
        }, {
          "Factor": "Generosity"
          , "Value": 0.43
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.04
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 1.54
        }]
    ,
    "Latvia":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.26
        }, {
          "Factor": "Social support"
          , "Value": 1.40
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.64
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.33
        }, {
          "Factor": "Generosity"
          , "Value": 0.15
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.07
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 1.99
        }]
    ,
    "Lebanon":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.07
        }, {
          "Factor": "Social support"
          , "Value": 1.13
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.74
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.29
        }, {
          "Factor": "Generosity"
          , "Value": 0.26
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.04
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 1.70
        }]
    ,
    "Liberia":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.12
        }, {
          "Factor": "Social support"
          , "Value": 0.87
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.23
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.33
        }, {
          "Factor": "Generosity"
          , "Value": 0.27
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.04
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 1.67
        }]
    ,
    "Libya":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.10
        }, {
          "Factor": "Social support"
          , "Value": 1.36
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.52
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.47
        }, {
          "Factor": "Generosity"
          , "Value": 0.15
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.09
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 1.84
        }]
    ,
    "Lithuania":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.31
        }, {
          "Factor": "Social support"
          , "Value": 1.47
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.63
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.23
        }, {
          "Factor": "Generosity"
          , "Value": 0.01
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.01
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 2.23
        }]
    ,
    "Luxembourg":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.74
        }, {
          "Factor": "Social support"
          , "Value": 1.46
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.85
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.60
        }, {
          "Factor": "Generosity"
          , "Value": 0.28
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.32
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 1.62
        }]
    ,
    "Madagascar":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.31
        }, {
          "Factor": "Social support"
          , "Value": 0.91
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.38
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.19
        }, {
          "Factor": "Generosity"
          , "Value": 0.21
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.07
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 1.58
        }]
    ,
    "Malawi":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.23
        }, {
          "Factor": "Social support"
          , "Value": 0.51
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.32
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.47
        }, {
          "Factor": "Generosity"
          , "Value": 0.29
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.07
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 2.08
        }]
    ,
    "Malaysia":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.29
        }, {
          "Factor": "Social support"
          , "Value": 1.28
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.62
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.40
        }, {
          "Factor": "Generosity"
          , "Value": 0.42
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.07
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 2.00
        }]
    ,
    "Mali":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.48
        }, {
          "Factor": "Social support"
          , "Value": 1.28
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.17
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.31
        }, {
          "Factor": "Generosity"
          , "Value": 0.18
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.10
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 1.67
        }]
    ,
    "Malta":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.34
        }, {
          "Factor": "Social support"
          , "Value": 1.49
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.82
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.59
        }, {
          "Factor": "Generosity"
          , "Value": 0.57
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.15
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 1.56
        }]
    ,
    "Mauritania":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.65
        }, {
          "Factor": "Social support"
          , "Value": 1.27
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.29
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.10
        }, {
          "Factor": "Generosity"
          , "Value": 0.20
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.14
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 1.65
        }]
    ,
    "Mauritius":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.19
        }, {
          "Factor": "Social support"
          , "Value": 1.21
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.64
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.49
        }, {
          "Factor": "Generosity"
          , "Value": 0.36
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.04
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 1.70
        }]
    ,
    "Mexico":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.15
        }, {
          "Factor": "Social support"
          , "Value": 1.21
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.71
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.41
        }, {
          "Factor": "Generosity"
          , "Value": 0.12
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.13
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 2.84
        }]
    ,
    "Moldova":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.73
        }, {
          "Factor": "Social support"
          , "Value": 1.25
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.59
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.24
        }, {
          "Factor": "Generosity"
          , "Value": 0.21
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.01
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 2.81
        }]
    ,
    "Mongolia":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.03
        }, {
          "Factor": "Social support"
          , "Value": 1.49
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.56
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.39
        }, {
          "Factor": "Generosity"
          , "Value": 0.34
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.03
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 1.11
        }]
    ,
    "Montenegro":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.12
        }, {
          "Factor": "Social support"
          , "Value": 1.24
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.67
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.19
        }, {
          "Factor": "Generosity"
          , "Value": 0.20
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.09
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 1.73
        }]
    ,
    "Morocco":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.88
        }, {
          "Factor": "Social support"
          , "Value": 0.77
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.60
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.41
        }, {
          "Factor": "Generosity"
          , "Value": 0.03
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.09
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 2.46
        }]
    ,
    "Myanmar":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.37
        }, {
          "Factor": "Social support"
          , "Value": 1.12
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.40
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.51
        }, {
          "Factor": "Generosity"
          , "Value": 0.84
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.19
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 1.12
        }]
    ,
    "Nepal":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.48
        }, {
          "Factor": "Social support"
          , "Value": 1.18
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.50
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.44
        }, {
          "Factor": "Generosity"
          , "Value": 0.39
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.07
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 1.89
        }]
    ,
    "Netherlands":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.50
        }, {
          "Factor": "Social support"
          , "Value": 1.43
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.81
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.59
        }, {
          "Factor": "Generosity"
          , "Value": 0.47
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.28
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 2.29
        }]
    ,
    "New Zealand":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.41
        }, {
          "Factor": "Social support"
          , "Value": 1.55
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.82
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.61
        }, {
          "Factor": "Generosity"
          , "Value": 0.50
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.38
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 2.05
        }]
    ,
    "Nicaragua":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.74
        }, {
          "Factor": "Social support"
          , "Value": 1.29
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.65
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.45
        }, {
          "Factor": "Generosity"
          , "Value": 0.30
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.13
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 2.51
        }]
    ,
    "Niger":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.16
        }, {
          "Factor": "Social support"
          , "Value": 0.99
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.27
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.36
        }, {
          "Factor": "Generosity"
          , "Value": 0.23
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.14
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 1.87
        }]
    ,
    "Nigeria":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.78
        }, {
          "Factor": "Social support"
          , "Value": 1.22
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.06
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.39
        }, {
          "Factor": "Generosity"
          , "Value": 0.23
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.03
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 2.37
        }]
    ,
    "Northern Cyprus":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.35
        }, {
          "Factor": "Social support"
          , "Value": 1.19
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.83
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.47
        }, {
          "Factor": "Generosity"
          , "Value": 0.27
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.16
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 1.55
        }]
    ,
    "Norway":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.62
        }, {
          "Factor": "Social support"
          , "Value": 1.53
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.80
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.64
        }, {
          "Factor": "Generosity"
          , "Value": 0.36
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.32
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 2.28
        }]
    ,
    "Pakistan":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.73
        }, {
          "Factor": "Social support"
          , "Value": 0.67
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.40
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.24
        }, {
          "Factor": "Generosity"
          , "Value": 0.32
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.12
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 2.79
        }]
    ,
    "Palestinian Territories":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.72
        }, {
          "Factor": "Social support"
          , "Value": 1.16
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.57
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.25
        }, {
          "Factor": "Generosity"
          , "Value": 0.11
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.09
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 1.88
        }]
    ,
    "Panama":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.23
        }, {
          "Factor": "Social support"
          , "Value": 1.37
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.71
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.55
        }, {
          "Factor": "Generosity"
          , "Value": 0.21
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.07
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 2.31
        }]
    ,
    "Paraguay":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.93
        }, {
          "Factor": "Social support"
          , "Value": 1.51
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.58
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.47
        }, {
          "Factor": "Generosity"
          , "Value": 0.22
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.09
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 1.69
        }]
    ,
    "Peru":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.04
        }, {
          "Factor": "Social support"
          , "Value": 1.22
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.63
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.45
        }, {
          "Factor": "Generosity"
          , "Value": 0.13
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.05
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 2.21
        }]
    ,
    "Philippines":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.86
        }, {
          "Factor": "Social support"
          , "Value": 1.25
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.47
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.59
        }, {
          "Factor": "Generosity"
          , "Value": 0.19
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.10
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 1.97
        }]
    ,
    "Poland":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.29
        }, {
          "Factor": "Social support"
          , "Value": 1.45
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.70
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.52
        }, {
          "Factor": "Generosity"
          , "Value": 0.16
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.06
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 1.80
        }]
    ,
    "Portugal":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.32
        }, {
          "Factor": "Social support"
          , "Value": 1.37
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.80
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.50
        }, {
          "Factor": "Generosity"
          , "Value": 0.10
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.02
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 1.11
        }]
    ,
    "Qatar":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.87
        }, {
          "Factor": "Social support"
          , "Value": 1.27
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.71
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.60
        }, {
          "Factor": "Generosity"
          , "Value": 0.33
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.44
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 1.15
        }]
    ,
    "Romania":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.22
        }, {
          "Factor": "Social support"
          , "Value": 1.15
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.69
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.46
        }, {
          "Factor": "Generosity"
          , "Value": 0.13
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.00
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 2.18
        }]
    ,
    "Russia":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.28
        }, {
          "Factor": "Social support"
          , "Value": 1.47
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.55
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.37
        }, {
          "Factor": "Generosity"
          , "Value": 0.05
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.03
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 2.21
        }]
    ,
    "Rwanda":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.37
        }, {
          "Factor": "Social support"
          , "Value": 0.95
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.33
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.58
        }, {
          "Factor": "Generosity"
          , "Value": 0.25
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.46
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 0.54
        }]
    ,
    "Saudi Arabia":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.53
        }, {
          "Factor": "Social support"
          , "Value": 1.29
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.59
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.45
        }, {
          "Factor": "Generosity"
          , "Value": 0.15
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.27
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 2.07
        }]
    ,
    "Senegal":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.48
        }, {
          "Factor": "Social support"
          , "Value": 1.18
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.41
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.38
        }, {
          "Factor": "Generosity"
          , "Value": 0.18
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.12
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 1.79
        }]
    ,
    "Serbia":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.07
        }, {
          "Factor": "Social support"
          , "Value": 1.26
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.65
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.21
        }, {
          "Factor": "Generosity"
          , "Value": 0.22
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.04
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 1.95
        }]
    ,
    "Sierra Leone":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.37
        }, {
          "Factor": "Social support"
          , "Value": 0.98
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.01
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.32
        }, {
          "Factor": "Generosity"
          , "Value": 0.29
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.07
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 2.67
        }]
    ,
    "Singapore":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.69
        }, {
          "Factor": "Social support"
          , "Value": 1.35
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.95
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.55
        }, {
          "Factor": "Generosity"
          , "Value": 0.35
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.46
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 1.22
        }]
    ,
    "Slovakia":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.33
        }, {
          "Factor": "Social support"
          , "Value": 1.51
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.71
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.30
        }, {
          "Factor": "Generosity"
          , "Value": 0.14
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.02
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 2.10
        }]
    ,
    "Slovenia":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.34
        }, {
          "Factor": "Social support"
          , "Value": 1.45
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.79
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.57
        }, {
          "Factor": "Generosity"
          , "Value": 0.24
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.05
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 1.31
        }]
    ,
    "Somalia":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.02
        }, {
          "Factor": "Social support"
          , "Value": 0.72
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.11
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.60
        }, {
          "Factor": "Generosity"
          , "Value": 0.29
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.28
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 3.12
        }]
    ,
    "South Africa":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.05
        }, {
          "Factor": "Social support"
          , "Value": 1.38
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.19
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.48
        }, {
          "Factor": "Generosity"
          , "Value": 0.14
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.07
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 1.51
        }]
    ,
    "South Korea":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.40
        }, {
          "Factor": "Social support"
          , "Value": 1.13
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.90
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.26
        }, {
          "Factor": "Generosity"
          , "Value": 0.21
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.06
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 1.88
        }]
    ,
    "Spain":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.38
        }, {
          "Factor": "Social support"
          , "Value": 1.53
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.89
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.41
        }, {
          "Factor": "Generosity"
          , "Value": 0.19
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.07
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 1.93
        }]
    ,
    "Sri Lanka":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.01
        }, {
          "Factor": "Social support"
          , "Value": 1.26
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.63
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.56
        }, {
          "Factor": "Generosity"
          , "Value": 0.49
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.07
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 0.42
        }]
    ,
    "Sweden":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.49
        }, {
          "Factor": "Social support"
          , "Value": 1.48
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.83
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.61
        }, {
          "Factor": "Generosity"
          , "Value": 0.39
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.38
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 2.10
        }]
    ,
    "Switzerland":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.56
        }, {
          "Factor": "Social support"
          , "Value": 1.52
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.86
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.62
        }, {
          "Factor": "Generosity"
          , "Value": 0.29
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.37
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 2.28
        }]
    ,
    "Syria":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.78
        }, {
          "Factor": "Social support"
          , "Value": 0.40
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.50
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.08
        }, {
          "Factor": "Generosity"
          , "Value": 0.49
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.15
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 1.06
        }]
    ,
    "Taiwan":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.43
        }, {
          "Factor": "Social support"
          , "Value": 1.38
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.79
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.36
        }, {
          "Factor": "Generosity"
          , "Value": 0.26
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.06
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 2.13
        }]
    ,
    "Tajikistan":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.52
        }, {
          "Factor": "Social support"
          , "Value": 1.27
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.53
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.47
        }, {
          "Factor": "Generosity"
          , "Value": 0.25
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.15
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 1.85
        }]
    ,
    "Tanzania":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.51
        }, {
          "Factor": "Social support"
          , "Value": 1.04
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.36
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.39
        }, {
          "Factor": "Generosity"
          , "Value": 0.35
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.07
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 0.62
        }]
    ,
    "Thailand":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.13
        }, {
          "Factor": "Social support"
          , "Value": 1.43
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.65
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.58
        }, {
          "Factor": "Generosity"
          , "Value": 0.57
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.03
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 2.04
        }]
    ,
    "Togo":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.31
        }, {
          "Factor": "Social support"
          , "Value": 0.43
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.25
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.38
        }, {
          "Factor": "Generosity"
          , "Value": 0.20
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.10
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 1.84
        }]
    ,
    "Trinidad & Tobago":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.36
        }, {
          "Factor": "Social support"
          , "Value": 1.38
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.52
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.52
        }, {
          "Factor": "Generosity"
          , "Value": 0.33
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.01
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 2.05
        }]
    ,
    "Tunisia":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.01
        }, {
          "Factor": "Social support"
          , "Value": 0.87
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.61
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.29
        }, {
          "Factor": "Generosity"
          , "Value": 0.05
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.09
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 1.89
        }]
    ,
    "Turkey":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.20
        }, {
          "Factor": "Social support"
          , "Value": 1.34
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.64
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.30
        }, {
          "Factor": "Generosity"
          , "Value": 0.05
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.10
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 1.88
        }]
    ,
    "Turkmenistan":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.13
        }, {
          "Factor": "Social support"
          , "Value": 1.49
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.44
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.42
        }, {
          "Factor": "Generosity"
          , "Value": 0.25
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.26
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 1.83
        }]
    ,
    "Uganda":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.38
        }, {
          "Factor": "Social support"
          , "Value": 1.13
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.22
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.44
        }, {
          "Factor": "Generosity"
          , "Value": 0.33
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.06
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 1.53
        }]
    ,
    "Ukraine":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.89
        }, {
          "Factor": "Social support"
          , "Value": 1.39
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.58
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.12
        }, {
          "Factor": "Generosity"
          , "Value": 0.27
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.02
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 0.81
        }]
    ,
    "United Arab Emirates":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.63
        }, {
          "Factor": "Social support"
          , "Value": 1.27
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.73
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.61
        }, {
          "Factor": "Generosity"
          , "Value": 0.36
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.32
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 1.73
        }]
    ,
    "United Kingdom":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.44
        }, {
          "Factor": "Social support"
          , "Value": 1.50
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.81
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.51
        }, {
          "Factor": "Generosity"
          , "Value": 0.49
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.27
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 1.70
        }]
    ,
    "United States":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.55
        }, {
          "Factor": "Social support"
          , "Value": 1.42
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.77
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.51
        }, {
          "Factor": "Generosity"
          , "Value": 0.39
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.14
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 2.22
        }]
    ,
    "Uruguay":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.22
        }, {
          "Factor": "Social support"
          , "Value": 1.41
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.72
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.58
        }, {
          "Factor": "Generosity"
          , "Value": 0.18
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.18
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 2.17
        }]
    ,
    "Uzbekistan":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.79
        }, {
          "Factor": "Social support"
          , "Value": 1.55
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.50
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.66
        }, {
          "Factor": "Generosity"
          , "Value": 0.42
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.25
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 1.82
        }]
    ,
    "Venezuela":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.13
        }, {
          "Factor": "Social support"
          , "Value": 1.43
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.62
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.15
        }, {
          "Factor": "Generosity"
          , "Value": 0.07
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.06
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 1.79
        }]
    ,
    "Vietnam":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.79
        }, {
          "Factor": "Social support"
          , "Value": 1.28
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.65
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.57
        }, {
          "Factor": "Generosity"
          , "Value": 0.23
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.09
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 1.46
        }]
    ,
    "Yemen":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.59
        }, {
          "Factor": "Social support"
          , "Value": 0.94
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.31
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.25
        }, {
          "Factor": "Generosity"
          , "Value": 0.10
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.06
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 1.35
        }]
    ,
    "Zambia":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.64
        }, {
          "Factor": "Social support"
          , "Value": 1.00
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.26
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.46
        }, {
          "Factor": "Generosity"
          , "Value": 0.25
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.08
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 1.83
        }]
    ,
    "Zimbabwe":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.38
        }, {
          "Factor": "Social support"
          , "Value": 1.08
        }, {
          "Factor": "Health Life Expectancy"
          , "Value": 0.20
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.34
        }, {
          "Factor": "Generosity"
          , "Value": 0.19
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.10
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 1.60
        }]


  }

  data2019 = {
    "Afghanistan":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.35
        }, {
          "Factor": "Social support"
          , "Value": 0.52
        }, {
          "Factor": "Healthy life expectancy"
          , "Value": 0.36
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.00
        }, {
          "Factor": "Generosity"
          , "Value": 0.16
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.03
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 1.79
        }]
    ,
    "Albania":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.95
        }, {
          "Factor": "Social support"
          , "Value": 0.85
        }, {
          "Factor": "Healthy life expectancy"
          , "Value": 0.87
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.38
        }, {
          "Factor": "Generosity"
          , "Value": 0.18
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.03
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 1.46
        }]
    ,
    "Algeria":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.00
        }, {
          "Factor": "Social support"
          , "Value": 1.16
        }, {
          "Factor": "Healthy life expectancy"
          , "Value": 0.79
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.09
        }, {
          "Factor": "Generosity"
          , "Value": 0.07
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.11
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 1.99
        }]
    ,
    "Argentina":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.09
        }, {
          "Factor": "Social support"
          , "Value": 1.43
        }, {
          "Factor": "Healthy life expectancy"
          , "Value": 0.88
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.47
        }, {
          "Factor": "Generosity"
          , "Value": 0.07
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.05
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 2.09
        }]
    ,
    "Armenia":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.85
        }, {
          "Factor": "Social support"
          , "Value": 1.05
        }, {
          "Factor": "Healthy life expectancy"
          , "Value": 0.81
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.28
        }, {
          "Factor": "Generosity"
          , "Value": 0.10
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.06
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 1.40
        }]
    ,
    "Australia":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.37
        }, {
          "Factor": "Social support"
          , "Value": 1.55
        }, {
          "Factor": "Healthy life expectancy"
          , "Value": 1.04
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.56
        }, {
          "Factor": "Generosity"
          , "Value": 0.33
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.29
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 2.09
        }]
    ,
    "Austria":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.38
        }, {
          "Factor": "Social support"
          , "Value": 1.48
        }, {
          "Factor": "Healthy life expectancy"
          , "Value": 1.02
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.53
        }, {
          "Factor": "Generosity"
          , "Value": 0.24
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.23
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 2.38
        }]
    ,
    "Azerbaijan":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.04
        }, {
          "Factor": "Social support"
          , "Value": 1.15
        }, {
          "Factor": "Healthy life expectancy"
          , "Value": 0.77
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.35
        }, {
          "Factor": "Generosity"
          , "Value": 0.04
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.18
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 1.68
        }]
    ,
    "Bahrain":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.36
        }, {
          "Factor": "Social support"
          , "Value": 1.37
        }, {
          "Factor": "Healthy life expectancy"
          , "Value": 0.87
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.54
        }, {
          "Factor": "Generosity"
          , "Value": 0.26
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.11
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 1.70
        }]
    ,
    "Bangladesh":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.56
        }, {
          "Factor": "Social support"
          , "Value": 0.93
        }, {
          "Factor": "Healthy life expectancy"
          , "Value": 0.72
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.53
        }, {
          "Factor": "Generosity"
          , "Value": 0.17
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.14
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 1.41
        }]
    ,
    "Belarus":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.07
        }, {
          "Factor": "Social support"
          , "Value": 1.47
        }, {
          "Factor": "Healthy life expectancy"
          , "Value": 0.79
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.23
        }, {
          "Factor": "Generosity"
          , "Value": 0.09
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.14
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 1.53
        }]
    ,
    "Belgium":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.36
        }, {
          "Factor": "Social support"
          , "Value": 1.50
        }, {
          "Factor": "Healthy life expectancy"
          , "Value": 0.99
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.47
        }, {
          "Factor": "Generosity"
          , "Value": 0.16
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.21
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 2.23
        }]
    ,
    "Benin":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.39
        }, {
          "Factor": "Social support"
          , "Value": 0.44
        }, {
          "Factor": "Healthy life expectancy"
          , "Value": 0.40
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.35
        }, {
          "Factor": "Generosity"
          , "Value": 0.17
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.08
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 3.05
        }]
    ,
    "Bhutan":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.81
        }, {
          "Factor": "Social support"
          , "Value": 1.32
        }, {
          "Factor": "Healthy life expectancy"
          , "Value": 0.60
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.46
        }, {
          "Factor": "Generosity"
          , "Value": 0.37
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.17
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 1.35
        }]
    ,
    "Bolivia":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.78
        }, {
          "Factor": "Social support"
          , "Value": 1.21
        }, {
          "Factor": "Healthy life expectancy"
          , "Value": 0.71
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.51
        }, {
          "Factor": "Generosity"
          , "Value": 0.14
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.06
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 2.38
        }]
    ,
    "Bosnia and Herzegovina":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.94
        }, {
          "Factor": "Social support"
          , "Value": 1.21
        }, {
          "Factor": "Healthy life expectancy"
          , "Value": 0.84
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.21
        }, {
          "Factor": "Generosity"
          , "Value": 0.26
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.01
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 1.90
        }]
    ,
    "Botswana":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.04
        }, {
          "Factor": "Social support"
          , "Value": 1.15
        }, {
          "Factor": "Healthy life expectancy"
          , "Value": 0.54
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.46
        }, {
          "Factor": "Generosity"
          , "Value": 0.03
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.10
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 0.18
        }]
    ,
    "Brazil":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.00
        }, {
          "Factor": "Social support"
          , "Value": 1.44
        }, {
          "Factor": "Healthy life expectancy"
          , "Value": 0.80
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.39
        }, {
          "Factor": "Generosity"
          , "Value": 0.10
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.09
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 2.48
        }]
    ,
    "Bulgaria":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.09
        }, {
          "Factor": "Social support"
          , "Value": 1.51
        }, {
          "Factor": "Healthy life expectancy"
          , "Value": 0.81
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.31
        }, {
          "Factor": "Generosity"
          , "Value": 0.08
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.00
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 1.20
        }]
    ,
    "Burkina Faso":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.33
        }, {
          "Factor": "Social support"
          , "Value": 1.06
        }, {
          "Factor": "Healthy life expectancy"
          , "Value": 0.38
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.26
        }, {
          "Factor": "Generosity"
          , "Value": 0.18
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.11
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 2.27
        }]
    ,
    "Burundi":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.05
        }, {
          "Factor": "Social support"
          , "Value": 0.45
        }, {
          "Factor": "Healthy life expectancy"
          , "Value": 0.38
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.22
        }, {
          "Factor": "Generosity"
          , "Value": 0.18
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.18
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 2.33
        }]
    ,
    "Cambodia":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.57
        }, {
          "Factor": "Social support"
          , "Value": 1.12
        }, {
          "Factor": "Healthy life expectancy"
          , "Value": 0.64
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.61
        }, {
          "Factor": "Generosity"
          , "Value": 0.23
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.06
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 1.46
        }]
    ,
    "Cameroon":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.55
        }, {
          "Factor": "Social support"
          , "Value": 0.91
        }, {
          "Factor": "Healthy life expectancy"
          , "Value": 0.33
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.38
        }, {
          "Factor": "Generosity"
          , "Value": 0.19
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.04
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 2.65
        }]
    ,
    "Canada":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.36
        }, {
          "Factor": "Social support"
          , "Value": 1.50
        }, {
          "Factor": "Healthy life expectancy"
          , "Value": 1.04
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.58
        }, {
          "Factor": "Generosity"
          , "Value": 0.28
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.31
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 2.19
        }]
    ,
    "Chad":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.35
        }, {
          "Factor": "Social support"
          , "Value": 0.77
        }, {
          "Factor": "Healthy life expectancy"
          , "Value": 0.19
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.17
        }, {
          "Factor": "Generosity"
          , "Value": 0.20
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.08
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 2.59
        }]
    ,
    "Chile":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.16
        }, {
          "Factor": "Social support"
          , "Value": 1.37
        }, {
          "Factor": "Healthy life expectancy"
          , "Value": 0.92
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.36
        }, {
          "Factor": "Generosity"
          , "Value": 0.19
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.06
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 2.40
        }]
    ,
    "China":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.03
        }, {
          "Factor": "Social support"
          , "Value": 1.13
        }, {
          "Factor": "Healthy life expectancy"
          , "Value": 0.89
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.52
        }, {
          "Factor": "Generosity"
          , "Value": 0.06
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.10
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 1.47
        }]
    ,
    "Colombia":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.98
        }, {
          "Factor": "Social support"
          , "Value": 1.41
        }, {
          "Factor": "Healthy life expectancy"
          , "Value": 0.84
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.47
        }, {
          "Factor": "Generosity"
          , "Value": 0.10
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.03
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 2.29
        }]
    ,
    "Congo (Brazzaville)":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.67
        }, {
          "Factor": "Social support"
          , "Value": 0.80
        }, {
          "Factor": "Healthy life expectancy"
          , "Value": 0.51
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.37
        }, {
          "Factor": "Generosity"
          , "Value": 0.10
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.09
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 2.26
        }]
    ,
    "Congo (Kinshasa)":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.09
        }, {
          "Factor": "Social support"
          , "Value": 1.13
        }, {
          "Factor": "Healthy life expectancy"
          , "Value": 0.36
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.27
        }, {
          "Factor": "Generosity"
          , "Value": 0.21
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.05
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 2.31
        }]
    ,
    "Costa Rica":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.03
        }, {
          "Factor": "Social support"
          , "Value": 1.44
        }, {
          "Factor": "Healthy life expectancy"
          , "Value": 0.96
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.56
        }, {
          "Factor": "Generosity"
          , "Value": 0.14
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.09
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 2.93
        }]
    ,
    "Croatia":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.16
        }, {
          "Factor": "Social support"
          , "Value": 1.27
        }, {
          "Factor": "Healthy life expectancy"
          , "Value": 0.91
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.30
        }, {
          "Factor": "Generosity"
          , "Value": 0.12
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.02
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 1.66
        }]
    ,
    "Cyprus":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.26
        }, {
          "Factor": "Social support"
          , "Value": 1.22
        }, {
          "Factor": "Healthy life expectancy"
          , "Value": 1.04
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.41
        }, {
          "Factor": "Generosity"
          , "Value": 0.19
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.04
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 1.88
        }]
    ,
    "Czech Republic":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.27
        }, {
          "Factor": "Social support"
          , "Value": 1.49
        }, {
          "Factor": "Healthy life expectancy"
          , "Value": 0.92
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.46
        }, {
          "Factor": "Generosity"
          , "Value": 0.05
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.04
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 2.64
        }]
    ,
    "Denmark":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.38
        }, {
          "Factor": "Social support"
          , "Value": 1.57
        }, {
          "Factor": "Healthy life expectancy"
          , "Value": 1.00
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.59
        }, {
          "Factor": "Generosity"
          , "Value": 0.25
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.41
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 2.39
        }]
    ,
    "Dominican Republic":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.01
        }, {
          "Factor": "Social support"
          , "Value": 1.40
        }, {
          "Factor": "Healthy life expectancy"
          , "Value": 0.78
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.50
        }, {
          "Factor": "Generosity"
          , "Value": 0.11
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.10
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 1.52
        }]
    ,
    "Ecuador":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.91
        }, {
          "Factor": "Social support"
          , "Value": 1.31
        }, {
          "Factor": "Healthy life expectancy"
          , "Value": 0.87
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.50
        }, {
          "Factor": "Generosity"
          , "Value": 0.13
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.09
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 2.23
        }]
    ,
    "Egypt":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.91
        }, {
          "Factor": "Social support"
          , "Value": 1.04
        }, {
          "Factor": "Healthy life expectancy"
          , "Value": 0.64
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.24
        }, {
          "Factor": "Generosity"
          , "Value": 0.08
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.07
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 1.19
        }]
    ,
    "El Salvador":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.79
        }, {
          "Factor": "Social support"
          , "Value": 1.24
        }, {
          "Factor": "Healthy life expectancy"
          , "Value": 0.79
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.43
        }, {
          "Factor": "Generosity"
          , "Value": 0.09
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.07
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 2.83
        }]
    ,
    "Estonia":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.24
        }, {
          "Factor": "Social support"
          , "Value": 1.53
        }, {
          "Factor": "Healthy life expectancy"
          , "Value": 0.87
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.49
        }, {
          "Factor": "Generosity"
          , "Value": 0.10
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.16
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 1.50
        }]
    ,
    "Ethiopia":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.34
        }, {
          "Factor": "Social support"
          , "Value": 1.03
        }, {
          "Factor": "Healthy life expectancy"
          , "Value": 0.53
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.34
        }, {
          "Factor": "Generosity"
          , "Value": 0.21
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.10
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 1.73
        }]
    ,
    "Finland":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.34
        }, {
          "Factor": "Social support"
          , "Value": 1.59
        }, {
          "Factor": "Healthy life expectancy"
          , "Value": 0.99
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.60
        }, {
          "Factor": "Generosity"
          , "Value": 0.15
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.39
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 2.71
        }]
    ,
    "France":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.32
        }, {
          "Factor": "Social support"
          , "Value": 1.47
        }, {
          "Factor": "Healthy life expectancy"
          , "Value": 1.04
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.44
        }, {
          "Factor": "Generosity"
          , "Value": 0.11
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.18
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 2.02
        }]
    ,
    "Gabon":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.06
        }, {
          "Factor": "Social support"
          , "Value": 1.18
        }, {
          "Factor": "Healthy life expectancy"
          , "Value": 0.57
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.29
        }, {
          "Factor": "Generosity"
          , "Value": 0.04
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.06
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 1.59
        }]
    ,
    "Georgia":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.89
        }, {
          "Factor": "Social support"
          , "Value": 0.67
        }, {
          "Factor": "Healthy life expectancy"
          , "Value": 0.75
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.35
        }, {
          "Factor": "Generosity"
          , "Value": 0.04
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.16
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 1.66
        }]
    ,
    "Germany":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.37
        }, {
          "Factor": "Social support"
          , "Value": 1.45
        }, {
          "Factor": "Healthy life expectancy"
          , "Value": 0.99
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.49
        }, {
          "Factor": "Generosity"
          , "Value": 0.26
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.27
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 2.15
        }]
    ,
    "Ghana":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.61
        }, {
          "Factor": "Social support"
          , "Value": 0.87
        }, {
          "Factor": "Healthy life expectancy"
          , "Value": 0.49
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.38
        }, {
          "Factor": "Generosity"
          , "Value": 0.24
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.04
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 2.37
        }]
    ,
    "Greece":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.18
        }, {
          "Factor": "Social support"
          , "Value": 1.16
        }, {
          "Factor": "Healthy life expectancy"
          , "Value": 1.00
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.07
        }, {
          "Factor": "Generosity"
          , "Value": 0.00
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.03
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 1.85
        }]
    ,
    "Guatemala":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.80
        }, {
          "Factor": "Social support"
          , "Value": 1.27
        }, {
          "Factor": "Healthy life expectancy"
          , "Value": 0.75
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.54
        }, {
          "Factor": "Generosity"
          , "Value": 0.17
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.08
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 2.83
        }]
    ,
    "Guinea":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.38
        }, {
          "Factor": "Social support"
          , "Value": 0.83
        }, {
          "Factor": "Healthy life expectancy"
          , "Value": 0.38
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.33
        }, {
          "Factor": "Generosity"
          , "Value": 0.21
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.09
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 2.33
        }]
    ,
    "Haiti":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.32
        }, {
          "Factor": "Social support"
          , "Value": 0.69
        }, {
          "Factor": "Healthy life expectancy"
          , "Value": 0.45
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.03
        }, {
          "Factor": "Generosity"
          , "Value": 0.42
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.11
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 1.58
        }]
    ,
    "Honduras":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.64
        }, {
          "Factor": "Social support"
          , "Value": 1.24
        }, {
          "Factor": "Healthy life expectancy"
          , "Value": 0.83
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.51
        }, {
          "Factor": "Generosity"
          , "Value": 0.25
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.08
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 2.32
        }]
    ,
    "Hong Kong":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.44
        }, {
          "Factor": "Social support"
          , "Value": 1.28
        }, {
          "Factor": "Healthy life expectancy"
          , "Value": 1.12
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.44
        }, {
          "Factor": "Generosity"
          , "Value": 0.26
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.29
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 0.61
        }]
    ,
    "Hungary":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.20
        }, {
          "Factor": "Social support"
          , "Value": 1.41
        }, {
          "Factor": "Healthy life expectancy"
          , "Value": 0.83
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.20
        }, {
          "Factor": "Generosity"
          , "Value": 0.08
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.02
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 2.02
        }]
    ,
    "Iceland":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.38
        }, {
          "Factor": "Social support"
          , "Value": 1.62
        }, {
          "Factor": "Healthy life expectancy"
          , "Value": 1.03
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.59
        }, {
          "Factor": "Generosity"
          , "Value": 0.35
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.12
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 2.40
        }]
    ,
    "India":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.76
        }, {
          "Factor": "Social support"
          , "Value": 0.77
        }, {
          "Factor": "Healthy life expectancy"
          , "Value": 0.59
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.50
        }, {
          "Factor": "Generosity"
          , "Value": 0.20
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.09
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 1.12
        }]
    ,
    "Indonesia":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.93
        }, {
          "Factor": "Social support"
          , "Value": 1.20
        }, {
          "Factor": "Healthy life expectancy"
          , "Value": 0.66
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.49
        }, {
          "Factor": "Generosity"
          , "Value": 0.50
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.03
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 1.38
        }]
    ,
    "Iran":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.10
        }, {
          "Factor": "Social support"
          , "Value": 0.84
        }, {
          "Factor": "Healthy life expectancy"
          , "Value": 0.79
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.30
        }, {
          "Factor": "Generosity"
          , "Value": 0.27
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.13
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 1.12
        }]
    ,
    "Iraq":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.04
        }, {
          "Factor": "Social support"
          , "Value": 0.98
        }, {
          "Factor": "Healthy life expectancy"
          , "Value": 0.57
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.24
        }, {
          "Factor": "Generosity"
          , "Value": 0.15
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.09
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 1.36
        }]
    ,
    "Ireland":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.50
        }, {
          "Factor": "Social support"
          , "Value": 1.55
        }, {
          "Factor": "Healthy life expectancy"
          , "Value": 1.00
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.52
        }, {
          "Factor": "Generosity"
          , "Value": 0.30
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.31
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 1.85
        }]
    ,
    "Israel":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.28
        }, {
          "Factor": "Social support"
          , "Value": 1.46
        }, {
          "Factor": "Healthy life expectancy"
          , "Value": 1.03
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.37
        }, {
          "Factor": "Generosity"
          , "Value": 0.26
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.08
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 2.67
        }]
    ,
    "Italy":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.29
        }, {
          "Factor": "Social support"
          , "Value": 1.49
        }, {
          "Factor": "Healthy life expectancy"
          , "Value": 1.04
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.23
        }, {
          "Factor": "Generosity"
          , "Value": 0.16
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.03
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 1.98
        }]
    ,
    "Ivory Coast":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.57
        }, {
          "Factor": "Social support"
          , "Value": 0.81
        }, {
          "Factor": "Healthy life expectancy"
          , "Value": 0.23
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.35
        }, {
          "Factor": "Generosity"
          , "Value": 0.15
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.09
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 2.74
        }]
    ,
    "Jamaica":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.83
        }, {
          "Factor": "Social support"
          , "Value": 1.48
        }, {
          "Factor": "Healthy life expectancy"
          , "Value": 0.83
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.49
        }, {
          "Factor": "Generosity"
          , "Value": 0.11
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.03
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 2.13
        }]
    ,
    "Japan":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.33
        }, {
          "Factor": "Social support"
          , "Value": 1.42
        }, {
          "Factor": "Healthy life expectancy"
          , "Value": 1.09
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.45
        }, {
          "Factor": "Generosity"
          , "Value": 0.07
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.14
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 1.40
        }]
    ,
    "Jordan":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.84
        }, {
          "Factor": "Social support"
          , "Value": 1.23
        }, {
          "Factor": "Healthy life expectancy"
          , "Value": 0.81
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.38
        }, {
          "Factor": "Generosity"
          , "Value": 0.11
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.13
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 1.41
        }]
    ,
    "Kazakhstan":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.17
        }, {
          "Factor": "Social support"
          , "Value": 1.51
        }, {
          "Factor": "Healthy life expectancy"
          , "Value": 0.73
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.41
        }, {
          "Factor": "Generosity"
          , "Value": 0.15
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.10
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 1.75
        }]
    ,
    "Kenya":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.51
        }, {
          "Factor": "Social support"
          , "Value": 0.98
        }, {
          "Factor": "Healthy life expectancy"
          , "Value": 0.58
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.43
        }, {
          "Factor": "Generosity"
          , "Value": 0.37
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.05
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 1.58
        }]
    ,
    "Kosovo":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.88
        }, {
          "Factor": "Social support"
          , "Value": 1.23
        }, {
          "Factor": "Healthy life expectancy"
          , "Value": 0.76
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.49
        }, {
          "Factor": "Generosity"
          , "Value": 0.26
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.01
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 2.47
        }]
    ,
    "Kuwait":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.50
        }, {
          "Factor": "Social support"
          , "Value": 1.32
        }, {
          "Factor": "Healthy life expectancy"
          , "Value": 0.81
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.49
        }, {
          "Factor": "Generosity"
          , "Value": 0.14
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.10
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 1.66
        }]
    ,
    "Kyrgyzstan":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.55
        }, {
          "Factor": "Social support"
          , "Value": 1.44
        }, {
          "Factor": "Healthy life expectancy"
          , "Value": 0.72
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.51
        }, {
          "Factor": "Generosity"
          , "Value": 0.30
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.02
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 1.72
        }]
    ,
    "Latvia":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.19
        }, {
          "Factor": "Social support"
          , "Value": 1.47
        }, {
          "Factor": "Healthy life expectancy"
          , "Value": 0.81
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.26
        }, {
          "Factor": "Generosity"
          , "Value": 0.07
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.06
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 2.07
        }]
    ,
    "Lebanon":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.99
        }, {
          "Factor": "Social support"
          , "Value": 1.22
        }, {
          "Factor": "Healthy life expectancy"
          , "Value": 0.81
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.22
        }, {
          "Factor": "Generosity"
          , "Value": 0.17
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.03
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 1.76
        }]
    ,
    "Liberia":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.07
        }, {
          "Factor": "Social support"
          , "Value": 0.92
        }, {
          "Factor": "Healthy life expectancy"
          , "Value": 0.44
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.37
        }, {
          "Factor": "Generosity"
          , "Value": 0.23
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.03
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 1.90
        }]
    ,
    "Libya":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.04
        }, {
          "Factor": "Social support"
          , "Value": 1.30
        }, {
          "Factor": "Healthy life expectancy"
          , "Value": 0.67
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.42
        }, {
          "Factor": "Generosity"
          , "Value": 0.13
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.15
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 1.80
        }]
    ,
    "Lithuania":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.24
        }, {
          "Factor": "Social support"
          , "Value": 1.51
        }, {
          "Factor": "Healthy life expectancy"
          , "Value": 0.82
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.29
        }, {
          "Factor": "Generosity"
          , "Value": 0.04
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.04
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 2.20
        }]
    ,
    "Luxembourg":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.61
        }, {
          "Factor": "Social support"
          , "Value": 1.48
        }, {
          "Factor": "Healthy life expectancy"
          , "Value": 1.01
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.53
        }, {
          "Factor": "Generosity"
          , "Value": 0.19
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.32
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 1.95
        }]
    ,
    "Madagascar":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.27
        }, {
          "Factor": "Social support"
          , "Value": 0.92
        }, {
          "Factor": "Healthy life expectancy"
          , "Value": 0.56
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.15
        }, {
          "Factor": "Generosity"
          , "Value": 0.17
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.04
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 1.83
        }]
    ,
    "Malawi":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.19
        }, {
          "Factor": "Social support"
          , "Value": 0.56
        }, {
          "Factor": "Healthy life expectancy"
          , "Value": 0.49
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.44
        }, {
          "Factor": "Generosity"
          , "Value": 0.22
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.09
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 1.41
        }]
    ,
    "Malaysia":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.22
        }, {
          "Factor": "Social support"
          , "Value": 1.17
        }, {
          "Factor": "Healthy life expectancy"
          , "Value": 0.83
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.51
        }, {
          "Factor": "Generosity"
          , "Value": 0.26
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.02
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 1.33
        }]
    ,
    "Mali":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.39
        }, {
          "Factor": "Social support"
          , "Value": 1.10
        }, {
          "Factor": "Healthy life expectancy"
          , "Value": 0.31
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.33
        }, {
          "Factor": "Generosity"
          , "Value": 0.15
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.05
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 2.06
        }]
    ,
    "Malta":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.30
        }, {
          "Factor": "Social support"
          , "Value": 1.52
        }, {
          "Factor": "Healthy life expectancy"
          , "Value": 1.00
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.56
        }, {
          "Factor": "Generosity"
          , "Value": 0.38
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.15
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 1.82
        }]
    ,
    "Mauritania":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.57
        }, {
          "Factor": "Social support"
          , "Value": 1.17
        }, {
          "Factor": "Healthy life expectancy"
          , "Value": 0.49
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.07
        }, {
          "Factor": "Generosity"
          , "Value": 0.11
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.09
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 2.00
        }]
    ,
    "Mauritius":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.12
        }, {
          "Factor": "Social support"
          , "Value": 1.40
        }, {
          "Factor": "Healthy life expectancy"
          , "Value": 0.80
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.50
        }, {
          "Factor": "Generosity"
          , "Value": 0.21
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.06
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 1.79
        }]
    ,
    "Mexico":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.07
        }, {
          "Factor": "Social support"
          , "Value": 1.32
        }, {
          "Factor": "Healthy life expectancy"
          , "Value": 0.86
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.43
        }, {
          "Factor": "Generosity"
          , "Value": 0.07
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.07
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 2.76
        }]
    ,
    "Moldova":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.69
        }, {
          "Factor": "Social support"
          , "Value": 1.33
        }, {
          "Factor": "Healthy life expectancy"
          , "Value": 0.74
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.24
        }, {
          "Factor": "Generosity"
          , "Value": 0.18
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.00
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 2.35
        }]
    ,
    "Mongolia":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.95
        }, {
          "Factor": "Social support"
          , "Value": 1.53
        }, {
          "Factor": "Healthy life expectancy"
          , "Value": 0.67
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.32
        }, {
          "Factor": "Generosity"
          , "Value": 0.23
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.04
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 1.55
        }]
    ,
    "Montenegro":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.05
        }, {
          "Factor": "Social support"
          , "Value": 1.36
        }, {
          "Factor": "Healthy life expectancy"
          , "Value": 0.87
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.20
        }, {
          "Factor": "Generosity"
          , "Value": 0.14
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.08
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 1.82
        }]
    ,
    "Morocco":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.80
        }, {
          "Factor": "Social support"
          , "Value": 0.78
        }, {
          "Factor": "Healthy life expectancy"
          , "Value": 0.78
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.42
        }, {
          "Factor": "Generosity"
          , "Value": 0.04
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.08
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 2.31
        }]
    ,
    "Myanmar":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.71
        }, {
          "Factor": "Social support"
          , "Value": 1.18
        }, {
          "Factor": "Healthy life expectancy"
          , "Value": 0.56
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.53
        }, {
          "Factor": "Generosity"
          , "Value": 0.57
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.17
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 0.65
        }]
    ,
    "Nepal":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.45
        }, {
          "Factor": "Social support"
          , "Value": 1.23
        }, {
          "Factor": "Healthy life expectancy"
          , "Value": 0.68
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.44
        }, {
          "Factor": "Generosity"
          , "Value": 0.28
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.09
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 1.75
        }]
    ,
    "Netherlands":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.40
        }, {
          "Factor": "Social support"
          , "Value": 1.52
        }, {
          "Factor": "Healthy life expectancy"
          , "Value": 1.00
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.56
        }, {
          "Factor": "Generosity"
          , "Value": 0.32
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.30
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 2.39
        }]
    ,
    "New Zealand":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.30
        }, {
          "Factor": "Social support"
          , "Value": 1.56
        }, {
          "Factor": "Healthy life expectancy"
          , "Value": 1.03
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.58
        }, {
          "Factor": "Generosity"
          , "Value": 0.33
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.38
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 2.13
        }]
    ,
    "Nicaragua":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.69
        }, {
          "Factor": "Social support"
          , "Value": 1.32
        }, {
          "Factor": "Healthy life expectancy"
          , "Value": 0.83
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.43
        }, {
          "Factor": "Generosity"
          , "Value": 0.20
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.13
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 2.49
        }]
    ,
    "Niger":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.14
        }, {
          "Factor": "Social support"
          , "Value": 0.77
        }, {
          "Factor": "Healthy life expectancy"
          , "Value": 0.37
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.32
        }, {
          "Factor": "Generosity"
          , "Value": 0.19
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.10
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 2.74
        }]
    ,
    "Nigeria":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.70
        }, {
          "Factor": "Social support"
          , "Value": 1.11
        }, {
          "Factor": "Healthy life expectancy"
          , "Value": 0.24
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.43
        }, {
          "Factor": "Generosity"
          , "Value": 0.21
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.04
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 2.53
        }]
    ,
    "Northern Cyprus":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.26
        }, {
          "Factor": "Social support"
          , "Value": 1.25
        }, {
          "Factor": "Healthy life expectancy"
          , "Value": 1.04
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.42
        }, {
          "Factor": "Generosity"
          , "Value": 0.19
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.16
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 1.39
        }]
    ,
    "Norway":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.49
        }, {
          "Factor": "Social support"
          , "Value": 1.58
        }, {
          "Factor": "Healthy life expectancy"
          , "Value": 1.03
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.60
        }, {
          "Factor": "Generosity"
          , "Value": 0.27
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.34
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 2.24
        }]
    ,
    "Pakistan":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.68
        }, {
          "Factor": "Social support"
          , "Value": 0.89
        }, {
          "Factor": "Healthy life expectancy"
          , "Value": 0.54
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.31
        }, {
          "Factor": "Generosity"
          , "Value": 0.22
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.10
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 2.92
        }]
    ,
    "Palestinian Territories":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.66
        }, {
          "Factor": "Social support"
          , "Value": 1.25
        }, {
          "Factor": "Healthy life expectancy"
          , "Value": 0.67
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.23
        }, {
          "Factor": "Generosity"
          , "Value": 0.10
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.07
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 1.73
        }]
    ,
    "Panama":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.15
        }, {
          "Factor": "Social support"
          , "Value": 1.44
        }, {
          "Factor": "Healthy life expectancy"
          , "Value": 0.91
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.52
        }, {
          "Factor": "Generosity"
          , "Value": 0.11
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.05
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 2.14
        }]
    ,
    "Paraguay":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.85
        }, {
          "Factor": "Social support"
          , "Value": 1.48
        }, {
          "Factor": "Healthy life expectancy"
          , "Value": 0.78
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.51
        }, {
          "Factor": "Generosity"
          , "Value": 0.18
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.08
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 1.86
        }]
    ,
    "Peru":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.96
        }, {
          "Factor": "Social support"
          , "Value": 1.27
        }, {
          "Factor": "Healthy life expectancy"
          , "Value": 0.85
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.46
        }, {
          "Factor": "Generosity"
          , "Value": 0.08
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.03
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 2.04
        }]
    ,
    "Philippines":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.81
        }, {
          "Factor": "Social support"
          , "Value": 1.29
        }, {
          "Factor": "Healthy life expectancy"
          , "Value": 0.66
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.56
        }, {
          "Factor": "Generosity"
          , "Value": 0.12
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.11
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 2.09
        }]
    ,
    "Poland":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.21
        }, {
          "Factor": "Social support"
          , "Value": 1.44
        }, {
          "Factor": "Healthy life expectancy"
          , "Value": 0.88
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.48
        }, {
          "Factor": "Generosity"
          , "Value": 0.12
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.05
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 2.00
        }]
    ,
    "Portugal":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.22
        }, {
          "Factor": "Social support"
          , "Value": 1.43
        }, {
          "Factor": "Healthy life expectancy"
          , "Value": 1.00
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.51
        }, {
          "Factor": "Generosity"
          , "Value": 0.05
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.03
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 1.46
        }]
    ,
    "Qatar":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.68
        }, {
          "Factor": "Social support"
          , "Value": 1.31
        }, {
          "Factor": "Healthy life expectancy"
          , "Value": 0.87
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.56
        }, {
          "Factor": "Generosity"
          , "Value": 0.22
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.17
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 1.56
        }]
    ,
    "Romania":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.16
        }, {
          "Factor": "Social support"
          , "Value": 1.23
        }, {
          "Factor": "Healthy life expectancy"
          , "Value": 0.82
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.46
        }, {
          "Factor": "Generosity"
          , "Value": 0.08
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.01
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 2.30
        }]
    ,
    "Russia":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.18
        }, {
          "Factor": "Social support"
          , "Value": 1.45
        }, {
          "Factor": "Healthy life expectancy"
          , "Value": 0.73
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.33
        }, {
          "Factor": "Generosity"
          , "Value": 0.08
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.03
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 1.84
        }]
    ,
    "Rwanda":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.36
        }, {
          "Factor": "Social support"
          , "Value": 0.71
        }, {
          "Factor": "Healthy life expectancy"
          , "Value": 0.61
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.56
        }, {
          "Factor": "Generosity"
          , "Value": 0.22
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.41
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 0.47
        }]
    ,
    "Saudi Arabia":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.40
        }, {
          "Factor": "Social support"
          , "Value": 1.36
        }, {
          "Factor": "Healthy life expectancy"
          , "Value": 0.80
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.44
        }, {
          "Factor": "Generosity"
          , "Value": 0.08
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.13
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 2.17
        }]
    ,
    "Senegal":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.45
        }, {
          "Factor": "Social support"
          , "Value": 1.13
        }, {
          "Factor": "Healthy life expectancy"
          , "Value": 0.57
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.29
        }, {
          "Factor": "Generosity"
          , "Value": 0.15
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.07
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 2.01
        }]
    ,
    "Serbia":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.00
        }, {
          "Factor": "Social support"
          , "Value": 1.38
        }, {
          "Factor": "Healthy life expectancy"
          , "Value": 0.85
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.28
        }, {
          "Factor": "Generosity"
          , "Value": 0.14
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.04
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 1.90
        }]
    ,
    "Sierra Leone":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.27
        }, {
          "Factor": "Social support"
          , "Value": 0.84
        }, {
          "Factor": "Healthy life expectancy"
          , "Value": 0.24
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.31
        }, {
          "Factor": "Generosity"
          , "Value": 0.25
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.04
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 2.42
        }]
    ,
    "Singapore":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.57
        }, {
          "Factor": "Social support"
          , "Value": 1.46
        }, {
          "Factor": "Healthy life expectancy"
          , "Value": 1.14
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.56
        }, {
          "Factor": "Generosity"
          , "Value": 0.27
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.45
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 0.81
        }]
    ,
    "Slovakia":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.25
        }, {
          "Factor": "Social support"
          , "Value": 1.50
        }, {
          "Factor": "Healthy life expectancy"
          , "Value": 0.88
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.33
        }, {
          "Factor": "Generosity"
          , "Value": 0.12
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.01
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 2.10
        }]
    ,
    "Slovenia":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.26
        }, {
          "Factor": "Social support"
          , "Value": 1.52
        }, {
          "Factor": "Healthy life expectancy"
          , "Value": 0.95
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.56
        }, {
          "Factor": "Generosity"
          , "Value": 0.14
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.06
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 1.62
        }]
    ,
    "Somalia":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.00
        }, {
          "Factor": "Social support"
          , "Value": 0.70
        }, {
          "Factor": "Healthy life expectancy"
          , "Value": 0.27
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.56
        }, {
          "Factor": "Generosity"
          , "Value": 0.24
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.27
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 2.63
        }]
    ,
    "South Africa":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.96
        }, {
          "Factor": "Social support"
          , "Value": 1.35
        }, {
          "Factor": "Healthy life expectancy"
          , "Value": 0.47
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.39
        }, {
          "Factor": "Generosity"
          , "Value": 0.13
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.06
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 1.37
        }]
    ,
    "South Korea":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.30
        }, {
          "Factor": "Social support"
          , "Value": 1.22
        }, {
          "Factor": "Healthy life expectancy"
          , "Value": 1.04
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.16
        }, {
          "Factor": "Generosity"
          , "Value": 0.17
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.06
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 1.95
        }]
    ,
    "Spain":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.29
        }, {
          "Factor": "Social support"
          , "Value": 1.48
        }, {
          "Factor": "Healthy life expectancy"
          , "Value": 1.06
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.36
        }, {
          "Factor": "Generosity"
          , "Value": 0.15
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.08
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 1.93
        }]
    ,
    "Sri Lanka":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.95
        }, {
          "Factor": "Social support"
          , "Value": 1.26
        }, {
          "Factor": "Healthy life expectancy"
          , "Value": 0.83
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.47
        }, {
          "Factor": "Generosity"
          , "Value": 0.24
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.05
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 0.56
        }]
    ,
    "Sweden":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.39
        }, {
          "Factor": "Social support"
          , "Value": 1.49
        }, {
          "Factor": "Healthy life expectancy"
          , "Value": 1.01
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.57
        }, {
          "Factor": "Generosity"
          , "Value": 0.27
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.37
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 2.25
        }]
    ,
    "Switzerland":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.45
        }, {
          "Factor": "Social support"
          , "Value": 1.53
        }, {
          "Factor": "Healthy life expectancy"
          , "Value": 1.05
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.57
        }, {
          "Factor": "Generosity"
          , "Value": 0.26
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.34
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 2.27
        }]
    ,
    "Syria":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.62
        }, {
          "Factor": "Social support"
          , "Value": 0.38
        }, {
          "Factor": "Healthy life expectancy"
          , "Value": 0.44
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.01
        }, {
          "Factor": "Generosity"
          , "Value": 0.33
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.14
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 1.54
        }]
    ,
    "Taiwan":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.37
        }, {
          "Factor": "Social support"
          , "Value": 1.43
        }, {
          "Factor": "Healthy life expectancy"
          , "Value": 0.91
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.35
        }, {
          "Factor": "Generosity"
          , "Value": 0.24
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.10
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 2.04
        }]
    ,
    "Tajikistan":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.49
        }, {
          "Factor": "Social support"
          , "Value": 1.10
        }, {
          "Factor": "Healthy life expectancy"
          , "Value": 0.72
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.39
        }, {
          "Factor": "Generosity"
          , "Value": 0.23
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.14
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 2.40
        }]
    ,
    "Tanzania":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.48
        }, {
          "Factor": "Social support"
          , "Value": 0.89
        }, {
          "Factor": "Healthy life expectancy"
          , "Value": 0.50
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.42
        }, {
          "Factor": "Generosity"
          , "Value": 0.28
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.15
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 0.53
        }]
    ,
    "Thailand":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.05
        }, {
          "Factor": "Social support"
          , "Value": 1.41
        }, {
          "Factor": "Healthy life expectancy"
          , "Value": 0.83
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.56
        }, {
          "Factor": "Generosity"
          , "Value": 0.36
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.03
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 1.78
        }]
    ,
    "Togo":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.28
        }, {
          "Factor": "Social support"
          , "Value": 0.57
        }, {
          "Factor": "Healthy life expectancy"
          , "Value": 0.41
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.29
        }, {
          "Factor": "Generosity"
          , "Value": 0.18
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.09
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 2.27
        }]
    ,
    "Trinidad & Tobago":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.23
        }, {
          "Factor": "Social support"
          , "Value": 1.48
        }, {
          "Factor": "Healthy life expectancy"
          , "Value": 0.71
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.49
        }, {
          "Factor": "Generosity"
          , "Value": 0.18
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.02
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 2.08
        }]
    ,
    "Tunisia":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.92
        }, {
          "Factor": "Social support"
          , "Value": 1.00
        }, {
          "Factor": "Healthy life expectancy"
          , "Value": 0.81
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.17
        }, {
          "Factor": "Generosity"
          , "Value": 0.06
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.06
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 1.44
        }]
    ,
    "Turkey":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.18
        }, {
          "Factor": "Social support"
          , "Value": 1.36
        }, {
          "Factor": "Healthy life expectancy"
          , "Value": 0.81
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.20
        }, {
          "Factor": "Generosity"
          , "Value": 0.08
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.11
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 1.64
        }]
    ,
    "Turkmenistan":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.05
        }, {
          "Factor": "Social support"
          , "Value": 1.54
        }, {
          "Factor": "Healthy life expectancy"
          , "Value": 0.66
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.39
        }, {
          "Factor": "Generosity"
          , "Value": 0.24
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.03
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 1.33
        }]
    ,
    "Uganda":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.33
        }, {
          "Factor": "Social support"
          , "Value": 1.07
        }, {
          "Factor": "Healthy life expectancy"
          , "Value": 0.44
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.36
        }, {
          "Factor": "Generosity"
          , "Value": 0.25
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.06
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 1.68
        }]
    ,
    "Ukraine":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.82
        }, {
          "Factor": "Social support"
          , "Value": 1.39
        }, {
          "Factor": "Healthy life expectancy"
          , "Value": 0.74
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.18
        }, {
          "Factor": "Generosity"
          , "Value": 0.19
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.01
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 1.01
        }]
    ,
    "United Arab Emirates":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.50
        }, {
          "Factor": "Social support"
          , "Value": 1.31
        }, {
          "Factor": "Healthy life expectancy"
          , "Value": 0.82
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.60
        }, {
          "Factor": "Generosity"
          , "Value": 0.26
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.18
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 2.15
        }]
    ,
    "United Kingdom":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.33
        }, {
          "Factor": "Social support"
          , "Value": 1.54
        }, {
          "Factor": "Healthy life expectancy"
          , "Value": 1.00
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.45
        }, {
          "Factor": "Generosity"
          , "Value": 0.35
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.28
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 2.11
        }]
    ,
    "United States":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.43
        }, {
          "Factor": "Social support"
          , "Value": 1.46
        }, {
          "Factor": "Healthy life expectancy"
          , "Value": 0.87
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.45
        }, {
          "Factor": "Generosity"
          , "Value": 0.28
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.13
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 2.27
        }]
    ,
    "Uruguay":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 1.12
        }, {
          "Factor": "Social support"
          , "Value": 1.47
        }, {
          "Factor": "Healthy life expectancy"
          , "Value": 0.89
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.52
        }, {
          "Factor": "Generosity"
          , "Value": 0.13
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.15
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 2.01
        }]
    ,
    "Uzbekistan":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.74
        }, {
          "Factor": "Social support"
          , "Value": 1.53
        }, {
          "Factor": "Healthy life expectancy"
          , "Value": 0.76
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.63
        }, {
          "Factor": "Generosity"
          , "Value": 0.32
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.24
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 1.95
        }]
    ,
    "Venezuela":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.96
        }, {
          "Factor": "Social support"
          , "Value": 1.43
        }, {
          "Factor": "Healthy life expectancy"
          , "Value": 0.81
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.15
        }, {
          "Factor": "Generosity"
          , "Value": 0.06
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.05
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 1.25
        }]
    ,
    "Vietnam":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.74
        }, {
          "Factor": "Social support"
          , "Value": 1.35
        }, {
          "Factor": "Healthy life expectancy"
          , "Value": 0.85
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.54
        }, {
          "Factor": "Generosity"
          , "Value": 0.15
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.07
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 1.47
        }]
    ,
    "Yemen":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.29
        }, {
          "Factor": "Social support"
          , "Value": 1.16
        }, {
          "Factor": "Healthy life expectancy"
          , "Value": 0.46
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.14
        }, {
          "Factor": "Generosity"
          , "Value": 0.11
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.08
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 1.14
        }]
    ,
    "Zambia":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.58
        }, {
          "Factor": "Social support"
          , "Value": 1.06
        }, {
          "Factor": "Healthy life expectancy"
          , "Value": 0.43
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.43
        }, {
          "Factor": "Generosity"
          , "Value": 0.25
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.09
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 1.28
        }]
    ,
    "Zimbabwe":
      [
        {
          "Factor": "GDP per capita"
          , "Value": 0.37
        }, {
          "Factor": "Social support"
          , "Value": 1.11
        }, {
          "Factor": "Healthy life expectancy"
          , "Value": 0.43
        }, {
          "Factor": "Freedom to make life choices"
          , "Value": 0.36
        }, {
          "Factor": "Generosity"
          , "Value": 0.15
        }, {
          "Factor": "Perceptions of corruption"
          , "Value": 0.09
        },
        {
          "Factor": "Dystopia Residual"
          , "Value": 1.15
        }]


  }
  ngOnInit(): void {

    var container = am4core.create("chartdiv3", am4core.Container);
    container.width = am4core.percent(100);
    container.height = am4core.percent(100);
    container.layout = "horizontal";

    this.chart = container.createChild(am4charts.PieChart);
    this.chart.hiddenState.properties.opacity = 0; // this creates initial fade-in

    this.chart.data = this.data2015["Afghanistan"];

    this.chart.innerRadius = am4core.percent(40);
    // chart.depth = 120;

    // this.chart.legend = new am4charts.Legend();
    // this.chart.legend.maxHeight = 150;
    // this.chart.legend.scrollable = true;

    let series = this.chart.series.push(new am4charts.PieSeries());
    series.labels.template.disabled = true;
    series.dataFields.value = "Value";
    series.dataFields.category = "Factor";
    series.slices.template.cornerRadius = 5;
    series.colors.step = 2;

    let label = series.createChild(am4core.Label);
    label.text = "{values.value.sum}";;
    label.horizontalCenter = "middle";
    label.verticalCenter = "middle";
    label.fontSize = 20;

    let year1 = this.chart.titles.create();
    year1.text = "[font-size: 16]2015";
    year1.align = "center";

    this.chart2 = container.createChild(am4charts.PieChart);
    this.chart2.hiddenState.properties.opacity = 0; // this creates initial fade-in

    this.chart2.data = this.data2016["Afghanistan"];

    this.chart2.innerRadius = am4core.percent(40);
    // chart.depth = 120;

    // this.chart2.legend = new am4charts.Legend();
    // this.chart2.legend.maxHeight = 150;
    // this.chart2.legend.scrollable = true;

    let series2 = this.chart2.series.push(new am4charts.PieSeries());
    series2.labels.template.disabled = true;
    series2.dataFields.value = "Value";
    series2.dataFields.category = "Factor";
    series2.slices.template.cornerRadius = 5;
    series2.colors.step = 2;

    let label2 = series2.createChild(am4core.Label);
    label2.text = "{values.value.sum}";;
    label2.horizontalCenter = "middle";
    label2.verticalCenter = "middle";
    label2.fontSize = 20;

    let year2 = this.chart2.titles.create();
    year2.text = "[font-size: 16]2016";
    year2.align = "center";

    this.chart3 = container.createChild(am4charts.PieChart);
    this.chart3.hiddenState.properties.opacity = 0; // this creates initial fade-in

    this.chart3.data = this.data2017["Afghanistan"];

    this.chart3.innerRadius = am4core.percent(40);
    // chart.depth = 120;

    // this.chart3.legend = new am4charts.Legend();
    // this.chart3.legend.maxHeight = 150;
    // this.chart3.legend.scrollable = true;

    let series3 = this.chart3.series.push(new am4charts.PieSeries());
    series3.labels.template.disabled = true;
    series3.dataFields.value = "Value";
    series3.dataFields.category = "Factor";
    series3.slices.template.cornerRadius = 5;
    series3.colors.step = 2;

    let label3 = series3.createChild(am4core.Label);
    label3.text = "{values.value.sum}";;
    label3.horizontalCenter = "middle";
    label3.verticalCenter = "middle";
    label3.fontSize = 20;

    let year3 = this.chart3.titles.create();
    year3.text = "[font-size: 16]2017";
    year3.align = "center";

    this.chart4 = container.createChild(am4charts.PieChart);
    this.chart4.hiddenState.properties.opacity = 0; // this creates initial fade-in

    this.chart4.data = this.data2018["Afghanistan"];
    this.chart4.innerRadius = am4core.percent(40);
    // chart.depth = 120;

    // this.chart4.legend = new am4charts.Legend();
    // this.chart4.legend.maxHeight = 150;
    // this.chart4.legend.scrollable = true;

    let series4 = this.chart4.series.push(new am4charts.PieSeries());
    series4.labels.template.disabled = true;
    series4.dataFields.value = "Value";
    series4.dataFields.category = "Factor";
    series4.slices.template.cornerRadius = 5;
    series4.colors.step = 2;

    let label4 = series4.createChild(am4core.Label);
    label4.text = "{values.value.sum}";;
    label4.horizontalCenter = "middle";
    label4.verticalCenter = "middle";
    label4.fontSize = 20;

    let year4 = this.chart4.titles.create();
    year4.text = "[font-size: 16]2018";
    year4.align = "center";

    this.chart5 = container.createChild(am4charts.PieChart);
    this.chart5.hiddenState.properties.opacity = 0; // this creates initial fade-in

    this.chart5.data = this.data2019["Afghanistan"];

    this.chart5.innerRadius = am4core.percent(40);
    // chart.depth = 120;

    // this.chart5.legend = new am4charts.Legend();
    // this.chart5.legend.maxHeight = 150;
    // this.chart5.legend.scrollable = true;

    let series5 = this.chart5.series.push(new am4charts.PieSeries());
    series5.labels.template.disabled = true;
    series5.dataFields.value = "Value";
    series5.dataFields.category = "Factor";
    series5.slices.template.cornerRadius = 5;
    series5.colors.step = 2;

    let label5 = series5.createChild(am4core.Label);
    label5.text = "{values.value.sum}";;
    label5.horizontalCenter = "middle";
    label5.verticalCenter = "middle";
    label5.fontSize = 20;

    let year5 = this.chart5.titles.create();
    year5.text = "[font-size: 16]2019";
    year5.align = "center";

    let legendContainer = am4core.create("legenddiv", am4core.Container);
    legendContainer.width = am4core.percent(100);
    legendContainer.height = am4core.percent(100);

    this.chart5.legend = new am4charts.Legend();
    this.chart5.legend.parent = legendContainer;
    this.chart5.legend.valueLabels.template.disabled = true;
    this.chart5.legend.labels.template.maxWidth = 50;
    this.chart5.legend.labels.template.truncate = true;

    // for (var i = 0; i < this.chart5.series.length; i++) {
    //   var Series = this.chart5.series.getIndex(i);
    //   Series.events.on("hidden", function (ev) {
    //     var index = this.chart5.series.indexOf(ev.target);
    //     this.chart.series.getIndex(index).hide();
    //     this.chart2.series.getIndex(index).hide();
    //     this.chart3.series.getIndex(index).hide();
    //     this.chart4.series.getIndex(index).hide();
    //   });

    //   Series.events.on("shown", function (ev) {
    //     var index = this.chart5.series.indexOf(ev.target);
    //     this.chart.series.getIndex(index).show();
    //     this.chart2.series.getIndex(index).show();
    //     this.chart3.series.getIndex(index).show();
    //     this.chart4.series.getIndex(index).show();
    //   });
    // }
  }

}
