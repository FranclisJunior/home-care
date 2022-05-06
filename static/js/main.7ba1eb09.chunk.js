(this.webpackJsonphomecare=this.webpackJsonphomecare||[]).push([[0],{106:function(e,a,t){e.exports=t(269)},115:function(e,a,t){},133:function(e,a,t){},172:function(e,a,t){},192:function(e,a,t){},193:function(e,a,t){},268:function(e,a,t){},269:function(e,a,t){"use strict";t.r(a);var r={};t.r(r),t.d(r,"START_DATA_LOADING",(function(){return j})),t.d(r,"SUPPLIERS_LOADED",(function(){return w})),t.d(r,"SUPPLIER_LOADED",(function(){return P})),t.d(r,"getSupplier",(function(){return x})),t.d(r,"listSuppliers",(function(){return A}));var n=t(0),l=t.n(n),c=t(28),s=t(21),o=t(17),i=t(18),m=t(23),p=t(22),u=t(45),d=t(8),E=t(97),g=(t(115),function(){return l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark navbar-custom fixed-top"},l.a.createElement("div",{className:"container"},l.a.createElement("a",{className:"navbar-brand",href:"/"},l.a.createElement("img",{src:"/home-care/logo.png"}))))}),f=t(13),h=t(35),b=t.n(h),v=t(57),N=t(87),y=t.n(N),O=new(function(){function e(){Object(o.a)(this,e)}return Object(i.a)(e,[{key:"Get",value:function(){var a=Object(v.a)(b.a.mark((function a(t){var r,n,l=arguments;return b.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return r=l.length>1&&void 0!==l[1]?l[1]:{},a.prev=1,n=e.instance().get(t,r),a.next=5,n;case 5:return a.abrupt("return",a.sent);case 8:a.prev=8,a.t0=a.catch(1),console.error(a.t0);case 11:case"end":return a.stop()}}),a,null,[[1,8]])})));return function(e){return a.apply(this,arguments)}}()}],[{key:"instance",value:function(){return y.a.create({baseURL:"https://app-suppliers-puc-pi-homecare.azurewebsites.net/",timeout:1e4,method:"get",responseType:"json"})}}]),e}()),S=function(){var e=Object(v.a)(b.a.mark((function e(a){var t,r=arguments;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.length>1&&void 0!==r[1]?r[1]:{},e.next=3,O.Get(a,t);case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),j="SupplierState/START_DATA_LOADING",w="SupplierState/SUPPLIERS_LOADED",P="SupplierState/SUPPLIER_LOADED";function k(){return{type:j}}function C(e){return{type:w,payload:{suppliers:e}}}function D(e){return{type:P,payload:{supplier:e}}}function x(e){if(localStorage.getItem(e)){var a=JSON.parse(localStorage.getItem(e));return function(e){e(k()),e(D(a))}}return function(a){a(k()),S("supplier/".concat(e)).then((function(e){try{if(200!==e.status)throw new Error("API bad response. Status code ".concat(e.status,"."));a(D(e.data))}catch(t){console.error(t),a(D(void 0))}}))}}function A(e){return function(a){a(k());var t=Object.assign({latitude:3,longitude:3,range:3,orderBy:"price",serviceName:""},e),r=t.latitude,n=t.longitude,l=t.range,c=t.orderBy,s=t.serviceName,o="suppliers/search?latitude=".concat(r,"&longitude=").concat(n,"&range=").concat(l,"&orderBy=").concat(c,"&serviceName=").concat(s);S(o).then((function(e){try{if(200!==e.status)throw new Error("API bad response. Status code ".concat(e.status,"."));a(C(e.data))}catch(t){console.error(t),a(C([]))}}))}}t(133);var I=t(11),L=t(9),T=t(44),_=t.n(T),R=function(e){var a=e.id,t=e.name,r=e.image,n=e.description,c=e.rate,s=e.price,o=e.tags;return l.a.createElement("div",{id:a,className:"supplier col-xs-12 col-md-6",key:a+1},l.a.createElement(u.b,{to:"/supplier/".concat(a)},l.a.createElement("div",{className:"thumbnail card"},l.a.createElement(I.a,null,l.a.createElement(L.a,{md:3,xs:3},l.a.createElement("div",{className:"img-event"},l.a.createElement("img",{"data-testid":"thumbnail",className:"group list-group-image img-fluid",src:r,alt:r}))),l.a.createElement(L.a,{md:9,xs:9,className:"supplier-info"},l.a.createElement("h4",{"data-testid":"name",className:"group card-title inner list-group-item-heading"},t),l.a.createElement("p",null,n),o&&o.split(",").map((function(e){return l.a.createElement("span",{className:"badge badge-pill badge-primary"},e)})))),l.a.createElement("div",{className:"caption card-body"},l.a.createElement(I.a,null,l.a.createElement(L.a,null,l.a.createElement(_.a,{rating:c,starDimension:"20px",starSpacing:"10px",starRatedColor:"gold"})),l.a.createElement(L.a,null,l.a.createElement("h4",{className:"price"},"R$ ",s,",00")))))))},F=t(46),B=(t(172),t(274)),V=t(277),z=t(275),U=t(48),G=t(91),J=t.n(G),M=(t(188),function(e){Object(m.a)(t,e);var a=Object(p.a)(t);function t(e){var r;return Object(o.a)(this,t),(r=a.call(this,e))._setOrder=function(e){r.setState({orderBy:e.target.value},(function(){r.props.actions.listSuppliers(r.state)}))},r._setRange=function(e){r.setState({range:e},(function(){r.props.actions.listSuppliers(r.state)}))},r._searchSuppliers=function(e){r.props.actions&&r.setState({serviceName:e},(function(){r.props.actions.listSuppliers(r.state)}))},r.state={range:5,orderBy:"price",serviceName:""},r}return Object(i.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement(B.a,{className:"mb-3"},l.a.createElement(V.a,{size:"lg",placeholder:"Buscar prestadores de servi\xe7os",onChange:function(a){return e._searchSuppliers(a.target.value)}}),l.a.createElement(z.a,{size:"lg",variant:"info",title:"Filtrar",align:"end"},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{className:"search-label"},"Distancia (KM)"),l.a.createElement(J.a,{maxValue:20,minValue:1,value:this.state.range,onChange:this._setRange})),l.a.createElement(U.a.Divider,null),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{className:"search-label"},"Ordernar por: "),l.a.createElement("select",{className:"form-control",value:this.state.orderBy,onChange:this._setOrder},l.a.createElement("option",{value:"price"},"Pre\xe7o"),l.a.createElement("option",{value:"quality"},"Avalia\xe7\xe3o")))))}}]),t}(n.Component)),q=Object(s.b)((function(e){return{}}),(function(e){return{actions:Object(f.b)(r,e)}}))(M),$=(t(192),function(e){Object(m.a)(t,e);var a=Object(p.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"componentDidMount",value:function(){this.props.actions.listSuppliers()}},{key:"render",value:function(){return l.a.createElement(I.a,{className:"row"},l.a.createElement(L.a,{xs:12},l.a.createElement(q,null),l.a.createElement("div",{className:"content"},l.a.createElement("div",{className:"suppliers row view-group"},this.props.loading&&l.a.createElement("div",{className:"loading"},l.a.createElement(F.CircleToBlockLoading,{color:"#1F2E5D"})),!this.props.loading&&!this.props.suppliers.length&&l.a.createElement("div",{className:"col-sm-12 col-lg-12"},l.a.createElement("h1",{className:"no-result"},"Nenhum prestrador disponivel com esse nome")),!this.props.loading&&this.props.suppliers&&this.props.suppliers.map((function(e){return l.a.createElement(R,{key:e.supplierId,id:e.supplierId,name:e.name,description:e.description,image:e.image,rate:e.rate,price:e.price,tags:e.tags})}))))))}}]),t}(n.Component)),H=Object(s.b)((function(e){return{suppliers:e.supplier.suppliers,loading:e.supplier.loading}}),(function(e){return{actions:Object(f.b)(r,e)}}))($),K=(t(193),function(e){Object(m.a)(t,e);var a=Object(p.a)(t);function t(e){var r;return Object(o.a)(this,t),(r=a.call(this,e)).state={showPaymentForm:!1},r}return Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.match.params;this.props.actions.getSupplier(e.supplierId)}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"loading"},this.props.loading&&l.a.createElement(F.CircleToBlockLoading,{color:"#1F2E5D"}),!this.props.loading&&!this.props.supplier&&l.a.createElement("div",{className:"col-sm-12 col-lg-12"},l.a.createElement("h1",{className:"no-result"},"Supplier not found")),!this.props.loading&&this.props.supplier&&l.a.createElement(I.a,{className:"row view-supplier"},l.a.createElement(L.a,{md:9},l.a.createElement(L.a,{md:12,className:"view-supplier-card"},l.a.createElement(I.a,null,l.a.createElement(L.a,{md:5},l.a.createElement("div",{className:"img-event"},l.a.createElement("img",{className:"img-fluid",src:this.props.supplier.image}))),l.a.createElement(L.a,{md:7},l.a.createElement("h2",null,this.props.supplier.name),l.a.createElement(_.a,{rating:this.props.supplier.rate,starDimension:"30px",starSpacing:"15px",starRatedColor:"gold"}),l.a.createElement(I.a,null,l.a.createElement(L.a,{md:12,className:"tags"},this.props.supplier.tags&&this.props.supplier.tags.split(",").map((function(e){return l.a.createElement("span",{className:"badge badge-pill badge-primary"},e)})))),this.props.supplier.description?l.a.createElement("p",null,this.props.supplier.description):l.a.createElement("p",null,"No description"))),l.a.createElement("hr",null),l.a.createElement(L.a,{md:12},l.a.createElement(I.a,null,l.a.createElement("h3",null,"Localizacao do prestador")),l.a.createElement(I.a,null,l.a.createElement("iframe",{className:"maps-frame",src:"https://maps.google.com/maps?q=joao%20pessoa,%20paraiba%20brazil&t=&z=13&ie=UTF8&iwloc=&output=embed",frameBorder:"0",scrolling:"no",marginHeight:"0",marginWidth:"0"}))))),l.a.createElement(L.a,{md:3},l.a.createElement(L.a,{md:12,className:"card-price"},l.a.createElement("h2",null,"R$ 50,00"),l.a.createElement("img",{className:"cards",src:"/cards.png"}),!this.state.showPaymentForm&&l.a.createElement("button",{className:"btn btn-primary btn-block",onClick:function(a){return e.setState({showPaymentForm:!0})}},"Contratar"),l.a.createElement("hr",null),this.state.showPaymentForm&&l.a.createElement(I.a,{className:"form-payment"},l.a.createElement(L.a,{md:12,className:"form-group"},l.a.createElement("h5",null,"Dados do Pagamento")),l.a.createElement(L.a,{md:12},l.a.createElement("form",null,l.a.createElement(I.a,{className:"form-group"},l.a.createElement(L.a,{md:12},l.a.createElement("label",{className:"form-label"},"Nome do Titular"),l.a.createElement("input",{className:"form-control",placeholder:"Nome do Titular"}))),l.a.createElement(I.a,{className:"form-group"},l.a.createElement(L.a,{md:12},l.a.createElement("label",{className:"form-label"},"CPF do Titular"),l.a.createElement("input",{className:"form-control",placeholder:"CPF do Titular"}))),l.a.createElement(I.a,{className:"form-group"},l.a.createElement(L.a,{md:12},l.a.createElement("label",{className:"form-label"},"N\xfamero do Cart\xe3o"),l.a.createElement("input",{className:"form-control",placeholder:"N\xfamero do Cart\xe3o"}))),l.a.createElement(I.a,{className:"form-group"},l.a.createElement(L.a,{md:6},l.a.createElement("label",{className:"form-label"},"CVV"),l.a.createElement("input",{className:"form-control",placeholder:"CVV"})),l.a.createElement(L.a,{md:6},l.a.createElement("label",{className:"form-label"},"Validade"),l.a.createElement("input",{className:"form-control",placeholder:"Validade"}))),l.a.createElement(I.a,null,l.a.createElement(L.a,{md:6,sm:12},l.a.createElement("button",{className:"btn btn-outline-primary btn-block",onClick:function(a){return e.setState({showPaymentForm:!1})}},"Cancelar")),l.a.createElement(L.a,{md:6,sm:12},l.a.createElement("button",{className:"btn btn-primary btn-block",onClick:function(a){return e.setState({showPaymentForm:!1})}},"Pagar"))))))))))}}]),t}(n.Component)),W=Object(s.b)((function(e){return{supplier:e.supplier.supplier,loading:e.supplier.loading}}),(function(e){return{actions:Object(f.b)(r,e)}}))(K),Q=function(e){Object(m.a)(t,e);var a=Object(p.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(g,null),l.a.createElement(E.a,{className:"main"},l.a.createElement(u.a,null,l.a.createElement(d.a,{path:"/",exact:!0,component:H}),l.a.createElement(d.a,{path:"/supplier/:supplierId",component:W}))))}}]),t}(n.Component),X=t(98),Y=t(276),Z={loading:!1,supplier:void 0,suppliers:[],page:1,totalPages:0};var ee=Object(f.c)({supplier:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Z,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(a.type){case j:return Object.assign({},e,{loading:!0});case w:return Object.assign({},e,{loading:!1,suppliers:a.payload.suppliers,page:a.payload.page,totalPages:a.payload.totalPages});case P:return Object.assign({},e,{loading:!1,supplier:a.payload.supplier});default:return e}},form:Y.a}),ae=function(){return Object(f.d)(ee,Object(f.a)(X.a))},te=(t(268),ae());Object(c.render)(l.a.createElement(s.a,{store:te},l.a.createElement(Q,null)),document.getElementById("root"))}},[[106,1,2]]]);
//# sourceMappingURL=main.7ba1eb09.chunk.js.map