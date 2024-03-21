export function feladat1(lista) {
  const feladat1_ELEM = document.querySelector(".tartalom");
  let txt = `<div class="kepek">`;
  for (let index = 0; index < lista.length; index++) {
    txt += `<div><img src="${lista[index].kep}" alt=""></div>`;
  }
  txt += "</div>";
  return (feladat1_ELEM.innerHTML = txt);
}
const cel = [];
export function feladat7(lista) {
  const kiv_ELEM = document.querySelector("ul.kivalasztott");
  const gomb_ELEM = document.querySelector("button");

  gomb_ELEM.addEventListener("click", function () {
    let szam = Math.floor(Math.random() * 5);
    console.log(szam);
    let txt = `<li>A neve: <b>${lista[szam].nev}</b> ${lista[szam].kor} éves</li>`;
    console.log(txt);
    kiv_ELEM.innerHTML = txt;
  });
  for (let index = 0; index < 5; index++) {
    const kep_ELEM = document.querySelectorAll(".tartalom img");
    kep_ELEM[index].addEventListener("mouseover", function () {
      kep_ELEM[index].classList.add("kiv");
      console.log(index);
    });
    kep_ELEM[index].addEventListener("mouseout", function () {
      kep_ELEM[index].classList.remove("kiv");
    });
  }
}
