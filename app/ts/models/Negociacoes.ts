class Negociacoes {
  private _negociacoes: Negociacao[] = []


  adiciona(negociacao: Negociacao){
    this._negociacoes.push(negociacao)
  }

  paraArray(): Negociacao[]{  //É necessário tipar os retornos
    return [...this._negociacoes];  //imutabilidade!!
  }
}