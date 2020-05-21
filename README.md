<p align="center">
    <img width="300" align="center" src=".github/gostack.svg">   
</p>

<h1 align="center">
    GoBarber Mobile
</h1>

<h3 align="center">
Plataforma de agendamento e gerenciamento para barbearias
</h3>

<p align="center">
  <a href="#rocket-sobre-o-projeto">Sobre o projeto</a> | <a href="#computer-tecnologias">Tecnologias</a> | <a href="#books-guia-de-instalação-e-execução">Guia de instalação e execução</a> | <a href="#pencil-como-contribuir">Como contribuir</a> | <a href="#page_with_curl-licença">Licença</a>
</p>

## Layout

<img src=".github/gobarber_mobile.gif">

## :rocket: Sobre o projeto

<p>Esta é uma plataforma completa onde o cliente pode visualizar a agenda de barbeiros e agendar um horário, 
e para barbeiros, permite gerenciar os horários marcados.</p> 

<p>Com a versão web, os barbeiros poderão gerenciar sua agenda controlando os horários que foram marcados pelos clientes através da versão mobile.</p>

<p>Este é o repositório da versão mobile do projeto.</p>

<ul>
  <li>Para a api REST, <a href="https://github.com/nathaliacristina20/gostack-gobarber-server">aqui</a>.</li>
  <li>Para a versão web, <a href="https://github.com/nathaliacristina20/gostack-gobarber-web">clique aqui</a>.</li>  
</ul>

## :computer: Tecnologias

- [React Native](https://reactnative.dev/)
- [Typescript](https://www.typescriptlang.org/)
- [React Native Async Storage](https://github.com/react-native-community/async-storage)
- [React Navigation](https://reactnavigation.org/)
- [Unform](https://unform.dev/)
- [Axios](https://github.com/axios/axios)
- [React Native Gesture Handler](https://software-mansion.github.io/react-native-gesture-handler/)
- [Styled Components](https://styled-components.com/)
- [Yup](https://github.com/jquense/yup)
- [React Native Vector Icons](https://github.com/oblador/react-native-vector-icons)
- [ESLint-Airbnb](https://eslint.org/), [Prettier](https://prettier.io/) e [EditorConfig](https://editorconfig.org/)
- [Jest](https://jestjs.io/) 
- [Datefns](https://date-fns.org/)
- [React Native Dotenv](https://github.com/zetachang/react-native-dotenv)

## :books: Guia de instalação e execução

### Pré-requisitos

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en/) v10.20 ou maior
- [Yarn](https://yarnpkg.com/)
- [Api REST do GoBarber](https://github.com/nathaliacristina20/gostack-gobarber-server)
- Emulador ou Dispositivo fisíco 

<blockquote>Acesse <a href="https://react-native.rocketseat.dev">aqui</a> a documentação da Rocketseat com o passo-a-passo e erros mais comuns para montar seu ambiente Mobile.</blockquote>

### Como executar

<i>Antes de executar estes passos, certifique-se que sua api REST esteja em execução.</i>

<strong>Com um emulador</strong>

- Clone o repositório ```git clone https://github.com/nathaliacristina20/gostack-gobarber-mobile.git```
- Vá até o diretório ```cd gostack-gobarber-mobile```
- Execute ```yarn``` para instalar as dependências
- Copie o arquivo .env.example executando ```cp .env.example .env``` para linux ou mac e ```copy .env.example .env``` para windows
- Abra o arquivo .env e preencha com suas variáveis de ambiente
- Abra um dispositivo no seu emulador
- Execute ```yarn android``` ou ```yarn ios``` de acordo o sistema operacional que você deseja rodar
- Execute ```yarn start```

Pronto! Feche e abra novamente o aplicativo.

<strong>Com um dispositivo físico</strong>

<i>Certifique-se que seu dispositivo esteja com o modo desenvolver ativado.</i>

- Vá até o diretório ```cd gostack-gobarber-mobile```
- Execute ```yarn``` para instalar as dependências
- Copie o arquivo .env.example executando ```cp .env.example .env``` para linux ou mac e ```copy .env.example .env``` para windows
- Abra o arquivo .env e preencha com suas variáveis de ambiente
- Conecte seu dispositivo físico em um cabo USB
- Execute ```yarn android``` ou ```yarn ios``` de acordo o sistema operacional que você deseja rodar
- Execute ```yarn start```

Pronto! Feche e abra novamente o aplicativo.

Caso deseje executar os testes unitários e de integração basta executar ```yarn test``` em seu terminal. 

## :pencil: Como contribuir

<b>Faça um fork deste repositório</b>

```bash
# Clone o seu fork
$ git clone url-do-seu-fork && cd gostack-gobarber-server

# Crie uma branch com sua feature ou correção de bugs
$ git checkout -b minha-branch

# Faça o commit das suas alterações
$ git commit -m 'feature/bugfix: minhas alterações'

# Faça o push para a sua branch
$ git push origin minha-branch
```

Depois que o merge da sua pull request for feito, você pode deletar a sua branch.

## :page_with_curl: Licença

Esse projeto está sob a licença MIT. Veja o arquivo <a href="https://github.com/nathaliacristina20/be-the-hero/blob/master/LICENSE">LICENSE</a> para mais detalhes.

<hr />
<p>by Nathalia Cristina :wave: <a href="https://linktr.ee/nathaliacristina20">Get in touch!</a></p>
