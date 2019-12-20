var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_commute_1 = new ol.format.GeoJSON();
var features_commute_1 = format_commute_1.readFeatures(json_commute_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_commute_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_commute_1.addFeatures(features_commute_1);
var lyr_commute_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_commute_1, 
                style: style_commute_1,
                interactive: true,
    title: 'commute<br />\
    <img src="styles/legend/commute_1_0.png" /> December 20<br />\
    <img src="styles/legend/commute_1_1.png" /> <br />'
        });
var format_Restautrant_2 = new ol.format.GeoJSON();
var features_Restautrant_2 = format_Restautrant_2.readFeatures(json_Restautrant_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Restautrant_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Restautrant_2.addFeatures(features_Restautrant_2);
var lyr_Restautrant_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Restautrant_2, 
                style: style_Restautrant_2,
                interactive: true,
                title: '<img src="styles/legend/Restautrant_2.png" /> Restautrant'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_commute_1.setVisible(true);lyr_Restautrant_2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_commute_1,lyr_Restautrant_2];
lyr_commute_1.set('fieldAliases', {'id': 'id', 'date': 'date', 'time': 'time', });
lyr_Restautrant_2.set('fieldAliases', {'id': 'id', 'name': 'name', 'taste': 'taste', 'price': 'price', });
lyr_commute_1.set('fieldImages', {'id': 'TextEdit', 'date': 'TextEdit', 'time': 'TextEdit', });
lyr_Restautrant_2.set('fieldImages', {'id': 'TextEdit', 'name': 'TextEdit', 'taste': 'TextEdit', 'price': 'TextEdit', });
lyr_commute_1.set('fieldLabels', {'id': 'no label', 'date': 'no label', 'time': 'no label', });
lyr_Restautrant_2.set('fieldLabels', {'id': 'no label', 'name': 'inline label', 'taste': 'no label', 'price': 'no label', });
lyr_Restautrant_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});