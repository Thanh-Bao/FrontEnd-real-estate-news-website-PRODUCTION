/* ################################################################################################################################
#                                                                                                                                 #
#   _____ _               _   _                                      _                           ___   ___ ___   ___              #
#  / ____(_)             | | (_)                                    (_)                         |__ \ / _ \__ \ / _ \             #
# | |  __ _  __ _  ___   | |_ _  ___ _ __    _ __   __ _ _   _  ___  _   _ __ ___   __ _ _   _     ) | | | | ) | | | |            #
# | | |_ | |/ _` |/ _ \  | __| |/ _ \ '_ \  | '_ \ / _` | | | |/ _ \| | | '_ ` _ \ / _` | | | |   / /| | | |/ /| | | |            #
# | |__| | | (_| | (_) | | |_| |  __/ |_) | | | | | (_| | |_| | (_) | | | | | | | | (_| | |_| |  / /_| |_| / /_| |_| |            #
#  \_____|_|\__,_|\___/   \__|_|\___| .__/  |_| |_|\__, |\__,_|\___/|_| |_| |_| |_|\__,_|\__, | |____|\___/____|\___/             #
#                                  | |             __/ |                                 __/ |                                    #
#                                  |_|            |___/                                 |___/                                     #
#                                                                                                                                 #
################################################################################################################################## */


//$$$$$$$$$$$$$$$$$$$ for donut chart $$$$$$$$$$$$$$$$$$$$$$$
// Themes begin
am4core.useTheme(am4themes_material);
am4core.useTheme(am4themes_animated);
// Themes end

// Create chart instance
var chart = am4core.create("chartdiv1", am4charts.PieChart);

// Add data
chart.data = [
  {
    "Công Việc": "Lên ý tưởng",
    "lượng thời gian": 61,
  },
  {
    "Công Việc": "Khảo sát các dự án bất động sản thực tế",
    "lượng thời gian": 53,
  },
  {
    "Công Việc": "Thiết kế và phân tích hệ thống",
    "lượng thời gian": 124,
  },
  {
    "Công Việc": "Coding",
    "lượng thời gian": 121,
  },
  {
    "Công Việc": "Test và kiểm thử hệ thống",
    "lượng thời gian": 302,
  },
  {
    "Công Việc": "Debug và fix bug",
    "lượng thời gian": 403,
  },
  {
    "Công Việc": "Thu thập data, viết content",
    "lượng thời gian": 85,
  },
  {
    "Công Việc": "Marketing, tiếp cận người dùng ",
    "lượng thời gian": 55,
  },
];

// Set inner radius
chart.innerRadius = am4core.percent(40);

// Add and configure Series
var pieSeries = chart.series.push(new am4charts.PieSeries());
pieSeries.dataFields.value = "lượng thời gian";
pieSeries.dataFields.category = "Công Việc";
pieSeries.slices.template.stroke = am4core.color("#fff");
pieSeries.slices.template.strokeWidth = 2;
pieSeries.slices.template.strokeOpacity = 1;

// This creates initial animation
pieSeries.hiddenState.properties.opacity = 1;
pieSeries.hiddenState.properties.endAngle = -90;
pieSeries.hiddenState.properties.startAngle = -90;

// $$$$$$$$$$$$$$$ for timeLine Chart $$$$$$$$$$$$$$$$$$$$$$$$$$



// Themes begin
am4core.useTheme(am4themes_animated);
// Themes end

var chart = am4core.create("chartdiv2", am4plugins_timeline.CurveChart);
chart.curveContainer.padding(0, 100, 0, 120);
chart.maskBullets = false;

var colorSet = new am4core.ColorSet();

chart.data = [
  {
    category: "",
    year: "12/06/2020",
    text: "Website ra đời",
  },
  {
    category: "",
    year: "14/06/2020",
    text: "Đội ngũ tăng lên 5 thành viên",
  },
  {
    category: "",
    year: "16/06/2020",
    text: "Thành lập Công ty BĐS Nông Lâm",
  },
  {
    category: "",
    year: "18/06/2020",
    text: "Công bố nền tảng tin tức BĐS",
  },
  {
    category: "",
    year: "20/06/2020",
    text: "Cổ phiểu cty lên sàn chứng khoán",
  },
  {
    category: "",
    year: "22/06/2020",
    text: "Phát hành cổ phiếu lần đầu",
  },
  {
    category: "",
    year: "24/06/2020",
    text: "Trở thành đối tác chiến lược của VinGroup",
  },
  {
    category: "",
    year: "26/06/2020",
    text: "Có 3 triệu lượt truy cập web mỗi ngày",
  },
  {
    category: "",
    year: "28/06/2020",
    text: "vào top 10 StartUp kỳ lân Châu Á",
  },
];

