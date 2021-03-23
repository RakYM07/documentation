import React from "react";
import Layout from "@theme/Layout";
import Header from "../components/Header";
import Overview from "../components/Overview";
import QuickReads from "../components/QuickReads";
import Community from "../components/Community";
import StillNotFind from "../components/StillNotFind";
import Footer from "../core/Footer";
import styles from "./styles.module.css";

const Cookbooks = () => {
  const overviews = [
    {
      title: "Yellow messenger academy",
      description: "Companion guides for yellowmessenger academy participants.",
      to: "/docs/cookbooks/Academy",
    },
    {
      title: "Getting started with “Hello world",
      description: "Get onboarded on yellow messenger!",
      to: "/docs/cookbooks/getting_started",
    },
    {
      title: "Understanding database actions",
      description: "How to add records in database.",
      to: "/docs/cookbooks/data-layer",
    },
    {
      title: "Document cognition",
      description: "Answering queries from documents.",
      to: "/docs/cookbooks/document_cognition",
    },
    {
      title: "Building your first bot",
      description: "Building a bot which can generate leads for you.",
      to: "/docs/cookbooks/lead-gen-bot",
    },
    {
      title: "Agent augmentation",
      description: "Transfer a chat to an agent.",
      to: "/docs/cookbooks/transfer_chat",
    },
  ];

  return (
    <Layout
      title="Cookbooks"
      description="zero to one of building bots for simple usecases at lightening speed."
    >
      <main className={styles.main_wrapper}>
        <Header
          title="Cookbooks"
          description="zero to one of building bots for simple usecases at lightening speed."
          placeholder="Search Cookbooks"
        />
        <section className={styles.section_container}>
          <h2 className={styles.overview_title}>Overview</h2>
          <div className={styles.contents}>
            <div className={styles.details}>
              {overviews.map((overview, index) => (
                <Overview
                  key={index}
                  title={overview.title}
                  description={overview.description}
                  path={overview.to}
                />
              ))}
            </div>
            <div className={styles.right_sidebar}>
              <QuickReads
                list={[
                  "Campaigns using audience API",
                  "Platform API",
                  "Bot events",
                  "User events",
                  "Analytics events",
                ]}
              />
              <Community />
            </div>
          </div>
        </section>
        <StillNotFind />
      </main>
      <Footer />
    </Layout>
  );
};

export default Cookbooks;
