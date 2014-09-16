window.selectedSymbol="ASX.AX",window.seriesTypes="first",window.volumeOpen="yes",window.g="d",window.stopscan="no",window.stockcaldate="",window.trendLineType="",window.trendLinePeriod="",window.chartTypes=[],window.chartTypes.Type="financial",window.chartTypes.displayType="ohlc",window.chartTypes.posColor="rgba(0,204,0,1)",window.chartTypes.negColor="rgba(255,0,0,1)",window.sourceDetails="",window.gridvar=!1,window.react=!0,window.scanResultDates=[];var setcounter,YAHOO={Finance:{SymbolSuggest:{}}},igFinance=function(){var a,b=function(){function a(a){return 10>a&&(a="0"+a),a}function c(){f(),$("#priceChart").igDataChart("option","series",b.getSplineAreaSeries("#00AADE"))}function d(){f(),$("#priceChart").igDataChart("option","series",i("#00AADE"))}function e(a,b,c){f(),$("#priceChart").igDataChart("option","series",h(a,c))}function f(){$("#priceChart").igDataChart("option","series",[{name:"stockSeries",remove:!0}])}function g(a){return $("#priceChart").igDataChart("option","axes",[{name:"xAxis2",type:"categoryX",interval:a}]),!1}function h(a,b){var c=new Array;return c.push({type:"financial",displayType:a,isHighlightingEnabled:!0,isTransitionInEnabled:!0,closeMemberPath:"Close",highMemberPath:"High",lowMemberPath:"Low",openMemberPath:"Open",showTooltip:!0,thickness:1,tooltipTemplate:'<ul class="tooltip-titles"><li>Date:${item.Date}</li><li>Open:${item.Open}</li><li>High:${item.High}</li><li>Low:${item.Low}</li><li>Close:${item.Close}</li></ul>',tooltipPosition:"auto",negativeBrush:b,xAxis:"xAxis",yAxis:"yAxis",name:"stockSeries",title:"Price Data",trendLineType:window.trendLineType,trendLinePeriod:window.trendLinePeriod,transitionInDuration:1500,transitionInMode:"accordionFromValueAxisMaximum",resolution:1,highlightingTransitionDuration:500}),c}function i(a){return[{name:"stockSeries",type:"line",isHighlightingEnabled:!0,isTransitionInEnabled:!0,xAxis:"xAxis",yAxis:"yAxis",valueMemberPath:"High",showTooltip:!0,brush:"rgba(0,170,222,0.3)",outline:a,tooltipTemplate:'<ul class="tooltip-titles"><li>Date:${item.Date}</li><li>Open:${item.Open}</li><li>High:${item.High}</li><li>Low:${item.Low}</li><li>Close:${item.Close}</li></ul>',thickness:3}]}function j(a){var b="";return window.scanResultDates.indexOf(a.Date)>-1&&(console.log(JSON.stringify(window.scanResultDates)),console.log(a.Date),b="X"),b}function k(a){var b,c=$("#priceChart").igDataChart("option","windowRect").width;c>=.05&&.2>=c?(console.log("0.05, 0.20"),b=3):c>=.2&&.4>=c?(console.log("0.20, 0.40"),b=10):c>=.4&&.6>=c?b=20:c>=.6&&.8>=c?(console.log("0.60, 0.80"),b=40):c>=.8&&1>=c&&(b=100),g(b);var d=.398,e="";return d>c||"week"===window.seriesTypes||"month"===window.seriesTypes?e+=$.datepicker.formatDate("d/mm/yy",new Date(a.Date)):(mnTh=$.datepicker.formatDate("M",new Date(a.Date)),yR=$.datepicker.formatDate("yy",new Date(a.Date)),e+=mnTh+" "+yR),e}return{takeTimeSnapShot:function(){{var b=new Date,c=(b.getHours(),b.getMinutes()),d=b.getSeconds();b.getDate(),b.getMonth(),b.getFullYear()}c=a(c),d=a(d)},localize:function(){$("title").text(resources.Title),$("#indicator-period-text").text(resources.IndicatorPeriod),$("#indicator-type").text(resources.IndicatorType.MoneyFlow),$("#js-select-indicator").text(resources.SelectIndicator),$("#js-period-slider").text(resources.PeriodSlider),$("#js-valid-ticker").text(resources.ValidTicker),$("#info-screen").html(resources.InfoScreen)},updateDetailsDataView:function(a){"0.00%"===a.PercentChange?(a.isPositive="inactive",a.marketCurrentlyClosed=resources.MarketCurrentlyClosed):a.PercentChange.contains("+")?(a.isPositive="true",a.PercentChange=a.PercentChange.substring(1),a.Change=a.Change.substring(1)):(a.isPositive="false",a.PercentChange=a.PercentChange.substring(1),a.Change=a.Change.substring(1)),a.RangeText=resources.RangeText,a.WeeksText=resources.WeeksText,a.OpenText=resources.OpenText,a.VolumeText=resources.VolumeText,a.EbitaText=resources.EbitaText,a.EpsText=resources.EpsText,a.MktText=resources.MktText,a.PeText=resources.PeText,a.AskText=resources.AskText,a.BidText=resources.BidText,a.DailyHighText=resources.DailyHighText,a.DailyLowText=resources.DailyLowText},changeChartsSeriesType:function(a,b,f,g){"area"===a?c():"line"===a?d():e(b,f,g)},getSplineAreaSeries:function(a){return[{type:"splineArea",displayType:"splineArea",isHighlightingEnabled:!0,isTransitionInEnabled:!0,valueMemberPath:"High",brush:"rgba(0,170,222,0.3)",showTooltip:!0,tooltipTemplate:'<ul class="tooltip-titles"><li>Date:${item.Date}</li><li>Open:${item.Open}</li><li>High:${item.High}</li><li>Low:${item.Low}</li><li>Close:${item.Close}</li></ul>',outline:a,xAxis:"xAxis",yAxis:"yAxis",name:"stockSeries",title:"Price Data"}]},getDataSchema:function(){return new $.ig.DataSchema("json",{fields:[{name:"Close",type:"number"},{name:"High",type:"number"},{name:"Low",type:"number"},{name:"Open",type:"number"},{name:"Volume",type:"number"},{name:"Date",type:"string"}],searchField:"value.items"})},_getPeriodSliderOptions:function(){return{slide:function(a,b){$("#indicatorChart").igDataChart("option","series",[{name:"indicatorSeries",period:b.value}]),$("#period").text(b.value),document.getElementsByClassName("avt-value")[1].innerHTML=b.value},min:1,max:25,value:14}},_getPriceChartOptions:function(){var a=$(window).height(),a=a-215,c=.65*a;return{width:"96%",height:"yes"===window.volumeOpen?c:a,windowResponse:"immediate",horizontalZoomable:!0,windowRectChanged:function(a,b){if(window.react){chartHeight=b.newHeight,maxWidth=1,chartLeft=b.newLeft,chartWidth=b.newWidth,sourcelength=window.sourceDetails.length,sourcelist=window.sourceDetails,closeHigharr=[],closeMinarr=[],closearr=[],newchartright=parseFloat(chartLeft+chartWidth),minVisible=parseFloat(chartLeft/maxWidth*sourcelength),maxVisible=parseFloat(newchartright/maxWidth*sourcelength);for(var c in sourcelist)c>=minVisible&&maxVisible>=c&&(closeHigharr.push(sourcelist[c].Close),closeMinarr.push(sourcelist[c].Close));closeHigharr=unique(closeHigharr),closeMinarr=unique(closeMinarr),closeHigharr=closeHigharr.sort(function(a,b){return b-a}),closeMinarr=closeMinarr.sort(function(a,b){return a-b}),closeHigh=""===closeHigharr[0]||null===closeHigharr[0]?closeHigharr[1]:closeHigharr[0],closeMin=""===closeMinarr[0]||null===closeMinarr[0]?closeMinarr[1]:closeMinarr[0],$("#priceChart").igDataChart("option","axes",[{name:"yAxis",type:"numericY",maximumValue:closeHigh,minimumValue:closeMin}])}},gridAreaRectChanged:function(a,b){if(window.gridvar){chartHeight=b.newHeight,maxWidth=1,chartLeft=b.newLeft,chartWidth=b.newWidth,sourcelength=window.sourceDetails.length,sourcelist=window.sourceDetails,closeHigharr=[],closeMinarr=[],closearr=[],newchartright=parseFloat(chartLeft+chartWidth),minVisible=parseFloat(chartLeft/maxWidth*sourcelength),maxVisible=parseFloat(newchartright/maxWidth*sourcelength);for(var c in sourcelist)c>=minVisible&&maxVisible>=c&&(closeHigharr.push(sourcelist[c].Close),closeMinarr.push(sourcelist[c].Close));closeHigharr=unique(closeHigharr),closeMinarr=unique(closeMinarr),closeHigharr=closeHigharr.sort(function(a,b){return b-a}),closeMinarr=closeMinarr.sort(function(a,b){return a-b}),closeHigh=""===closeHigharr[0]||null===closeHigharr[0]?closeHigharr[1]:closeHigharr[0],closeMin=""===closeMinarr[0]||null===closeMinarr[0]?closeMinarr[1]:closeMinarr[0],window.gridvar=!1,window.react=!0,$("#priceChart").igDataChart("option","axes",[{name:"yAxis",type:"numericY",maximumValue:closeHigh,minimumValue:closeMin}])}},refreshCompleted:function(){window.gridvar||(window.react=!0)},dataSource:igFinance.getDataView(),leftMargin:0,rightMargin:30,windowRectMinWidth:.05,axes:b._getPriceChartAxes(),series:"area"===window.chartTypes.Type?b.getSplineAreaSeries("#00AADE"):"line"===window.chartTypes.Type?i("#00AADE"):h(window.chartTypes.displayType,window.chartTypes.negColor),gridMode:"beforeSeries",syncChannel:"channel2",syncrhonizeHorizontally:!0}},_getPriceChartAxes:function(){return[{type:"categoryX",name:"xAxis2",labelLocation:"outsideBottom",labelTextColor:"green",formatLabel:function(a){return j(a)},interval:1},{type:"categoryX",label:"Date",name:"xAxis",labelTopMargin:20,labelLocation:"outsideBottom",majorStroke:"rgba(153,153,153,0.3)",formatLabel:function(a){return k(a)},labelAngle:90},{type:"numericY",labelLocation:"outsideRight",name:"yAxis",majorStroke:"rgba(153,153,153,0.3)",labelLeftMargin:15}]},_getIndicatorChartOptions:function(){var a=.18*($(window).height()-100);return{width:"100%",height:a,windowResponse:"deferred",horizontalZoomable:!0,dataSource:igFinance.getDataView(),leftMargin:0,rightMargin:30,windowRectMinWidth:.05,axes:b._getIndicatorChartAxes(),series:b._getIndicatorChartSeries("moneyFlowIndexIndicator"),syncChannel:"channel2",synchronizeVertically:!1,syncrhonizeHorizontally:!1}},_getIndicatorChartAxes:function(){return[{type:"categoryX",label:"Date",name:"xAxis",maximumValue:1,minimumValue:0,formatLabel:function(a){return k(a)}},{type:"numericY",labelLocation:"outsideRight",name:"yAxis",majorStroke:"rgba(153,153,153,0.1)",formatLabel:function(a){return b._numberFormatter(a)},labelExtent:40}]},_getIndicatorChartSeries:function(a){return[{type:a,name:"indicatorSeries",title:"Financial Indicator Data",isHighlightingEnabled:!0,isTransitionInEnabled:!0,xAxis:"xAxis",yAxis:"yAxis",closeMemberPath:"Close",highMemberPath:"High",lowMemberPath:"Low",volumeMemberPath:"Volume",resolution:10}]},_getIndicatorComboOptions:function(){return{width:"300px",enableClearButton:!1,dataSource:b._getIndicatorComboDataSource(),textKey:"text",valueKey:"type",autoComplete:!0,filteringType:"local",noMatchFoundText:"No match found please try again",selectedItems:[{index:5}],selectionChanged:function(a,c){c.items&&c.items[0]&&(document.getElementsByClassName("avt-value")[0].innerHTML=c.items[0].text,b._changeIndicator(c.items[0].value))},dropDownClosed:function(){var a=$("#indicatorCombo").igCombo("text");$("#indicatorCombo").igCombo("filter",null,""),$("#indicatorCombo").igCombo("text",a)}}},_getIndicatorComboDataSource:function(){return[{type:"averageTrueRangeIndicator",text:resources.IndicatorType.AvgTrueRange},{type:"averageDirectionalIndexIndicator",text:resources.IndicatorType.AvgIndex},{type:"commodityChannelIndexIndicator",text:resources.IndicatorType.CommodityIndex},{type:"fastStochasticOscillatorIndicator",text:resources.IndicatorType.FastOscillator},{type:"forceIndexIndicator",text:resources.IndicatorType.ForceIndex},{type:"moneyFlowIndexIndicator",text:resources.IndicatorType.MoneyFlow},{type:"priceChannelOverlay",text:resources.IndicatorType.PriceOverlay},{type:"rateOfChangeAndMomentumIndicator",text:resources.IndicatorType.RateMomentum},{type:"relativeStrengthIndexIndicator",text:resources.IndicatorType.RelativeIndex},{type:"slowStochasticOscillatorIndicator",text:resources.IndicatorType.SlowOscillator},{type:"stochRSIIndicator",text:resources.IndicatorType.StockRsi},{type:"trixIndicator",text:resources.IndicatorType.Trix},{type:"williamsPercentRIndicator",text:resources.IndicatorType.WilliamsR}]},_changeIndicator:function(a){$("#indicatorChart").igDataChart("option","series",[{name:"indicatorSeries",remove:!0}]),$("#indicatorChart").igDataChart("option","series",b._getIndicatorChartSeries(a))},_getVolumeChartOptions:function(){var a=.3*($(window).height()-190);return{gridMode:"behindSeries",width:"96.3%",windowResponse:"immediate",height:a,dataSource:igFinance.getDataView(),leftMargin:0,rightMargin:30,windowRectMinWidth:.5,axes:b._getVolumeChartAxes(),series:b._getVolumeChartSeries(),syncChannel:"channel2",synchronizeVertically:!1,syncrhonizeHorizontally:!1}},_getVolumeChartAxes:function(){return[{type:"categoryX",label:"Date",name:"xAxis",labelTopMargin:20,labelLocation:"outsideBottom",majorStroke:"rgba(153,153,153,0.3)",formatLabel:function(a){return k(a)}},{type:"numericY",name:"yAxis",majorStroke:"rgba(153,153,153,0.1)",isLogarithmic:!0,labelLocation:"outsideRight",formatLabel:function(a){return b._numberFormatter(a)},labelExtent:40,labelLeftMargin:5}]},_getVolumeChartSeries:function(){return[{type:"column",outline:"rgba(0,0,0,0)",isHighlightingEnabled:!0,isTransitionInEnabled:!0,brush:"#777",valueMemberPath:"Volume",xAxis:"xAxis",yAxis:"yAxis",name:"indicatorSeries",title:"Financial Indicator Data",showTooltip:!0,tooltipTemplate:"volumeChartTooltipTemplate"}]},_convertNumberToMonthName:function(a){var b=resources.MonthNames;return b[a]},_numberFormatter:function(a){var b=Math.floor(Math.log(Math.abs(a))/Math.log(1e3));if(b>0&&4>b){var a=Math.round(a/Math.pow(1e3,b));a+=" KMB"[b]}return a},getSelectableOptions:function(){return{selected:function(a,b){window.chartTypes.Type=$(b.selected).data("type"),window.chartTypes.displayType=$(b.selected).data("displaytype"),window.chartTypes.posColor=$(b.selected).data("poscolor"),window.chartTypes.negColor=$(b.selected).data("negcolor"),f(),igFinance.changeTicker(window.selectedSymbol),$("#priceChart").igDataChart("option","brushes",[window.chartTypes.posColor]),$("#zoom").igZoombar("clone").igDataChart("option","brushes",[posColor])}}}}}(),c="ASX.AX",d=null,e=null;return{init:function(){setcounter=1,$(".progress").fadeIn(),a=new Date;var c,e,f,g,h,i;g=a.getMonth(),h=a.getDate(),i=a.getFullYear(),c=a.getMonth(),e=a.getDate(),"first"===window.seriesTypes?(f=a.getFullYear()-15,window.g="d"):"day"===window.seriesTypes?(f=a.getFullYear()-15,window.g="d"):"weekly"===window.seriesTypes?(f=a.getFullYear()-15,window.g="w"):"monthly"===window.seriesTypes?(f=a.getFullYear()-15,window.g="m"):"quaterly"===window.seriesTypes?(f=a.getFullYear()-1,window.g="d"):"2year"===window.seriesTypes?f=a.getFullYear()-2:"5year"===window.seriesTypes?f=a.getFullYear()-5:"max"===window.seriesTypes&&(f=a.getFullYear()-15),jQuery.support.cors=!0,$.get("stockScan.php",{symbolname:window.selectedSymbol}).done(function(a){var j=JSON.parse(a);1==j.success&&(window.scanResultDates=j.message),d=new $.ig.JSONPDataSource({jsonp:"_callback",dataSource:"http://pipes.yahooapis.com/pipes/pipe.run?_id=66fdfbbf40eea28d28bac13047b811b1&_render=json&s="+window.selectedSymbol+"&a="+c+"&b="+e+"&c="+f+"&d="+g+"&e="+h+"&f="+i+"&g="+window.g,callback:igFinance.render,schema:b.getDataSchema(),sorting:{type:"local"}}),d.dataBind()})},getDataView:function(){window.sourceDetails=d.dataView();var a=d.dataView();if(1===setcounter){if("first"===window.seriesTypes||"day"===window.seriesTypes){var b=new Date;cmonth=b.getMonth()+1,cmonth=cmonth>=10?cmonth:"0"+cmonth,cyear=b.getFullYear(),day1=b.getDate()+1,day1=day1>=10?day1:"0"+day1,day1=cyear+"-"+cmonth+"-"+day1,newstrngdata={Date:day1,Open:null,High:null,Low:null,Close:null,Volume:null},day2=b.getDate()+2,day2=day2>=10?day2:"0"+day2,day2=cyear+"-"+cmonth+"-"+day2,newstrngdata1={Date:day2,Open:null,High:null,Low:null,Close:null,Volume:null},day3=b.getDate()+3,day3=day3>=10?day3:"0"+day3,day3=cyear+"-"+cmonth+"-"+day3,newstrngdata2={Date:day3,Open:null,High:null,Low:null,Close:null,Volume:null},day4=b.getDate()+4,day4=day4>=10?day4:"0"+day4,day4=cyear+"-"+cmonth+"-"+day4,newstrngdata3={Date:day4,Open:null,High:null,Low:null,Close:null,Volume:null},a.push(newstrngdata),a.push(newstrngdata1),a.push(newstrngdata2),a.push(newstrngdata3),setcounter=2}else if("weekly"===window.seriesTypes){var b=new Date;cmonth=b.getMonth()+1,cmonth=cmonth>=10?cmonth:"0"+cmonth,cyear=b.getFullYear(),day1=b.getDate()+7,day1=day1>=10?day1:"0"+day1,day1=cyear+"-"+cmonth+"-"+day1,newstrngdata={Date:day1,Open:null,High:null,Low:null,Close:null,Volume:null},day2=b.getDate()+14,day2=day2>=10?day2:"0"+day2,day2=cyear+"-"+cmonth+"-"+day2,newstrngdata1={Date:day2,Open:null,High:null,Low:null,Close:null,Volume:null},day3=b.getDate()+21,day3=day3>=10?day3:"0"+day3,day3=cyear+"-"+cmonth+"-"+day3,newstrngdata2={Date:day3,Open:null,High:null,Low:null,Close:null,Volume:null},a.push(newstrngdata),a.push(newstrngdata1),a.push(newstrngdata2)}if("monthly"===window.seriesTypes){var b=new Date;cday=b.getDate(),cday=cday>=10?cday:"0"+cday,cyear=b.getFullYear(),month1=b.getMonth()+2,month1=month1>=10?month1:"0"+month1,month1=cyear+"-"+month1+"-"+cday,newstrngdata={Date:month1,Open:null,High:null,Low:null,Close:null,Volume:null},month2=b.getMonth()+3,month2=month2>=10?month2:"0"+month2,month2=cyear+"-"+month2+"-"+cday,newstrngdata1={Date:month2,Open:null,High:null,Low:null,Close:null,Volume:null},a.push(newstrngdata),a.push(newstrngdata1),setcounter=2}}return a},getDetailsDataView:function(){return e.dataView()[0]},getTicker:function(){return c},sortDataSource:function(){d.sort([{fieldName:"Date"}],"asc",!1)},formatDataSourceVolume:function(){for(var a=igFinance.getDataView(),c=0;c<a.length;c++)a[c].Volume=b._numberFormatter(a[c].Volume)},initDetailsDataSource:function(){e=new $.ig.JSONPDataSource({jsonp:"_callback",responseDataKey:"value.items",dataSource:"http://pipes.yahooapis.com/pipes/pipe.run?_id=3e1b7fc9a1a63ea0772d20ce4573d792&_render=json&symbol="+igFinance.getTicker(),callback:function(){void 0===igFinance.getDetailsDataView()?$(".progress").fadeIn():($(".progress").fadeOut(),b.updateDetailsDataView(igFinance.getDetailsDataView()),$("#stockDetails").html($.ig.tmpl($("#stockDetailsTemplate").html(),igFinance.getDetailsDataView())),$("#stockdattime").html($.ig.tmpl($("#stockDateTemplate").html(),igFinance.getDetailsDataView())+"AEST"),$("#tab1Name").html($.ig.tmpl($("#tab1Template").html(),igFinance.getDetailsDataView()))),$("#priceChart").igDataChart("option","brushes",[$(".ui-selected").attr("data-poscolor")])}}),e.dataBind()},changeTicker:function(a){var b=""!==a?!0:!1;b?(c=a,window.gridvar=!0,console.log("change ticker",window.gridvar),window.selectedSymbol=a,$("#zoom").igZoombar("zoom",100,100),igFinance.init()):$("#js-invalid-ticker").css("display","block")},render:function(){var a=igFinance.getDataView().length>0;!a&&isDialogOpen?$("#js-invalid-ticker").css("display","block"):a?($(".progress").fadeOut(),igFinance.initDetailsDataSource(),b.takeTimeSnapShot(),b.localize(),igFinance.sortDataSource(),igFinance.initializeCharts(),igFinance.formatDataSourceVolume()):$(".progress").fadeIn()},initializeCharts:function(){var a=b._getPriceChartOptions();$("#priceChart").igDataChart(a);var c=b._getIndicatorChartOptions();$("#indicatorChart").igDataChart(c);var d=b._getVolumeChartOptions();$("#volumeChart").igDataChart(d);var e=b._getIndicatorComboOptions();$("#indicatorCombo").igCombo(e);var f=b._getPeriodSliderOptions();$("#periodSlider").slider(f);var g=b.getSelectableOptions();$("#selectable").selectable(g),$("#indicatorCombo").data("igCombo").fieldElem.on("click",function(){$(this).select()});var h=($("#volumeChart").igDataChart("option","series"),.1*$(window).height());$("#zoom_zoombar_container").length>0?$("#zoom").igZoombar("clone").igDataChart({dataSource:igFinance.getDataView(),defaultZoomWindow:{left:100,width:100}}):$("#zoom").igZoombar({target:$("#priceChart"),height:h,defaultZoomWindow:{left:100,width:100}})},openDialog:function(a){$("#"+a).igDialog({state:"opened",draggable:!1,resizable:!1})},resizeCharts:function(){var a=$(window).height()-200,b=.65*a;0!==$("#priceChart").children().length&&("yes"===window.volumeOpen?$("#priceChart").igDataChart("option","height",b):$("#priceChart").igDataChart("option","height",a),$("#indicatorChart").igDataChart("option","height",.2*a),$("#volumeChart").igDataChart("option","height",.3*a),0===$("#zoom_zoombar_container").length&&$("#zoom").igZoombar("option","height",.1*a))},loadResources:function(){var a,b=function(){var a=[config.resources.folder,config.language,config.resources.file].join("/");return $.getScript(a)};return a||(a=b()),a}}}();$(window).load(function(){igFinance.loadResources().done(function(){igFinance.init()})}),$(function(){$("#tabs").tabs(),settoday=new Date,$("#chartDateSelect").datepicker({maxDate:"m w y d",minDate:new Date(1999,0,1),beforeShowDay:$.datepicker.noWeekends,dateFormat:"yy-mm-dd"}),dwidth=$(window).width(),dwidth=parseInt(dwidth/2),dheight=$(window).height(),dheight=parseInt(dheight/2),$("#chartlistdialog").igDialog({imageClass:"ui-icon ui-icon-flag",closeButtonTitle:"Close Dialog Window",minimizeButtonTitle:"Minimize Dialog Window",maximizeButtonTitle:"Maximize Dialog Window",unpinButtonTitle:"Unpin Dialog Window",restoreButtonTitle:"Restore Dialog Window",showMinimizeButton:!0,showMaximizeButton:!0,closeOnEscape:!0,resizable:!0,headerText:"Trade Table",height:dheight+100,width:dwidth+100}),$("#chartlistdialog").igDialog("close"),$("#chartlistopendialog").on({click:function(){$("#chartlistdialog").igDialog("open")}}),$("#watchlistdialog").igDialog({imageClass:"ui-icon ui-icon-flag",closeButtonTitle:"Close Dialog Window",minimizeButtonTitle:"Minimize Dialog Window",maximizeButtonTitle:"Maximize Dialog Window",unpinButtonTitle:"Unpin Dialog Window",restoreButtonTitle:"Restore Dialog Window",showMinimizeButton:!0,showMaximizeButton:!0,closeOnEscape:!0,resizable:!0,headerText:"Watch List",height:dheight,width:dwidth}),$("#watchlistdialog").igDialog("close"),$("#watchlistbutton").on({click:function(){$("#watchlistdialog").igDialog("open")}}),$("#portfoliodialog").igDialog({imageClass:"ui-icon ui-icon-flag",closeButtonTitle:"Close Dialog Window",minimizeButtonTitle:"Minimize Dialog Window",maximizeButtonTitle:"Maximize Dialog Window",unpinButtonTitle:"Unpin Dialog Window",restoreButtonTitle:"Restore Dialog Window",showMinimizeButton:!0,showMaximizeButton:!0,closeOnEscape:!0,resizable:!0,headerText:"My PortFolio",height:dheight+250,width:dwidth+300}),$("#portfoliodialog").igDialog("close"),$("#portfoliobutton").on({click:function(){$("#portfoliodialog").igDialog("open")}}),$("#portfolioFormdialog").igDialog({imageClass:"ui-icon ui-icon-flag",closeButtonTitle:"Close Dialog Window",minimizeButtonTitle:"Minimize Dialog Window",maximizeButtonTitle:"Maximize Dialog Window",unpinButtonTitle:"Unpin Dialog Window",restoreButtonTitle:"Restore Dialog Window",showMinimizeButton:!0,showMaximizeButton:!0,closeOnEscape:!0,resizable:!0,headerText:"Brokerage",height:dheight+150,width:dwidth-60}),$("#portfolioFormdialog").igDialog("close"),$(".portfolio_buy").on({click:function(){$("#portfolioFormdialog").igDialog("open"),$("#sellType").val("Buy")}}),$(".portfolio_sell").on({click:function(){$("#portfolioFormdialog").igDialog("open"),$("#sellType").val("Sell")}})}),$(window).resize(function(){igFinance.resizeCharts()}),$("#js-info").click(function(){$("#info-screen").toggle("fast")});