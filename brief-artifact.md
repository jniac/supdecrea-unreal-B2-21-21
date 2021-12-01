# Artifact Brief

## Résumé : 

Mettre en scène la découverte d'un artéfact dans un environnement ouvert. Dans un 
premier temps l'artéfact est invisible, caché par des éléments du décor (végétation,
relief, ruines). Une rampe, immédiatement visible, mène à un petit plateau où l'on
découvre l'artefact. Celui-ci a un aspect surnaturel.

## Description détaillée

- Template Unreal : [ThirdPerson](https://docs.unrealengine.com/4.26/en-US/Resources/Templates/ThirdPerson/)
- Assets: [InfinityGrassLand](https://www.unrealengine.com/marketplace/en-US/product/infinity-blade-plain-lands)

### Le terrain (Landscape)

Ressources :
- [TheArtifact-Landscape-Volume.fbx](assets/TheArtifact-Landscape-Volume.fbx)

A partir du template Unreal "ThirdPerson", dans une nouvelle scène (level) 
modéliser un terrain (outil "Landscape") dont l'élevation doit suivre le volume 
donné par le fichier [TheArtifact-Landscape-Volume.fbx](assets/TheArtifact-Landscape-Volume.fbx).

<img height=400 src=assets/TheArtifact-Landscape-Volume.jpg><br>

Pour le volume, afin de "voir à travers" il faut mettre en place un matériau filaire
dont voici le blueprint :  

<img height=400 src=assets/WireframeMaterial.jpg><br>

Pour permettre une modélisation fine, le terrain est "petit" mais dense (maille 20cm).
Voici les réglages : 

<img height=400 src=assets/TheArtifact-Landscape-Settings.jpg><br>

### L'artéfact

Ressources :
- [TheArtifact-Object-High.fbx](assets/TheArtifact-Object-High.fbx)
- [TheArtifact-Object-Texture.psd (zip)](assets/TheArtifact-Object-Texture.psd.zip)

L'artéfact est composé de primitives simples (cube, tore) dont les UV sont facile 
à travailler.

