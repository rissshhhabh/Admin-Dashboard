//Sidebar Toggle

var sidebarOpen=false;
var sidebar=document.getElementById("sidebar");

function openSidebar(){
    if(!sidebarOpen){
        sidebar.classList.add("sidebar-responsive");
        sidebarOpen=true;
    }
}

function closeSidebar() {
    if(sidebarOpen) {
        sidebar.classList.remove("sidebar-responsive");
        sidebarOpen=false;
    }
}

//------CHARTS-----
//BAR CHARTS

var barChartOption = {
    series: [{
    data: [10,8,6,4,2]
  }],
    chart: {
    type: 'bar',
    height: 350,
    toolbar: {
        show:false
    },
  },
  colors:[
    "#246sec",
    "#cc3c43",
    "#367952",
    "#f5b74f",
    "#4f35a1",
  ],
  plotOptions: {
    bar: {
      distributed:true,
      borderRadius: 4,
      horizontal: false,
      columnWidth:'40%',
    }
  },
  dataLabels: {
    enabled: false
  },
  legend:{
    show:false
  },
  xaxis: {
    categories: ["Laptop","Phone","Monitor","Headphone","Camera"],
  },
  yaxis:{
    title:{
        text:"count"
    }
  }
  };

  var barChart = new ApexCharts(document.querySelector("#bar-chart"), barChartOption);
  barChart.render()

  //AREA CHART

  
  var areaChartOptions = {
    series: [{
    name: 'Purchase Orders',
   
    data: [31,40,28,51,42,109,100]
  }, {
    name: 'Sales Orders',
 
    data: [11,32,44,31,33,51,40]
  }],
    chart: {
    height: 350,
    type: 'area',
    toolbar:{
        show:false,
    },
  },
  colors:["#4f35a1","#246dec"],
  dataLables:{
    enabled:false,
  },
  stroke: {
    curve: 'smooth'
  },
  
  labels: ["Jan", "Feb", "Mar","Apr","May","Jun","jul"],
  markers: {
    size: 0
  },
  yaxis: [
    {
      title: {
        text: 'Purchase Orders',
      },
    },
    {
      opposite: true,
      title: {
        text: 'Sales Orders',
      },
    },
  ],
  tooltip:{

  shared:true,
  intersect:false,
  }
  };

  var areaChart = new ApexCharts(document.querySelector("#area-chart"), areaChartOptions);
  areaChart.render();