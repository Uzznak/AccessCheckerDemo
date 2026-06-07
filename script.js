document
    .getElementById("checkBtn")
    .addEventListener("click", verifierUtilisateur);




const USERS = {
    alice: {
        VPN: true,
        GitLab: true,
        SSH: false,
        Kubernetes: true
    },
    bob: {
        VPN: false,
        GitLab: true,
        SSH: true,
        Kubernetes: false
    }
};


function verifierUtilisateur() {

    const username = document
        .getElementById("username")
        .value
        .trim()
        .toLowerCase();

    const user = USERS[username];

    const results = document.getElementById("results");

    if (!user) {
        results.innerHTML = `
            <div class="alert alert-danger">
                Utilisateur inconnu
            </div>
        `;
        return;
    }

    afficherResultats(username, user);
}

function afficherResultats(username, droits) {

    let html = `
        <div class="card">
            <div class="card-body">
                <h4>Résultat pour ${username}</h4>
                <ul class="list-group mt-3">
    `;

    for (const [service, access] of Object.entries(droits)) {

        html += `
            <li class="list-group-item d-flex justify-content-between">
                ${service}
                <span>
                    ${access ? "Accès authorisé" : "Accès refusé"}
                </span>
            </li>
        `;
    }

    html += `
                </ul>
            </div>
        </div>
    `;

    document.getElementById("results").innerHTML = html;
}