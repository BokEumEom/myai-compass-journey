
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { ArrowRight, ArrowLeft, CheckCircle } from "lucide-react";
import { realityCheckQuestions, calculateResults } from "@/utils/assessmentData";
import ResultsDisplay from "./ResultsDisplay";

const RealityCheck = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<number[]>(Array(realityCheckQuestions.length).fill(0));
  const [completed, setCompleted] = useState(false);
  const [results, setResults] = useState<{
    score: number;
    category: string;
    description: string;
    recommendations: string;
  } | null>(null);

  const handleAnswerSelect = (value: number) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestionIndex] = value;
    setAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentQuestionIndex < realityCheckQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      const results = calculateResults(answers);
      setResults(results);
      setCompleted(true);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleReset = () => {
    setAnswers(Array(realityCheckQuestions.length).fill(0));
    setCurrentQuestionIndex(0);
    setCompleted(false);
    setResults(null);
  };

  const progress = ((currentQuestionIndex + 1) / realityCheckQuestions.length) * 100;

  if (completed && results) {
    return <ResultsDisplay results={results} onReset={handleReset} />;
  }

  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-compass-purple-darkest mb-2">나의 현재 상태 체크리스트</h2>
          <p className="text-compass-neutral-gray">AI 시대에 얼마나 준비되어 있는지 확인해 보세요</p>
        </div>

        <div className="mb-8">
          <div className="flex justify-between text-sm text-compass-neutral-gray mb-2">
            <span>질문 {currentQuestionIndex + 1} / {realityCheckQuestions.length}</span>
            <span>{Math.round(progress)}% 완료</span>
          </div>
          <Progress value={progress} className="h-2 bg-compass-soft-purple" />
        </div>

        <Card className="border-compass-soft-purple shadow-lg">
          <CardHeader>
            <CardTitle className="text-xl text-compass-purple-darkest">
              {realityCheckQuestions[currentQuestionIndex].question}
            </CardTitle>
            {realityCheckQuestions[currentQuestionIndex].description && (
              <CardDescription className="text-compass-neutral-gray mt-1">
                {realityCheckQuestions[currentQuestionIndex].description}
              </CardDescription>
            )}
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              {[1, 2, 3, 4, 5].map((value) => (
                <Button
                  key={value}
                  variant={answers[currentQuestionIndex] === value ? "default" : "outline"}
                  className={`h-12 justify-start px-6 w-full ${
                    answers[currentQuestionIndex] === value 
                      ? "bg-compass-purple text-white hover:bg-compass-purple-dark" 
                      : "text-compass-purple-darker hover:bg-compass-soft-purple/20"
                  }`}
                  onClick={() => handleAnswerSelect(value)}
                >
                  {answers[currentQuestionIndex] === value && (
                    <CheckCircle className="mr-2 h-4 w-4" />
                  )}
                  {value === 1 && "전혀 그렇지 않다"}
                  {value === 2 && "그렇지 않다"}
                  {value === 3 && "보통이다"}
                  {value === 4 && "그렇다"}
                  {value === 5 && "매우 그렇다"}
                </Button>
              ))}
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button
              variant="outline"
              onClick={handlePrevious}
              disabled={currentQuestionIndex === 0}
              className="border-compass-soft-purple text-compass-purple-darkest hover:bg-compass-soft-purple/20"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              이전
            </Button>
            <Button
              onClick={handleNext}
              disabled={answers[currentQuestionIndex] === 0}
              className="bg-compass-purple hover:bg-compass-purple-dark"
            >
              {currentQuestionIndex < realityCheckQuestions.length - 1 ? (
                <>
                  다음
                  <ArrowRight className="ml-2 h-4 w-4" />
                </>
              ) : (
                "결과 보기"
              )}
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default RealityCheck;
