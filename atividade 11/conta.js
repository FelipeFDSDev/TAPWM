// Classe base Conta
class Conta {
    constructor(nomeCorrentista, banco, numeroConta, saldo) {
        this._nomeCorrentista = nomeCorrentista;
        this._banco = banco;
        this._numeroConta = numeroConta;
        this._saldo = saldo;
    }

    // Getters e Setters
    get nomeCorrentista() {
        return this._nomeCorrentista;
    }

    set nomeCorrentista(novoNome) {
        this._nomeCorrentista = novoNome;
    }

    get banco() {
        return this._banco;
    }

    set banco(novoBanco) {
        this._banco = novoBanco;
    }

    get numeroConta() {
        return this._numeroConta;
    }

    set numeroConta(novoNumero) {
        this._numeroConta = novoNumero;
    }

    get saldo() {
        return this._saldo;
    }

    set saldo(novoSaldo) {
        this._saldo = novoSaldo;
    }
}

// Classe Conta Corrente com Saldo Especial
class Corrente extends Conta {
    constructor(nomeCorrentista, banco, numeroConta, saldo, saldoEspecial) {
        super(nomeCorrentista, banco, numeroConta, saldo);
        this._saldoEspecial = saldoEspecial;
    }

    get saldoEspecial() {
        return this._saldoEspecial;
    }

    set saldoEspecial(novoSaldoEspecial) {
        this._saldoEspecial = novoSaldoEspecial;
    }

    mostrarDados() {
        return `
            <div class="conta-info conta-corrente">
                <h3>Conta Corrente</h3>
                <p><strong>Nome:</strong> ${this.nomeCorrentista}</p>
                <p><strong>Banco:</strong> ${this.banco}</p>
                <p><strong>Número da Conta:</strong> ${this.numeroConta}</p>
                <p><strong>Saldo:</strong> R$ ${this.saldo.toFixed(2)}</p>
                <p><strong>Saldo Especial:</strong> R$ ${this.saldoEspecial.toFixed(2)}</p>
                <p><strong>Saldo Total Disponível:</strong> R$ ${(parseFloat(this.saldo) + parseFloat(this.saldoEspecial)).toFixed(2)}</p>
            </div>
        `;
    }
}

// Classe Conta Poupança com Juros e Data Vencimento
class Poupanca extends Conta {
    constructor(nomeCorrentista, banco, numeroConta, saldo, juros, dataVencimento) {
        super(nomeCorrentista, banco, numeroConta, saldo);
        this._juros = juros;
        this._dataVencimento = dataVencimento;
    }

    get juros() {
        return this._juros;
    }

    set juros(novosJuros) {
        this._juros = novosJuros;
    }

    get dataVencimento() {
        return this._dataVencimento;
    }

    set dataVencimento(novaData) {
        this._dataVencimento = novaData;
    }

    mostrarDados() {
        return `
            <div class="conta-info conta-poupanca">
                <h3>Conta Poupança</h3>
                <p><strong>Nome:</strong> ${this.nomeCorrentista}</p>
                <p><strong>Banco:</strong> ${this.banco}</p>
                <p><strong>Número da Conta:</strong> ${this.numeroConta}</p>
                <p><strong>Saldo:</strong> R$ ${this.saldo.toFixed(2)}</p>
                <p><strong>Taxa de Juros:</strong> ${this.juros}%</p>
                <p><strong>Data de Vencimento:</strong> ${this.dataVencimento}</p>
                <p><strong>Rendimento estimado:</strong> R$ ${(this.saldo * (this.juros / 100)).toFixed(2)}</p>
            </div>
        `;
    }
}

// Funções para manipulação da UI
function openTab(tabName) {
    const tabContents = document.getElementsByClassName('tab-content');
    for (let i = 0; i < tabContents.length; i++) {
        tabContents[i].style.display = 'none';
    }
    
    const tabButtons = document.getElementsByClassName('tab-button');
    for (let i = 0; i < tabButtons.length; i++) {
        tabButtons[i].classList.remove('active');
    }
    
    document.getElementById(tabName).style.display = 'block';
    event.currentTarget.classList.add('active');
}

function criarContaCorrente() {
    const nome = document.getElementById('nome-corrente').value;
    const banco = document.getElementById('banco-corrente').value;
    const conta = document.getElementById('conta-corrente').value;
    const saldo = parseFloat(document.getElementById('saldo-corrente').value);
    const saldoEspecial = parseFloat(document.getElementById('saldo-especial').value);
    
    if (!nome || !banco || !conta || isNaN(saldo) || isNaN(saldoEspecial)) {
        alert('Por favor, preencha todos os campos corretamente.');
        return;
    }
    
    const contaCorrente = new Corrente(nome, banco, conta, saldo, saldoEspecial);
    document.getElementById('resultados').innerHTML = contaCorrente.mostrarDados();
}

function criarContaPoupanca() {
    const nome = document.getElementById('nome-poupanca').value;
    const banco = document.getElementById('banco-poupanca').value;
    const conta = document.getElementById('conta-poupanca').value;
    const saldo = parseFloat(document.getElementById('saldo-poupanca').value);
    const juros = parseFloat(document.getElementById('juros').value);
    const vencimento = document.getElementById('vencimento').value;
    
    if (!nome || !banco || !conta || isNaN(saldo) || isNaN(juros) || !vencimento) {
        alert('Por favor, preencha todos os campos corretamente.');
        return;
    }
    
    const contaPoupanca = new Poupanca(nome, banco, conta, saldo, juros, vencimento);
    document.getElementById('resultados').innerHTML = contaPoupanca.mostrarDados();
}