chart.dateFormatter.inputDateFormat = "dd/mm/yyyy";

chart.fontSize = 11;
chart.tooltipContainer.fontSize = 11;

var categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis());
categoryAxis.dataFields.category = "category";
categoryAxis.renderer.grid.template.disabled = true;

var dateAxis = chart.xAxes.push(new am4charts.DateAxis());
dateAxis.renderer.points = [
  { x: -400, y: 0 },
  { x: 0, y: 50 },
  { x: 400, y: 0 },
];
dateAxis.renderer.polyspline.tensionX = 0.8;
dateAxis.renderer.grid.template.disabled = true;
dateAxis.renderer.line.strokeDasharray = "1,4";
dateAxis.baseInterval = { period: "day", count: 1 }; // otherwise initial animation will be not smooth

dateAxis.renderer.labels.template.disabled = true;

var series = chart.series.push(new am4plugins_timeline.CurveLineSeries());
series.strokeOpacity = 0;
series.dataFields.dateX = "year";
series.dataFields.categoryY = "category";
series.dataFields.value = "size";
series.baseAxis = categoryAxis;

var interfaceColors = new am4core.InterfaceColorSet();

series.tooltip.pointerOrientation = "down";

var distance = 100;
var angle = 60;

var bullet = series.bullets.push(new am4charts.Bullet());

var line = bullet.createChild(am4core.Line);
line.adapter.add("stroke", function (fill, target) {
  if (target.dataItem) {
    return chart.colors.getIndex(target.dataItem.index);
  }
});

line.x1 = 0;
line.y1 = 0;
line.y2 = 0;
line.x2 = distance - 10;
line.strokeDasharray = "1,3";

var circle = bullet.createChild(am4core.Circle);
circle.radius = 30;
circle.fillOpacity = 1;
circle.strokeOpacity = 0;

var circleHoverState = circle.states.create("hover");
circleHoverState.properties.scale = 1.3;

series.heatRules.push({ target: circle, min: 20, max: 50, property: "radius" });
circle.adapter.add("fill", function (fill, target) {
  if (target.dataItem) {
    return chart.colors.getIndex(target.dataItem.index);
  }
});
circle.tooltipText = "{text}";
circle.adapter.add("tooltipY", function (tooltipY, target) {
  return -target.pixelRadius - 4;
});

var yearLabel = bullet.createChild(am4core.Label);
yearLabel.text = "{year}";
yearLabel.strokeOpacity = 0;
yearLabel.fill = am4core.color("#fff");
yearLabel.horizontalCenter = "middle";
yearLabel.verticalCenter = "middle";
yearLabel.interactionsEnabled = false;

var label = bullet.createChild(am4core.Label);
label.propertyFields.text = "text";
label.strokeOpacity = 0;
label.horizontalCenter = "right";
label.verticalCenter = "middle";

label.adapter.add("opacity", function (opacity, target) {
  if (target.dataItem) {
    var index = target.dataItem.index;
    var line = target.parent.children.getIndex(0);

    if (index % 2 == 0) {
      target.y = -distance * am4core.math.sin(-angle);
      target.x = -distance * am4core.math.cos(-angle);
      line.rotation = -angle - 180;
      target.rotation = -angle;
    } else {
      target.y = -distance * am4core.math.sin(angle);
      target.x = -distance * am4core.math.cos(angle);
      line.rotation = angle - 180;
      target.rotation = angle;
    }
  }
  return 1;
});

var outerCircle = bullet.createChild(am4core.Circle);
outerCircle.radius = 30;
outerCircle.fillOpacity = 0;
outerCircle.strokeOpacity = 0;
outerCircle.strokeDasharray = "1,3";

var hoverState = outerCircle.states.create("hover");
hoverState.properties.strokeOpacity = 0.8;
hoverState.properties.scale = 1.5;

outerCircle.events.on("over", function (event) {
  var circle = event.target.parent.children.getIndex(1);
  circle.isHover = true;
  event.target.stroke = circle.fill;
  event.target.radius = circle.pixelRadius;
  event.target.animate(
    { property: "rotation", from: 0, to: 360 },
    4000,
    am4core.ease.sinInOut
  );
});

outerCircle.events.on("out", function (event) {
  var circle = event.target.parent.children.getIndex(1);
  circle.isHover = false;
});

chart.scrollbarX = new am4core.Scrollbar();
chart.scrollbarX.opacity = 0.5;
chart.scrollbarX.width = am4core.percent(50);
chart.scrollbarX.align = "center";
