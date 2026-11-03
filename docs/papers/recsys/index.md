# 推荐系统 · 论文笔记

方向：生成式推荐、自进化 / Agent 驱动的推荐系统、评测方法。

## 论文清单

| 状态 | arXiv | 论文 | 机构 | 一句话 |
|---|---|---|---|---|
| ✅ | [2606.26859](2606.26859-agentx.md) | AgentX | 快手 | 四阶段闭环 + SGPO 改 agent 规范，三周 374 想法 → 10 上线 |
| ✅ | [2606.27243](2606.27243-nova.md) | NOVA | 腾讯 | 训练前语义规则门禁 + 失败模式沉淀，固定评测预算比 EPR |
| ✅ | [2608.27287](2608.27287-astar.md) | Astar | 阿里 + 浙大 | 把「提方向」训成专用模型，S@1 0.6786 |
| ⏳ | 2602.10226 | Self-Evolving Recommendation System | Google / YouTube | 快慢双环，训练时间累计 8× |
| ⏳ | 2602.12612 | Self-EvolveRec | KAIST | 离线最高 +5.54% |
| ⏳ | 2606.28368 | EvoRec | 阿里国际 | 模型轨 + 方法论轨双自进化 |
| ⏳ | 2607.29241 | RecHarness | GT + 快手 | bandit 路由修改方向 |
| ⏳ | 2609.10922 | Auto-RecSys | Meta + UIUC | 多日作业的工程可靠性 |
| ⏳ | 2609.30001 | AgentX-Model | 快手 | 双 agent 研究闭环 + 谱系接续 |

> ⏳ = 笔记已写好、尚未发布到这个站；✅ = 已可阅读。

## 按主题看

- **生产线闭环**：AgentX → AgentX-Model → Auto-RecSys
- **验证与失败沉淀**：NOVA
- **方向提议**：Astar、RecHarness
- **自进化机制**：EvoRec、Self-EvolveRec、Self-Evolving YouTube
