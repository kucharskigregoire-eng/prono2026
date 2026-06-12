# Concours de pronostics — Coupe du Monde 2026

Mini-site **statique** (hébergeable gratuitement sur GitHub Pages, en HTTPS) pour :

- saisir ses pronostics (`player.html`),
- saisir les vrais résultats et publier (`admin.html`),
- afficher le **classement** et le **comparatif** pour tout le monde (`index.html`).

## Contenu du dépôt

| Fichier        | Rôle |
|----------------|------|
| `index.html`   | Page publique : classement + comparatif par match + phase finale. C'est la page d'accueil. |
| `player.html`  | Outil de pronostics (un par collègue). Sauvegarde locale + bouton « Envoyer mes pronos » (.json). |
| `admin.html`   | **Réservé à toi.** Saisie des résultats réels, import des pronos, génération de `data.json`. |
| `common.js`    | Données (calendrier, arbre officiels) + logique + barème. Partagé par les 3 pages. |
| `style.css`    | Styles partagés. |
| `data.json`    | Les données publiées : résultats réels + pronos de chacun. **C'est le seul fichier à mettre à jour régulièrement.** |

## Barème

Par match de poule : **5 pts** score exact · **3 pts** bon vainqueur + bon écart (un nul différent du nul
pronostiqué compte ici) · **2 pts** bon vainqueur seulement · **0** sinon.
Meilleur buteur du tournoi : **10 pts**. (Les pronos de phase finale sont affichés mais non comptés.)

## Mettre en ligne (gratuit, ~5 min)

1. Crée un compte sur https://github.com (gratuit) si besoin.
2. Crée un dépôt **public**, par ex. `prono`.
3. Téléverse tous ces fichiers à la racine du dépôt (bouton **Add file → Upload files**).
4. Va dans **Settings → Pages**, section *Build and deployment* : Source = **Deploy from a branch**,
   Branch = **main** / dossier **/ (root)**, puis **Save**.
5. Au bout d'une minute, ton site est en ligne à : `https://TON-PSEUDO.github.io/prono/`
   Partage cette adresse à tes collègues.

## Au quotidien

**Tes collègues :** ouvrent `…/player.html`, remplissent leurs pronos, cliquent
« 📤 Envoyer mes pronos », et t'envoient le fichier `.json` téléchargé.

**Toi (organisateur) :**
1. Ouvre `…/admin.html`.
2. Onglet **Joueurs** → importe les `.json` reçus (un même prénom écrase l'ancien).
3. Onglet **Résultats réels** → saisis les vrais scores au fil des matchs (et le buteur en fin de tournoi).
4. Clique **« Générer data.json »** → un fichier `data.json` est téléchargé.
5. Sur GitHub, ouvre `data.json` → bouton crayon (✏️) → colle/remplace par le nouveau contenu, **Commit**.
   (ou *Add file → Upload files* en remplaçant `data.json`.)
6. Le classement public se met à jour automatiquement pour tout le monde.

> Ton brouillon (résultats + pronos importés) est mémorisé dans ton navigateur : tu peux fermer
> `admin.html` et y revenir sans rien reperdre. Le bouton « Repartir du data.json publié »
> permet de resynchroniser depuis ce qui est en ligne (utile si tu changes d'ordinateur).

## Notes

- GitHub Pages est un hébergement **statique** : il n'y a pas de base de données partagée en direct.
  « Mettre à jour les scores » = régénérer puis remettre en ligne `data.json`. C'est volontaire : 100 % gratuit.
- Si un jour tu veux une saisie en direct multi-utilisateurs (sans passer par des fichiers),
  il faudrait ajouter un petit service externe (Supabase / Firebase, offre gratuite) — possible mais en dehors du « tout GitHub ».
