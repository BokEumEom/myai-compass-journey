
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Compass, Target, TrendingUp, Users, Brain, Shield } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-compass-soft-purple to-white">
      <Header />
      
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center rounded-full bg-compass-purple p-4 mb-6">
            <Compass className="h-12 w-12 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-compass-purple-darkest mb-4">
            MyAI Compass에 대하여
          </h1>
          <p className="text-xl text-compass-neutral-gray max-w-3xl mx-auto">
            AI 시대에도 나만의 방향을 잃지 않도록 도와주는 개인 맞춤형 성장 플랫폼입니다.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="border-compass-soft-purple shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center text-compass-purple-darkest">
                <Target className="mr-3 h-6 w-6 text-compass-purple" />
                우리의 미션
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-compass-neutral-gray leading-relaxed">
                AI 시대의 급격한 변화 속에서 개인이 느끼는 불안감을 해소하고, 
                각자의 고유한 강점을 발견하여 AI와 협력하는 새로운 방식의 성장을 지원합니다.
              </p>
            </CardContent>
          </Card>

          <Card className="border-compass-soft-purple shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center text-compass-purple-darkest">
                <TrendingUp className="mr-3 h-6 w-6 text-compass-purple" />
                우리의 비전
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-compass-neutral-gray leading-relaxed">
                모든 사람이 AI를 두려워하지 않고 파트너로 활용하여, 
                인간 고유의 창의성과 감성을 바탕으로 더 나은 미래를 만들어가는 세상을 꿈꿉니다.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Core Values */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-compass-purple-darkest text-center mb-12">
            핵심 가치
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center rounded-full bg-compass-soft-purple p-4 mb-4">
                <Brain className="h-8 w-8 text-compass-purple" />
              </div>
              <h3 className="text-xl font-semibold text-compass-purple-darkest mb-3">창의적 성장</h3>
              <p className="text-compass-neutral-gray">
                AI가 할 수 없는 인간만의 창의성과 감성을 키우는 것이 가장 중요한 경쟁력입니다.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center rounded-full bg-compass-soft-purple p-4 mb-4">
                <Users className="h-8 w-8 text-compass-purple" />
              </div>
              <h3 className="text-xl font-semibold text-compass-purple-darkest mb-3">협력적 발전</h3>
              <p className="text-compass-neutral-gray">
                AI와의 대립이 아닌 협력을 통해 더 큰 가치를 창조하는 방법을 찾습니다.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center rounded-full bg-compass-soft-purple p-4 mb-4">
                <Shield className="h-8 w-8 text-compass-purple" />
              </div>
              <h3 className="text-xl font-semibold text-compass-purple-darkest mb-3">지속적 학습</h3>
              <p className="text-compass-neutral-gray">
                변화하는 시대에 적응하기 위한 지속적인 학습과 성장을 지원합니다.
              </p>
            </div>
          </div>
        </div>

        {/* How It Works */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-compass-purple-darkest text-center mb-12">
            어떻게 작동하나요?
          </h2>
          <div className="space-y-8">
            <div className="flex items-start space-x-6">
              <div className="flex-shrink-0 w-12 h-12 bg-compass-purple rounded-full flex items-center justify-center text-white font-bold text-lg">
                1
              </div>
              <div>
                <h3 className="text-xl font-semibold text-compass-purple-darkest mb-2">현재 상태 진단</h3>
                <p className="text-compass-neutral-gray">
                  5분간의 간단한 체크리스트를 통해 AI 시대에 대한 현재 준비 상태를 객관적으로 평가합니다.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-6">
              <div className="flex-shrink-0 w-12 h-12 bg-compass-purple rounded-full flex items-center justify-center text-white font-bold text-lg">
                2
              </div>
              <div>
                <h3 className="text-xl font-semibold text-compass-purple-darkest mb-2">맞춤형 로드맵 제공</h3>
                <p className="text-compass-neutral-gray">
                  진단 결과를 바탕으로 개인의 현재 수준과 목표에 맞는 구체적인 성장 계획을 제시합니다.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-6">
              <div className="flex-shrink-0 w-12 h-12 bg-compass-purple rounded-full flex items-center justify-center text-white font-bold text-lg">
                3
              </div>
              <div>
                <h3 className="text-xl font-semibold text-compass-purple-darkest mb-2">실천 가능한 퀘스트</h3>
                <p className="text-compass-neutral-gray">
                  이론에 그치지 않고 실제로 경험하고 성장할 수 있는 구체적인 미션과 프로젝트를 제공합니다.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-6">
              <div className="flex-shrink-0 w-12 h-12 bg-compass-purple rounded-full flex items-center justify-center text-white font-bold text-lg">
                4
              </div>
              <div>
                <h3 className="text-xl font-semibold text-compass-purple-darkest mb-2">지속적인 모니터링</h3>
                <p className="text-compass-neutral-gray">
                  월간 리포트와 진행 상황 추적을 통해 지속적인 성장을 지원하고 동기를 부여합니다.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-white rounded-2xl p-8 shadow-lg border border-compass-soft-purple">
          <h2 className="text-2xl font-bold text-compass-purple-darkest mb-4">
            지금 바로 AI 시대 준비를 시작하세요
          </h2>
          <p className="text-compass-neutral-gray mb-6 max-w-2xl mx-auto">
            MyAI Compass와 함께 AI 시대에도 나만의 방향을 찾고, 
            창의적이고 의미 있는 성장을 이루어 나가세요.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/reality-check">
              <Button className="bg-compass-purple hover:bg-compass-purple-dark px-8 py-3">
                무료 진단 시작하기
              </Button>
            </Link>
            <Link to="/">
              <Button variant="outline" className="border-compass-soft-purple text-compass-purple-darkest hover:bg-compass-soft-purple/20 px-8 py-3">
                홈으로 돌아가기
              </Button>
            </Link>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default About;
