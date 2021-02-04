function dividir (valor1, valor2) {
    if (valor2 != 0) {
        return valor1/valor2;
    } else {
        return "Não é possível dividir um número por zero. Tente outro número"
    }
}
module.exports = dividir