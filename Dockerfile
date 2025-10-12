# Image basée sur Debian avec Node.js 18
FROM node:18-bullseye

# Crée le répertoire de travail
WORKDIR /client

# Copie les fichiers package.json
COPY package*.json ./

# Installation des dépendances
RUN npm install

# Copie le reste du code
COPY . .

# Désactive la télémétrie et force l'utilisation du binaire SWC compatible
ENV NEXT_TELEMETRY_DISABLED=1
ENV NEXT_FORCE_SWC_BINARY=true

# Expose le port de dev
EXPOSE 3000

# Démarre le serveur Next.js (Turbopack par défaut en 15.3.0)
CMD ["npm", "run", "dev"]
