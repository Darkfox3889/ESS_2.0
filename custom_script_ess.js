function tsResubmit(searchText) {
	$("sysparm_search").value = searchText;
	$("kb_view").submit();
}

function changeSort(value) {
	if (self.opener) {
		self.opener.eval("setKbSortOrder('"+value+"')");
	}
	gel("sysparm_order").value = value;
	$("kb_view").submit();
}

function setPageSize(pageSize) {
	_setUrl("sys_nav_count",pageSize);
}

function setStartRow(startRow) {
	_setUrl("sysparm_current_row",startRow);
}

function changeRowCount(element){
	setPageSize(element.value);
}

function changeRowCountFromMenu(value){
	setPageSize(value);
}

var timerHandle = null;
function gotoRow(pageSize,totalRows,element){
	if (timerHandle != null)
		clearTimeout ( timerHandle );
	timerHandle = setTimeout("_gotoRow("+pageSize+","+totalRows+",'"+element.id+"')",1000);
}

function _gotoRow(pageSize,totalRows,elementId){
	var startRow = document.getElementById(elementId).value;
	var pageStart = startRow;
	if (pageStart > totalRows)
		pageStart = totalRows - pageSize + 1;
	if (pageStart <= 0)
		pageStart = 1;
	setStartRow(pageStart);
}

function nextPage(pageSize,totalRows,startRow){
	var pageStart = startRow + pageSize;
	if (pageStart > totalRows)
		pageStart = totalRows - pageSize + 1;
	if (pageStart <= 0)
		pageStart = 1;
	setStartRow(pageStart);
}

function lastPage(pageSize,totalRows,startRow){
	var pageStart = totalRows - pageSize + 1;
	if (pageStart <= 0)
		pageStart = 1;
	setStartRow(pageStart);
}

function previousPage(pageSize,totalRows,startRow){
	var pageStart = startRow - pageSize;
	if (pageStart <= 0)
		pageStart = 1;
	setStartRow(pageStart);
}

function firstPage(pageSize,totalRows,startRow){
	setStartRow(1);
}

function _setUrl(key,value) {
	var url = _getUrlExcludingParam(key);
	if (url.hasParams)
		url.url += "&";
	else
		url.url += "?";
	url.url += key+'='+value;
	url.url += "&sysparm_rollbased="+roleBased;
	window.location.href = url.url;
	
}

function _getUrlExcludingParam(paramName) {
	var seperator = "";
	var hasParams = false;
	if (window.location.pathname.substring(0,1) != "/")
		seperator = "/";
	
	var baseURL = window.location.protocol + "//" + window.location.host + seperator + window.location.pathname;
	seperator = "?";
	var parts = window.location.href.replace(/[?&]+([^=&]+)=?([^&]*)/gi, function(full,key,value) {
		if ((key != paramName) && (key != "sysparm_rollbased")) {
			baseURL += seperator + key;
			if ((value != null) &&(value != ""))
				baseURL += "=" + value;
			seperator = "&";
			hasParams = true;
		}
	});
	return {
		url : baseURL,
		hasParams : hasParams
	};
}






// On Load calling the prototype event for observing the iframe loading
var actionName = null;
if($$("iframe").length > 0){
   $$("iframe")[0].observe("load", function(event){
      actionName = this.src;
      if(this.contentWindow.document.forms["back_form"] != undefined){
         this.contentWindow.document.forms["back_form"].action = actionName;
      }
   });
}

//Dropdown Menu Function

