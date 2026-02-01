var wms_layers = [];


        var lyr_GoogleTerrain_0 = new ol.layer.Tile({
            'title': 'Google Terrain',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=p&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OSMStandard_1 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_GoogleSatellite_2 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_ManagementZone_3 = new ol.format.GeoJSON();
var features_ManagementZone_3 = format_ManagementZone_3.readFeatures(json_ManagementZone_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ManagementZone_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ManagementZone_3.addFeatures(features_ManagementZone_3);
var lyr_ManagementZone_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ManagementZone_3, 
                style: style_ManagementZone_3,
                popuplayertitle: 'Management Zone',
                interactive: true,
    title: 'Management Zone<br />\
    <img src="styles/legend/ManagementZone_3_0.png" /> MUZ<br />\
    <img src="styles/legend/ManagementZone_3_1.png" /> SPZ<br />\
    <img src="styles/legend/ManagementZone_3_2.png" /> <br />' });
var format_sargen_sbps32651_4 = new ol.format.GeoJSON();
var features_sargen_sbps32651_4 = format_sargen_sbps32651_4.readFeatures(json_sargen_sbps32651_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_sargen_sbps32651_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_sargen_sbps32651_4.addFeatures(features_sargen_sbps32651_4);
var lyr_sargen_sbps32651_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_sargen_sbps32651_4, 
                style: style_sargen_sbps32651_4,
                popuplayertitle: 'sargen_sbps 32651',
                interactive: false,
                title: '<img src="styles/legend/sargen_sbps32651_4.png" /> sargen_sbps 32651'
            });
var format_Barangay_5 = new ol.format.GeoJSON();
var features_Barangay_5 = format_Barangay_5.readFeatures(json_Barangay_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Barangay_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Barangay_5.addFeatures(features_Barangay_5);
var lyr_Barangay_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Barangay_5, 
                style: style_Barangay_5,
                popuplayertitle: 'Barangay',
                interactive: true,
                title: '<img src="styles/legend/Barangay_5.png" /> Barangay'
            });

