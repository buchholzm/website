---
title: 'React: Links und Resourcen'
---

## Official

- [Homepage](https://reactjs.org/)
- [Beta Fassung der Homepage](https://beta.reactjs.org/)

Die Beta-Fassung steht kurz vor der Veröffentlichung (und wird daher auch schon prominent auf
der aktuellen Seite verlinkt). Die Dokumentation dort wurde und wird in großen Teilen neu
geschrieben bzw. mindestens ergänzt mit dem Ziel, den React-Anwendern (also uns Entwicklern)
einen besseren Leitfaden zum Umgang mit diversen React-Aspekten zu geben.

## Toolchain

Da React selbst _nur_ eine View-Library und insbesondere kein komplettes Framework ist, gibt
es auch keine offizielle CLI oder ähnliches, um ein React-Projekt zu erstellen, entwickeln,
testen und schließlich produktionsreif zu veröffentlichen. Die React-Anwender sind selbst
verantwortlich eine gegeignete Entwicklungsumgebung bereitzustellen.

### Scaffolding / Dev Environment / Building

- [Vite](https://vitejs.dev/) bzw. das _create-vite_ - Script.
- [Create React App](https://create-react-app.dev/)

Das letztere Projekt (oft auch mit CRA abgekürzt) galt lange als de-facto Standard. Die
Zukunft dieses Projektes ist zur Zeit eher unklar, die Entwicklung stagniert etwas. Grund ist
unter anderem, dass im gesamten JavaScript-Ecosystem sich in vielen Bereichen der Entwicklung
neue Tools und Lösungen positionieren, CRA aber noch auf eine etwas ältere Toolchain setzt.

- [React Developer Tools für den Browser](https://beta.reactjs.org/learn/react-developer-tools)

### Testing (Unit- und Komponententests)

- [Vitest - Test Runner und Framework](https://vitest.dev/)
- [Jest - Test Runner und Framework](https://jestjs.io/)
- [Cypress Component Testing - Testing im Browser](https://docs.cypress.io/guides/component-testing/quickstart-react)

- [React Test Utils (Eher low-level)](https://reactjs.org/docs/test-utils.html)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)

## Libraries / Eco-System

Um komplette Anwendungen zu schreiben stehen wir hier vor der gleichen Herausforderung wie
bei der Toolchain. React als View-Library enthält für die meißten Aspekte keine vorgefertigten
Bibliotheken und es obliegt den React-Anwendern, die eigene Anwendung um diese zu ergänzen.

### Formular-Unterstützung

- [React Hook Form](https://react-hook-form.com/)
- [Formik](https://formik.org/)

Eine weitere Tendenz ist es, die Formularbehandlung inclusive Validierung wieder mit der
nativen Browser-API zu realisieren.

### Routing

- [React Router](https://reactrouter.com/)

Es gibt einige kleinere Alternativen - in diesem Bereich dominiert allerdings obige Lösung.

### Laden von Remote-Data

- [SWR](https://swr.vercel.app/)
- [React Query](https://tanstack.com/query/v4)

Wichtiger zusätzlicher Kern-Aspekt beider Bibliotheken ist das Caching der Daten. Dies
ersetzt oft ein komplexes State-Management der Remote-Daten, das bei selbst gestrickten
Lösungen mit zum Beispiel [axios](https://axios-http.com/) oder der nativen Fetch-API
ebenfalls eigenständig gelöst werden muss.
Tendentiell bietet sich das Laden (und Cachen) der Daten auch über das Routing an. Diese
Variante wird durch den obigen React Router mittlerweile unterstützt. Und wird auch in
kompletten React Frameworks wie [Next.js](https://nextjs.org/) oder [Remix](https://remix.run/)
favorisiert.

### Globales Statemanagement

Die Möglichkeiten in diesem Umfeld sind die vielfältigsten: von einfachen Lösung selbst
realisiert mit der React API bis hin zu komplexen Bibliotheken, die das Flux-Muster von
Facebook umsetzen (https://facebook.github.io/flux/).

#### Eigene Lösungen:

- [React typed state management under 10 lines of code - Lösung für kleinere Anwendungen ohne Fremdbibliotheken](https://dev.to/svehla/react-typed-state-management-under-10-lines-of-code-1347)
- [React Beta Docs: Scaling Up with Reducer and Context (bessere Lösung mit zwei Kontexten)](https://beta.reactjs.org/learn/scaling-up-with-reducer-and-context)

#### Der ehemalige(!) De-Facto Standard: Redux

- [Redux](https://redux.js.org/)
- [Redux Toolkit - Recommended way to use Redux](https://redux-toolkit.js.org/)
- oder einfacher [Rematch](https://rematchjs.org/)
- oder schlanker [Zustand](https://zustand-demo.pmnd.rs/)

#### Aktuelle Lösungen

- [RecoilJS von Facebook](https://recoiljs.org/)
- oder schlanker [Jotai](https://jotai.org/)
- [MobX](https://mobx.js.org/README.html)
- oder schlanker [Valtio](https://valtio.pmnd.rs/)

Persönlich verzichte ich seit einiger Zeit gerne komplett auf Redux, sondern setze auf
eine Kombination von React Router oder SWR sowie Recoil oder Jotai.

## Blogs

- [Josh Comeau](https://www.joshwcomeau.com/)
- [Robin Wieruch](https://www.robinwieruch.de/blog/)
- [Kent C. Dodds](https://kentcdodds.com/blog)
- [Dan Abramov](https://overreacted.io/)

## Ebooks

- [React - Lernen und Verstehen (React 16.8)](https://lernen.react-js.dev/)
- [GitHub-Repository zum obigen Buch](https://github.com/manuelbieh/react-lernen)
- [Full Stack Open 2022](https://fullstackopen.com/en/)
- [How To Code | DigitalOcean](https://www.digitalocean.com/community/books/how-to-code-in-react-js-ebook)
- [React Rip Tutorial](https://riptutorial.com/ebook/reactjs)

## Tipps zum Weiterstöbern

- [TypeScript Cheatsheet](https://react-typescript-cheatsheet.netlify.app/)
- [A Thorough Analysis of CSS-in-JS](https://css-tricks.com/a-thorough-analysis-of-css-in-js/)

Folgend drei Projekte, die Beispiel-Implementierungen für eigene Hooks liefern. Ich empfehle
die letzteren beiden nicht komplett zu installieren, sondern im Quellcode zu stöbern und dann
eigene Hooks zu schreiben. So wie es auch die erste Seite **useHooks** vormacht.

- [useHooks](https://usehooks.com/)
- [React Hooks Library](https://react-hooks-library.vercel.app/)
- [React Hookz](https://react-hookz.github.io/)

## Diskussion

Hier noch zwei Blog-Beiträge aus diesem Jahr, die beide unterschiedlich aber lesenswert
Probleme beschreiben, mit denen wir als React-Entwickler mittelfristig konfrontiert werden.

- [François Zaninotto - React - I Love You, But ...](https://marmelab.com/blog/2022/09/20/react-i-love-you.html)
- [Almost Got fired for Choosing React](https://betterprogramming.pub/i-almost-got-fired-for-choosing-react-in-our-enterprise-app-846ea840841c)
