import React, { ReactElement } from "react";
import { NextPageWithLayout } from "../_app";
import MainLayout from "../../layout/MainLayout";
import GlobalLayout from "../../layout/GlobalLayout";

const Blog: NextPageWithLayout = () => {
  return <div>Blog</div>;
};

Blog.getLayout = (page: ReactElement) => {
  return (
    <MainLayout>
      <GlobalLayout>{page}</GlobalLayout>
    </MainLayout>
  );
};

export default Blog;
