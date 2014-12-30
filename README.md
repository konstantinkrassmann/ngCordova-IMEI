ngCordova-IMEI
==============

ngCordova Wrapper for cordova-plugin-imei feature


#Install
##via bower:
bower install git://github.com/konstantinkrassmann/ngCordova-IMEI --save-dev

#How it works:
1.Set as dependency of your application
``` javascript
angular.module("myApp", ["ngCordova.plugins.imei"]);
```

2.Use in componentens:
``` javascript
app.controller("StartCtrl", function($cordovaIMEI){
   $cordovaIMEI.get().then(function(imei){
        console.log("the imei:", imei);
   }, function(){
        console.log("something went wrong");
   })
});
```
