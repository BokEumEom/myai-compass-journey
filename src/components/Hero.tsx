
import { Button } from "@/components/ui/button";
import { ArrowRight, Compass } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-compass-soft-purple to-white py-16 md:py-24">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQ0MCIgaGVpZ2h0PSI5MDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48Y2lyY2xlIHN0cm9rZT0iI0U1RERGRiIgc3Ryb2tlLXdpZHRoPSIyIiBjeD0iMjgzIiBjeT0iMTgzIiByPSI3MCIvPjxjaXJjbGUgc3Ryb2tlPSIjRDZCQ0ZBIiBzdHJva2Utd2lkdGg9IjIiIGN4PSI5MDAiIGN5PSI0MDAiIHI9IjMwIi8+PGNpcmNsZSBzdHJva2U9IiNEM0U0RkQiIHN0cm9rZS13aWR0aD0iMiIgY3g9IjExMDAiIGN5PSIxNTAiIHI9IjQwIi8+PGNpcmNsZSBmaWxsPSIjRjFGMEZCIiBvcGFjaXR5PSIuNSIgY3g9IjU4MCIgY3k9IjUwMCIgcj0iOTAiLz48Y2lyY2xlIGZpbGw9IiM5Yjg3ZjUiIGZpbGwtb3BhY2l0eT0iLjEiIGN4PSIxMjAwIiBjeT0iNjUwIiByPSI4MCIvPjwvZz48L3N2ZyI=')]" style={{opacity: 0.15}}></div>
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-compass-purple px-3 py-1 text-sm text-white mb-2 animate-fade-in">
                <Compass className="h-4 w-4 inline mr-1" /> 나만의 AI 나침반
              </div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                <span className="text-gradient">MyAI Compass</span>
              </h1>
              <p className="text-xl text-compass-purple-darkest font-medium mt-2 md:mt-4">
                "AI 시대에도 나만의 방향을 잃지 않도록"
              </p>
              <p className="max-w-[700px] text-compass-neutral-gray md:text-xl mt-4">
                자신만의 AI 시대 적응 및 성장 지도를 만들고, AI 시대의 불안감을 극복하며 건설적인 발전을 이루어 나가세요.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link to="/reality-check">
                <Button className="bg-compass-purple hover:bg-compass-purple-dark inline-flex h-12 items-center justify-center rounded-md px-6 font-medium text-white transition-colors">
                  지금 진단 시작하기
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/about">
                <Button variant="outline" className="inline-flex h-12 items-center justify-center rounded-md border border-input bg-background px-6 font-medium text-compass-purple-darker hover:bg-compass-soft-purple transition-colors">
                  더 알아보기
                </Button>
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative">
              <div className="absolute -top-8 -left-8 h-[250px] w-[250px] rounded-full bg-compass-soft-purple blur-3xl opacity-30"></div>
              <div className="absolute -bottom-8 -right-8 h-[250px] w-[250px] rounded-full bg-compass-soft-blue blur-3xl opacity-30"></div>
              <img
                alt="MyAI Compass Illustration"
                className="relative z-10 mx-auto object-contain animate-scale-in"
                height={400}
                width={400}
                src="https://images.unsplash.com/photo-1685705312648-0da940075a55?q=80&w=1974&auto=format&fit=crop"
                style={{
                  objectFit: 'cover',
                  borderRadius: '1.5rem',
                  boxShadow: '0 25px 50px -12px rgba(155, 135, 245, 0.25)',
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
