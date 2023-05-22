# TP-ENGSOFT2 Controle de Compras

Esse projeto é um combinador de ordens de negociação que simula uma bolsa de valores simplificada, onde os usuários podem criar ordens de compra e venda para um único ativo, como a ação de uma empresa. O aplicativo combina ordens com base em seu preço e no momento em que foram colocadas, garantindo um processo de negociação justo e eficiente. Ele mantém o estado de ordens de compra, venda e cumpridas em listas separadas. Seguindo a regra de "prioridade de preço-tempo", ordens com o maior preço de compra ou o menor preço de venda são priorizadas, e em caso de empate, a ordem que foi colocada mais cedo tem precedência.

Por exemplo, digamos que temos três ordens de compra para uma ação: Ordem A com um preço de $50 colocada às 10:00, Ordem B com um preço de $51 colocada às 10:05, e Ordem C com um preço de $50 colocada às 10:10. Neste caso, a Ordem B seria priorizada primeiro devido ao seu preço mais alto, seguida pela Ordem A porque foi colocada antes da Ordem C no mesmo preço.

## Grupo :
Gabriel Martins Medeiros Fialho 

Gabriel Torres Bolognani

Mariano Glauber Torres Fernandes

Samuel Henrique Miranda Alves

## Getting Started

1. Run `npm install`

To start the development server, run:

`npm start`

To run the tests, run:

`npm test`
