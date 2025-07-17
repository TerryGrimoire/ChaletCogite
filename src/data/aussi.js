import cuisine from "../assets/cuisine2.jpg";
import activite from "../assets/activite.jpeg";
import boutique from "../assets/boutique.jpg";
import animation from "../assets/animation.jpg";

const aussi = [
  {
    id: 1,
    titre: "Une cuisine saine avec des ingrédients locaux",
    texte:
      "La cuisine réunionnaise, de par sa diversité culturelle, met en l’air une grande variété de fruits et légumes locaux. Enrichie par des inspirations culinaires du reste du monde, notre cuisine saura vous offrir une expérience haute en couleurs et en goûts. Ici en haut tout est fait maison avec des produits sains, de la grande cuisine pour un petit boucan. ",
    image: cuisine,
    link: "/Restauration",
  },
  {
    id: 2,
    titre: "Des chantiers de restauration écologique",
    texte:
      "Nous avons appris à maîtriser l’expansion des espèces envahissantes sur notre parcelle. Régulièrement, nous organisons des chantiers de restaurations écologiques, visant à lutter contre les espèces envahissantes et à replanter les espèces endémiques appropriées. Le but de notre démarche est de contribuer à redonner petit à petit à notre forêt de Bois de couleur des Hauts, son aspect originel. ",
    image: activite,
    link: "/Activites",
  },
  {
    id: 3,
    titre: "Notre boutique de produits artisanaux ",
    texte:
      "Découvrez sur commande, nos produits artisanaux et transformations des trésors de la forêt et de nos jardins. Tisanes, poudre, confiture, sirop, huile, bâton de fumigation et autres produits en quantité limitée au rythme des saisons.",
    image: boutique,
    link: "/Boutique",
  },
  {
    id: 4,
    titre: "Séjours jeunes, stages et autres événements ",
    texte:
      "Nous proposons de nombreuses activités telles que la découverte de nos forêts et des espèces envahissantes, des ateliers théâtre d’improvisation, initiations au maloya, moringue, yoga etc. Au travers de divers événements, stages, séjours de team building, colonies de vacances, le Chalet CoGîte devient le lieu idéal de nombreuses expériences.",
    image: animation,
    link: "/Activites",
  },
];

export default aussi;
