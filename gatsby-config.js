require("dotenv").config({
  path: ".env",
});

const shouldAnalyseBundle = process.env.ANALYSE_BUNDLE;

module.exports = {
  siteMetadata: {
    siteTitle: "Weslley Araujo",
    siteTitleAlt: "Weslley Araujo",
    siteUrl: "https://weslleyaraujo.dev",
    author: "@_weslleyaraujo",
    siteLanguage: "en",
  },
  plugins: [
    {
      resolve: "@lekoarts/gatsby-theme-minimal-blog",
      // See the theme's README for all available options
      options: {
        navigation: [
          {
            title: "Blog",
            slug: "/blog",
          },
          {
            title: "About",
            slug: "/about",
          },
        ],
        externalLinks: [
          {
            name: "Twitter",
            url: "https://twitter.com/_weslleyaraujo",
          },
          {
            name: "Linkedin",
            url: "https://www.linkedin.com/in/araujoweslley",
          },
          {
            name: "Github",
            url: "https://github.com/weslleyaraujo",
          },
        ],
      },
    },
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID,
      },
    },
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Weslley Araujo",
        short_name: "Weslley Araujo",
        start_url: "/",
        background_color: "#fff",
        theme_color: "#6B46C1",
        display: "standalone",
        icons: [
          {
            src: "/android-chrome-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/android-chrome-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
    },
    "gatsby-plugin-offline",
    "gatsby-plugin-netlify",
    shouldAnalyseBundle && {
      resolve: "gatsby-plugin-webpack-bundle-analyser-v2",
      options: {
        analyzerMode: "static",
        reportFilename: "_bundle.html",
        openAnalyzer: false,
      },
    },
  ].filter(Boolean),
};
