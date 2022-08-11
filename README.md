# Project Caffeine
1. 개발환경
    - [VS Code](https://code.visualstudio.com/):
        - Extensions:
            - 필수: 
                - [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)
                - [PostCSS Language Support](https://marketplace.visualstudio.com/items?itemName=csstools.postcss)
                - [Prettier (코드 규칙 자동 적용)](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
            - 추천:
                - [Git Graph (깃 상태를 그래픽으로 확인)](https://marketplace.visualstudio.com/items?itemName=mhutchie.git-graph)
                - [Live Share (원격 코드 협업)](https://marketplace.visualstudio.com/items?itemName=MS-vsliveshare.vsliveshare)
                - [Workspace Explorer (워크스페이스 저장)](https://marketplace.visualstudio.com/items?itemName=tomsaunders.vscode-workspace-explorer)
    - 협업툴 (🙏자주 이용 바랍니다🙏): [Gather Town (원격 오피스)](https://app.gather.town/app/lWsuavRupCx4KoUk/bitcamp-homies),
    - 주의사항:
        - 무조건 yarn 사용해주시기 바랍니다. npm & npx (X)


2. Issue 생성 규칙
    - 모든 작업 시작 전 Issue를 생성해주세요.
    - Issue 생성 시 지정된 템플릿을 사용해서 작성해주세요.


3. Branch 관련
    - main 브랜치의 Pull (Merge) 권한은 팀장과 부팀장에게 있다.
    - 각 기능의 개발은 feature 브랜치에서 개발 후, 작동에 이상이 없는 경우 Pull Request를 요청한다.
      - feature 브랜치의 작명은 '{issue#}-{feature이름}-{short-description}'으로 한다. 예) 23-shop-link-fix, 50-hotfix-core
      - feature 브랜치 내의 branching은 자유롭게 한다.
    - 팀장 혹은 부팀장이 코드 리뷰를 마치고 이상이 없을 경우 main 브랜치에 병합한다.
    - 작동 이상여부와 계획된 feature들이 모두 구현되었는지 확인되면 버전업 태그를 추가한다.
      - 명령어: git tag -a v{버전번호} -m "RESELT version {버전번호}" --> git push


4. Commit 규칙
    - Commit 메시지는 "{#issue번호} {feature이름}: 설명" 예) "#23-index-링크 수정"
