# 브랜치 규칙

Git-flow를 기본으로 해요!

default brench는 `main` 이고,

`develop` 브랜치에 각 기능들을 머지 풀리퀘스트 합니다

`feat` : 기능 구현

`fix` : 수정

`refec` : 코드 리팩토링

`hotfix` : 버그 수정

`docs` : 문서 추가

단어 참고 👇🏻 근데 제목 전체를 영어로 쓰는 건 좀 불편할 거 같아서(근데 뭐 자유) 거의 위에 있는 표현 쓰고, 콜론(:) 해주시고 한글로 한 문장 정도 써주면 좋을 것 같습니다

[https://blog.ull.im/engineering/2019/03/10/logs-on-git.html](https://blog.ull.im/engineering/2019/03/10/logs-on-git.html)

---

## 커밋 단위는 작게 작게!

한 단위를 구현했다면 / 수정했다면 바로 파일 저장하고 깃 크라켄으로 넘어가서 add/commit 해주세요. 

> “커밋은 **논리적으로 구분**이 되고, 일관성이 유지되는 단위로 최대한 작게 쪼개서 되어야합니다.(Each commit is a minimal coherent idea)”

> 다른 고려 사항은…
너무 과도하게 세분화된 커밋은 나중에 스쿼시(squash)를 해서 합칠 수 있습니다. 하지만 그 반대는 불가능 하죠. 그러니까 가능하면 작은 단위로 커밋을 하고 나중에 하나로 합치는게 좋겠다고 생각이 들면 그때 합치는 게 좋습니다.
테스트를 하다가 문제가 발견되어 수정을 하면 수정 사항은 이전 커밋을 어멘드(amend)해야합니다. 버그 수정을 별도의 커밋으로 “테스트 이슈 수정”의 코멘트로 생성을 하는 것은 좋지 않습니다.

---

No `commit -m` ❗ : 커밋 기록을 자세히 남겨주세요. 깃 크라켄을 사용한다면 다음과 같이 `Description` 에 간단히 써주면 좋아요.

❌<br>
<img style="border: 1px solid black !important; border-radius:20px;" src="https://kyrics.s3.ap-northeast-2.amazonaws.com/commit.png" width="50%"/><br>
⭕<br>
<img style="border: 1px solid black !important; border-radius:20px;" src="https://kyrics.s3.ap-northeast-2.amazonaws.com/commit1.png" width="50%"/>

## Rebase 그리고 Squash and Merge

- 풀리퀘 보내기 전에 먼저 local 의 develop과 작업 중이던 branch를 remote `develop` 브랜치 위로 rebase 해주세요. (갈라진 곳 이 있다면 그 곳으로 reset —mixed를 하고 rebase 후 다시 커밋 합니다.)
- 그리고 나서 다시 해당 브랜치의 remote로 push해주시고 풀리퀘 남겨주시면 됩니당.
<br>
