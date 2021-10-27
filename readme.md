Repro steps:
- `npm i`
- Edit `app.arc` > `@aws` `profile` + `region`
- `npx arc deploy`
- Load the resulting page with `@whatever` as the first and only path part
- You may or may not see `400` / `Bad Request`
