import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";
import { useTranslation } from "next-export-i18n";

export default function Sidebar() {
  const { t } = useTranslation();
  return (
    <div className="ct-menuMobile">
      <ul className="ct-menuMobile-navbar">
        <LanguageSwitcher />
        <li>
          <a href="#home">{t("section.home")}</a>
        </li>
        <li>
          <a href="#about">{t("section.about")}</a>
        </li>
        <li>
          <a href="#gallery">{t("section.gallery")}</a>
        </li>
        <li>
          <a href="#amenities">{t("section.amenities")}</a>
        </li>
        <li>
          <a href="#latestoffers">{t("section.latest_offers")}</a>
        </li>
        <li>
          <a href="#lastposts">{t("section.last_posts")}</a>
        </li>
        <li>
          <a href="#latestoffers">{t("section.contact")}</a>
        </li>
      </ul>
    </div>
  );
}
