(function(){
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

  function Section({ idKey }){
    var title = getText('community.sections.' + idKey, idKey);
    var content = getText('community.content.' + idKey, getText('community.pending', 'Pending.'));
    return (
      React.createElement('section', { className: 'text-section', 'aria-label': title },
        React.createElement('h2', null, title),
        React.createElement('p', null, content)
      )
    );
  }

  function Main(){
    return (
      React.createElement('main', { className: 'page' },
        React.createElement('h1', null, getText('community.title', 'Community')),
        React.createElement('p', { className: 'intro' }, getText('community.intro', 'Community resources (pending).')),
        React.createElement(Section, { idKey: 'slides' }),
        React.createElement(Section, { idKey: 'talks' }),
        React.createElement(Section, { idKey: 'code' }),
        React.createElement(Section, { idKey: 'translations' }),
        React.createElement('div', { className: 'foot' }, formatFooter(getText('community.footer', '© {year} Sam Buchanan, Druv Pai, Peng Wang, and Yi Ma. All rights reserved.'), new Date().getFullYear()))
      )
    );
  }

  function App(){
    return (
      React.createElement('div', { className: 'layout-with-sidebar' },
        React.createElement(Main, null)
      )
    );
  }

  ReactDOM.createRoot(document.getElementById('root')).render(React.createElement(App));
})();


