﻿/*!@license
 * Infragistics.Web.ClientUI jQuery Popover 13.2.20132.2055
 *
 * Copyright (c) 2013-2013 Infragistics Inc.
 *
 * http://www.infragistics.com/
 *
 * Depends on:
 *	jquery-1.4.2.js
 *	jquery.ui.core.js
 *	jquery.ui.widget.js
 *	infragistics.util.js
 *
 */
if(typeof jQuery!=="function"){throw new Error("jQuery is undefined")}(function($){$.widget("ui.igPopover",{css:{baseClasses:"ui-widget ui-igpopover",arrowImageBaseClass:"ui-igpopover-arrow-",closeButtonClass:"ui-icon ui-icon-closethick",titleClass:"ui-igpopover-title"},options:{renderCloseButton:true,closeOnBlur:true,direction:"auto",position:"auto",width:null,height:null,maxWidth:200,maxHeight:200,target:null,fadeTimespan:150,content:null,contentFunction:null,selectors:null,title:null,showOn:"mouseenter",containment:null},events:{popoverShowing:"popoverShowing",popoverShown:"popoverShown",popoverHiding:"popoverHiding",popoverHidden:"popoverHidden"},_create:function(){this._priorityDir=["bottom","top","right","left"];this._arrowDir=["top","bottom","left","right"];this._positions=["balanced","start","end"];this._directionIndex=-1;this._positionIndex=-1;this._forced=this.options.direction!=="auto"&&this.options.position!=="auto"},_createWidget:function(options,element){$.Widget.prototype._createWidget.apply(this,arguments);this.element=$(element);if(element&&element.nodeType!==undefined){this._renderPopover()}if(this.options.direction!=="auto"||this.options.position!=="auto"){this._getPrioritiesIndex()}},_setOption:function(key,value){switch(key){case"direction":this.options.direction=value;if(this.options.direction!=="auto"){this._getPrioritiesIndex()}this._forced=this.options.direction!=="auto"&&this.options.position!=="auto";break;case"position":this.options.position=value;if(this.options.position!=="auto"){this._getPrioritiesIndex()}this._forced=this.options.direction!=="auto"&&this.options.position!=="auto";break;case"target":this._detachEventsFromTarget();this.options.target=value;this._attachEventsToTarget();break;case"content":if(typeof value==="string"){this.options.content=value}break;case"fadeTimespan":if(typeof value==="number"){this.options.fadeTimespan=value}break;case"containment":if(value instanceof jQuery){this.options.containment=value}break;case"title":case"contentFunction":case"selectors":case"width":case"height":case"closeOnBlur":case"renderCloseButton":case"maxWidth":case"maxHeight":case"showOn":throw new Error($.ig.Popover.locale.popoverOptionChangeNotSupported+" "+key)}},destroy:function(){this._detachEventsFromTarget();$("#"+this.id()+"_popover").remove();$.Widget.prototype.destroy.call(this);return this},id:function(){return this.element[0].id},container:function(){return $("#"+this.id()+"_popover_contentInner")},show:function(trg,content){var target=trg||this.options.target;if(content){this._setNewContent(content)}this._openPopover(target)},hide:function(){this._closePopover()},getContent:function(){return $("#"+this.id()+"_popover_contentInner").html()},setContent:function(newCnt){if(typeof newCnt==="string"){this._setNewContent(newCnt)}},_renderPopover:function(){this.popover=$("<div></div>").attr("id",this.id()+"_popover").css({display:"none","white-space":"normal","word-wrap":"break-word",position:"absolute"}).addClass(this.css.baseClasses);this.popover.appendTo(window.document.body);this._attachEventsToTarget();this._createContentDiv()},_createContentDiv:function(){var cnt,currContent=this.options.content;cnt=$("<div></div>").attr("id",this.id()+"_popover_contentFrame").css("position","relative").css("max-width",this.options.maxWidth).css("max-height",this.options.maxHeight).css("width",this.options.width||"auto").css("height",this.options.height||"auto").addClass("ui-widget-content ui-corner-all").appendTo(this.popover);if(this.options.renderCloseButton===true){$("<div></div>").attr("id",this.id()+"_popover_closeBtn").addClass(this.css.closeButtonClass).css({display:"block","float":"right",position:"relative",top:"-5px",left:"5px"}).bind("click.popover",$.proxy(this._closeBtnClick,this)).appendTo(cnt)}if(this.options.title){$("<div></div>").attr("id",this.id()+"_popover_title").addClass(this.css.titleClass).css({position:"relative",bottom:"5px",right:"7px","margin-left":"7px"}).html(this.options.title).appendTo(cnt)}if((typeof currContent==="string"||!currContent)&&this.options.target){currContent=this.options.content||this.options.target[0].title}else if(this.options.selectors==="[title]"&&!this.options.target&&!currContent&&!this.options.contentFunction){this.options.contentFunction=function(){return $(this).attr("title")}}else if(typeof this.options.contentFunction==="function"&&this.options.target){currContent=this.options.contentFunction.call(this.options.target[0],function(response){return})}$("<div></div>").attr("id",this.id()+"_popover_contentInner").css("position","relative").html(currContent).appendTo(cnt);$("<div></div>").css("clear","both").appendTo(cnt)},_updateArrowDiv:function(nDir,idx){var arrowDiv=$("#"+this.id()+"_popover_arrow"),conDiv=$("#"+this.id()+"_popover_contentFrame"),dims;if(arrowDiv.length===0){arrowDiv=$("<div></div>").attr("id",this.id()+"_popover_arrow").css("position","relative").addClass(this.css.arrowImageBaseClass+this._arrowDir[idx]).appendTo(this.popover)}else{arrowDiv.removeClass("ui-igpopover-arrow-left ui-igpopover-arrow-right ui-igpopover-arrow-bottom ui-igpopover-arrow-top").addClass(this.css.arrowImageBaseClass+this._arrowDir[idx])}dims=this._getHiddenElementsDimensions([arrowDiv,conDiv]);switch(nDir){case"top":conDiv.css({left:"",top:"","float":""});arrowDiv.css({left:"",top:"","float":""});break;case"bottom":conDiv.css({left:"",top:dims[0].height,"float":""});arrowDiv.css({left:"",top:dims[1].height*-1,"float":""});break;case"left":conDiv.css({left:"",top:"","float":"left"});arrowDiv.css({left:"",top:"","float":"left"});break;case"right":conDiv.css({left:dims[0].width,top:"","float":"left"});arrowDiv.css({left:dims[1].width*-1,top:"","float":"left"});break}this.oDir=nDir},_targetMouseLeave:function(){this._hoveredTarget=null;if(this.options.closeOnBlur===true){this._closePopover()}else{this._restoreOriginalTitle()}},_targetMouseMove:function(trg){var self=this;if(this.options.target){this._openPopover($(this.options.target))}else{$(trg.currentTarget).addClass("is-hover");setTimeout(function(){if(self._hoveredTarget===trg.currentTarget){self._openPopover($(trg.currentTarget));$(trg.currentTarget).removeClass("is-hover")}},self.options.fadeTimespan);this._hoveredTarget=trg.currentTarget}},_targetClick:function(trg){var t=this.options.target||trg.currentTarget;if($(t).data("onFocus")&&this.container().is(":visible")){this._closePopover();$(t).data("onFocus",false)}else{this._restoreOriginalTitle();this._openPopover($(t));$(t).focus();$(t).data("onFocus",true)}},_targetBlur:function(trg){var t=this.options.target||trg.currentTarget,self=this;$(t).data("onFocus",false);setTimeout(function(){if(!$(t).data("onFocus")){self._closePopover()}else{$(t).focus()}},10)},_focusin:function(trg){var t=this.options.target||trg.currentTarget;this._openPopover($(t))},_focusout:function(){this._closePopover();this._restoreOriginalTitle()},_closeBtnClick:function(event,ui){this._closePopover();event.stopPropagation()},_attachEventsToTarget:function(){var self=this,t=this.options.target,showEvt,hideEvt,targetShowEvt,targetHideEvt;if(this.options.showOn&&this.options.showOn.match(/click|focus|mouseenter/)){switch(this.options.showOn){case"click":showEvt="click.popover";hideEvt="blur.popover";targetShowEvt=self._targetClick;targetHideEvt=self._targetBlur;break;case"focus":showEvt="focusin.popover";hideEvt="focusout.popover";targetShowEvt=self._focusin;targetHideEvt=self._focusout;break;case"mouseenter":showEvt="mouseenter.popover";hideEvt="mouseleave.popover";targetShowEvt=self._targetMouseMove;targetHideEvt=self._targetMouseLeave;break}}if(t&&window.HTMLElement!==undefined&&(t instanceof HTMLElement||t instanceof jQuery)&&showEvt){$(t).unbind(showEvt).bind(showEvt,$.proxy(targetShowEvt,this));$(t).unbind(hideEvt).bind(hideEvt,$.proxy(targetHideEvt,this))}else if(this.options.selectors&&showEvt){this.element.find(self.options.selectors).addBack().each(function(){var target=$(this)[0];if(target.id===self.id()){return}$(target).unbind(showEvt).bind(showEvt,$.proxy(targetShowEvt,self));$(target).unbind(hideEvt).bind(hideEvt,$.proxy(targetHideEvt,self))})}},_detachEventsFromTarget:function(){var t=this.options.target,self=this;if(t&&window.HTMLElement!==undefined&&(t instanceof HTMLElement||t instanceof jQuery)){$(t).unbind(".popover")}else if(this.options.selectors){this.element.find(self.options.selectors).addBack().each(function(){var target=$(this);$(target).unbind(".popover")})}},_positionPopover:function(trg){var i=0,fn,fnRes;if(this.options.direction==="auto"){do{this._updateArrowDiv(this._priorityDir[i],i);fn="_"+this._priorityDir[i]+"Position";fnRes=this[fn](trg);i++}while(fnRes===false&&i<this._priorityDir.length);if(fnRes===false){return}}else{this._updateArrowDiv(this.options.direction,this._directionIndex);fn="_"+this.options.direction+"Position";if(!this[fn](trg)&&(this.options.selectors||!this.options.target)){this._forced=true;do{this._updateArrowDiv(this._priorityDir[i],i);fn="_"+this._priorityDir[i]+"Position";fnRes=this[fn](trg);i++}while(fnRes===false&&i<this._priorityDir.length);return}}},_findProperPosition:function(dir,x,trg){var i=0,fnRes,y,cDim,cPos,win=$(window),trgFDim,wScroll,tPos,boundary,countainmentBoundary,$containment;if(dir==="left"){cPos="left";cDim="outerWidth";wScroll=win.scrollLeft()}else{cPos="top";cDim="outerHeight";wScroll=win.scrollTop()}boundary=wScroll+win[0][cDim];$containment=this.options.containment;if(this.options.containment){countainmentBoundary=$containment.offset()[cPos];if(cDim==="outerWidth"){countainmentBoundary=countainmentBoundary+$containment.outerWidth()}else{countainmentBoundary=countainmentBoundary+$containment.outerHeight()}if(boundary>countainmentBoundary){boundary=countainmentBoundary}}if(trg.offset()[cPos]+trg[cDim]()>boundary){trgFDim=boundary-trg.offset()[cPos]}else{trgFDim=trg[cDim]()}if(trg[cDim]()>this.popover[cDim]()){y=trg.offset()[cPos]+trgFDim/2-this.popover[cDim]()/2;fnRes=dir==="left"?this._checkCollision(x,y,trg):this._checkCollision(y,x,trg)}else{if(this.options.position==="auto"){do{tPos=this._positions[i];y=this._getCounterPosition(trg,trgFDim,tPos,cPos,cDim);fnRes=dir==="left"?this._checkCollision(x,y,trg):this._checkCollision(y,x,trg)}while(fnRes===false&&++i<this._positions.length)}else{y=this._getCounterPosition(trg,trgFDim,this.options.position,cPos,cDim);fnRes=dir==="left"?this._checkCollision(x,y,trg):this._checkCollision(y,x,trg)}}if(fnRes===true){this._adjustArrowPosition(trg,dir,cPos,cDim)}return fnRes},_getCounterPosition:function(trg,trgFDim,tPos,cPos,cDim){var y;switch(tPos){case"balanced":y=trg.offset()[cPos]+trgFDim/2-this.popover[cDim]()/2;break;case"start":y=trg.offset()[cPos];break;case"end":y=trg.offset()[cPos]-this.popover[cDim]()+trgFDim;break}return y},_topPosition:function(trg){var top=trg.offset().top-this.popover.outerHeight();return this._findProperPosition("left",top,trg)},_bottomPosition:function(trg){var top=trg.offset().top+trg.outerHeight();return this._findProperPosition("left",top,trg)},_leftPosition:function(trg){var left=trg.offset().left-this.popover.outerWidth();return this._findProperPosition("top",left,trg)},_rightPosition:function(trg){var left=trg.offset().left+trg.outerWidth();return this._findProperPosition("top",left,trg)},_checkCollision:function(top,left,trg){var tfullw=this.popover.outerWidth(),tfullh=this.popover.outerHeight(),win=$(window),wh,ww,os,$containment,arrow,rightBoundary,bottomBoundary,leftBoundary,topBoundary;ww=win.width()+win.scrollLeft();wh=win.height()+win.scrollTop();$containment=this.options.containment;if(this.options.containment){arrow=$("#"+this.id()+"_popover_arrow");rightBoundary=ww;bottomBoundary=wh;leftBoundary=win.scrollLeft();topBoundary=win.scrollTop();if(leftBoundary<$containment.offset().left){leftBoundary=$containment.offset().left}if($containment.offset().left+$containment.outerWidth()<rightBoundary){rightBoundary=$containment.offset().left+$containment.outerWidth()}if(bottomBoundary>$containment.offset().top+$containment.outerHeight()){bottomBoundary=$containment.offset().top+$containment.outerHeight()}if(topBoundary<$containment.offset().top){topBoundary=$containment.offset().top}if(left<leftBoundary){left=leftBoundary}if(trg.offset().left+tfullw/2>rightBoundary){left=rightBoundary-tfullw;this._forced=true}if(trg.offset().top+tfullh+arrow.height()>bottomBoundary&&this.oDir==="bottom"){if(this.options.selectors){return false}else{this._forced=true}}if(trg.offset().top-tfullh-arrow.height()<topBoundary&&this.oDir==="top"){if(this.options.selectors){return false}else{this._forced=true}}}if(left<win.scrollLeft()||left+tfullw>ww||top<win.scrollTop()||top+tfullh>wh){if(this._forced===false){return false}}if(!this.options.containment&&this.options.target){os=this._getRelativeOffset();top=top-os.top;left=left-os.left}this.popover.css({top:top,left:left});return true},_getPrioritiesIndex:function(){var i;if(this.options.direction!=="auto"){for(i=0;i<this._priorityDir.length;i++){if(this.options.direction===this._priorityDir[i]){this._directionIndex=i;break}}}if(this.options.position!=="auto"){for(i=0;i<this._positions.length;i++){if(this.options.position===this._positions[i]){this._positionIndex=i;break}}}},_openPopover:function(trg){var args,noCancel,val=this.getContent(),self=this,contentFunc;args={element:trg,content:val,popover:this.popover,owner:this};noCancel=this._trigger(this.events.popoverShowing,this,args);if(noCancel===true){if(args.content!==val&&typeof args.content==="string"){this._setNewContent(args.content)}else if(typeof this.options.contentFunction==="function"){contentFunc=this.options.contentFunction;args.content=contentFunc.call(trg[0],function(response){return});this._setNewContent(args.content||"")}this._positionPopover(trg);this._currentTarget=trg;this.popover.fadeIn(this.options.fadeTimespan,function(){self._trigger(self.events.popoverShown,self,args)});if(self._currentTarget.attr("title")){self._currentTarget.data("popover-title",self._currentTarget.attr("title"));self._currentTarget.attr("title","")}}},_closePopover:function(){var args,noCancel,self=this;args={element:this._currentTarget,content:this.getContent(),popover:this.popover,owner:this};noCancel=this._trigger(this.events.popoverHiding,this,args);if(noCancel===true){this.popover.fadeOut(this.options.fadeTimespan,function(){self._trigger(self.events.popoverHidden,self,args)});this._restoreOriginalTitle()}},_restoreOriginalTitle:function(){if(this._currentTarget&&this._currentTarget.data("popover-title")){this._currentTarget.attr("title",this._currentTarget.data("popover-title"))}},_adjustArrowPosition:function(trg,dir,cPos,cDim){var arrow=$("#"+this.id()+"_popover_arrow"),offset={left:0,top:0};if(!this.options.containment&&this.options.target){offset=this._getRelativeOffset()}if(dir==="top"){arrow.css({top:trg.offset()[cPos]-parseInt(this.popover.css(cPos),10)-offset.top+trg[cDim]()/2-arrow.height()/2})}else{arrow.css({left:trg.offset()[cPos]-parseInt(this.popover.css(cPos),10)-offset.left+trg[cDim]()/2})}},_getRelativeOffset:function(){var offset={left:0,top:0},elem=this.popover;if(this.options.containment){elem=this.options.containment}while(elem[0]!==null&&elem[0]!==undefined&&elem[0].nodeName!=="#document"){if(elem.css("position")==="relative"){offset.left=elem.offset().left;offset.top=elem.offset().top;break}elem=elem.parent()}return offset},_getHiddenElementsDimensions:function(elArr){var dim=[],i,elem;$("#"+this.id()+"_popover").show();for(i=0;i<elArr.length;i++){elem=elArr[i];dim.push({width:elem.outerWidth(),height:elem.outerHeight()})}$("#"+this.id()+"_popover").hide();return dim},_setNewContent:function(nc){$("#"+this.id()+"_popover_contentInner").html(nc)}});if(!$.fn.addBack){$.fn.addBack=function(selector){return this.add(selector==null?this.prevObject:this.prevObject.filter(selector))}}$.extend($.ui.igPopover,{version:"13.2.20132.2055"})})(jQuery);