const livros = {
    "Gênesis": 50,
    "Êxodo": 40,
    "Levítico": 27,
    "Números": 36,
    "Deuteronômio": 34,
    "Josué": 24,
    "Juízes": 21,
    "Rute": 4,
    "1 Samuel": 31,
    "2 Samuel": 24,
    "1 Reis": 22,
    "2 Reis": 25,
    "1 Crônicas": 29,
    "2 Crônicas": 36,
    "Esdras": 10,
    "Neemias": 13,
    "Tobias": 14,
    "Judite": 16,
    "Ester": 16,
    "1 Macabeus": 16,
    "2 Macabeus": 15,
    "Jó": 42,
    "Salmos": 150,
    "Provérbios": 31,
    "Eclesiastes": 12,
    "Cântico dos Cânticos": 8,
    "Sabedoria": 19,
    "Eclesiástico": 51,
    "Isaías": 66,
    "Jeremias": 52,
    "Lamentações": 5,
    "Baruc": 6,
    "Ezequiel": 48,
    "Daniel": 14,
    "Oseias": 14,
    "Joel": 3,
    "Amós": 9,
    "Abdias": 1,
    "Jonas": 4,
    "Miqueias": 7,
    "Naum": 3,
    "Habacuc": 3,
    "Sofonias": 3,
    "Ageu": 2,
    "Zacarias": 14,
    "Malaquias": 3,

    "Mateus": 28,
    "Marcos": 16,
    "Lucas": 24,
    "João": 21,
    "Atos dos Apóstolos": 28,
    "Romanos": 16,
    "1 Coríntios": 16,
    "2 Coríntios": 13,
    "Gálatas": 6,
    "Efésios": 6,
    "Filipenses": 4,
    "Colossenses": 4,
    "1 Tessalonicenses": 5,
    "2 Tessalonicenses": 3,
    "1 Timóteo": 6,
    "2 Timóteo": 4,
    "Tito": 3,
    "Filemom": 1,
    "Hebreus": 13,
    "Tiago": 5,
    "1 Pedro": 5,
    "2 Pedro": 3,
    "1 João": 5,
    "2 João": 1,
    "3 João": 1,
    "Judas": 1,
    "Apocalipse": 22
};

function mostrarCapitulos(livro) {
    const quantidade = livros[livro];

    if (!quantidade) {
        return;
    }

    let resultado = `<h2>${livro}</h2>`;
    resultado += `<p>Escolha um capítulo:</p>`;
    resultado += `<div class="capitulos">`;

    for (let i = 1; i <= quantidade; i++) {
        resultado += `
            <button onclick="abrirCapitulo('${livro}', ${i})">
                ${i}
            </button>
        `;
    }

    resultado += `</div>`;

    document.getElementById("conteudoBiblia").innerHTML = resultado;
}

function abrirCapitulo(livro, capitulo) {
    document.getElementById("conteudoBiblia").innerHTML = `
        <h2>${livro} — Capítulo ${capitulo}</h2>

        <p>
            O texto deste capítulo será carregado aqui.
        </p>

        <div class="navegacao">
            <button onclick="mostrarCapitulos('${livro}')">
                ← Voltar aos capítulos
            </button>
        </div>

        <hr>

        <p class="credito">
            Texto bíblico: Edição Chama da Fé.
            Licença: CC BY 3.0 BR + domínio público.
        </p>
    `;
}
