# PRODUCT_REQUIREMENTS.md

# The Last Question - V1 产品需求文档

## 项目定位

The Last Question

一款：

英语学习 × 海龟汤推理 × 文字解谜游戏

核心体验：

玩家通过阅读英文谜面、查词、选择问题、收集线索、推理真相，在游玩过程中自然学习英语。

---

# 当前阶段目标

开发一个可完整游玩的 MVP。

当前重点：

- 验证玩法
- 验证英语学习体验
- 验证案件结构
- 验证数据驱动架构
- 加入少量低成本微交互
- 为后续音效和高级动效预留入口

暂不实现：

- 真实 AI
- 真实音效
- 复杂动画
- 存档系统
- 成就系统
- 排行榜

---

# MVP 完成标准

玩家能够：

1. 查看案件列表
2. 进入案件
3. 阅读谜面
4. 切换语言模式
5. 点击高级词汇查看解释
6. 选择问题进行调查
7. 获得回答
8. 解锁线索
9. 查看 Ask Nick
10. 提交真相
11. 完成案件
12. 查看词汇复习

完成以上流程即视为 MVP 完成。

---

# 技术要求

技术栈：

- React
- Vite
- CSS Modules 或普通 CSS

要求：

- Mobile First
- 响应式布局
- 数据驱动
- 后续可扩展 AI
- 后续可扩展案件库
- 后续可扩展音效和高级动效

---

# 适配要求

## 手机设计基准

393 × 852

优先适配：

- iPhone 16 Pro
- iPhone 15 Pro
- 主流安卓设备

采用 Mobile First 设计。

---

## 支持设备

### 手机

393 × 852

### 平板

768 × 1024

### PC

最低支持：

1280 × 720

推荐支持：

- 1440 × 900
- 1920 × 1080

---

# 首页 HomePage

显示案件列表。

---

## 案件卡片内容

显示：

- 案件名称
- 难度
- 词汇等级
- 预计时长

示例：

Case 01

The Ordinary Message

Difficulty：
Easy

Vocabulary：
CET6

Time：
3-5 min

Start Investigation

---

## 锁定案件

显示：

Case 02

Locked

Coming Soon

Case 03

Locked

Coming Soon

Case 04

Locked

Coming Soon

Case 05

Locked

Coming Soon

底部显示：

4 More Cases Locked

---

# 案件调查页 CasePage

## 顶部区域

显示：

- Case Number
- Case Title
- Difficulty
- Vocabulary Level
- Progress

---

# 语言模式

支持：

## English

仅显示英文。

## Bilingual

显示：

英文

中文

上下排列。

默认：

Bilingual

---

# 谜面区域

展示案件谜面。

当前阶段如正式 Case01 内容未提供，使用 placeholder 数据。

Codex 不负责创作正式 Case01。

---

# Investigation Notes（查词功能）

不要直接命名为“查词”。

命名：

Investigation Notes

调查笔记

支持点击关键词。

点击后显示：

- 单词
- 音标（可预留）
- 词性
- 中文释义
- 英文例句
- 当前语境解释
- 推理提示

---

# 词汇等级要求

案件词汇以：

- CET6
- 考研英语
- IELTS
- TOEFL

为主。

禁止使用大量初中级词汇作为学习重点。

每个案件建议：

20~30 个重点词汇。

---

# 问题系统

玩家不能自由输入问题。

采用选择式调查。

---

# 回答系统

点击问题后显示回答。

已提问问题：

- 变灰
- 不可重复点击

---

# 回答记录

保留历史问答。

---

# 线索系统

问题会解锁线索。

显示：

Unlocked Clues

---

# Ask Nick（AI预留）

显示：

Ask Nick

AI Detective Assistant

当前版本：

不接入 AI。

点击后弹窗：

Nick is not available in this demo.

Future features:

- Give hints
- Explain English
- Review answers
- Help investigations

---

# 提交真相

按钮：

Submit Truth

点击后弹出：

What Really Happened?

错误答案：

显示反馈。

正确答案：

进入结案页。

---

# 结案页 ResultPage

显示：

Case Solved

包含：

- 真相解析 English / 中文
- Vocabulary Review
- Useful Expressions
- Replay Case
- Back To Home

