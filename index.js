import express from "express";
import axios from "axios";

const app = express();
const port = 3000;
const API_URL = "https://secrets-api.appbrewery.com/";

//TODO 1: Preencha seus valores para os 3 tipos de autenticação
const yourUsername = "joao";
const yourPassword = "12345";
const yourAPIKey = "7d69f14d-e646-4e5a-b0cd-89b0c9508c1d";
const yourBearerToken = "0035a9c5-8111-4b9f-af74-eb38d93f3cf7";

app.get("/", (req, res) => {
  res.render("index.ejs", { content: "API Response." });
});

app.get("/noAuth", async (req, res) => {
  //TODO 2: Use axios para atingir o endpoint /random
  //Os dados que você recebe devem ser enviados para o arquivo ejs como "conteúdo"
  //Dica: certifique-se de usar JSON.stringify para transformar o objeto JS de axios em uma string.
  try {
    const result = await axios.get(API_URL + "random");
    res.render("index.ejs", { content: JSON.stringify(result.data) });
  } catch (error) {
    console.error("Failed to make request:", error.message);
  }
});

app.get("/basicAuth",  async (req, res) => {
  //TODO 3: Escreva seu código aqui para acessar o endpoint /all
  //Especifique que você deseja apenas os segredos da página 2
  //DICA: É assim que você pode usar axios para fazer autenticação básica:
  // https://stackoverflow.com/a/74632908
  /*
   axios.get(URL, {
      autenticação: {
        nome de usuário: "abc",
        senha: "123",
      },
    });
  */
const result = await axios.get(API_URL+"all?page=2", {
  auth:{
    username: yourUsername,
    password: yourPassword
  }
})
res.render("index.ejs", { content: JSON.stringify(result.data)})

});

app.get("/apiKey", async (req, res) => {
  //TODO 4: Escreva seu código aqui para acessar o endpoint /filter
  //Filtrar todos os segredos com pontuação de constrangimento igual ou superior a 5
  //DICA: Você precisa fornecer um parâmetro de consulta apiKey na solicitação.
  const result = await axios.get(API_URL+"filter?score=5&apiKey="+yourAPIKey)
  res.render("index.ejs", { content: JSON.stringify(result.data)})
});

app.get("/bearerToken", (req, res) => {
  //TODO 5: Escreva seu código aqui para acessar o endpoint /secrets/{id}
  //e pega o segredo com id 42
  //DICA: É assim que você pode usar axios para fazer autenticação de token de portador:
  // https://stackoverflow.com/a/52645402
  /*
  axios.get(URL, {
    cabeçalhos: { 
      Autorização: `Bearer <SEU TOKEN AQUI>` 
    },
  });
  */
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
