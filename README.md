
![](https://code.visualstudio.com/assets/docs/nodejs/recipes/node-typescript-docker.png)

# GoBarber - 2 - Backend

## Recuperação de senha

**RF - Requisito funcional**

- O usuário deve poder recuperar sua senha informando o seu e-mail;
- O usuário deve receber um e-mail com instruções de recuperação de senha;
- O usuário deve poder resetar sua senha;

**RNF - Requisito não funcional**

- Utilizar Mailtrap para testar envios em ambiente de desenvolvimento;
- Utilizar Amazon SES para envios em produção;
- O envio de e-mails deve acontecer em segundo plano (Filas de tarefas)

**RN - Regra de negócio**

- O link enviado por e-mail para resetar a senha, deve expirar em 1h;
- O usuário precisa confirmar a nova senha ao resetar sua senha;

## Atualização do perfil

**RF - Requisito funcional**

- O usuário deve poder utilizar seu nome, e-mail e senha;

**RN - Regra de negócio**

- O usuário não pode alterar seu e-mail para um e-mail já utilizado;
- Para atualizar sua senha, o usuário deve informar a senha antiga;
- Para atualizar sua senha, o usuário precisa confirmar a nova senha;

## Painel do prestador

**RF - Requisito funcional**

- O usuário deve poder listar seus agendamentos de um dia específico;
- O prestador deve receber uma notificação sempre que houver um novo agendamento;
- O prestador deve poder visualizar as notificações não lidas;

**RNF - Requisito não funcional**

- Os agendamentos do prestador no dia deve ser armazenados em cache;
- As notificações do prestador deve ser armazenadas no MongoDB;
- As notificações do prestador devem ser enviadas em tempo-real utilizando Socket.io;

**RN - Regra de negócio**

- A notificação deve ter um status de lida ou não-lida para que o prestador possa controlar;

## Agendamento de serviços

**RF - Requisito funcional**

- O usuário deve poder listar todos os prestadores de serviço cadastrados;
- O usuário deve poder listar os dias de um mês com pelo menos um horário disponível de um prestador.
- O usuário deve poder listar horários disponíveis em um dia específico de um prestador;
- O usuário deve poder realizar um novo agendamento com um prestador;

**RNF - Requisito não funcional**

- A listagem de prestadores deve ser armazenada em cache;

**RN - Regra de negócio**

- Cada agendamento deve durar 1h exatamente;
- Os agendamentos deve estar disponíveis entre 8h às 18h (Primeiro as 8h, último às 17h);
- O usuário não pode agendar em um horário já ocupado.
- O usuário não pode agendar em um horário que já passou.
- O usuário não pode agendar serviços consigo mesmo;

## Contents development

**Frontend - React.js**

https://github.com/newerton/gobarber-2-frontend

**App mobile - React Native**

https://github.com/newerton/gobarber-2-app

