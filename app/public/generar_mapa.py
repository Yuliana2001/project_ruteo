
import pandas as pd
import geopandas as gpd
import contextily as cx
import folium
# Cargar el dataset de zonas WiFi en Medellín
# Cargar el dataset de zonas WiFi en Medellín
def reproject(gdf, crs_in):
  #Crea una copia del geodataframe para no modificar el original
  gdf_copy = gdf.copy()
  #Reproyecta el geodataframe al sistema de coordenadas dado
  gdf_copy.to_crs(crs_in, inplace=True)
  return gdf_copy

path = 'app/public/shp_rutas_de_transporte_publi.zip'
zonas_metro = gpd.read_file(path)
zonas_metro_4326 = reproject(zonas_metro, 4326)

# Convertir geometrías a puntos centroides antes de iterar
zonas_metro_4326["centroid"] = zonas_metro_4326.geometry.centroid
m = folium.Map(location=[6.2442, -75.5812], zoom_start=13)

# Agregar los marcadores con los centroides
for idx, row in zonas_metro_4326.iterrows():
    folium.Marker([row.centroid.y, row.centroid.x], popup=row["nombre"]).add_to(m)



print(zonas_metro_4326["nombre"].unique())


# Agregar un marcador de ejemplo


# Guardar el mapa como un archivo HTML
m.save("app/pages/mapa.html")
