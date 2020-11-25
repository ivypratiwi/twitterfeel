(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{225:function(e,n,t){"use strict";t.r(n);var a=t(1),r=t.n(a),i=t(25),l=t.n(i),c=t(23),o=t(8),s=t(6),m=t(12),u=t.n(m),d=t(20),p=t(14),g=t(230),f=t(92),h=t(227),v=t(232),E=t(228),b=t(7);function x(){var e=Object(s.a)(["\npadding:0px;\n.alert{\n    color:red;\n    padding:0px;\n}\n"]);return x=function(){return e},e}function w(e){var n=e.text;return r.a.createElement(y,null,r.a.createElement("p",{className:"alert"},n))}var y=b.a.div(x());function k(){var e=Object(s.a)(["\n.home-container{\n    width:55%;\n}\n.form-control-lg {\n    font-size: 0.8rem;\n}\n@media only screen and (max-width: 568px) {\n    .home-container{\n        width:100%;\n    }\n}\n"]);return k=function(){return e},e}function j(e){var n=e.home,t=e.onSubmit,i=Object(a.useState)(""),l=Object(p.a)(i,2),c=l[0],o=l[1],s=Object(a.useState)(""),m=Object(p.a)(s,2),u=m[0],d=m[1],g=function(){t(c)};return r.a.createElement(N,null,r.a.createElement(h.a,{className:n?"home-container":"analysis-container"},r.a.createElement(f.a,{md:8},r.a.createElement(v.a.Group,null,r.a.createElement(v.a.Control,{required:!0,size:"lg",type:"text",placeholder:"Enter a Twitter Username ex: BarackObama",name:"search",onChange:function(e){var n=e.target.value;/[^\w]/.test(n)?d("There is no special characters in Twitter username. Please enter a correct username."):n.length>15?d("Please enter a Twitter username with less than 15 characters length."):d(null),o(n)},onKeyPress:function(e){13!==e.which||u||g()}}))),r.a.createElement(f.a,{md:3,className:"button-search"},r.a.createElement(E.a,{className:"float-right",size:"md",variant:"info",id:"search-button",disabled:null!=u,onClick:g},"Search")),r.a.createElement(f.a,{md:11},u&&r.a.createElement(w,{text:u}))))}var N=b.a.div(k()),O=t(229);function S(){var e=Object(s.a)(["\n.loading-text{\n    color:#08545E;\n    animation: blink-animation 1.5s steps(5, start) infinite;\n    -webkit-animation: blink-animation 1.5s steps(5, start) infinite;\n}\n\n@keyframes blink-animation {\n    to {\n      visibility: hidden;\n    }\n  }\n  @-webkit-keyframes blink-animation {\n    to {\n      visibility: hidden;\n    }\n  }\n  @media only screen and (max-width: 568px) {\n        background-color:white;\n        display:inline-block;\n        .loading-text{\n            font-size:80%;\n        }\n  }\n"]);return S=function(){return e},e}function z(e){var n=e.text;return r.a.createElement(T,null,r.a.createElement(O.a,{animation:"border",variant:"info",size:"sm"}),r.a.createElement("span",{className:"loading-text"},"  ",n))}var T=b.a.div(S()),F=t(93),P=t.n(F);function I(e,n){return P.a.post("/".concat(e),n).then((function(e){return{result:e.data}}))}var D=t(40),C=t.n(D);function L(){var e=Object(s.a)([" \n    .jumbo{\n        background-image: url(",");\n        background-attachment: fixed;\n        background-position: right;\n        background-repeat: no-repeat;\n        background-size: cover;\n        margin-bottom:0px;\n    }\n    .vertical-center {\n        min-height: 100vh;\n        display: flex;\n        align-items: top;\n    }\n    .col-heading{\n        margin: 0;\n        position: absolute;\n        top: 35%;\n        padding:3%;\n    }\n    h1, h4{\n        color:#08545E;\n        background-color:whitesmoke;\n        display:inline-block;\n    }\n    h4{\n        margin-bottom:1.2%;\n    }\n    h1{\n        margin-bottom:2%;\n    }\n    @media only screen and (max-width: 1366px) {\n        h4{\n            font-size:120%;\n        }\n        h1{\n            font-size:200%;\n        }\n    }\n    @media only screen and (max-width: 1024px) {\n        h4{\n            margin-bottom:2%;\n        }\n        h1{\n            margin-bottom:2.5%;\n        }\n        .col-heading{\n            top: 10%;\n        }\n    }\n    @media only screen and (max-width: 568px) {\n        .col-heading{\n            top: 30%;\n        }\n        h4{\n            margin-bottom:3%;\n            font-size:90%;\n        }\n        h1{\n            margin-bottom:3%;\n            font-size:120%;\n        }\n        h1, h4{\n            color:#08545E;\n            background-color:whitesmoke;\n            display:list-item;\n        }\n    }\n"]);return L=function(){return e},e}function M(){var e=Object(o.f)(),n=Object(a.useState)(!1),t=Object(p.a)(n,2),i=t[0],l=t[1],c=Object(a.useState)(""),s=Object(p.a)(c,2),m=s[0],h=s[1];function v(e){return E.apply(this,arguments)}function E(){return(E=Object(d.a)(u.a.mark((function n(t){var a,r;return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,a={twitterId:"0"},n.next=4,I(t,a);case 4:(r=n.sent).result.usernameError?h("No username found. Please enter a correct username"):r.result.serverError?h("Error Fetching Data from Server"):e.push({pathname:"/analysis/".concat(t),state:{detail:r.result}}),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),h("Error fetching data from server.");case 11:case"end":return n.stop()}}),n,null,[[0,8]])})))).apply(this,arguments)}return r.a.createElement(A,null,r.a.createElement(g.a,{fluid:!0,className:"jumbo vertical-center"},r.a.createElement(f.a,{sm:12,className:"col-heading"},r.a.createElement("h1",null,"How Positive are your Tweets?"),r.a.createElement("br",null),r.a.createElement("h4",null,"Just enter a Twitter username and you will find their tweets information easily."),r.a.createElement(j,{home:!0,onSubmit:function(){var e=Object(d.a)(u.a.mark((function e(n){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:h(!1),l(!0),v(n);case 3:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()}),m&&r.a.createElement(w,{text:m}),i&&!m&&r.a.createElement(z,{text:"Please wait while we are generating the data"}))))}var A=b.a.div(L(),C.a),B=t(234),J=t(30),H=t(0),U=t(46);function _(){var e=Object(s.a)(["\n.div-sentiment{\n    vertical-align: top;\n    display: inline-block;\n    text-align: center;\n    width: 110px;\n\n}\n.caption {\n    display: block;\n    color:white;\n}\n"]);return _=function(){return e},e}function q(e){var n=e.sentiment,t=e.userprofile;return r.a.createElement(G,null,r.a.createElement(H.b.Provider,{value:t?{color:"#ffcc4d",size:"40px"}:{color:"#ffcc4d",size:"28px"}},(void 0!==n.positive||"positive"===n)&&r.a.createElement(f.a,{className:"div-sentiment"},r.a.createElement(U.a,null),void 0!==n.positive&&r.a.createElement("span",{className:"caption"},Math.round(100*n.positive),"%")),(void 0!==n.neutral||"neutral"===n)&&r.a.createElement(f.a,{className:"div-sentiment"},r.a.createElement(U.b,null),void 0!==n.neutral&&r.a.createElement("span",{className:"caption"},Math.round(100*n.neutral),"%")),(void 0!==n.negative||"negative"===n)&&r.a.createElement(f.a,{className:"div-sentiment"},r.a.createElement(U.c,null),void 0!==n.negative&&r.a.createElement("span",{className:"caption"},Math.round(100*n.negative),"%"))))}var G=b.a.div(_()),K=t(231),R=t(41);function Y(){var e=Object(s.a)(["\n    margin-top:1%;\n    .row{\n        margin-right:0px;\n        margin-left:0px\n    }\n    .user-div{\n        background-color:#094067;\n        padding:2%;\n    }\n    .col-text{\n        color:white;\n    }\n    .col-img{\n        display:flex;\n        align-items:center;\n        justify-content:center;\n    }\n    .user-img{\n        width:50%\n    }\n    .col-sentiment{\n        color:white;\n        display:flex;\n        align-items:center;\n        justify-content:center;\n    }\n    p{\n        font-size:80%;\n    }\n\n    @media only screen and (max-width: 768px) {\n        .user-div{\n            padding:2%;\n        }\n        .user-img{\n            width:20%\n        }\n        .col-text{\n            text-align:center;\n        }\n        .col-sentiment{\n            text-align:center;\n        }\n    }\n"]);return Y=function(){return e},e}function Q(e){var n=e.user,t=e.allsentiment;return r.a.createElement(V,null,n&&t&&r.a.createElement(h.a,{className:"user-div container-fluid"},r.a.createElement(f.a,{lg:2,className:"col-img"},r.a.createElement(K.a,{src:n.img,roundedCircle:!0,className:"user-img"})),r.a.createElement(f.a,{lg:4,className:"col-text"},r.a.createElement("h4",null,n.name),r.a.createElement("p",null,"@",n.screen_name),r.a.createElement("p",null,n.description),n.location&&r.a.createElement("p",null,r.a.createElement(R.b,null)," ",n.location)),r.a.createElement(f.a,{lg:2,className:"col-sentiment"},r.a.createElement("h5",null,"Overall Sentiment:")),r.a.createElement(f.a,{lg:4,className:"col-sentiment"},r.a.createElement(q,{sentiment:t,userprofile:!0}))))}var V=b.a.div(Y());function W(){var e=Object(s.a)(["\n    .row{\n        margin-right:0px;\n        margin-left:0px\n    }\n    h2{\n        font-color:#094067\n    }\n    .div-loading{\n        padding-left:2.2%;\n    }\n    .error-div{\n        margin-left:2%;\n        padding:0%;\n    }\n"]);return W=function(){return e},e}function X(){var e=Object(a.useState)(!1),n=Object(p.a)(e,2),t=n[0],i=n[1],l=Object(a.useState)(""),c=Object(p.a)(l,2),s=c[0],m=c[1],g=Object(o.f)();function v(e){return E.apply(this,arguments)}function E(){return(E=Object(d.a)(u.a.mark((function e(n){var t,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t={twitterId:"0"},e.next=4,I(n,t);case 4:(a=e.sent).result.usernameError?m("No username found. Please enter a correct username"):(i(!1),g.push({pathname:"/analysis/".concat(n),state:{detail:a.result}})),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),m("Error fetching data from server.");case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}return r.a.createElement(Z,null,r.a.createElement(h.a,null,r.a.createElement(f.a,{md:6},r.a.createElement("h2",null,"Analysis Result")),r.a.createElement(f.a,{md:6},r.a.createElement(j,{onSubmit:function(){var e=Object(d.a)(u.a.mark((function e(n){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:m(!1),i(!0),v(n);case 3:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()}),t&&!s&&r.a.createElement("div",{className:"div-loading"},r.a.createElement(z,{text:"loading..."})),s&&r.a.createElement("div",{className:"error-div"},r.a.createElement(w,{text:s})))))}var Z=b.a.div(W());function $(){var e=Object(s.a)(["\n    .col-img{\n        vertical-align: top;\n        display: inline-block;\n        text-align: left;\n    }\n    .user-img{\n        width:85%;\n    }\n    .row-tweet{\n        background-color:white;\n        padding:2%;\n        margin:2%;\n        border-radius: 20px;\n        font-size:70%;\n        text-align:justify;\n    }\n    p{\n        font-size:70%;\n    }\n    .user-name{\n        font-size:85%;\n    }\n\n    @media only screen and (max-width: 768px) {\n        .user-img{\n            width:30%;\n        }\n    }\n\n    @media only screen and (max-width: 586px) {\n        .user-img{\n            width:15%;\n        }\n        .col-emoji{\n            text-align:right;\n        }\n    }\n\n"]);return $=function(){return e},e}function ee(e){var n=e.user,t=e.tweet;return r.a.createElement(ne,null,n&&t&&r.a.createElement(h.a,{className:"row-tweet"},r.a.createElement(f.a,{sm:3,className:"col-img"},r.a.createElement(K.a,{src:n.img,roundedCircle:!0,className:"user-img"}),r.a.createElement("span",{className:"user-name"},"@",n.screen_name),r.a.createElement("p",null,new Date(t.date).toLocaleDateString())),r.a.createElement(f.a,{sm:7},t.text),r.a.createElement(f.a,{sm:2,className:"col-emoji"},r.a.createElement(q,{sentiment:t.sentiment,userprofile:!1}))))}var ne=b.a.div($()),te=t(94);function ae(){var e=Object(s.a)(["\npadding:3%;\n.topic-title{\n    background-color:#D07777;\n    margin-bottom:0px;\n    padding:2%;\n    text-align:center;\n    color:#F6F6F6;\n}\n.cloud-word{\n    background-color:#F6F6F6;\n    height:300px;\n    padding:3%;\n    margin:0.1%;\n}\n\n"]);return ae=function(){return e},e}function re(e){var n=e.data,t=e.count;return n&&r.a.createElement(f.a,{lg:3,md:4},r.a.createElement(ie,null,r.a.createElement("h5",{className:"topic-title"},"Topic ",t+1),r.a.createElement(h.a,{className:"cloud-word"},r.a.createElement(f.a,{sm:2},"Sentiment: "),r.a.createElement(f.a,{sm:8},r.a.createElement(q,{sentiment:n.sentiment})),r.a.createElement(f.a,{sm:12},r.a.createElement(te.TagCloud,{minSize:13,maxSize:25,tags:n.words,colorOptions:{luminosity:"bright",format:"rgb"}})))))}var ie=b.a.div(ae()),le=t(95);function ce(e){var n=e.data;if(n){var t=[],a=[],i=[];Object.values(n[0]).forEach((function(e){t.push(e.positive),a.push(e.neutral),i.push(e.negative)}));var l={labels:Object.keys(n[0]).reverse(),datasets:[{label:"Positive",data:t.reverse(),backgroundColor:"#ff6386"},{label:"Neutral",data:a.reverse(),backgroundColor:"#4bc0c0"},{label:"Negative",data:i.reverse(),backgroundColor:"#ffce56"}]};return r.a.createElement(le.Bar,{data:l,options:{responsive:!0,title:{display:!0,text:"Monthly Tweets Sentiment",fontSize:20},legend:{position:"right"},scales:{xAxes:[{stacked:!0,scaleLabel:{display:!0,labelString:"Time"}}],yAxes:[{stacked:!0,scaleLabel:{display:!0,labelString:"Number of Tweets"}}]}}})}return null}function oe(){var e=Object(s.a)(["\n    padding:3%;\n    .container-analysis{\n        padding:0px;\n        margin-bottom:7%;\n    }\n    .col-tweets{\n        padding-top:2%;\n    }\n    .div-tweets{\n        padding:3%;\n        height:460px;!important\n    }\n    .overflow-auto{\n        background-color:#D8EEFE;!important\n    }\n    .title{\n        text-align:center;\n    }\n    .wordcloud-heading{\n        margin-top:2%;\n        padding:2% 1%;\n    }\n    .col-chart{\n        display:flex;\n        align-items:flex-end;\n        justify-content:center;\n    }\n\n    @media only screen and (min-width: 1450px) {\n        padding: 4% 6% 3% 6%;\n        .div-tweets{\n            height:620px;!important\n        }\n    }\n    \n    @media only screen and (max-width: 586px) {\n        padding:6%;\n        h3{\n            font-size: 120%\n        }\n        h5{\n            font-size: 100%;\n        }\n        .wordcloud-heading{\n            text-align:center;\n            margin-top:6%;\n        }\n        .col-tweets{\n            margin-top:6%;\n        }\n        .col-chart{\n            margin-top:8%;\n        }\n    }\n  \n"]);return oe=function(){return e},e}function se(e){var n,t=e.match,i=Object(a.useState)({}),l=Object(p.a)(i,2),c=l[0],s=l[1],m=Object(a.useState)(""),g=Object(p.a)(m,2),v=g[0],E=g[1],b=Object(o.g)();return Object(a.useEffect)((function(){b.state.detail&&(E(""),s(b.state.detail));var e=setInterval(Object(d.a)(u.a.mark((function e(){var n,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n={twitterId:sessionStorage.getItem("TwitterID")},e.next=4,I(t.params.account,n);case 4:(a=e.sent).result.serverError&&E("Error Fetching Data from Server"),a.result&&!a.result.serverError&&(E(""),s(a.result)),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),E("Unable to connect to the server. Please try again later");case 12:case"end":return e.stop()}}),e,null,[[0,9]])}))),6e4);return function(){return clearInterval(e)}}),[t.params.account,b.state.detail]),Object(a.useEffect)((function(){return sessionStorage.setItem("TwitterID",(null===c||void 0===c?void 0:c.tweets)&&c.tweets[0].id)}),[c]),r.a.createElement(me,null,c&&r.a.createElement(h.a,{className:"container-analysis"},r.a.createElement(f.a,{xs:12},r.a.createElement(X,null)),v&&r.a.createElement(f.a,{xs:12}," ",r.a.createElement(B.a,{variant:"danger"},r.a.createElement(w,{text:v}))),r.a.createElement(f.a,{xs:12},r.a.createElement(Q,{user:c.user,allsentiment:c.allsentiment})),r.a.createElement(f.a,{lg:4,className:"col-tweets"},r.a.createElement("div",{className:"div-tweet-heading"},r.a.createElement("h5",{className:"title"},r.a.createElement(J.a,{color:"#3da9fc"}),"  Live Tweets")),r.a.createElement("div",{className:"overflow-auto div-tweets"},c.tweets&&c.tweets.map((function(e){return r.a.createElement(ee,{user:c.user,tweet:e,key:e.id})})))),r.a.createElement(f.a,{lg:8,className:"col-chart"},c.monthlySentiment&&r.a.createElement(ce,{data:c.monthlySentiment})),r.a.createElement(f.a,{sm:12,className:"wordcloud-heading"},c.topics&&r.a.createElement("h3",null,"Top Topics from Latest Tweets  ",r.a.createElement(J.a,{color:"#3da9fc"}))),r.a.createElement(f.a,{lg:12},r.a.createElement(h.a,null,null===(n=c.topics)||void 0===n?void 0:n.map((function(e,n){return r.a.createElement(re,{data:e,count:n,key:e.title})}))))))}var me=b.a.div(oe()),ue=t(233),de=t(98),pe=t.n(de);function ge(){return r.a.createElement(ue.a,null,r.a.createElement(ue.a.Brand,{href:"/"},r.a.createElement("img",{alt:"",src:pe.a,width:"30",height:"25",className:"d-inline-block align-top"})," ","TwitterFeel"))}function fe(){var e=Object(s.a)([" \n    .jumbo{\n        background-image: url(",");\n        background-attachment: fixed;\n        background-position: right;\n        background-repeat: no-repeat;\n        background-size: cover;\n        margin-bottom:0px;\n    }\n    .vertical-center {\n        min-height: 100vh;\n        display: flex;\n        align-items: top;\n    }\n    .col-text{\n        margin: 0;\n        position: absolute;\n        top: 45%;\n    }\n\n\n    @media only screen and (max-width: 568px) {\n        h3{\n            margin-bottom:3%;\n            font-size:100%;\n        }\n    }\n"]);return fe=function(){return e},e}function he(){return r.a.createElement(ve,null,r.a.createElement(g.a,{fluid:!0,className:"jumbo vertical-center"},r.a.createElement(f.a,{sm:12,className:"col-text"},r.a.createElement("h3",null,"No site found. Please return to our ",r.a.createElement(c.b,{to:"/"},"Home Page ")))))}var ve=b.a.div(fe(),C.a);function Ee(){var e=Object(s.a)(["\n    text-align:center;\n    color:white;\n    background-color: #042330;\n    padding:0.5% 0 0.5% 0;\n    margin-top:0%;\n    p{\n        margin-bottom:0px;\n    }\n\n    @media (max-width: 576px) {\n        p{\n            font-size:80%;\n        }\n    }\n\n"]);return Ee=function(){return e},e}function be(){var e=(new Date).getFullYear();return r.a.createElement(xe,null,r.a.createElement("p",null,r.a.createElement(R.a,{color:"#ffffff"})," ",e," with Data From ",r.a.createElement(J.a,{color:"#3da9fc"})," API "))}var xe=b.a.div(Ee());var we=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(c.a,null,r.a.createElement(ge,null),r.a.createElement(o.c,null,r.a.createElement(o.a,{path:"/",exact:!0,component:M}),r.a.createElement(o.a,{path:"/analysis/:account",exact:!0,component:se}),r.a.createElement(o.a,{path:"*",component:he})),r.a.createElement(be,null)))};l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(we,null)),document.getElementById("root"))},40:function(e,n,t){e.exports=t.p+"static/media/wallpaper.e2de1f95.jpg"},98:function(e,n,t){e.exports=t.p+"static/media/logo.fb439bf5.jpg"},99:function(e,n,t){e.exports=t(225)}},[[99,1,2]]]);
//# sourceMappingURL=main.a5830e03.chunk.js.map