abstract class View<T> {   // T significa que o parametro passado é do tipo genérico
  private _elemento: JQuery

  constructor(seletor: string){
    this._elemento = $(seletor)
  }

  update(model: T){
    this._elemento.html(this.template(model))
  }


  //quem herdar é obrigado a implementar!
  abstract template(model: T): string


}


//classe abstrata nao pode ser estanciada!