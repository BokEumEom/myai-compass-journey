
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Brain, 
  Target, 
  Clock, 
  CheckCircle, 
  Play, 
  Rocket,
  Lightbulb,
  Users,
  Wand2,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { creativeQuests, Quest } from "@/utils/assessmentData";

const difficultyColors = {
  beginner: "bg-green-100 text-green-800",
  intermediate: "bg-yellow-100 text-yellow-800", 
  advanced: "bg-orange-100 text-orange-800"
};

const categoryIcons = {
  creativity: Lightbulb,
  collaboration: Users,
  skill: Brain
};

const CreativeQuest = () => {
  const [completedQuests, setCompletedQuests] = useState<number[]>([]);
  const [activeQuest, setActiveQuest] = useState<Quest | null>(null);
  const [questProgress, setQuestProgress] = useState<{[key: number]: number}>({});
  const [selectedQuest, setSelectedQuest] = useState<Quest | null>(null);

  const handleStartQuest = (quest: Quest) => {
    setActiveQuest(quest);
    if (!questProgress[quest.id]) {
      setQuestProgress(prev => ({ ...prev, [quest.id]: 0 }));
    }
    setSelectedQuest(null); // Close modal on start
  };

  const handleStepComplete = (questId: number, stepIndex: number) => {
    const quest = creativeQuests.find(q => q.id === questId);
    if (!quest) return;

    const newProgress = ((stepIndex + 1) / quest.steps.length) * 100;
    setQuestProgress(prev => ({ ...prev, [questId]: newProgress }));

    if (stepIndex + 1 === quest.steps.length) {
      setCompletedQuests(prev => [...prev, questId]);
      setActiveQuest(null);
    }
  };

  const completionRate = (completedQuests.length / creativeQuests.length) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-b from-compass-soft-purple to-white">
      <Header />
      
      <div className="container mx-auto px-4 py-12 md:py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center rounded-full bg-compass-soft-purple p-4 mb-4">
            <Rocket className="h-8 w-8 text-compass-purple" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-compass-purple-darkest mb-3">
            창의적 성장 퀘스트
          </h2>
          <p className="text-lg text-compass-neutral-gray max-w-2xl mx-auto">
            "나를 대체하지 못할 나다움"을 키우는 실전 프로젝트로 AI 시대의 핵심 역량을 기르세요.
          </p>
        </div>

        {/* Overall Progress */}
        <Card className="border-compass-soft-purple shadow-lg mb-8">
          <CardHeader>
            <CardTitle className="flex items-center text-compass-purple-darkest">
              <Target className="mr-3 h-6 w-6 text-compass-purple" />
              전체 진행 상황
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between text-sm">
                <span className="text-compass-neutral-gray">완료된 퀘스트</span>
                <span className="font-medium text-compass-purple-darkest">
                  {completedQuests.length} / {creativeQuests.length}
                </span>
              </div>
              <Progress value={completionRate} className="h-3" />
              <p className="text-sm text-compass-neutral-gray">
                {completionRate === 100 
                  ? "🎉 모든 퀘스트를 완료했습니다! AI 시대 준비가 완료되었습니다."
                  : `${Math.round(completionRate)}% 완료 - 계속해서 성장해나가세요!`
                }
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Active Quest */}
        {activeQuest && (
          <Card className="border-compass-purple shadow-lg mb-8 bg-gradient-to-r from-compass-soft-purple to-white">
            <CardHeader>
              <CardTitle className="flex items-center text-compass-purple-darkest">
                <Play className="mr-3 h-6 w-6 text-compass-purple" />
                진행 중인 퀘스트
              </CardTitle>
              <CardDescription>{activeQuest.title}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <Progress 
                  value={questProgress[activeQuest.id] || 0} 
                  className="h-3" 
                />
                <div className="space-y-3">
                  {activeQuest.steps.map((step, index) => {
                    const isCompleted = questProgress[activeQuest.id] > (index / activeQuest.steps.length) * 100;
                    const isCurrent = questProgress[activeQuest.id] === (index / activeQuest.steps.length) * 100;
                    
                    return (
                      <div key={index} className="flex items-center space-x-3">
                        <Button
                          size="sm"
                          variant={isCompleted ? "default" : "outline"}
                          onClick={() => handleStepComplete(activeQuest.id, index)}
                          disabled={isCompleted}
                          className={isCompleted ? "bg-compass-purple" : ""}
                        >
                          {isCompleted ? (
                            <CheckCircle className="h-4 w-4" />
                          ) : (
                            <span className="h-4 w-4 rounded-full border-2 border-current" />
                          )}
                        </Button>
                        <span className={`flex-1 ${isCompleted ? 'line-through text-compass-neutral-gray' : 'text-compass-purple-darkest'}`}>
                          {step}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Quest Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {creativeQuests.map((quest) => {
            const isCompleted = completedQuests.includes(quest.id);
            const isActive = activeQuest?.id === quest.id;
            const CategoryIcon = categoryIcons[quest.category];
            
            return (
              <Card 
                key={quest.id} 
                onClick={() => setSelectedQuest(quest)}
                className={`border-compass-soft-purple shadow-lg transition-all duration-300 hover:shadow-xl cursor-pointer ${
                  isCompleted ? 'bg-green-50 border-green-200' : 
                  isActive ? 'bg-compass-soft-purple border-compass-purple' : 'hover:border-compass-purple'
                }`}
              >
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div className="flex items-center space-x-3">
                      <div className="h-10 w-10 rounded-full bg-compass-soft-purple flex items-center justify-center">
                        <CategoryIcon className="h-5 w-5 text-compass-purple" />
                      </div>
                      <div>
                        <CardTitle className="text-lg text-compass-purple-darkest">
                          {quest.title}
                        </CardTitle>
                        {isCompleted && (
                          <Badge className="bg-green-100 text-green-800 mt-1">
                            <CheckCircle className="h-3 w-3 mr-1" />
                            완료
                          </Badge>
                        )}
                      </div>
                    </div>
                  </div>
                  <CardDescription className="mt-2">
                    {quest.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex space-x-2">
                      <Badge className={difficultyColors[quest.difficulty]}>
                        {quest.difficulty === 'beginner' ? '초급' : 
                         quest.difficulty === 'intermediate' ? '중급' : '고급'}
                      </Badge>
                      <Badge variant="outline" className="border-compass-soft-purple text-compass-purple-darker">
                        {quest.category === 'creativity' ? '창의성' :
                         quest.category === 'collaboration' ? '협업' : '스킬'}
                      </Badge>
                    </div>
                    <div className="flex items-center text-sm text-compass-neutral-gray">
                      <Clock className="h-4 w-4 mr-1" />
                      예상 소요 시간: {quest.estimatedTime}
                    </div>
                    {questProgress[quest.id] > 0 && !isCompleted && (
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-compass-neutral-gray">진행률</span>
                          <span className="text-compass-purple-darkest">
                            {Math.round(questProgress[quest.id])}%
                          </span>
                        </div>
                        <Progress value={questProgress[quest.id]} className="h-2" />
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
        
        {/* Quest Detail Modal */}
        <Dialog open={!!selectedQuest} onOpenChange={(isOpen) => !isOpen && setSelectedQuest(null)}>
          <DialogContent className="sm:max-w-[525px]">
            {selectedQuest && (
              <>
                <DialogHeader>
                  <DialogTitle className="text-2xl text-compass-purple-darkest">{selectedQuest.title}</DialogTitle>
                  <DialogDescription>
                    {selectedQuest.description}
                  </DialogDescription>
                </DialogHeader>
                <div className="py-4 space-y-6">
                  <div className="flex flex-wrap gap-2">
                    <Badge className={difficultyColors[selectedQuest.difficulty]}>
                      {selectedQuest.difficulty === 'beginner' ? '초급' : 
                       selectedQuest.difficulty === 'intermediate' ? '중급' : '고급'}
                    </Badge>
                    <Badge variant="outline" className="border-compass-soft-purple text-compass-purple-darker">
                      {selectedQuest.category === 'creativity' ? '창의성' :
                       selectedQuest.category === 'collaboration' ? '협업' : '스킬'}
                    </Badge>
                  </div>
                  <div className="flex items-center text-sm text-compass-neutral-gray">
                    <Clock className="h-4 w-4 mr-2" />
                    예상 소요 시간: {selectedQuest.estimatedTime}
                  </div>
                  
                  {selectedQuest.tools && selectedQuest.tools.length > 0 && (
                    <div className="space-y-2">
                      <h4 className="font-semibold text-compass-purple-darker flex items-center">
                        <Wand2 className="h-4 w-4 mr-2" />
                        추천 도구
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedQuest.tools.map(tool => (
                          <Badge key={tool} variant="secondary">{tool}</Badge>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="space-y-2">
                    <h4 className="font-semibold text-compass-purple-darker">퀘스트 단계</h4>
                    <ul className="space-y-2">
                      {selectedQuest.steps.map((step, index) => (
                        <li key={index} className="flex items-start space-x-3">
                          <CheckCircle className="h-5 w-5 mt-0.5 text-compass-purple flex-shrink-0" />
                          <span className="text-compass-neutral-gray">{step}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <DialogFooter>
                  {completedQuests.includes(selectedQuest.id) ? (
                    <Button disabled className="w-full bg-green-100 text-green-800">
                      <CheckCircle className="mr-2 h-4 w-4" />
                      완료됨
                    </Button>
                  ) : activeQuest?.id === selectedQuest.id ? (
                    <Button disabled className="w-full bg-compass-purple text-white">
                      진행 중...
                    </Button>
                  ) : (
                    <Button 
                      onClick={() => handleStartQuest(selectedQuest)}
                      className="w-full bg-compass-purple hover:bg-compass-purple-dark"
                    >
                      <Play className="mr-2 h-4 w-4" />
                      퀘스트 시작
                    </Button>
                  )}
                </DialogFooter>
              </>
            )}
          </DialogContent>
        </Dialog>


        {/* Tips Section */}
        <Card className="border-compass-soft-purple shadow-lg mt-8">
          <CardHeader>
            <CardTitle className="flex items-center text-compass-purple-darkest">
              <Lightbulb className="mr-3 h-6 w-6 text-compass-purple" />
              퀘스트 수행 팁
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-compass-purple-darker mb-2">💡 효과적인 학습을 위해</h4>
                <ul className="text-sm text-compass-neutral-gray space-y-1">
                  <li>• 하루에 한 단계씩 천천히 진행하세요</li>
                  <li>• 각 단계의 결과물을 기록으로 남기세요</li>
                  <li>• 동료나 친구와 경험을 공유해보세요</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-compass-purple-darker mb-2">🎯 성공적인 완료를 위해</h4>
                <ul className="text-sm text-compass-neutral-gray space-y-1">
                  <li>• 완벽함보다는 경험과 학습에 집중하세요</li>
                  <li>• AI 도구를 적극적으로 활용해보세요</li>
                  <li>• 실패도 중요한 학습 과정임을 기억하세요</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <Footer />
    </div>
  );
};

export default CreativeQuest;
