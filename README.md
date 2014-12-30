ngCordova-IMEI
==============

ngCordova Wrapper for cordova-plugin-imei feature


How it works:

Set as dependency of your application
``` javascript
angular.module("myApp", ["ngCordova.plugins.imei"]);
```

Use in componentens:
``` javascript
app.controller("StartCtrl", function($cordovaIMEI){
   $cordovaIMEI.get().then(function(imei){
        console.log("the imei:", imei);
   }, function(){
        console.log("something went wrong");
   })
});
```
