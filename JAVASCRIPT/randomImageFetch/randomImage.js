const URL = "https://picsum.photos/200/300";
const tagImg = document.getElementById("imgRandom");
const tagBtn = document.getElementById("mudarBtn");

const imgAPI = async () => {
    try {
        const linkImagem = (await fetch(URL)).url;
        return linkImagem;
    } catch (error) {
        throw new Error("Erro ao carregar imagem: " + error);
    }
}

const mudarFoto = async () => {
    tagImg.src = await imgAPI();
}

tagBtn.addEventListener("click", mudarFoto);

mudarFoto();