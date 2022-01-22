import React from "react";
import {
  useLanguageQuery,
  LanguageSwitcher as LanguageSwitcherLib,
} from "next-export-i18n";

const availableLanguages = [
  { code: "en", name: "English" },
  { code: "es", name: "Español" },
  { code: "fr", name: "Français" },
];

export default function LanguageSwitcher() {
  const [query] = useLanguageQuery();
  return (
    <div className="languageSwitcher">
      <LanguageSwitcherSelector lang={query?.lang || "en"} />
    </div>
  );
}

function LanguageSwitcherSelector({ lang }) {
  const options = availableLanguages.map((language) => {
    if (language.code !== lang) {
      return (
        <li key={language.code}>
          <LanguageSwitcherLib lang={language.code}>
            {" "}
            <div value={language.code} className={language.code} />
          </LanguageSwitcherLib>
        </li>
      );
    }
  });
  return (
    <div className="lang">
      <div className={lang} />
      <ul className="dropdown"> {options} </ul>
    </div>
  );
}
