# Arquitetura da Solução

<span style="color:red">Pré-requisitos: <a href="3-Projeto de Interface.md"> Projeto de Interface</a></span>

Definição de como o software é estruturado em termos dos componentes que fazem parte da solução e do ambiente de hospedagem da aplicação.

![Arquitetura da Solução](img/02-mob-arch.png)

## Diagrama de Classes

<p align="justify">O diagrama de classes ilustra graficamente como será a estrutura do software, e como cada uma das classes da sua estrutura estarão interligadas. Essas classes servem de modelo para materializar os objetos que executarão na memória.

Segue abaixo o diagrama de classes deste projeto:</p>

<p align="center">
  <img src="https://raw.githubusercontent.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-1-e2-proj-int-t4-sistema-de-contratacao-de-servicos/main/docs/img/diagrama_de%20_classes.jpeg">
</p>
<p align="center">Figura 6 - Diagrama de Classes</p>

## Modelo ER

<p align="justify">O Modelo ER representa através de um diagrama como as entidades (coisas, objetos) se relacionam entre si na aplicação interativa.

Segue abaixo o modelo de entidade relacional deste projeto:</p>

<p align="center">
  <img src="https://raw.githubusercontent.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-1-e2-proj-int-t4-sistema-de-contratacao-de-servicos/main/docs/img/MER.jpg">
</p>
<p align="center">Figura 7 - Modelo de Entidade Relacional</p>

## Esquema Relacional

<p align="justify">O Esquema Relacional corresponde à representação dos dados em tabelas juntamente com as restrições de integridade e chave primária.
 
Segue abaixo o esquema relacional deste projeto:</p>

<p align="center">
  <img src="https://raw.githubusercontent.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-1-e2-proj-int-t4-sistema-de-contratacao-de-servicos/main/docs/img/ER.png">
</p>
<p align="center">Figura 8 - Esquema Relacional</p>

## Modelo Físico

Entregar um arquivo banco.sql contendo os scripts de criação das tabelas do banco de dados. Este arquivo deverá ser incluído dentro da pasta src\bd.

## Tecnologias Utilizadas

<p align="justify">Para a para solução do problema serão utilizados o React Native para o desenvolvimento do aplicativo.
Para o back-end, a linguagem de programação utilizada será a javascript, e como framework utilizaremos a NodeJs/ExpressJs.
Utilizaremos o Visual Code como IDE de desenvolvimento, e como Sistema Gerenciador de Banco de Dados (SGBD) utilizaremos o  MySQL.
Durante o desenvolvimento serão priorizadas o uso de ferramentas alternativas gratuitas de tecnologia, dentre elas: Trello, Mysql, Visual Code e Figma, como especificando anteriormente na metodologia.
A imagem abaixo demonstra a interação do usuário com o sistema, por onde ela passa até retornar uma resposta ao usuário:</p>


## Hospedagem

Explique como a hospedagem e o lançamento da plataforma foi feita.
A API será hospedado em servidor próprio com IP vaálido e será feito o lançamento do aplicativo na platofoma Android.


## Qualidade de Software

Conceituar qualidade de fato é uma tarefa complexa, mas ela pode ser vista como um método gerencial que através de procedimentos disseminados por toda a organização, busca garantir um produto final que satisfaça às expectativas dos stakeholders.

No contexto de desenvolvimento de software, qualidade pode ser entendida como um conjunto de características a serem satisfeitas, de modo que o produto de software atenda às necessidades de seus usuários. Entretanto, tal nível de satisfação nem sempre é alcançado de forma espontânea, devendo ser continuamente construído. Assim, a qualidade do produto depende fortemente do seu respectivo processo de desenvolvimento.

A norma internacional ISO/IEC 25010, que é uma atualização da ISO/IEC 9126, define oito características e 30 subcaracterísticas de qualidade para produtos de software.
Com base nessas características e nas respectivas sub-características, identifique as sub-características que sua equipe utilizará como base para nortear o desenvolvimento do projeto de software considerando-se alguns aspectos simples de qualidade. Justifique as subcaracterísticas escolhidas pelo time e elenque as métricas que permitirão a equipe avaliar os objetos de interesse.

A norma internacional ISO/IEC 25010 define oito características e 30 subcaracterísticas sobre qualidade para produtos de software. Embora todas estas sejam relevantes e desejáveis, este projeto tem foco em medir a qualidade segundo estes aspectos:

<ul dir="auto">
<li>Adequação Funcional
<ul dir="auto">
<li>Completude funcional</li>
<li>Correção funcional</li>
</ul>
</li>
<li>Eficiência/Performance
<ul dir="auto">
<li>Utilização de recursos</li>
</ul>
</li>
<li>Usabilidade
<ul dir="auto">
<li>Operabilidade</li>
<li>Proteção contra erro do usuário</li>
<li>Estética de interface</li>
</ul>
</li>
<li>Confiabilidade
<ul dir="auto">
<li>Maturidade</li>
<li>Tolerância a falhas</li>
</ul>
</li>
<li>Segurança
<ul dir="auto">
<li>Confidencialidade</li>
<li>Integridade</li>
</ul>
</li>
<li>Manutenibilidade
<ul dir="auto">
<li>Modularidade</li>
<li>Reusabilidade</li>
<li>Modificabilidade</li>
</ul>
</li>
<li>Portabilidade
<ul dir="auto">
<li>Adaptabilidade</li>
</ul>
</li>
</ul>