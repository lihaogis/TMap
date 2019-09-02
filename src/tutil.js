tmap.util = {
};

tmap.util.extend = (function fn() {
    var options, name, src, copy, copyIsArray, clone,
        target = arguments[0] || {},
        length = arguments.length,
        i = 1, deep = false;

    //是否深度拷贝
    if(typeof target === "boolean") {
        deep = target;
        target = arguments[ i ] || {};
        i++;
    }

    if(typeof target !== "object" && !tmap.util.isFunction(target)) {
        target = {};
    }

    if(i === length) {
        target = {};
        i--;
    }

    for(; i < length; i++) {
        if((options = arguments[i]) != null) {
            for(name in options) {
                src = target[name];
                copy = options[name];

                // Prevent never-ending loop
                if(target === copy) {
                    continue;
                }

                // Recurse if we're merging plain objects or arrays
                if(deep && copy && (tmap.util.isPlainObject(copy) || (copyIsArray = Array.isArray(copy)))) {
                    if(copyIsArray) {
                        copyIsArray = false;
                        clone = src && Array.isArray(src) ? src : [];
                    }else {
                        clone = src && tmap.util.isPlainObject(src) ? src : {};
                    }

                    // Never move original objects, clone them
                    target[name] = fn(deep, clone, copy);
                }else if (copy !== undefined) {
                    target[name] = copy;
                }
            }
        }
    }

    // Return the modified object
    return target;
});


tmap.util.isFunction = function(obj) {
    return typeof obj === "function" && typeof obj.nodeType !== "number";
};

tmap.util.isPlainObject = function(obj) {
    var proto, Ctor;
    if(!obj || obj.toString() !== "[object Object]") {
        return false;
    }
    proto = Object.getPrototypeOf(obj);
    if(!proto) {
        return true;
    }
    Ctor = proto.hasOwnProperty("constructor") && proto.constructor;
    return typeof Ctor === "function" && Ctor.toString() === "[object Object]";
};