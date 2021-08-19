var gaugeLimits={'M1' : [0.400 ,0.200  ,0.100  ,0.000 ],
            'M2' : [-0.500, -0.310, -0.110,   0.000],
            'M5' : [0.400 , 0.300 ,0.200 ,0.100],
            'M6' :[1.000 , 0.700 ,  0.400 ,  0.200],
            'M7' : [1.000 ,0.700 ,0.400 , 0.200 ],
            'M8' : [20.000, 39.000 , 65.000 , 90.000],
            'M9' : [20.000, 39.000 , 65.000 , 90.000],
            'M11' : [0.050 , 0.090 ,  0.190 ,  0.400],
            'M13' : [5.000 ,  10.000 , 30.000 , 50.000],
            'M14' : [0.200 ,  0.490 ,  0.990 ,  1.500],
            'M17' : [0.300 , 0.200 ,  0.100 , 0.000 ],
            'M19' : [0.200 ,  0.290 ,  0.390 ,  0.600],
            'M22' : [0.300 , 0.600 ,  1.200 , 2.400],
            'M23' : [0.300 , 0.100 ,  0.010 , -0.200],
            'M24' : [80.000, 50.000,  30.000, 10.000]
};

var scaledLimits=[0.0,0.333,0.6666,1.0];//[-1.5,-0.5,0.5,1.5];

var gaugeInfo={'M1' : 'Saraikon laajuus',
	'M2' : 'Tulvan suuruus',
	'M5' : 'Saraikko',
	'M6' : 'Järvikorte',
	'M7' : 'Järviruoko',
	'M8' : 'Lähinnä isokokoiset pohjalehtiset',
	'M11' : 'Kuikka, harmaalokki',	
	'M13' : 'Kalaston pohjaeläinravinnon määrä',
	'M14' : 'Järvikutuisten mädin säilyminen',
	'M17' : 'Hauen lisääntymisen onnistuminen',
	'M19' : 'Vesistön virkistyskäyttö ja rantojen käyttö, maisema',
	'M22' : 'Talvikalastus, talous- ja saunavedenotto järvestä, liikkuminen jäällä',
	'M24' : 'Rantojen ja laiturien käyttö, veneily, vesimaisema',
	'M23' : 'Rantojen eroosio, rantavyörymät, kunnostustarve'
};

var colors={
	'Erinomainen' : '#c6fa96',
	'Hyva' : '#ebfcdc',
	'Tyydyttava' : '#fffd91',
	'Valttava' : '#ffe6e0',
	'Huono' : '#ffb3a1'
}
//var colorsArr=['#c6fa96','#ebfcdc','#fffd91','#ffe6e0','#ffb3a1'];
var colorsArr=['#ffb3a1','#ffe6e0','#fffd91','#ebfcdc','#c6fa96'];//  '#c6fa96','#ebfcdc',',#fffd91','#ffe6e0','#ffb3a1'];

var data2017={'M1':0.14,
            'M2':-0.01,
            'M5':0.11,
            'M6':0.98,
            'M7':0.98,
            'M8':-5.78,
            'M9':20.52,
            'M11':-0.07,
            'M13':78.7,
            'M14':1.81,
            'M17':0.04,
            'M19':0.06,
            'M22':-99,
            'M23':-0.02,
            'M24':16,
            'jp':20171101,
            'jlp':20170515
};
var data2018={
            'M1':0.26,
            'M2':-0.47,
            'M5':0.39,
            'M6':0.73,
            'M7':0.92,
            'M8':-9.32,
            'M9':22.85,
            'M11':0,
            'M13':80,
            'M14':1.84,
            'M17':0.33,
            'M19':0.1,
            'M22':-99,
            'M23':0.49,
            'M24':23,
            'jp':20181124,
            'jlp':20180508
}
//scaleData(0.38,"M1")
//scaleData(-0.25,"M2")

function findValue(g,d){
	//console.log(d[g])
	for (var i = 0; i < d.length; i++) {
		console.log(d[i]);
	}
}

