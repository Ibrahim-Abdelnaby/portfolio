// Import CSS file
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import "./portfolio.css";
function Portfolio() {
  return (
    <>
      <section id="portfolio">
        <div className="box">
          <div className="portfolio-box">
            <h2 className="neue title">Portfolio</h2>
            {/* Navigation Tabs */}
            <Tabs defaultValue="account">
              <TabsList className="tablist">
                <TabsTrigger
                  value="UI/UX Design"
                  className="tab-trigger active"
                >
                  UI/UX Design
                </TabsTrigger>
                <TabsTrigger
                  value="Front-End Development"
                  className="tab-trigger"
                >
                  Front-End Development
                </TabsTrigger>
              </TabsList>
              <TabsContent value="UI/UX Design">
                {/* UI/UX Projects */}
                <div className="contnt-box">
                  <div className="content"></div>
                  <div className="content"></div>
                </div>
              </TabsContent>
              <TabsContent value="Front-End Development">
                {/* Front-End Development */}
                <div className="contnt-box">
                  <div className="content"></div>
                  <div className="content"></div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>
    </>
  );
}

export default Portfolio;
