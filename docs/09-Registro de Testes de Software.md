# Registro de Testes de Software



<span style="color:red">Pré-requisitos: <a href="2-Especificação do Projeto.md"> Especificação do Projeto</a></span>, <a href="3-Projeto de Interface.md"> Projeto de Interface</a>

Os requisitos para realização dos testes de software são:
- Aplicativo rodando em emulador de Smartphone. 


Os testes funcionais a serem realizados no aplicativo são descritos a seguir.

<br>

|Caso de teste   | CT-01 - Sistema deve permitir que usuários se cadastrem
|------|-----------------------------------------|
|Requisitos associados | RF-01​​  O aplicativo deve possibilitar ao usuário (cliente e fornecedor de serviços) fazer login, se cadastrar ou alterar sua senha​ 
|Objetivo do teste | Verificar se o sistema permite que os usuário se cadastrem. (Clientes e fornecedores)
|Passos | <ol><li> Entrar no aplicativo </li> <li> Clicar na opção de login. </li> <li> Clicar em se cadastrar. </li><li>Escolher tipo de usuário.</li> <li> Efetuar cadastro. </li></ol>
|Conclusão|
<br>

|Caso de teste   | CT-02 - Sistema deve permitir que usuários realizem login. 
|------|-----------------------------------------|
|Requisitos associados | RF-01 ​​  O aplicativo deve possibilitar ao usuário (cliente e fornecedor de serviços) fazer login, se cadastrar ou alterar sua senha​​  
|Objetivo do teste |  Verificiar se o sistema permite que os usuários realizem login.
|Passos |  <ol><li> Entrar no aplicativo. </li> <li> Clicar no ícone cabeçalho</li> <li> </li> <li> Clicar na opção de realizar login. </li> <li>Inserir dados para efetuar login</li></ol>
|Conclusão|

<br>



|Caso de teste   | CT-03 - Sistema deve permitir que usuários alterem a senha. 
|------|-----------------------------------------|
|Requisitos associados | RF-01 ​​ O aplicativo deve possibilitar ao usuário (cliente e fornecedor de serviços) fazer login, se cadastrar ou alterar sua senha​​  
|Objetivo do teste |  Verificar se o sistema permite que usuários realizem alteração de senha. 
|Passos | <ol><li> Entrar no aplicativo. </li> <li> Clicar no ícone cabeçalho</li> <li> </li> <li> Clicar na opção de realizar login. </li> <li>Clicar na opção de esqueceu a senha.</li> <li>Inserir dados solicitados. </li><li>Sistema enviar e-mail com o código de redefinição de senha</li><li>Inserir o código recebido</li> <li>Criar nova senha </li></ol> 
|Conclusão|


<br>

|Caso de teste   | CT-04 - Fornecedor conseguindo visualizar lista pré-estabelecida como serviço oferecido. 
|------|-----------------------------------------|
|Requisitos associados | RF-02 ​​ O aplicativo deve conter uma lista pré-estabelecida de serviços que poderão ser selecionados pelo fornecedor de serviços (como serviço oferecido) e pelo cliente (como serviço desejado)​​  
|Objetivo do teste |  Verificar se o sistema exibe para o fornecedor a lista pré-estabelecida de serviços oferecidos. 
|Passos | <ol><li>Acessar menu</li> <li>Acessar lista de serviço pré pré-estabelecida</li> <li>Visualizar serviços</li>
|Conclusão|



<br>

|Caso de teste   | CT-05 - Cliente conseguindo visualizar lista pré-estabelecida como serviço desejado. 
|------|-----------------------------------------|
|Requisitos associados | RF-02 ​​ O aplicativo deve conter uma lista pré-estabelecida de serviços que poderão ser selecionados pelo fornecedor de serviços (como serviço oferecido) e pelo cliente (como serviço desejado) ​​  
|Objetivo do teste |  Verificar se o sistema exibe para o cliente a lista pré-estabelecida de serviços oferecidos. 
|Passos | <ol><li>Acessar menu</li> <li>Acessar lista de serviço pré pré-estabelecida</li> <li>Visualizar serviços</li>
|Conclusão|



<br>

|Caso de teste   | CT-06 - Fornecedor conseguindo selecionar serviços da lista pré-estabelecida como serviço oferecido.              
|------|-----------------------------------------|
|Requisitos associados | RF-02 ​​ O aplicativo deve conter uma lista pré-estabelecida de serviços que poderão ser selecionados pelo fornecedor de serviços (como serviço oferecido) e pelo cliente (como serviço desejado) ​​  
|Objetivo do teste |  Garantir que o fornecedor consiga selecionar serviços da lista pré-estabelecida. 
|Passos | <ol><li>Acessar menu</li> <li>Procurar serviço</li> <li>Selecionar serviço</li>
|Conclusão|

<br>


