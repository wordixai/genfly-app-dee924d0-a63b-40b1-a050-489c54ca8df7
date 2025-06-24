import { PageTitle } from "@/components/PageTitle";
import { Breadcrumb } from "@/components/Breadcrumb";
import { WorksNavigation } from "@/components/WorksNavigation";
import { WorksSection } from "@/components/WorksSection";
import {
  worksCategories,
  hospitalityWorks,
  residentialWorks,
  workplaceWorks,
  retailWorks,
  furnitureWorks,
  expo2025Works,
} from "@/data/worksData";

const Index = () => {
  const breadcrumbItems = [
    { label: "施工事例" },
  ];

  return (
    <div className="min-h-screen bg-white">
      <PageTitle
        title="WORKS"
        subtitle="施工事例"
        backgroundClass="title-back-works"
      />
      
      <Breadcrumb items={breadcrumbItems} />
      
      <div className="hidden md:block">
        <WorksNavigation categories={worksCategories} />
      </div>
      
      <main className="pb-20">
        <WorksSection
          id="works-food"
          title="HOSPITALITY"
          subtitle="施設"
          works={hospitalityWorks}
        />
        
        <WorksSection
          id="works-house"
          title="RESIDENTIAL"
          subtitle="住宅"
          works={residentialWorks}
        />
        
        <WorksSection
          id="works-office"
          title="WORKPLACE"
          subtitle="オフィス"
          works={workplaceWorks}
        />
        
        <WorksSection
          id="works-shop"
          title="RETAIL"
          subtitle="物販店"
          works={retailWorks}
        />
        
        <WorksSection
          id="works-other"
          title="FURNITURE"
          subtitle="家具・商材"
          works={furnitureWorks}
        />
        
        <WorksSection
          id="works-expo"
          title="EXPO 2025"
          subtitle="大阪万博2025"
          works={expo2025Works}
        />
      </main>
    </div>
  );
};

export default Index;