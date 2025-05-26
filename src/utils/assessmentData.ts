
// Reality Check Questions
export const realityCheckQuestions = [
  {
    id: 1,
    question: "내 업무 중 반복적이고 자동화될 수 있는 요소가 많다",
    description: "현재 수행하는 업무의 자동화 가능성을 평가해보세요"
  },
  {
    id: 2,
    question: "나는 AI 도구들을 사용해본 경험이 있다",
    description: "ChatGPT, Notion AI, Copilot 등의 AI 도구 사용 경험"
  },
  {
    id: 3,
    question: "최근 1년간 내 기술/지식이 업그레이드되었다",
    description: "새로운 기술이나 지식을 배우고 적용한 경험"
  },
  {
    id: 4,
    question: "나의 커뮤니케이션 능력, 창의력, 협업능력은 강점이다",
    description: "AI가 대체하기 어려운 인간 고유의 역량 평가"
  },
  {
    id: 5,
    question: "AI를 도구로 활용해 나만의 결과물을 낸 경험이 있다",
    description: "AI를 활용한 창작이나 업무 성과 경험"
  }
];

// Calculate assessment results
export const calculateResults = (answers: number[]) => {
  const totalScore = answers.reduce((sum, answer) => sum + answer, 0);
  const maxScore = realityCheckQuestions.length * 5;
  const percentage = (totalScore / maxScore) * 100;

  let category = "";
  let description = "";
  let recommendations = "";

  if (percentage >= 80) {
    category = "AI 시대 준비 완료";
    description = "AI 시대에 매우 잘 준비되어 있습니다. 지속적인 성장을 통해 리더십을 발휘할 수 있습니다.";
    recommendations = "advanced";
  } else if (percentage >= 60) {
    category = "적응 진행 중";
    description = "AI 시대에 대한 기본적인 준비가 되어 있습니다. 몇 가지 영역에서 보완이 필요합니다.";
    recommendations = "intermediate";
  } else if (percentage >= 40) {
    category = "준비 필요";
    description = "AI 시대에 대한 준비가 부족합니다. 체계적인 학습과 경험이 필요합니다.";
    recommendations = "beginner";
  } else {
    category = "즉시 행동 필요";
    description = "AI 시대에 대한 준비가 매우 부족합니다. 즉시 행동을 시작해야 합니다.";
    recommendations = "urgent";
  }

  return {
    score: totalScore,
    percentage: Math.round(percentage),
    category,
    description,
    recommendations
  };
};

