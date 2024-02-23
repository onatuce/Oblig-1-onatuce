let billetter=[];
const bestillingsskjema=document.getElementById('bestillingsskjema');
const billettListe=document.getElementById('billettListe');
bestillingsskjema.addEventListener('submit', function(event){
    event.preventDefault();
    const film=document.getElementById('film').value;
    const antall =document.getElementById('antall').value;
    const fornavn=document.getElementById('fornavn').value;
    const etternavn =document.getElementById('etternavn').value;
    const telefon=document.getElementById('telefon').value;
    const epost=document.getElementById('epost').value;
    const telefonRegex=/^[0-9]{8}$/;
    const epostRegex=(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/);
    if(!telefonRegex.test(telefon)){
        alert("Skriv inn et gylig nummer");
        return;
    }
    if (!epostRegex.test(epost)){
        alert("Skriv inn en gylig epost");
        return;
    }
    const billett = {
        film: film,
        antall: antall,
        fornavn: fornavn,
        etternavn: etternavn,
        telefon: telefon,
        epost: epost
    };
    billetter.push(billett);
    bestillingsskjema.reset();
    visBillett();
});
function visBillett() {
    billettListe.innerHTML = '';
    for (let i=0; i<billetter.length; i++) {
        const billettElement = document.createElement('div');
        const bilettInf = "Billett " + (i+1) + ": " + billetter[i].fornavn + " " + billetter[i].etternavn + ", Film: " + billetter[i].film + ", Antall: " + billetter[i].antall + ", Telefon: " + billetter[i].telefon + ", Epost: " + billetter[i].epost;
        billettElement.textContent=bilettInf;
        billettListe.appendChild(billettElement);
    }
}
function slettAlleBilletter() {
    billetter.length=0;
    visBillett();}