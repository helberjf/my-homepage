import { Languages } from "lucide-react";
import { useLanguage } from "../i18n/language";

export function LanguageToggle() {
  const { language, setLanguage, labels } = useLanguage();
  const nextLanguage = language === "en" ? "pt" : "en";

  return (
    <button className="icon-button" type="button" onClick={() => setLanguage(nextLanguage)}>
      <Languages aria-hidden="true" size={18} />
      <span>{labels.switchLanguage}</span>
    </button>
  );
}
