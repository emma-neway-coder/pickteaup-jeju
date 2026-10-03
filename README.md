# 픽티업 · 제주에서 시작하는 나만의 찻장

픽티업의 브랜드 소개, 픽티북 시그니처, 찻장북, 다섯 가지 블렌딩 티를 담은 반응형 웹사이트입니다.

## GitHub Pages에 올리기

저장소: https://github.com/emma-neway-coder/pickteaup-jeju

1. 저장소의 **Add file → Upload files**를 엽니다.
2. `pickteaup_webpage` 폴더 **안의 내용 전체**를 업로드 영역에 끌어 놓습니다. 폴더 자체를 끌어 놓으면 `pickteaup_webpage/index.html`처럼 한 단계 깊어질 수 있으므로 내용만 올립니다. `assets`와 `signature` 폴더는 폴더째 함께 끌어 놓아 내부 경로를 유지합니다. Finder에서 **⌘⇧.**를 누르면 숨김 파일도 표시됩니다.
3. **Commit changes**로 `main`에 저장합니다. 저장소 최상위에 `index.html`, `assets`, `signature`가 보이면 맞는 구조입니다.
4. 저장소 **Settings → Pages**에서 **Source: Deploy from a branch**, **Branch: main**, **Folder: / (root)**를 선택하고 **Save**를 누릅니다.
5. Pages 설정 화면에 배포 완료가 표시되면 **Visit site**를 눌러 확인합니다.

예정 공개 주소: https://emma-neway-coder.github.io/pickteaup-jeju/

위 주소는 Pages가 배포된 뒤 열립니다. 폴더 준비만으로 GitHub 공개 배포가 완료되지는 않습니다.

## 파일 구조

```text
index.html             홈페이지
book.html              찻장북 상세
blends.html            블렌딩 티 목록
blend-01.html          귤빛 새벽
blend-02.html          오름의 아침
blend-03.html          꽃이 머문 오후
blend-04.html          바다 끝 쉼표
blend-05.html          돌담의 저녁
brand.html             픽티업 이야기
site.css               공통 반응형 스타일
site.js                이미지 확대·미리보기
signature/             픽티북 시그니처 상세
  index.html
  styles.css
  page.js
assets/
  brand/               로고
  fonts/               Pretendard 폰트와 사용권 안내
  characters/          핑티 캐릭터
  book/                찻장북 앞뒤 표지
  storybook/           동화 페이지와 삽화
  journal/             차 그림일기와 취향 지도
  packaging/           티백 봉투와 시그니처 패키지
  photos/              제품 사진 콘셉트
.nojekyll              정적 파일을 그대로 제공
.gitignore             개인 환경 파일 제외
.gitattributes         텍스트·이미지 파일 처리
README.md              배포 방법과 파일 구조
ASSETS.md              자산 분류와 사용 안내
```

별도의 설치나 빌드는 필요하지 않습니다. `package.json`이나 `node_modules`도 필요하지 않습니다. 각 화면은 상대 경로를 사용해 저장소 하위 주소에서도 열립니다. 시그니처 상세페이지도 같은 `assets` 폴더를 공유합니다.

## 확인할 화면

- 홈페이지에서 세 제품과 다섯 블렌드로 이동합니다.
- 찻장북의 표지·동화·그림일기·지도를 클릭해 확대합니다.
- 시그니처에서 동화 넘기기와 제품 사진 미리보기를 확인합니다.
- 휴대폰과 노트북에서 메뉴·본문·이미지가 잘 보이는지 확인합니다.

## 이미지 및 제품 정보

기존 로고·캐릭터·동화·기록 페이지는 원본 비율과 파일 내용을 보존했습니다. 제품 사진은 AI로 만든 촬영 콘셉트이며 실제 생산 제품 사진이 아닙니다. 배합·가격·실물 사양은 미확정인 브랜드 프로젝트입니다. 시그니처는 티백 25개와 찻장북 1권, 찻장북 단품에는 티백이 포함되지 않으며 맛별 상자는 같은 맛 10개입으로 구성했습니다. 주문·결제 기능은 연결되어 있지 않습니다.

프리젠테이션, 기획문서, 작업 원고, 원본 책 PDF, 배포 계정 정보는 이 폴더에 포함하지 않았습니다. 폰트 사용권 안내는 `assets/fonts/OFL.txt`에 있습니다.
