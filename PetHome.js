let Idade1 = document.getElementById('idade')
let Tipo1 = document.querySelector('#tipo')
let raçãoButton = document.getElementById("raçãoButton")
let raçãoTxt = document.getElementById("ração")
let ageTxt = document.getElementById("calcAge")
let sectionAge = document.getElementById('section1')

const meses = document.createElement('p')
meses.textContent = "digite a idade do hamster em meses"

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
            if (Tipo1.value === "hamster"){
                if (!sectionAge.contains(meses)) {
                    sectionAge.insertBefore(meses, Idade1);
                
                }
            }else {
                if(sectionAge.contains(meses)){
                sectionAge.removeChild(meses)
                }
        }
        
    }
    
    updatePorteElements();


    Tipo1.addEventListener('change', updatePorteElements);



    
    raçãoButton.addEventListener('click', function () {
        let idade = parseInt(Idade1.value); 
        if (Tipo1.value === "cachorro") {
            if (porte.value === "pequeno") {
                if (idade <= 1) {
                    ageTxt.innerHTML = "Seu pet tem 15 anos";
                } else if (idade === 2) {
                    ageTxt.innerHTML = "Seu pet tem 24 anos";
                } else if (idade > 2) {
                    ageTxt.innerHTML = "Seu pet tem " + ((idade - 2) * 4 + 24) + " anos";
                }
            }

            if (porte.value === "medio") {
                if (idade === 1) {
                    ageTxt.innerHTML = "Seu pet tem 15 anos";
                } else if (idade === 2) {
                    ageTxt.innerHTML = "Seu pet tem 24 anos";
                } else if (idade > 2) {
                    ageTxt.innerHTML = "Seu pet tem " + ((idade - 2)* 5 + 24) + " anos";
                }
            }

            if (porte.value === "grande") {
                if (idade === 1) {
                    ageTxt.innerHTML = "Seu pet tem 15 anos";
                } else if (idade === 2) {
                    ageTxt.innerHTML = "Seu pet tem 22 anos";
                } else if (idade > 2) {
                    ageTxt.innerHTML = "Seu pet tem " + ((idade - 2) * 6 + 22) + " anos";
                }
            }

            if( idade <= 1){
                if (porte.value === "pequeno"){
                    raçãoTxt.innerHTML = '<b>Melhores rações</b>:<br> Royal Canin Mini Puppy <br> N&D Small Puppy <br> Premier Raças Pequenas Filhotes'
                }
                if (porte.value === "medio"){
                    raçãoTxt.innerHTML = "<b>Melhores rações</b>:<br> Royal Canin Medium Puppy <br> Premier Medium Puppy <br> Pro Plan Puppy Medium"
                }
                if (porte.value === "grande"){
                    raçãoTxt.innerHTML = "<b>Melhores rações</b>:<br> Royal Canin Maxi Puppy <br> N&D Large Puppy <br> Premier Raças Grandes Filhotes"
                }
            }

            else if( idade <= 7){
                if (porte.value === "pequeno"){
                    raçãoTxt.innerHTML = '<b>Melhores rações</b>:<br> Royal Canin Mini Adult <br> N&D Small Breed Adult <br> Premier Raças Pequenas Adulto'
                }
                if (porte.value === "medio"){
                    raçãoTxt.innerHTML = "<b>Melhores rações</b>:<br> Royal Canin Medium Adult <br> Premier Medium Breed Adult <br> Pro Plan Medium Adult"
                }
                if (porte.value === "grande"){
                    raçãoTxt.innerHTML = "<b>Melhores rações</b>:<br> Royal Canin Maxi Adult <br> N&D Large Breed Adult <br> Premier Raças Grandes Adulto"
                }
            }

            else if( idade > 7){
                if (porte.value === "pequeno"){
                    raçãoTxt.innerHTML = '<b>Melhores rações</b>:<br> Royal Canin Mini Aging 8+ <br> Premier Medium Breed Senior <br> Premier Raças Pequenas Sênior'
                }
                if (porte.value === "medio"){
                    raçãoTxt.innerHTML = "<b>Melhores rações</b>:<br> Royal Canin Medium Aging 8+  <br> Premier Medium Breed Senior <br> Pro Plan Medium Senior"
                }
                if (porte.value === "grande"){
                    raçãoTxt.innerHTML = "<b>Melhores rações</b>:<br> Royal Canin Maxi Aging 8+ <br> N&D Large Breed Senior <br> Premier Raças Grandes Sênior"
                }
            }

            

        
    }else if (Tipo1.value === "gato") {
        if (idade <= 1) {
            ageTxt.innerHTML = "Seu pet tem 15 anos";
            raçãoTxt.innerHTML = "<b>Melhores rações</b>:<br> Royal Canin Feline Health Nutrition Kitten <br> Hill's Science Diet Kitten <br> Whiskas Kitten"
        } else if (idade === 2){
            ageTxt.innerHTML = "Seu pet tem 24 anos"
        }else if (idade > 2){
            ageTxt.innerHTML = "Seu pet tem " + ((idade - 2) * 4 + 24) + " anos"
        }

        if(idade > 1 && idade <= 3){
            raçãoTxt.innerHTML = "<b>Melhores rações</b>:<br> Royal Canin Feline Health Nutrition Adult <br> Hill's Science Diet Adult <br>Farmina N&D Prime Adult"
        }else if (idade > 3 && idade < 7){
            raçãoTxt.innerHTML = "<b>Melhores rações</b>:<br> Royal Canin Indoor Adult <br> Hill's Ideal Balance Adultr <br>Whiskas Adulto"
        }else if (idade > 7){
            raçãoTxt.innerHTML = "<b>Melhores rações</b>:<br> Royal Canin Feline Health Nutrition Senior <br> Hill's Science Diet Senior 7+<br>Orijen Senior"
        }

        
    }else if (Tipo1.value === "hamster"){
        if (idade <=6){
            ageTxt.innerHTML = "Seu pet tem " + (idade *3) + ' anos'
        }else if (idade <=12){
            ageTxt.innerHTML = "Seu pet tem " + ((idade - 6)* 2 + 18) + ' anos'
        }else if (idade > 12){
            ageTxt.innerHTML = "Seu pet tem " + (30 + (idade -12) * 2.5) + ' anos'
        }

        if (idade < 2){
            raçãoTxt.innerHTML = "<b>Melhores rações</b>:<br> Versele-Laga Cavia Complete <br>Oxbow Essentials Hamster & Gerbil <br>Higgins Sunburst Hamster Food"
        }else if (idade <= 12 ){
            raçãoTxt.innerHTML = "<b>Melhores rações</b>:<br> Higgins Sunburst Hamster Food<br>Versele-Laga Hamster Nature <br>Kaytee Forti-Diet Pro Health Hamster"
        } else if (idade <= 24){
            raçãoTxt.innerHTML = "<b>Melhores rações</b>:<br> Versele-Laga Hamster Naturer <br>Higgins VitaSmart Hamster <br>Oxbow Essentials Hamster & Gerbil"
        } else if (idade > 24){
            raçãoTxt.innerHTML = "<b>Melhores rações</b>:<br> Versele-Laga Hamster Crispy Pellets <br>Oxbow Essentials Hamster & Gerbil Senior <br>Kaytee Forti-Diet Pro Health Senior"
        }
    }

    if (idade < 0){
        ageTxt.innerHTML = "Idade inválida"
    }
}); 

