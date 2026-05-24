# Roving

**Banking at the speed of compute.**

Roving is the financial OS for AI agents — dedicated accounts, virtual cards, programmable spend controls, and real-time oversight for software that transacts.

---

## The problem

AI agents are making real financial decisions: buying SaaS, paying invoices, booking travel, spinning up infrastructure. But they're doing it with shared credentials, no identity, and zero auditability. Visa, Mastercard, and JPMorgan are building payment rails *around* this problem. Nobody owns the identity and banking layer at the center.

## What we're building

### Roving for Business
Financial OS for companies running agent fleets. Per-agent accounts, programmable spend policies, multi-currency virtual cards, and full audit logs — all in one dashboard.

### Roving for Super Users
A personal agent wallet for builders. Spin up dedicated accounts and Visa cards for each agent you run, set daily limits, approve transactions in real time, and see exactly where your agents are spending.

### Roving KYA — Know Your Agent
An identity layer for agent commerce. KYA verifies agent ownership, capabilities, permissions, and risk profile — creating the trust infrastructure that agent-to-agent and agent-to-merchant transactions require.

## Core platform features

- **Financial Identity** — every agent gets a verified identity tied to its owner
- **Dedicated Accounts & Cards** — isolated balances and virtual Visa cards per agent
- **Programmable Controls** — spend limits, merchant categories, time-based rules
- **Real-Time Oversight** — approve, freeze, or revoke agent access instantly
- **Full Audit Logs** — complete transaction history with agent attribution

## Stack

| Layer | Tech |
|---|---|
| Frontend | Next.js 16, React 19, Tailwind CSS v4 |
| Language | TypeScript |
| Deployment | Vercel |

## Development

```bash
cd web
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

*Pre-seed. Building in public.*
