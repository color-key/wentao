(function () { window.BMap_loadScriptTime = (new Date).getTime(); document.write('<script type="text/javascript" src="http://api.map.baidu.com/getscript?v=1.4&ak=&services=&t=20150522093217"></script>'); })();

$(function () {
    $('.location_btn').on('click', function () {
        $('#ui-baidu-map').toggleClass('ui-show');
        var map = new BMap.Map("ui-baidu-map"); // 创建地图实例  
        var point = new BMap.Point(113.947262, 22.51473); // 终点
        var marker = new BMap.Marker(point); // 创建标注
        map.addOverlay(marker); // 将标注添加到地图中

        var label = new BMap.Label("深圳市南山区粤海街道中建钢构大厦28层", {
            offset: new BMap.Size(20, -10)
        });
        marker.setLabel(label);
        map.centerAndZoom(point, 16);
        baiduMap(point, map);
    });
    var baiduMap = function (point, map) {
        // 获取当前位置
        var geolocation = new BMap.Geolocation();
        if (!geolocation) {
            return;
        } else {
            geolocation.getCurrentPosition(function (r) {

                if (this.getStatus() == BMAP_STATUS_SUCCESS) {
                    var mk = new BMap.Marker(r.point);
                    map.addOverlay(mk);
                    map.panTo(r.point);
                    map.centerAndZoom(r.point, 16);

                    var walking = new BMap.WalkingRoute(map, {
                        renderOptions: {
                            map: map,
                            autoViewport: true
                        }
                    });
                    walking.search(r.point, point);
                }
            }, {
                enableHighAccuracy: true
            });
        }
    };
});