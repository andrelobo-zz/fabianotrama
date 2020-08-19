const { hot } = require("react-hot-loader/root");

// prefer default export if available
const preferDefault = m => (m && m.default) || m;

exports.components = {
  "component---cache-dev-404-page-js": hot(
    preferDefault(
      require("/home/loboblanco/Área de Trabalho/fabianotramacombr/fabianotrama/.cache/dev-404-page.js")
    )
  ),
  "component---src-pages-404-js": hot(
    preferDefault(
      require("/home/loboblanco/Área de Trabalho/fabianotramacombr/fabianotrama/src/pages/404.js")
    )
  ),
  "component---src-pages-about-js": hot(
    preferDefault(
      require("/home/loboblanco/Área de Trabalho/fabianotramacombr/fabianotrama/src/pages/about.js")
    )
  ),
  "component---src-pages-index-js": hot(
    preferDefault(
      require("/home/loboblanco/Área de Trabalho/fabianotramacombr/fabianotrama/src/pages/index.js")
    )
  ),
  "component---src-pages-tags-js": hot(
    preferDefault(
      require("/home/loboblanco/Área de Trabalho/fabianotramacombr/fabianotrama/src/pages/tags.js")
    )
  ),
  "component---src-templates-blog-post-js": hot(
    preferDefault(
      require("/home/loboblanco/Área de Trabalho/fabianotramacombr/fabianotrama/src/templates/blog-post.js")
    )
  ),
  "component---src-templates-tag-page-js": hot(
    preferDefault(
      require("/home/loboblanco/Área de Trabalho/fabianotramacombr/fabianotrama/src/templates/tag-page.js")
    )
  )
};
