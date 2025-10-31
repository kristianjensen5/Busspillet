# Busspillet
simpelt htmlspil ifm kommunalvalget

## SVG-optimering

Vi optimerer alle SVG-assets med [SVGO](https://github.com/svg/svgo), så de er letlæselige og fylder mindst muligt.

1. Gem den eksportede SVG i `Assets/`.
2. Kør kommandoen herunder fra projektroden (tilpas filnavne efter behov):

   ```bash
   npx svgo \
     --config=svgo.config.mjs \
     --input Assets/cykelikon.svg \
     --output Assets/CykelOptimized.svg
   ```

   `svgo.config.mjs` sikrer, at output er formateret pænt med to mellemrum.

3. Brug den optimerede version i HTML/JS, men gem gerne originalen i samme mappe til senere redigering.
