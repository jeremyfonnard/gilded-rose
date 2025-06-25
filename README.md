# 🏵️ Gilded Rose - Gestion de l'inventaire

Bienvenue dans le projet **Gilded Rose**, une refonte propre et testée d’un système d’inventaire dans une taverne magique.

Ce projet repose sur un système de règles métier spécifiques qui modifient la qualité (`quality`) et le délai de vente (`sellIn`) des articles au fil des jours.

---

## 📦 Fonctionnalités

Chaque jour, notre système :

- Diminue `sellIn` et `quality` pour les objets classiques.
- Applique des règles spéciales pour certains objets :

### 🧙 Règles métier

| Objet                          | Règle spécifique                                                                 |
|-------------------------------|-----------------------------------------------------------------------------------|
| Normal                        | `quality` diminue de 1 (ou 2 si `sellIn < 0`)                                     |
| Aged Brie                     | `quality` augmente avec le temps (max 50), +2 si expiré                          |
| Sulfuras                      | Légendaire : ni `sellIn` ni `quality` ne changent. `quality` toujours à 80       |
| Backstage Passes              | `quality` augmente : +2 si `sellIn ≤ 10`, +3 si `sellIn ≤ 5`, chute à 0 après    |
| Conjured [Item]               | Objet invoqué : `quality` diminue deux fois plus vite que les objets normaux     |

**Note :** La `quality` ne peut jamais dépasser 50 ou tomber sous 0 (sauf Sulfuras = 80).

---

## 🚀 Installation

1. Clone ce dépôt :
   ```bash
   git clone https://github.com/ton-compte/gilded-rose.git
   cd gilded-rose
