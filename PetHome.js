let Idade1 = document.querySelector('#idade')
let Tipo1 = document.querySelector('#tipo')
let raçãoButton = document.getElementById("raçãoButton")
let raçãoTxt = document.getElementById("ração")
let ageTxt = document.getElementById("calcAge")
let sectionAge = document.getElementById('section1')

const porteLabel = document.createElement('label')
const porte = document.createElement('select')
    porteLabel.textContent = 'Porte: '
    porte.innerHTML = `
        <option value="pequeno">Pequeno</option>
        <option value="medio" selected>Médio</option>
        <option value="grande">Grande</option>
    `


    function updatePorteElements() {
        if (Tipo1.value === "cachorro") {
            if (!sectionAge.contains(porteLabel) && !sectionAge.contains(porte)) {
                sectionAge.insertBefore(porteLabel, raçãoButton);
                sectionAge.insertBefore(porte, raçãoButton);
            }
        } else {
            if (sectionAge.contains(porteLabel)) {
                sectionAge.removeChild(porteLabel);
            }
            if (sectionAge.contains(porte)) {
                sectionAge.removeChild(porte);
            }
        }
    }
    
    updatePorteElements();
    
    Tipo1.addEventListener('change', updatePorteElements);


    raçãoButton.addEventListener('click', function () {
        if (Tipo1.value === "cachorro") {
            let idade = parseInt(Idade1.value); // Converte a idade para número
            if (porte.value === "pequeno") {
                if (idade === 1) {
                    ageTxt.innerHTML = "Seu pet tem 15 anos";
                } else if (idade === 2) {
                    ageTxt.innerHTML = "Seu pet tem 24 anos";
                } else if (idade > 2) {
                    ageTxt.innerHTML = "Seu pet tem " + (idade * 4 + 24) + " anos";
                }
            }

            if (porte.value === "medio") {
                if (idade === 1) {
                    ageTxt.innerHTML = "Seu pet tem 15 anos";
                } else if (idade === 2) {
                    ageTxt.innerHTML = "Seu pet tem 24 anos";
                } else if (idade > 2) {
                    ageTxt.innerHTML = "Seu pet tem " + (idade * 5 + 24) + " anos";
                }
            }

            if (porte.value === "grande") {
                if (idade === 1) {
                    ageTxt.innerHTML = "Seu pet tem 15 anos";
                } else if (idade === 2) {
                    ageTxt.innerHTML = "Seu pet tem 22 anos";
                } else if (idade > 2) {
                    ageTxt.innerHTML = "Seu pet tem " + (idade * 6 + 22) + " anos";
                }
            }

            if( idade <= 1){
                if (porte.value === "pequeno"){
                    raçãoTxt.innerHTML = 'melhores rações:<br> Royal Canin Mini Puppy <br> N&D Small Puppy <br> Premier Raças Pequenas Filhotes'
                }
                if (porte.value === "medio"){
                    raçãoTxt.innerHTML = "melhores rações:<br> Royal Canin Medium Puppy <br> Premier Medium Puppy <br> Pro Plan Puppy Medium"
                }
                if (porte.value === "grande"){
                    raçãoTxt.innerHTML = "melhores rações:<br> Royal Canin Maxi Puppy <br> N&D Large Puppy <br> Premier Raças Grandes Filhotes"
                }
            }

            else if( idade <= 7){
                if (porte.value === "pequeno"){
                    raçãoTxt.innerHTML = 'melhores rações:<br> Royal Canin Mini Adult <br> N&D Small Breed Adult <br> Premier Raças Pequenas Adulto'
                }
                if (porte.value === "medio"){
                    raçãoTxt.innerHTML = "melhores rações:<br> Royal Canin Medium Adult <br> Premier Medium Breed Adult <br> Pro Plan Medium Adult"
                }
                if (porte.value === "grande"){
                    raçãoTxt.innerHTML = "melhores rações:<br> Royal Canin Maxi Adult <br> N&D Large Breed Adult <br> Premier Raças Grandes Adulto"
                }
            }

            else if( idade > 7){
                if (porte.value === "pequeno"){
                    raçãoTxt.innerHTML = 'melhores rações:<br> Royal Canin Mini Aging 8+ <br> Premier Medium Breed Senior <br> Premier Raças Pequenas Sênior'
                }
                if (porte.value === "medio"){
                    raçãoTxt.innerHTML = "melhores rações:<br> Royal Canin Medium Aging 8+  <br> Premier Medium Breed Senior <br> Pro Plan Medium Senior"
                }
                if (porte.value === "grande"){
                    raçãoTxt.innerHTML = "melhores rações:<br> Royal Canin Maxi Aging 8+ <br> N&D Large Breed Senior <br> Premier Raças Grandes Sênior"
                }
            }

            

        
    }else if (Tipo1.value === "gato") {

    }
});