//valuesForGraph("animals",data2018)
function valuesForGraph(graphType,data){
	let graphColors=[];
	let graphData=[];
	let graphInfo=[];
	let gauges=[]
	let scaledValue=0.9;
	let tmpColor="#000000";
	//findValue("M1",data)
	if(graphType=="animals"){gauges=["M11","M13","M14","M17"];}		
	else if(graphType=="vege"){gauges=["M1","M2","M5","M6","M7","M8"];}
	else if(graphType=="human"){gauges=["M19","M22","M24"];}
	for (var i = 0; i < gauges.length; i++) { 
		//console.log("mittari ja arvo : "+gauges[i]+" "+data[gauges[i]]);
		//console.log("Mittaristo : "+gaugeLimits[gauges[i]])
		scaledValue=whatClass(data[gauges[i]],gauges[i])
		//console.log("skaalattu : "+scaledValue);
		//console.log("*********************");
		graphData.push(scaledValue);
		graphColors.push(colorsArr[scaledValue-1])
		graphInfo.push(gaugeInfo[gauges[i]]);
	}
	//console.log("Datat : "+graphData);
	//console.log("Varit : "+graphColors);
	return [graphData,graphColors,graphInfo]
}

function whatClass(val,gauge){
	//console.log(typeof val);
	//console.log(typeof gauge);
	//console.log(gauge);
	//console.log(gaugeLimits[gauge]);
	gauge=gaugeLimits[gauge]
	//'M14' : [0.200 ,  0.490 ,  0.990 ,  1.500]
	//else : 'M24' : [80.000, 50.000,  30.000, 10.000
	if (gauge[0]<gauge[1]){
		if(val<=gauge[0]){return 5;}
		else if(val>gauge[0] && val<=gauge[1]){return 4;}
		else if(val>gauge[1] && val<=gauge[2]){return 3;}
		else if(val>gauge[2] && val<=gauge[3]){return 2;}
		else if(val>gauge[3]){return 1;}
		else{return 0;}
	}else{
		if(val>=gauge[0]){return 5;}
		else if(val<gauge[0] && val>=gauge[1]){return 4;}
		else if(val<gauge[1] && val>=gauge[2]){return 3;}
		else if(val<gauge[2] && val>=gauge[3]){return 2;}
		else if(val<gauge[3]){return 1;}
		else{return 0;}
	}
}
function scaleData(val,gauge){
	var thisGauge=gaugeLimits[gauge];
	//console.log("Mittaristo : "+thisGauge);
	var center=(thisGauge[1]+thisGauge[2])/2.0;
	//console.log("keskus : "+center);
	var distanceFromCenter=val-center;
	var relativeDistance=val/thisGauge[0];
	//console.log("Etäisyys keskuksesta : "+distanceFromCenter);
	//console.log("PAIKKA : "+relativeDistance);
	return relativeDistance
}
/*
Vesi- ja rantakasvillisuus
1 : Saraikon laajuus
2 : Tulvan suuruus
5 : Saraikko
6 : Järvikorte
7 : Järviruoko
8 : Lähinnä isokokoiset pohjalehtiset

Linnusto, kala ja pieneliöstö
11 : Kuikka, harmaalokki
13 : Kalaston pohjaeläinravinnon määrä
14 : Järvikutuisten mädin säilyminen
17 : Hauen lisääntymisen onnistuminen

Virkistyskäyttö:
19 : Vesistön virkistyskäyttö ja rantojen käyttö, maisema
22 : Talvikalastus, talous- ja saunavedenotto järvestä, liikkuminen jäällä
24 : Rantojen ja laiturien käyttö, veneily, vesimaisema
23 : Rantojen eroosio, rantavyörymät, kunnostustarve
*/
/*
function varitaMittarit(mittari,arvo){
    var rajat = limits[mittari];
    if(arvo>=limits[mittari][0]) return '#c6fa96';
    else if(arvo<limits[mittari][0] & arvo>=limits[mittari][1]) return '#ebfcdc';
    else if(arvo<limits[mittari][1] & arvo>=limits[mittari][2]) return '#fffd91';
    else if(arvo<limits[mittari][2] & arvo>=limits[mittari][3]) return '#ffe6e0';
    else if(arvo<limits[mittari][3] & arvo!=-99)return '#ffb3a1';
    else return 'white'
}
*/