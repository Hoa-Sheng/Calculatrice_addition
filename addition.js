function calculerAddition() {
    // Récupérer les valeurs des deux champs de saisie
    var nombre1 = parseFloat(document.getElementById("input1").value);
    var nombre2 = parseFloat(document.getElementById("input2").value);

    // Vérifier que les deux valeurs sont des nombres
    if (isNaN(nombre1) || isNaN(nombre2)) {
        alert("Veuillez entrer deux nombres valides.");
        return;
    }

    // Effectuer l'addition et afficher le résultat
    var resultat = nombre1 + nombre2;
    document.getElementById("resultat").textContent = "Résultat : " + resultat;
    }