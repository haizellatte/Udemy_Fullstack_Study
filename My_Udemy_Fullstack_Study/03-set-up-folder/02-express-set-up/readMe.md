# ⚙️ Express Set-up

## 01. Git init

```bash
git init
touch .gitignore
```

### `.gitignore`

```md
# compiled output

/dist
/node_modules
/build

# OS

.DS_Store

# IDE - VSCode

.vscode/\*
!.vscode/settings.json
!.vscode/tasks.json
!.vscode/launch.json
!.vscode/extensions.json

# dotenv environment variable files

.env
.env.development.local
.env.test.local
.env.production.local
.env.local
```

## 02. NPM Install

```bash
npm init -y
npm i -D typescript ts-node @types/node
npx tsc --init
npm i -D concurrently

npm i express
npm i --save-dev @types/express

npm i axios

npm i body-parser

npm i bcrypt
npm i --save-dev @types/bcrypt

npm i  jsonwebtoken
npm i --save-dev @types/jsonwebtoken

npm i uuid
npm i --save-dev @types/uuid
```

### `package.json`

```ts
"scripts": {
	"dev": "concurrently \"tsc --watch --project tsconfig.json\" \"node --watch dist/app.js\"",

	"build": "tsc --project tsconfig.json",

	"start": "node dist/app.js"
},
```

### `tsconfig.json`

```ts
/* Emit */
"declaration": true
"declarationMap": true
"sourceMap": true
"outDir": "./dist"


/* json파일 import 시 에러 해결하려면 */
"resolveJsonModule": true, // 👉 활성화
```

### Nanoid

```bash
npx nanoid --size 48
```

### `.env`

```js
//export
export const JWT_SECRET_KEY=""

//import
cont WT_SECRET_KEY = progress.env.JWT_SECRET_KEY;
```

> **❗️만약 초기 mount 시 `.env`파일을 읽지 못한다면?**
>
> 1. `npm i dotenv` 설치
> 2. root 파일에서 (ex. app.ts 등)

```ts
import dotenv from 'dotenv';

function app() {
  dotenv.config();

  ...
}
```

>

### Prisma

```bash
npm install prisma --save-dev
npm install @prisma/client
npx prisma
npx prisma init

npx prisma migrate dev
npx prisma generate
npx prisma studio
npm run dev

# 만약 prisma 디렉터리를 src 하위로 옮긴다면
# package.json에 아래와 같은 내용을 추가할 것

"prisma": {
	"schema": "./src/database/prisma/schema.prisma"
}
```

### `.env`

```js
DATABASE_URL =
  "databasename://username:password@hostname:5432/dbName?schema=schemaName";

// 예시
DATABASE_URL =
  "postgres://postgres.etodcwwhhbajjmoerylk:password1234@aws-0-ap-northeast-2.pooler.supabase.com:5432/postgres?schema=public";
```

## 03. Reference Links

- [npm jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken?activeTab=readme)
- [npm bcrypt](https://www.npmjs.com/package/bcrypt)
- [express reference](https://github.com/haizellatte/Udemy_Fullstack_Study/tree/main/02-BE/2024-02-19/01-assignment_4_dev-forum-review/References)
