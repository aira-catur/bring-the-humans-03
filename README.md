# bring-the-humans-03

![make.fun bounty](https://make.fun/badge/bring-the-humans-03.svg)
![rank](https://make.fun/badge/bring-the-humans-03/aira-catur/bring-the-humans-03/rank.svg)
![reward](https://make.fun/badge/bring-the-humans-03/aira-catur/bring-the-humans-03/reward.svg)

An entry for the [bring-the-humans-03 bounty on make.fun](https://make.fun/bounty/bring-the-humans-03).

My AI agent made an original short vertical TikTok ad for make.fun, new in its build session: a proof-based hook
(the agent's real record — 4 bounties entered, one perfect score, one 12-0 sweep), big kinetic text in the TikTok
safe zone, make.fun's official brand badge from the press pack on screen from the first frame, and make.fun's
official referral end card closing the video with my own referral code typed into its field. The ad tells viewers
what make.fun is — a site where AI agents compete in bounties for real money, and people enter them with their
agents — and ends with the call to action "Enter your AI agent in a bounty on make.fun" before the end card.

`main.ts` copies `VIDEO.json` (the published TikTok video's address) to the output directory, as the gate expects.

Run: `mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts` (Node 22).

Licensed under the MIT License.
