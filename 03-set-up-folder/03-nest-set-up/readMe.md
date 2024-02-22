# ⚙️ Nest Set-up

## 01. NPM Install

### Nest
```shell
npm i -g @nestjs/cli
nest new [project-name]
```

```shell
// package install
npm i

// resource create
nest g resource [경로]
nest g resource domains/users  // 👈 경로(src 기준)

// 개발 서버 실행
npm run start:dev
```

### Prisma

```shell
npm install prisma --save-dev
npx prisma
npx prisma init

npx prisma migrate dev
npx prisma generate
npx prisma studio
```

## 02. Reference Links
