# 공공시설 자리찾기 앱 (Public Facility Finder)

노쇼 예측 기반 공공시설 예약 대기 시스템

## 📌 프로젝트 소개

공공시설 이용의 효율성을 높이기 위한 모바일 웹 애플리케이션입니다. AI 기반 노쇼(No-Show) 예측을 통해 사용자에게 실시간으로 이용 가능성이 높은 시설을 추천하고, 게임화(Gamification) 요소로 양심적인 이용 문화를 조성합니다.

## ✨ 주요 기능

### 1. 🔍 메인 화면
- GPS 기반 위치 설정 및 시설 검색
- 개인화된 추천: 노쇼 확률이 높은 시설 우선 노출
- 빠른 이용 버튼으로 핵심 기능 접근
- 시설 유형별 탐색 (도서관, 체육시설, 교육강좌 등)

### 2. 🗺️ 시설 검색 및 리스트
- 다양한 필터 및 정렬 옵션 (거리순, 노쇼 확률순, 최신순)
- 실시간 대기 인원 및 빈 좌석 정보 표시
- 리스트 뷰 / 지도 뷰 전환 가능

### 3. ⏳ 시설 상세 및 대기 신청
- **노쇼 예측 대시보드**: 현재 시간대 취소 확률 및 시간대별 그래프
- 인터랙티브 시간대/좌석 선택 UI
- 3단계 대기 신청 플로우 (신청 → 알림 설정 → 완료)
- 대기 신청 유의사항 명확히 안내

### 4. 🥇 기여도 및 랭킹 (Gamification)
- 개인 노쇼율 및 회전 기여 횟수 시각화
- 주간/월간 양심 이용 랭킹 보드
- 칭호 및 배지 시스템 (골드 이용자, 나눔 히어로 등)
- 사용자 인정 욕구 충족 및 선의의 경쟁 유도

## 🛠️ 기술 스택

- **Frontend**: React + TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Images**: Unsplash API

## 🚀 시작하기

### 설치

```bash
npm install
```

### 개발 서버 실행

```bash
npm run dev
```

### 빌드

```bash
npm run build
```

## 📱 화면 구성

- **홈**: 개인화 추천 및 빠른 이용 메뉴
- **찾기**: 시설 검색 및 필터링
- **대기**: 대기 현황 관리
- **마이**: 개인 정보 및 랭킹

## 🎨 디자인 특징

- 모바일 퍼스트 반응형 디자인
- 직관적인 UI/UX
- 명확한 정보 계층 구조
- 게임화 요소를 통한 사용자 참여 유도

## 📄 라이선스

MIT License - 자유롭게 사용, 수정, 배포 가능합니다.

## 🙏 사용된 오픈소스

- [React](https://react.dev/) - MIT License
- [Tailwind CSS](https://tailwindcss.com/) - MIT License
- [shadcn/ui](https://ui.shadcn.com/) - MIT License
- [Lucide Icons](https://lucide.dev/) - ISC License
- [Unsplash](https://unsplash.com/) - Unsplash License

## 📸 이미지 출처

이 프로젝트의 이미지는 [Unsplash](https://unsplash.com/)에서 제공되며, Unsplash License를 따릅니다.

## 💡 향후 개선 사항

- [ ] 실제 노쇼 예측 AI 모델 연동
- [ ] 백엔드 API 개발 (예약, 사용자 관리)
- [ ] 실시간 알림 시스템 구현
- [ ] 지도 API 연동
- [ ] 다국어 지원
- [ ] 접근성 개선

## 📧 문의

프로젝트에 대한 문의사항이나 제안사항이 있으시면 이슈를 등록해주세요.

---

**Note**: 이 프로젝트는 프로토타입/데모 목적으로 제작되었으며, 실제 서비스를 위해서는 백엔드 시스템 및 보안 기능이 추가로 필요합니다.
