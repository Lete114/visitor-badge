# visitor-badge

![visitor badge](https://visitor_badge.deta.dev/?pageID=github.Lete114.visitor-badge&type=uv&label=UV)
![visitor badge](https://visitor_badge.deta.dev/?pageID=github.Lete114.visitor-badge&label=PV)

简体中文 | [English](README_EN.md)

> **该示例服务目前部署在免费版本的 [Deta](https://deta.sh) 上**

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
![visitor badge](https://visitor_badge.deta.dev/?pageID=github.Lete114.visitor-badge)
![visitor badge](https://visitor_badge.deta.dev/?pageID=github.Lete114.visitor-badge&labelColor=%23f00)
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

> **注意：** 由于 url 会把 HEX (16 进制) 的颜色编码视为 url 的 hash ，浏览器发送请求时会在 **#** 后被截断，导致无法成功自定义颜色，所以你需要将 **#** 改为 **%23**，例如自定义颜色为红色`labelColor=#f00`改为`labelColor=%23f00`

| Key        | Default  | Required | Options                                                       | Description          |
| ---------- | -------- | -------- | ------------------------------------------------------------- | -------------------- |
| pageID     |          | ✅       |                                                               | 页面唯一 ID          |
| type       | pv       |          | ['pv', 'uv']                                                  | 统计类型             |
| label      | visitors |          |                                                               | 自定义标签(左侧)名字 |
| labelColor | #555     |          |                                                               | 自定义标签(左侧)颜色 |
| color      | #4c1     |          |                                                               | 自定义统计(右侧)颜色 |
| style      | flat     |          | ['plastic', 'flat', 'flat-square', 'for-the-badge', 'social'] | 自定义徽章样式       |
