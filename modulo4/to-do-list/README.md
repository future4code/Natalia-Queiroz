# To Do List
A proposta do projeto é fazer o backend de uma To Do List simples. 
Esse é um projeto desenvolvido a partir dos conhecimentos adquiridos no bootcamp da Labenu e realizado como uma atividade do curso para por em prática os assuntos estudados com uso de ferramentas como MySQL WORKBENCH, POSTMAN e bibliotecas como EXPRESS, DOTENV, KNEX e MOMENT. Todo o código foi desenvolvido em TypeScript.

## Usuários
- O cadastro de usuários é simples, pedindo apenas um nome, um apelido (nickname) e um email

## Tarefas
- As tarefas são definidas por título, descrição, data limite até a qual precisa ser feita, status e usuário pedinte (o que criou a tarefa). 

- Os status das tarefas são 3: *to do* ("a fazer"), *doing* ("fazendo") e *done* ("feita").

### Criação de endpoints
- **1. Criar usuário**     
    - O  código valida se os três campos estão completos (ou seja se não foram enviados ou se não estão vazios) e retorna um erro caso não estejam válidos
    - O código gera o id do usuário
    
- **2. Pegar usuário pelo id**    
    - O endpoint retorna um erro se não encontrar o usuário
    
- **3. Editar usuário**    
    - O código só altera o que foi enviado
    - Se algum valor enviado for vazio, retorna um erro
    
- **4. Criar tarefa**    
    - O código valida se todos os campos não estão vazios
    - O código gera o id da tarefa
    - A data é recebida no formato `DD/MM/YYYY` e o código faz a conversão necessária para salvar no banco
    
- **5. Pegar tarefa pelo id**
    - O endpoint retorna um erro se não encontrar a tarefa
    - O endpoint retorna informações tanto da tarefa como do usuário criador
    - O código converte a data recebida do banco para o formato `DD/MM/YYYY`