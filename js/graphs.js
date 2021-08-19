// Set new default font family and font color to mimic Bootstrap's default styling
//Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
//Chart.defaults.global.defaultFontColor = '#292b2c';

var graphsVege=valuesForGraph("vege",data2018);
var graphsAnimals=valuesForGraph("animals",data2018);
var graphsHuman=valuesForGraph("human",data2018);
var ctx1 = document.getElementById("graphVege");//.getContext('2d');
var ctx2 = document.getElementById("graphAnimal");//.getContext('2d');
var ctx3 = document.getElementById("graphHuman");//.getContext('2d');

var graphsVege=valuesForGraph("vege",data2018);
let graphColors1=graphsVege[1];
let graphData1=graphsVege[0];
let graphInfo1=graphsVege[2];

var graphsAnimal=valuesForGraph("animals",data2018);
let graphColors2=graphsAnimal[1];
let graphData2=graphsAnimal[0];
let graphInfo2=graphsAnimal[2];

var graphsHuman=valuesForGraph("human",data2018);
let graphColors3=graphsHuman[1];
let graphData3=graphsHuman[0];
let graphInfo3=graphsHuman[2];


var myChart = new Chart(ctx1, {
	type: 'bar',
	data: {
		labels: graphInfo1,//graphLabels,//["Saraikon laajuus", "Tulvan suuruus", "Saraikko", "Järvikorte", "Järviruoko", "Lähinnä isokokoiset pohjalehtiset"],
		datasets: [{ 
			data: graphData1,//[70,-90,44,-60,83,90],
			backgroundColor : graphColors1,//colorsArr,
			borderColor : graphColors1, 
			borderWidth:2
		}]
	},
	options: {
		indexAxis: 'y',
		scales : {
			xAxes: [{
				ticks: {
					beginAtZero: true,
					maxTicksLimit: 5
				}
			}]
		}
	}
});
var myChart = new Chart(ctx2, {
	type: 'bar',//'horizontalBar',
	data: {
		labels: graphInfo2,//graphLabels,//["Saraikon laajuus", "Tulvan suuruus", "Saraikko", "Järvikorte", "Järviruoko", "Lähinnä isokokoiset pohjalehtiset"],
		datasets: [{ 
			data: graphData2,//[70,-90,44,-60,83,90],
			backgroundColor : graphColors2,//colorsArr,
			borderColor : graphColors2, 
			borderWidth:2
		}]
	},
	options: {
		indexAxis: 'y',
		scales : {
			xAxes: [{
				ticks: {
					beginAtZero: true,
					maxTicksLimit: 5
				}
			}]
		}
	}
});
var myChart = new Chart(ctx3, {
	type: 'bar',//'horizontalBar',
	data: {
		labels: graphInfo3,//graphLabels,//["Saraikon laajuus", "Tulvan suuruus", "Saraikko", "Järvikorte", "Järviruoko", "Lähinnä isokokoiset pohjalehtiset"],
		datasets: [{ 
			data: graphData3,//[70,-90,44,-60,83,90],
			backgroundColor : graphColors3,//colorsArr,
			borderColor : graphColors3, 
			borderWidth:2
		}]
	},
	options: {
		indexAxis: 'y',
		scales : {
			xAxes: [{
				ticks: {
					beginAtZero: true,
					maxTicksLimit: 5
				}
			}]
		}
	}
});
