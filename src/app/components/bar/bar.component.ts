import { Component, OnInit } from '@angular/core';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

am4core.useTheme(am4themes_animated);
@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.css']
})
export class BarComponent implements OnInit {

  i = 0;
  constructor() { }

  
  
  Data = [
    [
    {
      "id": "CH",
      "Country": "Switzerland",
      "Happiness Rank": 1,
      "Happiness Score": 7.587
    },
    {
      "id": "IS",
      "Country": "Iceland",
      "Happiness Rank": 2,
      "Happiness Score": 7.561
    },
    {
      "id": "DK",
      "Country": "Denmark",
      "Happiness Rank": 3,
      "Happiness Score": 7.527
    },
    {
      "id": "NO",
      "Country": "Norway",
      "Happiness Rank": 4,
      "Happiness Score": 7.522
    },
    {
      "id": "CA",
      "Country": "Canada",
      "Happiness Rank": 5,
      "Happiness Score": 7.427
    },
    {
      "id": "FI",
      "Country": "Finland",
      "Happiness Rank": 6,
      "Happiness Score": 7.406
    },
    {
      "id": "NL",
      "Country": "Netherlands",
      "Happiness Rank": 7,
      "Happiness Score": 7.378
    },
    {
      "id": "SE",
      "Country": "Sweden",
      "Happiness Rank": 8,
      "Happiness Score": 7.364
    },
    {
      "id": "NZ",
      "Country": "New Zealand",
      "Happiness Rank": 9,
      "Happiness Score": 7.286
    },
    {
      "id": "AU",
      "Country": "Australia",
      "Happiness Rank": 10,
      "Happiness Score": 7.284
    }],
    [
    {
      "id": "DK",
      "Country": "Denmark",
      "Happiness Rank": 1,
      "Happiness Score": 7.526
    },
    {
      "id": "CH",
      "Country": "Switzerland",
      "Happiness Rank": 2,
      "Happiness Score": 7.509
    },
    {
      "id": "IS",
      "Country": "Iceland",
      "Happiness Rank": 3,
      "Happiness Score": 7.501
    },
    {
      "id": "NO",
      "Country": "Norway",
      "Happiness Rank": 4,
      "Happiness Score": 7.498
    },
    {
      "id": "FI",
      "Country": "Finland",
      "Happiness Rank": 5,
      "Happiness Score": 7.413
    },
    {
      "id": "CA",
      "Country": "Canada",
      "Happiness Rank": 6,
      "Happiness Score": 7.404
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
      "id": "AU",
      "Country": "Australia",
      "Happiness Rank": 9,
      "Happiness Score": 7.313
    },
    {
      "id": "SE",
      "Country": "Sweden",
      "Happiness Rank": 10,
      "Happiness Score": 7.291
    }],
    [
    {
       "id":"NO","Country":"Norway","Happiness Rank":1,"Happiness Score":7.537000179  },
    {
       "id":"DK","Country":"Denmark","Happiness Rank":2,"Happiness Score":7.521999836  },
    {
       "id":"IS","Country":"Iceland","Happiness Rank":3,"Happiness Score":7.504000187  },
    {
       "id":"CH","Country":"Switzerland","Happiness Rank":4,"Happiness Score":7.493999958  },
    {
       "id":"FI","Country":"Finland","Happiness Rank":5,"Happiness Score":7.468999863  },
    {
       "id":"NL","Country":"Netherlands","Happiness Rank":6,"Happiness Score":7.376999855  },
    {
       "id":"CA","Country":"Canada","Happiness Rank":7,"Happiness Score":7.315999985  },
    {
       "id":"NZ","Country":"New Zealand","Happiness Rank":8,"Happiness Score":7.31400013  },
    {
       "id":"SE","Country":"Sweden","Happiness Rank":9,"Happiness Score":7.28399992  },
    {
       "id":"AU","Country":"Australia","Happiness Rank":10,"Happiness Score":7.28399992  }
    ],
    [
    {
       "id":"FI","Country":"Finland","Happiness Rank":1,"Happiness Score":7.632  },
    {
       "id":"NO","Country":"Norway","Happiness Rank":2,"Happiness Score":7.594  },
    {
       "id":"DK","Country":"Denmark","Happiness Rank":3,"Happiness Score":7.555  },
    {
       "id":"IS","Country":"Iceland","Happiness Rank":4,"Happiness Score":7.495  },
    {
       "id":"CH","Country":"Switzerland","Happiness Rank":5,"Happiness Score":7.487  },
    {
       "id":"NL","Country":"Netherlands","Happiness Rank":6,"Happiness Score":7.441  },
    {
       "id":"CA","Country":"Canada","Happiness Rank":7,"Happiness Score":7.328  },
    {
       "id":"NZ","Country":"New Zealand","Happiness Rank":8,"Happiness Score":7.324  },
    {
       "id":"SE","Country":"Sweden","Happiness Rank":9,"Happiness Score":7.314  },
    {
       "id":"AU","Country":"Australia","Happiness Rank":10,"Happiness Score":7.272  }
    ],
    [
    {
       "id":"FI","Country":"Finland","Happiness Rank":1,"Happiness Score":7.769  },
    {
       "id":"DK","Country":"Denmark","Happiness Rank":2,"Happiness Score":7.6  },
    {
       "id":"NO","Country":"Norway","Happiness Rank":3,"Happiness Score":7.554  },
    {
       "id":"IS","Country":"Iceland","Happiness Rank":4,"Happiness Score":7.494  },
    {
       "id":"NL","Country":"Netherlands","Happiness Rank":5,"Happiness Score":7.488  },
    {
       "id":"CH","Country":"Switzerland","Happiness Rank":6,"Happiness Score":7.48  },
    {
       "id":"SE","Country":"Sweden","Happiness Rank":7,"Happiness Score":7.343  },
    {
       "id":"NZ","Country":"New Zealand","Happiness Rank":8,"Happiness Score":7.307  },
    {
       "id":"CA","Country":"Canada","Happiness Rank":9,"Happiness Score":7.278  },
    {
       "id":"AT","Country":"Austria","Happiness Rank":10,"Happiness Score":7.246  }
    ]];
  
