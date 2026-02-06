const password = prompt("Enter your password.");

if (password.length >= 6 && password.indexOf(" ") === -1) {
    console.log("Good enough.");

} else{console.log("Too short.");}