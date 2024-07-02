const esBtn = document.querySelectorAll('.es-btn'),
      enBtn = document.querySelectorAll('.en-btn'),
      jaBtn = document.querySelectorAll('.ja-btn'),
      spanish = document.querySelectorAll('.spanish'),
      japanese = document.querySelectorAll('.japanese'),
      english = document.querySelectorAll('.english');

// Set default language if none found in local storage
if (!localStorage.getItem('locale'))
  localStorage.setItem('locale', JSON.stringify('es'));

let locale = JSON.parse(localStorage.getItem('locale'));

// Initialize with current locale
const getCurrLocale = () => {
  return locale === 'es' ? spanish : locale === 'en' ? english : locale === 'ja' ? japanese : [];
}

const locales = [spanish, english, japanese];

document.documentElement.setAttribute('lang', locale);

const currentLocale = getCurrLocale();

for (let i = 0; i < locales.length; i++) {
  const locale = locales[i];

  if (locale === currentLocale) {
    for (let j = 0; j < locale.length; j++) {
      locale[j].classList.remove('hidden');
    }
  } else {
    for (let j = 0; j < locale.length; j++) {
      locale[j].classList.add('hidden');
    }
  }
}

// Change language on button clicks
const switchLanguage = (from, to, toStr) => {
  for (let i = 0; i < from.length; i++) {
    from[i].classList.add('hidden');
  }
  for (let i = 0; i < to.length; i++) {
    to[i].classList.remove('hidden');
  }
  localStorage.setItem('locale', JSON.stringify(toStr));
  locale = JSON.parse(localStorage.getItem('locale'));
  document.documentElement.setAttribute('lang', locale);
}

for (let index = 0; index < enBtn.length; index++) {
  enBtn[index].addEventListener('click', () => {
    switchLanguage(getCurrLocale(), english, 'en');
  });
}

for (let index = 0; index < esBtn.length; index++) {
  esBtn[index].addEventListener('click', () => {
    switchLanguage(getCurrLocale(), spanish, 'es');
  });
}

for (let index = 0; index < jaBtn.length; index++) {
  jaBtn[index].addEventListener('click', () => {
    switchLanguage(getCurrLocale(), japanese, 'ja');
  });
}