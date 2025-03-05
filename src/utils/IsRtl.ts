export const isRtl = () => {
  const localeFromStorage = localStorage.getItem("locale");
  const localeFromUrl = new URL(window.location.href).pathname.split("/")[1];
  const locale = localeFromStorage || localeFromUrl;
  return locale === "ar";
};
