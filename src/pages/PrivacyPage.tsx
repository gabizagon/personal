import React from 'react';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Shield, CheckCircle as LockCircle, Info, Key } from 'lucide-react';

const PrivacyPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t('privacy.title')} | APS-MS</title>
        <meta name="description" content={t('privacy.description')} />
      </Helmet>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="pt-28 pb-16"
      >
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">{t('privacy.title')}</h1>
            <div className="w-24 h-1 bg-primary-500 mx-auto mb-8"></div>
            <p className="text-lg text-gray-300">
              {t('privacy.subtitle')}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-primary-900/30 backdrop-blur-sm rounded-lg p-8 border border-primary-700/30 shadow-lg max-w-4xl mx-auto mb-12"
          >
            <div className="prose prose-lg max-w-none text-white">
              {t('privacy.language') === 'ro' ? (
                <>
                  <div className="flex items-start mb-6">
                    <div className="mr-4 mt-1 bg-primary-700/50 p-2 rounded-full">
                      <Shield size={24} className="text-primary-300" />
                    </div>
                    <div>
                      <p className="my-0">Cookie-ul este un fișier de mici dimensiuni, format din litere și numere, care va fi stocat pe computerul, terminalul mobil sau alte echipamente ale unui utilizator, de pe care se accesează internetul. Cookie-ul este "pasiv" (nu conține programe software, viruși sau spyware și nu poate accesa informațiile de pe hard-ul dumneavoastră).</p>
                    </div>
                  </div>

                  <div className="flex items-start mb-6">
                    <div className="mr-4 mt-1 bg-primary-700/50 p-2 rounded-full">
                      <Info size={24} className="text-primary-300" />
                    </div>
                    <div>
                      <p className="my-0">Activarea cookie-urilor nu este strict necesară pentru funcţionarea website-ului, dar vă poate îmbunătăţi experienţa de navigare. Puteţi şterge sau bloca cookie-urile însă, dacă faceţi acest lucru, s-ar putea ca anumite caracteristici ale website-ului să nu funcţioneze corespunzător.</p>
                    </div>
                  </div>

                  <div className="my-8 p-6 bg-primary-800/30 rounded-lg border-l-4 border-primary-500">
                    <p className="my-0 text-primary-100">Informaţiile asociate cookie-urilor nu sunt utilizate pentru a vă identifica personal. În plus, ţinem sub control datele referitoare la preferinţele dumneavoastră de navigare. Cookie-urile nu sunt folosite în alte scopuri decât cele descrise aici.</p>
                  </div>

                  <p className="mb-6">O parte din paginile sau subwebsite-urile noastre pot folosi cookie-uri suplimentare sau diferite de cele descrise mai sus. În acest caz, veţi găsi detalii pe paginile specifice referitoare la cookie-uri. De asemenea, s-ar putea să vi se ceară acordul cu privire la stocarea lor.</p>

                  <div className="mb-8 p-6 bg-primary-900/50 rounded-lg">
                    <h3 className="text-xl font-bold mb-4 text-primary-300">Cum funcționează cookie-urile?</h3>
                    <p>Aceste fișiere fac posibilă recunoașterea terminalului utilizatorului și prezentarea conținutului într-un mod relevant, adaptat preferințelor utilizatorului. Cookie-urile asigură servicii comfortabile utilizatorilor:</p>
                    <ul className="list-inside space-y-2 mt-4">
                      <li className="flex items-start">
                        <span className="inline-block w-5 h-5 mr-2 mt-0.5 bg-primary-700 rounded-full flex-shrink-0 flex items-center justify-center text-xs">•</span>
                        <span>Preferințele în materie de confidențialitate online</span>
                      </li>
                      <li className="flex items-start">
                        <span className="inline-block w-5 h-5 mr-2 mt-0.5 bg-primary-700 rounded-full flex-shrink-0 flex items-center justify-center text-xs">•</span>
                        <span>Coșul de cumpărături și funcționalități asociate</span>
                      </li>
                      <li className="flex items-start">
                        <span className="inline-block w-5 h-5 mr-2 mt-0.5 bg-primary-700 rounded-full flex-shrink-0 flex items-center justify-center text-xs">•</span>
                        <span>Publicitate relevantă și experiență personalizată</span>
                      </li>
                    </ul>
                    <p className="mt-4">De asemenea, sunt utilizate în pregătirea unor statistici anonime agregate, care ne ajută să înțelegem cum un utilizator beneficiază de paginile noastre web, permițându-ne îmbunătățirea structurii și conținutului lor, excluzând indentificarea personală a dumneavoastră.</p>
                  </div>

                  <div className="flex items-start mb-6">
                    <div className="mr-4 mt-1 bg-primary-700/50 p-2 rounded-full">
                      <LockCircle size={24} className="text-primary-300" />
                    </div>
                    <div>
                      <p className="my-0">Cookie-urile în sine nu solicită informații cu caracter personal pentru a putea fi utilizate și, în cele mai multe cazuri, nu identifică personal utilizatorii de internet. Datele personale colectate prin utilizarea Cookie-urilor pot fi colectate doar pentru a facilita anumite funcționalități pentru utilizator. Atare date sunt criptate într-un mod care face imposibil accesul persoanelor neautorizate la ele.</p>
                    </div>
                  </div>

                  <div className="flex items-start mb-6">
                    <div className="mr-4 mt-1 bg-primary-700/50 p-2 rounded-full">
                      <Key size={24} className="text-primary-300" />
                    </div>
                    <div>
                      <p className="my-0">Puteţi controla şi/sau şterge cookie-urile după cum doriţi – pentru detalii, consultaţi website-ul aboutcookies.org. Puteți șterge toate cookie-urile din calculatorul dumneavoastră și puteți seta majoritatea browserelor să blocheze plasarea acestora. Dacă faceţi acest lucru, este posibil să fiţi nevoit să setaţi manual unele preferinţe, de fiecare dată când vizitaţi website-ul. De asemenea, s-ar putea ca unele servicii sau opţiuni să nu funcţioneze.</p>
                    </div>
                  </div>

                  <div className="mt-10 p-6 bg-primary-800/40 rounded-lg">
                    <h3 className="text-xl font-bold mb-3 text-primary-300">Resurse utile</h3>
                    <p>Dacă doriți să aflați mai multe informații despre cookie-uri și pentru ce sunt utilizate, recomandăm următoarele linkuri:</p>

                    <div className="flex items-center mt-4 p-3 bg-primary-700/30 rounded-md hover:bg-primary-700/50 transition-colors">
                      <Shield size={20} className="text-primary-300 mr-3" />
                      <a href="http://www.youronlinechoices.com/ro/" className="text-primary-300 hover:text-primary-200 font-medium">All About Cookies - http://www.youronlinechoices.com/ro/</a>
                    </div>
                  </div>
                </>
              ) : t('privacy.language') === 'hu' ? (
                <>
                  <div className="flex items-start mb-6">
                    <div className="mr-4 mt-1 bg-primary-700/50 p-2 rounded-full">
                      <Shield size={24} className="text-primary-300" />
                    </div>
                    <div>
                      <p className="my-0">A cookie egy kis méretű fájl, amely betűkből és számokból áll, és a felhasználó számítógépén, mobileszközén vagy más, internethozzáféréssel rendelkező berendezésén tárolódik. A cookie "passzív" (nem tartalmaz szoftvert, vírusokat vagy kémprogramokat, és nem férhet hozzá a merevlemezen található információkhoz).</p>
                    </div>
                  </div>

                  <div className="flex items-start mb-6">
                    <div className="mr-4 mt-1 bg-primary-700/50 p-2 rounded-full">
                      <Info size={24} className="text-primary-300" />
                    </div>
                    <div>
                      <p className="my-0">A cookie-k engedélyezése nem feltétlenül szükséges a weboldal működéséhez, de javíthatja a böngészési élményt. Törölheti vagy blokkolhatja a cookie-kat, de ha ezt teszi, előfordulhat, hogy a weboldal bizonyos funkciói nem működnek megfelelően.</p>
                    </div>
                  </div>

                  <div className="my-8 p-6 bg-primary-800/30 rounded-lg border-l-4 border-primary-500">
                    <p className="my-0 text-primary-100">A cookie-khoz kapcsolódó információkat nem használjuk személyes azonosításra. Ezenkívül ellenőrzés alatt tartjuk a böngészési preferenciáira vonatkozó adatokat. A cookie-kat nem használjuk más célokra, mint amelyeket itt leírtunk.</p>
                  </div>

                  <p className="mb-6">Oldalaink vagy alwebhelyeink némelyike a fent leírtaktól eltérő vagy további cookie-kat használhat. Ebben az esetben a cookie-kra vonatkozó részleteket az adott oldalakon találja. Azt is kérhetjük, hogy adja beleegyezését a tárolásukhoz.</p>

                  <div className="mb-8 p-6 bg-primary-900/50 rounded-lg">
                    <h3 className="text-xl font-bold mb-4 text-primary-300">Hogyan működnek a cookie-k?</h3>
                    <p>Ezek a fájlok lehetővé teszik a felhasználó eszközének felismerését és a tartalom releváns, a felhasználó preferenciáihoz igazított módon történő bemutatását. A cookie-k kényelmes szolgáltatásokat biztosítanak a felhasználók számára:</p>
                    <ul className="list-inside space-y-2 mt-4">
                      <li className="flex items-start">
                        <span className="inline-block w-5 h-5 mr-2 mt-0.5 bg-primary-700 rounded-full flex-shrink-0 flex items-center justify-center text-xs">•</span>
                        <span>Online adatvédelmi preferenciák</span>
                      </li>
                      <li className="flex items-start">
                        <span className="inline-block w-5 h-5 mr-2 mt-0.5 bg-primary-700 rounded-full flex-shrink-0 flex items-center justify-center text-xs">•</span>
                        <span>Bevásárlókosár és kapcsolódó funkciók</span>
                      </li>
                      <li className="flex items-start">
                        <span className="inline-block w-5 h-5 mr-2 mt-0.5 bg-primary-700 rounded-full flex-shrink-0 flex items-center justify-center text-xs">•</span>
                        <span>Releváns hirdetések és személyre szabott élmény</span>
                      </li>
                    </ul>
                    <p className="mt-4">Ezenkívül névtelen összesített statisztikák készítésére is használják őket, amelyek segítenek megérteni, hogyan használják a felhasználók weboldalainkat, lehetővé téve szerkezetük és tartalmuk javítását, kizárva az Ön személyes azonosítását.</p>
                  </div>

                  <div className="flex items-start mb-6">
                    <div className="mr-4 mt-1 bg-primary-700/50 p-2 rounded-full">
                      <LockCircle size={24} className="text-primary-300" />
                    </div>
                    <div>
                      <p className="my-0">Maguk a cookie-k nem igényelnek személyes adatokat ahhoz, hogy használhatók legyenek, és a legtöbb esetben nem azonosítják személyesen az internetfelhasználókat. A cookie-k használatával gyűjtött személyes adatok csak bizonyos felhasználói funkciók megkönnyítése érdekében gyűjthetők. Az ilyen adatok olyan módon vannak titkosítva, amely lehetetlenné teszi az illetéktelen személyek hozzáférését.</p>
                    </div>
                  </div>

                  <div className="flex items-start mb-6">
                    <div className="mr-4 mt-1 bg-primary-700/50 p-2 rounded-full">
                      <Key size={24} className="text-primary-300" />
                    </div>
                    <div>
                      <p className="my-0">Szabályozhatja és/vagy törölheti a cookie-kat tetszés szerint – részletekért látogasson el az aboutcookies.org weboldalra. Törölheti az összes cookie-t a számítógépéről, és a legtöbb böngészőt beállíthatja úgy, hogy blokkolja a elhelyezésüket. Ha ezt teszi, előfordulhat, hogy manuálisan kell beállítania egyes preferenciákat minden alkalommal, amikor meglátogatja a weboldalt. Az is előfordulhat, hogy bizonyos szolgáltatások vagy opciók nem működnek.</p>
                    </div>
                  </div>

                  <div className="mt-10 p-6 bg-primary-800/40 rounded-lg">
                    <h3 className="text-xl font-bold mb-3 text-primary-300">Hasznos források</h3>
                    <p>Ha további információkat szeretne megtudni a cookie-król és azok felhasználásáról, a következő linkeket ajánljuk:</p>

                    <div className="flex items-center mt-4 p-3 bg-primary-700/30 rounded-md hover:bg-primary-700/50 transition-colors">
                      <Shield size={20} className="text-primary-300 mr-3" />
                      <a href="http://www.youronlinechoices.com/hu/" className="text-primary-300 hover:text-primary-200 font-medium">Minden a Cookie-kről - http://www.youronlinechoices.com/hu/</a>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="flex items-start mb-6">
                    <div className="mr-4 mt-1 bg-primary-700/50 p-2 rounded-full">
                      <Shield size={24} className="text-primary-300" />
                    </div>
                    <div>
                      <p className="my-0">A cookie is a small file consisting of letters and numbers that will be stored on a user's computer, mobile terminal, or other equipment from which the internet is accessed. The cookie is "passive" (it does not contain software, viruses, or spyware and cannot access the information on your hard drive).</p>
                    </div>
                  </div>

                  <div className="flex items-start mb-6">
                    <div className="mr-4 mt-1 bg-primary-700/50 p-2 rounded-full">
                      <Info size={24} className="text-primary-300" />
                    </div>
                    <div>
                      <p className="my-0">Enabling cookies is not strictly necessary for the website to function, but it can enhance your browsing experience. You can delete or block cookies, but if you do, some features of the website may not work properly.</p>
                    </div>
                  </div>

                  <div className="my-8 p-6 bg-primary-800/30 rounded-lg border-l-4 border-primary-500">
                    <p className="my-0 text-primary-100">The information associated with cookies is not used to personally identify you. Additionally, we control the data regarding your browsing preferences. Cookies are not used for purposes other than those described here.</p>
                  </div>

                  <p className="mb-6">Some of our pages or sub-websites may use additional or different cookies than those described above. In this case, you will find details about cookies on the specific pages. You might also be asked for your consent regarding their storage.</p>

                  <div className="mb-8 p-6 bg-primary-900/50 rounded-lg">
                    <h3 className="text-xl font-bold mb-4 text-primary-300">How do cookies work?</h3>
                    <p>These files make it possible to recognize the user's terminal and present the content in a relevant way, adapted to the user's preferences. Cookies provide comfortable services to users:</p>
                    <ul className="list-inside space-y-2 mt-4">
                      <li className="flex items-start">
                        <span className="inline-block w-5 h-5 mr-2 mt-0.5 bg-primary-700 rounded-full flex-shrink-0 flex items-center justify-center text-xs">•</span>
                        <span>Online privacy preferences</span>
                      </li>
                      <li className="flex items-start">
                        <span className="inline-block w-5 h-5 mr-2 mt-0.5 bg-primary-700 rounded-full flex-shrink-0 flex items-center justify-center text-xs">•</span>
                        <span>Shopping cart and related functionalities</span>
                      </li>
                      <li className="flex items-start">
                        <span className="inline-block w-5 h-5 mr-2 mt-0.5 bg-primary-700 rounded-full flex-shrink-0 flex items-center justify-center text-xs">•</span>
                        <span>Relevant advertising and personalized experience</span>
                      </li>
                    </ul>
                    <p className="mt-4">They are also used in the preparation of anonymous aggregated statistics, which help us understand how a user benefits from our web pages, allowing us to improve their structure and content, excluding your personal identification.</p>
                  </div>

                  <div className="flex items-start mb-6">
                    <div className="mr-4 mt-1 bg-primary-700/50 p-2 rounded-full">
                      <LockCircle size={24} className="text-primary-300" />
                    </div>
                    <div>
                      <p className="my-0">Cookies themselves do not require personal information to be used and, in most cases, do not personally identify internet users. Personal data collected through the use of cookies may only be collected to facilitate certain functionalities for the user. Such data is encrypted in a way that makes it impossible for unauthorized persons to access it.</p>
                    </div>
                  </div>

                  <div className="flex items-start mb-6">
                    <div className="mr-4 mt-1 bg-primary-700/50 p-2 rounded-full">
                      <Key size={24} className="text-primary-300" />
                    </div>
                    <div>
                      <p className="my-0">You can control and/or delete cookies as you wish – for details, see the aboutcookies.org website. You can delete all cookies from your computer and set most browsers to block their placement. If you do this, you may need to manually set some preferences each time you visit the website. Also, some services or options may not work.</p>
                    </div>
                  </div>

                  <div className="mt-10 p-6 bg-primary-800/40 rounded-lg">
                    <h3 className="text-xl font-bold mb-3 text-primary-300">Useful Resources</h3>
                    <p>If you want to learn more about cookies and what they are used for, we recommend the following links:</p>

                    <div className="flex items-center mt-4 p-3 bg-primary-700/30 rounded-md hover:bg-primary-700/50 transition-colors">
                      <Shield size={20} className="text-primary-300 mr-3" />
                      <a href="http://www.youronlinechoices.com/uk/" className="text-primary-300 hover:text-primary-200 font-medium">All About Cookies - http://www.youronlinechoices.com/uk/</a>
                    </div>
                  </div>
                </>
              )}
            </div>
          </motion.div>

          <div className="flex justify-center">
            <Link to="/" className="btn btn-primary">
              {t('buttons.backToHome')}
            </Link>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default PrivacyPage;