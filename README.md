# Benchmark des technologies backend

> **Note :** Les chiffres ci-dessous proviennent de benchmarks communautaires  
> (TechEmpower Framework Benchmarks – Round 23, déc. 2023, et Dev.to, mars 2025).  
> Il ne s’agit pas d’études scientifiques ; aucune publication peer-reviewed n’existe à ce jour. :contentReference[oaicite:0]{index=0}  

| Technologie | Langage | Facilité d’intégration IA | Performance (JSON serialization, req/s) | Scalabilité | Source benchmark |
|-------------|---------|---------------------------|-----------------------------------------|-------------|------------------|
| **FastAPI** | Python | Excellente : typage Pydantic, support NumPy, Pandas, scikit-learn, TensorFlow | ≈ 167 600 | Élevée (ASGI, Uvicorn workers, scale horizontal K8s) | [TechEmpower R23](https://medium.com/%40hasindusithmin64/fastapi-outperforms-other-frameworks-in-techempower-benchmarks-16d222b43c0f) |
| **Flask** | Python | Bonne : doc abondante, code synchrone léger | ≈ 10 000 | Moyenne (WSGI + Gunicorn multi-workers) | [Dev.to (03/2025)](https://dev.to/snappytuts/python-api-frameworks-ranked-by-speed-3lp7) |
| **Django** | Python | Bonne : batteries-incluses, DRF, intégrations TensorFlow/PyTorch | ≈ 73 500 | Élevée (Gunicorn + K8s, serverless possible) | [TechEmpower R23](https://medium.com/%40hasindusithmin64/fastapi-outperforms-other-frameworks-in-techempower-benchmarks-16d222b43c0f) |
| **Express** | JavaScript / TypeScript | Correcte : TensorFlow.js, ONNX Runtime, OpenAI SDK | ≈ 100 300 | Élevée (event-loop non-bloquant, clustering PM2) | [TechEmpower R23](https://medium.com/%40hasindusithmin64/fastapi-outperforms-other-frameworks-in-techempower-benchmarks-16d222b43c0f) |

## Avantages & inconvénients rapides

| Framework | Avantages clés | Points de vigilance |
|-----------|----------------|---------------------|
| **FastAPI** | Très haute performance ; async natif (ASGI) ; docs OpenAPI auto-générées | Communauté plus jeune que Django ; pas d’admin intégré |
| **Flask** | Ultra-léger, courbe d’apprentissage douce ; idéal micro-services & POC | Synchrone ; nécessite Gunicorn/uvicorn pour la prod ; pas d’ORM/admin par défaut |
| **Django** | Batteries-incluses (admin, ORM, auth) ; vaste écosystème | Monolithique, perf. plus basse ; démarrage plus lourd, config parfois verbeuse trop lourd pour un petit projet (recommandé pour une application tout en un front et back) |
| **Express** | Même langage front/back (JS/TS) ; écosystème npm massif | Thread unique : CPU-bound → workers ; typage optionnel (TypeScript recommandé) |

# Benchmark des technologies frontend
# Chart.js
- html 5 (canvas)
- facile a utiliser
- responsif
- Bonne performance
- personalisable (couleur légendes etc...)
- type de graphique
  - line
  - barre
  - radar
  - camembert
  - scatter
  - graphique combiner
  - bubble
  - temps
- format de sortis : Canvas


# D3.js
- le plus complexe a utiliser des 3
- Flexibilité maximale (nimporte quelle type de visu)
- elément en svg
- Excellente performance
- Supporte l’interactivité
- format de sortis : SVG, HTML, Canvas


# plotly
- le plus facile a utilisé des 3
- plus interactive que Chart.js
- trés bonne performance
- Large choix de graphiques :
  - Barres
  - lignes
  - camemberts
  - histogrammes
  - Courbes 3D
  - cartes géographiques
  - surfaces
  - scatterplots
  - Heatmaps
  - choropleth
  - sankey
