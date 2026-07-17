var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_5TEHUACAN_1 = new ol.format.GeoJSON();
var features_5TEHUACAN_1 = format_5TEHUACAN_1.readFeatures(json_5TEHUACAN_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_5TEHUACAN_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_5TEHUACAN_1.addFeatures(features_5TEHUACAN_1);
var lyr_5TEHUACAN_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_5TEHUACAN_1, 
                style: style_5TEHUACAN_1,
                popuplayertitle: '5 TEHUACAN',
                interactive: true,
                title: '<img src="styles/legend/5TEHUACAN_1.png" /> 5 TEHUACAN'
            });
var format_CZ13PUEBLASUR_2 = new ol.format.GeoJSON();
var features_CZ13PUEBLASUR_2 = format_CZ13PUEBLASUR_2.readFeatures(json_CZ13PUEBLASUR_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CZ13PUEBLASUR_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CZ13PUEBLASUR_2.addFeatures(features_CZ13PUEBLASUR_2);
var lyr_CZ13PUEBLASUR_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CZ13PUEBLASUR_2, 
                style: style_CZ13PUEBLASUR_2,
                popuplayertitle: 'CZ 13 PUEBLA SUR',
                interactive: true,
                title: '<img src="styles/legend/CZ13PUEBLASUR_2.png" /> CZ 13 PUEBLA SUR'
            });
var format_14PUEBLANORTE_3 = new ol.format.GeoJSON();
var features_14PUEBLANORTE_3 = format_14PUEBLANORTE_3.readFeatures(json_14PUEBLANORTE_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_14PUEBLANORTE_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_14PUEBLANORTE_3.addFeatures(features_14PUEBLANORTE_3);
var lyr_14PUEBLANORTE_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_14PUEBLANORTE_3, 
                style: style_14PUEBLANORTE_3,
                popuplayertitle: '14 PUEBLA NORTE',
                interactive: true,
                title: '<img src="styles/legend/14PUEBLANORTE_3.png" /> 14 PUEBLA NORTE'
            });
var format_IZUCAR_4 = new ol.format.GeoJSON();
var features_IZUCAR_4 = format_IZUCAR_4.readFeatures(json_IZUCAR_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IZUCAR_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IZUCAR_4.addFeatures(features_IZUCAR_4);
var lyr_IZUCAR_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_IZUCAR_4, 
                style: style_IZUCAR_4,
                popuplayertitle: 'IZUCAR',
                interactive: true,
                title: '<img src="styles/legend/IZUCAR_4.png" /> IZUCAR'
            });
var format_cholula_5 = new ol.format.GeoJSON();
var features_cholula_5 = format_cholula_5.readFeatures(json_cholula_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_cholula_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_cholula_5.addFeatures(features_cholula_5);
var lyr_cholula_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_cholula_5, 
                style: style_cholula_5,
                popuplayertitle: 'cholula',
                interactive: true,
                title: '<img src="styles/legend/cholula_5.png" /> cholula'
            });
var format_ATLIXCO_6 = new ol.format.GeoJSON();
var features_ATLIXCO_6 = format_ATLIXCO_6.readFeatures(json_ATLIXCO_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ATLIXCO_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ATLIXCO_6.addFeatures(features_ATLIXCO_6);
var lyr_ATLIXCO_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ATLIXCO_6, 
                style: style_ATLIXCO_6,
                popuplayertitle: 'ATLIXCO',
                interactive: true,
                title: '<img src="styles/legend/ATLIXCO_6.png" /> ATLIXCO'
            });
var format_21sia_7 = new ol.format.GeoJSON();
var features_21sia_7 = format_21sia_7.readFeatures(json_21sia_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_21sia_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_21sia_7.addFeatures(features_21sia_7);
var lyr_21sia_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_21sia_7, 
                style: style_21sia_7,
                popuplayertitle: '21sia',
                interactive: true,
                title: '<img src="styles/legend/21sia_7.png" /> 21sia'
            });
var format_21sia_8 = new ol.format.GeoJSON();
var features_21sia_8 = format_21sia_8.readFeatures(json_21sia_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_21sia_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_21sia_8.addFeatures(features_21sia_8);
var lyr_21sia_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_21sia_8, 
                style: style_21sia_8,
                popuplayertitle: '21sia',
                interactive: true,
                title: '<img src="styles/legend/21sia_8.png" /> 21sia'
            });
var format_21sil_9 = new ol.format.GeoJSON();
var features_21sil_9 = format_21sil_9.readFeatures(json_21sil_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_21sil_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_21sil_9.addFeatures(features_21sil_9);
var lyr_21sil_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_21sil_9, 
                style: style_21sil_9,
                popuplayertitle: '21sil',
                interactive: true,
                title: '<img src="styles/legend/21sil_9.png" /> 21sil'
            });
var format_PLAZAS_COM_ATLIXCO_10 = new ol.format.GeoJSON();
var features_PLAZAS_COM_ATLIXCO_10 = format_PLAZAS_COM_ATLIXCO_10.readFeatures(json_PLAZAS_COM_ATLIXCO_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PLAZAS_COM_ATLIXCO_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PLAZAS_COM_ATLIXCO_10.addFeatures(features_PLAZAS_COM_ATLIXCO_10);
var lyr_PLAZAS_COM_ATLIXCO_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PLAZAS_COM_ATLIXCO_10, 
                style: style_PLAZAS_COM_ATLIXCO_10,
                popuplayertitle: 'PLAZAS_COM_ATLIXCO',
                interactive: true,
                title: '<img src="styles/legend/PLAZAS_COM_ATLIXCO_10.png" /> PLAZAS_COM_ATLIXCO'
            });
var format_ACATLAN_11 = new ol.format.GeoJSON();
var features_ACATLAN_11 = format_ACATLAN_11.readFeatures(json_ACATLAN_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ACATLAN_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ACATLAN_11.addFeatures(features_ACATLAN_11);
var lyr_ACATLAN_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ACATLAN_11, 
                style: style_ACATLAN_11,
                popuplayertitle: 'ACATLAN',
                interactive: true,
                title: '<img src="styles/legend/ACATLAN_11.png" /> ACATLAN'
            });
var format_16zoquitlan_12 = new ol.format.GeoJSON();
var features_16zoquitlan_12 = format_16zoquitlan_12.readFeatures(json_16zoquitlan_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_16zoquitlan_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_16zoquitlan_12.addFeatures(features_16zoquitlan_12);
var lyr_16zoquitlan_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_16zoquitlan_12, 
                style: style_16zoquitlan_12,
                popuplayertitle: '16 zoquitlan',
                interactive: true,
                title: '<img src="styles/legend/16zoquitlan_12.png" /> 16 zoquitlan'
            });
var format_TEPEACA_13 = new ol.format.GeoJSON();
var features_TEPEACA_13 = format_TEPEACA_13.readFeatures(json_TEPEACA_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TEPEACA_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TEPEACA_13.addFeatures(features_TEPEACA_13);
var lyr_TEPEACA_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TEPEACA_13, 
                style: style_TEPEACA_13,
                popuplayertitle: 'TEPEACA',
                interactive: true,
                title: '<img src="styles/legend/TEPEACA_13.png" /> TEPEACA'
            });
var format_ZACATLAN_14 = new ol.format.GeoJSON();
var features_ZACATLAN_14 = format_ZACATLAN_14.readFeatures(json_ZACATLAN_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZACATLAN_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZACATLAN_14.addFeatures(features_ZACATLAN_14);
var lyr_ZACATLAN_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZACATLAN_14, 
                style: style_ZACATLAN_14,
                popuplayertitle: 'ZACATLAN',
                interactive: true,
                title: '<img src="styles/legend/ZACATLAN_14.png" /> ZACATLAN'
            });
var format_LIBRES_15 = new ol.format.GeoJSON();
var features_LIBRES_15 = format_LIBRES_15.readFeatures(json_LIBRES_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LIBRES_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LIBRES_15.addFeatures(features_LIBRES_15);
var lyr_LIBRES_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LIBRES_15, 
                style: style_LIBRES_15,
                popuplayertitle: 'LIBRES',
                interactive: true,
                title: '<img src="styles/legend/LIBRES_15.png" /> LIBRES'
            });
var format_HUAUCHINANGO_16 = new ol.format.GeoJSON();
var features_HUAUCHINANGO_16 = format_HUAUCHINANGO_16.readFeatures(json_HUAUCHINANGO_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HUAUCHINANGO_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HUAUCHINANGO_16.addFeatures(features_HUAUCHINANGO_16);
var lyr_HUAUCHINANGO_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HUAUCHINANGO_16, 
                style: style_HUAUCHINANGO_16,
                popuplayertitle: 'HUAUCHINANGO',
                interactive: true,
                title: '<img src="styles/legend/HUAUCHINANGO_16.png" /> HUAUCHINANGO'
            });
var format_CUETZALAN_17 = new ol.format.GeoJSON();
var features_CUETZALAN_17 = format_CUETZALAN_17.readFeatures(json_CUETZALAN_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CUETZALAN_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CUETZALAN_17.addFeatures(features_CUETZALAN_17);
var lyr_CUETZALAN_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CUETZALAN_17, 
                style: style_CUETZALAN_17,
                popuplayertitle: 'CUETZALAN',
                interactive: true,
                title: '<img src="styles/legend/CUETZALAN_17.png" /> CUETZALAN'
            });
var format_TEZIUTLAN1_18 = new ol.format.GeoJSON();
var features_TEZIUTLAN1_18 = format_TEZIUTLAN1_18.readFeatures(json_TEZIUTLAN1_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TEZIUTLAN1_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TEZIUTLAN1_18.addFeatures(features_TEZIUTLAN1_18);
var lyr_TEZIUTLAN1_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TEZIUTLAN1_18, 
                style: style_TEZIUTLAN1_18,
                popuplayertitle: 'TEZIUTLAN1',
                interactive: true,
                title: '<img src="styles/legend/TEZIUTLAN1_18.png" /> TEZIUTLAN1'
            });
var format_CDSERDAN_19 = new ol.format.GeoJSON();
var features_CDSERDAN_19 = format_CDSERDAN_19.readFeatures(json_CDSERDAN_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CDSERDAN_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CDSERDAN_19.addFeatures(features_CDSERDAN_19);
var lyr_CDSERDAN_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CDSERDAN_19, 
                style: style_CDSERDAN_19,
                popuplayertitle: 'CD SERDAN',
                interactive: true,
                title: '<img src="styles/legend/CDSERDAN_19.png" /> CD SERDAN'
            });
var format_TECAMACHALCO_20 = new ol.format.GeoJSON();
var features_TECAMACHALCO_20 = format_TECAMACHALCO_20.readFeatures(json_TECAMACHALCO_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TECAMACHALCO_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TECAMACHALCO_20.addFeatures(features_TECAMACHALCO_20);
var lyr_TECAMACHALCO_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TECAMACHALCO_20, 
                style: style_TECAMACHALCO_20,
                popuplayertitle: 'TECAMACHALCO',
                interactive: true,
                title: '<img src="styles/legend/TECAMACHALCO_20.png" /> TECAMACHALCO'
            });
var format_CatalogoEscuelasPrimarias_21 = new ol.format.GeoJSON();
var features_CatalogoEscuelasPrimarias_21 = format_CatalogoEscuelasPrimarias_21.readFeatures(json_CatalogoEscuelasPrimarias_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CatalogoEscuelasPrimarias_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CatalogoEscuelasPrimarias_21.addFeatures(features_CatalogoEscuelasPrimarias_21);
var lyr_CatalogoEscuelasPrimarias_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CatalogoEscuelasPrimarias_21, 
                style: style_CatalogoEscuelasPrimarias_21,
                popuplayertitle: 'Catalogo Escuelas Primarias',
                interactive: true,
                title: '<img src="styles/legend/CatalogoEscuelasPrimarias_21.png" /> Catalogo Escuelas Primarias'
            });
