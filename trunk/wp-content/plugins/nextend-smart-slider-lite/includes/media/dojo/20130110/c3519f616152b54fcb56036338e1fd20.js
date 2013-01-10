
        (function(){
          djConfig = {
            modulePaths: {
              "dojo": "/thepdahoi.vn/wp-admin/plugins/system/dojoloader/dojo/1.6.1/dojo",
              "dijit": "/thepdahoi.vn/wp-admin/plugins/system/dojoloader/dojo/1.6.1/dijit",
              "dojox": "/thepdahoi.vn/wp-admin/plugins/system/dojoloader/dojo/1.6.1/dojox"
            }
            
            ,
            scopeMap: [
              [ "dojo", "odojo" ],
              [ "dijit", "odijit" ],
              [ "dojox", "odojox" ]
            ]
          };
          
          if(typeof odojo === "undefined"){
      /*
	Copyright (c) 2004-2011, The Dojo Foundation All Rights Reserved.
	Available via Academic Free License >= 2.1 OR the modified BSD license.
	see: http://dojotoolkit.org/license for details
*/

/*
	This is an optimized version of Dojo, built for deployment and not for
	development. To get sources and documentation, please visit:

		http://dojotoolkit.org
*/

(function(){var _1=null;if((_1||(typeof djConfig!="undefined"&&djConfig.scopeMap))&&(typeof window!="undefined")){var _2="",_3="",_4="",_5={},_6={};_1=_1||djConfig.scopeMap;for(var i=0;i<_1.length;i++){var _7=_1[i];_2+="var "+_7[0]+" = {}; "+_7[1]+" = "+_7[0]+";"+_7[1]+"._scopeName = '"+_7[1]+"';";_3+=(i==0?"":",")+_7[0];_4+=(i==0?"":",")+_7[1];_5[_7[0]]=_7[1];_6[_7[1]]=_7[0];}eval(_2+"dojo._scopeArgs = ["+_4+"];");dojo._scopePrefixArgs=_3;dojo._scopePrefix="(function("+_3+"){";dojo._scopeSuffix="})("+_4+")";dojo._scopeMap=_5;dojo._scopeMapRev=_6;}(function(){if(typeof this["loadFirebugConsole"]=="function"){this["loadFirebugConsole"]();}else{this.console=this.console||{};var cn=["assert","count","debug","dir","dirxml","error","group","groupEnd","info","profile","profileEnd","time","timeEnd","trace","warn","log"];var i=0,tn;while((tn=cn[i++])){if(!console[tn]){(function(){var _8=tn+"";console[_8]=("log" in console)?function(){var a=Array.apply({},arguments);a.unshift(_8+":");console["log"](a.join(" "));}:function(){};console[_8]._fake=true;})();}}}if(typeof dojo=="undefined"){dojo={_scopeName:"dojo",_scopePrefix:"",_scopePrefixArgs:"",_scopeSuffix:"",_scopeMap:{},_scopeMapRev:{}};}var d=dojo;if(typeof dijit=="undefined"){dijit={_scopeName:"dijit"};}if(typeof dojox=="undefined"){dojox={_scopeName:"dojox"};}if(!d._scopeArgs){d._scopeArgs=[dojo,dijit,dojox];}d.global=this;d.config={isDebug:false,debugAtAllCosts:false};var _9=typeof djConfig!="undefined"?djConfig:typeof dojoConfig!="undefined"?dojoConfig:null;if(_9){for(var c in _9){d.config[c]=_9[c];}}dojo.locale=d.config.locale;var _a="$Rev: 24595 $".match(/\d+/);dojo.version={major:1,minor:6,patch:1,flag:"",revision:_a?+_a[0]:NaN,toString:function(){with(d.version){return major+"."+minor+"."+patch+flag+" ("+revision+")";}}};if(typeof OpenAjax!="undefined"){OpenAjax.hub.registerLibrary(dojo._scopeName,"http://dojotoolkit.org",d.version.toString());}var _b,_c,_d={};for(var i in {toString:1}){_b=[];break;}dojo._extraNames=_b=_b||["hasOwnProperty","valueOf","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","constructor"];_c=_b.length;dojo._mixin=function(_e,_f){var _10,s,i;for(_10 in _f){s=_f[_10];if(!(_10 in _e)||(_e[_10]!==s&&(!(_10 in _d)||_d[_10]!==s))){_e[_10]=s;}}if(_c&&_f){for(i=0;i<_c;++i){_10=_b[i];s=_f[_10];if(!(_10 in _e)||(_e[_10]!==s&&(!(_10 in _d)||_d[_10]!==s))){_e[_10]=s;}}}return _e;};dojo.mixin=function(obj,_11){if(!obj){obj={};}for(var i=1,l=arguments.length;i<l;i++){d._mixin(obj,arguments[i]);}return obj;};dojo._getProp=function(_12,_13,_14){var obj=_14||d.global;for(var i=0,p;obj&&(p=_12[i]);i++){if(i==0&&d._scopeMap[p]){p=d._scopeMap[p];}obj=(p in obj?obj[p]:(_13?obj[p]={}:undefined));}return obj;};dojo.setObject=function(_15,_16,_17){var _18=_15.split("."),p=_18.pop(),obj=d._getProp(_18,true,_17);return obj&&p?(obj[p]=_16):undefined;};dojo.getObject=function(_19,_1a,_1b){return d._getProp(_19.split("."),_1a,_1b);};dojo.exists=function(_1c,obj){return d.getObject(_1c,false,obj)!==undefined;};dojo["eval"]=function(_1d){return d.global.eval?d.global.eval(_1d):eval(_1d);};d.deprecated=d.experimental=function(){};})();(function(){var d=dojo,_1e;d.mixin(d,{_loadedModules:{},_inFlightCount:0,_hasResource:{},_modulePrefixes:{dojo:{name:"dojo",value:"."},doh:{name:"doh",value:"../util/doh"},tests:{name:"tests",value:"tests"}},_moduleHasPrefix:function(_1f){var mp=d._modulePrefixes;return !!(mp[_1f]&&mp[_1f].value);},_getModulePrefix:function(_20){var mp=d._modulePrefixes;if(d._moduleHasPrefix(_20)){return mp[_20].value;}return _20;},_loadedUrls:[],_postLoad:false,_loaders:[],_unloaders:[],_loadNotifying:false});dojo._loadPath=function(_21,_22,cb){var uri=((_21.charAt(0)=="/"||_21.match(/^\w+:/))?"":d.baseUrl)+_21;try{_1e=_22;return !_22?d._loadUri(uri,cb):d._loadUriAndCheck(uri,_22,cb);}catch(e){console.error(e);return false;}finally{_1e=null;}};dojo._loadUri=function(uri,cb){if(d._loadedUrls[uri]){return true;}d._inFlightCount++;var _23=d._getText(uri,true);if(_23){d._loadedUrls[uri]=true;d._loadedUrls.push(uri);if(cb){_23=/^define\(/.test(_23)?_23:"("+_23+")";}else{_23=d._scopePrefix+_23+d._scopeSuffix;}if(!d.isIE){_23+="\r\n//@ sourceURL="+uri;}var _24=d["eval"](_23);if(cb){cb(_24);}}if(--d._inFlightCount==0&&d._postLoad&&d._loaders.length){setTimeout(function(){if(d._inFlightCount==0){d._callLoaded();}},0);}return !!_23;};dojo._loadUriAndCheck=function(uri,_25,cb){var ok=false;try{ok=d._loadUri(uri,cb);}catch(e){console.error("failed loading "+uri+" with error: "+e);}return !!(ok&&d._loadedModules[_25]);};dojo.loaded=function(){d._loadNotifying=true;d._postLoad=true;var mll=d._loaders;d._loaders=[];for(var x=0;x<mll.length;x++){mll[x]();}d._loadNotifying=false;if(d._postLoad&&d._inFlightCount==0&&mll.length){d._callLoaded();}};dojo.unloaded=function(){var mll=d._unloaders;while(mll.length){(mll.pop())();}};d._onto=function(arr,obj,fn){if(!fn){arr.push(obj);}else{if(fn){var _26=(typeof fn=="string")?obj[fn]:fn;arr.push(function(){_26.call(obj);});}}};dojo.ready=dojo.addOnLoad=function(obj,_27){d._onto(d._loaders,obj,_27);if(d._postLoad&&d._inFlightCount==0&&!d._loadNotifying){d._callLoaded();}};var dca=d.config.addOnLoad;if(dca){d.addOnLoad[(dca instanceof Array?"apply":"call")](d,dca);}dojo._modulesLoaded=function(){if(d._postLoad){return;}if(d._inFlightCount>0){console.warn("files still in flight!");return;}d._callLoaded();};dojo._callLoaded=function(){if(typeof setTimeout=="object"||(d.config.useXDomain&&d.isOpera)){setTimeout(d.isAIR?function(){d.loaded();}:d._scopeName+".loaded();",0);}else{d.loaded();}};dojo._getModuleSymbols=function(_28){var _29=_28.split(".");for(var i=_29.length;i>0;i--){var _2a=_29.slice(0,i).join(".");if(i==1&&!d._moduleHasPrefix(_2a)){_29[0]="../"+_29[0];}else{var _2b=d._getModulePrefix(_2a);if(_2b!=_2a){_29.splice(0,i,_2b);break;}}}return _29;};dojo._global_omit_module_check=false;dojo.loadInit=function(_2c){_2c();};dojo._loadModule=dojo.require=function(_2d,_2e){_2e=d._global_omit_module_check||_2e;var _2f=d._loadedModules[_2d];if(_2f){return _2f;}var _30=d._getModuleSymbols(_2d).join("/")+".js";var _31=!_2e?_2d:null;var ok=d._loadPath(_30,_31);if(!ok&&!_2e){throw new Error("Could not load '"+_2d+"'; last tried '"+_30+"'");}if(!_2e&&!d._isXDomain){_2f=d._loadedModules[_2d];if(!_2f){throw new Error("symbol '"+_2d+"' is not defined after loading '"+_30+"'");}}return _2f;};dojo.provide=function(_32){_32=_32+"";return (d._loadedModules[_32]=d.getObject(_32,true));};dojo.platformRequire=function(_33){var _34=_33.common||[];var _35=_34.concat(_33[d._name]||_33["default"]||[]);for(var x=0;x<_35.length;x++){var _36=_35[x];if(_36.constructor==Array){d._loadModule.apply(d,_36);}else{d._loadModule(_36);}}};dojo.requireIf=function(_37,_38){if(_37===true){var _39=[];for(var i=1;i<arguments.length;i++){_39.push(arguments[i]);}d.require.apply(d,_39);}};dojo.requireAfterIf=d.requireIf;dojo.registerModulePath=function(_3a,_3b){d._modulePrefixes[_3a]={name:_3a,value:_3b};};dojo.requireLocalization=function(_3c,_3d,_3e,_3f){d.require("dojo.i18n");d.i18n._requireLocalization.apply(d.hostenv,arguments);};var ore=new RegExp("^(([^:/?#]+):)?(//([^/?#]*))?([^?#]*)(\\?([^#]*))?(#(.*))?$"),ire=new RegExp("^((([^\\[:]+):)?([^@]+)@)?(\\[([^\\]]+)\\]|([^\\[:]*))(:([0-9]+))?$");dojo._Url=function(){var n=null,_40=arguments,uri=[_40[0]];for(var i=1;i<_40.length;i++){if(!_40[i]){continue;}var _41=new d._Url(_40[i]+""),_42=new d._Url(uri[0]+"");if(_41.path==""&&!_41.scheme&&!_41.authority&&!_41.query){if(_41.fragment!=n){_42.fragment=_41.fragment;}_41=_42;}else{if(!_41.scheme){_41.scheme=_42.scheme;if(!_41.authority){_41.authority=_42.authority;if(_41.path.charAt(0)!="/"){var _43=_42.path.substring(0,_42.path.lastIndexOf("/")+1)+_41.path;var _44=_43.split("/");for(var j=0;j<_44.length;j++){if(_44[j]=="."){if(j==_44.length-1){_44[j]="";}else{_44.splice(j,1);j--;}}else{if(j>0&&!(j==1&&_44[0]=="")&&_44[j]==".."&&_44[j-1]!=".."){if(j==(_44.length-1)){_44.splice(j,1);_44[j-1]="";}else{_44.splice(j-1,2);j-=2;}}}}_41.path=_44.join("/");}}}}uri=[];if(_41.scheme){uri.push(_41.scheme,":");}if(_41.authority){uri.push("//",_41.authority);}uri.push(_41.path);if(_41.query){uri.push("?",_41.query);}if(_41.fragment){uri.push("#",_41.fragment);}}this.uri=uri.join("");var r=this.uri.match(ore);this.scheme=r[2]||(r[1]?"":n);this.authority=r[4]||(r[3]?"":n);this.path=r[5];this.query=r[7]||(r[6]?"":n);this.fragment=r[9]||(r[8]?"":n);if(this.authority!=n){r=this.authority.match(ire);this.user=r[3]||n;this.password=r[4]||n;this.host=r[6]||r[7];this.port=r[9]||n;}};dojo._Url.prototype.toString=function(){return this.uri;};dojo.moduleUrl=function(_45,url){var loc=d._getModuleSymbols(_45).join("/");if(!loc){return null;}if(loc.lastIndexOf("/")!=loc.length-1){loc+="/";}var _46=loc.indexOf(":");if(loc.charAt(0)!="/"&&(_46==-1||_46>loc.indexOf("/"))){loc=d.baseUrl+loc;}return new d._Url(loc,url);};})();if(typeof window!="undefined"){dojo.isBrowser=true;dojo._name="browser";(function(){var d=dojo;if(document&&document.getElementsByTagName){var _47=document.getElementsByTagName("script");var _48=/dojo(\.xd)?\.js(\W|$)/i;for(var i=0;i<_47.length;i++){var src=_47[i].getAttribute("src");if(!src){continue;}var m=src.match(_48);if(m){if(!d.config.baseUrl){d.config.baseUrl=src.substring(0,m.index);}var cfg=(_47[i].getAttribute("djConfig")||_47[i].getAttribute("data-dojo-config"));if(cfg){var _49=eval("({ "+cfg+" })");for(var x in _49){dojo.config[x]=_49[x];}}break;}}}d.baseUrl=d.config.baseUrl;var n=navigator;var dua=n.userAgent,dav=n.appVersion,tv=parseFloat(dav);if(dua.indexOf("Opera")>=0){d.isOpera=tv;}if(dua.indexOf("AdobeAIR")>=0){d.isAIR=1;}d.isKhtml=(dav.indexOf("Konqueror")>=0)?tv:0;d.isWebKit=parseFloat(dua.split("WebKit/")[1])||undefined;d.isChrome=parseFloat(dua.split("Chrome/")[1])||undefined;d.isMac=dav.indexOf("Macintosh")>=0;var _4a=Math.max(dav.indexOf("WebKit"),dav.indexOf("Safari"),0);if(_4a&&!dojo.isChrome){d.isSafari=parseFloat(dav.split("Version/")[1]);if(!d.isSafari||parseFloat(dav.substr(_4a+7))<=419.3){d.isSafari=2;}}if(dua.indexOf("Gecko")>=0&&!d.isKhtml&&!d.isWebKit){d.isMozilla=d.isMoz=tv;}if(d.isMoz){d.isFF=parseFloat(dua.split("Firefox/")[1]||dua.split("Minefield/")[1])||undefined;}if(document.all&&!d.isOpera){d.isIE=parseFloat(dav.split("MSIE ")[1])||undefined;var _4b=document.documentMode;if(_4b&&_4b!=5&&Math.floor(d.isIE)!=_4b){d.isIE=_4b;}}if(dojo.isIE&&window.location.protocol==="file:"){dojo.config.ieForceActiveXXhr=true;}d.isQuirks=document.compatMode=="BackCompat";d.locale=dojo.config.locale||(d.isIE?n.userLanguage:n.language).toLowerCase();d._XMLHTTP_PROGIDS=["Msxml2.XMLHTTP","Microsoft.XMLHTTP","Msxml2.XMLHTTP.4.0"];d._xhrObj=function(){var _4c,_4d;if(!dojo.isIE||!dojo.config.ieForceActiveXXhr){try{_4c=new XMLHttpRequest();}catch(e){}}if(!_4c){for(var i=0;i<3;++i){var _4e=d._XMLHTTP_PROGIDS[i];try{_4c=new ActiveXObject(_4e);}catch(e){_4d=e;}if(_4c){d._XMLHTTP_PROGIDS=[_4e];break;}}}if(!_4c){throw new Error("XMLHTTP not available: "+_4d);}return _4c;};d._isDocumentOk=function(_4f){var _50=_4f.status||0,lp=location.protocol;return (_50>=200&&_50<300)||_50==304||_50==1223||(!_50&&(lp=="file:"||lp=="chrome:"||lp=="chrome-extension:"||lp=="app:"));};var _51=window.location+"";var _52=document.getElementsByTagName("base");var _53=(_52&&_52.length>0);d._getText=function(uri,_54){var _55=d._xhrObj();if(!_53&&dojo._Url){uri=(new dojo._Url(_51,uri)).toString();}if(d.config.cacheBust){uri+="";uri+=(uri.indexOf("?")==-1?"?":"&")+String(d.config.cacheBust).replace(/\W+/g,"");}_55.open("GET",uri,false);try{_55.send(null);if(!d._isDocumentOk(_55)){var err=Error("Unable to load "+uri+" status:"+_55.status);err.status=_55.status;err.responseText=_55.responseText;throw err;}}catch(e){if(_54){return null;}throw e;}return _55.responseText;};var _56=window;var _57=function(_58,fp){var _59=_56.attachEvent||_56.addEventListener;_58=_56.attachEvent?_58:_58.substring(2);_59(_58,function(){fp.apply(_56,arguments);},false);};d._windowUnloaders=[];d.windowUnloaded=function(){var mll=d._windowUnloaders;while(mll.length){(mll.pop())();}d=null;};var _5a=0;d.addOnWindowUnload=function(obj,_5b){d._onto(d._windowUnloaders,obj,_5b);if(!_5a){_5a=1;_57("onunload",d.windowUnloaded);}};var _5c=0;d.addOnUnload=function(obj,_5d){d._onto(d._unloaders,obj,_5d);if(!_5c){_5c=1;_57("onbeforeunload",dojo.unloaded);}};})();dojo._initFired=false;dojo._loadInit=function(e){if(dojo._scrollIntervalId){clearInterval(dojo._scrollIntervalId);dojo._scrollIntervalId=0;}if(!dojo._initFired){dojo._initFired=true;if(!dojo.config.afterOnLoad&&window.detachEvent){window.detachEvent("onload",dojo._loadInit);}if(dojo._inFlightCount==0){dojo._modulesLoaded();}}};if(!dojo.config.afterOnLoad){if(document.addEventListener){document.addEventListener("DOMContentLoaded",dojo._loadInit,false);window.addEventListener("load",dojo._loadInit,false);}else{if(window.attachEvent){window.attachEvent("onload",dojo._loadInit);if(!dojo.config.skipIeDomLoaded&&self===self.top){dojo._scrollIntervalId=setInterval(function(){try{if(document.body){document.documentElement.doScroll("left");dojo._loadInit();}}catch(e){}},30);}}}}if(dojo.isIE){try{(function(){document.namespaces.add("v","urn:schemas-microsoft-com:vml");var _5e=["*","group","roundrect","oval","shape","rect","imagedata","path","textpath","text"],i=0,l=1,s=document.createStyleSheet();if(dojo.isIE>=8){i=1;l=_5e.length;}for(;i<l;++i){s.addRule("v\\:"+_5e[i],"behavior:url(#default#VML); display:inline-block");}})();}catch(e){}}}(function(){var mp=dojo.config["modulePaths"];if(mp){for(var _5f in mp){dojo.registerModulePath(_5f,mp[_5f]);}}})();if(dojo.config.isDebug){dojo.require("dojo._firebug.firebug");}if(dojo.config.debugAtAllCosts){dojo.require("dojo._base._loader.loader_debug");dojo.require("dojo.i18n");}if(!dojo._hasResource["dojo._base.lang"]){dojo._hasResource["dojo._base.lang"]=true;dojo.provide("dojo._base.lang");(function(){var d=dojo,_60=Object.prototype.toString;dojo.isString=function(it){return (typeof it=="string"||it instanceof String);};dojo.isArray=function(it){return it&&(it instanceof Array||typeof it=="array");};dojo.isFunction=function(it){return _60.call(it)==="[object Function]";};dojo.isObject=function(it){return it!==undefined&&(it===null||typeof it=="object"||d.isArray(it)||d.isFunction(it));};dojo.isArrayLike=function(it){return it&&it!==undefined&&!d.isString(it)&&!d.isFunction(it)&&!(it.tagName&&it.tagName.toLowerCase()=="form")&&(d.isArray(it)||isFinite(it.length));};dojo.isAlien=function(it){return it&&!d.isFunction(it)&&/\{\s*\[native code\]\s*\}/.test(String(it));};dojo.extend=function(_61,_62){for(var i=1,l=arguments.length;i<l;i++){d._mixin(_61.prototype,arguments[i]);}return _61;};dojo._hitchArgs=function(_63,_64){var pre=d._toArray(arguments,2);var _65=d.isString(_64);return function(){var _66=d._toArray(arguments);var f=_65?(_63||d.global)[_64]:_64;return f&&f.apply(_63||this,pre.concat(_66));};};dojo.hitch=function(_67,_68){if(arguments.length>2){return d._hitchArgs.apply(d,arguments);}if(!_68){_68=_67;_67=null;}if(d.isString(_68)){_67=_67||d.global;if(!_67[_68]){throw (["dojo.hitch: scope[\"",_68,"\"] is null (scope=\"",_67,"\")"].join(""));}return function(){return _67[_68].apply(_67,arguments||[]);};}return !_67?_68:function(){return _68.apply(_67,arguments||[]);};};dojo.delegate=dojo._delegate=(function(){function TMP(){};return function(obj,_69){TMP.prototype=obj;var tmp=new TMP();TMP.prototype=null;if(_69){d._mixin(tmp,_69);}return tmp;};})();var _6a=function(obj,_6b,_6c){return (_6c||[]).concat(Array.prototype.slice.call(obj,_6b||0));};var _6d=function(obj,_6e,_6f){var arr=_6f||[];for(var x=_6e||0;x<obj.length;x++){arr.push(obj[x]);}return arr;};dojo._toArray=d.isIE?function(obj){return ((obj.item)?_6d:_6a).apply(this,arguments);}:_6a;dojo.partial=function(_70){var arr=[null];return d.hitch.apply(d,arr.concat(d._toArray(arguments)));};var _71=d._extraNames,_72=_71.length,_73={};dojo.clone=function(o){if(!o||typeof o!="object"||d.isFunction(o)){return o;}if(o.nodeType&&"cloneNode" in o){return o.cloneNode(true);}if(o instanceof Date){return new Date(o.getTime());}if(o instanceof RegExp){return new RegExp(o);}var r,i,l,s,_74;if(d.isArray(o)){r=[];for(i=0,l=o.length;i<l;++i){if(i in o){r.push(d.clone(o[i]));}}}else{r=o.constructor?new o.constructor():{};}for(_74 in o){s=o[_74];if(!(_74 in r)||(r[_74]!==s&&(!(_74 in _73)||_73[_74]!==s))){r[_74]=d.clone(s);}}if(_72){for(i=0;i<_72;++i){_74=_71[i];s=o[_74];if(!(_74 in r)||(r[_74]!==s&&(!(_74 in _73)||_73[_74]!==s))){r[_74]=s;}}}return r;};dojo.trim=String.prototype.trim?function(str){return str.trim();}:function(str){return str.replace(/^\s\s*/,"").replace(/\s\s*$/,"");};var _75=/\{([^\}]+)\}/g;dojo.replace=function(_76,map,_77){return _76.replace(_77||_75,d.isFunction(map)?map:function(_78,k){return d.getObject(k,false,map);});};})();}if(!dojo._hasResource["dojo._base.array"]){dojo._hasResource["dojo._base.array"]=true;dojo.provide("dojo._base.array");(function(){var _79=function(arr,obj,cb){return [(typeof arr=="string")?arr.split(""):arr,obj||dojo.global,(typeof cb=="string")?new Function("item","index","array",cb):cb];};var _7a=function(_7b,arr,_7c,_7d){var _7e=_79(arr,_7d,_7c);arr=_7e[0];for(var i=0,l=arr.length;i<l;++i){var _7f=!!_7e[2].call(_7e[1],arr[i],i,arr);if(_7b^_7f){return _7f;}}return _7b;};dojo.mixin(dojo,{indexOf:function(_80,_81,_82,_83){var _84=1,end=_80.length||0,i=0;if(_83){i=end-1;_84=end=-1;}if(_82!=undefined){i=_82;}if((_83&&i>end)||i<end){for(;i!=end;i+=_84){if(_80[i]==_81){return i;}}}return -1;},lastIndexOf:function(_85,_86,_87){return dojo.indexOf(_85,_86,_87,true);},forEach:function(arr,_88,_89){if(!arr||!arr.length){return;}var _8a=_79(arr,_89,_88);arr=_8a[0];for(var i=0,l=arr.length;i<l;++i){_8a[2].call(_8a[1],arr[i],i,arr);}},every:function(arr,_8b,_8c){return _7a(true,arr,_8b,_8c);},some:function(arr,_8d,_8e){return _7a(false,arr,_8d,_8e);},map:function(arr,_8f,_90){var _91=_79(arr,_90,_8f);arr=_91[0];var _92=(arguments[3]?(new arguments[3]()):[]);for(var i=0,l=arr.length;i<l;++i){_92.push(_91[2].call(_91[1],arr[i],i,arr));}return _92;},filter:function(arr,_93,_94){var _95=_79(arr,_94,_93);arr=_95[0];var _96=[];for(var i=0,l=arr.length;i<l;++i){if(_95[2].call(_95[1],arr[i],i,arr)){_96.push(arr[i]);}}return _96;}});})();}if(!dojo._hasResource["dojo._base.declare"]){dojo._hasResource["dojo._base.declare"]=true;dojo.provide("dojo._base.declare");(function(){var d=dojo,mix=d._mixin,op=Object.prototype,_97=op.toString,_98=new Function,_99=0,_9a="constructor";function err(msg,cls){throw new Error("declare"+(cls?" "+cls:"")+": "+msg);};function _9b(_9c,_9d){var _9e=[],_9f=[{cls:0,refs:[]}],_a0={},_a1=1,l=_9c.length,i=0,j,lin,_a2,top,_a3,rec,_a4,_a5;for(;i<l;++i){_a2=_9c[i];if(!_a2){err("mixin #"+i+" is unknown. Did you use dojo.require to pull it in?",_9d);}else{if(_97.call(_a2)!="[object Function]"){err("mixin #"+i+" is not a callable constructor.",_9d);}}lin=_a2._meta?_a2._meta.bases:[_a2];top=0;for(j=lin.length-1;j>=0;--j){_a3=lin[j].prototype;if(!_a3.hasOwnProperty("declaredClass")){_a3.declaredClass="uniqName_"+(_99++);}_a4=_a3.declaredClass;if(!_a0.hasOwnProperty(_a4)){_a0[_a4]={count:0,refs:[],cls:lin[j]};++_a1;}rec=_a0[_a4];if(top&&top!==rec){rec.refs.push(top);++top.count;}top=rec;}++top.count;_9f[0].refs.push(top);}while(_9f.length){top=_9f.pop();_9e.push(top.cls);--_a1;while(_a5=top.refs,_a5.length==1){top=_a5[0];if(!top||--top.count){top=0;break;}_9e.push(top.cls);--_a1;}if(top){for(i=0,l=_a5.length;i<l;++i){top=_a5[i];if(!--top.count){_9f.push(top);}}}}if(_a1){err("can't build consistent linearization",_9d);}_a2=_9c[0];_9e[0]=_a2?_a2._meta&&_a2===_9e[_9e.length-_a2._meta.bases.length]?_a2._meta.bases.length:1:0;return _9e;};function _a6(_a7,a,f){var _a8,_a9,_aa,_ab,_ac,_ad,_ae,opf,pos,_af=this._inherited=this._inherited||{};if(typeof _a7=="string"){_a8=_a7;_a7=a;a=f;}f=0;_ab=_a7.callee;_a8=_a8||_ab.nom;if(!_a8){err("can't deduce a name to call inherited()",this.declaredClass);}_ac=this.constructor._meta;_aa=_ac.bases;pos=_af.p;if(_a8!=_9a){if(_af.c!==_ab){pos=0;_ad=_aa[0];_ac=_ad._meta;if(_ac.hidden[_a8]!==_ab){_a9=_ac.chains;if(_a9&&typeof _a9[_a8]=="string"){err("calling chained method with inherited: "+_a8,this.declaredClass);}do{_ac=_ad._meta;_ae=_ad.prototype;if(_ac&&(_ae[_a8]===_ab&&_ae.hasOwnProperty(_a8)||_ac.hidden[_a8]===_ab)){break;}}while(_ad=_aa[++pos]);pos=_ad?pos:-1;}}_ad=_aa[++pos];if(_ad){_ae=_ad.prototype;if(_ad._meta&&_ae.hasOwnProperty(_a8)){f=_ae[_a8];}else{opf=op[_a8];do{_ae=_ad.prototype;f=_ae[_a8];if(f&&(_ad._meta?_ae.hasOwnProperty(_a8):f!==opf)){break;}}while(_ad=_aa[++pos]);}}f=_ad&&f||op[_a8];}else{if(_af.c!==_ab){pos=0;_ac=_aa[0]._meta;if(_ac&&_ac.ctor!==_ab){_a9=_ac.chains;if(!_a9||_a9.constructor!=="manual"){err("calling chained constructor with inherited",this.declaredClass);}while(_ad=_aa[++pos]){_ac=_ad._meta;if(_ac&&_ac.ctor===_ab){break;}}pos=_ad?pos:-1;}}while(_ad=_aa[++pos]){_ac=_ad._meta;f=_ac?_ac.ctor:_ad;if(f){break;}}f=_ad&&f;}_af.c=f;_af.p=pos;if(f){return a===true?f:f.apply(this,a||_a7);}};function _b0(_b1,_b2){if(typeof _b1=="string"){return this.inherited(_b1,_b2,true);}return this.inherited(_b1,true);};function _b3(cls){var _b4=this.constructor._meta.bases;for(var i=0,l=_b4.length;i<l;++i){if(_b4[i]===cls){return true;}}return this instanceof cls;};function _b5(_b6,_b7){var _b8,i=0,l=d._extraNames.length;for(_b8 in _b7){if(_b8!=_9a&&_b7.hasOwnProperty(_b8)){_b6[_b8]=_b7[_b8];}}for(;i<l;++i){_b8=d._extraNames[i];if(_b8!=_9a&&_b7.hasOwnProperty(_b8)){_b6[_b8]=_b7[_b8];}}};function _b9(_ba,_bb){var _bc,t,i=0,l=d._extraNames.length;for(_bc in _bb){t=_bb[_bc];if((t!==op[_bc]||!(_bc in op))&&_bc!=_9a){if(_97.call(t)=="[object Function]"){t.nom=_bc;}_ba[_bc]=t;}}for(;i<l;++i){_bc=d._extraNames[i];t=_bb[_bc];if((t!==op[_bc]||!(_bc in op))&&_bc!=_9a){if(_97.call(t)=="[object Function]"){t.nom=_bc;}_ba[_bc]=t;}}return _ba;};function _bd(_be){_b9(this.prototype,_be);return this;};function _bf(_c0,_c1){return function(){var a=arguments,_c2=a,a0=a[0],f,i,m,l=_c0.length,_c3;if(!(this instanceof a.callee)){return _c4(a);}if(_c1&&(a0&&a0.preamble||this.preamble)){_c3=new Array(_c0.length);_c3[0]=a;for(i=0;;){a0=a[0];if(a0){f=a0.preamble;if(f){a=f.apply(this,a)||a;}}f=_c0[i].prototype;f=f.hasOwnProperty("preamble")&&f.preamble;if(f){a=f.apply(this,a)||a;}if(++i==l){break;}_c3[i]=a;}}for(i=l-1;i>=0;--i){f=_c0[i];m=f._meta;f=m?m.ctor:f;if(f){f.apply(this,_c3?_c3[i]:a);}}f=this.postscript;if(f){f.apply(this,_c2);}};};function _c5(_c6,_c7){return function(){var a=arguments,t=a,a0=a[0],f;if(!(this instanceof a.callee)){return _c4(a);}if(_c7){if(a0){f=a0.preamble;if(f){t=f.apply(this,t)||t;}}f=this.preamble;if(f){f.apply(this,t);}}if(_c6){_c6.apply(this,a);}f=this.postscript;if(f){f.apply(this,a);}};};function _c8(_c9){return function(){var a=arguments,i=0,f,m;if(!(this instanceof a.callee)){return _c4(a);}for(;f=_c9[i];++i){m=f._meta;f=m?m.ctor:f;if(f){f.apply(this,a);break;}}f=this.postscript;if(f){f.apply(this,a);}};};function _ca(_cb,_cc,_cd){return function(){var b,m,f,i=0,_ce=1;if(_cd){i=_cc.length-1;_ce=-1;}for(;b=_cc[i];i+=_ce){m=b._meta;f=(m?m.hidden:b.prototype)[_cb];if(f){f.apply(this,arguments);}}};};function _cf(_d0){_98.prototype=_d0.prototype;var t=new _98;_98.prototype=null;return t;};function _c4(_d1){var _d2=_d1.callee,t=_cf(_d2);_d2.apply(t,_d1);return t;};d.declare=function(_d3,_d4,_d5){if(typeof _d3!="string"){_d5=_d4;_d4=_d3;_d3="";}_d5=_d5||{};var _d6,i,t,_d7,_d8,_d9,_da,_db=1,_dc=_d4;if(_97.call(_d4)=="[object Array]"){_d9=_9b(_d4,_d3);t=_d9[0];_db=_d9.length-t;_d4=_d9[_db];}else{_d9=[0];if(_d4){if(_97.call(_d4)=="[object Function]"){t=_d4._meta;_d9=_d9.concat(t?t.bases:_d4);}else{err("base class is not a callable constructor.",_d3);}}else{if(_d4!==null){err("unknown base class. Did you use dojo.require to pull it in?",_d3);}}}if(_d4){for(i=_db-1;;--i){_d6=_cf(_d4);if(!i){break;}t=_d9[i];(t._meta?_b5:mix)(_d6,t.prototype);_d7=new Function;_d7.superclass=_d4;_d7.prototype=_d6;_d4=_d6.constructor=_d7;}}else{_d6={};}_b9(_d6,_d5);t=_d5.constructor;if(t!==op.constructor){t.nom=_9a;_d6.constructor=t;}for(i=_db-1;i;--i){t=_d9[i]._meta;if(t&&t.chains){_da=mix(_da||{},t.chains);}}if(_d6["-chains-"]){_da=mix(_da||{},_d6["-chains-"]);}t=!_da||!_da.hasOwnProperty(_9a);_d9[0]=_d7=(_da&&_da.constructor==="manual")?_c8(_d9):(_d9.length==1?_c5(_d5.constructor,t):_bf(_d9,t));_d7._meta={bases:_d9,hidden:_d5,chains:_da,parents:_dc,ctor:_d5.constructor};_d7.superclass=_d4&&_d4.prototype;_d7.extend=_bd;_d7.prototype=_d6;_d6.constructor=_d7;_d6.getInherited=_b0;_d6.inherited=_a6;_d6.isInstanceOf=_b3;if(_d3){_d6.declaredClass=_d3;d.setObject(_d3,_d7);}if(_da){for(_d8 in _da){if(_d6[_d8]&&typeof _da[_d8]=="string"&&_d8!=_9a){t=_d6[_d8]=_ca(_d8,_d9,_da[_d8]==="after");t.nom=_d8;}}}return _d7;};d.safeMixin=_b9;})();}if(!dojo._hasResource["dojo._base.connect"]){dojo._hasResource["dojo._base.connect"]=true;dojo.provide("dojo._base.connect");dojo._listener={getDispatcher:function(){return function(){var ap=Array.prototype,c=arguments.callee,ls=c._listeners,t=c.target,r=t&&t.apply(this,arguments),i,lls=[].concat(ls);for(i in lls){if(!(i in ap)){lls[i].apply(this,arguments);}}return r;};},add:function(_dd,_de,_df){_dd=_dd||dojo.global;var f=_dd[_de];if(!f||!f._listeners){var d=dojo._listener.getDispatcher();d.target=f;d._listeners=[];f=_dd[_de]=d;}return f._listeners.push(_df);},remove:function(_e0,_e1,_e2){var f=(_e0||dojo.global)[_e1];if(f&&f._listeners&&_e2--){delete f._listeners[_e2];}}};dojo.connect=function(obj,_e3,_e4,_e5,_e6){var a=arguments,_e7=[],i=0;_e7.push(dojo.isString(a[0])?null:a[i++],a[i++]);var a1=a[i+1];_e7.push(dojo.isString(a1)||dojo.isFunction(a1)?a[i++]:null,a[i++]);for(var l=a.length;i<l;i++){_e7.push(a[i]);}return dojo._connect.apply(this,_e7);};dojo._connect=function(obj,_e8,_e9,_ea){var l=dojo._listener,h=l.add(obj,_e8,dojo.hitch(_e9,_ea));return [obj,_e8,h,l];};dojo.disconnect=function(_eb){if(_eb&&_eb[0]!==undefined){dojo._disconnect.apply(this,_eb);delete _eb[0];}};dojo._disconnect=function(obj,_ec,_ed,_ee){_ee.remove(obj,_ec,_ed);};dojo._topics={};dojo.subscribe=function(_ef,_f0,_f1){return [_ef,dojo._listener.add(dojo._topics,_ef,dojo.hitch(_f0,_f1))];};dojo.unsubscribe=function(_f2){if(_f2){dojo._listener.remove(dojo._topics,_f2[0],_f2[1]);}};dojo.publish=function(_f3,_f4){var f=dojo._topics[_f3];if(f){f.apply(this,_f4||[]);}};dojo.connectPublisher=function(_f5,obj,_f6){var pf=function(){dojo.publish(_f5,arguments);};return _f6?dojo.connect(obj,_f6,pf):dojo.connect(obj,pf);};}if(!dojo._hasResource["dojo._base.Deferred"]){dojo._hasResource["dojo._base.Deferred"]=true;dojo.provide("dojo._base.Deferred");(function(){var _f7=function(){};var _f8=Object.freeze||function(){};dojo.Deferred=function(_f9){var _fa,_fb,_fc,_fd,_fe;var _ff=(this.promise={});function _100(_101){if(_fb){throw new Error("This deferred has already been resolved");}_fa=_101;_fb=true;_102();};function _102(){var _103;while(!_103&&_fe){var _104=_fe;_fe=_fe.next;if((_103=(_104.progress==_f7))){_fb=false;}var func=(_fc?_104.error:_104.resolved);if(func){try{var _105=func(_fa);if(_105&&typeof _105.then==="function"){_105.then(dojo.hitch(_104.deferred,"resolve"),dojo.hitch(_104.deferred,"reject"));continue;}var _106=_103&&_105===undefined;if(_103&&!_106){_fc=_105 instanceof Error;}_104.deferred[_106&&_fc?"reject":"resolve"](_106?_fa:_105);}catch(e){_104.deferred.reject(e);}}else{if(_fc){_104.deferred.reject(_fa);}else{_104.deferred.resolve(_fa);}}}};this.resolve=this.callback=function(_107){this.fired=0;this.results=[_107,null];_100(_107);};this.reject=this.errback=function(_108){_fc=true;this.fired=1;_100(_108);this.results=[null,_108];if(!_108||_108.log!==false){(dojo.config.deferredOnError||function(x){console.error(x);})(_108);}};this.progress=function(_109){var _10a=_fe;while(_10a){var _10b=_10a.progress;_10b&&_10b(_109);_10a=_10a.next;}};this.addCallbacks=function(_10c,_10d){this.then(_10c,_10d,_f7);return this;};this.then=_ff.then=function(_10e,_10f,_110){var _111=_110==_f7?this:new dojo.Deferred(_ff.cancel);var _112={resolved:_10e,error:_10f,progress:_110,deferred:_111};if(_fe){_fd=_fd.next=_112;}else{_fe=_fd=_112;}if(_fb){_102();}return _111.promise;};var _113=this;this.cancel=_ff.cancel=function(){if(!_fb){var _114=_f9&&_f9(_113);if(!_fb){if(!(_114 instanceof Error)){_114=new Error(_114);}_114.log=false;_113.reject(_114);}}};_f8(_ff);};dojo.extend(dojo.Deferred,{addCallback:function(_115){return this.addCallbacks(dojo.hitch.apply(dojo,arguments));},addErrback:function(_116){return this.addCallbacks(null,dojo.hitch.apply(dojo,arguments));},addBoth:function(_117){var _118=dojo.hitch.apply(dojo,arguments);return this.addCallbacks(_118,_118);},fired:-1});})();dojo.when=function(_119,_11a,_11b,_11c){if(_119&&typeof _119.then==="function"){return _119.then(_11a,_11b,_11c);}return _11a(_119);};}if(!dojo._hasResource["dojo._base.json"]){dojo._hasResource["dojo._base.json"]=true;dojo.provide("dojo._base.json");dojo.fromJson=function(json){return eval("("+json+")");};dojo._escapeString=function(str){return ("\""+str.replace(/(["\\])/g,"\\$1")+"\"").replace(/[\f]/g,"\\f").replace(/[\b]/g,"\\b").replace(/[\n]/g,"\\n").replace(/[\t]/g,"\\t").replace(/[\r]/g,"\\r");};dojo.toJsonIndentStr="\t";dojo.toJson=function(it,_11d,_11e){if(it===undefined){return "undefined";}var _11f=typeof it;if(_11f=="number"||_11f=="boolean"){return it+"";}if(it===null){return "null";}if(dojo.isString(it)){return dojo._escapeString(it);}var _120=arguments.callee;var _121;_11e=_11e||"";var _122=_11d?_11e+dojo.toJsonIndentStr:"";var tf=it.__json__||it.json;if(dojo.isFunction(tf)){_121=tf.call(it);if(it!==_121){return _120(_121,_11d,_122);}}if(it.nodeType&&it.cloneNode){throw new Error("Can't serialize DOM nodes");}var sep=_11d?" ":"";var _123=_11d?"\n":"";if(dojo.isArray(it)){var res=dojo.map(it,function(obj){var val=_120(obj,_11d,_122);if(typeof val!="string"){val="undefined";}return _123+_122+val;});return "["+res.join(","+sep)+_123+_11e+"]";}if(_11f=="function"){return null;}var _124=[],key;for(key in it){var _125,val;if(typeof key=="number"){_125="\""+key+"\"";}else{if(typeof key=="string"){_125=dojo._escapeString(key);}else{continue;}}val=_120(it[key],_11d,_122);if(typeof val!="string"){continue;}_124.push(_123+_122+_125+":"+sep+val);}return "{"+_124.join(","+sep)+_123+_11e+"}";};}if(!dojo._hasResource["dojo._base.Color"]){dojo._hasResource["dojo._base.Color"]=true;dojo.provide("dojo._base.Color");(function(){var d=dojo;dojo.Color=function(_126){if(_126){this.setColor(_126);}};dojo.Color.named={black:[0,0,0],silver:[192,192,192],gray:[128,128,128],white:[255,255,255],maroon:[128,0,0],red:[255,0,0],purple:[128,0,128],fuchsia:[255,0,255],green:[0,128,0],lime:[0,255,0],olive:[128,128,0],yellow:[255,255,0],navy:[0,0,128],blue:[0,0,255],teal:[0,128,128],aqua:[0,255,255],transparent:d.config.transparentColor||[255,255,255]};dojo.extend(dojo.Color,{r:255,g:255,b:255,a:1,_set:function(r,g,b,a){var t=this;t.r=r;t.g=g;t.b=b;t.a=a;},setColor:function(_127){if(d.isString(_127)){d.colorFromString(_127,this);}else{if(d.isArray(_127)){d.colorFromArray(_127,this);}else{this._set(_127.r,_127.g,_127.b,_127.a);if(!(_127 instanceof d.Color)){this.sanitize();}}}return this;},sanitize:function(){return this;},toRgb:function(){var t=this;return [t.r,t.g,t.b];},toRgba:function(){var t=this;return [t.r,t.g,t.b,t.a];},toHex:function(){var arr=d.map(["r","g","b"],function(x){var s=this[x].toString(16);return s.length<2?"0"+s:s;},this);return "#"+arr.join("");},toCss:function(_128){var t=this,rgb=t.r+", "+t.g+", "+t.b;return (_128?"rgba("+rgb+", "+t.a:"rgb("+rgb)+")";},toString:function(){return this.toCss(true);}});dojo.blendColors=function(_129,end,_12a,obj){var t=obj||new d.Color();d.forEach(["r","g","b","a"],function(x){t[x]=_129[x]+(end[x]-_129[x])*_12a;if(x!="a"){t[x]=Math.round(t[x]);}});return t.sanitize();};dojo.colorFromRgb=function(_12b,obj){var m=_12b.toLowerCase().match(/^rgba?\(([\s\.,0-9]+)\)/);return m&&dojo.colorFromArray(m[1].split(/\s*,\s*/),obj);};dojo.colorFromHex=function(_12c,obj){var t=obj||new d.Color(),bits=(_12c.length==4)?4:8,mask=(1<<bits)-1;_12c=Number("0x"+_12c.substr(1));if(isNaN(_12c)){return null;}d.forEach(["b","g","r"],function(x){var c=_12c&mask;_12c>>=bits;t[x]=bits==4?17*c:c;});t.a=1;return t;};dojo.colorFromArray=function(a,obj){var t=obj||new d.Color();t._set(Number(a[0]),Number(a[1]),Number(a[2]),Number(a[3]));if(isNaN(t.a)){t.a=1;}return t.sanitize();};dojo.colorFromString=function(str,obj){var a=d.Color.named[str];return a&&d.colorFromArray(a,obj)||d.colorFromRgb(str,obj)||d.colorFromHex(str,obj);};})();}if(!dojo._hasResource["dojo._base.window"]){dojo._hasResource["dojo._base.window"]=true;dojo.provide("dojo._base.window");dojo.doc=window["document"]||null;dojo.body=function(){return dojo.doc.body||dojo.doc.getElementsByTagName("body")[0];};dojo.setContext=function(_12d,_12e){dojo.global=_12d;dojo.doc=_12e;};dojo.withGlobal=function(_12f,_130,_131,_132){var _133=dojo.global;try{dojo.global=_12f;return dojo.withDoc.call(null,_12f.document,_130,_131,_132);}finally{dojo.global=_133;}};dojo.withDoc=function(_134,_135,_136,_137){var _138=dojo.doc,_139=dojo._bodyLtr,oldQ=dojo.isQuirks;try{dojo.doc=_134;delete dojo._bodyLtr;dojo.isQuirks=dojo.doc.compatMode=="BackCompat";if(_136&&typeof _135=="string"){_135=_136[_135];}return _135.apply(_136,_137||[]);}finally{dojo.doc=_138;delete dojo._bodyLtr;if(_139!==undefined){dojo._bodyLtr=_139;}dojo.isQuirks=oldQ;}};}if(!dojo._hasResource["dojo._base.event"]){dojo._hasResource["dojo._base.event"]=true;dojo.provide("dojo._base.event");(function(){var del=(dojo._event_listener={add:function(node,name,fp){if(!node){return;}name=del._normalizeEventName(name);fp=del._fixCallback(name,fp);if(!dojo.isIE&&(name=="mouseenter"||name=="mouseleave")){var ofp=fp;name=(name=="mouseenter")?"mouseover":"mouseout";fp=function(e){if(!dojo.isDescendant(e.relatedTarget,node)){return ofp.call(this,e);}};}node.addEventListener(name,fp,false);return fp;},remove:function(node,_13a,_13b){if(node){_13a=del._normalizeEventName(_13a);if(!dojo.isIE&&(_13a=="mouseenter"||_13a=="mouseleave")){_13a=(_13a=="mouseenter")?"mouseover":"mouseout";}node.removeEventListener(_13a,_13b,false);}},_normalizeEventName:function(name){return name.slice(0,2)=="on"?name.slice(2):name;},_fixCallback:function(name,fp){return name!="keypress"?fp:function(e){return fp.call(this,del._fixEvent(e,this));};},_fixEvent:function(evt,_13c){switch(evt.type){case "keypress":del._setKeyChar(evt);break;}return evt;},_setKeyChar:function(evt){evt.keyChar=evt.charCode>=32?String.fromCharCode(evt.charCode):"";evt.charOrCode=evt.keyChar||evt.keyCode;},_punctMap:{106:42,111:47,186:59,187:43,188:44,189:45,190:46,191:47,192:96,219:91,220:92,221:93,222:39}});dojo.fixEvent=function(evt,_13d){return del._fixEvent(evt,_13d);};dojo.stopEvent=function(evt){evt.preventDefault();evt.stopPropagation();};var _13e=dojo._listener;dojo._connect=function(obj,_13f,_140,_141,_142){var _143=obj&&(obj.nodeType||obj.attachEvent||obj.addEventListener);var lid=_143?(_142?2:1):0,l=[dojo._listener,del,_13e][lid];var h=l.add(obj,_13f,dojo.hitch(_140,_141));return [obj,_13f,h,lid];};dojo._disconnect=function(obj,_144,_145,_146){([dojo._listener,del,_13e][_146]).remove(obj,_144,_145);};dojo.keys={BACKSPACE:8,TAB:9,CLEAR:12,ENTER:13,SHIFT:16,CTRL:17,ALT:18,META:dojo.isSafari?91:224,PAUSE:19,CAPS_LOCK:20,ESCAPE:27,SPACE:32,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,LEFT_ARROW:37,UP_ARROW:38,RIGHT_ARROW:39,DOWN_ARROW:40,INSERT:45,DELETE:46,HELP:47,LEFT_WINDOW:91,RIGHT_WINDOW:92,SELECT:93,NUMPAD_0:96,NUMPAD_1:97,NUMPAD_2:98,NUMPAD_3:99,NUMPAD_4:100,NUMPAD_5:101,NUMPAD_6:102,NUMPAD_7:103,NUMPAD_8:104,NUMPAD_9:105,NUMPAD_MULTIPLY:106,NUMPAD_PLUS:107,NUMPAD_ENTER:108,NUMPAD_MINUS:109,NUMPAD_PERIOD:110,NUMPAD_DIVIDE:111,F1:112,F2:113,F3:114,F4:115,F5:116,F6:117,F7:118,F8:119,F9:120,F10:121,F11:122,F12:123,F13:124,F14:125,F15:126,NUM_LOCK:144,SCROLL_LOCK:145,copyKey:dojo.isMac&&!dojo.isAIR?(dojo.isSafari?91:224):17};var _147=dojo.isMac?"metaKey":"ctrlKey";dojo.isCopyKey=function(e){return e[_147];};if(dojo.isIE<9||(dojo.isIE&&dojo.isQuirks)){dojo.mouseButtons={LEFT:1,MIDDLE:4,RIGHT:2,isButton:function(e,_148){return e.button&_148;},isLeft:function(e){return e.button&1;},isMiddle:function(e){return e.button&4;},isRight:function(e){return e.button&2;}};}else{dojo.mouseButtons={LEFT:0,MIDDLE:1,RIGHT:2,isButton:function(e,_149){return e.button==_149;},isLeft:function(e){return e.button==0;},isMiddle:function(e){return e.button==1;},isRight:function(e){return e.button==2;}};}if(dojo.isIE){var _14a=function(e,code){try{return (e.keyCode=code);}catch(e){return 0;}};var iel=dojo._listener;var _14b=(dojo._ieListenersName="_"+dojo._scopeName+"_listeners");if(!dojo.config._allow_leaks){_13e=iel=dojo._ie_listener={handlers:[],add:function(_14c,_14d,_14e){_14c=_14c||dojo.global;var f=_14c[_14d];if(!f||!f[_14b]){var d=dojo._getIeDispatcher();d.target=f&&(ieh.push(f)-1);d[_14b]=[];f=_14c[_14d]=d;}return f[_14b].push(ieh.push(_14e)-1);},remove:function(_14f,_150,_151){var f=(_14f||dojo.global)[_150],l=f&&f[_14b];if(f&&l&&_151--){delete ieh[l[_151]];delete l[_151];}}};var ieh=iel.handlers;}dojo.mixin(del,{add:function(node,_152,fp){if(!node){return;}_152=del._normalizeEventName(_152);if(_152=="onkeypress"){var kd=node.onkeydown;if(!kd||!kd[_14b]||!kd._stealthKeydownHandle){var h=del.add(node,"onkeydown",del._stealthKeyDown);kd=node.onkeydown;kd._stealthKeydownHandle=h;kd._stealthKeydownRefs=1;}else{kd._stealthKeydownRefs++;}}return iel.add(node,_152,del._fixCallback(fp));},remove:function(node,_153,_154){_153=del._normalizeEventName(_153);iel.remove(node,_153,_154);if(_153=="onkeypress"){var kd=node.onkeydown;if(--kd._stealthKeydownRefs<=0){iel.remove(node,"onkeydown",kd._stealthKeydownHandle);delete kd._stealthKeydownHandle;}}},_normalizeEventName:function(_155){return _155.slice(0,2)!="on"?"on"+_155:_155;},_nop:function(){},_fixEvent:function(evt,_156){if(!evt){var w=_156&&(_156.ownerDocument||_156.document||_156).parentWindow||window;evt=w.event;}if(!evt){return (evt);}evt.target=evt.srcElement;evt.currentTarget=(_156||evt.srcElement);evt.layerX=evt.offsetX;evt.layerY=evt.offsetY;var se=evt.srcElement,doc=(se&&se.ownerDocument)||document;var _157=((dojo.isIE<6)||(doc["compatMode"]=="BackCompat"))?doc.body:doc.documentElement;var _158=dojo._getIeDocumentElementOffset();evt.pageX=evt.clientX+dojo._fixIeBiDiScrollLeft(_157.scrollLeft||0)-_158.x;evt.pageY=evt.clientY+(_157.scrollTop||0)-_158.y;if(evt.type=="mouseover"){evt.relatedTarget=evt.fromElement;}if(evt.type=="mouseout"){evt.relatedTarget=evt.toElement;}if(dojo.isIE<9||dojo.isQuirks){evt.stopPropagation=del._stopPropagation;evt.preventDefault=del._preventDefault;}return del._fixKeys(evt);},_fixKeys:function(evt){switch(evt.type){case "keypress":var c=("charCode" in evt?evt.charCode:evt.keyCode);if(c==10){c=0;evt.keyCode=13;}else{if(c==13||c==27){c=0;}else{if(c==3){c=99;}}}evt.charCode=c;del._setKeyChar(evt);break;}return evt;},_stealthKeyDown:function(evt){var kp=evt.currentTarget.onkeypress;if(!kp||!kp[_14b]){return;}var k=evt.keyCode;var _159=(k!=13||(dojo.isIE>=9&&!dojo.isQuirks))&&k!=32&&k!=27&&(k<48||k>90)&&(k<96||k>111)&&(k<186||k>192)&&(k<219||k>222);if(_159||evt.ctrlKey){var c=_159?0:k;if(evt.ctrlKey){if(k==3||k==13){return;}else{if(c>95&&c<106){c-=48;}else{if((!evt.shiftKey)&&(c>=65&&c<=90)){c+=32;}else{c=del._punctMap[c]||c;}}}}var faux=del._synthesizeEvent(evt,{type:"keypress",faux:true,charCode:c});kp.call(evt.currentTarget,faux);if(dojo.isIE<9||(dojo.isIE&&dojo.isQuirks)){evt.cancelBubble=faux.cancelBubble;}evt.returnValue=faux.returnValue;_14a(evt,faux.keyCode);}},_stopPropagation:function(){this.cancelBubble=true;},_preventDefault:function(){this.bubbledKeyCode=this.keyCode;if(this.ctrlKey){_14a(this,0);}this.returnValue=false;}});dojo.stopEvent=(dojo.isIE<9||dojo.isQuirks)?function(evt){evt=evt||window.event;del._stopPropagation.call(evt);del._preventDefault.call(evt);}:dojo.stopEvent;}del._synthesizeEvent=function(evt,_15a){var faux=dojo.mixin({},evt,_15a);del._setKeyChar(faux);faux.preventDefault=function(){evt.preventDefault();};faux.stopPropagation=function(){evt.stopPropagation();};return faux;};if(dojo.isOpera){dojo.mixin(del,{_fixEvent:function(evt,_15b){switch(evt.type){case "keypress":var c=evt.which;if(c==3){c=99;}c=c<41&&!evt.shiftKey?0:c;if(evt.ctrlKey&&!evt.shiftKey&&c>=65&&c<=90){c+=32;}return del._synthesizeEvent(evt,{charCode:c});}return evt;}});}if(dojo.isWebKit){del._add=del.add;del._remove=del.remove;dojo.mixin(del,{add:function(node,_15c,fp){if(!node){return;}var _15d=del._add(node,_15c,fp);if(del._normalizeEventName(_15c)=="keypress"){_15d._stealthKeyDownHandle=del._add(node,"keydown",function(evt){var k=evt.keyCode;var _15e=k!=13&&k!=32&&(k<48||k>90)&&(k<96||k>111)&&(k<186||k>192)&&(k<219||k>222);if(_15e||evt.ctrlKey){var c=_15e?0:k;if(evt.ctrlKey){if(k==3||k==13){return;}else{if(c>95&&c<106){c-=48;}else{if(!evt.shiftKey&&c>=65&&c<=90){c+=32;}else{c=del._punctMap[c]||c;}}}}var faux=del._synthesizeEvent(evt,{type:"keypress",faux:true,charCode:c});fp.call(evt.currentTarget,faux);}});}return _15d;},remove:function(node,_15f,_160){if(node){if(_160._stealthKeyDownHandle){del._remove(node,"keydown",_160._stealthKeyDownHandle);}del._remove(node,_15f,_160);}},_fixEvent:function(evt,_161){switch(evt.type){case "keypress":if(evt.faux){return evt;}var c=evt.charCode;c=c>=32?c:0;return del._synthesizeEvent(evt,{charCode:c,faux:true});}return evt;}});}})();if(dojo.isIE){dojo._ieDispatcher=function(args,_162){var ap=Array.prototype,h=dojo._ie_listener.handlers,c=args.callee,ls=c[dojo._ieListenersName],t=h[c.target];var r=t&&t.apply(_162,args);var lls=[].concat(ls);for(var i in lls){var f=h[lls[i]];if(!(i in ap)&&f){f.apply(_162,args);}}return r;};dojo._getIeDispatcher=function(){return new Function(dojo._scopeName+"._ieDispatcher(arguments, this)");};dojo._event_listener._fixCallback=function(fp){var f=dojo._event_listener._fixEvent;return function(e){return fp.call(this,f(e,this));};};}}if(!dojo._hasResource["dojo._base.html"]){dojo._hasResource["dojo._base.html"]=true;dojo.provide("dojo._base.html");try{document.execCommand("BackgroundImageCache",false,true);}catch(e){}if(dojo.isIE){dojo.byId=function(id,doc){if(typeof id!="string"){return id;}var _163=doc||dojo.doc,te=_163.getElementById(id);if(te&&(te.attributes.id.value==id||te.id==id)){return te;}else{var eles=_163.all[id];if(!eles||eles.nodeName){eles=[eles];}var i=0;while((te=eles[i++])){if((te.attributes&&te.attributes.id&&te.attributes.id.value==id)||te.id==id){return te;}}}};}else{dojo.byId=function(id,doc){return ((typeof id=="string")?(doc||dojo.doc).getElementById(id):id)||null;};}(function(){var d=dojo;var byId=d.byId;var _164=null,_165;d.addOnWindowUnload(function(){_164=null;});dojo._destroyElement=dojo.destroy=function(node){node=byId(node);try{var doc=node.ownerDocument;if(!_164||_165!=doc){_164=doc.createElement("div");_165=doc;}_164.appendChild(node.parentNode?node.parentNode.removeChild(node):node);_164.innerHTML="";}catch(e){}};dojo.isDescendant=function(node,_166){try{node=byId(node);_166=byId(_166);while(node){if(node==_166){return true;}node=node.parentNode;}}catch(e){}return false;};dojo.setSelectable=function(node,_167){node=byId(node);if(d.isMozilla){node.style.MozUserSelect=_167?"":"none";}else{if(d.isKhtml||d.isWebKit){node.style.KhtmlUserSelect=_167?"auto":"none";}else{if(d.isIE){var v=(node.unselectable=_167?"":"on");d.query("*",node).forEach("item.unselectable = '"+v+"'");}}}};var _168=function(node,ref){var _169=ref.parentNode;if(_169){_169.insertBefore(node,ref);}};var _16a=function(node,ref){var _16b=ref.parentNode;if(_16b){if(_16b.lastChild==ref){_16b.appendChild(node);}else{_16b.insertBefore(node,ref.nextSibling);}}};dojo.place=function(node,_16c,_16d){_16c=byId(_16c);if(typeof node=="string"){node=/^\s*</.test(node)?d._toDom(node,_16c.ownerDocument):byId(node);}if(typeof _16d=="number"){var cn=_16c.childNodes;if(!cn.length||cn.length<=_16d){_16c.appendChild(node);}else{_168(node,cn[_16d<0?0:_16d]);}}else{switch(_16d){case "before":_168(node,_16c);break;case "after":_16a(node,_16c);break;case "replace":_16c.parentNode.replaceChild(node,_16c);break;case "only":d.empty(_16c);_16c.appendChild(node);break;case "first":if(_16c.firstChild){_168(node,_16c.firstChild);break;}default:_16c.appendChild(node);}}return node;};dojo.boxModel="content-box";if(d.isIE){d.boxModel=document.compatMode=="BackCompat"?"border-box":"content-box";}var gcs;if(d.isWebKit){gcs=function(node){var s;if(node.nodeType==1){var dv=node.ownerDocument.defaultView;s=dv.getComputedStyle(node,null);if(!s&&node.style){node.style.display="";s=dv.getComputedStyle(node,null);}}return s||{};};}else{if(d.isIE){gcs=function(node){return node.nodeType==1?node.currentStyle:{};};}else{gcs=function(node){return node.nodeType==1?node.ownerDocument.defaultView.getComputedStyle(node,null):{};};}}dojo.getComputedStyle=gcs;if(!d.isIE){d._toPixelValue=function(_16e,_16f){return parseFloat(_16f)||0;};}else{d._toPixelValue=function(_170,_171){if(!_171){return 0;}if(_171=="medium"){return 4;}if(_171.slice&&_171.slice(-2)=="px"){return parseFloat(_171);}with(_170){var _172=style.left;var _173=runtimeStyle.left;runtimeStyle.left=currentStyle.left;try{style.left=_171;_171=style.pixelLeft;}catch(e){_171=0;}style.left=_172;runtimeStyle.left=_173;}return _171;};}var px=d._toPixelValue;var astr="DXImageTransform.Microsoft.Alpha";var af=function(n,f){try{return n.filters.item(astr);}catch(e){return f?{}:null;}};dojo._getOpacity=d.isIE<9?function(node){try{return af(node).Opacity/100;}catch(e){return 1;}}:function(node){return gcs(node).opacity;};dojo._setOpacity=d.isIE<9?function(node,_174){var ov=_174*100,_175=_174==1;node.style.zoom=_175?"":1;if(!af(node)){if(_175){return _174;}node.style.filter+=" progid:"+astr+"(Opacity="+ov+")";}else{af(node,1).Opacity=ov;}af(node,1).Enabled=!_175;if(node.nodeName.toLowerCase()=="tr"){d.query("> td",node).forEach(function(i){d._setOpacity(i,_174);});}return _174;}:function(node,_176){return node.style.opacity=_176;};var _177={left:true,top:true};var _178=/margin|padding|width|height|max|min|offset/;var _179=function(node,type,_17a){type=type.toLowerCase();if(d.isIE){if(_17a=="auto"){if(type=="height"){return node.offsetHeight;}if(type=="width"){return node.offsetWidth;}}if(type=="fontweight"){switch(_17a){case 700:return "bold";case 400:default:return "normal";}}}if(!(type in _177)){_177[type]=_178.test(type);}return _177[type]?px(node,_17a):_17a;};var _17b=d.isIE?"styleFloat":"cssFloat",_17c={"cssFloat":_17b,"styleFloat":_17b,"float":_17b};dojo.style=function(node,_17d,_17e){var n=byId(node),args=arguments.length,op=(_17d=="opacity");_17d=_17c[_17d]||_17d;if(args==3){return op?d._setOpacity(n,_17e):n.style[_17d]=_17e;}if(args==2&&op){return d._getOpacity(n);}var s=gcs(n);if(args==2&&typeof _17d!="string"){for(var x in _17d){d.style(node,x,_17d[x]);}return s;}return (args==1)?s:_179(n,_17d,s[_17d]||n.style[_17d]);};dojo._getPadExtents=function(n,_17f){var s=_17f||gcs(n),l=px(n,s.paddingLeft),t=px(n,s.paddingTop);return {l:l,t:t,w:l+px(n,s.paddingRight),h:t+px(n,s.paddingBottom)};};dojo._getBorderExtents=function(n,_180){var ne="none",s=_180||gcs(n),bl=(s.borderLeftStyle!=ne?px(n,s.borderLeftWidth):0),bt=(s.borderTopStyle!=ne?px(n,s.borderTopWidth):0);return {l:bl,t:bt,w:bl+(s.borderRightStyle!=ne?px(n,s.borderRightWidth):0),h:bt+(s.borderBottomStyle!=ne?px(n,s.borderBottomWidth):0)};};dojo._getPadBorderExtents=function(n,_181){var s=_181||gcs(n),p=d._getPadExtents(n,s),b=d._getBorderExtents(n,s);return {l:p.l+b.l,t:p.t+b.t,w:p.w+b.w,h:p.h+b.h};};dojo._getMarginExtents=function(n,_182){var s=_182||gcs(n),l=px(n,s.marginLeft),t=px(n,s.marginTop),r=px(n,s.marginRight),b=px(n,s.marginBottom);if(d.isWebKit&&(s.position!="absolute")){r=l;}return {l:l,t:t,w:l+r,h:t+b};};dojo._getMarginBox=function(node,_183){var s=_183||gcs(node),me=d._getMarginExtents(node,s);var l=node.offsetLeft-me.l,t=node.offsetTop-me.t,p=node.parentNode;if(d.isMoz){var sl=parseFloat(s.left),st=parseFloat(s.top);if(!isNaN(sl)&&!isNaN(st)){l=sl,t=st;}else{if(p&&p.style){var pcs=gcs(p);if(pcs.overflow!="visible"){var be=d._getBorderExtents(p,pcs);l+=be.l,t+=be.t;}}}}else{if(d.isOpera||(d.isIE>7&&!d.isQuirks)){if(p){be=d._getBorderExtents(p);l-=be.l;t-=be.t;}}}return {l:l,t:t,w:node.offsetWidth+me.w,h:node.offsetHeight+me.h};};dojo._getMarginSize=function(node,_184){node=byId(node);var me=d._getMarginExtents(node,_184||gcs(node));var size=node.getBoundingClientRect();return {w:(size.right-size.left)+me.w,h:(size.bottom-size.top)+me.h};};dojo._getContentBox=function(node,_185){var s=_185||gcs(node),pe=d._getPadExtents(node,s),be=d._getBorderExtents(node,s),w=node.clientWidth,h;if(!w){w=node.offsetWidth,h=node.offsetHeight;}else{h=node.clientHeight,be.w=be.h=0;}if(d.isOpera){pe.l+=be.l;pe.t+=be.t;}return {l:pe.l,t:pe.t,w:w-pe.w-be.w,h:h-pe.h-be.h};};dojo._getBorderBox=function(node,_186){var s=_186||gcs(node),pe=d._getPadExtents(node,s),cb=d._getContentBox(node,s);return {l:cb.l-pe.l,t:cb.t-pe.t,w:cb.w+pe.w,h:cb.h+pe.h};};dojo._setBox=function(node,l,t,w,h,u){u=u||"px";var s=node.style;if(!isNaN(l)){s.left=l+u;}if(!isNaN(t)){s.top=t+u;}if(w>=0){s.width=w+u;}if(h>=0){s.height=h+u;}};dojo._isButtonTag=function(node){return node.tagName=="BUTTON"||node.tagName=="INPUT"&&(node.getAttribute("type")||"").toUpperCase()=="BUTTON";};dojo._usesBorderBox=function(node){var n=node.tagName;return d.boxModel=="border-box"||n=="TABLE"||d._isButtonTag(node);};dojo._setContentSize=function(node,_187,_188,_189){if(d._usesBorderBox(node)){var pb=d._getPadBorderExtents(node,_189);if(_187>=0){_187+=pb.w;}if(_188>=0){_188+=pb.h;}}d._setBox(node,NaN,NaN,_187,_188);};dojo._setMarginBox=function(node,_18a,_18b,_18c,_18d,_18e){var s=_18e||gcs(node),bb=d._usesBorderBox(node),pb=bb?_18f:d._getPadBorderExtents(node,s);if(d.isWebKit){if(d._isButtonTag(node)){var ns=node.style;if(_18c>=0&&!ns.width){ns.width="4px";}if(_18d>=0&&!ns.height){ns.height="4px";}}}var mb=d._getMarginExtents(node,s);if(_18c>=0){_18c=Math.max(_18c-pb.w-mb.w,0);}if(_18d>=0){_18d=Math.max(_18d-pb.h-mb.h,0);}d._setBox(node,_18a,_18b,_18c,_18d);};var _18f={l:0,t:0,w:0,h:0};dojo.marginBox=function(node,box){var n=byId(node),s=gcs(n),b=box;return !b?d._getMarginBox(n,s):d._setMarginBox(n,b.l,b.t,b.w,b.h,s);};dojo.contentBox=function(node,box){var n=byId(node),s=gcs(n),b=box;return !b?d._getContentBox(n,s):d._setContentSize(n,b.w,b.h,s);};var _190=function(node,prop){if(!(node=(node||0).parentNode)){return 0;}var val,_191=0,_192=d.body();while(node&&node.style){if(gcs(node).position=="fixed"){return 0;}val=node[prop];if(val){_191+=val-0;if(node==_192){break;}}node=node.parentNode;}return _191;};dojo._docScroll=function(){var n=d.global;return "pageXOffset" in n?{x:n.pageXOffset,y:n.pageYOffset}:(n=d.isQuirks?d.doc.body:d.doc.documentElement,{x:d._fixIeBiDiScrollLeft(n.scrollLeft||0),y:n.scrollTop||0});};dojo._isBodyLtr=function(){return "_bodyLtr" in d?d._bodyLtr:d._bodyLtr=(d.body().dir||d.doc.documentElement.dir||"ltr").toLowerCase()=="ltr";};dojo._getIeDocumentElementOffset=function(){var de=d.doc.documentElement;if(d.isIE<8){var r=de.getBoundingClientRect();var l=r.left,t=r.top;if(d.isIE<7){l+=de.clientLeft;t+=de.clientTop;}return {x:l<0?0:l,y:t<0?0:t};}else{return {x:0,y:0};}};dojo._fixIeBiDiScrollLeft=function(_193){var ie=d.isIE;if(ie&&!d._isBodyLtr()){var qk=d.isQuirks,de=qk?d.doc.body:d.doc.documentElement;if(ie==6&&!qk&&d.global.frameElement&&de.scrollHeight>de.clientHeight){_193+=de.clientLeft;}return (ie<8||qk)?(_193+de.clientWidth-de.scrollWidth):-_193;}return _193;};dojo._abs=dojo.position=function(node,_194){node=byId(node);var db=d.body(),dh=db.parentNode,ret=node.getBoundingClientRect();ret={x:ret.left,y:ret.top,w:ret.right-ret.left,h:ret.bottom-ret.top};if(d.isIE){var _195=d._getIeDocumentElementOffset();ret.x-=_195.x+(d.isQuirks?db.clientLeft+db.offsetLeft:0);ret.y-=_195.y+(d.isQuirks?db.clientTop+db.offsetTop:0);}else{if(d.isFF==3){var cs=gcs(dh);ret.x-=px(dh,cs.marginLeft)+px(dh,cs.borderLeftWidth);ret.y-=px(dh,cs.marginTop)+px(dh,cs.borderTopWidth);}}if(_194){var _196=d._docScroll();ret.x+=_196.x;ret.y+=_196.y;}return ret;};dojo.coords=function(node,_197){var n=byId(node),s=gcs(n),mb=d._getMarginBox(n,s);var abs=d.position(n,_197);mb.x=abs.x;mb.y=abs.y;return mb;};var _198={"class":"className","for":"htmlFor",tabindex:"tabIndex",readonly:"readOnly",colspan:"colSpan",frameborder:"frameBorder",rowspan:"rowSpan",valuetype:"valueType"},_199={classname:"class",htmlfor:"for",tabindex:"tabIndex",readonly:"readOnly"},_19a={innerHTML:1,className:1,htmlFor:d.isIE,value:1};var _19b=function(name){return _199[name.toLowerCase()]||name;};var _19c=function(node,name){var attr=node.getAttributeNode&&node.getAttributeNode(name);return attr&&attr.specified;};dojo.hasAttr=function(node,name){var lc=name.toLowerCase();return _19a[_198[lc]||name]||_19c(byId(node),_199[lc]||name);};var _19d={},_19e=0,_19f=dojo._scopeName+"attrid",_1a0={col:1,colgroup:1,table:1,tbody:1,tfoot:1,thead:1,tr:1,title:1};dojo.attr=function(node,name,_1a1){node=byId(node);var args=arguments.length,prop;if(args==2&&typeof name!="string"){for(var x in name){d.attr(node,x,name[x]);}return node;}var lc=name.toLowerCase(),_1a2=_198[lc]||name,_1a3=_19a[_1a2],_1a4=_199[lc]||name;if(args==3){do{if(_1a2=="style"&&typeof _1a1!="string"){d.style(node,_1a1);break;}if(_1a2=="innerHTML"){if(d.isIE&&node.tagName.toLowerCase() in _1a0){d.empty(node);node.appendChild(d._toDom(_1a1,node.ownerDocument));}else{node[_1a2]=_1a1;}break;}if(d.isFunction(_1a1)){var _1a5=d.attr(node,_19f);if(!_1a5){_1a5=_19e++;d.attr(node,_19f,_1a5);}if(!_19d[_1a5]){_19d[_1a5]={};}var h=_19d[_1a5][_1a2];if(h){d.disconnect(h);}else{try{delete node[_1a2];}catch(e){}}_19d[_1a5][_1a2]=d.connect(node,_1a2,_1a1);break;}if(_1a3||typeof _1a1=="boolean"){node[_1a2]=_1a1;break;}node.setAttribute(_1a4,_1a1);}while(false);return node;}_1a1=node[_1a2];if(_1a3&&typeof _1a1!="undefined"){return _1a1;}if(_1a2!="href"&&(typeof _1a1=="boolean"||d.isFunction(_1a1))){return _1a1;}return _19c(node,_1a4)?node.getAttribute(_1a4):null;};dojo.removeAttr=function(node,name){byId(node).removeAttribute(_19b(name));};dojo.getNodeProp=function(node,name){node=byId(node);var lc=name.toLowerCase(),_1a6=_198[lc]||name;if((_1a6 in node)&&_1a6!="href"){return node[_1a6];}var _1a7=_199[lc]||name;return _19c(node,_1a7)?node.getAttribute(_1a7):null;};dojo.create=function(tag,_1a8,_1a9,pos){var doc=d.doc;if(_1a9){_1a9=byId(_1a9);doc=_1a9.ownerDocument;}if(typeof tag=="string"){tag=doc.createElement(tag);}if(_1a8){d.attr(tag,_1a8);}if(_1a9){d.place(tag,_1a9,pos);}return tag;};d.empty=d.isIE?function(node){node=byId(node);for(var c;c=node.lastChild;){d.destroy(c);}}:function(node){byId(node).innerHTML="";};var _1aa={option:["select"],tbody:["table"],thead:["table"],tfoot:["table"],tr:["table","tbody"],td:["table","tbody","tr"],th:["table","thead","tr"],legend:["fieldset"],caption:["table"],colgroup:["table"],col:["table","colgroup"],li:["ul"]},_1ab=/<\s*([\w\:]+)/,_1ac={},_1ad=0,_1ae="__"+d._scopeName+"ToDomId";for(var _1af in _1aa){if(_1aa.hasOwnProperty(_1af)){var tw=_1aa[_1af];tw.pre=_1af=="option"?"<select multiple=\"multiple\">":"<"+tw.join("><")+">";tw.post="</"+tw.reverse().join("></")+">";}}d._toDom=function(frag,doc){doc=doc||d.doc;var _1b0=doc[_1ae];if(!_1b0){doc[_1ae]=_1b0=++_1ad+"";_1ac[_1b0]=doc.createElement("div");}frag+="";var _1b1=frag.match(_1ab),tag=_1b1?_1b1[1].toLowerCase():"",_1b2=_1ac[_1b0],wrap,i,fc,df;if(_1b1&&_1aa[tag]){wrap=_1aa[tag];_1b2.innerHTML=wrap.pre+frag+wrap.post;for(i=wrap.length;i;--i){_1b2=_1b2.firstChild;}}else{_1b2.innerHTML=frag;}if(_1b2.childNodes.length==1){return _1b2.removeChild(_1b2.firstChild);}df=doc.createDocumentFragment();while(fc=_1b2.firstChild){df.appendChild(fc);}return df;};var _1b3="className";dojo.hasClass=function(node,_1b4){return ((" "+byId(node)[_1b3]+" ").indexOf(" "+_1b4+" ")>=0);};var _1b5=/\s+/,a1=[""],_1b6={},_1b7=function(s){if(typeof s=="string"||s instanceof String){if(s.indexOf(" ")<0){a1[0]=s;return a1;}else{return s.split(_1b5);}}return s||"";};dojo.addClass=function(node,_1b8){node=byId(node);_1b8=_1b7(_1b8);var cls=node[_1b3],_1b9;cls=cls?" "+cls+" ":" ";_1b9=cls.length;for(var i=0,len=_1b8.length,c;i<len;++i){c=_1b8[i];if(c&&cls.indexOf(" "+c+" ")<0){cls+=c+" ";}}if(_1b9<cls.length){node[_1b3]=cls.substr(1,cls.length-2);}};dojo.removeClass=function(node,_1ba){node=byId(node);var cls;if(_1ba!==undefined){_1ba=_1b7(_1ba);cls=" "+node[_1b3]+" ";for(var i=0,len=_1ba.length;i<len;++i){cls=cls.replace(" "+_1ba[i]+" "," ");}cls=d.trim(cls);}else{cls="";}if(node[_1b3]!=cls){node[_1b3]=cls;}};dojo.replaceClass=function(node,_1bb,_1bc){node=byId(node);_1b6.className=node.className;dojo.removeClass(_1b6,_1bc);dojo.addClass(_1b6,_1bb);if(node.className!==_1b6.className){node.className=_1b6.className;}};dojo.toggleClass=function(node,_1bd,_1be){if(_1be===undefined){_1be=!d.hasClass(node,_1bd);}d[_1be?"addClass":"removeClass"](node,_1bd);};})();}if(!dojo._hasResource["dojo._base.NodeList"]){dojo._hasResource["dojo._base.NodeList"]=true;dojo.provide("dojo._base.NodeList");(function(){var d=dojo;var ap=Array.prototype,aps=ap.slice,apc=ap.concat;var tnl=function(a,_1bf,_1c0){if(!a.sort){a=aps.call(a,0);}var ctor=_1c0||this._NodeListCtor||d._NodeListCtor;a.constructor=ctor;dojo._mixin(a,ctor.prototype);a._NodeListCtor=ctor;return _1bf?a._stash(_1bf):a;};var _1c1=function(f,a,o){a=[0].concat(aps.call(a,0));o=o||d.global;return function(node){a[0]=node;return f.apply(o,a);};};var _1c2=function(f,o){return function(){this.forEach(_1c1(f,arguments,o));return this;};};var _1c3=function(f,o){return function(){return this.map(_1c1(f,arguments,o));};};var _1c4=function(f,o){return function(){return this.filter(_1c1(f,arguments,o));};};var _1c5=function(f,g,o){return function(){var a=arguments,body=_1c1(f,a,o);if(g.call(o||d.global,a)){return this.map(body);}this.forEach(body);return this;};};var _1c6=function(a){return a.length==1&&(typeof a[0]=="string");};var _1c7=function(node){var p=node.parentNode;if(p){p.removeChild(node);}};dojo.NodeList=function(){return tnl(Array.apply(null,arguments));};d._NodeListCtor=d.NodeList;var nl=d.NodeList,nlp=nl.prototype;nl._wrap=nlp._wrap=tnl;nl._adaptAsMap=_1c3;nl._adaptAsForEach=_1c2;nl._adaptAsFilter=_1c4;nl._adaptWithCondition=_1c5;d.forEach(["slice","splice"],function(name){var f=ap[name];nlp[name]=function(){return this._wrap(f.apply(this,arguments),name=="slice"?this:null);};});d.forEach(["indexOf","lastIndexOf","every","some"],function(name){var f=d[name];nlp[name]=function(){return f.apply(d,[this].concat(aps.call(arguments,0)));};});d.forEach(["attr","style"],function(name){nlp[name]=_1c5(d[name],_1c6);});d.forEach(["connect","addClass","removeClass","replaceClass","toggleClass","empty","removeAttr"],function(name){nlp[name]=_1c2(d[name]);});dojo.extend(dojo.NodeList,{_normalize:function(_1c8,_1c9){var _1ca=_1c8.parse===true?true:false;if(typeof _1c8.template=="string"){var _1cb=_1c8.templateFunc||(dojo.string&&dojo.string.substitute);_1c8=_1cb?_1cb(_1c8.template,_1c8):_1c8;}var type=(typeof _1c8);if(type=="string"||type=="number"){_1c8=dojo._toDom(_1c8,(_1c9&&_1c9.ownerDocument));if(_1c8.nodeType==11){_1c8=dojo._toArray(_1c8.childNodes);}else{_1c8=[_1c8];}}else{if(!dojo.isArrayLike(_1c8)){_1c8=[_1c8];}else{if(!dojo.isArray(_1c8)){_1c8=dojo._toArray(_1c8);}}}if(_1ca){_1c8._runParse=true;}return _1c8;},_cloneNode:function(node){return node.cloneNode(true);},_place:function(ary,_1cc,_1cd,_1ce){if(_1cc.nodeType!=1&&_1cd=="only"){return;}var _1cf=_1cc,_1d0;var _1d1=ary.length;for(var i=_1d1-1;i>=0;i--){var node=(_1ce?this._cloneNode(ary[i]):ary[i]);if(ary._runParse&&dojo.parser&&dojo.parser.parse){if(!_1d0){_1d0=_1cf.ownerDocument.createElement("div");}_1d0.appendChild(node);dojo.parser.parse(_1d0);node=_1d0.firstChild;while(_1d0.firstChild){_1d0.removeChild(_1d0.firstChild);}}if(i==_1d1-1){dojo.place(node,_1cf,_1cd);}else{_1cf.parentNode.insertBefore(node,_1cf);}_1cf=node;}},_stash:function(_1d2){this._parent=_1d2;return this;},end:function(){if(this._parent){return this._parent;}else{return new this._NodeListCtor();}},concat:function(item){var t=d.isArray(this)?this:aps.call(this,0),m=d.map(arguments,function(a){return a&&!d.isArray(a)&&(typeof NodeList!="undefined"&&a.constructor===NodeList||a.constructor===this._NodeListCtor)?aps.call(a,0):a;});return this._wrap(apc.apply(t,m),this);},map:function(func,obj){return this._wrap(d.map(this,func,obj),this);},forEach:function(_1d3,_1d4){d.forEach(this,_1d3,_1d4);return this;},coords:_1c3(d.coords),position:_1c3(d.position),place:function(_1d5,_1d6){var item=d.query(_1d5)[0];return this.forEach(function(node){d.place(node,item,_1d6);});},orphan:function(_1d7){return (_1d7?d._filterQueryResult(this,_1d7):this).forEach(_1c7);},adopt:function(_1d8,_1d9){return d.query(_1d8).place(this[0],_1d9)._stash(this);},query:function(_1da){if(!_1da){return this;}var ret=this.map(function(node){return d.query(_1da,node).filter(function(_1db){return _1db!==undefined;});});return this._wrap(apc.apply([],ret),this);},filter:function(_1dc){var a=arguments,_1dd=this,_1de=0;if(typeof _1dc=="string"){_1dd=d._filterQueryResult(this,a[0]);if(a.length==1){return _1dd._stash(this);}_1de=1;}return this._wrap(d.filter(_1dd,a[_1de],a[_1de+1]),this);},addContent:function(_1df,_1e0){_1df=this._normalize(_1df,this[0]);for(var i=0,node;(node=this[i]);i++){this._place(_1df,node,_1e0,i>0);}return this;},instantiate:function(_1e1,_1e2){var c=d.isFunction(_1e1)?_1e1:d.getObject(_1e1);_1e2=_1e2||{};return this.forEach(function(node){new c(_1e2,node);});},at:function(){var t=new this._NodeListCtor();d.forEach(arguments,function(i){if(i<0){i=this.length+i;}if(this[i]){t.push(this[i]);}},this);return t._stash(this);}});nl.events=["blur","focus","change","click","error","keydown","keypress","keyup","load","mousedown","mouseenter","mouseleave","mousemove","mouseout","mouseover","mouseup","submit"];d.forEach(nl.events,function(evt){var _1e3="on"+evt;nlp[_1e3]=function(a,b){return this.connect(_1e3,a,b);};});})();}if(!dojo._hasResource["dojo._base.query"]){dojo._hasResource["dojo._base.query"]=true;(function(){var _1e4=function(d){var trim=d.trim;var each=d.forEach;var qlc=(d._NodeListCtor=d.NodeList);var _1e5=function(){return d.doc;};var _1e6=((d.isWebKit||d.isMozilla)&&((_1e5().compatMode)=="BackCompat"));var _1e7=!!_1e5().firstChild["children"]?"children":"childNodes";var _1e8=">~+";var _1e9=false;var _1ea=function(){return true;};var _1eb=function(_1ec){if(_1e8.indexOf(_1ec.slice(-1))>=0){_1ec+=" * ";}else{_1ec+=" ";}var ts=function(s,e){return trim(_1ec.slice(s,e));};var _1ed=[];var _1ee=-1,_1ef=-1,_1f0=-1,_1f1=-1,_1f2=-1,inId=-1,_1f3=-1,lc="",cc="",_1f4;var x=0,ql=_1ec.length,_1f5=null,_1f6=null;var _1f7=function(){if(_1f3>=0){var tv=(_1f3==x)?null:ts(_1f3,x);_1f5[(_1e8.indexOf(tv)<0)?"tag":"oper"]=tv;_1f3=-1;}};var _1f8=function(){if(inId>=0){_1f5.id=ts(inId,x).replace(/\\/g,"");inId=-1;}};var _1f9=function(){if(_1f2>=0){_1f5.classes.push(ts(_1f2+1,x).replace(/\\/g,""));_1f2=-1;}};var _1fa=function(){_1f8();_1f7();_1f9();};var _1fb=function(){_1fa();if(_1f1>=0){_1f5.pseudos.push({name:ts(_1f1+1,x)});}_1f5.loops=(_1f5.pseudos.length||_1f5.attrs.length||_1f5.classes.length);_1f5.oquery=_1f5.query=ts(_1f4,x);_1f5.otag=_1f5.tag=(_1f5["oper"])?null:(_1f5.tag||"*");if(_1f5.tag){_1f5.tag=_1f5.tag.toUpperCase();}if(_1ed.length&&(_1ed[_1ed.length-1].oper)){_1f5.infixOper=_1ed.pop();_1f5.query=_1f5.infixOper.query+" "+_1f5.query;}_1ed.push(_1f5);_1f5=null;};for(;lc=cc,cc=_1ec.charAt(x),x<ql;x++){if(lc=="\\"){continue;}if(!_1f5){_1f4=x;_1f5={query:null,pseudos:[],attrs:[],classes:[],tag:null,oper:null,id:null,getTag:function(){return (_1e9)?this.otag:this.tag;}};_1f3=x;}if(_1ee>=0){if(cc=="]"){if(!_1f6.attr){_1f6.attr=ts(_1ee+1,x);}else{_1f6.matchFor=ts((_1f0||_1ee+1),x);}var cmf=_1f6.matchFor;if(cmf){if((cmf.charAt(0)=="\"")||(cmf.charAt(0)=="'")){_1f6.matchFor=cmf.slice(1,-1);}}_1f5.attrs.push(_1f6);_1f6=null;_1ee=_1f0=-1;}else{if(cc=="="){var _1fc=("|~^$*".indexOf(lc)>=0)?lc:"";_1f6.type=_1fc+cc;_1f6.attr=ts(_1ee+1,x-_1fc.length);_1f0=x+1;}}}else{if(_1ef>=0){if(cc==")"){if(_1f1>=0){_1f6.value=ts(_1ef+1,x);}_1f1=_1ef=-1;}}else{if(cc=="#"){_1fa();inId=x+1;}else{if(cc=="."){_1fa();_1f2=x;}else{if(cc==":"){_1fa();_1f1=x;}else{if(cc=="["){_1fa();_1ee=x;_1f6={};}else{if(cc=="("){if(_1f1>=0){_1f6={name:ts(_1f1+1,x),value:null};_1f5.pseudos.push(_1f6);}_1ef=x;}else{if((cc==" ")&&(lc!=cc)){_1fb();}}}}}}}}}return _1ed;};var _1fd=function(_1fe,_1ff){if(!_1fe){return _1ff;}if(!_1ff){return _1fe;}return function(){return _1fe.apply(window,arguments)&&_1ff.apply(window,arguments);};};var _200=function(i,arr){var r=arr||[];if(i){r.push(i);}return r;};var _201=function(n){return (1==n.nodeType);};var _202="";var _203=function(elem,attr){if(!elem){return _202;}if(attr=="class"){return elem.className||_202;}if(attr=="for"){return elem.htmlFor||_202;}if(attr=="style"){return elem.style.cssText||_202;}return (_1e9?elem.getAttribute(attr):elem.getAttribute(attr,2))||_202;};var _204={"*=":function(attr,_205){return function(elem){return (_203(elem,attr).indexOf(_205)>=0);};},"^=":function(attr,_206){return function(elem){return (_203(elem,attr).indexOf(_206)==0);};},"$=":function(attr,_207){var tval=" "+_207;return function(elem){var ea=" "+_203(elem,attr);return (ea.lastIndexOf(_207)==(ea.length-_207.length));};},"~=":function(attr,_208){var tval=" "+_208+" ";return function(elem){var ea=" "+_203(elem,attr)+" ";return (ea.indexOf(tval)>=0);};},"|=":function(attr,_209){var _20a=" "+_209+"-";return function(elem){var ea=" "+_203(elem,attr);return ((ea==_209)||(ea.indexOf(_20a)==0));};},"=":function(attr,_20b){return function(elem){return (_203(elem,attr)==_20b);};}};var _20c=(typeof _1e5().firstChild.nextElementSibling=="undefined");var _20d=!_20c?"nextElementSibling":"nextSibling";var _20e=!_20c?"previousElementSibling":"previousSibling";var _20f=(_20c?_201:_1ea);var _210=function(node){while(node=node[_20e]){if(_20f(node)){return false;}}return true;};var _211=function(node){while(node=node[_20d]){if(_20f(node)){return false;}}return true;};var _212=function(node){var root=node.parentNode;var i=0,tret=root[_1e7],ci=(node["_i"]||-1),cl=(root["_l"]||-1);if(!tret){return -1;}var l=tret.length;if(cl==l&&ci>=0&&cl>=0){return ci;}root["_l"]=l;ci=-1;for(var te=root["firstElementChild"]||root["firstChild"];te;te=te[_20d]){if(_20f(te)){te["_i"]=++i;if(node===te){ci=i;}}}return ci;};var _213=function(elem){return !((_212(elem))%2);};var _214=function(elem){return ((_212(elem))%2);};var _215={"checked":function(name,_216){return function(elem){return !!("checked" in elem?elem.checked:elem.selected);};},"first-child":function(){return _210;},"last-child":function(){return _211;},"only-child":function(name,_217){return function(node){if(!_210(node)){return false;}if(!_211(node)){return false;}return true;};},"empty":function(name,_218){return function(elem){var cn=elem.childNodes;var cnl=elem.childNodes.length;for(var x=cnl-1;x>=0;x--){var nt=cn[x].nodeType;if((nt===1)||(nt==3)){return false;}}return true;};},"contains":function(name,_219){var cz=_219.charAt(0);if(cz=="\""||cz=="'"){_219=_219.slice(1,-1);}return function(elem){return (elem.innerHTML.indexOf(_219)>=0);};},"not":function(name,_21a){var p=_1eb(_21a)[0];var _21b={el:1};if(p.tag!="*"){_21b.tag=1;}if(!p.classes.length){_21b.classes=1;}var ntf=_21c(p,_21b);return function(elem){return (!ntf(elem));};},"nth-child":function(name,_21d){var pi=parseInt;if(_21d=="odd"){return _214;}else{if(_21d=="even"){return _213;}}if(_21d.indexOf("n")!=-1){var _21e=_21d.split("n",2);var pred=_21e[0]?((_21e[0]=="-")?-1:pi(_21e[0])):1;var idx=_21e[1]?pi(_21e[1]):0;var lb=0,ub=-1;if(pred>0){if(idx<0){idx=(idx%pred)&&(pred+(idx%pred));}else{if(idx>0){if(idx>=pred){lb=idx-idx%pred;}idx=idx%pred;}}}else{if(pred<0){pred*=-1;if(idx>0){ub=idx;idx=idx%pred;}}}if(pred>0){return function(elem){var i=_212(elem);return (i>=lb)&&(ub<0||i<=ub)&&((i%pred)==idx);};}else{_21d=idx;}}var _21f=pi(_21d);return function(elem){return (_212(elem)==_21f);};}};var _220=(d.isIE<9||(dojo.isIE&&dojo.isQuirks))?function(cond){var clc=cond.toLowerCase();if(clc=="class"){cond="className";}return function(elem){return (_1e9?elem.getAttribute(cond):elem[cond]||elem[clc]);};}:function(cond){return function(elem){return (elem&&elem.getAttribute&&elem.hasAttribute(cond));};};var _21c=function(_221,_222){if(!_221){return _1ea;}_222=_222||{};var ff=null;if(!("el" in _222)){ff=_1fd(ff,_201);}if(!("tag" in _222)){if(_221.tag!="*"){ff=_1fd(ff,function(elem){return (elem&&(elem.tagName==_221.getTag()));});}}if(!("classes" in _222)){each(_221.classes,function(_223,idx,arr){var re=new RegExp("(?:^|\\s)"+_223+"(?:\\s|$)");ff=_1fd(ff,function(elem){return re.test(elem.className);});ff.count=idx;});}if(!("pseudos" in _222)){each(_221.pseudos,function(_224){var pn=_224.name;if(_215[pn]){ff=_1fd(ff,_215[pn](pn,_224.value));}});}if(!("attrs" in _222)){each(_221.attrs,function(attr){var _225;var a=attr.attr;if(attr.type&&_204[attr.type]){_225=_204[attr.type](a,attr.matchFor);}else{if(a.length){_225=_220(a);}}if(_225){ff=_1fd(ff,_225);}});}if(!("id" in _222)){if(_221.id){ff=_1fd(ff,function(elem){return (!!elem&&(elem.id==_221.id));});}}if(!ff){if(!("default" in _222)){ff=_1ea;}}return ff;};var _226=function(_227){return function(node,ret,bag){while(node=node[_20d]){if(_20c&&(!_201(node))){continue;}if((!bag||_228(node,bag))&&_227(node)){ret.push(node);}break;}return ret;};};var _229=function(_22a){return function(root,ret,bag){var te=root[_20d];while(te){if(_20f(te)){if(bag&&!_228(te,bag)){break;}if(_22a(te)){ret.push(te);}}te=te[_20d];}return ret;};};var _22b=function(_22c){_22c=_22c||_1ea;return function(root,ret,bag){var te,x=0,tret=root[_1e7];while(te=tret[x++]){if(_20f(te)&&(!bag||_228(te,bag))&&(_22c(te,x))){ret.push(te);}}return ret;};};var _22d=function(node,root){var pn=node.parentNode;while(pn){if(pn==root){break;}pn=pn.parentNode;}return !!pn;};var _22e={};var _22f=function(_230){var _231=_22e[_230.query];if(_231){return _231;}var io=_230.infixOper;var oper=(io?io.oper:"");var _232=_21c(_230,{el:1});var qt=_230.tag;var _233=("*"==qt);var ecs=_1e5()["getElementsByClassName"];if(!oper){if(_230.id){_232=(!_230.loops&&_233)?_1ea:_21c(_230,{el:1,id:1});_231=function(root,arr){var te=d.byId(_230.id,(root.ownerDocument||root));if(!te||!_232(te)){return;}if(9==root.nodeType){return _200(te,arr);}else{if(_22d(te,root)){return _200(te,arr);}}};}else{if(ecs&&/\{\s*\[native code\]\s*\}/.test(String(ecs))&&_230.classes.length&&!_1e6){_232=_21c(_230,{el:1,classes:1,id:1});var _234=_230.classes.join(" ");_231=function(root,arr,bag){var ret=_200(0,arr),te,x=0;var tret=root.getElementsByClassName(_234);while((te=tret[x++])){if(_232(te,root)&&_228(te,bag)){ret.push(te);}}return ret;};}else{if(!_233&&!_230.loops){_231=function(root,arr,bag){var ret=_200(0,arr),te,x=0;var tret=root.getElementsByTagName(_230.getTag());while((te=tret[x++])){if(_228(te,bag)){ret.push(te);}}return ret;};}else{_232=_21c(_230,{el:1,tag:1,id:1});_231=function(root,arr,bag){var ret=_200(0,arr),te,x=0;var tret=root.getElementsByTagName(_230.getTag());while((te=tret[x++])){if(_232(te,root)&&_228(te,bag)){ret.push(te);}}return ret;};}}}}else{var _235={el:1};if(_233){_235.tag=1;}_232=_21c(_230,_235);if("+"==oper){_231=_226(_232);}else{if("~"==oper){_231=_229(_232);}else{if(">"==oper){_231=_22b(_232);}}}}return _22e[_230.query]=_231;};var _236=function(root,_237){var _238=_200(root),qp,x,te,qpl=_237.length,bag,ret;for(var i=0;i<qpl;i++){ret=[];qp=_237[i];x=_238.length-1;if(x>0){bag={};ret.nozip=true;}var gef=_22f(qp);for(var j=0;(te=_238[j]);j++){gef(te,ret,bag);}if(!ret.length){break;}_238=ret;}return ret;};var _239={},_23a={};var _23b=function(_23c){var _23d=_1eb(trim(_23c));if(_23d.length==1){var tef=_22f(_23d[0]);return function(root){var r=tef(root,new qlc());if(r){r.nozip=true;}return r;};}return function(root){return _236(root,_23d);};};var nua=navigator.userAgent;var wk="WebKit/";var _23e=(d.isWebKit&&(nua.indexOf(wk)>0)&&(parseFloat(nua.split(wk)[1])>528));var _23f=d.isIE?"commentStrip":"nozip";var qsa="querySelectorAll";var _240=(!!_1e5()[qsa]&&(!d.isSafari||(d.isSafari>3.1)||_23e));var _241=/n\+\d|([^ ])?([>~+])([^ =])?/g;var _242=function(_243,pre,ch,post){return ch?(pre?pre+" ":"")+ch+(post?" "+post:""):_243;};var _244=function(_245,_246){_245=_245.replace(_241,_242);if(_240){var _247=_23a[_245];if(_247&&!_246){return _247;}}var _248=_239[_245];if(_248){return _248;}var qcz=_245.charAt(0);var _249=(-1==_245.indexOf(" "));if((_245.indexOf("#")>=0)&&(_249)){_246=true;}var _24a=(_240&&(!_246)&&(_1e8.indexOf(qcz)==-1)&&(!d.isIE||(_245.indexOf(":")==-1))&&(!(_1e6&&(_245.indexOf(".")>=0)))&&(_245.indexOf(":contains")==-1)&&(_245.indexOf(":checked")==-1)&&(_245.indexOf("|=")==-1));if(_24a){var tq=(_1e8.indexOf(_245.charAt(_245.length-1))>=0)?(_245+" *"):_245;return _23a[_245]=function(root){try{if(!((9==root.nodeType)||_249)){throw "";}var r=root[qsa](tq);r[_23f]=true;return r;}catch(e){return _244(_245,true)(root);}};}else{var _24b=_245.split(/\s*,\s*/);return _239[_245]=((_24b.length<2)?_23b(_245):function(root){var _24c=0,ret=[],tp;while((tp=_24b[_24c++])){ret=ret.concat(_23b(tp)(root));}return ret;});}};var _24d=0;var _24e=d.isIE?function(node){if(_1e9){return (node.getAttribute("_uid")||node.setAttribute("_uid",++_24d)||_24d);}else{return node.uniqueID;}}:function(node){return (node._uid||(node._uid=++_24d));};var _228=function(node,bag){if(!bag){return 1;}var id=_24e(node);if(!bag[id]){return bag[id]=1;}return 0;};var _24f="_zipIdx";var _250=function(arr){if(arr&&arr.nozip){return (qlc._wrap)?qlc._wrap(arr):arr;}var ret=new qlc();if(!arr||!arr.length){return ret;}if(arr[0]){ret.push(arr[0]);}if(arr.length<2){return ret;}_24d++;if(d.isIE&&_1e9){var _251=_24d+"";arr[0].setAttribute(_24f,_251);for(var x=1,te;te=arr[x];x++){if(arr[x].getAttribute(_24f)!=_251){ret.push(te);}te.setAttribute(_24f,_251);}}else{if(d.isIE&&arr.commentStrip){try{for(var x=1,te;te=arr[x];x++){if(_201(te)){ret.push(te);}}}catch(e){}}else{if(arr[0]){arr[0][_24f]=_24d;}for(var x=1,te;te=arr[x];x++){if(arr[x][_24f]!=_24d){ret.push(te);}te[_24f]=_24d;}}}return ret;};d.query=function(_252,root){qlc=d._NodeListCtor;if(!_252){return new qlc();}if(_252.constructor==qlc){return _252;}if(typeof _252!="string"){return new qlc(_252);}if(typeof root=="string"){root=d.byId(root);if(!root){return new qlc();}}root=root||_1e5();var od=root.ownerDocument||root.documentElement;_1e9=(root.contentType&&root.contentType=="application/xml")||(d.isOpera&&(root.doctype||od.toString()=="[object XMLDocument]"))||(!!od)&&(d.isIE?od.xml:(root.xmlVersion||od.xmlVersion));var r=_244(_252)(root);if(r&&r.nozip&&!qlc._wrap){return r;}return _250(r);};d.query.pseudos=_215;d._filterQueryResult=function(_253,_254,root){var _255=new d._NodeListCtor(),_256=_1eb(_254),_257=(_256.length==1&&!/[^\w#\.]/.test(_254))?_21c(_256[0]):function(node){return dojo.query(_254,root).indexOf(node)!=-1;};for(var x=0,te;te=_253[x];x++){if(_257(te)){_255.push(te);}}return _255;};};var _258=function(){acme={trim:function(str){str=str.replace(/^\s+/,"");for(var i=str.length-1;i>=0;i--){if(/\S/.test(str.charAt(i))){str=str.substring(0,i+1);break;}}return str;},forEach:function(arr,_259,_25a){if(!arr||!arr.length){return;}for(var i=0,l=arr.length;i<l;++i){_259.call(_25a||window,arr[i],i,arr);}},byId:function(id,doc){if(typeof id=="string"){return (doc||document).getElementById(id);}else{return id;}},doc:document,NodeList:Array};var n=navigator;var dua=n.userAgent;var dav=n.appVersion;var tv=parseFloat(dav);acme.isOpera=(dua.indexOf("Opera")>=0)?tv:undefined;acme.isKhtml=(dav.indexOf("Konqueror")>=0)?tv:undefined;acme.isWebKit=parseFloat(dua.split("WebKit/")[1])||undefined;acme.isChrome=parseFloat(dua.split("Chrome/")[1])||undefined;var _25b=Math.max(dav.indexOf("WebKit"),dav.indexOf("Safari"),0);if(_25b&&!acme.isChrome){acme.isSafari=parseFloat(dav.split("Version/")[1]);if(!acme.isSafari||parseFloat(dav.substr(_25b+7))<=419.3){acme.isSafari=2;}}if(document.all&&!acme.isOpera){acme.isIE=parseFloat(dav.split("MSIE ")[1])||undefined;}Array._wrap=function(arr){return arr;};return acme;};if(dojo){dojo.provide("dojo._base.query");_1e4(this["queryPortability"]||this["acme"]||dojo);}else{_1e4(this["queryPortability"]||this["acme"]||_258());}})();}if(!dojo._hasResource["dojo._base.xhr"]){dojo._hasResource["dojo._base.xhr"]=true;dojo.provide("dojo._base.xhr");(function(){var _25c=dojo,cfg=_25c.config;function _25d(obj,name,_25e){if(_25e===null){return;}var val=obj[name];if(typeof val=="string"){obj[name]=[val,_25e];}else{if(_25c.isArray(val)){val.push(_25e);}else{obj[name]=_25e;}}};dojo.fieldToObject=function(_25f){var ret=null;var item=_25c.byId(_25f);if(item){var _260=item.name;var type=(item.type||"").toLowerCase();if(_260&&type&&!item.disabled){if(type=="radio"||type=="checkbox"){if(item.checked){ret=item.value;}}else{if(item.multiple){ret=[];_25c.query("option",item).forEach(function(opt){if(opt.selected){ret.push(opt.value);}});}else{ret=item.value;}}}}return ret;};dojo.formToObject=function(_261){var ret={};var _262="file|submit|image|reset|button|";_25c.forEach(dojo.byId(_261).elements,function(item){var _263=item.name;var type=(item.type||"").toLowerCase();if(_263&&type&&_262.indexOf(type)==-1&&!item.disabled){_25d(ret,_263,_25c.fieldToObject(item));if(type=="image"){ret[_263+".x"]=ret[_263+".y"]=ret[_263].x=ret[_263].y=0;}}});return ret;};dojo.objectToQuery=function(map){var enc=encodeURIComponent;var _264=[];var _265={};for(var name in map){var _266=map[name];if(_266!=_265[name]){var _267=enc(name)+"=";if(_25c.isArray(_266)){for(var i=0;i<_266.length;i++){_264.push(_267+enc(_266[i]));}}else{_264.push(_267+enc(_266));}}}return _264.join("&");};dojo.formToQuery=function(_268){return _25c.objectToQuery(_25c.formToObject(_268));};dojo.formToJson=function(_269,_26a){return _25c.toJson(_25c.formToObject(_269),_26a);};dojo.queryToObject=function(str){var ret={};var qp=str.split("&");var dec=decodeURIComponent;_25c.forEach(qp,function(item){if(item.length){var _26b=item.split("=");var name=dec(_26b.shift());var val=dec(_26b.join("="));if(typeof ret[name]=="string"){ret[name]=[ret[name]];}if(_25c.isArray(ret[name])){ret[name].push(val);}else{ret[name]=val;}}});return ret;};dojo._blockAsync=false;var _26c=_25c._contentHandlers=dojo.contentHandlers={text:function(xhr){return xhr.responseText;},json:function(xhr){return _25c.fromJson(xhr.responseText||null);},"json-comment-filtered":function(xhr){if(!dojo.config.useCommentedJson){console.warn("Consider using the standard mimetype:application/json."+" json-commenting can introduce security issues. To"+" decrease the chances of hijacking, use the standard the 'json' handler and"+" prefix your json with: {}&&\n"+"Use djConfig.useCommentedJson=true to turn off this message.");}var _26d=xhr.responseText;var _26e=_26d.indexOf("/*");var _26f=_26d.lastIndexOf("*/");if(_26e==-1||_26f==-1){throw new Error("JSON was not comment filtered");}return _25c.fromJson(_26d.substring(_26e+2,_26f));},javascript:function(xhr){return _25c.eval(xhr.responseText);},xml:function(xhr){var _270=xhr.responseXML;if(_25c.isIE&&(!_270||!_270.documentElement)){var ms=function(n){return "MSXML"+n+".DOMDocument";};var dp=["Microsoft.XMLDOM",ms(6),ms(4),ms(3),ms(2)];_25c.some(dp,function(p){try{var dom=new ActiveXObject(p);dom.async=false;dom.loadXML(xhr.responseText);_270=dom;}catch(e){return false;}return true;});}return _270;},"json-comment-optional":function(xhr){if(xhr.responseText&&/^[^{\[]*\/\*/.test(xhr.responseText)){return _26c["json-comment-filtered"](xhr);}else{return _26c["json"](xhr);}}};dojo._ioSetArgs=function(args,_271,_272,_273){var _274={args:args,url:args.url};var _275=null;if(args.form){var form=_25c.byId(args.form);var _276=form.getAttributeNode("action");_274.url=_274.url||(_276?_276.value:null);_275=_25c.formToObject(form);}var _277=[{}];if(_275){_277.push(_275);}if(args.content){_277.push(args.content);}if(args.preventCache){_277.push({"dojo.preventCache":new Date().valueOf()});}_274.query=_25c.objectToQuery(_25c.mixin.apply(null,_277));_274.handleAs=args.handleAs||"text";var d=new _25c.Deferred(_271);d.addCallbacks(_272,function(_278){return _273(_278,d);});var ld=args.load;if(ld&&_25c.isFunction(ld)){d.addCallback(function(_279){return ld.call(args,_279,_274);});}var err=args.error;if(err&&_25c.isFunction(err)){d.addErrback(function(_27a){return err.call(args,_27a,_274);});}var _27b=args.handle;if(_27b&&_25c.isFunction(_27b)){d.addBoth(function(_27c){return _27b.call(args,_27c,_274);});}if(cfg.ioPublish&&_25c.publish&&_274.args.ioPublish!==false){d.addCallbacks(function(res){_25c.publish("/dojo/io/load",[d,res]);return res;},function(res){_25c.publish("/dojo/io/error",[d,res]);return res;});d.addBoth(function(res){_25c.publish("/dojo/io/done",[d,res]);return res;});}d.ioArgs=_274;return d;};var _27d=function(dfd){dfd.canceled=true;var xhr=dfd.ioArgs.xhr;var _27e=typeof xhr.abort;if(_27e=="function"||_27e=="object"||_27e=="unknown"){xhr.abort();}var err=dfd.ioArgs.error;if(!err){err=new Error("xhr cancelled");err.dojoType="cancel";}return err;};var _27f=function(dfd){var ret=_26c[dfd.ioArgs.handleAs](dfd.ioArgs.xhr);return ret===undefined?null:ret;};var _280=function(_281,dfd){if(!dfd.ioArgs.args.failOk){console.error(_281);}return _281;};var _282=null;var _283=[];var _284=0;var _285=function(dfd){if(_284<=0){_284=0;if(cfg.ioPublish&&_25c.publish&&(!dfd||dfd&&dfd.ioArgs.args.ioPublish!==false)){_25c.publish("/dojo/io/stop");}}};var _286=function(){var now=(new Date()).getTime();if(!_25c._blockAsync){for(var i=0,tif;i<_283.length&&(tif=_283[i]);i++){var dfd=tif.dfd;var func=function(){if(!dfd||dfd.canceled||!tif.validCheck(dfd)){_283.splice(i--,1);_284-=1;}else{if(tif.ioCheck(dfd)){_283.splice(i--,1);tif.resHandle(dfd);_284-=1;}else{if(dfd.startTime){if(dfd.startTime+(dfd.ioArgs.args.timeout||0)<now){_283.splice(i--,1);var err=new Error("timeout exceeded");err.dojoType="timeout";dfd.errback(err);dfd.cancel();_284-=1;}}}}};if(dojo.config.debugAtAllCosts){func.call(this);}else{try{func.call(this);}catch(e){dfd.errback(e);}}}}_285(dfd);if(!_283.length){clearInterval(_282);_282=null;return;}};dojo._ioCancelAll=function(){try{_25c.forEach(_283,function(i){try{i.dfd.cancel();}catch(e){}});}catch(e){}};if(_25c.isIE){_25c.addOnWindowUnload(_25c._ioCancelAll);}_25c._ioNotifyStart=function(dfd){if(cfg.ioPublish&&_25c.publish&&dfd.ioArgs.args.ioPublish!==false){if(!_284){_25c.publish("/dojo/io/start");}_284+=1;_25c.publish("/dojo/io/send",[dfd]);}};_25c._ioWatch=function(dfd,_287,_288,_289){var args=dfd.ioArgs.args;if(args.timeout){dfd.startTime=(new Date()).getTime();}_283.push({dfd:dfd,validCheck:_287,ioCheck:_288,resHandle:_289});if(!_282){_282=setInterval(_286,50);}if(args.sync){_286();}};var _28a="application/x-www-form-urlencoded";var _28b=function(dfd){return dfd.ioArgs.xhr.readyState;};var _28c=function(dfd){return 4==dfd.ioArgs.xhr.readyState;};var _28d=function(dfd){var xhr=dfd.ioArgs.xhr;if(_25c._isDocumentOk(xhr)){dfd.callback(dfd);}else{var err=new Error("Unable to load "+dfd.ioArgs.url+" status:"+xhr.status);err.status=xhr.status;err.responseText=xhr.responseText;dfd.errback(err);}};dojo._ioAddQueryToUrl=function(_28e){if(_28e.query.length){_28e.url+=(_28e.url.indexOf("?")==-1?"?":"&")+_28e.query;_28e.query=null;}};dojo.xhr=function(_28f,args,_290){var dfd=_25c._ioSetArgs(args,_27d,_27f,_280);var _291=dfd.ioArgs;var xhr=_291.xhr=_25c._xhrObj(_291.args);if(!xhr){dfd.cancel();return dfd;}if("postData" in args){_291.query=args.postData;}else{if("putData" in args){_291.query=args.putData;}else{if("rawBody" in args){_291.query=args.rawBody;}else{if((arguments.length>2&&!_290)||"POST|PUT".indexOf(_28f.toUpperCase())==-1){_25c._ioAddQueryToUrl(_291);}}}}xhr.open(_28f,_291.url,args.sync!==true,args.user||undefined,args.password||undefined);if(args.headers){for(var hdr in args.headers){if(hdr.toLowerCase()==="content-type"&&!args.contentType){args.contentType=args.headers[hdr];}else{if(args.headers[hdr]){xhr.setRequestHeader(hdr,args.headers[hdr]);}}}}xhr.setRequestHeader("Content-Type",args.contentType||_28a);if(!args.headers||!("X-Requested-With" in args.headers)){xhr.setRequestHeader("X-Requested-With","XMLHttpRequest");}_25c._ioNotifyStart(dfd);if(dojo.config.debugAtAllCosts){xhr.send(_291.query);}else{try{xhr.send(_291.query);}catch(e){_291.error=e;dfd.cancel();}}_25c._ioWatch(dfd,_28b,_28c,_28d);xhr=null;return dfd;};dojo.xhrGet=function(args){return _25c.xhr("GET",args);};dojo.rawXhrPost=dojo.xhrPost=function(args){return _25c.xhr("POST",args,true);};dojo.rawXhrPut=dojo.xhrPut=function(args){return _25c.xhr("PUT",args,true);};dojo.xhrDelete=function(args){return _25c.xhr("DELETE",args);};})();}if(!dojo._hasResource["dojo._base.fx"]){dojo._hasResource["dojo._base.fx"]=true;dojo.provide("dojo._base.fx");(function(){var d=dojo;var _292=d._mixin;dojo._Line=function(_293,end){this.start=_293;this.end=end;};dojo._Line.prototype.getValue=function(n){return ((this.end-this.start)*n)+this.start;};dojo.Animation=function(args){_292(this,args);if(d.isArray(this.curve)){this.curve=new d._Line(this.curve[0],this.curve[1]);}};d._Animation=d.Animation;d.extend(dojo.Animation,{duration:350,repeat:0,rate:20,_percent:0,_startRepeatCount:0,_getStep:function(){var _294=this._percent,_295=this.easing;return _295?_295(_294):_294;},_fire:function(evt,args){var a=args||[];if(this[evt]){if(d.config.debugAtAllCosts){this[evt].apply(this,a);}else{try{this[evt].apply(this,a);}catch(e){console.error("exception in animation handler for:",evt);console.error(e);}}}return this;},play:function(_296,_297){var _298=this;if(_298._delayTimer){_298._clearTimer();}if(_297){_298._stopTimer();_298._active=_298._paused=false;_298._percent=0;}else{if(_298._active&&!_298._paused){return _298;}}_298._fire("beforeBegin",[_298.node]);var de=_296||_298.delay,_299=dojo.hitch(_298,"_play",_297);if(de>0){_298._delayTimer=setTimeout(_299,de);return _298;}_299();return _298;},_play:function(_29a){var _29b=this;if(_29b._delayTimer){_29b._clearTimer();}_29b._startTime=new Date().valueOf();if(_29b._paused){_29b._startTime-=_29b.duration*_29b._percent;}_29b._active=true;_29b._paused=false;var _29c=_29b.curve.getValue(_29b._getStep());if(!_29b._percent){if(!_29b._startRepeatCount){_29b._startRepeatCount=_29b.repeat;}_29b._fire("onBegin",[_29c]);}_29b._fire("onPlay",[_29c]);_29b._cycle();return _29b;},pause:function(){var _29d=this;if(_29d._delayTimer){_29d._clearTimer();}_29d._stopTimer();if(!_29d._active){return _29d;}_29d._paused=true;_29d._fire("onPause",[_29d.curve.getValue(_29d._getStep())]);return _29d;},gotoPercent:function(_29e,_29f){var _2a0=this;_2a0._stopTimer();_2a0._active=_2a0._paused=true;_2a0._percent=_29e;if(_29f){_2a0.play();}return _2a0;},stop:function(_2a1){var _2a2=this;if(_2a2._delayTimer){_2a2._clearTimer();}if(!_2a2._timer){return _2a2;}_2a2._stopTimer();if(_2a1){_2a2._percent=1;}_2a2._fire("onStop",[_2a2.curve.getValue(_2a2._getStep())]);_2a2._active=_2a2._paused=false;return _2a2;},status:function(){if(this._active){return this._paused?"paused":"playing";}return "stopped";},_cycle:function(){var _2a3=this;if(_2a3._active){var curr=new Date().valueOf();var step=(curr-_2a3._startTime)/(_2a3.duration);if(step>=1){step=1;}_2a3._percent=step;if(_2a3.easing){step=_2a3.easing(step);}_2a3._fire("onAnimate",[_2a3.curve.getValue(step)]);if(_2a3._percent<1){_2a3._startTimer();}else{_2a3._active=false;if(_2a3.repeat>0){_2a3.repeat--;_2a3.play(null,true);}else{if(_2a3.repeat==-1){_2a3.play(null,true);}else{if(_2a3._startRepeatCount){_2a3.repeat=_2a3._startRepeatCount;_2a3._startRepeatCount=0;}}}_2a3._percent=0;_2a3._fire("onEnd",[_2a3.node]);!_2a3.repeat&&_2a3._stopTimer();}}return _2a3;},_clearTimer:function(){clearTimeout(this._delayTimer);delete this._delayTimer;}});var ctr=0,_2a4=null,_2a5={run:function(){}};d.extend(d.Animation,{_startTimer:function(){if(!this._timer){this._timer=d.connect(_2a5,"run",this,"_cycle");ctr++;}if(!_2a4){_2a4=setInterval(d.hitch(_2a5,"run"),this.rate);}},_stopTimer:function(){if(this._timer){d.disconnect(this._timer);this._timer=null;ctr--;}if(ctr<=0){clearInterval(_2a4);_2a4=null;ctr=0;}}});var _2a6=d.isIE?function(node){var ns=node.style;if(!ns.width.length&&d.style(node,"width")=="auto"){ns.width="auto";}}:function(){};dojo._fade=function(args){args.node=d.byId(args.node);var _2a7=_292({properties:{}},args),_2a8=(_2a7.properties.opacity={});_2a8.start=!("start" in _2a7)?function(){return +d.style(_2a7.node,"opacity")||0;}:_2a7.start;_2a8.end=_2a7.end;var anim=d.animateProperty(_2a7);d.connect(anim,"beforeBegin",d.partial(_2a6,_2a7.node));return anim;};dojo.fadeIn=function(args){return d._fade(_292({end:1},args));};dojo.fadeOut=function(args){return d._fade(_292({end:0},args));};dojo._defaultEasing=function(n){return 0.5+((Math.sin((n+1.5)*Math.PI))/2);};var _2a9=function(_2aa){this._properties=_2aa;for(var p in _2aa){var prop=_2aa[p];if(prop.start instanceof d.Color){prop.tempColor=new d.Color();}}};_2a9.prototype.getValue=function(r){var ret={};for(var p in this._properties){var prop=this._properties[p],_2ab=prop.start;if(_2ab instanceof d.Color){ret[p]=d.blendColors(_2ab,prop.end,r,prop.tempColor).toCss();}else{if(!d.isArray(_2ab)){ret[p]=((prop.end-_2ab)*r)+_2ab+(p!="opacity"?prop.units||"px":0);}}}return ret;};dojo.animateProperty=function(args){var n=args.node=d.byId(args.node);if(!args.easing){args.easing=d._defaultEasing;}var anim=new d.Animation(args);d.connect(anim,"beforeBegin",anim,function(){var pm={};for(var p in this.properties){if(p=="width"||p=="height"){this.node.display="block";}var prop=this.properties[p];if(d.isFunction(prop)){prop=prop(n);}prop=pm[p]=_292({},(d.isObject(prop)?prop:{end:prop}));if(d.isFunction(prop.start)){prop.start=prop.start(n);}if(d.isFunction(prop.end)){prop.end=prop.end(n);}var _2ac=(p.toLowerCase().indexOf("color")>=0);function _2ad(node,p){var v={height:node.offsetHeight,width:node.offsetWidth}[p];if(v!==undefined){return v;}v=d.style(node,p);return (p=="opacity")?+v:(_2ac?v:parseFloat(v));};if(!("end" in prop)){prop.end=_2ad(n,p);}else{if(!("start" in prop)){prop.start=_2ad(n,p);}}if(_2ac){prop.start=new d.Color(prop.start);prop.end=new d.Color(prop.end);}else{prop.start=(p=="opacity")?+prop.start:parseFloat(prop.start);}}this.curve=new _2a9(pm);});d.connect(anim,"onAnimate",d.hitch(d,"style",anim.node));return anim;};dojo.anim=function(node,_2ae,_2af,_2b0,_2b1,_2b2){return d.animateProperty({node:node,duration:_2af||d.Animation.prototype.duration,properties:_2ae,easing:_2b0,onEnd:_2b1}).play(_2b2||0);};})();}if(!dojo._hasResource["dojo._base.browser"]){dojo._hasResource["dojo._base.browser"]=true;dojo.provide("dojo._base.browser");dojo.forEach(dojo.config.require,function(i){dojo["require"](i);});}if(!dojo._hasResource["dojo._base"]){dojo._hasResource["dojo._base"]=true;dojo.provide("dojo._base");}if(dojo.isBrowser&&(document.readyState==="complete"||dojo.config.afterOnLoad)){window.setTimeout(dojo._loadInit,100);}})();
} 

var dojo = odojo;

var dijit = odijit;

var dojox = odojox;

dojo.declare("OfflajnSkin", null, {
	constructor: function(args) {
    dojo.mixin(this,args);
    this.init();
    if(this.hidden.changeSkin){
      this.hidden.changeSkin();
      this.hidden.changeSkin = null;
    }
  },
  
  init: function() {
    this.hidden = dojo.byId(this.id);
    //this.span = dojo.create("span", {style: "margin-left: 10px; position: absolute;"}, this.hidden.parentNode.parentNode, "last");
    this.span = dojo.create("span", {style: "margin-left: 10px;"}, this.hidden.parentNode.parentNode, "last");
    this.c = dojo.connect(this.hidden, 'onchange', this, 'changeSkin');  
  },
  
  changeSkin: function() {
    if(this.hidden.value != 'custom'){
      this.changeSkinNext();
      this.hidden.value = 'custom';
      this.fireEvent(this.hidden, 'change');
    }
  },
  
  changeSkinNext: function() {
    var value = this.hidden.value;
    var def = this.data[value];
    for (var k in def) {
      var p = dojo.byId(this.control + k);
      
      if(!p) {
        var n = this.id.replace(this.name, '');
        p = dojo.byId(n + k);        
      }
      if(p) {
        var v = def[k];
        if(v.indexOf("**") >= 0){
            var newv = v.split('|*|');
            var oldv = p.value.split('|*|');
            for(var i = 0; i < oldv.length; i++){
                if(newv[i] != '**'){
                    oldv[i] = newv[i];
                }
            }
            v = oldv.join('|*|');
        }else if(v.length > 0 && v.indexOf("{") == 0){
          var orig = {};
          if(p.value.length > 0 && p.value.indexOf("{") == 0){
            orig = dojo.fromJson(p.value);
          }
          var newValues = dojo.fromJson(v);
          for(var key in newValues){
            if(!orig[key]) orig[key] = {};
            for(var key2 in newValues[key]){
              orig[key][key2] = newValues[key][key2];
            }
          }
          v = dojo.toJson(orig);
        }
        p.value = v;
        //console.log(p.value);
        this.fireEvent(p, 'change');
      }
    } 
    this.span.innerHTML = "The <b>"+value.replace(/_/g," ").replace("default2","default")+" skin</b> parameters has been set.";
        
    if(window[this.dependency]){
      window[this.dependency].hidden.value = window[this.dependency].hidden.options[1].value;
      window[this.dependency].changeSkin();
    }
  },
 
   fireEvent: function(element,event){
    if ((document.createEventObject && !dojo.isIE) || (document.createEventObject && dojo.isIE && dojo.isIE < 9)){
      var evt = document.createEventObject();
      return element.fireEvent('on'+event,evt);
    }else{
      var evt = document.createEvent("HTMLEvents");
      evt.initEvent(event, true, true );
      return !element.dispatchEvent(evt);
    }
  }
});


dojo.declare("OfflajnList", null, {
	constructor: function(args) {
    this.fireshow = 0;
    this.map = {};
    this.list = new Array;
	  dojo.mixin(this,args);
    this.showed = 0;
    this.focus = 0;
    this.zindex = 6;
    window.offlajnlistzindex = 10;
    if(this.height) this.height++;
    this.lineHeight = 20;
    this.init();
  },
  
  init: function() { 
    this.hidden = dojo.byId(this.name);
    this.active = this.hidden;
    
    this.hidden.listobj = this;
    this.hidden.options = this.options;
    this.hidden.selectedIndex = this.selectedIndex;

    dojo.connect(this.hidden, 'onchange', this, 'setValue');
    this.change = 0;
    
    this.container = dojo.byId('offlajnlistcontainer' + this.name);
    dojo.style(this.container, 'minWidth', Math.ceil(dojo.style(this.container, 'width')+1)+'px');
    if(dojo.isIE == 7) {
      var span = dojo.query('#offlajnlistcontainer' + this.name + ' span');
      dojo.style(this.container, 'width', dojo.style(span[0], 'width')+30+'px');
    }
    this.offlajnlist = dojo.query('.offlajnlist', this.container)[0];
    
    this.currentText = dojo.query('.offlajnlistcurrent', this.container)[0];
    dojo.connect(this.container, 'onclick', this, 'controller');
    this.options.forEach(function(o, i){
      this.map[o.value] = i;
    },this);
  },
  
  initSelectBox: function(){
    if(this.selectbox) return;
    
    this.selectbox = dojo.create('div', {'id': 'offlajnlistelements' + this.name, 'class': 'offlajnlistelements', 'innerHTML': this.elements }, this.container, "after");
    this.list = dojo.query('.listelement', this.selectbox);
    
    
    this.list.connect('onmouseenter', this, 'addActive');
    
    dojo.style(this.selectbox, {
      opacity: 0,
      display: 'block'
    });
    
    this.lineHeight = dojo.position(this.list[0]).h;
    dojo.style(this.selectbox, {
      height: (this.height) ? this.height * this.lineHeight + 'px' : 'auto'
    });
    
    if(this.height) {
      this.content = dojo.query('#offlajnlistelements' + this.name + ' .content')[0];
      dojo.style(this.content, 'height', this.list.length * this.lineHeight + 'px');
      this.scrollbar = new OfflajnScroller({
        'extraClass': 'single-select',
        'selectbox': this.selectbox,
        'content': this.content
      });
    }
    
    this.maxW = 0;
    this.list.forEach(function(el, i){
      if (this.options[i].value == 'optgroup') dojo.addClass(el, "optgroup");
      el.i = i;
    },this);
    
    this.list.connect('onclick', this, 'selected');
    
    this.selectbox.h = dojo.marginBox(this.selectbox).h;
    dojo.style(this.selectbox, {
      height: 0
    });
    dojo.connect(document, 'onclick', this, 'blur');
    dojo.connect(this.selectbox, 'onclick', this, 'focused');
    
    if(this.fireshow)
      this.fireEvent(this.hidden, 'click');
  },
  
  controller: function(){
    this.focused();
    this.initSelectBox();
    if(this.showed == 0){
      this.reposition();
      this.showList();
    }else{
      this.hideList();
    }
  },
  
  reposition: function(){
    var pos = dojo.coords(this.container, true);
    if(this.selectbox){
      dojo.style(this.selectbox, {
        left: pos.l + "px",
        top: pos.t + pos.h  + "px",
        width: pos.w -2 +"px" //-2px because of the side-borders
      });
      if(this.content) {
        dojo.style(this.content,{
        
         'width': pos.w - 12 + 'px',
         'float': 'left'
         });
      }
    }
  },
  
  showList: function(){
    if(this.anim) this.anim.stop();
    this.showed = 1;
    dojo.addClass(this.container,'openedlist');
    dojo.addClass(this.selectbox,'openedlist');
    dojo.removeClass(this.active,'active');
    dojo.addClass(this.list[this.hidden.selectedIndex],'selected active');
    if(this.height) {
      var p = this.hidden.selectedIndex * this.lineHeight;
      this.scrollbar.setPosition(p);
    }
    this.active = this.list[this.hidden.selectedIndex];
    
    dojo.style(this.offlajnlist, 'zIndex', ++window.offlajnlistzindex);
    dojo.style(this.selectbox, {
      display: 'block',
      zIndex: window.offlajnlistzindex-1
    });
    window.offlajnlistzindex++;
    
    this.anim = dojo.animateProperty({
      node: this.selectbox,
      properties: {
          opacity : 1,
          height: this.selectbox.h
      }
    }).play();
  },
  
  hideList: function(){
    if(this.anim) this.anim.stop();
    if(!this.selectbox) return;
    
    this.showed = 0;

    var h = dojo.marginBox(this.selectbox).h;
    dojo.removeClass(this.container,'openedlist');
    this.anim = dojo.animateProperty({
      node: this.selectbox,
      properties: {
          opacity : 0,
          height: 0
      },
      onEnd: dojo.hitch(this, function(el){
        dojo.style(el, {
          display: 'none',
          height: '0',
          zIndex: this.zindex-1
        });
        dojo.style(this.offlajnlist, 'zIndex', this.zindex);
        dojo.removeClass(this.selectbox,'openedlist');
      })
    }).play();
  },
  
  selected: function(e){
    if (dojo.hasClass(e.currentTarget, 'optgroup')) return;
    if(this.list[this.hidden.selectedIndex])
      dojo.removeClass(this.list[this.hidden.selectedIndex],'selected active');
    this.hidden.selectedIndex = e.target.i;
    this.hidden.value = this.hidden.options[this.hidden.selectedIndex].value;
    
    this.currentText.innerHTML = this.hidden.options[this.hidden.selectedIndex].text;
    if(this.list[this.hidden.selectedIndex])
      dojo.addClass(this.list[this.hidden.selectedIndex],'selected active');
    this.hideList();
    this.fireEvent(this.hidden, 'change');
    this.change = 0;
  },
  
  addActive: function(e){
    var el = e.target;
    if(el != this.active){
      dojo.removeClass(this.active,'active');
      dojo.addClass(el,'active');
      this.active = el;
    }
  },

  focused: function(){
    this.focus = 1;
  },

  blur: function(e){
    if(!this.focus){
      this.hideList();
    }
    this.focus = 0;
  },

  setValue: function(e) {
    if(!this.change && this.map[this.hidden.value] != this.hidden.selectedIndex) {
      this.change = 1;
      e.target.i = this.map[this.hidden.value] ? this.map[this.hidden.value] : 0;
      this.selected(e);
    }
  },

  fireEvent: function(element,event){
    if ((document.createEventObject && !dojo.isIE) || (document.createEventObject && dojo.isIE && dojo.isIE < 9)){
      var evt = document.createEventObject();
      return element.fireEvent('on'+event,evt);
    }else{
      var evt = document.createEvent("HTMLEvents");
      evt.initEvent(event, true, true );
      return !element.dispatchEvent(evt);
    }
  }
});

dojo.declare("OfflajnScroller", null, {
	constructor: function(args) {
   this.scrollspeed = 10;
   this.curr = 0;
	 dojo.mixin(this,args);
	 this.initScrollbar();
  },
  
  initScrollbar: function() {
    (!dojo.isMozilla) ? dojo.connect(this.selectbox, 'onmousewheel', this, 'scrollWheel') : dojo.connect(this.selectbox, 'DOMMouseScroll', this, 'scrollWheel');
    var right = dojo.create('div', {'class': 'gk_hack offlajnscrollerright'}, this.selectbox);
    this.sc = dojo.create('div', {'class': 'gk_hack offlajnscrollerbg'}, right);
    this.scrollbg = dojo.create('div', {'class': 'gk_hack offlajnscrollerscrollbg'}, this.sc);
    this.scrollbtn = dojo.create('div', {'class': 'gk_hack offlajnscrollerscrollbtn'} ,this.sc );
    if(this.extraClass) {
      dojo.addClass(right, this.extraClass);
      dojo.addClass(this.sc, this.extraClass);
      dojo.addClass(this.scrollbg, this.extraClass);
      dojo.addClass(this.scrollbtn, this.extraClass);
    }
    if(this.extraClass == 'multi-select') {
      this.scrollup = dojo.create('div', {'class': 'gk_hack offlajnscrollerarrowup'}, this.sc, 'first');
      this.scrolldown = dojo.create('div', {'class': 'gk_hack offlajnscrollerarrowdown' }, this.sc, 'last');     
      this.scrupc = dojo.connect(this.scrollup, 'onmousedown', this, 'upScroll');
      this.scrdownc = dojo.connect(this.scrolldown, 'onmousedown', this, 'downScroll');   
    }    
    dojo.connect(this.scrollbtn, 'onmousedown', this, 'onscrolldown');
    dojo.connect(this.scrollbg, 'onclick', this, 'scrollTo');
    this.scrbg = dojo.position(this.scrollbg, true);
    this.scrollbtnprop = dojo.position(this.scrollbtn, true);
    
    this.scrollReInit();
  },
  
  scrollReInit: function(){
    dojo.style(this.scrollbtn, 'display', 'block');
    this.maxHeight = parseInt(dojo.position(this.content).h);
    this.windowHeight = parseInt(dojo.style(this.selectbox, 'height'));
    this.scrollRatio = this.maxHeight/this.windowHeight;
    
    this.maxTop = -1 * (this.maxHeight-this.windowHeight);
    if(this.maxTop > 0) this.maxTop = 0;
    var scrollArrowHeight = 0;
    this.scrollHeight = 0;
    var marginVertical = dojo.marginBox(this.scrollbg).h-dojo.position(this.scrollbg).h;
    if(this.extraClass == 'multi-select') {
      scrollArrowHeight = dojo.marginBox(this.scrollup).h;
      this.scrollHeight = (this.windowHeight+(-2*scrollArrowHeight-marginVertical-2));
      this.scrollBtnmaxTop = (this.scrollHeight-this.scrollHeight/this.scrollRatio)-2;
    } else {
      this.scrollHeight = (this.windowHeight-10);
      this.scrollBtnmaxTop = (this.scrollHeight-this.scrollHeight/this.scrollRatio);
    }
    dojo.style(this.scrollbg, 'height', this.scrollHeight+'px');
    var scrollBtn = (this.scrollHeight/this.scrollRatio-2);
    if(scrollBtn<10){
      scrollBtn = 10;
      this.scrollBtnmaxTop = (this.scrollHeight-scrollBtn-2);
    }
    this.scrollBtnH = scrollBtn;
    dojo.style(this.scrollbtn, 'height', scrollBtn+'px');
    if(this.scrollBtnmaxTop < 0) this.scrollBtnmaxTop = 0; 
    if(this.windowHeight > this.maxHeight) this.hideScrollBtn();  
  },
  
  hideScrollBtn: function() {
    dojo.style(this.scrollbtn, 'display', 'none');
  },
  
  goToBottom: function(){
    this.scrolling(-1000,1000);
  },
  
  onscrolldown: function(e) {
    this.scrdown = 1;
    this.currentpos = e.clientY;
    this.scrbtnpos = dojo.style(this.scrollbtn, 'top');
    this.mousemove = dojo.connect(document, 'onmousemove', this, 'onscrollmove');
    this.mouseup = dojo.connect(document, 'onmouseup', this, 'mouseUp');
  },
  
  onscrollmove: function(e) {
    var diff = this.currentpos-e.clientY;
    if(diff == 0) return;
    var lastt = (dojo.style(this.scrollbtn, 'top'));
    var pos = dojo.style(this.content, 'top');
    this.scrolling(diff, 	(((lastt-diff)/this.scrollBtnmaxTop)*this.maxTop-pos)/diff);
    this.currentpos = e.clientY;
  },
  
  scrollTo: function(e) {
    var pos = e.clientY;
    var sc = dojo.position(this.scrollbg);
    var currpos = pos - sc.y;    
    if(currpos < this.maxTop) currpos = maxTop; 
    if(currpos > this.scrollBtnmaxTop) currpos = this.scrollBtnmaxTop;
    dojo.style(this.scrollbtn, 'top', currpos + 'px');
    var scroll = -1*currpos * this.scrollRatio;
    dojo.style(this.content, 'top', scroll + 'px');
  },
  
  setPosition: function(p) {
    var pos = -1*p;
    if(pos < this.maxTop) pos = this.maxTop;
    this.setScrollBtn(pos);
    dojo.style(this.content, 'top', pos + 'px');
  },
  
  onscrollup: function(e) {
    e.stopPropagation();
    this.scrdown = 0;
  },
  
  upScroll: function(e) {
    this.mouseup = dojo.connect(document, 'onmouseup', this, 'mouseUp');
    e.stopPropagation();
    this.btnScroll(1);
  },
  
  downScroll: function(e) {
    this.mouseup = dojo.connect(document, 'onmouseup', this, 'mouseUp');
    e.stopPropagation();
    this.btnScroll(-1);
  },
  
  btnScroll: function(direction){
    this.dscr = 1;
    var fn = dojo.hitch(this, 'scrolling', direction, this.scrollspeed/4);
    fn();
    this.inter = window.setInterval(fn, 50);
  },
    
  scrolling: function(p, ratio) {
    if(ratio == undefined) ratio = this.scrollspeed;
    var pos = dojo.style(this.content, 'top');
    var scr = pos + (p * ratio);

    
    if(scr < this.maxTop) scr = this.maxTop;
    if(scr > 0) scr = 0;
    dojo.style(this.content, 'top', scr + 'px');
   
    this.setScrollBtn(scr);
    this.curr = scr;
    this.onScroll();
  },
  
  onScroll: function(){
  
  },
    
  setScrollBtn: function(val) {
    var top = (this.scrollBtnmaxTop*(val/this.maxTop));
    dojo.style(this.scrollbtn, 'top', top+'px');
  },
  
  mouseUp: function(e) {
    if(this.mousemove)
      dojo.disconnect(this.mousemove);
    if(this.mouseup)
      dojo.disconnect(this.mouseup);
    e.stopPropagation();
    this.inter = window.clearInterval(this.inter);
    if( this.dscr == 1) {
      this.dscr = 0;
    }
  },
  
  scrollWheel: function(e) {
    var pos = 0;
    pos = (e.detail != "") ? e.detail : e.wheelDelta;  
    if(dojo.isMozilla || dojo.isOpera) {  
      if (pos < 0) {
        this.scrolling(1);
      } else {
        this.scrolling(-1);
      }
    } else {
      if (pos < 0) {
        this.scrolling(-1);
      } else {
        this.scrolling(1);
      }
    }
    dojo.stopEvent(e);
  }
  
});


dojo.declare("OfflajnCombine", null, {
	constructor: function(args) {
    dojo.mixin(this,args);
    this.fields = new Array();
    this.init();
  },
  
  
  init: function() {
    this.hidden = dojo.byId(this.id);
    //console.log(this.hidden.value);
    dojo.connect(this.hidden, 'onchange', this, 'reset');
    for(var i = 0;i < this.num; i++){
      this.fields[i] = dojo.byId(this.id+i);
      this.fields[i].combineobj = this;
      if(this.fields[i].loaded) this.fields[i].loaded();
      dojo.connect(this.fields[i], 'change', this, 'change');
    }
    this.reset();
    
    this.outer = dojo.byId('offlajncombine_outer' + this.id);
    this.items = dojo.query('.offlajncombinefieldcontainer', this.outer);
    if(this.switcherid) {
      this.switcher = dojo.byId(this.switcherid);
      dojo.connect(this.switcher, 'onchange', this, 'hider');
      this.hider();
    }
  },
  
  reset: function(){
    this.value = this.hidden.value;
    //console.log(this.hidden);
    var values = this.value.split('|*|');
    for(var i = 0;i < this.num; i++){
      if(this.fields[i].value != values[i]){
        this.fields[i].value = values[i];
        this.fireEvent(this.fields[i], 'change');
      }
    }
  },
  
  change: function(){
    var value = '';
    for(var i = 0;i < this.num; i++){
      value+= this.fields[i].value+'|*|';
    }
    this.hidden.value = value;
    this.fireEvent(this.hidden, 'change');
  },
  
  hider: function() {
    var w = dojo.position(this.outer).w;
    if(!this.hiderdiv) { 
      this.hiderdiv = dojo.query('.offlajncombine_hider', this.switcher.parentNode.parentNode.parentNode)[0];
      dojo.style(this.hiderdiv, 'width',  w - 38 + 'px');
    }
    if(this.switcher.value == 0) {
      this.items.forEach(function(item, i){
        if(i >= this.hideafter && item != this.switcher.parentNode.parentNode) dojo.style(item, 'opacity', '0.5');
      }, this);
      if(this.hideafter == 0)
        dojo.style(this.hiderdiv, 'display', 'block');
    } else {
      this.items.forEach(function(item, i){
        if(item != this.switcher.parentNode.parentNode) dojo.style(item, 'opacity', '1');
      }, this);
      if(this.hideafter == 0)
        dojo.style(this.hiderdiv, 'display', 'none');
    }
  },

  fireEvent: function(element,event){
    if ((document.createEventObject && !dojo.isIE) || (document.createEventObject && dojo.isIE && dojo.isIE < 9)){
      var evt = document.createEventObject();
      return element.fireEvent('on'+event,evt);
    }else{
      var evt = document.createEvent("HTMLEvents");
      evt.initEvent(event, true, true );
      return !element.dispatchEvent(evt);
    }
  }
});


dojo.declare("OfflajnText", null, {
	constructor: function(args) {
    dojo.mixin(this,args);
    this.init();
  },
  
  
  init: function() {
    this.hidden = dojo.byId(this.id);
    dojo.connect(this.hidden, 'change', this, 'reset');
    
    this.input = dojo.byId(this.id+'input');
    this.switcher = dojo.byId(this.id+'unit');
  
    
    if(this.validation == 'int'){
      dojo.connect(this.input, 'keyup', this, 'validateInt');
      this.validateInt();
    }else if(this.validation == 'float'){
      dojo.connect(this.input, 'keyup', this, 'validateFloat');
      this.validateFloat();
    }
    dojo.connect(this.input, 'onblur', this, 'change');
    if(this.switcher){
      dojo.connect(this.switcher, 'change', this, 'change');
    }else{
      if(this.attachunit != '')
        this.switcher = {'value': this.attachunit, 'noelement':true};
      
    }
    this.container = dojo.byId('offlajntextcontainer' + this.id);
    if(this.mode == 'increment') {
      this.arrows = dojo.query('.arrow', this.container);
      dojo.connect(this.arrows[0], 'onmousedown', dojo.hitch(this, 'mouseDown', 1));
      dojo.connect(this.arrows[1], 'onmousedown', dojo.hitch(this, 'mouseDown', -1));
    }
    dojo.connect(this.input, 'onfocus', this, dojo.hitch(this, 'setFocus', 1));
    dojo.connect(this.input, 'onblur', this, dojo.hitch(this, 'setFocus', 0));
  },
  
  reset: function(e){
    if(this.hidden.value != this.input.value+(this.switcher? '||'+this.switcher.value : '')){
      var v = this.hidden.value.split('||');
      this.input.value = v[0];
      if(this.switcher && this.switcher.noelement != true){
        this.switcher.value = v[1];
        this.fireEvent(this.switcher, 'change');
      }
      if(e) dojo.stopEvent(e);
      this.fireEvent(this.input, 'change');
    }
  },
  
  change: function(){
    this.hidden.value = this.input.value+(this.switcher? '||'+this.switcher.value : '');
    this.fireEvent(this.hidden, 'change');
    if(this.onoff) this.hider();
  },
  
  setFocus: function(mode) {
    if(mode){
      dojo.addClass(this.input.parentNode, 'focus');
    } else {
      dojo.removeClass(this.input.parentNode, 'focus');
    }
  },
  
  hider: function() {
    if(!this.hiderdiv) {
      this.hiderdiv = dojo.create('div', {'class': 'offlajntext_hider'}, this.container);
      dojo.style(this.hiderdiv, 'width', dojo.position(this.container).w + 'px');
    }
    if(parseInt(this.switcher.value)) {
      dojo.style(this.container, 'opacity', '1');
      dojo.style(this.hiderdiv, 'display', 'none');
    } else {
      dojo.style(this.container, 'opacity', '0.5');
      dojo.style(this.hiderdiv, 'display', 'block');
    }
  },
  
  validateInt: function(){
    var val = parseInt(this.input.value, 10);
    if(!val) val = 0;
    this.input.value = val;
  },
  
  validateFloat: function(){
    var val = parseFloat(this.input.value);
    if(!val) val = 0;
    this.input.value = val;
  },
  
  mouseDown: function(m){
    dojo.connect(document, 'onmouseup', this, 'mouseUp');
    var f = dojo.hitch(this, 'modifyValue', m);
    f();
    this.interval = setInterval(f, 200);
  },
  
  mouseUp: function(){
    clearInterval(this.interval);
  },

  modifyValue: function(m) {
    var val = 0;
    if(this.validation == 'int') {
      val = parseInt(this.input.value);
    } else if(this.validation == 'float') {
      val = parseFloat(this.input.value);
    }
    val = val + m*this.scale;
    if(val < 0 && this.minus == 0) val = 0; 
    this.input.value = val;
    this.change();
    this.fireEvent(this.input, 'change');
  },

  fireEvent: function(element,event){
    if ((document.createEventObject && !dojo.isIE) || (document.createEventObject && dojo.isIE && dojo.isIE < 9)){
      var evt = document.createEventObject();
      return element.fireEvent('on'+event,evt);
    }else{
      var evt = document.createEvent("HTMLEvents");
      evt.initEvent(event, true, true );
      return !element.dispatchEvent(evt);
    }
  }
});


/*!
 * jQuery JavaScript Library v1.4.4
 * http://jquery.com/
 *
 * Copyright 2010, John Resig
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 * Copyright 2010, The Dojo Foundation
 * Released under the MIT, BSD, and GPL Licenses.
 *
 * Date: Thu Nov 11 19:04:53 2010 -0500
 */
(function(E,B){function ka(a,b,d){if(d===B&&a.nodeType===1){d=a.getAttribute("data-"+b);if(typeof d==="string"){try{d=d==="true"?true:d==="false"?false:d==="null"?null:!c.isNaN(d)?parseFloat(d):Ja.test(d)?c.parseJSON(d):d}catch(e){}c.data(a,b,d)}else d=B}return d}function U(){return false}function ca(){return true}function la(a,b,d){d[0].type=a;return c.event.handle.apply(b,d)}function Ka(a){var b,d,e,f,h,l,k,o,x,r,A,C=[];f=[];h=c.data(this,this.nodeType?"events":"__events__");if(typeof h==="function")h=
h.events;if(!(a.liveFired===this||!h||!h.live||a.button&&a.type==="click")){if(a.namespace)A=RegExp("(^|\\.)"+a.namespace.split(".").join("\\.(?:.*\\.)?")+"(\\.|$)");a.liveFired=this;var J=h.live.slice(0);for(k=0;k<J.length;k++){h=J[k];h.origType.replace(X,"")===a.type?f.push(h.selector):J.splice(k--,1)}f=c(a.target).closest(f,a.currentTarget);o=0;for(x=f.length;o<x;o++){r=f[o];for(k=0;k<J.length;k++){h=J[k];if(r.selector===h.selector&&(!A||A.test(h.namespace))){l=r.elem;e=null;if(h.preType==="mouseenter"||
h.preType==="mouseleave"){a.type=h.preType;e=c(a.relatedTarget).closest(h.selector)[0]}if(!e||e!==l)C.push({elem:l,handleObj:h,level:r.level})}}}o=0;for(x=C.length;o<x;o++){f=C[o];if(d&&f.level>d)break;a.currentTarget=f.elem;a.data=f.handleObj.data;a.handleObj=f.handleObj;A=f.handleObj.origHandler.apply(f.elem,arguments);if(A===false||a.isPropagationStopped()){d=f.level;if(A===false)b=false;if(a.isImmediatePropagationStopped())break}}return b}}function Y(a,b){return(a&&a!=="*"?a+".":"")+b.replace(La,
"`").replace(Ma,"&")}function ma(a,b,d){if(c.isFunction(b))return c.grep(a,function(f,h){return!!b.call(f,h,f)===d});else if(b.nodeType)return c.grep(a,function(f){return f===b===d});else if(typeof b==="string"){var e=c.grep(a,function(f){return f.nodeType===1});if(Na.test(b))return c.filter(b,e,!d);else b=c.filter(b,e)}return c.grep(a,function(f){return c.inArray(f,b)>=0===d})}function na(a,b){var d=0;b.each(function(){if(this.nodeName===(a[d]&&a[d].nodeName)){var e=c.data(a[d++]),f=c.data(this,
e);if(e=e&&e.events){delete f.handle;f.events={};for(var h in e)for(var l in e[h])c.event.add(this,h,e[h][l],e[h][l].data)}}})}function Oa(a,b){b.src?c.ajax({url:b.src,async:false,dataType:"script"}):c.globalEval(b.text||b.textContent||b.innerHTML||"");b.parentNode&&b.parentNode.removeChild(b)}function oa(a,b,d){var e=b==="width"?a.offsetWidth:a.offsetHeight;if(d==="border")return e;c.each(b==="width"?Pa:Qa,function(){d||(e-=parseFloat(c.css(a,"padding"+this))||0);if(d==="margin")e+=parseFloat(c.css(a,
"margin"+this))||0;else e-=parseFloat(c.css(a,"border"+this+"Width"))||0});return e}function da(a,b,d,e){if(c.isArray(b)&&b.length)c.each(b,function(f,h){d||Ra.test(a)?e(a,h):da(a+"["+(typeof h==="object"||c.isArray(h)?f:"")+"]",h,d,e)});else if(!d&&b!=null&&typeof b==="object")c.isEmptyObject(b)?e(a,""):c.each(b,function(f,h){da(a+"["+f+"]",h,d,e)});else e(a,b)}function S(a,b){var d={};c.each(pa.concat.apply([],pa.slice(0,b)),function(){d[this]=a});return d}function qa(a){if(!ea[a]){var b=c("<"+
a+">").appendTo("body"),d=b.css("display");b.remove();if(d==="none"||d==="")d="block";ea[a]=d}return ea[a]}function fa(a){return c.isWindow(a)?a:a.nodeType===9?a.defaultView||a.parentWindow:false}var t=E.document,c=function(){function a(){if(!b.isReady){try{t.documentElement.doScroll("left")}catch(j){setTimeout(a,1);return}b.ready()}}var b=function(j,s){return new b.fn.init(j,s)},d=E.jQuery,e=E.$,f,h=/^(?:[^<]*(<[\w\W]+>)[^>]*$|#([\w\-]+)$)/,l=/\S/,k=/^\s+/,o=/\s+$/,x=/\W/,r=/\d/,A=/^<(\w+)\s*\/?>(?:<\/\1>)?$/,
C=/^[\],:{}\s]*$/,J=/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,w=/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,I=/(?:^|:|,)(?:\s*\[)+/g,L=/(webkit)[ \/]([\w.]+)/,g=/(opera)(?:.*version)?[ \/]([\w.]+)/,i=/(msie) ([\w.]+)/,n=/(mozilla)(?:.*? rv:([\w.]+))?/,m=navigator.userAgent,p=false,q=[],u,y=Object.prototype.toString,F=Object.prototype.hasOwnProperty,M=Array.prototype.push,N=Array.prototype.slice,O=String.prototype.trim,D=Array.prototype.indexOf,R={};b.fn=b.prototype={init:function(j,
s){var v,z,H;if(!j)return this;if(j.nodeType){this.context=this[0]=j;this.length=1;return this}if(j==="body"&&!s&&t.body){this.context=t;this[0]=t.body;this.selector="body";this.length=1;return this}if(typeof j==="string")if((v=h.exec(j))&&(v[1]||!s))if(v[1]){H=s?s.ownerDocument||s:t;if(z=A.exec(j))if(b.isPlainObject(s)){j=[t.createElement(z[1])];b.fn.attr.call(j,s,true)}else j=[H.createElement(z[1])];else{z=b.buildFragment([v[1]],[H]);j=(z.cacheable?z.fragment.cloneNode(true):z.fragment).childNodes}return b.merge(this,
j)}else{if((z=t.getElementById(v[2]))&&z.parentNode){if(z.id!==v[2])return f.find(j);this.length=1;this[0]=z}this.context=t;this.selector=j;return this}else if(!s&&!x.test(j)){this.selector=j;this.context=t;j=t.getElementsByTagName(j);return b.merge(this,j)}else return!s||s.jquery?(s||f).find(j):b(s).find(j);else if(b.isFunction(j))return f.ready(j);if(j.selector!==B){this.selector=j.selector;this.context=j.context}return b.makeArray(j,this)},selector:"",jquery:"1.4.4",length:0,size:function(){return this.length},
toArray:function(){return N.call(this,0)},get:function(j){return j==null?this.toArray():j<0?this.slice(j)[0]:this[j]},pushStack:function(j,s,v){var z=b();b.isArray(j)?M.apply(z,j):b.merge(z,j);z.prevObject=this;z.context=this.context;if(s==="find")z.selector=this.selector+(this.selector?" ":"")+v;else if(s)z.selector=this.selector+"."+s+"("+v+")";return z},each:function(j,s){return b.each(this,j,s)},ready:function(j){b.bindReady();if(b.isReady)j.call(t,b);else q&&q.push(j);return this},eq:function(j){return j===
-1?this.slice(j):this.slice(j,+j+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},slice:function(){return this.pushStack(N.apply(this,arguments),"slice",N.call(arguments).join(","))},map:function(j){return this.pushStack(b.map(this,function(s,v){return j.call(s,v,s)}))},end:function(){return this.prevObject||b(null)},push:M,sort:[].sort,splice:[].splice};b.fn.init.prototype=b.fn;b.extend=b.fn.extend=function(){var j,s,v,z,H,G=arguments[0]||{},K=1,Q=arguments.length,ga=false;
if(typeof G==="boolean"){ga=G;G=arguments[1]||{};K=2}if(typeof G!=="object"&&!b.isFunction(G))G={};if(Q===K){G=this;--K}for(;K<Q;K++)if((j=arguments[K])!=null)for(s in j){v=G[s];z=j[s];if(G!==z)if(ga&&z&&(b.isPlainObject(z)||(H=b.isArray(z)))){if(H){H=false;v=v&&b.isArray(v)?v:[]}else v=v&&b.isPlainObject(v)?v:{};G[s]=b.extend(ga,v,z)}else if(z!==B)G[s]=z}return G};b.extend({noConflict:function(j){E.$=e;if(j)E.jQuery=d;return b},isReady:false,readyWait:1,ready:function(j){j===true&&b.readyWait--;
if(!b.readyWait||j!==true&&!b.isReady){if(!t.body)return setTimeout(b.ready,1);b.isReady=true;if(!(j!==true&&--b.readyWait>0))if(q){var s=0,v=q;for(q=null;j=v[s++];)j.call(t,b);b.fn.trigger&&b(t).trigger("ready").unbind("ready")}}},bindReady:function(){if(!p){p=true;if(t.readyState==="complete")return setTimeout(b.ready,1);if(t.addEventListener){t.addEventListener("DOMContentLoaded",u,false);E.addEventListener("load",b.ready,false)}else if(t.attachEvent){t.attachEvent("onreadystatechange",u);E.attachEvent("onload",
b.ready);var j=false;try{j=E.frameElement==null}catch(s){}t.documentElement.doScroll&&j&&a()}}},isFunction:function(j){return b.type(j)==="function"},isArray:Array.isArray||function(j){return b.type(j)==="array"},isWindow:function(j){return j&&typeof j==="object"&&"setInterval"in j},isNaN:function(j){return j==null||!r.test(j)||isNaN(j)},type:function(j){return j==null?String(j):R[y.call(j)]||"object"},isPlainObject:function(j){if(!j||b.type(j)!=="object"||j.nodeType||b.isWindow(j))return false;if(j.constructor&&
!F.call(j,"constructor")&&!F.call(j.constructor.prototype,"isPrototypeOf"))return false;for(var s in j);return s===B||F.call(j,s)},isEmptyObject:function(j){for(var s in j)return false;return true},error:function(j){throw j;},parseJSON:function(j){if(typeof j!=="string"||!j)return null;j=b.trim(j);if(C.test(j.replace(J,"@").replace(w,"]").replace(I,"")))return E.JSON&&E.JSON.parse?E.JSON.parse(j):(new Function("return "+j))();else b.error("Invalid JSON: "+j)},noop:function(){},globalEval:function(j){if(j&&
l.test(j)){var s=t.getElementsByTagName("head")[0]||t.documentElement,v=t.createElement("script");v.type="text/javascript";if(b.support.scriptEval)v.appendChild(t.createTextNode(j));else v.text=j;s.insertBefore(v,s.firstChild);s.removeChild(v)}},nodeName:function(j,s){return j.nodeName&&j.nodeName.toUpperCase()===s.toUpperCase()},each:function(j,s,v){var z,H=0,G=j.length,K=G===B||b.isFunction(j);if(v)if(K)for(z in j){if(s.apply(j[z],v)===false)break}else for(;H<G;){if(s.apply(j[H++],v)===false)break}else if(K)for(z in j){if(s.call(j[z],
z,j[z])===false)break}else for(v=j[0];H<G&&s.call(v,H,v)!==false;v=j[++H]);return j},trim:O?function(j){return j==null?"":O.call(j)}:function(j){return j==null?"":j.toString().replace(k,"").replace(o,"")},makeArray:function(j,s){var v=s||[];if(j!=null){var z=b.type(j);j.length==null||z==="string"||z==="function"||z==="regexp"||b.isWindow(j)?M.call(v,j):b.merge(v,j)}return v},inArray:function(j,s){if(s.indexOf)return s.indexOf(j);for(var v=0,z=s.length;v<z;v++)if(s[v]===j)return v;return-1},merge:function(j,
s){var v=j.length,z=0;if(typeof s.length==="number")for(var H=s.length;z<H;z++)j[v++]=s[z];else for(;s[z]!==B;)j[v++]=s[z++];j.length=v;return j},grep:function(j,s,v){var z=[],H;v=!!v;for(var G=0,K=j.length;G<K;G++){H=!!s(j[G],G);v!==H&&z.push(j[G])}return z},map:function(j,s,v){for(var z=[],H,G=0,K=j.length;G<K;G++){H=s(j[G],G,v);if(H!=null)z[z.length]=H}return z.concat.apply([],z)},guid:1,proxy:function(j,s,v){if(arguments.length===2)if(typeof s==="string"){v=j;j=v[s];s=B}else if(s&&!b.isFunction(s)){v=
s;s=B}if(!s&&j)s=function(){return j.apply(v||this,arguments)};if(j)s.guid=j.guid=j.guid||s.guid||b.guid++;return s},access:function(j,s,v,z,H,G){var K=j.length;if(typeof s==="object"){for(var Q in s)b.access(j,Q,s[Q],z,H,v);return j}if(v!==B){z=!G&&z&&b.isFunction(v);for(Q=0;Q<K;Q++)H(j[Q],s,z?v.call(j[Q],Q,H(j[Q],s)):v,G);return j}return K?H(j[0],s):B},now:function(){return(new Date).getTime()},uaMatch:function(j){j=j.toLowerCase();j=L.exec(j)||g.exec(j)||i.exec(j)||j.indexOf("compatible")<0&&n.exec(j)||
[];return{browser:j[1]||"",version:j[2]||"0"}},browser:{}});b.each("Boolean Number String Function Array Date RegExp Object".split(" "),function(j,s){R["[object "+s+"]"]=s.toLowerCase()});m=b.uaMatch(m);if(m.browser){b.browser[m.browser]=true;b.browser.version=m.version}if(b.browser.webkit)b.browser.safari=true;if(D)b.inArray=function(j,s){return D.call(s,j)};if(!/\s/.test("\u00a0")){k=/^[\s\xA0]+/;o=/[\s\xA0]+$/}f=b(t);if(t.addEventListener)u=function(){t.removeEventListener("DOMContentLoaded",u,
false);b.ready()};else if(t.attachEvent)u=function(){if(t.readyState==="complete"){t.detachEvent("onreadystatechange",u);b.ready()}};return E.jQuery=E.$=b}();(function(){c.support={};var a=t.documentElement,b=t.createElement("script"),d=t.createElement("div"),e="script"+c.now();d.style.display="none";d.innerHTML="   <link/><table></table><a href='/a' style='color:red;float:left;opacity:.55;'>a</a><input type='checkbox'/>";var f=d.getElementsByTagName("*"),h=d.getElementsByTagName("a")[0],l=t.createElement("select"),
k=l.appendChild(t.createElement("option"));if(!(!f||!f.length||!h)){c.support={leadingWhitespace:d.firstChild.nodeType===3,tbody:!d.getElementsByTagName("tbody").length,htmlSerialize:!!d.getElementsByTagName("link").length,style:/red/.test(h.getAttribute("style")),hrefNormalized:h.getAttribute("href")==="/a",opacity:/^0.55$/.test(h.style.opacity),cssFloat:!!h.style.cssFloat,checkOn:d.getElementsByTagName("input")[0].value==="on",optSelected:k.selected,deleteExpando:true,optDisabled:false,checkClone:false,
scriptEval:false,noCloneEvent:true,boxModel:null,inlineBlockNeedsLayout:false,shrinkWrapBlocks:false,reliableHiddenOffsets:true};l.disabled=true;c.support.optDisabled=!k.disabled;b.type="text/javascript";try{b.appendChild(t.createTextNode("window."+e+"=1;"))}catch(o){}a.insertBefore(b,a.firstChild);if(E[e]){c.support.scriptEval=true;delete E[e]}try{delete b.test}catch(x){c.support.deleteExpando=false}a.removeChild(b);if(d.attachEvent&&d.fireEvent){d.attachEvent("onclick",function r(){c.support.noCloneEvent=
false;d.detachEvent("onclick",r)});d.cloneNode(true).fireEvent("onclick")}d=t.createElement("div");d.innerHTML="<input type='radio' name='radiotest' checked='checked'/>";a=t.createDocumentFragment();a.appendChild(d.firstChild);c.support.checkClone=a.cloneNode(true).cloneNode(true).lastChild.checked;c(function(){var r=t.createElement("div");r.style.width=r.style.paddingLeft="1px";t.body.appendChild(r);c.boxModel=c.support.boxModel=r.offsetWidth===2;if("zoom"in r.style){r.style.display="inline";r.style.zoom=
1;c.support.inlineBlockNeedsLayout=r.offsetWidth===2;r.style.display="";r.innerHTML="<div style='width:4px;'></div>";c.support.shrinkWrapBlocks=r.offsetWidth!==2}r.innerHTML="<table><tr><td style='padding:0;display:none'></td><td>t</td></tr></table>";var A=r.getElementsByTagName("td");c.support.reliableHiddenOffsets=A[0].offsetHeight===0;A[0].style.display="";A[1].style.display="none";c.support.reliableHiddenOffsets=c.support.reliableHiddenOffsets&&A[0].offsetHeight===0;r.innerHTML="";t.body.removeChild(r).style.display=
"none"});a=function(r){var A=t.createElement("div");r="on"+r;var C=r in A;if(!C){A.setAttribute(r,"return;");C=typeof A[r]==="function"}return C};c.support.submitBubbles=a("submit");c.support.changeBubbles=a("change");a=b=d=f=h=null}})();var ra={},Ja=/^(?:\{.*\}|\[.*\])$/;c.extend({cache:{},uuid:0,expando:"jQuery"+c.now(),noData:{embed:true,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:true},data:function(a,b,d){if(c.acceptData(a)){a=a==E?ra:a;var e=a.nodeType,f=e?a[c.expando]:null,h=
c.cache;if(!(e&&!f&&typeof b==="string"&&d===B)){if(e)f||(a[c.expando]=f=++c.uuid);else h=a;if(typeof b==="object")if(e)h[f]=c.extend(h[f],b);else c.extend(h,b);else if(e&&!h[f])h[f]={};a=e?h[f]:h;if(d!==B)a[b]=d;return typeof b==="string"?a[b]:a}}},removeData:function(a,b){if(c.acceptData(a)){a=a==E?ra:a;var d=a.nodeType,e=d?a[c.expando]:a,f=c.cache,h=d?f[e]:e;if(b){if(h){delete h[b];d&&c.isEmptyObject(h)&&c.removeData(a)}}else if(d&&c.support.deleteExpando)delete a[c.expando];else if(a.removeAttribute)a.removeAttribute(c.expando);
else if(d)delete f[e];else for(var l in a)delete a[l]}},acceptData:function(a){if(a.nodeName){var b=c.noData[a.nodeName.toLowerCase()];if(b)return!(b===true||a.getAttribute("classid")!==b)}return true}});c.fn.extend({data:function(a,b){var d=null;if(typeof a==="undefined"){if(this.length){var e=this[0].attributes,f;d=c.data(this[0]);for(var h=0,l=e.length;h<l;h++){f=e[h].name;if(f.indexOf("data-")===0){f=f.substr(5);ka(this[0],f,d[f])}}}return d}else if(typeof a==="object")return this.each(function(){c.data(this,
a)});var k=a.split(".");k[1]=k[1]?"."+k[1]:"";if(b===B){d=this.triggerHandler("getData"+k[1]+"!",[k[0]]);if(d===B&&this.length){d=c.data(this[0],a);d=ka(this[0],a,d)}return d===B&&k[1]?this.data(k[0]):d}else return this.each(function(){var o=c(this),x=[k[0],b];o.triggerHandler("setData"+k[1]+"!",x);c.data(this,a,b);o.triggerHandler("changeData"+k[1]+"!",x)})},removeData:function(a){return this.each(function(){c.removeData(this,a)})}});c.extend({queue:function(a,b,d){if(a){b=(b||"fx")+"queue";var e=
c.data(a,b);if(!d)return e||[];if(!e||c.isArray(d))e=c.data(a,b,c.makeArray(d));else e.push(d);return e}},dequeue:function(a,b){b=b||"fx";var d=c.queue(a,b),e=d.shift();if(e==="inprogress")e=d.shift();if(e){b==="fx"&&d.unshift("inprogress");e.call(a,function(){c.dequeue(a,b)})}}});c.fn.extend({queue:function(a,b){if(typeof a!=="string"){b=a;a="fx"}if(b===B)return c.queue(this[0],a);return this.each(function(){var d=c.queue(this,a,b);a==="fx"&&d[0]!=="inprogress"&&c.dequeue(this,a)})},dequeue:function(a){return this.each(function(){c.dequeue(this,
a)})},delay:function(a,b){a=c.fx?c.fx.speeds[a]||a:a;b=b||"fx";return this.queue(b,function(){var d=this;setTimeout(function(){c.dequeue(d,b)},a)})},clearQueue:function(a){return this.queue(a||"fx",[])}});var sa=/[\n\t]/g,ha=/\s+/,Sa=/\r/g,Ta=/^(?:href|src|style)$/,Ua=/^(?:button|input)$/i,Va=/^(?:button|input|object|select|textarea)$/i,Wa=/^a(?:rea)?$/i,ta=/^(?:radio|checkbox)$/i;c.props={"for":"htmlFor","class":"className",readonly:"readOnly",maxlength:"maxLength",cellspacing:"cellSpacing",rowspan:"rowSpan",
colspan:"colSpan",tabindex:"tabIndex",usemap:"useMap",frameborder:"frameBorder"};c.fn.extend({attr:function(a,b){return c.access(this,a,b,true,c.attr)},removeAttr:function(a){return this.each(function(){c.attr(this,a,"");this.nodeType===1&&this.removeAttribute(a)})},addClass:function(a){if(c.isFunction(a))return this.each(function(x){var r=c(this);r.addClass(a.call(this,x,r.attr("class")))});if(a&&typeof a==="string")for(var b=(a||"").split(ha),d=0,e=this.length;d<e;d++){var f=this[d];if(f.nodeType===
1)if(f.className){for(var h=" "+f.className+" ",l=f.className,k=0,o=b.length;k<o;k++)if(h.indexOf(" "+b[k]+" ")<0)l+=" "+b[k];f.className=c.trim(l)}else f.className=a}return this},removeClass:function(a){if(c.isFunction(a))return this.each(function(o){var x=c(this);x.removeClass(a.call(this,o,x.attr("class")))});if(a&&typeof a==="string"||a===B)for(var b=(a||"").split(ha),d=0,e=this.length;d<e;d++){var f=this[d];if(f.nodeType===1&&f.className)if(a){for(var h=(" "+f.className+" ").replace(sa," "),
l=0,k=b.length;l<k;l++)h=h.replace(" "+b[l]+" "," ");f.className=c.trim(h)}else f.className=""}return this},toggleClass:function(a,b){var d=typeof a,e=typeof b==="boolean";if(c.isFunction(a))return this.each(function(f){var h=c(this);h.toggleClass(a.call(this,f,h.attr("class"),b),b)});return this.each(function(){if(d==="string")for(var f,h=0,l=c(this),k=b,o=a.split(ha);f=o[h++];){k=e?k:!l.hasClass(f);l[k?"addClass":"removeClass"](f)}else if(d==="undefined"||d==="boolean"){this.className&&c.data(this,
"__className__",this.className);this.className=this.className||a===false?"":c.data(this,"__className__")||""}})},hasClass:function(a){a=" "+a+" ";for(var b=0,d=this.length;b<d;b++)if((" "+this[b].className+" ").replace(sa," ").indexOf(a)>-1)return true;return false},val:function(a){if(!arguments.length){var b=this[0];if(b){if(c.nodeName(b,"option")){var d=b.attributes.value;return!d||d.specified?b.value:b.text}if(c.nodeName(b,"select")){var e=b.selectedIndex;d=[];var f=b.options;b=b.type==="select-one";
if(e<0)return null;var h=b?e:0;for(e=b?e+1:f.length;h<e;h++){var l=f[h];if(l.selected&&(c.support.optDisabled?!l.disabled:l.getAttribute("disabled")===null)&&(!l.parentNode.disabled||!c.nodeName(l.parentNode,"optgroup"))){a=c(l).val();if(b)return a;d.push(a)}}return d}if(ta.test(b.type)&&!c.support.checkOn)return b.getAttribute("value")===null?"on":b.value;return(b.value||"").replace(Sa,"")}return B}var k=c.isFunction(a);return this.each(function(o){var x=c(this),r=a;if(this.nodeType===1){if(k)r=
a.call(this,o,x.val());if(r==null)r="";else if(typeof r==="number")r+="";else if(c.isArray(r))r=c.map(r,function(C){return C==null?"":C+""});if(c.isArray(r)&&ta.test(this.type))this.checked=c.inArray(x.val(),r)>=0;else if(c.nodeName(this,"select")){var A=c.makeArray(r);c("option",this).each(function(){this.selected=c.inArray(c(this).val(),A)>=0});if(!A.length)this.selectedIndex=-1}else this.value=r}})}});c.extend({attrFn:{val:true,css:true,html:true,text:true,data:true,width:true,height:true,offset:true},
attr:function(a,b,d,e){if(!a||a.nodeType===3||a.nodeType===8)return B;if(e&&b in c.attrFn)return c(a)[b](d);e=a.nodeType!==1||!c.isXMLDoc(a);var f=d!==B;b=e&&c.props[b]||b;var h=Ta.test(b);if((b in a||a[b]!==B)&&e&&!h){if(f){b==="type"&&Ua.test(a.nodeName)&&a.parentNode&&c.error("type property can't be changed");if(d===null)a.nodeType===1&&a.removeAttribute(b);else a[b]=d}if(c.nodeName(a,"form")&&a.getAttributeNode(b))return a.getAttributeNode(b).nodeValue;if(b==="tabIndex")return(b=a.getAttributeNode("tabIndex"))&&
b.specified?b.value:Va.test(a.nodeName)||Wa.test(a.nodeName)&&a.href?0:B;return a[b]}if(!c.support.style&&e&&b==="style"){if(f)a.style.cssText=""+d;return a.style.cssText}f&&a.setAttribute(b,""+d);if(!a.attributes[b]&&a.hasAttribute&&!a.hasAttribute(b))return B;a=!c.support.hrefNormalized&&e&&h?a.getAttribute(b,2):a.getAttribute(b);return a===null?B:a}});var X=/\.(.*)$/,ia=/^(?:textarea|input|select)$/i,La=/\./g,Ma=/ /g,Xa=/[^\w\s.|`]/g,Ya=function(a){return a.replace(Xa,"\\$&")},ua={focusin:0,focusout:0};
c.event={add:function(a,b,d,e){if(!(a.nodeType===3||a.nodeType===8)){if(c.isWindow(a)&&a!==E&&!a.frameElement)a=E;if(d===false)d=U;else if(!d)return;var f,h;if(d.handler){f=d;d=f.handler}if(!d.guid)d.guid=c.guid++;if(h=c.data(a)){var l=a.nodeType?"events":"__events__",k=h[l],o=h.handle;if(typeof k==="function"){o=k.handle;k=k.events}else if(!k){a.nodeType||(h[l]=h=function(){});h.events=k={}}if(!o)h.handle=o=function(){return typeof c!=="undefined"&&!c.event.triggered?c.event.handle.apply(o.elem,
arguments):B};o.elem=a;b=b.split(" ");for(var x=0,r;l=b[x++];){h=f?c.extend({},f):{handler:d,data:e};if(l.indexOf(".")>-1){r=l.split(".");l=r.shift();h.namespace=r.slice(0).sort().join(".")}else{r=[];h.namespace=""}h.type=l;if(!h.guid)h.guid=d.guid;var A=k[l],C=c.event.special[l]||{};if(!A){A=k[l]=[];if(!C.setup||C.setup.call(a,e,r,o)===false)if(a.addEventListener)a.addEventListener(l,o,false);else a.attachEvent&&a.attachEvent("on"+l,o)}if(C.add){C.add.call(a,h);if(!h.handler.guid)h.handler.guid=
d.guid}A.push(h);c.event.global[l]=true}a=null}}},global:{},remove:function(a,b,d,e){if(!(a.nodeType===3||a.nodeType===8)){if(d===false)d=U;var f,h,l=0,k,o,x,r,A,C,J=a.nodeType?"events":"__events__",w=c.data(a),I=w&&w[J];if(w&&I){if(typeof I==="function"){w=I;I=I.events}if(b&&b.type){d=b.handler;b=b.type}if(!b||typeof b==="string"&&b.charAt(0)==="."){b=b||"";for(f in I)c.event.remove(a,f+b)}else{for(b=b.split(" ");f=b[l++];){r=f;k=f.indexOf(".")<0;o=[];if(!k){o=f.split(".");f=o.shift();x=RegExp("(^|\\.)"+
c.map(o.slice(0).sort(),Ya).join("\\.(?:.*\\.)?")+"(\\.|$)")}if(A=I[f])if(d){r=c.event.special[f]||{};for(h=e||0;h<A.length;h++){C=A[h];if(d.guid===C.guid){if(k||x.test(C.namespace)){e==null&&A.splice(h--,1);r.remove&&r.remove.call(a,C)}if(e!=null)break}}if(A.length===0||e!=null&&A.length===1){if(!r.teardown||r.teardown.call(a,o)===false)c.removeEvent(a,f,w.handle);delete I[f]}}else for(h=0;h<A.length;h++){C=A[h];if(k||x.test(C.namespace)){c.event.remove(a,r,C.handler,h);A.splice(h--,1)}}}if(c.isEmptyObject(I)){if(b=
w.handle)b.elem=null;delete w.events;delete w.handle;if(typeof w==="function")c.removeData(a,J);else c.isEmptyObject(w)&&c.removeData(a)}}}}},trigger:function(a,b,d,e){var f=a.type||a;if(!e){a=typeof a==="object"?a[c.expando]?a:c.extend(c.Event(f),a):c.Event(f);if(f.indexOf("!")>=0){a.type=f=f.slice(0,-1);a.exclusive=true}if(!d){a.stopPropagation();c.event.global[f]&&c.each(c.cache,function(){this.events&&this.events[f]&&c.event.trigger(a,b,this.handle.elem)})}if(!d||d.nodeType===3||d.nodeType===
8)return B;a.result=B;a.target=d;b=c.makeArray(b);b.unshift(a)}a.currentTarget=d;(e=d.nodeType?c.data(d,"handle"):(c.data(d,"__events__")||{}).handle)&&e.apply(d,b);e=d.parentNode||d.ownerDocument;try{if(!(d&&d.nodeName&&c.noData[d.nodeName.toLowerCase()]))if(d["on"+f]&&d["on"+f].apply(d,b)===false){a.result=false;a.preventDefault()}}catch(h){}if(!a.isPropagationStopped()&&e)c.event.trigger(a,b,e,true);else if(!a.isDefaultPrevented()){var l;e=a.target;var k=f.replace(X,""),o=c.nodeName(e,"a")&&k===
"click",x=c.event.special[k]||{};if((!x._default||x._default.call(d,a)===false)&&!o&&!(e&&e.nodeName&&c.noData[e.nodeName.toLowerCase()])){try{if(e[k]){if(l=e["on"+k])e["on"+k]=null;c.event.triggered=true;e[k]()}}catch(r){}if(l)e["on"+k]=l;c.event.triggered=false}}},handle:function(a){var b,d,e,f;d=[];var h=c.makeArray(arguments);a=h[0]=c.event.fix(a||E.event);a.currentTarget=this;b=a.type.indexOf(".")<0&&!a.exclusive;if(!b){e=a.type.split(".");a.type=e.shift();d=e.slice(0).sort();e=RegExp("(^|\\.)"+
d.join("\\.(?:.*\\.)?")+"(\\.|$)")}a.namespace=a.namespace||d.join(".");f=c.data(this,this.nodeType?"events":"__events__");if(typeof f==="function")f=f.events;d=(f||{})[a.type];if(f&&d){d=d.slice(0);f=0;for(var l=d.length;f<l;f++){var k=d[f];if(b||e.test(k.namespace)){a.handler=k.handler;a.data=k.data;a.handleObj=k;k=k.handler.apply(this,h);if(k!==B){a.result=k;if(k===false){a.preventDefault();a.stopPropagation()}}if(a.isImmediatePropagationStopped())break}}}return a.result},props:"altKey attrChange attrName bubbles button cancelable charCode clientX clientY ctrlKey currentTarget data detail eventPhase fromElement handler keyCode layerX layerY metaKey newValue offsetX offsetY pageX pageY prevValue relatedNode relatedTarget screenX screenY shiftKey srcElement target toElement view wheelDelta which".split(" "),
fix:function(a){if(a[c.expando])return a;var b=a;a=c.Event(b);for(var d=this.props.length,e;d;){e=this.props[--d];a[e]=b[e]}if(!a.target)a.target=a.srcElement||t;if(a.target.nodeType===3)a.target=a.target.parentNode;if(!a.relatedTarget&&a.fromElement)a.relatedTarget=a.fromElement===a.target?a.toElement:a.fromElement;if(a.pageX==null&&a.clientX!=null){b=t.documentElement;d=t.body;a.pageX=a.clientX+(b&&b.scrollLeft||d&&d.scrollLeft||0)-(b&&b.clientLeft||d&&d.clientLeft||0);a.pageY=a.clientY+(b&&b.scrollTop||
d&&d.scrollTop||0)-(b&&b.clientTop||d&&d.clientTop||0)}if(a.which==null&&(a.charCode!=null||a.keyCode!=null))a.which=a.charCode!=null?a.charCode:a.keyCode;if(!a.metaKey&&a.ctrlKey)a.metaKey=a.ctrlKey;if(!a.which&&a.button!==B)a.which=a.button&1?1:a.button&2?3:a.button&4?2:0;return a},guid:1E8,proxy:c.proxy,special:{ready:{setup:c.bindReady,teardown:c.noop},live:{add:function(a){c.event.add(this,Y(a.origType,a.selector),c.extend({},a,{handler:Ka,guid:a.handler.guid}))},remove:function(a){c.event.remove(this,
Y(a.origType,a.selector),a)}},beforeunload:{setup:function(a,b,d){if(c.isWindow(this))this.onbeforeunload=d},teardown:function(a,b){if(this.onbeforeunload===b)this.onbeforeunload=null}}}};c.removeEvent=t.removeEventListener?function(a,b,d){a.removeEventListener&&a.removeEventListener(b,d,false)}:function(a,b,d){a.detachEvent&&a.detachEvent("on"+b,d)};c.Event=function(a){if(!this.preventDefault)return new c.Event(a);if(a&&a.type){this.originalEvent=a;this.type=a.type}else this.type=a;this.timeStamp=
c.now();this[c.expando]=true};c.Event.prototype={preventDefault:function(){this.isDefaultPrevented=ca;var a=this.originalEvent;if(a)if(a.preventDefault)a.preventDefault();else a.returnValue=false},stopPropagation:function(){this.isPropagationStopped=ca;var a=this.originalEvent;if(a){a.stopPropagation&&a.stopPropagation();a.cancelBubble=true}},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=ca;this.stopPropagation()},isDefaultPrevented:U,isPropagationStopped:U,isImmediatePropagationStopped:U};
var va=function(a){var b=a.relatedTarget;try{for(;b&&b!==this;)b=b.parentNode;if(b!==this){a.type=a.data;c.event.handle.apply(this,arguments)}}catch(d){}},wa=function(a){a.type=a.data;c.event.handle.apply(this,arguments)};c.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(a,b){c.event.special[a]={setup:function(d){c.event.add(this,b,d&&d.selector?wa:va,a)},teardown:function(d){c.event.remove(this,b,d&&d.selector?wa:va)}}});if(!c.support.submitBubbles)c.event.special.submit={setup:function(){if(this.nodeName.toLowerCase()!==
"form"){c.event.add(this,"click.specialSubmit",function(a){var b=a.target,d=b.type;if((d==="submit"||d==="image")&&c(b).closest("form").length){a.liveFired=B;return la("submit",this,arguments)}});c.event.add(this,"keypress.specialSubmit",function(a){var b=a.target,d=b.type;if((d==="text"||d==="password")&&c(b).closest("form").length&&a.keyCode===13){a.liveFired=B;return la("submit",this,arguments)}})}else return false},teardown:function(){c.event.remove(this,".specialSubmit")}};if(!c.support.changeBubbles){var V,
xa=function(a){var b=a.type,d=a.value;if(b==="radio"||b==="checkbox")d=a.checked;else if(b==="select-multiple")d=a.selectedIndex>-1?c.map(a.options,function(e){return e.selected}).join("-"):"";else if(a.nodeName.toLowerCase()==="select")d=a.selectedIndex;return d},Z=function(a,b){var d=a.target,e,f;if(!(!ia.test(d.nodeName)||d.readOnly)){e=c.data(d,"_change_data");f=xa(d);if(a.type!=="focusout"||d.type!=="radio")c.data(d,"_change_data",f);if(!(e===B||f===e))if(e!=null||f){a.type="change";a.liveFired=
B;return c.event.trigger(a,b,d)}}};c.event.special.change={filters:{focusout:Z,beforedeactivate:Z,click:function(a){var b=a.target,d=b.type;if(d==="radio"||d==="checkbox"||b.nodeName.toLowerCase()==="select")return Z.call(this,a)},keydown:function(a){var b=a.target,d=b.type;if(a.keyCode===13&&b.nodeName.toLowerCase()!=="textarea"||a.keyCode===32&&(d==="checkbox"||d==="radio")||d==="select-multiple")return Z.call(this,a)},beforeactivate:function(a){a=a.target;c.data(a,"_change_data",xa(a))}},setup:function(){if(this.type===
"file")return false;for(var a in V)c.event.add(this,a+".specialChange",V[a]);return ia.test(this.nodeName)},teardown:function(){c.event.remove(this,".specialChange");return ia.test(this.nodeName)}};V=c.event.special.change.filters;V.focus=V.beforeactivate}t.addEventListener&&c.each({focus:"focusin",blur:"focusout"},function(a,b){function d(e){e=c.event.fix(e);e.type=b;return c.event.trigger(e,null,e.target)}c.event.special[b]={setup:function(){ua[b]++===0&&t.addEventListener(a,d,true)},teardown:function(){--ua[b]===
0&&t.removeEventListener(a,d,true)}}});c.each(["bind","one"],function(a,b){c.fn[b]=function(d,e,f){if(typeof d==="object"){for(var h in d)this[b](h,e,d[h],f);return this}if(c.isFunction(e)||e===false){f=e;e=B}var l=b==="one"?c.proxy(f,function(o){c(this).unbind(o,l);return f.apply(this,arguments)}):f;if(d==="unload"&&b!=="one")this.one(d,e,f);else{h=0;for(var k=this.length;h<k;h++)c.event.add(this[h],d,l,e)}return this}});c.fn.extend({unbind:function(a,b){if(typeof a==="object"&&!a.preventDefault)for(var d in a)this.unbind(d,
a[d]);else{d=0;for(var e=this.length;d<e;d++)c.event.remove(this[d],a,b)}return this},delegate:function(a,b,d,e){return this.live(b,d,e,a)},undelegate:function(a,b,d){return arguments.length===0?this.unbind("live"):this.die(b,null,d,a)},trigger:function(a,b){return this.each(function(){c.event.trigger(a,b,this)})},triggerHandler:function(a,b){if(this[0]){var d=c.Event(a);d.preventDefault();d.stopPropagation();c.event.trigger(d,b,this[0]);return d.result}},toggle:function(a){for(var b=arguments,d=
1;d<b.length;)c.proxy(a,b[d++]);return this.click(c.proxy(a,function(e){var f=(c.data(this,"lastToggle"+a.guid)||0)%d;c.data(this,"lastToggle"+a.guid,f+1);e.preventDefault();return b[f].apply(this,arguments)||false}))},hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}});var ya={focus:"focusin",blur:"focusout",mouseenter:"mouseover",mouseleave:"mouseout"};c.each(["live","die"],function(a,b){c.fn[b]=function(d,e,f,h){var l,k=0,o,x,r=h||this.selector;h=h?this:c(this.context);if(typeof d===
"object"&&!d.preventDefault){for(l in d)h[b](l,e,d[l],r);return this}if(c.isFunction(e)){f=e;e=B}for(d=(d||"").split(" ");(l=d[k++])!=null;){o=X.exec(l);x="";if(o){x=o[0];l=l.replace(X,"")}if(l==="hover")d.push("mouseenter"+x,"mouseleave"+x);else{o=l;if(l==="focus"||l==="blur"){d.push(ya[l]+x);l+=x}else l=(ya[l]||l)+x;if(b==="live"){x=0;for(var A=h.length;x<A;x++)c.event.add(h[x],"live."+Y(l,r),{data:e,selector:r,handler:f,origType:l,origHandler:f,preType:o})}else h.unbind("live."+Y(l,r),f)}}return this}});
c.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error".split(" "),function(a,b){c.fn[b]=function(d,e){if(e==null){e=d;d=null}return arguments.length>0?this.bind(b,d,e):this.trigger(b)};if(c.attrFn)c.attrFn[b]=true});E.attachEvent&&!E.addEventListener&&c(E).bind("unload",function(){for(var a in c.cache)if(c.cache[a].handle)try{c.event.remove(c.cache[a].handle.elem)}catch(b){}});
(function(){function a(g,i,n,m,p,q){p=0;for(var u=m.length;p<u;p++){var y=m[p];if(y){var F=false;for(y=y[g];y;){if(y.sizcache===n){F=m[y.sizset];break}if(y.nodeType===1&&!q){y.sizcache=n;y.sizset=p}if(y.nodeName.toLowerCase()===i){F=y;break}y=y[g]}m[p]=F}}}function b(g,i,n,m,p,q){p=0;for(var u=m.length;p<u;p++){var y=m[p];if(y){var F=false;for(y=y[g];y;){if(y.sizcache===n){F=m[y.sizset];break}if(y.nodeType===1){if(!q){y.sizcache=n;y.sizset=p}if(typeof i!=="string"){if(y===i){F=true;break}}else if(k.filter(i,
[y]).length>0){F=y;break}}y=y[g]}m[p]=F}}}var d=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,e=0,f=Object.prototype.toString,h=false,l=true;[0,0].sort(function(){l=false;return 0});var k=function(g,i,n,m){n=n||[];var p=i=i||t;if(i.nodeType!==1&&i.nodeType!==9)return[];if(!g||typeof g!=="string")return n;var q,u,y,F,M,N=true,O=k.isXML(i),D=[],R=g;do{d.exec("");if(q=d.exec(R)){R=q[3];D.push(q[1]);if(q[2]){F=q[3];
break}}}while(q);if(D.length>1&&x.exec(g))if(D.length===2&&o.relative[D[0]])u=L(D[0]+D[1],i);else for(u=o.relative[D[0]]?[i]:k(D.shift(),i);D.length;){g=D.shift();if(o.relative[g])g+=D.shift();u=L(g,u)}else{if(!m&&D.length>1&&i.nodeType===9&&!O&&o.match.ID.test(D[0])&&!o.match.ID.test(D[D.length-1])){q=k.find(D.shift(),i,O);i=q.expr?k.filter(q.expr,q.set)[0]:q.set[0]}if(i){q=m?{expr:D.pop(),set:C(m)}:k.find(D.pop(),D.length===1&&(D[0]==="~"||D[0]==="+")&&i.parentNode?i.parentNode:i,O);u=q.expr?k.filter(q.expr,
q.set):q.set;if(D.length>0)y=C(u);else N=false;for(;D.length;){q=M=D.pop();if(o.relative[M])q=D.pop();else M="";if(q==null)q=i;o.relative[M](y,q,O)}}else y=[]}y||(y=u);y||k.error(M||g);if(f.call(y)==="[object Array]")if(N)if(i&&i.nodeType===1)for(g=0;y[g]!=null;g++){if(y[g]&&(y[g]===true||y[g].nodeType===1&&k.contains(i,y[g])))n.push(u[g])}else for(g=0;y[g]!=null;g++)y[g]&&y[g].nodeType===1&&n.push(u[g]);else n.push.apply(n,y);else C(y,n);if(F){k(F,p,n,m);k.uniqueSort(n)}return n};k.uniqueSort=function(g){if(w){h=
l;g.sort(w);if(h)for(var i=1;i<g.length;i++)g[i]===g[i-1]&&g.splice(i--,1)}return g};k.matches=function(g,i){return k(g,null,null,i)};k.matchesSelector=function(g,i){return k(i,null,null,[g]).length>0};k.find=function(g,i,n){var m;if(!g)return[];for(var p=0,q=o.order.length;p<q;p++){var u,y=o.order[p];if(u=o.leftMatch[y].exec(g)){var F=u[1];u.splice(1,1);if(F.substr(F.length-1)!=="\\"){u[1]=(u[1]||"").replace(/\\/g,"");m=o.find[y](u,i,n);if(m!=null){g=g.replace(o.match[y],"");break}}}}m||(m=i.getElementsByTagName("*"));
return{set:m,expr:g}};k.filter=function(g,i,n,m){for(var p,q,u=g,y=[],F=i,M=i&&i[0]&&k.isXML(i[0]);g&&i.length;){for(var N in o.filter)if((p=o.leftMatch[N].exec(g))!=null&&p[2]){var O,D,R=o.filter[N];D=p[1];q=false;p.splice(1,1);if(D.substr(D.length-1)!=="\\"){if(F===y)y=[];if(o.preFilter[N])if(p=o.preFilter[N](p,F,n,y,m,M)){if(p===true)continue}else q=O=true;if(p)for(var j=0;(D=F[j])!=null;j++)if(D){O=R(D,p,j,F);var s=m^!!O;if(n&&O!=null)if(s)q=true;else F[j]=false;else if(s){y.push(D);q=true}}if(O!==
B){n||(F=y);g=g.replace(o.match[N],"");if(!q)return[];break}}}if(g===u)if(q==null)k.error(g);else break;u=g}return F};k.error=function(g){throw"Syntax error, unrecognized expression: "+g;};var o=k.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,CLASS:/\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(['"]*)(.*?)\3|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\((even|odd|[\dn+\-]*)\))?/,
POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/},leftMatch:{},attrMap:{"class":"className","for":"htmlFor"},attrHandle:{href:function(g){return g.getAttribute("href")}},relative:{"+":function(g,i){var n=typeof i==="string",m=n&&!/\W/.test(i);n=n&&!m;if(m)i=i.toLowerCase();m=0;for(var p=g.length,q;m<p;m++)if(q=g[m]){for(;(q=q.previousSibling)&&q.nodeType!==1;);g[m]=n||q&&q.nodeName.toLowerCase()===
i?q||false:q===i}n&&k.filter(i,g,true)},">":function(g,i){var n,m=typeof i==="string",p=0,q=g.length;if(m&&!/\W/.test(i))for(i=i.toLowerCase();p<q;p++){if(n=g[p]){n=n.parentNode;g[p]=n.nodeName.toLowerCase()===i?n:false}}else{for(;p<q;p++)if(n=g[p])g[p]=m?n.parentNode:n.parentNode===i;m&&k.filter(i,g,true)}},"":function(g,i,n){var m,p=e++,q=b;if(typeof i==="string"&&!/\W/.test(i)){m=i=i.toLowerCase();q=a}q("parentNode",i,p,g,m,n)},"~":function(g,i,n){var m,p=e++,q=b;if(typeof i==="string"&&!/\W/.test(i)){m=
i=i.toLowerCase();q=a}q("previousSibling",i,p,g,m,n)}},find:{ID:function(g,i,n){if(typeof i.getElementById!=="undefined"&&!n)return(g=i.getElementById(g[1]))&&g.parentNode?[g]:[]},NAME:function(g,i){if(typeof i.getElementsByName!=="undefined"){for(var n=[],m=i.getElementsByName(g[1]),p=0,q=m.length;p<q;p++)m[p].getAttribute("name")===g[1]&&n.push(m[p]);return n.length===0?null:n}},TAG:function(g,i){return i.getElementsByTagName(g[1])}},preFilter:{CLASS:function(g,i,n,m,p,q){g=" "+g[1].replace(/\\/g,
"")+" ";if(q)return g;q=0;for(var u;(u=i[q])!=null;q++)if(u)if(p^(u.className&&(" "+u.className+" ").replace(/[\t\n]/g," ").indexOf(g)>=0))n||m.push(u);else if(n)i[q]=false;return false},ID:function(g){return g[1].replace(/\\/g,"")},TAG:function(g){return g[1].toLowerCase()},CHILD:function(g){if(g[1]==="nth"){var i=/(-?)(\d*)n((?:\+|-)?\d*)/.exec(g[2]==="even"&&"2n"||g[2]==="odd"&&"2n+1"||!/\D/.test(g[2])&&"0n+"+g[2]||g[2]);g[2]=i[1]+(i[2]||1)-0;g[3]=i[3]-0}g[0]=e++;return g},ATTR:function(g,i,n,
m,p,q){i=g[1].replace(/\\/g,"");if(!q&&o.attrMap[i])g[1]=o.attrMap[i];if(g[2]==="~=")g[4]=" "+g[4]+" ";return g},PSEUDO:function(g,i,n,m,p){if(g[1]==="not")if((d.exec(g[3])||"").length>1||/^\w/.test(g[3]))g[3]=k(g[3],null,null,i);else{g=k.filter(g[3],i,n,true^p);n||m.push.apply(m,g);return false}else if(o.match.POS.test(g[0])||o.match.CHILD.test(g[0]))return true;return g},POS:function(g){g.unshift(true);return g}},filters:{enabled:function(g){return g.disabled===false&&g.type!=="hidden"},disabled:function(g){return g.disabled===
true},checked:function(g){return g.checked===true},selected:function(g){return g.selected===true},parent:function(g){return!!g.firstChild},empty:function(g){return!g.firstChild},has:function(g,i,n){return!!k(n[3],g).length},header:function(g){return/h\d/i.test(g.nodeName)},text:function(g){return"text"===g.type},radio:function(g){return"radio"===g.type},checkbox:function(g){return"checkbox"===g.type},file:function(g){return"file"===g.type},password:function(g){return"password"===g.type},submit:function(g){return"submit"===
g.type},image:function(g){return"image"===g.type},reset:function(g){return"reset"===g.type},button:function(g){return"button"===g.type||g.nodeName.toLowerCase()==="button"},input:function(g){return/input|select|textarea|button/i.test(g.nodeName)}},setFilters:{first:function(g,i){return i===0},last:function(g,i,n,m){return i===m.length-1},even:function(g,i){return i%2===0},odd:function(g,i){return i%2===1},lt:function(g,i,n){return i<n[3]-0},gt:function(g,i,n){return i>n[3]-0},nth:function(g,i,n){return n[3]-
0===i},eq:function(g,i,n){return n[3]-0===i}},filter:{PSEUDO:function(g,i,n,m){var p=i[1],q=o.filters[p];if(q)return q(g,n,i,m);else if(p==="contains")return(g.textContent||g.innerText||k.getText([g])||"").indexOf(i[3])>=0;else if(p==="not"){i=i[3];n=0;for(m=i.length;n<m;n++)if(i[n]===g)return false;return true}else k.error("Syntax error, unrecognized expression: "+p)},CHILD:function(g,i){var n=i[1],m=g;switch(n){case "only":case "first":for(;m=m.previousSibling;)if(m.nodeType===1)return false;if(n===
"first")return true;m=g;case "last":for(;m=m.nextSibling;)if(m.nodeType===1)return false;return true;case "nth":n=i[2];var p=i[3];if(n===1&&p===0)return true;var q=i[0],u=g.parentNode;if(u&&(u.sizcache!==q||!g.nodeIndex)){var y=0;for(m=u.firstChild;m;m=m.nextSibling)if(m.nodeType===1)m.nodeIndex=++y;u.sizcache=q}m=g.nodeIndex-p;return n===0?m===0:m%n===0&&m/n>=0}},ID:function(g,i){return g.nodeType===1&&g.getAttribute("id")===i},TAG:function(g,i){return i==="*"&&g.nodeType===1||g.nodeName.toLowerCase()===
i},CLASS:function(g,i){return(" "+(g.className||g.getAttribute("class"))+" ").indexOf(i)>-1},ATTR:function(g,i){var n=i[1];n=o.attrHandle[n]?o.attrHandle[n](g):g[n]!=null?g[n]:g.getAttribute(n);var m=n+"",p=i[2],q=i[4];return n==null?p==="!=":p==="="?m===q:p==="*="?m.indexOf(q)>=0:p==="~="?(" "+m+" ").indexOf(q)>=0:!q?m&&n!==false:p==="!="?m!==q:p==="^="?m.indexOf(q)===0:p==="$="?m.substr(m.length-q.length)===q:p==="|="?m===q||m.substr(0,q.length+1)===q+"-":false},POS:function(g,i,n,m){var p=o.setFilters[i[2]];
if(p)return p(g,n,i,m)}}},x=o.match.POS,r=function(g,i){return"\\"+(i-0+1)},A;for(A in o.match){o.match[A]=RegExp(o.match[A].source+/(?![^\[]*\])(?![^\(]*\))/.source);o.leftMatch[A]=RegExp(/(^(?:.|\r|\n)*?)/.source+o.match[A].source.replace(/\\(\d+)/g,r))}var C=function(g,i){g=Array.prototype.slice.call(g,0);if(i){i.push.apply(i,g);return i}return g};try{Array.prototype.slice.call(t.documentElement.childNodes,0)}catch(J){C=function(g,i){var n=0,m=i||[];if(f.call(g)==="[object Array]")Array.prototype.push.apply(m,
g);else if(typeof g.length==="number")for(var p=g.length;n<p;n++)m.push(g[n]);else for(;g[n];n++)m.push(g[n]);return m}}var w,I;if(t.documentElement.compareDocumentPosition)w=function(g,i){if(g===i){h=true;return 0}if(!g.compareDocumentPosition||!i.compareDocumentPosition)return g.compareDocumentPosition?-1:1;return g.compareDocumentPosition(i)&4?-1:1};else{w=function(g,i){var n,m,p=[],q=[];n=g.parentNode;m=i.parentNode;var u=n;if(g===i){h=true;return 0}else if(n===m)return I(g,i);else if(n){if(!m)return 1}else return-1;
for(;u;){p.unshift(u);u=u.parentNode}for(u=m;u;){q.unshift(u);u=u.parentNode}n=p.length;m=q.length;for(u=0;u<n&&u<m;u++)if(p[u]!==q[u])return I(p[u],q[u]);return u===n?I(g,q[u],-1):I(p[u],i,1)};I=function(g,i,n){if(g===i)return n;for(g=g.nextSibling;g;){if(g===i)return-1;g=g.nextSibling}return 1}}k.getText=function(g){for(var i="",n,m=0;g[m];m++){n=g[m];if(n.nodeType===3||n.nodeType===4)i+=n.nodeValue;else if(n.nodeType!==8)i+=k.getText(n.childNodes)}return i};(function(){var g=t.createElement("div"),
i="script"+(new Date).getTime(),n=t.documentElement;g.innerHTML="<a name='"+i+"'/>";n.insertBefore(g,n.firstChild);if(t.getElementById(i)){o.find.ID=function(m,p,q){if(typeof p.getElementById!=="undefined"&&!q)return(p=p.getElementById(m[1]))?p.id===m[1]||typeof p.getAttributeNode!=="undefined"&&p.getAttributeNode("id").nodeValue===m[1]?[p]:B:[]};o.filter.ID=function(m,p){var q=typeof m.getAttributeNode!=="undefined"&&m.getAttributeNode("id");return m.nodeType===1&&q&&q.nodeValue===p}}n.removeChild(g);
n=g=null})();(function(){var g=t.createElement("div");g.appendChild(t.createComment(""));if(g.getElementsByTagName("*").length>0)o.find.TAG=function(i,n){var m=n.getElementsByTagName(i[1]);if(i[1]==="*"){for(var p=[],q=0;m[q];q++)m[q].nodeType===1&&p.push(m[q]);m=p}return m};g.innerHTML="<a href='#'></a>";if(g.firstChild&&typeof g.firstChild.getAttribute!=="undefined"&&g.firstChild.getAttribute("href")!=="#")o.attrHandle.href=function(i){return i.getAttribute("href",2)};g=null})();t.querySelectorAll&&
function(){var g=k,i=t.createElement("div");i.innerHTML="<p class='TEST'></p>";if(!(i.querySelectorAll&&i.querySelectorAll(".TEST").length===0)){k=function(m,p,q,u){p=p||t;m=m.replace(/\=\s*([^'"\]]*)\s*\]/g,"='$1']");if(!u&&!k.isXML(p))if(p.nodeType===9)try{return C(p.querySelectorAll(m),q)}catch(y){}else if(p.nodeType===1&&p.nodeName.toLowerCase()!=="object"){var F=p.getAttribute("id"),M=F||"__sizzle__";F||p.setAttribute("id",M);try{return C(p.querySelectorAll("#"+M+" "+m),q)}catch(N){}finally{F||
p.removeAttribute("id")}}return g(m,p,q,u)};for(var n in g)k[n]=g[n];i=null}}();(function(){var g=t.documentElement,i=g.matchesSelector||g.mozMatchesSelector||g.webkitMatchesSelector||g.msMatchesSelector,n=false;try{i.call(t.documentElement,"[test!='']:sizzle")}catch(m){n=true}if(i)k.matchesSelector=function(p,q){q=q.replace(/\=\s*([^'"\]]*)\s*\]/g,"='$1']");if(!k.isXML(p))try{if(n||!o.match.PSEUDO.test(q)&&!/!=/.test(q))return i.call(p,q)}catch(u){}return k(q,null,null,[p]).length>0}})();(function(){var g=
t.createElement("div");g.innerHTML="<div class='test e'></div><div class='test'></div>";if(!(!g.getElementsByClassName||g.getElementsByClassName("e").length===0)){g.lastChild.className="e";if(g.getElementsByClassName("e").length!==1){o.order.splice(1,0,"CLASS");o.find.CLASS=function(i,n,m){if(typeof n.getElementsByClassName!=="undefined"&&!m)return n.getElementsByClassName(i[1])};g=null}}})();k.contains=t.documentElement.contains?function(g,i){return g!==i&&(g.contains?g.contains(i):true)}:t.documentElement.compareDocumentPosition?
function(g,i){return!!(g.compareDocumentPosition(i)&16)}:function(){return false};k.isXML=function(g){return(g=(g?g.ownerDocument||g:0).documentElement)?g.nodeName!=="HTML":false};var L=function(g,i){for(var n,m=[],p="",q=i.nodeType?[i]:i;n=o.match.PSEUDO.exec(g);){p+=n[0];g=g.replace(o.match.PSEUDO,"")}g=o.relative[g]?g+"*":g;n=0;for(var u=q.length;n<u;n++)k(g,q[n],m);return k.filter(p,m)};c.find=k;c.expr=k.selectors;c.expr[":"]=c.expr.filters;c.unique=k.uniqueSort;c.text=k.getText;c.isXMLDoc=k.isXML;
c.contains=k.contains})();var Za=/Until$/,$a=/^(?:parents|prevUntil|prevAll)/,ab=/,/,Na=/^.[^:#\[\.,]*$/,bb=Array.prototype.slice,cb=c.expr.match.POS;c.fn.extend({find:function(a){for(var b=this.pushStack("","find",a),d=0,e=0,f=this.length;e<f;e++){d=b.length;c.find(a,this[e],b);if(e>0)for(var h=d;h<b.length;h++)for(var l=0;l<d;l++)if(b[l]===b[h]){b.splice(h--,1);break}}return b},has:function(a){var b=c(a);return this.filter(function(){for(var d=0,e=b.length;d<e;d++)if(c.contains(this,b[d]))return true})},
not:function(a){return this.pushStack(ma(this,a,false),"not",a)},filter:function(a){return this.pushStack(ma(this,a,true),"filter",a)},is:function(a){return!!a&&c.filter(a,this).length>0},closest:function(a,b){var d=[],e,f,h=this[0];if(c.isArray(a)){var l,k={},o=1;if(h&&a.length){e=0;for(f=a.length;e<f;e++){l=a[e];k[l]||(k[l]=c.expr.match.POS.test(l)?c(l,b||this.context):l)}for(;h&&h.ownerDocument&&h!==b;){for(l in k){e=k[l];if(e.jquery?e.index(h)>-1:c(h).is(e))d.push({selector:l,elem:h,level:o})}h=
h.parentNode;o++}}return d}l=cb.test(a)?c(a,b||this.context):null;e=0;for(f=this.length;e<f;e++)for(h=this[e];h;)if(l?l.index(h)>-1:c.find.matchesSelector(h,a)){d.push(h);break}else{h=h.parentNode;if(!h||!h.ownerDocument||h===b)break}d=d.length>1?c.unique(d):d;return this.pushStack(d,"closest",a)},index:function(a){if(!a||typeof a==="string")return c.inArray(this[0],a?c(a):this.parent().children());return c.inArray(a.jquery?a[0]:a,this)},add:function(a,b){var d=typeof a==="string"?c(a,b||this.context):
c.makeArray(a),e=c.merge(this.get(),d);return this.pushStack(!d[0]||!d[0].parentNode||d[0].parentNode.nodeType===11||!e[0]||!e[0].parentNode||e[0].parentNode.nodeType===11?e:c.unique(e))},andSelf:function(){return this.add(this.prevObject)}});c.each({parent:function(a){return(a=a.parentNode)&&a.nodeType!==11?a:null},parents:function(a){return c.dir(a,"parentNode")},parentsUntil:function(a,b,d){return c.dir(a,"parentNode",d)},next:function(a){return c.nth(a,2,"nextSibling")},prev:function(a){return c.nth(a,
2,"previousSibling")},nextAll:function(a){return c.dir(a,"nextSibling")},prevAll:function(a){return c.dir(a,"previousSibling")},nextUntil:function(a,b,d){return c.dir(a,"nextSibling",d)},prevUntil:function(a,b,d){return c.dir(a,"previousSibling",d)},siblings:function(a){return c.sibling(a.parentNode.firstChild,a)},children:function(a){return c.sibling(a.firstChild)},contents:function(a){return c.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:c.makeArray(a.childNodes)}},function(a,
b){c.fn[a]=function(d,e){var f=c.map(this,b,d);Za.test(a)||(e=d);if(e&&typeof e==="string")f=c.filter(e,f);f=this.length>1?c.unique(f):f;if((this.length>1||ab.test(e))&&$a.test(a))f=f.reverse();return this.pushStack(f,a,bb.call(arguments).join(","))}});c.extend({filter:function(a,b,d){if(d)a=":not("+a+")";return b.length===1?c.find.matchesSelector(b[0],a)?[b[0]]:[]:c.find.matches(a,b)},dir:function(a,b,d){var e=[];for(a=a[b];a&&a.nodeType!==9&&(d===B||a.nodeType!==1||!c(a).is(d));){a.nodeType===1&&
e.push(a);a=a[b]}return e},nth:function(a,b,d){b=b||1;for(var e=0;a;a=a[d])if(a.nodeType===1&&++e===b)break;return a},sibling:function(a,b){for(var d=[];a;a=a.nextSibling)a.nodeType===1&&a!==b&&d.push(a);return d}});var za=/ jQuery\d+="(?:\d+|null)"/g,$=/^\s+/,Aa=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,Ba=/<([\w:]+)/,db=/<tbody/i,eb=/<|&#?\w+;/,Ca=/<(?:script|object|embed|option|style)/i,Da=/checked\s*(?:[^=]|=\s*.checked.)/i,fb=/\=([^="'>\s]+\/)>/g,P={option:[1,
"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]};P.optgroup=P.option;P.tbody=P.tfoot=P.colgroup=P.caption=P.thead;P.th=P.td;if(!c.support.htmlSerialize)P._default=[1,"div<div>","</div>"];c.fn.extend({text:function(a){if(c.isFunction(a))return this.each(function(b){var d=
c(this);d.text(a.call(this,b,d.text()))});if(typeof a!=="object"&&a!==B)return this.empty().append((this[0]&&this[0].ownerDocument||t).createTextNode(a));return c.text(this)},wrapAll:function(a){if(c.isFunction(a))return this.each(function(d){c(this).wrapAll(a.call(this,d))});if(this[0]){var b=c(a,this[0].ownerDocument).eq(0).clone(true);this[0].parentNode&&b.insertBefore(this[0]);b.map(function(){for(var d=this;d.firstChild&&d.firstChild.nodeType===1;)d=d.firstChild;return d}).append(this)}return this},
wrapInner:function(a){if(c.isFunction(a))return this.each(function(b){c(this).wrapInner(a.call(this,b))});return this.each(function(){var b=c(this),d=b.contents();d.length?d.wrapAll(a):b.append(a)})},wrap:function(a){return this.each(function(){c(this).wrapAll(a)})},unwrap:function(){return this.parent().each(function(){c.nodeName(this,"body")||c(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,true,function(a){this.nodeType===1&&this.appendChild(a)})},
prepend:function(){return this.domManip(arguments,true,function(a){this.nodeType===1&&this.insertBefore(a,this.firstChild)})},before:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,false,function(b){this.parentNode.insertBefore(b,this)});else if(arguments.length){var a=c(arguments[0]);a.push.apply(a,this.toArray());return this.pushStack(a,"before",arguments)}},after:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,false,function(b){this.parentNode.insertBefore(b,
this.nextSibling)});else if(arguments.length){var a=this.pushStack(this,"after",arguments);a.push.apply(a,c(arguments[0]).toArray());return a}},remove:function(a,b){for(var d=0,e;(e=this[d])!=null;d++)if(!a||c.filter(a,[e]).length){if(!b&&e.nodeType===1){c.cleanData(e.getElementsByTagName("*"));c.cleanData([e])}e.parentNode&&e.parentNode.removeChild(e)}return this},empty:function(){for(var a=0,b;(b=this[a])!=null;a++)for(b.nodeType===1&&c.cleanData(b.getElementsByTagName("*"));b.firstChild;)b.removeChild(b.firstChild);
return this},clone:function(a){var b=this.map(function(){if(!c.support.noCloneEvent&&!c.isXMLDoc(this)){var d=this.outerHTML,e=this.ownerDocument;if(!d){d=e.createElement("div");d.appendChild(this.cloneNode(true));d=d.innerHTML}return c.clean([d.replace(za,"").replace(fb,'="$1">').replace($,"")],e)[0]}else return this.cloneNode(true)});if(a===true){na(this,b);na(this.find("*"),b.find("*"))}return b},html:function(a){if(a===B)return this[0]&&this[0].nodeType===1?this[0].innerHTML.replace(za,""):null;
else if(typeof a==="string"&&!Ca.test(a)&&(c.support.leadingWhitespace||!$.test(a))&&!P[(Ba.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(Aa,"<$1></$2>");try{for(var b=0,d=this.length;b<d;b++)if(this[b].nodeType===1){c.cleanData(this[b].getElementsByTagName("*"));this[b].innerHTML=a}}catch(e){this.empty().append(a)}}else c.isFunction(a)?this.each(function(f){var h=c(this);h.html(a.call(this,f,h.html()))}):this.empty().append(a);return this},replaceWith:function(a){if(this[0]&&this[0].parentNode){if(c.isFunction(a))return this.each(function(b){var d=
c(this),e=d.html();d.replaceWith(a.call(this,b,e))});if(typeof a!=="string")a=c(a).detach();return this.each(function(){var b=this.nextSibling,d=this.parentNode;c(this).remove();b?c(b).before(a):c(d).append(a)})}else return this.pushStack(c(c.isFunction(a)?a():a),"replaceWith",a)},detach:function(a){return this.remove(a,true)},domManip:function(a,b,d){var e,f,h,l=a[0],k=[];if(!c.support.checkClone&&arguments.length===3&&typeof l==="string"&&Da.test(l))return this.each(function(){c(this).domManip(a,
b,d,true)});if(c.isFunction(l))return this.each(function(x){var r=c(this);a[0]=l.call(this,x,b?r.html():B);r.domManip(a,b,d)});if(this[0]){e=l&&l.parentNode;e=c.support.parentNode&&e&&e.nodeType===11&&e.childNodes.length===this.length?{fragment:e}:c.buildFragment(a,this,k);h=e.fragment;if(f=h.childNodes.length===1?h=h.firstChild:h.firstChild){b=b&&c.nodeName(f,"tr");f=0;for(var o=this.length;f<o;f++)d.call(b?c.nodeName(this[f],"table")?this[f].getElementsByTagName("tbody")[0]||this[f].appendChild(this[f].ownerDocument.createElement("tbody")):
this[f]:this[f],f>0||e.cacheable||this.length>1?h.cloneNode(true):h)}k.length&&c.each(k,Oa)}return this}});c.buildFragment=function(a,b,d){var e,f,h;b=b&&b[0]?b[0].ownerDocument||b[0]:t;if(a.length===1&&typeof a[0]==="string"&&a[0].length<512&&b===t&&!Ca.test(a[0])&&(c.support.checkClone||!Da.test(a[0]))){f=true;if(h=c.fragments[a[0]])if(h!==1)e=h}if(!e){e=b.createDocumentFragment();c.clean(a,b,e,d)}if(f)c.fragments[a[0]]=h?e:1;return{fragment:e,cacheable:f}};c.fragments={};c.each({appendTo:"append",
prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){c.fn[a]=function(d){var e=[];d=c(d);var f=this.length===1&&this[0].parentNode;if(f&&f.nodeType===11&&f.childNodes.length===1&&d.length===1){d[b](this[0]);return this}else{f=0;for(var h=d.length;f<h;f++){var l=(f>0?this.clone(true):this).get();c(d[f])[b](l);e=e.concat(l)}return this.pushStack(e,a,d.selector)}}});c.extend({clean:function(a,b,d,e){b=b||t;if(typeof b.createElement==="undefined")b=b.ownerDocument||
b[0]&&b[0].ownerDocument||t;for(var f=[],h=0,l;(l=a[h])!=null;h++){if(typeof l==="number")l+="";if(l){if(typeof l==="string"&&!eb.test(l))l=b.createTextNode(l);else if(typeof l==="string"){l=l.replace(Aa,"<$1></$2>");var k=(Ba.exec(l)||["",""])[1].toLowerCase(),o=P[k]||P._default,x=o[0],r=b.createElement("div");for(r.innerHTML=o[1]+l+o[2];x--;)r=r.lastChild;if(!c.support.tbody){x=db.test(l);k=k==="table"&&!x?r.firstChild&&r.firstChild.childNodes:o[1]==="<table>"&&!x?r.childNodes:[];for(o=k.length-
1;o>=0;--o)c.nodeName(k[o],"tbody")&&!k[o].childNodes.length&&k[o].parentNode.removeChild(k[o])}!c.support.leadingWhitespace&&$.test(l)&&r.insertBefore(b.createTextNode($.exec(l)[0]),r.firstChild);l=r.childNodes}if(l.nodeType)f.push(l);else f=c.merge(f,l)}}if(d)for(h=0;f[h];h++)if(e&&c.nodeName(f[h],"script")&&(!f[h].type||f[h].type.toLowerCase()==="text/javascript"))e.push(f[h].parentNode?f[h].parentNode.removeChild(f[h]):f[h]);else{f[h].nodeType===1&&f.splice.apply(f,[h+1,0].concat(c.makeArray(f[h].getElementsByTagName("script"))));
d.appendChild(f[h])}return f},cleanData:function(a){for(var b,d,e=c.cache,f=c.event.special,h=c.support.deleteExpando,l=0,k;(k=a[l])!=null;l++)if(!(k.nodeName&&c.noData[k.nodeName.toLowerCase()]))if(d=k[c.expando]){if((b=e[d])&&b.events)for(var o in b.events)f[o]?c.event.remove(k,o):c.removeEvent(k,o,b.handle);if(h)delete k[c.expando];else k.removeAttribute&&k.removeAttribute(c.expando);delete e[d]}}});var Ea=/alpha\([^)]*\)/i,gb=/opacity=([^)]*)/,hb=/-([a-z])/ig,ib=/([A-Z])/g,Fa=/^-?\d+(?:px)?$/i,
jb=/^-?\d/,kb={position:"absolute",visibility:"hidden",display:"block"},Pa=["Left","Right"],Qa=["Top","Bottom"],W,Ga,aa,lb=function(a,b){return b.toUpperCase()};c.fn.css=function(a,b){if(arguments.length===2&&b===B)return this;return c.access(this,a,b,true,function(d,e,f){return f!==B?c.style(d,e,f):c.css(d,e)})};c.extend({cssHooks:{opacity:{get:function(a,b){if(b){var d=W(a,"opacity","opacity");return d===""?"1":d}else return a.style.opacity}}},cssNumber:{zIndex:true,fontWeight:true,opacity:true,
zoom:true,lineHeight:true},cssProps:{"float":c.support.cssFloat?"cssFloat":"styleFloat"},style:function(a,b,d,e){if(!(!a||a.nodeType===3||a.nodeType===8||!a.style)){var f,h=c.camelCase(b),l=a.style,k=c.cssHooks[h];b=c.cssProps[h]||h;if(d!==B){if(!(typeof d==="number"&&isNaN(d)||d==null)){if(typeof d==="number"&&!c.cssNumber[h])d+="px";if(!k||!("set"in k)||(d=k.set(a,d))!==B)try{l[b]=d}catch(o){}}}else{if(k&&"get"in k&&(f=k.get(a,false,e))!==B)return f;return l[b]}}},css:function(a,b,d){var e,f=c.camelCase(b),
h=c.cssHooks[f];b=c.cssProps[f]||f;if(h&&"get"in h&&(e=h.get(a,true,d))!==B)return e;else if(W)return W(a,b,f)},swap:function(a,b,d){var e={},f;for(f in b){e[f]=a.style[f];a.style[f]=b[f]}d.call(a);for(f in b)a.style[f]=e[f]},camelCase:function(a){return a.replace(hb,lb)}});c.curCSS=c.css;c.each(["height","width"],function(a,b){c.cssHooks[b]={get:function(d,e,f){var h;if(e){if(d.offsetWidth!==0)h=oa(d,b,f);else c.swap(d,kb,function(){h=oa(d,b,f)});if(h<=0){h=W(d,b,b);if(h==="0px"&&aa)h=aa(d,b,b);
if(h!=null)return h===""||h==="auto"?"0px":h}if(h<0||h==null){h=d.style[b];return h===""||h==="auto"?"0px":h}return typeof h==="string"?h:h+"px"}},set:function(d,e){if(Fa.test(e)){e=parseFloat(e);if(e>=0)return e+"px"}else return e}}});if(!c.support.opacity)c.cssHooks.opacity={get:function(a,b){return gb.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?parseFloat(RegExp.$1)/100+"":b?"1":""},set:function(a,b){var d=a.style;d.zoom=1;var e=c.isNaN(b)?"":"alpha(opacity="+b*100+")",f=
d.filter||"";d.filter=Ea.test(f)?f.replace(Ea,e):d.filter+" "+e}};if(t.defaultView&&t.defaultView.getComputedStyle)Ga=function(a,b,d){var e;d=d.replace(ib,"-$1").toLowerCase();if(!(b=a.ownerDocument.defaultView))return B;if(b=b.getComputedStyle(a,null)){e=b.getPropertyValue(d);if(e===""&&!c.contains(a.ownerDocument.documentElement,a))e=c.style(a,d)}return e};if(t.documentElement.currentStyle)aa=function(a,b){var d,e,f=a.currentStyle&&a.currentStyle[b],h=a.style;if(!Fa.test(f)&&jb.test(f)){d=h.left;
e=a.runtimeStyle.left;a.runtimeStyle.left=a.currentStyle.left;h.left=b==="fontSize"?"1em":f||0;f=h.pixelLeft+"px";h.left=d;a.runtimeStyle.left=e}return f===""?"auto":f};W=Ga||aa;if(c.expr&&c.expr.filters){c.expr.filters.hidden=function(a){var b=a.offsetHeight;return a.offsetWidth===0&&b===0||!c.support.reliableHiddenOffsets&&(a.style.display||c.css(a,"display"))==="none"};c.expr.filters.visible=function(a){return!c.expr.filters.hidden(a)}}var mb=c.now(),nb=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
ob=/^(?:select|textarea)/i,pb=/^(?:color|date|datetime|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,qb=/^(?:GET|HEAD)$/,Ra=/\[\]$/,T=/\=\?(&|$)/,ja=/\?/,rb=/([?&])_=[^&]*/,sb=/^(\w+:)?\/\/([^\/?#]+)/,tb=/%20/g,ub=/#.*$/,Ha=c.fn.load;c.fn.extend({load:function(a,b,d){if(typeof a!=="string"&&Ha)return Ha.apply(this,arguments);else if(!this.length)return this;var e=a.indexOf(" ");if(e>=0){var f=a.slice(e,a.length);a=a.slice(0,e)}e="GET";if(b)if(c.isFunction(b)){d=b;b=null}else if(typeof b===
"object"){b=c.param(b,c.ajaxSettings.traditional);e="POST"}var h=this;c.ajax({url:a,type:e,dataType:"html",data:b,complete:function(l,k){if(k==="success"||k==="notmodified")h.html(f?c("<div>").append(l.responseText.replace(nb,"")).find(f):l.responseText);d&&h.each(d,[l.responseText,k,l])}});return this},serialize:function(){return c.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?c.makeArray(this.elements):this}).filter(function(){return this.name&&
!this.disabled&&(this.checked||ob.test(this.nodeName)||pb.test(this.type))}).map(function(a,b){var d=c(this).val();return d==null?null:c.isArray(d)?c.map(d,function(e){return{name:b.name,value:e}}):{name:b.name,value:d}}).get()}});c.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),function(a,b){c.fn[b]=function(d){return this.bind(b,d)}});c.extend({get:function(a,b,d,e){if(c.isFunction(b)){e=e||d;d=b;b=null}return c.ajax({type:"GET",url:a,data:b,success:d,dataType:e})},
getScript:function(a,b){return c.get(a,null,b,"script")},getJSON:function(a,b,d){return c.get(a,b,d,"json")},post:function(a,b,d,e){if(c.isFunction(b)){e=e||d;d=b;b={}}return c.ajax({type:"POST",url:a,data:b,success:d,dataType:e})},ajaxSetup:function(a){c.extend(c.ajaxSettings,a)},ajaxSettings:{url:location.href,global:true,type:"GET",contentType:"application/x-www-form-urlencoded",processData:true,async:true,xhr:function(){return new E.XMLHttpRequest},accepts:{xml:"application/xml, text/xml",html:"text/html",
script:"text/javascript, application/javascript",json:"application/json, text/javascript",text:"text/plain",_default:"*/*"}},ajax:function(a){var b=c.extend(true,{},c.ajaxSettings,a),d,e,f,h=b.type.toUpperCase(),l=qb.test(h);b.url=b.url.replace(ub,"");b.context=a&&a.context!=null?a.context:b;if(b.data&&b.processData&&typeof b.data!=="string")b.data=c.param(b.data,b.traditional);if(b.dataType==="jsonp"){if(h==="GET")T.test(b.url)||(b.url+=(ja.test(b.url)?"&":"?")+(b.jsonp||"callback")+"=?");else if(!b.data||
!T.test(b.data))b.data=(b.data?b.data+"&":"")+(b.jsonp||"callback")+"=?";b.dataType="json"}if(b.dataType==="json"&&(b.data&&T.test(b.data)||T.test(b.url))){d=b.jsonpCallback||"jsonp"+mb++;if(b.data)b.data=(b.data+"").replace(T,"="+d+"$1");b.url=b.url.replace(T,"="+d+"$1");b.dataType="script";var k=E[d];E[d]=function(m){if(c.isFunction(k))k(m);else{E[d]=B;try{delete E[d]}catch(p){}}f=m;c.handleSuccess(b,w,e,f);c.handleComplete(b,w,e,f);r&&r.removeChild(A)}}if(b.dataType==="script"&&b.cache===null)b.cache=
false;if(b.cache===false&&l){var o=c.now(),x=b.url.replace(rb,"$1_="+o);b.url=x+(x===b.url?(ja.test(b.url)?"&":"?")+"_="+o:"")}if(b.data&&l)b.url+=(ja.test(b.url)?"&":"?")+b.data;b.global&&c.active++===0&&c.event.trigger("ajaxStart");o=(o=sb.exec(b.url))&&(o[1]&&o[1].toLowerCase()!==location.protocol||o[2].toLowerCase()!==location.host);if(b.dataType==="script"&&h==="GET"&&o){var r=t.getElementsByTagName("head")[0]||t.documentElement,A=t.createElement("script");if(b.scriptCharset)A.charset=b.scriptCharset;
A.src=b.url;if(!d){var C=false;A.onload=A.onreadystatechange=function(){if(!C&&(!this.readyState||this.readyState==="loaded"||this.readyState==="complete")){C=true;c.handleSuccess(b,w,e,f);c.handleComplete(b,w,e,f);A.onload=A.onreadystatechange=null;r&&A.parentNode&&r.removeChild(A)}}}r.insertBefore(A,r.firstChild);return B}var J=false,w=b.xhr();if(w){b.username?w.open(h,b.url,b.async,b.username,b.password):w.open(h,b.url,b.async);try{if(b.data!=null&&!l||a&&a.contentType)w.setRequestHeader("Content-Type",
b.contentType);if(b.ifModified){c.lastModified[b.url]&&w.setRequestHeader("If-Modified-Since",c.lastModified[b.url]);c.etag[b.url]&&w.setRequestHeader("If-None-Match",c.etag[b.url])}o||w.setRequestHeader("X-Requested-With","XMLHttpRequest");w.setRequestHeader("Accept",b.dataType&&b.accepts[b.dataType]?b.accepts[b.dataType]+", */*; q=0.01":b.accepts._default)}catch(I){}if(b.beforeSend&&b.beforeSend.call(b.context,w,b)===false){b.global&&c.active--===1&&c.event.trigger("ajaxStop");w.abort();return false}b.global&&
c.triggerGlobal(b,"ajaxSend",[w,b]);var L=w.onreadystatechange=function(m){if(!w||w.readyState===0||m==="abort"){J||c.handleComplete(b,w,e,f);J=true;if(w)w.onreadystatechange=c.noop}else if(!J&&w&&(w.readyState===4||m==="timeout")){J=true;w.onreadystatechange=c.noop;e=m==="timeout"?"timeout":!c.httpSuccess(w)?"error":b.ifModified&&c.httpNotModified(w,b.url)?"notmodified":"success";var p;if(e==="success")try{f=c.httpData(w,b.dataType,b)}catch(q){e="parsererror";p=q}if(e==="success"||e==="notmodified")d||
c.handleSuccess(b,w,e,f);else c.handleError(b,w,e,p);d||c.handleComplete(b,w,e,f);m==="timeout"&&w.abort();if(b.async)w=null}};try{var g=w.abort;w.abort=function(){w&&Function.prototype.call.call(g,w);L("abort")}}catch(i){}b.async&&b.timeout>0&&setTimeout(function(){w&&!J&&L("timeout")},b.timeout);try{w.send(l||b.data==null?null:b.data)}catch(n){c.handleError(b,w,null,n);c.handleComplete(b,w,e,f)}b.async||L();return w}},param:function(a,b){var d=[],e=function(h,l){l=c.isFunction(l)?l():l;d[d.length]=
encodeURIComponent(h)+"="+encodeURIComponent(l)};if(b===B)b=c.ajaxSettings.traditional;if(c.isArray(a)||a.jquery)c.each(a,function(){e(this.name,this.value)});else for(var f in a)da(f,a[f],b,e);return d.join("&").replace(tb,"+")}});c.extend({active:0,lastModified:{},etag:{},handleError:function(a,b,d,e){a.error&&a.error.call(a.context,b,d,e);a.global&&c.triggerGlobal(a,"ajaxError",[b,a,e])},handleSuccess:function(a,b,d,e){a.success&&a.success.call(a.context,e,d,b);a.global&&c.triggerGlobal(a,"ajaxSuccess",
[b,a])},handleComplete:function(a,b,d){a.complete&&a.complete.call(a.context,b,d);a.global&&c.triggerGlobal(a,"ajaxComplete",[b,a]);a.global&&c.active--===1&&c.event.trigger("ajaxStop")},triggerGlobal:function(a,b,d){(a.context&&a.context.url==null?c(a.context):c.event).trigger(b,d)},httpSuccess:function(a){try{return!a.status&&location.protocol==="file:"||a.status>=200&&a.status<300||a.status===304||a.status===1223}catch(b){}return false},httpNotModified:function(a,b){var d=a.getResponseHeader("Last-Modified"),
e=a.getResponseHeader("Etag");if(d)c.lastModified[b]=d;if(e)c.etag[b]=e;return a.status===304},httpData:function(a,b,d){var e=a.getResponseHeader("content-type")||"",f=b==="xml"||!b&&e.indexOf("xml")>=0;a=f?a.responseXML:a.responseText;f&&a.documentElement.nodeName==="parsererror"&&c.error("parsererror");if(d&&d.dataFilter)a=d.dataFilter(a,b);if(typeof a==="string")if(b==="json"||!b&&e.indexOf("json")>=0)a=c.parseJSON(a);else if(b==="script"||!b&&e.indexOf("javascript")>=0)c.globalEval(a);return a}});
if(E.ActiveXObject)c.ajaxSettings.xhr=function(){if(E.location.protocol!=="file:")try{return new E.XMLHttpRequest}catch(a){}try{return new E.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}};c.support.ajax=!!c.ajaxSettings.xhr();var ea={},vb=/^(?:toggle|show|hide)$/,wb=/^([+\-]=)?([\d+.\-]+)(.*)$/,ba,pa=[["height","marginTop","marginBottom","paddingTop","paddingBottom"],["width","marginLeft","marginRight","paddingLeft","paddingRight"],["opacity"]];c.fn.extend({show:function(a,b,d){if(a||a===0)return this.animate(S("show",
3),a,b,d);else{d=0;for(var e=this.length;d<e;d++){a=this[d];b=a.style.display;if(!c.data(a,"olddisplay")&&b==="none")b=a.style.display="";b===""&&c.css(a,"display")==="none"&&c.data(a,"olddisplay",qa(a.nodeName))}for(d=0;d<e;d++){a=this[d];b=a.style.display;if(b===""||b==="none")a.style.display=c.data(a,"olddisplay")||""}return this}},hide:function(a,b,d){if(a||a===0)return this.animate(S("hide",3),a,b,d);else{a=0;for(b=this.length;a<b;a++){d=c.css(this[a],"display");d!=="none"&&c.data(this[a],"olddisplay",
d)}for(a=0;a<b;a++)this[a].style.display="none";return this}},_toggle:c.fn.toggle,toggle:function(a,b,d){var e=typeof a==="boolean";if(c.isFunction(a)&&c.isFunction(b))this._toggle.apply(this,arguments);else a==null||e?this.each(function(){var f=e?a:c(this).is(":hidden");c(this)[f?"show":"hide"]()}):this.animate(S("toggle",3),a,b,d);return this},fadeTo:function(a,b,d,e){return this.filter(":hidden").css("opacity",0).show().end().animate({opacity:b},a,d,e)},animate:function(a,b,d,e){var f=c.speed(b,
d,e);if(c.isEmptyObject(a))return this.each(f.complete);return this[f.queue===false?"each":"queue"](function(){var h=c.extend({},f),l,k=this.nodeType===1,o=k&&c(this).is(":hidden"),x=this;for(l in a){var r=c.camelCase(l);if(l!==r){a[r]=a[l];delete a[l];l=r}if(a[l]==="hide"&&o||a[l]==="show"&&!o)return h.complete.call(this);if(k&&(l==="height"||l==="width")){h.overflow=[this.style.overflow,this.style.overflowX,this.style.overflowY];if(c.css(this,"display")==="inline"&&c.css(this,"float")==="none")if(c.support.inlineBlockNeedsLayout)if(qa(this.nodeName)===
"inline")this.style.display="inline-block";else{this.style.display="inline";this.style.zoom=1}else this.style.display="inline-block"}if(c.isArray(a[l])){(h.specialEasing=h.specialEasing||{})[l]=a[l][1];a[l]=a[l][0]}}if(h.overflow!=null)this.style.overflow="hidden";h.curAnim=c.extend({},a);c.each(a,function(A,C){var J=new c.fx(x,h,A);if(vb.test(C))J[C==="toggle"?o?"show":"hide":C](a);else{var w=wb.exec(C),I=J.cur()||0;if(w){var L=parseFloat(w[2]),g=w[3]||"px";if(g!=="px"){c.style(x,A,(L||1)+g);I=(L||
1)/J.cur()*I;c.style(x,A,I+g)}if(w[1])L=(w[1]==="-="?-1:1)*L+I;J.custom(I,L,g)}else J.custom(I,C,"")}});return true})},stop:function(a,b){var d=c.timers;a&&this.queue([]);this.each(function(){for(var e=d.length-1;e>=0;e--)if(d[e].elem===this){b&&d[e](true);d.splice(e,1)}});b||this.dequeue();return this}});c.each({slideDown:S("show",1),slideUp:S("hide",1),slideToggle:S("toggle",1),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){c.fn[a]=function(d,e,f){return this.animate(b,
d,e,f)}});c.extend({speed:function(a,b,d){var e=a&&typeof a==="object"?c.extend({},a):{complete:d||!d&&b||c.isFunction(a)&&a,duration:a,easing:d&&b||b&&!c.isFunction(b)&&b};e.duration=c.fx.off?0:typeof e.duration==="number"?e.duration:e.duration in c.fx.speeds?c.fx.speeds[e.duration]:c.fx.speeds._default;e.old=e.complete;e.complete=function(){e.queue!==false&&c(this).dequeue();c.isFunction(e.old)&&e.old.call(this)};return e},easing:{linear:function(a,b,d,e){return d+e*a},swing:function(a,b,d,e){return(-Math.cos(a*
Math.PI)/2+0.5)*e+d}},timers:[],fx:function(a,b,d){this.options=b;this.elem=a;this.prop=d;if(!b.orig)b.orig={}}});c.fx.prototype={update:function(){this.options.step&&this.options.step.call(this.elem,this.now,this);(c.fx.step[this.prop]||c.fx.step._default)(this)},cur:function(){if(this.elem[this.prop]!=null&&(!this.elem.style||this.elem.style[this.prop]==null))return this.elem[this.prop];var a=parseFloat(c.css(this.elem,this.prop));return a&&a>-1E4?a:0},custom:function(a,b,d){function e(l){return f.step(l)}
var f=this,h=c.fx;this.startTime=c.now();this.start=a;this.end=b;this.unit=d||this.unit||"px";this.now=this.start;this.pos=this.state=0;e.elem=this.elem;if(e()&&c.timers.push(e)&&!ba)ba=setInterval(h.tick,h.interval)},show:function(){this.options.orig[this.prop]=c.style(this.elem,this.prop);this.options.show=true;this.custom(this.prop==="width"||this.prop==="height"?1:0,this.cur());c(this.elem).show()},hide:function(){this.options.orig[this.prop]=c.style(this.elem,this.prop);this.options.hide=true;
this.custom(this.cur(),0)},step:function(a){var b=c.now(),d=true;if(a||b>=this.options.duration+this.startTime){this.now=this.end;this.pos=this.state=1;this.update();this.options.curAnim[this.prop]=true;for(var e in this.options.curAnim)if(this.options.curAnim[e]!==true)d=false;if(d){if(this.options.overflow!=null&&!c.support.shrinkWrapBlocks){var f=this.elem,h=this.options;c.each(["","X","Y"],function(k,o){f.style["overflow"+o]=h.overflow[k]})}this.options.hide&&c(this.elem).hide();if(this.options.hide||
this.options.show)for(var l in this.options.curAnim)c.style(this.elem,l,this.options.orig[l]);this.options.complete.call(this.elem)}return false}else{a=b-this.startTime;this.state=a/this.options.duration;b=this.options.easing||(c.easing.swing?"swing":"linear");this.pos=c.easing[this.options.specialEasing&&this.options.specialEasing[this.prop]||b](this.state,a,0,1,this.options.duration);this.now=this.start+(this.end-this.start)*this.pos;this.update()}return true}};c.extend(c.fx,{tick:function(){for(var a=
c.timers,b=0;b<a.length;b++)a[b]()||a.splice(b--,1);a.length||c.fx.stop()},interval:13,stop:function(){clearInterval(ba);ba=null},speeds:{slow:600,fast:200,_default:400},step:{opacity:function(a){c.style(a.elem,"opacity",a.now)},_default:function(a){if(a.elem.style&&a.elem.style[a.prop]!=null)a.elem.style[a.prop]=(a.prop==="width"||a.prop==="height"?Math.max(0,a.now):a.now)+a.unit;else a.elem[a.prop]=a.now}}});if(c.expr&&c.expr.filters)c.expr.filters.animated=function(a){return c.grep(c.timers,function(b){return a===
b.elem}).length};var xb=/^t(?:able|d|h)$/i,Ia=/^(?:body|html)$/i;c.fn.offset="getBoundingClientRect"in t.documentElement?function(a){var b=this[0],d;if(a)return this.each(function(l){c.offset.setOffset(this,a,l)});if(!b||!b.ownerDocument)return null;if(b===b.ownerDocument.body)return c.offset.bodyOffset(b);try{d=b.getBoundingClientRect()}catch(e){}var f=b.ownerDocument,h=f.documentElement;if(!d||!c.contains(h,b))return d||{top:0,left:0};b=f.body;f=fa(f);return{top:d.top+(f.pageYOffset||c.support.boxModel&&
h.scrollTop||b.scrollTop)-(h.clientTop||b.clientTop||0),left:d.left+(f.pageXOffset||c.support.boxModel&&h.scrollLeft||b.scrollLeft)-(h.clientLeft||b.clientLeft||0)}}:function(a){var b=this[0];if(a)return this.each(function(x){c.offset.setOffset(this,a,x)});if(!b||!b.ownerDocument)return null;if(b===b.ownerDocument.body)return c.offset.bodyOffset(b);c.offset.initialize();var d,e=b.offsetParent,f=b.ownerDocument,h=f.documentElement,l=f.body;d=(f=f.defaultView)?f.getComputedStyle(b,null):b.currentStyle;
for(var k=b.offsetTop,o=b.offsetLeft;(b=b.parentNode)&&b!==l&&b!==h;){if(c.offset.supportsFixedPosition&&d.position==="fixed")break;d=f?f.getComputedStyle(b,null):b.currentStyle;k-=b.scrollTop;o-=b.scrollLeft;if(b===e){k+=b.offsetTop;o+=b.offsetLeft;if(c.offset.doesNotAddBorder&&!(c.offset.doesAddBorderForTableAndCells&&xb.test(b.nodeName))){k+=parseFloat(d.borderTopWidth)||0;o+=parseFloat(d.borderLeftWidth)||0}e=b.offsetParent}if(c.offset.subtractsBorderForOverflowNotVisible&&d.overflow!=="visible"){k+=
parseFloat(d.borderTopWidth)||0;o+=parseFloat(d.borderLeftWidth)||0}d=d}if(d.position==="relative"||d.position==="static"){k+=l.offsetTop;o+=l.offsetLeft}if(c.offset.supportsFixedPosition&&d.position==="fixed"){k+=Math.max(h.scrollTop,l.scrollTop);o+=Math.max(h.scrollLeft,l.scrollLeft)}return{top:k,left:o}};c.offset={initialize:function(){var a=t.body,b=t.createElement("div"),d,e,f,h=parseFloat(c.css(a,"marginTop"))||0;c.extend(b.style,{position:"absolute",top:0,left:0,margin:0,border:0,width:"1px",
height:"1px",visibility:"hidden"});b.innerHTML="<div style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;'><div></div></div><table style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;' cellpadding='0' cellspacing='0'><tr><td></td></tr></table>";a.insertBefore(b,a.firstChild);d=b.firstChild;e=d.firstChild;f=d.nextSibling.firstChild.firstChild;this.doesNotAddBorder=e.offsetTop!==5;this.doesAddBorderForTableAndCells=
f.offsetTop===5;e.style.position="fixed";e.style.top="20px";this.supportsFixedPosition=e.offsetTop===20||e.offsetTop===15;e.style.position=e.style.top="";d.style.overflow="hidden";d.style.position="relative";this.subtractsBorderForOverflowNotVisible=e.offsetTop===-5;this.doesNotIncludeMarginInBodyOffset=a.offsetTop!==h;a.removeChild(b);c.offset.initialize=c.noop},bodyOffset:function(a){var b=a.offsetTop,d=a.offsetLeft;c.offset.initialize();if(c.offset.doesNotIncludeMarginInBodyOffset){b+=parseFloat(c.css(a,
"marginTop"))||0;d+=parseFloat(c.css(a,"marginLeft"))||0}return{top:b,left:d}},setOffset:function(a,b,d){var e=c.css(a,"position");if(e==="static")a.style.position="relative";var f=c(a),h=f.offset(),l=c.css(a,"top"),k=c.css(a,"left"),o=e==="absolute"&&c.inArray("auto",[l,k])>-1;e={};var x={};if(o)x=f.position();l=o?x.top:parseInt(l,10)||0;k=o?x.left:parseInt(k,10)||0;if(c.isFunction(b))b=b.call(a,d,h);if(b.top!=null)e.top=b.top-h.top+l;if(b.left!=null)e.left=b.left-h.left+k;"using"in b?b.using.call(a,
e):f.css(e)}};c.fn.extend({position:function(){if(!this[0])return null;var a=this[0],b=this.offsetParent(),d=this.offset(),e=Ia.test(b[0].nodeName)?{top:0,left:0}:b.offset();d.top-=parseFloat(c.css(a,"marginTop"))||0;d.left-=parseFloat(c.css(a,"marginLeft"))||0;e.top+=parseFloat(c.css(b[0],"borderTopWidth"))||0;e.left+=parseFloat(c.css(b[0],"borderLeftWidth"))||0;return{top:d.top-e.top,left:d.left-e.left}},offsetParent:function(){return this.map(function(){for(var a=this.offsetParent||t.body;a&&!Ia.test(a.nodeName)&&
c.css(a,"position")==="static";)a=a.offsetParent;return a})}});c.each(["Left","Top"],function(a,b){var d="scroll"+b;c.fn[d]=function(e){var f=this[0],h;if(!f)return null;if(e!==B)return this.each(function(){if(h=fa(this))h.scrollTo(!a?e:c(h).scrollLeft(),a?e:c(h).scrollTop());else this[d]=e});else return(h=fa(f))?"pageXOffset"in h?h[a?"pageYOffset":"pageXOffset"]:c.support.boxModel&&h.document.documentElement[d]||h.document.body[d]:f[d]}});c.each(["Height","Width"],function(a,b){var d=b.toLowerCase();
c.fn["inner"+b]=function(){return this[0]?parseFloat(c.css(this[0],d,"padding")):null};c.fn["outer"+b]=function(e){return this[0]?parseFloat(c.css(this[0],d,e?"margin":"border")):null};c.fn[d]=function(e){var f=this[0];if(!f)return e==null?null:this;if(c.isFunction(e))return this.each(function(l){var k=c(this);k[d](e.call(this,l,k[d]()))});if(c.isWindow(f))return f.document.compatMode==="CSS1Compat"&&f.document.documentElement["client"+b]||f.document.body["client"+b];else if(f.nodeType===9)return Math.max(f.documentElement["client"+
b],f.body["scroll"+b],f.documentElement["scroll"+b],f.body["offset"+b],f.documentElement["offset"+b]);else if(e===B){f=c.css(f,d);var h=parseFloat(f);return c.isNaN(h)?f:h}else return this.css(d,typeof e==="string"?e:e+"px")}})})(window);

/*
 * jPicker 1.1.6
 *
 * jQuery Plugin for Photoshop style color picker
 *
 * Copyright (c) 2010 Christopher T. Tillman
 * Digital Magic Productions, Inc. (http://www.digitalmagicpro.com/)
 * MIT style license, FREE to use, alter, copy, sell, and especially ENHANCE
 *
 * Painstakingly ported from John Dyers' excellent work on his own color picker based on the Prototype framework.
 *
 * John Dyers' website: (http://johndyer.name)
 * Color Picker page:   (http://johndyer.name/post/2007/09/PhotoShop-like-JavaScript-Color-Picker.aspx)
 *
 */
(function($, version)
{
  Math.precision = function(value, precision)
    {
      if (precision === undefined) precision = 0;
      return Math.round(value * Math.pow(10, precision)) / Math.pow(10, precision);
    };
  var Slider = // encapsulate slider functionality for the ColorMap and ColorBar - could be useful to use a jQuery UI draggable for this with certain extensions
      function(bar, options)
      {
        var $this = this, // private properties, methods, and events - keep these variables and classes invisible to outside code
          arrow = bar.find('img:first'), // the arrow image to drag
          minX = 0,
          maxX = 100,
          rangeX = 100,
          minY = 0,
          maxY = 100,
          rangeY = 100,
          x = 0,
          y = 0,
          offset,
          timeout,
          changeEvents = new Array(),
          fireChangeEvents =
            function(context)
            {
              for (var i = 0; i < changeEvents.length; i++) changeEvents[i].call($this, $this, context);
            },
          mouseDown = // bind the mousedown to the bar not the arrow for quick snapping to the clicked location
            function(e)
            {
              var off = bar.offset();
              offset = { l: off.left | 0, t: off.top | 0 };
              clearTimeout(timeout);
              timeout = setTimeout( // using setTimeout for visual updates - once the style is updated the browser will re-render internally allowing the next Javascript to run
                function()
                {
                  setValuesFromMousePosition.call($this, e);
                }, 0);
              // Bind mousemove and mouseup event to the document so it responds when dragged of of the bar - we will unbind these when on mouseup to save processing
              $(document).bind('mousemove', mouseMove).bind('mouseup', mouseUp);
              e.preventDefault(); // don't try to select anything or drag the image to the desktop
            },
          mouseMove = // set the values as the mouse moves
            function(e)
            {
              clearTimeout(timeout);
              timeout = setTimeout(
                function()
                {
                  setValuesFromMousePosition.call($this, e);
                }, 0);
              e.stopPropagation();
              e.preventDefault();
              return false;
            },
          mouseUp = // unbind the document events - they aren't needed when not dragging
            function(e)
            {
              $(document).unbind('mouseup', mouseUp).unbind('mousemove', mouseMove);
              e.stopPropagation();
              e.preventDefault();
              return false;
            },
          setValuesFromMousePosition = // calculate mouse position and set value within the current range
            function(e)
            {
              var locX = e.pageX - offset.l,
                  locY = e.pageY - offset.t,
                  barW = bar.w, // local copies for YUI compressor
                  barH = bar.h;
              // keep the arrow within the bounds of the bar
              if (locX < 0) locX = 0;
              else if (locX > barW) locX = barW;
              if (locY < 0) locY = 0;
              else if (locY > barH) locY = barH;
              val.call($this, 'xy', { x: ((locX / barW) * rangeX) + minX, y: ((locY / barH) * rangeY) + minY });
            },
          draw =
            function()
            {
              var arrowOffsetX = 0,
                arrowOffsetY = 0,
                barW = bar.w,
                barH = bar.h,
                arrowW = arrow.w,
                arrowH = arrow.h;
              setTimeout(
                function()
                {
                  if (rangeX > 0) // range is greater than zero
                  {
                    // constrain to bounds
                    if (x == maxX) arrowOffsetX = barW;
                    else arrowOffsetX = ((x / rangeX) * barW) | 0;
                  }
                  if (rangeY > 0) // range is greater than zero
                  {
                    // constrain to bounds
                    if (y == maxY) arrowOffsetY = barH;
                    else arrowOffsetY = ((y / rangeY) * barH) | 0;
                  }
                  // if arrow width is greater than bar width, center arrow and prevent horizontal dragging
                  if (arrowW >= barW) arrowOffsetX = (barW >> 1) - (arrowW >> 1); // number >> 1 - superfast bitwise divide by two and truncate (move bits over one bit discarding lowest)
                  else arrowOffsetX -= arrowW >> 1;
                  // if arrow height is greater than bar height, center arrow and prevent vertical dragging
                  if (arrowH >= barH) arrowOffsetY = (barH >> 1) - (arrowH >> 1);
                  else arrowOffsetY -= arrowH >> 1;
                  // set the arrow position based on these offsets
                  arrow.css({ left: arrowOffsetX + 'px', top: arrowOffsetY + 'px' });
                }, 0);
            },
          val =
            function(name, value, context)
            {
              var set = value !== undefined;
              if (!set)
              {
                if (name === undefined || name == null) name = 'xy';
                switch (name.toLowerCase())
                {
                  case 'x': return x;
                  case 'y': return y;
                  case 'xy':
                  default: return { x: x, y: y };
                }
              }
              if (context != null && context == $this) return;
              var changed = false,
                  newX,
                  newY;
              if (name == null) name = 'xy';
              switch (name.toLowerCase())
              {
                case 'x':
                  newX = value && (value.x && value.x | 0 || value | 0) || 0;
                  break;
                case 'y':
                  newY = value && (value.y && value.y | 0 || value | 0) || 0;
                  break;
                case 'xy':
                default:
                  newX = value && value.x && value.x | 0 || 0;
                  newY = value && value.y && value.y | 0 || 0;
                  break;
              }
              if (newX != null)
              {
                if (newX < minX) newX = minX;
                else if (newX > maxX) newX = maxX;
                if (x != newX)
                {
                  x = newX;
                  changed = true;
                }
              }
              if (newY != null)
              {
                if (newY < minY) newY = minY;
                else if (newY > maxY) newY = maxY;
                if (y != newY)
                {
                  y = newY;
                  changed = true;
                }
              }
              changed && fireChangeEvents.call($this, context || $this);
            },
          range =
            function (name, value)
            {
              var set = value !== undefined;
              if (!set)
              {
                if (name === undefined || name == null) name = 'all';
                switch (name.toLowerCase())
                {
                  case 'minx': return minX;
                  case 'maxx': return maxX;
                  case 'rangex': return { minX: minX, maxX: maxX, rangeX: rangeX };
                  case 'miny': return minY;
                  case 'maxy': return maxY;
                  case 'rangey': return { minY: minY, maxY: maxY, rangeY: rangeY };
                  case 'all':
                  default: return { minX: minX, maxX: maxX, rangeX: rangeX, minY: minY, maxY: maxY, rangeY: rangeY };
                }
              }
              var changed = false,
                  newMinX,
                  newMaxX,
                  newMinY,
                  newMaxY;
              if (name == null) name = 'all';
              switch (name.toLowerCase())
              {
                case 'minx':
                  newMinX = value && (value.minX && value.minX | 0 || value | 0) || 0;
                  break;
                case 'maxx':
                  newMaxX = value && (value.maxX && value.maxX | 0 || value | 0) || 0;
                  break;
                case 'rangex':
                  newMinX = value && value.minX && value.minX | 0 || 0;
                  newMaxX = value && value.maxX && value.maxX | 0 || 0;
                  break;
                case 'miny':
                  newMinY = value && (value.minY && value.minY | 0 || value | 0) || 0;
                  break;
                case 'maxy':
                  newMaxY = value && (value.maxY && value.maxY | 0 || value | 0) || 0;
                  break;
                case 'rangey':
                  newMinY = value && value.minY && value.minY | 0 || 0;
                  newMaxY = value && value.maxY && value.maxY | 0 || 0;
                  break;
                case 'all':
                default:
                  newMinX = value && value.minX && value.minX | 0 || 0;
                  newMaxX = value && value.maxX && value.maxX | 0 || 0;
                  newMinY = value && value.minY && value.minY | 0 || 0;
                  newMaxY = value && value.maxY && value.maxY | 0 || 0;
                  break;
              }
              if (newMinX != null && minX != newMinX)
              {
                minX = newMinX;
                rangeX = maxX - minX;
              }
              if (newMaxX != null && maxX != newMaxX)
              {
                maxX = newMaxX;
                rangeX = maxX - minX;
              }
              if (newMinY != null && minY != newMinY)
              {
                minY = newMinY;
                rangeY = maxY - minY;
              }
              if (newMaxY != null && maxY != newMaxY)
              {
                maxY = newMaxY;
                rangeY = maxY - minY;
              }
            },
          bind =
            function (callback)
            {
              if ($.isFunction(callback)) changeEvents.push(callback);
            },
          unbind =
            function (callback)
            {
              if (!$.isFunction(callback)) return;
              var i;
              while ((i = $.inArray(callback, changeEvents)) != -1) changeEvents.splice(i, 1);
            },
          destroy =
            function()
            {
              // unbind all possible events and null objects
              $(document).unbind('mouseup', mouseUp).unbind('mousemove', mouseMove);
              bar.unbind('mousedown', mouseDown);
              bar = null;
              arrow = null;
              changeEvents = null;
            };
        $.extend(true, $this, // public properties, methods, and event bindings - these we need to access from other controls
          {
            val: val,
            range: range,
            bind: bind,
            unbind: unbind,
            destroy: destroy
          });
        // initialize this control
        arrow.src = options.arrow && options.arrow.image;
        arrow.w = options.arrow && options.arrow.width || arrow.width();
        arrow.h = options.arrow && options.arrow.height || arrow.height();
        bar.w = options.map && options.map.width || bar.width();
        bar.h = options.map && options.map.height || bar.height();
        // bind mousedown event
        bar.bind('mousedown', mouseDown);
        bind.call($this, draw);
      },
    ColorValuePicker = // controls for all the input elements for the typing in color values
      function(picker, color, bindedHex, alphaPrecision)
      {
        var $this = this, // private properties and methods
          inputs = picker.find('td.Text input'),
          red = inputs.eq(3),
          green = inputs.eq(4),
          blue = inputs.eq(5),
          alpha = inputs.length > 7 ? inputs.eq(6) : null,
          hue = inputs.eq(0),
          saturation = inputs.eq(1),
          value = inputs.eq(2),
          hex = inputs.eq(inputs.length > 7 ? 7 : 6),
          ahex = inputs.length > 7 ? inputs.eq(8) : null,
          keyDown = // input box key down - use arrows to alter color
            function(e)
            {
              if (e.target.value == '' && e.target != hex.get(0) && (bindedHex != null && e.target != bindedHex.get(0) || bindedHex == null)) return;
              if (!validateKey(e)) return e;
              switch (e.target)
              {
                case red.get(0):
                  switch (e.keyCode)
                  {
                    case 38:
                      red.val(setValueInRange.call($this, (red.val() << 0) + 1, 0, 255));
                      color.val('r', red.val(), e.target);
                      return false;
                    case 40:
                      red.val(setValueInRange.call($this, (red.val() << 0) - 1, 0, 255));
                      color.val('r', red.val(), e.target);
                      return false;
                  }
                  break;
                case green.get(0):
                  switch (e.keyCode)
                  {
                    case 38:
                      green.val(setValueInRange.call($this, (green.val() << 0) + 1, 0, 255));
                      color.val('g', green.val(), e.target);
                      return false;
                    case 40:
                      green.val(setValueInRange.call($this, (green.val() << 0) - 1, 0, 255));
                      color.val('g', green.val(), e.target);
                      return false;
                  }
                  break;
                case blue.get(0):
                  switch (e.keyCode)
                  {
                    case 38:
                      blue.val(setValueInRange.call($this, (blue.val() << 0) + 1, 0, 255));
                      color.val('b', blue.val(), e.target);
                      return false;
                    case 40:
                      blue.val(setValueInRange.call($this, (blue.val() << 0) - 1, 0, 255));
                      color.val('b', blue.val(), e.target);
                      return false;
                  }
                  break;
                case alpha && alpha.get(0):
                  switch (e.keyCode)
                  {
                    case 38:
                      alpha.val(setValueInRange.call($this, parseFloat(alpha.val()) + 1, 0, 100));
                      color.val('a', Math.precision((alpha.val() * 255) / 100, alphaPrecision), e.target);
                      return false;
                    case 40:
                      alpha.val(setValueInRange.call($this, parseFloat(alpha.val()) - 1, 0, 100));
                      color.val('a', Math.precision((alpha.val() * 255) / 100, alphaPrecision), e.target);
                      return false;
                  }
                  break;
                case hue.get(0):
                  switch (e.keyCode)
                  {
                    case 38:
                      hue.val(setValueInRange.call($this, (hue.val() << 0) + 1, 0, 360));
                      color.val('h', hue.val(), e.target);
                      return false;
                    case 40:
                      hue.val(setValueInRange.call($this, (hue.val() << 0) - 1, 0, 360));
                      color.val('h', hue.val(), e.target);
                      return false;
                  }
                  break;
                case saturation.get(0):
                  switch (e.keyCode)
                  {
                    case 38:
                      saturation.val(setValueInRange.call($this, (saturation.val() << 0) + 1, 0, 100));
                      color.val('s', saturation.val(), e.target);
                      return false;
                    case 40:
                      saturation.val(setValueInRange.call($this, (saturation.val() << 0) - 1, 0, 100));
                      color.val('s', saturation.val(), e.target);
                      return false;
                  }
                  break;
                case value.get(0):
                  switch (e.keyCode)
                  {
                    case 38:
                      value.val(setValueInRange.call($this, (value.val() << 0) + 1, 0, 100));
                      color.val('v', value.val(), e.target);
                      return false;
                    case 40:
                      value.val(setValueInRange.call($this, (value.val() << 0) - 1, 0, 100));
                      color.val('v', value.val(), e.target);
                      return false;
                  }
                  break;
              }
            },
          keyUp = // input box key up - validate value and set color
            function(e)
            {
              if (e.target.value == '' && e.target != hex.get(0) && (bindedHex != null && e.target != bindedHex.get(0) || bindedHex == null)) return;
              if (!validateKey(e)) return e;
              switch (e.target)
              {
                case red.get(0):
                  red.val(setValueInRange.call($this, red.val(), 0, 255));
                  color.val('r', red.val(), e.target);
                  break;
                case green.get(0):
                  green.val(setValueInRange.call($this, green.val(), 0, 255));
                  color.val('g', green.val(), e.target);
                  break;
                case blue.get(0):
                  blue.val(setValueInRange.call($this, blue.val(), 0, 255));
                  color.val('b', blue.val(), e.target);
                  break;
                case alpha && alpha.get(0):
                  alpha.val(setValueInRange.call($this, alpha.val(), 0, 100));
                  color.val('a', Math.precision((alpha.val() * 255) / 100, alphaPrecision), e.target);
                  break;
                case hue.get(0):
                  hue.val(setValueInRange.call($this, hue.val(), 0, 360));
                  color.val('h', hue.val(), e.target);
                  break;
                case saturation.get(0):
                  saturation.val(setValueInRange.call($this, saturation.val(), 0, 100));
                  color.val('s', saturation.val(), e.target);
                  break;
                case value.get(0):
                  value.val(setValueInRange.call($this, value.val(), 0, 100));
                  color.val('v', value.val(), e.target);
                  break;
                case hex.get(0):
                  hex.val(hex.val().replace(/[^a-fA-F0-9]/g, '').toLowerCase().substring(0, 6));
                  bindedHex && bindedHex.val(hex.val());
                  color.val('hex', hex.val() != '' ? hex.val() : null, e.target);
                  break;
                case bindedHex && bindedHex.get(0):
                  if(bindedHex[0].alphaSupport){
                    bindedHex.val(bindedHex.val().replace(/[^a-fA-F0-9]/g, '').toLowerCase().substring(0, 8));
                    hex.val(bindedHex.val());
                    color.val('ahex', bindedHex.val() != '' ? bindedHex.val() : null, e.target);
                  }else{
                    bindedHex.val(bindedHex.val().replace(/[^a-fA-F0-9]/g, '').toLowerCase().substring(0, 6));
                    hex.val(bindedHex.val());
                    color.val('hex', bindedHex.val() != '' ? bindedHex.val() : null, e.target);
                  }
                  break;
                case ahex && ahex.get(0):
                  ahex.val(ahex.val().replace(/[^a-fA-F0-9]/g, '').toLowerCase().substring(0, 2));
                  color.val('a', ahex.val() != null ? parseInt(ahex.val(), 16) : null, e.target);
                  break;
              }
            },
          blur = // input box blur - reset to original if value empty
            function(e)
            {
              if (color.val() != null)
              {
                switch (e.target)
                {
                  case red.get(0): red.val(color.val('r')); break;
                  case green.get(0): green.val(color.val('g')); break;
                  case blue.get(0): blue.val(color.val('b')); break;
                  case alpha && alpha.get(0): alpha.val(Math.precision((color.val('a') * 100) / 255, alphaPrecision)); break;
                  case hue.get(0): hue.val(color.val('h')); break;
                  case saturation.get(0): saturation.val(color.val('s')); break;
                  case value.get(0): value.val(color.val('v')); break;
                  case hex.get(0):
                  case bindedHex && bindedHex.get(0):
                    if(bindedHex[0].alphaSupport){
                      hex.val(color.val('ahex'));
                      bindedHex && bindedHex.val(color.val('ahex'));
                    }else{
                      hex.val(color.val('hex'));
                      bindedHex && bindedHex.val(color.val('hex'));
                    }
                    break;
                  case ahex && ahex.get(0): ahex.val(color.val('ahex').substring(6)); break;
                }
              }
            },
          validateKey = // validate key
            function(e)
            {
              switch(e.keyCode)
              {
                case 9:
                case 16:
                case 29:
                case 37:
                case 39:
                  return false;
                case 'c'.charCodeAt():
                case 'v'.charCodeAt():
                  if (e.ctrlKey) return false;
              }
              return true;
            },
          setValueInRange = // constrain value within range
            function(value, min, max)
            {
              if (value == '' || isNaN(value)) return min;
              if (value > max) return max;
              if (value < min) return min;
              return value;
            },
          colorChanged =
            function(ui, context)
            {
              var all = ui.val('all');
              if (context != red.get(0)) red.val(all != null ? all.r : '');
              if (context != green.get(0)) green.val(all != null ? all.g : '');
              if (context != blue.get(0)) blue.val(all != null ? all.b : '');
              if (alpha && context != alpha.get(0)) alpha.val(all != null ? Math.precision((all.a * 100) / 255, alphaPrecision) : '');
              if (context != hue.get(0)) hue.val(all != null ? all.h : '');
              if (context != saturation.get(0)) saturation.val(all != null ? all.s : '');
              if (context != value.get(0)) value.val(all != null ? all.v : '');
              if (context != hex.get(0) && (bindedHex && context != bindedHex.get(0) || !bindedHex)) hex.val(all != null ? all.hex : '');
              if(bindedHex[0] && bindedHex[0].alphaSupport){
                if (bindedHex && context != bindedHex.get(0) && context != hex.get(0)) bindedHex.val(all != null ? all.ahex : '');
              }else{
                if (bindedHex && context != bindedHex.get(0) && context != hex.get(0)) bindedHex.val(all != null ? all.hex : '');
              }
              if(bindedHex[0] && OfflajnfireEvent)
                OfflajnfireEvent(bindedHex[0], 'change');
              if (ahex && context != ahex.get(0)) ahex.val(all != null ? all.ahex.substring(6) : '');
            },
          destroy =
            function()
            {
              // unbind all events and null objects
              red.add(green).add(blue).add(alpha).add(hue).add(saturation).add(value).add(hex).add(bindedHex).add(ahex).unbind('keyup', keyUp).unbind('blur', blur);
              red.add(green).add(blue).add(alpha).add(hue).add(saturation).add(value).unbind('keydown', keyDown);
              color.unbind(colorChanged);
              red = null;
              green = null;
              blue = null;
              alpha = null;
              hue = null;
              saturation = null;
              value = null;
              hex = null;
              ahex = null;
            };
        $.extend(true, $this, // public properties and methods
          {
            destroy: destroy
          });
        if(bindedHex && bindedHex[0]){
          if(bindedHex[0].alphaSupport){
            bindedHex.val(bindedHex.val().replace(/[^a-fA-F0-9]/g, '').toLowerCase().substring(0, 8));
          }else{
            bindedHex.val(bindedHex.val().replace(/[^a-fA-F0-9]/g, '').toLowerCase().substring(0, 6));
          }
        }
        red.add(green).add(blue).add(alpha).add(hue).add(saturation).add(value).add(hex).add(bindedHex).add(ahex).bind('keyup', keyUp).bind('change', keyUp).bind('blur', blur);
        red.add(green).add(blue).add(alpha).add(hue).add(saturation).add(value).bind('keydown', keyDown);
        color.bind(colorChanged);
      };
  $.jPicker =
    {
      List: [], // array holding references to each active instance of the control
      Color: // color object - we will be able to assign by any color space type or retrieve any color space info
             // we want this public so we can optionally assign new color objects to initial values using inputs other than a string hex value (also supported)
        function(init)
        {
          var $this = this,
            r,
            g,
            b,
            a,
            h,
            s,
            v,
            changeEvents = new Array(),
            fireChangeEvents = 
              function(context)
              {
                for (var i = 0; i < changeEvents.length; i++) changeEvents[i].call($this, $this, context);
              },
            val =
              function(name, value, context)
              {
                var set = value !== undefined;
                if (!set)
                {
                  if (name === undefined || name == null || name == '') name = 'all';
                  if (r == null) return null;
                  switch (name.toLowerCase())
                  {
                    case 'ahex': return ColorMethods.rgbaToHex({ r: r, g: g, b: b, a: a });
                    case 'hex': return val('ahex').substring(0, 6);
                    case 'all': return { r: r, g: g, b: b, a: a, h: h, s: s, v: v, hex: val.call($this, 'hex'), ahex: val.call($this, 'ahex') };
                    default:
                      var ret={};
                      for (var i = 0; i < name.length; i++)
                      {
                        switch (name.charAt(i))
                        {
                          case 'r':
                            if (name.length == 1) ret = r;
                            else ret.r = r;
                            break;
                          case 'g':
                            if (name.length == 1) ret = g;
                            else ret.g = g;
                            break;
                          case 'b':
                            if (name.length == 1) ret = b;
                            else ret.b = b;
                            break;
                          case 'a':
                            if (name.length == 1) ret = a;
                            else ret.a = a;
                            break;
                          case 'h':
                            if (name.length == 1) ret = h;
                            else ret.h = h;
                            break;
                          case 's':
                            if (name.length == 1) ret = s;
                            else ret.s = s;
                            break;
                          case 'v':
                            if (name.length == 1) ret = v;
                            else ret.v = v;
                            break;
                        }
                      }
                      return ret == {} ? val.call($this, 'all') : ret;
                      break;
                  }
                }
                if (context != null && context == $this) return;
                var changed = false;
                if (name == null) name = '';
                if (value == null)
                {
                  if (r != null)
                  {
                    r = null;
                    changed = true;
                  }
                  if (g != null)
                  {
                    g = null;
                    changed = true;
                  }
                  if (b != null)
                  {
                    b = null;
                    changed = true;
                  }
                  if (a != null)
                  {
                    a = null;
                    changed = true;
                  }
                  if (h != null)
                  {
                    h = null;
                    changed = true;
                  }
                  if (s != null)
                  {
                    s = null;
                    changed = true;
                  }
                  if (v != null)
                  {
                    v = null;
                    changed = true;
                  }
                  changed && fireChangeEvents.call($this, context || $this);
                  return;
                }
                switch (name.toLowerCase())
                {
                  case 'ahex':
                  case 'hex':
                    var ret = ColorMethods.hexToRgba(value && (value.ahex || value.hex) || value || '00000000');
                    val.call($this, 'rgba', { r: ret.r, g: ret.g, b: ret.b, a: name == 'ahex' ? ret.a : a != null ? a : 255 }, context);
                    break;
                  default:
                    if (value && (value.ahex != null || value.hex != null))
                    {
                      val.call($this, 'ahex', value.ahex || value.hex || '00000000', context);
                      return;
                    }
                    var newV = {}, rgb = false, hsv = false;
                    if (value.r !== undefined && !name.indexOf('r') == -1) name += 'r';
                    if (value.g !== undefined && !name.indexOf('g') == -1) name += 'g';
                    if (value.b !== undefined && !name.indexOf('b') == -1) name += 'b';
                    if (value.a !== undefined && !name.indexOf('a') == -1) name += 'a';
                    if (value.h !== undefined && !name.indexOf('h') == -1) name += 'h';
                    if (value.s !== undefined && !name.indexOf('s') == -1) name += 's';
                    if (value.v !== undefined && !name.indexOf('v') == -1) name += 'v';
                    for (var i = 0; i < name.length; i++)
                    {
                      switch (name.charAt(i))
                      {
                        case 'r':
                          if (hsv) continue;
                          rgb = true;
                          newV.r = value && value.r && value.r | 0 || value && value | 0 || 0;
                          if (newV.r < 0) newV.r = 0;
                          else if (newV.r > 255) newV.r = 255;
                          if (r != newV.r)
                          {
                            r = newV.r;
                            changed = true;
                          }
                          break;
                        case 'g':
                          if (hsv) continue;
                          rgb = true;
                          newV.g = value && value.g && value.g | 0 || value && value | 0 || 0;
                          if (newV.g < 0) newV.g = 0;
                          else if (newV.g > 255) newV.g = 255;
                          if (g != newV.g)
                          {
                            g = newV.g;
                            changed = true;
                          }
                          break;
                        case 'b':
                          if (hsv) continue;
                          rgb = true;
                          newV.b = value && value.b && value.b | 0 || value && value | 0 || 0;
                          if (newV.b < 0) newV.b = 0;
                          else if (newV.b > 255) newV.b = 255;
                          if (b != newV.b)
                          {
                            b = newV.b;
                            changed = true;
                          }
                          break;
                        case 'a':
                          newV.a = value && value.a != null ? value.a | 0 : value != null ? value | 0 : 255;
                          if (newV.a < 0) newV.a = 0;
                          else if (newV.a > 255) newV.a = 255;
                          if (a != newV.a)
                          {
                            a = newV.a;
                            changed = true;
                          }
                          break;
                        case 'h':
                          if (rgb) continue;
                          hsv = true;
                          newV.h = value && value.h && value.h | 0 || value && value | 0 || 0;
                          if (newV.h < 0) newV.h = 0;
                          else if (newV.h > 360) newV.h = 360;
                          if (h != newV.h)
                          {
                            h = newV.h;
                            changed = true;
                          }
                          break;
                        case 's':
                          if (rgb) continue;
                          hsv = true;
                          newV.s = value && value.s != null ? value.s | 0 : value != null ? value | 0 : 100;
                          if (newV.s < 0) newV.s = 0;
                          else if (newV.s > 100) newV.s = 100;
                          if (s != newV.s)
                          {
                            s = newV.s;
                            changed = true;
                          }
                          break;
                        case 'v':
                          if (rgb) continue;
                          hsv = true;
                          newV.v = value && value.v != null ? value.v | 0 : value != null ? value | 0 : 100;
                          if (newV.v < 0) newV.v = 0;
                          else if (newV.v > 100) newV.v = 100;
                          if (v != newV.v)
                          {
                            v = newV.v;
                            changed = true;
                          }
                          break;
                      }
                    }
                    if (changed)
                    {
                      if (rgb)
                      {
                        r = r || 0;
                        g = g || 0;
                        b = b || 0;
                        var ret = ColorMethods.rgbToHsv({ r: r, g: g, b: b });
                        h = ret.h;
                        s = ret.s;
                        v = ret.v;
                      }
                      else if (hsv)
                      {
                        h = h || 0;
                        s = s != null ? s : 100;
                        v = v != null ? v : 100;
                        var ret = ColorMethods.hsvToRgb({ h: h, s: s, v: v });
                        r = ret.r;
                        g = ret.g;
                        b = ret.b;
                      }
                      a = a != null ? a : 255;
                      fireChangeEvents.call($this, context || $this);
                    }
                    break;
                }
              },
            bind =
              function(callback)
              {
                if ($.isFunction(callback)) changeEvents.push(callback);
              },
            unbind =
              function(callback)
              {
                if (!$.isFunction(callback)) return;
                var i;
                while ((i = $.inArray(callback, changeEvents)) != -1) changeEvents.splice(i, 1);
              },
            destroy =
              function()
              {
                changeEvents = null;
              }
          $.extend(true, $this, // public properties and methods
            {
              val: val,
              bind: bind,
              unbind: unbind,
              destroy: destroy
            });
          if (init)
          {
            if (init.ahex != null) val('ahex', init);
            else if (init.hex != null) val((init.a != null ? 'a' : '') + 'hex', init.a != null ? { ahex: init.hex + ColorMethods.intToHex(init.a) } : init);
            else if (init.r != null && init.g != null && init.b != null) val('rgb' + (init.a != null ? 'a' : ''), init);
            else if (init.h != null && init.s != null && init.v != null) val('hsv' + (init.a != null ? 'a' : ''), init);
          }
        },
      ColorMethods: // color conversion methods  - make public to give use to external scripts
        {
          hexToRgba:
            function(hex)
            {
              hex = this.validateHex(hex);
              if (hex == '') return { r: null, g: null, b: null, a: null };
              var r = '00', g = '00', b = '00', a = '255';
              if (hex.length == 6) hex += 'ff';
              if (hex.length > 6)
              {
                r = hex.substring(0, 2);
                g = hex.substring(2, 4);
                b = hex.substring(4, 6);
                a = hex.substring(6, hex.length);
              }
              else
              {
                if (hex.length > 4)
                {
                  r = hex.substring(4, hex.length);
                  hex = hex.substring(0, 4);
                }
                if (hex.length > 2)
                {
                  g = hex.substring(2, hex.length);
                  hex = hex.substring(0, 2);
                }
                if (hex.length > 0) b = hex.substring(0, hex.length);
              }
              return { r: this.hexToInt(r), g: this.hexToInt(g), b: this.hexToInt(b), a: this.hexToInt(a) };
            },
          validateHex:
            function(hex)
            {
              hex = hex.toLowerCase().replace(/[^a-f0-9]/g, '');
              if (hex.length > 8) hex = hex.substring(0, 8);
              return hex;
            },
          rgbaToHex:
            function(rgba)
            {
              return this.intToHex(rgba.r) + this.intToHex(rgba.g) + this.intToHex(rgba.b) + this.intToHex(rgba.a);
            },
          intToHex:
            function(dec)
            {
              var result = (dec | 0).toString(16);
              if (result.length == 1) result = ('0' + result);
              return result.toLowerCase();
            },
          hexToInt:
            function(hex)
            {
              return parseInt(hex, 16);
            },
          rgbToHsv:
            function(rgb)
            {
              var r = rgb.r / 255, g = rgb.g / 255, b = rgb.b / 255, hsv = { h: 0, s: 0, v: 0 }, min = 0, max = 0, delta;
              if (r >= g && r >= b)
              {
                max = r;
                min = g > b ? b : g;
              }
              else if (g >= b && g >= r)
              {
                max = g;
                min = r > b ? b : r;
              }
              else
              {
                max = b;
                min = g > r ? r : g;
              }
              hsv.v = max;
              hsv.s = max ? (max - min) / max : 0;
              if (!hsv.s) hsv.h = 0;
              else
              {
                delta = max - min;
                if (r == max) hsv.h = (g - b) / delta;
                else if (g == max) hsv.h = 2 + (b - r) / delta;
                else hsv.h = 4 + (r - g) / delta;
                hsv.h = parseInt(hsv.h * 60);
                if (hsv.h < 0) hsv.h += 360;
              }
              hsv.s = (hsv.s * 100) | 0;
              hsv.v = (hsv.v * 100) | 0;
              return hsv;
            },
          hsvToRgb:
            function(hsv)
            {
              var rgb = { r: 0, g: 0, b: 0, a: 100 }, h = hsv.h, s = hsv.s, v = hsv.v;
              if (s == 0)
              {
                if (v == 0) rgb.r = rgb.g = rgb.b = 0;
                else rgb.r = rgb.g = rgb.b = (v * 255 / 100) | 0;
              }
              else
              {
                if (h == 360) h = 0;
                h /= 60;
                s = s / 100;
                v = v / 100;
                var i = h | 0,
                    f = h - i,
                    p = v * (1 - s),
                    q = v * (1 - (s * f)),
                    t = v * (1 - (s * (1 - f)));
                switch (i)
                {
                  case 0:
                    rgb.r = v;
                    rgb.g = t;
                    rgb.b = p;
                    break;
                  case 1:
                    rgb.r = q;
                    rgb.g = v;
                    rgb.b = p;
                    break;
                  case 2:
                    rgb.r = p;
                    rgb.g = v;
                    rgb.b = t;
                    break;
                  case 3:
                    rgb.r = p;
                    rgb.g = q;
                    rgb.b = v;
                    break;
                  case 4:
                    rgb.r = t;
                    rgb.g = p;
                    rgb.b = v;
                    break;
                  case 5:
                    rgb.r = v;
                    rgb.g = p;
                    rgb.b = q;
                    break;
                }
                rgb.r = (rgb.r * 255) | 0;
                rgb.g = (rgb.g * 255) | 0;
                rgb.b = (rgb.b * 255) | 0;
              }
              return rgb;
            }
        }
    };
  var Color = $.jPicker.Color, List = $.jPicker.List, ColorMethods = $.jPicker.ColorMethods; // local copies for YUI compressor
  $.fn.jPicker =
    function(options)
    {
      var $arguments = arguments;
      return this.each(
        function()
        {
          var $this = this, settings = $.extend(true, {}, $.fn.jPicker.defaults, options); // local copies for YUI compressor
          if ($($this).get(0).nodeName.toLowerCase() == 'input') // Add color picker icon if binding to an input element and bind the events to the input
          {
            $.extend(true, settings,
              {
                window:
                {
                  bindToInput: true,
                  expandable: true,
                  input: $($this)
                }
              });
            if($($this).val()=='')
            {
              settings.color.active = new Color({ hex: null });
              settings.color.current = new Color({ hex: null });
            }
            else if (ColorMethods.validateHex($($this).val()))
            {
              settings.color.active = new Color({ hex: $($this).val(), a: settings.color.active.val('a') });
              settings.color.current = new Color({ hex: $($this).val(), a: settings.color.active.val('a') });
            }
          }
          if (settings.window.expandable)
            $($this).before('<span class="jPicker"><span class="Icon"><span class="Color">&nbsp;</span><span class="Alpha">&nbsp;</span><span class="Image" title="Click To Open Color Picker"><span class=ImageIcon>&nbsp;</span></span><span class="Container">&nbsp;</span></span></span>');
          else settings.window.liveUpdate = false; // Basic control binding for inline use - You will need to override the liveCallback or commitCallback function to retrieve results
          var isLessThanIE7 = parseFloat(navigator.appVersion.split('MSIE')[1]) < 7 && document.body.filters, // needed to run the AlphaImageLoader function for IE6
            container = null,
            colorMapDiv = null,
            colorBarDiv = null,
            colorMapL1 = null, // different layers of colorMap and colorBar
            colorMapL2 = null,
            colorMapL3 = null,
            colorBarL1 = null,
            colorBarL2 = null,
            colorBarL3 = null,
            colorBarL4 = null,
            colorBarL5 = null,
            colorBarL6 = null,
            colorMap = null, // color maps
            colorBar = null,
            colorPicker = null,
            elementStartX = null, // Used to record the starting css positions for dragging the control
            elementStartY = null,
            pageStartX = null, // Used to record the mousedown coordinates for dragging the control
            pageStartY = null,
            activePreview = null, // color boxes above the radio buttons
            currentPreview = null,
            okButton = null,
            cancelButton = null,
            grid = null, // preset colors grid
            iconColor = null, // iconColor for popup icon
            iconAlpha = null, // iconAlpha for popup icon
            iconImage = null, // iconImage popup icon
            moveBar = null, // drag bar
            setColorMode = // set color mode and update visuals for the new color mode
              function(colorMode)
              {
                var active = color.active, // local copies for YUI compressor
                  clientPath = images.clientPath,
                  hex = active.val('hex'),
                  rgbMap,
                  rgbBar;
                settings.color.mode = colorMode;
                switch (colorMode)
                {
                  case 'h':
                    setTimeout(
                      function()
                      {
                        setBG.call($this, colorMapDiv, 'transparent');
                        setImgLoc.call($this, colorMapL1, 0);
                        setAlpha.call($this, colorMapL1, 100);
                        setImgLoc.call($this, colorMapL2, 260);
                        setAlpha.call($this, colorMapL2, 100);
                        setBG.call($this, colorBarDiv, 'transparent');
                        setImgLoc.call($this, colorBarL1, 0);
                        setAlpha.call($this, colorBarL1, 100);
                        setImgLoc.call($this, colorBarL2, 260);
                        setAlpha.call($this, colorBarL2, 100);
                        setImgLoc.call($this, colorBarL3, 260);
                        setAlpha.call($this, colorBarL3, 100);
                        setImgLoc.call($this, colorBarL4, 260);
                        setAlpha.call($this, colorBarL4, 100);
                        setImgLoc.call($this, colorBarL6, 260);
                        setAlpha.call($this, colorBarL6, 100);
                      }, 0);
                    colorMap.range('all', { minX: 0, maxX: 100, minY: 0, maxY: 100 });
                    colorBar.range('rangeY', { minY: 0, maxY: 360 });
                    if (active.val('ahex') == null) break;
                    colorMap.val('xy', { x: active.val('s'), y: 100 - active.val('v') }, colorMap);
                    colorBar.val('y', 360 - active.val('h'), colorBar);
                    break;
                  case 's':
                    setTimeout(
                      function()
                      {
                        setBG.call($this, colorMapDiv, 'transparent');
                        setImgLoc.call($this, colorMapL1, -260);
                        setImgLoc.call($this, colorMapL2, -520);
                        setImgLoc.call($this, colorBarL1, -260);
                        setImgLoc.call($this, colorBarL2, -520);
                        setImgLoc.call($this, colorBarL6, 260);
                        setAlpha.call($this, colorBarL6, 100);
                      }, 0);
                    colorMap.range('all', { minX: 0, maxX: 360, minY: 0, maxY: 100 });
                    colorBar.range('rangeY', { minY: 0, maxY: 100 });
                    if (active.val('ahex') == null) break;
                    colorMap.val('xy', { x: active.val('h'), y: 100 - active.val('v') }, colorMap);
                    colorBar.val('y', 100 - active.val('s'), colorBar);
                    break;
                  case 'v':
                    setTimeout(
                      function()
                      {
                        setBG.call($this, colorMapDiv, '000000');
                        setImgLoc.call($this, colorMapL1, -780);
                        setImgLoc.call($this, colorMapL2, 260);
                        setBG.call($this, colorBarDiv, hex);
                        setImgLoc.call($this, colorBarL1, -520);
                        setImgLoc.call($this, colorBarL2, 260);
                        setAlpha.call($this, colorBarL2, 100);
                        setImgLoc.call($this, colorBarL6, 260);
                        setAlpha.call($this, colorBarL6, 100);
                      }, 0);
                    colorMap.range('all', { minX: 0, maxX: 360, minY: 0, maxY: 100 });
                    colorBar.range('rangeY', { minY: 0, maxY: 100 });
                    if (active.val('ahex') == null) break;
                    colorMap.val('xy', { x: active.val('h'), y: 100 - active.val('s') }, colorMap);
                    colorBar.val('y', 100 - active.val('v'), colorBar);
                    break;
                  case 'r':
                    rgbMap = -1040;
                    rgbBar = -780;
                    colorMap.range('all', { minX: 0, maxX: 255, minY: 0, maxY: 255 });
                    colorBar.range('rangeY', { minY: 0, maxY: 255 });
                    if (active.val('ahex') == null) break;
                    colorMap.val('xy', { x: active.val('b'), y: 255 - active.val('g') }, colorMap);
                    colorBar.val('y', 255 - active.val('r'), colorBar);
                    break;
                  case 'g':
                    rgbMap = -1560;
                    rgbBar = -1820;
                    colorMap.range('all', { minX: 0, maxX: 255, minY: 0, maxY: 255 });
                    colorBar.range('rangeY', { minY: 0, maxY: 255 });
                    if (active.val('ahex') == null) break;
                    colorMap.val('xy', { x: active.val('b'), y: 255 - active.val('r') }, colorMap);
                    colorBar.val('y', 255 - active.val('g'), colorBar);
                    break;
                  case 'b':
                    rgbMap = -2080;
                    rgbBar = -2860;
                    colorMap.range('all', { minX: 0, maxX: 255, minY: 0, maxY: 255 });
                    colorBar.range('rangeY', { minY: 0, maxY: 255 });
                    if (active.val('ahex') == null) break;
                    colorMap.val('xy', { x: active.val('r'), y: 255 - active.val('g') }, colorMap);
                    colorBar.val('y', 255 - active.val('b'), colorBar);
                    break;
                  case 'a':
                    setTimeout(
                      function()
                      {
                        setBG.call($this, colorMapDiv, 'transparent');
                        setImgLoc.call($this, colorMapL1, -260);
                        setImgLoc.call($this, colorMapL2, -520);
                        setImgLoc.call($this, colorBarL1, 260);
                        setImgLoc.call($this, colorBarL2, 260);
                        setAlpha.call($this, colorBarL2, 100);
                        setImgLoc.call($this, colorBarL6, 0);
                        setAlpha.call($this, colorBarL6, 100);
                      }, 0);
                    colorMap.range('all', { minX: 0, maxX: 360, minY: 0, maxY: 100 });
                    colorBar.range('rangeY', { minY: 0, maxY: 255 });
                    if (active.val('ahex') == null) break;
                    colorMap.val('xy', { x: active.val('h'), y: 100 - active.val('v') }, colorMap);
                    colorBar.val('y', 255 - active.val('a'), colorBar);
                    break;
                  default:
                    throw ('Invalid Mode');
                    break;
                }
                switch (colorMode)
                {
                  case 'h':
                    break;
                  case 's':
                  case 'v':
                  case 'a':
                    setTimeout(
                      function()
                      {
                        setAlpha.call($this, colorMapL1, 100);
                        setAlpha.call($this, colorBarL1, 100);
                        setImgLoc.call($this, colorBarL3, 260);
                        setAlpha.call($this, colorBarL3, 100);
                        setImgLoc.call($this, colorBarL4, 260);
                        setAlpha.call($this, colorBarL4, 100);
                      }, 0);
                    break;
                  case 'r':
                  case 'g':
                  case 'b':
                    setTimeout(
                      function()
                      {
                        setBG.call($this, colorMapDiv, 'transparent');
                        setBG.call($this, colorBarDiv, 'transparent');
                        setAlpha.call($this, colorBarL1, 100);
                        setAlpha.call($this, colorMapL1, 100);
                        setImgLoc.call($this, colorMapL1, rgbMap);
                        setImgLoc.call($this, colorMapL2, rgbMap - 260);
                        setImgLoc.call($this, colorBarL1, rgbBar - 780);
                        setImgLoc.call($this, colorBarL2, rgbBar - 520);
                        setImgLoc.call($this, colorBarL3, rgbBar);
                        setImgLoc.call($this, colorBarL4, rgbBar - 260);
                        setImgLoc.call($this, colorBarL6, 260);
                        setAlpha.call($this, colorBarL6, 100);
                      }, 0);
                    break;
                }
                if (active.val('ahex') == null) return;
                activeColorChanged.call($this, active);
              },
            activeColorChanged = // Update color when user changes text values
              function(ui, context)
              {
                if (context == null || (context != colorBar && context != colorMap)) positionMapAndBarArrows.call($this, ui, context);
                setTimeout(
                  function()
                  {
                    updatePreview.call($this, ui);
                    updateMapVisuals.call($this, ui);
                    updateBarVisuals.call($this, ui);
                  }, 0);
              },
            mapValueChanged = // user has dragged the ColorMap pointer
              function(ui, context)
              {
                var active = color.active;
                if (context != colorMap && active.val() == null) return;
                var xy = ui.val('all');
                switch (settings.color.mode)
                {
                  case 'h':
                    active.val('sv', { s: xy.x, v: 100 - xy.y }, context);
                    break;
                  case 's':
                  case 'a':
                    active.val('hv', { h: xy.x, v: 100 - xy.y }, context);
                    break;
                  case 'v':
                    active.val('hs', { h: xy.x, s: 100 - xy.y }, context);
                    break;
                  case 'r':
                    active.val('gb', { g: 255 - xy.y, b: xy.x }, context);
                    break;
                  case 'g':
                    active.val('rb', { r: 255 - xy.y, b: xy.x }, context);
                    break;
                  case 'b':
                    active.val('rg', { r: xy.x, g: 255 - xy.y }, context);
                    break;
                }
              },
            colorBarValueChanged = // user has dragged the ColorBar slider
              function(ui, context)
              {
                var active = color.active;
                if (context != colorBar && active.val() == null) return;
                switch (settings.color.mode)
                {
                  case 'h':
                    active.val('h', { h: 360 - ui.val('y') }, context);
                    break;
                  case 's':
                    active.val('s', { s: 100 - ui.val('y') }, context);
                    break;
                  case 'v':
                    active.val('v', { v: 100 - ui.val('y') }, context);
                    break;
                  case 'r':
                    active.val('r', { r: 255 - ui.val('y') }, context);
                    break;
                  case 'g':
                    active.val('g', { g: 255 - ui.val('y') }, context);
                    break;
                  case 'b':
                    active.val('b', { b: 255 - ui.val('y') }, context);
                    break;
                  case 'a':
                    active.val('a', 255 - ui.val('y'), context);
                    break;
                }
              },
            positionMapAndBarArrows = // position map and bar arrows to match current color
              function(ui, context)
              {
                if (context != colorMap)
                {
                  switch (settings.color.mode)
                  {
                    case 'h':
                      var sv = ui.val('sv');
                      colorMap.val('xy', { x: sv != null ? sv.s : 100, y: 100 - (sv != null ? sv.v : 100) }, context);
                      break;
                    case 's':
                    case 'a':
                      var hv = ui.val('hv');
                      colorMap.val('xy', { x: hv && hv.h || 0, y: 100 - (hv != null ? hv.v : 100) }, context);
                      break;
                    case 'v':
                      var hs = ui.val('hs');
                      colorMap.val('xy', { x: hs && hs.h || 0, y: 100 - (hs != null ? hs.s : 100) }, context);
                      break;
                    case 'r':
                      var bg = ui.val('bg');
                      colorMap.val('xy', { x: bg && bg.b || 0, y: 255 - (bg && bg.g || 0) }, context);
                      break;
                    case 'g':
                      var br = ui.val('br');
                      colorMap.val('xy', { x: br && br.b || 0, y: 255 - (br && br.r || 0) }, context);
                      break;
                    case 'b':
                      var rg = ui.val('rg');
                      colorMap.val('xy', { x: rg && rg.r || 0, y: 255 - (rg && rg.g || 0) }, context);
                      break;
                  }
                }
                if (context != colorBar)
                {
                  switch (settings.color.mode)
                  {
                    case 'h':
                      colorBar.val('y', 360 - (ui.val('h') || 0), context);
                      break;
                    case 's':
                      var s = ui.val('s');
                      colorBar.val('y', 100 - (s != null ? s : 100), context);
                      break;
                    case 'v':
                      var v = ui.val('v');
                      colorBar.val('y', 100 - (v != null ? v : 100), context);
                      break;
                    case 'r':
                      colorBar.val('y', 255 - (ui.val('r') || 0), context);
                      break;
                    case 'g':
                      colorBar.val('y', 255 - (ui.val('g') || 0), context);
                      break;
                    case 'b':
                      colorBar.val('y', 255 - (ui.val('b') || 0), context);
                      break;
                    case 'a':
                      var a = ui.val('a');
                      colorBar.val('y', 255 - (a != null ? a : 255), context);
                      break;
                  }
                }
              },
            updatePreview =
              function(ui)
              {
                try
                {
                  var all = ui.val('all');
                  activePreview.css({ backgroundColor: all && '#' + all.hex || 'transparent' });
                  setAlpha.call($this, activePreview, all && Math.precision((all.a * 100) / 255, 4) || 0);
                }
                catch (e) { }
              },
            updateMapVisuals =
              function(ui)
              {
                switch (settings.color.mode)
                {
                  case 'h':
                    setBG.call($this, colorMapDiv, new Color({ h: ui.val('h') || 0, s: 100, v: 100 }).val('hex'));
                    break;
                  case 's':
                  case 'a':
                    var s = ui.val('s');
                    setAlpha.call($this, colorMapL2, 100 - (s != null ? s : 100));
                    break;
                  case 'v':
                    var v = ui.val('v');
                    setAlpha.call($this, colorMapL1, v != null ? v : 100);
                    break;
                  case 'r':
                    setAlpha.call($this, colorMapL2, Math.precision((ui.val('r') || 0) / 255 * 100, 4));
                    break;
                  case 'g':
                    setAlpha.call($this, colorMapL2, Math.precision((ui.val('g') || 0) / 255 * 100, 4));
                    break;
                  case 'b':
                    setAlpha.call($this, colorMapL2, Math.precision((ui.val('b') || 0) / 255 * 100));
                    break;
                }
                var a = ui.val('a');
                setAlpha.call($this, colorMapL3, Math.precision(((255 - (a || 0)) * 100) / 255, 4));
              },
            updateBarVisuals =
              function(ui)
              {
                switch (settings.color.mode)
                {
                  case 'h':
                    var a = ui.val('a');
                    setAlpha.call($this, colorBarL5, Math.precision(((255 - (a || 0)) * 100) / 255, 4));
                    break;
                  case 's':
                    var hva = ui.val('hva'),
                        saturatedColor = new Color({ h: hva && hva.h || 0, s: 100, v: hva != null ? hva.v : 100 });
                    setBG.call($this, colorBarDiv, saturatedColor.val('hex'));
                    setAlpha.call($this, colorBarL2, 100 - (hva != null ? hva.v : 100));
                    setAlpha.call($this, colorBarL5, Math.precision(((255 - (hva && hva.a || 0)) * 100) / 255, 4));
                    break;
                  case 'v':
                    var hsa = ui.val('hsa'),
                        valueColor = new Color({ h: hsa && hsa.h || 0, s: hsa != null ? hsa.s : 100, v: 100 });
                    setBG.call($this, colorBarDiv, valueColor.val('hex'));
                    setAlpha.call($this, colorBarL5, Math.precision(((255 - (hsa && hsa.a || 0)) * 100) / 255, 4));
                    break;
                  case 'r':
                  case 'g':
                  case 'b':
                    var hValue = 0, vValue = 0, rgba = ui.val('rgba');
                    if (settings.color.mode == 'r')
                    {
                      hValue = rgba && rgba.b || 0;
                      vValue = rgba && rgba.g || 0;
                    }
                    else if (settings.color.mode == 'g')
                    {
                      hValue = rgba && rgba.b || 0;
                      vValue = rgba && rgba.r || 0;
                    }
                    else if (settings.color.mode == 'b')
                    {
                      hValue = rgba && rgba.r || 0;
                      vValue = rgba && rgba.g || 0;
                    }
                    var middle = vValue > hValue ? hValue : vValue;
                    setAlpha.call($this, colorBarL2, hValue > vValue ? Math.precision(((hValue - vValue) / (255 - vValue)) * 100, 4) : 0);
                    setAlpha.call($this, colorBarL3, vValue > hValue ? Math.precision(((vValue - hValue) / (255 - hValue)) * 100, 4) : 0);
                    setAlpha.call($this, colorBarL4, Math.precision((middle / 255) * 100, 4));
                    setAlpha.call($this, colorBarL5, Math.precision(((255 - (rgba && rgba.a || 0)) * 100) / 255, 4));
                    break;
                  case 'a':
                    var a = ui.val('a');
                    setBG.call($this, colorBarDiv, ui.val('hex') || '000000');
                    setAlpha.call($this, colorBarL5, a != null ? 0 : 100);
                    setAlpha.call($this, colorBarL6, a != null ? 100 : 0);
                    break;
                }
              },
            setBG =
              function(el, c)
              {
                el.css({ backgroundColor: c && c.length == 6 && '#' + c || 'transparent' });
              },
            setImg =
              function(img, src)
              {
                if (isLessThanIE7 && (src.indexOf('AlphaBar.png') != -1 || src.indexOf('Bars.png') != -1 || src.indexOf('Maps.png') != -1))
                {
                  img.attr('pngSrc', src);
                  img.css({ backgroundImage: 'none', filter: 'progid:DXImageTransform.Microsoft.AlphaImageLoader(src=\'' + src + '\', sizingMethod=\'scale\')' });
                }
                else img.css({ backgroundImage: 'url(\'' + src + '\')' });
              },
            setImgLoc =
              function(img, y)
              {
                img.css({ top: y + 'px' });
              },
            setAlpha =
              function(obj, alpha)
              {
                obj.css({ visibility: alpha > 0 ? 'visible' : 'hidden' });
                if (alpha > 0 && alpha < 100)
                {
                  if (isLessThanIE7)
                  {
                    var src = obj.attr('pngSrc');
                    if (src != null && (src.indexOf('AlphaBar.png') != -1 || src.indexOf('Bars.png') != -1 || src.indexOf('Maps.png') != -1))
                      obj.css({ filter: 'progid:DXImageTransform.Microsoft.AlphaImageLoader(src=\'' + src + '\', sizingMethod=\'scale\') progid:DXImageTransform.Microsoft.Alpha(opacity=' + alpha + ')' });
                    else obj.css({ opacity: Math.precision(alpha / 100, 4) });
                  }
                  else obj.css({ opacity: Math.precision(alpha / 100, 4) });
                }
                else if (alpha == 0 || alpha == 100)
                {
                  if (isLessThanIE7)
                  {
                    var src = obj.attr('pngSrc');
                    if (src != null && (src.indexOf('AlphaBar.png') != -1 || src.indexOf('Bars.png') != -1 || src.indexOf('Maps.png') != -1))
                      obj.css({ filter: 'progid:DXImageTransform.Microsoft.AlphaImageLoader(src=\'' + src + '\', sizingMethod=\'scale\')' });
                    else obj.css({ opacity: '' });
                  }
                  else obj.css({ opacity: '' });
                }
              },
            revertColor = // revert color to original color when opened
              function()
              {
                color.active.val('ahex', color.current.val('ahex'));
              },
            commitColor = // commit the color changes
              function()
              {
                color.current.val('ahex', color.active.val('ahex'));
              },
            radioClicked =
              function(e)
              {
                $(this).parents('tbody:first').find('input:radio[value!="'+e.target.value+'"]').removeAttr('checked');
                setColorMode.call($this, e.target.value);
              },
            currentClicked =
              function()
              {
                revertColor.call($this);
              },
            cancelClicked =
              function()
              {
                revertColor.call($this);
                settings.window.expandable && hide.call($this);
                $.isFunction(cancelCallback) && cancelCallback.call($this, color.active, cancelButton);
              },
            okClicked =
              function()
              {
                commitColor.call($this);
                settings.window.expandable && hide.call($this);
                $.isFunction(commitCallback) && commitCallback.call($this, color.active, okButton);
              },
            iconImageClicked =
              function()
              {
                show.call($this);
              },
            currentColorChanged =
              function(ui, context)
              {
                var hex = ui.val('hex');
                currentPreview.css({ backgroundColor: hex && '#' + hex || 'transparent' });
                setAlpha.call($this, currentPreview, Math.precision(((ui.val('a') || 0) * 100) / 255, 4));
              },
            expandableColorChanged =
              function(ui, context)
              {
                var hex = ui.val('hex');
                var va = ui.val('va');
                iconColor.css({ backgroundColor: hex && '#' + hex || 'transparent' });
                setAlpha.call($this, iconAlpha, Math.precision(((255 - (va && va.a || 0)) * 100) / 255, 4));
                if (settings.window.bindToInput&&settings.window.updateInputColor)
                  settings.window.input.css(
                    {
                      backgroundColor: hex && '#' + hex || 'transparent',
                      color: va == null || va.v > 75 ? '#000000' : '#ffffff',
                      textShadow: va == null || va.v > 75 ? '1px 1px 1px rgba(255,255,255,0.22)' : '1px 1px 1px rgba(0,0,0,0.22)'
                    });
              },
            moveBarMouseDown =
              function(e)
              {
                var element = settings.window.element, // local copies for YUI compressor
                  page = settings.window.page;
                elementStartX = parseInt(container.css('left'));
                elementStartY = parseInt(container.css('top'));
                pageStartX = e.pageX;
                pageStartY = e.pageY;
                // bind events to document to move window - we will unbind these on mouseup
                $(document).bind('mousemove', documentMouseMove).bind('mouseup', documentMouseUp);
                e.preventDefault(); // prevent attempted dragging of the column
              },
            documentMouseMove =
              function(e)
              {
                container.css({ left: elementStartX - (pageStartX - e.pageX) + 'px', top: elementStartY - (pageStartY - e.pageY) + 'px' });
                if (settings.window.expandable && !$.support.boxModel) container.prev().css({ left: container.css("left"), top: container.css("top") });
                e.stopPropagation();
                e.preventDefault();
                return false;
              },
            documentMouseUp =
              function(e)
              {
                $(document).unbind('mousemove', documentMouseMove).unbind('mouseup', documentMouseUp);
                e.stopPropagation();
                e.preventDefault();
                return false;
              },
            quickPickClicked =
              function(e)
              {
                e.preventDefault();
                e.stopPropagation();
                color.active.val('ahex', $(this).attr('title') || null, e.target);
                return false;
              },
            commitCallback = $.isFunction($arguments[1]) && $arguments[1] || null,
            liveCallback = $.isFunction($arguments[2]) && $arguments[2] || null,
            cancelCallback = $.isFunction($arguments[3]) && $arguments[3] || null,
            show =
              function()
              {
                color.current.val('ahex', color.active.val('ahex'));
                var attachIFrame = function()
                  {
                    if (!settings.window.expandable || $.support.boxModel) return;
                    var table = container.find('table:first');
                    container.before('<iframe/>');
                    container.prev().css({ width: table.width(), height: container.height(), opacity: 0, position: 'relative', left: container.css("left"), top: container.css("top") });
                  };
                if (settings.window.expandable)
                {
                  $(document.body).children('div.jPicker.Container').css({zIndex:100000});
                  container.css({zIndex:200000});
                }
                switch (settings.window.effects.type)
                {
                  case 'fade':
                    container.fadeIn(settings.window.effects.speed.show, attachIFrame);
                    break;
                  case 'slide':
                    container.slideDown(settings.window.effects.speed.show, attachIFrame);
                    break;
                  case 'show':
                  default:
                    container.show(settings.window.effects.speed.show, attachIFrame);
                    break;
                }
              },
            hide =
              function()
              {
                var removeIFrame = function()
                  {
                    if (settings.window.expandable) container.css({ zIndex: 100000 });
                    if (!settings.window.expandable || $.support.boxModel) return;
                    container.prev().remove();
                  };
                switch (settings.window.effects.type)
                {
                  case 'fade':
                    container.fadeOut(settings.window.effects.speed.hide, removeIFrame);
                    break;
                  case 'slide':
                    container.slideUp(settings.window.effects.speed.hide, removeIFrame);
                    break;
                  case 'show':
                  default:
                    container.hide(settings.window.effects.speed.hide, removeIFrame);
                    break;
                }
              },
            initialize =
              function()
              {
                var win = settings.window,
                    popup = win.expandable ? $($this).prev().find('.Container:first') : null;
                container = win.expandable ? $('<div/>') : $($this);
                container.addClass('jPicker Container');
                if (win.expandable) container.hide();
                container.get(0).onselectstart = function(event){ if (event.target.nodeName.toLowerCase() !== 'input') return false; };
                // inject html source code - we are using a single table for this control - I know tables are considered bad, but it takes care of equal height columns and
                // this control really is tabular data, so I believe it is the right move
                var all = color.active.val('all');
                if (win.alphaPrecision < 0) win.alphaPrecision = 0;
                else if (win.alphaPrecision > 2) win.alphaPrecision = 2;
                var controlHtml='<table class="jPicker" cellpadding="0" cellspacing="0"><tbody>' + (win.expandable ? '<tr><td class="Move" colspan="5">&nbsp;</td></tr>' : '') + '<tr><td rowspan="9"><h2 class="Title">' + (win.title || localization.text.title) + '</h2><div class="Map"><span class="Map1">&nbsp;</span><span class="Map2">&nbsp;</span><span class="Map3">&nbsp;</span><img src="' + images.clientPath + images.colorMap.arrow.file + '" class="Arrow"/></div></td><td rowspan="9"><div class="Bar"><span class="Map1">&nbsp;</span><span class="Map2">&nbsp;</span><span class="Map3">&nbsp;</span><span class="Map4">&nbsp;</span><span class="Map5">&nbsp;</span><span class="Map6">&nbsp;</span><img src="' + images.clientPath + images.colorBar.arrow.file + '" class="Arrow"/></div></td><td colspan="2" class="Preview">' + localization.text.newColor + '<div><span class="Active" title="' + localization.tooltips.colors.newColor + '">&nbsp;</span><span class="Current" title="' + localization.tooltips.colors.currentColor + '">&nbsp;</span></div>' + localization.text.currentColor + '</td><td rowspan="9" class="Button"><input type="button" class="Ok" value="' + localization.text.ok + '" title="' + localization.tooltips.buttons.ok + '"/><input type="button" class="Cancel" value="' + localization.text.cancel + '" title="' + localization.tooltips.buttons.cancel + '"/><hr/><div class="Grid">&nbsp;</div></td></tr><tr class="Hue"><td class="Radio"><label title="' + localization.tooltips.hue.radio + '"><input type="radio" value="h"' + (settings.color.mode == 'h' ? ' checked="checked"' : '') + '/>H:</label></td><td class="Text"><input type="text" maxlength="3" value="' + (all != null ? all.h : '') + '" title="' + localization.tooltips.hue.textbox + '"/>&nbsp;&deg;</td></tr><tr class="Saturation"><td class="Radio"><label title="' + localization.tooltips.saturation.radio + '"><input type="radio" value="s"' + (settings.color.mode == 's' ? ' checked="checked"' : '') + '/>S:</label></td><td class="Text"><input type="text" maxlength="3" value="' + (all != null ? all.s : '') + '" title="' + localization.tooltips.saturation.textbox + '"/>&nbsp;%</td></tr><tr class="Value"><td class="Radio"><label title="' + localization.tooltips.value.radio + '"><input type="radio" value="v"' + (settings.color.mode == 'v' ? ' checked="checked"' : '') + '/>V:</label><br/><br/></td><td class="Text"><input type="text" maxlength="3" value="' + (all != null ? all.v : '') + '" title="' + localization.tooltips.value.textbox + '"/>&nbsp;%<br/><br/></td></tr><tr class="Red"><td class="Radio"><label title="' + localization.tooltips.red.radio + '"><input type="radio" value="r"' + (settings.color.mode == 'r' ? ' checked="checked"' : '') + '/>R:</label></td><td class="Text"><input type="text" maxlength="3" value="' + (all != null ? all.r : '') + '" title="' + localization.tooltips.red.textbox + '"/></td></tr><tr class="Green"><td class="Radio"><label title="' + localization.tooltips.green.radio + '"><input type="radio" value="g"' + (settings.color.mode == 'g' ? ' checked="checked"' : '') + '/>G:</label></td><td class="Text"><input type="text" maxlength="3" value="' + (all != null ? all.g : '') + '" title="' + localization.tooltips.green.textbox + '"/></td></tr><tr class="Blue"><td class="Radio"><label title="' + localization.tooltips.blue.radio + '"><input type="radio" value="b"' + (settings.color.mode == 'b' ? ' checked="checked"' : '') + '/>B:</label></td><td class="Text"><input type="text" maxlength="3" value="' + (all != null ? all.b : '') + '" title="' + localization.tooltips.blue.textbox + '"/></td></tr><tr class="Alpha"><td class="Radio">' + (win.alphaSupport ? '<label title="' + localization.tooltips.alpha.radio + '"><input type="radio" value="a"' + (settings.color.mode == 'a' ? ' checked="checked"' : '') + '/>A:</label>' : '&nbsp;') + '</td><td class="Text">' + (win.alphaSupport ? '<input type="text" maxlength="' + (3 + win.alphaPrecision) + '" value="' + (all != null ? Math.precision((all.a * 100) / 255, win.alphaPrecision) : '') + '" title="' + localization.tooltips.alpha.textbox + '"/>&nbsp;%' : '&nbsp;') + '</td></tr><tr class="Hex"><td colspan="2" class="Text"><label title="' + localization.tooltips.hex.textbox + '">#:<input type="text" maxlength="6" class="Hex" value="' + (all != null ? all.hex : '') + '"/></label>' + (win.alphaSupport ? '<input type="text" maxlength="2" class="AHex" value="' + (all != null ? all.ahex.substring(6) : '') + '" title="' + localization.tooltips.hex.alpha + '"/></td>' : '&nbsp;') + '</tr></tbody></table>';
                if (win.expandable)
                {
                  container.html(controlHtml);
                  if($(document.body).children('div.jPicker.Container').length==0)$(document.body).prepend(container);
                  else $(document.body).children('div.jPicker.Container:last').after(container);
                  container.mousedown(
                    function()
                    {
                      $(document.body).children('div.jPicker.Container').css({zIndex:100000});
                      container.css({zIndex:200000});
                    });
                  container.css( // positions must be set and display set to absolute before source code injection or IE will size the container to fit the window
                    {
                      left:
                        win.position.x == 'left' ? (popup.offset().left - 530 - (win.position.y == 'center' ? 25 : 0)) + 'px' :
                        win.position.x == 'center' ? (popup.offset().left - 260) + 'px' :
                        win.position.x == 'right' ? (popup.offset().left - 10 + (win.position.y == 'center' ? 25 : 0)) + 'px' :
                        win.position.x == 'screenCenter' ? (($(document).width() >> 1) - 260) + 'px' : (popup.offset().left + parseInt(win.position.x)) + 'px',
                      position: 'fixed',
                      top: win.position.y == 'top' ? 100 + 'px' :
                           win.position.y == 'center' ? (popup.offset().top - 156) + 'px' :
                           win.position.y == 'bottom' ? (popup.offset().top + 25) + 'px' : (popup.offset().top + parseInt(win.position.y)) + 'px'
                    });
                }
                else
                {
                  container = $($this);
                  container.html(controlHtml);
                }
                // initialize the objects to the source code just injected
                var tbody = container.find('tbody:first');
                colorMapDiv = tbody.find('div.Map:first');
                colorBarDiv = tbody.find('div.Bar:first');
                var MapMaps = colorMapDiv.find('span'),
                    BarMaps = colorBarDiv.find('span');
                colorMapL1 = MapMaps.filter('.Map1:first');
                colorMapL2 = MapMaps.filter('.Map2:first');
                colorMapL3 = MapMaps.filter('.Map3:first');
                colorBarL1 = BarMaps.filter('.Map1:first');
                colorBarL2 = BarMaps.filter('.Map2:first');
                colorBarL3 = BarMaps.filter('.Map3:first');
                colorBarL4 = BarMaps.filter('.Map4:first');
                colorBarL5 = BarMaps.filter('.Map5:first');
                colorBarL6 = BarMaps.filter('.Map6:first');
                // create color pickers and maps
                colorMap = new Slider(colorMapDiv,
                  {
                    map:
                    {
                      width: images.colorMap.width,
                      height: images.colorMap.height
                    },
                    arrow:
                    {
                      image: images.clientPath + images.colorMap.arrow.file,
                      width: images.colorMap.arrow.width,
                      height: images.colorMap.arrow.height
                    }
                  });
                colorMap.bind(mapValueChanged);
                colorBar = new Slider(colorBarDiv,
                  {
                    map:
                    {
                      width: images.colorBar.width,
                      height: images.colorBar.height
                    },
                    arrow:
                    {
                      image: images.clientPath + images.colorBar.arrow.file,
                      width: images.colorBar.arrow.width,
                      height: images.colorBar.arrow.height
                    }
                  });
                colorBar.bind(colorBarValueChanged);
                colorPicker = new ColorValuePicker(tbody, color.active, win.expandable && win.bindToInput ? win.input : null, win.alphaPrecision);
                var hex = all != null ? all.hex : null,
                    preview = tbody.find('.Preview'),
                    button = tbody.find('.Button');
                activePreview = preview.find('.Active:first').css({ backgroundColor: hex && '#' + hex || 'transparent' });
                currentPreview = preview.find('.Current:first').css({ backgroundColor: hex && '#' + hex || 'transparent' }).bind('click', currentClicked);
                setAlpha.call($this, currentPreview, Math.precision(color.current.val('a') * 100) / 255, 4);
                okButton = button.find('.Ok:first').bind('click', okClicked);
                cancelButton = button.find('.Cancel:first').bind('click', cancelClicked);
                grid = button.find('.Grid:first');
                setTimeout(
                  function()
                  {
                    setImg.call($this, colorMapL1, images.clientPath + 'Maps.png');
                    setImg.call($this, colorMapL2, images.clientPath + 'Maps.png');
                    setImg.call($this, colorMapL3, images.clientPath + 'map-opacity.png');
                    setImg.call($this, colorBarL1, images.clientPath + 'Bars.png');
                    setImg.call($this, colorBarL2, images.clientPath + 'Bars.png');
                    setImg.call($this, colorBarL3, images.clientPath + 'Bars.png');
                    setImg.call($this, colorBarL4, images.clientPath + 'Bars.png');
                    setImg.call($this, colorBarL5, images.clientPath + 'bar-opacity.png');
                    setImg.call($this, colorBarL6, images.clientPath + 'AlphaBar.png');
                    setImg.call($this, preview.find('div:first'), images.clientPath + 'preview-opacity.png');
                  }, 0);
                tbody.find('td.Radio input').bind('click', radioClicked);
                // initialize quick list
                if (color.quickList && color.quickList.length > 0)
                {
                  var html = '';
                  for (i = 0; i < color.quickList.length; i++)
                  {
                    /* if default colors are hex strings, change them to color objects */
                    if ((typeof (color.quickList[i])).toString().toLowerCase() == 'string') color.quickList[i] = new Color({ hex: color.quickList[i] });
                    var alpha = color.quickList[i].val('a');
                    var ahex = color.quickList[i].val('ahex');
                    if (!win.alphaSupport && ahex) ahex = ahex.substring(0, 6) + 'ff';
                    var quickHex = color.quickList[i].val('hex');
                    html+='<span class="QuickColor"' + (ahex && ' title="#' + ahex + '"' || '') + ' style="background-color:' + (quickHex && '#' + quickHex || '') + ';' + (quickHex ? '' : 'background-image:url(' + images.clientPath + 'NoColor.png)') + (win.alphaSupport && alpha && alpha < 255 ? ';opacity:' + Math.precision(alpha / 255, 4) + ';filter:Alpha(opacity=' + Math.precision(alpha / 2.55, 4) + ')' : '') + '">&nbsp;</span>';
                  }
                  setImg.call($this, grid, images.clientPath + 'bar-opacity.png');
                  grid.html(html);
                  grid.find('.QuickColor').click(quickPickClicked);
                }
                setColorMode.call($this, settings.color.mode);
                color.active.bind(activeColorChanged);
                $.isFunction(liveCallback) && color.active.bind(liveCallback);
                color.current.bind(currentColorChanged);
                // bind to input
                if (win.expandable)
                {
                  $this.icon = popup.parents('.Icon:first');
                  iconColor = $this.icon.find('.Color:first').css({ backgroundColor: hex && '#' + hex || 'transparent' });
                  iconAlpha = $this.icon.find('.Alpha:first');
                  setImg.call($this, iconAlpha, images.clientPath + 'bar-opacity.png');
                  setAlpha.call($this, iconAlpha, Math.precision(((255 - (all != null ? all.a : 0)) * 100) / 255, 4));
                  iconImage = $this.icon.find('.Image .ImageIcon:first').css(
                    {
                      background: 'url(\'' + images.clientPath + images.picker.file + '\') center center no-repeat',
                      width: '100%',
                      height: '100%',
                      position: 'absolute',
                      paddingLeft: '2px'
                    }).bind('click', iconImageClicked);
                  if (win.bindToInput&&win.updateInputColor)
                    win.input.css(
                      {
                        backgroundColor: hex && '#' + hex || 'transparent',
                        color: all == null || all.v > 75 ? '#000000' : '#ffffff',
                        textShadow: all == null || all.v > 75 ? '1px 1px 1px rgba(255,255,255,0.22)' : '1px 1px 1px rgba(0,0,0,0.22)'
                      });
                  moveBar = tbody.find('.Move:first').bind('mousedown', moveBarMouseDown);
                  color.active.bind(expandableColorChanged);
                }
                else show.call($this);
              },
            destroy =
              function()
              {
                container.find('td.Radio input').unbind('click', radioClicked);
                currentPreview.unbind('click', currentClicked);
                cancelButton.unbind('click', cancelClicked);
                okButton.unbind('click', okClicked);
                if (settings.window.expandable)
                {
                  iconImage.unbind('click', iconImageClicked);
                  moveBar.unbind('mousedown', moveBarMouseDown);
                  $this.icon = null;
                }
                container.find('.QuickColor').unbind('click', quickPickClicked);
                colorMapDiv = null;
                colorBarDiv = null;
                colorMapL1 = null;
                colorMapL2 = null;
                colorMapL3 = null;
                colorBarL1 = null;
                colorBarL2 = null;
                colorBarL3 = null;
                colorBarL4 = null;
                colorBarL5 = null;
                colorBarL6 = null;
                colorMap.destroy();
                colorMap = null;
                colorBar.destroy();
                colorBar = null;
                colorPicker.destroy();
                colorPicker = null;
                activePreview = null;
                currentPreview = null;
                okButton = null;
                cancelButton = null;
                grid = null;
                commitCallback = null;
                cancelCallback = null;
                liveCallback = null;
                container.html('');
                for (i = 0; i < List.length; i++) if (List[i] == $this) List.splice(i, 1);
              },
            images = settings.images, // local copies for YUI compressor
            localization = settings.localization,
            color =
              {
                active: (typeof(settings.color.active)).toString().toLowerCase() == 'string' ? new Color({ ahex: !settings.window.alphaSupport && settings.color.active ? settings.color.active.substring(0, 6) + 'ff' : settings.color.active }) : new Color({ ahex: !settings.window.alphaSupport && settings.color.active.val('ahex') ? settings.color.active.val('ahex').substring(0, 6) + 'ff' : settings.color.active.val('ahex') }),
                current: (typeof(settings.color.active)).toString().toLowerCase() == 'string' ? new Color({ ahex: !settings.window.alphaSupport && settings.color.active ? settings.color.active.substring(0, 6) + 'ff' : settings.color.active }) : new Color({ ahex: !settings.window.alphaSupport && settings.color.active.val('ahex') ? settings.color.active.val('ahex').substring(0, 6) + 'ff' : settings.color.active.val('ahex') }),
                quickList: settings.color.quickList
              };
          $.extend(true, $this, // public properties, methods, and callbacks
            {
              commitCallback: commitCallback, // commitCallback function can be overridden to return the selected color to a method you specify when the user clicks "OK"
              liveCallback: liveCallback, // liveCallback function can be overridden to return the selected color to a method you specify in live mode (continuous update)
              cancelCallback: cancelCallback, // cancelCallback function can be overridden to a method you specify when the user clicks "Cancel"
              color: color,
              show: show,
              hide: hide,
              destroy: destroy // destroys this control entirely, removing all events and objects, and removing itself from the List
            });
          List.push($this);
          setTimeout(
            function()
            {
              initialize.call($this);
            }, 0);
        });
    };
  $.fn.jPicker.defaults = /* jPicker defaults - you can change anything in this section (such as the clientPath to your images) without fear of breaking the program */
      {
      window:
        {
          title: null, /* any title for the jPicker window itself - displays "Drag Markers To Pick A Color" if left null */
          effects:
          {
            type: 'fade', /* effect used to show/hide an expandable picker. Acceptable values "slide", "show", "fade" */
            speed:
            {
              show: 'fast', /* duration of "show" effect. Acceptable values are "fast", "slow", or time in ms */
              hide: 'fast' /* duration of "hide" effect. Acceptable values are "fast", "slow", or time in ms */
            }
          },
          position:
          {
            x: 'screenCenter', /* acceptable values "left", "center", "right", "screenCenter", or relative px value */
            y: 'top' /* acceptable values "top", "bottom", "center", or relative px value */
          },
          expandable: false, /* default to large static picker - set to true to make an expandable picker (small icon with popup) - set automatically when binded to input element */
          liveUpdate: true, /* set false if you want the user to have to click "OK" before the binded input box updates values (always "true" for expandable picker) */
          alphaSupport: false, /* set to true to enable alpha picking */
          alphaPrecision: 0, /* set decimal precision for alpha percentage display - hex codes do not map directly to percentage integers - range 0-2 */
          updateInputColor: true /* set to false to prevent binded input colors from changing */
        },
      color:
        {
          mode: 'h', /* acceptabled values "h" (hue), "s" (saturation), "v" (value), "r" (red), "g" (green), "b" (blue), "a" (alpha) */
          active: new Color({ ahex: '#ffcc00ff' }), /* acceptable values are any declared $.jPicker.Color object or string HEX value (e.g. #ffc000) WITH OR WITHOUT the "#" prefix */
          quickList: /* the quick pick color list */
            [
              new Color({ h: 360, s: 33, v: 100 }), /* acceptable values are any declared $.jPicker.Color object or string HEX value (e.g. #ffc000) WITH OR WITHOUT the "#" prefix */
              new Color({ h: 360, s: 66, v: 100 }),
              new Color({ h: 360, s: 100, v: 100 }),
              new Color({ h: 360, s: 100, v: 75 }),
              new Color({ h: 360, s: 100, v: 50 }),
              new Color({ h: 180, s: 0, v: 100 }),
              new Color({ h: 30, s: 33, v: 100 }),
              new Color({ h: 30, s: 66, v: 100 }),
              new Color({ h: 30, s: 100, v: 100 }),
              new Color({ h: 30, s: 100, v: 75 }),
              new Color({ h: 30, s: 100, v: 50 }),
              new Color({ h: 180, s: 0, v: 90 }),
              new Color({ h: 60, s: 33, v: 100 }),
              new Color({ h: 60, s: 66, v: 100 }),
              new Color({ h: 60, s: 100, v: 100 }),
              new Color({ h: 60, s: 100, v: 75 }),
              new Color({ h: 60, s: 100, v: 50 }),
              new Color({ h: 180, s: 0, v: 80 }),
              new Color({ h: 90, s: 33, v: 100 }),
              new Color({ h: 90, s: 66, v: 100 }),
              new Color({ h: 90, s: 100, v: 100 }),
              new Color({ h: 90, s: 100, v: 75 }),
              new Color({ h: 90, s: 100, v: 50 }),
              new Color({ h: 180, s: 0, v: 70 }),
              new Color({ h: 120, s: 33, v: 100 }),
              new Color({ h: 120, s: 66, v: 100 }),
              new Color({ h: 120, s: 100, v: 100 }),
              new Color({ h: 120, s: 100, v: 75 }),
              new Color({ h: 120, s: 100, v: 50 }),
              new Color({ h: 180, s: 0, v: 60 }),
              new Color({ h: 150, s: 33, v: 100 }),
              new Color({ h: 150, s: 66, v: 100 }),
              new Color({ h: 150, s: 100, v: 100 }),
              new Color({ h: 150, s: 100, v: 75 }),
              new Color({ h: 150, s: 100, v: 50 }),
              new Color({ h: 180, s: 0, v: 50 }),
              new Color({ h: 180, s: 33, v: 100 }),
              new Color({ h: 180, s: 66, v: 100 }),
              new Color({ h: 180, s: 100, v: 100 }),
              new Color({ h: 180, s: 100, v: 75 }),
              new Color({ h: 180, s: 100, v: 50 }),
              new Color({ h: 180, s: 0, v: 40 }),
              new Color({ h: 210, s: 33, v: 100 }),
              new Color({ h: 210, s: 66, v: 100 }),
              new Color({ h: 210, s: 100, v: 100 }),
              new Color({ h: 210, s: 100, v: 75 }),
              new Color({ h: 210, s: 100, v: 50 }),
              new Color({ h: 180, s: 0, v: 30 }),
              new Color({ h: 240, s: 33, v: 100 }),
              new Color({ h: 240, s: 66, v: 100 }),
              new Color({ h: 240, s: 100, v: 100 }),
              new Color({ h: 240, s: 100, v: 75 }),
              new Color({ h: 240, s: 100, v: 50 }),
              new Color({ h: 180, s: 0, v: 20 }),
              new Color({ h: 270, s: 33, v: 100 }),
              new Color({ h: 270, s: 66, v: 100 }),
              new Color({ h: 270, s: 100, v: 100 }),
              new Color({ h: 270, s: 100, v: 75 }),
              new Color({ h: 270, s: 100, v: 50 }),
              new Color({ h: 180, s: 0, v: 10 }),
              new Color({ h: 300, s: 33, v: 100 }),
              new Color({ h: 300, s: 66, v: 100 }),
              new Color({ h: 300, s: 100, v: 100 }),
              new Color({ h: 300, s: 100, v: 75 }),
              new Color({ h: 300, s: 100, v: 50 }),
              new Color({ h: 180, s: 0, v: 0 }),
              new Color({ h: 330, s: 33, v: 100 }),
              new Color({ h: 330, s: 66, v: 100 }),
              new Color({ h: 330, s: 100, v: 100 }),
              new Color({ h: 330, s: 100, v: 75 }),
              new Color({ h: 330, s: 100, v: 50 }),
              new Color({ h: 180, s: 10, v: 0 })
            ]
        },
      images:
        {
          clientPath: '/jPicker/images/', /* Path to image files */
          colorMap:
          {
            width: 256,
            height: 256,
            arrow:
            {
              file: 'mappoint.gif', /* ColorMap arrow icon */
              width: 15,
              height: 15
            }
          },
          colorBar:
          {
            width: 20,
            height: 256,
            arrow:
            {
              file: 'rangearrows.gif', /* ColorBar arrow icon */
              width: 20,
              height: 7
            }
          },
          picker:
          {
            file: 'brush.png', /* Color Picker icon */
            width: 17,
            height: 16
          }
        },
      localization: /* alter these to change the text presented by the picker (e.g. different language) */
        {
          text:
          {
            title: 'Drag Markers To Pick A Color',
            newColor: 'new',
            currentColor: 'current',
            ok: 'OK',
            cancel: 'Cancel'
          },
          tooltips:
          {
            colors:
            {
              newColor: 'New Color - Press &ldquo;OK&rdquo; To Commit',
              currentColor: 'Click To Revert To Original Color'
            },
            buttons:
            {
              ok: 'Commit To This Color Selection',
              cancel: 'Cancel And Revert To Original Color'
            },
            hue:
            {
              radio: 'Set To &ldquo;Hue&rdquo; Color Mode',
              textbox: 'Enter A &ldquo;Hue&rdquo; Value (0-360&deg;)'
            },
            saturation:
            {
              radio: 'Set To &ldquo;Saturation&rdquo; Color Mode',
              textbox: 'Enter A &ldquo;Saturation&rdquo; Value (0-100%)'
            },
            value:
            {
              radio: 'Set To &ldquo;Value&rdquo; Color Mode',
              textbox: 'Enter A &ldquo;Value&rdquo; Value (0-100%)'
            },
            red:
            {
              radio: 'Set To &ldquo;Red&rdquo; Color Mode',
              textbox: 'Enter A &ldquo;Red&rdquo; Value (0-255)'
            },
            green:
            {
              radio: 'Set To &ldquo;Green&rdquo; Color Mode',
              textbox: 'Enter A &ldquo;Green&rdquo; Value (0-255)'
            },
            blue:
            {
              radio: 'Set To &ldquo;Blue&rdquo; Color Mode',
              textbox: 'Enter A &ldquo;Blue&rdquo; Value (0-255)'
            },
            alpha:
            {
              radio: 'Set To &ldquo;Alpha&rdquo; Color Mode',
              textbox: 'Enter A &ldquo;Alpha&rdquo; Value (0-100)'
            },
            hex:
            {
              textbox: 'Enter A &ldquo;Hex&rdquo; Color Value (#000000-#ffffff)',
              alpha: 'Enter A &ldquo;Alpha&rdquo; Value (#00-#ff)'
            }
          }
        }
    };
})(jQuery, '1.1.6');
jQuery.noConflict();


function OfflajnfireEvent(element,event){
    if ((document.createEventObject && !dojo.isIE) || (document.createEventObject && dojo.isIE && dojo.isIE < 9)){
      var evt = document.createEventObject();
      return element.fireEvent('on'+event,evt);
    }else{
      var evt = document.createEvent("HTMLEvents");
      evt.initEvent(event, true, true );
      return !element.dispatchEvent(evt);
    }
}


dojo.declare("OfflajnRadio", null, {
	constructor: function(args) {
	 dojo.mixin(this,args);
   this.selected = -1;
	 this.init();
  },
  
  init: function() {
    this.hidden = dojo.byId(this.id);
    this.hidden.radioobj = this;
    dojo.connect(this.hidden, 'change', this, 'reset');
    this.container = dojo.byId('offlajnradiocontainer' + this.id);
    this.items = dojo.query('.radioelement', this.container);
    if(this.mode == "image") this.imgitems = dojo.query('.radioelement_img', this.container);
    dojo.forEach(this.items, function(item, i){
      if(this.hidden.value == this.values[i]) this.selected = i;
      dojo.connect(item, 'onclick', dojo.hitch(this, 'selectItem', i));
    }, this);
    
    this.reset();
  },
  
  reset: function(){
    var i = this.map[this.hidden.value];
    if(!i) i = 0;
    this.selectItem(i);
  },
  
  selectItem: function(i) {
    if(this.selected == i) {
      if(this.mode == "image") this.changeImage(i);
     return;
    }
    if(this.selected >= 0) dojo.removeClass(this.items[this.selected], 'selected');
    if(this.mode == "image") this.changeImage(i);
    this.selected = i;
    dojo.addClass(this.items[this.selected], 'selected');
    if(this.hidden.value != this.values[this.selected]){
      this.hidden.value = this.values[this.selected];
      this.fireEvent(this.hidden, 'change');
    }
  },
  
  changeImage: function(i) {
    dojo.style(this.imgitems[this.selected], 'backgroundPosition', '0px 0px');
    dojo.style(this.imgitems[i], 'backgroundPosition', '0px -8px');
  },

  fireEvent: function(element,event){
    if ((document.createEventObject && !dojo.isIE) || (document.createEventObject && dojo.isIE && dojo.isIE < 9)){
      var evt = document.createEventObject();
      return element.fireEvent('on'+event,evt);
    }else{
      var evt = document.createEvent("HTMLEvents");
      evt.initEvent(event, true, true );
      return !element.dispatchEvent(evt);
    }
  }
});



dojo.declare("OfflajnSwitcher", null, {
	constructor: function(args) {
	 dojo.mixin(this,args);
   this.w = 11;
	 this.init();
  },
  
  
  init: function() {
    this.switcher = dojo.byId('offlajnswitcher_inner' + this.id);
    this.input = dojo.byId(this.id);
    this.state = this.map[this.input.value];
    this.click = dojo.connect(this.switcher, 'onclick', this, 'controller');
    dojo.connect(this.input, 'onchange', this, 'setValue');
    this.elements = new Array();
    this.getUnits();
    this.setSwitcher();
  },
  
  getUnits: function() {
    var units = dojo.create('div', {'class': 'offlajnswitcher_units' }, this.switcher.parentNode, "after");
    dojo.forEach(this.units, function(item, i){
      this.elements[i] = dojo.create('span', {'class': 'offlajnswitcher_unit', 'innerHTML': item }, units);
      if(this.mode) {
        this.elements[i].innerHTML = '';
        this.elements[i] = dojo.create('img', {'src': this.url + item }, this.elements[i]);
      }     
      this.elements[i].i = i;
      dojo.connect(this.elements[i], 'onclick', this, 'selectUnit');
    }, this);
  },
  
  getBgpos: function() {
    var pos = dojo.style(this.switcher, 'backgroundPosition');
    if(dojo.isIE <= 8){
      pos = dojo.style(this.switcher, 'backgroundPositionX')+' '+dojo.style(this.switcher, 'backgroundPositionY');
    }
    var bgp = pos.split(' ');
    bgp[1] = parseInt(bgp[1]);
    return !bgp[1] ? 0 : bgp[1];
  },
  
  selectUnit: function(e) {
    this.state = (e.target.i) ? 0 : 1;
    this.controller();
  },
  
  setSelected: function() {
    var s = (this.state) ? 0 : 1;
    dojo.removeClass(this.elements[s], 'selected');
    dojo.addClass(this.elements[this.state], 'selected');
  },
  
  controller: function() {
    if(this.anim) this.anim.stop();
    this.state ? this.setSecond() : this.setFirst();
  },
  
  
  setValue: function() {
    if(this.values[this.state] != this.input.value) {
      this.controller();
    }
  },
  
  setSwitcher: function() {
    (this.state) ? this.setFirst() : this.setSecond();
  },
  
  changeState: function(state){
    if(this.state != state){
      this.state = state;
      this.stateChanged();
    }
    this.setSelected();
  },  
  
  stateChanged: function(){
    this.input.value = this.values[this.state];
    this.fireEvent(this.input, 'change'); 
  },

  fireEvent: function(element,event){
    if ((document.createEventObject && !dojo.isIE) || (document.createEventObject && dojo.isIE && dojo.isIE < 9)){
      var evt = document.createEventObject();
      return element.fireEvent('on'+event,evt);
    }else{
      var evt = document.createEvent("HTMLEvents");
      evt.initEvent(event, true, true );
      return !element.dispatchEvent(evt);
    }
  },
  
  setFirst: function() {
    this.changeState(1);
    var bgp = this.getBgpos();
    this.anim = new dojo.Animation({
      curve: new dojo._Line(bgp, 0),
      node: this.switcher,
      duration: 200,
      onAnimate: function(){
				var str = "center " + Math.floor(arguments[0])+"px";
				dojo.style(this.node,"backgroundPosition",str);
			}
    }).play();
  },
  
  
  setSecond: function() {
    this.changeState(0);  
    var bgp = this.getBgpos();
    this.anim = new dojo.Animation({
      curve: new dojo._Line(bgp, -1*this.w),
      node: this.switcher,
      duration: 200,
      onAnimate: function(){
				var str =  "center " + Math.floor(arguments[0])+"px";
				dojo.style(this.node,"backgroundPosition",str);
			}
    }).play();
  }
  
});


dojo.declare("OfflajnOnOff", null, {
	constructor: function(args) {
	 dojo.mixin(this,args);
   this.w = 26;
	 this.init();
  },
  
  
  init: function() {
    this.switcher = dojo.byId('offlajnonoff' + this.id);
    this.input = dojo.byId(this.id);
    this.state = parseInt(this.input.value);
    this.click = dojo.connect(this.switcher, 'onclick', this, 'controller');
    if(this.mode == 'button') {
      this.img = dojo.query('.onoffbutton_img', this.switcher);
      if(dojo.hasClass(this.switcher, 'selected')) dojo.style(this.img[0], 'backgroundPosition', '0px -11px'); 
    } else {
      dojo.connect(this.switcher, 'onmousedown', this, 'mousedown');
    }
    dojo.connect(this.input, 'onchange', this, 'setValue');
  },
  
  controller: function() {
    if(!this.mode) {
      if(this.anim) this.anim.stop();
      this.state ? this.setOff() : this.setOn();
    } else if(this.mode == "button") {
      this.state ? this.setBtnOff() : this.setBtnOn();
    }
  },
    
  setBtnOn: function() {
    dojo.style(this.img[0], 'backgroundPosition', '0px -11px');
    dojo.addClass(this.switcher, 'selected');
    this.changeState(1);
  },
  
  setBtnOff: function() {
    dojo.style(this.img[0], 'backgroundPosition', '0px 0px');
    dojo.removeClass(this.switcher, 'selected');
    this.changeState(0);
  },
  
  setValue: function() {
    if(this.state != this.input.value) {
      this.controller();
    }
  },
  
  changeState: function(state){
    if(this.state != state){
      this.state = state;
      this.stateChanged();
    }
  },  
  
  stateChanged: function(){
    this.input.value = this.state;
    this.fireEvent(this.input, 'change'); 
  },
  
  mousedown: function(e){
    this.startState = this.state;
    this.move = dojo.connect(document, 'onmousemove', this, 'mousemove');
    this.up = dojo.connect(document, 'onmouseup', this, 'mouseup');
    this.startX = e.clientX;
  },
  
  mousemove: function(e){
    var x = e.clientX-this.startX;
    if(!this.startState) x-=this.w;
    if(x > 0){
      x = 0;
      this.changeState(1);
    }
    if(x < -1*this.w){
      x = -1*this.w;
      this.changeState(0);
    }
		var str = x+"px 0px";
    dojo.style(this.switcher,"backgroundPosition",str);
  },
  
  mouseup: function(e){
    dojo.disconnect(this.move);
    dojo.disconnect(this.up);
  },

  fireEvent: function(element,event){
    if ((document.createEventObject && !dojo.isIE) || (document.createEventObject && dojo.isIE && dojo.isIE < 9)){
      var evt = document.createEventObject();
      return element.fireEvent('on'+event,evt);
    }else{
      var evt = document.createEvent("HTMLEvents");
      evt.initEvent(event, true, true );
      return !element.dispatchEvent(evt);
    }
  },
  
  getBgpos: function() {
    var pos = dojo.style(this.switcher, 'backgroundPosition');
    if(dojo.isIE <= 8){
      pos = dojo.style(this.switcher, 'backgroundPositionX')+' '+dojo.style(this.switcher, 'backgroundPositionY');
    }
    var bgp = pos.split(' ');
    bgp[0] = parseInt(bgp[0]);
    return !bgp[0] ? 0 : bgp[0];
  },
  
  setOn: function() {
    this.changeState(1);
    
    this.anim = new dojo.Animation({
      curve: new dojo._Line(this.getBgpos(),0),
      node: this.switcher,
      onAnimate: function(){
				var str = Math.floor(arguments[0])+"px 0px";
				dojo.style(this.node,"backgroundPosition",str);
			}
    }).play();
  },
  
  
  setOff: function() {
    this.changeState(0);
      
    this.anim = new dojo.Animation({
      curve: new dojo._Line(this.getBgpos(), -1*this.w),
      node: this.switcher,
      onAnimate: function(){
				var str = Math.floor(arguments[0])+"px 0px";
				dojo.style(this.node,"backgroundPosition",str);
			}
    }).play();
  }
  
});

/*
	Copyright (c) 2004-2011, The Dojo Foundation All Rights Reserved.
	Available via Academic Free License >= 2.1 OR the modified BSD license.
	see: http://dojotoolkit.org/license for details
*/


if(!dojo._hasResource["dojo.window"]){
dojo._hasResource["dojo.window"]=true;
dojo.provide("dojo.window");
dojo.getObject("window",true,dojo);
dojo.window.getBox=function(){
var _1=(dojo.doc.compatMode=="BackCompat")?dojo.body():dojo.doc.documentElement;
var _2=dojo._docScroll();
return {w:_1.clientWidth,h:_1.clientHeight,l:_2.x,t:_2.y};
};
dojo.window.get=function(_3){
if(dojo.isIE&&window!==document.parentWindow){
_3.parentWindow.execScript("document._parentWindow = window;","Javascript");
var _4=_3._parentWindow;
_3._parentWindow=null;
return _4;
}
return _3.parentWindow||_3.defaultView;
};
dojo.window.scrollIntoView=function(_5,_6){
try{
_5=dojo.byId(_5);
var _7=_5.ownerDocument||dojo.doc,_8=_7.body||dojo.body(),_9=_7.documentElement||_8.parentNode,_a=dojo.isIE,_b=dojo.isWebKit;
if((!(dojo.isMoz||_a||_b||dojo.isOpera)||_5==_8||_5==_9)&&(typeof _5.scrollIntoView!="undefined")){
_5.scrollIntoView(false);
return;
}
var _c=_7.compatMode=="BackCompat",_d=(_a>=9&&_5.ownerDocument.parentWindow.frameElement)?((_9.clientHeight>0&&_9.clientWidth>0&&(_8.clientHeight==0||_8.clientWidth==0||_8.clientHeight>_9.clientHeight||_8.clientWidth>_9.clientWidth))?_9:_8):(_c?_8:_9),_e=_b?_8:_d,_f=_d.clientWidth,_10=_d.clientHeight,rtl=!dojo._isBodyLtr(),_11=_6||dojo.position(_5),el=_5.parentNode,_12=function(el){
return ((_a<=6||(_a&&_c))?false:(dojo.style(el,"position").toLowerCase()=="fixed"));
};
if(_12(_5)){
return;
}
while(el){
if(el==_8){
el=_e;
}
var _13=dojo.position(el),_14=_12(el);
if(el==_e){
_13.w=_f;
_13.h=_10;
if(_e==_9&&_a&&rtl){
_13.x+=_e.offsetWidth-_13.w;
}
if(_13.x<0||!_a){
_13.x=0;
}
if(_13.y<0||!_a){
_13.y=0;
}
}else{
var pb=dojo._getPadBorderExtents(el);
_13.w-=pb.w;
_13.h-=pb.h;
_13.x+=pb.l;
_13.y+=pb.t;
var _15=el.clientWidth,_16=_13.w-_15;
if(_15>0&&_16>0){
_13.w=_15;
_13.x+=(rtl&&(_a||el.clientLeft>pb.l))?_16:0;
}
_15=el.clientHeight;
_16=_13.h-_15;
if(_15>0&&_16>0){
_13.h=_15;
}
}
if(_14){
if(_13.y<0){
_13.h+=_13.y;
_13.y=0;
}
if(_13.x<0){
_13.w+=_13.x;
_13.x=0;
}
if(_13.y+_13.h>_10){
_13.h=_10-_13.y;
}
if(_13.x+_13.w>_f){
_13.w=_f-_13.x;
}
}
var l=_11.x-_13.x,t=_11.y-Math.max(_13.y,0),r=l+_11.w-_13.w,bot=t+_11.h-_13.h;
if(r*l>0){
var s=Math[l<0?"max":"min"](l,r);
if(rtl&&((_a==8&&!_c)||_a>=9)){
s=-s;
}
_11.x+=el.scrollLeft;
el.scrollLeft+=s;
_11.x-=el.scrollLeft;
}
if(bot*t>0){
_11.y+=el.scrollTop;
el.scrollTop+=Math[t<0?"max":"min"](t,bot);
_11.y-=el.scrollTop;
}
el=(el!=_e)&&!_14&&el.parentNode;
}
}
catch(error){
console.error("scrollIntoView: "+error);
_5.scrollIntoView(false);
}
};
}

dojo.require("dojo.window");

dojo.declare("FontConfigurator", null, {
	constructor: function(args) {  
    dojo.mixin(this,args);
    window.loadedFont = {};
    this.init();
  },
  
  
  init: function() {
    this.btn = dojo.byId(this.id+'change');
    dojo.connect(this.btn, 'onclick', this, 'showWindow');    
    this.settings = dojo.clone(this.origsettings);
    this.hidden = dojo.byId(this.id);
    dojo.connect(this.hidden, 'onchange', this, 'reset');
    this.reset();
  },
  
  reset: function(){  
    if(this.hidden.value == '') this.hidden.value = dojo.toJson(this.settings);        
    if(this.hidden.value != dojo.toJson(this.settings)){
      var newsettings = {};
      try{            
        newsettings = dojo.fromJson(this.hidden.value.replace(/\\"/g, '"'));
        if(dojo.isArray(newsettings)){
          newsettings = {};
        }                
      }catch(e){
        this.hidden.value = dojo.toJson(newsettings);
      }      
      for(var s in this.origsettings){
        if(!newsettings[s]){
          newsettings[s] = this.origsettings[s];
        }
      } 
      this.settings = this.origsettings = newsettings;
    }
  },
  
  showOverlay: function(){
    if(!this.overlayBG){
      this.overlayBG = dojo.create('div',{'class': 'blackBg'}, dojo.body());
    }
    dojo.removeClass(this.overlayBG, 'hide');
    dojo.style(this.overlayBG,{
      'opacity': 0.3
    });
  },
  
  showWindow: function(e){
    dojo.stopEvent(e);
    this.showOverlay();
    if(!this.window){
      this.window = dojo.create('div', {'class': 'OfflajnWindowFont'}, dojo.body());
      var closeBtn = dojo.create('div', {'class': 'OfflajnWindowClose'}, this.window);
      dojo.connect(closeBtn, 'onclick', this, 'closeWindow');
      var inner = dojo.create('div', {'class': 'OfflajnWindowInner'}, this.window);
      var h3 = dojo.create('h3', {'innerHTML': 'Font selector'+this.elements.tab['html']}, inner);
      
      this.reset = dojo.create('div', {'class': 'offlajnfont_reset hasOfflajnTip', 'tooltippos': 'T','title' : 'It will clear the settings on the current tab.', 'innerHTML': '<div class="offlajnfont_reset_img"></div>'}, h3);
      dojo.global.toolTips.connectToolTips(h3);
      dojo.connect(this.reset, 'onclick', this, 'resetValues');
      
      this.tab = dojo.byId(this.id+'tab');
      
      dojo.connect(this.tab, 'change', this, 'changeTab');

      dojo.create('div', {'class': 'OfflajnWindowLine'}, inner);
      var fields = dojo.create('div', {'class': 'OfflajnWindowFields'}, inner);
      
      
      dojo.create('div', {'class': 'OfflajnWindowField', 'innerHTML': 'Type<br />'+this.elements.type['html']}, fields);
      this.type = dojo.byId(this.elements.type.id);

      this.familyc = dojo.create('div', {'class': 'OfflajnWindowField'}, fields);
      
      
      dojo.create('div', {'class': 'OfflajnWindowField', 'innerHTML': 'Size<br />'+this.elements.size['html']}, fields);
      this.size = dojo.byId(this.elements.size['id']);
      
      dojo.create('div', {'class': 'OfflajnWindowField', 'innerHTML': 'Color<br />'+this.elements.color['html']}, fields);
      this.color = dojo.byId(this.elements.color['id']);
      
      dojo.create('div', {'class': 'OfflajnWindowField', 'innerHTML': 'Decoration<br />'+this.elements.bold['html']+this.elements.italic['html']+this.elements.underline['html']}, fields);
      this.bold = dojo.byId(this.elements.bold['id']);
      this.italic = dojo.byId(this.elements.italic['id']);
      this.underline = dojo.byId(this.elements.underline['id']);
      
      dojo.create('div', {'class': 'OfflajnWindowField', 'innerHTML': 'Align<br />'+this.elements.align['html']}, fields);
      this.align = dojo.byId(this.elements.align['id']);
      
      dojo.create('div', {'class': 'OfflajnWindowField', 'innerHTML': 'Alternative font<br />'+this.elements.afont['html']}, fields);
      this.afont = dojo.byId(this.elements.afont['id']);
      
      dojo.create('div', {'class': 'OfflajnWindowField', 'innerHTML': 'Text shadow<br />'+this.elements.tshadow['html']}, fields);
      this.tshadow = dojo.byId(this.elements.tshadow['id']);
      
      dojo.create('div', {'class': 'OfflajnWindowField', 'innerHTML': 'Line height<br />'+this.elements.lineheight['html']}, fields);
      this.lineheight = dojo.byId(this.elements.lineheight['id']);
      
      dojo.create('div', {'class': 'OfflajnWindowTester', 'innerHTML': '<span>Grumpy wizards make toxic brew for the evil Queen and Jack.</span>'}, inner);
      this.tester = dojo.query('.OfflajnWindowTester span', inner)[0];
      var saveCont = dojo.create('div', {'class': 'OfflajnWindowSaveContainer'}, inner);
      var savebtn = dojo.create('div', {'class': 'OfflajnWindowSave', 'innerHTML': 'SAVE'}, saveCont);
      dojo.connect(savebtn, 'onclick', this, 'save');
      eval(this.script);
      
      
      dojo.connect(this.type, 'change', this, 'changeType');
      dojo.connect(this.size, 'change', dojo.hitch(this, 'changeSet', 'size'));
      dojo.connect(this.size, 'change', this, 'changeSize');
      dojo.connect(this.color, 'change', dojo.hitch(this, 'changeSet', 'color'));
      dojo.connect(this.color, 'change', this, 'changeColor');
      dojo.connect(this.bold, 'change', dojo.hitch(this, 'changeSet', 'bold'));
      dojo.connect(this.bold, 'change', this, 'changeWeight');
      dojo.connect(this.italic, 'change', dojo.hitch(this, 'changeSet', 'italic'));
      dojo.connect(this.italic, 'change', this, 'changeItalic');
      dojo.connect(this.underline, 'change', dojo.hitch(this, 'changeSet', 'underline'));
      dojo.connect(this.underline, 'change', this, 'changeUnderline');
      dojo.connect(this.afont, 'change', dojo.hitch(this, 'changeSet', 'afont'));
      dojo.connect(this.afont, 'change', this, 'changeFamily');
      dojo.connect(this.align, 'change', dojo.hitch(this, 'changeSet', 'align'));
      dojo.connect(this.align, 'change', this, 'changeAlign');
      dojo.connect(this.tshadow, 'change', dojo.hitch(this, 'changeSet', 'tshadow'));
      dojo.connect(this.tshadow, 'change', this, 'changeTshadow');
      dojo.connect(this.lineheight, 'change', dojo.hitch(this, 'changeSet', 'lineheight'));
      dojo.connect(this.lineheight, 'change', this, 'changeLineheight');
      
      dojo.addOnLoad(this, function(){
        this.changeTab();
        this.changeType();
      });
    }else{
      this.settings = dojo.fromJson(this.hidden.value.replace(/\\"/g, '"'));
      this.loadSettings();
    }
    dojo.removeClass(this.window, 'hide');
    this.exit = dojo.connect(document, "onkeypress", this, "keyPressed");
  },
  
  closeWindow: function(){
    dojo.addClass(this.window, 'hide');
    dojo.addClass(this.overlayBG, 'hide');
  },
  
  save: function(){  
    this.hidden.value = dojo.toJson(this.settings);
    this.closeWindow();
  },
  
  loadSettings: function(){
    if(this.defaultTab!=this.t){
      this._loadSettings(this.defaultTab, true);
    }
    this._loadSettings(this.t, false);
    this.refreshFont();
  },
  
  _loadSettings: function(tab, def){
    var set = this.settings[tab];
    for(s in set){
      if(this[s] && (!def || def && !this.settings[this.t][s])){
        this.changeHidden(this[s], set[s]);
      }
    }
  },
  
  resetValues: function() {
    if(this.t != this.defaultTab) {
      this.settings[this.t] = {};
      this.loadSettings();
    }
  },
  
  loadFamily: function(e){
    dojo.stopEvent(e);
    var list = this.family.listobj;
    
    this.maxIteminWindow = parseInt(list.scrollbar.windowHeight/list.lineHeight)+1;
    this.loadFamilyScroll();
    list.scrollbar.onScroll = dojo.hitch(this, 'loadFamilyScroll');
  },
  
  loadFamilyScroll: function(){
    var set = this.settings[this.t];
    var list = this.family.listobj;
    var start = parseInt(list.scrollbar.curr*-1/list.lineHeight);
    for(var i = start; i <= start+this.maxIteminWindow && i < list.list.length; i++){
      var item = list.list[i];
      var option = list.options[i].value;
      this.loadGoogleFont(set.subset, option);
      dojo.style(item, 'fontFamily', "'"+option+"'");
    }
  },
  
  loadGoogleFont: function(subset, family, weight, italic){
    if(!weight) weight = 400;
    italic ? italic = 'italic' : italic = '';
    var hash = subset+family+weight+italic;
    if(!window.loadedFont[hash]){
      window.loadedFont[hash] = true; 
      setTimeout(function(){
        dojo.create('link', {rel:'stylesheet', type: 'text/css', href: 'http://fonts.googleapis.com/css?family='+family+':'+weight+italic+'&subset='+subset}, dojo.body())
      },500);
    } 
  },
  
  changeType: function(e){
    if(e){
      var obj = e.target.listobj;
      if(obj.map[obj.hidden.value] != obj.hidden.selectedIndex) return;
    }
    var set = this.settings[this.t];
    set.type = this.type.value;
    if(!this.elements.type[set.type]){
      if(!this.family){
        this.familyc.innerHTML = 'Family<br />'+this.elements.type['Latin']['html'];
        this.family = dojo.byId(this.elements.type['Latin']['id']);
        eval(this.elements.type['Latin']['script']);
      }
      dojo.addOnLoad(this, function(){
        dojo.style(this.family.listobj.container,'visibility', 'hidden');
      });
      set.family = '';
      this.changeFamily();
      return;
    }
    this.familyc.innerHTML = 'Family<br />'+this.elements.type[set.type]['html'];
    this.family = dojo.byId(this.elements.type[set.type]['id']);
    
    dojo.connect(this.family, 'change', dojo.hitch(this, 'changeSet', 'family'));
    dojo.connect(this.family, 'click', this, 'loadFamily');
    dojo.connect(this.family, 'change', this, 'refreshFont');
    eval(this.elements.type[set.type]['script']);
    if(set.family){
      dojo.addOnLoad(this, function(){
        var set = this.settings[this.t];
        this.changeHidden(this.family, set.family);
      });
    }
    var subset = this.type.value;
    if(subset == 'LatinExtended'){
      subset = 'latin,latin-ext';
    }else if(subset == 'CyrillicExtended'){
      subset = 'cyrillic,cyrillic-ext';
    }else if(subset == 'GreekExtended'){
      subset = 'greek,greek-ext';
    }
    set.subset = subset;
  },
  
  changeSet: function(name, e){
    var set = this.settings[this.t];
    set[name] = e.target.value;
  },
  
  refreshFont: function(){
    var set = this.settings[this.t];
    if(this.bold) this.changeWeight();
    if(this.italic) this.changeItalic();
    if(this.underline) this.changeUnderline();
    this.changeFamily();
    if(this.size) this.changeSize();
    if(this.color) this.changeColor();
    if(this.align) this.changeAlign();
    if(this.tshadow) this.changeTshadow();
    if(this.lineheight) this.changeLineheight();
  },
  
  changeWeight: function(){
    dojo.style(this.tester, 'fontWeight', (parseInt(this.bold.value) ? 'bold' : 'normal'));
  },
  
  changeItalic: function(){
    dojo.style(this.tester, 'fontStyle', (parseInt(this.italic.value) ? 'italic' : 'normal'));
  },
  
  changeUnderline: function(){
    dojo.style(this.tester, 'textDecoration', (parseInt(this.underline.value) ? 'underline' : 'none'));
  },
  
  changeFamily: function(){
    var set = this.settings[this.t];
    var f = '';
    if(this.family && set.type != '0'){
      f = "'"+this.family.value+"'";
      this.loadGoogleFont(set.subset, this.family.value, (this.bold && parseInt(this.bold.value) ? '700' : '400'), parseInt(this.italic.value));
    }
    if(this.afont){
      var afont = this.afont.value.split('||'); 
      if(afont[0] != '' && parseInt(afont[1])){
        if(f != '') f+=',';
        f+=afont[0];
      }
    }
    dojo.style(this.tester, 'fontFamily', f);
  },
  
  changeSize: function(){
    dojo.style(this.tester, 'fontSize', this.size.value.replace('||', '') );
  },
  
  changeColor: function(){
    dojo.style(this.tester, 'color', '#'+this.color.value );
  },
  
  changeAlign: function(){
    dojo.style(this.tester.parentNode, 'textAlign', this.align.value );
  },
  
  changeTshadow: function(){
    var s = this.tshadow.value.replace(/\|\|/g,'').split('|*|');
    var shadow = '';
    if(parseInt(s[4])){
      s[4] = '';
      if (s[3].length > 6) {
        var c = s[3].match(/(..)(..)(..)(..)/);
        s[3]='rgba('+Number('0x'+c[1])+','+Number('0x'+c[2])+','+Number('0x'+c[3])+','+Number('0x'+c[4])/255.+')';
      } else s[3] = '#'+s[3];
      shadow = s.join(' ');
    }
    dojo.style(this.tester, 'textShadow', shadow);
  },
  
  changeLineheight: function(){
    dojo.style(this.tester, 'lineHeight', this.lineheight.value);
  },
  
  changeTab: function(){
    var radio = this.tab.radioobj;
    this.t = this.tab.value;
    if(this.t != this.defaultTab){
      dojo.style(this.reset,'display','block');
    }else{
      dojo.style(this.reset,'display','none');
    }
    this.loadSettings();
  },
  
  changeHidden: function(el, value){
    if(el.value == value) return;
    el.value = value;
    this.fireEvent(el, 'change');
  },

  fireEvent: function(element,event){
    if ((document.createEventObject && !dojo.isIE) || (document.createEventObject && dojo.isIE && dojo.isIE < 9)){
      var evt = document.createEventObject();
      return element.fireEvent('on'+event,evt);
    }else{
      var evt = document.createEvent("HTMLEvents");
      evt.initEvent(event, true, true );
      return !element.dispatchEvent(evt);
    }
  },
  
  keyPressed: function(e) {
    if(e.keyCode == 27) { 
      this.closeWindow();
      dojo.disconnect(this.exit);
    }
  }
});

dojo.addOnLoad(function(){
      new OfflajnList({
        name: "paramsskin",
        elements: "<div class=\"content\"><div class=\"listelement\">Custom<\/div><div class=\"listelement\">Darkblue<\/div><div class=\"listelement\">Darkgreen<\/div><div class=\"listelement\">Darkorange<\/div><div class=\"listelement\">Darkred<\/div><div class=\"listelement\">Darkpurple<\/div><\/div>",
        options: [{"value":"custom","text":"Custom"},{"value":"default_darkblue","text":"Darkblue"},{"value":"default_darkgreen","text":"Darkgreen"},{"value":"default_darkorange","text":"Darkorange"},{"value":"default_darkred","text":"Darkred"},{"value":"default_darkpurple","text":"Darkpurple"}],
        selectedIndex: 0,
        height: 0,
        fireshow: 0
      });
    

      window.skin = new OfflajnSkin({
        name: "skin",
        id: "paramsskin",
        data: {"default_darkblue":{"outerborder":"**|*|232323","bgcolor":"ffffff","tabbg":"3e3e3e|*|188DD9","controllfont":"{\"Text\":{\"type\":\"Latin\",\"family\":\"PT Sans Narrow\",\"size\":\"20||px\",\"color\":\"FFFFFF\",\"bold\":\"1\",\"italic\":\"0\",\"underline\":\"0\",\"align\":\"left\",\"afont\":\"Arial, Helvetica||1\",\"tshadow\":\"0||px|*|1||px|*|1||px|*|000000|*|1|*|\",\"lineheight\":\"33px\"}}","headingfont":"{\"Heading\":{\"type\":\"Latin\",\"family\":\"PT Sans\",\"subset\":\"Latin\",\"size\":\"30||px\",\"color\":\"188DD9\",\"bold\":\"1\",\"italic\":\"0\",\"underline\":\"0\",\"align\":\"left\",\"afont\":\"Arial, Helvetica||1\",\"tshadow\":\"0||px|*|0||px|*|0||px|*|ffffff|*|0|*|\",\"lineheight\":\"normal\"}, \"Subheading\":{\"color\":\"3E3E3E\",\"tshadow\":\"0||px|*|0||px|*|0||px|*|ffffff|*|0|*|\",\"size\":\"15||px\",\"bold\":\"0\",\"italic\":\"1\"}}","paragraphfont":"{\"Paragraph\":{\"type\":\"Latin\",\"family\":\"PT Sans\",\"subset\":\"Latin\",\"size\":\"14||px\",\"color\":\"3e3e3e\",\"bold\":\"0\",\"italic\":\"0\",\"underline\":\"0\",\"align\":\"left\",\"afont\":\"Arial, Helvetica||1\",\"tshadow\":\"0||px|*|0||px|*|0||px|*|ffffff|*|0|*|\",\"lineheight\":\"18px\"},\"Link\":{\"color\":\"188dd9\"},\"Tag\":{\"color\":\"e4eaee\",\"bold\":\"1\",\"tshadow\":\"1||px|*|1||px|*|1||px|*|000000|*|1|*|\",\"lineheight\":\"23px\",\"size\":\"12||px\"}}","readmorefont":"{\"Small\":{\"type\":\"0\",\"size\":\"11||px\",\"color\":\"188DD9\",\"bold\":\"0\",\"italic\":\"0\",\"underline\":\"0\",\"align\":\"left\",\"afont\":\"Verdana, Arial, Helvetica||1\",\"tshadow\":\"0||px|*|0||px|*|0||px|*|ffffff|*|0|*|\",\"lineheight\":\"normal\"}, \"Big\":{\"type\":\"Latin\",\"family\":\"PT Sans\",\"size\":\"12||px\",\"color\":\"E4EAEE\",\"bold\":\"1\",\"italic\":\"0\",\"underline\":\"0\",\"align\":\"left\",\"afont\":\"Arial, Helvetica||1\",\"tshadow\":\"1||px|*|1||px|*|1||px|*|000000|*|1|*|\"}}","captionfont":"{\"Tag\":{\"type\":\"0\",\"size\":\"11||px\",\"color\":\"FFFFFF\",\"bold\":\"1\",\"italic\":\"0\",\"underline\":\"0\",\"align\":\"left\",\"afont\":\"Arial, Helvetica||1\",\"tshadow\":\"1||px|*|1||px|*|1||px|*|000000|*|0|*|\",\"lineheight\":\"normal\"},\"Title\":{\"type\":\"Latin\",\"family\":\"PT Sans\",\"size\":\"24||px\"},\"Paragraph\":{\"type\":\"Latin\",\"family\":\"PT Sans\",\"size\":\"13||px\",\"bold\":\"0\"},\"Link\":{\"type\":\"Latin\",\"family\":\"PT Sans\",\"size\":\"13||px\",\"bold\":\"0\"}}"},"default_darkgreen":{"outerborder":"**|*|232323","bgcolor":"ffffff","tabbg":"3e3e3e|*|87b801","controllfont":"{\"Text\":{\"color\":\"FFFFFF\"}}","headingfont":"{\"Heading\":{\"color\":\"87b801\"}, \"Subheading\":{\"color\":\"3E3E3E\"}}","paragraphfont":"{\"Paragraph\":{\"color\":\"188DD9\"}, \"Link\":{\"color\":\"188DD9\"}, \"Tag\":{\"color\":\"E4EAEE\"}}","readmorefont":"{\"Small\":{\"color\":\"87b801\"}, \"Big\":{\"color\":\"E4EAEE\"}}","captionfont":"{\"Tag\":{\"color\":\"FFFFFF\"}}"},"default_darkorange":{"outerborder":"**|*|232323","bgcolor":"ffffff","tabbg":"3e3e3e|*|fb7400","controllfont":"{\"Text\":{\"color\":\"FFFFFF\"}}","headingfont":"{\"Heading\":{\"color\":\"fb7400\"}, \"Subheading\":{\"color\":\"3E3E3E\"}}","paragraphfont":"{\"Paragraph\":{\"color\":\"188DD9\"}, \"Link\":{\"color\":\"188DD9\"}, \"Tag\":{\"color\":\"E4EAEE\"}}","readmorefont":"{\"Small\":{\"color\":\"fb7400\"}, \"Big\":{\"color\":\"E4EAEE\"}}","captionfont":"{\"Tag\":{\"color\":\"FFFFFF\"}}"},"default_darkred":{"outerborder":"**|*|232323","bgcolor":"ffffff","tabbg":"3e3e3e|*|bd161f","controllfont":"{\"Text\":{\"color\":\"FFFFFF\"}}","headingfont":"{\"Heading\":{\"color\":\"bd161f\"}, \"Subheading\":{\"color\":\"3E3E3E\"}}","paragraphfont":"{\"Paragraph\":{\"color\":\"188DD9\"}, \"Link\":{\"color\":\"188DD9\"}, \"Tag\":{\"color\":\"E4EAEE\"}}","readmorefont":"{\"Small\":{\"color\":\"bd161f\"}, \"Big\":{\"color\":\"E4EAEE\"}}","captionfont":"{\"Tag\":{\"color\":\"FFFFFF\"}}"},"default_darkpurple":{"outerborder":"**|*|232323","bgcolor":"ffffff","tabbg":"3e3e3e|*|823FCD","controllfont":"{\"Text\":{\"color\":\"FFFFFF\"}}","headingfont":"{\"Heading\":{\"color\":\"823FCD\"}, \"Subheading\":{\"color\":\"3E3E3E\"}}","paragraphfont":"{\"Paragraph\":{\"color\":\"188DD9\"}, \"Link\":{\"color\":\"188DD9\"}, \"Tag\":{\"color\":\"E4EAEE\"}}","readmorefont":"{\"Small\":{\"color\":\"823FCD\"}, \"Big\":{\"color\":\"E4EAEE\"}}","captionfont":"{\"Tag\":{\"color\":\"FFFFFF\"}}"}},
        control: "params",
        dependency: ''
      });
    

      new OfflajnText({
        id: "paramsouterborder0",
        validation: "int",
        attachunit: "px",
        mode: "",
        scale: "",
        minus: 0,
        onoff: ""
      }); 
    

    var el = dojo.byId("paramsouterborder1");
    jQuery.fn.jPicker.defaults.images.clientPath="http://localhost/thepdahoi.vn/wp-content/plugins/nextend-smart-slider-lite/joomla//modules/mod_smartslider/params/offlajndashboard/../offlajncolor/offlajncolor/jpicker/images/";
    el.alphaSupport=true; 
    el.c = jQuery("#paramsouterborder1").jPicker({
        window:{
          expandable: true,
          alphaSupport: true}
        });
    dojo.connect(el, "change", function(){
      this.c[0].color.active.val("hex", this.value);
    });
    

      new OfflajnCombine({
        id: "paramsouterborder",
        num: 2,
        switcherid: "",
        hideafter: "0"
      }); 
    

    var el = dojo.byId("paramsbgcolor");
    jQuery.fn.jPicker.defaults.images.clientPath="http://localhost/thepdahoi.vn/wp-content/plugins/nextend-smart-slider-lite/joomla//modules/mod_smartslider/params/offlajndashboard/../offlajncolor/offlajncolor/jpicker/images/";
    el.alphaSupport=true; 
    el.c = jQuery("#paramsbgcolor").jPicker({
        window:{
          expandable: true,
          alphaSupport: true}
        });
    dojo.connect(el, "change", function(){
      this.c[0].color.active.val("hex", this.value);
    });
    

    var el = dojo.byId("paramstabbg0");
    jQuery.fn.jPicker.defaults.images.clientPath="http://localhost/thepdahoi.vn/wp-content/plugins/nextend-smart-slider-lite/joomla//modules/mod_smartslider/params/offlajndashboard/../offlajncolor/offlajncolor/jpicker/images/";
    el.alphaSupport=false; 
    el.c = jQuery("#paramstabbg0").jPicker({
        window:{
          expandable: true,
          alphaSupport: false}
        });
    dojo.connect(el, "change", function(){
      this.c[0].color.active.val("hex", this.value);
    });
    

    var el = dojo.byId("paramstabbg1");
    jQuery.fn.jPicker.defaults.images.clientPath="http://localhost/thepdahoi.vn/wp-content/plugins/nextend-smart-slider-lite/joomla//modules/mod_smartslider/params/offlajndashboard/../offlajncolor/offlajncolor/jpicker/images/";
    el.alphaSupport=false; 
    el.c = jQuery("#paramstabbg1").jPicker({
        window:{
          expandable: true,
          alphaSupport: false}
        });
    dojo.connect(el, "change", function(){
      this.c[0].color.active.val("hex", this.value);
    });
    

      new OfflajnCombine({
        id: "paramstabbg",
        num: 2,
        switcherid: "",
        hideafter: "0"
      }); 
    

        new FontConfigurator({
          id: "paramscontrollfont",
          defaultTab: "Text",
          origsettings: {"Text":{}},
          elements: {"tab":{"name":"params[controllfont]tab","id":"paramscontrollfonttab","html":"<div class=\"offlajnradiocontainerbutton\" id=\"offlajnradiocontainerparamscontrollfonttab\"><div class=\"radioelement first last selected\">Text<\/div><div class=\"clear\"><\/div><\/div><input type=\"hidden\" id=\"paramscontrollfonttab\" name=\"params[controllfont]tab\" value=\"Text\"\/>"},"type":{"name":"params[controllfont]type","id":"paramscontrollfonttype","Cyrillic":{"name":"params[controllfont]family","id":"paramscontrollfontfamily","html":"<div style='position:relative;'><div id=\"offlajnlistcontainerparamscontrollfontfamily\" class=\"gk_hack offlajnlistcontainer\"><div class=\"gk_hack offlajnlist\"><span class=\"offlajnlistcurrent\">Open Sans<br \/>Andika<br \/>Anonymous Pro<br \/>Cuprum<br \/>Didact Gothic<br \/>EB Garamond<br \/>Istok Web<br \/>Jura<br \/>Forum<br \/>Kelly Slab<br \/>Lobster<br \/>Neucha<br \/>Open Sans<br \/>Open Sans Condensed<br \/>Philosopher<br \/>Play<br \/>PT Sans<br \/>PT Sans Caption<br \/>PT Sans Narrow<br \/>PT Serif<br \/>PT Serif Caption<br \/>Ruslan Display<br \/>Tenor Sans<br \/>Ubuntu<br \/><\/span><div class=\"offlajnlistbtn\"><span><\/span><\/div><\/div><input type=\"hidden\" name=\"params[controllfont]family\" id=\"paramscontrollfontfamily\" value=\"Open Sans\"\/><\/div><\/div>","script":"dojo.addOnLoad(function(){\n      new OfflajnList({\n        name: \"paramscontrollfontfamily\",\n        elements: \"<div class=\\\"content\\\"><div class=\\\"listelement\\\">Andika<\\\/div><div class=\\\"listelement\\\">Anonymous Pro<\\\/div><div class=\\\"listelement\\\">Cuprum<\\\/div><div class=\\\"listelement\\\">Didact Gothic<\\\/div><div class=\\\"listelement\\\">EB Garamond<\\\/div><div class=\\\"listelement\\\">Istok Web<\\\/div><div class=\\\"listelement\\\">Jura<\\\/div><div class=\\\"listelement\\\">Forum<\\\/div><div class=\\\"listelement\\\">Kelly Slab<\\\/div><div class=\\\"listelement\\\">Lobster<\\\/div><div class=\\\"listelement\\\">Neucha<\\\/div><div class=\\\"listelement\\\">Open Sans<\\\/div><div class=\\\"listelement\\\">Open Sans Condensed<\\\/div><div class=\\\"listelement\\\">Philosopher<\\\/div><div class=\\\"listelement\\\">Play<\\\/div><div class=\\\"listelement\\\">PT Sans<\\\/div><div class=\\\"listelement\\\">PT Sans Caption<\\\/div><div class=\\\"listelement\\\">PT Sans Narrow<\\\/div><div class=\\\"listelement\\\">PT Serif<\\\/div><div class=\\\"listelement\\\">PT Serif Caption<\\\/div><div class=\\\"listelement\\\">Ruslan Display<\\\/div><div class=\\\"listelement\\\">Tenor Sans<\\\/div><div class=\\\"listelement\\\">Ubuntu<\\\/div><\\\/div>\",\n        options: [{\"value\":\"Andika\",\"text\":\"Andika\"},{\"value\":\"Anonymous Pro\",\"text\":\"Anonymous Pro\"},{\"value\":\"Cuprum\",\"text\":\"Cuprum\"},{\"value\":\"Didact Gothic\",\"text\":\"Didact Gothic\"},{\"value\":\"EB Garamond\",\"text\":\"EB Garamond\"},{\"value\":\"Istok Web\",\"text\":\"Istok Web\"},{\"value\":\"Jura\",\"text\":\"Jura\"},{\"value\":\"Forum\",\"text\":\"Forum\"},{\"value\":\"Kelly Slab\",\"text\":\"Kelly Slab\"},{\"value\":\"Lobster\",\"text\":\"Lobster\"},{\"value\":\"Neucha\",\"text\":\"Neucha\"},{\"value\":\"Open Sans\",\"text\":\"Open Sans\"},{\"value\":\"Open Sans Condensed\",\"text\":\"Open Sans Condensed\"},{\"value\":\"Philosopher\",\"text\":\"Philosopher\"},{\"value\":\"Play\",\"text\":\"Play\"},{\"value\":\"PT Sans\",\"text\":\"PT Sans\"},{\"value\":\"PT Sans Caption\",\"text\":\"PT Sans Caption\"},{\"value\":\"PT Sans Narrow\",\"text\":\"PT Sans Narrow\"},{\"value\":\"PT Serif\",\"text\":\"PT Serif\"},{\"value\":\"PT Serif Caption\",\"text\":\"PT Serif Caption\"},{\"value\":\"Ruslan Display\",\"text\":\"Ruslan Display\"},{\"value\":\"Tenor Sans\",\"text\":\"Tenor Sans\"},{\"value\":\"Ubuntu\",\"text\":\"Ubuntu\"}],\n        selectedIndex: 11,\n        height: \"10\",\n        fireshow: 1\n      });\n    });"},"CyrillicExtended":{"name":"params[controllfont]family","id":"paramscontrollfontfamily","html":"<div style='position:relative;'><div id=\"offlajnlistcontainerparamscontrollfontfamily\" class=\"gk_hack offlajnlistcontainer\"><div class=\"gk_hack offlajnlist\"><span class=\"offlajnlistcurrent\">Open Sans<br \/>Andika<br \/>Anonymous Pro<br \/>Didact Gothic<br \/>EB Garamond<br \/>Istok Web<br \/>Jura<br \/>Forum<br \/>Lobster<br \/>Open Sans<br \/>Open Sans Condensed<br \/>Play<br \/>Ruslan Display<br \/>Tenor Sans<br \/>Ubuntu<br \/><\/span><div class=\"offlajnlistbtn\"><span><\/span><\/div><\/div><input type=\"hidden\" name=\"params[controllfont]family\" id=\"paramscontrollfontfamily\" value=\"Open Sans\"\/><\/div><\/div>","script":"dojo.addOnLoad(function(){\n      new OfflajnList({\n        name: \"paramscontrollfontfamily\",\n        elements: \"<div class=\\\"content\\\"><div class=\\\"listelement\\\">Andika<\\\/div><div class=\\\"listelement\\\">Anonymous Pro<\\\/div><div class=\\\"listelement\\\">Didact Gothic<\\\/div><div class=\\\"listelement\\\">EB Garamond<\\\/div><div class=\\\"listelement\\\">Istok Web<\\\/div><div class=\\\"listelement\\\">Jura<\\\/div><div class=\\\"listelement\\\">Forum<\\\/div><div class=\\\"listelement\\\">Lobster<\\\/div><div class=\\\"listelement\\\">Open Sans<\\\/div><div class=\\\"listelement\\\">Open Sans Condensed<\\\/div><div class=\\\"listelement\\\">Play<\\\/div><div class=\\\"listelement\\\">Ruslan Display<\\\/div><div class=\\\"listelement\\\">Tenor Sans<\\\/div><div class=\\\"listelement\\\">Ubuntu<\\\/div><\\\/div>\",\n        options: [{\"value\":\"Andika\",\"text\":\"Andika\"},{\"value\":\"Anonymous Pro\",\"text\":\"Anonymous Pro\"},{\"value\":\"Didact Gothic\",\"text\":\"Didact Gothic\"},{\"value\":\"EB Garamond\",\"text\":\"EB Garamond\"},{\"value\":\"Istok Web\",\"text\":\"Istok Web\"},{\"value\":\"Jura\",\"text\":\"Jura\"},{\"value\":\"Forum\",\"text\":\"Forum\"},{\"value\":\"Lobster\",\"text\":\"Lobster\"},{\"value\":\"Open Sans\",\"text\":\"Open Sans\"},{\"value\":\"Open Sans Condensed\",\"text\":\"Open Sans Condensed\"},{\"value\":\"Play\",\"text\":\"Play\"},{\"value\":\"Ruslan Display\",\"text\":\"Ruslan Display\"},{\"value\":\"Tenor Sans\",\"text\":\"Tenor Sans\"},{\"value\":\"Ubuntu\",\"text\":\"Ubuntu\"}],\n        selectedIndex: 8,\n        height: \"10\",\n        fireshow: 1\n      });\n    });"},"Greek":{"name":"params[controllfont]family","id":"paramscontrollfontfamily","html":"<div style='position:relative;'><div id=\"offlajnlistcontainerparamscontrollfontfamily\" class=\"gk_hack offlajnlistcontainer\"><div class=\"gk_hack offlajnlist\"><span class=\"offlajnlistcurrent\">Open Sans<br \/>Anonymous Pro<br \/>Caudex<br \/>Didact Gothic<br \/>Jura<br \/>GFS Didot<br \/>GFS Neohellenic<br \/>Nova Mono<br \/>Open Sans<br \/>Open Sans Condensed<br \/>Play<br \/>Ubuntu<br \/><\/span><div class=\"offlajnlistbtn\"><span><\/span><\/div><\/div><input type=\"hidden\" name=\"params[controllfont]family\" id=\"paramscontrollfontfamily\" value=\"Open Sans\"\/><\/div><\/div>","script":"dojo.addOnLoad(function(){\n      new OfflajnList({\n        name: \"paramscontrollfontfamily\",\n        elements: \"<div class=\\\"content\\\"><div class=\\\"listelement\\\">Anonymous Pro<\\\/div><div class=\\\"listelement\\\">Caudex<\\\/div><div class=\\\"listelement\\\">Didact Gothic<\\\/div><div class=\\\"listelement\\\">Jura<\\\/div><div class=\\\"listelement\\\">GFS Didot<\\\/div><div class=\\\"listelement\\\">GFS Neohellenic<\\\/div><div class=\\\"listelement\\\">Nova Mono<\\\/div><div class=\\\"listelement\\\">Open Sans<\\\/div><div class=\\\"listelement\\\">Open Sans Condensed<\\\/div><div class=\\\"listelement\\\">Play<\\\/div><div class=\\\"listelement\\\">Ubuntu<\\\/div><\\\/div>\",\n        options: [{\"value\":\"Anonymous Pro\",\"text\":\"Anonymous Pro\"},{\"value\":\"Caudex\",\"text\":\"Caudex\"},{\"value\":\"Didact Gothic\",\"text\":\"Didact Gothic\"},{\"value\":\"Jura\",\"text\":\"Jura\"},{\"value\":\"GFS Didot\",\"text\":\"GFS Didot\"},{\"value\":\"GFS Neohellenic\",\"text\":\"GFS Neohellenic\"},{\"value\":\"Nova Mono\",\"text\":\"Nova Mono\"},{\"value\":\"Open Sans\",\"text\":\"Open Sans\"},{\"value\":\"Open Sans Condensed\",\"text\":\"Open Sans Condensed\"},{\"value\":\"Play\",\"text\":\"Play\"},{\"value\":\"Ubuntu\",\"text\":\"Ubuntu\"}],\n        selectedIndex: 7,\n        height: \"10\",\n        fireshow: 1\n      });\n    });"},"GreekExtended":{"name":"params[controllfont]family","id":"paramscontrollfontfamily","html":"<div style='position:relative;'><div id=\"offlajnlistcontainerparamscontrollfontfamily\" class=\"gk_hack offlajnlistcontainer\"><div class=\"gk_hack offlajnlist\"><span class=\"offlajnlistcurrent\">Open Sans<br \/>Anonymous Pro<br \/>Caudex<br \/>Didact Gothic<br \/>Jura<br \/>Open Sans<br \/>Open Sans Condensed<br \/>Play<br \/>Ubuntu<br \/><\/span><div class=\"offlajnlistbtn\"><span><\/span><\/div><\/div><input type=\"hidden\" name=\"params[controllfont]family\" id=\"paramscontrollfontfamily\" value=\"Open Sans\"\/><\/div><\/div>","script":"dojo.addOnLoad(function(){\n      new OfflajnList({\n        name: \"paramscontrollfontfamily\",\n        elements: \"<div class=\\\"content\\\"><div class=\\\"listelement\\\">Anonymous Pro<\\\/div><div class=\\\"listelement\\\">Caudex<\\\/div><div class=\\\"listelement\\\">Didact Gothic<\\\/div><div class=\\\"listelement\\\">Jura<\\\/div><div class=\\\"listelement\\\">Open Sans<\\\/div><div class=\\\"listelement\\\">Open Sans Condensed<\\\/div><div class=\\\"listelement\\\">Play<\\\/div><div class=\\\"listelement\\\">Ubuntu<\\\/div><\\\/div>\",\n        options: [{\"value\":\"Anonymous Pro\",\"text\":\"Anonymous Pro\"},{\"value\":\"Caudex\",\"text\":\"Caudex\"},{\"value\":\"Didact Gothic\",\"text\":\"Didact Gothic\"},{\"value\":\"Jura\",\"text\":\"Jura\"},{\"value\":\"Open Sans\",\"text\":\"Open Sans\"},{\"value\":\"Open Sans Condensed\",\"text\":\"Open Sans Condensed\"},{\"value\":\"Play\",\"text\":\"Play\"},{\"value\":\"Ubuntu\",\"text\":\"Ubuntu\"}],\n        selectedIndex: 4,\n        height: \"10\",\n        fireshow: 1\n      });\n    });"},"Khmer":{"name":"params[controllfont]family","id":"paramscontrollfontfamily","html":"<div style='position:relative;'><div id=\"offlajnlistcontainerparamscontrollfontfamily\" class=\"gk_hack offlajnlistcontainer\"><div class=\"gk_hack offlajnlist\"><span class=\"offlajnlistcurrent\">Angkor<br \/>Angkor<br \/>Battambang<br \/>Bayon<br \/>Bokor<br \/>Chenla<br \/>Content<br \/>Dangrek<br \/>Freehand<br \/>Hanuman<br \/>Khmer<br \/>Koulen<br \/>Metal<br \/>Moul<br \/>Moulpali<br \/>Odor Mean Chey<br \/>Preahvihear<br \/>Siemreap<br \/>Suwannaphum<br \/>Taprom<br \/><\/span><div class=\"offlajnlistbtn\"><span><\/span><\/div><\/div><input type=\"hidden\" name=\"params[controllfont]family\" id=\"paramscontrollfontfamily\" value=\"Angkor\"\/><\/div><\/div>","script":"dojo.addOnLoad(function(){\n      new OfflajnList({\n        name: \"paramscontrollfontfamily\",\n        elements: \"<div class=\\\"content\\\"><div class=\\\"listelement\\\">Angkor<\\\/div><div class=\\\"listelement\\\">Battambang<\\\/div><div class=\\\"listelement\\\">Bayon<\\\/div><div class=\\\"listelement\\\">Bokor<\\\/div><div class=\\\"listelement\\\">Chenla<\\\/div><div class=\\\"listelement\\\">Content<\\\/div><div class=\\\"listelement\\\">Dangrek<\\\/div><div class=\\\"listelement\\\">Freehand<\\\/div><div class=\\\"listelement\\\">Hanuman<\\\/div><div class=\\\"listelement\\\">Khmer<\\\/div><div class=\\\"listelement\\\">Koulen<\\\/div><div class=\\\"listelement\\\">Metal<\\\/div><div class=\\\"listelement\\\">Moul<\\\/div><div class=\\\"listelement\\\">Moulpali<\\\/div><div class=\\\"listelement\\\">Odor Mean Chey<\\\/div><div class=\\\"listelement\\\">Preahvihear<\\\/div><div class=\\\"listelement\\\">Siemreap<\\\/div><div class=\\\"listelement\\\">Suwannaphum<\\\/div><div class=\\\"listelement\\\">Taprom<\\\/div><\\\/div>\",\n        options: [{\"value\":\"Angkor\",\"text\":\"Angkor\"},{\"value\":\"Battambang\",\"text\":\"Battambang\"},{\"value\":\"Bayon\",\"text\":\"Bayon\"},{\"value\":\"Bokor\",\"text\":\"Bokor\"},{\"value\":\"Chenla\",\"text\":\"Chenla\"},{\"value\":\"Content\",\"text\":\"Content\"},{\"value\":\"Dangrek\",\"text\":\"Dangrek\"},{\"value\":\"Freehand\",\"text\":\"Freehand\"},{\"value\":\"Hanuman\",\"text\":\"Hanuman\"},{\"value\":\"Khmer\",\"text\":\"Khmer\"},{\"value\":\"Koulen\",\"text\":\"Koulen\"},{\"value\":\"Metal\",\"text\":\"Metal\"},{\"value\":\"Moul\",\"text\":\"Moul\"},{\"value\":\"Moulpali\",\"text\":\"Moulpali\"},{\"value\":\"Odor Mean Chey\",\"text\":\"Odor Mean Chey\"},{\"value\":\"Preahvihear\",\"text\":\"Preahvihear\"},{\"value\":\"Siemreap\",\"text\":\"Siemreap\"},{\"value\":\"Suwannaphum\",\"text\":\"Suwannaphum\"},{\"value\":\"Taprom\",\"text\":\"Taprom\"}],\n        selectedIndex: 0,\n        height: \"10\",\n        fireshow: 1\n      });\n    });"},"Latin":{"name":"params[controllfont]family","id":"paramscontrollfontfamily","html":"<div style='position:relative;'><div id=\"offlajnlistcontainerparamscontrollfontfamily\" class=\"gk_hack offlajnlistcontainer\"><div class=\"gk_hack offlajnlist\"><span class=\"offlajnlistcurrent\">Open Sans<br \/>Abel<br \/>Abril Fatface<br \/>Aclonica<br \/>Actor<br \/>Aldrich<br \/>Alice<br \/>Alike<br \/>Allan<br \/>Allerta<br \/>Allerta Stencil<br \/>Amaranth<br \/>Andika<br \/>Annie Use Your Telescope<br \/>Anonymous Pro<br \/>Antic<br \/>Anton<br \/>Architects Daughter<br \/>Arimo<br \/>Artifika<br \/>Arvo<br \/>Asap<br \/>Asul<br \/>Asset<br \/>Astloch<br \/>Aubrey<br \/>Bangers<br \/>Bentham<br \/>Bevan<br \/>Bigshot One<br \/>Black Ops One<br \/>Bowlby One<br \/>Bowlby One SC<br \/>Brawler<br \/>Buda<br \/>Cabin<br \/>Cabin Sketch<br \/>Calligraffitti<br \/>Candal<br \/>Cantarell<br \/>Cardo<br \/>Carme<br \/>Carter One<br \/>Caudex<br \/>Cedarville Cursive<br \/>Cherry Cream Soda<br \/>Chewy<br \/>Chivo<br \/>Coda<br \/>Coda Caption<br \/>Comfortaa<br \/>Coming Soon<br \/>Convergence<br \/>Copse<br \/>Corben<br \/>Cousine<br \/>Coustard<br \/>Covered By Your Grace<br \/>Crafty Girls<br \/>Crimson Text<br \/>Crushed<br \/>Cuprum<br \/>Damion<br \/>Dancing Script<br \/>Dawning of a New Day<br \/>Days One<br \/>Delius<br \/>Delius Swash Caps<br \/>Delius Unicase<br \/>Didact Gothic<br \/>Dorsa<br \/>Droid Sans<br \/>Droid Sans Mono<br \/>Droid Serif<br \/>EB Garamond<br \/>Exo<br \/>Expletus Sans<br \/>Fanwood Text<br \/>Federo<br \/>Fontdiner Swanky<br \/>Forum<br \/>Francois One<br \/>Gentium Basic<br \/>Gentium Book Basic<br \/>Geo<br \/>Geostar<br \/>Geostar Fill<br \/>Give You Glory<br \/>Gloria Hallelujah<br \/>Goblin One<br \/>Goudy Bookletter 1911<br \/>Gravitas One<br \/>Gruppo<br \/>Hammersmith One<br \/>Holtwood One SC<br \/>Homemade Apple<br \/>IM Fell DW Pica<br \/>IM Fell DW Pica SC<br \/>IM Fell Double Pica<br \/>IM Fell Double Pica SC<br \/>IM Fell English<br \/>IM Fell English SC<br \/>IM Fell French Canon<br \/>IM Fell French Canon SC<br \/>IM Fell Great Primer<br \/>IM Fell Great Primer SC<br \/>Inconsolata<br \/>Inder<br \/>Indie Flower<br \/>Irish Grover<br \/>Istok Web<br \/>Josefin Sans<br \/>Josefin Slab<br \/>Judson<br \/>Jura<br \/>Just Another Hand<br \/>Just Me Again Down Here<br \/>Kameron<br \/>Kelly Slab<br \/>Kenia<br \/>Kranky<br \/>Kreon<br \/>Kristi<br \/>La Belle Aurore<br \/>Lato<br \/>League Script<br \/>Leckerli One<br \/>Lekton<br \/>Limelight<br \/>Lobster<br \/>Lobster Two<br \/>Lora<br \/>Love Ya Like A Sister<br \/>Loved by the King<br \/>Luckiest Guy<br \/>Magra<br \/>Maiden Orange<br \/>Mako<br \/>Marvel<br \/>Maven Pro<br \/>Meddon<br \/>MedievalSharp<br \/>Megrim<br \/>Merriweather<br \/>Metrophobic<br \/>Michroma<br \/>Miltonian<br \/>Miltonian Tattoo<br \/>Modern Antiqua<br \/>Molengo<br \/>Monofett<br \/>Monoton<br \/>Montez<br \/>Mountains of Christmas<br \/>Muli<br \/>Neucha<br \/>Neuton<br \/>News Cycle<br \/>Nixie One<br \/>Nobile<br \/>Nothing You Could Do<br \/>Nova Cut<br \/>Nova Flat<br \/>Nova Mono<br \/>Nova Oval<br \/>Nova Round<br \/>Nova Script<br \/>Nova Slim<br \/>Nova Square<br \/>Numans<br \/>Nunito<br \/>OFL Sorts Mill Goudy TT<br \/>Old Standard TT<br \/>Open Sans<br \/>Open Sans Condensed<br \/>Orbitron<br \/>Oswald<br \/>Over the Rainbow<br \/>Ovo<br \/>PT Sans<br \/>PT Sans Caption<br \/>PT Sans Narrow<br \/>PT Serif<br \/>PT Serif Caption<br \/>Pacifico<br \/>Passero One<br \/>Patrick Hand<br \/>Paytone One<br \/>Permanent Marker<br \/>Philosopher<br \/>Play<br \/>Playfair Display<br \/>Podkova<br \/>Pompiere<br \/>Prociono<br \/>Puritan<br \/>Quattrocento<br \/>Quattrocento Sans<br \/>Questrial<br \/>Quicksand<br \/>Radley<br \/>Raleway<br \/>Rationale<br \/>Redressed<br \/>Reenie Beanie<br \/>Rochester<br \/>Rock Salt<br \/>Rokkitt<br \/>Ropa Sans<br \/>Rosario<br \/>Ruslan Display<br \/>Schoolbell<br \/>Shadows Into Light<br \/>Shanti<br \/>Short Stack<br \/>Sigmar One<br \/>Signika<br \/>Signika Negative<br \/>Six Caps<br \/>Slackey<br \/>Smokum<br \/>Smythe<br \/>Sniglet<br \/>Snippet<br \/>Special Elite<br \/>Stardos Stencil<br \/>Sue Ellen Francisco<br \/>Sunshiney<br \/>Swanky and Moo Moo<br \/>Syncopate<br \/>Tangerine<br \/>Telex<br \/>Tenor Sans<br \/>Terminal Dosis Light<br \/>The Girl Next Door<br \/>Tienne<br \/>Tinos<br \/>Tulpen One<br \/>Ubuntu<br \/>Ultra<br \/>UnifrakturCook<br \/>UnifrakturMaguntia<br \/>Unkempt<br \/>Unna<br \/>VT323<br \/>Varela<br \/>Varela Round<br \/>Vibur<br \/>Viga<br \/>Vidaloka<br \/>Volkhov<br \/>Vollkorn<br \/>Voltaire<br \/>Waiting for the Sunrise<br \/>Wallpoet<br \/>Walter Turncoat<br \/>Wire One<br \/>Yanone Kaffeesatz<br \/>Yellowtail<br \/>Yeseva One<br \/>Zeyada<br \/><\/span><div class=\"offlajnlistbtn\"><span><\/span><\/div><\/div><input type=\"hidden\" name=\"params[controllfont]family\" id=\"paramscontrollfontfamily\" value=\"Open Sans\"\/><\/div><\/div>","script":"dojo.addOnLoad(function(){\n      new OfflajnList({\n        name: \"paramscontrollfontfamily\",\n        elements: \"<div class=\\\"content\\\"><div class=\\\"listelement\\\">Abel<\\\/div><div class=\\\"listelement\\\">Abril Fatface<\\\/div><div class=\\\"listelement\\\">Aclonica<\\\/div><div class=\\\"listelement\\\">Actor<\\\/div><div class=\\\"listelement\\\">Aldrich<\\\/div><div class=\\\"listelement\\\">Alice<\\\/div><div class=\\\"listelement\\\">Alike<\\\/div><div class=\\\"listelement\\\">Allan<\\\/div><div class=\\\"listelement\\\">Allerta<\\\/div><div class=\\\"listelement\\\">Allerta Stencil<\\\/div><div class=\\\"listelement\\\">Amaranth<\\\/div><div class=\\\"listelement\\\">Andika<\\\/div><div class=\\\"listelement\\\">Annie Use Your Telescope<\\\/div><div class=\\\"listelement\\\">Anonymous Pro<\\\/div><div class=\\\"listelement\\\">Antic<\\\/div><div class=\\\"listelement\\\">Anton<\\\/div><div class=\\\"listelement\\\">Architects Daughter<\\\/div><div class=\\\"listelement\\\">Arimo<\\\/div><div class=\\\"listelement\\\">Artifika<\\\/div><div class=\\\"listelement\\\">Arvo<\\\/div><div class=\\\"listelement\\\">Asap<\\\/div><div class=\\\"listelement\\\">Asul<\\\/div><div class=\\\"listelement\\\">Asset<\\\/div><div class=\\\"listelement\\\">Astloch<\\\/div><div class=\\\"listelement\\\">Aubrey<\\\/div><div class=\\\"listelement\\\">Bangers<\\\/div><div class=\\\"listelement\\\">Bentham<\\\/div><div class=\\\"listelement\\\">Bevan<\\\/div><div class=\\\"listelement\\\">Bigshot One<\\\/div><div class=\\\"listelement\\\">Black Ops One<\\\/div><div class=\\\"listelement\\\">Bowlby One<\\\/div><div class=\\\"listelement\\\">Bowlby One SC<\\\/div><div class=\\\"listelement\\\">Brawler<\\\/div><div class=\\\"listelement\\\">Buda<\\\/div><div class=\\\"listelement\\\">Cabin<\\\/div><div class=\\\"listelement\\\">Cabin Sketch<\\\/div><div class=\\\"listelement\\\">Calligraffitti<\\\/div><div class=\\\"listelement\\\">Candal<\\\/div><div class=\\\"listelement\\\">Cantarell<\\\/div><div class=\\\"listelement\\\">Cardo<\\\/div><div class=\\\"listelement\\\">Carme<\\\/div><div class=\\\"listelement\\\">Carter One<\\\/div><div class=\\\"listelement\\\">Caudex<\\\/div><div class=\\\"listelement\\\">Cedarville Cursive<\\\/div><div class=\\\"listelement\\\">Cherry Cream Soda<\\\/div><div class=\\\"listelement\\\">Chewy<\\\/div><div class=\\\"listelement\\\">Chivo<\\\/div><div class=\\\"listelement\\\">Coda<\\\/div><div class=\\\"listelement\\\">Coda Caption<\\\/div><div class=\\\"listelement\\\">Comfortaa<\\\/div><div class=\\\"listelement\\\">Coming Soon<\\\/div><div class=\\\"listelement\\\">Convergence<\\\/div><div class=\\\"listelement\\\">Copse<\\\/div><div class=\\\"listelement\\\">Corben<\\\/div><div class=\\\"listelement\\\">Cousine<\\\/div><div class=\\\"listelement\\\">Coustard<\\\/div><div class=\\\"listelement\\\">Covered By Your Grace<\\\/div><div class=\\\"listelement\\\">Crafty Girls<\\\/div><div class=\\\"listelement\\\">Crimson Text<\\\/div><div class=\\\"listelement\\\">Crushed<\\\/div><div class=\\\"listelement\\\">Cuprum<\\\/div><div class=\\\"listelement\\\">Damion<\\\/div><div class=\\\"listelement\\\">Dancing Script<\\\/div><div class=\\\"listelement\\\">Dawning of a New Day<\\\/div><div class=\\\"listelement\\\">Days One<\\\/div><div class=\\\"listelement\\\">Delius<\\\/div><div class=\\\"listelement\\\">Delius Swash Caps<\\\/div><div class=\\\"listelement\\\">Delius Unicase<\\\/div><div class=\\\"listelement\\\">Didact Gothic<\\\/div><div class=\\\"listelement\\\">Dorsa<\\\/div><div class=\\\"listelement\\\">Droid Sans<\\\/div><div class=\\\"listelement\\\">Droid Sans Mono<\\\/div><div class=\\\"listelement\\\">Droid Serif<\\\/div><div class=\\\"listelement\\\">EB Garamond<\\\/div><div class=\\\"listelement\\\">Exo<\\\/div><div class=\\\"listelement\\\">Expletus Sans<\\\/div><div class=\\\"listelement\\\">Fanwood Text<\\\/div><div class=\\\"listelement\\\">Federo<\\\/div><div class=\\\"listelement\\\">Fontdiner Swanky<\\\/div><div class=\\\"listelement\\\">Forum<\\\/div><div class=\\\"listelement\\\">Francois One<\\\/div><div class=\\\"listelement\\\">Gentium Basic<\\\/div><div class=\\\"listelement\\\">Gentium Book Basic<\\\/div><div class=\\\"listelement\\\">Geo<\\\/div><div class=\\\"listelement\\\">Geostar<\\\/div><div class=\\\"listelement\\\">Geostar Fill<\\\/div><div class=\\\"listelement\\\">Give You Glory<\\\/div><div class=\\\"listelement\\\">Gloria Hallelujah<\\\/div><div class=\\\"listelement\\\">Goblin One<\\\/div><div class=\\\"listelement\\\">Goudy Bookletter 1911<\\\/div><div class=\\\"listelement\\\">Gravitas One<\\\/div><div class=\\\"listelement\\\">Gruppo<\\\/div><div class=\\\"listelement\\\">Hammersmith One<\\\/div><div class=\\\"listelement\\\">Holtwood One SC<\\\/div><div class=\\\"listelement\\\">Homemade Apple<\\\/div><div class=\\\"listelement\\\">IM Fell DW Pica<\\\/div><div class=\\\"listelement\\\">IM Fell DW Pica SC<\\\/div><div class=\\\"listelement\\\">IM Fell Double Pica<\\\/div><div class=\\\"listelement\\\">IM Fell Double Pica SC<\\\/div><div class=\\\"listelement\\\">IM Fell English<\\\/div><div class=\\\"listelement\\\">IM Fell English SC<\\\/div><div class=\\\"listelement\\\">IM Fell French Canon<\\\/div><div class=\\\"listelement\\\">IM Fell French Canon SC<\\\/div><div class=\\\"listelement\\\">IM Fell Great Primer<\\\/div><div class=\\\"listelement\\\">IM Fell Great Primer SC<\\\/div><div class=\\\"listelement\\\">Inconsolata<\\\/div><div class=\\\"listelement\\\">Inder<\\\/div><div class=\\\"listelement\\\">Indie Flower<\\\/div><div class=\\\"listelement\\\">Irish Grover<\\\/div><div class=\\\"listelement\\\">Istok Web<\\\/div><div class=\\\"listelement\\\">Josefin Sans<\\\/div><div class=\\\"listelement\\\">Josefin Slab<\\\/div><div class=\\\"listelement\\\">Judson<\\\/div><div class=\\\"listelement\\\">Jura<\\\/div><div class=\\\"listelement\\\">Just Another Hand<\\\/div><div class=\\\"listelement\\\">Just Me Again Down Here<\\\/div><div class=\\\"listelement\\\">Kameron<\\\/div><div class=\\\"listelement\\\">Kelly Slab<\\\/div><div class=\\\"listelement\\\">Kenia<\\\/div><div class=\\\"listelement\\\">Kranky<\\\/div><div class=\\\"listelement\\\">Kreon<\\\/div><div class=\\\"listelement\\\">Kristi<\\\/div><div class=\\\"listelement\\\">La Belle Aurore<\\\/div><div class=\\\"listelement\\\">Lato<\\\/div><div class=\\\"listelement\\\">League Script<\\\/div><div class=\\\"listelement\\\">Leckerli One<\\\/div><div class=\\\"listelement\\\">Lekton<\\\/div><div class=\\\"listelement\\\">Limelight<\\\/div><div class=\\\"listelement\\\">Lobster<\\\/div><div class=\\\"listelement\\\">Lobster Two<\\\/div><div class=\\\"listelement\\\">Lora<\\\/div><div class=\\\"listelement\\\">Love Ya Like A Sister<\\\/div><div class=\\\"listelement\\\">Loved by the King<\\\/div><div class=\\\"listelement\\\">Luckiest Guy<\\\/div><div class=\\\"listelement\\\">Magra<\\\/div><div class=\\\"listelement\\\">Maiden Orange<\\\/div><div class=\\\"listelement\\\">Mako<\\\/div><div class=\\\"listelement\\\">Marvel<\\\/div><div class=\\\"listelement\\\">Maven Pro<\\\/div><div class=\\\"listelement\\\">Meddon<\\\/div><div class=\\\"listelement\\\">MedievalSharp<\\\/div><div class=\\\"listelement\\\">Megrim<\\\/div><div class=\\\"listelement\\\">Merriweather<\\\/div><div class=\\\"listelement\\\">Metrophobic<\\\/div><div class=\\\"listelement\\\">Michroma<\\\/div><div class=\\\"listelement\\\">Miltonian<\\\/div><div class=\\\"listelement\\\">Miltonian Tattoo<\\\/div><div class=\\\"listelement\\\">Modern Antiqua<\\\/div><div class=\\\"listelement\\\">Molengo<\\\/div><div class=\\\"listelement\\\">Monofett<\\\/div><div class=\\\"listelement\\\">Monoton<\\\/div><div class=\\\"listelement\\\">Montez<\\\/div><div class=\\\"listelement\\\">Mountains of Christmas<\\\/div><div class=\\\"listelement\\\">Muli<\\\/div><div class=\\\"listelement\\\">Neucha<\\\/div><div class=\\\"listelement\\\">Neuton<\\\/div><div class=\\\"listelement\\\">News Cycle<\\\/div><div class=\\\"listelement\\\">Nixie One<\\\/div><div class=\\\"listelement\\\">Nobile<\\\/div><div class=\\\"listelement\\\">Nothing You Could Do<\\\/div><div class=\\\"listelement\\\">Nova Cut<\\\/div><div class=\\\"listelement\\\">Nova Flat<\\\/div><div class=\\\"listelement\\\">Nova Mono<\\\/div><div class=\\\"listelement\\\">Nova Oval<\\\/div><div class=\\\"listelement\\\">Nova Round<\\\/div><div class=\\\"listelement\\\">Nova Script<\\\/div><div class=\\\"listelement\\\">Nova Slim<\\\/div><div class=\\\"listelement\\\">Nova Square<\\\/div><div class=\\\"listelement\\\">Numans<\\\/div><div class=\\\"listelement\\\">Nunito<\\\/div><div class=\\\"listelement\\\">OFL Sorts Mill Goudy TT<\\\/div><div class=\\\"listelement\\\">Old Standard TT<\\\/div><div class=\\\"listelement\\\">Open Sans<\\\/div><div class=\\\"listelement\\\">Open Sans Condensed<\\\/div><div class=\\\"listelement\\\">Orbitron<\\\/div><div class=\\\"listelement\\\">Oswald<\\\/div><div class=\\\"listelement\\\">Over the Rainbow<\\\/div><div class=\\\"listelement\\\">Ovo<\\\/div><div class=\\\"listelement\\\">PT Sans<\\\/div><div class=\\\"listelement\\\">PT Sans Caption<\\\/div><div class=\\\"listelement\\\">PT Sans Narrow<\\\/div><div class=\\\"listelement\\\">PT Serif<\\\/div><div class=\\\"listelement\\\">PT Serif Caption<\\\/div><div class=\\\"listelement\\\">Pacifico<\\\/div><div class=\\\"listelement\\\">Passero One<\\\/div><div class=\\\"listelement\\\">Patrick Hand<\\\/div><div class=\\\"listelement\\\">Paytone One<\\\/div><div class=\\\"listelement\\\">Permanent Marker<\\\/div><div class=\\\"listelement\\\">Philosopher<\\\/div><div class=\\\"listelement\\\">Play<\\\/div><div class=\\\"listelement\\\">Playfair Display<\\\/div><div class=\\\"listelement\\\">Podkova<\\\/div><div class=\\\"listelement\\\">Pompiere<\\\/div><div class=\\\"listelement\\\">Prociono<\\\/div><div class=\\\"listelement\\\">Puritan<\\\/div><div class=\\\"listelement\\\">Quattrocento<\\\/div><div class=\\\"listelement\\\">Quattrocento Sans<\\\/div><div class=\\\"listelement\\\">Questrial<\\\/div><div class=\\\"listelement\\\">Quicksand<\\\/div><div class=\\\"listelement\\\">Radley<\\\/div><div class=\\\"listelement\\\">Raleway<\\\/div><div class=\\\"listelement\\\">Rationale<\\\/div><div class=\\\"listelement\\\">Redressed<\\\/div><div class=\\\"listelement\\\">Reenie Beanie<\\\/div><div class=\\\"listelement\\\">Rochester<\\\/div><div class=\\\"listelement\\\">Rock Salt<\\\/div><div class=\\\"listelement\\\">Rokkitt<\\\/div><div class=\\\"listelement\\\">Ropa Sans<\\\/div><div class=\\\"listelement\\\">Rosario<\\\/div><div class=\\\"listelement\\\">Ruslan Display<\\\/div><div class=\\\"listelement\\\">Schoolbell<\\\/div><div class=\\\"listelement\\\">Shadows Into Light<\\\/div><div class=\\\"listelement\\\">Shanti<\\\/div><div class=\\\"listelement\\\">Short Stack<\\\/div><div class=\\\"listelement\\\">Sigmar One<\\\/div><div class=\\\"listelement\\\">Signika<\\\/div><div class=\\\"listelement\\\">Signika Negative<\\\/div><div class=\\\"listelement\\\">Six Caps<\\\/div><div class=\\\"listelement\\\">Slackey<\\\/div><div class=\\\"listelement\\\">Smokum<\\\/div><div class=\\\"listelement\\\">Smythe<\\\/div><div class=\\\"listelement\\\">Sniglet<\\\/div><div class=\\\"listelement\\\">Snippet<\\\/div><div class=\\\"listelement\\\">Special Elite<\\\/div><div class=\\\"listelement\\\">Stardos Stencil<\\\/div><div class=\\\"listelement\\\">Sue Ellen Francisco<\\\/div><div class=\\\"listelement\\\">Sunshiney<\\\/div><div class=\\\"listelement\\\">Swanky and Moo Moo<\\\/div><div class=\\\"listelement\\\">Syncopate<\\\/div><div class=\\\"listelement\\\">Tangerine<\\\/div><div class=\\\"listelement\\\">Telex<\\\/div><div class=\\\"listelement\\\">Tenor Sans<\\\/div><div class=\\\"listelement\\\">Terminal Dosis Light<\\\/div><div class=\\\"listelement\\\">The Girl Next Door<\\\/div><div class=\\\"listelement\\\">Tienne<\\\/div><div class=\\\"listelement\\\">Tinos<\\\/div><div class=\\\"listelement\\\">Tulpen One<\\\/div><div class=\\\"listelement\\\">Ubuntu<\\\/div><div class=\\\"listelement\\\">Ultra<\\\/div><div class=\\\"listelement\\\">UnifrakturCook<\\\/div><div class=\\\"listelement\\\">UnifrakturMaguntia<\\\/div><div class=\\\"listelement\\\">Unkempt<\\\/div><div class=\\\"listelement\\\">Unna<\\\/div><div class=\\\"listelement\\\">VT323<\\\/div><div class=\\\"listelement\\\">Varela<\\\/div><div class=\\\"listelement\\\">Varela Round<\\\/div><div class=\\\"listelement\\\">Vibur<\\\/div><div class=\\\"listelement\\\">Viga<\\\/div><div class=\\\"listelement\\\">Vidaloka<\\\/div><div class=\\\"listelement\\\">Volkhov<\\\/div><div class=\\\"listelement\\\">Vollkorn<\\\/div><div class=\\\"listelement\\\">Voltaire<\\\/div><div class=\\\"listelement\\\">Waiting for the Sunrise<\\\/div><div class=\\\"listelement\\\">Wallpoet<\\\/div><div class=\\\"listelement\\\">Walter Turncoat<\\\/div><div class=\\\"listelement\\\">Wire One<\\\/div><div class=\\\"listelement\\\">Yanone Kaffeesatz<\\\/div><div class=\\\"listelement\\\">Yellowtail<\\\/div><div class=\\\"listelement\\\">Yeseva One<\\\/div><div class=\\\"listelement\\\">Zeyada<\\\/div><\\\/div>\",\n        options: [{\"value\":\"Abel\",\"text\":\"Abel\"},{\"value\":\"Abril Fatface\",\"text\":\"Abril Fatface\"},{\"value\":\"Aclonica\",\"text\":\"Aclonica\"},{\"value\":\"Actor\",\"text\":\"Actor\"},{\"value\":\"Aldrich\",\"text\":\"Aldrich\"},{\"value\":\"Alice\",\"text\":\"Alice\"},{\"value\":\"Alike\",\"text\":\"Alike\"},{\"value\":\"Allan\",\"text\":\"Allan\"},{\"value\":\"Allerta\",\"text\":\"Allerta\"},{\"value\":\"Allerta Stencil\",\"text\":\"Allerta Stencil\"},{\"value\":\"Amaranth\",\"text\":\"Amaranth\"},{\"value\":\"Andika\",\"text\":\"Andika\"},{\"value\":\"Annie Use Your Telescope\",\"text\":\"Annie Use Your Telescope\"},{\"value\":\"Anonymous Pro\",\"text\":\"Anonymous Pro\"},{\"value\":\"Antic\",\"text\":\"Antic\"},{\"value\":\"Anton\",\"text\":\"Anton\"},{\"value\":\"Architects Daughter\",\"text\":\"Architects Daughter\"},{\"value\":\"Arimo\",\"text\":\"Arimo\"},{\"value\":\"Artifika\",\"text\":\"Artifika\"},{\"value\":\"Arvo\",\"text\":\"Arvo\"},{\"value\":\"Asap\",\"text\":\"Asap\"},{\"value\":\"Asul\",\"text\":\"Asul\"},{\"value\":\"Asset\",\"text\":\"Asset\"},{\"value\":\"Astloch\",\"text\":\"Astloch\"},{\"value\":\"Aubrey\",\"text\":\"Aubrey\"},{\"value\":\"Bangers\",\"text\":\"Bangers\"},{\"value\":\"Bentham\",\"text\":\"Bentham\"},{\"value\":\"Bevan\",\"text\":\"Bevan\"},{\"value\":\"Bigshot One\",\"text\":\"Bigshot One\"},{\"value\":\"Black Ops One\",\"text\":\"Black Ops One\"},{\"value\":\"Bowlby One\",\"text\":\"Bowlby One\"},{\"value\":\"Bowlby One SC\",\"text\":\"Bowlby One SC\"},{\"value\":\"Brawler\",\"text\":\"Brawler\"},{\"value\":\"Buda\",\"text\":\"Buda\"},{\"value\":\"Cabin\",\"text\":\"Cabin\"},{\"value\":\"Cabin Sketch\",\"text\":\"Cabin Sketch\"},{\"value\":\"Calligraffitti\",\"text\":\"Calligraffitti\"},{\"value\":\"Candal\",\"text\":\"Candal\"},{\"value\":\"Cantarell\",\"text\":\"Cantarell\"},{\"value\":\"Cardo\",\"text\":\"Cardo\"},{\"value\":\"Carme\",\"text\":\"Carme\"},{\"value\":\"Carter One\",\"text\":\"Carter One\"},{\"value\":\"Caudex\",\"text\":\"Caudex\"},{\"value\":\"Cedarville Cursive\",\"text\":\"Cedarville Cursive\"},{\"value\":\"Cherry Cream Soda\",\"text\":\"Cherry Cream Soda\"},{\"value\":\"Chewy\",\"text\":\"Chewy\"},{\"value\":\"Chivo\",\"text\":\"Chivo\"},{\"value\":\"Coda\",\"text\":\"Coda\"},{\"value\":\"Coda Caption\",\"text\":\"Coda Caption\"},{\"value\":\"Comfortaa\",\"text\":\"Comfortaa\"},{\"value\":\"Coming Soon\",\"text\":\"Coming Soon\"},{\"value\":\"Convergence\",\"text\":\"Convergence\"},{\"value\":\"Copse\",\"text\":\"Copse\"},{\"value\":\"Corben\",\"text\":\"Corben\"},{\"value\":\"Cousine\",\"text\":\"Cousine\"},{\"value\":\"Coustard\",\"text\":\"Coustard\"},{\"value\":\"Covered By Your Grace\",\"text\":\"Covered By Your Grace\"},{\"value\":\"Crafty Girls\",\"text\":\"Crafty Girls\"},{\"value\":\"Crimson Text\",\"text\":\"Crimson Text\"},{\"value\":\"Crushed\",\"text\":\"Crushed\"},{\"value\":\"Cuprum\",\"text\":\"Cuprum\"},{\"value\":\"Damion\",\"text\":\"Damion\"},{\"value\":\"Dancing Script\",\"text\":\"Dancing Script\"},{\"value\":\"Dawning of a New Day\",\"text\":\"Dawning of a New Day\"},{\"value\":\"Days One\",\"text\":\"Days One\"},{\"value\":\"Delius\",\"text\":\"Delius\"},{\"value\":\"Delius Swash Caps\",\"text\":\"Delius Swash Caps\"},{\"value\":\"Delius Unicase\",\"text\":\"Delius Unicase\"},{\"value\":\"Didact Gothic\",\"text\":\"Didact Gothic\"},{\"value\":\"Dorsa\",\"text\":\"Dorsa\"},{\"value\":\"Droid Sans\",\"text\":\"Droid Sans\"},{\"value\":\"Droid Sans Mono\",\"text\":\"Droid Sans Mono\"},{\"value\":\"Droid Serif\",\"text\":\"Droid Serif\"},{\"value\":\"EB Garamond\",\"text\":\"EB Garamond\"},{\"value\":\"Exo\",\"text\":\"Exo\"},{\"value\":\"Expletus Sans\",\"text\":\"Expletus Sans\"},{\"value\":\"Fanwood Text\",\"text\":\"Fanwood Text\"},{\"value\":\"Federo\",\"text\":\"Federo\"},{\"value\":\"Fontdiner Swanky\",\"text\":\"Fontdiner Swanky\"},{\"value\":\"Forum\",\"text\":\"Forum\"},{\"value\":\"Francois One\",\"text\":\"Francois One\"},{\"value\":\"Gentium Basic\",\"text\":\"Gentium Basic\"},{\"value\":\"Gentium Book Basic\",\"text\":\"Gentium Book Basic\"},{\"value\":\"Geo\",\"text\":\"Geo\"},{\"value\":\"Geostar\",\"text\":\"Geostar\"},{\"value\":\"Geostar Fill\",\"text\":\"Geostar Fill\"},{\"value\":\"Give You Glory\",\"text\":\"Give You Glory\"},{\"value\":\"Gloria Hallelujah\",\"text\":\"Gloria Hallelujah\"},{\"value\":\"Goblin One\",\"text\":\"Goblin One\"},{\"value\":\"Goudy Bookletter 1911\",\"text\":\"Goudy Bookletter 1911\"},{\"value\":\"Gravitas One\",\"text\":\"Gravitas One\"},{\"value\":\"Gruppo\",\"text\":\"Gruppo\"},{\"value\":\"Hammersmith One\",\"text\":\"Hammersmith One\"},{\"value\":\"Holtwood One SC\",\"text\":\"Holtwood One SC\"},{\"value\":\"Homemade Apple\",\"text\":\"Homemade Apple\"},{\"value\":\"IM Fell DW Pica\",\"text\":\"IM Fell DW Pica\"},{\"value\":\"IM Fell DW Pica SC\",\"text\":\"IM Fell DW Pica SC\"},{\"value\":\"IM Fell Double Pica\",\"text\":\"IM Fell Double Pica\"},{\"value\":\"IM Fell Double Pica SC\",\"text\":\"IM Fell Double Pica SC\"},{\"value\":\"IM Fell English\",\"text\":\"IM Fell English\"},{\"value\":\"IM Fell English SC\",\"text\":\"IM Fell English SC\"},{\"value\":\"IM Fell French Canon\",\"text\":\"IM Fell French Canon\"},{\"value\":\"IM Fell French Canon SC\",\"text\":\"IM Fell French Canon SC\"},{\"value\":\"IM Fell Great Primer\",\"text\":\"IM Fell Great Primer\"},{\"value\":\"IM Fell Great Primer SC\",\"text\":\"IM Fell Great Primer SC\"},{\"value\":\"Inconsolata\",\"text\":\"Inconsolata\"},{\"value\":\"Inder\",\"text\":\"Inder\"},{\"value\":\"Indie Flower\",\"text\":\"Indie Flower\"},{\"value\":\"Irish Grover\",\"text\":\"Irish Grover\"},{\"value\":\"Istok Web\",\"text\":\"Istok Web\"},{\"value\":\"Josefin Sans\",\"text\":\"Josefin Sans\"},{\"value\":\"Josefin Slab\",\"text\":\"Josefin Slab\"},{\"value\":\"Judson\",\"text\":\"Judson\"},{\"value\":\"Jura\",\"text\":\"Jura\"},{\"value\":\"Just Another Hand\",\"text\":\"Just Another Hand\"},{\"value\":\"Just Me Again Down Here\",\"text\":\"Just Me Again Down Here\"},{\"value\":\"Kameron\",\"text\":\"Kameron\"},{\"value\":\"Kelly Slab\",\"text\":\"Kelly Slab\"},{\"value\":\"Kenia\",\"text\":\"Kenia\"},{\"value\":\"Kranky\",\"text\":\"Kranky\"},{\"value\":\"Kreon\",\"text\":\"Kreon\"},{\"value\":\"Kristi\",\"text\":\"Kristi\"},{\"value\":\"La Belle Aurore\",\"text\":\"La Belle Aurore\"},{\"value\":\"Lato\",\"text\":\"Lato\"},{\"value\":\"League Script\",\"text\":\"League Script\"},{\"value\":\"Leckerli One\",\"text\":\"Leckerli One\"},{\"value\":\"Lekton\",\"text\":\"Lekton\"},{\"value\":\"Limelight\",\"text\":\"Limelight\"},{\"value\":\"Lobster\",\"text\":\"Lobster\"},{\"value\":\"Lobster Two\",\"text\":\"Lobster Two\"},{\"value\":\"Lora\",\"text\":\"Lora\"},{\"value\":\"Love Ya Like A Sister\",\"text\":\"Love Ya Like A Sister\"},{\"value\":\"Loved by the King\",\"text\":\"Loved by the King\"},{\"value\":\"Luckiest Guy\",\"text\":\"Luckiest Guy\"},{\"value\":\"Magra\",\"text\":\"Magra\"},{\"value\":\"Maiden Orange\",\"text\":\"Maiden Orange\"},{\"value\":\"Mako\",\"text\":\"Mako\"},{\"value\":\"Marvel\",\"text\":\"Marvel\"},{\"value\":\"Maven Pro\",\"text\":\"Maven Pro\"},{\"value\":\"Meddon\",\"text\":\"Meddon\"},{\"value\":\"MedievalSharp\",\"text\":\"MedievalSharp\"},{\"value\":\"Megrim\",\"text\":\"Megrim\"},{\"value\":\"Merriweather\",\"text\":\"Merriweather\"},{\"value\":\"Metrophobic\",\"text\":\"Metrophobic\"},{\"value\":\"Michroma\",\"text\":\"Michroma\"},{\"value\":\"Miltonian\",\"text\":\"Miltonian\"},{\"value\":\"Miltonian Tattoo\",\"text\":\"Miltonian Tattoo\"},{\"value\":\"Modern Antiqua\",\"text\":\"Modern Antiqua\"},{\"value\":\"Molengo\",\"text\":\"Molengo\"},{\"value\":\"Monofett\",\"text\":\"Monofett\"},{\"value\":\"Monoton\",\"text\":\"Monoton\"},{\"value\":\"Montez\",\"text\":\"Montez\"},{\"value\":\"Mountains of Christmas\",\"text\":\"Mountains of Christmas\"},{\"value\":\"Muli\",\"text\":\"Muli\"},{\"value\":\"Neucha\",\"text\":\"Neucha\"},{\"value\":\"Neuton\",\"text\":\"Neuton\"},{\"value\":\"News Cycle\",\"text\":\"News Cycle\"},{\"value\":\"Nixie One\",\"text\":\"Nixie One\"},{\"value\":\"Nobile\",\"text\":\"Nobile\"},{\"value\":\"Nothing You Could Do\",\"text\":\"Nothing You Could Do\"},{\"value\":\"Nova Cut\",\"text\":\"Nova Cut\"},{\"value\":\"Nova Flat\",\"text\":\"Nova Flat\"},{\"value\":\"Nova Mono\",\"text\":\"Nova Mono\"},{\"value\":\"Nova Oval\",\"text\":\"Nova Oval\"},{\"value\":\"Nova Round\",\"text\":\"Nova Round\"},{\"value\":\"Nova Script\",\"text\":\"Nova Script\"},{\"value\":\"Nova Slim\",\"text\":\"Nova Slim\"},{\"value\":\"Nova Square\",\"text\":\"Nova Square\"},{\"value\":\"Numans\",\"text\":\"Numans\"},{\"value\":\"Nunito\",\"text\":\"Nunito\"},{\"value\":\"OFL Sorts Mill Goudy TT\",\"text\":\"OFL Sorts Mill Goudy TT\"},{\"value\":\"Old Standard TT\",\"text\":\"Old Standard TT\"},{\"value\":\"Open Sans\",\"text\":\"Open Sans\"},{\"value\":\"Open Sans Condensed\",\"text\":\"Open Sans Condensed\"},{\"value\":\"Orbitron\",\"text\":\"Orbitron\"},{\"value\":\"Oswald\",\"text\":\"Oswald\"},{\"value\":\"Over the Rainbow\",\"text\":\"Over the Rainbow\"},{\"value\":\"Ovo\",\"text\":\"Ovo\"},{\"value\":\"PT Sans\",\"text\":\"PT Sans\"},{\"value\":\"PT Sans Caption\",\"text\":\"PT Sans Caption\"},{\"value\":\"PT Sans Narrow\",\"text\":\"PT Sans Narrow\"},{\"value\":\"PT Serif\",\"text\":\"PT Serif\"},{\"value\":\"PT Serif Caption\",\"text\":\"PT Serif Caption\"},{\"value\":\"Pacifico\",\"text\":\"Pacifico\"},{\"value\":\"Passero One\",\"text\":\"Passero One\"},{\"value\":\"Patrick Hand\",\"text\":\"Patrick Hand\"},{\"value\":\"Paytone One\",\"text\":\"Paytone One\"},{\"value\":\"Permanent Marker\",\"text\":\"Permanent Marker\"},{\"value\":\"Philosopher\",\"text\":\"Philosopher\"},{\"value\":\"Play\",\"text\":\"Play\"},{\"value\":\"Playfair Display\",\"text\":\"Playfair Display\"},{\"value\":\"Podkova\",\"text\":\"Podkova\"},{\"value\":\"Pompiere\",\"text\":\"Pompiere\"},{\"value\":\"Prociono\",\"text\":\"Prociono\"},{\"value\":\"Puritan\",\"text\":\"Puritan\"},{\"value\":\"Quattrocento\",\"text\":\"Quattrocento\"},{\"value\":\"Quattrocento Sans\",\"text\":\"Quattrocento Sans\"},{\"value\":\"Questrial\",\"text\":\"Questrial\"},{\"value\":\"Quicksand\",\"text\":\"Quicksand\"},{\"value\":\"Radley\",\"text\":\"Radley\"},{\"value\":\"Raleway\",\"text\":\"Raleway\"},{\"value\":\"Rationale\",\"text\":\"Rationale\"},{\"value\":\"Redressed\",\"text\":\"Redressed\"},{\"value\":\"Reenie Beanie\",\"text\":\"Reenie Beanie\"},{\"value\":\"Rochester\",\"text\":\"Rochester\"},{\"value\":\"Rock Salt\",\"text\":\"Rock Salt\"},{\"value\":\"Rokkitt\",\"text\":\"Rokkitt\"},{\"value\":\"Ropa Sans\",\"text\":\"Ropa Sans\"},{\"value\":\"Rosario\",\"text\":\"Rosario\"},{\"value\":\"Ruslan Display\",\"text\":\"Ruslan Display\"},{\"value\":\"Schoolbell\",\"text\":\"Schoolbell\"},{\"value\":\"Shadows Into Light\",\"text\":\"Shadows Into Light\"},{\"value\":\"Shanti\",\"text\":\"Shanti\"},{\"value\":\"Short Stack\",\"text\":\"Short Stack\"},{\"value\":\"Sigmar One\",\"text\":\"Sigmar One\"},{\"value\":\"Signika\",\"text\":\"Signika\"},{\"value\":\"Signika Negative\",\"text\":\"Signika Negative\"},{\"value\":\"Six Caps\",\"text\":\"Six Caps\"},{\"value\":\"Slackey\",\"text\":\"Slackey\"},{\"value\":\"Smokum\",\"text\":\"Smokum\"},{\"value\":\"Smythe\",\"text\":\"Smythe\"},{\"value\":\"Sniglet\",\"text\":\"Sniglet\"},{\"value\":\"Snippet\",\"text\":\"Snippet\"},{\"value\":\"Special Elite\",\"text\":\"Special Elite\"},{\"value\":\"Stardos Stencil\",\"text\":\"Stardos Stencil\"},{\"value\":\"Sue Ellen Francisco\",\"text\":\"Sue Ellen Francisco\"},{\"value\":\"Sunshiney\",\"text\":\"Sunshiney\"},{\"value\":\"Swanky and Moo Moo\",\"text\":\"Swanky and Moo Moo\"},{\"value\":\"Syncopate\",\"text\":\"Syncopate\"},{\"value\":\"Tangerine\",\"text\":\"Tangerine\"},{\"value\":\"Telex\",\"text\":\"Telex\"},{\"value\":\"Tenor Sans\",\"text\":\"Tenor Sans\"},{\"value\":\"Terminal Dosis Light\",\"text\":\"Terminal Dosis Light\"},{\"value\":\"The Girl Next Door\",\"text\":\"The Girl Next Door\"},{\"value\":\"Tienne\",\"text\":\"Tienne\"},{\"value\":\"Tinos\",\"text\":\"Tinos\"},{\"value\":\"Tulpen One\",\"text\":\"Tulpen One\"},{\"value\":\"Ubuntu\",\"text\":\"Ubuntu\"},{\"value\":\"Ultra\",\"text\":\"Ultra\"},{\"value\":\"UnifrakturCook\",\"text\":\"UnifrakturCook\"},{\"value\":\"UnifrakturMaguntia\",\"text\":\"UnifrakturMaguntia\"},{\"value\":\"Unkempt\",\"text\":\"Unkempt\"},{\"value\":\"Unna\",\"text\":\"Unna\"},{\"value\":\"VT323\",\"text\":\"VT323\"},{\"value\":\"Varela\",\"text\":\"Varela\"},{\"value\":\"Varela Round\",\"text\":\"Varela Round\"},{\"value\":\"Vibur\",\"text\":\"Vibur\"},{\"value\":\"Viga\",\"text\":\"Viga\"},{\"value\":\"Vidaloka\",\"text\":\"Vidaloka\"},{\"value\":\"Volkhov\",\"text\":\"Volkhov\"},{\"value\":\"Vollkorn\",\"text\":\"Vollkorn\"},{\"value\":\"Voltaire\",\"text\":\"Voltaire\"},{\"value\":\"Waiting for the Sunrise\",\"text\":\"Waiting for the Sunrise\"},{\"value\":\"Wallpoet\",\"text\":\"Wallpoet\"},{\"value\":\"Walter Turncoat\",\"text\":\"Walter Turncoat\"},{\"value\":\"Wire One\",\"text\":\"Wire One\"},{\"value\":\"Yanone Kaffeesatz\",\"text\":\"Yanone Kaffeesatz\"},{\"value\":\"Yellowtail\",\"text\":\"Yellowtail\"},{\"value\":\"Yeseva One\",\"text\":\"Yeseva One\"},{\"value\":\"Zeyada\",\"text\":\"Zeyada\"}],\n        selectedIndex: 172,\n        height: \"10\",\n        fireshow: 1\n      });\n    });"},"LatinExtended":{"name":"params[controllfont]family","id":"paramscontrollfontfamily","html":"<div style='position:relative;'><div id=\"offlajnlistcontainerparamscontrollfontfamily\" class=\"gk_hack offlajnlistcontainer\"><div class=\"gk_hack offlajnlist\"><span class=\"offlajnlistcurrent\">Open Sans<br \/>Andika<br \/>Anonymous Pro<br \/>Anton<br \/>Caudex<br \/>Didact Gothic<br \/>EB Garamond<br \/>Forum<br \/>Francois One<br \/>Gentium Basic<br \/>Gentium Book Basic<br \/>Istok Web<br \/>Jura<br \/>Kelly Slab<br \/>Lobster<br \/>MedievalSharp<br \/>Modern Antiqua<br \/>Neuton<br \/>Open Sans<br \/>Open Sans Condensed<br \/>Patrick Hand<br \/>Play<br \/>Ruslan Display<br \/>Tenor Sans<br \/>Ubuntu<br \/>Varela<br \/><\/span><div class=\"offlajnlistbtn\"><span><\/span><\/div><\/div><input type=\"hidden\" name=\"params[controllfont]family\" id=\"paramscontrollfontfamily\" value=\"Open Sans\"\/><\/div><\/div>","script":"dojo.addOnLoad(function(){\n      new OfflajnList({\n        name: \"paramscontrollfontfamily\",\n        elements: \"<div class=\\\"content\\\"><div class=\\\"listelement\\\">Andika<\\\/div><div class=\\\"listelement\\\">Anonymous Pro<\\\/div><div class=\\\"listelement\\\">Anton<\\\/div><div class=\\\"listelement\\\">Caudex<\\\/div><div class=\\\"listelement\\\">Didact Gothic<\\\/div><div class=\\\"listelement\\\">EB Garamond<\\\/div><div class=\\\"listelement\\\">Forum<\\\/div><div class=\\\"listelement\\\">Francois One<\\\/div><div class=\\\"listelement\\\">Gentium Basic<\\\/div><div class=\\\"listelement\\\">Gentium Book Basic<\\\/div><div class=\\\"listelement\\\">Istok Web<\\\/div><div class=\\\"listelement\\\">Jura<\\\/div><div class=\\\"listelement\\\">Kelly Slab<\\\/div><div class=\\\"listelement\\\">Lobster<\\\/div><div class=\\\"listelement\\\">MedievalSharp<\\\/div><div class=\\\"listelement\\\">Modern Antiqua<\\\/div><div class=\\\"listelement\\\">Neuton<\\\/div><div class=\\\"listelement\\\">Open Sans<\\\/div><div class=\\\"listelement\\\">Open Sans Condensed<\\\/div><div class=\\\"listelement\\\">Patrick Hand<\\\/div><div class=\\\"listelement\\\">Play<\\\/div><div class=\\\"listelement\\\">Ruslan Display<\\\/div><div class=\\\"listelement\\\">Tenor Sans<\\\/div><div class=\\\"listelement\\\">Ubuntu<\\\/div><div class=\\\"listelement\\\">Varela<\\\/div><\\\/div>\",\n        options: [{\"value\":\"Andika\",\"text\":\"Andika\"},{\"value\":\"Anonymous Pro\",\"text\":\"Anonymous Pro\"},{\"value\":\"Anton\",\"text\":\"Anton\"},{\"value\":\"Caudex\",\"text\":\"Caudex\"},{\"value\":\"Didact Gothic\",\"text\":\"Didact Gothic\"},{\"value\":\"EB Garamond\",\"text\":\"EB Garamond\"},{\"value\":\"Forum\",\"text\":\"Forum\"},{\"value\":\"Francois One\",\"text\":\"Francois One\"},{\"value\":\"Gentium Basic\",\"text\":\"Gentium Basic\"},{\"value\":\"Gentium Book Basic\",\"text\":\"Gentium Book Basic\"},{\"value\":\"Istok Web\",\"text\":\"Istok Web\"},{\"value\":\"Jura\",\"text\":\"Jura\"},{\"value\":\"Kelly Slab\",\"text\":\"Kelly Slab\"},{\"value\":\"Lobster\",\"text\":\"Lobster\"},{\"value\":\"MedievalSharp\",\"text\":\"MedievalSharp\"},{\"value\":\"Modern Antiqua\",\"text\":\"Modern Antiqua\"},{\"value\":\"Neuton\",\"text\":\"Neuton\"},{\"value\":\"Open Sans\",\"text\":\"Open Sans\"},{\"value\":\"Open Sans Condensed\",\"text\":\"Open Sans Condensed\"},{\"value\":\"Patrick Hand\",\"text\":\"Patrick Hand\"},{\"value\":\"Play\",\"text\":\"Play\"},{\"value\":\"Ruslan Display\",\"text\":\"Ruslan Display\"},{\"value\":\"Tenor Sans\",\"text\":\"Tenor Sans\"},{\"value\":\"Ubuntu\",\"text\":\"Ubuntu\"},{\"value\":\"Varela\",\"text\":\"Varela\"}],\n        selectedIndex: 17,\n        height: \"10\",\n        fireshow: 1\n      });\n    });"},"Vietnamese":{"name":"params[controllfont]family","id":"paramscontrollfontfamily","html":"<div style='position:relative;'><div id=\"offlajnlistcontainerparamscontrollfontfamily\" class=\"gk_hack offlajnlistcontainer\"><div class=\"gk_hack offlajnlist\"><span class=\"offlajnlistcurrent\">Open Sans<br \/>EB Garamond<br \/>Open Sans<br \/>Open Sans Condensed<br \/><\/span><div class=\"offlajnlistbtn\"><span><\/span><\/div><\/div><input type=\"hidden\" name=\"params[controllfont]family\" id=\"paramscontrollfontfamily\" value=\"Open Sans\"\/><\/div><\/div>","script":"dojo.addOnLoad(function(){\n      new OfflajnList({\n        name: \"paramscontrollfontfamily\",\n        elements: \"<div class=\\\"content\\\"><div class=\\\"listelement\\\">EB Garamond<\\\/div><div class=\\\"listelement\\\">Open Sans<\\\/div><div class=\\\"listelement\\\">Open Sans Condensed<\\\/div><\\\/div>\",\n        options: [{\"value\":\"EB Garamond\",\"text\":\"EB Garamond\"},{\"value\":\"Open Sans\",\"text\":\"Open Sans\"},{\"value\":\"Open Sans Condensed\",\"text\":\"Open Sans Condensed\"}],\n        selectedIndex: 1,\n        height: \"10\",\n        fireshow: 1\n      });\n    });"},"html":"<div style='position:relative;'><div id=\"offlajnlistcontainerparamscontrollfonttype\" class=\"gk_hack offlajnlistcontainer\"><div class=\"gk_hack offlajnlist\"><span class=\"offlajnlistcurrent\">Alternative fonts<br \/>Alternative fonts<br \/>Cyrillic<br \/>CyrillicExtended<br \/>Greek<br \/>GreekExtended<br \/>Khmer<br \/>Latin<br \/>LatinExtended<br \/>Vietnamese<br \/><\/span><div class=\"offlajnlistbtn\"><span><\/span><\/div><\/div><input type=\"hidden\" name=\"params[controllfont]type\" id=\"paramscontrollfonttype\" value=\"0\"\/><\/div><\/div>"},"size":{"name":"params[controllfont]size","id":"paramscontrollfontsize","html":"<div class=\"offlajntextcontainer\" id=\"offlajntextcontainerparamscontrollfontsize\"><input  size=\"1\" class=\"offlajntext\" type=\"text\" id=\"paramscontrollfontsizeinput\" value=\"14\"><div class=\"offlajntext_increment\">\n                <div class=\"offlajntext_increment_up arrow\"><\/div>\n                <div class=\"offlajntext_increment_down arrow\"><\/div>\n      <\/div><\/div><div class=\"offlajnswitcher\">\r\n            <div class=\"offlajnswitcher_inner\" id=\"offlajnswitcher_innerparamscontrollfontsizeunit\"><\/div>\r\n    <\/div><input type=\"hidden\" name=\"params[controllfont]size[unit]\" id=\"paramscontrollfontsizeunit\" value=\"px\" \/><input type=\"hidden\" name=\"params[controllfont]size\" id=\"paramscontrollfontsize\" value=\"14||px\">"},"color":{"name":"params[controllfont]color","id":"paramscontrollfontcolor","html":"<div class=\"offlajncolor\"><input type=\"text\" name=\"params[controllfont]color\" id=\"paramscontrollfontcolor\" value=\"000000\" class=\"color wa\" size=\"12\" \/><\/div>"},"bold":{"name":"params[controllfont]bold","id":"paramscontrollfontbold","html":"<div id=\"offlajnonoffparamscontrollfontbold\" class=\"gk_hack onoffbutton\">\n                <div class=\"gk_hack onoffbutton_img\" style=\"background-image: url(http:\/\/localhost\/thepdahoi.vn\/wp-content\/plugins\/nextend-smart-slider-lite\/includes\/modules\/mod_smartslider\/params\/offlajnonoff\/images\/bold.png);\"><\/div>\n      <\/div><input type=\"hidden\" name=\"params[controllfont]bold\" id=\"paramscontrollfontbold\" value=\"0\" \/>"},"italic":{"name":"params[controllfont]italic","id":"paramscontrollfontitalic","html":"<div id=\"offlajnonoffparamscontrollfontitalic\" class=\"gk_hack onoffbutton\">\n                <div class=\"gk_hack onoffbutton_img\" style=\"background-image: url(http:\/\/localhost\/thepdahoi.vn\/wp-content\/plugins\/nextend-smart-slider-lite\/includes\/modules\/mod_smartslider\/params\/offlajnonoff\/images\/italic.png);\"><\/div>\n      <\/div><input type=\"hidden\" name=\"params[controllfont]italic\" id=\"paramscontrollfontitalic\" value=\"0\" \/>"},"underline":{"name":"params[controllfont]underline","id":"paramscontrollfontunderline","html":"<div id=\"offlajnonoffparamscontrollfontunderline\" class=\"gk_hack onoffbutton\">\n                <div class=\"gk_hack onoffbutton_img\" style=\"background-image: url(http:\/\/localhost\/thepdahoi.vn\/wp-content\/plugins\/nextend-smart-slider-lite\/includes\/modules\/mod_smartslider\/params\/offlajnonoff\/images\/underline.png);\"><\/div>\n      <\/div><input type=\"hidden\" name=\"params[controllfont]underline\" id=\"paramscontrollfontunderline\" value=\"0\" \/>"},"align":{"name":"params[controllfont]align","id":"paramscontrollfontalign","html":"<div class=\"offlajnradiocontainerimage\" id=\"offlajnradiocontainerparamscontrollfontalign\"><div class=\"radioelement first selected\"><div class=\"radioelement_img\" style=\"background-image: url(http:\/\/localhost\/thepdahoi.vn\/wp-content\/plugins\/nextend-smart-slider-lite\/includes\/modules\/mod_smartslider\/params\/offlajnradio\/images\/left_align.png);\"><\/div><\/div><div class=\"radioelement \"><div class=\"radioelement_img\" style=\"background-image: url(http:\/\/localhost\/thepdahoi.vn\/wp-content\/plugins\/nextend-smart-slider-lite\/includes\/modules\/mod_smartslider\/params\/offlajnradio\/images\/center_align.png);\"><\/div><\/div><div class=\"radioelement  last\"><div class=\"radioelement_img\" style=\"background-image: url(http:\/\/localhost\/thepdahoi.vn\/wp-content\/plugins\/nextend-smart-slider-lite\/includes\/modules\/mod_smartslider\/params\/offlajnradio\/images\/right_align.png);\"><\/div><\/div><div class=\"clear\"><\/div><\/div><input type=\"hidden\" id=\"paramscontrollfontalign\" name=\"params[controllfont]align\" value=\"left\"\/>"},"afont":{"name":"params[controllfont]afont","id":"paramscontrollfontafont","html":"<div class=\"offlajntextcontainer\" id=\"offlajntextcontainerparamscontrollfontafont\"><input  size=\"10\" class=\"offlajntext\" type=\"text\" id=\"paramscontrollfontafontinput\" value=\"Arial\"><\/div><div class=\"offlajnswitcher\">\r\n            <div class=\"offlajnswitcher_inner\" id=\"offlajnswitcher_innerparamscontrollfontafontunit\"><\/div>\r\n    <\/div><input type=\"hidden\" name=\"params[controllfont]afont[unit]\" id=\"paramscontrollfontafontunit\" value=\"1\" \/><input type=\"hidden\" name=\"params[controllfont]afont\" id=\"paramscontrollfontafont\" value=\"Arial||1\">"},"tshadow":{"name":"params[controllfont]tshadow","id":"paramscontrollfonttshadow","html":"<div id=\"offlajncombine_outerparamscontrollfonttshadow\" class=\"offlajncombine_outer\"><div class=\"offlajncombinefieldcontainer\"><div class=\"offlajncombinefield\"><div class=\"offlajntextcontainer\" id=\"offlajntextcontainerparamscontrollfonttshadow0\"><input  size=\"1\" class=\"offlajntext\" type=\"text\" id=\"paramscontrollfonttshadow0input\" value=\"0\"><div class=\"unit\">px<\/div><\/div><input type=\"hidden\" name=\"params[controllfont]tshadow0\" id=\"paramscontrollfonttshadow0\" value=\"0\"><\/div><\/div><div class=\"offlajncombinefieldcontainer\"><div class=\"offlajncombinefield\"><div class=\"offlajntextcontainer\" id=\"offlajntextcontainerparamscontrollfonttshadow1\"><input  size=\"1\" class=\"offlajntext\" type=\"text\" id=\"paramscontrollfonttshadow1input\" value=\"0\"><div class=\"unit\">px<\/div><\/div><input type=\"hidden\" name=\"params[controllfont]tshadow1\" id=\"paramscontrollfonttshadow1\" value=\"0\"><\/div><\/div><div class=\"offlajncombinefieldcontainer\"><div class=\"offlajncombinefield\"><div class=\"offlajntextcontainer\" id=\"offlajntextcontainerparamscontrollfonttshadow2\"><input  size=\"1\" class=\"offlajntext\" type=\"text\" id=\"paramscontrollfonttshadow2input\" value=\"0\"><div class=\"unit\">px<\/div><\/div><input type=\"hidden\" name=\"params[controllfont]tshadow2\" id=\"paramscontrollfonttshadow2\" value=\"0\"><\/div><\/div><div class=\"offlajncombinefieldcontainer\"><div class=\"offlajncombinefield\"><div class=\"offlajncolor\"><input type=\"text\" name=\"params[controllfont]tshadow3\" id=\"paramscontrollfonttshadow3\" value=\"000000\" class=\"color wa\" size=\"12\" \/><\/div><\/div><\/div><div class=\"offlajncombinefieldcontainer\"><div class=\"offlajncombinefield\"><div class=\"offlajnswitcher\">\r\n            <div class=\"offlajnswitcher_inner\" id=\"offlajnswitcher_innerparamscontrollfonttshadow4\"><\/div>\r\n    <\/div><input type=\"hidden\" name=\"params[controllfont]tshadow4\" id=\"paramscontrollfonttshadow4\" value=\"0\" \/><\/div><\/div><div class=\"offlajncombine_hider\"><\/div><\/div><input type=\"hidden\" name=\"params[controllfont]tshadow\" id=\"paramscontrollfonttshadow\" value='0|*|0|*|0|*|000000|*|0'>"},"lineheight":{"name":"params[controllfont]lineheight","id":"paramscontrollfontlineheight","html":"<div class=\"offlajntextcontainer\" id=\"offlajntextcontainerparamscontrollfontlineheight\"><input  size=\"5\" class=\"offlajntext\" type=\"text\" id=\"paramscontrollfontlineheightinput\" value=\"normal\"><\/div><input type=\"hidden\" name=\"params[controllfont]lineheight\" id=\"paramscontrollfontlineheight\" value=\"normal\">"}},
          script: "dojo.addOnLoad(function(){\r\n      new OfflajnRadio({\r\n        id: \"paramscontrollfonttab\",\r\n        values: [\"Text\"],\r\n        map: {\"Text\":0},\r\n        mode: \"\"\r\n      });\r\n    \n      new OfflajnList({\n        name: \"paramscontrollfonttype\",\n        elements: \"<div class=\\\"content\\\"><div class=\\\"listelement\\\">Alternative fonts<\\\/div><div class=\\\"listelement\\\">Cyrillic<\\\/div><div class=\\\"listelement\\\">CyrillicExtended<\\\/div><div class=\\\"listelement\\\">Greek<\\\/div><div class=\\\"listelement\\\">GreekExtended<\\\/div><div class=\\\"listelement\\\">Khmer<\\\/div><div class=\\\"listelement\\\">Latin<\\\/div><div class=\\\"listelement\\\">LatinExtended<\\\/div><div class=\\\"listelement\\\">Vietnamese<\\\/div><\\\/div>\",\n        options: [{\"value\":\"0\",\"text\":\"Alternative fonts\"},{\"value\":\"Cyrillic\",\"text\":\"Cyrillic\"},{\"value\":\"CyrillicExtended\",\"text\":\"CyrillicExtended\"},{\"value\":\"Greek\",\"text\":\"Greek\"},{\"value\":\"GreekExtended\",\"text\":\"GreekExtended\"},{\"value\":\"Khmer\",\"text\":\"Khmer\"},{\"value\":\"Latin\",\"text\":\"Latin\"},{\"value\":\"LatinExtended\",\"text\":\"LatinExtended\"},{\"value\":\"Vietnamese\",\"text\":\"Vietnamese\"}],\n        selectedIndex: 0,\n        height: 0,\n        fireshow: 0\n      });\n    dojo.addOnLoad(function(){ \r\n      new OfflajnSwitcher({\r\n        id: \"paramscontrollfontsizeunit\",\r\n        units: [\"px\",\"em\"],\r\n        values: [\"px\",\"em\"],\r\n        map: {\"px\":0,\"em\":1},\r\n        mode: 0,\r\n        url: \"http:\\\/\\\/localhost\\\/thepdahoi.vn\\\/wp-admin\\\/..\\\/modules\\\/mod_smartslider\\\/params\\\/offlajnswitcher\\\/images\\\/\"\r\n      }); \r\n    });\n      new OfflajnText({\n        id: \"paramscontrollfontsize\",\n        validation: \"int\",\n        attachunit: \"\",\n        mode: \"increment\",\n        scale: \"1\",\n        minus: 0,\n        onoff: \"\"\n      }); \n    \n    var el = dojo.byId(\"paramscontrollfontcolor\");\n    jQuery.fn.jPicker.defaults.images.clientPath=\"http:\/\/localhost\/thepdahoi.vn\/wp-content\/plugins\/nextend-smart-slider-lite\/joomla\/\/modules\/mod_smartslider\/params\/offlajndashboard\/..\/offlajncolor\/offlajncolor\/jpicker\/images\/\";\n    el.alphaSupport=false; \n    el.c = jQuery(\"#paramscontrollfontcolor\").jPicker({\n        window:{\n          expandable: true,\n          alphaSupport: false}\n        });\n    dojo.connect(el, \"change\", function(){\n      this.c[0].color.active.val(\"hex\", this.value);\n    });\n    \n      new OfflajnOnOff({\n        id: \"paramscontrollfontbold\",\n        mode: \"button\",\n        imgs: \"\"\n      }); \n    \n      new OfflajnOnOff({\n        id: \"paramscontrollfontitalic\",\n        mode: \"button\",\n        imgs: \"\"\n      }); \n    \n      new OfflajnOnOff({\n        id: \"paramscontrollfontunderline\",\n        mode: \"button\",\n        imgs: \"\"\n      }); \n    \r\n      new OfflajnRadio({\r\n        id: \"paramscontrollfontalign\",\r\n        values: [\"left\",\"center\",\"right\"],\r\n        map: {\"left\":0,\"center\":1,\"right\":2},\r\n        mode: \"image\"\r\n      });\r\n    dojo.addOnLoad(function(){ \r\n      new OfflajnSwitcher({\r\n        id: \"paramscontrollfontafontunit\",\r\n        units: [\"ON\",\"OFF\"],\r\n        values: [\"1\",\"0\"],\r\n        map: {\"1\":0,\"0\":1},\r\n        mode: 0,\r\n        url: \"http:\\\/\\\/localhost\\\/thepdahoi.vn\\\/wp-admin\\\/..\\\/modules\\\/mod_smartslider\\\/params\\\/offlajnswitcher\\\/images\\\/\"\r\n      }); \r\n    });\n      new OfflajnText({\n        id: \"paramscontrollfontafont\",\n        validation: \"\",\n        attachunit: \"\",\n        mode: \"\",\n        scale: \"\",\n        minus: 0,\n        onoff: \"1\"\n      }); \n    \n      new OfflajnText({\n        id: \"paramscontrollfonttshadow0\",\n        validation: \"float\",\n        attachunit: \"px\",\n        mode: \"\",\n        scale: \"\",\n        minus: 0,\n        onoff: \"\"\n      }); \n    \n      new OfflajnText({\n        id: \"paramscontrollfonttshadow1\",\n        validation: \"float\",\n        attachunit: \"px\",\n        mode: \"\",\n        scale: \"\",\n        minus: 0,\n        onoff: \"\"\n      }); \n    \n      new OfflajnText({\n        id: \"paramscontrollfonttshadow2\",\n        validation: \"float\",\n        attachunit: \"px\",\n        mode: \"\",\n        scale: \"\",\n        minus: 0,\n        onoff: \"\"\n      }); \n    \n    var el = dojo.byId(\"paramscontrollfonttshadow3\");\n    jQuery.fn.jPicker.defaults.images.clientPath=\"http:\/\/localhost\/thepdahoi.vn\/wp-content\/plugins\/nextend-smart-slider-lite\/joomla\/\/modules\/mod_smartslider\/params\/offlajndashboard\/..\/offlajncolor\/offlajncolor\/jpicker\/images\/\";\n    el.alphaSupport=false; \n    el.c = jQuery(\"#paramscontrollfonttshadow3\").jPicker({\n        window:{\n          expandable: true,\n          alphaSupport: false}\n        });\n    dojo.connect(el, \"change\", function(){\n      this.c[0].color.active.val(\"hex\", this.value);\n    });\n    dojo.addOnLoad(function(){ \r\n      new OfflajnSwitcher({\r\n        id: \"paramscontrollfonttshadow4\",\r\n        units: [\"ON\",\"OFF\"],\r\n        values: [\"1\",\"0\"],\r\n        map: {\"1\":0,\"0\":1},\r\n        mode: 0,\r\n        url: \"http:\\\/\\\/localhost\\\/thepdahoi.vn\\\/wp-admin\\\/..\\\/modules\\\/mod_smartslider\\\/params\\\/offlajnswitcher\\\/images\\\/\"\r\n      }); \r\n    });\r\n      new OfflajnCombine({\r\n        id: \"paramscontrollfonttshadow\",\r\n        num: 5,\r\n        switcherid: \"paramscontrollfonttshadow4\",\r\n        hideafter: \"0\"\r\n      }); \r\n    \n      new OfflajnText({\n        id: \"paramscontrollfontlineheight\",\n        validation: \"\",\n        attachunit: \"\",\n        mode: \"\",\n        scale: \"\",\n        minus: 0,\n        onoff: \"\"\n      }); \n    });"
        });
    

      new OfflajnOnOff({
        id: "paramstextshadow",
        mode: "",
        imgs: ""
      }); 
    

        new FontConfigurator({
          id: "paramsheadingfont",
          defaultTab: "Heading",
          origsettings: {"Heading":{},"Subheading":{}},
          elements: {"tab":{"name":"params[headingfont]tab","id":"paramsheadingfonttab","html":"<div class=\"offlajnradiocontainerbutton\" id=\"offlajnradiocontainerparamsheadingfonttab\"><div class=\"radioelement first selected\">Heading<\/div><div class=\"radioelement  last\">Subheading<\/div><div class=\"clear\"><\/div><\/div><input type=\"hidden\" id=\"paramsheadingfonttab\" name=\"params[headingfont]tab\" value=\"Heading\"\/>"},"type":{"name":"params[headingfont]type","id":"paramsheadingfonttype","Cyrillic":{"name":"params[headingfont]family","id":"paramsheadingfontfamily","html":"<div style='position:relative;'><div id=\"offlajnlistcontainerparamsheadingfontfamily\" class=\"gk_hack offlajnlistcontainer\"><div class=\"gk_hack offlajnlist\"><span class=\"offlajnlistcurrent\">Open Sans<br \/>Andika<br \/>Anonymous Pro<br \/>Cuprum<br \/>Didact Gothic<br \/>EB Garamond<br \/>Istok Web<br \/>Jura<br \/>Forum<br \/>Kelly Slab<br \/>Lobster<br \/>Neucha<br \/>Open Sans<br \/>Open Sans Condensed<br \/>Philosopher<br \/>Play<br \/>PT Sans<br \/>PT Sans Caption<br \/>PT Sans Narrow<br \/>PT Serif<br \/>PT Serif Caption<br \/>Ruslan Display<br \/>Tenor Sans<br \/>Ubuntu<br \/><\/span><div class=\"offlajnlistbtn\"><span><\/span><\/div><\/div><input type=\"hidden\" name=\"params[headingfont]family\" id=\"paramsheadingfontfamily\" value=\"Open Sans\"\/><\/div><\/div>","script":"dojo.addOnLoad(function(){\n      new OfflajnList({\n        name: \"paramsheadingfontfamily\",\n        elements: \"<div class=\\\"content\\\"><div class=\\\"listelement\\\">Andika<\\\/div><div class=\\\"listelement\\\">Anonymous Pro<\\\/div><div class=\\\"listelement\\\">Cuprum<\\\/div><div class=\\\"listelement\\\">Didact Gothic<\\\/div><div class=\\\"listelement\\\">EB Garamond<\\\/div><div class=\\\"listelement\\\">Istok Web<\\\/div><div class=\\\"listelement\\\">Jura<\\\/div><div class=\\\"listelement\\\">Forum<\\\/div><div class=\\\"listelement\\\">Kelly Slab<\\\/div><div class=\\\"listelement\\\">Lobster<\\\/div><div class=\\\"listelement\\\">Neucha<\\\/div><div class=\\\"listelement\\\">Open Sans<\\\/div><div class=\\\"listelement\\\">Open Sans Condensed<\\\/div><div class=\\\"listelement\\\">Philosopher<\\\/div><div class=\\\"listelement\\\">Play<\\\/div><div class=\\\"listelement\\\">PT Sans<\\\/div><div class=\\\"listelement\\\">PT Sans Caption<\\\/div><div class=\\\"listelement\\\">PT Sans Narrow<\\\/div><div class=\\\"listelement\\\">PT Serif<\\\/div><div class=\\\"listelement\\\">PT Serif Caption<\\\/div><div class=\\\"listelement\\\">Ruslan Display<\\\/div><div class=\\\"listelement\\\">Tenor Sans<\\\/div><div class=\\\"listelement\\\">Ubuntu<\\\/div><\\\/div>\",\n        options: [{\"value\":\"Andika\",\"text\":\"Andika\"},{\"value\":\"Anonymous Pro\",\"text\":\"Anonymous Pro\"},{\"value\":\"Cuprum\",\"text\":\"Cuprum\"},{\"value\":\"Didact Gothic\",\"text\":\"Didact Gothic\"},{\"value\":\"EB Garamond\",\"text\":\"EB Garamond\"},{\"value\":\"Istok Web\",\"text\":\"Istok Web\"},{\"value\":\"Jura\",\"text\":\"Jura\"},{\"value\":\"Forum\",\"text\":\"Forum\"},{\"value\":\"Kelly Slab\",\"text\":\"Kelly Slab\"},{\"value\":\"Lobster\",\"text\":\"Lobster\"},{\"value\":\"Neucha\",\"text\":\"Neucha\"},{\"value\":\"Open Sans\",\"text\":\"Open Sans\"},{\"value\":\"Open Sans Condensed\",\"text\":\"Open Sans Condensed\"},{\"value\":\"Philosopher\",\"text\":\"Philosopher\"},{\"value\":\"Play\",\"text\":\"Play\"},{\"value\":\"PT Sans\",\"text\":\"PT Sans\"},{\"value\":\"PT Sans Caption\",\"text\":\"PT Sans Caption\"},{\"value\":\"PT Sans Narrow\",\"text\":\"PT Sans Narrow\"},{\"value\":\"PT Serif\",\"text\":\"PT Serif\"},{\"value\":\"PT Serif Caption\",\"text\":\"PT Serif Caption\"},{\"value\":\"Ruslan Display\",\"text\":\"Ruslan Display\"},{\"value\":\"Tenor Sans\",\"text\":\"Tenor Sans\"},{\"value\":\"Ubuntu\",\"text\":\"Ubuntu\"}],\n        selectedIndex: 11,\n        height: \"10\",\n        fireshow: 1\n      });\n    });"},"CyrillicExtended":{"name":"params[headingfont]family","id":"paramsheadingfontfamily","html":"<div style='position:relative;'><div id=\"offlajnlistcontainerparamsheadingfontfamily\" class=\"gk_hack offlajnlistcontainer\"><div class=\"gk_hack offlajnlist\"><span class=\"offlajnlistcurrent\">Open Sans<br \/>Andika<br \/>Anonymous Pro<br \/>Didact Gothic<br \/>EB Garamond<br \/>Istok Web<br \/>Jura<br \/>Forum<br \/>Lobster<br \/>Open Sans<br \/>Open Sans Condensed<br \/>Play<br \/>Ruslan Display<br \/>Tenor Sans<br \/>Ubuntu<br \/><\/span><div class=\"offlajnlistbtn\"><span><\/span><\/div><\/div><input type=\"hidden\" name=\"params[headingfont]family\" id=\"paramsheadingfontfamily\" value=\"Open Sans\"\/><\/div><\/div>","script":"dojo.addOnLoad(function(){\n      new OfflajnList({\n        name: \"paramsheadingfontfamily\",\n        elements: \"<div class=\\\"content\\\"><div class=\\\"listelement\\\">Andika<\\\/div><div class=\\\"listelement\\\">Anonymous Pro<\\\/div><div class=\\\"listelement\\\">Didact Gothic<\\\/div><div class=\\\"listelement\\\">EB Garamond<\\\/div><div class=\\\"listelement\\\">Istok Web<\\\/div><div class=\\\"listelement\\\">Jura<\\\/div><div class=\\\"listelement\\\">Forum<\\\/div><div class=\\\"listelement\\\">Lobster<\\\/div><div class=\\\"listelement\\\">Open Sans<\\\/div><div class=\\\"listelement\\\">Open Sans Condensed<\\\/div><div class=\\\"listelement\\\">Play<\\\/div><div class=\\\"listelement\\\">Ruslan Display<\\\/div><div class=\\\"listelement\\\">Tenor Sans<\\\/div><div class=\\\"listelement\\\">Ubuntu<\\\/div><\\\/div>\",\n        options: [{\"value\":\"Andika\",\"text\":\"Andika\"},{\"value\":\"Anonymous Pro\",\"text\":\"Anonymous Pro\"},{\"value\":\"Didact Gothic\",\"text\":\"Didact Gothic\"},{\"value\":\"EB Garamond\",\"text\":\"EB Garamond\"},{\"value\":\"Istok Web\",\"text\":\"Istok Web\"},{\"value\":\"Jura\",\"text\":\"Jura\"},{\"value\":\"Forum\",\"text\":\"Forum\"},{\"value\":\"Lobster\",\"text\":\"Lobster\"},{\"value\":\"Open Sans\",\"text\":\"Open Sans\"},{\"value\":\"Open Sans Condensed\",\"text\":\"Open Sans Condensed\"},{\"value\":\"Play\",\"text\":\"Play\"},{\"value\":\"Ruslan Display\",\"text\":\"Ruslan Display\"},{\"value\":\"Tenor Sans\",\"text\":\"Tenor Sans\"},{\"value\":\"Ubuntu\",\"text\":\"Ubuntu\"}],\n        selectedIndex: 8,\n        height: \"10\",\n        fireshow: 1\n      });\n    });"},"Greek":{"name":"params[headingfont]family","id":"paramsheadingfontfamily","html":"<div style='position:relative;'><div id=\"offlajnlistcontainerparamsheadingfontfamily\" class=\"gk_hack offlajnlistcontainer\"><div class=\"gk_hack offlajnlist\"><span class=\"offlajnlistcurrent\">Open Sans<br \/>Anonymous Pro<br \/>Caudex<br \/>Didact Gothic<br \/>Jura<br \/>GFS Didot<br \/>GFS Neohellenic<br \/>Nova Mono<br \/>Open Sans<br \/>Open Sans Condensed<br \/>Play<br \/>Ubuntu<br \/><\/span><div class=\"offlajnlistbtn\"><span><\/span><\/div><\/div><input type=\"hidden\" name=\"params[headingfont]family\" id=\"paramsheadingfontfamily\" value=\"Open Sans\"\/><\/div><\/div>","script":"dojo.addOnLoad(function(){\n      new OfflajnList({\n        name: \"paramsheadingfontfamily\",\n        elements: \"<div class=\\\"content\\\"><div class=\\\"listelement\\\">Anonymous Pro<\\\/div><div class=\\\"listelement\\\">Caudex<\\\/div><div class=\\\"listelement\\\">Didact Gothic<\\\/div><div class=\\\"listelement\\\">Jura<\\\/div><div class=\\\"listelement\\\">GFS Didot<\\\/div><div class=\\\"listelement\\\">GFS Neohellenic<\\\/div><div class=\\\"listelement\\\">Nova Mono<\\\/div><div class=\\\"listelement\\\">Open Sans<\\\/div><div class=\\\"listelement\\\">Open Sans Condensed<\\\/div><div class=\\\"listelement\\\">Play<\\\/div><div class=\\\"listelement\\\">Ubuntu<\\\/div><\\\/div>\",\n        options: [{\"value\":\"Anonymous Pro\",\"text\":\"Anonymous Pro\"},{\"value\":\"Caudex\",\"text\":\"Caudex\"},{\"value\":\"Didact Gothic\",\"text\":\"Didact Gothic\"},{\"value\":\"Jura\",\"text\":\"Jura\"},{\"value\":\"GFS Didot\",\"text\":\"GFS Didot\"},{\"value\":\"GFS Neohellenic\",\"text\":\"GFS Neohellenic\"},{\"value\":\"Nova Mono\",\"text\":\"Nova Mono\"},{\"value\":\"Open Sans\",\"text\":\"Open Sans\"},{\"value\":\"Open Sans Condensed\",\"text\":\"Open Sans Condensed\"},{\"value\":\"Play\",\"text\":\"Play\"},{\"value\":\"Ubuntu\",\"text\":\"Ubuntu\"}],\n        selectedIndex: 7,\n        height: \"10\",\n        fireshow: 1\n      });\n    });"},"GreekExtended":{"name":"params[headingfont]family","id":"paramsheadingfontfamily","html":"<div style='position:relative;'><div id=\"offlajnlistcontainerparamsheadingfontfamily\" class=\"gk_hack offlajnlistcontainer\"><div class=\"gk_hack offlajnlist\"><span class=\"offlajnlistcurrent\">Open Sans<br \/>Anonymous Pro<br \/>Caudex<br \/>Didact Gothic<br \/>Jura<br \/>Open Sans<br \/>Open Sans Condensed<br \/>Play<br \/>Ubuntu<br \/><\/span><div class=\"offlajnlistbtn\"><span><\/span><\/div><\/div><input type=\"hidden\" name=\"params[headingfont]family\" id=\"paramsheadingfontfamily\" value=\"Open Sans\"\/><\/div><\/div>","script":"dojo.addOnLoad(function(){\n      new OfflajnList({\n        name: \"paramsheadingfontfamily\",\n        elements: \"<div class=\\\"content\\\"><div class=\\\"listelement\\\">Anonymous Pro<\\\/div><div class=\\\"listelement\\\">Caudex<\\\/div><div class=\\\"listelement\\\">Didact Gothic<\\\/div><div class=\\\"listelement\\\">Jura<\\\/div><div class=\\\"listelement\\\">Open Sans<\\\/div><div class=\\\"listelement\\\">Open Sans Condensed<\\\/div><div class=\\\"listelement\\\">Play<\\\/div><div class=\\\"listelement\\\">Ubuntu<\\\/div><\\\/div>\",\n        options: [{\"value\":\"Anonymous Pro\",\"text\":\"Anonymous Pro\"},{\"value\":\"Caudex\",\"text\":\"Caudex\"},{\"value\":\"Didact Gothic\",\"text\":\"Didact Gothic\"},{\"value\":\"Jura\",\"text\":\"Jura\"},{\"value\":\"Open Sans\",\"text\":\"Open Sans\"},{\"value\":\"Open Sans Condensed\",\"text\":\"Open Sans Condensed\"},{\"value\":\"Play\",\"text\":\"Play\"},{\"value\":\"Ubuntu\",\"text\":\"Ubuntu\"}],\n        selectedIndex: 4,\n        height: \"10\",\n        fireshow: 1\n      });\n    });"},"Khmer":{"name":"params[headingfont]family","id":"paramsheadingfontfamily","html":"<div style='position:relative;'><div id=\"offlajnlistcontainerparamsheadingfontfamily\" class=\"gk_hack offlajnlistcontainer\"><div class=\"gk_hack offlajnlist\"><span class=\"offlajnlistcurrent\">Angkor<br \/>Angkor<br \/>Battambang<br \/>Bayon<br \/>Bokor<br \/>Chenla<br \/>Content<br \/>Dangrek<br \/>Freehand<br \/>Hanuman<br \/>Khmer<br \/>Koulen<br \/>Metal<br \/>Moul<br \/>Moulpali<br \/>Odor Mean Chey<br \/>Preahvihear<br \/>Siemreap<br \/>Suwannaphum<br \/>Taprom<br \/><\/span><div class=\"offlajnlistbtn\"><span><\/span><\/div><\/div><input type=\"hidden\" name=\"params[headingfont]family\" id=\"paramsheadingfontfamily\" value=\"Angkor\"\/><\/div><\/div>","script":"dojo.addOnLoad(function(){\n      new OfflajnList({\n        name: \"paramsheadingfontfamily\",\n        elements: \"<div class=\\\"content\\\"><div class=\\\"listelement\\\">Angkor<\\\/div><div class=\\\"listelement\\\">Battambang<\\\/div><div class=\\\"listelement\\\">Bayon<\\\/div><div class=\\\"listelement\\\">Bokor<\\\/div><div class=\\\"listelement\\\">Chenla<\\\/div><div class=\\\"listelement\\\">Content<\\\/div><div class=\\\"listelement\\\">Dangrek<\\\/div><div class=\\\"listelement\\\">Freehand<\\\/div><div class=\\\"listelement\\\">Hanuman<\\\/div><div class=\\\"listelement\\\">Khmer<\\\/div><div class=\\\"listelement\\\">Koulen<\\\/div><div class=\\\"listelement\\\">Metal<\\\/div><div class=\\\"listelement\\\">Moul<\\\/div><div class=\\\"listelement\\\">Moulpali<\\\/div><div class=\\\"listelement\\\">Odor Mean Chey<\\\/div><div class=\\\"listelement\\\">Preahvihear<\\\/div><div class=\\\"listelement\\\">Siemreap<\\\/div><div class=\\\"listelement\\\">Suwannaphum<\\\/div><div class=\\\"listelement\\\">Taprom<\\\/div><\\\/div>\",\n        options: [{\"value\":\"Angkor\",\"text\":\"Angkor\"},{\"value\":\"Battambang\",\"text\":\"Battambang\"},{\"value\":\"Bayon\",\"text\":\"Bayon\"},{\"value\":\"Bokor\",\"text\":\"Bokor\"},{\"value\":\"Chenla\",\"text\":\"Chenla\"},{\"value\":\"Content\",\"text\":\"Content\"},{\"value\":\"Dangrek\",\"text\":\"Dangrek\"},{\"value\":\"Freehand\",\"text\":\"Freehand\"},{\"value\":\"Hanuman\",\"text\":\"Hanuman\"},{\"value\":\"Khmer\",\"text\":\"Khmer\"},{\"value\":\"Koulen\",\"text\":\"Koulen\"},{\"value\":\"Metal\",\"text\":\"Metal\"},{\"value\":\"Moul\",\"text\":\"Moul\"},{\"value\":\"Moulpali\",\"text\":\"Moulpali\"},{\"value\":\"Odor Mean Chey\",\"text\":\"Odor Mean Chey\"},{\"value\":\"Preahvihear\",\"text\":\"Preahvihear\"},{\"value\":\"Siemreap\",\"text\":\"Siemreap\"},{\"value\":\"Suwannaphum\",\"text\":\"Suwannaphum\"},{\"value\":\"Taprom\",\"text\":\"Taprom\"}],\n        selectedIndex: 0,\n        height: \"10\",\n        fireshow: 1\n      });\n    });"},"Latin":{"name":"params[headingfont]family","id":"paramsheadingfontfamily","html":"<div style='position:relative;'><div id=\"offlajnlistcontainerparamsheadingfontfamily\" class=\"gk_hack offlajnlistcontainer\"><div class=\"gk_hack offlajnlist\"><span class=\"offlajnlistcurrent\">Open Sans<br \/>Abel<br \/>Abril Fatface<br \/>Aclonica<br \/>Actor<br \/>Aldrich<br \/>Alice<br \/>Alike<br \/>Allan<br \/>Allerta<br \/>Allerta Stencil<br \/>Amaranth<br \/>Andika<br \/>Annie Use Your Telescope<br \/>Anonymous Pro<br \/>Antic<br \/>Anton<br \/>Architects Daughter<br \/>Arimo<br \/>Artifika<br \/>Arvo<br \/>Asap<br \/>Asul<br \/>Asset<br \/>Astloch<br \/>Aubrey<br \/>Bangers<br \/>Bentham<br \/>Bevan<br \/>Bigshot One<br \/>Black Ops One<br \/>Bowlby One<br \/>Bowlby One SC<br \/>Brawler<br \/>Buda<br \/>Cabin<br \/>Cabin Sketch<br \/>Calligraffitti<br \/>Candal<br \/>Cantarell<br \/>Cardo<br \/>Carme<br \/>Carter One<br \/>Caudex<br \/>Cedarville Cursive<br \/>Cherry Cream Soda<br \/>Chewy<br \/>Chivo<br \/>Coda<br \/>Coda Caption<br \/>Comfortaa<br \/>Coming Soon<br \/>Convergence<br \/>Copse<br \/>Corben<br \/>Cousine<br \/>Coustard<br \/>Covered By Your Grace<br \/>Crafty Girls<br \/>Crimson Text<br \/>Crushed<br \/>Cuprum<br \/>Damion<br \/>Dancing Script<br \/>Dawning of a New Day<br \/>Days One<br \/>Delius<br \/>Delius Swash Caps<br \/>Delius Unicase<br \/>Didact Gothic<br \/>Dorsa<br \/>Droid Sans<br \/>Droid Sans Mono<br \/>Droid Serif<br \/>EB Garamond<br \/>Exo<br \/>Expletus Sans<br \/>Fanwood Text<br \/>Federo<br \/>Fontdiner Swanky<br \/>Forum<br \/>Francois One<br \/>Gentium Basic<br \/>Gentium Book Basic<br \/>Geo<br \/>Geostar<br \/>Geostar Fill<br \/>Give You Glory<br \/>Gloria Hallelujah<br \/>Goblin One<br \/>Goudy Bookletter 1911<br \/>Gravitas One<br \/>Gruppo<br \/>Hammersmith One<br \/>Holtwood One SC<br \/>Homemade Apple<br \/>IM Fell DW Pica<br \/>IM Fell DW Pica SC<br \/>IM Fell Double Pica<br \/>IM Fell Double Pica SC<br \/>IM Fell English<br \/>IM Fell English SC<br \/>IM Fell French Canon<br \/>IM Fell French Canon SC<br \/>IM Fell Great Primer<br \/>IM Fell Great Primer SC<br \/>Inconsolata<br \/>Inder<br \/>Indie Flower<br \/>Irish Grover<br \/>Istok Web<br \/>Josefin Sans<br \/>Josefin Slab<br \/>Judson<br \/>Jura<br \/>Just Another Hand<br \/>Just Me Again Down Here<br \/>Kameron<br \/>Kelly Slab<br \/>Kenia<br \/>Kranky<br \/>Kreon<br \/>Kristi<br \/>La Belle Aurore<br \/>Lato<br \/>League Script<br \/>Leckerli One<br \/>Lekton<br \/>Limelight<br \/>Lobster<br \/>Lobster Two<br \/>Lora<br \/>Love Ya Like A Sister<br \/>Loved by the King<br \/>Luckiest Guy<br \/>Magra<br \/>Maiden Orange<br \/>Mako<br \/>Marvel<br \/>Maven Pro<br \/>Meddon<br \/>MedievalSharp<br \/>Megrim<br \/>Merriweather<br \/>Metrophobic<br \/>Michroma<br \/>Miltonian<br \/>Miltonian Tattoo<br \/>Modern Antiqua<br \/>Molengo<br \/>Monofett<br \/>Monoton<br \/>Montez<br \/>Mountains of Christmas<br \/>Muli<br \/>Neucha<br \/>Neuton<br \/>News Cycle<br \/>Nixie One<br \/>Nobile<br \/>Nothing You Could Do<br \/>Nova Cut<br \/>Nova Flat<br \/>Nova Mono<br \/>Nova Oval<br \/>Nova Round<br \/>Nova Script<br \/>Nova Slim<br \/>Nova Square<br \/>Numans<br \/>Nunito<br \/>OFL Sorts Mill Goudy TT<br \/>Old Standard TT<br \/>Open Sans<br \/>Open Sans Condensed<br \/>Orbitron<br \/>Oswald<br \/>Over the Rainbow<br \/>Ovo<br \/>PT Sans<br \/>PT Sans Caption<br \/>PT Sans Narrow<br \/>PT Serif<br \/>PT Serif Caption<br \/>Pacifico<br \/>Passero One<br \/>Patrick Hand<br \/>Paytone One<br \/>Permanent Marker<br \/>Philosopher<br \/>Play<br \/>Playfair Display<br \/>Podkova<br \/>Pompiere<br \/>Prociono<br \/>Puritan<br \/>Quattrocento<br \/>Quattrocento Sans<br \/>Questrial<br \/>Quicksand<br \/>Radley<br \/>Raleway<br \/>Rationale<br \/>Redressed<br \/>Reenie Beanie<br \/>Rochester<br \/>Rock Salt<br \/>Rokkitt<br \/>Ropa Sans<br \/>Rosario<br \/>Ruslan Display<br \/>Schoolbell<br \/>Shadows Into Light<br \/>Shanti<br \/>Short Stack<br \/>Sigmar One<br \/>Signika<br \/>Signika Negative<br \/>Six Caps<br \/>Slackey<br \/>Smokum<br \/>Smythe<br \/>Sniglet<br \/>Snippet<br \/>Special Elite<br \/>Stardos Stencil<br \/>Sue Ellen Francisco<br \/>Sunshiney<br \/>Swanky and Moo Moo<br \/>Syncopate<br \/>Tangerine<br \/>Telex<br \/>Tenor Sans<br \/>Terminal Dosis Light<br \/>The Girl Next Door<br \/>Tienne<br \/>Tinos<br \/>Tulpen One<br \/>Ubuntu<br \/>Ultra<br \/>UnifrakturCook<br \/>UnifrakturMaguntia<br \/>Unkempt<br \/>Unna<br \/>VT323<br \/>Varela<br \/>Varela Round<br \/>Vibur<br \/>Viga<br \/>Vidaloka<br \/>Volkhov<br \/>Vollkorn<br \/>Voltaire<br \/>Waiting for the Sunrise<br \/>Wallpoet<br \/>Walter Turncoat<br \/>Wire One<br \/>Yanone Kaffeesatz<br \/>Yellowtail<br \/>Yeseva One<br \/>Zeyada<br \/><\/span><div class=\"offlajnlistbtn\"><span><\/span><\/div><\/div><input type=\"hidden\" name=\"params[headingfont]family\" id=\"paramsheadingfontfamily\" value=\"Open Sans\"\/><\/div><\/div>","script":"dojo.addOnLoad(function(){\n      new OfflajnList({\n        name: \"paramsheadingfontfamily\",\n        elements: \"<div class=\\\"content\\\"><div class=\\\"listelement\\\">Abel<\\\/div><div class=\\\"listelement\\\">Abril Fatface<\\\/div><div class=\\\"listelement\\\">Aclonica<\\\/div><div class=\\\"listelement\\\">Actor<\\\/div><div class=\\\"listelement\\\">Aldrich<\\\/div><div class=\\\"listelement\\\">Alice<\\\/div><div class=\\\"listelement\\\">Alike<\\\/div><div class=\\\"listelement\\\">Allan<\\\/div><div class=\\\"listelement\\\">Allerta<\\\/div><div class=\\\"listelement\\\">Allerta Stencil<\\\/div><div class=\\\"listelement\\\">Amaranth<\\\/div><div class=\\\"listelement\\\">Andika<\\\/div><div class=\\\"listelement\\\">Annie Use Your Telescope<\\\/div><div class=\\\"listelement\\\">Anonymous Pro<\\\/div><div class=\\\"listelement\\\">Antic<\\\/div><div class=\\\"listelement\\\">Anton<\\\/div><div class=\\\"listelement\\\">Architects Daughter<\\\/div><div class=\\\"listelement\\\">Arimo<\\\/div><div class=\\\"listelement\\\">Artifika<\\\/div><div class=\\\"listelement\\\">Arvo<\\\/div><div class=\\\"listelement\\\">Asap<\\\/div><div class=\\\"listelement\\\">Asul<\\\/div><div class=\\\"listelement\\\">Asset<\\\/div><div class=\\\"listelement\\\">Astloch<\\\/div><div class=\\\"listelement\\\">Aubrey<\\\/div><div class=\\\"listelement\\\">Bangers<\\\/div><div class=\\\"listelement\\\">Bentham<\\\/div><div class=\\\"listelement\\\">Bevan<\\\/div><div class=\\\"listelement\\\">Bigshot One<\\\/div><div class=\\\"listelement\\\">Black Ops One<\\\/div><div class=\\\"listelement\\\">Bowlby One<\\\/div><div class=\\\"listelement\\\">Bowlby One SC<\\\/div><div class=\\\"listelement\\\">Brawler<\\\/div><div class=\\\"listelement\\\">Buda<\\\/div><div class=\\\"listelement\\\">Cabin<\\\/div><div class=\\\"listelement\\\">Cabin Sketch<\\\/div><div class=\\\"listelement\\\">Calligraffitti<\\\/div><div class=\\\"listelement\\\">Candal<\\\/div><div class=\\\"listelement\\\">Cantarell<\\\/div><div class=\\\"listelement\\\">Cardo<\\\/div><div class=\\\"listelement\\\">Carme<\\\/div><div class=\\\"listelement\\\">Carter One<\\\/div><div class=\\\"listelement\\\">Caudex<\\\/div><div class=\\\"listelement\\\">Cedarville Cursive<\\\/div><div class=\\\"listelement\\\">Cherry Cream Soda<\\\/div><div class=\\\"listelement\\\">Chewy<\\\/div><div class=\\\"listelement\\\">Chivo<\\\/div><div class=\\\"listelement\\\">Coda<\\\/div><div class=\\\"listelement\\\">Coda Caption<\\\/div><div class=\\\"listelement\\\">Comfortaa<\\\/div><div class=\\\"listelement\\\">Coming Soon<\\\/div><div class=\\\"listelement\\\">Convergence<\\\/div><div class=\\\"listelement\\\">Copse<\\\/div><div class=\\\"listelement\\\">Corben<\\\/div><div class=\\\"listelement\\\">Cousine<\\\/div><div class=\\\"listelement\\\">Coustard<\\\/div><div class=\\\"listelement\\\">Covered By Your Grace<\\\/div><div class=\\\"listelement\\\">Crafty Girls<\\\/div><div class=\\\"listelement\\\">Crimson Text<\\\/div><div class=\\\"listelement\\\">Crushed<\\\/div><div class=\\\"listelement\\\">Cuprum<\\\/div><div class=\\\"listelement\\\">Damion<\\\/div><div class=\\\"listelement\\\">Dancing Script<\\\/div><div class=\\\"listelement\\\">Dawning of a New Day<\\\/div><div class=\\\"listelement\\\">Days One<\\\/div><div class=\\\"listelement\\\">Delius<\\\/div><div class=\\\"listelement\\\">Delius Swash Caps<\\\/div><div class=\\\"listelement\\\">Delius Unicase<\\\/div><div class=\\\"listelement\\\">Didact Gothic<\\\/div><div class=\\\"listelement\\\">Dorsa<\\\/div><div class=\\\"listelement\\\">Droid Sans<\\\/div><div class=\\\"listelement\\\">Droid Sans Mono<\\\/div><div class=\\\"listelement\\\">Droid Serif<\\\/div><div class=\\\"listelement\\\">EB Garamond<\\\/div><div class=\\\"listelement\\\">Exo<\\\/div><div class=\\\"listelement\\\">Expletus Sans<\\\/div><div class=\\\"listelement\\\">Fanwood Text<\\\/div><div class=\\\"listelement\\\">Federo<\\\/div><div class=\\\"listelement\\\">Fontdiner Swanky<\\\/div><div class=\\\"listelement\\\">Forum<\\\/div><div class=\\\"listelement\\\">Francois One<\\\/div><div class=\\\"listelement\\\">Gentium Basic<\\\/div><div class=\\\"listelement\\\">Gentium Book Basic<\\\/div><div class=\\\"listelement\\\">Geo<\\\/div><div class=\\\"listelement\\\">Geostar<\\\/div><div class=\\\"listelement\\\">Geostar Fill<\\\/div><div class=\\\"listelement\\\">Give You Glory<\\\/div><div class=\\\"listelement\\\">Gloria Hallelujah<\\\/div><div class=\\\"listelement\\\">Goblin One<\\\/div><div class=\\\"listelement\\\">Goudy Bookletter 1911<\\\/div><div class=\\\"listelement\\\">Gravitas One<\\\/div><div class=\\\"listelement\\\">Gruppo<\\\/div><div class=\\\"listelement\\\">Hammersmith One<\\\/div><div class=\\\"listelement\\\">Holtwood One SC<\\\/div><div class=\\\"listelement\\\">Homemade Apple<\\\/div><div class=\\\"listelement\\\">IM Fell DW Pica<\\\/div><div class=\\\"listelement\\\">IM Fell DW Pica SC<\\\/div><div class=\\\"listelement\\\">IM Fell Double Pica<\\\/div><div class=\\\"listelement\\\">IM Fell Double Pica SC<\\\/div><div class=\\\"listelement\\\">IM Fell English<\\\/div><div class=\\\"listelement\\\">IM Fell English SC<\\\/div><div class=\\\"listelement\\\">IM Fell French Canon<\\\/div><div class=\\\"listelement\\\">IM Fell French Canon SC<\\\/div><div class=\\\"listelement\\\">IM Fell Great Primer<\\\/div><div class=\\\"listelement\\\">IM Fell Great Primer SC<\\\/div><div class=\\\"listelement\\\">Inconsolata<\\\/div><div class=\\\"listelement\\\">Inder<\\\/div><div class=\\\"listelement\\\">Indie Flower<\\\/div><div class=\\\"listelement\\\">Irish Grover<\\\/div><div class=\\\"listelement\\\">Istok Web<\\\/div><div class=\\\"listelement\\\">Josefin Sans<\\\/div><div class=\\\"listelement\\\">Josefin Slab<\\\/div><div class=\\\"listelement\\\">Judson<\\\/div><div class=\\\"listelement\\\">Jura<\\\/div><div class=\\\"listelement\\\">Just Another Hand<\\\/div><div class=\\\"listelement\\\">Just Me Again Down Here<\\\/div><div class=\\\"listelement\\\">Kameron<\\\/div><div class=\\\"listelement\\\">Kelly Slab<\\\/div><div class=\\\"listelement\\\">Kenia<\\\/div><div class=\\\"listelement\\\">Kranky<\\\/div><div class=\\\"listelement\\\">Kreon<\\\/div><div class=\\\"listelement\\\">Kristi<\\\/div><div class=\\\"listelement\\\">La Belle Aurore<\\\/div><div class=\\\"listelement\\\">Lato<\\\/div><div class=\\\"listelement\\\">League Script<\\\/div><div class=\\\"listelement\\\">Leckerli One<\\\/div><div class=\\\"listelement\\\">Lekton<\\\/div><div class=\\\"listelement\\\">Limelight<\\\/div><div class=\\\"listelement\\\">Lobster<\\\/div><div class=\\\"listelement\\\">Lobster Two<\\\/div><div class=\\\"listelement\\\">Lora<\\\/div><div class=\\\"listelement\\\">Love Ya Like A Sister<\\\/div><div class=\\\"listelement\\\">Loved by the King<\\\/div><div class=\\\"listelement\\\">Luckiest Guy<\\\/div><div class=\\\"listelement\\\">Magra<\\\/div><div class=\\\"listelement\\\">Maiden Orange<\\\/div><div class=\\\"listelement\\\">Mako<\\\/div><div class=\\\"listelement\\\">Marvel<\\\/div><div class=\\\"listelement\\\">Maven Pro<\\\/div><div class=\\\"listelement\\\">Meddon<\\\/div><div class=\\\"listelement\\\">MedievalSharp<\\\/div><div class=\\\"listelement\\\">Megrim<\\\/div><div class=\\\"listelement\\\">Merriweather<\\\/div><div class=\\\"listelement\\\">Metrophobic<\\\/div><div class=\\\"listelement\\\">Michroma<\\\/div><div class=\\\"listelement\\\">Miltonian<\\\/div><div class=\\\"listelement\\\">Miltonian Tattoo<\\\/div><div class=\\\"listelement\\\">Modern Antiqua<\\\/div><div class=\\\"listelement\\\">Molengo<\\\/div><div class=\\\"listelement\\\">Monofett<\\\/div><div class=\\\"listelement\\\">Monoton<\\\/div><div class=\\\"listelement\\\">Montez<\\\/div><div class=\\\"listelement\\\">Mountains of Christmas<\\\/div><div class=\\\"listelement\\\">Muli<\\\/div><div class=\\\"listelement\\\">Neucha<\\\/div><div class=\\\"listelement\\\">Neuton<\\\/div><div class=\\\"listelement\\\">News Cycle<\\\/div><div class=\\\"listelement\\\">Nixie One<\\\/div><div class=\\\"listelement\\\">Nobile<\\\/div><div class=\\\"listelement\\\">Nothing You Could Do<\\\/div><div class=\\\"listelement\\\">Nova Cut<\\\/div><div class=\\\"listelement\\\">Nova Flat<\\\/div><div class=\\\"listelement\\\">Nova Mono<\\\/div><div class=\\\"listelement\\\">Nova Oval<\\\/div><div class=\\\"listelement\\\">Nova Round<\\\/div><div class=\\\"listelement\\\">Nova Script<\\\/div><div class=\\\"listelement\\\">Nova Slim<\\\/div><div class=\\\"listelement\\\">Nova Square<\\\/div><div class=\\\"listelement\\\">Numans<\\\/div><div class=\\\"listelement\\\">Nunito<\\\/div><div class=\\\"listelement\\\">OFL Sorts Mill Goudy TT<\\\/div><div class=\\\"listelement\\\">Old Standard TT<\\\/div><div class=\\\"listelement\\\">Open Sans<\\\/div><div class=\\\"listelement\\\">Open Sans Condensed<\\\/div><div class=\\\"listelement\\\">Orbitron<\\\/div><div class=\\\"listelement\\\">Oswald<\\\/div><div class=\\\"listelement\\\">Over the Rainbow<\\\/div><div class=\\\"listelement\\\">Ovo<\\\/div><div class=\\\"listelement\\\">PT Sans<\\\/div><div class=\\\"listelement\\\">PT Sans Caption<\\\/div><div class=\\\"listelement\\\">PT Sans Narrow<\\\/div><div class=\\\"listelement\\\">PT Serif<\\\/div><div class=\\\"listelement\\\">PT Serif Caption<\\\/div><div class=\\\"listelement\\\">Pacifico<\\\/div><div class=\\\"listelement\\\">Passero One<\\\/div><div class=\\\"listelement\\\">Patrick Hand<\\\/div><div class=\\\"listelement\\\">Paytone One<\\\/div><div class=\\\"listelement\\\">Permanent Marker<\\\/div><div class=\\\"listelement\\\">Philosopher<\\\/div><div class=\\\"listelement\\\">Play<\\\/div><div class=\\\"listelement\\\">Playfair Display<\\\/div><div class=\\\"listelement\\\">Podkova<\\\/div><div class=\\\"listelement\\\">Pompiere<\\\/div><div class=\\\"listelement\\\">Prociono<\\\/div><div class=\\\"listelement\\\">Puritan<\\\/div><div class=\\\"listelement\\\">Quattrocento<\\\/div><div class=\\\"listelement\\\">Quattrocento Sans<\\\/div><div class=\\\"listelement\\\">Questrial<\\\/div><div class=\\\"listelement\\\">Quicksand<\\\/div><div class=\\\"listelement\\\">Radley<\\\/div><div class=\\\"listelement\\\">Raleway<\\\/div><div class=\\\"listelement\\\">Rationale<\\\/div><div class=\\\"listelement\\\">Redressed<\\\/div><div class=\\\"listelement\\\">Reenie Beanie<\\\/div><div class=\\\"listelement\\\">Rochester<\\\/div><div class=\\\"listelement\\\">Rock Salt<\\\/div><div class=\\\"listelement\\\">Rokkitt<\\\/div><div class=\\\"listelement\\\">Ropa Sans<\\\/div><div class=\\\"listelement\\\">Rosario<\\\/div><div class=\\\"listelement\\\">Ruslan Display<\\\/div><div class=\\\"listelement\\\">Schoolbell<\\\/div><div class=\\\"listelement\\\">Shadows Into Light<\\\/div><div class=\\\"listelement\\\">Shanti<\\\/div><div class=\\\"listelement\\\">Short Stack<\\\/div><div class=\\\"listelement\\\">Sigmar One<\\\/div><div class=\\\"listelement\\\">Signika<\\\/div><div class=\\\"listelement\\\">Signika Negative<\\\/div><div class=\\\"listelement\\\">Six Caps<\\\/div><div class=\\\"listelement\\\">Slackey<\\\/div><div class=\\\"listelement\\\">Smokum<\\\/div><div class=\\\"listelement\\\">Smythe<\\\/div><div class=\\\"listelement\\\">Sniglet<\\\/div><div class=\\\"listelement\\\">Snippet<\\\/div><div class=\\\"listelement\\\">Special Elite<\\\/div><div class=\\\"listelement\\\">Stardos Stencil<\\\/div><div class=\\\"listelement\\\">Sue Ellen Francisco<\\\/div><div class=\\\"listelement\\\">Sunshiney<\\\/div><div class=\\\"listelement\\\">Swanky and Moo Moo<\\\/div><div class=\\\"listelement\\\">Syncopate<\\\/div><div class=\\\"listelement\\\">Tangerine<\\\/div><div class=\\\"listelement\\\">Telex<\\\/div><div class=\\\"listelement\\\">Tenor Sans<\\\/div><div class=\\\"listelement\\\">Terminal Dosis Light<\\\/div><div class=\\\"listelement\\\">The Girl Next Door<\\\/div><div class=\\\"listelement\\\">Tienne<\\\/div><div class=\\\"listelement\\\">Tinos<\\\/div><div class=\\\"listelement\\\">Tulpen One<\\\/div><div class=\\\"listelement\\\">Ubuntu<\\\/div><div class=\\\"listelement\\\">Ultra<\\\/div><div class=\\\"listelement\\\">UnifrakturCook<\\\/div><div class=\\\"listelement\\\">UnifrakturMaguntia<\\\/div><div class=\\\"listelement\\\">Unkempt<\\\/div><div class=\\\"listelement\\\">Unna<\\\/div><div class=\\\"listelement\\\">VT323<\\\/div><div class=\\\"listelement\\\">Varela<\\\/div><div class=\\\"listelement\\\">Varela Round<\\\/div><div class=\\\"listelement\\\">Vibur<\\\/div><div class=\\\"listelement\\\">Viga<\\\/div><div class=\\\"listelement\\\">Vidaloka<\\\/div><div class=\\\"listelement\\\">Volkhov<\\\/div><div class=\\\"listelement\\\">Vollkorn<\\\/div><div class=\\\"listelement\\\">Voltaire<\\\/div><div class=\\\"listelement\\\">Waiting for the Sunrise<\\\/div><div class=\\\"listelement\\\">Wallpoet<\\\/div><div class=\\\"listelement\\\">Walter Turncoat<\\\/div><div class=\\\"listelement\\\">Wire One<\\\/div><div class=\\\"listelement\\\">Yanone Kaffeesatz<\\\/div><div class=\\\"listelement\\\">Yellowtail<\\\/div><div class=\\\"listelement\\\">Yeseva One<\\\/div><div class=\\\"listelement\\\">Zeyada<\\\/div><\\\/div>\",\n        options: [{\"value\":\"Abel\",\"text\":\"Abel\"},{\"value\":\"Abril Fatface\",\"text\":\"Abril Fatface\"},{\"value\":\"Aclonica\",\"text\":\"Aclonica\"},{\"value\":\"Actor\",\"text\":\"Actor\"},{\"value\":\"Aldrich\",\"text\":\"Aldrich\"},{\"value\":\"Alice\",\"text\":\"Alice\"},{\"value\":\"Alike\",\"text\":\"Alike\"},{\"value\":\"Allan\",\"text\":\"Allan\"},{\"value\":\"Allerta\",\"text\":\"Allerta\"},{\"value\":\"Allerta Stencil\",\"text\":\"Allerta Stencil\"},{\"value\":\"Amaranth\",\"text\":\"Amaranth\"},{\"value\":\"Andika\",\"text\":\"Andika\"},{\"value\":\"Annie Use Your Telescope\",\"text\":\"Annie Use Your Telescope\"},{\"value\":\"Anonymous Pro\",\"text\":\"Anonymous Pro\"},{\"value\":\"Antic\",\"text\":\"Antic\"},{\"value\":\"Anton\",\"text\":\"Anton\"},{\"value\":\"Architects Daughter\",\"text\":\"Architects Daughter\"},{\"value\":\"Arimo\",\"text\":\"Arimo\"},{\"value\":\"Artifika\",\"text\":\"Artifika\"},{\"value\":\"Arvo\",\"text\":\"Arvo\"},{\"value\":\"Asap\",\"text\":\"Asap\"},{\"value\":\"Asul\",\"text\":\"Asul\"},{\"value\":\"Asset\",\"text\":\"Asset\"},{\"value\":\"Astloch\",\"text\":\"Astloch\"},{\"value\":\"Aubrey\",\"text\":\"Aubrey\"},{\"value\":\"Bangers\",\"text\":\"Bangers\"},{\"value\":\"Bentham\",\"text\":\"Bentham\"},{\"value\":\"Bevan\",\"text\":\"Bevan\"},{\"value\":\"Bigshot One\",\"text\":\"Bigshot One\"},{\"value\":\"Black Ops One\",\"text\":\"Black Ops One\"},{\"value\":\"Bowlby One\",\"text\":\"Bowlby One\"},{\"value\":\"Bowlby One SC\",\"text\":\"Bowlby One SC\"},{\"value\":\"Brawler\",\"text\":\"Brawler\"},{\"value\":\"Buda\",\"text\":\"Buda\"},{\"value\":\"Cabin\",\"text\":\"Cabin\"},{\"value\":\"Cabin Sketch\",\"text\":\"Cabin Sketch\"},{\"value\":\"Calligraffitti\",\"text\":\"Calligraffitti\"},{\"value\":\"Candal\",\"text\":\"Candal\"},{\"value\":\"Cantarell\",\"text\":\"Cantarell\"},{\"value\":\"Cardo\",\"text\":\"Cardo\"},{\"value\":\"Carme\",\"text\":\"Carme\"},{\"value\":\"Carter One\",\"text\":\"Carter One\"},{\"value\":\"Caudex\",\"text\":\"Caudex\"},{\"value\":\"Cedarville Cursive\",\"text\":\"Cedarville Cursive\"},{\"value\":\"Cherry Cream Soda\",\"text\":\"Cherry Cream Soda\"},{\"value\":\"Chewy\",\"text\":\"Chewy\"},{\"value\":\"Chivo\",\"text\":\"Chivo\"},{\"value\":\"Coda\",\"text\":\"Coda\"},{\"value\":\"Coda Caption\",\"text\":\"Coda Caption\"},{\"value\":\"Comfortaa\",\"text\":\"Comfortaa\"},{\"value\":\"Coming Soon\",\"text\":\"Coming Soon\"},{\"value\":\"Convergence\",\"text\":\"Convergence\"},{\"value\":\"Copse\",\"text\":\"Copse\"},{\"value\":\"Corben\",\"text\":\"Corben\"},{\"value\":\"Cousine\",\"text\":\"Cousine\"},{\"value\":\"Coustard\",\"text\":\"Coustard\"},{\"value\":\"Covered By Your Grace\",\"text\":\"Covered By Your Grace\"},{\"value\":\"Crafty Girls\",\"text\":\"Crafty Girls\"},{\"value\":\"Crimson Text\",\"text\":\"Crimson Text\"},{\"value\":\"Crushed\",\"text\":\"Crushed\"},{\"value\":\"Cuprum\",\"text\":\"Cuprum\"},{\"value\":\"Damion\",\"text\":\"Damion\"},{\"value\":\"Dancing Script\",\"text\":\"Dancing Script\"},{\"value\":\"Dawning of a New Day\",\"text\":\"Dawning of a New Day\"},{\"value\":\"Days One\",\"text\":\"Days One\"},{\"value\":\"Delius\",\"text\":\"Delius\"},{\"value\":\"Delius Swash Caps\",\"text\":\"Delius Swash Caps\"},{\"value\":\"Delius Unicase\",\"text\":\"Delius Unicase\"},{\"value\":\"Didact Gothic\",\"text\":\"Didact Gothic\"},{\"value\":\"Dorsa\",\"text\":\"Dorsa\"},{\"value\":\"Droid Sans\",\"text\":\"Droid Sans\"},{\"value\":\"Droid Sans Mono\",\"text\":\"Droid Sans Mono\"},{\"value\":\"Droid Serif\",\"text\":\"Droid Serif\"},{\"value\":\"EB Garamond\",\"text\":\"EB Garamond\"},{\"value\":\"Exo\",\"text\":\"Exo\"},{\"value\":\"Expletus Sans\",\"text\":\"Expletus Sans\"},{\"value\":\"Fanwood Text\",\"text\":\"Fanwood Text\"},{\"value\":\"Federo\",\"text\":\"Federo\"},{\"value\":\"Fontdiner Swanky\",\"text\":\"Fontdiner Swanky\"},{\"value\":\"Forum\",\"text\":\"Forum\"},{\"value\":\"Francois One\",\"text\":\"Francois One\"},{\"value\":\"Gentium Basic\",\"text\":\"Gentium Basic\"},{\"value\":\"Gentium Book Basic\",\"text\":\"Gentium Book Basic\"},{\"value\":\"Geo\",\"text\":\"Geo\"},{\"value\":\"Geostar\",\"text\":\"Geostar\"},{\"value\":\"Geostar Fill\",\"text\":\"Geostar Fill\"},{\"value\":\"Give You Glory\",\"text\":\"Give You Glory\"},{\"value\":\"Gloria Hallelujah\",\"text\":\"Gloria Hallelujah\"},{\"value\":\"Goblin One\",\"text\":\"Goblin One\"},{\"value\":\"Goudy Bookletter 1911\",\"text\":\"Goudy Bookletter 1911\"},{\"value\":\"Gravitas One\",\"text\":\"Gravitas One\"},{\"value\":\"Gruppo\",\"text\":\"Gruppo\"},{\"value\":\"Hammersmith One\",\"text\":\"Hammersmith One\"},{\"value\":\"Holtwood One SC\",\"text\":\"Holtwood One SC\"},{\"value\":\"Homemade Apple\",\"text\":\"Homemade Apple\"},{\"value\":\"IM Fell DW Pica\",\"text\":\"IM Fell DW Pica\"},{\"value\":\"IM Fell DW Pica SC\",\"text\":\"IM Fell DW Pica SC\"},{\"value\":\"IM Fell Double Pica\",\"text\":\"IM Fell Double Pica\"},{\"value\":\"IM Fell Double Pica SC\",\"text\":\"IM Fell Double Pica SC\"},{\"value\":\"IM Fell English\",\"text\":\"IM Fell English\"},{\"value\":\"IM Fell English SC\",\"text\":\"IM Fell English SC\"},{\"value\":\"IM Fell French Canon\",\"text\":\"IM Fell French Canon\"},{\"value\":\"IM Fell French Canon SC\",\"text\":\"IM Fell French Canon SC\"},{\"value\":\"IM Fell Great Primer\",\"text\":\"IM Fell Great Primer\"},{\"value\":\"IM Fell Great Primer SC\",\"text\":\"IM Fell Great Primer SC\"},{\"value\":\"Inconsolata\",\"text\":\"Inconsolata\"},{\"value\":\"Inder\",\"text\":\"Inder\"},{\"value\":\"Indie Flower\",\"text\":\"Indie Flower\"},{\"value\":\"Irish Grover\",\"text\":\"Irish Grover\"},{\"value\":\"Istok Web\",\"text\":\"Istok Web\"},{\"value\":\"Josefin Sans\",\"text\":\"Josefin Sans\"},{\"value\":\"Josefin Slab\",\"text\":\"Josefin Slab\"},{\"value\":\"Judson\",\"text\":\"Judson\"},{\"value\":\"Jura\",\"text\":\"Jura\"},{\"value\":\"Just Another Hand\",\"text\":\"Just Another Hand\"},{\"value\":\"Just Me Again Down Here\",\"text\":\"Just Me Again Down Here\"},{\"value\":\"Kameron\",\"text\":\"Kameron\"},{\"value\":\"Kelly Slab\",\"text\":\"Kelly Slab\"},{\"value\":\"Kenia\",\"text\":\"Kenia\"},{\"value\":\"Kranky\",\"text\":\"Kranky\"},{\"value\":\"Kreon\",\"text\":\"Kreon\"},{\"value\":\"Kristi\",\"text\":\"Kristi\"},{\"value\":\"La Belle Aurore\",\"text\":\"La Belle Aurore\"},{\"value\":\"Lato\",\"text\":\"Lato\"},{\"value\":\"League Script\",\"text\":\"League Script\"},{\"value\":\"Leckerli One\",\"text\":\"Leckerli One\"},{\"value\":\"Lekton\",\"text\":\"Lekton\"},{\"value\":\"Limelight\",\"text\":\"Limelight\"},{\"value\":\"Lobster\",\"text\":\"Lobster\"},{\"value\":\"Lobster Two\",\"text\":\"Lobster Two\"},{\"value\":\"Lora\",\"text\":\"Lora\"},{\"value\":\"Love Ya Like A Sister\",\"text\":\"Love Ya Like A Sister\"},{\"value\":\"Loved by the King\",\"text\":\"Loved by the King\"},{\"value\":\"Luckiest Guy\",\"text\":\"Luckiest Guy\"},{\"value\":\"Magra\",\"text\":\"Magra\"},{\"value\":\"Maiden Orange\",\"text\":\"Maiden Orange\"},{\"value\":\"Mako\",\"text\":\"Mako\"},{\"value\":\"Marvel\",\"text\":\"Marvel\"},{\"value\":\"Maven Pro\",\"text\":\"Maven Pro\"},{\"value\":\"Meddon\",\"text\":\"Meddon\"},{\"value\":\"MedievalSharp\",\"text\":\"MedievalSharp\"},{\"value\":\"Megrim\",\"text\":\"Megrim\"},{\"value\":\"Merriweather\",\"text\":\"Merriweather\"},{\"value\":\"Metrophobic\",\"text\":\"Metrophobic\"},{\"value\":\"Michroma\",\"text\":\"Michroma\"},{\"value\":\"Miltonian\",\"text\":\"Miltonian\"},{\"value\":\"Miltonian Tattoo\",\"text\":\"Miltonian Tattoo\"},{\"value\":\"Modern Antiqua\",\"text\":\"Modern Antiqua\"},{\"value\":\"Molengo\",\"text\":\"Molengo\"},{\"value\":\"Monofett\",\"text\":\"Monofett\"},{\"value\":\"Monoton\",\"text\":\"Monoton\"},{\"value\":\"Montez\",\"text\":\"Montez\"},{\"value\":\"Mountains of Christmas\",\"text\":\"Mountains of Christmas\"},{\"value\":\"Muli\",\"text\":\"Muli\"},{\"value\":\"Neucha\",\"text\":\"Neucha\"},{\"value\":\"Neuton\",\"text\":\"Neuton\"},{\"value\":\"News Cycle\",\"text\":\"News Cycle\"},{\"value\":\"Nixie One\",\"text\":\"Nixie One\"},{\"value\":\"Nobile\",\"text\":\"Nobile\"},{\"value\":\"Nothing You Could Do\",\"text\":\"Nothing You Could Do\"},{\"value\":\"Nova Cut\",\"text\":\"Nova Cut\"},{\"value\":\"Nova Flat\",\"text\":\"Nova Flat\"},{\"value\":\"Nova Mono\",\"text\":\"Nova Mono\"},{\"value\":\"Nova Oval\",\"text\":\"Nova Oval\"},{\"value\":\"Nova Round\",\"text\":\"Nova Round\"},{\"value\":\"Nova Script\",\"text\":\"Nova Script\"},{\"value\":\"Nova Slim\",\"text\":\"Nova Slim\"},{\"value\":\"Nova Square\",\"text\":\"Nova Square\"},{\"value\":\"Numans\",\"text\":\"Numans\"},{\"value\":\"Nunito\",\"text\":\"Nunito\"},{\"value\":\"OFL Sorts Mill Goudy TT\",\"text\":\"OFL Sorts Mill Goudy TT\"},{\"value\":\"Old Standard TT\",\"text\":\"Old Standard TT\"},{\"value\":\"Open Sans\",\"text\":\"Open Sans\"},{\"value\":\"Open Sans Condensed\",\"text\":\"Open Sans Condensed\"},{\"value\":\"Orbitron\",\"text\":\"Orbitron\"},{\"value\":\"Oswald\",\"text\":\"Oswald\"},{\"value\":\"Over the Rainbow\",\"text\":\"Over the Rainbow\"},{\"value\":\"Ovo\",\"text\":\"Ovo\"},{\"value\":\"PT Sans\",\"text\":\"PT Sans\"},{\"value\":\"PT Sans Caption\",\"text\":\"PT Sans Caption\"},{\"value\":\"PT Sans Narrow\",\"text\":\"PT Sans Narrow\"},{\"value\":\"PT Serif\",\"text\":\"PT Serif\"},{\"value\":\"PT Serif Caption\",\"text\":\"PT Serif Caption\"},{\"value\":\"Pacifico\",\"text\":\"Pacifico\"},{\"value\":\"Passero One\",\"text\":\"Passero One\"},{\"value\":\"Patrick Hand\",\"text\":\"Patrick Hand\"},{\"value\":\"Paytone One\",\"text\":\"Paytone One\"},{\"value\":\"Permanent Marker\",\"text\":\"Permanent Marker\"},{\"value\":\"Philosopher\",\"text\":\"Philosopher\"},{\"value\":\"Play\",\"text\":\"Play\"},{\"value\":\"Playfair Display\",\"text\":\"Playfair Display\"},{\"value\":\"Podkova\",\"text\":\"Podkova\"},{\"value\":\"Pompiere\",\"text\":\"Pompiere\"},{\"value\":\"Prociono\",\"text\":\"Prociono\"},{\"value\":\"Puritan\",\"text\":\"Puritan\"},{\"value\":\"Quattrocento\",\"text\":\"Quattrocento\"},{\"value\":\"Quattrocento Sans\",\"text\":\"Quattrocento Sans\"},{\"value\":\"Questrial\",\"text\":\"Questrial\"},{\"value\":\"Quicksand\",\"text\":\"Quicksand\"},{\"value\":\"Radley\",\"text\":\"Radley\"},{\"value\":\"Raleway\",\"text\":\"Raleway\"},{\"value\":\"Rationale\",\"text\":\"Rationale\"},{\"value\":\"Redressed\",\"text\":\"Redressed\"},{\"value\":\"Reenie Beanie\",\"text\":\"Reenie Beanie\"},{\"value\":\"Rochester\",\"text\":\"Rochester\"},{\"value\":\"Rock Salt\",\"text\":\"Rock Salt\"},{\"value\":\"Rokkitt\",\"text\":\"Rokkitt\"},{\"value\":\"Ropa Sans\",\"text\":\"Ropa Sans\"},{\"value\":\"Rosario\",\"text\":\"Rosario\"},{\"value\":\"Ruslan Display\",\"text\":\"Ruslan Display\"},{\"value\":\"Schoolbell\",\"text\":\"Schoolbell\"},{\"value\":\"Shadows Into Light\",\"text\":\"Shadows Into Light\"},{\"value\":\"Shanti\",\"text\":\"Shanti\"},{\"value\":\"Short Stack\",\"text\":\"Short Stack\"},{\"value\":\"Sigmar One\",\"text\":\"Sigmar One\"},{\"value\":\"Signika\",\"text\":\"Signika\"},{\"value\":\"Signika Negative\",\"text\":\"Signika Negative\"},{\"value\":\"Six Caps\",\"text\":\"Six Caps\"},{\"value\":\"Slackey\",\"text\":\"Slackey\"},{\"value\":\"Smokum\",\"text\":\"Smokum\"},{\"value\":\"Smythe\",\"text\":\"Smythe\"},{\"value\":\"Sniglet\",\"text\":\"Sniglet\"},{\"value\":\"Snippet\",\"text\":\"Snippet\"},{\"value\":\"Special Elite\",\"text\":\"Special Elite\"},{\"value\":\"Stardos Stencil\",\"text\":\"Stardos Stencil\"},{\"value\":\"Sue Ellen Francisco\",\"text\":\"Sue Ellen Francisco\"},{\"value\":\"Sunshiney\",\"text\":\"Sunshiney\"},{\"value\":\"Swanky and Moo Moo\",\"text\":\"Swanky and Moo Moo\"},{\"value\":\"Syncopate\",\"text\":\"Syncopate\"},{\"value\":\"Tangerine\",\"text\":\"Tangerine\"},{\"value\":\"Telex\",\"text\":\"Telex\"},{\"value\":\"Tenor Sans\",\"text\":\"Tenor Sans\"},{\"value\":\"Terminal Dosis Light\",\"text\":\"Terminal Dosis Light\"},{\"value\":\"The Girl Next Door\",\"text\":\"The Girl Next Door\"},{\"value\":\"Tienne\",\"text\":\"Tienne\"},{\"value\":\"Tinos\",\"text\":\"Tinos\"},{\"value\":\"Tulpen One\",\"text\":\"Tulpen One\"},{\"value\":\"Ubuntu\",\"text\":\"Ubuntu\"},{\"value\":\"Ultra\",\"text\":\"Ultra\"},{\"value\":\"UnifrakturCook\",\"text\":\"UnifrakturCook\"},{\"value\":\"UnifrakturMaguntia\",\"text\":\"UnifrakturMaguntia\"},{\"value\":\"Unkempt\",\"text\":\"Unkempt\"},{\"value\":\"Unna\",\"text\":\"Unna\"},{\"value\":\"VT323\",\"text\":\"VT323\"},{\"value\":\"Varela\",\"text\":\"Varela\"},{\"value\":\"Varela Round\",\"text\":\"Varela Round\"},{\"value\":\"Vibur\",\"text\":\"Vibur\"},{\"value\":\"Viga\",\"text\":\"Viga\"},{\"value\":\"Vidaloka\",\"text\":\"Vidaloka\"},{\"value\":\"Volkhov\",\"text\":\"Volkhov\"},{\"value\":\"Vollkorn\",\"text\":\"Vollkorn\"},{\"value\":\"Voltaire\",\"text\":\"Voltaire\"},{\"value\":\"Waiting for the Sunrise\",\"text\":\"Waiting for the Sunrise\"},{\"value\":\"Wallpoet\",\"text\":\"Wallpoet\"},{\"value\":\"Walter Turncoat\",\"text\":\"Walter Turncoat\"},{\"value\":\"Wire One\",\"text\":\"Wire One\"},{\"value\":\"Yanone Kaffeesatz\",\"text\":\"Yanone Kaffeesatz\"},{\"value\":\"Yellowtail\",\"text\":\"Yellowtail\"},{\"value\":\"Yeseva One\",\"text\":\"Yeseva One\"},{\"value\":\"Zeyada\",\"text\":\"Zeyada\"}],\n        selectedIndex: 172,\n        height: \"10\",\n        fireshow: 1\n      });\n    });"},"LatinExtended":{"name":"params[headingfont]family","id":"paramsheadingfontfamily","html":"<div style='position:relative;'><div id=\"offlajnlistcontainerparamsheadingfontfamily\" class=\"gk_hack offlajnlistcontainer\"><div class=\"gk_hack offlajnlist\"><span class=\"offlajnlistcurrent\">Open Sans<br \/>Andika<br \/>Anonymous Pro<br \/>Anton<br \/>Caudex<br \/>Didact Gothic<br \/>EB Garamond<br \/>Forum<br \/>Francois One<br \/>Gentium Basic<br \/>Gentium Book Basic<br \/>Istok Web<br \/>Jura<br \/>Kelly Slab<br \/>Lobster<br \/>MedievalSharp<br \/>Modern Antiqua<br \/>Neuton<br \/>Open Sans<br \/>Open Sans Condensed<br \/>Patrick Hand<br \/>Play<br \/>Ruslan Display<br \/>Tenor Sans<br \/>Ubuntu<br \/>Varela<br \/><\/span><div class=\"offlajnlistbtn\"><span><\/span><\/div><\/div><input type=\"hidden\" name=\"params[headingfont]family\" id=\"paramsheadingfontfamily\" value=\"Open Sans\"\/><\/div><\/div>","script":"dojo.addOnLoad(function(){\n      new OfflajnList({\n        name: \"paramsheadingfontfamily\",\n        elements: \"<div class=\\\"content\\\"><div class=\\\"listelement\\\">Andika<\\\/div><div class=\\\"listelement\\\">Anonymous Pro<\\\/div><div class=\\\"listelement\\\">Anton<\\\/div><div class=\\\"listelement\\\">Caudex<\\\/div><div class=\\\"listelement\\\">Didact Gothic<\\\/div><div class=\\\"listelement\\\">EB Garamond<\\\/div><div class=\\\"listelement\\\">Forum<\\\/div><div class=\\\"listelement\\\">Francois One<\\\/div><div class=\\\"listelement\\\">Gentium Basic<\\\/div><div class=\\\"listelement\\\">Gentium Book Basic<\\\/div><div class=\\\"listelement\\\">Istok Web<\\\/div><div class=\\\"listelement\\\">Jura<\\\/div><div class=\\\"listelement\\\">Kelly Slab<\\\/div><div class=\\\"listelement\\\">Lobster<\\\/div><div class=\\\"listelement\\\">MedievalSharp<\\\/div><div class=\\\"listelement\\\">Modern Antiqua<\\\/div><div class=\\\"listelement\\\">Neuton<\\\/div><div class=\\\"listelement\\\">Open Sans<\\\/div><div class=\\\"listelement\\\">Open Sans Condensed<\\\/div><div class=\\\"listelement\\\">Patrick Hand<\\\/div><div class=\\\"listelement\\\">Play<\\\/div><div class=\\\"listelement\\\">Ruslan Display<\\\/div><div class=\\\"listelement\\\">Tenor Sans<\\\/div><div class=\\\"listelement\\\">Ubuntu<\\\/div><div class=\\\"listelement\\\">Varela<\\\/div><\\\/div>\",\n        options: [{\"value\":\"Andika\",\"text\":\"Andika\"},{\"value\":\"Anonymous Pro\",\"text\":\"Anonymous Pro\"},{\"value\":\"Anton\",\"text\":\"Anton\"},{\"value\":\"Caudex\",\"text\":\"Caudex\"},{\"value\":\"Didact Gothic\",\"text\":\"Didact Gothic\"},{\"value\":\"EB Garamond\",\"text\":\"EB Garamond\"},{\"value\":\"Forum\",\"text\":\"Forum\"},{\"value\":\"Francois One\",\"text\":\"Francois One\"},{\"value\":\"Gentium Basic\",\"text\":\"Gentium Basic\"},{\"value\":\"Gentium Book Basic\",\"text\":\"Gentium Book Basic\"},{\"value\":\"Istok Web\",\"text\":\"Istok Web\"},{\"value\":\"Jura\",\"text\":\"Jura\"},{\"value\":\"Kelly Slab\",\"text\":\"Kelly Slab\"},{\"value\":\"Lobster\",\"text\":\"Lobster\"},{\"value\":\"MedievalSharp\",\"text\":\"MedievalSharp\"},{\"value\":\"Modern Antiqua\",\"text\":\"Modern Antiqua\"},{\"value\":\"Neuton\",\"text\":\"Neuton\"},{\"value\":\"Open Sans\",\"text\":\"Open Sans\"},{\"value\":\"Open Sans Condensed\",\"text\":\"Open Sans Condensed\"},{\"value\":\"Patrick Hand\",\"text\":\"Patrick Hand\"},{\"value\":\"Play\",\"text\":\"Play\"},{\"value\":\"Ruslan Display\",\"text\":\"Ruslan Display\"},{\"value\":\"Tenor Sans\",\"text\":\"Tenor Sans\"},{\"value\":\"Ubuntu\",\"text\":\"Ubuntu\"},{\"value\":\"Varela\",\"text\":\"Varela\"}],\n        selectedIndex: 17,\n        height: \"10\",\n        fireshow: 1\n      });\n    });"},"Vietnamese":{"name":"params[headingfont]family","id":"paramsheadingfontfamily","html":"<div style='position:relative;'><div id=\"offlajnlistcontainerparamsheadingfontfamily\" class=\"gk_hack offlajnlistcontainer\"><div class=\"gk_hack offlajnlist\"><span class=\"offlajnlistcurrent\">Open Sans<br \/>EB Garamond<br \/>Open Sans<br \/>Open Sans Condensed<br \/><\/span><div class=\"offlajnlistbtn\"><span><\/span><\/div><\/div><input type=\"hidden\" name=\"params[headingfont]family\" id=\"paramsheadingfontfamily\" value=\"Open Sans\"\/><\/div><\/div>","script":"dojo.addOnLoad(function(){\n      new OfflajnList({\n        name: \"paramsheadingfontfamily\",\n        elements: \"<div class=\\\"content\\\"><div class=\\\"listelement\\\">EB Garamond<\\\/div><div class=\\\"listelement\\\">Open Sans<\\\/div><div class=\\\"listelement\\\">Open Sans Condensed<\\\/div><\\\/div>\",\n        options: [{\"value\":\"EB Garamond\",\"text\":\"EB Garamond\"},{\"value\":\"Open Sans\",\"text\":\"Open Sans\"},{\"value\":\"Open Sans Condensed\",\"text\":\"Open Sans Condensed\"}],\n        selectedIndex: 1,\n        height: \"10\",\n        fireshow: 1\n      });\n    });"},"html":"<div style='position:relative;'><div id=\"offlajnlistcontainerparamsheadingfonttype\" class=\"gk_hack offlajnlistcontainer\"><div class=\"gk_hack offlajnlist\"><span class=\"offlajnlistcurrent\">Alternative fonts<br \/>Alternative fonts<br \/>Cyrillic<br \/>CyrillicExtended<br \/>Greek<br \/>GreekExtended<br \/>Khmer<br \/>Latin<br \/>LatinExtended<br \/>Vietnamese<br \/><\/span><div class=\"offlajnlistbtn\"><span><\/span><\/div><\/div><input type=\"hidden\" name=\"params[headingfont]type\" id=\"paramsheadingfonttype\" value=\"0\"\/><\/div><\/div>"},"size":{"name":"params[headingfont]size","id":"paramsheadingfontsize","html":"<div class=\"offlajntextcontainer\" id=\"offlajntextcontainerparamsheadingfontsize\"><input  size=\"1\" class=\"offlajntext\" type=\"text\" id=\"paramsheadingfontsizeinput\" value=\"14\"><div class=\"offlajntext_increment\">\n                <div class=\"offlajntext_increment_up arrow\"><\/div>\n                <div class=\"offlajntext_increment_down arrow\"><\/div>\n      <\/div><\/div><div class=\"offlajnswitcher\">\r\n            <div class=\"offlajnswitcher_inner\" id=\"offlajnswitcher_innerparamsheadingfontsizeunit\"><\/div>\r\n    <\/div><input type=\"hidden\" name=\"params[headingfont]size[unit]\" id=\"paramsheadingfontsizeunit\" value=\"px\" \/><input type=\"hidden\" name=\"params[headingfont]size\" id=\"paramsheadingfontsize\" value=\"14||px\">"},"color":{"name":"params[headingfont]color","id":"paramsheadingfontcolor","html":"<div class=\"offlajncolor\"><input type=\"text\" name=\"params[headingfont]color\" id=\"paramsheadingfontcolor\" value=\"000000\" class=\"color wa\" size=\"12\" \/><\/div>"},"bold":{"name":"params[headingfont]bold","id":"paramsheadingfontbold","html":"<div id=\"offlajnonoffparamsheadingfontbold\" class=\"gk_hack onoffbutton\">\n                <div class=\"gk_hack onoffbutton_img\" style=\"background-image: url(http:\/\/localhost\/thepdahoi.vn\/wp-content\/plugins\/nextend-smart-slider-lite\/includes\/modules\/mod_smartslider\/params\/offlajnonoff\/images\/bold.png);\"><\/div>\n      <\/div><input type=\"hidden\" name=\"params[headingfont]bold\" id=\"paramsheadingfontbold\" value=\"0\" \/>"},"italic":{"name":"params[headingfont]italic","id":"paramsheadingfontitalic","html":"<div id=\"offlajnonoffparamsheadingfontitalic\" class=\"gk_hack onoffbutton\">\n                <div class=\"gk_hack onoffbutton_img\" style=\"background-image: url(http:\/\/localhost\/thepdahoi.vn\/wp-content\/plugins\/nextend-smart-slider-lite\/includes\/modules\/mod_smartslider\/params\/offlajnonoff\/images\/italic.png);\"><\/div>\n      <\/div><input type=\"hidden\" name=\"params[headingfont]italic\" id=\"paramsheadingfontitalic\" value=\"0\" \/>"},"underline":{"name":"params[headingfont]underline","id":"paramsheadingfontunderline","html":"<div id=\"offlajnonoffparamsheadingfontunderline\" class=\"gk_hack onoffbutton\">\n                <div class=\"gk_hack onoffbutton_img\" style=\"background-image: url(http:\/\/localhost\/thepdahoi.vn\/wp-content\/plugins\/nextend-smart-slider-lite\/includes\/modules\/mod_smartslider\/params\/offlajnonoff\/images\/underline.png);\"><\/div>\n      <\/div><input type=\"hidden\" name=\"params[headingfont]underline\" id=\"paramsheadingfontunderline\" value=\"0\" \/>"},"align":{"name":"params[headingfont]align","id":"paramsheadingfontalign","html":"<div class=\"offlajnradiocontainerimage\" id=\"offlajnradiocontainerparamsheadingfontalign\"><div class=\"radioelement first selected\"><div class=\"radioelement_img\" style=\"background-image: url(http:\/\/localhost\/thepdahoi.vn\/wp-content\/plugins\/nextend-smart-slider-lite\/includes\/modules\/mod_smartslider\/params\/offlajnradio\/images\/left_align.png);\"><\/div><\/div><div class=\"radioelement \"><div class=\"radioelement_img\" style=\"background-image: url(http:\/\/localhost\/thepdahoi.vn\/wp-content\/plugins\/nextend-smart-slider-lite\/includes\/modules\/mod_smartslider\/params\/offlajnradio\/images\/center_align.png);\"><\/div><\/div><div class=\"radioelement  last\"><div class=\"radioelement_img\" style=\"background-image: url(http:\/\/localhost\/thepdahoi.vn\/wp-content\/plugins\/nextend-smart-slider-lite\/includes\/modules\/mod_smartslider\/params\/offlajnradio\/images\/right_align.png);\"><\/div><\/div><div class=\"clear\"><\/div><\/div><input type=\"hidden\" id=\"paramsheadingfontalign\" name=\"params[headingfont]align\" value=\"left\"\/>"},"afont":{"name":"params[headingfont]afont","id":"paramsheadingfontafont","html":"<div class=\"offlajntextcontainer\" id=\"offlajntextcontainerparamsheadingfontafont\"><input  size=\"10\" class=\"offlajntext\" type=\"text\" id=\"paramsheadingfontafontinput\" value=\"Arial\"><\/div><div class=\"offlajnswitcher\">\r\n            <div class=\"offlajnswitcher_inner\" id=\"offlajnswitcher_innerparamsheadingfontafontunit\"><\/div>\r\n    <\/div><input type=\"hidden\" name=\"params[headingfont]afont[unit]\" id=\"paramsheadingfontafontunit\" value=\"1\" \/><input type=\"hidden\" name=\"params[headingfont]afont\" id=\"paramsheadingfontafont\" value=\"Arial||1\">"},"tshadow":{"name":"params[headingfont]tshadow","id":"paramsheadingfonttshadow","html":"<div id=\"offlajncombine_outerparamsheadingfonttshadow\" class=\"offlajncombine_outer\"><div class=\"offlajncombinefieldcontainer\"><div class=\"offlajncombinefield\"><div class=\"offlajntextcontainer\" id=\"offlajntextcontainerparamsheadingfonttshadow0\"><input  size=\"1\" class=\"offlajntext\" type=\"text\" id=\"paramsheadingfonttshadow0input\" value=\"0\"><div class=\"unit\">px<\/div><\/div><input type=\"hidden\" name=\"params[headingfont]tshadow0\" id=\"paramsheadingfonttshadow0\" value=\"0\"><\/div><\/div><div class=\"offlajncombinefieldcontainer\"><div class=\"offlajncombinefield\"><div class=\"offlajntextcontainer\" id=\"offlajntextcontainerparamsheadingfonttshadow1\"><input  size=\"1\" class=\"offlajntext\" type=\"text\" id=\"paramsheadingfonttshadow1input\" value=\"0\"><div class=\"unit\">px<\/div><\/div><input type=\"hidden\" name=\"params[headingfont]tshadow1\" id=\"paramsheadingfonttshadow1\" value=\"0\"><\/div><\/div><div class=\"offlajncombinefieldcontainer\"><div class=\"offlajncombinefield\"><div class=\"offlajntextcontainer\" id=\"offlajntextcontainerparamsheadingfonttshadow2\"><input  size=\"1\" class=\"offlajntext\" type=\"text\" id=\"paramsheadingfonttshadow2input\" value=\"0\"><div class=\"unit\">px<\/div><\/div><input type=\"hidden\" name=\"params[headingfont]tshadow2\" id=\"paramsheadingfonttshadow2\" value=\"0\"><\/div><\/div><div class=\"offlajncombinefieldcontainer\"><div class=\"offlajncombinefield\"><div class=\"offlajncolor\"><input type=\"text\" name=\"params[headingfont]tshadow3\" id=\"paramsheadingfonttshadow3\" value=\"000000\" class=\"color wa\" size=\"12\" \/><\/div><\/div><\/div><div class=\"offlajncombinefieldcontainer\"><div class=\"offlajncombinefield\"><div class=\"offlajnswitcher\">\r\n            <div class=\"offlajnswitcher_inner\" id=\"offlajnswitcher_innerparamsheadingfonttshadow4\"><\/div>\r\n    <\/div><input type=\"hidden\" name=\"params[headingfont]tshadow4\" id=\"paramsheadingfonttshadow4\" value=\"0\" \/><\/div><\/div><div class=\"offlajncombine_hider\"><\/div><\/div><input type=\"hidden\" name=\"params[headingfont]tshadow\" id=\"paramsheadingfonttshadow\" value='0|*|0|*|0|*|000000|*|0'>"},"lineheight":{"name":"params[headingfont]lineheight","id":"paramsheadingfontlineheight","html":"<div class=\"offlajntextcontainer\" id=\"offlajntextcontainerparamsheadingfontlineheight\"><input  size=\"5\" class=\"offlajntext\" type=\"text\" id=\"paramsheadingfontlineheightinput\" value=\"normal\"><\/div><input type=\"hidden\" name=\"params[headingfont]lineheight\" id=\"paramsheadingfontlineheight\" value=\"normal\">"}},
          script: "dojo.addOnLoad(function(){\r\n      new OfflajnRadio({\r\n        id: \"paramsheadingfonttab\",\r\n        values: [\"Heading\",\"Subheading\"],\r\n        map: {\"Heading\":0,\"Subheading\":1},\r\n        mode: \"\"\r\n      });\r\n    \n      new OfflajnList({\n        name: \"paramsheadingfonttype\",\n        elements: \"<div class=\\\"content\\\"><div class=\\\"listelement\\\">Alternative fonts<\\\/div><div class=\\\"listelement\\\">Cyrillic<\\\/div><div class=\\\"listelement\\\">CyrillicExtended<\\\/div><div class=\\\"listelement\\\">Greek<\\\/div><div class=\\\"listelement\\\">GreekExtended<\\\/div><div class=\\\"listelement\\\">Khmer<\\\/div><div class=\\\"listelement\\\">Latin<\\\/div><div class=\\\"listelement\\\">LatinExtended<\\\/div><div class=\\\"listelement\\\">Vietnamese<\\\/div><\\\/div>\",\n        options: [{\"value\":\"0\",\"text\":\"Alternative fonts\"},{\"value\":\"Cyrillic\",\"text\":\"Cyrillic\"},{\"value\":\"CyrillicExtended\",\"text\":\"CyrillicExtended\"},{\"value\":\"Greek\",\"text\":\"Greek\"},{\"value\":\"GreekExtended\",\"text\":\"GreekExtended\"},{\"value\":\"Khmer\",\"text\":\"Khmer\"},{\"value\":\"Latin\",\"text\":\"Latin\"},{\"value\":\"LatinExtended\",\"text\":\"LatinExtended\"},{\"value\":\"Vietnamese\",\"text\":\"Vietnamese\"}],\n        selectedIndex: 0,\n        height: 0,\n        fireshow: 0\n      });\n    dojo.addOnLoad(function(){ \r\n      new OfflajnSwitcher({\r\n        id: \"paramsheadingfontsizeunit\",\r\n        units: [\"px\",\"em\"],\r\n        values: [\"px\",\"em\"],\r\n        map: {\"px\":0,\"em\":1},\r\n        mode: 0,\r\n        url: \"http:\\\/\\\/localhost\\\/thepdahoi.vn\\\/wp-admin\\\/..\\\/modules\\\/mod_smartslider\\\/params\\\/offlajnswitcher\\\/images\\\/\"\r\n      }); \r\n    });\n      new OfflajnText({\n        id: \"paramsheadingfontsize\",\n        validation: \"int\",\n        attachunit: \"\",\n        mode: \"increment\",\n        scale: \"1\",\n        minus: 0,\n        onoff: \"\"\n      }); \n    \n    var el = dojo.byId(\"paramsheadingfontcolor\");\n    jQuery.fn.jPicker.defaults.images.clientPath=\"http:\/\/localhost\/thepdahoi.vn\/wp-content\/plugins\/nextend-smart-slider-lite\/joomla\/\/modules\/mod_smartslider\/params\/offlajndashboard\/..\/offlajncolor\/offlajncolor\/jpicker\/images\/\";\n    el.alphaSupport=false; \n    el.c = jQuery(\"#paramsheadingfontcolor\").jPicker({\n        window:{\n          expandable: true,\n          alphaSupport: false}\n        });\n    dojo.connect(el, \"change\", function(){\n      this.c[0].color.active.val(\"hex\", this.value);\n    });\n    \n      new OfflajnOnOff({\n        id: \"paramsheadingfontbold\",\n        mode: \"button\",\n        imgs: \"\"\n      }); \n    \n      new OfflajnOnOff({\n        id: \"paramsheadingfontitalic\",\n        mode: \"button\",\n        imgs: \"\"\n      }); \n    \n      new OfflajnOnOff({\n        id: \"paramsheadingfontunderline\",\n        mode: \"button\",\n        imgs: \"\"\n      }); \n    \r\n      new OfflajnRadio({\r\n        id: \"paramsheadingfontalign\",\r\n        values: [\"left\",\"center\",\"right\"],\r\n        map: {\"left\":0,\"center\":1,\"right\":2},\r\n        mode: \"image\"\r\n      });\r\n    dojo.addOnLoad(function(){ \r\n      new OfflajnSwitcher({\r\n        id: \"paramsheadingfontafontunit\",\r\n        units: [\"ON\",\"OFF\"],\r\n        values: [\"1\",\"0\"],\r\n        map: {\"1\":0,\"0\":1},\r\n        mode: 0,\r\n        url: \"http:\\\/\\\/localhost\\\/thepdahoi.vn\\\/wp-admin\\\/..\\\/modules\\\/mod_smartslider\\\/params\\\/offlajnswitcher\\\/images\\\/\"\r\n      }); \r\n    });\n      new OfflajnText({\n        id: \"paramsheadingfontafont\",\n        validation: \"\",\n        attachunit: \"\",\n        mode: \"\",\n        scale: \"\",\n        minus: 0,\n        onoff: \"1\"\n      }); \n    \n      new OfflajnText({\n        id: \"paramsheadingfonttshadow0\",\n        validation: \"float\",\n        attachunit: \"px\",\n        mode: \"\",\n        scale: \"\",\n        minus: 0,\n        onoff: \"\"\n      }); \n    \n      new OfflajnText({\n        id: \"paramsheadingfonttshadow1\",\n        validation: \"float\",\n        attachunit: \"px\",\n        mode: \"\",\n        scale: \"\",\n        minus: 0,\n        onoff: \"\"\n      }); \n    \n      new OfflajnText({\n        id: \"paramsheadingfonttshadow2\",\n        validation: \"float\",\n        attachunit: \"px\",\n        mode: \"\",\n        scale: \"\",\n        minus: 0,\n        onoff: \"\"\n      }); \n    \n    var el = dojo.byId(\"paramsheadingfonttshadow3\");\n    jQuery.fn.jPicker.defaults.images.clientPath=\"http:\/\/localhost\/thepdahoi.vn\/wp-content\/plugins\/nextend-smart-slider-lite\/joomla\/\/modules\/mod_smartslider\/params\/offlajndashboard\/..\/offlajncolor\/offlajncolor\/jpicker\/images\/\";\n    el.alphaSupport=false; \n    el.c = jQuery(\"#paramsheadingfonttshadow3\").jPicker({\n        window:{\n          expandable: true,\n          alphaSupport: false}\n        });\n    dojo.connect(el, \"change\", function(){\n      this.c[0].color.active.val(\"hex\", this.value);\n    });\n    dojo.addOnLoad(function(){ \r\n      new OfflajnSwitcher({\r\n        id: \"paramsheadingfonttshadow4\",\r\n        units: [\"ON\",\"OFF\"],\r\n        values: [\"1\",\"0\"],\r\n        map: {\"1\":0,\"0\":1},\r\n        mode: 0,\r\n        url: \"http:\\\/\\\/localhost\\\/thepdahoi.vn\\\/wp-admin\\\/..\\\/modules\\\/mod_smartslider\\\/params\\\/offlajnswitcher\\\/images\\\/\"\r\n      }); \r\n    });\r\n      new OfflajnCombine({\r\n        id: \"paramsheadingfonttshadow\",\r\n        num: 5,\r\n        switcherid: \"paramsheadingfonttshadow4\",\r\n        hideafter: \"0\"\r\n      }); \r\n    \n      new OfflajnText({\n        id: \"paramsheadingfontlineheight\",\n        validation: \"\",\n        attachunit: \"\",\n        mode: \"\",\n        scale: \"\",\n        minus: 0,\n        onoff: \"\"\n      }); \n    });"
        });
    

        new FontConfigurator({
          id: "paramsparagraphfont",
          defaultTab: "Paragraph",
          origsettings: {"Paragraph":{},"Link":{},"Tag":{}},
          elements: {"tab":{"name":"params[paragraphfont]tab","id":"paramsparagraphfonttab","html":"<div class=\"offlajnradiocontainerbutton\" id=\"offlajnradiocontainerparamsparagraphfonttab\"><div class=\"radioelement first selected\">Paragraph<\/div><div class=\"radioelement \">Link<\/div><div class=\"radioelement  last\">Tag<\/div><div class=\"clear\"><\/div><\/div><input type=\"hidden\" id=\"paramsparagraphfonttab\" name=\"params[paragraphfont]tab\" value=\"Paragraph\"\/>"},"type":{"name":"params[paragraphfont]type","id":"paramsparagraphfonttype","Cyrillic":{"name":"params[paragraphfont]family","id":"paramsparagraphfontfamily","html":"<div style='position:relative;'><div id=\"offlajnlistcontainerparamsparagraphfontfamily\" class=\"gk_hack offlajnlistcontainer\"><div class=\"gk_hack offlajnlist\"><span class=\"offlajnlistcurrent\">Open Sans<br \/>Andika<br \/>Anonymous Pro<br \/>Cuprum<br \/>Didact Gothic<br \/>EB Garamond<br \/>Istok Web<br \/>Jura<br \/>Forum<br \/>Kelly Slab<br \/>Lobster<br \/>Neucha<br \/>Open Sans<br \/>Open Sans Condensed<br \/>Philosopher<br \/>Play<br \/>PT Sans<br \/>PT Sans Caption<br \/>PT Sans Narrow<br \/>PT Serif<br \/>PT Serif Caption<br \/>Ruslan Display<br \/>Tenor Sans<br \/>Ubuntu<br \/><\/span><div class=\"offlajnlistbtn\"><span><\/span><\/div><\/div><input type=\"hidden\" name=\"params[paragraphfont]family\" id=\"paramsparagraphfontfamily\" value=\"Open Sans\"\/><\/div><\/div>","script":"dojo.addOnLoad(function(){\n      new OfflajnList({\n        name: \"paramsparagraphfontfamily\",\n        elements: \"<div class=\\\"content\\\"><div class=\\\"listelement\\\">Andika<\\\/div><div class=\\\"listelement\\\">Anonymous Pro<\\\/div><div class=\\\"listelement\\\">Cuprum<\\\/div><div class=\\\"listelement\\\">Didact Gothic<\\\/div><div class=\\\"listelement\\\">EB Garamond<\\\/div><div class=\\\"listelement\\\">Istok Web<\\\/div><div class=\\\"listelement\\\">Jura<\\\/div><div class=\\\"listelement\\\">Forum<\\\/div><div class=\\\"listelement\\\">Kelly Slab<\\\/div><div class=\\\"listelement\\\">Lobster<\\\/div><div class=\\\"listelement\\\">Neucha<\\\/div><div class=\\\"listelement\\\">Open Sans<\\\/div><div class=\\\"listelement\\\">Open Sans Condensed<\\\/div><div class=\\\"listelement\\\">Philosopher<\\\/div><div class=\\\"listelement\\\">Play<\\\/div><div class=\\\"listelement\\\">PT Sans<\\\/div><div class=\\\"listelement\\\">PT Sans Caption<\\\/div><div class=\\\"listelement\\\">PT Sans Narrow<\\\/div><div class=\\\"listelement\\\">PT Serif<\\\/div><div class=\\\"listelement\\\">PT Serif Caption<\\\/div><div class=\\\"listelement\\\">Ruslan Display<\\\/div><div class=\\\"listelement\\\">Tenor Sans<\\\/div><div class=\\\"listelement\\\">Ubuntu<\\\/div><\\\/div>\",\n        options: [{\"value\":\"Andika\",\"text\":\"Andika\"},{\"value\":\"Anonymous Pro\",\"text\":\"Anonymous Pro\"},{\"value\":\"Cuprum\",\"text\":\"Cuprum\"},{\"value\":\"Didact Gothic\",\"text\":\"Didact Gothic\"},{\"value\":\"EB Garamond\",\"text\":\"EB Garamond\"},{\"value\":\"Istok Web\",\"text\":\"Istok Web\"},{\"value\":\"Jura\",\"text\":\"Jura\"},{\"value\":\"Forum\",\"text\":\"Forum\"},{\"value\":\"Kelly Slab\",\"text\":\"Kelly Slab\"},{\"value\":\"Lobster\",\"text\":\"Lobster\"},{\"value\":\"Neucha\",\"text\":\"Neucha\"},{\"value\":\"Open Sans\",\"text\":\"Open Sans\"},{\"value\":\"Open Sans Condensed\",\"text\":\"Open Sans Condensed\"},{\"value\":\"Philosopher\",\"text\":\"Philosopher\"},{\"value\":\"Play\",\"text\":\"Play\"},{\"value\":\"PT Sans\",\"text\":\"PT Sans\"},{\"value\":\"PT Sans Caption\",\"text\":\"PT Sans Caption\"},{\"value\":\"PT Sans Narrow\",\"text\":\"PT Sans Narrow\"},{\"value\":\"PT Serif\",\"text\":\"PT Serif\"},{\"value\":\"PT Serif Caption\",\"text\":\"PT Serif Caption\"},{\"value\":\"Ruslan Display\",\"text\":\"Ruslan Display\"},{\"value\":\"Tenor Sans\",\"text\":\"Tenor Sans\"},{\"value\":\"Ubuntu\",\"text\":\"Ubuntu\"}],\n        selectedIndex: 11,\n        height: \"10\",\n        fireshow: 1\n      });\n    });"},"CyrillicExtended":{"name":"params[paragraphfont]family","id":"paramsparagraphfontfamily","html":"<div style='position:relative;'><div id=\"offlajnlistcontainerparamsparagraphfontfamily\" class=\"gk_hack offlajnlistcontainer\"><div class=\"gk_hack offlajnlist\"><span class=\"offlajnlistcurrent\">Open Sans<br \/>Andika<br \/>Anonymous Pro<br \/>Didact Gothic<br \/>EB Garamond<br \/>Istok Web<br \/>Jura<br \/>Forum<br \/>Lobster<br \/>Open Sans<br \/>Open Sans Condensed<br \/>Play<br \/>Ruslan Display<br \/>Tenor Sans<br \/>Ubuntu<br \/><\/span><div class=\"offlajnlistbtn\"><span><\/span><\/div><\/div><input type=\"hidden\" name=\"params[paragraphfont]family\" id=\"paramsparagraphfontfamily\" value=\"Open Sans\"\/><\/div><\/div>","script":"dojo.addOnLoad(function(){\n      new OfflajnList({\n        name: \"paramsparagraphfontfamily\",\n        elements: \"<div class=\\\"content\\\"><div class=\\\"listelement\\\">Andika<\\\/div><div class=\\\"listelement\\\">Anonymous Pro<\\\/div><div class=\\\"listelement\\\">Didact Gothic<\\\/div><div class=\\\"listelement\\\">EB Garamond<\\\/div><div class=\\\"listelement\\\">Istok Web<\\\/div><div class=\\\"listelement\\\">Jura<\\\/div><div class=\\\"listelement\\\">Forum<\\\/div><div class=\\\"listelement\\\">Lobster<\\\/div><div class=\\\"listelement\\\">Open Sans<\\\/div><div class=\\\"listelement\\\">Open Sans Condensed<\\\/div><div class=\\\"listelement\\\">Play<\\\/div><div class=\\\"listelement\\\">Ruslan Display<\\\/div><div class=\\\"listelement\\\">Tenor Sans<\\\/div><div class=\\\"listelement\\\">Ubuntu<\\\/div><\\\/div>\",\n        options: [{\"value\":\"Andika\",\"text\":\"Andika\"},{\"value\":\"Anonymous Pro\",\"text\":\"Anonymous Pro\"},{\"value\":\"Didact Gothic\",\"text\":\"Didact Gothic\"},{\"value\":\"EB Garamond\",\"text\":\"EB Garamond\"},{\"value\":\"Istok Web\",\"text\":\"Istok Web\"},{\"value\":\"Jura\",\"text\":\"Jura\"},{\"value\":\"Forum\",\"text\":\"Forum\"},{\"value\":\"Lobster\",\"text\":\"Lobster\"},{\"value\":\"Open Sans\",\"text\":\"Open Sans\"},{\"value\":\"Open Sans Condensed\",\"text\":\"Open Sans Condensed\"},{\"value\":\"Play\",\"text\":\"Play\"},{\"value\":\"Ruslan Display\",\"text\":\"Ruslan Display\"},{\"value\":\"Tenor Sans\",\"text\":\"Tenor Sans\"},{\"value\":\"Ubuntu\",\"text\":\"Ubuntu\"}],\n        selectedIndex: 8,\n        height: \"10\",\n        fireshow: 1\n      });\n    });"},"Greek":{"name":"params[paragraphfont]family","id":"paramsparagraphfontfamily","html":"<div style='position:relative;'><div id=\"offlajnlistcontainerparamsparagraphfontfamily\" class=\"gk_hack offlajnlistcontainer\"><div class=\"gk_hack offlajnlist\"><span class=\"offlajnlistcurrent\">Open Sans<br \/>Anonymous Pro<br \/>Caudex<br \/>Didact Gothic<br \/>Jura<br \/>GFS Didot<br \/>GFS Neohellenic<br \/>Nova Mono<br \/>Open Sans<br \/>Open Sans Condensed<br \/>Play<br \/>Ubuntu<br \/><\/span><div class=\"offlajnlistbtn\"><span><\/span><\/div><\/div><input type=\"hidden\" name=\"params[paragraphfont]family\" id=\"paramsparagraphfontfamily\" value=\"Open Sans\"\/><\/div><\/div>","script":"dojo.addOnLoad(function(){\n      new OfflajnList({\n        name: \"paramsparagraphfontfamily\",\n        elements: \"<div class=\\\"content\\\"><div class=\\\"listelement\\\">Anonymous Pro<\\\/div><div class=\\\"listelement\\\">Caudex<\\\/div><div class=\\\"listelement\\\">Didact Gothic<\\\/div><div class=\\\"listelement\\\">Jura<\\\/div><div class=\\\"listelement\\\">GFS Didot<\\\/div><div class=\\\"listelement\\\">GFS Neohellenic<\\\/div><div class=\\\"listelement\\\">Nova Mono<\\\/div><div class=\\\"listelement\\\">Open Sans<\\\/div><div class=\\\"listelement\\\">Open Sans Condensed<\\\/div><div class=\\\"listelement\\\">Play<\\\/div><div class=\\\"listelement\\\">Ubuntu<\\\/div><\\\/div>\",\n        options: [{\"value\":\"Anonymous Pro\",\"text\":\"Anonymous Pro\"},{\"value\":\"Caudex\",\"text\":\"Caudex\"},{\"value\":\"Didact Gothic\",\"text\":\"Didact Gothic\"},{\"value\":\"Jura\",\"text\":\"Jura\"},{\"value\":\"GFS Didot\",\"text\":\"GFS Didot\"},{\"value\":\"GFS Neohellenic\",\"text\":\"GFS Neohellenic\"},{\"value\":\"Nova Mono\",\"text\":\"Nova Mono\"},{\"value\":\"Open Sans\",\"text\":\"Open Sans\"},{\"value\":\"Open Sans Condensed\",\"text\":\"Open Sans Condensed\"},{\"value\":\"Play\",\"text\":\"Play\"},{\"value\":\"Ubuntu\",\"text\":\"Ubuntu\"}],\n        selectedIndex: 7,\n        height: \"10\",\n        fireshow: 1\n      });\n    });"},"GreekExtended":{"name":"params[paragraphfont]family","id":"paramsparagraphfontfamily","html":"<div style='position:relative;'><div id=\"offlajnlistcontainerparamsparagraphfontfamily\" class=\"gk_hack offlajnlistcontainer\"><div class=\"gk_hack offlajnlist\"><span class=\"offlajnlistcurrent\">Open Sans<br \/>Anonymous Pro<br \/>Caudex<br \/>Didact Gothic<br \/>Jura<br \/>Open Sans<br \/>Open Sans Condensed<br \/>Play<br \/>Ubuntu<br \/><\/span><div class=\"offlajnlistbtn\"><span><\/span><\/div><\/div><input type=\"hidden\" name=\"params[paragraphfont]family\" id=\"paramsparagraphfontfamily\" value=\"Open Sans\"\/><\/div><\/div>","script":"dojo.addOnLoad(function(){\n      new OfflajnList({\n        name: \"paramsparagraphfontfamily\",\n        elements: \"<div class=\\\"content\\\"><div class=\\\"listelement\\\">Anonymous Pro<\\\/div><div class=\\\"listelement\\\">Caudex<\\\/div><div class=\\\"listelement\\\">Didact Gothic<\\\/div><div class=\\\"listelement\\\">Jura<\\\/div><div class=\\\"listelement\\\">Open Sans<\\\/div><div class=\\\"listelement\\\">Open Sans Condensed<\\\/div><div class=\\\"listelement\\\">Play<\\\/div><div class=\\\"listelement\\\">Ubuntu<\\\/div><\\\/div>\",\n        options: [{\"value\":\"Anonymous Pro\",\"text\":\"Anonymous Pro\"},{\"value\":\"Caudex\",\"text\":\"Caudex\"},{\"value\":\"Didact Gothic\",\"text\":\"Didact Gothic\"},{\"value\":\"Jura\",\"text\":\"Jura\"},{\"value\":\"Open Sans\",\"text\":\"Open Sans\"},{\"value\":\"Open Sans Condensed\",\"text\":\"Open Sans Condensed\"},{\"value\":\"Play\",\"text\":\"Play\"},{\"value\":\"Ubuntu\",\"text\":\"Ubuntu\"}],\n        selectedIndex: 4,\n        height: \"10\",\n        fireshow: 1\n      });\n    });"},"Khmer":{"name":"params[paragraphfont]family","id":"paramsparagraphfontfamily","html":"<div style='position:relative;'><div id=\"offlajnlistcontainerparamsparagraphfontfamily\" class=\"gk_hack offlajnlistcontainer\"><div class=\"gk_hack offlajnlist\"><span class=\"offlajnlistcurrent\">Angkor<br \/>Angkor<br \/>Battambang<br \/>Bayon<br \/>Bokor<br \/>Chenla<br \/>Content<br \/>Dangrek<br \/>Freehand<br \/>Hanuman<br \/>Khmer<br \/>Koulen<br \/>Metal<br \/>Moul<br \/>Moulpali<br \/>Odor Mean Chey<br \/>Preahvihear<br \/>Siemreap<br \/>Suwannaphum<br \/>Taprom<br \/><\/span><div class=\"offlajnlistbtn\"><span><\/span><\/div><\/div><input type=\"hidden\" name=\"params[paragraphfont]family\" id=\"paramsparagraphfontfamily\" value=\"Angkor\"\/><\/div><\/div>","script":"dojo.addOnLoad(function(){\n      new OfflajnList({\n        name: \"paramsparagraphfontfamily\",\n        elements: \"<div class=\\\"content\\\"><div class=\\\"listelement\\\">Angkor<\\\/div><div class=\\\"listelement\\\">Battambang<\\\/div><div class=\\\"listelement\\\">Bayon<\\\/div><div class=\\\"listelement\\\">Bokor<\\\/div><div class=\\\"listelement\\\">Chenla<\\\/div><div class=\\\"listelement\\\">Content<\\\/div><div class=\\\"listelement\\\">Dangrek<\\\/div><div class=\\\"listelement\\\">Freehand<\\\/div><div class=\\\"listelement\\\">Hanuman<\\\/div><div class=\\\"listelement\\\">Khmer<\\\/div><div class=\\\"listelement\\\">Koulen<\\\/div><div class=\\\"listelement\\\">Metal<\\\/div><div class=\\\"listelement\\\">Moul<\\\/div><div class=\\\"listelement\\\">Moulpali<\\\/div><div class=\\\"listelement\\\">Odor Mean Chey<\\\/div><div class=\\\"listelement\\\">Preahvihear<\\\/div><div class=\\\"listelement\\\">Siemreap<\\\/div><div class=\\\"listelement\\\">Suwannaphum<\\\/div><div class=\\\"listelement\\\">Taprom<\\\/div><\\\/div>\",\n        options: [{\"value\":\"Angkor\",\"text\":\"Angkor\"},{\"value\":\"Battambang\",\"text\":\"Battambang\"},{\"value\":\"Bayon\",\"text\":\"Bayon\"},{\"value\":\"Bokor\",\"text\":\"Bokor\"},{\"value\":\"Chenla\",\"text\":\"Chenla\"},{\"value\":\"Content\",\"text\":\"Content\"},{\"value\":\"Dangrek\",\"text\":\"Dangrek\"},{\"value\":\"Freehand\",\"text\":\"Freehand\"},{\"value\":\"Hanuman\",\"text\":\"Hanuman\"},{\"value\":\"Khmer\",\"text\":\"Khmer\"},{\"value\":\"Koulen\",\"text\":\"Koulen\"},{\"value\":\"Metal\",\"text\":\"Metal\"},{\"value\":\"Moul\",\"text\":\"Moul\"},{\"value\":\"Moulpali\",\"text\":\"Moulpali\"},{\"value\":\"Odor Mean Chey\",\"text\":\"Odor Mean Chey\"},{\"value\":\"Preahvihear\",\"text\":\"Preahvihear\"},{\"value\":\"Siemreap\",\"text\":\"Siemreap\"},{\"value\":\"Suwannaphum\",\"text\":\"Suwannaphum\"},{\"value\":\"Taprom\",\"text\":\"Taprom\"}],\n        selectedIndex: 0,\n        height: \"10\",\n        fireshow: 1\n      });\n    });"},"Latin":{"name":"params[paragraphfont]family","id":"paramsparagraphfontfamily","html":"<div style='position:relative;'><div id=\"offlajnlistcontainerparamsparagraphfontfamily\" class=\"gk_hack offlajnlistcontainer\"><div class=\"gk_hack offlajnlist\"><span class=\"offlajnlistcurrent\">Open Sans<br \/>Abel<br \/>Abril Fatface<br \/>Aclonica<br \/>Actor<br \/>Aldrich<br \/>Alice<br \/>Alike<br \/>Allan<br \/>Allerta<br \/>Allerta Stencil<br \/>Amaranth<br \/>Andika<br \/>Annie Use Your Telescope<br \/>Anonymous Pro<br \/>Antic<br \/>Anton<br \/>Architects Daughter<br \/>Arimo<br \/>Artifika<br \/>Arvo<br \/>Asap<br \/>Asul<br \/>Asset<br \/>Astloch<br \/>Aubrey<br \/>Bangers<br \/>Bentham<br \/>Bevan<br \/>Bigshot One<br \/>Black Ops One<br \/>Bowlby One<br \/>Bowlby One SC<br \/>Brawler<br \/>Buda<br \/>Cabin<br \/>Cabin Sketch<br \/>Calligraffitti<br \/>Candal<br \/>Cantarell<br \/>Cardo<br \/>Carme<br \/>Carter One<br \/>Caudex<br \/>Cedarville Cursive<br \/>Cherry Cream Soda<br \/>Chewy<br \/>Chivo<br \/>Coda<br \/>Coda Caption<br \/>Comfortaa<br \/>Coming Soon<br \/>Convergence<br \/>Copse<br \/>Corben<br \/>Cousine<br \/>Coustard<br \/>Covered By Your Grace<br \/>Crafty Girls<br \/>Crimson Text<br \/>Crushed<br \/>Cuprum<br \/>Damion<br \/>Dancing Script<br \/>Dawning of a New Day<br \/>Days One<br \/>Delius<br \/>Delius Swash Caps<br \/>Delius Unicase<br \/>Didact Gothic<br \/>Dorsa<br \/>Droid Sans<br \/>Droid Sans Mono<br \/>Droid Serif<br \/>EB Garamond<br \/>Exo<br \/>Expletus Sans<br \/>Fanwood Text<br \/>Federo<br \/>Fontdiner Swanky<br \/>Forum<br \/>Francois One<br \/>Gentium Basic<br \/>Gentium Book Basic<br \/>Geo<br \/>Geostar<br \/>Geostar Fill<br \/>Give You Glory<br \/>Gloria Hallelujah<br \/>Goblin One<br \/>Goudy Bookletter 1911<br \/>Gravitas One<br \/>Gruppo<br \/>Hammersmith One<br \/>Holtwood One SC<br \/>Homemade Apple<br \/>IM Fell DW Pica<br \/>IM Fell DW Pica SC<br \/>IM Fell Double Pica<br \/>IM Fell Double Pica SC<br \/>IM Fell English<br \/>IM Fell English SC<br \/>IM Fell French Canon<br \/>IM Fell French Canon SC<br \/>IM Fell Great Primer<br \/>IM Fell Great Primer SC<br \/>Inconsolata<br \/>Inder<br \/>Indie Flower<br \/>Irish Grover<br \/>Istok Web<br \/>Josefin Sans<br \/>Josefin Slab<br \/>Judson<br \/>Jura<br \/>Just Another Hand<br \/>Just Me Again Down Here<br \/>Kameron<br \/>Kelly Slab<br \/>Kenia<br \/>Kranky<br \/>Kreon<br \/>Kristi<br \/>La Belle Aurore<br \/>Lato<br \/>League Script<br \/>Leckerli One<br \/>Lekton<br \/>Limelight<br \/>Lobster<br \/>Lobster Two<br \/>Lora<br \/>Love Ya Like A Sister<br \/>Loved by the King<br \/>Luckiest Guy<br \/>Magra<br \/>Maiden Orange<br \/>Mako<br \/>Marvel<br \/>Maven Pro<br \/>Meddon<br \/>MedievalSharp<br \/>Megrim<br \/>Merriweather<br \/>Metrophobic<br \/>Michroma<br \/>Miltonian<br \/>Miltonian Tattoo<br \/>Modern Antiqua<br \/>Molengo<br \/>Monofett<br \/>Monoton<br \/>Montez<br \/>Mountains of Christmas<br \/>Muli<br \/>Neucha<br \/>Neuton<br \/>News Cycle<br \/>Nixie One<br \/>Nobile<br \/>Nothing You Could Do<br \/>Nova Cut<br \/>Nova Flat<br \/>Nova Mono<br \/>Nova Oval<br \/>Nova Round<br \/>Nova Script<br \/>Nova Slim<br \/>Nova Square<br \/>Numans<br \/>Nunito<br \/>OFL Sorts Mill Goudy TT<br \/>Old Standard TT<br \/>Open Sans<br \/>Open Sans Condensed<br \/>Orbitron<br \/>Oswald<br \/>Over the Rainbow<br \/>Ovo<br \/>PT Sans<br \/>PT Sans Caption<br \/>PT Sans Narrow<br \/>PT Serif<br \/>PT Serif Caption<br \/>Pacifico<br \/>Passero One<br \/>Patrick Hand<br \/>Paytone One<br \/>Permanent Marker<br \/>Philosopher<br \/>Play<br \/>Playfair Display<br \/>Podkova<br \/>Pompiere<br \/>Prociono<br \/>Puritan<br \/>Quattrocento<br \/>Quattrocento Sans<br \/>Questrial<br \/>Quicksand<br \/>Radley<br \/>Raleway<br \/>Rationale<br \/>Redressed<br \/>Reenie Beanie<br \/>Rochester<br \/>Rock Salt<br \/>Rokkitt<br \/>Ropa Sans<br \/>Rosario<br \/>Ruslan Display<br \/>Schoolbell<br \/>Shadows Into Light<br \/>Shanti<br \/>Short Stack<br \/>Sigmar One<br \/>Signika<br \/>Signika Negative<br \/>Six Caps<br \/>Slackey<br \/>Smokum<br \/>Smythe<br \/>Sniglet<br \/>Snippet<br \/>Special Elite<br \/>Stardos Stencil<br \/>Sue Ellen Francisco<br \/>Sunshiney<br \/>Swanky and Moo Moo<br \/>Syncopate<br \/>Tangerine<br \/>Telex<br \/>Tenor Sans<br \/>Terminal Dosis Light<br \/>The Girl Next Door<br \/>Tienne<br \/>Tinos<br \/>Tulpen One<br \/>Ubuntu<br \/>Ultra<br \/>UnifrakturCook<br \/>UnifrakturMaguntia<br \/>Unkempt<br \/>Unna<br \/>VT323<br \/>Varela<br \/>Varela Round<br \/>Vibur<br \/>Viga<br \/>Vidaloka<br \/>Volkhov<br \/>Vollkorn<br \/>Voltaire<br \/>Waiting for the Sunrise<br \/>Wallpoet<br \/>Walter Turncoat<br \/>Wire One<br \/>Yanone Kaffeesatz<br \/>Yellowtail<br \/>Yeseva One<br \/>Zeyada<br \/><\/span><div class=\"offlajnlistbtn\"><span><\/span><\/div><\/div><input type=\"hidden\" name=\"params[paragraphfont]family\" id=\"paramsparagraphfontfamily\" value=\"Open Sans\"\/><\/div><\/div>","script":"dojo.addOnLoad(function(){\n      new OfflajnList({\n        name: \"paramsparagraphfontfamily\",\n        elements: \"<div class=\\\"content\\\"><div class=\\\"listelement\\\">Abel<\\\/div><div class=\\\"listelement\\\">Abril Fatface<\\\/div><div class=\\\"listelement\\\">Aclonica<\\\/div><div class=\\\"listelement\\\">Actor<\\\/div><div class=\\\"listelement\\\">Aldrich<\\\/div><div class=\\\"listelement\\\">Alice<\\\/div><div class=\\\"listelement\\\">Alike<\\\/div><div class=\\\"listelement\\\">Allan<\\\/div><div class=\\\"listelement\\\">Allerta<\\\/div><div class=\\\"listelement\\\">Allerta Stencil<\\\/div><div class=\\\"listelement\\\">Amaranth<\\\/div><div class=\\\"listelement\\\">Andika<\\\/div><div class=\\\"listelement\\\">Annie Use Your Telescope<\\\/div><div class=\\\"listelement\\\">Anonymous Pro<\\\/div><div class=\\\"listelement\\\">Antic<\\\/div><div class=\\\"listelement\\\">Anton<\\\/div><div class=\\\"listelement\\\">Architects Daughter<\\\/div><div class=\\\"listelement\\\">Arimo<\\\/div><div class=\\\"listelement\\\">Artifika<\\\/div><div class=\\\"listelement\\\">Arvo<\\\/div><div class=\\\"listelement\\\">Asap<\\\/div><div class=\\\"listelement\\\">Asul<\\\/div><div class=\\\"listelement\\\">Asset<\\\/div><div class=\\\"listelement\\\">Astloch<\\\/div><div class=\\\"listelement\\\">Aubrey<\\\/div><div class=\\\"listelement\\\">Bangers<\\\/div><div class=\\\"listelement\\\">Bentham<\\\/div><div class=\\\"listelement\\\">Bevan<\\\/div><div class=\\\"listelement\\\">Bigshot One<\\\/div><div class=\\\"listelement\\\">Black Ops One<\\\/div><div class=\\\"listelement\\\">Bowlby One<\\\/div><div class=\\\"listelement\\\">Bowlby One SC<\\\/div><div class=\\\"listelement\\\">Brawler<\\\/div><div class=\\\"listelement\\\">Buda<\\\/div><div class=\\\"listelement\\\">Cabin<\\\/div><div class=\\\"listelement\\\">Cabin Sketch<\\\/div><div class=\\\"listelement\\\">Calligraffitti<\\\/div><div class=\\\"listelement\\\">Candal<\\\/div><div class=\\\"listelement\\\">Cantarell<\\\/div><div class=\\\"listelement\\\">Cardo<\\\/div><div class=\\\"listelement\\\">Carme<\\\/div><div class=\\\"listelement\\\">Carter One<\\\/div><div class=\\\"listelement\\\">Caudex<\\\/div><div class=\\\"listelement\\\">Cedarville Cursive<\\\/div><div class=\\\"listelement\\\">Cherry Cream Soda<\\\/div><div class=\\\"listelement\\\">Chewy<\\\/div><div class=\\\"listelement\\\">Chivo<\\\/div><div class=\\\"listelement\\\">Coda<\\\/div><div class=\\\"listelement\\\">Coda Caption<\\\/div><div class=\\\"listelement\\\">Comfortaa<\\\/div><div class=\\\"listelement\\\">Coming Soon<\\\/div><div class=\\\"listelement\\\">Convergence<\\\/div><div class=\\\"listelement\\\">Copse<\\\/div><div class=\\\"listelement\\\">Corben<\\\/div><div class=\\\"listelement\\\">Cousine<\\\/div><div class=\\\"listelement\\\">Coustard<\\\/div><div class=\\\"listelement\\\">Covered By Your Grace<\\\/div><div class=\\\"listelement\\\">Crafty Girls<\\\/div><div class=\\\"listelement\\\">Crimson Text<\\\/div><div class=\\\"listelement\\\">Crushed<\\\/div><div class=\\\"listelement\\\">Cuprum<\\\/div><div class=\\\"listelement\\\">Damion<\\\/div><div class=\\\"listelement\\\">Dancing Script<\\\/div><div class=\\\"listelement\\\">Dawning of a New Day<\\\/div><div class=\\\"listelement\\\">Days One<\\\/div><div class=\\\"listelement\\\">Delius<\\\/div><div class=\\\"listelement\\\">Delius Swash Caps<\\\/div><div class=\\\"listelement\\\">Delius Unicase<\\\/div><div class=\\\"listelement\\\">Didact Gothic<\\\/div><div class=\\\"listelement\\\">Dorsa<\\\/div><div class=\\\"listelement\\\">Droid Sans<\\\/div><div class=\\\"listelement\\\">Droid Sans Mono<\\\/div><div class=\\\"listelement\\\">Droid Serif<\\\/div><div class=\\\"listelement\\\">EB Garamond<\\\/div><div class=\\\"listelement\\\">Exo<\\\/div><div class=\\\"listelement\\\">Expletus Sans<\\\/div><div class=\\\"listelement\\\">Fanwood Text<\\\/div><div class=\\\"listelement\\\">Federo<\\\/div><div class=\\\"listelement\\\">Fontdiner Swanky<\\\/div><div class=\\\"listelement\\\">Forum<\\\/div><div class=\\\"listelement\\\">Francois One<\\\/div><div class=\\\"listelement\\\">Gentium Basic<\\\/div><div class=\\\"listelement\\\">Gentium Book Basic<\\\/div><div class=\\\"listelement\\\">Geo<\\\/div><div class=\\\"listelement\\\">Geostar<\\\/div><div class=\\\"listelement\\\">Geostar Fill<\\\/div><div class=\\\"listelement\\\">Give You Glory<\\\/div><div class=\\\"listelement\\\">Gloria Hallelujah<\\\/div><div class=\\\"listelement\\\">Goblin One<\\\/div><div class=\\\"listelement\\\">Goudy Bookletter 1911<\\\/div><div class=\\\"listelement\\\">Gravitas One<\\\/div><div class=\\\"listelement\\\">Gruppo<\\\/div><div class=\\\"listelement\\\">Hammersmith One<\\\/div><div class=\\\"listelement\\\">Holtwood One SC<\\\/div><div class=\\\"listelement\\\">Homemade Apple<\\\/div><div class=\\\"listelement\\\">IM Fell DW Pica<\\\/div><div class=\\\"listelement\\\">IM Fell DW Pica SC<\\\/div><div class=\\\"listelement\\\">IM Fell Double Pica<\\\/div><div class=\\\"listelement\\\">IM Fell Double Pica SC<\\\/div><div class=\\\"listelement\\\">IM Fell English<\\\/div><div class=\\\"listelement\\\">IM Fell English SC<\\\/div><div class=\\\"listelement\\\">IM Fell French Canon<\\\/div><div class=\\\"listelement\\\">IM Fell French Canon SC<\\\/div><div class=\\\"listelement\\\">IM Fell Great Primer<\\\/div><div class=\\\"listelement\\\">IM Fell Great Primer SC<\\\/div><div class=\\\"listelement\\\">Inconsolata<\\\/div><div class=\\\"listelement\\\">Inder<\\\/div><div class=\\\"listelement\\\">Indie Flower<\\\/div><div class=\\\"listelement\\\">Irish Grover<\\\/div><div class=\\\"listelement\\\">Istok Web<\\\/div><div class=\\\"listelement\\\">Josefin Sans<\\\/div><div class=\\\"listelement\\\">Josefin Slab<\\\/div><div class=\\\"listelement\\\">Judson<\\\/div><div class=\\\"listelement\\\">Jura<\\\/div><div class=\\\"listelement\\\">Just Another Hand<\\\/div><div class=\\\"listelement\\\">Just Me Again Down Here<\\\/div><div class=\\\"listelement\\\">Kameron<\\\/div><div class=\\\"listelement\\\">Kelly Slab<\\\/div><div class=\\\"listelement\\\">Kenia<\\\/div><div class=\\\"listelement\\\">Kranky<\\\/div><div class=\\\"listelement\\\">Kreon<\\\/div><div class=\\\"listelement\\\">Kristi<\\\/div><div class=\\\"listelement\\\">La Belle Aurore<\\\/div><div class=\\\"listelement\\\">Lato<\\\/div><div class=\\\"listelement\\\">League Script<\\\/div><div class=\\\"listelement\\\">Leckerli One<\\\/div><div class=\\\"listelement\\\">Lekton<\\\/div><div class=\\\"listelement\\\">Limelight<\\\/div><div class=\\\"listelement\\\">Lobster<\\\/div><div class=\\\"listelement\\\">Lobster Two<\\\/div><div class=\\\"listelement\\\">Lora<\\\/div><div class=\\\"listelement\\\">Love Ya Like A Sister<\\\/div><div class=\\\"listelement\\\">Loved by the King<\\\/div><div class=\\\"listelement\\\">Luckiest Guy<\\\/div><div class=\\\"listelement\\\">Magra<\\\/div><div class=\\\"listelement\\\">Maiden Orange<\\\/div><div class=\\\"listelement\\\">Mako<\\\/div><div class=\\\"listelement\\\">Marvel<\\\/div><div class=\\\"listelement\\\">Maven Pro<\\\/div><div class=\\\"listelement\\\">Meddon<\\\/div><div class=\\\"listelement\\\">MedievalSharp<\\\/div><div class=\\\"listelement\\\">Megrim<\\\/div><div class=\\\"listelement\\\">Merriweather<\\\/div><div class=\\\"listelement\\\">Metrophobic<\\\/div><div class=\\\"listelement\\\">Michroma<\\\/div><div class=\\\"listelement\\\">Miltonian<\\\/div><div class=\\\"listelement\\\">Miltonian Tattoo<\\\/div><div class=\\\"listelement\\\">Modern Antiqua<\\\/div><div class=\\\"listelement\\\">Molengo<\\\/div><div class=\\\"listelement\\\">Monofett<\\\/div><div class=\\\"listelement\\\">Monoton<\\\/div><div class=\\\"listelement\\\">Montez<\\\/div><div class=\\\"listelement\\\">Mountains of Christmas<\\\/div><div class=\\\"listelement\\\">Muli<\\\/div><div class=\\\"listelement\\\">Neucha<\\\/div><div class=\\\"listelement\\\">Neuton<\\\/div><div class=\\\"listelement\\\">News Cycle<\\\/div><div class=\\\"listelement\\\">Nixie One<\\\/div><div class=\\\"listelement\\\">Nobile<\\\/div><div class=\\\"listelement\\\">Nothing You Could Do<\\\/div><div class=\\\"listelement\\\">Nova Cut<\\\/div><div class=\\\"listelement\\\">Nova Flat<\\\/div><div class=\\\"listelement\\\">Nova Mono<\\\/div><div class=\\\"listelement\\\">Nova Oval<\\\/div><div class=\\\"listelement\\\">Nova Round<\\\/div><div class=\\\"listelement\\\">Nova Script<\\\/div><div class=\\\"listelement\\\">Nova Slim<\\\/div><div class=\\\"listelement\\\">Nova Square<\\\/div><div class=\\\"listelement\\\">Numans<\\\/div><div class=\\\"listelement\\\">Nunito<\\\/div><div class=\\\"listelement\\\">OFL Sorts Mill Goudy TT<\\\/div><div class=\\\"listelement\\\">Old Standard TT<\\\/div><div class=\\\"listelement\\\">Open Sans<\\\/div><div class=\\\"listelement\\\">Open Sans Condensed<\\\/div><div class=\\\"listelement\\\">Orbitron<\\\/div><div class=\\\"listelement\\\">Oswald<\\\/div><div class=\\\"listelement\\\">Over the Rainbow<\\\/div><div class=\\\"listelement\\\">Ovo<\\\/div><div class=\\\"listelement\\\">PT Sans<\\\/div><div class=\\\"listelement\\\">PT Sans Caption<\\\/div><div class=\\\"listelement\\\">PT Sans Narrow<\\\/div><div class=\\\"listelement\\\">PT Serif<\\\/div><div class=\\\"listelement\\\">PT Serif Caption<\\\/div><div class=\\\"listelement\\\">Pacifico<\\\/div><div class=\\\"listelement\\\">Passero One<\\\/div><div class=\\\"listelement\\\">Patrick Hand<\\\/div><div class=\\\"listelement\\\">Paytone One<\\\/div><div class=\\\"listelement\\\">Permanent Marker<\\\/div><div class=\\\"listelement\\\">Philosopher<\\\/div><div class=\\\"listelement\\\">Play<\\\/div><div class=\\\"listelement\\\">Playfair Display<\\\/div><div class=\\\"listelement\\\">Podkova<\\\/div><div class=\\\"listelement\\\">Pompiere<\\\/div><div class=\\\"listelement\\\">Prociono<\\\/div><div class=\\\"listelement\\\">Puritan<\\\/div><div class=\\\"listelement\\\">Quattrocento<\\\/div><div class=\\\"listelement\\\">Quattrocento Sans<\\\/div><div class=\\\"listelement\\\">Questrial<\\\/div><div class=\\\"listelement\\\">Quicksand<\\\/div><div class=\\\"listelement\\\">Radley<\\\/div><div class=\\\"listelement\\\">Raleway<\\\/div><div class=\\\"listelement\\\">Rationale<\\\/div><div class=\\\"listelement\\\">Redressed<\\\/div><div class=\\\"listelement\\\">Reenie Beanie<\\\/div><div class=\\\"listelement\\\">Rochester<\\\/div><div class=\\\"listelement\\\">Rock Salt<\\\/div><div class=\\\"listelement\\\">Rokkitt<\\\/div><div class=\\\"listelement\\\">Ropa Sans<\\\/div><div class=\\\"listelement\\\">Rosario<\\\/div><div class=\\\"listelement\\\">Ruslan Display<\\\/div><div class=\\\"listelement\\\">Schoolbell<\\\/div><div class=\\\"listelement\\\">Shadows Into Light<\\\/div><div class=\\\"listelement\\\">Shanti<\\\/div><div class=\\\"listelement\\\">Short Stack<\\\/div><div class=\\\"listelement\\\">Sigmar One<\\\/div><div class=\\\"listelement\\\">Signika<\\\/div><div class=\\\"listelement\\\">Signika Negative<\\\/div><div class=\\\"listelement\\\">Six Caps<\\\/div><div class=\\\"listelement\\\">Slackey<\\\/div><div class=\\\"listelement\\\">Smokum<\\\/div><div class=\\\"listelement\\\">Smythe<\\\/div><div class=\\\"listelement\\\">Sniglet<\\\/div><div class=\\\"listelement\\\">Snippet<\\\/div><div class=\\\"listelement\\\">Special Elite<\\\/div><div class=\\\"listelement\\\">Stardos Stencil<\\\/div><div class=\\\"listelement\\\">Sue Ellen Francisco<\\\/div><div class=\\\"listelement\\\">Sunshiney<\\\/div><div class=\\\"listelement\\\">Swanky and Moo Moo<\\\/div><div class=\\\"listelement\\\">Syncopate<\\\/div><div class=\\\"listelement\\\">Tangerine<\\\/div><div class=\\\"listelement\\\">Telex<\\\/div><div class=\\\"listelement\\\">Tenor Sans<\\\/div><div class=\\\"listelement\\\">Terminal Dosis Light<\\\/div><div class=\\\"listelement\\\">The Girl Next Door<\\\/div><div class=\\\"listelement\\\">Tienne<\\\/div><div class=\\\"listelement\\\">Tinos<\\\/div><div class=\\\"listelement\\\">Tulpen One<\\\/div><div class=\\\"listelement\\\">Ubuntu<\\\/div><div class=\\\"listelement\\\">Ultra<\\\/div><div class=\\\"listelement\\\">UnifrakturCook<\\\/div><div class=\\\"listelement\\\">UnifrakturMaguntia<\\\/div><div class=\\\"listelement\\\">Unkempt<\\\/div><div class=\\\"listelement\\\">Unna<\\\/div><div class=\\\"listelement\\\">VT323<\\\/div><div class=\\\"listelement\\\">Varela<\\\/div><div class=\\\"listelement\\\">Varela Round<\\\/div><div class=\\\"listelement\\\">Vibur<\\\/div><div class=\\\"listelement\\\">Viga<\\\/div><div class=\\\"listelement\\\">Vidaloka<\\\/div><div class=\\\"listelement\\\">Volkhov<\\\/div><div class=\\\"listelement\\\">Vollkorn<\\\/div><div class=\\\"listelement\\\">Voltaire<\\\/div><div class=\\\"listelement\\\">Waiting for the Sunrise<\\\/div><div class=\\\"listelement\\\">Wallpoet<\\\/div><div class=\\\"listelement\\\">Walter Turncoat<\\\/div><div class=\\\"listelement\\\">Wire One<\\\/div><div class=\\\"listelement\\\">Yanone Kaffeesatz<\\\/div><div class=\\\"listelement\\\">Yellowtail<\\\/div><div class=\\\"listelement\\\">Yeseva One<\\\/div><div class=\\\"listelement\\\">Zeyada<\\\/div><\\\/div>\",\n        options: [{\"value\":\"Abel\",\"text\":\"Abel\"},{\"value\":\"Abril Fatface\",\"text\":\"Abril Fatface\"},{\"value\":\"Aclonica\",\"text\":\"Aclonica\"},{\"value\":\"Actor\",\"text\":\"Actor\"},{\"value\":\"Aldrich\",\"text\":\"Aldrich\"},{\"value\":\"Alice\",\"text\":\"Alice\"},{\"value\":\"Alike\",\"text\":\"Alike\"},{\"value\":\"Allan\",\"text\":\"Allan\"},{\"value\":\"Allerta\",\"text\":\"Allerta\"},{\"value\":\"Allerta Stencil\",\"text\":\"Allerta Stencil\"},{\"value\":\"Amaranth\",\"text\":\"Amaranth\"},{\"value\":\"Andika\",\"text\":\"Andika\"},{\"value\":\"Annie Use Your Telescope\",\"text\":\"Annie Use Your Telescope\"},{\"value\":\"Anonymous Pro\",\"text\":\"Anonymous Pro\"},{\"value\":\"Antic\",\"text\":\"Antic\"},{\"value\":\"Anton\",\"text\":\"Anton\"},{\"value\":\"Architects Daughter\",\"text\":\"Architects Daughter\"},{\"value\":\"Arimo\",\"text\":\"Arimo\"},{\"value\":\"Artifika\",\"text\":\"Artifika\"},{\"value\":\"Arvo\",\"text\":\"Arvo\"},{\"value\":\"Asap\",\"text\":\"Asap\"},{\"value\":\"Asul\",\"text\":\"Asul\"},{\"value\":\"Asset\",\"text\":\"Asset\"},{\"value\":\"Astloch\",\"text\":\"Astloch\"},{\"value\":\"Aubrey\",\"text\":\"Aubrey\"},{\"value\":\"Bangers\",\"text\":\"Bangers\"},{\"value\":\"Bentham\",\"text\":\"Bentham\"},{\"value\":\"Bevan\",\"text\":\"Bevan\"},{\"value\":\"Bigshot One\",\"text\":\"Bigshot One\"},{\"value\":\"Black Ops One\",\"text\":\"Black Ops One\"},{\"value\":\"Bowlby One\",\"text\":\"Bowlby One\"},{\"value\":\"Bowlby One SC\",\"text\":\"Bowlby One SC\"},{\"value\":\"Brawler\",\"text\":\"Brawler\"},{\"value\":\"Buda\",\"text\":\"Buda\"},{\"value\":\"Cabin\",\"text\":\"Cabin\"},{\"value\":\"Cabin Sketch\",\"text\":\"Cabin Sketch\"},{\"value\":\"Calligraffitti\",\"text\":\"Calligraffitti\"},{\"value\":\"Candal\",\"text\":\"Candal\"},{\"value\":\"Cantarell\",\"text\":\"Cantarell\"},{\"value\":\"Cardo\",\"text\":\"Cardo\"},{\"value\":\"Carme\",\"text\":\"Carme\"},{\"value\":\"Carter One\",\"text\":\"Carter One\"},{\"value\":\"Caudex\",\"text\":\"Caudex\"},{\"value\":\"Cedarville Cursive\",\"text\":\"Cedarville Cursive\"},{\"value\":\"Cherry Cream Soda\",\"text\":\"Cherry Cream Soda\"},{\"value\":\"Chewy\",\"text\":\"Chewy\"},{\"value\":\"Chivo\",\"text\":\"Chivo\"},{\"value\":\"Coda\",\"text\":\"Coda\"},{\"value\":\"Coda Caption\",\"text\":\"Coda Caption\"},{\"value\":\"Comfortaa\",\"text\":\"Comfortaa\"},{\"value\":\"Coming Soon\",\"text\":\"Coming Soon\"},{\"value\":\"Convergence\",\"text\":\"Convergence\"},{\"value\":\"Copse\",\"text\":\"Copse\"},{\"value\":\"Corben\",\"text\":\"Corben\"},{\"value\":\"Cousine\",\"text\":\"Cousine\"},{\"value\":\"Coustard\",\"text\":\"Coustard\"},{\"value\":\"Covered By Your Grace\",\"text\":\"Covered By Your Grace\"},{\"value\":\"Crafty Girls\",\"text\":\"Crafty Girls\"},{\"value\":\"Crimson Text\",\"text\":\"Crimson Text\"},{\"value\":\"Crushed\",\"text\":\"Crushed\"},{\"value\":\"Cuprum\",\"text\":\"Cuprum\"},{\"value\":\"Damion\",\"text\":\"Damion\"},{\"value\":\"Dancing Script\",\"text\":\"Dancing Script\"},{\"value\":\"Dawning of a New Day\",\"text\":\"Dawning of a New Day\"},{\"value\":\"Days One\",\"text\":\"Days One\"},{\"value\":\"Delius\",\"text\":\"Delius\"},{\"value\":\"Delius Swash Caps\",\"text\":\"Delius Swash Caps\"},{\"value\":\"Delius Unicase\",\"text\":\"Delius Unicase\"},{\"value\":\"Didact Gothic\",\"text\":\"Didact Gothic\"},{\"value\":\"Dorsa\",\"text\":\"Dorsa\"},{\"value\":\"Droid Sans\",\"text\":\"Droid Sans\"},{\"value\":\"Droid Sans Mono\",\"text\":\"Droid Sans Mono\"},{\"value\":\"Droid Serif\",\"text\":\"Droid Serif\"},{\"value\":\"EB Garamond\",\"text\":\"EB Garamond\"},{\"value\":\"Exo\",\"text\":\"Exo\"},{\"value\":\"Expletus Sans\",\"text\":\"Expletus Sans\"},{\"value\":\"Fanwood Text\",\"text\":\"Fanwood Text\"},{\"value\":\"Federo\",\"text\":\"Federo\"},{\"value\":\"Fontdiner Swanky\",\"text\":\"Fontdiner Swanky\"},{\"value\":\"Forum\",\"text\":\"Forum\"},{\"value\":\"Francois One\",\"text\":\"Francois One\"},{\"value\":\"Gentium Basic\",\"text\":\"Gentium Basic\"},{\"value\":\"Gentium Book Basic\",\"text\":\"Gentium Book Basic\"},{\"value\":\"Geo\",\"text\":\"Geo\"},{\"value\":\"Geostar\",\"text\":\"Geostar\"},{\"value\":\"Geostar Fill\",\"text\":\"Geostar Fill\"},{\"value\":\"Give You Glory\",\"text\":\"Give You Glory\"},{\"value\":\"Gloria Hallelujah\",\"text\":\"Gloria Hallelujah\"},{\"value\":\"Goblin One\",\"text\":\"Goblin One\"},{\"value\":\"Goudy Bookletter 1911\",\"text\":\"Goudy Bookletter 1911\"},{\"value\":\"Gravitas One\",\"text\":\"Gravitas One\"},{\"value\":\"Gruppo\",\"text\":\"Gruppo\"},{\"value\":\"Hammersmith One\",\"text\":\"Hammersmith One\"},{\"value\":\"Holtwood One SC\",\"text\":\"Holtwood One SC\"},{\"value\":\"Homemade Apple\",\"text\":\"Homemade Apple\"},{\"value\":\"IM Fell DW Pica\",\"text\":\"IM Fell DW Pica\"},{\"value\":\"IM Fell DW Pica SC\",\"text\":\"IM Fell DW Pica SC\"},{\"value\":\"IM Fell Double Pica\",\"text\":\"IM Fell Double Pica\"},{\"value\":\"IM Fell Double Pica SC\",\"text\":\"IM Fell Double Pica SC\"},{\"value\":\"IM Fell English\",\"text\":\"IM Fell English\"},{\"value\":\"IM Fell English SC\",\"text\":\"IM Fell English SC\"},{\"value\":\"IM Fell French Canon\",\"text\":\"IM Fell French Canon\"},{\"value\":\"IM Fell French Canon SC\",\"text\":\"IM Fell French Canon SC\"},{\"value\":\"IM Fell Great Primer\",\"text\":\"IM Fell Great Primer\"},{\"value\":\"IM Fell Great Primer SC\",\"text\":\"IM Fell Great Primer SC\"},{\"value\":\"Inconsolata\",\"text\":\"Inconsolata\"},{\"value\":\"Inder\",\"text\":\"Inder\"},{\"value\":\"Indie Flower\",\"text\":\"Indie Flower\"},{\"value\":\"Irish Grover\",\"text\":\"Irish Grover\"},{\"value\":\"Istok Web\",\"text\":\"Istok Web\"},{\"value\":\"Josefin Sans\",\"text\":\"Josefin Sans\"},{\"value\":\"Josefin Slab\",\"text\":\"Josefin Slab\"},{\"value\":\"Judson\",\"text\":\"Judson\"},{\"value\":\"Jura\",\"text\":\"Jura\"},{\"value\":\"Just Another Hand\",\"text\":\"Just Another Hand\"},{\"value\":\"Just Me Again Down Here\",\"text\":\"Just Me Again Down Here\"},{\"value\":\"Kameron\",\"text\":\"Kameron\"},{\"value\":\"Kelly Slab\",\"text\":\"Kelly Slab\"},{\"value\":\"Kenia\",\"text\":\"Kenia\"},{\"value\":\"Kranky\",\"text\":\"Kranky\"},{\"value\":\"Kreon\",\"text\":\"Kreon\"},{\"value\":\"Kristi\",\"text\":\"Kristi\"},{\"value\":\"La Belle Aurore\",\"text\":\"La Belle Aurore\"},{\"value\":\"Lato\",\"text\":\"Lato\"},{\"value\":\"League Script\",\"text\":\"League Script\"},{\"value\":\"Leckerli One\",\"text\":\"Leckerli One\"},{\"value\":\"Lekton\",\"text\":\"Lekton\"},{\"value\":\"Limelight\",\"text\":\"Limelight\"},{\"value\":\"Lobster\",\"text\":\"Lobster\"},{\"value\":\"Lobster Two\",\"text\":\"Lobster Two\"},{\"value\":\"Lora\",\"text\":\"Lora\"},{\"value\":\"Love Ya Like A Sister\",\"text\":\"Love Ya Like A Sister\"},{\"value\":\"Loved by the King\",\"text\":\"Loved by the King\"},{\"value\":\"Luckiest Guy\",\"text\":\"Luckiest Guy\"},{\"value\":\"Magra\",\"text\":\"Magra\"},{\"value\":\"Maiden Orange\",\"text\":\"Maiden Orange\"},{\"value\":\"Mako\",\"text\":\"Mako\"},{\"value\":\"Marvel\",\"text\":\"Marvel\"},{\"value\":\"Maven Pro\",\"text\":\"Maven Pro\"},{\"value\":\"Meddon\",\"text\":\"Meddon\"},{\"value\":\"MedievalSharp\",\"text\":\"MedievalSharp\"},{\"value\":\"Megrim\",\"text\":\"Megrim\"},{\"value\":\"Merriweather\",\"text\":\"Merriweather\"},{\"value\":\"Metrophobic\",\"text\":\"Metrophobic\"},{\"value\":\"Michroma\",\"text\":\"Michroma\"},{\"value\":\"Miltonian\",\"text\":\"Miltonian\"},{\"value\":\"Miltonian Tattoo\",\"text\":\"Miltonian Tattoo\"},{\"value\":\"Modern Antiqua\",\"text\":\"Modern Antiqua\"},{\"value\":\"Molengo\",\"text\":\"Molengo\"},{\"value\":\"Monofett\",\"text\":\"Monofett\"},{\"value\":\"Monoton\",\"text\":\"Monoton\"},{\"value\":\"Montez\",\"text\":\"Montez\"},{\"value\":\"Mountains of Christmas\",\"text\":\"Mountains of Christmas\"},{\"value\":\"Muli\",\"text\":\"Muli\"},{\"value\":\"Neucha\",\"text\":\"Neucha\"},{\"value\":\"Neuton\",\"text\":\"Neuton\"},{\"value\":\"News Cycle\",\"text\":\"News Cycle\"},{\"value\":\"Nixie One\",\"text\":\"Nixie One\"},{\"value\":\"Nobile\",\"text\":\"Nobile\"},{\"value\":\"Nothing You Could Do\",\"text\":\"Nothing You Could Do\"},{\"value\":\"Nova Cut\",\"text\":\"Nova Cut\"},{\"value\":\"Nova Flat\",\"text\":\"Nova Flat\"},{\"value\":\"Nova Mono\",\"text\":\"Nova Mono\"},{\"value\":\"Nova Oval\",\"text\":\"Nova Oval\"},{\"value\":\"Nova Round\",\"text\":\"Nova Round\"},{\"value\":\"Nova Script\",\"text\":\"Nova Script\"},{\"value\":\"Nova Slim\",\"text\":\"Nova Slim\"},{\"value\":\"Nova Square\",\"text\":\"Nova Square\"},{\"value\":\"Numans\",\"text\":\"Numans\"},{\"value\":\"Nunito\",\"text\":\"Nunito\"},{\"value\":\"OFL Sorts Mill Goudy TT\",\"text\":\"OFL Sorts Mill Goudy TT\"},{\"value\":\"Old Standard TT\",\"text\":\"Old Standard TT\"},{\"value\":\"Open Sans\",\"text\":\"Open Sans\"},{\"value\":\"Open Sans Condensed\",\"text\":\"Open Sans Condensed\"},{\"value\":\"Orbitron\",\"text\":\"Orbitron\"},{\"value\":\"Oswald\",\"text\":\"Oswald\"},{\"value\":\"Over the Rainbow\",\"text\":\"Over the Rainbow\"},{\"value\":\"Ovo\",\"text\":\"Ovo\"},{\"value\":\"PT Sans\",\"text\":\"PT Sans\"},{\"value\":\"PT Sans Caption\",\"text\":\"PT Sans Caption\"},{\"value\":\"PT Sans Narrow\",\"text\":\"PT Sans Narrow\"},{\"value\":\"PT Serif\",\"text\":\"PT Serif\"},{\"value\":\"PT Serif Caption\",\"text\":\"PT Serif Caption\"},{\"value\":\"Pacifico\",\"text\":\"Pacifico\"},{\"value\":\"Passero One\",\"text\":\"Passero One\"},{\"value\":\"Patrick Hand\",\"text\":\"Patrick Hand\"},{\"value\":\"Paytone One\",\"text\":\"Paytone One\"},{\"value\":\"Permanent Marker\",\"text\":\"Permanent Marker\"},{\"value\":\"Philosopher\",\"text\":\"Philosopher\"},{\"value\":\"Play\",\"text\":\"Play\"},{\"value\":\"Playfair Display\",\"text\":\"Playfair Display\"},{\"value\":\"Podkova\",\"text\":\"Podkova\"},{\"value\":\"Pompiere\",\"text\":\"Pompiere\"},{\"value\":\"Prociono\",\"text\":\"Prociono\"},{\"value\":\"Puritan\",\"text\":\"Puritan\"},{\"value\":\"Quattrocento\",\"text\":\"Quattrocento\"},{\"value\":\"Quattrocento Sans\",\"text\":\"Quattrocento Sans\"},{\"value\":\"Questrial\",\"text\":\"Questrial\"},{\"value\":\"Quicksand\",\"text\":\"Quicksand\"},{\"value\":\"Radley\",\"text\":\"Radley\"},{\"value\":\"Raleway\",\"text\":\"Raleway\"},{\"value\":\"Rationale\",\"text\":\"Rationale\"},{\"value\":\"Redressed\",\"text\":\"Redressed\"},{\"value\":\"Reenie Beanie\",\"text\":\"Reenie Beanie\"},{\"value\":\"Rochester\",\"text\":\"Rochester\"},{\"value\":\"Rock Salt\",\"text\":\"Rock Salt\"},{\"value\":\"Rokkitt\",\"text\":\"Rokkitt\"},{\"value\":\"Ropa Sans\",\"text\":\"Ropa Sans\"},{\"value\":\"Rosario\",\"text\":\"Rosario\"},{\"value\":\"Ruslan Display\",\"text\":\"Ruslan Display\"},{\"value\":\"Schoolbell\",\"text\":\"Schoolbell\"},{\"value\":\"Shadows Into Light\",\"text\":\"Shadows Into Light\"},{\"value\":\"Shanti\",\"text\":\"Shanti\"},{\"value\":\"Short Stack\",\"text\":\"Short Stack\"},{\"value\":\"Sigmar One\",\"text\":\"Sigmar One\"},{\"value\":\"Signika\",\"text\":\"Signika\"},{\"value\":\"Signika Negative\",\"text\":\"Signika Negative\"},{\"value\":\"Six Caps\",\"text\":\"Six Caps\"},{\"value\":\"Slackey\",\"text\":\"Slackey\"},{\"value\":\"Smokum\",\"text\":\"Smokum\"},{\"value\":\"Smythe\",\"text\":\"Smythe\"},{\"value\":\"Sniglet\",\"text\":\"Sniglet\"},{\"value\":\"Snippet\",\"text\":\"Snippet\"},{\"value\":\"Special Elite\",\"text\":\"Special Elite\"},{\"value\":\"Stardos Stencil\",\"text\":\"Stardos Stencil\"},{\"value\":\"Sue Ellen Francisco\",\"text\":\"Sue Ellen Francisco\"},{\"value\":\"Sunshiney\",\"text\":\"Sunshiney\"},{\"value\":\"Swanky and Moo Moo\",\"text\":\"Swanky and Moo Moo\"},{\"value\":\"Syncopate\",\"text\":\"Syncopate\"},{\"value\":\"Tangerine\",\"text\":\"Tangerine\"},{\"value\":\"Telex\",\"text\":\"Telex\"},{\"value\":\"Tenor Sans\",\"text\":\"Tenor Sans\"},{\"value\":\"Terminal Dosis Light\",\"text\":\"Terminal Dosis Light\"},{\"value\":\"The Girl Next Door\",\"text\":\"The Girl Next Door\"},{\"value\":\"Tienne\",\"text\":\"Tienne\"},{\"value\":\"Tinos\",\"text\":\"Tinos\"},{\"value\":\"Tulpen One\",\"text\":\"Tulpen One\"},{\"value\":\"Ubuntu\",\"text\":\"Ubuntu\"},{\"value\":\"Ultra\",\"text\":\"Ultra\"},{\"value\":\"UnifrakturCook\",\"text\":\"UnifrakturCook\"},{\"value\":\"UnifrakturMaguntia\",\"text\":\"UnifrakturMaguntia\"},{\"value\":\"Unkempt\",\"text\":\"Unkempt\"},{\"value\":\"Unna\",\"text\":\"Unna\"},{\"value\":\"VT323\",\"text\":\"VT323\"},{\"value\":\"Varela\",\"text\":\"Varela\"},{\"value\":\"Varela Round\",\"text\":\"Varela Round\"},{\"value\":\"Vibur\",\"text\":\"Vibur\"},{\"value\":\"Viga\",\"text\":\"Viga\"},{\"value\":\"Vidaloka\",\"text\":\"Vidaloka\"},{\"value\":\"Volkhov\",\"text\":\"Volkhov\"},{\"value\":\"Vollkorn\",\"text\":\"Vollkorn\"},{\"value\":\"Voltaire\",\"text\":\"Voltaire\"},{\"value\":\"Waiting for the Sunrise\",\"text\":\"Waiting for the Sunrise\"},{\"value\":\"Wallpoet\",\"text\":\"Wallpoet\"},{\"value\":\"Walter Turncoat\",\"text\":\"Walter Turncoat\"},{\"value\":\"Wire One\",\"text\":\"Wire One\"},{\"value\":\"Yanone Kaffeesatz\",\"text\":\"Yanone Kaffeesatz\"},{\"value\":\"Yellowtail\",\"text\":\"Yellowtail\"},{\"value\":\"Yeseva One\",\"text\":\"Yeseva One\"},{\"value\":\"Zeyada\",\"text\":\"Zeyada\"}],\n        selectedIndex: 172,\n        height: \"10\",\n        fireshow: 1\n      });\n    });"},"LatinExtended":{"name":"params[paragraphfont]family","id":"paramsparagraphfontfamily","html":"<div style='position:relative;'><div id=\"offlajnlistcontainerparamsparagraphfontfamily\" class=\"gk_hack offlajnlistcontainer\"><div class=\"gk_hack offlajnlist\"><span class=\"offlajnlistcurrent\">Open Sans<br \/>Andika<br \/>Anonymous Pro<br \/>Anton<br \/>Caudex<br \/>Didact Gothic<br \/>EB Garamond<br \/>Forum<br \/>Francois One<br \/>Gentium Basic<br \/>Gentium Book Basic<br \/>Istok Web<br \/>Jura<br \/>Kelly Slab<br \/>Lobster<br \/>MedievalSharp<br \/>Modern Antiqua<br \/>Neuton<br \/>Open Sans<br \/>Open Sans Condensed<br \/>Patrick Hand<br \/>Play<br \/>Ruslan Display<br \/>Tenor Sans<br \/>Ubuntu<br \/>Varela<br \/><\/span><div class=\"offlajnlistbtn\"><span><\/span><\/div><\/div><input type=\"hidden\" name=\"params[paragraphfont]family\" id=\"paramsparagraphfontfamily\" value=\"Open Sans\"\/><\/div><\/div>","script":"dojo.addOnLoad(function(){\n      new OfflajnList({\n        name: \"paramsparagraphfontfamily\",\n        elements: \"<div class=\\\"content\\\"><div class=\\\"listelement\\\">Andika<\\\/div><div class=\\\"listelement\\\">Anonymous Pro<\\\/div><div class=\\\"listelement\\\">Anton<\\\/div><div class=\\\"listelement\\\">Caudex<\\\/div><div class=\\\"listelement\\\">Didact Gothic<\\\/div><div class=\\\"listelement\\\">EB Garamond<\\\/div><div class=\\\"listelement\\\">Forum<\\\/div><div class=\\\"listelement\\\">Francois One<\\\/div><div class=\\\"listelement\\\">Gentium Basic<\\\/div><div class=\\\"listelement\\\">Gentium Book Basic<\\\/div><div class=\\\"listelement\\\">Istok Web<\\\/div><div class=\\\"listelement\\\">Jura<\\\/div><div class=\\\"listelement\\\">Kelly Slab<\\\/div><div class=\\\"listelement\\\">Lobster<\\\/div><div class=\\\"listelement\\\">MedievalSharp<\\\/div><div class=\\\"listelement\\\">Modern Antiqua<\\\/div><div class=\\\"listelement\\\">Neuton<\\\/div><div class=\\\"listelement\\\">Open Sans<\\\/div><div class=\\\"listelement\\\">Open Sans Condensed<\\\/div><div class=\\\"listelement\\\">Patrick Hand<\\\/div><div class=\\\"listelement\\\">Play<\\\/div><div class=\\\"listelement\\\">Ruslan Display<\\\/div><div class=\\\"listelement\\\">Tenor Sans<\\\/div><div class=\\\"listelement\\\">Ubuntu<\\\/div><div class=\\\"listelement\\\">Varela<\\\/div><\\\/div>\",\n        options: [{\"value\":\"Andika\",\"text\":\"Andika\"},{\"value\":\"Anonymous Pro\",\"text\":\"Anonymous Pro\"},{\"value\":\"Anton\",\"text\":\"Anton\"},{\"value\":\"Caudex\",\"text\":\"Caudex\"},{\"value\":\"Didact Gothic\",\"text\":\"Didact Gothic\"},{\"value\":\"EB Garamond\",\"text\":\"EB Garamond\"},{\"value\":\"Forum\",\"text\":\"Forum\"},{\"value\":\"Francois One\",\"text\":\"Francois One\"},{\"value\":\"Gentium Basic\",\"text\":\"Gentium Basic\"},{\"value\":\"Gentium Book Basic\",\"text\":\"Gentium Book Basic\"},{\"value\":\"Istok Web\",\"text\":\"Istok Web\"},{\"value\":\"Jura\",\"text\":\"Jura\"},{\"value\":\"Kelly Slab\",\"text\":\"Kelly Slab\"},{\"value\":\"Lobster\",\"text\":\"Lobster\"},{\"value\":\"MedievalSharp\",\"text\":\"MedievalSharp\"},{\"value\":\"Modern Antiqua\",\"text\":\"Modern Antiqua\"},{\"value\":\"Neuton\",\"text\":\"Neuton\"},{\"value\":\"Open Sans\",\"text\":\"Open Sans\"},{\"value\":\"Open Sans Condensed\",\"text\":\"Open Sans Condensed\"},{\"value\":\"Patrick Hand\",\"text\":\"Patrick Hand\"},{\"value\":\"Play\",\"text\":\"Play\"},{\"value\":\"Ruslan Display\",\"text\":\"Ruslan Display\"},{\"value\":\"Tenor Sans\",\"text\":\"Tenor Sans\"},{\"value\":\"Ubuntu\",\"text\":\"Ubuntu\"},{\"value\":\"Varela\",\"text\":\"Varela\"}],\n        selectedIndex: 17,\n        height: \"10\",\n        fireshow: 1\n      });\n    });"},"Vietnamese":{"name":"params[paragraphfont]family","id":"paramsparagraphfontfamily","html":"<div style='position:relative;'><div id=\"offlajnlistcontainerparamsparagraphfontfamily\" class=\"gk_hack offlajnlistcontainer\"><div class=\"gk_hack offlajnlist\"><span class=\"offlajnlistcurrent\">Open Sans<br \/>EB Garamond<br \/>Open Sans<br \/>Open Sans Condensed<br \/><\/span><div class=\"offlajnlistbtn\"><span><\/span><\/div><\/div><input type=\"hidden\" name=\"params[paragraphfont]family\" id=\"paramsparagraphfontfamily\" value=\"Open Sans\"\/><\/div><\/div>","script":"dojo.addOnLoad(function(){\n      new OfflajnList({\n        name: \"paramsparagraphfontfamily\",\n        elements: \"<div class=\\\"content\\\"><div class=\\\"listelement\\\">EB Garamond<\\\/div><div class=\\\"listelement\\\">Open Sans<\\\/div><div class=\\\"listelement\\\">Open Sans Condensed<\\\/div><\\\/div>\",\n        options: [{\"value\":\"EB Garamond\",\"text\":\"EB Garamond\"},{\"value\":\"Open Sans\",\"text\":\"Open Sans\"},{\"value\":\"Open Sans Condensed\",\"text\":\"Open Sans Condensed\"}],\n        selectedIndex: 1,\n        height: \"10\",\n        fireshow: 1\n      });\n    });"},"html":"<div style='position:relative;'><div id=\"offlajnlistcontainerparamsparagraphfonttype\" class=\"gk_hack offlajnlistcontainer\"><div class=\"gk_hack offlajnlist\"><span class=\"offlajnlistcurrent\">Alternative fonts<br \/>Alternative fonts<br \/>Cyrillic<br \/>CyrillicExtended<br \/>Greek<br \/>GreekExtended<br \/>Khmer<br \/>Latin<br \/>LatinExtended<br \/>Vietnamese<br \/><\/span><div class=\"offlajnlistbtn\"><span><\/span><\/div><\/div><input type=\"hidden\" name=\"params[paragraphfont]type\" id=\"paramsparagraphfonttype\" value=\"0\"\/><\/div><\/div>"},"size":{"name":"params[paragraphfont]size","id":"paramsparagraphfontsize","html":"<div class=\"offlajntextcontainer\" id=\"offlajntextcontainerparamsparagraphfontsize\"><input  size=\"1\" class=\"offlajntext\" type=\"text\" id=\"paramsparagraphfontsizeinput\" value=\"14\"><div class=\"offlajntext_increment\">\n                <div class=\"offlajntext_increment_up arrow\"><\/div>\n                <div class=\"offlajntext_increment_down arrow\"><\/div>\n      <\/div><\/div><div class=\"offlajnswitcher\">\r\n            <div class=\"offlajnswitcher_inner\" id=\"offlajnswitcher_innerparamsparagraphfontsizeunit\"><\/div>\r\n    <\/div><input type=\"hidden\" name=\"params[paragraphfont]size[unit]\" id=\"paramsparagraphfontsizeunit\" value=\"px\" \/><input type=\"hidden\" name=\"params[paragraphfont]size\" id=\"paramsparagraphfontsize\" value=\"14||px\">"},"color":{"name":"params[paragraphfont]color","id":"paramsparagraphfontcolor","html":"<div class=\"offlajncolor\"><input type=\"text\" name=\"params[paragraphfont]color\" id=\"paramsparagraphfontcolor\" value=\"000000\" class=\"color wa\" size=\"12\" \/><\/div>"},"bold":{"name":"params[paragraphfont]bold","id":"paramsparagraphfontbold","html":"<div id=\"offlajnonoffparamsparagraphfontbold\" class=\"gk_hack onoffbutton\">\n                <div class=\"gk_hack onoffbutton_img\" style=\"background-image: url(http:\/\/localhost\/thepdahoi.vn\/wp-content\/plugins\/nextend-smart-slider-lite\/includes\/modules\/mod_smartslider\/params\/offlajnonoff\/images\/bold.png);\"><\/div>\n      <\/div><input type=\"hidden\" name=\"params[paragraphfont]bold\" id=\"paramsparagraphfontbold\" value=\"0\" \/>"},"italic":{"name":"params[paragraphfont]italic","id":"paramsparagraphfontitalic","html":"<div id=\"offlajnonoffparamsparagraphfontitalic\" class=\"gk_hack onoffbutton\">\n                <div class=\"gk_hack onoffbutton_img\" style=\"background-image: url(http:\/\/localhost\/thepdahoi.vn\/wp-content\/plugins\/nextend-smart-slider-lite\/includes\/modules\/mod_smartslider\/params\/offlajnonoff\/images\/italic.png);\"><\/div>\n      <\/div><input type=\"hidden\" name=\"params[paragraphfont]italic\" id=\"paramsparagraphfontitalic\" value=\"0\" \/>"},"underline":{"name":"params[paragraphfont]underline","id":"paramsparagraphfontunderline","html":"<div id=\"offlajnonoffparamsparagraphfontunderline\" class=\"gk_hack onoffbutton\">\n                <div class=\"gk_hack onoffbutton_img\" style=\"background-image: url(http:\/\/localhost\/thepdahoi.vn\/wp-content\/plugins\/nextend-smart-slider-lite\/includes\/modules\/mod_smartslider\/params\/offlajnonoff\/images\/underline.png);\"><\/div>\n      <\/div><input type=\"hidden\" name=\"params[paragraphfont]underline\" id=\"paramsparagraphfontunderline\" value=\"0\" \/>"},"align":{"name":"params[paragraphfont]align","id":"paramsparagraphfontalign","html":"<div class=\"offlajnradiocontainerimage\" id=\"offlajnradiocontainerparamsparagraphfontalign\"><div class=\"radioelement first selected\"><div class=\"radioelement_img\" style=\"background-image: url(http:\/\/localhost\/thepdahoi.vn\/wp-content\/plugins\/nextend-smart-slider-lite\/includes\/modules\/mod_smartslider\/params\/offlajnradio\/images\/left_align.png);\"><\/div><\/div><div class=\"radioelement \"><div class=\"radioelement_img\" style=\"background-image: url(http:\/\/localhost\/thepdahoi.vn\/wp-content\/plugins\/nextend-smart-slider-lite\/includes\/modules\/mod_smartslider\/params\/offlajnradio\/images\/center_align.png);\"><\/div><\/div><div class=\"radioelement  last\"><div class=\"radioelement_img\" style=\"background-image: url(http:\/\/localhost\/thepdahoi.vn\/wp-content\/plugins\/nextend-smart-slider-lite\/includes\/modules\/mod_smartslider\/params\/offlajnradio\/images\/right_align.png);\"><\/div><\/div><div class=\"clear\"><\/div><\/div><input type=\"hidden\" id=\"paramsparagraphfontalign\" name=\"params[paragraphfont]align\" value=\"left\"\/>"},"afont":{"name":"params[paragraphfont]afont","id":"paramsparagraphfontafont","html":"<div class=\"offlajntextcontainer\" id=\"offlajntextcontainerparamsparagraphfontafont\"><input  size=\"10\" class=\"offlajntext\" type=\"text\" id=\"paramsparagraphfontafontinput\" value=\"Arial\"><\/div><div class=\"offlajnswitcher\">\r\n            <div class=\"offlajnswitcher_inner\" id=\"offlajnswitcher_innerparamsparagraphfontafontunit\"><\/div>\r\n    <\/div><input type=\"hidden\" name=\"params[paragraphfont]afont[unit]\" id=\"paramsparagraphfontafontunit\" value=\"1\" \/><input type=\"hidden\" name=\"params[paragraphfont]afont\" id=\"paramsparagraphfontafont\" value=\"Arial||1\">"},"tshadow":{"name":"params[paragraphfont]tshadow","id":"paramsparagraphfonttshadow","html":"<div id=\"offlajncombine_outerparamsparagraphfonttshadow\" class=\"offlajncombine_outer\"><div class=\"offlajncombinefieldcontainer\"><div class=\"offlajncombinefield\"><div class=\"offlajntextcontainer\" id=\"offlajntextcontainerparamsparagraphfonttshadow0\"><input  size=\"1\" class=\"offlajntext\" type=\"text\" id=\"paramsparagraphfonttshadow0input\" value=\"0\"><div class=\"unit\">px<\/div><\/div><input type=\"hidden\" name=\"params[paragraphfont]tshadow0\" id=\"paramsparagraphfonttshadow0\" value=\"0\"><\/div><\/div><div class=\"offlajncombinefieldcontainer\"><div class=\"offlajncombinefield\"><div class=\"offlajntextcontainer\" id=\"offlajntextcontainerparamsparagraphfonttshadow1\"><input  size=\"1\" class=\"offlajntext\" type=\"text\" id=\"paramsparagraphfonttshadow1input\" value=\"0\"><div class=\"unit\">px<\/div><\/div><input type=\"hidden\" name=\"params[paragraphfont]tshadow1\" id=\"paramsparagraphfonttshadow1\" value=\"0\"><\/div><\/div><div class=\"offlajncombinefieldcontainer\"><div class=\"offlajncombinefield\"><div class=\"offlajntextcontainer\" id=\"offlajntextcontainerparamsparagraphfonttshadow2\"><input  size=\"1\" class=\"offlajntext\" type=\"text\" id=\"paramsparagraphfonttshadow2input\" value=\"0\"><div class=\"unit\">px<\/div><\/div><input type=\"hidden\" name=\"params[paragraphfont]tshadow2\" id=\"paramsparagraphfonttshadow2\" value=\"0\"><\/div><\/div><div class=\"offlajncombinefieldcontainer\"><div class=\"offlajncombinefield\"><div class=\"offlajncolor\"><input type=\"text\" name=\"params[paragraphfont]tshadow3\" id=\"paramsparagraphfonttshadow3\" value=\"000000\" class=\"color wa\" size=\"12\" \/><\/div><\/div><\/div><div class=\"offlajncombinefieldcontainer\"><div class=\"offlajncombinefield\"><div class=\"offlajnswitcher\">\r\n            <div class=\"offlajnswitcher_inner\" id=\"offlajnswitcher_innerparamsparagraphfonttshadow4\"><\/div>\r\n    <\/div><input type=\"hidden\" name=\"params[paragraphfont]tshadow4\" id=\"paramsparagraphfonttshadow4\" value=\"0\" \/><\/div><\/div><div class=\"offlajncombine_hider\"><\/div><\/div><input type=\"hidden\" name=\"params[paragraphfont]tshadow\" id=\"paramsparagraphfonttshadow\" value='0|*|0|*|0|*|000000|*|0'>"},"lineheight":{"name":"params[paragraphfont]lineheight","id":"paramsparagraphfontlineheight","html":"<div class=\"offlajntextcontainer\" id=\"offlajntextcontainerparamsparagraphfontlineheight\"><input  size=\"5\" class=\"offlajntext\" type=\"text\" id=\"paramsparagraphfontlineheightinput\" value=\"normal\"><\/div><input type=\"hidden\" name=\"params[paragraphfont]lineheight\" id=\"paramsparagraphfontlineheight\" value=\"normal\">"}},
          script: "dojo.addOnLoad(function(){\r\n      new OfflajnRadio({\r\n        id: \"paramsparagraphfonttab\",\r\n        values: [\"Paragraph\",\"Link\",\"Tag\"],\r\n        map: {\"Paragraph\":0,\"Link\":1,\"Tag\":2},\r\n        mode: \"\"\r\n      });\r\n    \n      new OfflajnList({\n        name: \"paramsparagraphfonttype\",\n        elements: \"<div class=\\\"content\\\"><div class=\\\"listelement\\\">Alternative fonts<\\\/div><div class=\\\"listelement\\\">Cyrillic<\\\/div><div class=\\\"listelement\\\">CyrillicExtended<\\\/div><div class=\\\"listelement\\\">Greek<\\\/div><div class=\\\"listelement\\\">GreekExtended<\\\/div><div class=\\\"listelement\\\">Khmer<\\\/div><div class=\\\"listelement\\\">Latin<\\\/div><div class=\\\"listelement\\\">LatinExtended<\\\/div><div class=\\\"listelement\\\">Vietnamese<\\\/div><\\\/div>\",\n        options: [{\"value\":\"0\",\"text\":\"Alternative fonts\"},{\"value\":\"Cyrillic\",\"text\":\"Cyrillic\"},{\"value\":\"CyrillicExtended\",\"text\":\"CyrillicExtended\"},{\"value\":\"Greek\",\"text\":\"Greek\"},{\"value\":\"GreekExtended\",\"text\":\"GreekExtended\"},{\"value\":\"Khmer\",\"text\":\"Khmer\"},{\"value\":\"Latin\",\"text\":\"Latin\"},{\"value\":\"LatinExtended\",\"text\":\"LatinExtended\"},{\"value\":\"Vietnamese\",\"text\":\"Vietnamese\"}],\n        selectedIndex: 0,\n        height: 0,\n        fireshow: 0\n      });\n    dojo.addOnLoad(function(){ \r\n      new OfflajnSwitcher({\r\n        id: \"paramsparagraphfontsizeunit\",\r\n        units: [\"px\",\"em\"],\r\n        values: [\"px\",\"em\"],\r\n        map: {\"px\":0,\"em\":1},\r\n        mode: 0,\r\n        url: \"http:\\\/\\\/localhost\\\/thepdahoi.vn\\\/wp-admin\\\/..\\\/modules\\\/mod_smartslider\\\/params\\\/offlajnswitcher\\\/images\\\/\"\r\n      }); \r\n    });\n      new OfflajnText({\n        id: \"paramsparagraphfontsize\",\n        validation: \"int\",\n        attachunit: \"\",\n        mode: \"increment\",\n        scale: \"1\",\n        minus: 0,\n        onoff: \"\"\n      }); \n    \n    var el = dojo.byId(\"paramsparagraphfontcolor\");\n    jQuery.fn.jPicker.defaults.images.clientPath=\"http:\/\/localhost\/thepdahoi.vn\/wp-content\/plugins\/nextend-smart-slider-lite\/joomla\/\/modules\/mod_smartslider\/params\/offlajndashboard\/..\/offlajncolor\/offlajncolor\/jpicker\/images\/\";\n    el.alphaSupport=false; \n    el.c = jQuery(\"#paramsparagraphfontcolor\").jPicker({\n        window:{\n          expandable: true,\n          alphaSupport: false}\n        });\n    dojo.connect(el, \"change\", function(){\n      this.c[0].color.active.val(\"hex\", this.value);\n    });\n    \n      new OfflajnOnOff({\n        id: \"paramsparagraphfontbold\",\n        mode: \"button\",\n        imgs: \"\"\n      }); \n    \n      new OfflajnOnOff({\n        id: \"paramsparagraphfontitalic\",\n        mode: \"button\",\n        imgs: \"\"\n      }); \n    \n      new OfflajnOnOff({\n        id: \"paramsparagraphfontunderline\",\n        mode: \"button\",\n        imgs: \"\"\n      }); \n    \r\n      new OfflajnRadio({\r\n        id: \"paramsparagraphfontalign\",\r\n        values: [\"left\",\"center\",\"right\"],\r\n        map: {\"left\":0,\"center\":1,\"right\":2},\r\n        mode: \"image\"\r\n      });\r\n    dojo.addOnLoad(function(){ \r\n      new OfflajnSwitcher({\r\n        id: \"paramsparagraphfontafontunit\",\r\n        units: [\"ON\",\"OFF\"],\r\n        values: [\"1\",\"0\"],\r\n        map: {\"1\":0,\"0\":1},\r\n        mode: 0,\r\n        url: \"http:\\\/\\\/localhost\\\/thepdahoi.vn\\\/wp-admin\\\/..\\\/modules\\\/mod_smartslider\\\/params\\\/offlajnswitcher\\\/images\\\/\"\r\n      }); \r\n    });\n      new OfflajnText({\n        id: \"paramsparagraphfontafont\",\n        validation: \"\",\n        attachunit: \"\",\n        mode: \"\",\n        scale: \"\",\n        minus: 0,\n        onoff: \"1\"\n      }); \n    \n      new OfflajnText({\n        id: \"paramsparagraphfonttshadow0\",\n        validation: \"float\",\n        attachunit: \"px\",\n        mode: \"\",\n        scale: \"\",\n        minus: 0,\n        onoff: \"\"\n      }); \n    \n      new OfflajnText({\n        id: \"paramsparagraphfonttshadow1\",\n        validation: \"float\",\n        attachunit: \"px\",\n        mode: \"\",\n        scale: \"\",\n        minus: 0,\n        onoff: \"\"\n      }); \n    \n      new OfflajnText({\n        id: \"paramsparagraphfonttshadow2\",\n        validation: \"float\",\n        attachunit: \"px\",\n        mode: \"\",\n        scale: \"\",\n        minus: 0,\n        onoff: \"\"\n      }); \n    \n    var el = dojo.byId(\"paramsparagraphfonttshadow3\");\n    jQuery.fn.jPicker.defaults.images.clientPath=\"http:\/\/localhost\/thepdahoi.vn\/wp-content\/plugins\/nextend-smart-slider-lite\/joomla\/\/modules\/mod_smartslider\/params\/offlajndashboard\/..\/offlajncolor\/offlajncolor\/jpicker\/images\/\";\n    el.alphaSupport=false; \n    el.c = jQuery(\"#paramsparagraphfonttshadow3\").jPicker({\n        window:{\n          expandable: true,\n          alphaSupport: false}\n        });\n    dojo.connect(el, \"change\", function(){\n      this.c[0].color.active.val(\"hex\", this.value);\n    });\n    dojo.addOnLoad(function(){ \r\n      new OfflajnSwitcher({\r\n        id: \"paramsparagraphfonttshadow4\",\r\n        units: [\"ON\",\"OFF\"],\r\n        values: [\"1\",\"0\"],\r\n        map: {\"1\":0,\"0\":1},\r\n        mode: 0,\r\n        url: \"http:\\\/\\\/localhost\\\/thepdahoi.vn\\\/wp-admin\\\/..\\\/modules\\\/mod_smartslider\\\/params\\\/offlajnswitcher\\\/images\\\/\"\r\n      }); \r\n    });\r\n      new OfflajnCombine({\r\n        id: \"paramsparagraphfonttshadow\",\r\n        num: 5,\r\n        switcherid: \"paramsparagraphfonttshadow4\",\r\n        hideafter: \"0\"\r\n      }); \r\n    \n      new OfflajnText({\n        id: \"paramsparagraphfontlineheight\",\n        validation: \"\",\n        attachunit: \"\",\n        mode: \"\",\n        scale: \"\",\n        minus: 0,\n        onoff: \"\"\n      }); \n    });"
        });
    

        new FontConfigurator({
          id: "paramsreadmorefont",
          defaultTab: "Small",
          origsettings: {"Small":{},"Big":{}},
          elements: {"tab":{"name":"params[readmorefont]tab","id":"paramsreadmorefonttab","html":"<div class=\"offlajnradiocontainerbutton\" id=\"offlajnradiocontainerparamsreadmorefonttab\"><div class=\"radioelement first selected\">Small<\/div><div class=\"radioelement  last\">Big<\/div><div class=\"clear\"><\/div><\/div><input type=\"hidden\" id=\"paramsreadmorefonttab\" name=\"params[readmorefont]tab\" value=\"Small\"\/>"},"type":{"name":"params[readmorefont]type","id":"paramsreadmorefonttype","Cyrillic":{"name":"params[readmorefont]family","id":"paramsreadmorefontfamily","html":"<div style='position:relative;'><div id=\"offlajnlistcontainerparamsreadmorefontfamily\" class=\"gk_hack offlajnlistcontainer\"><div class=\"gk_hack offlajnlist\"><span class=\"offlajnlistcurrent\">Open Sans<br \/>Andika<br \/>Anonymous Pro<br \/>Cuprum<br \/>Didact Gothic<br \/>EB Garamond<br \/>Istok Web<br \/>Jura<br \/>Forum<br \/>Kelly Slab<br \/>Lobster<br \/>Neucha<br \/>Open Sans<br \/>Open Sans Condensed<br \/>Philosopher<br \/>Play<br \/>PT Sans<br \/>PT Sans Caption<br \/>PT Sans Narrow<br \/>PT Serif<br \/>PT Serif Caption<br \/>Ruslan Display<br \/>Tenor Sans<br \/>Ubuntu<br \/><\/span><div class=\"offlajnlistbtn\"><span><\/span><\/div><\/div><input type=\"hidden\" name=\"params[readmorefont]family\" id=\"paramsreadmorefontfamily\" value=\"Open Sans\"\/><\/div><\/div>","script":"dojo.addOnLoad(function(){\n      new OfflajnList({\n        name: \"paramsreadmorefontfamily\",\n        elements: \"<div class=\\\"content\\\"><div class=\\\"listelement\\\">Andika<\\\/div><div class=\\\"listelement\\\">Anonymous Pro<\\\/div><div class=\\\"listelement\\\">Cuprum<\\\/div><div class=\\\"listelement\\\">Didact Gothic<\\\/div><div class=\\\"listelement\\\">EB Garamond<\\\/div><div class=\\\"listelement\\\">Istok Web<\\\/div><div class=\\\"listelement\\\">Jura<\\\/div><div class=\\\"listelement\\\">Forum<\\\/div><div class=\\\"listelement\\\">Kelly Slab<\\\/div><div class=\\\"listelement\\\">Lobster<\\\/div><div class=\\\"listelement\\\">Neucha<\\\/div><div class=\\\"listelement\\\">Open Sans<\\\/div><div class=\\\"listelement\\\">Open Sans Condensed<\\\/div><div class=\\\"listelement\\\">Philosopher<\\\/div><div class=\\\"listelement\\\">Play<\\\/div><div class=\\\"listelement\\\">PT Sans<\\\/div><div class=\\\"listelement\\\">PT Sans Caption<\\\/div><div class=\\\"listelement\\\">PT Sans Narrow<\\\/div><div class=\\\"listelement\\\">PT Serif<\\\/div><div class=\\\"listelement\\\">PT Serif Caption<\\\/div><div class=\\\"listelement\\\">Ruslan Display<\\\/div><div class=\\\"listelement\\\">Tenor Sans<\\\/div><div class=\\\"listelement\\\">Ubuntu<\\\/div><\\\/div>\",\n        options: [{\"value\":\"Andika\",\"text\":\"Andika\"},{\"value\":\"Anonymous Pro\",\"text\":\"Anonymous Pro\"},{\"value\":\"Cuprum\",\"text\":\"Cuprum\"},{\"value\":\"Didact Gothic\",\"text\":\"Didact Gothic\"},{\"value\":\"EB Garamond\",\"text\":\"EB Garamond\"},{\"value\":\"Istok Web\",\"text\":\"Istok Web\"},{\"value\":\"Jura\",\"text\":\"Jura\"},{\"value\":\"Forum\",\"text\":\"Forum\"},{\"value\":\"Kelly Slab\",\"text\":\"Kelly Slab\"},{\"value\":\"Lobster\",\"text\":\"Lobster\"},{\"value\":\"Neucha\",\"text\":\"Neucha\"},{\"value\":\"Open Sans\",\"text\":\"Open Sans\"},{\"value\":\"Open Sans Condensed\",\"text\":\"Open Sans Condensed\"},{\"value\":\"Philosopher\",\"text\":\"Philosopher\"},{\"value\":\"Play\",\"text\":\"Play\"},{\"value\":\"PT Sans\",\"text\":\"PT Sans\"},{\"value\":\"PT Sans Caption\",\"text\":\"PT Sans Caption\"},{\"value\":\"PT Sans Narrow\",\"text\":\"PT Sans Narrow\"},{\"value\":\"PT Serif\",\"text\":\"PT Serif\"},{\"value\":\"PT Serif Caption\",\"text\":\"PT Serif Caption\"},{\"value\":\"Ruslan Display\",\"text\":\"Ruslan Display\"},{\"value\":\"Tenor Sans\",\"text\":\"Tenor Sans\"},{\"value\":\"Ubuntu\",\"text\":\"Ubuntu\"}],\n        selectedIndex: 11,\n        height: \"10\",\n        fireshow: 1\n      });\n    });"},"CyrillicExtended":{"name":"params[readmorefont]family","id":"paramsreadmorefontfamily","html":"<div style='position:relative;'><div id=\"offlajnlistcontainerparamsreadmorefontfamily\" class=\"gk_hack offlajnlistcontainer\"><div class=\"gk_hack offlajnlist\"><span class=\"offlajnlistcurrent\">Open Sans<br \/>Andika<br \/>Anonymous Pro<br \/>Didact Gothic<br \/>EB Garamond<br \/>Istok Web<br \/>Jura<br \/>Forum<br \/>Lobster<br \/>Open Sans<br \/>Open Sans Condensed<br \/>Play<br \/>Ruslan Display<br \/>Tenor Sans<br \/>Ubuntu<br \/><\/span><div class=\"offlajnlistbtn\"><span><\/span><\/div><\/div><input type=\"hidden\" name=\"params[readmorefont]family\" id=\"paramsreadmorefontfamily\" value=\"Open Sans\"\/><\/div><\/div>","script":"dojo.addOnLoad(function(){\n      new OfflajnList({\n        name: \"paramsreadmorefontfamily\",\n        elements: \"<div class=\\\"content\\\"><div class=\\\"listelement\\\">Andika<\\\/div><div class=\\\"listelement\\\">Anonymous Pro<\\\/div><div class=\\\"listelement\\\">Didact Gothic<\\\/div><div class=\\\"listelement\\\">EB Garamond<\\\/div><div class=\\\"listelement\\\">Istok Web<\\\/div><div class=\\\"listelement\\\">Jura<\\\/div><div class=\\\"listelement\\\">Forum<\\\/div><div class=\\\"listelement\\\">Lobster<\\\/div><div class=\\\"listelement\\\">Open Sans<\\\/div><div class=\\\"listelement\\\">Open Sans Condensed<\\\/div><div class=\\\"listelement\\\">Play<\\\/div><div class=\\\"listelement\\\">Ruslan Display<\\\/div><div class=\\\"listelement\\\">Tenor Sans<\\\/div><div class=\\\"listelement\\\">Ubuntu<\\\/div><\\\/div>\",\n        options: [{\"value\":\"Andika\",\"text\":\"Andika\"},{\"value\":\"Anonymous Pro\",\"text\":\"Anonymous Pro\"},{\"value\":\"Didact Gothic\",\"text\":\"Didact Gothic\"},{\"value\":\"EB Garamond\",\"text\":\"EB Garamond\"},{\"value\":\"Istok Web\",\"text\":\"Istok Web\"},{\"value\":\"Jura\",\"text\":\"Jura\"},{\"value\":\"Forum\",\"text\":\"Forum\"},{\"value\":\"Lobster\",\"text\":\"Lobster\"},{\"value\":\"Open Sans\",\"text\":\"Open Sans\"},{\"value\":\"Open Sans Condensed\",\"text\":\"Open Sans Condensed\"},{\"value\":\"Play\",\"text\":\"Play\"},{\"value\":\"Ruslan Display\",\"text\":\"Ruslan Display\"},{\"value\":\"Tenor Sans\",\"text\":\"Tenor Sans\"},{\"value\":\"Ubuntu\",\"text\":\"Ubuntu\"}],\n        selectedIndex: 8,\n        height: \"10\",\n        fireshow: 1\n      });\n    });"},"Greek":{"name":"params[readmorefont]family","id":"paramsreadmorefontfamily","html":"<div style='position:relative;'><div id=\"offlajnlistcontainerparamsreadmorefontfamily\" class=\"gk_hack offlajnlistcontainer\"><div class=\"gk_hack offlajnlist\"><span class=\"offlajnlistcurrent\">Open Sans<br \/>Anonymous Pro<br \/>Caudex<br \/>Didact Gothic<br \/>Jura<br \/>GFS Didot<br \/>GFS Neohellenic<br \/>Nova Mono<br \/>Open Sans<br \/>Open Sans Condensed<br \/>Play<br \/>Ubuntu<br \/><\/span><div class=\"offlajnlistbtn\"><span><\/span><\/div><\/div><input type=\"hidden\" name=\"params[readmorefont]family\" id=\"paramsreadmorefontfamily\" value=\"Open Sans\"\/><\/div><\/div>","script":"dojo.addOnLoad(function(){\n      new OfflajnList({\n        name: \"paramsreadmorefontfamily\",\n        elements: \"<div class=\\\"content\\\"><div class=\\\"listelement\\\">Anonymous Pro<\\\/div><div class=\\\"listelement\\\">Caudex<\\\/div><div class=\\\"listelement\\\">Didact Gothic<\\\/div><div class=\\\"listelement\\\">Jura<\\\/div><div class=\\\"listelement\\\">GFS Didot<\\\/div><div class=\\\"listelement\\\">GFS Neohellenic<\\\/div><div class=\\\"listelement\\\">Nova Mono<\\\/div><div class=\\\"listelement\\\">Open Sans<\\\/div><div class=\\\"listelement\\\">Open Sans Condensed<\\\/div><div class=\\\"listelement\\\">Play<\\\/div><div class=\\\"listelement\\\">Ubuntu<\\\/div><\\\/div>\",\n        options: [{\"value\":\"Anonymous Pro\",\"text\":\"Anonymous Pro\"},{\"value\":\"Caudex\",\"text\":\"Caudex\"},{\"value\":\"Didact Gothic\",\"text\":\"Didact Gothic\"},{\"value\":\"Jura\",\"text\":\"Jura\"},{\"value\":\"GFS Didot\",\"text\":\"GFS Didot\"},{\"value\":\"GFS Neohellenic\",\"text\":\"GFS Neohellenic\"},{\"value\":\"Nova Mono\",\"text\":\"Nova Mono\"},{\"value\":\"Open Sans\",\"text\":\"Open Sans\"},{\"value\":\"Open Sans Condensed\",\"text\":\"Open Sans Condensed\"},{\"value\":\"Play\",\"text\":\"Play\"},{\"value\":\"Ubuntu\",\"text\":\"Ubuntu\"}],\n        selectedIndex: 7,\n        height: \"10\",\n        fireshow: 1\n      });\n    });"},"GreekExtended":{"name":"params[readmorefont]family","id":"paramsreadmorefontfamily","html":"<div style='position:relative;'><div id=\"offlajnlistcontainerparamsreadmorefontfamily\" class=\"gk_hack offlajnlistcontainer\"><div class=\"gk_hack offlajnlist\"><span class=\"offlajnlistcurrent\">Open Sans<br \/>Anonymous Pro<br \/>Caudex<br \/>Didact Gothic<br \/>Jura<br \/>Open Sans<br \/>Open Sans Condensed<br \/>Play<br \/>Ubuntu<br \/><\/span><div class=\"offlajnlistbtn\"><span><\/span><\/div><\/div><input type=\"hidden\" name=\"params[readmorefont]family\" id=\"paramsreadmorefontfamily\" value=\"Open Sans\"\/><\/div><\/div>","script":"dojo.addOnLoad(function(){\n      new OfflajnList({\n        name: \"paramsreadmorefontfamily\",\n        elements: \"<div class=\\\"content\\\"><div class=\\\"listelement\\\">Anonymous Pro<\\\/div><div class=\\\"listelement\\\">Caudex<\\\/div><div class=\\\"listelement\\\">Didact Gothic<\\\/div><div class=\\\"listelement\\\">Jura<\\\/div><div class=\\\"listelement\\\">Open Sans<\\\/div><div class=\\\"listelement\\\">Open Sans Condensed<\\\/div><div class=\\\"listelement\\\">Play<\\\/div><div class=\\\"listelement\\\">Ubuntu<\\\/div><\\\/div>\",\n        options: [{\"value\":\"Anonymous Pro\",\"text\":\"Anonymous Pro\"},{\"value\":\"Caudex\",\"text\":\"Caudex\"},{\"value\":\"Didact Gothic\",\"text\":\"Didact Gothic\"},{\"value\":\"Jura\",\"text\":\"Jura\"},{\"value\":\"Open Sans\",\"text\":\"Open Sans\"},{\"value\":\"Open Sans Condensed\",\"text\":\"Open Sans Condensed\"},{\"value\":\"Play\",\"text\":\"Play\"},{\"value\":\"Ubuntu\",\"text\":\"Ubuntu\"}],\n        selectedIndex: 4,\n        height: \"10\",\n        fireshow: 1\n      });\n    });"},"Khmer":{"name":"params[readmorefont]family","id":"paramsreadmorefontfamily","html":"<div style='position:relative;'><div id=\"offlajnlistcontainerparamsreadmorefontfamily\" class=\"gk_hack offlajnlistcontainer\"><div class=\"gk_hack offlajnlist\"><span class=\"offlajnlistcurrent\">Angkor<br \/>Angkor<br \/>Battambang<br \/>Bayon<br \/>Bokor<br \/>Chenla<br \/>Content<br \/>Dangrek<br \/>Freehand<br \/>Hanuman<br \/>Khmer<br \/>Koulen<br \/>Metal<br \/>Moul<br \/>Moulpali<br \/>Odor Mean Chey<br \/>Preahvihear<br \/>Siemreap<br \/>Suwannaphum<br \/>Taprom<br \/><\/span><div class=\"offlajnlistbtn\"><span><\/span><\/div><\/div><input type=\"hidden\" name=\"params[readmorefont]family\" id=\"paramsreadmorefontfamily\" value=\"Angkor\"\/><\/div><\/div>","script":"dojo.addOnLoad(function(){\n      new OfflajnList({\n        name: \"paramsreadmorefontfamily\",\n        elements: \"<div class=\\\"content\\\"><div class=\\\"listelement\\\">Angkor<\\\/div><div class=\\\"listelement\\\">Battambang<\\\/div><div class=\\\"listelement\\\">Bayon<\\\/div><div class=\\\"listelement\\\">Bokor<\\\/div><div class=\\\"listelement\\\">Chenla<\\\/div><div class=\\\"listelement\\\">Content<\\\/div><div class=\\\"listelement\\\">Dangrek<\\\/div><div class=\\\"listelement\\\">Freehand<\\\/div><div class=\\\"listelement\\\">Hanuman<\\\/div><div class=\\\"listelement\\\">Khmer<\\\/div><div class=\\\"listelement\\\">Koulen<\\\/div><div class=\\\"listelement\\\">Metal<\\\/div><div class=\\\"listelement\\\">Moul<\\\/div><div class=\\\"listelement\\\">Moulpali<\\\/div><div class=\\\"listelement\\\">Odor Mean Chey<\\\/div><div class=\\\"listelement\\\">Preahvihear<\\\/div><div class=\\\"listelement\\\">Siemreap<\\\/div><div class=\\\"listelement\\\">Suwannaphum<\\\/div><div class=\\\"listelement\\\">Taprom<\\\/div><\\\/div>\",\n        options: [{\"value\":\"Angkor\",\"text\":\"Angkor\"},{\"value\":\"Battambang\",\"text\":\"Battambang\"},{\"value\":\"Bayon\",\"text\":\"Bayon\"},{\"value\":\"Bokor\",\"text\":\"Bokor\"},{\"value\":\"Chenla\",\"text\":\"Chenla\"},{\"value\":\"Content\",\"text\":\"Content\"},{\"value\":\"Dangrek\",\"text\":\"Dangrek\"},{\"value\":\"Freehand\",\"text\":\"Freehand\"},{\"value\":\"Hanuman\",\"text\":\"Hanuman\"},{\"value\":\"Khmer\",\"text\":\"Khmer\"},{\"value\":\"Koulen\",\"text\":\"Koulen\"},{\"value\":\"Metal\",\"text\":\"Metal\"},{\"value\":\"Moul\",\"text\":\"Moul\"},{\"value\":\"Moulpali\",\"text\":\"Moulpali\"},{\"value\":\"Odor Mean Chey\",\"text\":\"Odor Mean Chey\"},{\"value\":\"Preahvihear\",\"text\":\"Preahvihear\"},{\"value\":\"Siemreap\",\"text\":\"Siemreap\"},{\"value\":\"Suwannaphum\",\"text\":\"Suwannaphum\"},{\"value\":\"Taprom\",\"text\":\"Taprom\"}],\n        selectedIndex: 0,\n        height: \"10\",\n        fireshow: 1\n      });\n    });"},"Latin":{"name":"params[readmorefont]family","id":"paramsreadmorefontfamily","html":"<div style='position:relative;'><div id=\"offlajnlistcontainerparamsreadmorefontfamily\" class=\"gk_hack offlajnlistcontainer\"><div class=\"gk_hack offlajnlist\"><span class=\"offlajnlistcurrent\">Open Sans<br \/>Abel<br \/>Abril Fatface<br \/>Aclonica<br \/>Actor<br \/>Aldrich<br \/>Alice<br \/>Alike<br \/>Allan<br \/>Allerta<br \/>Allerta Stencil<br \/>Amaranth<br \/>Andika<br \/>Annie Use Your Telescope<br \/>Anonymous Pro<br \/>Antic<br \/>Anton<br \/>Architects Daughter<br \/>Arimo<br \/>Artifika<br \/>Arvo<br \/>Asap<br \/>Asul<br \/>Asset<br \/>Astloch<br \/>Aubrey<br \/>Bangers<br \/>Bentham<br \/>Bevan<br \/>Bigshot One<br \/>Black Ops One<br \/>Bowlby One<br \/>Bowlby One SC<br \/>Brawler<br \/>Buda<br \/>Cabin<br \/>Cabin Sketch<br \/>Calligraffitti<br \/>Candal<br \/>Cantarell<br \/>Cardo<br \/>Carme<br \/>Carter One<br \/>Caudex<br \/>Cedarville Cursive<br \/>Cherry Cream Soda<br \/>Chewy<br \/>Chivo<br \/>Coda<br \/>Coda Caption<br \/>Comfortaa<br \/>Coming Soon<br \/>Convergence<br \/>Copse<br \/>Corben<br \/>Cousine<br \/>Coustard<br \/>Covered By Your Grace<br \/>Crafty Girls<br \/>Crimson Text<br \/>Crushed<br \/>Cuprum<br \/>Damion<br \/>Dancing Script<br \/>Dawning of a New Day<br \/>Days One<br \/>Delius<br \/>Delius Swash Caps<br \/>Delius Unicase<br \/>Didact Gothic<br \/>Dorsa<br \/>Droid Sans<br \/>Droid Sans Mono<br \/>Droid Serif<br \/>EB Garamond<br \/>Exo<br \/>Expletus Sans<br \/>Fanwood Text<br \/>Federo<br \/>Fontdiner Swanky<br \/>Forum<br \/>Francois One<br \/>Gentium Basic<br \/>Gentium Book Basic<br \/>Geo<br \/>Geostar<br \/>Geostar Fill<br \/>Give You Glory<br \/>Gloria Hallelujah<br \/>Goblin One<br \/>Goudy Bookletter 1911<br \/>Gravitas One<br \/>Gruppo<br \/>Hammersmith One<br \/>Holtwood One SC<br \/>Homemade Apple<br \/>IM Fell DW Pica<br \/>IM Fell DW Pica SC<br \/>IM Fell Double Pica<br \/>IM Fell Double Pica SC<br \/>IM Fell English<br \/>IM Fell English SC<br \/>IM Fell French Canon<br \/>IM Fell French Canon SC<br \/>IM Fell Great Primer<br \/>IM Fell Great Primer SC<br \/>Inconsolata<br \/>Inder<br \/>Indie Flower<br \/>Irish Grover<br \/>Istok Web<br \/>Josefin Sans<br \/>Josefin Slab<br \/>Judson<br \/>Jura<br \/>Just Another Hand<br \/>Just Me Again Down Here<br \/>Kameron<br \/>Kelly Slab<br \/>Kenia<br \/>Kranky<br \/>Kreon<br \/>Kristi<br \/>La Belle Aurore<br \/>Lato<br \/>League Script<br \/>Leckerli One<br \/>Lekton<br \/>Limelight<br \/>Lobster<br \/>Lobster Two<br \/>Lora<br \/>Love Ya Like A Sister<br \/>Loved by the King<br \/>Luckiest Guy<br \/>Magra<br \/>Maiden Orange<br \/>Mako<br \/>Marvel<br \/>Maven Pro<br \/>Meddon<br \/>MedievalSharp<br \/>Megrim<br \/>Merriweather<br \/>Metrophobic<br \/>Michroma<br \/>Miltonian<br \/>Miltonian Tattoo<br \/>Modern Antiqua<br \/>Molengo<br \/>Monofett<br \/>Monoton<br \/>Montez<br \/>Mountains of Christmas<br \/>Muli<br \/>Neucha<br \/>Neuton<br \/>News Cycle<br \/>Nixie One<br \/>Nobile<br \/>Nothing You Could Do<br \/>Nova Cut<br \/>Nova Flat<br \/>Nova Mono<br \/>Nova Oval<br \/>Nova Round<br \/>Nova Script<br \/>Nova Slim<br \/>Nova Square<br \/>Numans<br \/>Nunito<br \/>OFL Sorts Mill Goudy TT<br \/>Old Standard TT<br \/>Open Sans<br \/>Open Sans Condensed<br \/>Orbitron<br \/>Oswald<br \/>Over the Rainbow<br \/>Ovo<br \/>PT Sans<br \/>PT Sans Caption<br \/>PT Sans Narrow<br \/>PT Serif<br \/>PT Serif Caption<br \/>Pacifico<br \/>Passero One<br \/>Patrick Hand<br \/>Paytone One<br \/>Permanent Marker<br \/>Philosopher<br \/>Play<br \/>Playfair Display<br \/>Podkova<br \/>Pompiere<br \/>Prociono<br \/>Puritan<br \/>Quattrocento<br \/>Quattrocento Sans<br \/>Questrial<br \/>Quicksand<br \/>Radley<br \/>Raleway<br \/>Rationale<br \/>Redressed<br \/>Reenie Beanie<br \/>Rochester<br \/>Rock Salt<br \/>Rokkitt<br \/>Ropa Sans<br \/>Rosario<br \/>Ruslan Display<br \/>Schoolbell<br \/>Shadows Into Light<br \/>Shanti<br \/>Short Stack<br \/>Sigmar One<br \/>Signika<br \/>Signika Negative<br \/>Six Caps<br \/>Slackey<br \/>Smokum<br \/>Smythe<br \/>Sniglet<br \/>Snippet<br \/>Special Elite<br \/>Stardos Stencil<br \/>Sue Ellen Francisco<br \/>Sunshiney<br \/>Swanky and Moo Moo<br \/>Syncopate<br \/>Tangerine<br \/>Telex<br \/>Tenor Sans<br \/>Terminal Dosis Light<br \/>The Girl Next Door<br \/>Tienne<br \/>Tinos<br \/>Tulpen One<br \/>Ubuntu<br \/>Ultra<br \/>UnifrakturCook<br \/>UnifrakturMaguntia<br \/>Unkempt<br \/>Unna<br \/>VT323<br \/>Varela<br \/>Varela Round<br \/>Vibur<br \/>Viga<br \/>Vidaloka<br \/>Volkhov<br \/>Vollkorn<br \/>Voltaire<br \/>Waiting for the Sunrise<br \/>Wallpoet<br \/>Walter Turncoat<br \/>Wire One<br \/>Yanone Kaffeesatz<br \/>Yellowtail<br \/>Yeseva One<br \/>Zeyada<br \/><\/span><div class=\"offlajnlistbtn\"><span><\/span><\/div><\/div><input type=\"hidden\" name=\"params[readmorefont]family\" id=\"paramsreadmorefontfamily\" value=\"Open Sans\"\/><\/div><\/div>","script":"dojo.addOnLoad(function(){\n      new OfflajnList({\n        name: \"paramsreadmorefontfamily\",\n        elements: \"<div class=\\\"content\\\"><div class=\\\"listelement\\\">Abel<\\\/div><div class=\\\"listelement\\\">Abril Fatface<\\\/div><div class=\\\"listelement\\\">Aclonica<\\\/div><div class=\\\"listelement\\\">Actor<\\\/div><div class=\\\"listelement\\\">Aldrich<\\\/div><div class=\\\"listelement\\\">Alice<\\\/div><div class=\\\"listelement\\\">Alike<\\\/div><div class=\\\"listelement\\\">Allan<\\\/div><div class=\\\"listelement\\\">Allerta<\\\/div><div class=\\\"listelement\\\">Allerta Stencil<\\\/div><div class=\\\"listelement\\\">Amaranth<\\\/div><div class=\\\"listelement\\\">Andika<\\\/div><div class=\\\"listelement\\\">Annie Use Your Telescope<\\\/div><div class=\\\"listelement\\\">Anonymous Pro<\\\/div><div class=\\\"listelement\\\">Antic<\\\/div><div class=\\\"listelement\\\">Anton<\\\/div><div class=\\\"listelement\\\">Architects Daughter<\\\/div><div class=\\\"listelement\\\">Arimo<\\\/div><div class=\\\"listelement\\\">Artifika<\\\/div><div class=\\\"listelement\\\">Arvo<\\\/div><div class=\\\"listelement\\\">Asap<\\\/div><div class=\\\"listelement\\\">Asul<\\\/div><div class=\\\"listelement\\\">Asset<\\\/div><div class=\\\"listelement\\\">Astloch<\\\/div><div class=\\\"listelement\\\">Aubrey<\\\/div><div class=\\\"listelement\\\">Bangers<\\\/div><div class=\\\"listelement\\\">Bentham<\\\/div><div class=\\\"listelement\\\">Bevan<\\\/div><div class=\\\"listelement\\\">Bigshot One<\\\/div><div class=\\\"listelement\\\">Black Ops One<\\\/div><div class=\\\"listelement\\\">Bowlby One<\\\/div><div class=\\\"listelement\\\">Bowlby One SC<\\\/div><div class=\\\"listelement\\\">Brawler<\\\/div><div class=\\\"listelement\\\">Buda<\\\/div><div class=\\\"listelement\\\">Cabin<\\\/div><div class=\\\"listelement\\\">Cabin Sketch<\\\/div><div class=\\\"listelement\\\">Calligraffitti<\\\/div><div class=\\\"listelement\\\">Candal<\\\/div><div class=\\\"listelement\\\">Cantarell<\\\/div><div class=\\\"listelement\\\">Cardo<\\\/div><div class=\\\"listelement\\\">Carme<\\\/div><div class=\\\"listelement\\\">Carter One<\\\/div><div class=\\\"listelement\\\">Caudex<\\\/div><div class=\\\"listelement\\\">Cedarville Cursive<\\\/div><div class=\\\"listelement\\\">Cherry Cream Soda<\\\/div><div class=\\\"listelement\\\">Chewy<\\\/div><div class=\\\"listelement\\\">Chivo<\\\/div><div class=\\\"listelement\\\">Coda<\\\/div><div class=\\\"listelement\\\">Coda Caption<\\\/div><div class=\\\"listelement\\\">Comfortaa<\\\/div><div class=\\\"listelement\\\">Coming Soon<\\\/div><div class=\\\"listelement\\\">Convergence<\\\/div><div class=\\\"listelement\\\">Copse<\\\/div><div class=\\\"listelement\\\">Corben<\\\/div><div class=\\\"listelement\\\">Cousine<\\\/div><div class=\\\"listelement\\\">Coustard<\\\/div><div class=\\\"listelement\\\">Covered By Your Grace<\\\/div><div class=\\\"listelement\\\">Crafty Girls<\\\/div><div class=\\\"listelement\\\">Crimson Text<\\\/div><div class=\\\"listelement\\\">Crushed<\\\/div><div class=\\\"listelement\\\">Cuprum<\\\/div><div class=\\\"listelement\\\">Damion<\\\/div><div class=\\\"listelement\\\">Dancing Script<\\\/div><div class=\\\"listelement\\\">Dawning of a New Day<\\\/div><div class=\\\"listelement\\\">Days One<\\\/div><div class=\\\"listelement\\\">Delius<\\\/div><div class=\\\"listelement\\\">Delius Swash Caps<\\\/div><div class=\\\"listelement\\\">Delius Unicase<\\\/div><div class=\\\"listelement\\\">Didact Gothic<\\\/div><div class=\\\"listelement\\\">Dorsa<\\\/div><div class=\\\"listelement\\\">Droid Sans<\\\/div><div class=\\\"listelement\\\">Droid Sans Mono<\\\/div><div class=\\\"listelement\\\">Droid Serif<\\\/div><div class=\\\"listelement\\\">EB Garamond<\\\/div><div class=\\\"listelement\\\">Exo<\\\/div><div class=\\\"listelement\\\">Expletus Sans<\\\/div><div class=\\\"listelement\\\">Fanwood Text<\\\/div><div class=\\\"listelement\\\">Federo<\\\/div><div class=\\\"listelement\\\">Fontdiner Swanky<\\\/div><div class=\\\"listelement\\\">Forum<\\\/div><div class=\\\"listelement\\\">Francois One<\\\/div><div class=\\\"listelement\\\">Gentium Basic<\\\/div><div class=\\\"listelement\\\">Gentium Book Basic<\\\/div><div class=\\\"listelement\\\">Geo<\\\/div><div class=\\\"listelement\\\">Geostar<\\\/div><div class=\\\"listelement\\\">Geostar Fill<\\\/div><div class=\\\"listelement\\\">Give You Glory<\\\/div><div class=\\\"listelement\\\">Gloria Hallelujah<\\\/div><div class=\\\"listelement\\\">Goblin One<\\\/div><div class=\\\"listelement\\\">Goudy Bookletter 1911<\\\/div><div class=\\\"listelement\\\">Gravitas One<\\\/div><div class=\\\"listelement\\\">Gruppo<\\\/div><div class=\\\"listelement\\\">Hammersmith One<\\\/div><div class=\\\"listelement\\\">Holtwood One SC<\\\/div><div class=\\\"listelement\\\">Homemade Apple<\\\/div><div class=\\\"listelement\\\">IM Fell DW Pica<\\\/div><div class=\\\"listelement\\\">IM Fell DW Pica SC<\\\/div><div class=\\\"listelement\\\">IM Fell Double Pica<\\\/div><div class=\\\"listelement\\\">IM Fell Double Pica SC<\\\/div><div class=\\\"listelement\\\">IM Fell English<\\\/div><div class=\\\"listelement\\\">IM Fell English SC<\\\/div><div class=\\\"listelement\\\">IM Fell French Canon<\\\/div><div class=\\\"listelement\\\">IM Fell French Canon SC<\\\/div><div class=\\\"listelement\\\">IM Fell Great Primer<\\\/div><div class=\\\"listelement\\\">IM Fell Great Primer SC<\\\/div><div class=\\\"listelement\\\">Inconsolata<\\\/div><div class=\\\"listelement\\\">Inder<\\\/div><div class=\\\"listelement\\\">Indie Flower<\\\/div><div class=\\\"listelement\\\">Irish Grover<\\\/div><div class=\\\"listelement\\\">Istok Web<\\\/div><div class=\\\"listelement\\\">Josefin Sans<\\\/div><div class=\\\"listelement\\\">Josefin Slab<\\\/div><div class=\\\"listelement\\\">Judson<\\\/div><div class=\\\"listelement\\\">Jura<\\\/div><div class=\\\"listelement\\\">Just Another Hand<\\\/div><div class=\\\"listelement\\\">Just Me Again Down Here<\\\/div><div class=\\\"listelement\\\">Kameron<\\\/div><div class=\\\"listelement\\\">Kelly Slab<\\\/div><div class=\\\"listelement\\\">Kenia<\\\/div><div class=\\\"listelement\\\">Kranky<\\\/div><div class=\\\"listelement\\\">Kreon<\\\/div><div class=\\\"listelement\\\">Kristi<\\\/div><div class=\\\"listelement\\\">La Belle Aurore<\\\/div><div class=\\\"listelement\\\">Lato<\\\/div><div class=\\\"listelement\\\">League Script<\\\/div><div class=\\\"listelement\\\">Leckerli One<\\\/div><div class=\\\"listelement\\\">Lekton<\\\/div><div class=\\\"listelement\\\">Limelight<\\\/div><div class=\\\"listelement\\\">Lobster<\\\/div><div class=\\\"listelement\\\">Lobster Two<\\\/div><div class=\\\"listelement\\\">Lora<\\\/div><div class=\\\"listelement\\\">Love Ya Like A Sister<\\\/div><div class=\\\"listelement\\\">Loved by the King<\\\/div><div class=\\\"listelement\\\">Luckiest Guy<\\\/div><div class=\\\"listelement\\\">Magra<\\\/div><div class=\\\"listelement\\\">Maiden Orange<\\\/div><div class=\\\"listelement\\\">Mako<\\\/div><div class=\\\"listelement\\\">Marvel<\\\/div><div class=\\\"listelement\\\">Maven Pro<\\\/div><div class=\\\"listelement\\\">Meddon<\\\/div><div class=\\\"listelement\\\">MedievalSharp<\\\/div><div class=\\\"listelement\\\">Megrim<\\\/div><div class=\\\"listelement\\\">Merriweather<\\\/div><div class=\\\"listelement\\\">Metrophobic<\\\/div><div class=\\\"listelement\\\">Michroma<\\\/div><div class=\\\"listelement\\\">Miltonian<\\\/div><div class=\\\"listelement\\\">Miltonian Tattoo<\\\/div><div class=\\\"listelement\\\">Modern Antiqua<\\\/div><div class=\\\"listelement\\\">Molengo<\\\/div><div class=\\\"listelement\\\">Monofett<\\\/div><div class=\\\"listelement\\\">Monoton<\\\/div><div class=\\\"listelement\\\">Montez<\\\/div><div class=\\\"listelement\\\">Mountains of Christmas<\\\/div><div class=\\\"listelement\\\">Muli<\\\/div><div class=\\\"listelement\\\">Neucha<\\\/div><div class=\\\"listelement\\\">Neuton<\\\/div><div class=\\\"listelement\\\">News Cycle<\\\/div><div class=\\\"listelement\\\">Nixie One<\\\/div><div class=\\\"listelement\\\">Nobile<\\\/div><div class=\\\"listelement\\\">Nothing You Could Do<\\\/div><div class=\\\"listelement\\\">Nova Cut<\\\/div><div class=\\\"listelement\\\">Nova Flat<\\\/div><div class=\\\"listelement\\\">Nova Mono<\\\/div><div class=\\\"listelement\\\">Nova Oval<\\\/div><div class=\\\"listelement\\\">Nova Round<\\\/div><div class=\\\"listelement\\\">Nova Script<\\\/div><div class=\\\"listelement\\\">Nova Slim<\\\/div><div class=\\\"listelement\\\">Nova Square<\\\/div><div class=\\\"listelement\\\">Numans<\\\/div><div class=\\\"listelement\\\">Nunito<\\\/div><div class=\\\"listelement\\\">OFL Sorts Mill Goudy TT<\\\/div><div class=\\\"listelement\\\">Old Standard TT<\\\/div><div class=\\\"listelement\\\">Open Sans<\\\/div><div class=\\\"listelement\\\">Open Sans Condensed<\\\/div><div class=\\\"listelement\\\">Orbitron<\\\/div><div class=\\\"listelement\\\">Oswald<\\\/div><div class=\\\"listelement\\\">Over the Rainbow<\\\/div><div class=\\\"listelement\\\">Ovo<\\\/div><div class=\\\"listelement\\\">PT Sans<\\\/div><div class=\\\"listelement\\\">PT Sans Caption<\\\/div><div class=\\\"listelement\\\">PT Sans Narrow<\\\/div><div class=\\\"listelement\\\">PT Serif<\\\/div><div class=\\\"listelement\\\">PT Serif Caption<\\\/div><div class=\\\"listelement\\\">Pacifico<\\\/div><div class=\\\"listelement\\\">Passero One<\\\/div><div class=\\\"listelement\\\">Patrick Hand<\\\/div><div class=\\\"listelement\\\">Paytone One<\\\/div><div class=\\\"listelement\\\">Permanent Marker<\\\/div><div class=\\\"listelement\\\">Philosopher<\\\/div><div class=\\\"listelement\\\">Play<\\\/div><div class=\\\"listelement\\\">Playfair Display<\\\/div><div class=\\\"listelement\\\">Podkova<\\\/div><div class=\\\"listelement\\\">Pompiere<\\\/div><div class=\\\"listelement\\\">Prociono<\\\/div><div class=\\\"listelement\\\">Puritan<\\\/div><div class=\\\"listelement\\\">Quattrocento<\\\/div><div class=\\\"listelement\\\">Quattrocento Sans<\\\/div><div class=\\\"listelement\\\">Questrial<\\\/div><div class=\\\"listelement\\\">Quicksand<\\\/div><div class=\\\"listelement\\\">Radley<\\\/div><div class=\\\"listelement\\\">Raleway<\\\/div><div class=\\\"listelement\\\">Rationale<\\\/div><div class=\\\"listelement\\\">Redressed<\\\/div><div class=\\\"listelement\\\">Reenie Beanie<\\\/div><div class=\\\"listelement\\\">Rochester<\\\/div><div class=\\\"listelement\\\">Rock Salt<\\\/div><div class=\\\"listelement\\\">Rokkitt<\\\/div><div class=\\\"listelement\\\">Ropa Sans<\\\/div><div class=\\\"listelement\\\">Rosario<\\\/div><div class=\\\"listelement\\\">Ruslan Display<\\\/div><div class=\\\"listelement\\\">Schoolbell<\\\/div><div class=\\\"listelement\\\">Shadows Into Light<\\\/div><div class=\\\"listelement\\\">Shanti<\\\/div><div class=\\\"listelement\\\">Short Stack<\\\/div><div class=\\\"listelement\\\">Sigmar One<\\\/div><div class=\\\"listelement\\\">Signika<\\\/div><div class=\\\"listelement\\\">Signika Negative<\\\/div><div class=\\\"listelement\\\">Six Caps<\\\/div><div class=\\\"listelement\\\">Slackey<\\\/div><div class=\\\"listelement\\\">Smokum<\\\/div><div class=\\\"listelement\\\">Smythe<\\\/div><div class=\\\"listelement\\\">Sniglet<\\\/div><div class=\\\"listelement\\\">Snippet<\\\/div><div class=\\\"listelement\\\">Special Elite<\\\/div><div class=\\\"listelement\\\">Stardos Stencil<\\\/div><div class=\\\"listelement\\\">Sue Ellen Francisco<\\\/div><div class=\\\"listelement\\\">Sunshiney<\\\/div><div class=\\\"listelement\\\">Swanky and Moo Moo<\\\/div><div class=\\\"listelement\\\">Syncopate<\\\/div><div class=\\\"listelement\\\">Tangerine<\\\/div><div class=\\\"listelement\\\">Telex<\\\/div><div class=\\\"listelement\\\">Tenor Sans<\\\/div><div class=\\\"listelement\\\">Terminal Dosis Light<\\\/div><div class=\\\"listelement\\\">The Girl Next Door<\\\/div><div class=\\\"listelement\\\">Tienne<\\\/div><div class=\\\"listelement\\\">Tinos<\\\/div><div class=\\\"listelement\\\">Tulpen One<\\\/div><div class=\\\"listelement\\\">Ubuntu<\\\/div><div class=\\\"listelement\\\">Ultra<\\\/div><div class=\\\"listelement\\\">UnifrakturCook<\\\/div><div class=\\\"listelement\\\">UnifrakturMaguntia<\\\/div><div class=\\\"listelement\\\">Unkempt<\\\/div><div class=\\\"listelement\\\">Unna<\\\/div><div class=\\\"listelement\\\">VT323<\\\/div><div class=\\\"listelement\\\">Varela<\\\/div><div class=\\\"listelement\\\">Varela Round<\\\/div><div class=\\\"listelement\\\">Vibur<\\\/div><div class=\\\"listelement\\\">Viga<\\\/div><div class=\\\"listelement\\\">Vidaloka<\\\/div><div class=\\\"listelement\\\">Volkhov<\\\/div><div class=\\\"listelement\\\">Vollkorn<\\\/div><div class=\\\"listelement\\\">Voltaire<\\\/div><div class=\\\"listelement\\\">Waiting for the Sunrise<\\\/div><div class=\\\"listelement\\\">Wallpoet<\\\/div><div class=\\\"listelement\\\">Walter Turncoat<\\\/div><div class=\\\"listelement\\\">Wire One<\\\/div><div class=\\\"listelement\\\">Yanone Kaffeesatz<\\\/div><div class=\\\"listelement\\\">Yellowtail<\\\/div><div class=\\\"listelement\\\">Yeseva One<\\\/div><div class=\\\"listelement\\\">Zeyada<\\\/div><\\\/div>\",\n        options: [{\"value\":\"Abel\",\"text\":\"Abel\"},{\"value\":\"Abril Fatface\",\"text\":\"Abril Fatface\"},{\"value\":\"Aclonica\",\"text\":\"Aclonica\"},{\"value\":\"Actor\",\"text\":\"Actor\"},{\"value\":\"Aldrich\",\"text\":\"Aldrich\"},{\"value\":\"Alice\",\"text\":\"Alice\"},{\"value\":\"Alike\",\"text\":\"Alike\"},{\"value\":\"Allan\",\"text\":\"Allan\"},{\"value\":\"Allerta\",\"text\":\"Allerta\"},{\"value\":\"Allerta Stencil\",\"text\":\"Allerta Stencil\"},{\"value\":\"Amaranth\",\"text\":\"Amaranth\"},{\"value\":\"Andika\",\"text\":\"Andika\"},{\"value\":\"Annie Use Your Telescope\",\"text\":\"Annie Use Your Telescope\"},{\"value\":\"Anonymous Pro\",\"text\":\"Anonymous Pro\"},{\"value\":\"Antic\",\"text\":\"Antic\"},{\"value\":\"Anton\",\"text\":\"Anton\"},{\"value\":\"Architects Daughter\",\"text\":\"Architects Daughter\"},{\"value\":\"Arimo\",\"text\":\"Arimo\"},{\"value\":\"Artifika\",\"text\":\"Artifika\"},{\"value\":\"Arvo\",\"text\":\"Arvo\"},{\"value\":\"Asap\",\"text\":\"Asap\"},{\"value\":\"Asul\",\"text\":\"Asul\"},{\"value\":\"Asset\",\"text\":\"Asset\"},{\"value\":\"Astloch\",\"text\":\"Astloch\"},{\"value\":\"Aubrey\",\"text\":\"Aubrey\"},{\"value\":\"Bangers\",\"text\":\"Bangers\"},{\"value\":\"Bentham\",\"text\":\"Bentham\"},{\"value\":\"Bevan\",\"text\":\"Bevan\"},{\"value\":\"Bigshot One\",\"text\":\"Bigshot One\"},{\"value\":\"Black Ops One\",\"text\":\"Black Ops One\"},{\"value\":\"Bowlby One\",\"text\":\"Bowlby One\"},{\"value\":\"Bowlby One SC\",\"text\":\"Bowlby One SC\"},{\"value\":\"Brawler\",\"text\":\"Brawler\"},{\"value\":\"Buda\",\"text\":\"Buda\"},{\"value\":\"Cabin\",\"text\":\"Cabin\"},{\"value\":\"Cabin Sketch\",\"text\":\"Cabin Sketch\"},{\"value\":\"Calligraffitti\",\"text\":\"Calligraffitti\"},{\"value\":\"Candal\",\"text\":\"Candal\"},{\"value\":\"Cantarell\",\"text\":\"Cantarell\"},{\"value\":\"Cardo\",\"text\":\"Cardo\"},{\"value\":\"Carme\",\"text\":\"Carme\"},{\"value\":\"Carter One\",\"text\":\"Carter One\"},{\"value\":\"Caudex\",\"text\":\"Caudex\"},{\"value\":\"Cedarville Cursive\",\"text\":\"Cedarville Cursive\"},{\"value\":\"Cherry Cream Soda\",\"text\":\"Cherry Cream Soda\"},{\"value\":\"Chewy\",\"text\":\"Chewy\"},{\"value\":\"Chivo\",\"text\":\"Chivo\"},{\"value\":\"Coda\",\"text\":\"Coda\"},{\"value\":\"Coda Caption\",\"text\":\"Coda Caption\"},{\"value\":\"Comfortaa\",\"text\":\"Comfortaa\"},{\"value\":\"Coming Soon\",\"text\":\"Coming Soon\"},{\"value\":\"Convergence\",\"text\":\"Convergence\"},{\"value\":\"Copse\",\"text\":\"Copse\"},{\"value\":\"Corben\",\"text\":\"Corben\"},{\"value\":\"Cousine\",\"text\":\"Cousine\"},{\"value\":\"Coustard\",\"text\":\"Coustard\"},{\"value\":\"Covered By Your Grace\",\"text\":\"Covered By Your Grace\"},{\"value\":\"Crafty Girls\",\"text\":\"Crafty Girls\"},{\"value\":\"Crimson Text\",\"text\":\"Crimson Text\"},{\"value\":\"Crushed\",\"text\":\"Crushed\"},{\"value\":\"Cuprum\",\"text\":\"Cuprum\"},{\"value\":\"Damion\",\"text\":\"Damion\"},{\"value\":\"Dancing Script\",\"text\":\"Dancing Script\"},{\"value\":\"Dawning of a New Day\",\"text\":\"Dawning of a New Day\"},{\"value\":\"Days One\",\"text\":\"Days One\"},{\"value\":\"Delius\",\"text\":\"Delius\"},{\"value\":\"Delius Swash Caps\",\"text\":\"Delius Swash Caps\"},{\"value\":\"Delius Unicase\",\"text\":\"Delius Unicase\"},{\"value\":\"Didact Gothic\",\"text\":\"Didact Gothic\"},{\"value\":\"Dorsa\",\"text\":\"Dorsa\"},{\"value\":\"Droid Sans\",\"text\":\"Droid Sans\"},{\"value\":\"Droid Sans Mono\",\"text\":\"Droid Sans Mono\"},{\"value\":\"Droid Serif\",\"text\":\"Droid Serif\"},{\"value\":\"EB Garamond\",\"text\":\"EB Garamond\"},{\"value\":\"Exo\",\"text\":\"Exo\"},{\"value\":\"Expletus Sans\",\"text\":\"Expletus Sans\"},{\"value\":\"Fanwood Text\",\"text\":\"Fanwood Text\"},{\"value\":\"Federo\",\"text\":\"Federo\"},{\"value\":\"Fontdiner Swanky\",\"text\":\"Fontdiner Swanky\"},{\"value\":\"Forum\",\"text\":\"Forum\"},{\"value\":\"Francois One\",\"text\":\"Francois One\"},{\"value\":\"Gentium Basic\",\"text\":\"Gentium Basic\"},{\"value\":\"Gentium Book Basic\",\"text\":\"Gentium Book Basic\"},{\"value\":\"Geo\",\"text\":\"Geo\"},{\"value\":\"Geostar\",\"text\":\"Geostar\"},{\"value\":\"Geostar Fill\",\"text\":\"Geostar Fill\"},{\"value\":\"Give You Glory\",\"text\":\"Give You Glory\"},{\"value\":\"Gloria Hallelujah\",\"text\":\"Gloria Hallelujah\"},{\"value\":\"Goblin One\",\"text\":\"Goblin One\"},{\"value\":\"Goudy Bookletter 1911\",\"text\":\"Goudy Bookletter 1911\"},{\"value\":\"Gravitas One\",\"text\":\"Gravitas One\"},{\"value\":\"Gruppo\",\"text\":\"Gruppo\"},{\"value\":\"Hammersmith One\",\"text\":\"Hammersmith One\"},{\"value\":\"Holtwood One SC\",\"text\":\"Holtwood One SC\"},{\"value\":\"Homemade Apple\",\"text\":\"Homemade Apple\"},{\"value\":\"IM Fell DW Pica\",\"text\":\"IM Fell DW Pica\"},{\"value\":\"IM Fell DW Pica SC\",\"text\":\"IM Fell DW Pica SC\"},{\"value\":\"IM Fell Double Pica\",\"text\":\"IM Fell Double Pica\"},{\"value\":\"IM Fell Double Pica SC\",\"text\":\"IM Fell Double Pica SC\"},{\"value\":\"IM Fell English\",\"text\":\"IM Fell English\"},{\"value\":\"IM Fell English SC\",\"text\":\"IM Fell English SC\"},{\"value\":\"IM Fell French Canon\",\"text\":\"IM Fell French Canon\"},{\"value\":\"IM Fell French Canon SC\",\"text\":\"IM Fell French Canon SC\"},{\"value\":\"IM Fell Great Primer\",\"text\":\"IM Fell Great Primer\"},{\"value\":\"IM Fell Great Primer SC\",\"text\":\"IM Fell Great Primer SC\"},{\"value\":\"Inconsolata\",\"text\":\"Inconsolata\"},{\"value\":\"Inder\",\"text\":\"Inder\"},{\"value\":\"Indie Flower\",\"text\":\"Indie Flower\"},{\"value\":\"Irish Grover\",\"text\":\"Irish Grover\"},{\"value\":\"Istok Web\",\"text\":\"Istok Web\"},{\"value\":\"Josefin Sans\",\"text\":\"Josefin Sans\"},{\"value\":\"Josefin Slab\",\"text\":\"Josefin Slab\"},{\"value\":\"Judson\",\"text\":\"Judson\"},{\"value\":\"Jura\",\"text\":\"Jura\"},{\"value\":\"Just Another Hand\",\"text\":\"Just Another Hand\"},{\"value\":\"Just Me Again Down Here\",\"text\":\"Just Me Again Down Here\"},{\"value\":\"Kameron\",\"text\":\"Kameron\"},{\"value\":\"Kelly Slab\",\"text\":\"Kelly Slab\"},{\"value\":\"Kenia\",\"text\":\"Kenia\"},{\"value\":\"Kranky\",\"text\":\"Kranky\"},{\"value\":\"Kreon\",\"text\":\"Kreon\"},{\"value\":\"Kristi\",\"text\":\"Kristi\"},{\"value\":\"La Belle Aurore\",\"text\":\"La Belle Aurore\"},{\"value\":\"Lato\",\"text\":\"Lato\"},{\"value\":\"League Script\",\"text\":\"League Script\"},{\"value\":\"Leckerli One\",\"text\":\"Leckerli One\"},{\"value\":\"Lekton\",\"text\":\"Lekton\"},{\"value\":\"Limelight\",\"text\":\"Limelight\"},{\"value\":\"Lobster\",\"text\":\"Lobster\"},{\"value\":\"Lobster Two\",\"text\":\"Lobster Two\"},{\"value\":\"Lora\",\"text\":\"Lora\"},{\"value\":\"Love Ya Like A Sister\",\"text\":\"Love Ya Like A Sister\"},{\"value\":\"Loved by the King\",\"text\":\"Loved by the King\"},{\"value\":\"Luckiest Guy\",\"text\":\"Luckiest Guy\"},{\"value\":\"Magra\",\"text\":\"Magra\"},{\"value\":\"Maiden Orange\",\"text\":\"Maiden Orange\"},{\"value\":\"Mako\",\"text\":\"Mako\"},{\"value\":\"Marvel\",\"text\":\"Marvel\"},{\"value\":\"Maven Pro\",\"text\":\"Maven Pro\"},{\"value\":\"Meddon\",\"text\":\"Meddon\"},{\"value\":\"MedievalSharp\",\"text\":\"MedievalSharp\"},{\"value\":\"Megrim\",\"text\":\"Megrim\"},{\"value\":\"Merriweather\",\"text\":\"Merriweather\"},{\"value\":\"Metrophobic\",\"text\":\"Metrophobic\"},{\"value\":\"Michroma\",\"text\":\"Michroma\"},{\"value\":\"Miltonian\",\"text\":\"Miltonian\"},{\"value\":\"Miltonian Tattoo\",\"text\":\"Miltonian Tattoo\"},{\"value\":\"Modern Antiqua\",\"text\":\"Modern Antiqua\"},{\"value\":\"Molengo\",\"text\":\"Molengo\"},{\"value\":\"Monofett\",\"text\":\"Monofett\"},{\"value\":\"Monoton\",\"text\":\"Monoton\"},{\"value\":\"Montez\",\"text\":\"Montez\"},{\"value\":\"Mountains of Christmas\",\"text\":\"Mountains of Christmas\"},{\"value\":\"Muli\",\"text\":\"Muli\"},{\"value\":\"Neucha\",\"text\":\"Neucha\"},{\"value\":\"Neuton\",\"text\":\"Neuton\"},{\"value\":\"News Cycle\",\"text\":\"News Cycle\"},{\"value\":\"Nixie One\",\"text\":\"Nixie One\"},{\"value\":\"Nobile\",\"text\":\"Nobile\"},{\"value\":\"Nothing You Could Do\",\"text\":\"Nothing You Could Do\"},{\"value\":\"Nova Cut\",\"text\":\"Nova Cut\"},{\"value\":\"Nova Flat\",\"text\":\"Nova Flat\"},{\"value\":\"Nova Mono\",\"text\":\"Nova Mono\"},{\"value\":\"Nova Oval\",\"text\":\"Nova Oval\"},{\"value\":\"Nova Round\",\"text\":\"Nova Round\"},{\"value\":\"Nova Script\",\"text\":\"Nova Script\"},{\"value\":\"Nova Slim\",\"text\":\"Nova Slim\"},{\"value\":\"Nova Square\",\"text\":\"Nova Square\"},{\"value\":\"Numans\",\"text\":\"Numans\"},{\"value\":\"Nunito\",\"text\":\"Nunito\"},{\"value\":\"OFL Sorts Mill Goudy TT\",\"text\":\"OFL Sorts Mill Goudy TT\"},{\"value\":\"Old Standard TT\",\"text\":\"Old Standard TT\"},{\"value\":\"Open Sans\",\"text\":\"Open Sans\"},{\"value\":\"Open Sans Condensed\",\"text\":\"Open Sans Condensed\"},{\"value\":\"Orbitron\",\"text\":\"Orbitron\"},{\"value\":\"Oswald\",\"text\":\"Oswald\"},{\"value\":\"Over the Rainbow\",\"text\":\"Over the Rainbow\"},{\"value\":\"Ovo\",\"text\":\"Ovo\"},{\"value\":\"PT Sans\",\"text\":\"PT Sans\"},{\"value\":\"PT Sans Caption\",\"text\":\"PT Sans Caption\"},{\"value\":\"PT Sans Narrow\",\"text\":\"PT Sans Narrow\"},{\"value\":\"PT Serif\",\"text\":\"PT Serif\"},{\"value\":\"PT Serif Caption\",\"text\":\"PT Serif Caption\"},{\"value\":\"Pacifico\",\"text\":\"Pacifico\"},{\"value\":\"Passero One\",\"text\":\"Passero One\"},{\"value\":\"Patrick Hand\",\"text\":\"Patrick Hand\"},{\"value\":\"Paytone One\",\"text\":\"Paytone One\"},{\"value\":\"Permanent Marker\",\"text\":\"Permanent Marker\"},{\"value\":\"Philosopher\",\"text\":\"Philosopher\"},{\"value\":\"Play\",\"text\":\"Play\"},{\"value\":\"Playfair Display\",\"text\":\"Playfair Display\"},{\"value\":\"Podkova\",\"text\":\"Podkova\"},{\"value\":\"Pompiere\",\"text\":\"Pompiere\"},{\"value\":\"Prociono\",\"text\":\"Prociono\"},{\"value\":\"Puritan\",\"text\":\"Puritan\"},{\"value\":\"Quattrocento\",\"text\":\"Quattrocento\"},{\"value\":\"Quattrocento Sans\",\"text\":\"Quattrocento Sans\"},{\"value\":\"Questrial\",\"text\":\"Questrial\"},{\"value\":\"Quicksand\",\"text\":\"Quicksand\"},{\"value\":\"Radley\",\"text\":\"Radley\"},{\"value\":\"Raleway\",\"text\":\"Raleway\"},{\"value\":\"Rationale\",\"text\":\"Rationale\"},{\"value\":\"Redressed\",\"text\":\"Redressed\"},{\"value\":\"Reenie Beanie\",\"text\":\"Reenie Beanie\"},{\"value\":\"Rochester\",\"text\":\"Rochester\"},{\"value\":\"Rock Salt\",\"text\":\"Rock Salt\"},{\"value\":\"Rokkitt\",\"text\":\"Rokkitt\"},{\"value\":\"Ropa Sans\",\"text\":\"Ropa Sans\"},{\"value\":\"Rosario\",\"text\":\"Rosario\"},{\"value\":\"Ruslan Display\",\"text\":\"Ruslan Display\"},{\"value\":\"Schoolbell\",\"text\":\"Schoolbell\"},{\"value\":\"Shadows Into Light\",\"text\":\"Shadows Into Light\"},{\"value\":\"Shanti\",\"text\":\"Shanti\"},{\"value\":\"Short Stack\",\"text\":\"Short Stack\"},{\"value\":\"Sigmar One\",\"text\":\"Sigmar One\"},{\"value\":\"Signika\",\"text\":\"Signika\"},{\"value\":\"Signika Negative\",\"text\":\"Signika Negative\"},{\"value\":\"Six Caps\",\"text\":\"Six Caps\"},{\"value\":\"Slackey\",\"text\":\"Slackey\"},{\"value\":\"Smokum\",\"text\":\"Smokum\"},{\"value\":\"Smythe\",\"text\":\"Smythe\"},{\"value\":\"Sniglet\",\"text\":\"Sniglet\"},{\"value\":\"Snippet\",\"text\":\"Snippet\"},{\"value\":\"Special Elite\",\"text\":\"Special Elite\"},{\"value\":\"Stardos Stencil\",\"text\":\"Stardos Stencil\"},{\"value\":\"Sue Ellen Francisco\",\"text\":\"Sue Ellen Francisco\"},{\"value\":\"Sunshiney\",\"text\":\"Sunshiney\"},{\"value\":\"Swanky and Moo Moo\",\"text\":\"Swanky and Moo Moo\"},{\"value\":\"Syncopate\",\"text\":\"Syncopate\"},{\"value\":\"Tangerine\",\"text\":\"Tangerine\"},{\"value\":\"Telex\",\"text\":\"Telex\"},{\"value\":\"Tenor Sans\",\"text\":\"Tenor Sans\"},{\"value\":\"Terminal Dosis Light\",\"text\":\"Terminal Dosis Light\"},{\"value\":\"The Girl Next Door\",\"text\":\"The Girl Next Door\"},{\"value\":\"Tienne\",\"text\":\"Tienne\"},{\"value\":\"Tinos\",\"text\":\"Tinos\"},{\"value\":\"Tulpen One\",\"text\":\"Tulpen One\"},{\"value\":\"Ubuntu\",\"text\":\"Ubuntu\"},{\"value\":\"Ultra\",\"text\":\"Ultra\"},{\"value\":\"UnifrakturCook\",\"text\":\"UnifrakturCook\"},{\"value\":\"UnifrakturMaguntia\",\"text\":\"UnifrakturMaguntia\"},{\"value\":\"Unkempt\",\"text\":\"Unkempt\"},{\"value\":\"Unna\",\"text\":\"Unna\"},{\"value\":\"VT323\",\"text\":\"VT323\"},{\"value\":\"Varela\",\"text\":\"Varela\"},{\"value\":\"Varela Round\",\"text\":\"Varela Round\"},{\"value\":\"Vibur\",\"text\":\"Vibur\"},{\"value\":\"Viga\",\"text\":\"Viga\"},{\"value\":\"Vidaloka\",\"text\":\"Vidaloka\"},{\"value\":\"Volkhov\",\"text\":\"Volkhov\"},{\"value\":\"Vollkorn\",\"text\":\"Vollkorn\"},{\"value\":\"Voltaire\",\"text\":\"Voltaire\"},{\"value\":\"Waiting for the Sunrise\",\"text\":\"Waiting for the Sunrise\"},{\"value\":\"Wallpoet\",\"text\":\"Wallpoet\"},{\"value\":\"Walter Turncoat\",\"text\":\"Walter Turncoat\"},{\"value\":\"Wire One\",\"text\":\"Wire One\"},{\"value\":\"Yanone Kaffeesatz\",\"text\":\"Yanone Kaffeesatz\"},{\"value\":\"Yellowtail\",\"text\":\"Yellowtail\"},{\"value\":\"Yeseva One\",\"text\":\"Yeseva One\"},{\"value\":\"Zeyada\",\"text\":\"Zeyada\"}],\n        selectedIndex: 172,\n        height: \"10\",\n        fireshow: 1\n      });\n    });"},"LatinExtended":{"name":"params[readmorefont]family","id":"paramsreadmorefontfamily","html":"<div style='position:relative;'><div id=\"offlajnlistcontainerparamsreadmorefontfamily\" class=\"gk_hack offlajnlistcontainer\"><div class=\"gk_hack offlajnlist\"><span class=\"offlajnlistcurrent\">Open Sans<br \/>Andika<br \/>Anonymous Pro<br \/>Anton<br \/>Caudex<br \/>Didact Gothic<br \/>EB Garamond<br \/>Forum<br \/>Francois One<br \/>Gentium Basic<br \/>Gentium Book Basic<br \/>Istok Web<br \/>Jura<br \/>Kelly Slab<br \/>Lobster<br \/>MedievalSharp<br \/>Modern Antiqua<br \/>Neuton<br \/>Open Sans<br \/>Open Sans Condensed<br \/>Patrick Hand<br \/>Play<br \/>Ruslan Display<br \/>Tenor Sans<br \/>Ubuntu<br \/>Varela<br \/><\/span><div class=\"offlajnlistbtn\"><span><\/span><\/div><\/div><input type=\"hidden\" name=\"params[readmorefont]family\" id=\"paramsreadmorefontfamily\" value=\"Open Sans\"\/><\/div><\/div>","script":"dojo.addOnLoad(function(){\n      new OfflajnList({\n        name: \"paramsreadmorefontfamily\",\n        elements: \"<div class=\\\"content\\\"><div class=\\\"listelement\\\">Andika<\\\/div><div class=\\\"listelement\\\">Anonymous Pro<\\\/div><div class=\\\"listelement\\\">Anton<\\\/div><div class=\\\"listelement\\\">Caudex<\\\/div><div class=\\\"listelement\\\">Didact Gothic<\\\/div><div class=\\\"listelement\\\">EB Garamond<\\\/div><div class=\\\"listelement\\\">Forum<\\\/div><div class=\\\"listelement\\\">Francois One<\\\/div><div class=\\\"listelement\\\">Gentium Basic<\\\/div><div class=\\\"listelement\\\">Gentium Book Basic<\\\/div><div class=\\\"listelement\\\">Istok Web<\\\/div><div class=\\\"listelement\\\">Jura<\\\/div><div class=\\\"listelement\\\">Kelly Slab<\\\/div><div class=\\\"listelement\\\">Lobster<\\\/div><div class=\\\"listelement\\\">MedievalSharp<\\\/div><div class=\\\"listelement\\\">Modern Antiqua<\\\/div><div class=\\\"listelement\\\">Neuton<\\\/div><div class=\\\"listelement\\\">Open Sans<\\\/div><div class=\\\"listelement\\\">Open Sans Condensed<\\\/div><div class=\\\"listelement\\\">Patrick Hand<\\\/div><div class=\\\"listelement\\\">Play<\\\/div><div class=\\\"listelement\\\">Ruslan Display<\\\/div><div class=\\\"listelement\\\">Tenor Sans<\\\/div><div class=\\\"listelement\\\">Ubuntu<\\\/div><div class=\\\"listelement\\\">Varela<\\\/div><\\\/div>\",\n        options: [{\"value\":\"Andika\",\"text\":\"Andika\"},{\"value\":\"Anonymous Pro\",\"text\":\"Anonymous Pro\"},{\"value\":\"Anton\",\"text\":\"Anton\"},{\"value\":\"Caudex\",\"text\":\"Caudex\"},{\"value\":\"Didact Gothic\",\"text\":\"Didact Gothic\"},{\"value\":\"EB Garamond\",\"text\":\"EB Garamond\"},{\"value\":\"Forum\",\"text\":\"Forum\"},{\"value\":\"Francois One\",\"text\":\"Francois One\"},{\"value\":\"Gentium Basic\",\"text\":\"Gentium Basic\"},{\"value\":\"Gentium Book Basic\",\"text\":\"Gentium Book Basic\"},{\"value\":\"Istok Web\",\"text\":\"Istok Web\"},{\"value\":\"Jura\",\"text\":\"Jura\"},{\"value\":\"Kelly Slab\",\"text\":\"Kelly Slab\"},{\"value\":\"Lobster\",\"text\":\"Lobster\"},{\"value\":\"MedievalSharp\",\"text\":\"MedievalSharp\"},{\"value\":\"Modern Antiqua\",\"text\":\"Modern Antiqua\"},{\"value\":\"Neuton\",\"text\":\"Neuton\"},{\"value\":\"Open Sans\",\"text\":\"Open Sans\"},{\"value\":\"Open Sans Condensed\",\"text\":\"Open Sans Condensed\"},{\"value\":\"Patrick Hand\",\"text\":\"Patrick Hand\"},{\"value\":\"Play\",\"text\":\"Play\"},{\"value\":\"Ruslan Display\",\"text\":\"Ruslan Display\"},{\"value\":\"Tenor Sans\",\"text\":\"Tenor Sans\"},{\"value\":\"Ubuntu\",\"text\":\"Ubuntu\"},{\"value\":\"Varela\",\"text\":\"Varela\"}],\n        selectedIndex: 17,\n        height: \"10\",\n        fireshow: 1\n      });\n    });"},"Vietnamese":{"name":"params[readmorefont]family","id":"paramsreadmorefontfamily","html":"<div style='position:relative;'><div id=\"offlajnlistcontainerparamsreadmorefontfamily\" class=\"gk_hack offlajnlistcontainer\"><div class=\"gk_hack offlajnlist\"><span class=\"offlajnlistcurrent\">Open Sans<br \/>EB Garamond<br \/>Open Sans<br \/>Open Sans Condensed<br \/><\/span><div class=\"offlajnlistbtn\"><span><\/span><\/div><\/div><input type=\"hidden\" name=\"params[readmorefont]family\" id=\"paramsreadmorefontfamily\" value=\"Open Sans\"\/><\/div><\/div>","script":"dojo.addOnLoad(function(){\n      new OfflajnList({\n        name: \"paramsreadmorefontfamily\",\n        elements: \"<div class=\\\"content\\\"><div class=\\\"listelement\\\">EB Garamond<\\\/div><div class=\\\"listelement\\\">Open Sans<\\\/div><div class=\\\"listelement\\\">Open Sans Condensed<\\\/div><\\\/div>\",\n        options: [{\"value\":\"EB Garamond\",\"text\":\"EB Garamond\"},{\"value\":\"Open Sans\",\"text\":\"Open Sans\"},{\"value\":\"Open Sans Condensed\",\"text\":\"Open Sans Condensed\"}],\n        selectedIndex: 1,\n        height: \"10\",\n        fireshow: 1\n      });\n    });"},"html":"<div style='position:relative;'><div id=\"offlajnlistcontainerparamsreadmorefonttype\" class=\"gk_hack offlajnlistcontainer\"><div class=\"gk_hack offlajnlist\"><span class=\"offlajnlistcurrent\">Alternative fonts<br \/>Alternative fonts<br \/>Cyrillic<br \/>CyrillicExtended<br \/>Greek<br \/>GreekExtended<br \/>Khmer<br \/>Latin<br \/>LatinExtended<br \/>Vietnamese<br \/><\/span><div class=\"offlajnlistbtn\"><span><\/span><\/div><\/div><input type=\"hidden\" name=\"params[readmorefont]type\" id=\"paramsreadmorefonttype\" value=\"0\"\/><\/div><\/div>"},"size":{"name":"params[readmorefont]size","id":"paramsreadmorefontsize","html":"<div class=\"offlajntextcontainer\" id=\"offlajntextcontainerparamsreadmorefontsize\"><input  size=\"1\" class=\"offlajntext\" type=\"text\" id=\"paramsreadmorefontsizeinput\" value=\"14\"><div class=\"offlajntext_increment\">\n                <div class=\"offlajntext_increment_up arrow\"><\/div>\n                <div class=\"offlajntext_increment_down arrow\"><\/div>\n      <\/div><\/div><div class=\"offlajnswitcher\">\r\n            <div class=\"offlajnswitcher_inner\" id=\"offlajnswitcher_innerparamsreadmorefontsizeunit\"><\/div>\r\n    <\/div><input type=\"hidden\" name=\"params[readmorefont]size[unit]\" id=\"paramsreadmorefontsizeunit\" value=\"px\" \/><input type=\"hidden\" name=\"params[readmorefont]size\" id=\"paramsreadmorefontsize\" value=\"14||px\">"},"color":{"name":"params[readmorefont]color","id":"paramsreadmorefontcolor","html":"<div class=\"offlajncolor\"><input type=\"text\" name=\"params[readmorefont]color\" id=\"paramsreadmorefontcolor\" value=\"000000\" class=\"color wa\" size=\"12\" \/><\/div>"},"bold":{"name":"params[readmorefont]bold","id":"paramsreadmorefontbold","html":"<div id=\"offlajnonoffparamsreadmorefontbold\" class=\"gk_hack onoffbutton\">\n                <div class=\"gk_hack onoffbutton_img\" style=\"background-image: url(http:\/\/localhost\/thepdahoi.vn\/wp-content\/plugins\/nextend-smart-slider-lite\/includes\/modules\/mod_smartslider\/params\/offlajnonoff\/images\/bold.png);\"><\/div>\n      <\/div><input type=\"hidden\" name=\"params[readmorefont]bold\" id=\"paramsreadmorefontbold\" value=\"0\" \/>"},"italic":{"name":"params[readmorefont]italic","id":"paramsreadmorefontitalic","html":"<div id=\"offlajnonoffparamsreadmorefontitalic\" class=\"gk_hack onoffbutton\">\n                <div class=\"gk_hack onoffbutton_img\" style=\"background-image: url(http:\/\/localhost\/thepdahoi.vn\/wp-content\/plugins\/nextend-smart-slider-lite\/includes\/modules\/mod_smartslider\/params\/offlajnonoff\/images\/italic.png);\"><\/div>\n      <\/div><input type=\"hidden\" name=\"params[readmorefont]italic\" id=\"paramsreadmorefontitalic\" value=\"0\" \/>"},"underline":{"name":"params[readmorefont]underline","id":"paramsreadmorefontunderline","html":"<div id=\"offlajnonoffparamsreadmorefontunderline\" class=\"gk_hack onoffbutton\">\n                <div class=\"gk_hack onoffbutton_img\" style=\"background-image: url(http:\/\/localhost\/thepdahoi.vn\/wp-content\/plugins\/nextend-smart-slider-lite\/includes\/modules\/mod_smartslider\/params\/offlajnonoff\/images\/underline.png);\"><\/div>\n      <\/div><input type=\"hidden\" name=\"params[readmorefont]underline\" id=\"paramsreadmorefontunderline\" value=\"0\" \/>"},"align":{"name":"params[readmorefont]align","id":"paramsreadmorefontalign","html":"<div class=\"offlajnradiocontainerimage\" id=\"offlajnradiocontainerparamsreadmorefontalign\"><div class=\"radioelement first selected\"><div class=\"radioelement_img\" style=\"background-image: url(http:\/\/localhost\/thepdahoi.vn\/wp-content\/plugins\/nextend-smart-slider-lite\/includes\/modules\/mod_smartslider\/params\/offlajnradio\/images\/left_align.png);\"><\/div><\/div><div class=\"radioelement \"><div class=\"radioelement_img\" style=\"background-image: url(http:\/\/localhost\/thepdahoi.vn\/wp-content\/plugins\/nextend-smart-slider-lite\/includes\/modules\/mod_smartslider\/params\/offlajnradio\/images\/center_align.png);\"><\/div><\/div><div class=\"radioelement  last\"><div class=\"radioelement_img\" style=\"background-image: url(http:\/\/localhost\/thepdahoi.vn\/wp-content\/plugins\/nextend-smart-slider-lite\/includes\/modules\/mod_smartslider\/params\/offlajnradio\/images\/right_align.png);\"><\/div><\/div><div class=\"clear\"><\/div><\/div><input type=\"hidden\" id=\"paramsreadmorefontalign\" name=\"params[readmorefont]align\" value=\"left\"\/>"},"afont":{"name":"params[readmorefont]afont","id":"paramsreadmorefontafont","html":"<div class=\"offlajntextcontainer\" id=\"offlajntextcontainerparamsreadmorefontafont\"><input  size=\"10\" class=\"offlajntext\" type=\"text\" id=\"paramsreadmorefontafontinput\" value=\"Arial\"><\/div><div class=\"offlajnswitcher\">\r\n            <div class=\"offlajnswitcher_inner\" id=\"offlajnswitcher_innerparamsreadmorefontafontunit\"><\/div>\r\n    <\/div><input type=\"hidden\" name=\"params[readmorefont]afont[unit]\" id=\"paramsreadmorefontafontunit\" value=\"1\" \/><input type=\"hidden\" name=\"params[readmorefont]afont\" id=\"paramsreadmorefontafont\" value=\"Arial||1\">"},"tshadow":{"name":"params[readmorefont]tshadow","id":"paramsreadmorefonttshadow","html":"<div id=\"offlajncombine_outerparamsreadmorefonttshadow\" class=\"offlajncombine_outer\"><div class=\"offlajncombinefieldcontainer\"><div class=\"offlajncombinefield\"><div class=\"offlajntextcontainer\" id=\"offlajntextcontainerparamsreadmorefonttshadow0\"><input  size=\"1\" class=\"offlajntext\" type=\"text\" id=\"paramsreadmorefonttshadow0input\" value=\"0\"><div class=\"unit\">px<\/div><\/div><input type=\"hidden\" name=\"params[readmorefont]tshadow0\" id=\"paramsreadmorefonttshadow0\" value=\"0\"><\/div><\/div><div class=\"offlajncombinefieldcontainer\"><div class=\"offlajncombinefield\"><div class=\"offlajntextcontainer\" id=\"offlajntextcontainerparamsreadmorefonttshadow1\"><input  size=\"1\" class=\"offlajntext\" type=\"text\" id=\"paramsreadmorefonttshadow1input\" value=\"0\"><div class=\"unit\">px<\/div><\/div><input type=\"hidden\" name=\"params[readmorefont]tshadow1\" id=\"paramsreadmorefonttshadow1\" value=\"0\"><\/div><\/div><div class=\"offlajncombinefieldcontainer\"><div class=\"offlajncombinefield\"><div class=\"offlajntextcontainer\" id=\"offlajntextcontainerparamsreadmorefonttshadow2\"><input  size=\"1\" class=\"offlajntext\" type=\"text\" id=\"paramsreadmorefonttshadow2input\" value=\"0\"><div class=\"unit\">px<\/div><\/div><input type=\"hidden\" name=\"params[readmorefont]tshadow2\" id=\"paramsreadmorefonttshadow2\" value=\"0\"><\/div><\/div><div class=\"offlajncombinefieldcontainer\"><div class=\"offlajncombinefield\"><div class=\"offlajncolor\"><input type=\"text\" name=\"params[readmorefont]tshadow3\" id=\"paramsreadmorefonttshadow3\" value=\"000000\" class=\"color wa\" size=\"12\" \/><\/div><\/div><\/div><div class=\"offlajncombinefieldcontainer\"><div class=\"offlajncombinefield\"><div class=\"offlajnswitcher\">\r\n            <div class=\"offlajnswitcher_inner\" id=\"offlajnswitcher_innerparamsreadmorefonttshadow4\"><\/div>\r\n    <\/div><input type=\"hidden\" name=\"params[readmorefont]tshadow4\" id=\"paramsreadmorefonttshadow4\" value=\"0\" \/><\/div><\/div><div class=\"offlajncombine_hider\"><\/div><\/div><input type=\"hidden\" name=\"params[readmorefont]tshadow\" id=\"paramsreadmorefonttshadow\" value='0|*|0|*|0|*|000000|*|0'>"},"lineheight":{"name":"params[readmorefont]lineheight","id":"paramsreadmorefontlineheight","html":"<div class=\"offlajntextcontainer\" id=\"offlajntextcontainerparamsreadmorefontlineheight\"><input  size=\"5\" class=\"offlajntext\" type=\"text\" id=\"paramsreadmorefontlineheightinput\" value=\"normal\"><\/div><input type=\"hidden\" name=\"params[readmorefont]lineheight\" id=\"paramsreadmorefontlineheight\" value=\"normal\">"}},
          script: "dojo.addOnLoad(function(){\r\n      new OfflajnRadio({\r\n        id: \"paramsreadmorefonttab\",\r\n        values: [\"Small\",\"Big\"],\r\n        map: {\"Small\":0,\"Big\":1},\r\n        mode: \"\"\r\n      });\r\n    \n      new OfflajnList({\n        name: \"paramsreadmorefonttype\",\n        elements: \"<div class=\\\"content\\\"><div class=\\\"listelement\\\">Alternative fonts<\\\/div><div class=\\\"listelement\\\">Cyrillic<\\\/div><div class=\\\"listelement\\\">CyrillicExtended<\\\/div><div class=\\\"listelement\\\">Greek<\\\/div><div class=\\\"listelement\\\">GreekExtended<\\\/div><div class=\\\"listelement\\\">Khmer<\\\/div><div class=\\\"listelement\\\">Latin<\\\/div><div class=\\\"listelement\\\">LatinExtended<\\\/div><div class=\\\"listelement\\\">Vietnamese<\\\/div><\\\/div>\",\n        options: [{\"value\":\"0\",\"text\":\"Alternative fonts\"},{\"value\":\"Cyrillic\",\"text\":\"Cyrillic\"},{\"value\":\"CyrillicExtended\",\"text\":\"CyrillicExtended\"},{\"value\":\"Greek\",\"text\":\"Greek\"},{\"value\":\"GreekExtended\",\"text\":\"GreekExtended\"},{\"value\":\"Khmer\",\"text\":\"Khmer\"},{\"value\":\"Latin\",\"text\":\"Latin\"},{\"value\":\"LatinExtended\",\"text\":\"LatinExtended\"},{\"value\":\"Vietnamese\",\"text\":\"Vietnamese\"}],\n        selectedIndex: 0,\n        height: 0,\n        fireshow: 0\n      });\n    dojo.addOnLoad(function(){ \r\n      new OfflajnSwitcher({\r\n        id: \"paramsreadmorefontsizeunit\",\r\n        units: [\"px\",\"em\"],\r\n        values: [\"px\",\"em\"],\r\n        map: {\"px\":0,\"em\":1},\r\n        mode: 0,\r\n        url: \"http:\\\/\\\/localhost\\\/thepdahoi.vn\\\/wp-admin\\\/..\\\/modules\\\/mod_smartslider\\\/params\\\/offlajnswitcher\\\/images\\\/\"\r\n      }); \r\n    });\n      new OfflajnText({\n        id: \"paramsreadmorefontsize\",\n        validation: \"int\",\n        attachunit: \"\",\n        mode: \"increment\",\n        scale: \"1\",\n        minus: 0,\n        onoff: \"\"\n      }); \n    \n    var el = dojo.byId(\"paramsreadmorefontcolor\");\n    jQuery.fn.jPicker.defaults.images.clientPath=\"http:\/\/localhost\/thepdahoi.vn\/wp-content\/plugins\/nextend-smart-slider-lite\/joomla\/\/modules\/mod_smartslider\/params\/offlajndashboard\/..\/offlajncolor\/offlajncolor\/jpicker\/images\/\";\n    el.alphaSupport=false; \n    el.c = jQuery(\"#paramsreadmorefontcolor\").jPicker({\n        window:{\n          expandable: true,\n          alphaSupport: false}\n        });\n    dojo.connect(el, \"change\", function(){\n      this.c[0].color.active.val(\"hex\", this.value);\n    });\n    \n      new OfflajnOnOff({\n        id: \"paramsreadmorefontbold\",\n        mode: \"button\",\n        imgs: \"\"\n      }); \n    \n      new OfflajnOnOff({\n        id: \"paramsreadmorefontitalic\",\n        mode: \"button\",\n        imgs: \"\"\n      }); \n    \n      new OfflajnOnOff({\n        id: \"paramsreadmorefontunderline\",\n        mode: \"button\",\n        imgs: \"\"\n      }); \n    \r\n      new OfflajnRadio({\r\n        id: \"paramsreadmorefontalign\",\r\n        values: [\"left\",\"center\",\"right\"],\r\n        map: {\"left\":0,\"center\":1,\"right\":2},\r\n        mode: \"image\"\r\n      });\r\n    dojo.addOnLoad(function(){ \r\n      new OfflajnSwitcher({\r\n        id: \"paramsreadmorefontafontunit\",\r\n        units: [\"ON\",\"OFF\"],\r\n        values: [\"1\",\"0\"],\r\n        map: {\"1\":0,\"0\":1},\r\n        mode: 0,\r\n        url: \"http:\\\/\\\/localhost\\\/thepdahoi.vn\\\/wp-admin\\\/..\\\/modules\\\/mod_smartslider\\\/params\\\/offlajnswitcher\\\/images\\\/\"\r\n      }); \r\n    });\n      new OfflajnText({\n        id: \"paramsreadmorefontafont\",\n        validation: \"\",\n        attachunit: \"\",\n        mode: \"\",\n        scale: \"\",\n        minus: 0,\n        onoff: \"1\"\n      }); \n    \n      new OfflajnText({\n        id: \"paramsreadmorefonttshadow0\",\n        validation: \"float\",\n        attachunit: \"px\",\n        mode: \"\",\n        scale: \"\",\n        minus: 0,\n        onoff: \"\"\n      }); \n    \n      new OfflajnText({\n        id: \"paramsreadmorefonttshadow1\",\n        validation: \"float\",\n        attachunit: \"px\",\n        mode: \"\",\n        scale: \"\",\n        minus: 0,\n        onoff: \"\"\n      }); \n    \n      new OfflajnText({\n        id: \"paramsreadmorefonttshadow2\",\n        validation: \"float\",\n        attachunit: \"px\",\n        mode: \"\",\n        scale: \"\",\n        minus: 0,\n        onoff: \"\"\n      }); \n    \n    var el = dojo.byId(\"paramsreadmorefonttshadow3\");\n    jQuery.fn.jPicker.defaults.images.clientPath=\"http:\/\/localhost\/thepdahoi.vn\/wp-content\/plugins\/nextend-smart-slider-lite\/joomla\/\/modules\/mod_smartslider\/params\/offlajndashboard\/..\/offlajncolor\/offlajncolor\/jpicker\/images\/\";\n    el.alphaSupport=false; \n    el.c = jQuery(\"#paramsreadmorefonttshadow3\").jPicker({\n        window:{\n          expandable: true,\n          alphaSupport: false}\n        });\n    dojo.connect(el, \"change\", function(){\n      this.c[0].color.active.val(\"hex\", this.value);\n    });\n    dojo.addOnLoad(function(){ \r\n      new OfflajnSwitcher({\r\n        id: \"paramsreadmorefonttshadow4\",\r\n        units: [\"ON\",\"OFF\"],\r\n        values: [\"1\",\"0\"],\r\n        map: {\"1\":0,\"0\":1},\r\n        mode: 0,\r\n        url: \"http:\\\/\\\/localhost\\\/thepdahoi.vn\\\/wp-admin\\\/..\\\/modules\\\/mod_smartslider\\\/params\\\/offlajnswitcher\\\/images\\\/\"\r\n      }); \r\n    });\r\n      new OfflajnCombine({\r\n        id: \"paramsreadmorefonttshadow\",\r\n        num: 5,\r\n        switcherid: \"paramsreadmorefonttshadow4\",\r\n        hideafter: \"0\"\r\n      }); \r\n    \n      new OfflajnText({\n        id: \"paramsreadmorefontlineheight\",\n        validation: \"\",\n        attachunit: \"\",\n        mode: \"\",\n        scale: \"\",\n        minus: 0,\n        onoff: \"\"\n      }); \n    });"
        });
    

        new FontConfigurator({
          id: "paramscaptionfont",
          defaultTab: "Tag",
          origsettings: {"Tag":{},"Title":{},"Paragraph":{},"Link":{}},
          elements: {"tab":{"name":"params[captionfont]tab","id":"paramscaptionfonttab","html":"<div class=\"offlajnradiocontainerbutton\" id=\"offlajnradiocontainerparamscaptionfonttab\"><div class=\"radioelement first selected\">Tag<\/div><div class=\"radioelement \">Title<\/div><div class=\"radioelement \">Paragraph<\/div><div class=\"radioelement  last\">Link<\/div><div class=\"clear\"><\/div><\/div><input type=\"hidden\" id=\"paramscaptionfonttab\" name=\"params[captionfont]tab\" value=\"Tag\"\/>"},"type":{"name":"params[captionfont]type","id":"paramscaptionfonttype","Cyrillic":{"name":"params[captionfont]family","id":"paramscaptionfontfamily","html":"<div style='position:relative;'><div id=\"offlajnlistcontainerparamscaptionfontfamily\" class=\"gk_hack offlajnlistcontainer\"><div class=\"gk_hack offlajnlist\"><span class=\"offlajnlistcurrent\">Open Sans<br \/>Andika<br \/>Anonymous Pro<br \/>Cuprum<br \/>Didact Gothic<br \/>EB Garamond<br \/>Istok Web<br \/>Jura<br \/>Forum<br \/>Kelly Slab<br \/>Lobster<br \/>Neucha<br \/>Open Sans<br \/>Open Sans Condensed<br \/>Philosopher<br \/>Play<br \/>PT Sans<br \/>PT Sans Caption<br \/>PT Sans Narrow<br \/>PT Serif<br \/>PT Serif Caption<br \/>Ruslan Display<br \/>Tenor Sans<br \/>Ubuntu<br \/><\/span><div class=\"offlajnlistbtn\"><span><\/span><\/div><\/div><input type=\"hidden\" name=\"params[captionfont]family\" id=\"paramscaptionfontfamily\" value=\"Open Sans\"\/><\/div><\/div>","script":"dojo.addOnLoad(function(){\n      new OfflajnList({\n        name: \"paramscaptionfontfamily\",\n        elements: \"<div class=\\\"content\\\"><div class=\\\"listelement\\\">Andika<\\\/div><div class=\\\"listelement\\\">Anonymous Pro<\\\/div><div class=\\\"listelement\\\">Cuprum<\\\/div><div class=\\\"listelement\\\">Didact Gothic<\\\/div><div class=\\\"listelement\\\">EB Garamond<\\\/div><div class=\\\"listelement\\\">Istok Web<\\\/div><div class=\\\"listelement\\\">Jura<\\\/div><div class=\\\"listelement\\\">Forum<\\\/div><div class=\\\"listelement\\\">Kelly Slab<\\\/div><div class=\\\"listelement\\\">Lobster<\\\/div><div class=\\\"listelement\\\">Neucha<\\\/div><div class=\\\"listelement\\\">Open Sans<\\\/div><div class=\\\"listelement\\\">Open Sans Condensed<\\\/div><div class=\\\"listelement\\\">Philosopher<\\\/div><div class=\\\"listelement\\\">Play<\\\/div><div class=\\\"listelement\\\">PT Sans<\\\/div><div class=\\\"listelement\\\">PT Sans Caption<\\\/div><div class=\\\"listelement\\\">PT Sans Narrow<\\\/div><div class=\\\"listelement\\\">PT Serif<\\\/div><div class=\\\"listelement\\\">PT Serif Caption<\\\/div><div class=\\\"listelement\\\">Ruslan Display<\\\/div><div class=\\\"listelement\\\">Tenor Sans<\\\/div><div class=\\\"listelement\\\">Ubuntu<\\\/div><\\\/div>\",\n        options: [{\"value\":\"Andika\",\"text\":\"Andika\"},{\"value\":\"Anonymous Pro\",\"text\":\"Anonymous Pro\"},{\"value\":\"Cuprum\",\"text\":\"Cuprum\"},{\"value\":\"Didact Gothic\",\"text\":\"Didact Gothic\"},{\"value\":\"EB Garamond\",\"text\":\"EB Garamond\"},{\"value\":\"Istok Web\",\"text\":\"Istok Web\"},{\"value\":\"Jura\",\"text\":\"Jura\"},{\"value\":\"Forum\",\"text\":\"Forum\"},{\"value\":\"Kelly Slab\",\"text\":\"Kelly Slab\"},{\"value\":\"Lobster\",\"text\":\"Lobster\"},{\"value\":\"Neucha\",\"text\":\"Neucha\"},{\"value\":\"Open Sans\",\"text\":\"Open Sans\"},{\"value\":\"Open Sans Condensed\",\"text\":\"Open Sans Condensed\"},{\"value\":\"Philosopher\",\"text\":\"Philosopher\"},{\"value\":\"Play\",\"text\":\"Play\"},{\"value\":\"PT Sans\",\"text\":\"PT Sans\"},{\"value\":\"PT Sans Caption\",\"text\":\"PT Sans Caption\"},{\"value\":\"PT Sans Narrow\",\"text\":\"PT Sans Narrow\"},{\"value\":\"PT Serif\",\"text\":\"PT Serif\"},{\"value\":\"PT Serif Caption\",\"text\":\"PT Serif Caption\"},{\"value\":\"Ruslan Display\",\"text\":\"Ruslan Display\"},{\"value\":\"Tenor Sans\",\"text\":\"Tenor Sans\"},{\"value\":\"Ubuntu\",\"text\":\"Ubuntu\"}],\n        selectedIndex: 11,\n        height: \"10\",\n        fireshow: 1\n      });\n    });"},"CyrillicExtended":{"name":"params[captionfont]family","id":"paramscaptionfontfamily","html":"<div style='position:relative;'><div id=\"offlajnlistcontainerparamscaptionfontfamily\" class=\"gk_hack offlajnlistcontainer\"><div class=\"gk_hack offlajnlist\"><span class=\"offlajnlistcurrent\">Open Sans<br \/>Andika<br \/>Anonymous Pro<br \/>Didact Gothic<br \/>EB Garamond<br \/>Istok Web<br \/>Jura<br \/>Forum<br \/>Lobster<br \/>Open Sans<br \/>Open Sans Condensed<br \/>Play<br \/>Ruslan Display<br \/>Tenor Sans<br \/>Ubuntu<br \/><\/span><div class=\"offlajnlistbtn\"><span><\/span><\/div><\/div><input type=\"hidden\" name=\"params[captionfont]family\" id=\"paramscaptionfontfamily\" value=\"Open Sans\"\/><\/div><\/div>","script":"dojo.addOnLoad(function(){\n      new OfflajnList({\n        name: \"paramscaptionfontfamily\",\n        elements: \"<div class=\\\"content\\\"><div class=\\\"listelement\\\">Andika<\\\/div><div class=\\\"listelement\\\">Anonymous Pro<\\\/div><div class=\\\"listelement\\\">Didact Gothic<\\\/div><div class=\\\"listelement\\\">EB Garamond<\\\/div><div class=\\\"listelement\\\">Istok Web<\\\/div><div class=\\\"listelement\\\">Jura<\\\/div><div class=\\\"listelement\\\">Forum<\\\/div><div class=\\\"listelement\\\">Lobster<\\\/div><div class=\\\"listelement\\\">Open Sans<\\\/div><div class=\\\"listelement\\\">Open Sans Condensed<\\\/div><div class=\\\"listelement\\\">Play<\\\/div><div class=\\\"listelement\\\">Ruslan Display<\\\/div><div class=\\\"listelement\\\">Tenor Sans<\\\/div><div class=\\\"listelement\\\">Ubuntu<\\\/div><\\\/div>\",\n        options: [{\"value\":\"Andika\",\"text\":\"Andika\"},{\"value\":\"Anonymous Pro\",\"text\":\"Anonymous Pro\"},{\"value\":\"Didact Gothic\",\"text\":\"Didact Gothic\"},{\"value\":\"EB Garamond\",\"text\":\"EB Garamond\"},{\"value\":\"Istok Web\",\"text\":\"Istok Web\"},{\"value\":\"Jura\",\"text\":\"Jura\"},{\"value\":\"Forum\",\"text\":\"Forum\"},{\"value\":\"Lobster\",\"text\":\"Lobster\"},{\"value\":\"Open Sans\",\"text\":\"Open Sans\"},{\"value\":\"Open Sans Condensed\",\"text\":\"Open Sans Condensed\"},{\"value\":\"Play\",\"text\":\"Play\"},{\"value\":\"Ruslan Display\",\"text\":\"Ruslan Display\"},{\"value\":\"Tenor Sans\",\"text\":\"Tenor Sans\"},{\"value\":\"Ubuntu\",\"text\":\"Ubuntu\"}],\n        selectedIndex: 8,\n        height: \"10\",\n        fireshow: 1\n      });\n    });"},"Greek":{"name":"params[captionfont]family","id":"paramscaptionfontfamily","html":"<div style='position:relative;'><div id=\"offlajnlistcontainerparamscaptionfontfamily\" class=\"gk_hack offlajnlistcontainer\"><div class=\"gk_hack offlajnlist\"><span class=\"offlajnlistcurrent\">Open Sans<br \/>Anonymous Pro<br \/>Caudex<br \/>Didact Gothic<br \/>Jura<br \/>GFS Didot<br \/>GFS Neohellenic<br \/>Nova Mono<br \/>Open Sans<br \/>Open Sans Condensed<br \/>Play<br \/>Ubuntu<br \/><\/span><div class=\"offlajnlistbtn\"><span><\/span><\/div><\/div><input type=\"hidden\" name=\"params[captionfont]family\" id=\"paramscaptionfontfamily\" value=\"Open Sans\"\/><\/div><\/div>","script":"dojo.addOnLoad(function(){\n      new OfflajnList({\n        name: \"paramscaptionfontfamily\",\n        elements: \"<div class=\\\"content\\\"><div class=\\\"listelement\\\">Anonymous Pro<\\\/div><div class=\\\"listelement\\\">Caudex<\\\/div><div class=\\\"listelement\\\">Didact Gothic<\\\/div><div class=\\\"listelement\\\">Jura<\\\/div><div class=\\\"listelement\\\">GFS Didot<\\\/div><div class=\\\"listelement\\\">GFS Neohellenic<\\\/div><div class=\\\"listelement\\\">Nova Mono<\\\/div><div class=\\\"listelement\\\">Open Sans<\\\/div><div class=\\\"listelement\\\">Open Sans Condensed<\\\/div><div class=\\\"listelement\\\">Play<\\\/div><div class=\\\"listelement\\\">Ubuntu<\\\/div><\\\/div>\",\n        options: [{\"value\":\"Anonymous Pro\",\"text\":\"Anonymous Pro\"},{\"value\":\"Caudex\",\"text\":\"Caudex\"},{\"value\":\"Didact Gothic\",\"text\":\"Didact Gothic\"},{\"value\":\"Jura\",\"text\":\"Jura\"},{\"value\":\"GFS Didot\",\"text\":\"GFS Didot\"},{\"value\":\"GFS Neohellenic\",\"text\":\"GFS Neohellenic\"},{\"value\":\"Nova Mono\",\"text\":\"Nova Mono\"},{\"value\":\"Open Sans\",\"text\":\"Open Sans\"},{\"value\":\"Open Sans Condensed\",\"text\":\"Open Sans Condensed\"},{\"value\":\"Play\",\"text\":\"Play\"},{\"value\":\"Ubuntu\",\"text\":\"Ubuntu\"}],\n        selectedIndex: 7,\n        height: \"10\",\n        fireshow: 1\n      });\n    });"},"GreekExtended":{"name":"params[captionfont]family","id":"paramscaptionfontfamily","html":"<div style='position:relative;'><div id=\"offlajnlistcontainerparamscaptionfontfamily\" class=\"gk_hack offlajnlistcontainer\"><div class=\"gk_hack offlajnlist\"><span class=\"offlajnlistcurrent\">Open Sans<br \/>Anonymous Pro<br \/>Caudex<br \/>Didact Gothic<br \/>Jura<br \/>Open Sans<br \/>Open Sans Condensed<br \/>Play<br \/>Ubuntu<br \/><\/span><div class=\"offlajnlistbtn\"><span><\/span><\/div><\/div><input type=\"hidden\" name=\"params[captionfont]family\" id=\"paramscaptionfontfamily\" value=\"Open Sans\"\/><\/div><\/div>","script":"dojo.addOnLoad(function(){\n      new OfflajnList({\n        name: \"paramscaptionfontfamily\",\n        elements: \"<div class=\\\"content\\\"><div class=\\\"listelement\\\">Anonymous Pro<\\\/div><div class=\\\"listelement\\\">Caudex<\\\/div><div class=\\\"listelement\\\">Didact Gothic<\\\/div><div class=\\\"listelement\\\">Jura<\\\/div><div class=\\\"listelement\\\">Open Sans<\\\/div><div class=\\\"listelement\\\">Open Sans Condensed<\\\/div><div class=\\\"listelement\\\">Play<\\\/div><div class=\\\"listelement\\\">Ubuntu<\\\/div><\\\/div>\",\n        options: [{\"value\":\"Anonymous Pro\",\"text\":\"Anonymous Pro\"},{\"value\":\"Caudex\",\"text\":\"Caudex\"},{\"value\":\"Didact Gothic\",\"text\":\"Didact Gothic\"},{\"value\":\"Jura\",\"text\":\"Jura\"},{\"value\":\"Open Sans\",\"text\":\"Open Sans\"},{\"value\":\"Open Sans Condensed\",\"text\":\"Open Sans Condensed\"},{\"value\":\"Play\",\"text\":\"Play\"},{\"value\":\"Ubuntu\",\"text\":\"Ubuntu\"}],\n        selectedIndex: 4,\n        height: \"10\",\n        fireshow: 1\n      });\n    });"},"Khmer":{"name":"params[captionfont]family","id":"paramscaptionfontfamily","html":"<div style='position:relative;'><div id=\"offlajnlistcontainerparamscaptionfontfamily\" class=\"gk_hack offlajnlistcontainer\"><div class=\"gk_hack offlajnlist\"><span class=\"offlajnlistcurrent\">Angkor<br \/>Angkor<br \/>Battambang<br \/>Bayon<br \/>Bokor<br \/>Chenla<br \/>Content<br \/>Dangrek<br \/>Freehand<br \/>Hanuman<br \/>Khmer<br \/>Koulen<br \/>Metal<br \/>Moul<br \/>Moulpali<br \/>Odor Mean Chey<br \/>Preahvihear<br \/>Siemreap<br \/>Suwannaphum<br \/>Taprom<br \/><\/span><div class=\"offlajnlistbtn\"><span><\/span><\/div><\/div><input type=\"hidden\" name=\"params[captionfont]family\" id=\"paramscaptionfontfamily\" value=\"Angkor\"\/><\/div><\/div>","script":"dojo.addOnLoad(function(){\n      new OfflajnList({\n        name: \"paramscaptionfontfamily\",\n        elements: \"<div class=\\\"content\\\"><div class=\\\"listelement\\\">Angkor<\\\/div><div class=\\\"listelement\\\">Battambang<\\\/div><div class=\\\"listelement\\\">Bayon<\\\/div><div class=\\\"listelement\\\">Bokor<\\\/div><div class=\\\"listelement\\\">Chenla<\\\/div><div class=\\\"listelement\\\">Content<\\\/div><div class=\\\"listelement\\\">Dangrek<\\\/div><div class=\\\"listelement\\\">Freehand<\\\/div><div class=\\\"listelement\\\">Hanuman<\\\/div><div class=\\\"listelement\\\">Khmer<\\\/div><div class=\\\"listelement\\\">Koulen<\\\/div><div class=\\\"listelement\\\">Metal<\\\/div><div class=\\\"listelement\\\">Moul<\\\/div><div class=\\\"listelement\\\">Moulpali<\\\/div><div class=\\\"listelement\\\">Odor Mean Chey<\\\/div><div class=\\\"listelement\\\">Preahvihear<\\\/div><div class=\\\"listelement\\\">Siemreap<\\\/div><div class=\\\"listelement\\\">Suwannaphum<\\\/div><div class=\\\"listelement\\\">Taprom<\\\/div><\\\/div>\",\n        options: [{\"value\":\"Angkor\",\"text\":\"Angkor\"},{\"value\":\"Battambang\",\"text\":\"Battambang\"},{\"value\":\"Bayon\",\"text\":\"Bayon\"},{\"value\":\"Bokor\",\"text\":\"Bokor\"},{\"value\":\"Chenla\",\"text\":\"Chenla\"},{\"value\":\"Content\",\"text\":\"Content\"},{\"value\":\"Dangrek\",\"text\":\"Dangrek\"},{\"value\":\"Freehand\",\"text\":\"Freehand\"},{\"value\":\"Hanuman\",\"text\":\"Hanuman\"},{\"value\":\"Khmer\",\"text\":\"Khmer\"},{\"value\":\"Koulen\",\"text\":\"Koulen\"},{\"value\":\"Metal\",\"text\":\"Metal\"},{\"value\":\"Moul\",\"text\":\"Moul\"},{\"value\":\"Moulpali\",\"text\":\"Moulpali\"},{\"value\":\"Odor Mean Chey\",\"text\":\"Odor Mean Chey\"},{\"value\":\"Preahvihear\",\"text\":\"Preahvihear\"},{\"value\":\"Siemreap\",\"text\":\"Siemreap\"},{\"value\":\"Suwannaphum\",\"text\":\"Suwannaphum\"},{\"value\":\"Taprom\",\"text\":\"Taprom\"}],\n        selectedIndex: 0,\n        height: \"10\",\n        fireshow: 1\n      });\n    });"},"Latin":{"name":"params[captionfont]family","id":"paramscaptionfontfamily","html":"<div style='position:relative;'><div id=\"offlajnlistcontainerparamscaptionfontfamily\" class=\"gk_hack offlajnlistcontainer\"><div class=\"gk_hack offlajnlist\"><span class=\"offlajnlistcurrent\">Open Sans<br \/>Abel<br \/>Abril Fatface<br \/>Aclonica<br \/>Actor<br \/>Aldrich<br \/>Alice<br \/>Alike<br \/>Allan<br \/>Allerta<br \/>Allerta Stencil<br \/>Amaranth<br \/>Andika<br \/>Annie Use Your Telescope<br \/>Anonymous Pro<br \/>Antic<br \/>Anton<br \/>Architects Daughter<br \/>Arimo<br \/>Artifika<br \/>Arvo<br \/>Asap<br \/>Asul<br \/>Asset<br \/>Astloch<br \/>Aubrey<br \/>Bangers<br \/>Bentham<br \/>Bevan<br \/>Bigshot One<br \/>Black Ops One<br \/>Bowlby One<br \/>Bowlby One SC<br \/>Brawler<br \/>Buda<br \/>Cabin<br \/>Cabin Sketch<br \/>Calligraffitti<br \/>Candal<br \/>Cantarell<br \/>Cardo<br \/>Carme<br \/>Carter One<br \/>Caudex<br \/>Cedarville Cursive<br \/>Cherry Cream Soda<br \/>Chewy<br \/>Chivo<br \/>Coda<br \/>Coda Caption<br \/>Comfortaa<br \/>Coming Soon<br \/>Convergence<br \/>Copse<br \/>Corben<br \/>Cousine<br \/>Coustard<br \/>Covered By Your Grace<br \/>Crafty Girls<br \/>Crimson Text<br \/>Crushed<br \/>Cuprum<br \/>Damion<br \/>Dancing Script<br \/>Dawning of a New Day<br \/>Days One<br \/>Delius<br \/>Delius Swash Caps<br \/>Delius Unicase<br \/>Didact Gothic<br \/>Dorsa<br \/>Droid Sans<br \/>Droid Sans Mono<br \/>Droid Serif<br \/>EB Garamond<br \/>Exo<br \/>Expletus Sans<br \/>Fanwood Text<br \/>Federo<br \/>Fontdiner Swanky<br \/>Forum<br \/>Francois One<br \/>Gentium Basic<br \/>Gentium Book Basic<br \/>Geo<br \/>Geostar<br \/>Geostar Fill<br \/>Give You Glory<br \/>Gloria Hallelujah<br \/>Goblin One<br \/>Goudy Bookletter 1911<br \/>Gravitas One<br \/>Gruppo<br \/>Hammersmith One<br \/>Holtwood One SC<br \/>Homemade Apple<br \/>IM Fell DW Pica<br \/>IM Fell DW Pica SC<br \/>IM Fell Double Pica<br \/>IM Fell Double Pica SC<br \/>IM Fell English<br \/>IM Fell English SC<br \/>IM Fell French Canon<br \/>IM Fell French Canon SC<br \/>IM Fell Great Primer<br \/>IM Fell Great Primer SC<br \/>Inconsolata<br \/>Inder<br \/>Indie Flower<br \/>Irish Grover<br \/>Istok Web<br \/>Josefin Sans<br \/>Josefin Slab<br \/>Judson<br \/>Jura<br \/>Just Another Hand<br \/>Just Me Again Down Here<br \/>Kameron<br \/>Kelly Slab<br \/>Kenia<br \/>Kranky<br \/>Kreon<br \/>Kristi<br \/>La Belle Aurore<br \/>Lato<br \/>League Script<br \/>Leckerli One<br \/>Lekton<br \/>Limelight<br \/>Lobster<br \/>Lobster Two<br \/>Lora<br \/>Love Ya Like A Sister<br \/>Loved by the King<br \/>Luckiest Guy<br \/>Magra<br \/>Maiden Orange<br \/>Mako<br \/>Marvel<br \/>Maven Pro<br \/>Meddon<br \/>MedievalSharp<br \/>Megrim<br \/>Merriweather<br \/>Metrophobic<br \/>Michroma<br \/>Miltonian<br \/>Miltonian Tattoo<br \/>Modern Antiqua<br \/>Molengo<br \/>Monofett<br \/>Monoton<br \/>Montez<br \/>Mountains of Christmas<br \/>Muli<br \/>Neucha<br \/>Neuton<br \/>News Cycle<br \/>Nixie One<br \/>Nobile<br \/>Nothing You Could Do<br \/>Nova Cut<br \/>Nova Flat<br \/>Nova Mono<br \/>Nova Oval<br \/>Nova Round<br \/>Nova Script<br \/>Nova Slim<br \/>Nova Square<br \/>Numans<br \/>Nunito<br \/>OFL Sorts Mill Goudy TT<br \/>Old Standard TT<br \/>Open Sans<br \/>Open Sans Condensed<br \/>Orbitron<br \/>Oswald<br \/>Over the Rainbow<br \/>Ovo<br \/>PT Sans<br \/>PT Sans Caption<br \/>PT Sans Narrow<br \/>PT Serif<br \/>PT Serif Caption<br \/>Pacifico<br \/>Passero One<br \/>Patrick Hand<br \/>Paytone One<br \/>Permanent Marker<br \/>Philosopher<br \/>Play<br \/>Playfair Display<br \/>Podkova<br \/>Pompiere<br \/>Prociono<br \/>Puritan<br \/>Quattrocento<br \/>Quattrocento Sans<br \/>Questrial<br \/>Quicksand<br \/>Radley<br \/>Raleway<br \/>Rationale<br \/>Redressed<br \/>Reenie Beanie<br \/>Rochester<br \/>Rock Salt<br \/>Rokkitt<br \/>Ropa Sans<br \/>Rosario<br \/>Ruslan Display<br \/>Schoolbell<br \/>Shadows Into Light<br \/>Shanti<br \/>Short Stack<br \/>Sigmar One<br \/>Signika<br \/>Signika Negative<br \/>Six Caps<br \/>Slackey<br \/>Smokum<br \/>Smythe<br \/>Sniglet<br \/>Snippet<br \/>Special Elite<br \/>Stardos Stencil<br \/>Sue Ellen Francisco<br \/>Sunshiney<br \/>Swanky and Moo Moo<br \/>Syncopate<br \/>Tangerine<br \/>Telex<br \/>Tenor Sans<br \/>Terminal Dosis Light<br \/>The Girl Next Door<br \/>Tienne<br \/>Tinos<br \/>Tulpen One<br \/>Ubuntu<br \/>Ultra<br \/>UnifrakturCook<br \/>UnifrakturMaguntia<br \/>Unkempt<br \/>Unna<br \/>VT323<br \/>Varela<br \/>Varela Round<br \/>Vibur<br \/>Viga<br \/>Vidaloka<br \/>Volkhov<br \/>Vollkorn<br \/>Voltaire<br \/>Waiting for the Sunrise<br \/>Wallpoet<br \/>Walter Turncoat<br \/>Wire One<br \/>Yanone Kaffeesatz<br \/>Yellowtail<br \/>Yeseva One<br \/>Zeyada<br \/><\/span><div class=\"offlajnlistbtn\"><span><\/span><\/div><\/div><input type=\"hidden\" name=\"params[captionfont]family\" id=\"paramscaptionfontfamily\" value=\"Open Sans\"\/><\/div><\/div>","script":"dojo.addOnLoad(function(){\n      new OfflajnList({\n        name: \"paramscaptionfontfamily\",\n        elements: \"<div class=\\\"content\\\"><div class=\\\"listelement\\\">Abel<\\\/div><div class=\\\"listelement\\\">Abril Fatface<\\\/div><div class=\\\"listelement\\\">Aclonica<\\\/div><div class=\\\"listelement\\\">Actor<\\\/div><div class=\\\"listelement\\\">Aldrich<\\\/div><div class=\\\"listelement\\\">Alice<\\\/div><div class=\\\"listelement\\\">Alike<\\\/div><div class=\\\"listelement\\\">Allan<\\\/div><div class=\\\"listelement\\\">Allerta<\\\/div><div class=\\\"listelement\\\">Allerta Stencil<\\\/div><div class=\\\"listelement\\\">Amaranth<\\\/div><div class=\\\"listelement\\\">Andika<\\\/div><div class=\\\"listelement\\\">Annie Use Your Telescope<\\\/div><div class=\\\"listelement\\\">Anonymous Pro<\\\/div><div class=\\\"listelement\\\">Antic<\\\/div><div class=\\\"listelement\\\">Anton<\\\/div><div class=\\\"listelement\\\">Architects Daughter<\\\/div><div class=\\\"listelement\\\">Arimo<\\\/div><div class=\\\"listelement\\\">Artifika<\\\/div><div class=\\\"listelement\\\">Arvo<\\\/div><div class=\\\"listelement\\\">Asap<\\\/div><div class=\\\"listelement\\\">Asul<\\\/div><div class=\\\"listelement\\\">Asset<\\\/div><div class=\\\"listelement\\\">Astloch<\\\/div><div class=\\\"listelement\\\">Aubrey<\\\/div><div class=\\\"listelement\\\">Bangers<\\\/div><div class=\\\"listelement\\\">Bentham<\\\/div><div class=\\\"listelement\\\">Bevan<\\\/div><div class=\\\"listelement\\\">Bigshot One<\\\/div><div class=\\\"listelement\\\">Black Ops One<\\\/div><div class=\\\"listelement\\\">Bowlby One<\\\/div><div class=\\\"listelement\\\">Bowlby One SC<\\\/div><div class=\\\"listelement\\\">Brawler<\\\/div><div class=\\\"listelement\\\">Buda<\\\/div><div class=\\\"listelement\\\">Cabin<\\\/div><div class=\\\"listelement\\\">Cabin Sketch<\\\/div><div class=\\\"listelement\\\">Calligraffitti<\\\/div><div class=\\\"listelement\\\">Candal<\\\/div><div class=\\\"listelement\\\">Cantarell<\\\/div><div class=\\\"listelement\\\">Cardo<\\\/div><div class=\\\"listelement\\\">Carme<\\\/div><div class=\\\"listelement\\\">Carter One<\\\/div><div class=\\\"listelement\\\">Caudex<\\\/div><div class=\\\"listelement\\\">Cedarville Cursive<\\\/div><div class=\\\"listelement\\\">Cherry Cream Soda<\\\/div><div class=\\\"listelement\\\">Chewy<\\\/div><div class=\\\"listelement\\\">Chivo<\\\/div><div class=\\\"listelement\\\">Coda<\\\/div><div class=\\\"listelement\\\">Coda Caption<\\\/div><div class=\\\"listelement\\\">Comfortaa<\\\/div><div class=\\\"listelement\\\">Coming Soon<\\\/div><div class=\\\"listelement\\\">Convergence<\\\/div><div class=\\\"listelement\\\">Copse<\\\/div><div class=\\\"listelement\\\">Corben<\\\/div><div class=\\\"listelement\\\">Cousine<\\\/div><div class=\\\"listelement\\\">Coustard<\\\/div><div class=\\\"listelement\\\">Covered By Your Grace<\\\/div><div class=\\\"listelement\\\">Crafty Girls<\\\/div><div class=\\\"listelement\\\">Crimson Text<\\\/div><div class=\\\"listelement\\\">Crushed<\\\/div><div class=\\\"listelement\\\">Cuprum<\\\/div><div class=\\\"listelement\\\">Damion<\\\/div><div class=\\\"listelement\\\">Dancing Script<\\\/div><div class=\\\"listelement\\\">Dawning of a New Day<\\\/div><div class=\\\"listelement\\\">Days One<\\\/div><div class=\\\"listelement\\\">Delius<\\\/div><div class=\\\"listelement\\\">Delius Swash Caps<\\\/div><div class=\\\"listelement\\\">Delius Unicase<\\\/div><div class=\\\"listelement\\\">Didact Gothic<\\\/div><div class=\\\"listelement\\\">Dorsa<\\\/div><div class=\\\"listelement\\\">Droid Sans<\\\/div><div class=\\\"listelement\\\">Droid Sans Mono<\\\/div><div class=\\\"listelement\\\">Droid Serif<\\\/div><div class=\\\"listelement\\\">EB Garamond<\\\/div><div class=\\\"listelement\\\">Exo<\\\/div><div class=\\\"listelement\\\">Expletus Sans<\\\/div><div class=\\\"listelement\\\">Fanwood Text<\\\/div><div class=\\\"listelement\\\">Federo<\\\/div><div class=\\\"listelement\\\">Fontdiner Swanky<\\\/div><div class=\\\"listelement\\\">Forum<\\\/div><div class=\\\"listelement\\\">Francois One<\\\/div><div class=\\\"listelement\\\">Gentium Basic<\\\/div><div class=\\\"listelement\\\">Gentium Book Basic<\\\/div><div class=\\\"listelement\\\">Geo<\\\/div><div class=\\\"listelement\\\">Geostar<\\\/div><div class=\\\"listelement\\\">Geostar Fill<\\\/div><div class=\\\"listelement\\\">Give You Glory<\\\/div><div class=\\\"listelement\\\">Gloria Hallelujah<\\\/div><div class=\\\"listelement\\\">Goblin One<\\\/div><div class=\\\"listelement\\\">Goudy Bookletter 1911<\\\/div><div class=\\\"listelement\\\">Gravitas One<\\\/div><div class=\\\"listelement\\\">Gruppo<\\\/div><div class=\\\"listelement\\\">Hammersmith One<\\\/div><div class=\\\"listelement\\\">Holtwood One SC<\\\/div><div class=\\\"listelement\\\">Homemade Apple<\\\/div><div class=\\\"listelement\\\">IM Fell DW Pica<\\\/div><div class=\\\"listelement\\\">IM Fell DW Pica SC<\\\/div><div class=\\\"listelement\\\">IM Fell Double Pica<\\\/div><div class=\\\"listelement\\\">IM Fell Double Pica SC<\\\/div><div class=\\\"listelement\\\">IM Fell English<\\\/div><div class=\\\"listelement\\\">IM Fell English SC<\\\/div><div class=\\\"listelement\\\">IM Fell French Canon<\\\/div><div class=\\\"listelement\\\">IM Fell French Canon SC<\\\/div><div class=\\\"listelement\\\">IM Fell Great Primer<\\\/div><div class=\\\"listelement\\\">IM Fell Great Primer SC<\\\/div><div class=\\\"listelement\\\">Inconsolata<\\\/div><div class=\\\"listelement\\\">Inder<\\\/div><div class=\\\"listelement\\\">Indie Flower<\\\/div><div class=\\\"listelement\\\">Irish Grover<\\\/div><div class=\\\"listelement\\\">Istok Web<\\\/div><div class=\\\"listelement\\\">Josefin Sans<\\\/div><div class=\\\"listelement\\\">Josefin Slab<\\\/div><div class=\\\"listelement\\\">Judson<\\\/div><div class=\\\"listelement\\\">Jura<\\\/div><div class=\\\"listelement\\\">Just Another Hand<\\\/div><div class=\\\"listelement\\\">Just Me Again Down Here<\\\/div><div class=\\\"listelement\\\">Kameron<\\\/div><div class=\\\"listelement\\\">Kelly Slab<\\\/div><div class=\\\"listelement\\\">Kenia<\\\/div><div class=\\\"listelement\\\">Kranky<\\\/div><div class=\\\"listelement\\\">Kreon<\\\/div><div class=\\\"listelement\\\">Kristi<\\\/div><div class=\\\"listelement\\\">La Belle Aurore<\\\/div><div class=\\\"listelement\\\">Lato<\\\/div><div class=\\\"listelement\\\">League Script<\\\/div><div class=\\\"listelement\\\">Leckerli One<\\\/div><div class=\\\"listelement\\\">Lekton<\\\/div><div class=\\\"listelement\\\">Limelight<\\\/div><div class=\\\"listelement\\\">Lobster<\\\/div><div class=\\\"listelement\\\">Lobster Two<\\\/div><div class=\\\"listelement\\\">Lora<\\\/div><div class=\\\"listelement\\\">Love Ya Like A Sister<\\\/div><div class=\\\"listelement\\\">Loved by the King<\\\/div><div class=\\\"listelement\\\">Luckiest Guy<\\\/div><div class=\\\"listelement\\\">Magra<\\\/div><div class=\\\"listelement\\\">Maiden Orange<\\\/div><div class=\\\"listelement\\\">Mako<\\\/div><div class=\\\"listelement\\\">Marvel<\\\/div><div class=\\\"listelement\\\">Maven Pro<\\\/div><div class=\\\"listelement\\\">Meddon<\\\/div><div class=\\\"listelement\\\">MedievalSharp<\\\/div><div class=\\\"listelement\\\">Megrim<\\\/div><div class=\\\"listelement\\\">Merriweather<\\\/div><div class=\\\"listelement\\\">Metrophobic<\\\/div><div class=\\\"listelement\\\">Michroma<\\\/div><div class=\\\"listelement\\\">Miltonian<\\\/div><div class=\\\"listelement\\\">Miltonian Tattoo<\\\/div><div class=\\\"listelement\\\">Modern Antiqua<\\\/div><div class=\\\"listelement\\\">Molengo<\\\/div><div class=\\\"listelement\\\">Monofett<\\\/div><div class=\\\"listelement\\\">Monoton<\\\/div><div class=\\\"listelement\\\">Montez<\\\/div><div class=\\\"listelement\\\">Mountains of Christmas<\\\/div><div class=\\\"listelement\\\">Muli<\\\/div><div class=\\\"listelement\\\">Neucha<\\\/div><div class=\\\"listelement\\\">Neuton<\\\/div><div class=\\\"listelement\\\">News Cycle<\\\/div><div class=\\\"listelement\\\">Nixie One<\\\/div><div class=\\\"listelement\\\">Nobile<\\\/div><div class=\\\"listelement\\\">Nothing You Could Do<\\\/div><div class=\\\"listelement\\\">Nova Cut<\\\/div><div class=\\\"listelement\\\">Nova Flat<\\\/div><div class=\\\"listelement\\\">Nova Mono<\\\/div><div class=\\\"listelement\\\">Nova Oval<\\\/div><div class=\\\"listelement\\\">Nova Round<\\\/div><div class=\\\"listelement\\\">Nova Script<\\\/div><div class=\\\"listelement\\\">Nova Slim<\\\/div><div class=\\\"listelement\\\">Nova Square<\\\/div><div class=\\\"listelement\\\">Numans<\\\/div><div class=\\\"listelement\\\">Nunito<\\\/div><div class=\\\"listelement\\\">OFL Sorts Mill Goudy TT<\\\/div><div class=\\\"listelement\\\">Old Standard TT<\\\/div><div class=\\\"listelement\\\">Open Sans<\\\/div><div class=\\\"listelement\\\">Open Sans Condensed<\\\/div><div class=\\\"listelement\\\">Orbitron<\\\/div><div class=\\\"listelement\\\">Oswald<\\\/div><div class=\\\"listelement\\\">Over the Rainbow<\\\/div><div class=\\\"listelement\\\">Ovo<\\\/div><div class=\\\"listelement\\\">PT Sans<\\\/div><div class=\\\"listelement\\\">PT Sans Caption<\\\/div><div class=\\\"listelement\\\">PT Sans Narrow<\\\/div><div class=\\\"listelement\\\">PT Serif<\\\/div><div class=\\\"listelement\\\">PT Serif Caption<\\\/div><div class=\\\"listelement\\\">Pacifico<\\\/div><div class=\\\"listelement\\\">Passero One<\\\/div><div class=\\\"listelement\\\">Patrick Hand<\\\/div><div class=\\\"listelement\\\">Paytone One<\\\/div><div class=\\\"listelement\\\">Permanent Marker<\\\/div><div class=\\\"listelement\\\">Philosopher<\\\/div><div class=\\\"listelement\\\">Play<\\\/div><div class=\\\"listelement\\\">Playfair Display<\\\/div><div class=\\\"listelement\\\">Podkova<\\\/div><div class=\\\"listelement\\\">Pompiere<\\\/div><div class=\\\"listelement\\\">Prociono<\\\/div><div class=\\\"listelement\\\">Puritan<\\\/div><div class=\\\"listelement\\\">Quattrocento<\\\/div><div class=\\\"listelement\\\">Quattrocento Sans<\\\/div><div class=\\\"listelement\\\">Questrial<\\\/div><div class=\\\"listelement\\\">Quicksand<\\\/div><div class=\\\"listelement\\\">Radley<\\\/div><div class=\\\"listelement\\\">Raleway<\\\/div><div class=\\\"listelement\\\">Rationale<\\\/div><div class=\\\"listelement\\\">Redressed<\\\/div><div class=\\\"listelement\\\">Reenie Beanie<\\\/div><div class=\\\"listelement\\\">Rochester<\\\/div><div class=\\\"listelement\\\">Rock Salt<\\\/div><div class=\\\"listelement\\\">Rokkitt<\\\/div><div class=\\\"listelement\\\">Ropa Sans<\\\/div><div class=\\\"listelement\\\">Rosario<\\\/div><div class=\\\"listelement\\\">Ruslan Display<\\\/div><div class=\\\"listelement\\\">Schoolbell<\\\/div><div class=\\\"listelement\\\">Shadows Into Light<\\\/div><div class=\\\"listelement\\\">Shanti<\\\/div><div class=\\\"listelement\\\">Short Stack<\\\/div><div class=\\\"listelement\\\">Sigmar One<\\\/div><div class=\\\"listelement\\\">Signika<\\\/div><div class=\\\"listelement\\\">Signika Negative<\\\/div><div class=\\\"listelement\\\">Six Caps<\\\/div><div class=\\\"listelement\\\">Slackey<\\\/div><div class=\\\"listelement\\\">Smokum<\\\/div><div class=\\\"listelement\\\">Smythe<\\\/div><div class=\\\"listelement\\\">Sniglet<\\\/div><div class=\\\"listelement\\\">Snippet<\\\/div><div class=\\\"listelement\\\">Special Elite<\\\/div><div class=\\\"listelement\\\">Stardos Stencil<\\\/div><div class=\\\"listelement\\\">Sue Ellen Francisco<\\\/div><div class=\\\"listelement\\\">Sunshiney<\\\/div><div class=\\\"listelement\\\">Swanky and Moo Moo<\\\/div><div class=\\\"listelement\\\">Syncopate<\\\/div><div class=\\\"listelement\\\">Tangerine<\\\/div><div class=\\\"listelement\\\">Telex<\\\/div><div class=\\\"listelement\\\">Tenor Sans<\\\/div><div class=\\\"listelement\\\">Terminal Dosis Light<\\\/div><div class=\\\"listelement\\\">The Girl Next Door<\\\/div><div class=\\\"listelement\\\">Tienne<\\\/div><div class=\\\"listelement\\\">Tinos<\\\/div><div class=\\\"listelement\\\">Tulpen One<\\\/div><div class=\\\"listelement\\\">Ubuntu<\\\/div><div class=\\\"listelement\\\">Ultra<\\\/div><div class=\\\"listelement\\\">UnifrakturCook<\\\/div><div class=\\\"listelement\\\">UnifrakturMaguntia<\\\/div><div class=\\\"listelement\\\">Unkempt<\\\/div><div class=\\\"listelement\\\">Unna<\\\/div><div class=\\\"listelement\\\">VT323<\\\/div><div class=\\\"listelement\\\">Varela<\\\/div><div class=\\\"listelement\\\">Varela Round<\\\/div><div class=\\\"listelement\\\">Vibur<\\\/div><div class=\\\"listelement\\\">Viga<\\\/div><div class=\\\"listelement\\\">Vidaloka<\\\/div><div class=\\\"listelement\\\">Volkhov<\\\/div><div class=\\\"listelement\\\">Vollkorn<\\\/div><div class=\\\"listelement\\\">Voltaire<\\\/div><div class=\\\"listelement\\\">Waiting for the Sunrise<\\\/div><div class=\\\"listelement\\\">Wallpoet<\\\/div><div class=\\\"listelement\\\">Walter Turncoat<\\\/div><div class=\\\"listelement\\\">Wire One<\\\/div><div class=\\\"listelement\\\">Yanone Kaffeesatz<\\\/div><div class=\\\"listelement\\\">Yellowtail<\\\/div><div class=\\\"listelement\\\">Yeseva One<\\\/div><div class=\\\"listelement\\\">Zeyada<\\\/div><\\\/div>\",\n        options: [{\"value\":\"Abel\",\"text\":\"Abel\"},{\"value\":\"Abril Fatface\",\"text\":\"Abril Fatface\"},{\"value\":\"Aclonica\",\"text\":\"Aclonica\"},{\"value\":\"Actor\",\"text\":\"Actor\"},{\"value\":\"Aldrich\",\"text\":\"Aldrich\"},{\"value\":\"Alice\",\"text\":\"Alice\"},{\"value\":\"Alike\",\"text\":\"Alike\"},{\"value\":\"Allan\",\"text\":\"Allan\"},{\"value\":\"Allerta\",\"text\":\"Allerta\"},{\"value\":\"Allerta Stencil\",\"text\":\"Allerta Stencil\"},{\"value\":\"Amaranth\",\"text\":\"Amaranth\"},{\"value\":\"Andika\",\"text\":\"Andika\"},{\"value\":\"Annie Use Your Telescope\",\"text\":\"Annie Use Your Telescope\"},{\"value\":\"Anonymous Pro\",\"text\":\"Anonymous Pro\"},{\"value\":\"Antic\",\"text\":\"Antic\"},{\"value\":\"Anton\",\"text\":\"Anton\"},{\"value\":\"Architects Daughter\",\"text\":\"Architects Daughter\"},{\"value\":\"Arimo\",\"text\":\"Arimo\"},{\"value\":\"Artifika\",\"text\":\"Artifika\"},{\"value\":\"Arvo\",\"text\":\"Arvo\"},{\"value\":\"Asap\",\"text\":\"Asap\"},{\"value\":\"Asul\",\"text\":\"Asul\"},{\"value\":\"Asset\",\"text\":\"Asset\"},{\"value\":\"Astloch\",\"text\":\"Astloch\"},{\"value\":\"Aubrey\",\"text\":\"Aubrey\"},{\"value\":\"Bangers\",\"text\":\"Bangers\"},{\"value\":\"Bentham\",\"text\":\"Bentham\"},{\"value\":\"Bevan\",\"text\":\"Bevan\"},{\"value\":\"Bigshot One\",\"text\":\"Bigshot One\"},{\"value\":\"Black Ops One\",\"text\":\"Black Ops One\"},{\"value\":\"Bowlby One\",\"text\":\"Bowlby One\"},{\"value\":\"Bowlby One SC\",\"text\":\"Bowlby One SC\"},{\"value\":\"Brawler\",\"text\":\"Brawler\"},{\"value\":\"Buda\",\"text\":\"Buda\"},{\"value\":\"Cabin\",\"text\":\"Cabin\"},{\"value\":\"Cabin Sketch\",\"text\":\"Cabin Sketch\"},{\"value\":\"Calligraffitti\",\"text\":\"Calligraffitti\"},{\"value\":\"Candal\",\"text\":\"Candal\"},{\"value\":\"Cantarell\",\"text\":\"Cantarell\"},{\"value\":\"Cardo\",\"text\":\"Cardo\"},{\"value\":\"Carme\",\"text\":\"Carme\"},{\"value\":\"Carter One\",\"text\":\"Carter One\"},{\"value\":\"Caudex\",\"text\":\"Caudex\"},{\"value\":\"Cedarville Cursive\",\"text\":\"Cedarville Cursive\"},{\"value\":\"Cherry Cream Soda\",\"text\":\"Cherry Cream Soda\"},{\"value\":\"Chewy\",\"text\":\"Chewy\"},{\"value\":\"Chivo\",\"text\":\"Chivo\"},{\"value\":\"Coda\",\"text\":\"Coda\"},{\"value\":\"Coda Caption\",\"text\":\"Coda Caption\"},{\"value\":\"Comfortaa\",\"text\":\"Comfortaa\"},{\"value\":\"Coming Soon\",\"text\":\"Coming Soon\"},{\"value\":\"Convergence\",\"text\":\"Convergence\"},{\"value\":\"Copse\",\"text\":\"Copse\"},{\"value\":\"Corben\",\"text\":\"Corben\"},{\"value\":\"Cousine\",\"text\":\"Cousine\"},{\"value\":\"Coustard\",\"text\":\"Coustard\"},{\"value\":\"Covered By Your Grace\",\"text\":\"Covered By Your Grace\"},{\"value\":\"Crafty Girls\",\"text\":\"Crafty Girls\"},{\"value\":\"Crimson Text\",\"text\":\"Crimson Text\"},{\"value\":\"Crushed\",\"text\":\"Crushed\"},{\"value\":\"Cuprum\",\"text\":\"Cuprum\"},{\"value\":\"Damion\",\"text\":\"Damion\"},{\"value\":\"Dancing Script\",\"text\":\"Dancing Script\"},{\"value\":\"Dawning of a New Day\",\"text\":\"Dawning of a New Day\"},{\"value\":\"Days One\",\"text\":\"Days One\"},{\"value\":\"Delius\",\"text\":\"Delius\"},{\"value\":\"Delius Swash Caps\",\"text\":\"Delius Swash Caps\"},{\"value\":\"Delius Unicase\",\"text\":\"Delius Unicase\"},{\"value\":\"Didact Gothic\",\"text\":\"Didact Gothic\"},{\"value\":\"Dorsa\",\"text\":\"Dorsa\"},{\"value\":\"Droid Sans\",\"text\":\"Droid Sans\"},{\"value\":\"Droid Sans Mono\",\"text\":\"Droid Sans Mono\"},{\"value\":\"Droid Serif\",\"text\":\"Droid Serif\"},{\"value\":\"EB Garamond\",\"text\":\"EB Garamond\"},{\"value\":\"Exo\",\"text\":\"Exo\"},{\"value\":\"Expletus Sans\",\"text\":\"Expletus Sans\"},{\"value\":\"Fanwood Text\",\"text\":\"Fanwood Text\"},{\"value\":\"Federo\",\"text\":\"Federo\"},{\"value\":\"Fontdiner Swanky\",\"text\":\"Fontdiner Swanky\"},{\"value\":\"Forum\",\"text\":\"Forum\"},{\"value\":\"Francois One\",\"text\":\"Francois One\"},{\"value\":\"Gentium Basic\",\"text\":\"Gentium Basic\"},{\"value\":\"Gentium Book Basic\",\"text\":\"Gentium Book Basic\"},{\"value\":\"Geo\",\"text\":\"Geo\"},{\"value\":\"Geostar\",\"text\":\"Geostar\"},{\"value\":\"Geostar Fill\",\"text\":\"Geostar Fill\"},{\"value\":\"Give You Glory\",\"text\":\"Give You Glory\"},{\"value\":\"Gloria Hallelujah\",\"text\":\"Gloria Hallelujah\"},{\"value\":\"Goblin One\",\"text\":\"Goblin One\"},{\"value\":\"Goudy Bookletter 1911\",\"text\":\"Goudy Bookletter 1911\"},{\"value\":\"Gravitas One\",\"text\":\"Gravitas One\"},{\"value\":\"Gruppo\",\"text\":\"Gruppo\"},{\"value\":\"Hammersmith One\",\"text\":\"Hammersmith One\"},{\"value\":\"Holtwood One SC\",\"text\":\"Holtwood One SC\"},{\"value\":\"Homemade Apple\",\"text\":\"Homemade Apple\"},{\"value\":\"IM Fell DW Pica\",\"text\":\"IM Fell DW Pica\"},{\"value\":\"IM Fell DW Pica SC\",\"text\":\"IM Fell DW Pica SC\"},{\"value\":\"IM Fell Double Pica\",\"text\":\"IM Fell Double Pica\"},{\"value\":\"IM Fell Double Pica SC\",\"text\":\"IM Fell Double Pica SC\"},{\"value\":\"IM Fell English\",\"text\":\"IM Fell English\"},{\"value\":\"IM Fell English SC\",\"text\":\"IM Fell English SC\"},{\"value\":\"IM Fell French Canon\",\"text\":\"IM Fell French Canon\"},{\"value\":\"IM Fell French Canon SC\",\"text\":\"IM Fell French Canon SC\"},{\"value\":\"IM Fell Great Primer\",\"text\":\"IM Fell Great Primer\"},{\"value\":\"IM Fell Great Primer SC\",\"text\":\"IM Fell Great Primer SC\"},{\"value\":\"Inconsolata\",\"text\":\"Inconsolata\"},{\"value\":\"Inder\",\"text\":\"Inder\"},{\"value\":\"Indie Flower\",\"text\":\"Indie Flower\"},{\"value\":\"Irish Grover\",\"text\":\"Irish Grover\"},{\"value\":\"Istok Web\",\"text\":\"Istok Web\"},{\"value\":\"Josefin Sans\",\"text\":\"Josefin Sans\"},{\"value\":\"Josefin Slab\",\"text\":\"Josefin Slab\"},{\"value\":\"Judson\",\"text\":\"Judson\"},{\"value\":\"Jura\",\"text\":\"Jura\"},{\"value\":\"Just Another Hand\",\"text\":\"Just Another Hand\"},{\"value\":\"Just Me Again Down Here\",\"text\":\"Just Me Again Down Here\"},{\"value\":\"Kameron\",\"text\":\"Kameron\"},{\"value\":\"Kelly Slab\",\"text\":\"Kelly Slab\"},{\"value\":\"Kenia\",\"text\":\"Kenia\"},{\"value\":\"Kranky\",\"text\":\"Kranky\"},{\"value\":\"Kreon\",\"text\":\"Kreon\"},{\"value\":\"Kristi\",\"text\":\"Kristi\"},{\"value\":\"La Belle Aurore\",\"text\":\"La Belle Aurore\"},{\"value\":\"Lato\",\"text\":\"Lato\"},{\"value\":\"League Script\",\"text\":\"League Script\"},{\"value\":\"Leckerli One\",\"text\":\"Leckerli One\"},{\"value\":\"Lekton\",\"text\":\"Lekton\"},{\"value\":\"Limelight\",\"text\":\"Limelight\"},{\"value\":\"Lobster\",\"text\":\"Lobster\"},{\"value\":\"Lobster Two\",\"text\":\"Lobster Two\"},{\"value\":\"Lora\",\"text\":\"Lora\"},{\"value\":\"Love Ya Like A Sister\",\"text\":\"Love Ya Like A Sister\"},{\"value\":\"Loved by the King\",\"text\":\"Loved by the King\"},{\"value\":\"Luckiest Guy\",\"text\":\"Luckiest Guy\"},{\"value\":\"Magra\",\"text\":\"Magra\"},{\"value\":\"Maiden Orange\",\"text\":\"Maiden Orange\"},{\"value\":\"Mako\",\"text\":\"Mako\"},{\"value\":\"Marvel\",\"text\":\"Marvel\"},{\"value\":\"Maven Pro\",\"text\":\"Maven Pro\"},{\"value\":\"Meddon\",\"text\":\"Meddon\"},{\"value\":\"MedievalSharp\",\"text\":\"MedievalSharp\"},{\"value\":\"Megrim\",\"text\":\"Megrim\"},{\"value\":\"Merriweather\",\"text\":\"Merriweather\"},{\"value\":\"Metrophobic\",\"text\":\"Metrophobic\"},{\"value\":\"Michroma\",\"text\":\"Michroma\"},{\"value\":\"Miltonian\",\"text\":\"Miltonian\"},{\"value\":\"Miltonian Tattoo\",\"text\":\"Miltonian Tattoo\"},{\"value\":\"Modern Antiqua\",\"text\":\"Modern Antiqua\"},{\"value\":\"Molengo\",\"text\":\"Molengo\"},{\"value\":\"Monofett\",\"text\":\"Monofett\"},{\"value\":\"Monoton\",\"text\":\"Monoton\"},{\"value\":\"Montez\",\"text\":\"Montez\"},{\"value\":\"Mountains of Christmas\",\"text\":\"Mountains of Christmas\"},{\"value\":\"Muli\",\"text\":\"Muli\"},{\"value\":\"Neucha\",\"text\":\"Neucha\"},{\"value\":\"Neuton\",\"text\":\"Neuton\"},{\"value\":\"News Cycle\",\"text\":\"News Cycle\"},{\"value\":\"Nixie One\",\"text\":\"Nixie One\"},{\"value\":\"Nobile\",\"text\":\"Nobile\"},{\"value\":\"Nothing You Could Do\",\"text\":\"Nothing You Could Do\"},{\"value\":\"Nova Cut\",\"text\":\"Nova Cut\"},{\"value\":\"Nova Flat\",\"text\":\"Nova Flat\"},{\"value\":\"Nova Mono\",\"text\":\"Nova Mono\"},{\"value\":\"Nova Oval\",\"text\":\"Nova Oval\"},{\"value\":\"Nova Round\",\"text\":\"Nova Round\"},{\"value\":\"Nova Script\",\"text\":\"Nova Script\"},{\"value\":\"Nova Slim\",\"text\":\"Nova Slim\"},{\"value\":\"Nova Square\",\"text\":\"Nova Square\"},{\"value\":\"Numans\",\"text\":\"Numans\"},{\"value\":\"Nunito\",\"text\":\"Nunito\"},{\"value\":\"OFL Sorts Mill Goudy TT\",\"text\":\"OFL Sorts Mill Goudy TT\"},{\"value\":\"Old Standard TT\",\"text\":\"Old Standard TT\"},{\"value\":\"Open Sans\",\"text\":\"Open Sans\"},{\"value\":\"Open Sans Condensed\",\"text\":\"Open Sans Condensed\"},{\"value\":\"Orbitron\",\"text\":\"Orbitron\"},{\"value\":\"Oswald\",\"text\":\"Oswald\"},{\"value\":\"Over the Rainbow\",\"text\":\"Over the Rainbow\"},{\"value\":\"Ovo\",\"text\":\"Ovo\"},{\"value\":\"PT Sans\",\"text\":\"PT Sans\"},{\"value\":\"PT Sans Caption\",\"text\":\"PT Sans Caption\"},{\"value\":\"PT Sans Narrow\",\"text\":\"PT Sans Narrow\"},{\"value\":\"PT Serif\",\"text\":\"PT Serif\"},{\"value\":\"PT Serif Caption\",\"text\":\"PT Serif Caption\"},{\"value\":\"Pacifico\",\"text\":\"Pacifico\"},{\"value\":\"Passero One\",\"text\":\"Passero One\"},{\"value\":\"Patrick Hand\",\"text\":\"Patrick Hand\"},{\"value\":\"Paytone One\",\"text\":\"Paytone One\"},{\"value\":\"Permanent Marker\",\"text\":\"Permanent Marker\"},{\"value\":\"Philosopher\",\"text\":\"Philosopher\"},{\"value\":\"Play\",\"text\":\"Play\"},{\"value\":\"Playfair Display\",\"text\":\"Playfair Display\"},{\"value\":\"Podkova\",\"text\":\"Podkova\"},{\"value\":\"Pompiere\",\"text\":\"Pompiere\"},{\"value\":\"Prociono\",\"text\":\"Prociono\"},{\"value\":\"Puritan\",\"text\":\"Puritan\"},{\"value\":\"Quattrocento\",\"text\":\"Quattrocento\"},{\"value\":\"Quattrocento Sans\",\"text\":\"Quattrocento Sans\"},{\"value\":\"Questrial\",\"text\":\"Questrial\"},{\"value\":\"Quicksand\",\"text\":\"Quicksand\"},{\"value\":\"Radley\",\"text\":\"Radley\"},{\"value\":\"Raleway\",\"text\":\"Raleway\"},{\"value\":\"Rationale\",\"text\":\"Rationale\"},{\"value\":\"Redressed\",\"text\":\"Redressed\"},{\"value\":\"Reenie Beanie\",\"text\":\"Reenie Beanie\"},{\"value\":\"Rochester\",\"text\":\"Rochester\"},{\"value\":\"Rock Salt\",\"text\":\"Rock Salt\"},{\"value\":\"Rokkitt\",\"text\":\"Rokkitt\"},{\"value\":\"Ropa Sans\",\"text\":\"Ropa Sans\"},{\"value\":\"Rosario\",\"text\":\"Rosario\"},{\"value\":\"Ruslan Display\",\"text\":\"Ruslan Display\"},{\"value\":\"Schoolbell\",\"text\":\"Schoolbell\"},{\"value\":\"Shadows Into Light\",\"text\":\"Shadows Into Light\"},{\"value\":\"Shanti\",\"text\":\"Shanti\"},{\"value\":\"Short Stack\",\"text\":\"Short Stack\"},{\"value\":\"Sigmar One\",\"text\":\"Sigmar One\"},{\"value\":\"Signika\",\"text\":\"Signika\"},{\"value\":\"Signika Negative\",\"text\":\"Signika Negative\"},{\"value\":\"Six Caps\",\"text\":\"Six Caps\"},{\"value\":\"Slackey\",\"text\":\"Slackey\"},{\"value\":\"Smokum\",\"text\":\"Smokum\"},{\"value\":\"Smythe\",\"text\":\"Smythe\"},{\"value\":\"Sniglet\",\"text\":\"Sniglet\"},{\"value\":\"Snippet\",\"text\":\"Snippet\"},{\"value\":\"Special Elite\",\"text\":\"Special Elite\"},{\"value\":\"Stardos Stencil\",\"text\":\"Stardos Stencil\"},{\"value\":\"Sue Ellen Francisco\",\"text\":\"Sue Ellen Francisco\"},{\"value\":\"Sunshiney\",\"text\":\"Sunshiney\"},{\"value\":\"Swanky and Moo Moo\",\"text\":\"Swanky and Moo Moo\"},{\"value\":\"Syncopate\",\"text\":\"Syncopate\"},{\"value\":\"Tangerine\",\"text\":\"Tangerine\"},{\"value\":\"Telex\",\"text\":\"Telex\"},{\"value\":\"Tenor Sans\",\"text\":\"Tenor Sans\"},{\"value\":\"Terminal Dosis Light\",\"text\":\"Terminal Dosis Light\"},{\"value\":\"The Girl Next Door\",\"text\":\"The Girl Next Door\"},{\"value\":\"Tienne\",\"text\":\"Tienne\"},{\"value\":\"Tinos\",\"text\":\"Tinos\"},{\"value\":\"Tulpen One\",\"text\":\"Tulpen One\"},{\"value\":\"Ubuntu\",\"text\":\"Ubuntu\"},{\"value\":\"Ultra\",\"text\":\"Ultra\"},{\"value\":\"UnifrakturCook\",\"text\":\"UnifrakturCook\"},{\"value\":\"UnifrakturMaguntia\",\"text\":\"UnifrakturMaguntia\"},{\"value\":\"Unkempt\",\"text\":\"Unkempt\"},{\"value\":\"Unna\",\"text\":\"Unna\"},{\"value\":\"VT323\",\"text\":\"VT323\"},{\"value\":\"Varela\",\"text\":\"Varela\"},{\"value\":\"Varela Round\",\"text\":\"Varela Round\"},{\"value\":\"Vibur\",\"text\":\"Vibur\"},{\"value\":\"Viga\",\"text\":\"Viga\"},{\"value\":\"Vidaloka\",\"text\":\"Vidaloka\"},{\"value\":\"Volkhov\",\"text\":\"Volkhov\"},{\"value\":\"Vollkorn\",\"text\":\"Vollkorn\"},{\"value\":\"Voltaire\",\"text\":\"Voltaire\"},{\"value\":\"Waiting for the Sunrise\",\"text\":\"Waiting for the Sunrise\"},{\"value\":\"Wallpoet\",\"text\":\"Wallpoet\"},{\"value\":\"Walter Turncoat\",\"text\":\"Walter Turncoat\"},{\"value\":\"Wire One\",\"text\":\"Wire One\"},{\"value\":\"Yanone Kaffeesatz\",\"text\":\"Yanone Kaffeesatz\"},{\"value\":\"Yellowtail\",\"text\":\"Yellowtail\"},{\"value\":\"Yeseva One\",\"text\":\"Yeseva One\"},{\"value\":\"Zeyada\",\"text\":\"Zeyada\"}],\n        selectedIndex: 172,\n        height: \"10\",\n        fireshow: 1\n      });\n    });"},"LatinExtended":{"name":"params[captionfont]family","id":"paramscaptionfontfamily","html":"<div style='position:relative;'><div id=\"offlajnlistcontainerparamscaptionfontfamily\" class=\"gk_hack offlajnlistcontainer\"><div class=\"gk_hack offlajnlist\"><span class=\"offlajnlistcurrent\">Open Sans<br \/>Andika<br \/>Anonymous Pro<br \/>Anton<br \/>Caudex<br \/>Didact Gothic<br \/>EB Garamond<br \/>Forum<br \/>Francois One<br \/>Gentium Basic<br \/>Gentium Book Basic<br \/>Istok Web<br \/>Jura<br \/>Kelly Slab<br \/>Lobster<br \/>MedievalSharp<br \/>Modern Antiqua<br \/>Neuton<br \/>Open Sans<br \/>Open Sans Condensed<br \/>Patrick Hand<br \/>Play<br \/>Ruslan Display<br \/>Tenor Sans<br \/>Ubuntu<br \/>Varela<br \/><\/span><div class=\"offlajnlistbtn\"><span><\/span><\/div><\/div><input type=\"hidden\" name=\"params[captionfont]family\" id=\"paramscaptionfontfamily\" value=\"Open Sans\"\/><\/div><\/div>","script":"dojo.addOnLoad(function(){\n      new OfflajnList({\n        name: \"paramscaptionfontfamily\",\n        elements: \"<div class=\\\"content\\\"><div class=\\\"listelement\\\">Andika<\\\/div><div class=\\\"listelement\\\">Anonymous Pro<\\\/div><div class=\\\"listelement\\\">Anton<\\\/div><div class=\\\"listelement\\\">Caudex<\\\/div><div class=\\\"listelement\\\">Didact Gothic<\\\/div><div class=\\\"listelement\\\">EB Garamond<\\\/div><div class=\\\"listelement\\\">Forum<\\\/div><div class=\\\"listelement\\\">Francois One<\\\/div><div class=\\\"listelement\\\">Gentium Basic<\\\/div><div class=\\\"listelement\\\">Gentium Book Basic<\\\/div><div class=\\\"listelement\\\">Istok Web<\\\/div><div class=\\\"listelement\\\">Jura<\\\/div><div class=\\\"listelement\\\">Kelly Slab<\\\/div><div class=\\\"listelement\\\">Lobster<\\\/div><div class=\\\"listelement\\\">MedievalSharp<\\\/div><div class=\\\"listelement\\\">Modern Antiqua<\\\/div><div class=\\\"listelement\\\">Neuton<\\\/div><div class=\\\"listelement\\\">Open Sans<\\\/div><div class=\\\"listelement\\\">Open Sans Condensed<\\\/div><div class=\\\"listelement\\\">Patrick Hand<\\\/div><div class=\\\"listelement\\\">Play<\\\/div><div class=\\\"listelement\\\">Ruslan Display<\\\/div><div class=\\\"listelement\\\">Tenor Sans<\\\/div><div class=\\\"listelement\\\">Ubuntu<\\\/div><div class=\\\"listelement\\\">Varela<\\\/div><\\\/div>\",\n        options: [{\"value\":\"Andika\",\"text\":\"Andika\"},{\"value\":\"Anonymous Pro\",\"text\":\"Anonymous Pro\"},{\"value\":\"Anton\",\"text\":\"Anton\"},{\"value\":\"Caudex\",\"text\":\"Caudex\"},{\"value\":\"Didact Gothic\",\"text\":\"Didact Gothic\"},{\"value\":\"EB Garamond\",\"text\":\"EB Garamond\"},{\"value\":\"Forum\",\"text\":\"Forum\"},{\"value\":\"Francois One\",\"text\":\"Francois One\"},{\"value\":\"Gentium Basic\",\"text\":\"Gentium Basic\"},{\"value\":\"Gentium Book Basic\",\"text\":\"Gentium Book Basic\"},{\"value\":\"Istok Web\",\"text\":\"Istok Web\"},{\"value\":\"Jura\",\"text\":\"Jura\"},{\"value\":\"Kelly Slab\",\"text\":\"Kelly Slab\"},{\"value\":\"Lobster\",\"text\":\"Lobster\"},{\"value\":\"MedievalSharp\",\"text\":\"MedievalSharp\"},{\"value\":\"Modern Antiqua\",\"text\":\"Modern Antiqua\"},{\"value\":\"Neuton\",\"text\":\"Neuton\"},{\"value\":\"Open Sans\",\"text\":\"Open Sans\"},{\"value\":\"Open Sans Condensed\",\"text\":\"Open Sans Condensed\"},{\"value\":\"Patrick Hand\",\"text\":\"Patrick Hand\"},{\"value\":\"Play\",\"text\":\"Play\"},{\"value\":\"Ruslan Display\",\"text\":\"Ruslan Display\"},{\"value\":\"Tenor Sans\",\"text\":\"Tenor Sans\"},{\"value\":\"Ubuntu\",\"text\":\"Ubuntu\"},{\"value\":\"Varela\",\"text\":\"Varela\"}],\n        selectedIndex: 17,\n        height: \"10\",\n        fireshow: 1\n      });\n    });"},"Vietnamese":{"name":"params[captionfont]family","id":"paramscaptionfontfamily","html":"<div style='position:relative;'><div id=\"offlajnlistcontainerparamscaptionfontfamily\" class=\"gk_hack offlajnlistcontainer\"><div class=\"gk_hack offlajnlist\"><span class=\"offlajnlistcurrent\">Open Sans<br \/>EB Garamond<br \/>Open Sans<br \/>Open Sans Condensed<br \/><\/span><div class=\"offlajnlistbtn\"><span><\/span><\/div><\/div><input type=\"hidden\" name=\"params[captionfont]family\" id=\"paramscaptionfontfamily\" value=\"Open Sans\"\/><\/div><\/div>","script":"dojo.addOnLoad(function(){\n      new OfflajnList({\n        name: \"paramscaptionfontfamily\",\n        elements: \"<div class=\\\"content\\\"><div class=\\\"listelement\\\">EB Garamond<\\\/div><div class=\\\"listelement\\\">Open Sans<\\\/div><div class=\\\"listelement\\\">Open Sans Condensed<\\\/div><\\\/div>\",\n        options: [{\"value\":\"EB Garamond\",\"text\":\"EB Garamond\"},{\"value\":\"Open Sans\",\"text\":\"Open Sans\"},{\"value\":\"Open Sans Condensed\",\"text\":\"Open Sans Condensed\"}],\n        selectedIndex: 1,\n        height: \"10\",\n        fireshow: 1\n      });\n    });"},"html":"<div style='position:relative;'><div id=\"offlajnlistcontainerparamscaptionfonttype\" class=\"gk_hack offlajnlistcontainer\"><div class=\"gk_hack offlajnlist\"><span class=\"offlajnlistcurrent\">Alternative fonts<br \/>Alternative fonts<br \/>Cyrillic<br \/>CyrillicExtended<br \/>Greek<br \/>GreekExtended<br \/>Khmer<br \/>Latin<br \/>LatinExtended<br \/>Vietnamese<br \/><\/span><div class=\"offlajnlistbtn\"><span><\/span><\/div><\/div><input type=\"hidden\" name=\"params[captionfont]type\" id=\"paramscaptionfonttype\" value=\"0\"\/><\/div><\/div>"},"size":{"name":"params[captionfont]size","id":"paramscaptionfontsize","html":"<div class=\"offlajntextcontainer\" id=\"offlajntextcontainerparamscaptionfontsize\"><input  size=\"1\" class=\"offlajntext\" type=\"text\" id=\"paramscaptionfontsizeinput\" value=\"14\"><div class=\"offlajntext_increment\">\n                <div class=\"offlajntext_increment_up arrow\"><\/div>\n                <div class=\"offlajntext_increment_down arrow\"><\/div>\n      <\/div><\/div><div class=\"offlajnswitcher\">\r\n            <div class=\"offlajnswitcher_inner\" id=\"offlajnswitcher_innerparamscaptionfontsizeunit\"><\/div>\r\n    <\/div><input type=\"hidden\" name=\"params[captionfont]size[unit]\" id=\"paramscaptionfontsizeunit\" value=\"px\" \/><input type=\"hidden\" name=\"params[captionfont]size\" id=\"paramscaptionfontsize\" value=\"14||px\">"},"color":{"name":"params[captionfont]color","id":"paramscaptionfontcolor","html":"<div class=\"offlajncolor\"><input type=\"text\" name=\"params[captionfont]color\" id=\"paramscaptionfontcolor\" value=\"000000\" class=\"color wa\" size=\"12\" \/><\/div>"},"bold":{"name":"params[captionfont]bold","id":"paramscaptionfontbold","html":"<div id=\"offlajnonoffparamscaptionfontbold\" class=\"gk_hack onoffbutton\">\n                <div class=\"gk_hack onoffbutton_img\" style=\"background-image: url(http:\/\/localhost\/thepdahoi.vn\/wp-content\/plugins\/nextend-smart-slider-lite\/includes\/modules\/mod_smartslider\/params\/offlajnonoff\/images\/bold.png);\"><\/div>\n      <\/div><input type=\"hidden\" name=\"params[captionfont]bold\" id=\"paramscaptionfontbold\" value=\"0\" \/>"},"italic":{"name":"params[captionfont]italic","id":"paramscaptionfontitalic","html":"<div id=\"offlajnonoffparamscaptionfontitalic\" class=\"gk_hack onoffbutton\">\n                <div class=\"gk_hack onoffbutton_img\" style=\"background-image: url(http:\/\/localhost\/thepdahoi.vn\/wp-content\/plugins\/nextend-smart-slider-lite\/includes\/modules\/mod_smartslider\/params\/offlajnonoff\/images\/italic.png);\"><\/div>\n      <\/div><input type=\"hidden\" name=\"params[captionfont]italic\" id=\"paramscaptionfontitalic\" value=\"0\" \/>"},"underline":{"name":"params[captionfont]underline","id":"paramscaptionfontunderline","html":"<div id=\"offlajnonoffparamscaptionfontunderline\" class=\"gk_hack onoffbutton\">\n                <div class=\"gk_hack onoffbutton_img\" style=\"background-image: url(http:\/\/localhost\/thepdahoi.vn\/wp-content\/plugins\/nextend-smart-slider-lite\/includes\/modules\/mod_smartslider\/params\/offlajnonoff\/images\/underline.png);\"><\/div>\n      <\/div><input type=\"hidden\" name=\"params[captionfont]underline\" id=\"paramscaptionfontunderline\" value=\"0\" \/>"},"align":{"name":"params[captionfont]align","id":"paramscaptionfontalign","html":"<div class=\"offlajnradiocontainerimage\" id=\"offlajnradiocontainerparamscaptionfontalign\"><div class=\"radioelement first selected\"><div class=\"radioelement_img\" style=\"background-image: url(http:\/\/localhost\/thepdahoi.vn\/wp-content\/plugins\/nextend-smart-slider-lite\/includes\/modules\/mod_smartslider\/params\/offlajnradio\/images\/left_align.png);\"><\/div><\/div><div class=\"radioelement \"><div class=\"radioelement_img\" style=\"background-image: url(http:\/\/localhost\/thepdahoi.vn\/wp-content\/plugins\/nextend-smart-slider-lite\/includes\/modules\/mod_smartslider\/params\/offlajnradio\/images\/center_align.png);\"><\/div><\/div><div class=\"radioelement  last\"><div class=\"radioelement_img\" style=\"background-image: url(http:\/\/localhost\/thepdahoi.vn\/wp-content\/plugins\/nextend-smart-slider-lite\/includes\/modules\/mod_smartslider\/params\/offlajnradio\/images\/right_align.png);\"><\/div><\/div><div class=\"clear\"><\/div><\/div><input type=\"hidden\" id=\"paramscaptionfontalign\" name=\"params[captionfont]align\" value=\"left\"\/>"},"afont":{"name":"params[captionfont]afont","id":"paramscaptionfontafont","html":"<div class=\"offlajntextcontainer\" id=\"offlajntextcontainerparamscaptionfontafont\"><input  size=\"10\" class=\"offlajntext\" type=\"text\" id=\"paramscaptionfontafontinput\" value=\"Arial\"><\/div><div class=\"offlajnswitcher\">\r\n            <div class=\"offlajnswitcher_inner\" id=\"offlajnswitcher_innerparamscaptionfontafontunit\"><\/div>\r\n    <\/div><input type=\"hidden\" name=\"params[captionfont]afont[unit]\" id=\"paramscaptionfontafontunit\" value=\"1\" \/><input type=\"hidden\" name=\"params[captionfont]afont\" id=\"paramscaptionfontafont\" value=\"Arial||1\">"},"tshadow":{"name":"params[captionfont]tshadow","id":"paramscaptionfonttshadow","html":"<div id=\"offlajncombine_outerparamscaptionfonttshadow\" class=\"offlajncombine_outer\"><div class=\"offlajncombinefieldcontainer\"><div class=\"offlajncombinefield\"><div class=\"offlajntextcontainer\" id=\"offlajntextcontainerparamscaptionfonttshadow0\"><input  size=\"1\" class=\"offlajntext\" type=\"text\" id=\"paramscaptionfonttshadow0input\" value=\"0\"><div class=\"unit\">px<\/div><\/div><input type=\"hidden\" name=\"params[captionfont]tshadow0\" id=\"paramscaptionfonttshadow0\" value=\"0\"><\/div><\/div><div class=\"offlajncombinefieldcontainer\"><div class=\"offlajncombinefield\"><div class=\"offlajntextcontainer\" id=\"offlajntextcontainerparamscaptionfonttshadow1\"><input  size=\"1\" class=\"offlajntext\" type=\"text\" id=\"paramscaptionfonttshadow1input\" value=\"0\"><div class=\"unit\">px<\/div><\/div><input type=\"hidden\" name=\"params[captionfont]tshadow1\" id=\"paramscaptionfonttshadow1\" value=\"0\"><\/div><\/div><div class=\"offlajncombinefieldcontainer\"><div class=\"offlajncombinefield\"><div class=\"offlajntextcontainer\" id=\"offlajntextcontainerparamscaptionfonttshadow2\"><input  size=\"1\" class=\"offlajntext\" type=\"text\" id=\"paramscaptionfonttshadow2input\" value=\"0\"><div class=\"unit\">px<\/div><\/div><input type=\"hidden\" name=\"params[captionfont]tshadow2\" id=\"paramscaptionfonttshadow2\" value=\"0\"><\/div><\/div><div class=\"offlajncombinefieldcontainer\"><div class=\"offlajncombinefield\"><div class=\"offlajncolor\"><input type=\"text\" name=\"params[captionfont]tshadow3\" id=\"paramscaptionfonttshadow3\" value=\"000000\" class=\"color wa\" size=\"12\" \/><\/div><\/div><\/div><div class=\"offlajncombinefieldcontainer\"><div class=\"offlajncombinefield\"><div class=\"offlajnswitcher\">\r\n            <div class=\"offlajnswitcher_inner\" id=\"offlajnswitcher_innerparamscaptionfonttshadow4\"><\/div>\r\n    <\/div><input type=\"hidden\" name=\"params[captionfont]tshadow4\" id=\"paramscaptionfonttshadow4\" value=\"0\" \/><\/div><\/div><div class=\"offlajncombine_hider\"><\/div><\/div><input type=\"hidden\" name=\"params[captionfont]tshadow\" id=\"paramscaptionfonttshadow\" value='0|*|0|*|0|*|000000|*|0'>"},"lineheight":{"name":"params[captionfont]lineheight","id":"paramscaptionfontlineheight","html":"<div class=\"offlajntextcontainer\" id=\"offlajntextcontainerparamscaptionfontlineheight\"><input  size=\"5\" class=\"offlajntext\" type=\"text\" id=\"paramscaptionfontlineheightinput\" value=\"normal\"><\/div><input type=\"hidden\" name=\"params[captionfont]lineheight\" id=\"paramscaptionfontlineheight\" value=\"normal\">"}},
          script: "dojo.addOnLoad(function(){\r\n      new OfflajnRadio({\r\n        id: \"paramscaptionfonttab\",\r\n        values: [\"Tag\",\"Title\",\"Paragraph\",\"Link\"],\r\n        map: {\"Tag\":0,\"Title\":1,\"Paragraph\":2,\"Link\":3},\r\n        mode: \"\"\r\n      });\r\n    \n      new OfflajnList({\n        name: \"paramscaptionfonttype\",\n        elements: \"<div class=\\\"content\\\"><div class=\\\"listelement\\\">Alternative fonts<\\\/div><div class=\\\"listelement\\\">Cyrillic<\\\/div><div class=\\\"listelement\\\">CyrillicExtended<\\\/div><div class=\\\"listelement\\\">Greek<\\\/div><div class=\\\"listelement\\\">GreekExtended<\\\/div><div class=\\\"listelement\\\">Khmer<\\\/div><div class=\\\"listelement\\\">Latin<\\\/div><div class=\\\"listelement\\\">LatinExtended<\\\/div><div class=\\\"listelement\\\">Vietnamese<\\\/div><\\\/div>\",\n        options: [{\"value\":\"0\",\"text\":\"Alternative fonts\"},{\"value\":\"Cyrillic\",\"text\":\"Cyrillic\"},{\"value\":\"CyrillicExtended\",\"text\":\"CyrillicExtended\"},{\"value\":\"Greek\",\"text\":\"Greek\"},{\"value\":\"GreekExtended\",\"text\":\"GreekExtended\"},{\"value\":\"Khmer\",\"text\":\"Khmer\"},{\"value\":\"Latin\",\"text\":\"Latin\"},{\"value\":\"LatinExtended\",\"text\":\"LatinExtended\"},{\"value\":\"Vietnamese\",\"text\":\"Vietnamese\"}],\n        selectedIndex: 0,\n        height: 0,\n        fireshow: 0\n      });\n    dojo.addOnLoad(function(){ \r\n      new OfflajnSwitcher({\r\n        id: \"paramscaptionfontsizeunit\",\r\n        units: [\"px\",\"em\"],\r\n        values: [\"px\",\"em\"],\r\n        map: {\"px\":0,\"em\":1},\r\n        mode: 0,\r\n        url: \"http:\\\/\\\/localhost\\\/thepdahoi.vn\\\/wp-admin\\\/..\\\/modules\\\/mod_smartslider\\\/params\\\/offlajnswitcher\\\/images\\\/\"\r\n      }); \r\n    });\n      new OfflajnText({\n        id: \"paramscaptionfontsize\",\n        validation: \"int\",\n        attachunit: \"\",\n        mode: \"increment\",\n        scale: \"1\",\n        minus: 0,\n        onoff: \"\"\n      }); \n    \n    var el = dojo.byId(\"paramscaptionfontcolor\");\n    jQuery.fn.jPicker.defaults.images.clientPath=\"http:\/\/localhost\/thepdahoi.vn\/wp-content\/plugins\/nextend-smart-slider-lite\/joomla\/\/modules\/mod_smartslider\/params\/offlajndashboard\/..\/offlajncolor\/offlajncolor\/jpicker\/images\/\";\n    el.alphaSupport=false; \n    el.c = jQuery(\"#paramscaptionfontcolor\").jPicker({\n        window:{\n          expandable: true,\n          alphaSupport: false}\n        });\n    dojo.connect(el, \"change\", function(){\n      this.c[0].color.active.val(\"hex\", this.value);\n    });\n    \n      new OfflajnOnOff({\n        id: \"paramscaptionfontbold\",\n        mode: \"button\",\n        imgs: \"\"\n      }); \n    \n      new OfflajnOnOff({\n        id: \"paramscaptionfontitalic\",\n        mode: \"button\",\n        imgs: \"\"\n      }); \n    \n      new OfflajnOnOff({\n        id: \"paramscaptionfontunderline\",\n        mode: \"button\",\n        imgs: \"\"\n      }); \n    \r\n      new OfflajnRadio({\r\n        id: \"paramscaptionfontalign\",\r\n        values: [\"left\",\"center\",\"right\"],\r\n        map: {\"left\":0,\"center\":1,\"right\":2},\r\n        mode: \"image\"\r\n      });\r\n    dojo.addOnLoad(function(){ \r\n      new OfflajnSwitcher({\r\n        id: \"paramscaptionfontafontunit\",\r\n        units: [\"ON\",\"OFF\"],\r\n        values: [\"1\",\"0\"],\r\n        map: {\"1\":0,\"0\":1},\r\n        mode: 0,\r\n        url: \"http:\\\/\\\/localhost\\\/thepdahoi.vn\\\/wp-admin\\\/..\\\/modules\\\/mod_smartslider\\\/params\\\/offlajnswitcher\\\/images\\\/\"\r\n      }); \r\n    });\n      new OfflajnText({\n        id: \"paramscaptionfontafont\",\n        validation: \"\",\n        attachunit: \"\",\n        mode: \"\",\n        scale: \"\",\n        minus: 0,\n        onoff: \"1\"\n      }); \n    \n      new OfflajnText({\n        id: \"paramscaptionfonttshadow0\",\n        validation: \"float\",\n        attachunit: \"px\",\n        mode: \"\",\n        scale: \"\",\n        minus: 0,\n        onoff: \"\"\n      }); \n    \n      new OfflajnText({\n        id: \"paramscaptionfonttshadow1\",\n        validation: \"float\",\n        attachunit: \"px\",\n        mode: \"\",\n        scale: \"\",\n        minus: 0,\n        onoff: \"\"\n      }); \n    \n      new OfflajnText({\n        id: \"paramscaptionfonttshadow2\",\n        validation: \"float\",\n        attachunit: \"px\",\n        mode: \"\",\n        scale: \"\",\n        minus: 0,\n        onoff: \"\"\n      }); \n    \n    var el = dojo.byId(\"paramscaptionfonttshadow3\");\n    jQuery.fn.jPicker.defaults.images.clientPath=\"http:\/\/localhost\/thepdahoi.vn\/wp-content\/plugins\/nextend-smart-slider-lite\/joomla\/\/modules\/mod_smartslider\/params\/offlajndashboard\/..\/offlajncolor\/offlajncolor\/jpicker\/images\/\";\n    el.alphaSupport=false; \n    el.c = jQuery(\"#paramscaptionfonttshadow3\").jPicker({\n        window:{\n          expandable: true,\n          alphaSupport: false}\n        });\n    dojo.connect(el, \"change\", function(){\n      this.c[0].color.active.val(\"hex\", this.value);\n    });\n    dojo.addOnLoad(function(){ \r\n      new OfflajnSwitcher({\r\n        id: \"paramscaptionfonttshadow4\",\r\n        units: [\"ON\",\"OFF\"],\r\n        values: [\"1\",\"0\"],\r\n        map: {\"1\":0,\"0\":1},\r\n        mode: 0,\r\n        url: \"http:\\\/\\\/localhost\\\/thepdahoi.vn\\\/wp-admin\\\/..\\\/modules\\\/mod_smartslider\\\/params\\\/offlajnswitcher\\\/images\\\/\"\r\n      }); \r\n    });\r\n      new OfflajnCombine({\r\n        id: \"paramscaptionfonttshadow\",\r\n        num: 5,\r\n        switcherid: \"paramscaptionfonttshadow4\",\r\n        hideafter: \"0\"\r\n      }); \r\n    \n      new OfflajnText({\n        id: \"paramscaptionfontlineheight\",\n        validation: \"\",\n        attachunit: \"\",\n        mode: \"\",\n        scale: \"\",\n        minus: 0,\n        onoff: \"\"\n      }); \n    });"
        });
    });
      djConfig = {};})();