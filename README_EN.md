# visitor-badge

![visitor badge](https://visitor_badge.deta.dev/?pageID=github.Lete114.visitor-badge&type=uv&label=UV)
![visitor badge](https://visitor_badge.deta.dev/?pageID=github.Lete114.visitor-badge&label=PV)

[简体中文](README.md) | English

> **<span style="color:#9a6700;display:inline-flex;align-items:center;"><svg viewBox="0 0 16 16" version="1.1" width="16" height="16"  fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M8.22 1.754a.25.25 0 00-.44 0L1.698 13.132a.25.25 0 00.22.368h12.164a.25.25 0 00.22-.368L8.22 1.754zm-1.763-.707c.659-1.234 2.427-1.234 3.086 0l6.082 11.378A1.75 1.75 0 0114.082 15H1.918a1.75 1.75 0 01-1.543-2.575L6.457 1.047zM9 11a1 1 0 11-2 0 1 1 0 012 0zm-.25-5.25a.75.75 0 00-1.5 0v2.5a.75.75 0 001.5 0v-2.5z"></path></svg><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">warning</font></font></span>** **The example service is currently deployed on the free version of [Deta](https://deta.sh), so if there are too many simultaneous requests, I will shut it down and I suggest you deploy one yourself for your own use**

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

| Key        | Default    | Required | Options                                                       |
| ---------- | ---------- | -------- | ------------------------------------------------------------- |
| pageID     |            | ✅       |                                                               |
| type       | 'pv'       |          | ['pv', 'uv']                                                  |
| label      | 'visitors' |          |                                                               |
| labelColor | '#555'     |          |                                                               |
| color      | '#4c1'     |          |                                                               |
| style      | 'flat'     |          | ['plastic', 'flat', 'flat-square', 'for-the-badge', 'social'] |
