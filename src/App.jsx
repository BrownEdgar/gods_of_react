import Provider from './i18n/Provider'
import Translate from './i18n/Translate'
import LOCALES from './i18n/locale'
import { useEffect, useState } from 'react';
import './App.css'


export default function App() {
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem('language') || LOCALES.ENGLISH
  });

  const handleChange = (e) => {
    setLanguage(e.target.value)
  }

  useEffect(() => {
    localStorage.setItem('language', language)
  }, [language])


  return (
    <Provider locale={language}>
      <div className='App'>
        <select name="language" id="language" onChange={handleChange}>
          <option value={LOCALES.ENGLISH}>en</option>
          <option value={LOCALES.RUSSIAN}>ru</option>
          <option value={LOCALES.ARMENIAN}>hy</option>
        </select>
        <div className="App__block">

          <Translate id='title' tagName='h1' value={{ version: '^18.2.0' }} />
          <Translate id='desc' className="box" />

        </div>
      </div>
    </Provider>

  )
}
