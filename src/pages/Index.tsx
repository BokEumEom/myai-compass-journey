import Hero from "@/components/Hero";
import FeatureCard from "@/components/FeatureCard";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ListCheck, Rocket, TrendingUp, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        <Hero />

        <section className="container mx-auto px-4 py-16 md:py-24">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-compass-purple-darkest mb-3">AI 시대를 준비하는 나만의 나침반</h2>
            <p className="text-lg text-compass-neutral-gray max-w-2xl mx-auto">
              MyAI Compass는 AI 시대에 적응하고 성장하는 맞춤형 여정을 제공합니다. 자신의 현재 위치를 파악하고 미래를 위한 길을 찾아보세요.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Link to="/reality-check" className="h-full block hover:shadow-lg transition-shadow duration-300 rounded-xl">
              <FeatureCard
                title="현재 상태 체크리스트"
                description="AI 시대에 얼마나 준비되어 있고, 어떤 부분이 불안 요인인지 파악하세요."
                icon={ListCheck}
              />
            </Link>
            <Link to="/action-roadmap" className="h-full block hover:shadow-lg transition-shadow duration-300 rounded-xl">
              <FeatureCard
                title="건설적 발전 가이드"
                description="체크리스트 결과를 기반으로 한 개인 맞춤형 로드맵을 받아보세요."
                icon={Rocket}
              />
            </Link>
            <Link to="/creative-quest" className="h-full block hover:shadow-lg transition-shadow duration-300 rounded-xl">
              <FeatureCard
                title="창의적 성장 퀘스트"
                description="AI와 함께하며 나만의 강점을 키울 수 있는 퀘스트를 수행해보세요."
                icon={TrendingUp}
              />
            </Link>
            <Link to="/self-report" className="h-full block hover:shadow-lg transition-shadow duration-300 rounded-xl">
              <FeatureCard
                title="나만의 보고서"
                description="매달 자동으로 생성되는 나의 업스킬 및 적응 현황 리포트를 확인하세요."
                icon={BookOpen}
              />
            </Link>
          </div>
        </section>

        <section className="bg-compass-soft-purple py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-compass-purple-darkest mb-6">
                  AI는 도구일 뿐, 당신의 방향은 스스로 결정하세요
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    MyAI Compass는 단순히 AI에 대한 불안감을 해소하는 것을 넘어, AI를 활용한 창의적인 성장 방향을 찾도록 도와드립니다.
                  </p>
                  <p>
                    AI 시대에 가장 중요한 것은 기술이 아니라 인간 고유의 창의성, 비판적 사고, 협업 능력입니다. 나만의 강점을 발견하고 키워보세요.
                  </p>
                  <div className="pt-4">
                    <Button asChild className="bg-compass-purple hover:bg-compass-purple-dark">
                      <Link to="/reality-check">
                        지금 진단 시작하기
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
              <div className="order-first lg:order-last relative">
                <div className="absolute -top-8 -left-8 h-[250px] w-[250px] rounded-full bg-compass-soft-blue blur-3xl opacity-30"></div>
                <img
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
                  alt="AI Compass"
                  className="relative z-10 mx-auto h-full w-full rounded-2xl object-cover shadow-xl"
                  style={{maxHeight: "400px"}}
                />
              </div>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-16 md:py-24">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-compass-purple-darkest mb-3">어떻게 시작하나요?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              MyAI Compass와 함께하는 여정은 간단한 체크리스트로 시작합니다. 3단계로 나만의 방향을 찾아보세요.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="relative">
              <div className="absolute -top-4 -left-4 flex h-8 w-8 items-center justify-center rounded-full bg-compass-purple">
                <span className="text-sm font-bold text-white">1</span>
              </div>
              <div className="rounded-lg border border-compass-soft-purple bg-white p-6">
                <h3 className="text-xl font-semibold text-compass-purple-darkest mb-3">현재 상태 체크</h3>
                <p className="text-muted-foreground mb-4">
                  5분 안에 완료되는 간단한 체크리스트로 AI 시대에 대한 준비 상태를 확인해보세요.
                </p>
                <Button asChild variant="outline" className="border-compass-soft-purple text-compass-purple-darkest hover:bg-compass-soft-purple/20">
                  <Link to="/reality-check">
                    체크리스트 시작하기
                  </Link>
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute -top-4 -left-4 flex h-8 w-8 items-center justify-center rounded-full bg-compass-purple">
                <span className="text-sm font-bold text-white">2</span>
              </div>
              <div className="rounded-lg border border-compass-soft-purple bg-white p-6">
                <h3 className="text-xl font-semibold text-compass-purple-darkest mb-3">맞춤형 로드맵 확인</h3>
                <p className="text-muted-foreground mb-4">
                  체크리스트 결과를 바탕으로 개인화된 성장 로드맵과 실천 가능한 액션 플랜을 제공받으세요.
                </p>
                <Button asChild variant="outline" className="border-compass-soft-purple text-compass-purple-darkest hover:bg-compass-soft-purple/20">
                  <Link to="/action-roadmap">
                    로드맵 살펴보기
                  </Link>
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute -top-4 -left-4 flex h-8 w-8 items-center justify-center rounded-full bg-compass-purple">
                <span className="text-sm font-bold text-white">3</span>
              </div>
              <div className="rounded-lg border border-compass-soft-purple bg-white p-6">
                <h3 className="text-xl font-semibold text-compass-purple-darkest mb-3">창의적 성장 퀘스트</h3>
                <p className="text-muted-foreground mb-4">
                  "나를 대체하지 못할 나다움"을 키우는 퀘스트를 수행하고 AI 시대의 준비를 완료하세요.
                </p>
                <Button asChild variant="outline" className="border-compass-soft-purple text-compass-purple-darkest hover:bg-compass-soft-purple/20">
                  <Link to="/creative-quest">
                    퀘스트 확인하기
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-b from-white to-compass-soft-purple py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-compass-purple-darkest mb-6">
              지금 바로 AI 시대를 위한 준비를 시작하세요
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              MyAI Compass와 함께 AI 시대에도 나만의 방향을 잃지 않고 건설적으로 성장하는 여정을 시작하세요.
            </p>
            <Button asChild className="bg-compass-purple hover:bg-compass-purple-dark inline-flex h-12 items-center justify-center px-8 text-lg">
              <Link to="/reality-check">
                무료로 진단 시작하기
              </Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
