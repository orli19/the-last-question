# AGENTS.md

## 项目名称

The Last Question

英语学习 × 海龟汤推理游戏

---

# 核心原则

优先级：

玩法 > 内容 > AI > UI > 动效 > 音效

当前阶段：

先完成可游玩的 MVP。

允许加入少量低成本微交互，但不得影响核心功能开发。

不要为了复杂视觉、复杂动效或音效影响开发速度。

---

# 数据与界面分离

所有案件内容必须来自：

src/data/cases/

禁止在 React 组件中硬编码案件内容。

新增案件、删除案件、修改案件时：

不得修改页面逻辑。

只能修改案件数据文件。

---

# UI 与玩法分离

游戏逻辑必须独立于 UI。

允许未来：

- 更换整体视觉风格
- 更换 Design System
- 接入第三方 UI Skill
- 重构页面样式
- 增加音效
- 增加高级动效

这些修改不得影响：

- 案件系统
- 查词系统
- 问答系统
- 线索系统
- 存档系统
- AI 系统

---

# 组件分层

推荐结构：

src/

components/
  game/
  ui/

data/
  cases/

services/

pages/

styles/

---

# game

负责：

- 游戏规则
- 问答逻辑
- 线索解锁
- 进度计算

不得包含视觉特效逻辑。

---

# ui

负责：

- Button
- Card
- Modal
- Badge
- ProgressBar
- BottomSheet

不得包含业务逻辑。

---

# Case01 内容规则

Codex 不负责创作正式案件内容。

Case01 必须从：

src/data/cases/case001/case.js

读取。

如果正式案件未提供：

仅创建 placeholder 数据。

禁止在组件中写死案件内容。

---

# Ask Nick

未来接入 AI。

当前阶段：

仅保留接口和占位页面。

不得实现真实 AI。

---

# 响应式要求

Mobile First。

手机设计基准：

393 × 852

优先保证手机竖屏体验。

支持：

- 手机
- 平板
- PC

---

# 微交互规则

当前阶段允许实现少量低成本微交互。

允许：

- Button hover / active / pressed 状态
- 案件卡片 hover 状态
- 问题按钮点击反馈
- 已使用问题变灰
- 线索解锁时 fade-in
- 查词弹窗在移动端 bottom sheet slide-up
- PC modal fade-in
- Submit Truth 弹窗 fade-in
- 正确选项轻微高亮
- 错误选项轻微 shake
- Progress bar 平滑变化

要求：

- 使用 CSS transition / animation 实现
- 动效时长控制在 120ms - 240ms
- 不引入复杂动画库
- 不引入 Framer Motion
- 不实现音效
- 不实现复杂页面转场
- 不让动效阻塞游戏流程
- 必须支持 prefers-reduced-motion

如果用户系统开启 reduced motion，应关闭或弱化动画。

微交互只作为体验增强。

如果微交互与功能开发冲突，优先完成功能。

---

# 音效与高级动效预留

未来会单独一轮加入音效和高级动效。

当前阶段不实现真实音效。

但请预留结构：

src/services/audioManager.js
src/services/motionManager.js

audioManager.js 当前可导出空函数或 no-op 方法，例如：

playSound(soundId)

motionManager.js 当前可导出动效配置或 no-op 方法，例如：

getMotionPreset(name)

未来音效和高级动效只能通过这些统一入口接入。

禁止把音效逻辑写死在业务组件里。

---

# UI状态类名

请预留统一状态类名，方便后续动效升级：

- is-active
- is-disabled
- is-unlocked
- is-correct
- is-wrong
- is-entering
- is-leaving
- is-locked
- is-used

---

# UI升级兼容

未来可能接入：

- detective-ui skill
- mystery-ui skill
- noir-ui skill
- visual-novel-ui skill

升级时：

禁止修改：

src/data/
src/services/
src/components/game/

只允许修改：

src/components/ui/
src/styles/

---

# MVP完成标准

玩家能够：

- 查看案件列表
- 进入案件
- 阅读谜面
- 点击查词
- 选择问题
- 解锁线索
- 查看 Ask Nick
- 提交真相
- 查看结案页

即视为 MVP 完成。
