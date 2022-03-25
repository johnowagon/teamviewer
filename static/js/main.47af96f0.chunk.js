(this.webpackJsonpnhl=this.webpackJsonpnhl||[]).push([[0],{20:function(e,t,c){},52:function(e,t,c){},91:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c.n(n),i=c(25),s=c.n(i),r=(c(52),c(3)),j=c(10),d=c.n(j),o=c(8),l=c.n(o),h=c(12),b=c(11),u=c.n(b),O=(c(20),c(44)),x=c(98),p=c(102),f=c(97),m=c(19),g=c(99),v=c(100),w=c(1);function S(e){var t=e.game.teams.home,c=e.game.teams.away,a=Object(n.useState)(!1),i=Object(r.a)(a,2),s=(i[0],i[1],d.a.find((function(e){if(e.id===t.team.id)return!0}))),j=d.a.find((function(e){if(e.id===c.team.id)return!0})),o=new Date,l=new Date(e.game.gameDate),h=l.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"});return l=l.toLocaleDateString("en-US"),Object(w.jsx)(p.a,{children:Object(w.jsxs)(f.a,{withBorder:!0,children:[Object(w.jsx)(m.a,{color:"dimmed",size:"xs",align:"center",children:"Score"}),Object(w.jsxs)(g.a,{direction:"row",position:"apart",children:[Object(w.jsx)(v.a,{src:s.logo,height:60,width:100,fit:"contain"}),Object(w.jsxs)(g.a,{direction:"column",position:"center",spacing:"xs",children:[Object(w.jsxs)(m.a,{size:"xl",children:[t.score," - ",c.score]}),"Scheduled"===e.game.status.detailedState?Object(w.jsx)(m.a,{size:"xs",children:h}):Object(w.jsx)(m.a,{size:"xs",children:e.game.status.detailedState}),l===o.toLocaleDateString("en-US")?null:Object(w.jsx)(m.a,{size:"xs",children:l})]}),Object(w.jsx)(v.a,{src:j.logo,height:60,width:100,fit:"contain"})]}),Object(w.jsxs)(g.a,{position:"apart",children:[Object(w.jsx)(m.a,{color:"dimmed",size:"xs",align:"left",children:"Home"}),Object(w.jsx)(m.a,{color:"dimmed",size:"xs",align:"right",children:"Away"})]})]})})}function y(e){var t,c=Object(n.useState)(!1),a=Object(r.a)(c,2),i=a[0],s=a[1],j=Object(n.useState)(),d=Object(r.a)(j,2),o=d[0],b=d[1],p=new Date,f=new Date(p.getFullYear(),p.getMonth(),p.getDate()-7).toLocaleDateString("sv-SE");return p=p.toLocaleDateString("sv-SE"),Object(n.useEffect)((function(){function c(){return(c=Object(h.a)(l.a.mark((function c(){return l.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:u.a.get("https://statsapi.web.nhl.com/api/v1/schedule?startDate=".concat(f,"&endDate=").concat(p,"&teamId=").concat(e.id)).then((function(e){t=e.data.dates,b(t),s(!0)}));case 1:case"end":return c.stop()}}),c)})))).apply(this,arguments)}s(!1),function(){c.apply(this,arguments)}()}),[e.id]),Object(w.jsx)("div",{className:"schedule-container",children:i?o.map((function(e){return e.games.map((function(e){return Object(w.jsx)(S,{game:e})}))})):Object(w.jsx)(O.a,{children:Object(w.jsx)(x.a,{})})})}var D=c(47);function k(e){var t=e.team,c={};return c=14===t.id?{background:"rgb(0, 70, 184)"}:{background:t.colors[0]},Object(w.jsx)("div",{className:"logo",style:c,onClick:function(){return e.changeId(t.id)},children:Object(w.jsx)(D.a,{style:c,children:Object(w.jsx)(v.a,{height:30,fit:"contain",src:t.logo,alt:t.name})})})}c(77);var C=c(45),I=c.n(C),L=c(94),z=c(4),P=c(107),T=c(96),A=c(103),E=c(104);function N(e){var t,c=Object(n.useState)(!1),a=Object(r.a)(c,2),i=a[0],s=a[1],j=Object(n.useState)(),d=Object(r.a)(j,2),o=d[0],b=d[1];return Object(n.useEffect)((function(){function c(){return(c=Object(h.a)(l.a.mark((function c(){return l.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:u.a.get("https://statsapi.web.nhl.com/api/v1/teams/".concat(e.id,"?expand=team.roster")).then((function(e){t=e.data.teams[0].roster.roster,b(t),s(!0)}));case 1:case"end":return c.stop()}}),c)})))).apply(this,arguments)}s(!1),function(){c.apply(this,arguments)}()}),[e.id]),Object(w.jsx)("div",{className:"table-container",children:Object(w.jsxs)(A.a,{striped:!0,horizontalSpacing:-1,verticalSpacing:"xs",children:[Object(w.jsx)("thead",{children:Object(w.jsxs)("tr",{children:[Object(w.jsx)("th",{children:"#"}),Object(w.jsx)("th",{children:"Name"}),Object(w.jsx)("th",{children:"Position"})]})}),Object(w.jsx)("tbody",{children:i?o.map((function(t,c){return Object(w.jsxs)("tr",{children:[Object(w.jsx)("td",{children:t.jerseyNumber}),Object(w.jsx)("td",{children:Object(w.jsx)(E.a,{onClick:function(){return e.changePlayer([t.person.id,t.person.fullName,t.position.name])},children:t.person.fullName})}),Object(w.jsx)("td",{children:t.position.name})]},c)})):Object(w.jsx)("tr",{children:Object(w.jsx)("td",{children:Object(w.jsx)(O.a,{children:Object(w.jsx)(x.a,{})})})})})]})})}var F=c(105),G=c(95);function B(){var e=Object(n.useState)(!1),t=Object(r.a)(e,2),c=t[0],a=t[1],i=Object(n.useState)(),s=Object(r.a)(i,2),j=s[0],d=s[1],o=new Date;new Date(o.getFullYear(),o.getMonth(),o.getDate()-7).toLocaleDateString("sv-SE");o=o.toLocaleDateString("sv-SE");var b,f=new Date;function m(){var e="Todays schedule, ".concat(f.toLocaleDateString("en-us"));return Object(w.jsx)(F.a,{my:"md",label:e,labelPosition:"left"})}return Object(n.useEffect)((function(){function e(){return(e=Object(h.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:u.a.get("https://statsapi.web.nhl.com/api/v1/schedule").then((function(e){b=e.data.dates,d(b),a(!0)}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}a(!1),function(){e.apply(this,arguments)}()}),[]),Object(w.jsx)(p.a,{fluid:!0,children:Object(w.jsxs)(D.a,{shadow:"md",p:"xl",children:[Object(w.jsx)("h1",{children:"NHL Team Viewer"}),Object(w.jsx)(G.a,{children:Object(w.jsx)(G.a.Item,{label:Object(w.jsx)(m,{}),children:Object(w.jsx)(T.a,{children:c?j[0].games.map((function(e,t){return Object(w.jsx)(S,{span:1,game:e},t)})):Object(w.jsx)(O.a,{children:Object(w.jsx)(x.a,{})})})})})]})})}var M=c(106);function Y(e){var t=d.a.find((function(t){if(t.id===e.id)return!0}));return Object(w.jsx)(v.a,{src:t.logo,width:e.width,height:e.height,fit:e.fit})}function U(e){var t=Object(n.useState)(0),c=Object(r.a)(t,2),a=c[0],i=c[1],s=Object(n.useState)(),j=Object(r.a)(s,2),d=j[0],o=j[1],b=Object(n.useState)(!1),f=Object(r.a)(b,2),g=f[0],S=f[1],y=e.playerId[0];return u.a.defaults.withCredentials=!0,Object(n.useEffect)((function(){function t(){return(t=Object(h.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return S(!1),e.next=3,u.a.get("http://nhl.bamcontent.com/images/headshots/current/168x168/".concat(y,".jpg")).then((function(e){i(e.config.url)}));case 3:return e.next=5,u.a.get("https://statsapi.web.nhl.com/api/v1/people/".concat(y,"/stats?stats=yearByYear")).then((function(e){o(e.data.stats[0].splits),S(!0)}));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}e.playerId[0]&&function(){t.apply(this,arguments)}()}),[e.playerId]),Object(w.jsx)(p.a,{fluid:!0,children:Object(w.jsx)(D.a,{shadow:"md",p:"sm",children:0===a?Object(w.jsx)(M.a,{children:"\u2190Select a player over there"}):g&&d?Object(w.jsxs)("div",{children:[Object(w.jsx)(m.a,{size:"lg",weight:500,underline:!0,children:e.playerId[1]}),Object(w.jsx)(v.a,{src:a,width:120,height:150}),Object(w.jsxs)(A.a,{striped:!0,horizontalSpacing:-1,verticalSpacing:"xs",children:[Object(w.jsx)("thead",{children:"Goalie"===e.playerId[2]?Object(w.jsxs)("tr",{children:[Object(w.jsx)("th",{children:"Year"}),Object(w.jsx)("th",{children:"Team"}),Object(w.jsx)("th",{children:"Games"}),Object(w.jsx)("th",{children:"Wins"}),Object(w.jsx)("th",{children:"GAA"}),Object(w.jsx)("th",{children:"Sv%"}),Object(w.jsx)("th",{children:"Shutouts"})]}):Object(w.jsxs)("tr",{children:[Object(w.jsx)("th",{children:"Year"}),Object(w.jsx)("th",{children:"Team"}),Object(w.jsx)("th",{children:"Games"}),Object(w.jsx)("th",{children:"Goals"}),Object(w.jsx)("th",{children:"Assists"}),Object(w.jsx)("th",{children:"Points"}),Object(w.jsx)("th",{children:"S Pct"})]})}),Object(w.jsx)("tbody",{children:"Goalie"===e.playerId[2]?d.map((function(e,t){if(133===e.league.id)return Object(w.jsxs)("tr",{children:[Object(w.jsx)("td",{children:e.season}),Object(w.jsx)("td",{children:Object(w.jsx)(Y,{id:e.team.id,height:20,width:20,fit:"contain"})}),Object(w.jsx)("td",{children:e.stat.games}),Object(w.jsx)("td",{children:e.stat.wins}),Object(w.jsx)("td",{children:Math.round(100*e.stat.goalAgainstAverage)/100}),Object(w.jsx)("td",{children:Math.round(1e3*e.stat.savePercentage)/1e3}),Object(w.jsx)("td",{children:e.stat.shutouts})]},t)})):d.map((function(e,t){if(133===e.league.id)return Object(w.jsxs)("tr",{children:[Object(w.jsx)("td",{children:e.season}),Object(w.jsx)("td",{children:Object(w.jsx)(Y,{id:e.team.id,height:20,width:20,fit:"contain"})}),Object(w.jsx)("td",{children:e.stat.games}),Object(w.jsx)("td",{children:e.stat.goals}),Object(w.jsx)("td",{children:e.stat.assists}),Object(w.jsx)("td",{children:e.stat.points}),Object(w.jsx)("td",{children:e.stat.shotPct})]},t)}))})]})]}):Object(w.jsx)(O.a,{children:Object(w.jsx)(x.a,{})})})})}function H(){for(var e=Object(n.useState)(21),t=Object(r.a)(e,2),c=t[0],a=t[1],i=Object(n.useState)([]),s=Object(r.a)(i,2),j=s[0],o=s[1],l=d.a.find((function(e){if(e.id===c)return!0})).name.toLowerCase(),h=l.split(" "),b=0;b<h.length;b++)h[b]=h[b].charAt(0).toUpperCase()+h[b].slice(1);l=h.join(" ");return Object(w.jsxs)("div",{children:[Object(w.jsx)(I.a,{swipeable:!1,draggable:!0,showDots:!1,responsive:{desktop:{breakpoint:{max:6e3,min:1024},items:20},tablet:{breakpoint:{max:1024,min:464},items:10,slidesToSlide:2},mobile:{breakpoint:{max:464,min:0},items:20,slidesToSlide:1}},ssr:!0,infinite:!0,keyBoardControl:!0,transitionDuration:1,containerClass:"carousel-container",removeArrowOnDeviceType:["tablet","mobile"],dotListClass:"custom-dot-list-style",itemClass:"carousel-item-padding-40-px",children:d.a.map((function(e,t){if(e.isActive)return Object(w.jsx)("div",{children:Object(w.jsx)(k,{team:e,id:e.id,changeId:function(e){return a(e)}})},"{team.id}")}))}),Object(w.jsx)(B,{}),Object(w.jsx)(L.a,{h:"md"}),Object(w.jsx)(z.a,{children:Object(w.jsxs)(g.a,{direction:"row",children:[Object(w.jsx)(Y,{id:c,width:200,height:200,fit:"contain"}),Object(w.jsx)(P.a,{children:l})]})}),Object(w.jsx)(L.a,{h:"md"}),Object(w.jsxs)(T.a,{columns:3,align:"space-evenly",gutter:-1,children:[Object(w.jsx)(T.a.Col,{span:1,children:Object(w.jsx)(N,{id:c,changePlayer:function(e){return o(e)}})}),Object(w.jsx)(T.a.Col,{span:1,children:Object(w.jsx)(y,{id:c})}),Object(w.jsx)(T.a.Col,{span:1,children:Object(w.jsx)(U,{playerId:j})})]})]})}var J=function(){return Object(w.jsx)("div",{children:Object(w.jsx)(H,{})})},V=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,108)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,i=t.getLCP,s=t.getTTFB;c(e),n(e),a(e),i(e),s(e)}))};c(90);s.a.render(Object(w.jsx)(a.a.StrictMode,{children:Object(w.jsx)(J,{})}),document.getElementById("root")),V()}},[[91,1,2]]]);
//# sourceMappingURL=main.47af96f0.chunk.js.map