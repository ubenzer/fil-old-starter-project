"use strict";
var config = {
  build: {
    contentPath: "./contents",
    skeletonPath: ".",
    buildPath: "./dist",
    siteBuildScript: "npm run compile"
  },
  collections: {
    config: {
      collectionsPermalink: "/collections",
      collectionPermalink: "/:collection",
      categoryFirstPermalink: "/:collection/:category",
      categoryPermalink: "/:collection/:category/:page",
      pagination: 4,
      categorySorting: {
        sortBy: "id", // contentCount customFn(content1, content2) return -1. 0, 1
        reverse: true
      },
      contentSorting: {
        sortBy: "date", // id, date, title, customFn(post1, post2) returns -1, 0, 1
        reverse: true
      },
      subCategorySeparator: "/"
    },
    definition: [
      {
        id: "all",
        render: false, // don't produce output
        categoryFn: function () {
          return ["all"]; // returns category id for given content
        },
        templateOptions: {
          test: 123 // template specific json or customFn(content) return object
        },
        categoryFirstPermalink: "/",
        categoryPermalink: "/:page"
        // categoryIdToNameFn: string => string
      },
      {
        id: "monthly",
        categoryFn: function (content) {
          return [content.createDate.year() + "/" + (content.createDate.month()+1)];
        },
        categoryIdToNameFn: function (categoryId) {
          return "___" + categoryId + "___";
        }
      },
      {
        id: "category"
      }
    ]
  },
  template: {
    dateFormat: "LL",
    locale: "tr",
    siteName: "UBenzer",
    authorName: "Umut Benzer",
    authorShortBio: "Software Engineer in Berlin",
    readContent: "Devamını Oku",
    analyticsAccount: "UA-509698-8",
    googleAdClientId: "ca-pub-1459962636012287",
    featuredCategories: [  // Categories that will be shown on main navigation (ordered)
      "category/Programming",
      "category/Programming/SubCategory"
    ],
    enableComments: false
  },
  media: {
    defaultWidth: 500,
    imageWidths: [200, 500, 1000, 1500, 2000],
    imageExtensions: ["webp"]
  },
  content: {
    permalink: "/:year/:month/:title", // permalink for content folder. it'll create index.html
    templateOptions: {
      // template specific json customFn(content) return object
    }
  },
  general: {
    baseUrl: "https://ubenzer.com", // used for canonical urls
  }
};

module.exports = config;
