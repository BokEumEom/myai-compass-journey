
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Download } from "lucide-react";
import { Link } from "react-router-dom";

const SelfReport = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-compass-soft-purple to-white">
      <Header />
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center rounded-full bg-compass-purple p-4 mb-6">
            <FileText className="h-12 w-12 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-compass-purple-darkest mb-4">
            나만의 보고서
          </h1>
          <p className="text-xl text-compass-neutral-gray max-w-3xl mx-auto">
            매달 자동으로 생성되는 나의 업스킬 및 적응 현황 리포트를 확인하고 성장을 추적하세요.
          </p>
        </div>

        <Card className="max-w-3xl mx-auto border-compass-soft-purple shadow-lg">
          <CardHeader>
            <CardTitle className="text-compass-purple-darkest">
              2025년 6월 보고서
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <p className="text-compass-neutral-gray">
                이 기능은 현재 개발 중입니다. 곧 당신의 성장 과정을 시각적으로 보여주는 월간 리포트를 받아보실 수 있습니다.
              </p>
              <div className="p-8 text-center bg-compass-soft-purple/50 rounded-lg">
                <p className="text-lg font-semibold text-compass-purple-darker">
                  보고서 기능이 준비되면 알려드릴게요!
                </p>
              </div>
              <div className="flex justify-center pt-4">
                <Button disabled className="bg-compass-purple hover:bg-compass-purple-dark opacity-50 cursor-not-allowed">
                  <Download className="mr-2 h-4 w-4" />
                  보고서 다운로드 (준비 중)
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="text-center mt-12">
            <Link to="/">
              <Button variant="outline" className="border-compass-soft-purple text-compass-purple-darkest hover:bg-compass-soft-purple/20 px-8 py-3">
                홈으로 돌아가기
              </Button>
            </Link>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default SelfReport;
