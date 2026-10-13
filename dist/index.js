"use strict";var o=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(i){throw (r=0, i)}};};var s=o(function(y,q){
var m=require('@stdlib/ndarray-base-numel-dimension/dist'),a=require('@stdlib/ndarray-base-stride/dist'),u=require('@stdlib/ndarray-base-offset/dist'),v=require('@stdlib/ndarray-base-data-buffer/dist'),p=require('@stdlib/blas-ext-base-dwxpy/dist').ndarray;function x(e){var r=e[0],i=e[1],t=e[2];return p(m(r,0),v(r),a(r,0),u(r),v(i),a(i,0),u(i),v(t),a(t,0),u(t)),t}q.exports=x
});var f=require("path").join,c=require('@stdlib/utils-try-require/dist'),g=require('@stdlib/assert-is-error/dist'),j=s(),n,d=c(f(__dirname,"./native.js"));g(d)?n=j:n=d;module.exports=n;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
