# visitor-badge

![visitor badge](https://visitor_badge.deta.dev/?pageID=github.Lete114.visitor-badge&type=uv&label=UV)
![visitor badge](https://visitor_badge.deta.dev/?pageID=github.Lete114.visitor-badge&label=PV)

[简体中文](README.md) | English

> **The example service is currently deployed on the free version of [Deta](https://deta.sh)**

Inspired by [jwenjian/visitor-badge](https://github.com/jwenjian/visitor-badge) written in `Python` (PV stats only)

## Function

- PV (Number of visits)
- UV (Number of visitors)
- Multi-database selection (mongodb, redis, deta)

## Deployment

### Server

```bash
git clone https://github.com/Lete114/visitor-badge.git visitor-badge

cd visitor-badge

npm run start
```

### ServerLess

See the other branches of the repository for details

### Configuration Database

Rename the `.env.example` file to `.env` and edit it (just fill in the comments according to the file)

### Use

```markdown
![visitor badge](https://visitor_badge.deta.dev/?pageID=github.Lete114.visitor-badge)
![visitor badge](https://visitor_badge.deta.dev/?pageID=github.Lete114.visitor-badge&labelColor=%23f00)
```

> where `pageID` is custom and it is not constrained in any way.
>
> Here are some suggestions
>
> 1.  Specify a user's home page, e.g.: https://github.com/Lete114 using `pageID=github.Lete114`
> 2.  Specify a user's repository, e.g.: https://github.com/Lete114/visitor-badge using `pageID=github.Lete114.visitor-badge`
> 3.  Specify the issues in a user's repository, e.g.: https://github.com/Lete114/visitor-badge/issues/1 using `pageID=github.Lete114.visitor-badge.issues.1`
> 4.  Specify a website, e.g.: https://blog.imlete.cn using `pageID=blog.imlete.cn`
> 5.  Specify a page of a website, e.g.: https://blog.imlete.cn/404.html using `pageID=blog.imlete.cn.404`

> **Note:** Since the url will treat the HEX (hexadecimal) color code as the hash of the url, the browser will be truncated after **#** when sending the request, so you need to change **#** to **%23**, for example, the custom color is red `labelColor=#f00` to ` labelColor=%23f00`

| Key        | Default  | Required | Options                                                       | Description                     |
| ---------- | -------- | -------- | ------------------------------------------------------------- | ------------------------------- |
| pageID     |          | ✅       |                                                               | Page unique ID                  |
| type       | pv       |          | ['pv', 'uv']                                                  | Statistics type                 |
| label      | visitors |          |                                                               | Custom label (left) name        |
| labelColor | #555     |          |                                                               | Custom label (left) color       |
| color      | #4c1     |          |                                                               | Custom stats (right side) color |
| style      | flat     |          | ['plastic', 'flat', 'flat-square', 'for-the-badge', 'social'] | Custom badge style              |
