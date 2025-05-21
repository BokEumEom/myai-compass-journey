
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { 
  BookOpen, 
  Rocket, 
  TrendingUp, 
  ListCheck, 
  Compass, 
  Star 
} from "lucide-react";
import { actionRecommendations } from "@/utils/assessmentData";

const difficultyLabels: Record<string, { color: string; label: string }> = {
  beginner: { color: "bg-green-100 text-green-800", label: "초급" },
  intermediate: { color: "bg-yellow-100 text-yellow-800", label: "중급" },
  advanced: { color: "bg-orange-100 text-orange-800", label: "고급" }
};

const categoryLabels: Record<string, { color: string; label: string; icon: typeof BookOpen }> = {
  skill: { color: "bg-compass-soft-blue text-blue-800", label: "스킬", icon: BookOpen },
  creativity: { color: "bg-purple-100 text-purple-800", label: "창의성", icon: Rocket },
  collaboration: { color: "bg-indigo-100 text-indigo-800", label: "협업", icon: TrendingUp }
};

const ActionRoadmap = () => {
  const [filter, setFilter] = useState<string>("all");
  
  const allActions = Object.values(actionRecommendations).flat();
  
  const filteredActions = filter === "all" 
    ? allActions 
    : allActions.filter(action => action.category === filter);

  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center rounded-full bg-compass-soft-purple p-4 mb-4">
            <Compass className="h-8 w-8 text-compass-purple" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-compass-purple-darkest mb-3">건설적 발전 가이드</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            AI 시대에 적응하고 성장하기 위한 맞춤형 액션 로드맵을 탐색해보세요.
          </p>
        </div>

        <Tabs defaultValue="all" className="mb-8">
          <div className="flex justify-center">
            <TabsList className="bg-compass-soft-purple/50">
              <TabsTrigger 
                value="all" 
                onClick={() => setFilter("all")}
                className="data-[state=active]:bg-compass-purple data-[state=active]:text-white"
              >
                <ListCheck className="mr-2 h-4 w-4" />
                전체
              </TabsTrigger>
              <TabsTrigger 
                value="skill" 
                onClick={() => setFilter("skill")}
                className="data-[state=active]:bg-compass-purple data-[state=active]:text-white"
              >
                <BookOpen className="mr-2 h-4 w-4" />
                스킬
              </TabsTrigger>
              <TabsTrigger 
                value="creativity" 
                onClick={() => setFilter("creativity")}
                className="data-[state=active]:bg-compass-purple data-[state=active]:text-white"
              >
                <Rocket className="mr-2 h-4 w-4" />
                창의성
              </TabsTrigger>
              <TabsTrigger 
                value="collaboration" 
                onClick={() => setFilter("collaboration")}
                className="data-[state=active]:bg-compass-purple data-[state=active]:text-white"
              >
                <TrendingUp className="mr-2 h-4 w-4" />
                협업
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="all" className="mt-6">
            <div className="grid gap-6 md:grid-cols-2">
              {filteredActions.map((action, index) => {
                const CategoryIcon = categoryLabels[action.category].icon;
                return (
                  <Card key={index} className="border-compass-soft-purple hover:shadow-md transition-shadow duration-300">
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-start">
                        <div className="flex items-center">
                          <div className="mr-3 h-8 w-8 rounded-full bg-compass-soft-purple flex items-center justify-center">
                            <CategoryIcon className="h-4 w-4 text-compass-purple" />
                          </div>
                          <CardTitle className="text-lg text-compass-purple-darker">{action.title}</CardTitle>
                        </div>
                        <Button variant="ghost" size="icon" className="h-6 w-6 text-compass-purple-dark">
                          <Star className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="mb-4">{action.description}</CardDescription>
                      <div className="flex space-x-2">
                        <span className={`px-2 py-1 rounded-full text-xs ${difficultyLabels[action.difficulty].color}`}>
                          {difficultyLabels[action.difficulty].label}
                        </span>
                        <span className={`px-2 py-1 rounded-full text-xs ${categoryLabels[action.category].color}`}>
                          {categoryLabels[action.category].label}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </TabsContent>
          
          <TabsContent value="skill" className="mt-6">
            <div className="grid gap-6 md:grid-cols-2">
              {filteredActions.map((action, index) => {
                const CategoryIcon = categoryLabels[action.category].icon;
                return (
                  <Card key={index} className="border-compass-soft-purple hover:shadow-md transition-shadow duration-300">
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-start">
                        <div className="flex items-center">
                          <div className="mr-3 h-8 w-8 rounded-full bg-compass-soft-purple flex items-center justify-center">
                            <CategoryIcon className="h-4 w-4 text-compass-purple" />
                          </div>
                          <CardTitle className="text-lg text-compass-purple-darker">{action.title}</CardTitle>
                        </div>
                        <Button variant="ghost" size="icon" className="h-6 w-6 text-compass-purple-dark">
                          <Star className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="mb-4">{action.description}</CardDescription>
                      <div className="flex space-x-2">
                        <span className={`px-2 py-1 rounded-full text-xs ${difficultyLabels[action.difficulty].color}`}>
                          {difficultyLabels[action.difficulty].label}
                        </span>
                        <span className={`px-2 py-1 rounded-full text-xs ${categoryLabels[action.category].color}`}>
                          {categoryLabels[action.category].label}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </TabsContent>
          
          <TabsContent value="creativity" className="mt-6">
            <div className="grid gap-6 md:grid-cols-2">
              {filteredActions.map((action, index) => {
                const CategoryIcon = categoryLabels[action.category].icon;
                return (
                  <Card key={index} className="border-compass-soft-purple hover:shadow-md transition-shadow duration-300">
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-start">
                        <div className="flex items-center">
                          <div className="mr-3 h-8 w-8 rounded-full bg-compass-soft-purple flex items-center justify-center">
                            <CategoryIcon className="h-4 w-4 text-compass-purple" />
                          </div>
                          <CardTitle className="text-lg text-compass-purple-darker">{action.title}</CardTitle>
                        </div>
                        <Button variant="ghost" size="icon" className="h-6 w-6 text-compass-purple-dark">
                          <Star className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="mb-4">{action.description}</CardDescription>
                      <div className="flex space-x-2">
                        <span className={`px-2 py-1 rounded-full text-xs ${difficultyLabels[action.difficulty].color}`}>
                          {difficultyLabels[action.difficulty].label}
                        </span>
                        <span className={`px-2 py-1 rounded-full text-xs ${categoryLabels[action.category].color}`}>
                          {categoryLabels[action.category].label}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </TabsContent>
          
          <TabsContent value="collaboration" className="mt-6">
            <div className="grid gap-6 md:grid-cols-2">
              {filteredActions.map((action, index) => {
                const CategoryIcon = categoryLabels[action.category].icon;
                return (
                  <Card key={index} className="border-compass-soft-purple hover:shadow-md transition-shadow duration-300">
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-start">
                        <div className="flex items-center">
                          <div className="mr-3 h-8 w-8 rounded-full bg-compass-soft-purple flex items-center justify-center">
                            <CategoryIcon className="h-4 w-4 text-compass-purple" />
                          </div>
                          <CardTitle className="text-lg text-compass-purple-darker">{action.title}</CardTitle>
                        </div>
                        <Button variant="ghost" size="icon" className="h-6 w-6 text-compass-purple-dark">
                          <Star className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="mb-4">{action.description}</CardDescription>
                      <div className="flex space-x-2">
                        <span className={`px-2 py-1 rounded-full text-xs ${difficultyLabels[action.difficulty].color}`}>
                          {difficultyLabels[action.difficulty].label}
                        </span>
                        <span className={`px-2 py-1 rounded-full text-xs ${categoryLabels[action.category].color}`}>
                          {categoryLabels[action.category].label}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default ActionRoadmap;
