import { Home } from "lucide-react";

interface BreadcrumbProps {
  items: Array<{
    label: string;
    href?: string;
  }>;
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <div className="bg-gray-50 py-4">
      <div className="max-w-7xl mx-auto px-6">
        <ul className="flex items-center space-x-2 text-sm">
          <li>
            <a href="/" className="flex items-center text-gray-600 hover:text-black">
              <Home className="w-4 h-4" />
            </a>
          </li>
          {items.map((item, index) => (
            <li key={index} className="flex items-center">
              <span className="mx-2 text-gray-400">/</span>
              {item.href ? (
                <a href={item.href} className="text-gray-600 hover:text-black">
                  {item.label}
                </a>
              ) : (
                <span className="text-gray-800">{item.label}</span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}