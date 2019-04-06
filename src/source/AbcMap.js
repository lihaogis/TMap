ol.source.AbcSLMap = function(opt_options)
{
    return new ol.source.XYZ({
        url: 'http://webrd03.is.autonavi.com/appmaptile?x={x}&y={y}&z={z}&lang=zh_cn&size=1&scale=1&style=8'
    });
}


ol.source.AbcYXMap = function(opt_options)
{
    return new ol.source.XYZ({
        url: 'http://webrd03.is.autonavi.com/appmaptile?x={x}&y={y}&z={z}&lang=zh_cn&size=1&scale=1&style=8'
    });
}