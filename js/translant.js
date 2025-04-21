const translations = {
    en: {
      greeting: "Hello",
    },
    th: {
      greeting: "สวัสดี",
    }
  };
  
  function setLanguage(lang) {
    document.getElementById("greeting").innerText = translations[lang].greeting;
  }
  