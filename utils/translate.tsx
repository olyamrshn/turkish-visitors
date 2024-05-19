import translations from "../public/translations.json"
type TranslationsType = {
  [key: string]: {
    [lang: string]: string
  }
}

export const translate = (key: string, language: string): string => {
  const translationsTyped = translations as TranslationsType
  if (!translationsTyped[key] || !translationsTyped[key][language]) {
    console.warn(
      `Translation for key "${key}" in language "${language}" not found.`
    )
    return key
  }
  return translationsTyped[key][language]
}
