define("view/about/course",["base/jquery/3.2.1/jquery"],function(e,i,t){"use strict";var s=e("base/jquery/3.2.1/jquery"),a=s("#list");function u(e,i){var t=e.find(".ui-course-detail li").length;i=arguments.length>1?i:e.hasClass("active"),e.find(".ui-course-title> h2 >a").text(i?"收起":"展开显示 "+t+" 条历史事件")}a.children().each(function(e,i){u(s(i))}),a.on("click",".ui-course-title > h2",function(e){e.preventDefault();var i=s(e.target).closest("li");i.find(".ui-course-detail li").length;i.find(".ui-course-detail").stop().slideToggle("fast",function(){var e=i.hasClass("active");i[e?"removeClass":"addClass"]("active"),u(i,!e)})})});