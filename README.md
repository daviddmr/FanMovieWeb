# Pré-requisitos #
* Node + npm instalado
* Clonar e executar o projeto do repositório: https://github.com/daviddmr/FanMovieBack
(Instruções no repositório do projeto)

# Get started #
1. Clonar o projeto para a sua máquina
1. Executar o comando "npm install" na raiz do projeto para baixar as dependências necessárias
(É necessário conexão com a internet)
1. Executar o comando "node server.js" na raiz do projeto para iniciar o servidor da aplicação.
    **Obs:** Caso o servidor do projeto FanMovieBack esteja rodando em outra máquina, é necessário configurar o ip do server no arquivo "..\FanMovieWeb\js\services\create-service.js" na variável baseUrl para o ip da máquina correta
1. Acessar o endereço http://localhost:5000 (ou o ip da máquina que esteja executando o servidor)

# Telas e Features #
### Login
Dedicada para realizar o login na aplicação.
Só administradores podem realizar login na página administrativa

![](https://s28.postimg.org/inh0pajfx/Login_fanmovie.png)

### Signup
* Dedicada para realizar o cadastro do administrador

![](https://s28.postimg.org/tbkro4tf1/Signup_fanmovie.png)

### Filmes/Home
* Exibe uma lista de todos os filmes cadastrados
* Possui um campo de pesquisa para facilitar a procura pelo filme, usando como base o título original, título traduzido ou a sinopse
* É possível ordenar a lista de filmes por id, título ou ano de lançamento clicando nos nomes das colunas
* O administrador pode remover ou editar um filme selecionado
* É possível criar um novo filme selecionando o botão respectivo no canto superior direito da barra de tarefas
* Há um botão de logout também no canto superior direito

![](https://s28.postimg.org/6x337wqnh/Filmes_fanmovie.png)

### Tela de cadastro/edição de filmes
* Nesta tela o usuário pode editar ou cadastrar um novo filme preenchendo ou editando os campos

![](https://s28.postimg.org/yj5usla0d/Editar_fanmovie.png)