// Action recommendations based on assessment results
export const actionRecommendations = {
  urgent: [
    {
      title: "AI 기초 도구 체험하기",
      description: "ChatGPT, Google Bard 등 기본 AI 도구를 실제로 사용해보세요",
      difficulty: "beginner" as const,
      category: "skill" as const,
      estimatedTime: "1주"
    },
    {
      title: "AI 시대 변화 이해하기",
      description: "AI가 가져올 변화에 대한 기본 지식을 습득하세요",
      difficulty: "beginner" as const,
      category: "skill" as const,
      estimatedTime: "2주"
    },
    {
      title: "디지털 스킬 기초 학습",
      description: "기본적인 디지털 도구 사용법을 익히세요",
      difficulty: "beginner" as const,
      category: "skill" as const,
      estimatedTime: "3주"
    }
  ],
  beginner: [
    {
      title: "AI 도구로 업무 자동화",
      description: "반복적인 업무를 AI 도구로 자동화하는 방법을 학습하세요",
      difficulty: "beginner" as const,
      category: "skill" as const,
      estimatedTime: "2주"
    },
    {
      title: "창의적 사고 훈련",
      description: "AI가 할 수 없는 창의적 사고력을 기르세요",
      difficulty: "intermediate" as const,
      category: "creativity" as const,
      estimatedTime: "4주"
    },
    {
      title: "온라인 학습 시작",
      description: "Coursera, edX 등에서 관련 분야 기초 과정을 수강하세요",
      difficulty: "beginner" as const,
      category: "skill" as const,
      estimatedTime: "8주"
    },
    {
      title: "커뮤니케이션 스킬 향상",
      description: "AI 시대에 더욱 중요해지는 인간관계 능력을 기르세요",
      difficulty: "intermediate" as const,
      category: "collaboration" as const,
      estimatedTime: "지속적"
    }
  ],
  intermediate: [
    {
      title: "AI와 협업 프로젝트",
      description: "실제 프로젝트에서 AI를 파트너로 활용해보세요",
      difficulty: "intermediate" as const,
      category: "collaboration" as const,
      estimatedTime: "4주"
    },
    {
      title: "전문 분야 AI 도구 마스터",
      description: "본인 전문 분야의 특화된 AI 도구를 깊이 있게 학습하세요",
      difficulty: "intermediate" as const,
      category: "skill" as const,
      estimatedTime: "6주"
    },
    {
      title: "리더십 및 멘토링",
      description: "AI 활용에 대해 동료들을 가르치고 이끄는 역할을 해보세요",
      difficulty: "advanced" as const,
      category: "collaboration" as const,
      estimatedTime: "지속적"
    },
    {
      title: "크리에이티브 콘텐츠 제작",
      description: "AI를 활용해 독창적인 콘텐츠를 만들어보세요",
      difficulty: "intermediate" as const,
      category: "creativity" as const,
      estimatedTime: "3주"
    }
  ],
  advanced: [
    {
      title: "AI 윤리 및 거버넌스 연구",
      description: "AI의 윤리적 사용과 조직 내 AI 정책 수립에 참여하세요",
      difficulty: "advanced" as const,
      category: "collaboration" as const,
      estimatedTime: "8주"
    },
    {
      title: "AI 트렌드 예측 및 전략 수립",
      description: "미래 AI 트렌드를 분석하고 조직의 AI 전략을 수립하세요",
      difficulty: "advanced" as const,
      category: "skill" as const,
      estimatedTime: "지속적"
    },
    {
      title: "혁신적 AI 활용 사례 개발",
      description: "업계에 새로운 AI 활용 방법을 제시하는 혁신 프로젝트를 진행하세요",
      difficulty: "advanced" as const,
      category: "creativity" as const,
      estimatedTime: "12주"
    },
    {
      title: "AI 교육 프로그램 개발",
      description: "조직이나 커뮤니티를 위한 AI 교육 프로그램을 개발하고 운영하세요",
      difficulty: "advanced" as const,
      category: "collaboration" as const,
      estimatedTime: "16주"
    }
  ]
};

// Creative Quest data
export const creativeQuests = [
  {
    id: 1,
    title: "나만의 인사이트 발굴",
    description: "일주일에 한 번, 업계 뉴스를 요약하고 나만의 의견을 작성하여 AI 피드백을 받아보세요",
    difficulty: "beginner" as const,
    category: "creativity" as const,
    estimatedTime: "4주",
    steps: [
      "관심 있는 업계 뉴스 3개 선정",
      "각 뉴스에 대한 200자 요약 작성",
      "개인적인 의견과 인사이트 추가",
      "AI 도구로 피드백 요청",
      "피드백을 바탕으로 개선된 버전 작성"
    ]
  },
  {
    id: 2,
    title: "AI와 협업하기",
    description: "ChatGPT를 활용해 나만의 업무 도우미를 만들고 실제 업무에 적용해보세요",
    difficulty: "intermediate" as const,
    category: "collaboration" as const,
    estimatedTime: "3주",
    steps: [
      "반복적인 업무 프로세스 분석",
      "AI 도우미 역할 정의",
      "효과적인 프롬프트 개발",
      "실제 업무에 적용 및 테스트",
      "결과 분석 및 개선"
    ]
  },
  {
    id: 3,
    title: "창의력 확장",
    description: "Midjourney나 DALL-E를 사용해 나만의 브랜드 컨셉 이미지를 만들어보세요",
    difficulty: "intermediate" as const,
    category: "creativity" as const,
    estimatedTime: "2주",
    steps: [
      "개인 브랜드 아이덴티티 정의",
      "이미지 생성 AI 도구 학습",
      "다양한 스타일의 컨셉 이미지 생성",
      "피드백 수집 및 개선",
      "최종 브랜드 이미지 완성"
    ]
  },
  {
    id: 4,
    title: "스토리 기반 회고",
    description: "나의 커리어를 스토리로 정리하고 AI의 도움을 받아 미래 시나리오를 작성해보세요",
    difficulty: "advanced" as const,
    category: "creativity" as const,
    estimatedTime: "6주",
    steps: [
      "과거 경험과 성취 정리",
      "스토리텔링 기법으로 재구성",
      "AI와 함께 미래 시나리오 작성",
      "동료나 멘토와 공유",
      "피드백 기반 액션 플랜 수립"
    ]
  }
];

export type Quest = typeof creativeQuests[0];
export type ActionRecommendation = typeof actionRecommendations.beginner[0];
