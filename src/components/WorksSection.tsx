import { Search } from "lucide-react";

interface WorkItem {
  id: string;
  title: string;
  image: string;
  href: string;
}

interface WorksSectionProps {
  id: string;
  title: string;
  subtitle: string;
  works: WorkItem[];
}

export function WorksSection({ id, title, subtitle, works }: WorksSectionProps) {
  return (
    <section id={id} className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-light tracking-[0.2em] text-center mb-4 fade-up">
          {title}
          <span className="block text-lg font-normal text-gray-600 mt-2 tracking-normal">
            {subtitle}
          </span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-12 fade-up">
          {works.map((work) => (
            <div key={work.id} className="works-list-box group">
              <a href={work.href} className="block">
                <div className="works-list-box-pic relative overflow-hidden rounded-lg aspect-[4/3]">
                  <img
                    src={work.image}
                    alt={work.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <span className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-12 h-12 bg-black bg-opacity-70 rounded-full flex items-center justify-center">
                      <Search className="w-5 h-5 text-white" />
                    </div>
                  </span>
                </div>
                <h3 className="text-center mt-4 text-sm font-medium text-gray-800 group-hover:text-black transition-colors">
                  {work.title}
                </h3>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}