|Caso de teste   | CT-07 - Cliente conseguindo selecionar serviços da lista pré-estabelecida como serviço desejado. 
|------|-----------------------------------------|
|Requisitos associados | RF-02 ​​ O aplicativo deve conter uma lista pré-estabelecida de serviços que poderão ser selecionados pelo fornecedor de serviços (como serviço oferecido) e pelo cliente (como serviço desejado) ​​  
|Objetivo do teste |  Garantir que o cliente consiga selecionar serviços da lista pré-estabelecida.
|Passos | <ol><li>Acessar menu</li> <li>Procurar serviço</li> <li>Selecionar serviço</li>
|Conclusão|


<br> 


|Caso de teste   | CT-08 - Sistema permitindo cliente selecionar serviços da lista pré-estabelecida como serviço desejado e solicitar orçamento do serviço selecionado. 
|------|-----------------------------------------|
|Requisitos associados | RF-03 ​​  Permitir que o usuário visualize um ponto de coleta​​  
|Objetivo do teste |  Garantir que o cliente consiga solictar orçamentos do serviço selecionado.
|Passos | <ol><li>Acessar menu</li> <li>Procurar serviço</li> <li>Selecionar serviço</li><li>Solicitar orçamento.</li>                </ol>
|Conclusão|



<br> 

|Caso de teste   | CT-09 - Cliente conseguindo incluir informações adicionais ao serviço requerido. 
|------|-----------------------------------------|
|Requisitos associados | RF-03 ​​ O site deve permitir ao cliente selecionar um serviço (da lista pré-estabelecida) e solicitar seu orçamento, podendo também adicionar informações sobre o serviço requerido ​​  
|Objetivo do teste |  Garantir que o sistema permita o cliente a incluir informações adicionais no serviço requerido. 
|Passos | 
|Conclusão|



<br> 

|Caso de teste   | CT-10 - Sistema permitindo fornecedor de enviar propostas.
|------|-----------------------------------------|
|Requisitos associados | RF-04 ​​ O aplicativo deve permitir ao fornecedor enviar prosposta ​​  
|Objetivo do teste |  Garantir que o sistema permita o fornecedor de enviar propostas de serviço. 
|Passos | <ol><li>Acessar o menu.</li> <li>Verificar lista de orçamentos recebeidos.</li> <li>Selecionar orçamento recebido. </li> <li>Inserir informações da proposta.</li>Enviar proposta de orçamento.</ol> 
|Conclusão|



<br> 


|Caso de teste   | CT-11 - Sistema permitindo cliente agendar serviço que teve seu orçamento aprovado.                      
|------|-----------------------------------------|   
|Requisitos associados | RF-05 ​​ O aplicativo deve permitir ao cliente o agendamento do serviço escolhido após ter recebido e aprovado o orçamento do mesmo ​​  
|Objetivo do teste |  Garantir que o sistema esteja permitindo o cliente de agendar os serviços que tiveram o orçamento aprovado.
|Passos |<ol><li>Aceitar proposta de orçamento.</li> <li>Escolher data e horário do agendamento.</li>Enviar agendamento do serviço.</ol>
|Conclusão|



<br> 



|Caso de teste   | CT-12 - Sistema permitindo cliente avaliar serviço que foi prestado pelo fornecedor.
|------|-----------------------------------------|   
|Requisitos associados | RF-07 ​​ O aplicativo deve permitir ao cliente realizar a avaliação do serviço prestado pelo fornecedor ​​  
|Objetivo do teste |  Garantir que o ciente consiga avaliar o serviço do fornecedor. 
|Passos | <ol><li>Abrir aplicativo.</li> <li>Responder avaliação que foi notificada pelo aplicativo.</li> </ol> 
|Conclusão|



<br>




|Caso de teste   | CT-13 - Cliente visualizando o contato e as avaliações recebidas pelo fornecedor selecionado. 
|------|-----------------------------------------|   
|Requisitos associados | RF-09 ​​ O aplicativo deve permitir ao cliente visualizar o contato e as avaliações referentes aos fornecedores ​​  
|Objetivo do teste |  Garantir que o cliente consiga visualizar o contato e as avaliações recebidas pelo fornecedor.
|Passos | <ol> <li>Acessar menu. </li> <li>Selecionar serviço pré-listado. </li> <li>Visualizar contato e avaliação do serviço selecionado.</li> </ol>
|Conclusão|

<br>

|Caso de teste   | CT-14 - Cliente aceitando propostas de orçamento. 
|------|-----------------------------------------|   
|Requisitos associados | RF-10 ​​ 	O aplicativo deve permitir ao cliente aceitar as proposta de orçamento. ​​  
|Objetivo do teste |  Garantir que o cliente consiga aceitar a proposta de orçamento do fornecedor.
|Passos | <ul><li>Habilitar menu</li><li>Verificar propostas recebidas.</li> <li>Aceitar propostas.</li>    </ul>
|Conclusão|



<br>



<br>
## Ferramentas de Testes
 
- Jest
- Cypress
- xUnit.net
- Vscode test Explorer
