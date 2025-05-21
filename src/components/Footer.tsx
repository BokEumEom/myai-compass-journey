
import { Compass } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-compass-soft-purple bg-white">
      <div className="container px-4 py-12 md:px-6 md:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <Compass className="h-6 w-6 text-compass-purple" />
              <span className="text-xl font-bold">MyAI Compass</span>
            </div>
            <p className="text-sm text-muted-foreground">
              AI 시대에도 나만의 방향을 잃지 않고 건설적으로 성장하는 길을 함께 찾아요.
            </p>
          </div>
          <nav className="space-y-3">
            <h3 className="text-sm font-medium text-compass-purple-darker">서비스</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/reality-check" className="text-muted-foreground hover:text-compass-purple transition-colors">
                  현재 상태 체크리스트
                </Link>
              </li>
              <li>
                <Link to="/action-roadmap" className="text-muted-foreground hover:text-compass-purple transition-colors">
                  건설적 발전 가이드
                </Link>
              </li>
              <li>
                <Link to="/creative-quest" className="text-muted-foreground hover:text-compass-purple transition-colors">
                  창의적 성장 퀘스트
                </Link>
              </li>
            </ul>
          </nav>
          <nav className="space-y-3">
            <h3 className="text-sm font-medium text-compass-purple-darker">정보</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-compass-purple transition-colors">
                  서비스 소개
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-muted-foreground hover:text-compass-purple transition-colors">
                  자주 묻는 질문
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-compass-purple transition-colors">
                  문의하기
                </Link>
              </li>
            </ul>
          </nav>
          <nav className="space-y-3">
            <h3 className="text-sm font-medium text-compass-purple-darker">법적 정보</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/privacy" className="text-muted-foreground hover:text-compass-purple transition-colors">
                  개인정보 처리방침
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-muted-foreground hover:text-compass-purple transition-colors">
                  이용약관
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="mt-12 border-t border-compass-soft-purple pt-6 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} MyAI Compass. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
