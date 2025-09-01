/* Extracted from index.html inline script */
(function () {
  // Use global get_text from common.js

  function formatFooter(template, year) {
    return template.replace("{year}", year);
  }

  // Helper to convert markdown-style links to React elements
  function parseLinks(text) {
    var parts = [];
    var regex = /\[([^\]]+)\]\(([^)]+)\)/g;
    var lastIndex = 0;
    var match;

    while ((match = regex.exec(text)) !== null) {
      if (match.index > lastIndex) {
        parts.push(text.slice(lastIndex, match.index));
      }
      parts.push(
        React.createElement(
          "a",
          { href: match[2], target: "_blank", rel: "noopener noreferrer" },
          match[1]
        )
      );
      lastIndex = regex.lastIndex;
    }

    if (lastIndex < text.length) {
      parts.push(text.slice(lastIndex));
    }

    return parts.length === 1 && typeof parts[0] === "string"
      ? parts[0]
      : parts;
  }

  function Main() {
    return React.createElement(
      "main",
      { className: "main" },
      React.createElement(
        "section",
        { className: "hero" },
        React.createElement(
          "div",
          { className: "hero-card" },
          React.createElement(
            "h1",
            { className: "hero-title" },
            (window.get_text && window.get_text("landing.hero.title")) || ""
          ),
          React.createElement(
            "div",
            { className: "hero-authors" },
            (window.get_text && window.get_text("landing.hero.authors")) || ""
          ),
          React.createElement(
            "p",
            { className: "hero-sub" },
            (window.get_text && window.get_text("landing.hero.subtitle")) || ""
          ),
          // React.createElement('div', { className: 'pub-info' },
          //   React.createElement('div', { className: 'pub-info-title' }, 'Publication Information'),
          //   React.createElement('p', null, 'Placeholder: publication details (publisher, edition, ISBN, publication date) will go here.')
          // ),
          React.createElement(
            "div",
            { className: "citation-info" },
            React.createElement(
              "code",
              { style: { whiteSpace: "pre-wrap" } },
              String.raw` @book{ldrdd2025,
  title={Learning Deep Representations of Data Distributions},
  author={Buchanan, Sam and Pai, Druv and Wang, Peng and Ma, Yi},
  month=aug,
  year={2025},
  publisher={Online},
  note={\url{https://ma-lab-berkeley.github.io/deep-representation-learning-book/}.}
}`
            )
          ),
          React.createElement(
            "div",
            { className: "cta-row" },
            React.createElement(
              "a",
              { className: "btn", href: "Chx1.html" },
              (window.get_text &&
                window.get_text("landing.hero.buttons.readHtml")) ||
                ""
            ),
            React.createElement(
              "a",
              { className: "btn", href: window.BOOK_COMPONENTS.bookPdfPath },
              (window.get_text &&
                window.get_text("landing.hero.buttons.readPdf")) ||
                ""
            ),
            React.createElement(
              "a",
              {
                className: "btn secondary",
                href: "https://github.com/Ma-Lab-Berkeley/deep-representation-learning-book",
                target: "_blank",
                rel: "noopener noreferrer",
              },
              (window.get_text &&
                window.get_text("landing.hero.buttons.github")) ||
                ""
            )
          )
        ),
        React.createElement(
          "div",
          { className: "hero-figure" },
          React.createElement(
            "a",
            {
              className: "cover-ph",
              href: "Chx1.html",
              title:
                (window.get_text &&
                  window.get_text("landing.hero.cover.title")) ||
                "",
            },
            React.createElement("img", {
              className: "cover-img",
              src: window.BOOK_COMPONENTS.coverImagePath,
              alt:
                (window.get_text &&
                  window.get_text("landing.hero.cover.alt")) ||
                "",
              loading: "lazy",
            })
          ),
          React.createElement(
            "div",
            { className: "cover-version" },
            (window.get_text &&
              window.get_text("landing.hero.cover.version")) ||
              ""
          )
        )
      ),
      React.createElement(
        "section",
        { className: "sections" },
        React.createElement(
          "div",
          { className: "section-card" },
          React.createElement(
            "h3",
            null,
            (window.get_text &&
              window.get_text("landing.sections.about.title")) ||
              ""
          ),
          (function () {
            var paragraphs =
              (window.get_text &&
                window.get_text("landing.sections.about.paragraphs")) ||
              [];
            return paragraphs.map(function (p, i) {
              return React.createElement("p", { key: i }, parseLinks(p));
            });
          })()
        ),
        React.createElement(
          "div",
          { className: "section-card" },
          React.createElement(
            "h3",
            null,
            (window.get_text &&
              window.get_text("landing.sections.acknowledgements.title")) ||
              ""
          ),
          (function () {
            var paragraphs =
              (window.get_text &&
                window.get_text(
                  "landing.sections.acknowledgements.paragraphs"
                )) ||
              [];
            var grants =
              (window.get_text &&
                window.get_text("landing.sections.acknowledgements.grants")) ||
              [];
            var elements = [];
            elements.push(
              React.createElement("p", { key: "p1" }, paragraphs[0])
            );
            elements.push(
              React.createElement(
                "ul",
                { key: "grants" },
                grants.map(function (grant, i) {
                  // Convert *text* to <em>text</em>
                  var parts = grant.split("*");
                  var content = [];
                  for (var j = 0; j < parts.length; j++) {
                    if (j % 2 === 0) {
                      content.push(parts[j]);
                    } else {
                      content.push(
                        React.createElement("em", { key: j }, parts[j])
                      );
                    }
                  }
                  return React.createElement("li", { key: i }, content);
                })
              )
            );
            elements.push(
              React.createElement("p", { key: "p2" }, paragraphs[1])
            );
            return elements;
          })()
        )
        // React.createElement('div', { className: 'section-card' },
        //   React.createElement('h3', null, 'Citation'),
        //   React.createElement('p', null, 'Placeholder: citation information and BibTeX entry will be provided here.')
        // )
      ),
      React.createElement(
        "div",
        { className: "footer" },
        formatFooter(
          (window.get_text && window.get_text("ui.footer")) || "",
          new Date().getFullYear()
        )
      )
    );
  }

  function App() {
    return React.createElement(
      "div",
      { className: "app-shell" },
      React.createElement(Main, null)
    );
  }

  ReactDOM.createRoot(document.getElementById("root")).render(
    React.createElement(App)
  );
  if (window.insertTopBar) {
    try {
      window.insertTopBar(
        Object.assign({}, window.TOPBAR_OPTIONS || {}, { forceReplace: true })
      );
    } catch (e) {}
  }
  if (window.insertSidebar) {
    try {
      window.insertSidebar(".app-shell", window.NAV_LINKS, window.TOC);
    } catch (e) {}
  }
})();