var format_MNZANA_REZ_TOT_ATLIXCO_22 = new ol.format.GeoJSON();
var features_MNZANA_REZ_TOT_ATLIXCO_22 = format_MNZANA_REZ_TOT_ATLIXCO_22.readFeatures(json_MNZANA_REZ_TOT_ATLIXCO_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MNZANA_REZ_TOT_ATLIXCO_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MNZANA_REZ_TOT_ATLIXCO_22.addFeatures(features_MNZANA_REZ_TOT_ATLIXCO_22);
var lyr_MNZANA_REZ_TOT_ATLIXCO_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MNZANA_REZ_TOT_ATLIXCO_22, 
                style: style_MNZANA_REZ_TOT_ATLIXCO_22,
                popuplayertitle: 'MNZANA_REZ_TOT_ATLIXCO',
                interactive: true,
                title: '<img src="styles/legend/MNZANA_REZ_TOT_ATLIXCO_22.png" /> MNZANA_REZ_TOT_ATLIXCO'
            });
var format_ads_23 = new ol.format.GeoJSON();
var features_ads_23 = format_ads_23.readFeatures(json_ads_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ads_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ads_23.addFeatures(features_ads_23);
var lyr_ads_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ads_23, 
                style: style_ads_23,
                popuplayertitle: 'ads',
                interactive: true,
                title: '<img src="styles/legend/ads_23.png" /> ads'
            });
var format_CatalogoEscuelasUniversidad_24 = new ol.format.GeoJSON();
var features_CatalogoEscuelasUniversidad_24 = format_CatalogoEscuelasUniversidad_24.readFeatures(json_CatalogoEscuelasUniversidad_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CatalogoEscuelasUniversidad_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CatalogoEscuelasUniversidad_24.addFeatures(features_CatalogoEscuelasUniversidad_24);
var lyr_CatalogoEscuelasUniversidad_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CatalogoEscuelasUniversidad_24, 
                style: style_CatalogoEscuelasUniversidad_24,
                popuplayertitle: 'Catalogo Escuelas Universidad',
                interactive: true,
                title: '<img src="styles/legend/CatalogoEscuelasUniversidad_24.png" /> Catalogo Escuelas Universidad'
            });
var format_PUE_NORTE_MANZAS_REZ_TOT_25 = new ol.format.GeoJSON();
var features_PUE_NORTE_MANZAS_REZ_TOT_25 = format_PUE_NORTE_MANZAS_REZ_TOT_25.readFeatures(json_PUE_NORTE_MANZAS_REZ_TOT_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PUE_NORTE_MANZAS_REZ_TOT_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PUE_NORTE_MANZAS_REZ_TOT_25.addFeatures(features_PUE_NORTE_MANZAS_REZ_TOT_25);
var lyr_PUE_NORTE_MANZAS_REZ_TOT_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PUE_NORTE_MANZAS_REZ_TOT_25, 
                style: style_PUE_NORTE_MANZAS_REZ_TOT_25,
                popuplayertitle: 'PUE_NORTE_MANZAS_REZ_TOT',
                interactive: true,
                title: '<img src="styles/legend/PUE_NORTE_MANZAS_REZ_TOT_25.png" /> PUE_NORTE_MANZAS_REZ_TOT'
            });
var format_PUE_CZ_26 = new ol.format.GeoJSON();
var features_PUE_CZ_26 = format_PUE_CZ_26.readFeatures(json_PUE_CZ_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PUE_CZ_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PUE_CZ_26.addFeatures(features_PUE_CZ_26);
var lyr_PUE_CZ_26 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PUE_CZ_26, 
                style: style_PUE_CZ_26,
                popuplayertitle: 'PUE_CZ',
                interactive: true,
                title: '<img src="styles/legend/PUE_CZ_26.png" /> PUE_CZ'
            });

