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

![](https://lh6.googleusercontent.com/xmBlYOQaxdIVu8F6c_ceQwBEaweUM8us1sXtYvwpz2g8XpNVQjj6M2-gX9si_6GcXWKT9p51oU6iBGk=w1366-h638)

### Signup
* Dedicada para realizar o cadastro do administrador

![](https://lh6.googleusercontent.com/UttewGtfuVyhRwFJHh8KZL2FaH3wfYVxznEq98xlQhHPbdqBC7gvZgGagPHqm0dUmwjpoaiB_l7XvoY=w1366-h638)

### Filmes/Home
* Exibe uma lista de todos os filmes cadastrados
* Possui um campo de pesquisa para facilitar a procura pelo filme, usando como base o título original, título traduzido ou a sinopse
* É possível ordenar a lista de filmes por id, título ou ano de lançamento clicando nos nomes das colunas
* O administrador pode remover ou editar um filme selecionado
* É possível criar um novo filme selecionando o botão respectivo no canto superior direito da barra de tarefas
* Há um botão de logout também no canto superior direito

![](https://lh6.googleusercontent.com/DbvO5ZwZsbhHC6cYm8caq8ZNOnHCbRB3pSLt-jnoJ-MmVpJuX0N_C2h_D4cSrZ2Lz0LdG0dlVVIj0YA=w1366-h638-rw)

### Tela de cadastro/edição de filmes
* Nesta tela o usuário pode editar ou cadastrar um novo filme preenchendo ou editando os campos

![](https://lh5.googleusercontent.com/Cvs3tx_iwuqr_ZM_LSjLqQ_zSQAB2_Jh8po4Qp11L9hupxmgCOpj-vVLQA2ABbl2GKDruQIblOdE1VA=w1366-h638-rw)
