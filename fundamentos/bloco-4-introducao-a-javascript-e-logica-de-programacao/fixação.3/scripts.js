const grade = 90;

if (grade >= 90) {
    console.log("Parabéns, você foi aprovada(o)!")
} else if (grade < 90 && grade >=60) {
    console.log("Você está na nossa lista de espera");
} else if (grade < 60) {
    console.log("Você foi reprovada(o)")
}