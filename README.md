# visitor-badge

![visitor badge](https://visitor-badge.imlete.cn/?id=github.lete114.visitor-badge&type=uv&label=UV)
![visitor badge](https://visitor-badge.imlete.cn/?id=github.lete114.visitor-badge&label=PV)

> **Warning** Since `Deta` will abandon Deta Cloud and move to Deta Space, the deta.dev domain is temporarily closed to users, please change `visitor_badge.deta.dev` to `visitor-badge.imlete.cn`

> **The example service is currently deployed on the free version of [Deta](https://deta.space), You can visit the [/list](https://visitor-badge.imlete.cn/list) path to see all the statistics**

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
![visitor badge](https://visitor-badge.imlete.cn/?id=github.lete114.visitor-badge)
![visitor badge](https://visitor-badge.imlete.cn/?id=github.lete114.visitor-badge&labelColor=f00)
```

> where `id` is custom and it is not constrained in any way.
>
> Here are some suggestions
>
> 1.  Specify a user's home page, e.g.: https://github.com/Lete114 using `id=github.lete114`
> 2.  Specify a user's repository, e.g.: https://github.com/Lete114/visitor-badge using `id=github.lete114.visitor-badge`
> 3.  Specify the issues in a user's repository, e.g.: https://github.com/Lete114/visitor-badge/issues/1 using `id=github.lete114.visitor-badge.issues.1`
> 4.  Specify a website, e.g.: https://blog.imlete.cn using `id=blog.imlete.cn`
> 5.  Specify a page of a website, e.g.: https://blog.imlete.cn/404.html using `id=blog.imlete.cn.404`

| Key        | Default  | Required | Options                                                       | Description                                                                   |
| ---------- | -------- | -------- | ------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| id         |          | ✅       |                                                               | Page unique ID                                                                |
| type       | pv       |          | ['pv', 'uv']                                                  | Statistics type                                                               |
| label      | visitors |          |                                                               | Custom label (left) name                                                      |
| labelColor | 555      |          |                                                               | Custom label (left) color (Note: You can leave out the well number `#`)       |
| color      | 4c1      |          |                                                               | Custom stats (right side) color (Note: You can leave out the well number `#`) |
| style      | flat     |          | ['plastic', 'flat', 'flat-square', 'for-the-badge', 'social'] | Custom badge style                                                            |
