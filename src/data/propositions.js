import maison from "../assets/maison.png";
import resto from "../assets/resto.png";
import hobby from "../assets/hobby.png";
import jardin from "../assets/jardin.png";

const propositions = [
  {
    id: 1,
    titre: "Vivre ensemble",
    image: maison,
    texte:
      "Notre gîte est basé sur le partage et sur le faire-ensemble pour mieux vivre-ensemble.",
  },
  {
    id: 2,
    titre: "Cuisine Lontan",
    image: resto,
    texte:
      "Nous cuisinons au feu de bois avec uniquement des ingrédients locaux et sains.",
  },
  {
    id: 3,
    titre: "Transmission aux jeunes",
    image: hobby,
    texte:
      "Nous proposons des ateliers autour de notre histoire, du maloya ou du moringue. ",
  },
  {
    id: 4,
    titre: "Protéger nos fôrets",
    image: jardin,
    texte:
      "Nous avons à coeur la lutte contre les espèces envahissantes de nos fôrets.",
  },
];

export default propositions;
