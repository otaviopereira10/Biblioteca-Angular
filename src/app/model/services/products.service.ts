import { Injectable } from '@angular/core';
import { Iproducts } from './iproducts';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private products: Iproducts[] = [
    {id: 1, name: 'Biblioteca da Meia-Noite', price: 35.0, description: 'A Biblioteca da Meia-Noite traz nos a história de Nora Seed, uma adulta com depressão e pensamentos suicidas.', image: '../livro1.png'},
    {id: 2, name: 'É assim que começa', price: 47.5, description: 'Em "É Assim Que Começa", ela nos faz refletir sobre os padrões que aceitamos em nossos relacionamentos e como podemos quebrar ciclos de comportamentos nocivos.', image: '../livro2.png'},
    {id: 3, name: 'Eu e esse meu coração', price: 37.5, description: 'Uma história surpreendente e emocionante sobre a vida e a morte, sobre sobreviver à revolta, à culpa e aos conflitos da adolescência, enquanto se descobre um grande amor.', image: '../livro3.png'},
    {id: 4, name: 'Malibu renasce', price: 45.0, description: 'Todo ano, Nina promove a festa mais aguardada da costa californiana, que sempre atrai inúmeras estrelas de Hollywood e, consequentemente, escândalos do mais alto nível.', image: '../livro4.png'},
    {id: 5, name: 'É assim que acaba', price: 7.5, description: 'O livro aborda sem medo alguns tabus da sociedade para explorar a complexidade das relações tóxicas, e como o amor e o abuso muitas vezes coexistem em uma confusão de sentimentos.', image: '../livro5.png'},
    {id: 6, name: 'Daisy Jones and teh Six', price: 7.5, description: ' Uma história de amor e música” conta a história de uma banda de rock da década de 1970 que se separou abruptamente no auge do sucesso.', image: '../livro6.png'}
  ];

  getProducts(): Iproducts[]{
    return this.products;
  }
}
