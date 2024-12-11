// EX1
let nota1 = parseFloat(prompt("Digite a primeira nota:"));
let nota2 = parseFloat(prompt("Digite a segunda nota:"));
let nota3 = parseFloat(prompt("Digite a terceira nota:"));
let media = calcularMedia(nota1, nota2, nota3);

if (media >= 6) {
    alert("Você passou! Média: " + media);
} else {
    alert("Você ficou de recuperação. Média: " + media);
}

// EX2
let idade = parseInt(prompt("Qual a sua idade?"));
if (idade >= 16) {
    alert("Você pode se inscrever no curso de Desenvolvimento de Sistemas.");
} else {
    alert("Você não pode se inscrever no curso. Idade mínima é 16 anos.");
}

// EX3
let valorMaterial = parseFloat(prompt("Qual o valor do material didático?"));
if (valorMaterial > 50) {
    valorMaterial = valorMaterial * 0.9; 
    alert("Você recebeu 10% de desconto! O valor final é: R$" + valorMaterial.toFixed(2));
} else {
    alert("O valor do material é abaixo de R$ 50, sem desconto. Valor final: R$" + valorMaterial.toFixed(2));
}

// EX4
let porcentagemPresenca = parseFloat(prompt("Qual a sua porcentagem de presença?"));
if (porcentagemPresenca >= 75) {
    alert("Você está apto a ser aprovado.");
} else {
    alert("Você não está apto a ser aprovado. Presença insuficiente.");
}

// EX5
let turno = prompt("Digite o seu turno (M para Matutino, V para Vespertino, N para Noturno):").toUpperCase();
switch (turno) {
    case 'M':
        alert("Bom dia! Você está no turno Matutino.");
        break;
    case 'V':
        alert("Boa tarde! Você está no turno Vespertino.");
        break;
    case 'N':
        alert("Boa noite! Você está no turno Noturno.");
        break;
    default:
        alert("Opção inválida.");
        break;
}

// EX6
let nota4 = parseFloat(prompt("Digite a primeira nota:"));
let nota5 = parseFloat(prompt("Digite a segunda nota:"));
let nota6 = parseFloat(prompt("Digite a terceira nota:"));
let mediaFinal = calcularMedia(nota4, nota5, nota6);

if (nota4 < 4 || nota5 < 4 || nota6 < 4) {
    alert("Você reprovou por nota baixa.");
} else if (mediaFinal >= 6) {
    alert("Você passou direto! Média: " + mediaFinal);
} else {
    alert("Você ficou de recuperação. Média: " + mediaFinal);
}

// EX7
let quantidadeMonitores = parseInt(prompt("Quantos monitores há no estoque?"));
let quantidadeTeclados = parseInt(prompt("Quantos teclados há no estoque?"));

if (quantidadeMonitores < 10) {
    alert("Repor Estoque de Monitores.");
} else {
    alert("Estoque Suficiente de Monitores.");
}

if (quantidadeTeclados < 10) {
    alert("Repor Estoque de Teclados.");
} else {
    alert("Estoque Suficiente de Teclados.");
}

// EX8
let media2 = parseFloat(prompt("Digite a média final do aluno:"));

if (media2 >= 8) {
    alert("Excelente!");
} else if (media2 >= 6) {
    alert("Bom!");
} else {
    alert("Precisa Melhorar.");
}

// EX9
let matriculado = prompt("Você está matriculado no curso? (sim/não)").toLowerCase();
let valorCurso = parseFloat(prompt("Qual o valor do curso de extensão?"));

if (matriculado === "sim") {
    valorCurso = valorCurso * 0.8; 
    alert("Desconto de 20% aplicado! O valor final do curso é: R$" + valorCurso.toFixed(2));
} else {
    alert("Valor do curso: R$" + valorCurso.toFixed(2));
}

// EX10
let funcionalidade = parseFloat(prompt("Digite a nota de funcionalidade (1 a 10):"));
let design = parseFloat(prompt("Digite a nota de design (1 a 10):"));
let documentacao = parseFloat(prompt("Digite a nota de documentação (1 a 10):"));
let media3 = calcularMedia(funcionalidade, design, documentacao);

if (media3 >= 8) {
    alert("Excelente!");
} else if (media3 >= 6) {
    alert("Bom!");
} else {
    alert("Precisa Melhorar.");
}

// EX11
let media4 = parseFloat(prompt("Digite a média do aluno:"));
let frequencia = parseFloat(prompt("Digite a porcentagem de frequência do aluno:"));

if (media4 >= 6 && frequencia >= 75) {
    alert("Aluno aprovado!");
} else if (media4 >= 4 && media4 < 6) {
    alert("Aluno de recuperação.");
} else {
    alert("Aluno reprovado.");
}

