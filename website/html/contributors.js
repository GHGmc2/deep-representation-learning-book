(function(){
  // Helper function to get localized text with fallback
  function getText(path, fallback) {
    try {
      var keys = path.split('.');
      var obj = window.BOOK_COMPONENTS;
      for (var i = 0; i < keys.length; i++) {
        obj = obj[keys[i]];
        if (!obj) return fallback;
      }
      return obj;
    } catch (e) {
      return fallback;
    }
  }

  function formatFooter(template, year) {
    return template.replace('{year}', year);
  }

  // Helper to get localized badge text
  function getBadgeText(badgeKey) {
    var badges = getText('contributors.badges', {});
    var mapping = {
      'Author': badges.author || 'Author',
      'Lead Editor': badges.leadEditor || 'Lead Editor', 
      'Senior Author': badges.seniorAuthor || 'Senior Author',
      'Website': badges.website || 'Website',
      'Chinese Translation': badges.chineseTranslation || 'Chinese Translation',
      'AI Helper': badges.aiHelper || 'AI Helper',
      'Chapter 1': badges.chapter1 || 'Chapter 1',
      'Chapter 2': badges.chapter2 || 'Chapter 2',
      'Chapter 3': badges.chapter3 || 'Chapter 3',
      'Chapter 4': badges.chapter4 || 'Chapter 4',
      'Chapter 5': badges.chapter5 || 'Chapter 5',
      'Chapter 6': badges.chapter6 || 'Chapter 6',
      'Chapter 7': badges.chapter7 || 'Chapter 7',
      'Chapter 8': badges.chapter8 || 'Chapter 8',
      'Appendix A': badges.appendixA || 'Appendix A',
      'Appendix B': badges.appendixB || 'Appendix B'
    };
    return mapping[badgeKey] || badgeKey;
  }

  // Helper to map badge arrays to localized text
  function mapBadges(badges) {
    return badges.map(function(badge) { return getBadgeText(badge); });
  }

  const AUTHORS = [
    { name: 'Sam Buchanan', affil: 'Toyota Technological Institute at Chicago', badges: mapBadges(['Author', 'Lead Editor']) },
    { name: 'Druv Pai', affil: 'University of California, Berkeley', badges: mapBadges(['Author', 'Lead Editor', 'Website']) },
    { name: 'Peng Wang', affil: 'University of Macau', badges: mapBadges(['Author', 'Lead Editor', 'Chinese Translation']) },
    { name: 'Yi Ma', affil: 'University of Hong Kong', badges: mapBadges(['Senior Author', 'Lead Editor', 'Chinese Translation']) },
  ];

  const BOOK_CONTRIBUTORS = [
    { name: 'Yaodong Yu', affil: 'University of Maryland, College Park', badges: mapBadges(['Chapter 4']) }
  ];

  const MINOR_BOOK_CONTRIBUTORS = [
    { name: 'Alan Lockett', affil: '', badges: mapBadges(['Chapter 1'])}
  ];

  const INFRA_CONTRIBUTORS = [
    { name: 'Ziyang Wu', affil: 'University of California, Berkeley', badges: mapBadges(['Website']) },
    { name: 'Tianzhe Chu', affil: 'University of Hong Kong', badges: mapBadges(['AI Helper', 'Chinese Translation']) }
  ];

  const TRANSLATION_CONTRIBUTORS = [
    { name: 'Kerui Min', affil: 'MetaSOTA', badges: mapBadges(['Chinese Translation']) }
  ];

  // Top bar and sidebar are inserted by common.js

  function Badges({ items }) {
    if (!items || !items.length) return null;
    return React.createElement('div', { className: 'badges' }, items.map((b, i) => React.createElement('span', { className: 'badge', key: i }, b)));
  }

  function Card({ name, affil, badges }) {
    return (
      React.createElement('div', { className: 'card' },
        React.createElement('div', { className: 'name' }, name),
        React.createElement('p', { className: 'affil' }, affil),
        React.createElement(Badges, { items: badges })
      )
    );
  }

  function Main() {
    return (
      React.createElement('main', { className: 'page' },
        React.createElement('h1', null, getText('contributors.title', 'Contributors')),
        React.createElement('p', { className: 'intro' }, getText('contributors.intro', 'Core authors and contributors of the book.')),
        React.createElement('section', { 'aria-label': 'Core Team', className: 'authors-grid' },
          React.createElement('h2', { style: { margin: '16px 0 8px', fontSize: '18px' } }, getText('contributors.sections.coreTeam', 'Core Editorial Team')),
          AUTHORS.map((p) => React.createElement(Card, { key: p.name, ...p }))
        ),
        React.createElement('section', { 'aria-label': 'Book Contributors', className: 'authors-grid' },
          React.createElement('h2', { style: { margin: '16px 0 8px', fontSize: '18px' } }, getText('contributors.sections.bookContributors', 'Book Contributors')),
          BOOK_CONTRIBUTORS.map((p) => React.createElement(Card, { key: p.name, ...p }))
        ),
        React.createElement('section', { 'aria-label': 'Minor Book Contributors', className: 'authors-grid' },
          React.createElement('h2', { style: { margin: '16px 0 8px', fontSize: '18px' } }, getText('contributors.sections.minorBookContributors', 'Minor Book Contributors')),
          MINOR_BOOK_CONTRIBUTORS.map((p) => React.createElement(Card, { key: p.name, ...p }))
        ),
        React.createElement('section', { 'aria-label': 'Website/Infrastructure Contributors', className: 'authors-grid' },
          React.createElement('h2', { style: { margin: '16px 0 8px', fontSize: '18px' } }, getText('contributors.sections.infraContributors', 'Website/Infrastructure Contributors')),
          INFRA_CONTRIBUTORS.map((p) => React.createElement(Card, { key: p.name, ...p }))
        ),
        React.createElement('section', { 'aria-label': 'Translation Contributors', className: 'authors-grid' },
          React.createElement('h2', { style: { margin: '16px 0 8px', fontSize: '18px' } }, getText('contributors.sections.translationContributors', 'Translation Contributors')),
          TRANSLATION_CONTRIBUTORS.map((p) => React.createElement(Card, { key: p.name, ...p }))
        ),
        React.createElement('div', { className: 'foot' }, formatFooter(getText('contributors.footer', '© {year} Sam Buchanan, Druv Pai, Peng Wang, and Yi Ma. All rights reserved.'), new Date().getFullYear()))
      )
    );
  }

  function App() {
    return (
      React.createElement('div', { className: 'layout-with-sidebar' },
        React.createElement(Main, null)
      )
    );
  }

  ReactDOM.createRoot(document.getElementById('root')).render(React.createElement(App));
  // if (window.insertTopBar) { try { window.insertTopBar(Object.assign({}, window.TOPBAR_OPTIONS || {}, { forceReplace: true })); } catch(e) {} }
  // if (window.insertSidebar) { try { window.insertSidebar('.layout-with-sidebar', window.NAV_LINKS, window.TOC); } catch(e) {} }
})();
