/**
 * Configuration for head elements added during the creation of index.html.
 *
 * All href attributes are added the publicPath (if exists) by default.
 * You can explicitly hint to prefix a publicPath by setting a boolean value to a key that has
 * the same name as the attribute you want to operate on, but prefix with =
 *
 * Example:
 * { name: "msapplication-TileImage", content: "/assets/icon/ms-icon-144x144.png", "=content": true },
 * Will prefix the publicPath to content.
 *
 * { rel: "apple-touch-icon", sizes: "57x57", href: "/assets/icon/apple-icon-57x57.png", "=href": false },
 * Will not prefix the publicPath on href (href attributes are added by default
 *
 */
module.exports = {
  link: [
    /** <link> tags for "apple-touch-icon" (AKA Web Clips). **/
    { rel: "apple-touch-icon", sizes: "57x57", href: "/assets/img/favicons/favicon-57.png" },
    { rel: "apple-touch-icon", sizes: "72x72", href: "/assets/img/favicons/favicon-72.png" },
    { rel: "apple-touch-icon", sizes: "114x114", href: "/assets/img/favicons/favicon-114.png" },
    { rel: "apple-touch-icon", sizes: "114x114", href: "/assets/img/favicons/favicon-144.png" },

    /** <link> tags for android web app icons **/
    { rel: "icon", type: "image/png", sizes: "192x192", href: "/assets/img/favicons/favicon-192.png" },

    /** <link> tags for favicons **/
    { rel: "icon", href: "/assets/img/favicons/favicon.ico" },

    /** <link> tags for a Web App Manifest **/
    { rel: "manifest", href: "/assets/manifest.json" }
  ],
  meta: [
    { name: "msapplication-TileColor", content: "#00bcd4" },
    { name: "msapplication-TileImage", content: "/assets/img/favicons/favicon-144.png", "=content": true },
    { name: "theme-color", content: "#00bcd4" }
  ]
};
