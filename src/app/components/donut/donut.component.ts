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

  countries = ['Afghanistan','India'];
  constructor() { }
  selectedValue = 'Afghanistan';
  onSelectCountry(){
    this.chart.data = this.data[this.selectedValue];
  }
  chart: any;
  data = {
    "Afghanistan":[
       {
          "Factor":"GDP per capita",
          "Value":"0.332"
       },
       {
          "Factor":"Social support",
          "Value":"0.537"
       },
       {
          "Factor":"Healthy life expectancy",
          "Value":"0.255"
       },
       {
          "Factor":"Freedom to make life choices",
          "Value":"0.085"
       },
       {
          "Factor":"Generosity",
          "Value":"0.191"
       },
       {
          "Factor":"Perceptions of corruption",
          "Value":"0.036"
       }
    ],
    "Albania":[
       {
          "Factor":"GDP per capita",
          "Value":"0.916"
       },
       {
          "Factor":"Social support",
          "Value":"0.817"
       },
       {
          "Factor":"Healthy life expectancy",
          "Value":"0.79"
       },
       {
          "Factor":"Freedom to make life choices",
          "Value":"0.419"
       },
       {
          "Factor":"Generosity",
          "Value":"0.149"
       },
       {
          "Factor":"Perceptions of corruption",
          "Value":"0.032"
       }
    ],
    "Algeria":[
       {
          "Factor":"GDP per capita",
          "Value":"0.979"
       },
       {
          "Factor":"Social support",
          "Value":"1.154"
       },
       {
          "Factor":"Healthy life expectancy",
          "Value":"0.687"
       },
       {
          "Factor":"Freedom to make life choices",
          "Value":"0.077"
       },
       {
          "Factor":"Generosity",
          "Value":"0.055"
       },
       {
          "Factor":"Perceptions of corruption",
          "Value":"0.135"
       }
    ],
    "Argentina":[
       {
          "Factor":"GDP per capita",
          "Value":"1.073"
       },
       {
          "Factor":"Social support",
          "Value":"1.468"
       },
       {
          "Factor":"Healthy life expectancy",
          "Value":"0.744"
       },
       {
          "Factor":"Freedom to make life choices",
          "Value":"0.57"
       },
       {
          "Factor":"Generosity",
          "Value":"0.062"
       },
       {
          "Factor":"Perceptions of corruption",
          "Value":"0.054"
       }
    ],
    "Armenia":[
       {
          "Factor":"GDP per capita",
          "Value":"0.816"
       },
       {
          "Factor":"Social support",
          "Value":"0.99"
       },
       {
          "Factor":"Healthy life expectancy",
          "Value":"0.666"
       },
       {
          "Factor":"Freedom to make life choices",
          "Value":"0.26"
       },
       {
          "Factor":"Generosity",
          "Value":"0.077"
       },
       {
          "Factor":"Perceptions of corruption",
          "Value":"0.028"
       }
    ],
    "Australia":[
       {
          "Factor":"GDP per capita",
          "Value":"1.34"
       },
       {
          "Factor":"Social support",
          "Value":"1.573"
       },
       {
          "Factor":"Healthy life expectancy",
          "Value":"0.91"
       },
       {
          "Factor":"Freedom to make life choices",
          "Value":"0.647"
       },
       {
          "Factor":"Generosity",
          "Value":"0.361"
       },
       {
          "Factor":"Perceptions of corruption",
          "Value":"0.302"
       }
    ],
    "Austria":[
       {
          "Factor":"GDP per capita",
          "Value":"1.341"
       },
       {
          "Factor":"Social support",
          "Value":"1.504"
       },
       {
          "Factor":"Healthy life expectancy",
          "Value":"0.891"
       },
       {
          "Factor":"Freedom to make life choices",
          "Value":"0.617"
       },
       {
          "Factor":"Generosity",
          "Value":"0.242"
       },
       {
          "Factor":"Perceptions of corruption",
          "Value":"0.224"
       }
    ],
    "Azerbaijan":[
       {
          "Factor":"GDP per capita",
          "Value":"1.024"
       },
       {
          "Factor":"Social support",
          "Value":"1.161"
       },
       {
          "Factor":"Healthy life expectancy",
          "Value":"0.603"
       },
       {
          "Factor":"Freedom to make life choices",
          "Value":"0.43"
       },
       {
          "Factor":"Generosity",
          "Value":"0.031"
       },
       {
          "Factor":"Perceptions of corruption",
          "Value":"0.176"
       }
    ],
    "Bahrain":[
       {
          "Factor":"GDP per capita",
          "Value":"1.338"
       },
       {
          "Factor":"Social support",
          "Value":"1.366"
       },
       {
          "Factor":"Healthy life expectancy",
          "Value":"0.698"
       },
       {
          "Factor":"Freedom to make life choices",
          "Value":"0.594"
       },
       {
          "Factor":"Generosity",
          "Value":"0.243"
       },
       {
          "Factor":"Perceptions of corruption",
          "Value":"0.123"
       }
    ],
    "Bangladesh":[
       {
          "Factor":"GDP per capita",
          "Value":"0.532"
       },
       {
          "Factor":"Social support",
          "Value":"0.85"
       },
       {
          "Factor":"Healthy life expectancy",
          "Value":"0.579"
       },
       {
          "Factor":"Freedom to make life choices",
          "Value":"0.58"
       },
       {
          "Factor":"Generosity",
          "Value":"0.153"
       },
       {
          "Factor":"Perceptions of corruption",
          "Value":"0.144"
       }
    ],
    "Belarus":[
       {
          "Factor":"GDP per capita",
          "Value":"1.039"
       },
       {
          "Factor":"Social support",
          "Value":"1.498"
       },
       {
          "Factor":"Healthy life expectancy",
          "Value":"0.7"
       },
       {
          "Factor":"Freedom to make life choices",
          "Value":"0.307"
       },
       {
          "Factor":"Generosity",
          "Value":"0.101"
       },
       {
          "Factor":"Perceptions of corruption",
          "Value":"0.154"
       }
    ],
    "Belgium":[
       {
          "Factor":"GDP per capita",
          "Value":"1.324"
       },
       {
          "Factor":"Social support",
          "Value":"1.483"
       },
       {
          "Factor":"Healthy life expectancy",
          "Value":"0.894"
       },
       {
          "Factor":"Freedom to make life choices",
          "Value":"0.583"
       },
       {
          "Factor":"Generosity",
          "Value":"0.188"
       },
       {
          "Factor":"Perceptions of corruption",
          "Value":"0.24"
       }
    ],
    "Benin":[
       {
          "Factor":"GDP per capita",
          "Value":"0.378"
       },
       {
          "Factor":"Social support",
          "Value":"0.372"
       },
       {
          "Factor":"Healthy life expectancy",
          "Value":"0.24"
       },
       {
          "Factor":"Freedom to make life choices",
          "Value":"0.44"
       },
       {
          "Factor":"Generosity",
          "Value":"0.163"
       },
       {
          "Factor":"Perceptions of corruption",
          "Value":"0.067"
       }
    ],
    "Bhutan":[
       {
          "Factor":"GDP per capita",
          "Value":"0.796"
       },
       {
          "Factor":"Social support",
          "Value":"1.335"
       },
       {
          "Factor":"Healthy life expectancy",
          "Value":"0.527"
       },
       {
          "Factor":"Freedom to make life choices",
          "Value":"0.541"
       },
       {
          "Factor":"Generosity",
          "Value":"0.364"
       },
       {
          "Factor":"Perceptions of corruption",
          "Value":"0.171"
       }
    ],
    "Bolivia":[
       {
          "Factor":"GDP per capita",
          "Value":"0.751"
       },
       {
          "Factor":"Social support",
          "Value":"1.223"
       },
       {
          "Factor":"Healthy life expectancy",
          "Value":"0.508"
       },
       {
          "Factor":"Freedom to make life choices",
          "Value":"0.606"
       },
       {
          "Factor":"Generosity",
          "Value":"0.141"
       },
       {
          "Factor":"Perceptions of corruption",
          "Value":"0.054"
       }
    ],
    "Bosnia and Herzegovina":[
       {
          "Factor":"GDP per capita",
          "Value":"0.915"
       },
       {
          "Factor":"Social support",
          "Value":"1.078"
       },
       {
          "Factor":"Healthy life expectancy",
          "Value":"0.758"
       },
       {
          "Factor":"Freedom to make life choices",
          "Value":"0.28"
       },
       {
          "Factor":"Generosity",
          "Value":"0.216"
       },
       {
          "Factor":"Perceptions of corruption",
          "Value":"0"
       }
    ],
    "Botswana":[
       {
          "Factor":"GDP per capita",
          "Value":"1.017"
       },
       {
          "Factor":"Social support",
          "Value":"1.174"
       },
       {
          "Factor":"Healthy life expectancy",
          "Value":"0.417"
       },
       {
          "Factor":"Freedom to make life choices",
          "Value":"0.557"
       },
       {
          "Factor":"Generosity",
          "Value":"0.042"
       },
       {
          "Factor":"Perceptions of corruption",
          "Value":"0.092"
       }
    ],
    "Brazil":[
       {
          "Factor":"GDP per capita",
          "Value":"0.986"
       },
       {
          "Factor":"Social support",
          "Value":"1.474"
       },
       {
          "Factor":"Healthy life expectancy",
          "Value":"0.675"
       },
       {
          "Factor":"Freedom to make life choices",
          "Value":"0.493"
       },
       {
          "Factor":"Generosity",
          "Value":"0.11"
       },
       {
          "Factor":"Perceptions of corruption",
          "Value":"0.088"
       }
    ],
    "Bulgaria":[
       {
          "Factor":"GDP per capita",
          "Value":"1.054"
       },
       {
          "Factor":"Social support",
          "Value":"1.515"
       },
       {
          "Factor":"Healthy life expectancy",
          "Value":"0.712"
       },
       {
          "Factor":"Freedom to make life choices",
          "Value":"0.359"
       },
       {
          "Factor":"Generosity",
          "Value":"0.064"
       },
       {
          "Factor":"Perceptions of corruption",
          "Value":"0.009"
       }
    ],
    "Burkina Faso":[
       {
          "Factor":"GDP per capita",
          "Value":"0.314"
       },
       {
          "Factor":"Social support",
          "Value":"1.097"
       },
       {
          "Factor":"Healthy life expectancy",
          "Value":"0.254"
       },
       {
          "Factor":"Freedom to make life choices",
          "Value":"0.312"
       },
       {
          "Factor":"Generosity",
          "Value":"0.175"
       },
       {
          "Factor":"Perceptions of corruption",
          "Value":"0.128"
       }
    ],
    "Burundi":[
       {
          "Factor":"GDP per capita",
          "Value":"0.091"
       },
       {
          "Factor":"Social support",
          "Value":"0.627"
       },
       {
          "Factor":"Healthy life expectancy",
          "Value":"0.145"
       },
       {
          "Factor":"Freedom to make life choices",
          "Value":"0.065"
       },
       {
          "Factor":"Generosity",
          "Value":"0.149"
       },
       {
          "Factor":"Perceptions of corruption",
          "Value":"0.076"
       }
    ],
    "Cambodia":[
       {
          "Factor":"GDP per capita",
          "Value":"0.549"
       },
       {
          "Factor":"Social support",
          "Value":"1.088"
       },
       {
          "Factor":"Healthy life expectancy",
          "Value":"0.457"
       },
       {
          "Factor":"Freedom to make life choices",
          "Value":"0.696"
       },
       {
          "Factor":"Generosity",
          "Value":"0.256"
       },
       {
          "Factor":"Perceptions of corruption",
          "Value":"0.065"
       }
    ],
    "Cameroon":[
       {
          "Factor":"GDP per capita",
          "Value":"0.535"
       },
       {
          "Factor":"Social support",
          "Value":"0.891"
       },
       {
          "Factor":"Healthy life expectancy",
          "Value":"0.182"
       },
       {
          "Factor":"Freedom to make life choices",
          "Value":"0.454"
       },
       {
          "Factor":"Generosity",
          "Value":"0.183"
       },
       {
          "Factor":"Perceptions of corruption",
          "Value":"0.043"
       }
    ],
    "Canada":[
       {
          "Factor":"GDP per capita",
          "Value":"1.33"
       },
       {
          "Factor":"Social support",
          "Value":"1.532"
       },
       {
          "Factor":"Healthy life expectancy",
          "Value":"0.896"
       },
       {
          "Factor":"Freedom to make life choices",
          "Value":"0.653"
       },
       {
          "Factor":"Generosity",
          "Value":"0.321"
       },
       {
          "Factor":"Perceptions of corruption",
          "Value":"0.291"
       }
    ],
    "Chad":[
       {
          "Factor":"GDP per capita",
          "Value":"0.358"
       },
       {
          "Factor":"Social support",
          "Value":"0.907"
       },
       {
          "Factor":"Healthy life expectancy",
          "Value":"0.053"
       },
       {
          "Factor":"Freedom to make life choices",
          "Value":"0.189"
       },
       {
          "Factor":"Generosity",
          "Value":"0.181"
       },
       {
          "Factor":"Perceptions of corruption",
          "Value":"0.06"
       }
    ],
    "Chile":[
       {
          "Factor":"GDP per capita",
          "Value":"1.131"
       },
       {
          "Factor":"Social support",
          "Value":"1.331"
       },
       {
          "Factor":"Healthy life expectancy",
          "Value":"0.808"
       },
       {
          "Factor":"Freedom to make life choices",
          "Value":"0.431"
       },
       {
          "Factor":"Generosity",
          "Value":"0.197"
       },
       {
          "Factor":"Perceptions of corruption",
          "Value":"0.061"
       }
    ],
    "China":[
       {
          "Factor":"GDP per capita",
          "Value":"0.989"
       },
       {
          "Factor":"Social support",
          "Value":"1.142"
       },
       {
          "Factor":"Healthy life expectancy",
          "Value":"0.799"
       },
       {
          "Factor":"Freedom to make life choices",
          "Value":"0.597"
       },
       {
          "Factor":"Generosity",
          "Value":"0.029"
       },
       {
          "Factor":"Perceptions of corruption",
          "Value":"0.103"
       }
    ],
    "Colombia":[
       {
          "Factor":"GDP per capita",
          "Value":"0.96"
       },
       {
          "Factor":"Social support",
          "Value":"1.439"
       },
       {
          "Factor":"Healthy life expectancy",
          "Value":"0.635"
       },
       {
          "Factor":"Freedom to make life choices",
          "Value":"0.531"
       },
       {
          "Factor":"Generosity",
          "Value":"0.099"
       },
       {
          "Factor":"Perceptions of corruption",
          "Value":"0.039"
       }
    ],
    "Congo (Brazzaville)":[
       {
          "Factor":"GDP per capita",
          "Value":"0.682"
       },
       {
          "Factor":"Social support",
          "Value":"0.811"
       },
       {
          "Factor":"Healthy life expectancy",
          "Value":"0.343"
       },
       {
          "Factor":"Freedom to make life choices",
          "Value":"0.514"
       },
       {
          "Factor":"Generosity",
          "Value":"0.091"
       },
       {
          "Factor":"Perceptions of corruption",
          "Value":"0.077"
       }
    ],
    "Congo (Kinshasa)":[
       {
          "Factor":"GDP per capita",
          "Value":"0.069"
       },
       {
          "Factor":"Social support",
          "Value":"1.136"
       },
       {
          "Factor":"Healthy life expectancy",
          "Value":"0.204"
       },
       {
          "Factor":"Freedom to make life choices",
          "Value":"0.312"
       },
       {
          "Factor":"Generosity",
          "Value":"0.197"
       },
       {
          "Factor":"Perceptions of corruption",
          "Value":"0.052"
       }
    ],
    "Costa Rica":[
       {
          "Factor":"GDP per capita",
          "Value":"1.01"
       },
       {
          "Factor":"Social support",
          "Value":"1.459"
       },
       {
          "Factor":"Healthy life expectancy",
          "Value":"0.817"
       },
       {
          "Factor":"Freedom to make life choices",
          "Value":"0.632"
       },
       {
          "Factor":"Generosity",
          "Value":"0.143"
       },
       {
          "Factor":"Perceptions of corruption",
          "Value":"0.101"
       }
    ],
    "Croatia":[
       {
          "Factor":"GDP per capita",
          "Value":"1.115"
       },
       {
          "Factor":"Social support",
          "Value":"1.161"
       },
       {
          "Factor":"Healthy life expectancy",
          "Value":"0.737"
       },
       {
          "Factor":"Freedom to make life choices",
          "Value":"0.38"
       },
       {
          "Factor":"Generosity",
          "Value":"0.12"
       },
       {
          "Factor":"Perceptions of corruption",
          "Value":"0.039"
       }
    ],
    "Cyprus":[
       {
          "Factor":"GDP per capita",
          "Value":"1.229"
       },
       {
          "Factor":"Social support",
          "Value":"1.191"
       },
       {
          "Factor":"Healthy life expectancy",
          "Value":"0.909"
       },
       {
          "Factor":"Freedom to make life choices",
          "Value":"0.423"
       },
       {
          "Factor":"Generosity",
          "Value":"0.202"
       },
       {
          "Factor":"Perceptions of corruption",
          "Value":"0.035"
       }
    ],
    "Czech Republic":[
       {
          "Factor":"GDP per capita",
          "Value":"1.233"
       },
       {
          "Factor":"Social support",
          "Value":"1.489"
       },
       {
          "Factor":"Healthy life expectancy",
          "Value":"0.854"
       },
       {
          "Factor":"Freedom to make life choices",
          "Value":"0.543"
       },
       {
          "Factor":"Generosity",
          "Value":"0.064"
       },
       {
          "Factor":"Perceptions of corruption",
          "Value":"0.034"
       }
    ],
    "Denmark":[
       {
          "Factor":"GDP per capita",
          "Value":"1.351"
       },
       {
          "Factor":"Social support",
          "Value":"1.59"
       },
       {
          "Factor":"Healthy life expectancy",
          "Value":"0.868"
       },
       {
          "Factor":"Freedom to make life choices",
          "Value":"0.683"
       },
       {
          "Factor":"Generosity",
          "Value":"0.284"
       },
       {
          "Factor":"Perceptions of corruption",
          "Value":"0.408"
       }
    ],
    "Dominican Republic":[
       {
          "Factor":"GDP per capita",
          "Value":"0.982"
       },
       {
          "Factor":"Social support",
          "Value":"1.441"
       },
       {
          "Factor":"Healthy life expectancy",
          "Value":"0.614"
       },
       {
          "Factor":"Freedom to make life choices",
          "Value":"0.578"
       },
       {
          "Factor":"Generosity",
          "Value":"0.12"
       },
       {
          "Factor":"Perceptions of corruption",
          "Value":"0.106"
       }
    ],
    "Ecuador":[
       {
          "Factor":"GDP per capita",
          "Value":"0.889"
       },
       {
          "Factor":"Social support",
          "Value":"1.33"
       },
       {
          "Factor":"Healthy life expectancy",
          "Value":"0.736"
       },
       {
          "Factor":"Freedom to make life choices",
          "Value":"0.556"
       },
       {
          "Factor":"Generosity",
          "Value":"0.114"
       },
       {
          "Factor":"Perceptions of corruption",
          "Value":"0.12"
       }
    ],
    "Egypt":[
       {
          "Factor":"GDP per capita",
          "Value":"0.885"
       },
       {
          "Factor":"Social support",
          "Value":"1.025"
       },
       {
          "Factor":"Healthy life expectancy",
          "Value":"0.553"
       },
       {
          "Factor":"Freedom to make life choices",
          "Value":"0.312"
       },
       {
          "Factor":"Generosity",
          "Value":"0.092"
       },
       {
          "Factor":"Perceptions of corruption",
          "Value":"0.107"
       }
    ],
    "El Salvador":[
       {
          "Factor":"GDP per capita",
          "Value":"0.806"
       },
       {
          "Factor":"Social support",
          "Value":"1.231"
       },
       {
          "Factor":"Healthy life expectancy",
          "Value":"0.639"
       },
       {
          "Factor":"Freedom to make life choices",
          "Value":"0.461"
       },
       {
          "Factor":"Generosity",
          "Value":"0.065"
       },
       {
          "Factor":"Perceptions of corruption",
          "Value":"0.082"
       }
    ],
    "Estonia":[
       {
          "Factor":"GDP per capita",
          "Value":"1.2"
       },
       {
          "Factor":"Social support",
          "Value":"1.532"
       },
       {
          "Factor":"Healthy life expectancy",
          "Value":"0.737"
       },
       {
          "Factor":"Freedom to make life choices",
          "Value":"0.553"
       },
       {
          "Factor":"Generosity",
          "Value":"0.086"
       },
       {
          "Factor":"Perceptions of corruption",
          "Value":"0.174"
       }
    ],
    "Ethiopia":[
       {
          "Factor":"GDP per capita",
          "Value":"0.308"
       },
       {
          "Factor":"Social support",
          "Value":"0.95"
       },
       {
          "Factor":"Healthy life expectancy",
          "Value":"0.391"
       },
       {
          "Factor":"Freedom to make life choices",
          "Value":"0.452"
       },
       {
          "Factor":"Generosity",
          "Value":"0.22"
       },
       {
          "Factor":"Perceptions of corruption",
          "Value":"0.146"
       }
    ],
    "Finland":[
       {
          "Factor":"GDP per capita",
          "Value":"1.305"
       },
       {
          "Factor":"Social support",
          "Value":"1.592"
       },
       {
          "Factor":"Healthy life expectancy",
          "Value":"0.874"
       },
       {
          "Factor":"Freedom to make life choices",
          "Value":"0.681"
       },
       {
          "Factor":"Generosity",
          "Value":"0.202"
       },
       {
          "Factor":"Perceptions of corruption",
          "Value":"0.393"
       }
    ],
    "France":[
       {
          "Factor":"GDP per capita",
          "Value":"1.293"
       },
       {
          "Factor":"Social support",
          "Value":"1.466"
       },
       {
          "Factor":"Healthy life expectancy",
          "Value":"0.908"
       },
       {
          "Factor":"Freedom to make life choices",
          "Value":"0.52"
       },
       {
          "Factor":"Generosity",
          "Value":"0.098"
       },
       {
          "Factor":"Perceptions of corruption",
          "Value":"0.176"
       }
    ],
    "Gabon":[
       {
          "Factor":"GDP per capita",
          "Value":"1.036"
       },
       {
          "Factor":"Social support",
          "Value":"1.164"
       },
       {
          "Factor":"Healthy life expectancy",
          "Value":"0.404"
       },
       {
          "Factor":"Freedom to make life choices",
          "Value":"0.356"
       },
       {
          "Factor":"Generosity",
          "Value":"0.032"
       },
       {
          "Factor":"Perceptions of corruption",
          "Value":"0.052"
       }
    ],
    "Georgia":[
       {
          "Factor":"GDP per capita",
          "Value":"0.853"
       },
       {
          "Factor":"Social support",
          "Value":"0.592"
       },
       {
          "Factor":"Healthy life expectancy",
          "Value":"0.643"
       },
       {
          "Factor":"Freedom to make life choices",
          "Value":"0.375"
       },
       {
          "Factor":"Generosity",
          "Value":"0.038"
       },
       {
          "Factor":"Perceptions of corruption",
          "Value":"0.215"
       }
    ],
    "Germany":[
       {
          "Factor":"GDP per capita",
          "Value":"1.34"
       },
       {
          "Factor":"Social support",
          "Value":"1.474"
       },
       {
          "Factor":"Healthy life expectancy",
          "Value":"0.861"
       },
       {
          "Factor":"Freedom to make life choices",
          "Value":"0.586"
       },
       {
          "Factor":"Generosity",
          "Value":"0.273"
       },
       {
          "Factor":"Perceptions of corruption",
          "Value":"0.28"
       }
    ],
    "Ghana":[
       {
          "Factor":"GDP per capita",
          "Value":"0.592"
       },
       {
          "Factor":"Social support",
          "Value":"0.896"
       },
       {
          "Factor":"Healthy life expectancy",
          "Value":"0.337"
       },
       {
          "Factor":"Freedom to make life choices",
          "Value":"0.499"
       },
       {
          "Factor":"Generosity",
          "Value":"0.212"
       },
       {
          "Factor":"Perceptions of corruption",
          "Value":"0.029"
       }
    ],
    "Greece":[
       {
          "Factor":"GDP per capita",
          "Value":"1.154"
       },
       {
          "Factor":"Social support",
          "Value":"1.202"
       },
       {
          "Factor":"Healthy life expectancy",
          "Value":"0.879"
       },
       {
          "Factor":"Freedom to make life choices",
          "Value":"0.131"
       },
       {
          "Factor":"Generosity",
          "Value":"0"
       },
       {
          "Factor":"Perceptions of corruption",
          "Value":"0.044"
       }
    ],
    "Guatemala":[
       {
          "Factor":"GDP per capita",
          "Value":"0.781"
       },
       {
          "Factor":"Social support",
          "Value":"1.268"
       },
       {
          "Factor":"Healthy life expectancy",
          "Value":"0.608"
       },
       {
          "Factor":"Freedom to make life choices",
          "Value":"0.604"
       },
       {
          "Factor":"Generosity",
          "Value":"0.179"
       },
       {
          "Factor":"Perceptions of corruption",
          "Value":"0.071"
       }
    ],
    "Guinea":[
       {
          "Factor":"GDP per capita",
          "Value":"0.344"
       },
       {
          "Factor":"Social support",
          "Value":"0.792"
       },
       {
          "Factor":"Healthy life expectancy",
          "Value":"0.211"
       },
       {
          "Factor":"Freedom to make life choices",
          "Value":"0.394"
       },
       {
          "Factor":"Generosity",
          "Value":"0.185"
       },
       {
          "Factor":"Perceptions of corruption",
          "Value":"0.094"
       }
    ],
    "Haiti":[
       {
          "Factor":"GDP per capita",
          "Value":"0.315"
       },
       {
          "Factor":"Social support",
          "Value":"0.714"
       },
       {
          "Factor":"Healthy life expectancy",
          "Value":"0.289"
       },
       {
          "Factor":"Freedom to make life choices",
          "Value":"0.025"
       },
       {
          "Factor":"Generosity",
          "Value":"0.392"
       },
       {
          "Factor":"Perceptions of corruption",
          "Value":"0.104"
       }
    ],
    "Honduras":[
       {
          "Factor":"GDP per capita",
          "Value":"0.62"
       },
       {
          "Factor":"Social support",
          "Value":"1.205"
       },
       {
          "Factor":"Healthy life expectancy",
          "Value":"0.622"
       },
       {
          "Factor":"Freedom to make life choices",
          "Value":"0.459"
       },
       {
          "Factor":"Generosity",
          "Value":"0.197"
       },
       {
          "Factor":"Perceptions of corruption",
          "Value":"0.074"
       }
    ],
    "Hong Kong":[
       {
          "Factor":"GDP per capita",
          "Value":"1.405"
       },
       {
          "Factor":"Social support",
          "Value":"1.29"
       },
       {
          "Factor":"Healthy life expectancy",
          "Value":"1.03"
       },
       {
          "Factor":"Freedom to make life choices",
          "Value":"0.524"
       },
       {
          "Factor":"Generosity",
          "Value":"0.246"
       },
       {
          "Factor":"Perceptions of corruption",
          "Value":"0.291"
       }
    ],
    "Hungary":[
       {
          "Factor":"GDP per capita",
          "Value":"1.171"
       },
       {
          "Factor":"Social support",
          "Value":"1.401"
       },
       {
          "Factor":"Healthy life expectancy",
          "Value":"0.732"
       },
       {
          "Factor":"Freedom to make life choices",
          "Value":"0.259"
       },
       {
          "Factor":"Generosity",
          "Value":"0.061"
       },
       {
          "Factor":"Perceptions of corruption",
          "Value":"0.022"
       }
    ],
    "Iceland":[
       {
          "Factor":"GDP per capita",
          "Value":"1.343"
       },
       {
          "Factor":"Social support",
          "Value":"1.644"
       },
       {
          "Factor":"Healthy life expectancy",
          "Value":"0.914"
       },
       {
          "Factor":"Freedom to make life choices",
          "Value":"0.677"
       },
       {
          "Factor":"Generosity",
          "Value":"0.353"
       },
       {
          "Factor":"Perceptions of corruption",
          "Value":"0.138"
       }
    ],
    "India":[
       {
          "Factor":"GDP per capita",
          "Value":"0.721"
       },
       {
          "Factor":"Social support",
          "Value":"0.747"
       },
       {
          "Factor":"Healthy life expectancy",
          "Value":"0.485"
       },
       {
          "Factor":"Freedom to make life choices",
          "Value":"0.539"
       },
       {
          "Factor":"Generosity",
          "Value":"0.172"
       },
       {
          "Factor":"Perceptions of corruption",
          "Value":"0.093"
       }
    ],
    "Indonesia":[
       {
          "Factor":"GDP per capita",
          "Value":"0.899"
       },
       {
          "Factor":"Social support",
          "Value":"1.215"
       },
       {
          "Factor":"Healthy life expectancy",
          "Value":"0.522"
       },
       {
          "Factor":"Freedom to make life choices",
          "Value":"0.538"
       },
       {
          "Factor":"Generosity",
          "Value":"0.484"
       },
       {
          "Factor":"Perceptions of corruption",
          "Value":"0.018"
       }
    ],
    "Iran":[
       {
          "Factor":"GDP per capita",
          "Value":"1.059"
       },
       {
          "Factor":"Social support",
          "Value":"0.771"
       },
       {
          "Factor":"Healthy life expectancy",
          "Value":"0.691"
       },
       {
          "Factor":"Freedom to make life choices",
          "Value":"0.459"
       },
       {
          "Factor":"Generosity",
          "Value":"0.282"
       },
       {
          "Factor":"Perceptions of corruption",
          "Value":"0.129"
       }
    ],
    "Iraq":[
       {
          "Factor":"GDP per capita",
          "Value":"1.01"
       },
       {
          "Factor":"Social support",
          "Value":"0.971"
       },
       {
          "Factor":"Healthy life expectancy",
          "Value":"0.536"
       },
       {
          "Factor":"Freedom to make life choices",
          "Value":"0.304"
       },
       {
          "Factor":"Generosity",
          "Value":"0.148"
       },
       {
          "Factor":"Perceptions of corruption",
          "Value":"0.095"
       }
    ],
    "Ireland":[
       {
          "Factor":"GDP per capita",
          "Value":"1.448"
       },
       {
          "Factor":"Social support",
          "Value":"1.583"
       },
       {
          "Factor":"Healthy life expectancy",
          "Value":"0.876"
       },
       {
          "Factor":"Freedom to make life choices",
          "Value":"0.614"
       },
       {
          "Factor":"Generosity",
          "Value":"0.307"
       },
       {
          "Factor":"Perceptions of corruption",
          "Value":"0.306"
       }
    ],
    "Israel":[
       {
          "Factor":"GDP per capita",
          "Value":"1.301"
       },
       {
          "Factor":"Social support",
          "Value":"1.559"
       },
       {
          "Factor":"Healthy life expectancy",
          "Value":"0.883"
       },
       {
          "Factor":"Freedom to make life choices",
          "Value":"0.533"
       },
       {
          "Factor":"Generosity",
          "Value":"0.354"
       },
       {
          "Factor":"Perceptions of corruption",
          "Value":"0.272"
       }
    ],
    "Italy":[
       {
          "Factor":"GDP per capita",
          "Value":"1.264"
       },
       {
          "Factor":"Social support",
          "Value":"1.501"
       },
       {
          "Factor":"Healthy life expectancy",
          "Value":"0.946"
       },
       {
          "Factor":"Freedom to make life choices",
          "Value":"0.281"
       },
       {
          "Factor":"Generosity",
          "Value":"0.137"
       },
       {
          "Factor":"Perceptions of corruption",
          "Value":"0.028"
       }
    ],
    "Ivory Coast":[
       {
          "Factor":"GDP per capita",
          "Value":"0.541"
       },
       {
          "Factor":"Social support",
          "Value":"0.872"
       },
       {
          "Factor":"Healthy life expectancy",
          "Value":"0.08"
       },
       {
          "Factor":"Freedom to make life choices",
          "Value":"0.467"
       },
       {
          "Factor":"Generosity",
          "Value":"0.146"
       },
       {
          "Factor":"Perceptions of corruption",
          "Value":"0.103"
       }
    ],
    "Jamaica":[
       {
          "Factor":"GDP per capita",
          "Value":"0.819"
       },
       {
          "Factor":"Social support",
          "Value":"1.493"
       },
       {
          "Factor":"Healthy life expectancy",
          "Value":"0.693"
       },
       {
          "Factor":"Freedom to make life choices",
          "Value":"0.575"
       },
       {
          "Factor":"Generosity",
          "Value":"0.096"
       },
       {
          "Factor":"Perceptions of corruption",
          "Value":"0.031"
       }
    ],
    "Japan":[
       {
          "Factor":"GDP per capita",
          "Value":"1.294"
       },
       {
          "Factor":"Social support",
          "Value":"1.462"
       },
       {
          "Factor":"Healthy life expectancy",
          "Value":"0.988"
       },
       {
          "Factor":"Freedom to make life choices",
          "Value":"0.553"
       },
       {
          "Factor":"Generosity",
          "Value":"0.079"
       },
       {
          "Factor":"Perceptions of corruption",
          "Value":"0.15"
       }
    ],
    "Jordan":[
       {
          "Factor":"GDP per capita",
          "Value":"0.822"
       },
       {
          "Factor":"Social support",
          "Value":"1.265"
       },
       {
          "Factor":"Healthy life expectancy",
          "Value":"0.645"
       },
       {
          "Factor":"Freedom to make life choices",
          "Value":"0.468"
       },
       {
          "Factor":"Generosity",
          "Value":"0.13"
       },
       {
          "Factor":"Perceptions of corruption",
          "Value":"0.134"
       }
    ],
    "Kazakhstan":[
       {
          "Factor":"GDP per capita",
          "Value":"1.143"
       },
       {
          "Factor":"Social support",
          "Value":"1.516"
       },
       {
          "Factor":"Healthy life expectancy",
          "Value":"0.631"
       },
       {
          "Factor":"Freedom to make life choices",
          "Value":"0.454"
       },
       {
          "Factor":"Generosity",
          "Value":"0.148"
       },
       {
          "Factor":"Perceptions of corruption",
          "Value":"0.121"
       }
    ],
    "Kenya":[
       {
          "Factor":"GDP per capita",
          "Value":"0.493"
       },
       {
          "Factor":"Social support",
          "Value":"1.048"
       },
       {
          "Factor":"Healthy life expectancy",
          "Value":"0.454"
       },
       {
          "Factor":"Freedom to make life choices",
          "Value":"0.504"
       },
       {
          "Factor":"Generosity",
          "Value":"0.352"
       },
       {
          "Factor":"Perceptions of corruption",
          "Value":"0.055"
       }
    ],
    "Kosovo":[
       {
          "Factor":"GDP per capita",
          "Value":"0.855"
       },
       {
          "Factor":"Social support",
          "Value":"1.23"
       },
       {
          "Factor":"Healthy life expectancy",
          "Value":"0.578"
       },
       {
          "Factor":"Freedom to make life choices",
          "Value":"0.448"
       },
       {
          "Factor":"Generosity",
          "Value":"0.274"
       },
       {
          "Factor":"Perceptions of corruption",
          "Value":"0.023"
       }
    ],
    "Kuwait":[
       {
          "Factor":"GDP per capita",
          "Value":"1.474"
       },
       {
          "Factor":"Social support",
          "Value":"1.301"
       },
       {
          "Factor":"Healthy life expectancy",
          "Value":"0.675"
       },
       {
          "Factor":"Freedom to make life choices",
          "Value":"0.554"
       },
       {
          "Factor":"Generosity",
          "Value":"0.167"
       },
       {
          "Factor":"Perceptions of corruption",
          "Value":"0.106"
       }
    ],
    "Kyrgyzstan":[
       {
          "Factor":"GDP per capita",
          "Value":"0.53"
       },
       {
          "Factor":"Social support",
          "Value":"1.416"
       },
       {
          "Factor":"Healthy life expectancy",
          "Value":"0.594"
       },
       {
          "Factor":"Freedom to make life choices",
          "Value":"0.54"
       },
       {
          "Factor":"Generosity",
          "Value":"0.281"
       },
       {
          "Factor":"Perceptions of corruption",
          "Value":"0.035"
       }
    ],
    "Latvia":[
       {
          "Factor":"GDP per capita",
          "Value":"1.148"
       },
       {
          "Factor":"Social support",
          "Value":"1.454"
       },
       {
          "Factor":"Healthy life expectancy",
          "Value":"0.671"
       },
       {
          "Factor":"Freedom to make life choices",
          "Value":"0.363"
       },
       {
          "Factor":"Generosity",
          "Value":"0.092"
       },
       {
          "Factor":"Perceptions of corruption",
          "Value":"0.066"
       }
    ],
    "Lebanon":[
       {
          "Factor":"GDP per capita",
          "Value":"0.965"
       },
       {
          "Factor":"Social support",
          "Value":"1.179"
       },
       {
          "Factor":"Healthy life expectancy",
          "Value":"0.785"
       },
       {
          "Factor":"Freedom to make life choices",
          "Value":"0.503"
       },
       {
          "Factor":"Generosity",
          "Value":"0.214"
       },
       {
          "Factor":"Perceptions of corruption",
          "Value":"0.136"
       }
    ],
    "Liberia":[
       {
          "Factor":"GDP per capita",
          "Value":"0.076"
       },
       {
          "Factor":"Social support",
          "Value":"0.858"
       },
       {
          "Factor":"Healthy life expectancy",
          "Value":"0.267"
       },
       {
          "Factor":"Freedom to make life choices",
          "Value":"0.419"
       },
       {
          "Factor":"Generosity",
          "Value":"0.206"
       },
       {
          "Factor":"Perceptions of corruption",
          "Value":"0.03"
       }
    ],
    "Libya":[
       {
          "Factor":"GDP per capita",
          "Value":"0.985"
       },
       {
          "Factor":"Social support",
          "Value":"1.35"
       },
       {
          "Factor":"Healthy life expectancy",
          "Value":"0.553"
       },
       {
          "Factor":"Freedom to make life choices",
          "Value":"0.496"
       },
       {
          "Factor":"Generosity",
          "Value":"0.116"
       },
       {
          "Factor":"Perceptions of corruption",
          "Value":"0.148"
       }
    ],
    "Lithuania":[
       {
          "Factor":"GDP per capita",
          "Value":"1.197"
       },
       {
          "Factor":"Social support",
          "Value":"1.527"
       },
       {
          "Factor":"Healthy life expectancy",
          "Value":"0.716"
       },
       {
          "Factor":"Freedom to make life choices",
          "Value":"0.35"
       },
       {
          "Factor":"Generosity",
          "Value":"0.026"
       },
       {
          "Factor":"Perceptions of corruption",
          "Value":"0.006"
       }
    ],
    "Luxembourg":[
       {
          "Factor":"GDP per capita",
          "Value":"1.576"
       },
       {
          "Factor":"Social support",
          "Value":"1.52"
       },
       {
          "Factor":"Healthy life expectancy",
          "Value":"0.896"
       },
       {
          "Factor":"Freedom to make life choices",
          "Value":"0.632"
       },
       {
          "Factor":"Generosity",
          "Value":"0.196"
       },
       {
          "Factor":"Perceptions of corruption",
          "Value":"0.321"
       }
    ],
    "Madagascar":[
       {
          "Factor":"GDP per capita",
          "Value":"0.262"
       },
       {
          "Factor":"Social support",
          "Value":"0.908"
       },
       {
          "Factor":"Healthy life expectancy",
          "Value":"0.402"
       },
       {
          "Factor":"Freedom to make life choices",
          "Value":"0.221"
       },
       {
          "Factor":"Generosity",
          "Value":"0.155"
       },
       {
          "Factor":"Perceptions of corruption",
          "Value":"0.049"
       }
    ],
    "Malawi":[
       {
          "Factor":"GDP per capita",
          "Value":"0.186"
       },
       {
          "Factor":"Social support",
          "Value":"0.541"
       },
       {
          "Factor":"Healthy life expectancy",
          "Value":"0.306"
       },
       {
          "Factor":"Freedom to make life choices",
          "Value":"0.531"
       },
       {
          "Factor":"Generosity",
          "Value":"0.21"
       },
       {
          "Factor":"Perceptions of corruption",
          "Value":"0.08"
       }
    ],
    "Malaysia":[
       {
          "Factor":"GDP per capita",
          "Value":"1.161"
       },
       {
          "Factor":"Social support",
          "Value":"1.258"
       },
       {
          "Factor":"Healthy life expectancy",
          "Value":"0.669"
       },
       {
          "Factor":"Freedom to make life choices",
          "Value":"0.356"
       },
       {
          "Factor":"Generosity",
          "Value":"0.311"
       },
       {
          "Factor":"Perceptions of corruption",
          "Value":"0.059"
       }
    ],
    "Mali":[
       {
          "Factor":"GDP per capita",
          "Value":"0.37"
       },
       {
          "Factor":"Social support",
          "Value":"1.233"
       },
       {
          "Factor":"Healthy life expectancy",
          "Value":"0.152"
       },
       {
          "Factor":"Freedom to make life choices",
          "Value":"0.367"
       },
       {
          "Factor":"Generosity",
          "Value":"0.139"
       },
       {
          "Factor":"Perceptions of corruption",
          "Value":"0.056"
       }
    ],
    "Malta":[
       {
          "Factor":"GDP per capita",
          "Value":"1.27"
       },
       {
          "Factor":"Social support",
          "Value":"1.525"
       },
       {
          "Factor":"Healthy life expectancy",
          "Value":"0.884"
       },
       {
          "Factor":"Freedom to make life choices",
          "Value":"0.645"
       },
       {
          "Factor":"Generosity",
          "Value":"0.376"
       },
       {
          "Factor":"Perceptions of corruption",
          "Value":"0.142"
       }
    ],
    "Mauritania":[
       {
          "Factor":"GDP per capita",
          "Value":"0.557"
       },
       {
          "Factor":"Social support",
          "Value":"1.245"
       },
       {
          "Factor":"Healthy life expectancy",
          "Value":"0.292"
       },
       {
          "Factor":"Freedom to make life choices",
          "Value":"0.129"
       },
       {
          "Factor":"Generosity",
          "Value":"0.134"
       },
       {
          "Factor":"Perceptions of corruption",
          "Value":"0.093"
       }
    ],
    "Mauritius":[
       {
          "Factor":"GDP per capita",
          "Value":"1.09"
       },
       {
          "Factor":"Social support",
          "Value":"1.387"
       },
       {
          "Factor":"Healthy life expectancy",
          "Value":"0.684"
       },
       {
          "Factor":"Freedom to make life choices",
          "Value":"0.584"
       },
       {
          "Factor":"Generosity",
          "Value":"0.245"
       },
       {
          "Factor":"Perceptions of corruption",
          "Value":"0.05"
       }
    ],
    "Mexico":[
       {
          "Factor":"GDP per capita",
          "Value":"1.038"
       },
       {
          "Factor":"Social support",
          "Value":"1.252"
       },
       {
          "Factor":"Healthy life expectancy",
          "Value":"0.761"
       },
       {
          "Factor":"Freedom to make life choices",
          "Value":"0.479"
       },
       {
          "Factor":"Generosity",
          "Value":"0.069"
       },
       {
          "Factor":"Perceptions of corruption",
          "Value":"0.095"
       }
    ],
    "Moldova":[
       {
          "Factor":"GDP per capita",
          "Value":"0.657"
       },
       {
          "Factor":"Social support",
          "Value":"1.301"
       },
       {
          "Factor":"Healthy life expectancy",
          "Value":"0.62"
       },
       {
          "Factor":"Freedom to make life choices",
          "Value":"0.232"
       },
       {
          "Factor":"Generosity",
          "Value":"0.171"
       },
       {
          "Factor":"Perceptions of corruption",
          "Value":"0"
       }
    ],
    "Mongolia":[
       {
          "Factor":"GDP per capita",
          "Value":"0.914"
       },
       {
          "Factor":"Social support",
          "Value":"1.517"
       },
       {
          "Factor":"Healthy life expectancy",
          "Value":"0.575"
       },
       {
          "Factor":"Freedom to make life choices",
          "Value":"0.395"
       },
       {
          "Factor":"Generosity",
          "Value":"0.253"
       },
       {
          "Factor":"Perceptions of corruption",
          "Value":"0.032"
       }
    ],
    "Montenegro":[
       {
          "Factor":"GDP per capita",
          "Value":"1.017"
       },
       {
          "Factor":"Social support",
          "Value":"1.279"
       },
       {
          "Factor":"Healthy life expectancy",
          "Value":"0.729"
       },
       {
          "Factor":"Freedom to make life choices",
          "Value":"0.259"
       },
       {
          "Factor":"Generosity",
          "Value":"0.111"
       },
       {
          "Factor":"Perceptions of corruption",
          "Value":"0.081"
       }
    ],
    "Morocco":[
       {
          "Factor":"GDP per capita",
          "Value":"0.779"
       },
       {
          "Factor":"Social support",
          "Value":"0.797"
       },
       {
          "Factor":"Healthy life expectancy",
          "Value":"0.669"
       },
       {
          "Factor":"Freedom to make life choices",
          "Value":"0.46"
       },
       {
          "Factor":"Generosity",
          "Value":"0.026"
       },
       {
          "Factor":"Perceptions of corruption",
          "Value":"0.074"
       }
    ],
    "Myanmar":[
       {
          "Factor":"GDP per capita",
          "Value":"0.682"
       },
       {
          "Factor":"Social support",
          "Value":"1.174"
       },
       {
          "Factor":"Healthy life expectancy",
          "Value":"0.429"
       },
       {
          "Factor":"Freedom to make life choices",
          "Value":"0.58"
       },
       {
          "Factor":"Generosity",
          "Value":"0.598"
       },
       {
          "Factor":"Perceptions of corruption",
          "Value":"0.178"
       }
    ],
    "Nepal":[
       {
          "Factor":"GDP per capita",
          "Value":"0.425"
       },
       {
          "Factor":"Social support",
          "Value":"1.228"
       },
       {
          "Factor":"Healthy life expectancy",
          "Value":"0.539"
       },
       {
          "Factor":"Freedom to make life choices",
          "Value":"0.526"
       },
       {
          "Factor":"Generosity",
          "Value":"0.302"
       },
       {
          "Factor":"Perceptions of corruption",
          "Value":"0.078"
       }
    ],
    "Netherlands":[
       {
          "Factor":"GDP per capita",
          "Value":"1.361"
       },
       {
          "Factor":"Social support",
          "Value":"1.488"
       },
       {
          "Factor":"Healthy life expectancy",
          "Value":"0.878"
       },
       {
          "Factor":"Freedom to make life choices",
          "Value":"0.638"
       },
       {
          "Factor":"Generosity",
          "Value":"0.333"
       },
       {
          "Factor":"Perceptions of corruption",
          "Value":"0.295"
       }
    ],
    "New Zealand":[
       {
          "Factor":"GDP per capita",
          "Value":"1.268"
       },
       {
          "Factor":"Social support",
          "Value":"1.601"
       },
       {
          "Factor":"Healthy life expectancy",
          "Value":"0.876"
       },
       {
          "Factor":"Freedom to make life choices",
          "Value":"0.669"
       },
       {
          "Factor":"Generosity",
          "Value":"0.365"
       },
       {
          "Factor":"Perceptions of corruption",
          "Value":"0.389"
       }
    ],
    "Nicaragua":[
       {
          "Factor":"GDP per capita",
          "Value":"0.668"
       },
       {
          "Factor":"Social support",
          "Value":"1.319"
       },
       {
          "Factor":"Healthy life expectancy",
          "Value":"0.7"
       },
       {
          "Factor":"Freedom to make life choices",
          "Value":"0.527"
       },
       {
          "Factor":"Generosity",
          "Value":"0.208"
       },
       {
          "Factor":"Perceptions of corruption",
          "Value":"0.128"
       }
    ],
    "Niger":[
       {
          "Factor":"GDP per capita",
          "Value":"0.131"
       },
       {
          "Factor":"Social support",
          "Value":"0.867"
       },
       {
          "Factor":"Healthy life expectancy",
          "Value":"0.221"
       },
       {
          "Factor":"Freedom to make life choices",
          "Value":"0.39"
       },
       {
          "Factor":"Generosity",
          "Value":"0.175"
       },
       {
          "Factor":"Perceptions of corruption",
          "Value":"0.099"
       }
    ],
    "Nigeria":[
       {
          "Factor":"GDP per capita",
          "Value":"0.689"
       },
       {
          "Factor":"Social support",
          "Value":"1.172"
       },
       {
          "Factor":"Healthy life expectancy",
          "Value":"0.048"
       },
       {
          "Factor":"Freedom to make life choices",
          "Value":"0.462"
       },
       {
          "Factor":"Generosity",
          "Value":"0.201"
       },
       {
          "Factor":"Perceptions of corruption",
          "Value":"0.032"
       }
    ],
    "Northern Cyprus":[
       {
          "Factor":"GDP per capita",
          "Value":"1.229"
       },
       {
          "Factor":"Social support",
          "Value":"1.211"
       },
       {
          "Factor":"Healthy life expectancy",
          "Value":"0.909"
       },
       {
          "Factor":"Freedom to make life choices",
          "Value":"0.495"
       },
       {
          "Factor":"Generosity",
          "Value":"0.179"
       },
       {
          "Factor":"Perceptions of corruption",
          "Value":"0.154"
       }
    ],
    "Norway":[
       {
          "Factor":"GDP per capita",
          "Value":"1.456"
       },
       {
          "Factor":"Social support",
          "Value":"1.582"
       },
       {
          "Factor":"Healthy life expectancy",
          "Value":"0.861"
       },
       {
          "Factor":"Freedom to make life choices",
          "Value":"0.686"
       },
       {
          "Factor":"Generosity",
          "Value":"0.286"
       },
       {
          "Factor":"Perceptions of corruption",
          "Value":"0.34"
       }
    ],
    "Pakistan":[
       {
          "Factor":"GDP per capita",
          "Value":"0.652"
       },
       {
          "Factor":"Social support",
          "Value":"0.81"
       },
       {
          "Factor":"Healthy life expectancy",
          "Value":"0.424"
       },
       {
          "Factor":"Freedom to make life choices",
          "Value":"0.334"
       },
       {
          "Factor":"Generosity",
          "Value":"0.216"
       },
       {
          "Factor":"Perceptions of corruption",
          "Value":"0.113"
       }
    ],
    "Palestinian Territories":[
       {
          "Factor":"GDP per capita",
          "Value":"0.642"
       },
       {
          "Factor":"Social support",
          "Value":"1.217"
       },
       {
          "Factor":"Healthy life expectancy",
          "Value":"0.602"
       },
       {
          "Factor":"Freedom to make life choices",
          "Value":"0.266"
       },
       {
          "Factor":"Generosity",
          "Value":"0.086"
       },
       {
          "Factor":"Perceptions of corruption",
          "Value":"0.076"
       }
    ],
    "Panama":[
       {
          "Factor":"GDP per capita",
          "Value":"1.112"
       },
       {
          "Factor":"Social support",
          "Value":"1.438"
       },
       {
          "Factor":"Healthy life expectancy",
          "Value":"0.759"
       },
       {
          "Factor":"Freedom to make life choices",
          "Value":"0.597"
       },
       {
          "Factor":"Generosity",
          "Value":"0.125"
       },
       {
          "Factor":"Perceptions of corruption",
          "Value":"0.063"
       }
    ],
    "Paraguay":[
       {
          "Factor":"GDP per capita",
          "Value":"0.835"
       },
       {
          "Factor":"Social support",
          "Value":"1.522"
       },
       {
          "Factor":"Healthy life expectancy",
          "Value":"0.615"
       },
       {
          "Factor":"Freedom to make life choices",
          "Value":"0.541"
       },
       {
          "Factor":"Generosity",
          "Value":"0.162"
       },
       {
          "Factor":"Perceptions of corruption",
          "Value":"0.074"
       }
    ],
    "Peru":[
       {
          "Factor":"GDP per capita",
          "Value":"0.934"
       },
       {
          "Factor":"Social support",
          "Value":"1.249"
       },
       {
          "Factor":"Healthy life expectancy",
          "Value":"0.674"
       },
       {
          "Factor":"Freedom to make life choices",
          "Value":"0.53"
       },
       {
          "Factor":"Generosity",
          "Value":"0.092"
       },
       {
          "Factor":"Perceptions of corruption",
          "Value":"0.034"
       }
    ],
    "Philippines":[
       {
          "Factor":"GDP per capita",
          "Value":"0.775"
       },
       {
          "Factor":"Social support",
          "Value":"1.312"
       },
       {
          "Factor":"Healthy life expectancy",
          "Value":"0.513"
       },
       {
          "Factor":"Freedom to make life choices",
          "Value":"0.643"
       },
       {
          "Factor":"Generosity",
          "Value":"0.12"
       },
       {
          "Factor":"Perceptions of corruption",
          "Value":"0.105"
       }
    ],
    "Poland":[
       {
          "Factor":"GDP per capita",
          "Value":"1.176"
       },
       {
          "Factor":"Social support",
          "Value":"1.448"
       },
       {
          "Factor":"Healthy life expectancy",
          "Value":"0.781"
       },
       {
          "Factor":"Freedom to make life choices",
          "Value":"0.546"
       },
       {
          "Factor":"Generosity",
          "Value":"0.108"
       },
       {
          "Factor":"Perceptions of corruption",
          "Value":"0.064"
       }
    ],
    "Portugal":[
       {
          "Factor":"GDP per capita",
          "Value":"1.188"
       },
       {
          "Factor":"Social support",
          "Value":"1.429"
       },
       {
          "Factor":"Healthy life expectancy",
          "Value":"0.884"
       },
       {
          "Factor":"Freedom to make life choices",
          "Value":"0.562"
       },
       {
          "Factor":"Generosity",
          "Value":"0.055"
       },
       {
          "Factor":"Perceptions of corruption",
          "Value":"0.017"
       }
    ],
    "Qatar":[
       {
          "Factor":"GDP per capita",
          "Value":"1.649"
       },
       {
          "Factor":"Social support",
          "Value":"1.303"
       },
       {
          "Factor":"Healthy life expectancy",
          "Value":"0.748"
       },
       {
          "Factor":"Freedom to make life choices",
          "Value":"0.654"
       },
       {
          "Factor":"Generosity",
          "Value":"0.256"
       },
       {
          "Factor":"Perceptions of corruption",
          "Value":"0.171"
       }
    ],
    "Romania":[
       {
          "Factor":"GDP per capita",
          "Value":"1.116"
       },
       {
          "Factor":"Social support",
          "Value":"1.219"
       },
       {
          "Factor":"Healthy life expectancy",
          "Value":"0.726"
       },
       {
          "Factor":"Freedom to make life choices",
          "Value":"0.528"
       },
       {
          "Factor":"Generosity",
          "Value":"0.088"
       },
       {
          "Factor":"Perceptions of corruption",
          "Value":"0.001"
       }
    ],
    "Russia":[
       {
          "Factor":"GDP per capita",
          "Value":"1.151"
       },
       {
          "Factor":"Social support",
          "Value":"1.479"
       },
       {
          "Factor":"Healthy life expectancy",
          "Value":"0.599"
       },
       {
          "Factor":"Freedom to make life choices",
          "Value":"0.399"
       },
       {
          "Factor":"Generosity",
          "Value":"0.065"
       },
       {
          "Factor":"Perceptions of corruption",
          "Value":"0.025"
       }
    ],
    "Rwanda":[
       {
          "Factor":"GDP per capita",
          "Value":"0.332"
       },
       {
          "Factor":"Social support",
          "Value":"0.896"
       },
       {
          "Factor":"Healthy life expectancy",
          "Value":"0.4"
       },
       {
          "Factor":"Freedom to make life choices",
          "Value":"0.636"
       },
       {
          "Factor":"Generosity",
          "Value":"0.2"
       },
       {
          "Factor":"Perceptions of corruption",
          "Value":"0.444"
       }
    ],
    "Saudi Arabia":[
       {
          "Factor":"GDP per capita",
          "Value":"1.379"
       },
       {
          "Factor":"Social support",
          "Value":"1.331"
       },
       {
          "Factor":"Healthy life expectancy",
          "Value":"0.633"
       },
       {
          "Factor":"Freedom to make life choices",
          "Value":"0.509"
       },
       {
          "Factor":"Generosity",
          "Value":"0.098"
       },
       {
          "Factor":"Perceptions of corruption",
          "Value":"0.127"
       }
    ],
    "Senegal":[
       {
          "Factor":"GDP per capita",
          "Value":"0.429"
       },
       {
          "Factor":"Social support",
          "Value":"1.117"
       },
       {
          "Factor":"Healthy life expectancy",
          "Value":"0.433"
       },
       {
          "Factor":"Freedom to make life choices",
          "Value":"0.406"
       },
       {
          "Factor":"Generosity",
          "Value":"0.138"
       },
       {
          "Factor":"Perceptions of corruption",
          "Value":"0.082"
       }
    ],
    "Serbia":[
       {
          "Factor":"GDP per capita",
          "Value":"0.975"
       },
       {
          "Factor":"Social support",
          "Value":"1.369"
       },
       {
          "Factor":"Healthy life expectancy",
          "Value":"0.685"
       },
       {
          "Factor":"Freedom to make life choices",
          "Value":"0.288"
       },
       {
          "Factor":"Generosity",
          "Value":"0.134"
       },
       {
          "Factor":"Perceptions of corruption",
          "Value":"0.043"
       }
    ],
    "Sierra Leone":[
       {
          "Factor":"GDP per capita",
          "Value":"0.256"
       },
       {
          "Factor":"Social support",
          "Value":"0.813"
       },
       {
          "Factor":"Healthy life expectancy",
          "Value":"0"
       },
       {
          "Factor":"Freedom to make life choices",
          "Value":"0.355"
       },
       {
          "Factor":"Generosity",
          "Value":"0.238"
       },
       {
          "Factor":"Perceptions of corruption",
          "Value":"0.053"
       }
    ],
    "Singapore":[
       {
          "Factor":"GDP per capita",
          "Value":"1.529"
       },
       {
          "Factor":"Social support",
          "Value":"1.451"
       },
       {
          "Factor":"Healthy life expectancy",
          "Value":"1.008"
       },
       {
          "Factor":"Freedom to make life choices",
          "Value":"0.631"
       },
       {
          "Factor":"Generosity",
          "Value":"0.261"
       },
       {
          "Factor":"Perceptions of corruption",
          "Value":"0.457"
       }
    ],
    "Slovakia":[
       {
          "Factor":"GDP per capita",
          "Value":"1.21"
       },
       {
          "Factor":"Social support",
          "Value":"1.537"
       },
       {
          "Factor":"Healthy life expectancy",
          "Value":"0.776"
       },
       {
          "Factor":"Freedom to make life choices",
          "Value":"0.354"
       },
       {
          "Factor":"Generosity",
          "Value":"0.118"
       },
       {
          "Factor":"Perceptions of corruption",
          "Value":"0.014"
       }
    ],
    "Slovenia":[
       {
          "Factor":"GDP per capita",
          "Value":"1.219"
       },
       {
          "Factor":"Social support",
          "Value":"1.506"
       },
       {
          "Factor":"Healthy life expectancy",
          "Value":"0.856"
       },
       {
          "Factor":"Freedom to make life choices",
          "Value":"0.633"
       },
       {
          "Factor":"Generosity",
          "Value":"0.16"
       },
       {
          "Factor":"Perceptions of corruption",
          "Value":"0.051"
       }
    ],
    "Somalia":[
       {
          "Factor":"GDP per capita",
          "Value":"0"
       },
       {
          "Factor":"Social support",
          "Value":"0.712"
       },
       {
          "Factor":"Healthy life expectancy",
          "Value":"0.115"
       },
       {
          "Factor":"Freedom to make life choices",
          "Value":"0.674"
       },
       {
          "Factor":"Generosity",
          "Value":"0.238"
       },
       {
          "Factor":"Perceptions of corruption",
          "Value":"0.282"
       }
    ],
    "South Africa":[
       {
          "Factor":"GDP per capita",
          "Value":"0.94"
       },
       {
          "Factor":"Social support",
          "Value":"1.41"
       },
       {
          "Factor":"Healthy life expectancy",
          "Value":"0.33"
       },
       {
          "Factor":"Freedom to make life choices",
          "Value":"0.516"
       },
       {
          "Factor":"Generosity",
          "Value":"0.103"
       },
       {
          "Factor":"Perceptions of corruption",
          "Value":"0.056"
       }
    ],
    "South Korea":[
       {
          "Factor":"GDP per capita",
          "Value":"1.266"
       },
       {
          "Factor":"Social support",
          "Value":"1.204"
       },
       {
          "Factor":"Healthy life expectancy",
          "Value":"0.955"
       },
       {
          "Factor":"Freedom to make life choices",
          "Value":"0.244"
       },
       {
          "Factor":"Generosity",
          "Value":"0.175"
       },
       {
          "Factor":"Perceptions of corruption",
          "Value":"0.051"
       }
    ],
    "Spain":[
       {
          "Factor":"GDP per capita",
          "Value":"1.251"
       },
       {
          "Factor":"Social support",
          "Value":"1.538"
       },
       {
          "Factor":"Healthy life expectancy",
          "Value":"0.965"
       },
       {
          "Factor":"Freedom to make life choices",
          "Value":"0.449"
       },
       {
          "Factor":"Generosity",
          "Value":"0.142"
       },
       {
          "Factor":"Perceptions of corruption",
          "Value":"0.074"
       }
    ],
    "Sri Lanka":[
       {
          "Factor":"GDP per capita",
          "Value":"0.918"
       },
       {
          "Factor":"Social support",
          "Value":"1.314"
       },
       {
          "Factor":"Healthy life expectancy",
          "Value":"0.672"
       },
       {
          "Factor":"Freedom to make life choices",
          "Value":"0.585"
       },
       {
          "Factor":"Generosity",
          "Value":"0.307"
       },
       {
          "Factor":"Perceptions of corruption",
          "Value":"0.05"
       }
    ],
    "Sweden":[
       {
          "Factor":"GDP per capita",
          "Value":"1.355"
       },
       {
          "Factor":"Social support",
          "Value":"1.501"
       },
       {
          "Factor":"Healthy life expectancy",
          "Value":"0.913"
       },
       {
          "Factor":"Freedom to make life choices",
          "Value":"0.659"
       },
       {
          "Factor":"Generosity",
          "Value":"0.285"
       },
       {
          "Factor":"Perceptions of corruption",
          "Value":"0.383"
       }
    ],
    "Switzerland":[
       {
          "Factor":"GDP per capita",
          "Value":"1.42"
       },
       {
          "Factor":"Social support",
          "Value":"1.549"
       },
       {
          "Factor":"Healthy life expectancy",
          "Value":"0.927"
       },
       {
          "Factor":"Freedom to make life choices",
          "Value":"0.66"
       },
       {
          "Factor":"Generosity",
          "Value":"0.256"
       },
       {
          "Factor":"Perceptions of corruption",
          "Value":"0.357"
       }
    ],
    "Syria":[
       {
          "Factor":"GDP per capita",
          "Value":"0.689"
       },
       {
          "Factor":"Social support",
          "Value":"0.382"
       },
       {
          "Factor":"Healthy life expectancy",
          "Value":"0.539"
       },
       {
          "Factor":"Freedom to make life choices",
          "Value":"0.088"
       },
       {
          "Factor":"Generosity",
          "Value":"0.376"
       },
       {
          "Factor":"Perceptions of corruption",
          "Value":"0.144"
       }
    ],
    "Taiwan":[
       {
          "Factor":"GDP per capita",
          "Value":"1.365"
       },
       {
          "Factor":"Social support",
          "Value":"1.436"
       },
       {
          "Factor":"Healthy life expectancy",
          "Value":"0.857"
       },
       {
          "Factor":"Freedom to make life choices",
          "Value":"0.418"
       },
       {
          "Factor":"Generosity",
          "Value":"0.151"
       },
       {
          "Factor":"Perceptions of corruption",
          "Value":"0.078"
       }
    ],
    "Tajikistan":[
       {
          "Factor":"GDP per capita",
          "Value":"0.474"
       },
       {
          "Factor":"Social support",
          "Value":"1.166"
       },
       {
          "Factor":"Healthy life expectancy",
          "Value":"0.598"
       },
       {
          "Factor":"Freedom to make life choices",
          "Value":"0.292"
       },
       {
          "Factor":"Generosity",
          "Value":"0.187"
       },
       {
          "Factor":"Perceptions of corruption",
          "Value":"0.034"
       }
    ],
    "Tanzania":[
       {
          "Factor":"GDP per capita",
          "Value":"0.455"
       },
       {
          "Factor":"Social support",
          "Value":"0.991"
       },
       {
          "Factor":"Healthy life expectancy",
          "Value":"0.381"
       },
       {
          "Factor":"Freedom to make life choices",
          "Value":"0.481"
       },
       {
          "Factor":"Generosity",
          "Value":"0.27"
       },
       {
          "Factor":"Perceptions of corruption",
          "Value":"0.097"
       }
    ],
    "Thailand":[
       {
          "Factor":"GDP per capita",
          "Value":"1.016"
       },
       {
          "Factor":"Social support",
          "Value":"1.417"
       },
       {
          "Factor":"Healthy life expectancy",
          "Value":"0.707"
       },
       {
          "Factor":"Freedom to make life choices",
          "Value":"0.637"
       },
       {
          "Factor":"Generosity",
          "Value":"0.364"
       },
       {
          "Factor":"Perceptions of corruption",
          "Value":"0.029"
       }
    ],
    "Togo":[
       {
          "Factor":"GDP per capita",
          "Value":"0.259"
       },
       {
          "Factor":"Social support",
          "Value":"0.474"
       },
       {
          "Factor":"Healthy life expectancy",
          "Value":"0.253"
       },
       {
          "Factor":"Freedom to make life choices",
          "Value":"0.434"
       },
       {
          "Factor":"Generosity",
          "Value":"0.158"
       },
       {
          "Factor":"Perceptions of corruption",
          "Value":"0.101"
       }
    ],
    "Trinidad & Tobago":[
       {
          "Factor":"GDP per capita",
          "Value":"1.223"
       },
       {
          "Factor":"Social support",
          "Value":"1.492"
       },
       {
          "Factor":"Healthy life expectancy",
          "Value":"0.564"
       },
       {
          "Factor":"Freedom to make life choices",
          "Value":"0.575"
       },
       {
          "Factor":"Generosity",
          "Value":"0.171"
       },
       {
          "Factor":"Perceptions of corruption",
          "Value":"0.019"
       }
    ],
    "Tunisia":[
       {
          "Factor":"GDP per capita",
          "Value":"0.9"
       },
       {
          "Factor":"Social support",
          "Value":"0.906"
       },
       {
          "Factor":"Healthy life expectancy",
          "Value":"0.69"
       },
       {
          "Factor":"Freedom to make life choices",
          "Value":"0.271"
       },
       {
          "Factor":"Generosity",
          "Value":"0.04"
       },
       {
          "Factor":"Perceptions of corruption",
          "Value":"0.063"
       }
    ],
    "Turkey":[
       {
          "Factor":"GDP per capita",
          "Value":"1.148"
       },
       {
          "Factor":"Social support",
          "Value":"1.38"
       },
       {
          "Factor":"Healthy life expectancy",
          "Value":"0.686"
       },
       {
          "Factor":"Freedom to make life choices",
          "Value":"0.324"
       },
       {
          "Factor":"Generosity",
          "Value":"0.106"
       },
       {
          "Factor":"Perceptions of corruption",
          "Value":"0.109"
       }
    ],
    "Turkmenistan":[
       {
          "Factor":"GDP per capita",
          "Value":"1.016"
       },
       {
          "Factor":"Social support",
          "Value":"1.533"
       },
       {
          "Factor":"Healthy life expectancy",
          "Value":"0.517"
       },
       {
          "Factor":"Freedom to make life choices",
          "Value":"0.417"
       },
       {
          "Factor":"Generosity",
          "Value":"0.199"
       },
       {
          "Factor":"Perceptions of corruption",
          "Value":"0.037"
       }
    ],
    "Uganda":[
       {
          "Factor":"GDP per capita",
          "Value":"0.322"
       },
       {
          "Factor":"Social support",
          "Value":"1.09"
       },
       {
          "Factor":"Healthy life expectancy",
          "Value":"0.237"
       },
       {
          "Factor":"Freedom to make life choices",
          "Value":"0.45"
       },
       {
          "Factor":"Generosity",
          "Value":"0.259"
       },
       {
          "Factor":"Perceptions of corruption",
          "Value":"0.061"
       }
    ],
    "Ukraine":[
       {
          "Factor":"GDP per capita",
          "Value":"0.793"
       },
       {
          "Factor":"Social support",
          "Value":"1.413"
       },
       {
          "Factor":"Healthy life expectancy",
          "Value":"0.609"
       },
       {
          "Factor":"Freedom to make life choices",
          "Value":"0.163"
       },
       {
          "Factor":"Generosity",
          "Value":"0.187"
       },
       {
          "Factor":"Perceptions of corruption",
          "Value":"0.011"
       }
    ],
    "United Arab Emirates":[
       {
          "Factor":"GDP per capita",
          "Value":"2.096"
       },
       {
          "Factor":"Social support",
          "Value":"0.776"
       },
       {
          "Factor":"Healthy life expectancy",
          "Value":"0.67"
       },
       {
          "Factor":"Freedom to make life choices",
          "Value":"0.284"
       },
       {
          "Factor":"Generosity",
          "Value":"0.186"
       },
       {
          "Factor":"Perceptions of corruption",
          "Value":"N/A"
       }
    ],
    "United Kingdom":[
       {
          "Factor":"GDP per capita",
          "Value":"1.244"
       },
       {
          "Factor":"Social support",
          "Value":"1.433"
       },
       {
          "Factor":"Healthy life expectancy",
          "Value":"0.888"
       },
       {
          "Factor":"Freedom to make life choices",
          "Value":"0.464"
       },
       {
          "Factor":"Generosity",
          "Value":"0.262"
       },
       {
          "Factor":"Perceptions of corruption",
          "Value":"0.082"
       }
    ],
    "United States":[
       {
          "Factor":"GDP per capita",
          "Value":"1.398"
       },
       {
          "Factor":"Social support",
          "Value":"1.471"
       },
       {
          "Factor":"Healthy life expectancy",
          "Value":"0.819"
       },
       {
          "Factor":"Freedom to make life choices",
          "Value":"0.547"
       },
       {
          "Factor":"Generosity",
          "Value":"0.291"
       },
       {
          "Factor":"Perceptions of corruption",
          "Value":"0.133"
       }
    ],
    "Uruguay":[
       {
          "Factor":"GDP per capita",
          "Value":"1.093"
       },
       {
          "Factor":"Social support",
          "Value":"1.459"
       },
       {
          "Factor":"Healthy life expectancy",
          "Value":"0.771"
       },
       {
          "Factor":"Freedom to make life choices",
          "Value":"0.625"
       },
       {
          "Factor":"Generosity",
          "Value":"0.13"
       },
       {
          "Factor":"Perceptions of corruption",
          "Value":"0.155"
       }
    ],
    "Uzbekistan":[
       {
          "Factor":"GDP per capita",
          "Value":"0.719"
       },
       {
          "Factor":"Social support",
          "Value":"1.584"
       },
       {
          "Factor":"Healthy life expectancy",
          "Value":"0.605"
       },
       {
          "Factor":"Freedom to make life choices",
          "Value":"0.724"
       },
       {
          "Factor":"Generosity",
          "Value":"0.328"
       },
       {
          "Factor":"Perceptions of corruption",
          "Value":"0.259"
       }
    ],
    "Venezuela":[
       {
          "Factor":"GDP per capita",
          "Value":"0.996"
       },
       {
          "Factor":"Social support",
          "Value":"1.469"
       },
       {
          "Factor":"Healthy life expectancy",
          "Value":"0.657"
       },
       {
          "Factor":"Freedom to make life choices",
          "Value":"0.133"
       },
       {
          "Factor":"Generosity",
          "Value":"0.056"
       },
       {
          "Factor":"Perceptions of corruption",
          "Value":"0.052"
       }
    ],
    "Vietnam":[
       {
          "Factor":"GDP per capita",
          "Value":"0.715"
       },
       {
          "Factor":"Social support",
          "Value":"1.365"
       },
       {
          "Factor":"Healthy life expectancy",
          "Value":"0.702"
       },
       {
          "Factor":"Freedom to make life choices",
          "Value":"0.618"
       },
       {
          "Factor":"Generosity",
          "Value":"0.177"
       },
       {
          "Factor":"Perceptions of corruption",
          "Value":"0.079"
       }
    ],
    "Yemen":[
       {
          "Factor":"GDP per capita",
          "Value":"0.442"
       },
       {
          "Factor":"Social support",
          "Value":"1.073"
       },
       {
          "Factor":"Healthy life expectancy",
          "Value":"0.343"
       },
       {
          "Factor":"Freedom to make life choices",
          "Value":"0.244"
       },
       {
          "Factor":"Generosity",
          "Value":"0.083"
       },
       {
          "Factor":"Perceptions of corruption",
          "Value":"0.064"
       }
    ],
    "Zambia":[
       {
          "Factor":"GDP per capita",
          "Value":"0.562"
       },
       {
          "Factor":"Social support",
          "Value":"1.047"
       },
       {
          "Factor":"Healthy life expectancy",
          "Value":"0.295"
       },
       {
          "Factor":"Freedom to make life choices",
          "Value":"0.503"
       },
       {
          "Factor":"Generosity",
          "Value":"0.221"
       },
       {
          "Factor":"Perceptions of corruption",
          "Value":"0.082"
       }
    ],
    "Zimbabwe":[
       {
          "Factor":"GDP per capita",
          "Value":"0.357"
       },
       {
          "Factor":"Social support",
          "Value":"1.094"
       },
       {
          "Factor":"Healthy life expectancy",
          "Value":"0.248"
       },
       {
          "Factor":"Freedom to make life choices",
          "Value":"0.406"
       },
       {
          "Factor":"Generosity",
          "Value":"0.132"
       },
       {
          "Factor":"Perceptions of corruption",
          "Value":"0.099"
       }
    ]
 };
  ngOnInit(): void {
    this.chart = am4core.create("chartdiv3", am4charts.PieChart3D);
    this.chart.hiddenState.properties.opacity = 0; // this creates initial fade-in
    
    this.chart.data = this.data["Afghanistan"];
    console.log(this.chart.data);
    // chart.data = [
    //     {
    //       "Factor": "GDP per capita",
    //       "Value": 0.35
    //     },
    //     {
    //       "Factor": "Social support",
    //       "Value": 0.517
    //     },
    //     {
    //       "Factor": "Healthy life expectancy",
    //       "Value": 0.361
    //     },
    //     {
    //       "Factor": "Freedom to make life choices",
    //       "Value": 0
    //     },
    //     {
    //       "Factor": "Generosity",
    //       "Value": 0.158
    //     },
    //     {
    //       "Factor": "Perceptions of corruption",
    //       "Value": 0.025
    //     }
    // ];
    
    this.chart.innerRadius = am4core.percent(40);
    // chart.depth = 120;
    
    this.chart.legend = new am4charts.Legend();
    
    let series = this.chart.series.push(new am4charts.PieSeries3D());
    series.dataFields.value = "Value";
    // series.dataFields.depthValue = "litres";
    series.dataFields.category = "Factor";
    series.slices.template.cornerRadius = 5;
    series.colors.step = 3;
  }    

}
