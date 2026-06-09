# The Last Question 项目交接文档

更新时间：2026-06-09

## 项目位置

当前主要开发项目在：

```bash
/Volumes/T7/zj/AI大赛/The Last Question/the-last-question
```

这是一个 React + Vite 项目。

## 当前状态

本地已经提交了最新修改：

```bash
7a35061 Save current investigation UI changes
```

这次提交主要包含：

- 更新案件调查页交互与视觉样式。
- 新增终端风格案件页样式文件 `src/styles/case-page-terminal.css`。
- 调整问题按钮、调查结果弹窗、提示面板、开场页样式。
- 在 `.gitignore` 中加入 `.DS_Store` 和 `._*`，避免 macOS 元数据文件进入 Git。
- 从 Git 中移除误跟踪的 `._archive-noir.html`。

构建已验证通过：

```bash
npm run build
```

## GitHub 推送状态

远端仓库：

```bash
https://github.com/orli19/the-last-question.git
```

当前本地分支 `main` 比远端领先 1 个提交，但还没有推送成功。

推送失败原因是这台电脑没有配置 GitHub 凭证：

```text
could not read Username for 'https://github.com'
```

也测试过 SSH，当前没有可用 GitHub SSH key：

```text
Permission denied (publickey).
```

## 已生成备用迁移文件

为了保证可以换电脑继续开发，已经生成 Git bundle：

```bash
/Volumes/T7/zj/AI大赛/The Last Question/the-last-question-main.bundle
```

这个 bundle 已验证可用，包含完整 Git 历史和当前最新提交。

## 新电脑继续开发方式

### 方式一：使用 bundle 恢复

把下面这个文件拷贝到新电脑：

```bash
the-last-question-main.bundle
```

然后在新电脑执行：

```bash
git clone the-last-question-main.bundle the-last-question
cd the-last-question
npm install
npm run dev
```

如果需要重新关联 GitHub 远端：

```bash
git remote set-url origin https://github.com/orli19/the-last-question.git
```

配置好 GitHub 凭证后再推送：

```bash
git push origin main
```

### 方式二：先在旧电脑配置 GitHub 凭证再推送

如果希望直接从 GitHub clone，新电脑前需要先在旧电脑完成 GitHub 登录。

可以任选一种方式：

```bash
git credential-osxkeychain erase
```

然后再次推送并按提示输入 GitHub 用户名和 Personal Access Token：

```bash
git push origin main
```

或者安装并登录 GitHub CLI：

```bash
brew install gh
gh auth login
git push origin main
```

推送成功后，新电脑执行：

```bash
git clone https://github.com/orli19/the-last-question.git
cd the-last-question
npm install
npm run dev
```

## 常用命令

进入项目：

```bash
cd "/Volumes/T7/zj/AI大赛/The Last Question/the-last-question"
```

安装依赖：

```bash
npm install
```

启动本地开发服务器：

```bash
npm run dev
```

构建验证：

```bash
npm run build
```

查看 Git 状态：

```bash
git status --short --branch
```

## 注意事项

- 不要提交 `node_modules/`、`dist/`、`.DS_Store`、`._*`。
- 如果从移动硬盘或 macOS 压缩包拷贝项目，可能出现 `._*` AppleDouble 元数据文件；这些已经被 `.gitignore` 忽略。
- 当前旧电脑的 Git 会偶尔提示 `.git/objects/pack/._*` 的本机元数据警告；通过 bundle 或重新 clone 到新电脑后通常不会继续出现。
- 新电脑需要安装 Node.js，再运行 `npm install`。
- 如果使用 GitHub HTTPS 推送，需要 Personal Access Token，不能再使用 GitHub 账号密码。
