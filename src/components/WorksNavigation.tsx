interface WorksNavigationProps {
  categories: Array<{
    id: string;
    label: string;
    href: string;
  }>;
}

export function WorksNavigation({ categories }: WorksNavigationProps) {
  return (
    <div className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6">
        <ul className="flex flex-wrap justify-center gap-8 py-6">
          {categories.map((category) => (
            <li key={category.id}>
              <a
                href={category.href}
                className="text-sm font-medium text-gray-600 hover:text-black transition-colors tracking-wider"
              >
                {category.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}