# visitor-badge

<!-- ![visitor badge](https://visitor_badge.deta.dev/?pageID=Lete114.visitor-badge&type=uv&label=UV)
![visitor badge](https://visitor_badge.deta.dev/?pageID=Lete114.visitor-badge&label=PV) -->

简体中文 | [English](README_EN.md)

> **<span style="color:#9a6700;display:inline-flex;align-items:center;"><svg viewBox="0 0 16 16" version="1.1" width="16" height="16"  fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M8.22 1.754a.25.25 0 00-.44 0L1.698 13.132a.25.25 0 00.22.368h12.164a.25.25 0 00.22-.368L8.22 1.754zm-1.763-.707c.659-1.234 2.427-1.234 3.086 0l6.082 11.378A1.75 1.75 0 0114.082 15H1.918a1.75 1.75 0 01-1.543-2.575L6.457 1.047zM9 11a1 1 0 11-2 0 1 1 0 012 0zm-.25-5.25a.75.75 0 00-1.5 0v2.5a.75.75 0 001.5 0v-2.5z"></path></svg><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">警告</font></font></span>** **该示例服务目前部署在免费版本的 [Deta](https://deta.sh) 上，因此如果同时有请求太多，我将关闭它，并建议您自己部署一个供自己使用**

灵感来源于 [jwenjian/visitor-badge](https://github.com/jwenjian/visitor-badge) 使用 `Python` 编写 (仅有 PV 统计)

## 功能

- PV (访问次数)
- UV (访问人数)
- 多数据库选择 (mongodb, redis, deta)

## 部署

### Server

```bash
git clone https://github.com/Lete114/visitor-badge.git visitor-badge

cd visitor-badge

npm run start
```

### ServerLess

具体可以查看仓库的其它分支

### 配置数据库

重命名 `.env.example` 文件为 `.env` 并编辑(根据文件内的注释填写即可)

### 使用

```markdown
![visitor badge](https://visitor_badge.deta.dev/?pageID=Lete114.visitor-badge)
```

> 其中 `pageID` 是自定义的，它不受任何约束。
>
> 这里有一些建议
>
> 1.  指定某个用户主页，如: https://github.com/Lete114 使用 `pageID=github.Lete114`
> 2.  指定某个用户的仓库，如: https://github.com/Lete114/visitor-badge 使用 `pageID=github.Lete114.visitor-badge`
> 3.  指定某个用户仓库中的 issues，如: https://github.com/Lete114/visitor-badge/issues/1 使用 `pageID=github.Lete114.visitor-badge.issues.1`
> 4.  指定某个网站，如: https://blog.imlete.cn 使用 `pageID=blog.imlete.cn`
> 5.  指定某个网站的某个页面，如: https://blog.imlete.cn/404.html 使用 `pageID=blog.imlete.cn.404`

| Key        | Default    | Required | Options                                                       |
| ---------- | ---------- | -------- | ------------------------------------------------------------- |
| pageID     |            | ✅       |                                                               |
| type       | 'pv'       |          | ['pv', 'uv']                                                  |
| label      | 'visitors' |          |                                                               |
| labelColor | '#555'     |          |                                                               |
| color      | '#4c1'     |          |                                                               |
| style      | 'flat'     |          | ['plastic', 'flat', 'flat-square', 'for-the-badge', 'social'] |