---

# 微交互要求

当前阶段可以加入少量低成本微交互，但不要影响功能开发。

允许实现：

- Button hover / active / pressed 状态
- 案件卡片 hover 状态
- 问题按钮点击反馈
- 已使用问题变灰
- 线索解锁时 fade-in
- 查词弹窗 mobile bottom sheet slide-up
- PC modal fade-in
- Submit Truth 弹窗 fade-in
- 正确选项轻微高亮
- 错误选项轻微 shake
- Progress bar 平滑变化
- 锁定案件卡片 hover 反馈

要求：

- 所有动效必须使用 CSS transition / animation 实现
- 动效时长控制在 120ms - 240ms
- 不要使用复杂动画库
- 不要引入 Framer Motion
- 不要实现音效
- 不要实现复杂页面转场
- 不要让动效阻塞游戏流程
- 必须支持 prefers-reduced-motion

如果用户系统开启 reduced motion，应关闭或弱化动画。

微交互只作为体验增强，不得影响 MVP 功能优先级。

如果微交互与功能开发冲突，优先完成功能。

---

# 音效和高级动效预留

未来会单独一轮做音效和高级动效升级。

当前阶段不实现真实音效。

但需要预留：

src/services/audioManager.js
src/services/motionManager.js

audioManager.js 可先实现 no-op：

export function playSound(soundId) {
  return;
}

motionManager.js 可先实现基础配置：

export function getMotionPreset(name) {
  return null;
}

未来音效和高级动效只能通过这些统一入口接入。

禁止把音效逻辑写死在业务组件中。

---

# 数据结构要求

所有案件必须采用双语结构。

示例：

title: {
  en: "The Man in the Café",
  zh: "咖啡馆里的男人"
}

谜面：

prompt: {
  en: "...",
  zh: "..."
}

问题：

text: {
  en: "...",
  zh: "..."
}

回答：

answer: {
  en: "...",
  zh: "..."
}

线索：

clue: {
  en: "...",
  zh: "..."
}

真相：

truth: {
  en: "...",
  zh: "..."
}

---

# 案件目录结构

src/
 ├─ data/
 │   └─ cases/
 │       ├─ case001/
 │       ├─ case002/
 │       ├─ case003/
 │       ├─ case004/
 │       └─ case005/

每个案件独立管理。

未来新增案件：

只新增文件夹。

不允许修改页面逻辑。

---

# 重要补充：Case01 内容不要由 Codex 自行创作

Codex 只负责实现：

- 页面结构
- 游戏流程
- 数据读取
- 问答系统
- 线索解锁
- 查词弹窗
- 结案流程
- 响应式适配
- UI基础样式
- 低成本微交互

Codex 不负责创作正式案件内容。

---

# Case01 数据来源

请单独创建：

src/data/cases/case001/case.js

该文件用于存放 Case01 的正式案件数据。

第一版开发时，如果正式 Case01 数据尚未提供，可以先使用结构完整的 placeholder 数据。

但是：

- 不要在组件中硬编码 Case01 内容
- 不要把 Case01 内容写死在页面里
- 不要自行创作复杂剧情
- 不要把案件内容和游戏逻辑混在一起

---

# AI预留结构

创建：

src/services/nickAssistant.js

内容：

export async function askNick() {
  return {
    message: "Coming Soon"
  };
}

未来接入真实 AI 时：

不得修改案件结构。

---

# UI风格要求

关键词：

- Detective
- Mystery
- Investigation
- Case File
- Dark Theme

视觉风格：

- 深色背景
- 案件档案卡片
- 暗金色强调色
- 细边框
- 简洁排版
- 手机优先

禁止：

- 重度装饰
- 复杂动画
- 角色立绘
- 音效系统

---

# 后续扩展规划

未来可能加入：

- Ask Nick AI
- 多案件
- 证物系统
- 人物档案
- 时间线系统
- 存档系统
- 成就系统
- 推理评分系统
- 音效系统
- 高级动效系统

要求：

案件内容、游戏逻辑、UI样式、音效系统、动效系统保持解耦。

后续扩展不得破坏现有案件结构。
