var cacheService = function ($cacheFactory) {
    var cFactory = {};
    cFactory.cache = $cacheFactory.get('cacheId') || $cacheFactory('cacheId');
    cFactory.get = function (key) {
        return cFactory.cache.get(key);
    };
    cFactory.put = function (key, value) {
        cFactory.cache.put(key, value);
    };
    return cFactory;
};