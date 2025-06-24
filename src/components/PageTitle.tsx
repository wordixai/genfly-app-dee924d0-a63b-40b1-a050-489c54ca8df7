import { Home } from "lucide-react";

interface PageTitleProps {
  title: string;
  subtitle: string;
  backgroundClass: string;
}

export function PageTitle({ title, subtitle, backgroundClass }: PageTitleProps) {
  return (
    <section id="page-title" className="relative h-[400px] bg-gray-900 flex items-center justify-center overflow-hidden">
      <div className={`absolute inset-0 ${backgroundClass}`}>
        <img
          src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=1920&h=1080&fit=crop"
          alt="Background"
          className="w-full h-full object-cover opacity-30"
        />
      </div>
      <div className="relative z-10 text-center text-white">
        <h2 className="text-6xl font-light tracking-[0.2em] mb-4">
          {title}
          <br />
          <span className="text-xl font-normal tracking-normal opacity-80">
            {subtitle}
          </span>
        </h2>
      </div>
      <a
        href="/"
        className="absolute top-8 left-8 z-20"
      >
        <img
          src="https://infinityinc.jp/wp-content/themes/infinityinc/image/logo-openning.png"
          alt="Infinity Inc."
          className="h-12 opacity-80 hover:opacity-100 transition-opacity"
        />
      </a>
    </section>
  );
}