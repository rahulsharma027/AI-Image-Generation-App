import React from "react";
import Article from "../../components/article/Article";
import { blog1, blog02, blog03, blog04, blog05 } from "./imports";
import "./blog.css";

const Blog = () => (
  <div className="ai__blog section__padding" id="blog">
    <div className="ai__blog-heading">
      <h1 className="gradient__text">
        A lot is happening, <br /> We are blogging about it.
      </h1>
    </div>
    <div className="ai__blog-container">
      <div className="ai__blog-container_groupA">
        <Article
          imgUrl={blog1}
          date="Nov 6, 2023"
          text="Dall-E 3 vs Stable Diffusion vs Midjourney"
        />
      </div>
      <div className="ai__blog-container_groupB">
        <Article
          imgUrl={blog02}
          date="Sep 21, 2023"
          text="Pros and cons of the latest AI-generated content"
        />
        <Article
          imgUrl={blog03}
          date="Sep 14, 2023"
          text="What is generative AI and why is it so popular? Here's everything you need to know"
        />
        <Article
          imgUrl={blog04}
          date="Jun 20, 2023"
          text="How to use Stable Diffusion AI to create amazing images"
        />
        <Article
          imgUrl={blog05}
          date="Apr 16, 2023"
          text="Top 5 AI Image Generators of 2023"
        />
      </div>
    </div>
  </div>
);

export default Blog;
