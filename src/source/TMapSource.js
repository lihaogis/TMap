tmap.source=function(opt_options)
{
}

//高德地图
tmap.source.AbcSLMap = function (opt_options) {
    return new ol.source.XYZ({
        url: 'http://webrd03.is.autonavi.com/appmaptile?x={x}&y={y}&z={z}&lang=zh_cn&size=1&scale=1&style=8'
    });
}

tmap.source.AbcYXMap = function (opt_options) {
    return new ol.source.XYZ({
        url: 'https://webst01.is.autonavi.com/appmaptile?style=6&x={x}&y={y}&z={z}'
    });
}

tmap.source.AbcYXMapBZ = function (opt_options) {
    return new ol.source.XYZ({
        url: 'https://wprd04.is.autonavi.com/appmaptile?x={x}&y={y}&z={z}&lang=zh_cn&size=1&scl=1&style=8&ltype=11'
    });
}

//TDTSLMap
tmap.source.TDTSLMap = function (opt_options) {
    source: new ol.source.XYZ({
        url: 'https://t6.tianditu.gov.cn/DataServer?T=vec_w&x={x}&y={y}&l={z}&tk=f7fd9f47beb5b90b8a6488f11f4f0804'
    });
}

tmap.source.TDTSLMapBZ = function (opt_options) {
    source: new ol.source.XYZ({
        url: 'https://t1.tianditu.gov.cn/DataServer?T=cva_w&x={x}&y={y}&l={z}&tk=f7fd9f47beb5b90b8a6488f11f4f0804'
    });
}

//TDTYXMap
tmap.source.TDTYXMap = function (opt_options) {
    return new ol.source.XYZ({
        url: 'https://t6.tianditu.gov.cn/DataServer?T=img_w&x={x}&y={y}&l={z}&tk=f7fd9f47beb5b90b8a6488f11f4f0804'
    });
}

tmap.source.TDTYXMapBZ = function (opt_options) {
    return new ol.source.XYZ({
        url: 'https://t6.tianditu.gov.cn/DataServer?T=cia_w&x={x}&y={y}&l={z}&tk=f7fd9f47beb5b90b8a6488f11f4f0804'
    });
}

//TDTDXMap
tmap.source.TDTDXMap = function (opt_options) {
    return new ol.source.XYZ({
        url: 'https://t6.tianditu.gov.cn/DataServer?T=ter_w&x={x}&y={y}&l={z}&tk=f7fd9f47beb5b90b8a6488f11f4f0804'
    });
}

tmap.source.TDTDXMapBZ = function (opt_options) {
    return new ol.source.XYZ({
        url: 'https://t6.tianditu.gov.cn/DataServer?T=cta_w&x={x}&y={y}&l={z}&tk=f7fd9f47beb5b90b8a6488f11f4f0804'
    });
}

//谷歌地图-无偏移
tmap.source.GGMap = function (opt_options) {
    return new ol.source.XYZ({
        url: 'http://www.google.cn/maps/vt?lyrs=s@716&x={x}&y={y}&z={z}'
    });
}

