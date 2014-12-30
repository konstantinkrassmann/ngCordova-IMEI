ngCordova-IMEI
==============

ngCordova Wrapper for cordova-plugin-imei feature

###Preconditions
cordova-plugin-imei needs to be installed to your project.

Install the cordova-plugin-imei:
``` cordova install https://github.com/aquto/cordova-plugin-imei ```

###Install via bower:
```bower install git://github.com/konstantinkrassmann/ngCordova-IMEI --save-dev```

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
