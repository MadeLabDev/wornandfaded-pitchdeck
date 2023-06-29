import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `nguyenApp`,
    siteUrl: `https://nguyenpham.pro`
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    'gatsby-plugin-postcss',
    'gatsby-plugin-open-graph-images',
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp", 
    "gatsby-plugin-sitemap", {
      resolve: 'gatsby-plugin-manifest',
      options: {
        "icon": "src/favicon/apple-icon.png"
      }
    }, 
    "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/assets/"
    },
    __key: "images"
  }]
};

export default config;
