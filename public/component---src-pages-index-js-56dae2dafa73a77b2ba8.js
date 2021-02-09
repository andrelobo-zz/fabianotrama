(window.webpackJsonp = window.webpackJsonp || []).push([
  [9],
  {
    DL4o: function(e, t, a) {},
    DNPW: function(e, t, a) {
      "use strict";
      var n = a("dI71"),
        r = a("q1tI"),
        o = a.n(r),
        s = a("Wbzz"),
        c = a("LvDl"),
        l = a.n(c),
        i = (function(e) {
          function t() {
            return e.apply(this, arguments) || this;
          }
          return (
            Object(n.a)(t, e),
            (t.prototype.render = function() {
              var e = this.props.tags;
              return o.a.createElement(
                "div",
                { className: "post-card-tags" },
                e &&
                  e.map(function(e) {
                    return o.a.createElement(
                      "span",
                      { key: e },
                      o.a.createElement(
                        s.Link,
                        {
                          className: "post-card-tag-link",
                          key: e,
                          to: "/tags/" + l.a.kebabCase(e)
                        },
                        "#",
                        e
                      ),
                      " "
                    );
                  })
              );
            }),
            t
          );
        })(r.Component),
        d =
          ((t.a = function(e) {
            return o.a.createElement(
              "article",
              {
                className:
                  "post-card " +
                  (e.count % 3 == 0 && "post-card-large") +
                  " " +
                  e.postClass +
                  " " +
                  (e.node.frontmatter.thumbnail ? "with-image" : "no-image"),
                style: e.node.frontmatter.thumbnail && {
                  backgroundImage:
                    "url(" +
                    e.node.frontmatter.thumbnail.childImageSharp.fluid.src +
                    ")"
                }
              },
              e.node.frontmatter.thumbnail
                ? o.a.createElement(p, { props: e })
                : o.a.createElement(d, { props: e })
            );
          }),
          (function(e) {
            function t() {
              return e.apply(this, arguments) || this;
            }
            return (
              Object(n.a)(t, e),
              (t.prototype.render = function() {
                var e = this.props.props;
                return o.a.createElement(
                  "div",
                  { className: "post-card-content" },
                  o.a.createElement(
                    "div",
                    null,
                    o.a.createElement(i, { tags: e.node.frontmatter.tags })
                  ),
                  o.a.createElement(
                    "div",
                    null,
                    o.a.createElement(
                      s.Link,
                      { to: e.node.fields.slug, className: "post-card-link" },
                      o.a.createElement(
                        "h2",
                        { className: "post-card-title" },
                        e.node.frontmatter.title || e.node.fields.slug
                      )
                    )
                  ),
                  o.a.createElement(
                    "div",
                    { className: "post-card-date" },
                    e.node.frontmatter.date
                  ),
                  o.a.createElement(
                    "div",
                    { className: "post-card-body" },
                    e.node.frontmatter.description || e.node.excerpt
                  ),
                  o.a.createElement(
                    "div",
                    null,
                    o.a.createElement(
                      s.Link,
                      {
                        to: e.node.fields.slug,
                        className: "post-card-link post-card-readmore"
                      },
                      e.node.frontmatter.description || e.node.excerpt
                        ? "Read more"
                        : null
                    )
                  )
                );
              }),
              t
            );
          })(r.Component)),
        p = (function(e) {
          function t() {
            return e.apply(this, arguments) || this;
          }
          return (
            Object(n.a)(t, e),
            (t.prototype.render = function() {
              var e = this.props.props;
              return o.a.createElement(
                s.Link,
                { to: e.node.fields.slug, className: "post-card-link" },
                o.a.createElement(
                  "div",
                  { className: "post-card-content" },
                  o.a.createElement(
                    "h2",
                    { className: "post-card-title" },
                    e.node.frontmatter.title || e.node.fields.slug
                  )
                )
              );
            }),
            t
          );
        })(r.Component);
    },
    RXBc: function(e, t, a) {
      "use strict";
      a.r(t);
      var n = a("q1tI"),
        r = a.n(n),
        o = a("Wbzz"),
        s = a("Bl7J"),
        c = a("vrFN"),
        l = a("DNPW"),
        i =
          (a("DL4o"),
          a("jk3P"),
          function(e, t) {
            var a = e.data,
              n = a.site.siteMetadata.title,
              o = a.allMarkdownRemark.edges,
              i = 0;
            return r.a.createElement(
              s.a,
              { title: n },
              r.a.createElement(c.a, {
                title: "Posts",
                keywords: ["devlog", "blog", "gatsby", "javascript", "react"]
              }),
              a.site.siteMetadata.description &&
                r.a.createElement(
                  "header",
                  { className: "page-head" },
                  r.a.createElement(
                    "h2",
                    { className: "page-head-title" },
                    a.site.siteMetadata.description
                  )
                ),
              r.a.createElement(
                "div",
                { className: "post-feed" },
                o.map(function(e) {
                  var t = e.node;
                  return (
                    i++,
                    r.a.createElement(l.a, {
                      key: t.fields.slug,
                      count: i,
                      node: t,
                      postClass: "post"
                    })
                  );
                })
              )
            );
          });
      t.default = function(e) {
        return r.a.createElement(o.StaticQuery, {
          query: "2086240406",
          render: function(t) {
            return r.a.createElement(
              i,
              Object.assign({ location: e.location, props: !0, data: t }, e)
            );
          }
        });
      };
    },
    YuTi: function(e, t) {
      e.exports = function(e) {
        return (
          e.webpackPolyfill ||
            ((e.deprecate = function() {}),
            (e.paths = []),
            e.children || (e.children = []),
            Object.defineProperty(e, "loaded", {
              enumerable: !0,
              get: function() {
                return e.l;
              }
            }),
            Object.defineProperty(e, "id", {
              enumerable: !0,
              get: function() {
                return e.i;
              }
            }),
            (e.webpackPolyfill = 1)),
          e
        );
      };
    },
    jk3P: function(e, t, a) {}
  }
]);
//# sourceMappingURL=component---src-pages-index-js-56dae2dafa73a77b2ba8.js.map
