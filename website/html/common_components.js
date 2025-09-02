/* English language components for common.js */
(function () {
  window.BOOK_COMPONENTS = {
    // Navigation links
    nav: {
      aiTools: "AI Tools",
      aiHelpers: "AI Helpers",
      community: "Community",
      contributors: "Contributors",
      howToContribute: "How to Contribute?",
    },

    // Table of Contents
    toc: {
      preface: "Preface",
      chapter: "Chapter",
      appendix: "Appendix",
      chapters: {
        1: { title: "Chapter 1", subtitle: "An Informal Introduction" },
        2: {
          title: "Chapter 2",
          subtitle: "Learning Linear and Independent Structures",
        },
        3: {
          title: "Chapter 3",
          subtitle:
            "Pursuing Low-Dimensional Distributions via Lossy Compression",
        },
        4: {
          title: "Chapter 4",
          subtitle: "Deep Representations from Unrolled Optimization",
        },
        5: {
          title: "Chapter 5",
          subtitle: "Consistent and Self-Consistent Representations",
        },
        6: {
          title: "Chapter 6",
          subtitle: "Inference with Low-Dimensional Distributions",
        },
        7: {
          title: "Chapter 7",
          subtitle: "Learning Representations for Real-World Data",
        },
        8: { title: "Chapter 8", subtitle: "Future Study of Intelligence" },
      },
      appendices: {
        A: { title: "Appendix A", subtitle: "Optimization Methods" },
        B: {
          title: "Appendix B",
          subtitle: "Entropy, Diffusion, Denoising, and Lossy Coding",
        },
      },
    },

    // UI Labels
    ui: {
      bookTitle: "Learning Deep Representations of Data Distributions",
      langLabel: "EN",
      brandHref: "index.html",
      searchPlaceholder: "Search pages…",
      menu: "Menu",
      github: "GitHub",
      dateLocale: "en-US",
      lastUpdatedTemplate: "Last Updated: {date}",
      footer:
        "© {year} Sam Buchanan, Druv Pai, Peng Wang, and Yi Ma. All rights reserved.",
    },

    // AI Chat interface
    chat: {
      title: "Ask AI",
      clear: "Clear",
      close: "Close",
      send: "Send",
      chatWithAI: "Ask AI",
      includeSelection: "Include current text selection",
      selectionEmpty: "Select text on the page to include it as context.",
      placeholder:
        'Ask a question about this page…\n\nYou can also ask about specific content by appending:\n@chapter (e.g., "@3"), @chapter.section (e.g., "@3.1"), @chapter.section.subsection (e.g., "@3.1.2")\n@appendix (e.g., "@A"), @appendix.section (e.g., "@A.1"), @appendix.section.subsection (e.g., "@A.1.2")',
      systemPrompt:
        "You are an AI assistant helping readers of the book Learning Deep Representations of Data Distributions. Answer clearly and concisely. If relevant, point to sections or headings from the current page.",
      askAITitle: "Ask AI about this page",
    },

    // Language options
    languages: {
      en: "English",
      zh: "中文",
    },

    // Sidebar sections
    sidebar: {
      search: "Search",
      navigation: "Navigation",
      tableOfContents: "Table of Contents",
    },

    // Landing page content
    landing: {
      hero: {
        title: "Learning Deep Representations of Data Distributions",
        authors: "Sam Buchanan · Druv Pai · Peng Wang · Yi Ma",
        subtitle:
          "A modern fully open-source textbook exploring why and how deep neural networks learn compact and information-dense representations of high-dimensional real-world data.",
        buttons: {
          readHtml: "Read the Book (HTML)",
          readPdf: "Read the Book (PDF)",
          readPdfZh: "Read the Book (PDF-ZH)",
          github: "GitHub Repository",
        },
        cover: {
          alt: "Book cover: Learning Deep Representations of Data Distributions",
          title: "Read the Book",
          version: "Version 1.0\nReleased August 18, 2025",
        },
      },
      sections: {
        about: {
          title: "About this Book",
          content: `
In the current era of deep learning and especially "generative artificial intelligence", there is significant investment in training very large generative models. Thus far, such models have been "black boxes" that are difficult to understand in the sense that they have opaque internal mechanisms, leading to difficulties in interpretability, reliability, and control. Naturally, this lack of understanding has led to both hype and fear.

This book is an attempt to "open the black box" and understand the mechanisms of large deep networks, through the perspective of representation learning, which is a major factor — arguably the single most important one — in the empirical power of deep learning models. A brief outline of this book is as follows. Chapter 1 will summarize the threads that underlie the whole text. Chapters 2, 3, 4, and 5 will explain the design principles of modern neural network architectures through optimization and information theory, reducing the process of architecture development (long having been described as a sort of "alchemy") to undergraduate-level linear algebra and calculus exercises once the underlying principles are introduced. Chapters 6 and 7 will discuss applications of these principles to solve problems in more paradigmatic ways, obtaining new methods and models which are efficient, interpretable, and controllable by design, and yet no less — sometimes even more — powerful than the black-box models they resemble. Chapter 8 will discuss potential future directions for deep learning, the role of representation learning, as well as some open problems.

This book is intended for older undergraduate students, or initial graduate students, who have some background in linear algebra, probability, and machine learning. This book should be suitable as a first course in deep learning for mathematically-minded students, but it may help to have some initial surface-level knowledge of deep learning to better appreciate the perspectives and techniques discussed in the book.

Due to the timeliness of the book, and the prevalence that deep learning already has and may continue to have in the future, we have decided to make the book completely open-source. We will update it regularly to improve the presentation of the material and reflect advances in the field, and welcome contributions from subject matter experts about relevant topics that we may have missed. The source code is available on [GitHub](https://github.com/Ma-Lab-Berkeley/deep-representation-learning-book). If you feel that something is missing or can be improved, you can [let us know](https://github.com/Ma-Lab-Berkeley/deep-representation-learning-book?tab=readme-ov-file#raising-an-issue) or [contribute it yourself](https://github.com/Ma-Lab-Berkeley/deep-representation-learning-book#making-a-contribution). We will work to keep a similar standard of quality for new contributions, and recognize contributions in [the contributors page](contributors.html).`,
        },
        acknowledgements: {
          title: "Acknowledgements",
          content: `
This book is primarily based on research results that have been developed within the past eight years. Thanks to generous funding from UC Berkeley (2018) and the University of Hong Kong (2023), Yi Ma was able to embark and focus on this new exciting research direction in the past eight years. Through these years, related to this research direction, Yi Ma and his research team at Berkeley have been supported by the following research grants:

- The multi-university *THEORINET* project for the Foundations of Deep Learning, jointly funded by the Simons Foundation and the National Science Foundation (DMS grant #2031899)
- The *Closed-Loop Data Transcription via Minimaxing Rate Reduction* project funded by the Office of Naval Research (grant N00014-22-1-2102);
- The *Principled Approaches to Deep Learning for Low-dimensional Structures* project funded by the National Science Foundation (CISE grant #2402951).

This book would have not been possible without the financial support for these research projects. The authors have drawn tremendous inspiration from research results by colleagues and students who have been involved in these projects.`,
        },
      },
    },

    // Contributors page content
    contributors: {
      title: "Contributors",
      intro: "Core authors and contributors of the book.",
      sections: {
        authors: "Authors",
        editors: "Editors",
        contentContributors: "Content Contributors",
        infraContributors: "Website/Infrastructure Contributors",
      },

      people: {
        "sam-buchanan": { desc: "Lead author." },
        "druv-pai": { desc: "Lead author." },
        "peng-wang": { desc: "Author, Chinese translation." },
        "yi-ma": { desc: "Senior author." },
        "stephen-butterfill": {
          desc: "PRs: [#14](https://github.com/Ma-Lab-Berkeley/deep-representation-learning-book/pull/14)",
        },
        "kerui-min": { desc: "Chinese translation." },
        "jan-cavel": { desc: "Romanian translation. PRs: [#16](https://github.com/Ma-Lab-Berkeley/deep-representation-learning-book/pull/16)" },
        "kevin-murphy": {
          desc: "Extensive feedback. Issues: [#3](https://github.com/Ma-Lab-Berkeley/deep-representation-learning-book/pull/3), [#4](https://github.com/Ma-Lab-Berkeley/deep-representation-learning-book/pull/4), [#5](https://github.com/Ma-Lab-Berkeley/deep-representation-learning-book/pull/5), [#8](https://github.com/Ma-Lab-Berkeley/deep-representation-learning-book/pull/10), [#10](https://github.com/Ma-Lab-Berkeley/deep-representation-learning-book/pull/10), [#11](https://github.com/Ma-Lab-Berkeley/deep-representation-learning-book/pull/11), [#12](https://github.com/Ma-Lab-Berkeley/deep-representation-learning-book/pull/12), [#13](https://github.com/Ma-Lab-Berkeley/deep-representation-learning-book/pull/13)",
        },
        "yaodong-yu": { desc: "Provided initial text for Chapter 4." },
        "tianzhe-chu": { desc: "AI tooling." },
        "ziyang-wu": { desc: "Website development." },
      },
    },

    // Community page content
    community: {
      title: "Community",
      intro: "Community resources and materials for the book.",
      pending: "Coming soon.",
      sections: {
        tutorials: "Tutorials",
        translations: "Community Translations",
      },
      content: {
        tutorials: `
The following are some tutorials, or long-form lectures, about content which is highly relevant to the book.
- [(Forthcoming) ICCV 2025 Tutorial on Learning Low-Dimensional Models from High-Dimensional Data](https://low-dim-models-tutorials.github.io/iccv2025-tutorial/)
- [CVPR 2024 Tutorial on Learning Low-Dimensional Models from High-Dimensional Data](https://low-dim-models-tutorials.github.io/cvpr2024-tutorial/)
        `,
        translations: `
The following are (unofficial) community translations of the book.
- [A Romanian translation](assets/book-main_ro.pdf), contributed by Jan Cavel at the [Piatra Institute](https://piatra.institute/).
`,
      },
    },

    // AI Helpers page content
    aiHelpers: {
      title: "AI Helpers",
      intro: "We provide simple AI assistants tailored to this book.",
      techDetails:
        `
The BookQA series of models is designed to help readers understand the book's content. It can answer questions about the material and give clear explanations of the key concepts and theories. To build these models, we first use [EntiGraph](https://arxiv.org/pdf/2409.07431) to generate a rich set of book-related data by linking sampled entities from the text. We then continually pre-train [Qwen2.5-7B/32B-Instruct](https://huggingface.co/Qwen/Qwen2.5-7B-Instruct) on this data using auto-regressive training. We also incorporate instruction-following data during training such that the model can learn new knowledge from the book without forgetting basic chatting skills. The BookQA 7B model currently powers the "Ask AI" button in the top bar of this website.
      `,
      sections: {
        aiAssistants: "AI Assistants",
        aiTools: "AI Tools",
        customizedChatbots: "BookQA Series",
      },
      // badges removed
    },
  };

  // Helper functions to build navigation and TOC arrays
  window.BOOK_COMPONENTS.buildNavLinks = function () {
    return [
      { label: this.nav.community, href: "community.html" },
      { label: this.nav.contributors, href: "contributors.html" },
      { label: this.nav.aiHelpers, href: "ai_helpers.html" },
      {
        label: this.nav.howToContribute,
        href: "https://github.com/Ma-Lab-Berkeley/deep-representation-learning-book#making-a-contribution",
        external: true,
      },
    ];
  };

  window.BOOK_COMPONENTS.buildTOC = function () {
    return [
      { label: this.toc.preface, href: "Chx1.html" },
      {
        label: this.toc.chapters[1].title,
        subtitle: this.toc.chapters[1].subtitle,
        href: "Ch1.html",
      },
      {
        label: this.toc.chapters[2].title,
        subtitle: this.toc.chapters[2].subtitle,
        href: "Ch2.html",
      },
      {
        label: this.toc.chapters[3].title,
        subtitle: this.toc.chapters[3].subtitle,
        href: "Ch3.html",
      },
      {
        label: this.toc.chapters[4].title,
        subtitle: this.toc.chapters[4].subtitle,
        href: "Ch4.html",
      },
      {
        label: this.toc.chapters[5].title,
        subtitle: this.toc.chapters[5].subtitle,
        href: "Ch5.html",
      },
      {
        label: this.toc.chapters[6].title,
        subtitle: this.toc.chapters[6].subtitle,
        href: "Ch6.html",
      },
      {
        label: this.toc.chapters[7].title,
        subtitle: this.toc.chapters[7].subtitle,
        href: "Ch7.html",
      },
      {
        label: this.toc.chapters[8].title,
        subtitle: this.toc.chapters[8].subtitle,
        href: "Ch8.html",
      },
      {
        label: this.toc.appendices.A.title,
        subtitle: this.toc.appendices.A.subtitle,
        href: "A1.html",
      },
      {
        label: this.toc.appendices.B.title,
        subtitle: this.toc.appendices.B.subtitle,
        href: "A2.html",
      },
    ];
  };

  window.BOOK_COMPONENTS.coverImagePath = "assets/book-cover.png";
  window.BOOK_COMPONENTS.bookPdfPath = "assets/book-main.pdf";
})();
