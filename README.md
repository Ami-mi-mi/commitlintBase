## commitlint 基本配置

### commitlint安装

- npm install --save-dev @commitlint/config-conventional @commitlint/cli

- 新建commitlint.config.js,并配置
- module.exports = {extends: ['@commitlint/config-conventional']};
- 配置可以定义的文件:  `commitlint.config.js, .commitlintrc.js, .commitlintrc, .commitlintrc.json, .commitlintrc.yml` 或者 `package.json`

### husky: 对git的commit 操作进行校验
- `husky 继承了Git下所有的钩子，在触发钩子的时候，husky可以阻止不合法的commit、push等操作`
- npm install husky --save-dev
- `在package.json中引入husky`
`<{
  "devDependencies": {
    "@commitlint/cli": "^16.2.4",
    "@commitlint/config-conventional": "^16.2.4"
  },
  "husky": {
    "hooks": {
      "commit-msg": "commitlint -E HUSKY_GIT_PARAMS"
    }
  }
}>`

- `这段配置告诉了git hooks, 当执行git commit -m '提交信息' 时触发commit-msg事件钩子并通知husky, 从而执行commitlint -E HUSKY_GIT_PARAMS 命令；它会读取commitlint.config.js配置规则，并对刚刚提交的这串文字进行校验，如果校验通不过，会在终端输出错误，commit终止`

## @commitlint/config-conventional
- `commitlint.config.js 配置 module.exports = {extends: ['@commitlint/config-conventional']};`
- Rules
- 