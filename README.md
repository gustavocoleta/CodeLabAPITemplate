# CodeLabAPITemplate

Este é um template para criação de uma API do CodeLab. Utilize este template para criar a sua API NestJS dentro de um Docker Container.

⚠️ Antes de inicar o projeto a partir do template, verifique os TODO's a substitua pelos valores corretos ⚠️

## Development Start

```bash
docker compose up --build
```

## Execução de Testes

- "attach" ao container para executar os testes.
- cato não deserje obter os relatórios de cobertura, remova o sufixo `:cov` dos comandos abaixo.

### Unit

```bash
npm run test:cov
```

### E2E

```bash
npm run test:e2e:cov
```
