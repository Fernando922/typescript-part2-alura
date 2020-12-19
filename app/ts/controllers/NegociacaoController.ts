import { domInject } from "../helpers/decorators/index";
import { Negociacao, Negociacoes } from "../models/index";
import { MensagemView, NegociacoesView } from "../views/index";

export class NegociacaoController {
  @domInject("#data")
  private _inputData: JQuery;

  @domInject("#quantidade")  
  private _inputQuantidade: JQuery;

  @domInject("#valor")
  private _inputValor: JQuery;

  private _negociacoes: Negociacoes = new Negociacoes();
  private _negociacoesView = new NegociacoesView("#negociacoesView");
  private _mensagemView = new MensagemView("#mensagemView");

  constructor() {
  //   this._inputData = $("#data"); //casting explicito, já que o tipo retornado do queryselector é mais genérico, pode ser h1, input etc
  //   this._inputQuantidade = $("#quantidade");
  //   this._inputValor = $("#valor");
    this._negociacoesView.update(this._negociacoes);
  }

  adiciona(event: Event) {
    event.preventDefault();

    let data = new Date(this._inputData.val().replace(/-/g, "/"));

    if (this._naoEhDiaUtil(data)) {
      return this._mensagemView.update("Apenas negociações em dias úteis!");
    }

    const negociacao = new Negociacao(
      data,
      parseInt(this._inputQuantidade.val()),
      parseFloat(this._inputValor.val())
    );

    this._negociacoes.adiciona(negociacao);

    this._negociacoesView.update(this._negociacoes);
    this._mensagemView.update("Negociação adicionada com sucesso!");
  }

  private _naoEhDiaUtil(data: Date): boolean {
    return (
      data.getDay() === DiaDaSemana.Sabado ||
      data.getDay() == DiaDaSemana.Domingo
    );
  }
}

//lista sequencial, cada item tem um número correspondente
enum DiaDaSemana {
  Domingo,
  Segunda,
  Terca,
  Quarta,
  Quinta,
  Sexta,
  Sabado,
}
