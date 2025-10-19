# π-lab - Plateforme d'exploration des décimales de π

## 🧮 À propos du projet

**π-lab** est une plateforme expérimentale et pédagogique dédiée à l'exploration des décimales de π. Cette application web permet de rechercher des séquences dans les décimales de π, d'analyser leur distribution statistique et d'étudier leur complexité de Kolmogorov.

### ✨ Fonctionnalités principales

- 🔍 **Recherche de séquences** : Trouvez n'importe quelle séquence dans 1 million de décimales de π
- 📊 **Analyses statistiques** : Distribution des chiffres, tests de normalité, entropie Shannon
- 🗜️ **Analyse de compressibilité** : Estimation de la complexité via algorithmes de compression
- 📁 **Exports de données** : Téléchargement en CSV et JSON
- 🧪 **Tests automatisés** : Vérification complète des fonctionnalités
- 📱 **Interface responsive** : Design moderne et accessible

## 🚀 Installation et utilisation

### Prérequis

- Node.js (version 18 ou supérieure)
- npm ou yarn

### Installation

```bash
# 1. Cloner le dépôt
git clone https://github.com/votre-username/pi-explorer-lab.git

# 2. Naviguer vers le dossier du projet
cd pi-explorer-lab

# 3. Installer les dépendances
npm install

# 4. Lancer le serveur de développement
npm run dev
```

L'application sera accessible sur `http://localhost:8080`

### Scripts disponibles

```bash
npm run dev      # Serveur de développement
npm run build    # Build de production
npm run preview  # Aperçu du build
npm run lint     # Vérification du code
```

## 🛠️ Technologies utilisées

Ce projet est construit avec :

- **Vite** - Bundler moderne et rapide
- **React 18** - Bibliothèque UI avec hooks
- **TypeScript** - Typage statique pour JavaScript
- **Tailwind CSS** - Framework CSS utility-first
- **shadcn/ui** - Composants UI modernes
- **React Router** - Navigation côté client
- **Lucide React** - Icônes SVG

## 📁 Structure du projet

```
src/
├── components/          # Composants réutilisables
│   ├── Navigation.tsx   # Navigation principale
│   └── ui/             # Composants shadcn/ui
├── pages/              # Pages de l'application
│   ├── Home.tsx        # Page d'accueil
│   ├── Recherche.tsx   # Recherche de séquences
│   ├── Analyse.tsx     # Analyses statistiques
│   ├── Api.tsx         # Documentation API
│   ├── Marketing.tsx   # Plan marketing
│   └── Test.tsx        # Tests automatisés
├── lib/                # Utilitaires et données
│   ├── pi-data.ts      # Données de π et fonctions d'analyse
│   └── utils.ts        # Utilitaires généraux
└── hooks/              # Hooks React personnalisés
```

## 🧪 Tests et qualité

Le projet inclut une page de tests automatisés accessible via `/test` qui vérifie :

- ✅ Recherche de séquences dans π
- ✅ Distribution des chiffres
- ✅ Analyse de compressibilité
- ✅ Performance des algorithmes

## 📊 Données utilisées

- **1 million de décimales de π** (données réelles)
- **Recherche optimisée** avec algorithme O(n)
- **Analyses statistiques** basées sur les vraies données
- **Exports fonctionnels** en CSV et JSON

## 🤝 Contribution

Ce projet est **libre et ouvert** à toute contribution extérieure ! 

### Comment contribuer

1. **Fork** le projet
2. **Créez** une branche pour votre fonctionnalité (`git checkout -b feature/nouvelle-fonctionnalite`)
3. **Commitez** vos changements (`git commit -m 'Ajout d'une nouvelle fonctionnalité'`)
4. **Poussez** vers la branche (`git push origin feature/nouvelle-fonctionnalite`)
5. **Ouvrez** une Pull Request

### Idées de contributions

- 🔬 Amélioration des algorithmes de recherche
- 📈 Nouvelles visualisations statistiques
- 🌐 Support multilingue
- 📱 Optimisations mobiles
- 🧮 Ajout de nouvelles constantes mathématiques
- 📚 Documentation et tutoriels

## 📝 Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

## 👨‍💻 Créateur

**Issouf Traoré** - Développeur et passionné de mathématiques

- 🐙 GitHub: [@votre-username](https://github.com/votre-username)
- 📧 Email: votre.email@example.com
- 💼 LinkedIn: [Votre profil LinkedIn](https://linkedin.com/in/votre-profil)

## 🙏 Remerciements

- À la communauté mathématique pour l'inspiration
- Aux contributeurs open source des bibliothèques utilisées
- À tous ceux qui explorent les mystères de π

## 📚 Ressources

- [Décimales de π](https://www.angio.net/pi/digits.html)
- [Normalité de π](https://fr.wikipedia.org/wiki/Nombre_normal)
- [Complexité de Kolmogorov](https://fr.wikipedia.org/wiki/Complexit%C3%A9_de_Kolmogorov)

---

**π-lab** - Explorez l'infini, un chiffre à la fois ! 🚀