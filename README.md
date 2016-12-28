# FSL.JavaScriptRevealingModulePlattern

**JavaScript Revealing Module Plattern**

If you wrote javascript code your entire life using a javascript file with a lot of methods inside... stop! Learn how Revealing Module Pattern helps you to separate and organize your code.

![enter image description here](https://fabiosilvalima.files.wordpress.com/2016/11/javascript.png)

Revealing Module Pattern means you must have a **Module** (like container or "class") that encapsulates all your methods and **Reveal** just what you want.

```javascript
var converter = function(){

     var convertToString = function(aNumber){
        if(!checkIfIsNumber (aNumber)){
           return null;
        }

        return parseNumber(aNumber);
     },

     checkIfIsNumber = function(aNumber){
       if(isNumber(aNumber)){
          return true;
       } else {
          return false;
       }
     }

     return {
       convertToString: convertToString
     }

}();
```

The **Module** "converter" above encapsulate two methods: a private method "checkIfIsNumber" and a public method "convertToString". I am just **Revealing** "convertToString" method.

So the usage is:

```javascript
var num = converter.convertToString(100);
```

The **Module** "converter" is self invoked, that is reason of calling "converter" directlly. If you want a **Module** that works like a class, remove "()" from lastline.

So the **Module** will be:

```javascript
var converter = function(){

};

var num = new converter().convertToString(100);
```

Cleaner, beautifull and organized!

References:
---

- More articles and code [check here][1];

Licence:
---

- Licence MIT


[1]: https://fabiosilvalima.wordpress.com
