(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{173:function(e){e.exports=JSON.parse('[{"id":1,"first_name":"Rutledge","last_name":"Neeves","country":"BO","gender":"Male","avatar":"https://robohash.org/doloremqueperspiciatisdebitis.png?size=50x50&set=set1"},{"id":2,"first_name":"Krishna","last_name":"Jentgens","country":"BO","gender":"Male","avatar":"https://robohash.org/iureculpafacilis.jpg?size=50x50&set=set1"},{"id":3,"first_name":"Karlen","last_name":"Scala","country":"BO","gender":"Female","avatar":"https://robohash.org/accusamusautreiciendis.png?size=50x50&set=set1"},{"id":4,"first_name":"Demetri","last_name":"Headley","country":"BO","gender":"Male","avatar":"https://robohash.org/officiissitpariatur.jpg?size=50x50&set=set1"},{"id":5,"first_name":"Nedda","last_name":"Pedroli","country":"ES","gender":"Female","avatar":"https://robohash.org/namnostrummaiores.jpg?size=50x50&set=set1"},{"id":6,"first_name":"Dane","last_name":"Birchenhead","country":"BO","gender":"Male","avatar":"https://robohash.org/debitisexpeditatempore.png?size=50x50&set=set1"},{"id":7,"first_name":"Chickie","last_name":"Aicken","country":"ES","gender":"Male","avatar":"https://robohash.org/architectonequerepudiandae.png?size=50x50&set=set1"},{"id":8,"first_name":"Susanne","last_name":"Traviss","country":"ES","gender":"Female","avatar":"https://robohash.org/sitaliquidrepellat.png?size=50x50&set=set1"},{"id":9,"first_name":"Octavius","last_name":"Whittington","country":"BO,ES","gender":"Male","avatar":"https://robohash.org/velitaliquamest.png?size=50x50&set=set1"},{"id":10,"first_name":"Cissiee","last_name":"Jedras","country":"ES","gender":"Female","avatar":"https://robohash.org/quibusdamaliquidaperiam.jpg?size=50x50&set=set1"}]')},176:function(e,t,r){"use strict";r.r(t);var n=r(173),o={asyncData:function(e){var t=e.params;return{user:n.filter((function(e){return e.id==t.id}))[0]}},validate:function(e){return!(e.params.id>10)}},l=r(15),component=Object(l.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h1",[e._v("User")]),e._v(" "),r("h2",[e._v(e._s(e.user.first_name)+" "+e._s(e.user.last_name))]),e._v(" "),r("p",[r("img",{attrs:{src:e.user.avatar}})])])}),[],!1,null,null,null);t.default=component.exports}}]);