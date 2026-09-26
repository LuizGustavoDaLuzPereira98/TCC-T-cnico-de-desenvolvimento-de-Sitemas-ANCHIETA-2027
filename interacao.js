// =====================================================
// JAGUARIAÍVA AVENTURA
// JavaScript da página inicial
// =====================================================


// =====================================================
// 1. PESQUISA DE ATRAÇÕES
// =====================================================

const searchForm = document.querySelector(".search-form");

if (searchForm) {

    searchForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const input = searchForm.querySelector("input");
        const selects = searchForm.querySelectorAll("select");

        const pesquisa = input.value.trim().toLowerCase();
        const categoria = selects[0].value;
        const dificuldade = selects[1].value;

        console.log("Pesquisa:", pesquisa);
        console.log("Categoria:", categoria);
        console.log("Dificuldade:", dificuldade);

        // Futuramente:
        // Aqui vamos enviar a pesquisa para o banco
        // de dados através da API.

        if (
            pesquisa === "" &&
            categoria === "" &&
            dificuldade === ""
        ) {

            alert("Digite algo ou selecione um filtro.");

            return;
        }

        alert(
            "Pesquisa realizada!\n\n" +
            "Busca: " + (pesquisa || "Todas") + "\n" +
            "Categoria: " + (categoria || "Todas") + "\n" +
            "Dificuldade: " + (dificuldade || "Todas")
        );

    });

}


// =====================================================
// 2. BOTÃO DE FAVORITOS
// =====================================================

const favoriteButtons = document.querySelectorAll(".favorite");

favoriteButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const isFavorite = button.classList.contains("active");

        if (isFavorite) {

            button.classList.remove("active");

            button.textContent = "♡";

            console.log("Removido dos favoritos");

        } else {

            button.classList.add("active");

            button.textContent = "♥";

            console.log("Adicionado aos favoritos");

        }

    });

});


// =====================================================
// 3. ANIMAÇÃO DOS CARDS
// =====================================================

const cards = document.querySelectorAll(
    ".category-card, .trail-card"
);

const observer = new IntersectionObserver(
    function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.15
    }
);


cards.forEach(function (card) {

    card.classList.add("hidden");

    observer.observe(card);

});


// =====================================================
// 4. MENU MOBILE
// =====================================================

const menuLinks = document.querySelectorAll(".menu a");

menuLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        console.log(
            "Navegando para:",
            link.getAttribute("href")
        );

    });

});


// =====================================================
// 5. SCROLL SUAVE
// =====================================================

menuLinks.forEach(function (link) {

    link.addEventListener("click", function (event) {

        const targetId = link.getAttribute("href");

        if (targetId.startsWith("#")) {

            event.preventDefault();

            const target = document.querySelector(targetId);

            if (target) {

                target.scrollIntoView({
                    behavior: "smooth"
                });

            }

        }

    });

});


// =====================================================
// 6. BOTÕES "VER DETALHES"
// =====================================================

const detailButtons = document.querySelectorAll(".details");

detailButtons.forEach(function (button) {

    button.addEventListener("click", function (event) {

        event.preventDefault();

        const card = button.closest(".trail-card");

        const title = card.querySelector("h3").textContent;

        console.log(
            "Abrindo detalhes de:",
            title
        );

        /*
            Futuramente podemos fazer:

            window.location.href =
                "detalhes.html?id=1";

            Assim a página de detalhes
            saberá qual trilha mostrar.
        */

        alert(
            "Detalhes de:\n\n" +
            title +
            "\n\nEssa função será conectada ao banco de dados."
        );

    });

});


// =====================================================
// 7. BOTÃO "VER TODOS"
// =====================================================

const viewAll = document.querySelector(".view-all");

if (viewAll) {

    viewAll.addEventListener("click", function (event) {

        event.preventDefault();

        console.log("Abrindo todas as atrações...");

        alert(
            "Aqui será aberta a página com todas as trilhas e atrações."
        );

    });

}


// =====================================================
// 8. BOTÃO DO MAPA
// =====================================================

const mapButtons = document.querySelectorAll(
    'a[href="#mapa"], .map-content .btn-primary'
);

mapButtons.forEach(function (button) {

    button.addEventListener("click", function (event) {

        const href = button.getAttribute("href");

        if (href === "#mapa") {

            event.preventDefault();

            const mapa = document.querySelector("#mapa");

            if (mapa) {

                mapa.scrollIntoView({
                    behavior: "smooth"
                });

            }

        }

    });

});


// =====================================================
// 9. BOTÃO "EXPLORAR AGORA"
// =====================================================

const exploreButton = document.querySelector(
    '.hero .btn-primary'
);

if (exploreButton) {

    exploreButton.addEventListener("click", function (event) {

        event.preventDefault();

        const trilhas = document.querySelector("#trilhas");

        if (trilhas) {

            trilhas.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

}


// =====================================================
// 10. EFEITO NO HEADER AO ROLAR
// =====================================================

const header = document.querySelector(".header");

window.addEventListener("scroll", function () {

    if (window.scrollY > 50) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

});


// =====================================================
// 11. MENSAGEM DE INICIALIZAÇÃO
// =====================================================

console.log(
    "🥾 Jaguariaíva Aventura iniciado com sucesso!"
);

console.log(
    "🌿 Sistema em desenvolvimento."
);
