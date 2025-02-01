# 포트폴리오 사이트

## Stacks

- Yarn
- Next(v15) + TS
- Tailwind
- shadcn/ui
- Sanity (headless CMS)

## Scripts

```sh
# Node Modules 설치
yarn

# Node Development 환경 시작 - dev api
yarn dev
```

## 배포주소

> **Local** : [localhost:3000](http://localhost:3000) \
> **Prod** : [https://gudjun.vercel.app/](https://gudjun.vercel.app/)

## CI/CD

```sh
# branch에 code push시 vercel을 통해 배포
```

## ROUTE HANDLER

```
기존 방식:
1. `src/service` -> 각 파일별로 Sanity에 접근하여 데이터를 가져오는 함수를 생성.
2. `src/app/api` -> route handler를 통해 API 제공.
3. 사용하는 컴포넌트에서 `fetch(BASE_URL + 'api/path')`을 통해 데이터를 페칭하여 사용.
```

- Local에서는 BASE_URL을 **localhost:3000** 으로 설정시 정상 작동.
- Vercel에서 환경변수로 배포된 주소로 설정했을 시 pre-rendering 단계에서 빌드가 실패하는 문제가 발생.

> route handler 사용 시는 데이터 처리가 필요하거나 클라이언트-서버 간 통신이 필수적일 때 사용하며, 현재 프로젝트에서는 단순히 데이터만 fetching해서 보여주기 때문에 굳이 2번째 단계를 거치지 않고 바로 1번에서 만든 함수를 사용하는 방법으로 수정.

[Common Mistakes with the Next.js App Router and How to Fix Them](https://vercel.com/blog/common-mistakes-with-the-next-js-app-router-and-how-to-fix-them)
