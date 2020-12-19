export function logarTempoDeExecucao(){
  return function(target: any, propertyKey: string, descriptor: PropertyDescriptor){
    const metodoOriginal = descriptor.value;

    descriptor.value = function(...args: any[]){
      console.log(`parametros passados para o método ${propertyKey}: ${JSON.stringify(args)}`);
      const t1 = performance.now();
      const retorno = metodoOriginal.apply(this, args);  //permite chamar o método original dentro deste contexto
      const t2 = performance.now();
      console.log(`O retorno do método ${propertyKey} é ${JSON.stringify(retorno)}`)
      console.log(`O método ${propertyKey} demorou ${t2-t1} ms`)
      return retorno
    }
    return descriptor;
  }
}