function dropDownMenu() {
   
   var dropdownLinks = $jUC(".dropdown-link");
   var dropdownWrapper = $jUC(this).next(".dropdown-wrapper");
   var dropdownSpacer = $jUC("#dropdown-spacer");
   var hasSubMenu = $jUC(this).next('.dropdown-wrapper').length;
   
   
   if (hasSubMenu > 0) {
      
      if (!($jUC(dropdownLinks).hasClass("selected"))) {
         
         $jUC(this).addClass("selected");
         var closeflag = $jUC(dropdownWrapper).find('.close').length;
         if (closeflag == 0) {
            $jUC(dropdownWrapper).append('<a class="close" href="javascript:void()">Close (X)</a>');
         }
         var dropdown_height = $jUC(dropdownWrapper).height();
         $jUC(dropdownSpacer).animate({
            height: dropdown_height
         }, "fast");
         
         
         $jUC(dropdownWrapper).slideDown("fast");
         
      } else if ($jUC(this).hasClass("selected")) {
         $jUC(this).removeClass("selected");
         var closeflag = $jUC(dropdownWrapper).find('.close').length;
         if (closeflag == 0) {
            $jUC(dropdownWrapper).append('<a class="close" href="javascript:void()">Close (X)</a>');
         }
         $jUC(dropdownSpacer).animate({
            height: "0"
         }, "fast");
         $jUC(dropdownWrapper).slideUp("fast");
      }
      //if another dropdown menu is open
      else if ($jUC(dropdownLinks).not(this).hasClass("selected")) {
         $jUC(dropdownLinks).removeClass("selected");
         $jUC(this).addClass("selected");
         var closeflag = $jUC(dropdownWrapper).find('.close').length;
         if (closeflag == 0) {
            $jUC(dropdownWrapper).append('<a class="close" href="javascript:void()">Close (X)</a>');
         }
         $jUC(".dropdown-wrapper").hide();
         $jUC(dropdownWrapper).show();
      }
      
      //don't follow the link
      
      return false;
   }
}

function highlightNav(sectionName) {
   var listClassName = "li.portaltab-" + sectionName;
   $jUC(listClassName).find("a").css("color", "#FFF100");
}
function setIframeSizeToContentHeight() {
   var frame = $jUC("table.ess_layout").find("iframe").get(0);
   var frameBodyHeight = $jUC(frame).contents().find("body").height();
   if(frameBodyHeight > $jUC(frame).height()) {
      $jUC(frame).css("min-height", frameBodyHeight + "px");
   }
   $jUC(frame).css("overflow", "auto");	
}
function resizeContainerHeight() {
   // code for setting background height for drop zone so that the background image spans fully on any page
   var heightToBeReduced = $jUC("#header").height() + $jUC("#topBar").height() + $jUC("#footer").height();
   var $windowHeight = $jUC(window).height();
   if($jUC("table.ess_layout").find("iframe").length) {
      
      var frame = $jUC("table.ess_layout").find("iframe").get(0);
      $jUC(frame).css("min-height",($jUC(window).height() - heightToBeReduced) + "px");
      window.setInterval(setIframeSizeToContentHeight, 500);
   } 
   else  {
	  var bannerImageHeight = $jUC(".billboardtile").length ? $jUC(".billboardtile").height() : 0
      $jUC("#main-content").css("min-height",($jUC(window).height() - heightToBeReduced - bannerImageHeight) + "px");// 350 is the height of the banner image
   }
}
/*
In Safari empty table cells without width are ignored. To add an appropriate width for left and right drop zones we need to calculate
the width of the window dynamically and reduce the fixed width of the main table cell.

 */

function resizeDropZoneTables() {
   var viewportWidth = $jUC(window).width();
   var widthForLeftAndRightCells = ($jUC(window).width() - 960)/2;
   if($jUC("div.cms_menu_vertical_section_container").length) {
      if(viewportWidth > 1500) {
         $jUC("#dropzone0").width(Math.floor(widthForLeftAndRightCells) + "px");
         $jUC("#dropzone2").width(Math.floor(widthForLeftAndRightCells) + "px");
         $jUC("div.cms_menu_vertical_section_container").css("left",Math.floor(widthForLeftAndRightCells -  245)); /* 240 is the width of the container and 5 px for padded space*/
      } else if (viewportWidth >= 1200 && viewportWidth <= 1500) {
         $jUC("#dropzone0").width("240px");
         $jUC("#dropzone2").width((viewportWidth - 1200) + "px");
         $jUC("div.cms_menu_vertical_section_container").css("left", "0px");
      } else {
         $jUC("#dropzone0").width("25%");
         $jUC("#dropzone1").width("75%").css("overflow", "auto");
         $jUC("div.cms_menu_vertical_section_container").css("left", "0px");
      }
   } else {
      $jUC("#dropzone0").width(Math.floor(widthForLeftAndRightCells) + "px");
      $jUC("#dropzone2").width(Math.floor(widthForLeftAndRightCells) + "px");
   }
}


