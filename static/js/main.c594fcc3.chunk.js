(window.webpackJsonpdashboard=window.webpackJsonpdashboard||[]).push([[0],{13:function(e,t,a){e.exports=a.p+"static/media/dots.5fd5bbaf.svg"},171:function(e,t,a){},174:function(e,t,a){},182:function(e,t,a){},183:function(e,t,a){},184:function(e,t,a){"use strict";a.r(t);var s=a(0),i=a.n(s),n=a(61),r=a.n(n),l=a(24),c=a(25),o=a(28),m=a(26),d=a(29),u=(a(73),a(40)),h=a.n(u),v=function(e){var t=e.FontAwesomeIcon,a=e.faUserCircle,s=e.faSignOutAlt;return i.a.createElement("div",{className:"ui secondary menu navbar"},i.a.createElement("div",{className:"company_logo item"},i.a.createElement("img",{className:"company_logo_img",src:h.a,alt:"company_logo"}),i.a.createElement("div",{className:"powered"},i.a.createElement("span",null,"powered by"),i.a.createElement("img",{className:"small",src:h.a,alt:"company_logo"}))),i.a.createElement("div",{className:"right menu user_session"},i.a.createElement("div",{className:""},i.a.createElement("div",{className:"username_detail"},"Username"),i.a.createElement("div",{className:"company_detail"},"Company Name")),i.a.createElement("div",{className:"icon item"},i.a.createElement(t,{icon:a})),i.a.createElement("div",{className:"icon item"},i.a.createElement(t,{icon:s}))))},f=(a(74),function(e){var t=e.dashboardIcon,a=e.FontAwesomeIcon,s=e.faBars;return i.a.createElement("div",{className:"ui secondary vertical menu"},i.a.createElement("div",{className:"item"},i.a.createElement(a,{icon:s})),i.a.createElement("div",{className:"active item dashboard_icon"},i.a.createElement("img",{src:t,alt:"dashboard icon"})))}),p=(a(75),a(27)),E=a.n(p),g=function(e){var t=e.products,a=e.dots,s=t.map((function(e){return i.a.createElement("div",{key:e.id},i.a.createElement("div",{className:"product_card flex ".concat(1===e.id?"active":"")},i.a.createElement("div",{className:"img_product ".concat(1===e.id?"flex_item_three":"flex_item_two")},i.a.createElement("img",{src:E.a,alt:"drink"})),i.a.createElement("div",{className:"details_product"},i.a.createElement("h1",null,e.name),i.a.createElement("div",{className:"flex"},i.a.createElement("div",{className:"flex_item_five"},"Rp. ",e.price," "),i.a.createElement("div",{className:"flex_item_five sold"},e.sold)))))}));return i.a.createElement("div",{className:"best_selling"},i.a.createElement("div",{className:"flex"},i.a.createElement("div",{className:"flex_item_nine header"},"Best Selling SKU"),i.a.createElement("div",{className:"dots"},i.a.createElement("img",{src:a,alt:"dots"}))),s)},y=(a(76),function(e){var t=e.competitors,a=e.dots,s=t.map((function(e){return i.a.createElement("div",{key:e.id},i.a.createElement("div",{className:"competitor_card flex ".concat(1===e.id?"active":"")},i.a.createElement("div",{className:"img_competitor ".concat(1===e.id?"flex_item_three active":"flex_item_two")},i.a.createElement("img",{src:E.a,alt:"drink"})),i.a.createElement("div",{className:"details_competitor"},i.a.createElement("h1",null,e.name),i.a.createElement("div",{className:"flex"},i.a.createElement("div",{className:"flex_item_five"},"Rp. ",e.price," "),i.a.createElement("div",{className:"flex_item_five sold"},e.sold)))))}));return i.a.createElement("div",{className:"top_competitor"},i.a.createElement("div",{className:"flex"},i.a.createElement("div",{className:"flex_item_nine header"},"Top Competitor SKU"),i.a.createElement("div",{className:""},i.a.createElement("div",{className:"dots"},i.a.createElement("img",{src:a,alt:"dots"})))),s)}),D=(a(77),function(e){var t=e.dots,a=e.cart,s=e.faArrowDown,n=e.FontAwesomeIcon;return i.a.createElement("div",{className:"sales_turnover"},i.a.createElement("div",{className:"flex"},i.a.createElement("div",{className:"flex_item_seven sales_header"},"Sales Turnover"),i.a.createElement("div",{className:"dots"},i.a.createElement("img",{src:t,alt:"dots"}))),i.a.createElement("div",{className:"flex"},i.a.createElement("div",{className:"details"},i.a.createElement("div",{className:"sales_money"},"Rp 3,600,000"),i.a.createElement("div",{className:"sales_percent"},i.a.createElement("span",{className:"percent"},i.a.createElement(n,{icon:s})," 13.8%")," last period in products sold")),i.a.createElement("div",{className:"cart_icon"},i.a.createElement("img",{src:a,alt:"cart icon"}))))}),N=a(62),_=(a(171),function(e){var t=e.data,a=e.dots;return i.a.createElement("div",{className:"chart_container"},i.a.createElement("div",{className:"flex"},i.a.createElement("div",{className:"chart_header flex_item_nine"},"Average Purchase Value"),i.a.createElement("div",{className:"dots"},i.a.createElement("img",{src:a,alt:"dots"}))),i.a.createElement(N.a,{data:t,options:{legend:{display:!1}}}))}),A=a(3),b=a(2),w=(a(174),function(e){var t=e.filter,a=e.triggerPeriodModal;return i.a.createElement("div",{className:"flex_item_three"},i.a.createElement("div",{className:"flex period_container",onClick:a},i.a.createElement("div",{className:"period_item"},i.a.createElement(A.a,{icon:b.c})),i.a.createElement("div",{className:"period_item"},"Period"),i.a.createElement("div",{className:"period_item"},t),i.a.createElement("div",{className:"period_item"},i.a.createElement(A.a,{icon:b.d}))))}),M=a(64),x=(a(181),a(182),function(e){function t(){var e,a;Object(l.a)(this,t);for(var s=arguments.length,i=new Array(s),n=0;n<s;n++)i[n]=arguments[n];return(a=Object(o.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(i)))).state={firstDay:void 0,lastDay:void 0,selectedOption:"",showWarning:!1},a.handleDayClick=function(e,t){var s=t.selected;if(!t.disabled){if(s&&a.setState({firstDay:void 0,lastDay:void 0,selectedOption:""}),a.state.firstDay)return a.state.lastDay?void 0:(a.setState({lastDay:e}),void a.setHighlightedOption());a.setState({firstDay:e})}},a.onSelectOption=function(e){var t=e.target.id;if(a.state.selectedOption!==t)switch(a.setState({selectedOption:t}),t){case"yesterday":a.setState({firstDay:a.getYesterday(),lastDay:a.getYesterday()});break;case"lastSevenDays":a.setState({firstDay:a.getLastWeek(),lastDay:a.getYesterday()});break;case"lastThirtyDays":a.setState({firstDay:a.getLastMonth(),lastDay:a.getYesterday()});break;case"thisMonth":a.setState({firstDay:a.getThisMonth(),lastDay:a.getYesterday()})}else a.setState({selectedOption:"",firstDay:void 0,lastDay:void 0})},a.setFilterPeriod=function(){if(a.state.firstDay&&a.state.lastDay){var e=["January","February","March","April","May","June","July","August","September","October","November","December"],t="".concat(a.state.firstDay.getDate()," ").concat(e[a.state.firstDay.getMonth()]," ").concat(a.state.firstDay.getFullYear()),s="".concat(a.state.lastDay.getDate()," ").concat(e[a.state.lastDay.getMonth()]," ").concat(a.state.lastDay.getFullYear()),i="".concat(t," - ").concat(s);a.props.onApplyFilter(i,a.state.firstDay,a.state.lastDay),a.props.triggerPeriodModal()}else a.setState({showWarning:!0})},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"getYesterday",value:function(){var e=new Date;return new Date(e.setDate(e.getDate()-1))}},{key:"getLastWeek",value:function(){var e=new Date;return new Date(e.setDate(e.getDate()-7))}},{key:"getLastMonth",value:function(){var e=new Date;return new Date(e.setDate(e.getDate()-30))}},{key:"getThisMonth",value:function(){var e=new Date;return new Date(e.getFullYear(),e.getMonth(),1)}},{key:"setHighlightedOption",value:function(){this.state.firstDay.getDate()!==this.getYesterday().getDate()?this.state.firstDay.getDate()!==this.getLastWeek().getDate()?this.state.firstDay.getDate()!==this.getLastMonth().getDate()?this.state.firstDay.getDate()!==this.getThisMonth().getDate()?this.setState({selectedOption:"custom"}):this.setState({selectedOption:"thisMonth"}):this.setState({selectedOption:"lastThirtyDays"}):this.setState({selectedOption:"lastSevenDays"}):this.setState({selectedOption:"yesterday"})}},{key:"renderedOptions",value:function(){return i.a.createElement("div",{className:"flex_item_three modal_sidebar"},i.a.createElement("div",{className:"sidebar_item first",id:"today"},"Today"),i.a.createElement("div",{className:"sidebar_item ".concat("yesterday"===this.state.selectedOption?"selected":""),onClick:this.onSelectOption,id:"yesterday"},"Yesterday"),i.a.createElement("div",{className:"sidebar_item ".concat("lastSevenDays"===this.state.selectedOption?"selected":""),onClick:this.onSelectOption,id:"lastSevenDays"},"Last 7 days"),i.a.createElement("div",{className:"sidebar_item ".concat("lastThirtyDays"===this.state.selectedOption?"selected":""),onClick:this.onSelectOption,id:"lastThirtyDays"},"Last 30 days"),i.a.createElement("div",{className:"sidebar_item ".concat("thisMonth"===this.state.selectedOption?"selected":""),onClick:this.onSelectOption,id:"thisMonth"},"This Month"),i.a.createElement("div",{className:"sidebar_item last ".concat("custom"===this.state.selectedOption?"selected":""),id:"custom"},"Custom"),i.a.createElement("div",{className:"sidebar_btn",onClick:this.setFilterPeriod},"Apply"))}},{key:"maximumMonth",value:function(){var e=new Date;return new Date(e.setMonth(e.getMonth()-6))}},{key:"setDisableDays",value:function(){var e=new Date;return new Date(e.setDate(e.getDate()-1))}},{key:"render",value:function(){return i.a.createElement("div",{className:"modal_container"},i.a.createElement("div",{className:"flex modal_header"},i.a.createElement("div",{className:"flex_item_one"},i.a.createElement(A.a,{icon:b.c})),i.a.createElement("div",{className:"flex_item_seven"},"Period"),i.a.createElement("div",{className:"flex_item_one times",onClick:this.props.triggerPeriodModal},i.a.createElement(A.a,{icon:b.g}))),i.a.createElement("div",{className:"flex modal_content"},this.renderedOptions(),i.a.createElement("div",{className:"flex_item_seven modal_calendar"},i.a.createElement(M.DayPicker,{numberOfMonths:2,onDayClick:this.handleDayClick,selectedDays:this.state.selectedDay,disabledDays:{after:this.setDisableDays()},modifiers:{selected:{from:this.state.firstDay,to:this.state.lastDay}},initialMonth:this.getLastMonth(),fromMonth:this.maximumMonth()}),this.state.showWarning&&i.a.createElement("div",{className:"warning"},"Please select a date"))))}}]),t}(i.a.Component)),k=(a(183),a(65)),O=a.n(k),S=a(13),C=a.n(S),H=a(66),P=a.n(H),F=a(67),Y=a.n(F),I=function(e){function t(){var e,a;Object(l.a)(this,t);for(var s=arguments.length,i=new Array(s),n=0;n<s;n++)i[n]=arguments[n];return(a=Object(o.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(i)))).state={products:[{id:1,name:"Minuman Hijau",price:"5000",sold:10},{id:2,name:"Minuman Merah",price:"3000",sold:4},{id:3,name:"Minuman Biru",price:"5200",sold:3},{id:4,name:"Minuman Putih",price:"8000",sold:5},{id:5,name:"Minuman Pink",price:"10000",sold:19}],competitors:[{id:1,name:"Minuman Hijau",price:"5000",sold:10},{id:2,name:"Minuman Merah",price:"3000",sold:4},{id:3,name:"Minuman Biru",price:"5200",sold:3},{id:4,name:"Minuman Putih",price:"8000",sold:5},{id:5,name:"Minuman Pink",price:"10000",sold:19}],productsY:[{id:1,name:"HausHaus Hijau",price:"5000",sold:10},{id:2,name:"HausHaus Merah",price:"3000",sold:4},{id:3,name:"HausHaus Biru",price:"5200",sold:3},{id:4,name:"HausHaus Putih",price:"8000",sold:5},{id:5,name:"HausHaus Pink",price:"10000",sold:19}],competitorsY:[{id:1,name:"HausHaus Hijau",price:"5000",sold:10},{id:2,name:"HausHaus Merah",price:"3000",sold:4},{id:3,name:"HausHaus Biru",price:"5200",sold:3},{id:4,name:"HausHaus Putih",price:"8000",sold:5},{id:5,name:"HausHaus Pink",price:"10000",sold:19}],chartData:{labels:["Mon","Tue","Wed","Thur","Fri","Sat","Sun"],datasets:[{label:"",data:[25e4,45e4,15e4,3e5,34e4,2e5,7e5],backgroundColor:"#37B04C"}]},chartDataY:{labels:["Mon","Tue","Wed","Thur","Fri","Sat","Sun"],datasets:[{label:"",data:[5e5,5e5,5e5,3e5,3e5,2e5,7e5],backgroundColor:"#37B04C"}]},filter:"No filter applied",showYesterday:!1,showModal:!1},a.triggerPeriodModal=function(){a.setState({showModal:!a.state.showModal})},a.onApplyFilter=function(e,t,s){a.setState({filter:e,showYesterday:!a.state.showYesterday})},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"setChartData",value:function(){return this.state.showYesterday?this.state.chartDataY:this.state.chartData}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(v,{FontAwesomeIcon:A.a,faUserCircle:b.h,faSignOutAlt:b.f}),i.a.createElement("div",{className:"flex"},i.a.createElement("div",{className:""},i.a.createElement(f,{dashboardIcon:Y.a,FontAwesomeIcon:A.a,faBars:b.b})),i.a.createElement("div",{className:"flex_item_nine content"},this.state.showModal&&i.a.createElement("div",{className:"modal_bg",onClick:this.triggerPeriodModal}),this.state.showModal&&i.a.createElement(x,{onApplyFilter:this.onApplyFilter,triggerPeriodModal:this.triggerPeriodModal}),i.a.createElement("div",{className:"flex header_container"},i.a.createElement("div",{className:"header_app flex_item_seven"},"Dashboard"),i.a.createElement(w,{FontAwesomeIcon:A.a,faChevronDown:b.d,filter:this.state.filter,triggerPeriodModal:this.triggerPeriodModal})),i.a.createElement("div",{className:"flex green_menu"},i.a.createElement("div",{className:"flex_item_seven green_menu_header"},"Market Insights"),i.a.createElement("div",{className:"flex green_menu_content"},i.a.createElement("div",{className:"content_item"},i.a.createElement("img",{src:O.a,alt:"bulb icon"})),i.a.createElement("div",{className:"content_item"},"Click Here for Help"),i.a.createElement("div",{className:"content_item"},i.a.createElement(A.a,{icon:b.e})))),i.a.createElement(D,{dots:C.a,faArrowDown:b.a,FontAwesomeIcon:A.a,cart:P.a}),i.a.createElement("div",{className:"flex"},i.a.createElement("div",{className:"flex_item_five"},i.a.createElement(_,{data:this.setChartData(),dots:C.a})),i.a.createElement("div",{className:"flex_item_five"},i.a.createElement("div",{className:"flex"},i.a.createElement("div",{className:"flex_item_five"},i.a.createElement(g,{products:this.state.showYesterday?this.state.productsY:this.state.products,dots:C.a})),i.a.createElement("div",{className:"flex_item_five"},i.a.createElement(y,{competitors:this.state.showYesterday?this.state.competitorsY:this.state.competitors,dots:C.a}))))))))}}]),t}(i.a.Component);r.a.render(i.a.createElement(I,null),document.querySelector("#root"))},27:function(e,t,a){e.exports=a.p+"static/media/minuman.75511e53.jpg"},40:function(e,t,a){e.exports=a.p+"static/media/advo_logo.08d5a9c7.jpg"},65:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAABHNCSVQICAgIfAhkiAAAAbJJREFUOI2llDtoFFEUhr+zZiObgItFglHEKAiaUguDpYhIgm2IqIWdARU7LSzsBEurGFDQoCCkFgsrEyR2ltFG8AHRVEEMRJTPwqOsy8zsoLe65/6P8597h4EaSz2nXqrD7atDAjaAZh1ioyDNjDqlhtpSTwK7ge3qKXVb8ibVqz0NgQfAMWAP8Ay4AKwCb4HTwJI6CpwAZuukRt2vLqqHC7AD6pJ6qJZZiubUgxX4iDpfhBXdYQAfgDcVPVeBdlHTP6+sngHGgMfAckT8KHOLCNUV4Ig6BXyKiNm/DIEnwGKme9fR6A5wFAjgVUScTagJfAHuApuls6hb1QW1P+sh9bp6Sx3Os4b6VN1VOnLHOJvqGrAPWImINfU+0B8Rn5O2I8f8WJqsK+WYuqy2sp5Qp3PfVF+o40XaKDCbzHQNYCQirql7M+Fr9TLQBt4DX4GFiLAsWZ96T21nPa8OqlfUG7l/lNjgb7wyYVeDh8A60EruBjAaERNlml5/m2/8+pw61/kqQS9Dge8FZ/9suAWY7jIZ+B/Dl8AQcDPrGWBnlaDXowwAF4HjyX0O3I6I9TLNTw92BrLd8cUhAAAAAElFTkSuQmCC"},66:function(e,t,a){e.exports=a.p+"static/media/cart.da5d8ae5.svg"},67:function(e,t,a){e.exports=a.p+"static/media/dashboard_icon.9bb0ae89.svg"},68:function(e,t,a){e.exports=a(184)},73:function(e,t,a){},74:function(e,t,a){},75:function(e,t,a){},76:function(e,t,a){},77:function(e,t,a){}},[[68,1,2]]]);
//# sourceMappingURL=main.c594fcc3.chunk.js.map