    ngOnInit(): void {
    this.loadchart();
  }
  icon = "pause";
  changeIcon(){
    if(this.icon == "pause")
      this.icon = "play_arrow";
    else
      this.icon = "pause";
  }
  loadchart(){
// Create chart instance
let chart = am4core.create("chartdiv2", am4charts.XYChart3D);
let title = chart.titles.create();
title.text = "[bold font-size: 16]Happiness Score of top 10 ranked countries in " + "2019";
title.textAlign = "middle";
// Add data
chart.data = this.Data[4];

// Create axes
let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
categoryAxis.dataFields.category = "Country";
categoryAxis.renderer.labels.template.rotation = 300;
categoryAxis.renderer.labels.template.hideOversized = false;
categoryAxis.renderer.minGridDistance = 20;
categoryAxis.renderer.labels.template.horizontalCenter = "right";
categoryAxis.renderer.labels.template.verticalCenter = "middle";
categoryAxis.tooltip.label.rotation = 270;
categoryAxis.tooltip.label.horizontalCenter = "right";
categoryAxis.tooltip.label.verticalCenter = "middle";
categoryAxis.title.text = "Country";
categoryAxis.title.fontWeight = "bold";

let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
valueAxis.title.text = "Happiness Score";
valueAxis.title.fontWeight = "bold";

// Create series
let series = chart.series.push(new am4charts.ColumnSeries3D());
series.dataFields.valueY = "Happiness Score";
series.dataFields.categoryX = "Country";
series.name = "Score";
series.tooltipText = "{categoryX}: [bold]{valueY}[/]";
series.columns.template.fillOpacity = .8;

let columnTemplate = series.columns.template;
columnTemplate.strokeWidth = 2;
columnTemplate.strokeOpacity = 1;
columnTemplate.stroke = am4core.color("#FFFFFF");

columnTemplate.adapter.add("fill", function(fill, target) {
  return chart.colors.getIndex(target.dataItem.index);
})

columnTemplate.adapter.add("stroke", function(stroke, target) {
  return chart.colors.getIndex(target.dataItem.index);
})

chart.cursor = new am4charts.XYCursor();
chart.cursor.lineX.strokeOpacity = 0;
chart.cursor.lineY.strokeOpacity = 0;

setInterval(() =>{
  if(this.icon=="pause")
        this.i++;
    if(this.i==5)
      this.i=0;
    chart.data = this.Data[this.i];
    title.text = "[bold font-size: 16]Happiness Score of top 10 ranked countries in " + (2015+this.i).toString();
    chart.invalidateRawData();
}, 3000);
  }
}
