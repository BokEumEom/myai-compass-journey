
export interface AssessmentQuestion {
  id: number;
  question: string;
  description?: string;
}

export const realityCheckQuestions: AssessmentQuestion[] = [
  {
    id: 1,
    question: "내 업무 중 반복적이고 자동화될 수 있는 요소가 많다",
    description: "일상적인 작업이 규칙적이고 예측 가능한 패턴을 따르는지 생각해보세요."
  },
  {
    id: 2,
    question: "나는 AI 도구들을 사용해본 경험이 있다",
    description: "ChatGPT, DALL-E, Midjourney 등의 AI 도구를 활용해본 경험을 고려하세요."
  },
  {
    id: 3,
    question: "최근 1년간 내 기술/지식이 업그레이드되었다",
    description: "새로운 도구, 방법론, 기술을 습득하기 위해 얼마나 노력했는지 생각해보세요."
  },
  {
    id: 4,
    question: "나의 커뮤니케이션 능력, 창의력, 협업능력은 강점이다",
    description: "AI가 대체하기 어려운 인간 고유의 능력들을 얼마나 보유하고 있는지 평가해보세요."
  },
  {
    id: 5,
    question: "AI를 도구로 활용해 나만의 결과물을 낸 경험이 있다",
    description: "AI를 단순히 사용하는 것을 넘어 창의적인 결과물을 만드는 데 활용한 경험을 고려하세요."
  }
];

interface ActionItem {
  title: string;
  description: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  category: 'skill' | 'creativity' | 'collaboration';
}

export const actionRecommendations: Record<string, ActionItem[]> = {
  lowAIExposure: [
    {
      title: "AI 기본 체험하기",
      description: "ChatGPT를 사용해 간단한 질문에 답변 받고 대화 나눠보기",
      difficulty: "beginner",
      category: "skill"
    },
    {
      title: "Notion AI 활용하기",
      description: "Notion AI로 회의록 요약이나 아이디어 확장해보기",
      difficulty: "beginner",
      category: "skill"
    },
    {
      title: "AI 이미지 생성 체험",
      description: "DALL-E나 Midjourney로 간단한 이미지 만들어보기",
      difficulty: "beginner",
      category: "creativity"
    }
  ],
  needsUpskilling: [
    {
      title: "온라인 AI 기초 코스 수강",
      description: "Coursera나 edX의 AI 입문 강의 들어보기",
      difficulty: "intermediate",
      category: "skill"
    },
    {
      title: "업무 자동화 프로젝트",
      description: "반복적인 업무 하나를 AI 도구로 자동화해보기",
      difficulty: "intermediate",
      category: "skill"
    },
    {
      title: "AI 트렌드 뉴스레터 구독",
      description: "주요 AI 뉴스레터를 구독하고 트렌드 따라가기",
      difficulty: "beginner",
      category: "skill"
    }
  ],
  enhanceCreativity: [
    {
      title: "AI 협업 창작 프로젝트",
      description: "AI와 함께 창의적인 콘텐츠나 아트워크 만들기",
      difficulty: "intermediate",
      category: "creativity"
    },
    {
      title: "스토리텔링 연습",
      description: "AI 도구를 활용해 나만의 스토리 만들고 발전시키기",
      difficulty: "intermediate",
      category: "creativity"
    },
    {
      title: "디지털 포트폴리오 제작",
      description: "AI 도구로 개인 브랜딩과 포트폴리오 개선하기",
      difficulty: "advanced",
      category: "creativity"
    }
  ],
  advancedAIUser: [
    {
      title: "AI 프롬프트 엔지니어링 심화",
      description: "복잡한 작업을 위한 고급 프롬프트 작성법 마스터하기",
      difficulty: "advanced",
      category: "skill"
    },
    {
      title: "AI 팀 워크숍 진행",
      description: "팀원들과 AI 활용 워크숍을 진행하고 노하우 공유하기",
      difficulty: "advanced",
      category: "collaboration"
    },
    {
      title: "AI 기반 프로젝트 설계",
      description: "AI를 핵심 요소로 활용한 프로젝트 기획 및 실행하기",
      difficulty: "advanced",
      category: "collaboration"
    }
  ]
};

export const calculateResults = (answers: number[]): {
  score: number;
  category: string;
  description: string;
  recommendations: string;
} => {
  const totalScore = answers.reduce((sum, current) => sum + current, 0);
  const averageScore = totalScore / answers.length;
  
  if (averageScore <= 2) {
    return {
      score: totalScore,
      category: "AI 적응 초기 단계",
      description: "AI 시대에 적응하기 위한 첫 걸음을 내딛고 있습니다. 기본적인 AI 도구 사용법을 익히고 자신의 업무에 어떻게 적용할 수 있을지 탐색해보세요.",
      recommendations: "lowAIExposure"
    };
  } else if (averageScore <= 3) {
    return {
      score: totalScore,
      category: "업스킬 필요 단계",
      description: "AI에 대한 기본 이해는 있지만, 더 깊이 있는 지식과 실무 적용 경험이 필요합니다. 온라인 코스와 실제 프로젝트를 통해 역량을 강화해보세요.",
      recommendations: "needsUpskilling"
    };
  } else if (averageScore <= 4) {
    return {
      score: totalScore,
      category: "창의적 확장 단계",
      description: "AI를 효과적으로 활용하고 계시군요! 이제 AI를 활용한 창의적 결과물을 만들고 나만의 독특한 접근법을 개발해보세요.",
      recommendations: "enhanceCreativity"
    };
  } else {
    return {
      score: totalScore,
      category: "AI 선도자 단계",
      description: "AI를 능숙하게 다루고 혁신적으로 활용하고 계십니다. 이제 지식을 공유하고 더 복잡한 프로젝트에 AI를 통합해보세요.",
      recommendations: "advancedAIUser"
    };
  }
};
