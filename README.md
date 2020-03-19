#EOS Website

## Configuration de l'environnement de développement
IDE utilisé : Pycharm avec un environnement virtuel créé manuellement avec requirements/development.pip

- Avant de créer un environnement virtuel et d'installer les requis development.pip (pour une installation fraîche d'Ubuntu 18.04 LTS)
<code>sudo apt-get install libmariadbclient-dev python3-venv python3-dev</code>
- Pour créer un environnement virtuel <code>python3 -m venv ENV</code>
- <code>pip install --upgrade pip && pip install -r requirements/development.pip</code>


## Serveur de développement, base de données et phpmyadmin
Requis: make, docker et docker-compose et le fichier .env (disponible dans le répertoire Google Drive 5.5 Site Web RIISQ là **Documentation du site/config/.env/backend/.env**) 

**IMPORTANT: les containers du riisq (client, serveur et base de données) sont dans un réseau virtuel à créer séparément comme suit:** <code>sudo docker network create riisq --driver bridge --subnet 172.23.0.0/16</code>
**IMPORTANT: s'assurer que le fichier .env soit à la racine du projet, sinon le serveur ne démarrera pas**
**IMPORTANT: s'assurer d'avoir la base de données lancée avant de démarrer le serveur, tout se trouve dans le dossier database sur le répertoire Google Drive 5.5 Site Web RIISQ/Documentation du site/database et le serveur du SITEL /var/www/html/riisq.ca/nginx.conf**

Depuis la racine du projet:
- Démarrer le serveur:  <code>sudo make dev</code>
- Arrêter le serveur: <code>sudo make stop-dev</code>


D'autres commandes sont disponibles pour afficher les logs, supprimer les images des containers etc. Voir le makefile.