// EX12
let temCartao = prompt("Você possui um cartão de acesso? (sim/não)").toLowerCase();
if (temCartao === "sim") {
    let cartaoAtivo = prompt("O seu cartão está ativo? (sim/não)").toLowerCase();
    if (cartaoAtivo === "sim") {
        alert("Acesso permitido ao laboratório.");
    } else {
        alert("Acesso negado. Cartão inativo.");
    }
} else {
    alert("Acesso negado. Você não possui cartão.");
}

// EX13
let recursosSolicitados = parseInt(prompt("Quantos recursos (notebooks, projetores) você precisa?"));
let estoqueDisponivel = 15; 

if (recursosSolicitados <= estoqueDisponivel) {
    alert("Pedido atendido. Recursos disponíveis.");
} else {
    alert("É necessário fazer uma reserva para a data futura.");
}

// EX14
let tipoDisciplina = prompt("Você deseja se matricular em uma disciplina obrigatória ou eletiva?").toLowerCase();

if (tipoDisciplina === "obrigatória") {
    alert("Você se matriculou em uma disciplina obrigatória.");
} else if (tipoDisciplina === "eletiva") {
    let vagasDisponiveis = parseInt(prompt("Quantas vagas estão disponíveis para a disciplina eletiva?"));
    if (vagasDisponiveis > 0) {
        alert("Você se matriculou na disciplina eletiva.");
    } else {
        alert("Disciplina eletiva sem vagas. Você está na lista de espera.");
    }
} else {
    alert("Opção inválida.");
}

// EX15
let nota7 = parseFloat(prompt("Digite a primeira nota:"));
let nota8 = parseFloat(prompt("Digite a segunda nota:"));
let nota9 = parseFloat(prompt("Digite a terceira nota:"));
let media5 = calcularMedia(nota7, nota8, nota9);

if (media5 >= 6) {
    alert("Você passou! Média: " + media5);
} else if (media5 >= 4 && media5 < 6) {
    alert("Você ficou de recuperação. Média: " + media5);
} else {
    alert("Você foi reprovado. Média: " + media5);
}

if (media5 > 8) {
    alert("Parabéns! Destaque pela excelente média.");
}

// EX16
let infrações = parseInt(prompt("Quantas infrações você cometeu?"));
let pontos = 0;

for (let i = 0; i < infrações; i++) {
    let tipoInfração = parseInt(prompt("Informe os pontos da infração " + (i + 1) + ":"));
    pontos += tipoInfração;
}

if (pontos >= 20) {
    alert("Sua carteira foi suspensa! Pontos totais: " + pontos);
} else {
    let pontosRestantes = 20 - pontos;
    alert("Você ainda pode acumular " + pontosRestantes + " pontos antes de atingir o limite.");
}

// EX17
let valorEmprestimo = parseFloat(prompt("Qual o valor do empréstimo?"));
let numeroParcelas = parseInt(prompt("Quantas parcelas você deseja?"));
let taxaJuros = 0.05; 
let valorFinal = valorEmprestimo * Math.pow(1 + taxaJuros, numeroParcelas);

alert("O valor total a ser pago ao final do empréstimo será: R$" + valorFinal.toFixed(2));

// EX18
let nota10 = parseFloat(prompt("Digite a primeira nota:"));
let nota11 = parseFloat(prompt("Digite a segunda nota:"));
let nota12 = parseFloat(prompt("Digite a terceira nota:"));
let media6 = calcularMedia(nota10, nota11, nota12);

let fezAtividadeExtra = prompt("Você realizou atividades extras? (sim/não)").toLowerCase();
if (fezAtividadeExtra === "sim") {
    media6 *= 1.05; 
}

if (media6 >= 6) {
    alert("Você passou! Média final: " + media6.toFixed(2));
} else if (media6 >= 4 && media6 < 6) {
    alert("Você ficou de recuperação. Média final: " + media6.toFixed(2));
} else {
    alert("Você reprovou. Média final: " + media6.toFixed(2));
}

// EX19
let qualidade = parseFloat(prompt("Digite a qualidade do produto (1 a 10):"));
let preco = parseFloat(prompt("Digite o preço do produto:"));

if (qualidade >= 8 && preco <= 100) {
    alert("Produto com Ótimo Custo-Benefício!");
} else if (qualidade >= 6 && preco <= 200) {
    alert("Produto Bom.");
} else if (qualidade >= 4 && preco <= 300) {
    alert("Produto Regular.");
} else {
    alert("Produto Ruim.");
}

// EX20
let consumo = parseFloat(prompt("Digite o consumo de energia (em kWh):"));
let valorTotal;

if (consumo <= 50) {
    valorTotal = consumo * 0.5; 
} else if (consumo <= 150) {
    valorTotal = consumo * 0.7; 
} else if (consumo <= 300) {
    valorTotal = consumo * 0.9; 
} else {
    valorTotal = consumo * 1.2; 
}

alert("O valor da sua conta de energia é: R$" + valorTotal.toFixed(2));


