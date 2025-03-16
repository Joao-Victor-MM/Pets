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
        }
    });