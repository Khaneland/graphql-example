# graphql-example
Um exemplo de construção de api graphql com o banco de dados posrgreSQL

# Instalação
rode o comando para instalar as dependências.

```yarn
yarn install
```

# Knex
caso você não tenha o knex instalado globalmente na sua maquina rode esse comando.

```yarn
yarn add -g knex
```

# Arquivo .env
Crie o arquivo .env e coloque as informações do seu banco de dados, abaixo irá ter um exemplo, depois disso crie o seu banco  de dados etc.

```js
module.exports = {
  database: 'banco'
  user: 'usuario'
  password: 'senha'
}
```

# Migrando as tabelas
rode o seguinte comando abaixo para ele atualizar o banco de dados para o ultimo criado nas migrations

```knex
knex migrate:latest
```

# Rodar a aplicação
depois disso só rodar esse comando abaixo que ele vai criar um servidor local com o graphiql para você fazer suas consultas e mutations hue, lembrando que tem que entrar dentro da pasta src

```node
node server.js
```
