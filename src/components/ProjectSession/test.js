<nav className="d-flex p-3">
              <TabSelector
                isActive={selectedTab === "account"}
                onClick={() => setSelectedTab("account")}
                style={{}}
              >
                All
              </TabSelector>
              <TabSelector
                isActive={selectedTab === "company"}
                onClick={() => setSelectedTab("company")}
              >
                Graphic Design
              </TabSelector>
              <TabSelector
                isActive={selectedTab === "team"}
                onClick={() => setSelectedTab("team")}
              >
                SEO{" "}
              </TabSelector>
              <TabSelector
                isActive={selectedTab === "billing"}
                onClick={() => setSelectedTab("billing")}
              >
                Web Design
              </TabSelector>
            </nav>