function changeItemLinks(){
	var hrefLinks=  $jUC(".itemLinks");
	if(hrefLinks.length){
		for(var i=0; i< hrefLinks.length; i++){
			var str = $jUC(hrefLinks[i]).attr("href");
			var pos = str.lastIndexOf("/") + 1;
			var extractedString = str.substring(pos);
			var newURl =  "catalog_item.do?sysparm_content_url=" + extractedString;
			$jUC(hrefLinks[i]).attr("href",newURl )
			
		}
	}
}	

/* :::::::::::::::::::::::::::::::::::::::::::::::::::
WHEN DOM IS LOADED - Jquery
:::::::::::::::::::::::::::::::::::::::::::::::::::*/

(function ($jUC) {
   $jUC(function () {
      
      // code for navigational submenu drop down
      
      $jUC('#portal-header').append('<div id="dropdown-spacer"></div>');
      $jUC('#main-nav').children().find('a').addClass('dropdown-link');
      
      $jUC(document).on("click", ".dropdown-link", dropDownMenu);//on dropdown menu function
      
      $jUC(document).on("click", ".close",function () { //close menu
      $jUC('.selected').focus();
      $jUC(".dropdown-link").removeClass('selected');
      $jUC(this).parents(".dropdown-wrapper").slideUp("fast");
      $jUC("#dropdown-spacer").animate({
         height: ""
      }, "fast");
      
	  	  
      return false;
   });
   // code for resizing the background and center table cells
   // safari browser fix included
   $jUC(window).on("load resize",function(e){
      resizeContainerHeight();
      resizeDropZoneTables();
   });
   
   
   // Code for accordion on status secttion
   $jUC("div#accordion  h3.sectionTitle").click(function(event){
      var $currentSectionTitle = $jUC(this);
      $jUC("div.sectionBody").slideUp(100);
      $currentSectionTitle.next("div.sectionBody").slideToggle(300, function(){
         if(this.style.display === "none") {
            $currentSectionTitle.removeClass("accordion-arrow-right").addClass("accordion-arrow-down");
         } else {
            $currentSectionTitle.removeClass("accordion-arrow-down").addClass("accordion-arrow-right");
         }
      });
      
      $currentSectionTitle.siblings("h3.sectionTitle").removeClass("accordion-arrow-right").addClass("accordion-arrow-down");
   });
   if($jUC("div#accordion").size() > 0){
      $jUC("div#accordion  h3.sectionTitle").get(0).click();
   }
   
   // code for status page wherein menu lists needs to be positioned correctly
   
   
   // code for hightlighting left menu items in help page
   $jUC("a.cms_menu_vertical_item").click(function(event){
      var obj = this;
      $jUC(obj).css("font-weight", "bold");
      $jUC("a.cms_menu_vertical_item").not($jUC(obj)).css("font-weight", "normal");
   });
   $jUC("a.cms_menu_vertical_item").filter(":first").click();
   
   // code for highlighting menu items in header and footer
   
   var str = window.location.pathname;
   var fileNameStartingPoint = str.lastIndexOf("/");
   var fileName =  str.substring(fileNameStartingPoint+1);
   switch(fileName){
      case "catalog.do" : highlightNav("catalog");
      break;
      case "kb.do" : highlightNav("knowledge");
      break;
      case "help.do" : highlightNav("help");
      break;
      case "about.do" : highlightNav("about");
      break;
	  case "index.do" : highlightNav("home");
	  break;
      default: 
		   if(navTitle != null || navTitle != undefined){
		   highlightNav(navTitle);
		   } else  { 
		   highlightNav("home");
		   }	   
      break;
   }
   
   
   
   // code for cookie handling - splash intro
   // checks if the cookie is already set and if yes, it does not display the splash intro
   // number of expiration days has been set to 30.
	   
   if($jUC.getCookie && !($jUC.getCookie("splashIntroShown"))) {
      $jUC("#splashIntro").show();
      $jUC("#splashIntro button").on("click", function(event) {
         $jUC.setCookie("splashIntroShown", true, {days : 30});
         $jUC("#splashIntro").hide();
      });
   }
   // change item links in pages except for catalog item
   changeItemLinks();   
});
})($jUC);

