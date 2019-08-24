tmap.mapGroup = {
}
//自定义地图
tmap.mapGroup.selfmap = function (opt_options) {
    return new ol.layer.Tile({
        extent: [117.79274539171578, 32.05599257605633, 118.54352794005754, 32.63968697076984],
        source: new ol.source.TileWMS({
            url: 'http://61.132.128.246:66/geowebcache/service/wms',
            params: {
                'LAYERS': 'CZMap',
                'FORMAT': 'image/png',
                'SRS': 'EPSG:4326',
                'VERSION': '1.1.1'
            },
            tileGrid: new ol.tilegrid.TileGrid({
                //resolution和conf.xml中保持一致    
                resolutions: [0.00274658203125, 0.001373291015625, 6.866455078125E-4, 3.4332275390625E-4, 1.71661376953125E-4, 8.58306884765625E-5, 4.291534423828125E-5, 2.1457672119140625E-5, 1.0728836059570312E-5, 5.364418029785156E-6, 2.682209014892578E-6],
                tileSize: [256, 256],
                origin: [-180.0, 90.0]
            })
        })
    })
}

//天地图
tmap.mapGroup.tdtmap = function (opt_options) {
    return new ol.layer.Group({
        layers: [
            new ol.layer.Tile({
                source: tmap.source.AbcYXMap()
            }), new ol.layer.Tile({
                source: tmap.source.AbcYXMapBZ()
            })
        ]
    })
}

//高德地图
tmap.mapGroup.abcmap = function (opt_options) {
    return new ol.layer.Tile({
        source: tmap.source.AbcSLMap()
    })
}

//高德地图
tmap.mapGroup.ggyxmap = function (opt_options) {
    return new ol.layer.Tile({
        source: tmap.source.GGMap()
    })
}