# Arckhé AI — O Ecossistema de IA para o Futuro Inteligente

Site e kits abertos do ecossistema **Arckhé AI**: capacitação, automação e consultoria em IA para indivíduos e pequenas empresas, operados por hiperautomação.

**URL:** https://linnoff88-dev.github.io/arckhe-ai/

## Estrutura

| Pasta | Pilar |
|---|---|
| `consultoria/` | Arckhé AI Strategy — Raio-X de Margem, Agente Blindado |
| `agencia/` | Arckhé AI Solutions — Site que Vende, Lance sua Startup, TransformSite |
| `conteudo/` | Fábrica de conteúdo — Radar de Pautas, FinViral, SaúdeViral, AdvViral, ContaViral, FutViral, Curiosidade Viral, GitBombando |
| `ferramentas/` | Arckhé AI Tools — WebMCP Readiness, Claude SEO |
| `comunidade/` | Semana Arckhé (post semanal automático via GitHub Actions) |
| `academia/` | Arckhé AI Academy — curso AI Strategy Factory (AI-CONSULT) |

## Automação de conteúdo

O post semanal da comunidade é publicado automaticamente:

- `comunidade/semana-arkhe/posts/` — fila de posts (`week-N.json`)
- `comunidade/semana-arkhe/posts-published.json` — posts publicados
- `.github/workflows/semana.yml` — toda segunda-feira (ou manualmente) publica o próximo post da fila e atualiza o site

Para publicar um post fora do agendamento: adicione `week-N.json` em `posts/` e dispare o workflow `semana-arkhe` (ou espere a segunda).

## Licença e proveniência

Kits e ferramentas adaptados de repositórios abertos de [inematds](https://github.com/inematds) (licença **MIT** preservada no arquivo `LICENSE` de cada projeto, com nota de atribuição nos READMEs). Projetos Arckhé originais são de código aberto.

## Regras de segurança

Chaves de API (YouTube, LLMs, WhatsApp etc.) ficam **somente em `.env` local** — nenhum segredo é commitado (ver `.gitignore`). Os templates são os arquivos `.env.exemplo` de cada kit.
