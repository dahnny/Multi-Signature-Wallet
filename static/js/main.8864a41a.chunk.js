(this["webpackJsonpmulti-sig-wallet"]=this["webpackJsonpmulti-sig-wallet"]||[]).push([[0],{1099:function(e,t,n){},1100:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),u=n(108),i=n.n(u),o=(n(543),n(12)),c=n.n(o),s=n(29),l=n(1114),p=n(1115),d=n(282),m=n.n(d),f=n(48);function y(){return b.apply(this,arguments)}function b(){return(b=Object(s.a)(c.a.mark((function e(){var t,n,a,r,u;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=window,n=t.celo){e.next=3;break}throw new Error("Web3 not found");case 3:return a=new m.a(n),e.next=6,n.enable();case 6:return r=Object(f.newKitFromWeb3)(a),e.next=9,r.web3.eth.getAccounts();case 9:return u=e.sent,e.abrupt("return",{web3:a,account:u[0]||""});case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}n(940);var w=n(33),v=n(55);var x=function(e){var t=Object(a.useState)({pending:!1,error:null,data:null}),n=Object(v.a)(t,2),r=n[0],u=n[1];function i(){return(i=Object(s.a)(c.a.mark((function t(n){var a;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return u((function(e){return Object(w.a)({},e,{pending:!0,data:null,error:null})})),t.prev=1,t.next=4,e(n);case 4:return a=t.sent,u((function(e){return Object(w.a)({},e,{pending:!1,data:a})})),t.abrupt("return",{data:a});case 9:return t.prev=9,t.t0=t.catch(1),u((function(e){return Object(w.a)({},e,{pending:!1,error:t.t0})})),t.abrupt("return",{error:t.t0});case 13:case"end":return t.stop()}}),t,null,[[1,9]])})))).apply(this,arguments)}return Object(w.a)({},r,{call:function(e){return i.apply(this,arguments)}})},h={account:"",web3:null,netId:0};function T(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPDATE_ACCOUNT":var n=t.web3||e.web3,a=t.account;return Object(w.a)({},e,{web3:n,account:a});case"UPDATE_NET_ID":var r=t.netId;return Object(w.a)({},e,{netId:r});default:return e}}var C=Object(a.createContext)({state:h,updateAccount:function(e){},updateNetId:function(e){}});function E(){return Object(a.useContext)(C)}var g=function(e){var t=e.children,n=Object(a.useReducer)(T,h),u=Object(v.a)(n,2),i=u[0],o=u[1];function c(e){o(Object(w.a)({type:"UPDATE_ACCOUNT"},e))}function s(e){o(Object(w.a)({type:"UPDATE_NET_ID"},e))}return r.a.createElement(C.Provider,{value:Object(a.useMemo)((function(){return{state:i,updateAccount:c,updateNetId:s}}),[i])},t)};function A(){var e=E(),t=e.state,n=e.updateNetId;return Object(a.useEffect)((function(){if(t.web3)return function(e,t){var n=setInterval(Object(s.a)(c.a.mark((function n(){var a,r;return c.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,a=Object(f.newKitFromWeb3)(e),n.next=4,a.web3.eth.getAccounts();case 4:r=n.sent,t(null,r[0]),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),t(n.t0,null);case 11:case"end":return n.stop()}}),n,null,[[0,8]])}))),1e3);return function(){clearInterval(n)}}(t.web3,(function(e,n){e&&console.error(e),void 0!==n&&n!==t.account&&window.location.reload()}))}),[t.web3,t.account]),Object(a.useEffect)((function(){if(t.web3)return function(e,t){var n=setInterval(Object(s.a)(c.a.mark((function n(){var a,r;return c.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,a=Object(f.newKitFromWeb3)(e),n.next=4,a.web3.eth.net.getId();case 4:r=n.sent,t(null,r),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),t(n.t0,null);case 11:case"end":return n.stop()}}),n,null,[[0,8]])}))),1e3);return function(){clearInterval(n)}}(t.web3,(function(e,a){e&&console.error(e),a&&(0===t.netId?n({netId:a}):a!==t.netId&&window.location.reload())}))}),[t.web3,t.netId,n]),null}var O=n(526),j=n(127),k=n.n(j),I=n(941),B=n(942),N="0xB7909B023118D5930E3F020fB614a30021d79DA9";function F(e,t,n){return W.apply(this,arguments)}function W(){return(W=Object(s.a)(c.a.mark((function e(t,n,a){var r,u,i;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=Object(f.newKitFromWeb3)(t),u=new r.web3.eth.Contract(I,"0x874069Fa1Eb16D44d622F2e0Ca25eeA172369bC1"),e.next=4,u.methods.approve(N,a).send({from:n});case 4:return i=e.sent,e.abrupt("return",i);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function M(e,t){return P.apply(this,arguments)}function P(){return(P=Object(s.a)(c.a.mark((function e(t,n){var a,r,u,i,o,s,l,p,d,m,y,b;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=Object(f.newKitFromWeb3)(t),r=new a.web3.eth.Contract(B,N),e.next=4,r.methods.getBalance().call();case 4:return u=e.sent,e.next=7,r.methods.getOwners().call();case 7:return i=e.sent,e.next=10,r.methods.getNumConfirmationsRequired().call();case 10:return o=e.sent,e.next=13,r.methods.getTransactionCount().call();case 13:s=e.sent,l=s,p=[],d=1;case 17:if(!(d<=10)){e.next=31;break}if(!((m=l-d)<0)){e.next=21;break}return e.abrupt("break",31);case 21:return e.next=23,r.methods.getTransaction(m).call();case 23:return y=e.sent,e.next=26,r.methods.isConfirmed(m,n).call();case 26:b=e.sent,p.push({txIndex:m,to:y.to,amount:y.amount,purpose:y.purpose,executed:y.executed,numConfirmations:y.numConfirmations,isConfirmedByCurrentAccount:b});case 28:d++,e.next=17;break;case 31:return e.abrupt("return",{address:N,balance:u,owners:i,numConfirmationsRequired:o,transactionCount:l,transactions:p});case 32:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function U(){return(U=Object(s.a)(c.a.mark((function e(t,n,a){var r,u,i;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=a.amount,u=Object(f.newKitFromWeb3)(t),i=new u.web3.eth.Contract(B,N),e.prev=3,e.next=6,F(t,n,r);case 6:e.next=11;break;case 8:e.prev=8,e.t0=e.catch(3),alert("\u26a0\ufe0f ".concat(e.t0,"."));case 11:return e.next=13,i.methods.deposit(r).send({from:n});case 13:e.sent;case 14:case"end":return e.stop()}}),e,null,[[3,8]])})))).apply(this,arguments)}function D(e,t,n){return _.apply(this,arguments)}function _(){return(_=Object(s.a)(c.a.mark((function e(t,n,a){var r,u,i,o,s,l;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=Object(f.newKitFromWeb3)(t),u=a.to,i=a.amount,o=a.purpose,s=new r.web3.eth.Contract(B,N),e.prev=3,l=new k.a(i).shiftedBy(18),e.next=7,s.methods.submitTransaction(u,l,o).send({from:n});case 7:e.sent,e.next=13;break;case 10:e.prev=10,e.t0=e.catch(3),alert("\u26a0\ufe0f ".concat(e.t0,"."));case 13:case"end":return e.stop()}}),e,null,[[3,10]])})))).apply(this,arguments)}function S(e,t,n){return R.apply(this,arguments)}function R(){return(R=Object(s.a)(c.a.mark((function e(t,n,a){var r,u,i;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=Object(f.newKitFromWeb3)(t),u=a.txIndex,i=new r.web3.eth.Contract(B,N),e.prev=3,e.next=6,i.methods.confirmTransaction(u).send({from:n});case 6:e.sent,e.next=12;break;case 9:e.prev=9,e.t0=e.catch(3),alert("\u26a0\ufe0f ".concat(e.t0,"."));case 12:case"end":return e.stop()}}),e,null,[[3,9]])})))).apply(this,arguments)}function K(e,t,n){return q.apply(this,arguments)}function q(){return(q=Object(s.a)(c.a.mark((function e(t,n,a){var r,u,i;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=Object(f.newKitFromWeb3)(t),u=a.txIndex,i=new r.web3.eth.Contract(B,N),e.prev=3,e.next=6,i.methods.revokeConfirmation(u).send({from:n});case 6:e.sent,e.next=12;break;case 9:e.prev=9,e.t0=e.catch(3),alert("\u26a0\ufe0f ".concat(e.t0,"."));case 12:case"end":return e.stop()}}),e,null,[[3,9]])})))).apply(this,arguments)}function J(e,t,n){return L.apply(this,arguments)}function L(){return(L=Object(s.a)(c.a.mark((function e(t,n,a){var r,u,i;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=Object(f.newKitFromWeb3)(t),u=a.txIndex,i=new r.web3.eth.Contract(B,N),e.prev=3,e.next=6,i.methods.executeTransaction(u).send({from:n});case 6:e.sent,e.next=12;break;case 9:e.prev=9,e.t0=e.catch(3),alert("\u26a0\ufe0f ".concat(e.t0,"."));case 12:case"end":return e.stop()}}),e,null,[[3,9]])})))).apply(this,arguments)}var Y=n(128),Q=n.n(Y),X={address:"",balance:"0",owners:[],numConfirmationsRequired:0,transactionCount:0,transactions:[]};function V(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:X,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET":return Object(w.a)({},e,{},t.data);case"UPDATE_BALANCE":return Object(w.a)({},e,{balance:t.data.balance});case"ADD_TX":var n=t.data,a=n.txIndex,r=n.to,u=n.amount,i=n.purpose,o=[{txIndex:parseInt(a),to:r,amount:new Q.a(u),purpose:i,executed:!1,numConfirmations:0,isConfirmedByCurrentAccount:!1}].concat(Object(O.a)(e.transactions));return Object(w.a)({},e,{transactionCount:Number(e.transactionCount)+1,transactions:o});case"UPDATE_TX":var c=t.data,s=parseInt(c.txIndex),l=e.transactions.map((function(e){if(e.txIndex===s){var t=Object(w.a)({},e);return c.executed&&(t.executed=!0),void 0!==c.confirmed&&(c.confirmed?(t.numConfirmations=Number(t.numConfirmations)+1,t.isConfirmedByCurrentAccount=c.owner===c.account):(t.numConfirmations=Number(t.numConfirmations)-1,c.owner===c.account&&(t.isConfirmedByCurrentAccount=!1))),t}return e}));return Object(w.a)({},e,{transactions:l});case"UPDATE_BALANCE_WITHDRAW":return Object(w.a)({},e,{balance:t.data.balance});default:return e}}var z=Object(a.createContext)({state:X,set:function(e){},updateBalance:function(e){},addTx:function(e){},updateTx:function(e){},updateBalanceWithdraw:function(e){}});function G(){return Object(a.useContext)(z)}var H=function(e){var t=e.children,n=Object(a.useReducer)(V,X),u=Object(v.a)(n,2),i=u[0],o=u[1];function c(e){o({type:"SET",data:e})}function s(e){o({type:"UPDATE_BALANCE",data:e})}function l(e){o({type:"ADD_TX",data:e})}function p(e){o({type:"UPDATE_TX",data:e})}function d(e){o({type:"UPDATE_BALANCE",data:e})}return r.a.createElement(z.Provider,{value:Object(a.useMemo)((function(){return{state:i,set:c,updateBalance:s,addTx:l,updateTx:p,updateBalanceWithdraw:d}}),[i])},t)};function Z(){var e=E().state,t=e.web3,n=e.account,r=G(),u=r.state,i=r.set,o=r.updateBalance,l=r.addTx,p=r.updateTx,d=r.updateBalanceWithdraw;return Object(a.useEffect)((function(){function e(){return(e=Object(s.a)(c.a.mark((function e(t,n){var a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,M(t,n);case 3:a=e.sent,i(a),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}t&&function(t,n){e.apply(this,arguments)}(t,n)}),[t]),Object(a.useEffect)((function(){if(t&&u.address)return function(e,t,n){var a=new(Object(f.newKitFromWeb3)(e).web3.eth.Contract)(B,t).events.allEvents((function(e,t){e?n(e,null):t&&n(null,t)}));return function(){return a.unsubscribe()}}(t,u.address,(function(e,t){if(e)console.error(e);else if(t)switch(t.event){case"Deposit":o(t.returnValues);break;case"SubmitTransaction":l(t.returnValues);break;case"ConfirmTransaction":p(Object(w.a)({},t.returnValues,{confirmed:!0,account:n}));break;case"RevokeConfirmation":p(Object(w.a)({},t.returnValues,{confirmed:!1,account:n}));break;case"ExecuteTransaction":p(Object(w.a)({},t.returnValues,{executed:!0,account:n}));break;case"Withdrawal":d(t.returnValues);break;default:console.log(t)}}))}),[t,u.address]),null}var $=n(1111),ee=function(){var e=E().state,t=e.web3,n=e.account,u=Object(a.useState)(""),i=Object(v.a)(u,2),o=i[0],l=i[1],d=x((function(e){return function(e,t,n){return U.apply(this,arguments)}(e.web3,e.account,{amount:e.amount})})),m=d.pending,f=d.call;function y(){return(y=Object(s.a)(c.a.mark((function e(a){var r,u,i,s;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!m){e.next=2;break}return e.abrupt("return");case 2:if(t){e.next=5;break}return alert("No web3"),e.abrupt("return");case 5:if(r=new k.a(o).shiftedBy(18),u=new k.a(0).shiftedBy(18),!r.gt(u)){e.next=13;break}return e.next=10,f({web3:t,account:n,amount:r});case 10:i=e.sent,(s=i.error)?alert("Error: ".concat(s.message)):l("");case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return r.a.createElement($.a,{onSubmit:function(e){return y.apply(this,arguments)}},r.a.createElement($.a.Field,null,r.a.createElement($.a.Input,{placeholder:"Amount to deposit in cUSD",type:"number",min:0,value:o,onChange:function(e){l(e.target.value)}})),r.a.createElement(p.a,{color:"green",disabled:m,loading:m},"Deposit"))},te=n(202),ne=n(1112),ae=function(e){var t=e.open,n=e.onClose,u=E().state,i=u.web3,o=u.account,d=x(function(){var e=Object(s.a)(c.a.mark((function e(t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i){e.next=2;break}throw new Error("No web3");case 2:return e.next=4,D(i,o,t);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),m=d.pending,f=d.error,y=d.call,b=Object(a.useState)({to:"",amount:0,purpose:""}),h=Object(v.a)(b,2),T=h[0],C=h[1];function g(e,t){C(Object(w.a)({},T,Object(te.a)({},e,t.target.value)))}function A(){return O.apply(this,arguments)}function O(){return(O=Object(s.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!m){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,y(Object(w.a)({},T,{amount:T.amount.toString()}));case 4:t=e.sent,t.error||n();case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return r.a.createElement(ne.a,{open:t,onClose:n},r.a.createElement(ne.a.Header,null,"Create Transaction"),r.a.createElement(ne.a.Content,null,f&&r.a.createElement(l.a,{error:!0},f.message),r.a.createElement($.a,{onSubmit:A},r.a.createElement($.a.Field,null,r.a.createElement("label",null,"To"),r.a.createElement($.a.Input,{type:"text",value:T.to,onChange:function(e){return g("to",e)}})),r.a.createElement($.a.Field,null,r.a.createElement("label",null,"Amount"),r.a.createElement($.a.Input,{type:"number",min:0,value:T.amount,onChange:function(e){return g("amount",e)}})),r.a.createElement($.a.Field,null,r.a.createElement("label",null,"Purpose"),r.a.createElement($.a.Input,{type:"text",value:T.purpose,onChange:function(e){return g("purpose",e)}})))),r.a.createElement(ne.a.Actions,null,r.a.createElement(p.a,{onClick:n,disabled:m},"Cancel"),r.a.createElement(p.a,{color:"green",onClick:A,disabled:m,loading:m},"Create")))},re=function(e){var t=e.numConfirmationsRequired,n=e.tx,a=E().state,u=a.web3,i=a.account,o=n.txIndex,l=x(Object(s.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(u){e.next=2;break}throw new Error("No web3");case 2:return e.next=4,S(u,i,{txIndex:o});case 4:case"end":return e.stop()}}),e)})))),d=x(Object(s.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(u){e.next=2;break}throw new Error("No web3");case 2:return e.next=4,K(u,i,{txIndex:o});case 4:case"end":return e.stop()}}),e)})))),m=x(Object(s.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(u){e.next=2;break}throw new Error("No web3");case 2:return e.next=4,J(u,i,{txIndex:o});case 4:case"end":return e.stop()}}),e)}))));return n.executed?null:r.a.createElement(r.a.Fragment,null,n.isConfirmedByCurrentAccount?r.a.createElement(p.a,{color:"grey",onClick:function(e){return d.call(null)},disabled:d.pending,loading:d.pending},"Revoke Confirmation"):r.a.createElement(p.a,{color:"grey",onClick:function(e){return l.call(null)},disabled:l.pending,loading:l.pending},"Confirm"),n.numConfirmations>=t&&r.a.createElement(p.a,{color:"grey",onClick:function(e){return m.call(null)},disabled:m.pending,loading:m.pending},"Execute"))},ue=function(e){var t=e.numConfirmationsRequired,n=(e.count,e.data);return r.a.createElement("ul",null,n.map((function(e){return r.a.createElement("li",{key:e.txIndex,style:{paddingBottom:"15px"}},r.a.createElement("div",null,"To: ",e.to),r.a.createElement("div",null,"Amount: ",new Q.a(e.amount).shiftedBy(-18).toString()," cUSD"),r.a.createElement("div",null,"Purpose: ",e.purpose),r.a.createElement("div",null,"Executed: ",e.executed.toString()),r.a.createElement("div",null,"Confirmations: ",e.numConfirmations),r.a.createElement(re,{numConfirmationsRequired:t,tx:e}))})))};var ie=function(){var e=G().state,t=Object(a.useState)(!1),n=Object(v.a)(t,2),u=n[0],i=n[1];return r.a.createElement("div",null,r.a.createElement("div",null,"Contract: ",e.address),r.a.createElement("h3",null,"Balance: ",new Q.a(e.balance).shiftedBy(-18).toString()," cUSD"),r.a.createElement(ee,null),r.a.createElement("h3",null,"Owners"),r.a.createElement("ul",null,e.owners.map((function(e,t){return r.a.createElement("li",{key:t},e)}))),r.a.createElement("div",null,"Confirmations required: ",e.numConfirmationsRequired),r.a.createElement("h3",null,"Transactions (",e.transactionCount,")"),r.a.createElement(p.a,{color:"green",onClick:function(){return i(!0)}},"Create Transaction"),u&&r.a.createElement(ae,{open:u,onClose:function(){return i(!1)}}),r.a.createElement(ue,{numConfirmationsRequired:e.numConfirmationsRequired,data:e.transactions,count:e.transactionCount}))},oe=n(290),ce=n.n(oe),se=n(524),le=n.n(se),pe=function(){return r.a.createElement("div",{className:ce.a.component},r.a.createElement("img",{src:le.a,className:ce.a.image,alt:"github"}),r.a.createElement("a",{href:"https://github.com/joelaghina/Multi-Signature-Wallet",target:"__blank"},"Code"))};var de=function(e){var t=e.netId;return r.a.createElement("div",null,function(e){switch(e){case 42220:return"Celo Main Network";case 44787:return"Alfajores Test Network";case 62320:return"Bavlaka Test Network";case 5777:return"Dev Network";default:return"Unkown network"}}(t))};var me=function(){var e=E(),t=e.state,n=t.account,a=t.netId,u=e.updateAccount,i=x(y),o=i.pending,d=i.error,m=i.call;function f(){return(f=Object(s.a)(c.a.mark((function e(){var t,n,a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m(null);case 2:t=e.sent,n=t.error,a=t.data,n&&console.error(n),a&&u(a);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"App-main"},r.a.createElement("h1",null,"Multi Sig Wallet"),n?r.a.createElement(r.a.Fragment,null,0!==a&&r.a.createElement(de,{netId:a}),r.a.createElement("div",null,"Account: ",n),r.a.createElement(ie,null)):r.a.createElement(r.a.Fragment,null,d?r.a.createElement(l.a,{error:!0},d.message):r.a.createElement(l.a,{warning:!0},"Celo Wallet is not connected"),r.a.createElement(p.a,{color:"green",onClick:function(){return function(){return f.apply(this,arguments)}()},disabled:o,loading:o},"Connect to Celo Wallet"))),r.a.createElement(pe,null))};n(1099),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(g,null,r.a.createElement(H,null,r.a.createElement(me,null),r.a.createElement(A,null),r.a.createElement(Z,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},290:function(e,t,n){e.exports={component:"Footer_component__1ypWg",image:"Footer_image__1C_8v",bar:"Footer_bar__2sJVJ"}},524:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAANTSURBVHgBvVeNTdtAFH7vbCilUptuYFQihUhNzQQJEzSZoGSChgkIEwATNJ0AmICM4ISKWCKoHiGtVDUCn1/v2cRx4nNIcNRPgpzvnd/fvT8jLAnLsgrGVqEOQlaR0AYECwgKIRFhpNYeITkQYFeOf195njdahi8+K7hUsgzcaCPi51jgElDKdGTweOK5rgcvUYAtNl+/PVbLFuSBoDP/j3Hiec5oaQUiqzevFdGCNYAAPEkPBzpviPmNYrlsr1M4g3kxz2KxbGtoU6zb8nnoPBF7IIzyOeH8gvp/Gf2uCJUZRNRRK2e6FXnCsuxCSgEOuJTlBO3h4KZxP+jvKGbNWBFOu5AxdeO/aO9JMBwOb/vv792bJlBwNKsXWOYbeZx4jlxv4ubPlBG+2L+7c2ILLFtpPh4XslLLKtkWjGGUjHjeMzFI8fbpYYf5mPzAea5j+GjATOp4Tsg4s8B4ruPBkjDEBnuhKdgqBPyiPQSyBjlhZgS0qqZ1jgVhjGVddyCMWDC6kBP+FjgZQaxKu6wLFQU10GvQXsWlWeBrQwqaeqqoClXjP+lIciyuYE0Yuj+mWZIACrI5Da15Arssq3bngAdpQZZYpcPlApHOoIKA/wVEraFCezdhZbbX6xkCW7M7Yg94uvPGtqzCmrBbsmtaAoInKICelkY5B5EECOWhdj9AR0TNRKtCbXevkluJ4l7la1alZdlCbhmXujh4wuluuXIMOYSrlD7LonOtCbvhh71KRy0iLQlOwukW8HTSnrkuKFedEYne0HW6sEho0bbBDKqEcJgReJEYws6922s+teNpywzrtqQjuW10zYfgOs0EL4eDXkPHdLf88UJdeB2WgE9ih0t9WAd4oQSfh+yVPmjgN+77fiAaqUZC8jyTa0DZtCQLJWvSZ+JCJF+JdkIYj2ctPiRJHPALPF4p5VphXc/AIlpCuCf/ivbkeW4otdXMFsRzIfq+mohuHVgBKnNooXBlULLLpr4LeCwPyLyIA1B94QhCJyDxS2Dw7m7QP3+JAmEgo2goe2YMyvgwmfVEEsNBH1dVQGf5BNpmxAd5EuaUhJzg+FF3vp813CzshkO33+Z0UUy+w7LgohaO5tjhd5UhrbXMFtwdeXx/9py6vlU66T98qp4a9HCubgAAAABJRU5ErkJggg=="},538:function(e,t,n){e.exports=n(1100)},555:function(e,t){},574:function(e,t){},576:function(e,t){},590:function(e,t){},591:function(e,t){},652:function(e,t){},654:function(e,t){},683:function(e,t){},685:function(e,t){},686:function(e,t){},692:function(e,t){},694:function(e,t){},706:function(e,t){},709:function(e,t){},725:function(e,t){},728:function(e,t){},741:function(e,t){},744:function(e,t){},751:function(e,t){},753:function(e,t){},805:function(e,t){},810:function(e,t){},840:function(e,t){},844:function(e,t){},859:function(e,t){},867:function(e,t){},873:function(e,t){},890:function(e,t){},940:function(e,t,n){},941:function(e){e.exports=JSON.parse('[{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"}]')},942:function(e){e.exports=JSON.parse('[{"inputs":[{"internalType":"address[]","name":"_owners","type":"address[]"},{"internalType":"uint256","name":"_numConfirmationsRequired","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"uint256","name":"txIndex","type":"uint256"}],"name":"ConfirmTransaction","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"balance","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"uint256","name":"txIndex","type":"uint256"}],"name":"ExecuteTransaction","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"uint256","name":"txIndex","type":"uint256"}],"name":"RevokeConfirmation","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"uint256","name":"txIndex","type":"uint256"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"string","name":"purpose","type":"string"}],"name":"SubmitTransaction","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"balance","type":"uint256"}],"name":"Withdrawal","type":"event"},{"inputs":[{"internalType":"uint256","name":"_txIndex","type":"uint256"}],"name":"confirmTransaction","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"deposit","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_txIndex","type":"uint256"}],"name":"executeTransaction","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"getBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getNumConfirmationsRequired","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getOwners","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_txIndex","type":"uint256"}],"name":"getTransaction","outputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"string","name":"purpose","type":"string"},{"internalType":"bool","name":"executed","type":"bool"},{"internalType":"uint256","name":"numConfirmations","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getTransactionCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_txIndex","type":"uint256"},{"internalType":"address","name":"_owner","type":"address"}],"name":"isConfirmed","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"isOwner","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"numConfirmationsRequired","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"owners","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_txIndex","type":"uint256"}],"name":"revokeConfirmation","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_value","type":"uint256"},{"internalType":"string","name":"_purpose","type":"string"}],"name":"submitTransaction","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"transactions","outputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"string","name":"purpose","type":"string"},{"internalType":"bool","name":"executed","type":"bool"},{"internalType":"uint256","name":"numConfirmations","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"walletAddr","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"walletBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}]')}},[[538,1,2]]]);
//# sourceMappingURL=main.8864a41a.chunk.js.map