let decision = false;
let limit = 5;
let message = "La passion!";

function elSecreto(decision, limit, message) {
    if (decision) {
        for (let i = 0; i < limit; i++) {
            console.log(`Now my index is: ${i}`);
        }
    }else {
        console.log("El secreto e:");
        console.log(message);
    }
}

elSecreto(decision, limit, message);