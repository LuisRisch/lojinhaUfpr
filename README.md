<h1 align="center">
    <img height="200" alt="UFPR" src="https://upload.wikimedia.org/wikipedia/pt/9/9c/Ufpr_logo.jpg" />
</h1>

<h3 align="center">
  Lojinha - Mobile
</h3>
<p align="center">
  Aplicativo Lojinha, em React Native, desenvolvido na UFPR
</p>

## :computer: Passos para replicação

### **Pré instalação**

Como o projeto é rodado em Expo, não em React Native puro, é recomendado a dar uma olhada na [documentação base](https://expo.io/learn) dessa tecnologia.

Para iniciar, é recomendado a instalação da expo-cli:

```bash
npm install expo-cli --global
```

### **Passo 1 - Baixando o repositório e instalando dependências**

Em um terminal da sua máquia, rode o seguinte comando:

```bash
# Clona o repositório
$ git clone https://github.com/LuisRisch/lojinhaUfpr.git

# Entre na pasta
$ cd lojinhaUfpr

# Instale as dependencias com yarn ou npm
$ yarn

$ npm install
```

**OBS: A aplicação ainda está em desenvolvimento. Para testar a brach mais avançada, acesse a final**


### **Passo 2 - Ajustes do backend**

Por ainda estar em faze de desenvolvimento, o url da ligação com o backend pode estar diferente do que é necessário para funcionar. Caso esteja, por favor altere o host para o correto (localhost, endereço de ip, etc.).

Esse ajuste precisa ser realizado nos arquivos **api.js** e **socket.js**, localizados na pasta **./src/services/**.

Não esqueça de iniciar o backend, antes de iniciar a aplicação mobile.


### **Passo 3 - Rode a aplicação**

Dentro do diretório do projeto, rode:

```bash
$ yarn start
```

ou:

```bash
$ npm run start
```

Esse comando irá iniciar a **instância do Expo na sua máquina**. A partir disso, abra um emulador e selecione a opção de rodar em um emulador. Outra opção é ter em um aparelho físico o aplicativo Expo, e rodar a partir do QRCode. Clique [aqui](https://expo.io/learn) para mais informações.

## :wrench: Tecnologias usadas:

Neste projeto foram usadas as seguintes tecnologias e ferramentas:

- [**React Native**](https://reactnative.dev/docs/getting-started)
- [**Expo**](https://expo.io/learn)
- [**React Native Vector Icons**](https://github.com/oblador/react-native-vector-icons)
- (...) Em desenvolvimento

## :hourglass_flowing_sand: Time de desenvolvimento:
