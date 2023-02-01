import React, { useState, useEffect } from "react";
// SERVICE
import MediathequeService from "src/modules/mediatheque/MediathequeService";
// COMPONENTS
import HeroSectionStyle from "./styles/HeroSectionStyle";
import NewContent from "./NewContent";
import MainSplide from "./MainSplide";
// PACKAGES
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { i18n } from "src/i18n";

export default function HeroSection() {
  // STATES
  const [posts, setPosts] = useState([]);
  const [hotPosts, setHotPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  // ===== HELPER FUNCTIONS =====
  const limitEntriesTo = (value, number, entity) => {
    value.rows?.map((entry, index) => {
      if (index < number) {
        if (entity === "hot") setHotPosts((hotPosts) => hotPosts.concat(entry));
      }
    });
  };

  // FETCHING LATEST POSTS (ALL TYPES)
  const getLatestContent = () => {
    MediathequeService.getLatestMediatheques().then((value) => {
      setPosts(value);
      limitEntriesTo(value, 3, "hot");
      setLoading(false);
    });
  };

  useEffect(() => {
    getLatestContent();
  }, []);

  return (
    <HeroSectionStyle>
      {/* SLIDER */}
      <section className="splideContent">
        {loading ? (
          <Skeleton height={507} />
        ) : (
          <section>
            {hotPosts.length > 0 ? (
              <MainSplide data={hotPosts} />
            ) : (
              <h2>{i18n("common.noData")}</h2>
            )}
          </section>
        )}
      </section>
      {/* GRID RIGHT UNDER THE SLIDER */}
      <section className="bottomGrid">
        {loading ? (
          <div className="loaderPlaceholder">
            <Skeleton height={350} className="customLoader" />
            <Skeleton height={350} className="customLoader" />
            <Skeleton height={350} className="customLoader" />
          </div>
        ) : (
          <section>
            {hotPosts.length > 0 ? (
              <NewContent data={posts} />
            ) : (
              <h2 style={{ textAlign: "center", color: "#fff" }}>
                {i18n("common.noData")}
              </h2>
            )}
          </section>
        )}
      </section>
    </HeroSectionStyle>
  );
}
