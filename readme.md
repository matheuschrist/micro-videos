# Projeto Typescript com Nest.js e Arquitetura Limpa

## Descrição
Este projeto é um exemplo de aplicação Node.js desenvolvida em Typescript utilizando o framework Nest.js. Ele segue os princípios da arquitetura limpa, adotando conceitos do Domain-Driven Design (DDD) e boas práticas do Nest.js. O projeto foi desenvolvido como parte do curso "Dev Full Circle 3", abordando tópicos como microsserviços, API REST, testes automatizados, mensageria com RabbitMQ, integração com GPC Cloud Storage, integração contínua, e boas práticas para ambientes de desenvolvimento e produção.

## Tecnologias Utilizadas
- Typescript
- Nest.js
- Node.js
- JEST (Testes de Unidade, Integração e E2E)
- RabbitMQ (Mensageria)
- GPC Cloud Storage (Integração)
- Integração Contínua

## Estrutura do Projeto
O projeto adota os princípios do Domain-Driven Design (DDD), uma abordagem proposta por Eric Evans para lidar com as complexidades fundamentais do software. O DDD apresenta uma série de conceitos de alto nível que são aplicados de maneira integrada para criar e modificar modelos de domínio. Entre esses conceitos, destacam-se:

- **Entities**: Contém as regras de negócio, entidades e objetos de valor. 
  - *Entidade*: Um objeto identificado por seu fio consistente de continuidade. 
  - *Objeto de valor*: Um objeto imutável (imutável) que possui atributos, mas não possui identidade distinta.

- **Use Cases**: Responsável pela aplicação das regras de negócio e orquestração das operações. 
  - *Evento de Domínio*: Um objeto usado para registrar um evento discreto relacionado à atividade do modelo dentro do sistema, sendo criado apenas para tipos de eventos importantes para os especialistas do domínio.

- **Infrastructure**: Engloba detalhes de implementação como acesso a banco de dados, mensageria e integração com serviços externos. 
  - *Agregado*: Um cluster de entidades e objetos de valor com limites definidos, e um item raiz agregado singular designado para transmitir instruções ao grupo como um todo.

- **Interface**: Camada que lida com as interfaces de usuário ou APIs REST. 
  - *Serviço*: Uma operação ou forma de lógica de negócios que não se enquadra naturalmente no domínio dos objetos. 
  - *Repositórios*: Serviço que usa uma interface global para fornecer acesso a todas as entidades e objetos de valor dentro de uma coleção agregada específica. Os métodos devem permitir a criação, modificação e exclusão de objetos dentro do agregado. 
  - *Fábricas*: Encapsulam a lógica de criação de objetos e agregações complexas, permitindo a manipulação de objetos sem a necessidade de conhecimento interno do cliente sobre sua implementação.


## Boas Práticas do Nest.js
O código segue as boas práticas recomendadas pelo Nest.js, facilitando a manutenção e escalabilidade da aplicação. O uso de módulos, injeção de dependência e a estrutura modular do Nest.js são observados para garantir um código organizado e legível.

## Testes Automatizados
Foram implementados testes de unidade, integração e end-to-end (E2E) utilizando o framework JEST. Os testes garantem a robustez da aplicação e a confiabilidade das operações.

## Mensageria com RabbitMQ
A aplicação utiliza RabbitMQ para comunicação assíncrona entre microsserviços, proporcionando escalabilidade e desacoplamento.

## Integração com GPC Cloud Storage
A integração com GPC Cloud Storage é realizada para armazenamento e recuperação de dados de forma eficiente e escalável.

## Integração Contínua
O projeto incorpora práticas de integração contínua para garantir que as alterações no código sejam testadas e integradas automaticamente, reduzindo possíveis erros e melhorando a eficiência do ciclo de desenvolvimento.

## Boas Práticas para Ambiente de Desenvolvimento e Produção
O projeto inclui configurações e boas práticas recomendadas para ambientes de desenvolvimento e produção. Isso abrange desde configurações de ambiente até estratégias de logging e monitoramento.

## Como Executar
1. Instale as dependências:
```npm install```


2. Execute o aplicativo:
```npm start```

3. Execute os testes:

```npm test```



Este projeto serve como um guia abrangente e exemplar para desenvolvedores interessados em criar aplicações Node.js usando Typescript, Nest.js e seguindo princípios de arquitetura limpa e DDD.
