<h1 align="Left">  
  <Strong><img width=4% height=4% src="./src/assets/dicionario.png" alt="Login"> English-Words-App - React Native</Strong>
 </h1>

## 🔎 Índice

- [🔎 Índice](#-índice)
- [⚙️ Sobre](#-sobre)
- [💻 Tecnologias utilizadas](#-tecnologias-utilizadas)
- [🧱 Estrutura do projeto](#-estrutura-do-projeto)
- [📁 Como baixar o projeto e executar](#-como-baixar-o-projeto-e-executar)
- [🔭 Observações](#-observações)

---

## ⚙️ Sobre

App de diciónario em inglês, você pode pesquisa por palavras, vê exemplos, olhar as últimas palavras que você acessou, favorita e ainda escutar a pronuncia nativa.

---

## 💻 Tecnologias utilizadas

Tecnologias presentes no projeto:

- Expo;
- TypeScript;
- Context API;
- Yup;
- Formik;
- Styled Components;
- Jest;
- Date-Fns;
- Fire Base;

---

## 🧱 Estrutura do projeto

`./__tests__` -- Pasta com configurações e mocks para os testes;

`./src` -- Pasta principal do projeto;

`./src/assets` -- Arquivos de imagens;

`./src/components` -- Arquivos `.tsx e .ts` de componentes reutilizáveis;

`./src/contexts` -- Arquivos `.tsx` arquivo responsável por armazenar informação global que pode ser compartilhada em algum outro componente ou tela;

`./src/mocks` -- Arquivos `.ts e .json` que fornece informações para o app;

`./src/routes` -- Arquivos `.tsx` com lógica e configuração de navegação;

`./src/screens` -- Arquivos `.tsx` que descrevem componentes React que representam uma página acessável;

`./src/services` -- Arquivos `.ts` com estrutura para acionar os endpoints;

`./src/types` -- Arquivos `.d.ts` com declaração de tipos;

`./src/utils/methodsOfDate` -- Arquivo `.ts` com metódos de data;

`./src/utils/theme` -- Arquivos `.ts` com informações de colores;

---

## 📁 Como baixar o projeto e executar

```bash
# Clonar o repositório
  $ https://github.com/LuizTimboAlcantara/english-words.git

# Instalar as dependências do projeto
  $ yarn install ou yarn

# Rodar a aplicação
  $ expo start

# Rodar testes da aplicação
  $ yarn test

```

---

## 🔭 Observações

- O projeto conta com um mock com quase 5 mil palavras;

- Caso não tenha usuário é preciso criar um antes;

- O login utiliza regras de validação definidas pelo serviço do Fire Base;

- Histórico e favoritos estão sendo salvos local ao deslogar os dados são perdidos;
