function pertenceFibonacci(numero) {
    let a = 0, b = 1, proximo = 0;

    if (numero === 0 || numero === 1) {
        return `O número ${numero} pertence à sequência de Fibonacci.`;
    }

    while (proximo < numero) {
        proximo = a + b;
        a = b;
        b = proximo;
    }

    if (proximo === numero) {
        return `O número ${numero} pertence à sequência de Fibonacci.`;
    } else {
        return `O número ${numero} NÃO pertence à sequência de Fibonacci.`;
    }
}