lyr_GoogleMaps_0.setVisible(true);lyr_5TEHUACAN_1.setVisible(true);lyr_CZ13PUEBLASUR_2.setVisible(true);lyr_14PUEBLANORTE_3.setVisible(true);lyr_IZUCAR_4.setVisible(true);lyr_cholula_5.setVisible(true);lyr_ATLIXCO_6.setVisible(true);lyr_21sia_7.setVisible(true);lyr_21sia_8.setVisible(true);lyr_21sil_9.setVisible(true);lyr_PLAZAS_COM_ATLIXCO_10.setVisible(true);lyr_ACATLAN_11.setVisible(true);lyr_16zoquitlan_12.setVisible(true);lyr_TEPEACA_13.setVisible(true);lyr_ZACATLAN_14.setVisible(true);lyr_LIBRES_15.setVisible(true);lyr_HUAUCHINANGO_16.setVisible(true);lyr_CUETZALAN_17.setVisible(true);lyr_TEZIUTLAN1_18.setVisible(true);lyr_CDSERDAN_19.setVisible(true);lyr_TECAMACHALCO_20.setVisible(true);lyr_CatalogoEscuelasPrimarias_21.setVisible(true);lyr_MNZANA_REZ_TOT_ATLIXCO_22.setVisible(true);lyr_ads_23.setVisible(true);lyr_CatalogoEscuelasUniversidad_24.setVisible(true);lyr_PUE_NORTE_MANZAS_REZ_TOT_25.setVisible(true);lyr_PUE_CZ_26.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_5TEHUACAN_1,lyr_CZ13PUEBLASUR_2,lyr_14PUEBLANORTE_3,lyr_IZUCAR_4,lyr_cholula_5,lyr_ATLIXCO_6,lyr_21sia_7,lyr_21sia_8,lyr_21sil_9,lyr_PLAZAS_COM_ATLIXCO_10,lyr_ACATLAN_11,lyr_16zoquitlan_12,lyr_TEPEACA_13,lyr_ZACATLAN_14,lyr_LIBRES_15,lyr_HUAUCHINANGO_16,lyr_CUETZALAN_17,lyr_TEZIUTLAN1_18,lyr_CDSERDAN_19,lyr_TECAMACHALCO_20,lyr_CatalogoEscuelasPrimarias_21,lyr_MNZANA_REZ_TOT_ATLIXCO_22,lyr_ads_23,lyr_CatalogoEscuelasUniversidad_24,lyr_PUE_NORTE_MANZAS_REZ_TOT_25,lyr_PUE_CZ_26];
lyr_5TEHUACAN_1.set('fieldAliases', {'CVEGEO': 'CVEGEO', 'CVE_ENT': 'CVE_ENT', 'CVE_MUN': 'CVE_MUN', 'NOMGEO': 'NOMGEO', '15y+': '15y+', 'Analf_abs': 'Analf_abs', 'Analf_rel': 'Analf_rel', 'S_P_T_abs': 'S_P_T_abs', 'S_P_T_rel': 'S_P_T_rel', 'S_S_T_abs': 'S_S_T_abs', 'S_S_T_rel': 'S_S_T_rel', 'R_T_abs': 'R_T_abs', 'R_T_rel': 'R_T_rel', 'CVEGEO_2': 'CVEGEO_2', 'CVE_ENT_2': 'CVE_ENT_2', 'CVE_MUN_2': 'CVE_MUN_2', 'NOMGEO_2': 'NOMGEO_2', '15y+_2': '15y+_2', 'Analf_abs_': 'Analf_abs_', 'Analf_rel_': 'Analf_rel_', 'S_P_T_abs_': 'S_P_T_abs_', 'S_P_T_rel_': 'S_P_T_rel_', 'S_S_T_abs_': 'S_S_T_abs_', 'S_S_T_rel_': 'S_S_T_rel_', 'R_T_abs_2': 'R_T_abs_2', 'R_T_rel_2': 'R_T_rel_2', 'CVEGEO_3': 'CVEGEO_3', 'CVE_ENT_3': 'CVE_ENT_3', 'CVE_MUN_3': 'CVE_MUN_3', 'NOMGEO_3': 'NOMGEO_3', '15y+_3': '15y+_3', 'Analf_ab_1': 'Analf_ab_1', 'Analf_re_1': 'Analf_re_1', 'S_P_T_ab_1': 'S_P_T_ab_1', 'S_P_T_re_1': 'S_P_T_re_1', 'S_S_T_ab_1': 'S_S_T_ab_1', 'S_S_T_re_1': 'S_S_T_re_1', 'R_T_abs_3': 'R_T_abs_3', 'R_T_rel_3': 'R_T_rel_3', });
lyr_CZ13PUEBLASUR_2.set('fieldAliases', {'CVEGEO': 'CVEGEO', 'CVE_ENT': 'CVE_ENT', 'CVE_MUN': 'CVE_MUN', 'NOMGEO': 'NOMGEO', '15y+': '15y+', 'Analf_abs': 'Analf_abs', 'Analf_rel': 'Analf_rel', 'S_P_T_abs': 'S_P_T_abs', 'S_P_T_rel': 'S_P_T_rel', 'S_S_T_abs': 'S_S_T_abs', 'S_S_T_rel': 'S_S_T_rel', 'R_T_abs': 'R_T_abs', 'R_T_rel': 'R_T_rel', });
lyr_14PUEBLANORTE_3.set('fieldAliases', {'CVEGEO': 'CVEGEO', 'CVE_ENT': 'CVE_ENT', 'CVE_MUN': 'CVE_MUN', 'NOMGEO': 'NOMGEO', '15y+': '15y+', 'Analf_abs': 'Analf_abs', 'Analf_rel': 'Analf_rel', 'S_P_T_abs': 'S_P_T_abs', 'S_P_T_rel': 'S_P_T_rel', 'S_S_T_abs': 'S_S_T_abs', 'S_S_T_rel': 'S_S_T_rel', 'R_T_abs': 'R_T_abs', 'R_T_rel': 'R_T_rel', });
lyr_IZUCAR_4.set('fieldAliases', {'CVEGEO': 'CVEGEO', 'CVE_ENT': 'CVE_ENT', 'CVE_MUN': 'CVE_MUN', 'NOMGEO': 'NOMGEO', '15y+': '15y+', 'Analf_abs': 'Analf_abs', 'Analf_rel': 'Analf_rel', 'S_P_T_abs': 'S_P_T_abs', 'S_P_T_rel': 'S_P_T_rel', 'S_S_T_abs': 'S_S_T_abs', 'S_S_T_rel': 'S_S_T_rel', 'R_T_abs': 'R_T_abs', 'R_T_rel': 'R_T_rel', });
lyr_cholula_5.set('fieldAliases', {'CVEGEO': 'CVEGEO', 'CVE_ENT': 'CVE_ENT', 'CVE_MUN': 'CVE_MUN', 'NOMGEO': 'NOMGEO', '15y+': '15y+', 'Analf_abs': 'Analf_abs', 'Analf_rel': 'Analf_rel', 'S_P_T_abs': 'S_P_T_abs', 'S_P_T_rel': 'S_P_T_rel', 'S_S_T_abs': 'S_S_T_abs', 'S_S_T_rel': 'S_S_T_rel', 'R_T_abs': 'R_T_abs', 'R_T_rel': 'R_T_rel', 'area': 'area', });
lyr_ATLIXCO_6.set('fieldAliases', {'CVEGEO': 'CVEGEO', 'CVE_ENT': 'CVE_ENT', 'CVE_MUN': 'CVE_MUN', 'NOMGEO': 'NOMGEO', '15y+': '15y+', 'Analf_abs': 'Analf_abs', 'Analf_rel': 'Analf_rel', 'S_P_T_abs': 'S_P_T_abs', 'S_P_T_rel': 'S_P_T_rel', 'S_S_T_abs': 'S_S_T_abs', 'S_S_T_rel': 'S_S_T_rel', 'R_T_abs': 'R_T_abs', 'R_T_rel': 'R_T_rel', });
lyr_21sia_7.set('fieldAliases', {});
lyr_21sia_8.set('fieldAliases', {});
lyr_21sil_9.set('fieldAliases', {});
lyr_PLAZAS_COM_ATLIXCO_10.set('fieldAliases', {'clve_aï¿½o': 'clve_aï¿½o', 'clve_mes': 'clve_mes', 'desc_mes': 'desc_mes', 'icveie': 'icveie', 'cdesie': 'cdesie', 'icvecz': 'icvecz', 'CUCZ_TXT': 'CUCZ_TXT', 'cdescz': 'cdescz', 'icvemunici': 'icvemunici', 'CU_Mun': 'CU_Mun', 'desmunicip': 'desmunicip', 'icvelocali': 'icvelocali', 'CU_Loc': 'CU_Loc', 'Deslocalid': 'Deslocalid', 'ccveplaza': 'ccveplaza', 'icvesituac': 'icvesituac', 'cdessituac': 'cdessituac', 'cnomplaza': 'cnomplaza', 'calle': 'calle', 'numext': 'numext', 'Colonia': 'Colonia', 'codpostal': 'codpostal', 'LAT': 'LAT', 'LON': 'LON', });
lyr_ACATLAN_11.set('fieldAliases', {'CVEGEO': 'CVEGEO', 'CVE_ENT': 'CVE_ENT', 'CVE_MUN': 'CVE_MUN', 'NOMGEO': 'NOMGEO', '15y+': '15y+', 'Analf_abs': 'Analf_abs', 'Analf_rel': 'Analf_rel', 'S_P_T_abs': 'S_P_T_abs', 'S_P_T_rel': 'S_P_T_rel', 'S_S_T_abs': 'S_S_T_abs', 'S_S_T_rel': 'S_S_T_rel', 'R_T_abs': 'R_T_abs', 'R_T_rel': 'R_T_rel', });
lyr_16zoquitlan_12.set('fieldAliases', {'CVEGEO': 'CVEGEO', 'CVE_ENT': 'CVE_ENT', 'CVE_MUN': 'CVE_MUN', 'NOMGEO': 'NOMGEO', '15y+': '15y+', 'Analf_abs': 'Analf_abs', 'Analf_rel': 'Analf_rel', 'S_P_T_abs': 'S_P_T_abs', 'S_P_T_rel': 'S_P_T_rel', 'S_S_T_abs': 'S_S_T_abs', 'S_S_T_rel': 'S_S_T_rel', 'R_T_abs': 'R_T_abs', 'R_T_rel': 'R_T_rel', 'CVEGEO_2': 'CVEGEO_2', 'CVE_ENT_2': 'CVE_ENT_2', 'CVE_MUN_2': 'CVE_MUN_2', 'NOMGEO_2': 'NOMGEO_2', '15y+_2': '15y+_2', 'Analf_abs_': 'Analf_abs_', 'Analf_rel_': 'Analf_rel_', 'S_P_T_abs_': 'S_P_T_abs_', 'S_P_T_rel_': 'S_P_T_rel_', 'S_S_T_abs_': 'S_S_T_abs_', 'S_S_T_rel_': 'S_S_T_rel_', 'R_T_abs_2': 'R_T_abs_2', 'R_T_rel_2': 'R_T_rel_2', 'CVEGEO_3': 'CVEGEO_3', 'CVE_ENT_3': 'CVE_ENT_3', 'CVE_MUN_3': 'CVE_MUN_3', 'NOMGEO_3': 'NOMGEO_3', '15y+_3': '15y+_3', 'Analf_ab_1': 'Analf_ab_1', 'Analf_re_1': 'Analf_re_1', 'S_P_T_ab_1': 'S_P_T_ab_1', 'S_P_T_re_1': 'S_P_T_re_1', 'S_S_T_ab_1': 'S_S_T_ab_1', 'S_S_T_re_1': 'S_S_T_re_1', 'R_T_abs_3': 'R_T_abs_3', 'R_T_rel_3': 'R_T_rel_3', });
lyr_TEPEACA_13.set('fieldAliases', {'CVEGEO': 'CVEGEO', 'CVE_ENT': 'CVE_ENT', 'CVE_MUN': 'CVE_MUN', 'NOMGEO': 'NOMGEO', '15y+': '15y+', 'Analf_abs': 'Analf_abs', 'Analf_rel': 'Analf_rel', 'S_P_T_abs': 'S_P_T_abs', 'S_P_T_rel': 'S_P_T_rel', 'S_S_T_abs': 'S_S_T_abs', 'S_S_T_rel': 'S_S_T_rel', 'R_T_abs': 'R_T_abs', 'R_T_rel': 'R_T_rel', });
lyr_ZACATLAN_14.set('fieldAliases', {'CVEGEO': 'CVEGEO', 'CVE_ENT': 'CVE_ENT', 'CVE_MUN': 'CVE_MUN', 'NOMGEO': 'NOMGEO', '15y+': '15y+', 'Analf_abs': 'Analf_abs', 'Analf_rel': 'Analf_rel', 'S_P_T_abs': 'S_P_T_abs', 'S_P_T_rel': 'S_P_T_rel', 'S_S_T_abs': 'S_S_T_abs', 'S_S_T_rel': 'S_S_T_rel', 'R_T_abs': 'R_T_abs', 'R_T_rel': 'R_T_rel', });
lyr_LIBRES_15.set('fieldAliases', {'CVEGEO': 'CVEGEO', 'CVE_ENT': 'CVE_ENT', 'CVE_MUN': 'CVE_MUN', 'NOMGEO': 'NOMGEO', '15y+': '15y+', 'Analf_abs': 'Analf_abs', 'Analf_rel': 'Analf_rel', 'S_P_T_abs': 'S_P_T_abs', 'S_P_T_rel': 'S_P_T_rel', 'S_S_T_abs': 'S_S_T_abs', 'S_S_T_rel': 'S_S_T_rel', 'R_T_abs': 'R_T_abs', 'R_T_rel': 'R_T_rel', });
lyr_HUAUCHINANGO_16.set('fieldAliases', {'CVEGEO': 'CVEGEO', 'CVE_ENT': 'CVE_ENT', 'CVE_MUN': 'CVE_MUN', 'NOMGEO': 'NOMGEO', '15y+': '15y+', 'Analf_abs': 'Analf_abs', 'Analf_rel': 'Analf_rel', 'S_P_T_abs': 'S_P_T_abs', 'S_P_T_rel': 'S_P_T_rel', 'S_S_T_abs': 'S_S_T_abs', 'S_S_T_rel': 'S_S_T_rel', 'R_T_abs': 'R_T_abs', 'R_T_rel': 'R_T_rel', });
lyr_CUETZALAN_17.set('fieldAliases', {'CVEGEO': 'CVEGEO', 'CVE_ENT': 'CVE_ENT', 'CVE_MUN': 'CVE_MUN', 'NOMGEO': 'NOMGEO', '15y+': '15y+', 'Analf_abs': 'Analf_abs', 'Analf_rel': 'Analf_rel', 'S_P_T_abs': 'S_P_T_abs', 'S_P_T_rel': 'S_P_T_rel', 'S_S_T_abs': 'S_S_T_abs', 'S_S_T_rel': 'S_S_T_rel', 'R_T_abs': 'R_T_abs', 'R_T_rel': 'R_T_rel', });
lyr_TEZIUTLAN1_18.set('fieldAliases', {'CVEGEO': 'CVEGEO', 'CVE_ENT': 'CVE_ENT', 'CVE_MUN': 'CVE_MUN', 'NOMGEO': 'NOMGEO', '15y+': '15y+', 'Analf_abs': 'Analf_abs', 'Analf_rel': 'Analf_rel', 'S_P_T_abs': 'S_P_T_abs', 'S_P_T_rel': 'S_P_T_rel', 'S_S_T_abs': 'S_S_T_abs', 'S_S_T_rel': 'S_S_T_rel', 'R_T_abs': 'R_T_abs', 'R_T_rel': 'R_T_rel', });
lyr_CDSERDAN_19.set('fieldAliases', {'CVEGEO': 'CVEGEO', 'CVE_ENT': 'CVE_ENT', 'CVE_MUN': 'CVE_MUN', 'NOMGEO': 'NOMGEO', '15y+': '15y+', 'Analf_abs': 'Analf_abs', 'Analf_rel': 'Analf_rel', 'S_P_T_abs': 'S_P_T_abs', 'S_P_T_rel': 'S_P_T_rel', 'S_S_T_abs': 'S_S_T_abs', 'S_S_T_rel': 'S_S_T_rel', 'R_T_abs': 'R_T_abs', 'R_T_rel': 'R_T_rel', });
lyr_TECAMACHALCO_20.set('fieldAliases', {'CVEGEO': 'CVEGEO', 'CVE_ENT': 'CVE_ENT', 'CVE_MUN': 'CVE_MUN', 'NOMGEO': 'NOMGEO', '15y+': '15y+', 'Analf_abs': 'Analf_abs', 'Analf_rel': 'Analf_rel', 'S_P_T_abs': 'S_P_T_abs', 'S_P_T_rel': 'S_P_T_rel', 'S_S_T_abs': 'S_S_T_abs', 'S_S_T_rel': 'S_S_T_rel', 'R_T_abs': 'R_T_abs', 'R_T_rel': 'R_T_rel', });
lyr_CatalogoEscuelasPrimarias_21.set('fieldAliases', {'cv_cct': 'cv_cct', 'c_nombre': 'c_nombre', 'cv_tipo': 'cv_tipo', 'c_tipo': 'c_tipo', 'cv_administrativa': 'cv_administrativa', 'c_administrativa': 'c_administrativa', 'cv_estatus': 'cv_estatus', 'c_estatus': 'c_estatus', 'cv_motivo': 'cv_motivo', 'c_motivo': 'c_motivo', 'cv_motivon2': 'cv_motivon2', 'c_descripcnmotivo': 'c_descripcnmotivo', 'inmueble_cv_inmueble': 'inmueble_cv_inmueble', 'inmueble_cv_vialidad_principal': 'inmueble_cv_vialidad_principal', 'inmueble_c_vialidad_principal': 'inmueble_c_vialidad_principal', 'inmueble_cv_vialidad_derecha': 'inmueble_cv_vialidad_derecha', 'inmueble_c_vialidad_derecha': 'inmueble_c_vialidad_derecha', 'inmueble_cv_vialidad_izquierda': 'inmueble_cv_vialidad_izquierda', 'inmueble_c_vialidad_izquierda': 'inmueble_c_vialidad_izquierda', 'inmueble_cv_vialidad_posterior': 'inmueble_cv_vialidad_posterior', 'inmueble_c_vialidad_posterior': 'inmueble_c_vialidad_posterior', 'inmueble_n_extnum': 'inmueble_n_extnum', 'inmueble_c_extalf': 'inmueble_c_extalf', 'inmueble_n_intnum': 'inmueble_n_intnum', 'inmueble_c_intalf': 'inmueble_c_intalf', 'inmueble_cv_ent': 'inmueble_cv_ent', 'inmueble_c_nom_ent': 'inmueble_c_nom_ent', 'inmueble_cv_mun': 'inmueble_cv_mun', 'inmueble_c_nom_mun': 'inmueble_c_nom_mun', 'inmueble_cv_loc': 'inmueble_cv_loc', 'inmueble_c_nom_loc': 'inmueble_c_nom_loc', 'inmueble_cv_asen': 'inmueble_cv_asen', 'inmueble_c_nom_asen': 'inmueble_c_nom_asen', 'inmueble_cv_codigo_postal': 'inmueble_cv_codigo_postal', 'inmueble_c_desc_ubicacion': 'inmueble_c_desc_ubicacion', 'latitud': 'latitud', 'longitud': 'longitud', 'sostenimiento_cv_control': 'sostenimiento_cv_control', 'sostenimiento_c_control': 'sostenimiento_c_control', 'sostenimiento_cv_subcontrol': 'sostenimiento_cv_subcontrol', 'sostenimiento_c_subcontrol': 'sostenimiento_c_subcontrol', 'sostenimiento_cv_dependencian1': 'sostenimiento_cv_dependencian1', 'sostenimiento_c_dependencian1': 'sostenimiento_c_dependencian1', 'sostenimiento_cv_dependencian2': 'sostenimiento_cv_dependencian2', 'sostenimiento_c_dependencian2': 'sostenimiento_c_dependencian2', 'sostenimiento_cv_dependencian3': 'sostenimiento_cv_dependencian3', 'sostenimiento_c_dependencian3': 'sostenimiento_c_dependencian3', 'sostenimiento_cv_dependencian4': 'sostenimiento_cv_dependencian4', 'sostenimiento_c_dependencian4': 'sostenimiento_c_dependencian4', 'sostenimiento_cv_dependencian5': 'sostenimiento_cv_dependencian5', 'sostenimiento_cv_servicio': 'sostenimiento_cv_servicio', 'sostenimiento_c_servicio': 'sostenimiento_c_servicio', 'depoperativa_cv_dependencian1': 'depoperativa_cv_dependencian1', 'depoperativa_c_dependencian1': 'depoperativa_c_dependencian1', 'depoperativa_cv_dependencian2': 'depoperativa_cv_dependencian2', 'depoperativa_c_dependencian2': 'depoperativa_c_dependencian2', 'depoperativa_cv_dependencian3': 'depoperativa_cv_dependencian3', 'depoperativa_c_dependencian3': 'depoperativa_c_dependencian3', 'depoperativa_cv_dependencian4': 'depoperativa_cv_dependencian4', 'depoperativa_c_dependencian4': 'depoperativa_c_dependencian4', 'depoperativa_cv_dependencian5': 'depoperativa_cv_dependencian5', 'contacto_c_curp': 'contacto_c_curp', 'contacto_c_rfc': 'contacto_c_rfc', 'contacto_c_nombre': 'contacto_c_nombre', 'contacto_c_apellido1': 'contacto_c_apellido1', 'contacto_c_apellido2': 'contacto_c_apellido2', 'contacto_c_email': 'contacto_c_email', 'contacto_c_telefono': 'contacto_c_telefono', 'contacto_c_celular': 'contacto_c_celular', 'contacto_c_extension': 'contacto_c_extension', 'contacto_c_pweb': 'contacto_c_pweb', 'serreg_cv_cct': 'serreg_cv_cct', 'jefsec_cv_cct': 'jefsec_cv_cct', 'supervision_cv_cct': 'supervision_cv_cct', 'institucion': 'institucion', 'c_tuno_01': 'c_tuno_01', 'c_tuno_2': 'c_tuno_2', 'c_tuno_3': 'c_tuno_3', 'tiponivelsub_cv_servicion1': 'tiponivelsub_cv_servicion1', 'tiponivelsub_c_servicion1': 'tiponivelsub_c_servicion1', 'tiponivelsub_cv_servicion2': 'tiponivelsub_cv_servicion2', 'tiponivelsub_c_servicion2': 'tiponivelsub_c_servicion2', 'tiponivelsub_cv_servicion3': 'tiponivelsub_cv_servicion3', 'tiponivelsub_c_servicion3': 'tiponivelsub_c_servicion3', 'caracteristca_cv_caracterizan1': 'caracteristca_cv_caracterizan1', 'caracteristca_c_caracterizan1': 'caracteristca_c_caracterizan1', 'caracteristca_cv_caracterizan2': 'caracteristca_cv_caracterizan2', 'caracteristca_c_caracterizan2': 'caracteristca_c_caracterizan2', 'fn_inmueble_c_extalf': 'fn_inmueble_c_extalf', 'fn_inmueble_c_intalf': 'fn_inmueble_c_intalf', 'fn_inmueble_c_nom_asen': 'fn_inmueble_c_nom_asen', 'fn_sostenimiento_cv_servicio': 'fn_sostenimiento_cv_servicio', });
lyr_MNZANA_REZ_TOT_ATLIXCO_22.set('fieldAliases', {'CVEGEO': 'CVEGEO', 'CVE_ENT': 'CVE_ENT', 'CVE_MUN': 'CVE_MUN', 'CVE_LOC': 'CVE_LOC', 'CVE_AGEB': 'CVE_AGEB', 'CVE_MZA': 'CVE_MZA', 'AMBITO': 'AMBITO', 'TIPOMZA': 'TIPOMZA', 'PB_TOT': 'PB_TOT', 'PB_TOT_M': 'PB_TOT_M', 'PB_TOT_H': 'PB_TOT_H', 'PB15YMS_T': 'PB15YMS_T', 'PB15YMS_M': 'PB15YMS_M', 'PB15YMS_H': 'PB15YMS_H', 'ALFABS_T': 'ALFABS_T', 'AABS_M': 'AABS_M', 'AABS_H': 'AABS_H', 'AREL_T': 'AREL_T', 'AREL_M': 'AREL_M', 'AREL_H': 'AREL_H', 'SPTABS_t': 'SPTABS_t', 'SPTABS_M': 'SPTABS_M', 'SPTABS_h': 'SPTABS_h', 'SPTREL_T': 'SPTREL_T', 'SPTREL_M': 'SPTREL_M', 'STREL_H': 'STREL_H', 'sstabs_t': 'sstabs_t', 'sstabs_m': 'sstabs_m', 'sstabs_h': 'sstabs_h', 'sstrel_t': 'sstrel_t', 'sstrel_m': 'sstrel_m', 'sstrel_h': 'sstrel_h', 'rezt_abs': 'rezt_abs', 'rezt_m': 'rezt_m', 'rezt_h': 'rezt_h', 'rezt_rel': 'rezt_rel', 'reztrel_m': 'reztrel_m', 'reztrel_h': 'reztrel_h', });
lyr_ads_23.set('fieldAliases', {'id': 'id', });
lyr_CatalogoEscuelasUniversidad_24.set('fieldAliases', {'cv_cct': 'cv_cct', 'c_nombre': 'c_nombre', 'cv_tipo': 'cv_tipo', 'c_tipo': 'c_tipo', 'cv_administrativa': 'cv_administrativa', 'c_administrativa': 'c_administrativa', 'cv_estatus': 'cv_estatus', 'c_estatus': 'c_estatus', 'cv_motivo': 'cv_motivo', 'c_motivo': 'c_motivo', 'cv_motivon2': 'cv_motivon2', 'c_descripcnmotivo': 'c_descripcnmotivo', 'inmueble_cv_inmueble': 'inmueble_cv_inmueble', 'inmueble_cv_vialidad_principal': 'inmueble_cv_vialidad_principal', 'inmueble_c_vialidad_principal': 'inmueble_c_vialidad_principal', 'inmueble_cv_vialidad_derecha': 'inmueble_cv_vialidad_derecha', 'inmueble_c_vialidad_derecha': 'inmueble_c_vialidad_derecha', 'inmueble_cv_vialidad_izquierda': 'inmueble_cv_vialidad_izquierda', 'inmueble_c_vialidad_izquierda': 'inmueble_c_vialidad_izquierda', 'inmueble_cv_vialidad_posterior': 'inmueble_cv_vialidad_posterior', 'inmueble_c_vialidad_posterior': 'inmueble_c_vialidad_posterior', 'inmueble_n_extnum': 'inmueble_n_extnum', 'inmueble_c_extalf': 'inmueble_c_extalf', 'inmueble_n_intnum': 'inmueble_n_intnum', 'inmueble_c_intalf': 'inmueble_c_intalf', 'inmueble_cv_ent': 'inmueble_cv_ent', 'inmueble_c_nom_ent': 'inmueble_c_nom_ent', 'inmueble_cv_mun': 'inmueble_cv_mun', 'inmueble_c_nom_mun': 'inmueble_c_nom_mun', 'inmueble_cv_loc': 'inmueble_cv_loc', 'inmueble_c_nom_loc': 'inmueble_c_nom_loc', 'inmueble_cv_asen': 'inmueble_cv_asen', 'inmueble_c_nom_asen': 'inmueble_c_nom_asen', 'inmueble_cv_codigo_postal': 'inmueble_cv_codigo_postal', 'inmueble_c_desc_ubicacion': 'inmueble_c_desc_ubicacion', 'latitud': 'latitud', 'longitud': 'longitud', 'sostenimiento_cv_control': 'sostenimiento_cv_control', 'sostenimiento_c_control': 'sostenimiento_c_control', 'sostenimiento_cv_subcontrol': 'sostenimiento_cv_subcontrol', 'sostenimiento_c_subcontrol': 'sostenimiento_c_subcontrol', 'sostenimiento_cv_dependencian1': 'sostenimiento_cv_dependencian1', 'sostenimiento_c_dependencian1': 'sostenimiento_c_dependencian1', 'sostenimiento_cv_dependencian2': 'sostenimiento_cv_dependencian2', 'sostenimiento_c_dependencian2': 'sostenimiento_c_dependencian2', 'sostenimiento_cv_dependencian3': 'sostenimiento_cv_dependencian3', 'sostenimiento_c_dependencian3': 'sostenimiento_c_dependencian3', 'sostenimiento_cv_dependencian4': 'sostenimiento_cv_dependencian4', 'sostenimiento_c_dependencian4': 'sostenimiento_c_dependencian4', 'sostenimiento_cv_dependencian5': 'sostenimiento_cv_dependencian5', 'sostenimiento_cv_servicio': 'sostenimiento_cv_servicio', 'sostenimiento_c_servicio': 'sostenimiento_c_servicio', 'depoperativa_cv_dependencian1': 'depoperativa_cv_dependencian1', 'depoperativa_c_dependencian1': 'depoperativa_c_dependencian1', 'depoperativa_cv_dependencian2': 'depoperativa_cv_dependencian2', 'depoperativa_c_dependencian2': 'depoperativa_c_dependencian2', 'depoperativa_cv_dependencian3': 'depoperativa_cv_dependencian3', 'depoperativa_c_dependencian3': 'depoperativa_c_dependencian3', 'depoperativa_cv_dependencian4': 'depoperativa_cv_dependencian4', 'depoperativa_c_dependencian4': 'depoperativa_c_dependencian4', 'depoperativa_cv_dependencian5': 'depoperativa_cv_dependencian5', 'contacto_c_curp': 'contacto_c_curp', 'contacto_c_rfc': 'contacto_c_rfc', 'contacto_c_nombre': 'contacto_c_nombre', 'contacto_c_apellido1': 'contacto_c_apellido1', 'contacto_c_apellido2': 'contacto_c_apellido2', 'contacto_c_email': 'contacto_c_email', 'contacto_c_telefono': 'contacto_c_telefono', 'contacto_c_celular': 'contacto_c_celular', 'contacto_c_extension': 'contacto_c_extension', 'contacto_c_pweb': 'contacto_c_pweb', 'serreg_cv_cct': 'serreg_cv_cct', 'jefsec_cv_cct': 'jefsec_cv_cct', 'supervision_cv_cct': 'supervision_cv_cct', 'institucion': 'institucion', 'c_tuno_01': 'c_tuno_01', 'c_tuno_2': 'c_tuno_2', 'c_tuno_3': 'c_tuno_3', 'tiponivelsub_cv_servicion1': 'tiponivelsub_cv_servicion1', 'tiponivelsub_c_servicion1': 'tiponivelsub_c_servicion1', 'tiponivelsub_cv_servicion2': 'tiponivelsub_cv_servicion2', 'tiponivelsub_c_servicion2': 'tiponivelsub_c_servicion2', 'tiponivelsub_cv_servicion3': 'tiponivelsub_cv_servicion3', 'tiponivelsub_c_servicion3': 'tiponivelsub_c_servicion3', 'caracteristca_cv_caracterizan1': 'caracteristca_cv_caracterizan1', 'caracteristca_c_caracterizan1': 'caracteristca_c_caracterizan1', 'caracteristca_cv_caracterizan2': 'caracteristca_cv_caracterizan2', 'caracteristca_c_caracterizan2': 'caracteristca_c_caracterizan2', 'fn_inmueble_c_extalf': 'fn_inmueble_c_extalf', 'fn_inmueble_c_intalf': 'fn_inmueble_c_intalf', 'fn_inmueble_c_nom_asen': 'fn_inmueble_c_nom_asen', 'fn_sostenimiento_cv_servicio': 'fn_sostenimiento_cv_servicio', });
lyr_PUE_NORTE_MANZAS_REZ_TOT_25.set('fieldAliases', {'CVEGEO': 'CVEGEO', 'CVE_ENT': 'CVE_ENT', 'CVE_MUN': 'CVE_MUN', 'CVE_LOC': 'CVE_LOC', 'CVE_AGEB': 'CVE_AGEB', 'CVE_MZA': 'CVE_MZA', 'AMBITO': 'AMBITO', 'TIPOMZA': 'TIPOMZA', 'PB_TOT': 'PB_TOT', 'PB_TOT_M': 'PB_TOT_M', 'PB_TOT_H': 'PB_TOT_H', 'PB15YMS_T': 'PB15YMS_T', 'PB15YMS_M': 'PB15YMS_M', 'PB15YMS_H': 'PB15YMS_H', 'ALFABS_T': 'ALFABS_T', 'AABS_M': 'AABS_M', 'AABS_H': 'AABS_H', 'AREL_T': 'AREL_T', 'AREL_M': 'AREL_M', 'AREL_H': 'AREL_H', 'SPTABS_t': 'SPTABS_t', 'SPTABS_M': 'SPTABS_M', 'SPTABS_h': 'SPTABS_h', 'SPTREL_T': 'SPTREL_T', 'SPTREL_M': 'SPTREL_M', 'STREL_H': 'STREL_H', 'sstabs_t': 'sstabs_t', 'sstabs_m': 'sstabs_m', 'sstabs_h': 'sstabs_h', 'sstrel_t': 'sstrel_t', 'sstrel_m': 'sstrel_m', 'sstrel_h': 'sstrel_h', 'rezt_abs': 'rezt_abs', 'rezt_m': 'rezt_m', 'rezt_h': 'rezt_h', 'rezt_rel': 'rezt_rel', 'reztrel_m': 'reztrel_m', 'reztrel_h': 'reztrel_h', });
lyr_PUE_CZ_26.set('fieldAliases', {'ENT': 'ENT', 'CLV_CZ': 'CLV_CZ', 'NOM_CZ': 'NOM_CZ', 'DIRECCIoN_CZ': 'DIRECCIoN_CZ', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_5TEHUACAN_1.set('fieldImages', {'CVEGEO': 'TextEdit', 'CVE_ENT': 'TextEdit', 'CVE_MUN': 'TextEdit', 'NOMGEO': 'TextEdit', '15y+': 'TextEdit', 'Analf_abs': 'TextEdit', 'Analf_rel': 'TextEdit', 'S_P_T_abs': 'TextEdit', 'S_P_T_rel': 'TextEdit', 'S_S_T_abs': 'TextEdit', 'S_S_T_rel': 'TextEdit', 'R_T_abs': 'TextEdit', 'R_T_rel': 'TextEdit', 'CVEGEO_2': 'TextEdit', 'CVE_ENT_2': 'TextEdit', 'CVE_MUN_2': 'TextEdit', 'NOMGEO_2': 'TextEdit', '15y+_2': 'TextEdit', 'Analf_abs_': 'TextEdit', 'Analf_rel_': 'TextEdit', 'S_P_T_abs_': 'TextEdit', 'S_P_T_rel_': 'TextEdit', 'S_S_T_abs_': 'TextEdit', 'S_S_T_rel_': 'TextEdit', 'R_T_abs_2': 'TextEdit', 'R_T_rel_2': 'TextEdit', 'CVEGEO_3': 'TextEdit', 'CVE_ENT_3': 'TextEdit', 'CVE_MUN_3': 'TextEdit', 'NOMGEO_3': 'TextEdit', '15y+_3': 'TextEdit', 'Analf_ab_1': 'TextEdit', 'Analf_re_1': 'TextEdit', 'S_P_T_ab_1': 'TextEdit', 'S_P_T_re_1': 'TextEdit', 'S_S_T_ab_1': 'TextEdit', 'S_S_T_re_1': 'TextEdit', 'R_T_abs_3': 'TextEdit', 'R_T_rel_3': 'TextEdit', });
lyr_CZ13PUEBLASUR_2.set('fieldImages', {'CVEGEO': '', 'CVE_ENT': '', 'CVE_MUN': '', 'NOMGEO': '', '15y+': '', 'Analf_abs': '', 'Analf_rel': '', 'S_P_T_abs': '', 'S_P_T_rel': '', 'S_S_T_abs': '', 'S_S_T_rel': '', 'R_T_abs': '', 'R_T_rel': '', });
lyr_14PUEBLANORTE_3.set('fieldImages', {'CVEGEO': '', 'CVE_ENT': '', 'CVE_MUN': '', 'NOMGEO': '', '15y+': '', 'Analf_abs': '', 'Analf_rel': '', 'S_P_T_abs': '', 'S_P_T_rel': '', 'S_S_T_abs': '', 'S_S_T_rel': '', 'R_T_abs': '', 'R_T_rel': '', });
lyr_IZUCAR_4.set('fieldImages', {'CVEGEO': '', 'CVE_ENT': '', 'CVE_MUN': '', 'NOMGEO': '', '15y+': '', 'Analf_abs': '', 'Analf_rel': '', 'S_P_T_abs': '', 'S_P_T_rel': '', 'S_S_T_abs': '', 'S_S_T_rel': '', 'R_T_abs': '', 'R_T_rel': '', });
lyr_cholula_5.set('fieldImages', {'CVEGEO': 'TextEdit', 'CVE_ENT': 'TextEdit', 'CVE_MUN': 'TextEdit', 'NOMGEO': 'TextEdit', '15y+': 'TextEdit', 'Analf_abs': 'TextEdit', 'Analf_rel': 'TextEdit', 'S_P_T_abs': 'TextEdit', 'S_P_T_rel': 'TextEdit', 'S_S_T_abs': 'TextEdit', 'S_S_T_rel': 'TextEdit', 'R_T_abs': 'TextEdit', 'R_T_rel': 'TextEdit', 'area': 'TextEdit', });
lyr_ATLIXCO_6.set('fieldImages', {'CVEGEO': 'TextEdit', 'CVE_ENT': 'TextEdit', 'CVE_MUN': 'TextEdit', 'NOMGEO': 'TextEdit', '15y+': 'TextEdit', 'Analf_abs': 'TextEdit', 'Analf_rel': 'TextEdit', 'S_P_T_abs': 'TextEdit', 'S_P_T_rel': 'TextEdit', 'S_S_T_abs': 'TextEdit', 'S_S_T_rel': 'TextEdit', 'R_T_abs': 'TextEdit', 'R_T_rel': 'TextEdit', });
lyr_21sia_7.set('fieldImages', {});
lyr_21sia_8.set('fieldImages', {});
lyr_21sil_9.set('fieldImages', {});
lyr_PLAZAS_COM_ATLIXCO_10.set('fieldImages', {'clve_aï¿½o': '', 'clve_mes': '', 'desc_mes': '', 'icveie': '', 'cdesie': '', 'icvecz': '', 'CUCZ_TXT': '', 'cdescz': '', 'icvemunici': '', 'CU_Mun': '', 'desmunicip': '', 'icvelocali': '', 'CU_Loc': '', 'Deslocalid': '', 'ccveplaza': '', 'icvesituac': '', 'cdessituac': '', 'cnomplaza': '', 'calle': '', 'numext': '', 'Colonia': '', 'codpostal': '', 'LAT': '', 'LON': '', });
lyr_ACATLAN_11.set('fieldImages', {'CVEGEO': 'TextEdit', 'CVE_ENT': 'TextEdit', 'CVE_MUN': 'TextEdit', 'NOMGEO': 'TextEdit', '15y+': 'TextEdit', 'Analf_abs': 'TextEdit', 'Analf_rel': 'TextEdit', 'S_P_T_abs': 'TextEdit', 'S_P_T_rel': 'TextEdit', 'S_S_T_abs': 'TextEdit', 'S_S_T_rel': 'TextEdit', 'R_T_abs': 'TextEdit', 'R_T_rel': 'TextEdit', });
lyr_16zoquitlan_12.set('fieldImages', {'CVEGEO': '', 'CVE_ENT': '', 'CVE_MUN': '', 'NOMGEO': '', '15y+': '', 'Analf_abs': '', 'Analf_rel': '', 'S_P_T_abs': '', 'S_P_T_rel': '', 'S_S_T_abs': '', 'S_S_T_rel': '', 'R_T_abs': '', 'R_T_rel': '', 'CVEGEO_2': '', 'CVE_ENT_2': '', 'CVE_MUN_2': '', 'NOMGEO_2': '', '15y+_2': '', 'Analf_abs_': '', 'Analf_rel_': '', 'S_P_T_abs_': '', 'S_P_T_rel_': '', 'S_S_T_abs_': '', 'S_S_T_rel_': '', 'R_T_abs_2': '', 'R_T_rel_2': '', 'CVEGEO_3': '', 'CVE_ENT_3': '', 'CVE_MUN_3': '', 'NOMGEO_3': '', '15y+_3': '', 'Analf_ab_1': '', 'Analf_re_1': '', 'S_P_T_ab_1': '', 'S_P_T_re_1': '', 'S_S_T_ab_1': '', 'S_S_T_re_1': '', 'R_T_abs_3': '', 'R_T_rel_3': '', });
lyr_TEPEACA_13.set('fieldImages', {'CVEGEO': 'TextEdit', 'CVE_ENT': 'TextEdit', 'CVE_MUN': 'TextEdit', 'NOMGEO': 'TextEdit', '15y+': 'TextEdit', 'Analf_abs': 'TextEdit', 'Analf_rel': 'TextEdit', 'S_P_T_abs': 'TextEdit', 'S_P_T_rel': 'TextEdit', 'S_S_T_abs': 'TextEdit', 'S_S_T_rel': 'TextEdit', 'R_T_abs': 'TextEdit', 'R_T_rel': 'TextEdit', });
lyr_ZACATLAN_14.set('fieldImages', {'CVEGEO': 'TextEdit', 'CVE_ENT': 'TextEdit', 'CVE_MUN': 'TextEdit', 'NOMGEO': 'TextEdit', '15y+': 'TextEdit', 'Analf_abs': 'TextEdit', 'Analf_rel': 'TextEdit', 'S_P_T_abs': 'TextEdit', 'S_P_T_rel': 'TextEdit', 'S_S_T_abs': 'TextEdit', 'S_S_T_rel': 'TextEdit', 'R_T_abs': 'TextEdit', 'R_T_rel': 'TextEdit', });
lyr_LIBRES_15.set('fieldImages', {'CVEGEO': 'TextEdit', 'CVE_ENT': 'TextEdit', 'CVE_MUN': 'TextEdit', 'NOMGEO': 'TextEdit', '15y+': 'TextEdit', 'Analf_abs': 'TextEdit', 'Analf_rel': 'TextEdit', 'S_P_T_abs': 'TextEdit', 'S_P_T_rel': 'TextEdit', 'S_S_T_abs': 'TextEdit', 'S_S_T_rel': 'TextEdit', 'R_T_abs': 'TextEdit', 'R_T_rel': 'TextEdit', });
lyr_HUAUCHINANGO_16.set('fieldImages', {'CVEGEO': 'TextEdit', 'CVE_ENT': 'TextEdit', 'CVE_MUN': 'TextEdit', 'NOMGEO': 'TextEdit', '15y+': 'TextEdit', 'Analf_abs': 'TextEdit', 'Analf_rel': 'TextEdit', 'S_P_T_abs': 'TextEdit', 'S_P_T_rel': 'TextEdit', 'S_S_T_abs': 'TextEdit', 'S_S_T_rel': 'TextEdit', 'R_T_abs': 'TextEdit', 'R_T_rel': 'TextEdit', });
lyr_CUETZALAN_17.set('fieldImages', {'CVEGEO': 'TextEdit', 'CVE_ENT': 'TextEdit', 'CVE_MUN': 'TextEdit', 'NOMGEO': 'TextEdit', '15y+': 'TextEdit', 'Analf_abs': 'TextEdit', 'Analf_rel': 'TextEdit', 'S_P_T_abs': 'TextEdit', 'S_P_T_rel': 'TextEdit', 'S_S_T_abs': 'TextEdit', 'S_S_T_rel': 'TextEdit', 'R_T_abs': 'TextEdit', 'R_T_rel': 'TextEdit', });
lyr_TEZIUTLAN1_18.set('fieldImages', {'CVEGEO': 'TextEdit', 'CVE_ENT': 'TextEdit', 'CVE_MUN': 'TextEdit', 'NOMGEO': 'TextEdit', '15y+': 'TextEdit', 'Analf_abs': 'TextEdit', 'Analf_rel': 'TextEdit', 'S_P_T_abs': 'TextEdit', 'S_P_T_rel': 'TextEdit', 'S_S_T_abs': 'TextEdit', 'S_S_T_rel': 'TextEdit', 'R_T_abs': 'TextEdit', 'R_T_rel': 'TextEdit', });
lyr_CDSERDAN_19.set('fieldImages', {'CVEGEO': 'TextEdit', 'CVE_ENT': 'TextEdit', 'CVE_MUN': 'TextEdit', 'NOMGEO': 'TextEdit', '15y+': 'TextEdit', 'Analf_abs': 'TextEdit', 'Analf_rel': 'TextEdit', 'S_P_T_abs': 'TextEdit', 'S_P_T_rel': 'TextEdit', 'S_S_T_abs': 'TextEdit', 'S_S_T_rel': 'TextEdit', 'R_T_abs': 'TextEdit', 'R_T_rel': 'TextEdit', });
lyr_TECAMACHALCO_20.set('fieldImages', {'CVEGEO': 'TextEdit', 'CVE_ENT': 'TextEdit', 'CVE_MUN': 'TextEdit', 'NOMGEO': 'TextEdit', '15y+': 'TextEdit', 'Analf_abs': 'TextEdit', 'Analf_rel': 'TextEdit', 'S_P_T_abs': 'TextEdit', 'S_P_T_rel': 'TextEdit', 'S_S_T_abs': 'TextEdit', 'S_S_T_rel': 'TextEdit', 'R_T_abs': 'TextEdit', 'R_T_rel': 'TextEdit', });
lyr_CatalogoEscuelasPrimarias_21.set('fieldImages', {'cv_cct': '', 'c_nombre': '', 'cv_tipo': '', 'c_tipo': '', 'cv_administrativa': '', 'c_administrativa': '', 'cv_estatus': '', 'c_estatus': '', 'cv_motivo': '', 'c_motivo': '', 'cv_motivon2': '', 'c_descripcnmotivo': '', 'inmueble_cv_inmueble': '', 'inmueble_cv_vialidad_principal': '', 'inmueble_c_vialidad_principal': '', 'inmueble_cv_vialidad_derecha': '', 'inmueble_c_vialidad_derecha': '', 'inmueble_cv_vialidad_izquierda': '', 'inmueble_c_vialidad_izquierda': '', 'inmueble_cv_vialidad_posterior': '', 'inmueble_c_vialidad_posterior': '', 'inmueble_n_extnum': '', 'inmueble_c_extalf': '', 'inmueble_n_intnum': '', 'inmueble_c_intalf': '', 'inmueble_cv_ent': '', 'inmueble_c_nom_ent': '', 'inmueble_cv_mun': '', 'inmueble_c_nom_mun': '', 'inmueble_cv_loc': '', 'inmueble_c_nom_loc': '', 'inmueble_cv_asen': '', 'inmueble_c_nom_asen': '', 'inmueble_cv_codigo_postal': '', 'inmueble_c_desc_ubicacion': '', 'latitud': '', 'longitud': '', 'sostenimiento_cv_control': '', 'sostenimiento_c_control': '', 'sostenimiento_cv_subcontrol': '', 'sostenimiento_c_subcontrol': '', 'sostenimiento_cv_dependencian1': '', 'sostenimiento_c_dependencian1': '', 'sostenimiento_cv_dependencian2': '', 'sostenimiento_c_dependencian2': '', 'sostenimiento_cv_dependencian3': '', 'sostenimiento_c_dependencian3': '', 'sostenimiento_cv_dependencian4': '', 'sostenimiento_c_dependencian4': '', 'sostenimiento_cv_dependencian5': '', 'sostenimiento_cv_servicio': '', 'sostenimiento_c_servicio': '', 'depoperativa_cv_dependencian1': '', 'depoperativa_c_dependencian1': '', 'depoperativa_cv_dependencian2': '', 'depoperativa_c_dependencian2': '', 'depoperativa_cv_dependencian3': '', 'depoperativa_c_dependencian3': '', 'depoperativa_cv_dependencian4': '', 'depoperativa_c_dependencian4': '', 'depoperativa_cv_dependencian5': '', 'contacto_c_curp': '', 'contacto_c_rfc': '', 'contacto_c_nombre': '', 'contacto_c_apellido1': '', 'contacto_c_apellido2': '', 'contacto_c_email': '', 'contacto_c_telefono': '', 'contacto_c_celular': '', 'contacto_c_extension': '', 'contacto_c_pweb': '', 'serreg_cv_cct': '', 'jefsec_cv_cct': '', 'supervision_cv_cct': '', 'institucion': '', 'c_tuno_01': '', 'c_tuno_2': '', 'c_tuno_3': '', 'tiponivelsub_cv_servicion1': '', 'tiponivelsub_c_servicion1': '', 'tiponivelsub_cv_servicion2': '', 'tiponivelsub_c_servicion2': '', 'tiponivelsub_cv_servicion3': '', 'tiponivelsub_c_servicion3': '', 'caracteristca_cv_caracterizan1': '', 'caracteristca_c_caracterizan1': '', 'caracteristca_cv_caracterizan2': '', 'caracteristca_c_caracterizan2': '', 'fn_inmueble_c_extalf': '', 'fn_inmueble_c_intalf': '', 'fn_inmueble_c_nom_asen': '', 'fn_sostenimiento_cv_servicio': '', });
lyr_MNZANA_REZ_TOT_ATLIXCO_22.set('fieldImages', {'CVEGEO': '', 'CVE_ENT': '', 'CVE_MUN': '', 'CVE_LOC': '', 'CVE_AGEB': '', 'CVE_MZA': '', 'AMBITO': '', 'TIPOMZA': '', 'PB_TOT': '', 'PB_TOT_M': '', 'PB_TOT_H': '', 'PB15YMS_T': '', 'PB15YMS_M': '', 'PB15YMS_H': '', 'ALFABS_T': '', 'AABS_M': '', 'AABS_H': '', 'AREL_T': '', 'AREL_M': '', 'AREL_H': '', 'SPTABS_t': '', 'SPTABS_M': '', 'SPTABS_h': '', 'SPTREL_T': '', 'SPTREL_M': '', 'STREL_H': '', 'sstabs_t': '', 'sstabs_m': '', 'sstabs_h': '', 'sstrel_t': '', 'sstrel_m': '', 'sstrel_h': '', 'rezt_abs': '', 'rezt_m': '', 'rezt_h': '', 'rezt_rel': '', 'reztrel_m': '', 'reztrel_h': '', });
lyr_ads_23.set('fieldImages', {'id': '', });
lyr_CatalogoEscuelasUniversidad_24.set('fieldImages', {'cv_cct': '', 'c_nombre': '', 'cv_tipo': '', 'c_tipo': '', 'cv_administrativa': '', 'c_administrativa': '', 'cv_estatus': '', 'c_estatus': '', 'cv_motivo': '', 'c_motivo': '', 'cv_motivon2': '', 'c_descripcnmotivo': '', 'inmueble_cv_inmueble': '', 'inmueble_cv_vialidad_principal': '', 'inmueble_c_vialidad_principal': '', 'inmueble_cv_vialidad_derecha': '', 'inmueble_c_vialidad_derecha': '', 'inmueble_cv_vialidad_izquierda': '', 'inmueble_c_vialidad_izquierda': '', 'inmueble_cv_vialidad_posterior': '', 'inmueble_c_vialidad_posterior': '', 'inmueble_n_extnum': '', 'inmueble_c_extalf': '', 'inmueble_n_intnum': '', 'inmueble_c_intalf': '', 'inmueble_cv_ent': '', 'inmueble_c_nom_ent': '', 'inmueble_cv_mun': '', 'inmueble_c_nom_mun': '', 'inmueble_cv_loc': '', 'inmueble_c_nom_loc': '', 'inmueble_cv_asen': '', 'inmueble_c_nom_asen': '', 'inmueble_cv_codigo_postal': '', 'inmueble_c_desc_ubicacion': '', 'latitud': '', 'longitud': '', 'sostenimiento_cv_control': '', 'sostenimiento_c_control': '', 'sostenimiento_cv_subcontrol': '', 'sostenimiento_c_subcontrol': '', 'sostenimiento_cv_dependencian1': '', 'sostenimiento_c_dependencian1': '', 'sostenimiento_cv_dependencian2': '', 'sostenimiento_c_dependencian2': '', 'sostenimiento_cv_dependencian3': '', 'sostenimiento_c_dependencian3': '', 'sostenimiento_cv_dependencian4': '', 'sostenimiento_c_dependencian4': '', 'sostenimiento_cv_dependencian5': '', 'sostenimiento_cv_servicio': '', 'sostenimiento_c_servicio': '', 'depoperativa_cv_dependencian1': '', 'depoperativa_c_dependencian1': '', 'depoperativa_cv_dependencian2': '', 'depoperativa_c_dependencian2': '', 'depoperativa_cv_dependencian3': '', 'depoperativa_c_dependencian3': '', 'depoperativa_cv_dependencian4': '', 'depoperativa_c_dependencian4': '', 'depoperativa_cv_dependencian5': '', 'contacto_c_curp': '', 'contacto_c_rfc': '', 'contacto_c_nombre': '', 'contacto_c_apellido1': '', 'contacto_c_apellido2': '', 'contacto_c_email': '', 'contacto_c_telefono': '', 'contacto_c_celular': '', 'contacto_c_extension': '', 'contacto_c_pweb': '', 'serreg_cv_cct': '', 'jefsec_cv_cct': '', 'supervision_cv_cct': '', 'institucion': '', 'c_tuno_01': '', 'c_tuno_2': '', 'c_tuno_3': '', 'tiponivelsub_cv_servicion1': '', 'tiponivelsub_c_servicion1': '', 'tiponivelsub_cv_servicion2': '', 'tiponivelsub_c_servicion2': '', 'tiponivelsub_cv_servicion3': '', 'tiponivelsub_c_servicion3': '', 'caracteristca_cv_caracterizan1': '', 'caracteristca_c_caracterizan1': '', 'caracteristca_cv_caracterizan2': '', 'caracteristca_c_caracterizan2': '', 'fn_inmueble_c_extalf': '', 'fn_inmueble_c_intalf': '', 'fn_inmueble_c_nom_asen': '', 'fn_sostenimiento_cv_servicio': '', });
lyr_PUE_NORTE_MANZAS_REZ_TOT_25.set('fieldImages', {'CVEGEO': '', 'CVE_ENT': '', 'CVE_MUN': '', 'CVE_LOC': '', 'CVE_AGEB': '', 'CVE_MZA': '', 'AMBITO': '', 'TIPOMZA': '', 'PB_TOT': '', 'PB_TOT_M': '', 'PB_TOT_H': '', 'PB15YMS_T': '', 'PB15YMS_M': '', 'PB15YMS_H': '', 'ALFABS_T': '', 'AABS_M': '', 'AABS_H': '', 'AREL_T': '', 'AREL_M': '', 'AREL_H': '', 'SPTABS_t': '', 'SPTABS_M': '', 'SPTABS_h': '', 'SPTREL_T': '', 'SPTREL_M': '', 'STREL_H': '', 'sstabs_t': '', 'sstabs_m': '', 'sstabs_h': '', 'sstrel_t': '', 'sstrel_m': '', 'sstrel_h': '', 'rezt_abs': '', 'rezt_m': '', 'rezt_h': '', 'rezt_rel': '', 'reztrel_m': '', 'reztrel_h': '', });
lyr_PUE_CZ_26.set('fieldImages', {'ENT': 'TextEdit', 'CLV_CZ': 'Range', 'NOM_CZ': 'TextEdit', 'DIRECCIoN_CZ': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_5TEHUACAN_1.set('fieldLabels', {'CVEGEO': 'no label', 'CVE_ENT': 'no label', 'CVE_MUN': 'no label', 'NOMGEO': 'no label', '15y+': 'no label', 'Analf_abs': 'no label', 'Analf_rel': 'no label', 'S_P_T_abs': 'no label', 'S_P_T_rel': 'no label', 'S_S_T_abs': 'no label', 'S_S_T_rel': 'no label', 'R_T_abs': 'no label', 'R_T_rel': 'no label', 'CVEGEO_2': 'no label', 'CVE_ENT_2': 'no label', 'CVE_MUN_2': 'no label', 'NOMGEO_2': 'no label', '15y+_2': 'no label', 'Analf_abs_': 'no label', 'Analf_rel_': 'no label', 'S_P_T_abs_': 'no label', 'S_P_T_rel_': 'no label', 'S_S_T_abs_': 'no label', 'S_S_T_rel_': 'no label', 'R_T_abs_2': 'no label', 'R_T_rel_2': 'no label', 'CVEGEO_3': 'no label', 'CVE_ENT_3': 'no label', 'CVE_MUN_3': 'no label', 'NOMGEO_3': 'no label', '15y+_3': 'no label', 'Analf_ab_1': 'no label', 'Analf_re_1': 'no label', 'S_P_T_ab_1': 'no label', 'S_P_T_re_1': 'no label', 'S_S_T_ab_1': 'no label', 'S_S_T_re_1': 'no label', 'R_T_abs_3': 'no label', 'R_T_rel_3': 'no label', });
lyr_CZ13PUEBLASUR_2.set('fieldLabels', {'CVEGEO': 'no label', 'CVE_ENT': 'no label', 'CVE_MUN': 'no label', 'NOMGEO': 'no label', '15y+': 'no label', 'Analf_abs': 'no label', 'Analf_rel': 'no label', 'S_P_T_abs': 'no label', 'S_P_T_rel': 'no label', 'S_S_T_abs': 'no label', 'S_S_T_rel': 'no label', 'R_T_abs': 'no label', 'R_T_rel': 'no label', });
lyr_14PUEBLANORTE_3.set('fieldLabels', {'CVEGEO': 'no label', 'CVE_ENT': 'no label', 'CVE_MUN': 'no label', 'NOMGEO': 'no label', '15y+': 'no label', 'Analf_abs': 'no label', 'Analf_rel': 'no label', 'S_P_T_abs': 'no label', 'S_P_T_rel': 'no label', 'S_S_T_abs': 'no label', 'S_S_T_rel': 'no label', 'R_T_abs': 'no label', 'R_T_rel': 'no label', });
lyr_IZUCAR_4.set('fieldLabels', {'CVEGEO': 'no label', 'CVE_ENT': 'no label', 'CVE_MUN': 'no label', 'NOMGEO': 'no label', '15y+': 'no label', 'Analf_abs': 'no label', 'Analf_rel': 'no label', 'S_P_T_abs': 'no label', 'S_P_T_rel': 'no label', 'S_S_T_abs': 'no label', 'S_S_T_rel': 'no label', 'R_T_abs': 'no label', 'R_T_rel': 'no label', });
lyr_cholula_5.set('fieldLabels', {'CVEGEO': 'no label', 'CVE_ENT': 'no label', 'CVE_MUN': 'no label', 'NOMGEO': 'no label', '15y+': 'no label', 'Analf_abs': 'no label', 'Analf_rel': 'no label', 'S_P_T_abs': 'no label', 'S_P_T_rel': 'no label', 'S_S_T_abs': 'no label', 'S_S_T_rel': 'no label', 'R_T_abs': 'no label', 'R_T_rel': 'no label', 'area': 'no label', });
lyr_ATLIXCO_6.set('fieldLabels', {'CVEGEO': 'no label', 'CVE_ENT': 'no label', 'CVE_MUN': 'no label', 'NOMGEO': 'no label', '15y+': 'no label', 'Analf_abs': 'no label', 'Analf_rel': 'no label', 'S_P_T_abs': 'no label', 'S_P_T_rel': 'no label', 'S_S_T_abs': 'no label', 'S_S_T_rel': 'no label', 'R_T_abs': 'no label', 'R_T_rel': 'no label', });
lyr_21sia_7.set('fieldLabels', {});
lyr_21sia_8.set('fieldLabels', {});
lyr_21sil_9.set('fieldLabels', {});
lyr_PLAZAS_COM_ATLIXCO_10.set('fieldLabels', {'clve_aï¿½o': 'no label', 'clve_mes': 'no label', 'desc_mes': 'no label', 'icveie': 'no label', 'cdesie': 'no label', 'icvecz': 'no label', 'CUCZ_TXT': 'no label', 'cdescz': 'no label', 'icvemunici': 'no label', 'CU_Mun': 'no label', 'desmunicip': 'no label', 'icvelocali': 'no label', 'CU_Loc': 'no label', 'Deslocalid': 'no label', 'ccveplaza': 'no label', 'icvesituac': 'no label', 'cdessituac': 'no label', 'cnomplaza': 'no label', 'calle': 'no label', 'numext': 'no label', 'Colonia': 'no label', 'codpostal': 'no label', 'LAT': 'no label', 'LON': 'no label', });
lyr_ACATLAN_11.set('fieldLabels', {'CVEGEO': 'no label', 'CVE_ENT': 'no label', 'CVE_MUN': 'no label', 'NOMGEO': 'no label', '15y+': 'no label', 'Analf_abs': 'no label', 'Analf_rel': 'no label', 'S_P_T_abs': 'no label', 'S_P_T_rel': 'no label', 'S_S_T_abs': 'no label', 'S_S_T_rel': 'no label', 'R_T_abs': 'no label', 'R_T_rel': 'no label', });
lyr_16zoquitlan_12.set('fieldLabels', {'CVEGEO': 'no label', 'CVE_ENT': 'no label', 'CVE_MUN': 'no label', 'NOMGEO': 'no label', '15y+': 'no label', 'Analf_abs': 'no label', 'Analf_rel': 'no label', 'S_P_T_abs': 'no label', 'S_P_T_rel': 'no label', 'S_S_T_abs': 'no label', 'S_S_T_rel': 'no label', 'R_T_abs': 'no label', 'R_T_rel': 'no label', 'CVEGEO_2': 'no label', 'CVE_ENT_2': 'no label', 'CVE_MUN_2': 'no label', 'NOMGEO_2': 'no label', '15y+_2': 'no label', 'Analf_abs_': 'no label', 'Analf_rel_': 'no label', 'S_P_T_abs_': 'no label', 'S_P_T_rel_': 'no label', 'S_S_T_abs_': 'no label', 'S_S_T_rel_': 'no label', 'R_T_abs_2': 'no label', 'R_T_rel_2': 'no label', 'CVEGEO_3': 'no label', 'CVE_ENT_3': 'no label', 'CVE_MUN_3': 'no label', 'NOMGEO_3': 'no label', '15y+_3': 'no label', 'Analf_ab_1': 'no label', 'Analf_re_1': 'no label', 'S_P_T_ab_1': 'no label', 'S_P_T_re_1': 'no label', 'S_S_T_ab_1': 'no label', 'S_S_T_re_1': 'no label', 'R_T_abs_3': 'no label', 'R_T_rel_3': 'no label', });
lyr_TEPEACA_13.set('fieldLabels', {'CVEGEO': 'no label', 'CVE_ENT': 'no label', 'CVE_MUN': 'no label', 'NOMGEO': 'no label', '15y+': 'no label', 'Analf_abs': 'no label', 'Analf_rel': 'no label', 'S_P_T_abs': 'no label', 'S_P_T_rel': 'no label', 'S_S_T_abs': 'no label', 'S_S_T_rel': 'no label', 'R_T_abs': 'no label', 'R_T_rel': 'no label', });
lyr_ZACATLAN_14.set('fieldLabels', {'CVEGEO': 'no label', 'CVE_ENT': 'no label', 'CVE_MUN': 'no label', 'NOMGEO': 'no label', '15y+': 'no label', 'Analf_abs': 'no label', 'Analf_rel': 'no label', 'S_P_T_abs': 'no label', 'S_P_T_rel': 'no label', 'S_S_T_abs': 'no label', 'S_S_T_rel': 'no label', 'R_T_abs': 'no label', 'R_T_rel': 'no label', });
lyr_LIBRES_15.set('fieldLabels', {'CVEGEO': 'no label', 'CVE_ENT': 'no label', 'CVE_MUN': 'no label', 'NOMGEO': 'no label', '15y+': 'no label', 'Analf_abs': 'no label', 'Analf_rel': 'no label', 'S_P_T_abs': 'no label', 'S_P_T_rel': 'no label', 'S_S_T_abs': 'no label', 'S_S_T_rel': 'no label', 'R_T_abs': 'no label', 'R_T_rel': 'no label', });
lyr_HUAUCHINANGO_16.set('fieldLabels', {'CVEGEO': 'no label', 'CVE_ENT': 'no label', 'CVE_MUN': 'no label', 'NOMGEO': 'no label', '15y+': 'no label', 'Analf_abs': 'no label', 'Analf_rel': 'no label', 'S_P_T_abs': 'no label', 'S_P_T_rel': 'no label', 'S_S_T_abs': 'no label', 'S_S_T_rel': 'no label', 'R_T_abs': 'no label', 'R_T_rel': 'no label', });
lyr_CUETZALAN_17.set('fieldLabels', {'CVEGEO': 'no label', 'CVE_ENT': 'no label', 'CVE_MUN': 'no label', 'NOMGEO': 'no label', '15y+': 'no label', 'Analf_abs': 'no label', 'Analf_rel': 'no label', 'S_P_T_abs': 'no label', 'S_P_T_rel': 'no label', 'S_S_T_abs': 'no label', 'S_S_T_rel': 'no label', 'R_T_abs': 'no label', 'R_T_rel': 'no label', });
lyr_TEZIUTLAN1_18.set('fieldLabels', {'CVEGEO': 'no label', 'CVE_ENT': 'no label', 'CVE_MUN': 'no label', 'NOMGEO': 'no label', '15y+': 'no label', 'Analf_abs': 'no label', 'Analf_rel': 'no label', 'S_P_T_abs': 'no label', 'S_P_T_rel': 'no label', 'S_S_T_abs': 'no label', 'S_S_T_rel': 'no label', 'R_T_abs': 'no label', 'R_T_rel': 'no label', });
lyr_CDSERDAN_19.set('fieldLabels', {'CVEGEO': 'no label', 'CVE_ENT': 'no label', 'CVE_MUN': 'no label', 'NOMGEO': 'no label', '15y+': 'no label', 'Analf_abs': 'no label', 'Analf_rel': 'no label', 'S_P_T_abs': 'no label', 'S_P_T_rel': 'no label', 'S_S_T_abs': 'no label', 'S_S_T_rel': 'no label', 'R_T_abs': 'no label', 'R_T_rel': 'no label', });
lyr_TECAMACHALCO_20.set('fieldLabels', {'CVEGEO': 'no label', 'CVE_ENT': 'no label', 'CVE_MUN': 'no label', 'NOMGEO': 'no label', '15y+': 'no label', 'Analf_abs': 'no label', 'Analf_rel': 'no label', 'S_P_T_abs': 'no label', 'S_P_T_rel': 'no label', 'S_S_T_abs': 'no label', 'S_S_T_rel': 'no label', 'R_T_abs': 'no label', 'R_T_rel': 'no label', });
lyr_CatalogoEscuelasPrimarias_21.set('fieldLabels', {'cv_cct': 'no label', 'c_nombre': 'no label', 'cv_tipo': 'no label', 'c_tipo': 'no label', 'cv_administrativa': 'no label', 'c_administrativa': 'no label', 'cv_estatus': 'no label', 'c_estatus': 'no label', 'cv_motivo': 'no label', 'c_motivo': 'no label', 'cv_motivon2': 'no label', 'c_descripcnmotivo': 'no label', 'inmueble_cv_inmueble': 'no label', 'inmueble_cv_vialidad_principal': 'no label', 'inmueble_c_vialidad_principal': 'no label', 'inmueble_cv_vialidad_derecha': 'no label', 'inmueble_c_vialidad_derecha': 'no label', 'inmueble_cv_vialidad_izquierda': 'no label', 'inmueble_c_vialidad_izquierda': 'no label', 'inmueble_cv_vialidad_posterior': 'no label', 'inmueble_c_vialidad_posterior': 'no label', 'inmueble_n_extnum': 'no label', 'inmueble_c_extalf': 'no label', 'inmueble_n_intnum': 'no label', 'inmueble_c_intalf': 'no label', 'inmueble_cv_ent': 'no label', 'inmueble_c_nom_ent': 'no label', 'inmueble_cv_mun': 'no label', 'inmueble_c_nom_mun': 'no label', 'inmueble_cv_loc': 'no label', 'inmueble_c_nom_loc': 'no label', 'inmueble_cv_asen': 'no label', 'inmueble_c_nom_asen': 'no label', 'inmueble_cv_codigo_postal': 'no label', 'inmueble_c_desc_ubicacion': 'no label', 'latitud': 'no label', 'longitud': 'no label', 'sostenimiento_cv_control': 'no label', 'sostenimiento_c_control': 'no label', 'sostenimiento_cv_subcontrol': 'no label', 'sostenimiento_c_subcontrol': 'no label', 'sostenimiento_cv_dependencian1': 'no label', 'sostenimiento_c_dependencian1': 'no label', 'sostenimiento_cv_dependencian2': 'no label', 'sostenimiento_c_dependencian2': 'no label', 'sostenimiento_cv_dependencian3': 'no label', 'sostenimiento_c_dependencian3': 'no label', 'sostenimiento_cv_dependencian4': 'no label', 'sostenimiento_c_dependencian4': 'no label', 'sostenimiento_cv_dependencian5': 'no label', 'sostenimiento_cv_servicio': 'no label', 'sostenimiento_c_servicio': 'no label', 'depoperativa_cv_dependencian1': 'no label', 'depoperativa_c_dependencian1': 'no label', 'depoperativa_cv_dependencian2': 'no label', 'depoperativa_c_dependencian2': 'no label', 'depoperativa_cv_dependencian3': 'no label', 'depoperativa_c_dependencian3': 'no label', 'depoperativa_cv_dependencian4': 'no label', 'depoperativa_c_dependencian4': 'no label', 'depoperativa_cv_dependencian5': 'no label', 'contacto_c_curp': 'no label', 'contacto_c_rfc': 'no label', 'contacto_c_nombre': 'no label', 'contacto_c_apellido1': 'no label', 'contacto_c_apellido2': 'no label', 'contacto_c_email': 'no label', 'contacto_c_telefono': 'no label', 'contacto_c_celular': 'no label', 'contacto_c_extension': 'no label', 'contacto_c_pweb': 'no label', 'serreg_cv_cct': 'no label', 'jefsec_cv_cct': 'no label', 'supervision_cv_cct': 'no label', 'institucion': 'no label', 'c_tuno_01': 'no label', 'c_tuno_2': 'no label', 'c_tuno_3': 'no label', 'tiponivelsub_cv_servicion1': 'no label', 'tiponivelsub_c_servicion1': 'no label', 'tiponivelsub_cv_servicion2': 'no label', 'tiponivelsub_c_servicion2': 'no label', 'tiponivelsub_cv_servicion3': 'no label', 'tiponivelsub_c_servicion3': 'no label', 'caracteristca_cv_caracterizan1': 'no label', 'caracteristca_c_caracterizan1': 'no label', 'caracteristca_cv_caracterizan2': 'no label', 'caracteristca_c_caracterizan2': 'no label', 'fn_inmueble_c_extalf': 'no label', 'fn_inmueble_c_intalf': 'no label', 'fn_inmueble_c_nom_asen': 'no label', 'fn_sostenimiento_cv_servicio': 'no label', });
lyr_MNZANA_REZ_TOT_ATLIXCO_22.set('fieldLabels', {'CVEGEO': 'no label', 'CVE_ENT': 'no label', 'CVE_MUN': 'no label', 'CVE_LOC': 'no label', 'CVE_AGEB': 'no label', 'CVE_MZA': 'no label', 'AMBITO': 'no label', 'TIPOMZA': 'no label', 'PB_TOT': 'no label', 'PB_TOT_M': 'no label', 'PB_TOT_H': 'no label', 'PB15YMS_T': 'no label', 'PB15YMS_M': 'no label', 'PB15YMS_H': 'no label', 'ALFABS_T': 'no label', 'AABS_M': 'no label', 'AABS_H': 'no label', 'AREL_T': 'no label', 'AREL_M': 'no label', 'AREL_H': 'no label', 'SPTABS_t': 'no label', 'SPTABS_M': 'no label', 'SPTABS_h': 'no label', 'SPTREL_T': 'no label', 'SPTREL_M': 'no label', 'STREL_H': 'no label', 'sstabs_t': 'no label', 'sstabs_m': 'no label', 'sstabs_h': 'no label', 'sstrel_t': 'no label', 'sstrel_m': 'no label', 'sstrel_h': 'no label', 'rezt_abs': 'no label', 'rezt_m': 'no label', 'rezt_h': 'no label', 'rezt_rel': 'no label', 'reztrel_m': 'no label', 'reztrel_h': 'no label', });
lyr_ads_23.set('fieldLabels', {'id': 'no label', });
lyr_CatalogoEscuelasUniversidad_24.set('fieldLabels', {'cv_cct': 'no label', 'c_nombre': 'no label', 'cv_tipo': 'no label', 'c_tipo': 'no label', 'cv_administrativa': 'no label', 'c_administrativa': 'no label', 'cv_estatus': 'no label', 'c_estatus': 'no label', 'cv_motivo': 'no label', 'c_motivo': 'no label', 'cv_motivon2': 'no label', 'c_descripcnmotivo': 'no label', 'inmueble_cv_inmueble': 'no label', 'inmueble_cv_vialidad_principal': 'no label', 'inmueble_c_vialidad_principal': 'no label', 'inmueble_cv_vialidad_derecha': 'no label', 'inmueble_c_vialidad_derecha': 'no label', 'inmueble_cv_vialidad_izquierda': 'no label', 'inmueble_c_vialidad_izquierda': 'no label', 'inmueble_cv_vialidad_posterior': 'no label', 'inmueble_c_vialidad_posterior': 'no label', 'inmueble_n_extnum': 'no label', 'inmueble_c_extalf': 'no label', 'inmueble_n_intnum': 'no label', 'inmueble_c_intalf': 'no label', 'inmueble_cv_ent': 'no label', 'inmueble_c_nom_ent': 'no label', 'inmueble_cv_mun': 'no label', 'inmueble_c_nom_mun': 'no label', 'inmueble_cv_loc': 'no label', 'inmueble_c_nom_loc': 'no label', 'inmueble_cv_asen': 'no label', 'inmueble_c_nom_asen': 'no label', 'inmueble_cv_codigo_postal': 'no label', 'inmueble_c_desc_ubicacion': 'no label', 'latitud': 'no label', 'longitud': 'no label', 'sostenimiento_cv_control': 'no label', 'sostenimiento_c_control': 'no label', 'sostenimiento_cv_subcontrol': 'no label', 'sostenimiento_c_subcontrol': 'no label', 'sostenimiento_cv_dependencian1': 'no label', 'sostenimiento_c_dependencian1': 'no label', 'sostenimiento_cv_dependencian2': 'no label', 'sostenimiento_c_dependencian2': 'no label', 'sostenimiento_cv_dependencian3': 'no label', 'sostenimiento_c_dependencian3': 'no label', 'sostenimiento_cv_dependencian4': 'no label', 'sostenimiento_c_dependencian4': 'no label', 'sostenimiento_cv_dependencian5': 'no label', 'sostenimiento_cv_servicio': 'no label', 'sostenimiento_c_servicio': 'no label', 'depoperativa_cv_dependencian1': 'no label', 'depoperativa_c_dependencian1': 'no label', 'depoperativa_cv_dependencian2': 'no label', 'depoperativa_c_dependencian2': 'no label', 'depoperativa_cv_dependencian3': 'no label', 'depoperativa_c_dependencian3': 'no label', 'depoperativa_cv_dependencian4': 'no label', 'depoperativa_c_dependencian4': 'no label', 'depoperativa_cv_dependencian5': 'no label', 'contacto_c_curp': 'no label', 'contacto_c_rfc': 'no label', 'contacto_c_nombre': 'no label', 'contacto_c_apellido1': 'no label', 'contacto_c_apellido2': 'no label', 'contacto_c_email': 'no label', 'contacto_c_telefono': 'no label', 'contacto_c_celular': 'no label', 'contacto_c_extension': 'no label', 'contacto_c_pweb': 'no label', 'serreg_cv_cct': 'no label', 'jefsec_cv_cct': 'no label', 'supervision_cv_cct': 'no label', 'institucion': 'no label', 'c_tuno_01': 'no label', 'c_tuno_2': 'no label', 'c_tuno_3': 'no label', 'tiponivelsub_cv_servicion1': 'no label', 'tiponivelsub_c_servicion1': 'no label', 'tiponivelsub_cv_servicion2': 'no label', 'tiponivelsub_c_servicion2': 'no label', 'tiponivelsub_cv_servicion3': 'no label', 'tiponivelsub_c_servicion3': 'no label', 'caracteristca_cv_caracterizan1': 'no label', 'caracteristca_c_caracterizan1': 'no label', 'caracteristca_cv_caracterizan2': 'no label', 'caracteristca_c_caracterizan2': 'no label', 'fn_inmueble_c_extalf': 'no label', 'fn_inmueble_c_intalf': 'no label', 'fn_inmueble_c_nom_asen': 'no label', 'fn_sostenimiento_cv_servicio': 'no label', });
lyr_PUE_NORTE_MANZAS_REZ_TOT_25.set('fieldLabels', {'CVEGEO': 'no label', 'CVE_ENT': 'no label', 'CVE_MUN': 'no label', 'CVE_LOC': 'no label', 'CVE_AGEB': 'no label', 'CVE_MZA': 'no label', 'AMBITO': 'no label', 'TIPOMZA': 'no label', 'PB_TOT': 'no label', 'PB_TOT_M': 'no label', 'PB_TOT_H': 'no label', 'PB15YMS_T': 'no label', 'PB15YMS_M': 'no label', 'PB15YMS_H': 'no label', 'ALFABS_T': 'no label', 'AABS_M': 'no label', 'AABS_H': 'no label', 'AREL_T': 'no label', 'AREL_M': 'no label', 'AREL_H': 'no label', 'SPTABS_t': 'no label', 'SPTABS_M': 'no label', 'SPTABS_h': 'no label', 'SPTREL_T': 'no label', 'SPTREL_M': 'no label', 'STREL_H': 'no label', 'sstabs_t': 'no label', 'sstabs_m': 'no label', 'sstabs_h': 'no label', 'sstrel_t': 'no label', 'sstrel_m': 'no label', 'sstrel_h': 'no label', 'rezt_abs': 'no label', 'rezt_m': 'no label', 'rezt_h': 'no label', 'rezt_rel': 'no label', 'reztrel_m': 'no label', 'reztrel_h': 'no label', });
lyr_PUE_CZ_26.set('fieldLabels', {'ENT': 'no label', 'CLV_CZ': 'no label', 'NOM_CZ': 'no label', 'DIRECCIoN_CZ': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', });
lyr_PUE_CZ_26.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});