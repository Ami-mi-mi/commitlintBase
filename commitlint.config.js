/**
 * jira_id：关联jira的issue ID 用于关联动作 必填
 * feat：新功能
 * update：更新某功能
 * fixbug：修补某功能的bug
 * refactor：重构某个功能
 * optimize: 优化构建工具或运行时性能
 * style：仅样式改动
 * docs：仅文档新增/改动
 * chore：构建过程或辅助工具的变动
  
 */
 
module.exports = {
    extends: [
        '@commitlint/config-conventional'
    ],
    rules: {
        'type-enum': [
            2,           // 表示必须输入的
            'always', [
                'jira_id', 
                'feat', 
                'update', 
                'fix', 
                'refactor', 
                'optimize', 
                'style', 
                'docs', 
                'chore'
             ]
        ]
     
    }
};