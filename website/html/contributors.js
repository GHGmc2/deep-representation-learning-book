(function () {
  // Use global get_text from common.js

  // Helper to fetch per-person localized description by id
  function getPersonDescription(personId) {
    if (!personId) return "";
    return (
      (window.get_text &&
        window.get_text("contributors.people." + personId + ".desc")) ||
      ""
    );
  }

  function formatFooter(template, year) {
    return template.replace("{year}", year);
  }

  // Badges removed. All labeling handled via localized descriptions in common_components.

  // People data per category.
  // Optional fields: url (personal site), id (for localized description lookup)
  const AUTHORS = [
    {
      id: "sam-buchanan",
      name: "Sam Buchanan",
      url: "https://sdbuchanan.com/",
      affil: "Toyota Technological Institute at Chicago",
    },
    {
      id: "druv-pai",
      name: "Druv Pai",
      url: "https://druvpai.github.io/",
      affil: "University of California, Berkeley",
    },
    {
      id: "peng-wang",
      name: "Peng Wang",
      url: "https://peng8wang.github.io/",
      affil: "University of Macau",
    },
    {
      id: "yi-ma",
      name: "Yi Ma",
      url: "https://people.eecs.berkeley.edu/~yima/",
      affil: "University of Hong Kong",
    },
  ];

  // const EDITORS = [
  //   // Editors list intentionally left empty for now; will be populated soon.
  // ];

  const CONTENT_CONTRIBUTORS = [
    { id: "alan-lockett", name: "Alan Lockett", url: "", affil: "" },
    {
      id: "kerui-min",
      name: "Kerui Min",
      url: "https://www.linkedin.com/in/kerui-min-b974b52a/",
      affil: "MetaSOTA",
    },
    {
      id: "kevin-murphy",
      name: "Kevin Murphy",
      url: "https://www.linkedin.com/in/kevin-murphy-20684115/",
      affil: "Google DeepMind",
    },
    {
      id: "yaodong-yu",
      name: "Yaodong Yu",
      url: "https://yaodongyu.github.io/",
      affil: "University of Maryland, College Park",
    },
  ];

  const INFRA_CONTRIBUTORS = [
    {
      id: "tianzhe-chu",
      name: "Tianzhe Chu",
      url: "https://tianzhechu.com/",
      affil: "University of Hong Kong",
    },
    {
      id: "ziyang-wu",
      name: "Ziyang Wu",
      url: "https://robinwu218.github.io/",
      affil: "University of California, Berkeley",
    },
  ];

  // Top bar and sidebar are inserted by common.js

  function Card({ id, name, url, affil }) {
    var description = getPersonDescription(id);
    return React.createElement(
      "div",
      { className: "card" },
      React.createElement(
        "div",
        { className: "name" },
        url
          ? React.createElement(
              "a",
              { href: url, target: "_blank", rel: "noopener noreferrer" },
              name
            )
          : name
      ),
      React.createElement("p", { className: "affil" }, affil),
      description
        ? React.createElement("p", {
            className: "desc",
            dangerouslySetInnerHTML: { __html: description },
          })
        : null
    );
  }

  function Main() {
    return React.createElement(
      "main",
      { className: "page" },
      React.createElement(
        "h1",
        null,
        (window.get_text && window.get_text("contributors.title")) || ""
      ),
      React.createElement(
        "p",
        { className: "intro" },
        (window.get_text && window.get_text("contributors.intro")) || ""
      ),
      React.createElement(
        "section",
        { "aria-label": "Authors", className: "authors-grid" },
        React.createElement(
          "h2",
          { style: { margin: "16px 0 8px", fontSize: "18px" } },
          (window.get_text &&
            window.get_text("contributors.sections.authors")) ||
            ""
        ),
        AUTHORS.map((p) => React.createElement(Card, { key: p.name, ...p }))
      ),
      // React.createElement('section', { 'aria-label': 'Editors', className: 'authors-grid' },
      //   React.createElement('h2', { style: { margin: '16px 0 8px', fontSize: '18px' } }, (window.get_text && window.get_text('contributors.sections.editors')) || ''),
      //   EDITORS.map((p) => React.createElement(Card, { key: p.name, ...p }))
      // ),
      React.createElement(
        "section",
        { "aria-label": "Content Contributors", className: "authors-grid" },
        React.createElement(
          "h2",
          { style: { margin: "16px 0 8px", fontSize: "18px" } },
          (window.get_text &&
            window.get_text("contributors.sections.contentContributors")) ||
            ""
        ),
        CONTENT_CONTRIBUTORS.map((p) =>
          React.createElement(Card, { key: p.name, ...p })
        )
      ),
      React.createElement(
        "section",
        {
          "aria-label": "Website/Infrastructure Contributors",
          className: "authors-grid",
        },
        React.createElement(
          "h2",
          { style: { margin: "16px 0 8px", fontSize: "18px" } },
          (window.get_text &&
            window.get_text("contributors.sections.infraContributors")) ||
            ""
        ),
        INFRA_CONTRIBUTORS.map((p) =>
          React.createElement(Card, { key: p.name, ...p })
        )
      ),
      React.createElement(
        "div",
        { className: "foot" },
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
      { className: "layout-with-sidebar" },
      React.createElement(Main, null)
    );
  }

  ReactDOM.createRoot(document.getElementById("root")).render(
    React.createElement(App)
  );
  // if (window.insertTopBar) { try { window.insertTopBar(Object.assign({}, window.TOPBAR_OPTIONS || {}, { forceReplace: true })); } catch(e) {} }
  // if (window.insertSidebar) { try { window.insertSidebar('.layout-with-sidebar', window.NAV_LINKS, window.TOC); } catch(e) {} }
})();
