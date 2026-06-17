# cursor-demo

이메일 검증·인증 유틸리티를 제공하는 Node.js 데모 프로젝트입니다.

## 설치 및 실행

```bash
npm install
npm test
```

## 릴리스 노트

### v1.0.0

**이메일 검증·인증 모듈과 테스트를 포함한 cursor-demo 첫 정식 릴리스입니다.**

#### ✨ 기능

- **이메일 유효성 검증** (`isValidEmail`) — RFC 5322 정규식과 RFC 3696 길이 제한(로컬 파트 64자, 전체 254자)을 적용한 검증
- **이메일 유틸리티** — 사용자 목록에서 이메일 추출(`extractEmails`), 유효 이메일만 필터링(`getValidEmails`), 중복 제거(`uniqueValidEmails`)
- **로그인 검증** (`login`) — 이메일 형식과 비밀번호 입력 여부를 검사하고 결과 객체(`{ success, error? }`) 반환
- **단위 테스트** — `extractEmails`, `isValidEmail`, `getValidEmails` 동작을 `node:test`로 검증 (`npm test`)

#### 🐛 버그 수정

- (해당 없음 — 첫 릴리스)

#### 🧹 기타

- ES Module 기반 프로젝트 구조 및 `package.json` 설정
- `docs/validator.md` — `validator.js` API·검증 규칙·예시를 정리한 스펙 문서 추가
