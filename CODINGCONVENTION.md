### Eslint 설정파일

```json
{
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "airbnb-base",
        "plugin:@typescript-eslint/recommended",
        "prettier"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "plugins": [
        "@typescript-eslint"
    ],
    "rules": {
    }
}
```

---

### Interface & Type 정의

> `Use an interface instead of a type literal.tslint(interface-over-type-literal)`

- Type은 리터럴 타입에만 사용하고, Object 형태의 타입은 Interface로 정의하라는 말이에요. 이런 식으로

```tsx
export type TSomeMemberTier = "Basic" | "Premium" | "Admin";

export interface ISomeMember {
  name: string;
  age: number;
  address: string;
  tier: TSomeMemberTier;
}
```

---

## 네이밍

- 파스칼케이스(PascalCase)

    : enum 값, 인터페이스, 클래스

- 카멜케이스(camelCase)

    : 함수 이름, 오브젝트의 키, 지역 변수 이름

---

## 문자열

- 문자열을 쓸 때는 `''` 따옴표를 사용해요.

---

## 스타일

- 타입 앞에 공백을 넣는다.

    예) const foo: string = "hello";

- 세미콜론, 콜론, 컴마 뒤에는 항상 공백을 두어요.

    예) `for (var i = 0, n = str.length; i < 10; i++) { }`

- 변수는 단일 선언을 한다.
    - use `var x = 1; var y = 2;` over `var x = 1, y = 2;`
- 앞의 공백(indentation)은 스페이스 2개로 맞춰요.
- 화살표 함수
    - `(x) => x + x` (X)`x => x + x`(O)
    - `(x,y) => x + y`(O)`<T>(x: T, y: T) => x === y`(O)

---

### Null과 Undefined

- null을 반환하지 말고 undefined로 반환해요.
    - `return null;` (X) `return undefined;` (O)
- null / undefined를 체크할 때는 `==` 또는 `!=` 를 사용, `===`과 `! ==` 는 사용하지 않아요!
