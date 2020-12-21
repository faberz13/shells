window.onscroll = () => {
    let navbar = document.getElementById("my-navbar");
    const height = 350;

    if (document.body.scrollTop > height || document.documentElement.scrollTop > height) {
        navbar.classList.add("nav-transition");
    } else {
        navbar.classList.remove("nav-transition");
    }
}
let conchas = [
    ["Cassidae","/img/conchas/cassidae.jpg"],
    ["Brachiopoda","/img/conchas/brachiopoda.jpg"],
    ["Conidae","/img/conchas/conidae.jpg"],
    ["Cypraeidae","/img/conchas/cypraeidae.jpg"],
    ["Volutidae","/img/conchas/volutidae.jpg"],
    ["Fasciolariidae","/img/conchas/fasciolariidae.jpg"],
];
window.onload = (evt) => {
    document.getElementById("random-concha").addEventListener("click", () => {
        let img = document.getElementById("random-concha-img");
        let nome = document.getElementById("random-concha-nome");
        const concha = conchas[Math.floor(Math.random() * conchas.length)];
        img.src = concha[1];
        nome.innerText = concha[0];


    })

}