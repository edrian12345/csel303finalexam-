function calculateEigen() {
    const inputMatrix = document.getElementById("matrixInput").value;
    const rows = inputMatrix.trim().split("\n");
    const A = [];

    for (let i = 0; i < rows.length; i++) {
        const row = rows[i].match(/-?\d*\.?\d+/g).map(Number);
        A.push(row);
    }

    
    const eig = numeric.eig(A);
    const eigenvalues = eig.lambda.x.map(value => value.toFixed(2)); 
    const eigenvectors = eig.E.x; 


    const result = document.getElementById("result");
    result.innerHTML = "<h3>Eigenvalues:</h3>";
    result.innerHTML += "<p>Eigenvalues: " + eigenvalues.join(", ") + "</p><br>";

    result.innerHTML += "<h3>Eigenvectors:</h3>";
    for (let i = 0; i < eigenvectors.length; i++) {
        result.innerHTML += "<p>Eigenvalue " + (i + 1) + ": " + eigenvalues[i] + "</p>";
        result.innerHTML += "<p>Eigenvector " + (i + 1) + ": [" + eigenvectors[i].map(e => e.toFixed(2)).join(", ") + "]</p>";
    }
}
function clearTextArea() {
    window.location.reload();
}