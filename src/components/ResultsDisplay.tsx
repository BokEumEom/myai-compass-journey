
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowRight, RefreshCcw, Compass } from "lucide-react";
import { Link } from "react-router-dom";
import { actionRecommendations } from "@/utils/assessmentData";

interface ResultsDisplayProps {
  results: {
    score: number;
    category: string;
    description: string;
    recommendations: string;
  };
  onReset: () => void;
}

const ResultsDisplay = ({ results, onReset }: ResultsDisplayProps) => {
  const recommendationsKey = results.recommendations as keyof typeof actionRecommendations;
  const recommendedActions = actionRecommendations[recommendationsKey] || [];

  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center rounded-full bg-compass-soft-purple p-4 mb-4">
            <Compass className="h-8 w-8 text-compass-purple" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-compass-purple-darkest mb-3">진단 결과</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            당신의 AI 시대 준비 상태를 분석하고 맞춤형 개발 방향을 제시해 드립니다.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <Card className="border-compass-soft-purple shadow-md">
            <CardHeader>
              <CardTitle className="text-xl text-compass-purple-darkest">현재 상태</CardTitle>
              <CardDescription>당신의 AI 시대 준비 상태입니다</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="rounded-lg bg-compass-soft-purple p-6 mb-6">
                <h3 className="text-2xl font-semibold text-compass-purple-darkest mb-2">{results.category}</h3>
                <p className="text-compass-purple-darker">{results.description}</p>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-medium text-muted-foreground mb-2">총점</h4>
                  <p className="text-3xl font-bold text-compass-purple">{results.score} <span className="text-sm text-muted-foreground font-normal">/ 25</span></p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-compass-soft-purple shadow-md">
            <CardHeader>
              <CardTitle className="text-xl text-compass-purple-darkest">추천 액션 플랜</CardTitle>
              <CardDescription>당신의 성장을 위한 맞춤형 행동 계획입니다</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recommendedActions.slice(0, 3).map((action, index) => (
                  <div key={index} className="flex items-start space-x-3 p-3 rounded-md bg-compass-soft-purple/30">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-compass-purple flex items-center justify-center text-white text-sm">
                      {index + 1}
                    </div>
                    <div>
                      <h4 className="font-medium text-compass-purple-darker">{action.title}</h4>
                      <p className="text-sm text-muted-foreground">{action.description}</p>
                      <div className="mt-2">
                        <span className={`inline-block px-2 py-1 text-xs rounded-full ${
                          action.difficulty === 'beginner' ? 'bg-green-100 text-green-800' :
                          action.difficulty === 'intermediate' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-orange-100 text-orange-800'
                        }`}>
                          {action.difficulty === 'beginner' ? '초급' : 
                           action.difficulty === 'intermediate' ? '중급' : '고급'}
                        </span>
                        <span className="inline-block ml-2 px-2 py-1 text-xs rounded-full bg-compass-soft-blue text-blue-800">
                          {action.category === 'skill' ? '스킬' : 
                           action.category === 'creativity' ? '창의성' : '협업'}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" onClick={onReset} className="border-compass-soft-purple text-compass-purple-darkest hover:bg-compass-soft-purple/20">
                <RefreshCcw className="mr-2 h-4 w-4" />
                다시 진단하기
              </Button>
              <Link to="/action-roadmap">
                <Button className="bg-compass-purple hover:bg-compass-purple-dark">
                  전체 로드맵 확인
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ResultsDisplay;
