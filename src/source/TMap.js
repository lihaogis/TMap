var tmap = {
    version: '1.0.0',
    author: 'lhgis',
    ilogo: ""
}

tmap.Map = function (mapDiv, option) {
    var _map, _curZIndex = 0;

    //默认配置对象
    var defaultOption = {
        projection: 'EPSG:3857',
        center: [13054718.2793, 3747783.9339],
        extent: [],
        layers: [],
        zoom: undefined,
        minZoom: undefined,
        maxZoom: undefined,
        controls: {
            zoom: true,
            scaleLine: true,
            overviewMap: false,
            fullScreen: false
        }
    };
    //合并配置
    option = tmap.util.extend(true, defaultOption, option);

    /**
     * 初始化地图浏览实例
     * @private
     * @param option
     */
    function _init(option) {
        var view = new ol.View({
            center: option.center,
            projection: option.projection,
            zoom: option.zoom,
            minZoom: option.minZoom,
            maxZoom: option.maxZoom
        });

        _map = new ol.Map({
            target: mapDiv,
            logo: false,
            view: view,
            controls: []
        });
    }

    /**
     * 回调函数
     */
    this.callback = {};

    /**
     * 获取地图实例
     * @this wol.MapViewer
     * @return {ol.Map}
     */
    this.getMap = function () {
        return _map;
    }

    /**
     * 获取图层序号值
     * @this wol.MapViewer
     * @return {number}
     */
    this.getCurZIndex = function () {
        return _curZIndex;
    }

    /**
     * 设置图层序号值
     * @this wol.MapViewer
     * @param {number} curZIndex
     */
    this.setCurZIndex = function (curZIndex) {
        _curZIndex = curZIndex;
    }

    //初始化
    _init(option);
    this.addLayers(_initLayers(option.layers));
}

/**
    * 初始化图层数组
    * @private
    * @param {Array<option<object>>} options
    * @return {Array<ol.layer.Base>}
    */
function _initLayers(options) {
    var layers = [];
    for (var i = 0; i < options.length; i++) {
        if (options[i].type === 'abcmap') {
            layers.push(tmap.mapGroup.abcmap());
        }
    }
    return layers;
}

/**
     * 添加图层
     * @param {ol.layer.Base} layer - 图层对象
     */
tmap.Map.prototype.addLayer = function (layer) {
    var zIndex = layer.getZIndex();
    if (!zIndex || zIndex <= 1) {
        var curZIndex = this.getCurZIndex();
        layer.setZIndex(curZIndex);
        this.setCurZIndex(curZIndex + 1);
    }

    this.getMap().addLayer(layer);

    //执行回调
    var callbacks = this.callback['addLayer'] || [];
    for (var i = 0; i < callbacks.length; i++) {
        callbacks[i]();
    }
}

/**
* 添加多个图层
* @param {Array<ol.layer.Base>} layers - 图层对象数组
*/
tmap.Map.prototype.addLayers = function (layers) {
    for (var i = 0; i < layers.length; i++) {
        this.addLayer(layers[i]);
    }
}

