#EOS Website

## Configuration de l'environnement de développement
IDE utilisé : Pycharm avec un environnement virtuel créé manuellement avec requirements/development.pip

- Avant de créer un environnement virtuel et d'installer les requis development.pip (pour une installation fraîche d'Ubuntu 18.04 LTS)
<code>sudo apt-get install libmariadbclient-dev python3-venv python3-dev</code>
- Pour créer un environnement virtuel <code>python3 -m venv ENV</code>
- <code>pip install --upgrade pip && pip install -r requirements/development.pip</code>


## Serveur de développement, base de données et phpmyadmin
Requis: make, docker et docker-compose et le fichier .env (disponible sur demande) 

**IMPORTANT: s'assurer que le fichier .env soit à la racine du projet, sinon le serveur ne démarrera pas**
### Démarrer et arrêter le stack
Depuis la racine du projet:
- Démarrer le stack de développement:  <code>sudo make dev</code>
- Arrêter le stack de développement: <code>sudo make stop-dev</code>
- Démarrer le stack de production:  <code>sudo make prod</code>
- Arrêter le stack de production: <code>sudo make stop-prod</code>

Pour administrer la base de données, se connecter sur le WebGUI de phpmyadmin (localhost:8001), les identifiants sont 
les mêmes que pour le compte de la BD (voir .env)
D'autres commandes sont disponibles pour afficher les logs, supprimer les images des containers etc. Voir le makefile.


### Peupler la base de données
- Démarrer le stack (en prod ou dev peu importe)
- Se connecter dans phpmyadmin (localhost:8001), les ids sont ceux du user root de la BD. C'est dans le .env 
(EOS_DB_USER et EOS_DB_PASSWORD)
- Aller sur la page de la base de données eos-website
- Importer le script sql create_tables.sql qui se trouve dans *racine_du_projet/database/sql_scripts*. Il sera executé 
automatiquement
- Importer ensuite le script eos_website_station.sql dans le même dossier. La table sera alors peuplée de 7 stations 
météo


*Si le site web ne se démarre pas au premier lancement, il faut juste le redémarrer. En exécutant make dev par exemple*



