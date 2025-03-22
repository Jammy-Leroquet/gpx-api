# GPX API (Express)

Une API minimale pour envoyer, lister et servir des fichiers GPX.

## Endpoints

- `GET /` → ping serveur
- `GET /gpx-list` → liste les fichiers GPX disponibles
- `GET /gpx/:filename` → sert un fichier GPX donné
- `POST /upload` → envoie un fichier GPX (form-data, champ `gpxfile`)

## Déploiement

- Node.js via Render (ou tout autre hébergement supportant `express`)
- Le serveur écoute sur `process.env.PORT || 8080`
- Les fichiers GPX sont stockés dans `/uploads`
