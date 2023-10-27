const jokeText = document.getElementById("joke-text");
const generateBtn = document.getElementById("generate-btn");

// Liste de blagues (vous pouvez ajouter plus de blagues)
const jokes = [
    "Pourquoi les plongeurs plongent-ils toujours en arrière et jamais en avant ? Parce que sinon ils tombent dans le bateau.",
    "Quel est le comble pour un électricien ? De ne pas être au courant.",
    "Quel est le comble pour un plongeur ? De ne pas être dans son élément.",
    "Pourquoi les plongeurs plongent-ils toujours en arrière et jamais en avant ? Parce que sinon ils tombent dans le bateau."
];

generateBtn.addEventListener("click", () => {
    // Générer une blague aléatoire
    const randomIndex = Math.floor(Math.random() * jokes.length);
    const randomJoke = jokes[randomIndex];

    // Afficher la blague
    jokeText.textContent = randomJoke;
});
