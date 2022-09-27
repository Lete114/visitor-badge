# visitor-badge

![visitor badge](https://visitor_badge.deta.dev/?id=github.lete114.visitor-badge&type=uv&label=UV)
![visitor badge](https://visitor_badge.deta.dev/?id=github.lete114.visitor-badge&label=PV)

简体中文 | [English](README_EN.md)

> **该示例服务目前部署在免费版本的 [Deta](https://deta.sh) 上，你可以访问 [/list](https://visitor_badge.deta.dev/list) 路径来查看所有的统计**

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
![visitor badge](https://visitor_badge.deta.dev/?id=github.lete114.visitor-badge)
![visitor badge](https://visitor_badge.deta.dev/?id=github.lete114.visitor-badge&labelColor=f00)
```

> 其中 `id` 是自定义的，它不受任何约束。
>
> 这里有一些建议
>
> 1.  指定某个用户主页，如: https://github.com/Lete114 使用 `id=github.lete114`
> 2.  指定某个用户的仓库，如: https://github.com/Lete114/visitor-badge 使用 `id=github.lete114.visitor-badge`
> 3.  指定某个用户仓库中的 issues，如: https://github.com/Lete114/visitor-badge/issues/1 使用 `id=github.lete114.visitor-badge.issues.1`
> 4.  指定某个网站，如: https://blog.imlete.cn 使用 `id=blog.imlete.cn`
> 5.  指定某个网站的某个页面，如: https://blog.imlete.cn/404.html 使用 `id=blog.imlete.cn.404`

| Key        | Default  | Required | Options                                                       | Description                               |
| ---------- | -------- | -------- | ------------------------------------------------------------- | ----------------------------------------- |
| id         |          | ✅       |                                                               | 页面唯一 ID                               |
| type       | pv       |          | ['pv', 'uv']                                                  | 统计类型                                  |
| label      | visitors |          |                                                               | 自定义标签(左侧)名字                      |
| labelColor | 555      |          |                                                               | 自定义标签(左侧)颜色(注: 可以不写井号`#`) |
| color      | 4c1      |          |                                                               | 自定义统计(右侧)颜色(注: 可以不写井号`#`) |
| style      | flat     |          | ['plastic', 'flat', 'flat-square', 'for-the-badge', 'social'] | 自定义徽章样式                            |
