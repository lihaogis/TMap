//AbcSLMap
ol.source.AbcSLMap = function (opt_options) {
    return new ol.source.XYZ({
        url: 'http://webrd03.is.autonavi.com/appmaptile?x={x}&y={y}&z={z}&lang=zh_cn&size=1&scale=1&style=8'
    });
}

//AbcYXMap
ol.source.AbcYXMap = function (opt_options) {
    return new ol.source.XYZ({
        url: 'http://webrd03.is.autonavi.com/appmaptile?x={x}&y={y}&z={z}&lang=zh_cn&size=1&scale=1&style=8'
    });
}

//TDTSLMap
ol.source.TDTSLMap = function (opt_options) {
    source: new ol.source.XYZ({
        url: 'https://t6.tianditu.gov.cn/DataServer?T=vec_w&x={x}&y={y}&l={z}&tk=f7fd9f47beb5b90b8a6488f11f4f0804'
    });
}

ol.source.TDTSLMapBZ = function (opt_options) {
    source: new ol.source.XYZ({
        url: 'https://t1.tianditu.gov.cn/DataServer?T=cva_w&x={x}&y={y}&l={z}&tk=f7fd9f47beb5b90b8a6488f11f4f0804'
    });
}


//TDTYXMap
ol.source.TDTYXMap = function (opt_options) {
    return new ol.source.XYZ({
        url: 'https://t6.tianditu.gov.cn/DataServer?T=img_w&x={x}&y={y}&l={z}&tk=f7fd9f47beb5b90b8a6488f11f4f0804'
    });
}

ol.source.TDTYXMapBZ = function (opt_options) {
    return new ol.source.XYZ({
        url: 'https://t6.tianditu.gov.cn/DataServer?T=cia_w&x={x}&y={y}&l={z}&tk=f7fd9f47beb5b90b8a6488f11f4f0804'
    });
}


//TDTDXMap
ol.source.TDTDXMap = function (opt_options) {
    return new ol.source.XYZ({
        url: 'https://t6.tianditu.gov.cn/DataServer?T=ter_w&x={x}&y={y}&l={z}&tk=f7fd9f47beb5b90b8a6488f11f4f0804'
    });
}

ol.source.TDTDXMapBZ = function (opt_options) {
    return new ol.source.XYZ({
        url: 'https://t6.tianditu.gov.cn/DataServer?T=cta_w&x={x}&y={y}&l={z}&tk=f7fd9f47beb5b90b8a6488f11f4f0804'
    });
}


//GGMap(无偏移)
ol.source.GGMap = function (opt_options) {
    return new ol.source.XYZ({
        url: 'http://www.google.cn/maps/vt?lyrs=s@716&x={x}&y={y}&z={z}'
    });
}

ol.source.GGMapBZ = function (opt_options) {
    return new ol.source.XYZ({
        url: 'http://www.google.cn/maps/vt?lyrs=h@716&x={x}&y={y}&z={z}'
    });
}

ol.layer.GGMap = function (opt_options) {
    return new  new ol.layer.Tile({
            source: new ol.source.AbcSLMap()
    });
}


//自定义地图
ol.layer.Tmap = function (opt_options) {
    return  new ol.layer.Tile({
        extent: [117.40858989047551, 30.59083763382801, 118.79536378993869, 31.59119247584693],
        source: new ol.source.TileWMS({
            url: 'http://61.132.128.246:66/geowebcache/service/wms',
            params: {
                'LAYERS': 'WHJJZC2',
                'FORMAT': 'image/png',
                'SRS': 'EPSG:4326',
                'VERSION': '1.1.1'
            },
            tileGrid: new ol.tilegrid.TileGrid({
                //resolution和conf.xml中保持一致    
                resolutions: [0.003906250072865501, 0.0019531250364327505, 9.76562518216374E-4, 4.882812591081883E-4, 2.4414062955409386E-4, 1.220703147770468E-4, 6.10351573885234E-5, 3.05175786942617E-5, 1.525878934713085E-5, 7.629394673565438E-6, 3.814697336782719E-6, 1.907348668391357E-6, 9.536743341956785E-7],
                tileSize: [256, 256],
                origin: [117.0, 32.0]
            })
        })
    });
}