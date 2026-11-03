# 推荐系统 · 论文笔记

方向：生成式推荐、自进化 / Agent 驱动的推荐系统、评测方法。

## 论文清单

| arXiv | 论文 | 机构 | 一句话 |
|---|---|---|---|
| [2602.10226](2602.10226-self-evolving-youtube.md) | Self-Evolving Recommendation System | Google / YouTube | 快慢双环改优化器/架构/奖励，训练时间累计 8× |
| [2602.12612](2602.12612-self-evolverec.md) | Self-EvolveRec | KAIST | 离线最高 +5.54%，线上收入 +1.85% |
| [2606.26859](2606.26859-agentx.md) | AgentX | 快手 | 四阶段闭环 + SGPO，三周 374 想法 → 10 上线 |
| [2606.27243](2606.27243-nova.md) | NOVA | 腾讯 | 训练前语义门禁 + 失败沉淀，固定预算比 EPR |
| [2606.28368](2606.28368-evorec.md) | EvoRec | 阿里国际 | 模型轨 + 方法论轨双自进化 |
| [2607.29241](2607.29241-recharness.md) | RecHarness | GT + 快手 | bandit 路由修改方向 |
| [2608.27287](2608.27287-astar.md) | Astar | 阿里 + 浙大 | 把「提方向」训成专用模型，S@1 0.6786 |
| [2609.10922](2609.10922-auto-recsys.md) | Auto-RecSys | Meta + UIUC | 多日作业的工程可靠性，修复 4.0 → 0.5 |
| [2609.30001](2609.30001-agentx-model.md) | AgentX-Model | 快手 | 双 agent 研究闭环 + 谱系接续 |

## 按主题看

- **生产线闭环**：AgentX → AgentX-Model → Auto-RecSys
- **验证与失败沉淀**：NOVA
- **方向提议**：Astar、RecHarness
- **自进化机制**：EvoRec、Self-EvolveRec、Self-Evolving YouTube

## 笔记结构

每篇 12 节：三十秒速览 → 摘要 → 贡献 → 动机 → 方法 → 实验与证据 → 深度分析 → 同族对比 → 可复现 → 局限 → 术语 → 原文定位。数字均标注原文位置。