lyr_GoogleTerrain_0.setVisible(true);lyr_OSMStandard_1.setVisible(true);lyr_GoogleSatellite_2.setVisible(true);lyr_ManagementZone_3.setVisible(true);lyr_sargen_sbps32651_4.setVisible(true);lyr_Barangay_5.setVisible(true);
var layersList = [lyr_GoogleTerrain_0,lyr_OSMStandard_1,lyr_GoogleSatellite_2,lyr_ManagementZone_3,lyr_sargen_sbps32651_4,lyr_Barangay_5];
lyr_ManagementZone_3.set('fieldAliases', {'Zone': 'Zone', '% Coverage': '% Coverage', 'Area_ha': 'Area_ha', 'Name': 'Name', 'Municipali': 'LGU', 'Parcel_No': 'Parcel No', 'Area_map': 'Area_map', 'Perimeter': 'Perimeter', 'Area_sqm': 'Area_sqm', 'Area_final': 'Area_final', 'final_area': 'Area (ha)', });
lyr_sargen_sbps32651_4.set('fieldAliases', {'ADM3_EN': 'ADM3_EN', 'ADM3_PCODE': 'ADM3_PCODE', 'ADM2_EN': 'ADM2_EN', 'ADM2_PCODE': 'ADM2_PCODE', 'ADM1_EN': 'ADM1_EN', 'ADM1_PCODE': 'ADM1_PCODE', 'ADM0_EN': 'ADM0_EN', 'ADM0_PCODE': 'ADM0_PCODE', 'date': 'date', 'validOn': 'validOn', 'validTo': 'validTo', 'ADM3_REF': 'ADM3_REF', 'ADM3ALT1EN': 'ADM3ALT1EN', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'AREA_SQKM': 'AREA_SQKM', 'id': 'id', 'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'fid': 'fid', 'snippet': 'snippet', 'layer': 'layer', 'path': 'path', });
lyr_Barangay_5.set('fieldAliases', {'ADM4_EN': 'Barangay', 'ADM4_PCODE': 'Barangay Code', 'ADM3_EN': 'City/ Municipality', 'ADM3_PCODE': 'ADM3_PCODE', 'ADM2_EN': 'Province', 'ADM2_PCODE': 'ADM2_PCODE', 'ADM1_EN': 'ADM1_EN', 'ADM1_PCODE': 'ADM1_PCODE', 'AREA_SQKM': 'Area (sqm)', 'centroid_x': 'centroid_x', 'centroid_y': 'centroid_y', });
lyr_ManagementZone_3.set('fieldImages', {'Zone': 'TextEdit', '% Coverage': 'TextEdit', 'Area_ha': 'TextEdit', 'Name': 'TextEdit', 'Municipali': 'TextEdit', 'Parcel_No': 'TextEdit', 'Area_map': 'TextEdit', 'Perimeter': 'TextEdit', 'Area_sqm': 'TextEdit', 'Area_final': 'TextEdit', 'final_area': 'TextEdit', });
lyr_sargen_sbps32651_4.set('fieldImages', {'ADM3_EN': 'TextEdit', 'ADM3_PCODE': 'TextEdit', 'ADM2_EN': 'TextEdit', 'ADM2_PCODE': 'TextEdit', 'ADM1_EN': 'TextEdit', 'ADM1_PCODE': 'TextEdit', 'ADM0_EN': 'TextEdit', 'ADM0_PCODE': 'TextEdit', 'date': 'DateTime', 'validOn': 'DateTime', 'validTo': 'DateTime', 'ADM3_REF': 'TextEdit', 'ADM3ALT1EN': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'AREA_SQKM': 'TextEdit', 'id': 'TextEdit', 'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'fid': 'TextEdit', 'snippet': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_Barangay_5.set('fieldImages', {'ADM4_EN': 'TextEdit', 'ADM4_PCODE': 'TextEdit', 'ADM3_EN': 'TextEdit', 'ADM3_PCODE': 'TextEdit', 'ADM2_EN': 'TextEdit', 'ADM2_PCODE': 'TextEdit', 'ADM1_EN': 'TextEdit', 'ADM1_PCODE': 'TextEdit', 'AREA_SQKM': 'TextEdit', 'centroid_x': 'TextEdit', 'centroid_y': 'TextEdit', });
lyr_ManagementZone_3.set('fieldLabels', {'Zone': 'inline label - visible with data', '% Coverage': 'hidden field', 'Area_ha': 'hidden field', 'Name': 'hidden field', 'Municipali': 'inline label - visible with data', 'Parcel_No': 'inline label - visible with data', 'Area_map': 'hidden field', 'Perimeter': 'hidden field', 'Area_sqm': 'hidden field', 'Area_final': 'no label', 'final_area': 'inline label - visible with data', });
lyr_sargen_sbps32651_4.set('fieldLabels', {'ADM3_EN': 'no label', 'ADM3_PCODE': 'no label', 'ADM2_EN': 'no label', 'ADM2_PCODE': 'no label', 'ADM1_EN': 'no label', 'ADM1_PCODE': 'no label', 'ADM0_EN': 'no label', 'ADM0_PCODE': 'no label', 'date': 'no label', 'validOn': 'no label', 'validTo': 'no label', 'ADM3_REF': 'no label', 'ADM3ALT1EN': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'AREA_SQKM': 'no label', 'id': 'no label', 'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'fid': 'no label', 'snippet': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_Barangay_5.set('fieldLabels', {'ADM4_EN': 'inline label - visible with data', 'ADM4_PCODE': 'inline label - visible with data', 'ADM3_EN': 'inline label - visible with data', 'ADM3_PCODE': 'hidden field', 'ADM2_EN': 'inline label - visible with data', 'ADM2_PCODE': 'hidden field', 'ADM1_EN': 'hidden field', 'ADM1_PCODE': 'hidden field', 'AREA_SQKM': 'hidden field', 'centroid_x': 'hidden field', 'centroid_y': 'hidden field', });
lyr_Barangay_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});