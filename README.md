# cartzero.energy

**CartZero** — Clean battery power for NYC food cart vendors. Replace gasoline generators. Swap at your commissary. From $4.30/day.

*We give New York City its air back.*

## What is this?

Product frontend for [CartZero](https://cartzero.global), a LiFePO4 battery swap subscription service replacing gasoline generators on New York City's 5,100+ permitted food carts. Batteries are swapped daily at the commissaries vendors already visit — no new logistics, no behavior change.

## Stack

- Plain HTML / CSS / JS — no build step, no framework
- Hosted via Cloudflare Pages
- Simulated fleet data (JSON), designed for future AMPECO CPMS API integration
- OCPP 1.6J compatible architecture

## Site Structure

| Route | Layer | Purpose |
|---|---|---|
| `/` | Landing | Hero + value proposition |
| `/join` | Sales Machine | Vendor conversion, pricing, interest form |
| `/dashboard` | Operator Dashboard | Fleet status, KPIs, AI insights |
| `/map` | Electrified Blocks | NYC vendor penetration map |
| `/mycart` | Vendor Portal | Individual vendor impact view |
| `/discover` | Consumer View | Public-facing, QR code destination |

## Contact

Bodo Becker — Founder  
hello@cartzero.energy  
[cartzero.global](https://cartzero.global) · [LinkedIn](https://www.linkedin.com/company/cartzero-energy)
