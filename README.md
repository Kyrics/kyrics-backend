# 💜 Kyrics
<img style="border: 1px solid black !important; border-radius:20px;" src="https://kyrics.s3.ap-northeast-2.amazonaws.com/%ED%82%A4%EB%A6%AD+%EB%A1%9C%EA%B3%A0-01.jpg" width="100%" />

### Learn Korean through your favorite K-Pop artists and songs!

### 케이팝 가사로 배우는 우리말, 키릭스

<br>

![node_badge](https://img.shields.io/badge/node-v12.17.0-green)
![npm_bedge](https://img.shields.io/badge/npm-v6.14.4-blue)

* <b> BE SOPT 28th WEBJAM
    
* Term : 2021.06.26 ~ 2021.07.17

* [API Spec](https://kyricserver.com/api-docs/)

* [Coding Convention](https://github.com/Kyrics/kyrics-backend/blob/develop/CODINGCONVENTION.md)

* [Contribution Guide](https://github.com/Kyrics/kyrics-backend/blob/develop/CONTRIBUTIONGUIDE.md)</b>
<br>

### 🌍 WorkFlow

* 업데이트 예정

<br>

### ✔️ Main Feature

|기능|설명|담당|완료|
|:---:|:---:|:---:|:---:|
|**Home**|메인 홈 페이지|가영|☑️|
|**Social Login**|구글과 페이스북 소셜 로그인|가영|☑️|
|**Artist**|아티스트별 노래 조회|가영|☑️|
|**Study**|노래별 가수, 앨범, 가사, 단어 조회|청하|☑️|
|**Mypage**|사용자 정보 조회, 이메일 수정|청하|☑️|
|**MySong**|노래 즐겨찾기|청하|☑️|
|**MyVocab**|단어 즐겨찾기|서현|☑️|

<br>

### ✏️ DB ERD

![architecture](https://kyrics.s3.ap-northeast-2.amazonaws.com/kyrics_erd.JPG)  

<br>

### :blue_book: Package

```json
  "dependencies": {
    "@types/jsonwebtoken": "^8.5.4",
    "cors": "^2.8.5",
    "dotenv": "^10.0.0",
    "express": "^4.17.1",
    "jsonwebtoken": "^8.5.1",
    "mysql2": "^2.2.5",
    "pm2": "^5.1.0",
    "reflect-metadata": "^0.1.13",
    "sequelize": "^6.6.4",
    "sequelize-cli": "^6.2.0",
    "sequelize-typescript": "^2.1.0",
    "swagger-cli": "^4.0.4",
    "swagger-ui-express": "^4.1.6",
    "ts-node": "^10.0.0",
    "typescript": "^4.3.5",
    "yamljs": "^0.3.0"
  },
  "devDependencies": {
    "@types/cors": "^2.8.10",
    "@types/express": "^4.17.12",
    "@types/node": "^16.0.0",
    "@types/sequelize": "^4.28.9",
    "@types/swagger-ui-express": "^4.1.3",
    "@types/validator": "^13.6.2",
    "@types/yamljs": "^0.2.31",
    "@typescript-eslint/eslint-plugin": "^4.28.1",
    "@typescript-eslint/parser": "^4.28.1",
    "eslint": "^7.30.0",
    "eslint-config-airbnb-base": "^14.2.1",
    "eslint-config-prettier": "^8.3.0",
    "eslint-plugin-import": "^2.23.4",
    "nodemon": "^2.0.9",
    "prettier": "^2.3.2"
  }
```

<br>

### :green_book: Architecture

![architecture](https://github.com/Kyrics/kyrics-backend/blob/develop/img/server%20architecture.png?raw=true)  

<br>

### :closed_book: 배포

* AWS EC2 - 클라우드 컴퓨팅 시스템
* AWS elastic beanstlak - 서버 배포및 관리 프로비저닝 서비스
* AWS S3 - 클라우드 데이터 저장소
* AWS Route 53 - 클라우드 DNS 웹 서비스

<br>

### :books: 사용된 도구 

* [Node.js](https://nodejs.org/ko/)
* [Express.js](http://expressjs.com/ko/) 
* [NPM](https://rometools.github.io/rome/) - 자바 스크립트 패키지 관리자
* [PM2](http://pm2.keymetrics.io/) - 프로세스 관리자
* [MySQL](https://www.mysql.com/) - RDBMS

<br>

### 👩‍👩‍👧 Contributor

* [윤가영](https://github.com/kyY00n)
* [성청하](https://github.com/cheongha)
* [김서현](https://github.com/kshjessica)

<br>
