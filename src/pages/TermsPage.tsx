import React from 'react';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FileText, Shield, Lock, Database, Mail, BookOpen, Scale, Leaf, RefreshCw, BadgeCheck } from 'lucide-react';

const TermsPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t('terms.title')} | APS-MS</title>
        <meta name="description" content={t('terms.description')} />
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">{t('terms.title')}</h1>
            <div className="w-24 h-1 bg-primary-500 mx-auto mb-8"></div>
            <p className="text-lg text-gray-300">
              {t('terms.subtitle')}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-primary-900/30 backdrop-blur-sm rounded-lg p-8 border border-primary-700/30 shadow-lg max-w-4xl mx-auto mb-12"
          >
            <div className="prose prose-lg max-w-none text-white">
              {t('terms.language') === 'ro' ? (
                <>
                  <div className="mb-8 p-6 bg-primary-800/40 rounded-xl border-l-4 border-primary-600">
                    <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                      <FileText className="text-primary-400 mr-3" size={28} />
                      TERMENI ȘI CONDIȚII PRIVIND UTILIZAREA WEBSITE-ULUI NOSTRU
                    </h2>
                  
                    <p className="text-primary-100 text-lg font-medium">Bine ați venit pe website-ul www.aps-ms.ro!</p>
                  </div>
                  
                  <div className="p-5 bg-primary-900/40 rounded-lg mb-6">
                    <p>Prin accesarea, parcurgerea, utilizarea acestui website de către dumneavoastră, acceptați necondiționat condițiile generale de acces și utilizare a website-ului www.aps-ms.ro detaliate mai jos în ("Termeni și Condiții") precum și respectarea tuturor legilor aplicabile.</p>
                  
                    <p>Acest document stabilește termenii și condițiile în care poate fi utilizat website-ul www.aps-ms.ro și implicit modalitatea de achiziționare a produselor comercializate, astfel încât vă rugăm să parcurgeți acest material cu atenție.</p>
                  </div>
                  
                  <div className="my-8 p-5 bg-primary-900/40 rounded-lg">
                    <p>Website-ul, serviciile și conținutul www.aps-ms.ro vă sunt oferite condiționat de acceptarea dvs. fără nicio modificare, a condițiilor din prezentul acord.</p>
                  
                    <p>Prin utilizarea website-ului, indicați că ați înțeles și acceptați să respectați "Termenii și Condițiile" noastre. Alpha Partner Security poate revizui acest document oricând, prin actualizarea acestei pagini, fără a avea obligația notificării dumneavoastră în acest sens. Vă recomandăm să vizitați această pagină periodic, pentru a citi "Termenii și Condițiile", deoarece acest document vă obligă legal. Folosirea în continuare a serviciilor website-ului www.aps-ms.ro reprezintă acceptarea modificărilor aduse prezentului acord, periodic.</p>
                  </div>
                  
                  <div className="mb-10">
                    <p>Prezenții termeni și condiții creează un contract între dvs. și Alpha Partner Security ("Contractul"). Vă recomandăm să citiți cu atenție prezentul Contract și să faceți click pe "de acord" pentru a confirma înțelegerea și acceptarea prezentului Contract.</p>
                  
                    <p>Prezentul Contract guvernează utilizarea serviciilor oferite de Alpha Partner Security, servicii, prin care dvs., puteți: achiziționa, obține serviciile și bunurile oferite de Alpha Partner Security.</p>
                  
                    <p>Pentru utilizarea serviciilor noastre, aveți nevoie de un dispozitiv cu acces la internet; cu privire la componentele hardware și software, acestea trebuie să fie compatibile (recomandarea noastră este de a avea și în unele cazuri, chiar este obligatorie, ultima versiune); cu privire la accesul la internet, acesta poate implica anumite costuri din partea dumneavoastră.</p>
                  
                    <p>Performanța, optimizarea serviciilor oferite de Alpha Partner Security poate fi afectată și chiar influențată de factorii de mai sus.</p>
                  </div>
                  
                  <div className="flex items-center bg-primary-800/50 p-4 rounded-t-lg">
                    <BadgeCheck className="text-primary-300 mr-3" size={24} />
                    <h3 className="text-xl font-bold text-white m-0">1. Definiții</h3>
                  </div>
                  
                  <div className="p-6 bg-primary-900/40 rounded-b-lg mb-8">
                    <p className="mt-0"><strong className="text-primary-300">Alpha Partner Security SRL</strong> – denumit în continuare Alpha Partner Security, reprezintă societatea comercială Alpha Partner Security S.R.L., cu sediul social pe Strada Bradului 200, Sâncraiu de Mureș, Județ Mureș tel.: 0742-236.268, e-mail: contact@aps-ms.ro.</p>
                  
                    <p>Pentru o prezentare detaliată a companiei noastre și a profilului de activitate al acesteia, vă rugăm să parcurgeți secțiunea "Despre noi"/"Contact" din cadrul website-ului.</p>
                  
                    <p><strong className="text-primary-300">Utilizator</strong> – orice persoană fizică și/sau juridică și/sau orice entitate juridică care accesează, vizualizează, parcurge website-ul.</p>
                  
                    <p><strong className="text-primary-300">Website</strong> – domeniul www.aps-ms.ro și subdomeniile acestuia.</p>
                  
                    <p><strong className="text-primary-300">Contract</strong> – reprezintă prezentul document precum și toate politicile care guvernează funcționarea website-ului, asupra cărora cumpărătorul își exprimă consimțământul/ acordul on-line.</p>
                  
                    <p><strong className="text-primary-300">Contractul la distanță</strong> – este acel Contract încheiat între părți, fără prezența fizică, simultană a Vânzătorului și a Cumpărătorului, cât și toate notificările/comunicările în format electronic sau trimise prin poștă, existente între Vânzător și Cumpărător.</p>
                  
                    <p><strong className="text-primary-300">Produse și Servicii</strong> – orice bun sau serviciu, inclusiv documentele și serviciile menționate în comandă, care urmează a fi furnizate de către Vânzător Cumpărătorului, ca urmare a înțelegerii între părți. Pentru o cunoaștere amănunțită a serviciilor pe care Alpha Partner Security le oferă clienților săi, vă rugăm să vizitați secțiunea „Ofertă produse".</p>
                  
                    <p><strong className="text-primary-300">Campanie</strong> – este acțiunea de promovare, expunere în scop comercial, unor produse și/sau servicii având un stoc limitat și predefinit, pentru o perioadă limitată de timp, stabilită de către Vânzator. Orice Campanie care se desfășoară sau se va desfășura, va fi supusă unui Regulament.</p>
                  
                    <p><strong className="text-primary-300">Promoție</strong> – reprezintă produsul și/sau serviciul având un preț special pus la dispoziția oricărui Cumpărător.</p>
                  
                    <p className="mb-3"><strong className="text-primary-300">Conținut:</strong></p>
                    <ul className="space-y-2 list-none ml-0 pl-0">
                      <li className="flex items-start rounded-md p-2 bg-primary-800/30">
                        <span className="inline-block w-5 h-5 mr-3 mt-0.5 bg-primary-700 rounded-full flex-shrink-0 flex items-center justify-center text-xs">•</span>
                        <span>toate informațiile de pe website care pot fi vizitate, vizualizate sau altfel accesate prin utilizarea unui echipament electronic;</span>
                      </li>
                      <li className="flex items-start rounded-md p-2 bg-primary-800/30">
                        <span className="inline-block w-5 h-5 mr-3 mt-0.5 bg-primary-700 rounded-full flex-shrink-0 flex items-center justify-center text-xs">•</span>
                        <span>conținutul oricărui e-mail trimis Cumpărătorilor de către Vânzător și/sau reprezentanții/angajații săi, prin mijloace electronice și/sau orice alt mijloc de comunicare disponibil;</span>
                      </li>
                      <li className="flex items-start rounded-md p-2 bg-primary-800/30">
                        <span className="inline-block w-5 h-5 mr-3 mt-0.5 bg-primary-700 rounded-full flex-shrink-0 flex items-center justify-center text-xs">•</span>
                        <span>informații legate de produsele și/sau serviciile și/sau tarifele practicate de Vânzător într-o anumită perioadă;</span>
                      </li>
                      <li className="flex items-start rounded-md p-2 bg-primary-800/30">
                        <span className="inline-block w-5 h-5 mr-3 mt-0.5 bg-primary-700 rounded-full flex-shrink-0 flex items-center justify-center text-xs">•</span>
                        <span>informații legate de produsele și/sau serviciile și/sau tarifele practicate de către un terț cu care Vânzătorul are încheiate contracte de parteneriat, într-o anumită perioadă, dacă este cazul;</span>
                      </li>
                      <li className="flex items-start rounded-md p-2 bg-primary-800/30">
                        <span className="inline-block w-5 h-5 mr-3 mt-0.5 bg-primary-700 rounded-full flex-shrink-0 flex items-center justify-center text-xs">•</span>
                        <span>date referitoare la Vânzător, sau alte date privilegiate ale acestuia.</span>
                      </li>
                    </ul>
                  
                    <p className="mt-5"><strong className="text-primary-300">Newsletter</strong> – mijloc de informare periodic, exclusiv electronic, respectiv poștă electronică (e-mail,) asupra produselor si serviciilor și/sau a promoțiilor desfășurate de Vânzător într-o anumită perioadă, fără niciun angajament sau obligație din partea Vânzătorului cu referire la informațiile conținute de acesta.</p>
                  
                    <p><strong className="text-primary-300">Specificații</strong> – descrierea tuturor caracteristicilor produsului/serviciului așa cum este precizat în cuprinsul website-ului.</p>
                  
                    <p><strong className="text-primary-300">Restricții/suspendare cont</strong> – Alpha Partner Security își rezervă dreptul de a limita accesul la serviciile sale și de a șterge contul oricărui Cumpărător/Client, în cazul în care consideră ca accesul pe website și existența contului ar putea prejudicia în vreun fel Alpha Partner Security.</p>
                  </div>
                  
                  <div className="flex items-center bg-primary-800/50 p-4 rounded-t-lg">
                    <Database className="text-primary-300 mr-3" size={24} />
                    <h3 className="text-xl font-bold text-white m-0">10. Protecția Datelor cu caracter personal</h3>
                  </div>
                  
                  <div className="p-6 bg-primary-900/40 rounded-b-lg mb-8">
                    <p className="mt-0">10.1. Alpha Partner Security este înregistrată în Registrul de Evidență a Prelucrărilor de Date cu Caracter Personal sub numărul 29801, astfel datele dvs. personale sunt prelucrate în conformitate cu Legea 677/2001.</p>
                  
                    <p>10.2. Alpha Partner Security prelucrează datele dumneavoastră cu caracter personal, prin mijloace automatizate şi manual destinate emiterii facturilor de bunuri și/sau servicii, colectarea eventualelor creanţelor legate de acestea, precum şi rezolvării solicitărilor dumneavoastră în legătură cu activitatea desfăşurată de Alpha Partner Security.</p>
                  
                    <p>10.3. Dumneavoastră prin prezenta ați luat la cunoștință, ați acceptat și vă dați consimțământul liber, ca datele cu caracter personal furnizate de dumneavoastră să intre în baza de date a Alpha Partner Security numai în scopuri statistice și de marketing.</p>
                  
                    <p className="mb-3">10.4. Prin prezenta ați luat la cunoștință de faptul că vă sunt garantate drepturile prevăzute de lege, respectiv:</p>
                  
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <div className="bg-primary-800/30 p-3 rounded-md flex items-start">
                        <span className="inline-block w-5 h-5 mr-2 mt-0.5 bg-primary-700 rounded-full flex-shrink-0 flex items-center justify-center text-xs">a</span>
                        <span>de a fi informați cu privire la prelucrarea datelor dvs. cu caracter personal, conform legii;</span>
                      </div>
                      <div className="bg-primary-800/30 p-3 rounded-md flex items-start">
                        <span className="inline-block w-5 h-5 mr-2 mt-0.5 bg-primary-700 rounded-full flex-shrink-0 flex items-center justify-center text-xs">b</span>
                        <span>de acces la datele dvs. cu caracter personal;</span>
                      </div>
                      <div className="bg-primary-800/30 p-3 rounded-md flex items-start">
                        <span className="inline-block w-5 h-5 mr-2 mt-0.5 bg-primary-700 rounded-full flex-shrink-0 flex items-center justify-center text-xs">c</span>
                        <span>de intervenție asupra datelor dvs. cu caracter personal;</span>
                      </div>
                      <div className="bg-primary-800/30 p-3 rounded-md flex items-start">
                        <span className="inline-block w-5 h-5 mr-2 mt-0.5 bg-primary-700 rounded-full flex-shrink-0 flex items-center justify-center text-xs">d</span>
                        <span>de a nu fi supus unei decizii individuale cu caracter automat;</span>
                      </div>
                      <div className="bg-primary-800/30 p-3 rounded-md flex items-start md:col-span-2">
                        <span className="inline-block w-5 h-5 mr-2 mt-0.5 bg-primary-700 rounded-full flex-shrink-0 flex items-center justify-center text-xs">e</span>
                        <span>de a vă opune prelucrării datelor personale care vă privesc și să solicitați rectificarea, actualizarea ori ștergerea datelor în condițiile legii – în cazul datelor cu caracter personal prelucrate pentru scopuri de marketing direct, acest drept poate fi exercitat oricând, în mod gratuit și fără justificare;</span>
                      </div>
                      <div className="bg-primary-800/30 p-3 rounded-md flex items-start">
                        <span className="inline-block w-5 h-5 mr-2 mt-0.5 bg-primary-700 rounded-full flex-shrink-0 flex items-center justify-center text-xs">f</span>
                        <span>de a vă adresa justiției în cazul în care s-au constatat încălcări ale legislației în materie.</span>
                      </div>
                    </div>
                  
                    <p className="mt-5">10.5. Pe baza unei cereri scrise, datate și semnate, expediate pe adresa Alpha Partner Security: Strada Bradului 200 Sâncraiu de Mureș, Județ Mureș sau prin transmiterea unui email la adresa email contact@aps-ms.ro, vă puteți exercita, în mod gratuit, următoarele drepturi:</p>
                  
                    <ul className="space-y-2 list-none pl-0 mt-3">
                      <li className="flex items-start p-3 bg-primary-800/30 rounded-lg">
                        <span className="inline-block w-5 h-5 mr-3 mt-0.5 bg-primary-700 rounded-full flex-shrink-0 flex items-center justify-center text-xs">—</span>
                        <span>o dată pe an, să vi se comunice, dacă datele cu caracter personal ale dumneavoastră sunt sau nu prelucrate de către Alpha Partner Security;</span>
                      </li>
                      <li className="flex items-start p-3 bg-primary-800/30 rounded-lg">
                        <span className="inline-block w-5 h-5 mr-3 mt-0.5 bg-primary-700 rounded-full flex-shrink-0 flex items-center justify-center text-xs">—</span>
                        <span>să accesați și să interveniți asupra datelor transmise;</span>
                      </li>
                      <li className="flex items-start p-3 bg-primary-800/30 rounded-lg">
                        <span className="inline-block w-5 h-5 mr-3 mt-0.5 bg-primary-700 rounded-full flex-shrink-0 flex items-center justify-center text-xs">—</span>
                        <span>să vă opuneți prelucrării datelor pentru motive întemeiate și legitime legate de situația lor particulară (cu excepția prelucrării de marketing direct, caz în care vă puteți opune oricând în mod gratuit și fără justificare);</span>
                      </li>
                      <li className="flex items-start p-3 bg-primary-800/30 rounded-lg">
                        <span className="inline-block w-5 h-5 mr-3 mt-0.5 bg-primary-700 rounded-full flex-shrink-0 flex items-center justify-center text-xs">—</span>
                        <span>să solicitați ștergerea datelor, cu excepția situațiilor prevăzute de lege.</span>
                      </li>
                    </ul>
                  
                    <p className="mt-5">10.6. Informaţii personale sunt informații pe care ni le oferiți și care vă identifică personal, cum ar fi numele, adresa de e-mail, informațiile de facturare sau alte date care pot fi asociate ușor de Google sau Facebook cu astfel de informații, cum ar fi informațiile asociate Contului Google, respectiv Facebook.</p>
                  
                    <p className="mt-2">10.7. Alpha Partner Security utilizează datele cu caracter personal pentru a asigura clienților/cumpărătorilor servicii de cea mai bună calitate, precum și dacă este cazul, servicii de marketing, reclamă și publicitate, de dezvoltare, de cercetare de piață, de statistică, de urmărire și monitorizare a vânzărilor.</p>
                  </div>
                  
                  <div className="flex items-center bg-primary-800/50 p-4 rounded-t-lg">
                    <Mail className="text-primary-300 mr-3" size={24} />
                    <h3 className="text-xl font-bold text-white m-0">11. Newsletter</h3>
                  </div>
                  
                  <div className="p-6 bg-primary-900/40 rounded-b-lg mb-8">
                    <p className="mt-0">11.1. Newsletter-ul reprezintă un mesaj electronic (e-mail) trimis în mod periodic către dumneavoastră, în cazul în care vă dați acordul în mod expres și neechivoc, cu privire la termenii și condițiile prezentului website. Orice utilizator se poate abona la newsletter complet gratuit. Abonarea la newsletter se face prin completarea formularului de newsletter. Odată abonat, utilizatorul își dă acordul, în mod expres și neechivoc, cu privire la toate prevederile acestor termeni și condiții.</p>
                  
                    <p>11.2. Dumneavoastră trebuie să vă asigurați că newsletter-ul trimis de către Alpha Partner Security ajunge în Inbox. În cazul În care newsletter-ul ajunge în folder-ul de Spam / Junk / Bulk / Trash, dumneavoastră trebuie sa apăsați pe Not Spam / Not Junk.</p>
                  
                    <div className="p-4 bg-primary-800/40 rounded-lg mt-3">
                      <p className="text-primary-100 m-0">Alpha Partner Security respectă dreptul dumneavoastră la intimitate, iar în cazul în care nu doriți să mai primiți newsletter-ele trimise de Alpha Partner Security, este suficient să vă dezabonați. Dezabonarea are loc imediat, iar dumneavoastră nu veți mai primi newslettere ulterioare decât dacă vă reabonați.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center bg-primary-800/50 p-4 rounded-t-lg">
                    <Lock className="text-primary-300 mr-3" size={24} />
                    <h3 className="text-xl font-bold text-white m-0">12. Confidențialitate</h3>
                  </div>
                  
                  <div className="p-6 bg-primary-900/40 rounded-b-lg mb-8">
                    <p className="mt-0">12.1. Echipa Alpha Partner Security încearcă să protejeze cât mai mult dreptul la intimitate și la imagine al utilizatorilor website-ului. Ne propunem să vă oferim dumneavoastră, utilizatorilor website-ului, o experiență online sigură, care să nu vă afecteze în mod negativ viața personală. În acest sens depunem toate eforturile pentru a ne asigura că informațiile pe care dumneavoastră le introduceți în baza noastră de date sunt folosite numai în scopurile pe care dumneavoastră le aveți în vedere, le cunoașteți și v-ați dat acceptul.</p>
                  
                    <p>12.2. Dumneavoastră întelegeți, acceptați și vă oferiți acordul ca toate informațiile Alpha Partner Security care v-au fost oferite, indiferent de modul de transmitere, e-mail, telefonic, reprezintă informații confidențiale ale Alpha Partner Security și vă obligați prin prezenta să păstrați cu strictețe caracterul confidențial al acestora. În caz contrar, Alpha Partner Security este îndreptățit de a solicita daune-interese.</p>
                  </div>
                  
                  <div className="flex items-center bg-primary-800/50 p-4 rounded-t-lg">
                    <BookOpen className="text-primary-300 mr-3" size={24} />
                    <h3 className="text-xl font-bold text-white m-0">13. Cookies</h3>
                  </div>
                  
                  <div className="p-6 bg-primary-900/40 rounded-b-lg mb-8">
                    <p className="mt-0">13.1. Cookie-ul este un fişier text de mici dimensiuni pe care un website îl salvează în calculatorul sau dispozitivul dumneavoastră mobil atunci când îl vizitaţi. Datorită cookie-urilor, website-ul reţine, pe o perioadă limitată de timp, acţiunile şi preferinţele dumneavoastră (login, limbă, dimensiunea caracterelor şi alte preferinţe de afişare). Astfel nu mai trebuie să le reintroduceţi ori de câte ori reveniţi la website sau navigaţi de pe o pagină pe alta.</p>
                  
                    <div className="p-4 bg-primary-800/40 rounded-lg mt-3 mb-3 flex items-center">
                      <Link to="/privacy" className="text-primary-300 hover:text-primary-200 flex items-center">
                        <Shield size={20} className="mr-2" />
                        <span>Pentru a afla mai multe informații despre cookie-uri, vă invităm să accesați pagina noastră dedicată politicii de cookie-uri</span>
                      </Link>
                    </div>
                  </div>
                  
                  <div className="flex items-center bg-primary-800/50 p-4 rounded-t-lg">
                    <Scale className="text-primary-300 mr-3" size={24} />
                    <h3 className="text-xl font-bold text-white m-0">14. Legea aplicabilă</h3>
                  </div>
                  
                  <div className="p-6 bg-primary-900/40 rounded-b-lg mb-8">
                    <p className="mt-0">14.1. Prezentul contract este supus legii române. Eventualele litigii apărute între Alpha Partner Security și clienți/cumpărători se vor rezolva pe cale amiabilă sau, în cazul în care aceasta nu va fi posibilă, litigiile vor fi soluționate de instanțele judecătorești române competente, de la sediul Alpha Partner Security.</p>
                  
                    <p>14.2. Căi alternative de soluționare a disputelor. Conform reglementărilor UE, operează o platformă voluntară de soluționare a disputelor online accesibilă la următorul link:</p>
                  
                    <div className="p-3 bg-primary-800/40 rounded-lg mt-3">
                      <a href="http://ec.europa.eu/consumers/odr" className="text-primary-300 hover:text-primary-200 flex items-center">
                        <span className="inline-block w-5 h-5 mr-2 mt-0.5 bg-primary-700 rounded-full flex-shrink-0 flex items-center justify-center text-xs">→</span>
                        http://ec.europa.eu/consumers/odr
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center bg-primary-800/50 p-4 rounded-t-lg">
                    <Leaf className="text-primary-300 mr-3" size={24} />
                    <h3 className="text-xl font-bold text-white m-0">15. Informații privind obligativitatea de protejare a mediului</h3>
                  </div>
                  
                  <div className="p-6 bg-primary-900/40 rounded-b-lg mb-8">
                    <p className="mt-0">15.1. Alpha Partner Security avertizează cumpărătorii că deșeurile provenite de la oricare din echipamentele achiziționate, incluzând dar nelimitându-se la echipamente electrice și electronice (DEEE), pot conține substanțe periculoase ce au un impact negativ asupra mediului și sănătații umane în cazul în care nu sunt colectate selectiv.</p>
                  
                    <div className="p-4 bg-primary-800/40 rounded-lg my-4">
                      <p className="m-0 text-primary-100">Având în vedere prevederile OUG 195/2005 – referitoare la protecția mediului, H.G 1037/2010, privind deșeurile de echipamente electrice și electronice, clienții vor avea în vedere următoarele:</p>
                    </div>
                  
                    <ul className="space-y-3 list-none pl-0 mt-5">
                      <li className="flex items-start p-3 bg-primary-800/30 rounded-lg">
                        <span className="inline-block w-7 h-7 mr-3 mt-0.5 bg-primary-700 rounded-full flex-shrink-0 flex items-center justify-center text-sm">1</span>
                        <span>Cumpărătorii au obligația de a nu elimina deșeurile de echipamente electrice și electronice (DEEE) ca deșeuri municipale nesortate și de a colecta selectiv aceste DEEE;</span>
                      </li>
                      <li className="flex items-start p-3 bg-primary-800/30 rounded-lg">
                        <span className="inline-block w-7 h-7 mr-3 mt-0.5 bg-primary-700 rounded-full flex-shrink-0 flex items-center justify-center text-sm">2</span>
                        <span>Alpha Partner Security va fi exonerată de orice pretenții provenite de la terțe persoane și/sau autorități competente, pentru și impotriva oricăror pretenții care au legătură cu necolectarea corespunzătoare și nesortarea deșeurilor rezultate din echipamentele achiziționate de cumpărător.</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="flex items-center bg-primary-800/50 p-4 rounded-t-lg">
                    <RefreshCw className="text-primary-300 mr-3" size={24} />
                    <h3 className="text-xl font-bold text-white m-0">16. Modificări ale Termenilor și Condițiilor Generale Alpha Partner Security</h3>
                  </div>
                  
                  <div className="p-6 bg-primary-900/40 rounded-b-lg mb-8">
                    <p className="mt-0">16.1. Alpha Partner Security își rezervă dreptul de a modifica periodic conținutul prezentului document, cât și conținutul oricărei secțiuni a website-ului pe care îl găzduiește, fără o notificare prealabilă a Utilizatorilor/Clienților/Cumpărătorilor website-ului. Dvs. în calitate de utilizator/Client/Cumpărător înțelegeți, acceptați și sunteți de acord să revizuiți periodic prezentul document cât și să verificați periodic orice politică de funcționare a website-ului.</p>
                  
                    <div className="p-4 bg-primary-800/50 rounded-lg mt-4">
                      <p className="m-0 text-primary-100">16.2. Vă mulțumim că folosiți serviciile noastre. Vă asigurăm că vom încerca să vă oferim întotdeauna cele mai bune servicii și să rămânem un partener de excepție.</p>
                    </div>
                  </div>
                  
                  <p className="text-right mt-8 text-primary-200 italic font-medium">Ultima modificare 16.02.2020</p>
                </>
              ) : t('terms.language') === 'hu' ? (
                <>
                  <div className="mb-8 p-6 bg-primary-800/40 rounded-xl border-l-4 border-primary-600">
                    <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                      <FileText className="text-primary-400 mr-3" size={28} />
                      WEBLAPUNK HASZNÁLATÁRA VONATKOZÓ FELTÉTELEK ÉS KIKÖTÉSEK
                    </h2>
                  
                    <p className="text-primary-100 text-lg font-medium">Üdvözöljük az www.aps-ms.ro weblapon!</p>
                  </div>
                  
                  <div className="p-5 bg-primary-900/40 rounded-lg mb-6">
                    <p>A webhely Ön általi elérésével, böngészésével és használatával feltétel nélkül elfogadja az www.aps-ms.ro webhely általános hozzáférési és használati feltételeit, amelyeket az alábbiakban részletezünk („Feltételek és Kikötések"), valamint az összes vonatkozó jogszabály betartását.</p>
                  
                    <p>Ez a dokumentum meghatározza azokat a feltételeket és kikötéseket, amelyek mellett az www.aps-ms.ro webhely használható, és implicit módon a forgalmazott termékek vásárlásának módját, ezért kérjük, figyelmesen olvassa el ezt az anyagot.</p>
                  </div>
                  
                  <div className="my-8 p-5 bg-primary-900/40 rounded-lg">
                    <p>Az www.aps-ms.ro webhely, szolgáltatások és tartalom azzal a feltétellel áll az Ön rendelkezésére, hogy Ön módosítás nélkül elfogadja a jelen megállapodás feltételeit.</p>
                  
                    <p>A webhely használatával jelzi, hogy megértette és elfogadja, hogy betartja a „Feltételek és kikötések" -et. Az Alpha Partner Security bármikor felülvizsgálhatja ezt a dokumentumot az oldal frissítésével, anélkül, hogy kötelessége lenne értesíteni Önt. Javasoljuk, hogy rendszeresen látogassa meg ezt az oldalt, hogy elolvassa a „Feltételeket és kikötéseket", mivel ez a dokumentum jogilag kötelezi Önt. Az www.aps-ms.ro webhely szolgáltatásainak további használata a jelen megállapodás időszakos módosításainak elfogadását jelenti.</p>
                  </div>
                  
                  <div className="mb-10">
                    <p>Ezek a feltételek és kikötések Ön és az Alpha Partner Security közötti szerződést („Szerződés") hoznak létre. Javasoljuk, hogy figyelmesen olvassa el ezt a Szerződést, és kattintson az „elfogadom" gombra a jelen Szerződés megértésének és elfogadásának megerősítéséhez.</p>
                  
                    <p>A jelen Szerződés szabályozza az Alpha Partner Security által kínált szolgáltatások használatát, amelyeken keresztül Ön vásárolhat, megszerezheti az Alpha Partner Security által kínált szolgáltatásokat és árukat.</p>
                  
                    <p>Szolgáltatásaink használatához internetkapcsolattal rendelkező eszközre van szüksége; a hardver- és szoftverkomponensekkel kapcsolatban ezeknek kompatibilisnek kell lenniük (javasoljuk, és bizonyos esetekben kötelező a legújabb verzió); az internet-hozzáféréssel kapcsolatban ez bizonyos költségekkel járhat az Ön részéről.</p>
                  
                    <p>Az Alpha Partner Security által kínált szolgáltatások teljesítményét és optimalizálását a fenti tényezők is befolyásolhatják.</p>
                  </div>
                  
                  <div className="flex items-center bg-primary-800/50 p-4 rounded-t-lg">
                    <BadgeCheck className="text-primary-300 mr-3" size={24} />
                    <h3 className="text-xl font-bold text-white m-0">1. Definíciók</h3>
                  </div>
                  
                  <div className="p-6 bg-primary-900/40 rounded-b-lg mb-8">
                    <p className="mt-0"><strong className="text-primary-300">Alpha Partner Security SRL</strong> – a továbbiakban Alpha Partner Security, az Alpha Partner Security S.R.L. kereskedelmi társaságot jelenti, székhelye: Bradului utca 200, Sâncraiu de Mureș, Maros megye, tel.: 0742-236.268, e-mail: contact@aps-ms.ro.</p>
                  
                    <p>Cégünk és tevékenységi körünk részletes bemutatásáért kérjük, tekintse meg a webhely „Rólunk"/„Kapcsolat" szakaszát.</p>
                  
                    <p><strong className="text-primary-300">Felhasználó</strong> – bármely természetes és/vagy jogi személy és/vagy jogi szervezet, amely hozzáfér, megtekinti, böngészi a webhelyet.</p>
                  
                    <p><strong className="text-primary-300">Weboldal</strong> – az www.aps-ms.ro tartomány és aldomainjei.</p>
                  
                    <p><strong className="text-primary-300">Szerződés</strong> – jelenti a jelen dokumentumot, valamint a webhely működését szabályozó összes politikát, amelyekkel kapcsolatban a vásárló online hozzájárulását/beleegyezését fejezi ki.</p>
                  
                    <p><strong className="text-primary-300">Távolsági szerződés</strong> – olyan szerződés, amelyet a felek az Eladó és a Vevő egyidejű fizikai jelenléte nélkül kötöttek, valamint az Eladó és a Vevő között meglévő összes értesítés/kommunikáció elektronikus formátumban vagy postai úton.</p>
                  
                    <p><strong className="text-primary-300">Termékek és szolgáltatások</strong> – bármely termék vagy szolgáltatás, beleértve a megrendelésben említett dokumentumokat és szolgáltatásokat, amelyeket az Eladó a felek megállapodásának eredményeként a Vevőnek szállít. Az Alpha Partner Security által ügyfeleinek kínált szolgáltatások részletes megismeréséhez kérjük, látogasson el a „Termékkínálat" részbe.</p>
                  
                    <p><strong className="text-primary-300">Kampány</strong> – olyan akció, amely bizonyos termékek és/vagy szolgáltatások promócióját, kereskedelmi célú kihelyezését célozza, korlátozott és előre meghatározott készlettel, az Eladó által meghatározott korlátozott időtartamra. Bármely kampány, amely folyamatban van vagy lesz, szabályzat hatálya alá esik.</p>
                  
                    <p><strong className="text-primary-300">Promóció</strong> – különleges árú terméket és/vagy szolgáltatást jelent, amely bármely Vevő számára elérhető.</p>
                  
                    <p className="mb-3"><strong className="text-primary-300">Tartalom:</strong></p>
                    <ul className="space-y-2 list-none ml-0 pl-0">
                      <li className="flex items-start rounded-md p-2 bg-primary-800/30">
                        <span className="inline-block w-5 h-5 mr-3 mt-0.5 bg-primary-700 rounded-full flex-shrink-0 flex items-center justify-center text-xs">•</span>
                        <span>a webhely összes olyan információja, amely elektronikus berendezés használatával meglátogatható, megtekinthető vagy bármilyen módon hozzáférhető;</span>
                      </li>
                      <li className="flex items-start rounded-md p-2 bg-primary-800/30">
                        <span className="inline-block w-5 h-5 mr-3 mt-0.5 bg-primary-700 rounded-full flex-shrink-0 flex items-center justify-center text-xs">•</span>
                        <span>az Eladó és/vagy képviselői/alkalmazottai által a Vevőknek elektronikus és/vagy bármely más elérhető kommunikációs eszközzel küldött e-mailek tartalma;</span>
                      </li>
                      <li className="flex items-start rounded-md p-2 bg-primary-800/30">
                        <span className="inline-block w-5 h-5 mr-3 mt-0.5 bg-primary-700 rounded-full flex-shrink-0 flex items-center justify-center text-xs">•</span>
                        <span>az Eladó által egy adott időszakban alkalmazott termékekkel és/vagy szolgáltatásokkal és/vagy díjakkal kapcsolatos információk;</span>
                      </li>
                      <li className="flex items-start rounded-md p-2 bg-primary-800/30">
                        <span className="inline-block w-5 h-5 mr-3 mt-0.5 bg-primary-700 rounded-full flex-shrink-0 flex items-center justify-center text-xs">•</span>
                        <span>adott esetben egy adott időszakban olyan harmadik fél által kínált termékekkel és/vagy szolgáltatásokkal és/vagy díjakkal kapcsolatos információk, amellyel az Eladó partnerségi megállapodást kötött;</span>
                      </li>
                      <li className="flex items-start rounded-md p-2 bg-primary-800/30">
                        <span className="inline-block w-5 h-5 mr-3 mt-0.5 bg-primary-700 rounded-full flex-shrink-0 flex items-center justify-center text-xs">•</span>
                        <span>az Eladóra vonatkozó vagy az Eladó más privilegizált adatai.</span>
                      </li>
                    </ul>
                  
                    <p className="mt-5"><strong className="text-primary-300">Hírlevél</strong> – kizárólag elektronikus (e-mail) rendszeres tájékoztatási eszköz az Eladó által egy adott időszakban kínált termékekről és szolgáltatásokról és/vagy akciókról, az Eladó részéről a benne foglalt információkra vonatkozó kötelezettségvállalás vagy kötelezettség nélkül.</p>
                  
                    <p><strong className="text-primary-300">Specifikációk</strong> – a termék/szolgáltatás minden jellemzőjének leírása, amint az a webhely tartalmában szerepel.</p>
                  
                    <p><strong className="text-primary-300">Korlátozások/fiók felfüggesztése</strong> – Az Alpha Partner Security fenntartja a jogot, hogy korlátozza a szolgáltatásaihoz való hozzáférést, és törölje bármely Vevő/Ügyfél fiókját, ha úgy ítéli meg, hogy a webhelyhez való hozzáférés és a fiók léte bármilyen módon károsíthatná az Alpha Partner Security-t.</p>
                  </div>
                  
                  <div className="flex items-center bg-primary-800/50 p-4 rounded-t-lg">
                    <Database className="text-primary-300 mr-3" size={24} />
                    <h3 className="text-xl font-bold text-white m-0">10. Személyes adatok védelme</h3>
                  </div>
                  
                  <div className="p-6 bg-primary-900/40 rounded-b-lg mb-8">
                    <p className="mt-0">10.1. Az Alpha Partner Security be van jegyezve a Személyes Adatkezelések Nyilvántartási Jegyzékébe a 29801 szám alatt, így személyes adatait a 677/2001. törvénynek megfelelően kezelik.</p>
                  
                    <p>10.2. Az Alpha Partner Security az Ön személyes adatait automatizált és manuális eszközökkel kezeli, termékek és/vagy szolgáltatások számláinak kiállítására, az ezekkel kapcsolatos esetleges követelések behajtására, valamint az Alpha Partner Security által végzett tevékenységgel kapcsolatos kéréseinek megoldására szolgál.</p>
                  
                    <p>10.3. A jelen dokumentummal tudomásul veszi, elfogadja és szabadon hozzájárul ahhoz, hogy az Ön által megadott személyes adatok bekerüljenek az Alpha Partner Security adatbázisába, kizárólag statisztikai és marketing célokra.</p>
                  
                    <p className="mb-3">10.4. A jelen dokumentummal tudomásul veszi, hogy a törvényben előírt jogai garantáltak, nevezetesen:</p>
                  
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <div className="bg-primary-800/30 p-3 rounded-md flex items-start">
                        <span className="inline-block w-5 h-5 mr-2 mt-0.5 bg-primary-700 rounded-full flex-shrink-0 flex items-center justify-center text-xs">a</span>
                        <span>tájékoztatást kapni a személyes adatai kezeléséről, a törvénynek megfelelően;</span>
                      </div>
                      <div className="bg-primary-800/30 p-3 rounded-md flex items-start">
                        <span className="inline-block w-5 h-5 mr-2 mt-0.5 bg-primary-700 rounded-full flex-shrink-0 flex items-center justify-center text-xs">b</span>
                        <span>hozzáférni személyes adataihoz;</span>
                      </div>
                      <div className="bg-primary-800/30 p-3 rounded-md flex items-start">
                        <span className="inline-block w-5 h-5 mr-2 mt-0.5 bg-primary-700 rounded-full flex-shrink-0 flex items-center justify-center text-xs">c</span>
                        <span>beavatkozni személyes adataiba;</span>
                      </div>
                      <div className="bg-primary-800/30 p-3 rounded-md flex items-start">
                        <span className="inline-block w-5 h-5 mr-2 mt-0.5 bg-primary-700 rounded-full flex-shrink-0 flex items-center justify-center text-xs">d</span>
                        <span>hogy ne legyen kitéve automatikus jellegű egyéni döntésnek;</span>
                      </div>
                      <div className="bg-primary-800/30 p-3 rounded-md flex items-start md:col-span-2">
                        <span className="inline-block w-5 h-5 mr-2 mt-0.5 bg-primary-700 rounded-full flex-shrink-0 flex items-center justify-center text-xs">e</span>
                        <span>hogy ellenvethessen a személyes adatai feldolgozásának, és kérheti az adatok helyesbítését, frissítését vagy törlését a törvényben meghatározott feltételek mellett – közvetlen marketing célokra feldolgozott személyes adatok esetén ezt a jogot bármikor, ingyenesen és indoklás nélkül gyakorolhatja;</span>
                      </div>
                      <div className="bg-primary-800/30 p-3 rounded-md flex items-start">
                        <span className="inline-block w-5 h-5 mr-2 mt-0.5 bg-primary-700 rounded-full flex-shrink-0 flex items-center justify-center text-xs">f</span>
                        <span>bírósághoz fordulni, ha a jogszabály megsértését állapították meg.</span>
                      </div>
                    </div>
                  
                    <p className="mt-5">10.5. Írásbeli, keltezett és aláírt kérelem alapján, amelyet az Alpha Partner Security címére küldtek: Bradului utca 200, Sâncraiu de Mureș, Maros megye, vagy e-mail küldésével a contact@aps-ms.ro e-mail-címre, ingyenesen gyakorolhatja a következő jogokat:</p>
                  
                    <ul className="space-y-2 list-none pl-0 mt-3">
                      <li className="flex items-start p-3 bg-primary-800/30 rounded-lg">
                        <span className="inline-block w-5 h-5 mr-3 mt-0.5 bg-primary-700 rounded-full flex-shrink-0 flex items-center justify-center text-xs">—</span>
                        <span>évente egyszer közölni kell Önnel, hogy személyes adatait az Alpha Partner Security kezeli-e vagy sem;</span>
                      </li>
                      <li className="flex items-start p-3 bg-primary-800/30 rounded-lg">
                        <span className="inline-block w-5 h-5 mr-3 mt-0.5 bg-primary-700 rounded-full flex-shrink-0 flex items-center justify-center text-xs">—</span>
                        <span>hozzáférni és beavatkozni az Ön által továbbított adatokba;</span>
                      </li>
                      <li className="flex items-start p-3 bg-primary-800/30 rounded-lg">
                        <span className="inline-block w-5 h-5 mr-3 mt-0.5 bg-primary-700 rounded-full flex-shrink-0 flex items-center justify-center text-xs">—</span>
                        <span>ellenvethessen az adatok feldolgozásának az Ön különleges helyzetéhez kapcsolódó alapos és jogos indokok miatt (kivéve a közvetlen marketing célú feldolgozást, amely esetben ingyenesen és indoklás nélkül bármikor ellenvethessen);</span>
                      </li>
                      <li className="flex items-start p-3 bg-primary-800/30 rounded-lg">
                        <span className="inline-block w-5 h-5 mr-3 mt-0.5 bg-primary-700 rounded-full flex-shrink-0 flex items-center justify-center text-xs">—</span>
                        <span>kérheti az adatok törlését, kivéve a törvényben előírt helyzeteket.</span>
                      </li>
                    </ul>
                  
                    <p className="mt-5">10.6. Személyes információk azok az információk, amelyeket Ön ad meg nekünk, és amelyek személyesen azonosítják Önt, például név, e-mail cím, számlázási információk vagy egyéb adatok, amelyeket a Google vagy a Facebook könnyen társíthat ilyen információkkal, például a Google-, illetve Facebook-fiókkal kapcsolatos információk.</p>
                  
                    <p className="mt-2">10.7. Az Alpha Partner Security személyes adatokat használ a legjobb minőségű szolgáltatások biztosítására az ügyfelek/vásárlók számára, valamint adott esetben marketing-, reklám- és hirdetési szolgáltatásokra, fejlesztésre, piackutatásra, statisztikára, értékesítések nyomon követésére és figyelemmel kísérésére.</p>
                  </div>
                  
                  <div className="flex items-center bg-primary-800/50 p-4 rounded-t-lg">
                    <Mail className="text-primary-300 mr-3" size={24} />
                    <h3 className="text-xl font-bold text-white m-0">11. Hírlevél</h3>
                  </div>
                  
                  <div className="p-6 bg-primary-900/40 rounded-b-lg mb-8">
                    <p className="mt-0">11.1. A hírlevél egy elektronikus üzenet (e-mail), amelyet rendszeresen küldenek Önnek, ha kifejezetten és egyértelműen beleegyezik a jelen webhely feltételeibe és kikötéseibe. Bármely felhasználó teljesen ingyenesen feliratkozhat a hírlevélre. A hírlevélre való feliratkozás a hírlevél űrlap kitöltésével történik. Feliratkozáskor a felhasználó kifejezetten és egyértelműen beleegyezik ezen feltételek és kikötések minden rendelkezésébe.</p>
                  
                    <p>11.2. Önnek gondoskodnia kell arról, hogy az Alpha Partner Security által küldött hírlevél a Beérkező mappába kerüljön. Abban az esetben, ha a hírlevél a Spam / Junk / Bulk / Trash mappába kerül, meg kell nyomnia a Not Spam / Not Junk gombot.</p>
                  
                    <div className="p-4 bg-primary-800/40 rounded-lg mt-3">
                      <p className="text-primary-100 m-0">Az Alpha Partner Security tiszteletben tartja az Ön magánélethez való jogát, és ha nem szeretne több hírlevelet kapni az Alpha Partner Security-től, elegendő leiratkozni. A leiratkozás azonnal megtörténik, és nem fog további hírleveleket kapni, kivéve, ha újra feliratkozik.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center bg-primary-800/50 p-4 rounded-t-lg">
                    <Lock className="text-primary-300 mr-3" size={24} />
                    <h3 className="text-xl font-bold text-white m-0">12. Titoktartás</h3>
                  </div>
                  
                  <div className="p-6 bg-primary-900/40 rounded-b-lg mb-8">
                    <p className="mt-0">12.1. Az Alpha Partner Security csapata igyekszik a lehető legnagyobb mértékben védeni a webhely felhasználóinak magánélethez és képhez való jogát. Célunk, hogy Önnek, a webhely felhasználóinak biztonságos online élményt nyújtsunk, amely nem befolyásolja negatívan személyes életét. Ennek érdekében minden erőfeszítést megteszünk annak biztosítása érdekében, hogy az Ön által adatbázisunkba bevitt információkat csak olyan célokra használjuk, amelyeket Ön szem előtt tart, ismer és elfogadott.</p>
                  
                    <p>12.2. Ön megérti, elfogadja és beleegyezik, hogy minden Alpha Partner Security-től kapott információ, függetlenül attól, hogy milyen módon továbbították, e-mailben, telefonon, az Alpha Partner Security bizalmas információi, és jelen dokumentummal kötelezi magát, hogy szigorúan megőrzi ezek bizalmas jellegét. Ellenkező esetben az Alpha Partner Security jogosult kártérítést követelni.</p>
                  </div>
                  
                  <div className="flex items-center bg-primary-800/50 p-4 rounded-t-lg">
                    <BookOpen className="text-primary-300 mr-3" size={24} />
                    <h3 className="text-xl font-bold text-white m-0">13. Sütik</h3>
                  </div>
                  
                  <div className="p-6 bg-primary-900/40 rounded-b-lg mb-8">
                    <p className="mt-0">13.1. A süti egy kis méretű szöveges fájl, amelyet egy webhely ment a számítógépére vagy mobileszközére, amikor meglátogatja azt. A sütiknek köszönhetően a webhely korlátozott ideig megjegyzi az Ön műveleteit és preferenciáit (bejelentkezés, nyelv, karakterméret és más megjelenítési beállítások). Így nem kell újra megadnia ezeket, valahányszor visszatér a webhelyre vagy navigál egyik oldalról a másikra.</p>
                  
                    <div className="p-4 bg-primary-800/40 rounded-lg mt-3 mb-3 flex items-center">
                      <Link to="/privacy" className="text-primary-300 hover:text-primary-200 flex items-center">
                        <Shield size={20} className="mr-2" />
                        <span>A sütikkel kapcsolatos további információkért kérjük, látogasson el a cookie-k használatának szabályzata oldalunkra</span>
                      </Link>
                    </div>
                  </div>
                  
                  <div className="flex items-center bg-primary-800/50 p-4 rounded-t-lg">
                    <Scale className="text-primary-300 mr-3" size={24} />
                    <h3 className="text-xl font-bold text-white m-0">14. Alkalmazandó jog</h3>
                  </div>
                  
                  <div className="p-6 bg-primary-900/40 rounded-b-lg mb-8">
                    <p className="mt-0">14.1. Jelen szerződésre a román jog vonatkozik. Az Alpha Partner Security és az ügyfelek/vásárlók között felmerülő esetleges vitákat békés úton rendezik, vagy ha ez nem lehetséges, a vitákat az Alpha Partner Security székhelye szerinti illetékes román bíróságok oldják meg.</p>
                  
                    <p>14.2. Alternatív vitarendezési utak. Az EU-szabályozásnak megfelelően működik egy önkéntes online vitarendezési platform, amely a következő linken érhető el:</p>
                  
                    <div className="p-3 bg-primary-800/40 rounded-lg mt-3">
                      <a href="http://ec.europa.eu/consumers/odr" className="text-primary-300 hover:text-primary-200 flex items-center">
                        <span className="inline-block w-5 h-5 mr-2 mt-0.5 bg-primary-700 rounded-full flex-shrink-0 flex items-center justify-center text-xs">→</span>
                        http://ec.europa.eu/consumers/odr
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center bg-primary-800/50 p-4 rounded-t-lg">
                    <Leaf className="text-primary-300 mr-3" size={24} />
                    <h3 className="text-xl font-bold text-white m-0">15. Információk a környezetvédelmi kötelezettségről</h3>
                  </div>
                  
                  <div className="p-6 bg-primary-900/40 rounded-b-lg mb-8">
                    <p className="mt-0">15.1. Az Alpha Partner Security figyelmezteti a vásárlókat, hogy a bármely vásárolt berendezésből származó hulladékok, beleértve, de nem kizárólagosan az elektromos és elektronikus berendezéseket (WEEE), veszélyes anyagokat tartalmazhatnak, amelyek negatív hatással vannak a környezetre és az emberi egészségre, ha nem gyűjtik szelektíven.</p>
                  
                    <div className="p-4 bg-primary-800/40 rounded-lg my-4">
                      <p className="m-0 text-primary-100">Figyelembe véve a környezetvédelemre vonatkozó 195/2005 sz. sürgősségi kormányrendeletet, valamint az elektromos és elektronikus berendezések hulladékairól szóló 1037/2010 sz. kormányhatározatot, az ügyfeleknek figyelembe kell venniük a következőket:</p>
                    </div>
                  
                    <ul className="space-y-3 list-none pl-0 mt-5">
                      <li className="flex items-start p-3 bg-primary-800/30 rounded-lg">
                        <span className="inline-block w-7 h-7 mr-3 mt-0.5 bg-primary-700 rounded-full flex-shrink-0 flex items-center justify-center text-sm">1</span>
                        <span>A vásárlóknak kötelességük, hogy ne helyezzék el az elektromos és elektronikus berendezések hulladékait (WEEE) nem válogatott települési hulladékként, és szelektíven kell gyűjteniük ezeket a WEEE-ket;</span>
                      </li>
                      <li className="flex items-start p-3 bg-primary-800/30 rounded-lg">
                        <span className="inline-block w-7 h-7 mr-3 mt-0.5 bg-primary-700 rounded-full flex-shrink-0 flex items-center justify-center text-sm">2</span>
                        <span>Az Alpha Partner Security mentesül harmadik személyek és/vagy illetékes hatóságok részéről származó bármely követelés alól, az olyan követelésekkel szemben és ellen, amelyek a vásárló által vásárolt berendezésekből származó hulladékok nem megfelelő gyűjtésével és nem válogatásával kapcsolatosak.</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="flex items-center bg-primary-800/50 p-4 rounded-t-lg">
                    <RefreshCw className="text-primary-300 mr-3" size={24} />
                    <h3 className="text-xl font-bold text-white m-0">16. Az Alpha Partner Security Általános Feltételeinek és Kikötéseinek módosításai</h3>
                  </div>
                  
                  <div className="p-6 bg-primary-900/40 rounded-b-lg mb-8">
                    <p className="mt-0">16.1. Az Alpha Partner Security fenntartja a jogot, hogy időszakosan módosítsa a jelen dokumentum tartalmát, valamint az általa üzemeltetett webhely bármely részének tartalmát, anélkül, hogy előzetesen értesítené a Webhely Felhasználóit/Ügyfeleit/Vásárlóit. Ön, mint felhasználó/Ügyfél/Vásárló, megérti, elfogadja és beleegyezik abba, hogy időszakosan felülvizsgálja a jelen dokumentumot, valamint időszakosan ellenőrizze a webhely bármely működési szabályzatát.</p>
                  
                    <div className="p-4 bg-primary-800/50 rounded-lg mt-4">
                      <p className="m-0 text-primary-100">16.2. Köszönjük, hogy szolgáltatásainkat használja. Biztosítjuk, hogy mindig igyekszünk a legjobb szolgáltatásokat nyújtani Önnek, és kiváló partnernek maradni.</p>
                    </div>
                  </div>
                  
                  <p className="text-right mt-8 text-primary-200 italic font-medium">Utolsó módosítás: 2020.02.16</p>
                </>
              ) : (
                <>
                  <div className="mb-8 p-6 bg-primary-800/40 rounded-xl border-l-4 border-primary-600">
                    <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                      <FileText className="text-primary-400 mr-3" size={28} />
                      TERMS AND CONDITIONS REGARDING THE USE OF OUR WEBSITE
                    </h2>
                  
                    <p className="text-primary-100 text-lg font-medium">Welcome to the website www.aps-ms.ro!</p>
                  </div>
                  
                  <div className="p-5 bg-primary-900/40 rounded-lg mb-6">
                    <p>By accessing, browsing, and using this website, you unconditionally accept the general conditions of access and use of the website www.aps-ms.ro detailed below in ("Terms and Conditions") as well as compliance with all applicable laws.</p>
                  
                    <p>This document establishes the terms and conditions under which the website www.aps-ms.ro can be used and implicitly the method of purchasing the marketed products, so we ask you to carefully read this material.</p>
                  </div>
                  
                  <div className="my-8 p-5 bg-primary-900/40 rounded-lg">
                    <p>The website, services, and content of www.aps-ms.ro are offered to you conditionally on your acceptance, without any modification, of the conditions in this agreement.</p>
                  
                    <p>By using the website, you indicate that you have understood and agree to comply with our "Terms and Conditions." Alpha Partner Security may revise this document at any time by updating this page, without having the obligation to notify you in this regard. We recommend that you visit this page periodically to read the "Terms and Conditions," as this document legally binds you. Continued use of the services of the website www.aps-ms.ro represents acceptance of the changes made to this agreement, periodically.</p>
                  </div>
                  
                  <div className="mb-10">
                    <p>These terms and conditions create a contract between you and Alpha Partner Security ("the Contract"). We recommend that you carefully read this Contract and click "agree" to confirm your understanding and acceptance of this Contract.</p>
                  
                    <p>This Contract governs the use of services offered by Alpha Partner Security, services through which you can: purchase, obtain the services and goods offered by Alpha Partner Security.</p>
                  
                    <p>To use our services, you need a device with internet access; regarding hardware and software components, these must be compatible (our recommendation is to have, and in some cases, it is even mandatory, the latest version); regarding internet access, this may involve certain costs on your part.</p>
                  
                    <p>The performance, optimization of services offered by Alpha Partner Security can be affected and even influenced by the above factors.</p>
                  </div>
                  
                  <div className="flex items-center bg-primary-800/50 p-4 rounded-t-lg">
                    <BadgeCheck className="text-primary-300 mr-3" size={24} />
                    <h3 className="text-xl font-bold text-white m-0">1. Definitions</h3>
                  </div>
                  
                  <div className="p-6 bg-primary-900/40 rounded-b-lg mb-8">
                    <p className="mt-0"><strong className="text-primary-300">Alpha Partner Security SRL</strong> – hereinafter referred to as Alpha Partner Security, represents the commercial company Alpha Partner Security S.R.L., with its registered office at Strada Bradului 200, Sâncraiu de Mureș, Mureș County tel.: 0742-236.268, e-mail: contact@aps-ms.ro.</p>
                  
                    <p>For a detailed presentation of our company and its activity profile, please go through the "About us"/"Contact" section of the website.</p>
                  
                    <p><strong className="text-primary-300">User</strong> – any natural and/or legal person and/or any legal entity that accesses, views, browses the website.</p>
                  
                    <p><strong className="text-primary-300">Website</strong> – the domain www.aps-ms.ro and its subdomains.</p>
                  
                    <p><strong className="text-primary-300">Contract</strong> – represents this document as well as all policies governing the operation of the website, on which the buyer expresses consent/agreement online.</p>
                  
                    <p><strong className="text-primary-300">Distance Contract</strong> – is that Contract concluded between the parties, without the simultaneous physical presence of the Seller and the Buyer, as well as all notifications/communications in electronic format or sent by mail, existing between the Seller and the Buyer.</p>
                  
                    <p><strong className="text-primary-300">Products and Services</strong> – any good or service, including the documents and services mentioned in the order, which are to be provided by the Seller to the Buyer, as a result of the understanding between the parties. For a detailed knowledge of the services that Alpha Partner Security offers to its clients, please visit the "Product Offer" section.</p>
                  
                    <p><strong className="text-primary-300">Campaign</strong> – is the action of promoting, exposing for commercial purpose, certain products and/or services having a limited and predefined stock, for a limited period of time, established by the Seller. Any Campaign that is taking place or will take place, will be subject to a Regulation.</p>
                  
                    <p><strong className="text-primary-300">Promotion</strong> – represents the product and/or service having a special price made available to any Buyer.</p>
                  
                    <p className="mb-3"><strong className="text-primary-300">Content:</strong></p>
                    <ul className="space-y-2 list-none ml-0 pl-0">
                      <li className="flex items-start rounded-md p-2 bg-primary-800/30">
                        <span className="inline-block w-5 h-5 mr-3 mt-0.5 bg-primary-700 rounded-full flex-shrink-0 flex items-center justify-center text-xs">•</span>
                        <span>all information on the website that can be visited, viewed, or otherwise accessed through the use of electronic equipment;</span>
                      </li>
                      <li className="flex items-start rounded-md p-2 bg-primary-800/30">
                        <span className="inline-block w-5 h-5 mr-3 mt-0.5 bg-primary-700 rounded-full flex-shrink-0 flex items-center justify-center text-xs">•</span>
                        <span>the content of any e-mail sent to Buyers by the Seller and/or its representatives/employees, through electronic means and/or any other available means of communication;</span>
                      </li>
                      <li className="flex items-start rounded-md p-2 bg-primary-800/30">
                        <span className="inline-block w-5 h-5 mr-3 mt-0.5 bg-primary-700 rounded-full flex-shrink-0 flex items-center justify-center text-xs">•</span>
                        <span>information related to the products and/or services and/or rates practiced by the Seller in a certain period;</span>
                      </li>
                      <li className="flex items-start rounded-md p-2 bg-primary-800/30">
                        <span className="inline-block w-5 h-5 mr-3 mt-0.5 bg-primary-700 rounded-full flex-shrink-0 flex items-center justify-center text-xs">•</span>
                        <span>information related to the products and/or services and/or rates practiced by a third party with whom the Seller has concluded partnership contracts, in a certain period, if applicable;</span>
                      </li>
                      <li className="flex items-start rounded-md p-2 bg-primary-800/30">
                        <span className="inline-block w-5 h-5 mr-3 mt-0.5 bg-primary-700 rounded-full flex-shrink-0 flex items-center justify-center text-xs">•</span>
                        <span>data regarding the Seller, or other privileged data thereof.</span>
                      </li>
                    </ul>
                  
                    <p className="mt-5"><strong className="text-primary-300">Newsletter</strong> – means of periodic information, exclusively electronic, namely electronic mail (e-mail,) on the products and services and/or promotions carried out by the Seller in a certain period, without any commitment or obligation from the Seller regarding the information contained therein.</p>
                  
                    <p><strong className="text-primary-300">Specifications</strong> – the description of all the characteristics of the product/service as specified in the content of the website.</p>
                  
                    <p><strong className="text-primary-300">Restrictions/account suspension</strong> – Alpha Partner Security reserves the right to limit access to its services and to delete the account of any Buyer/Client, if it considers that access to the website and the existence of the account could harm Alpha Partner Security in any way.</p>
                  </div>
                  
                  <div className="flex items-center bg-primary-800/50 p-4 rounded-t-lg">
                    <Database className="text-primary-300 mr-3" size={24} />
                    <h3 className="text-xl font-bold text-white m-0">10. Personal Data Protection</h3>
                  </div>
                  
                  <div className="p-6 bg-primary-900/40 rounded-b-lg mb-8">
                    <p className="mt-0">10.1. Alpha Partner Security is registered in the Register of Evidence of Personal Data Processing under number 29801, so your personal data are processed in accordance with Law 677/2001.</p>
                  
                    <p>10.2. Alpha Partner Security processes your personal data, through automated and manual means intended for issuing invoices for goods and/or services, collecting any claims related to them, as well as resolving your requests in connection with the activity carried out by Alpha Partner Security.</p>
                  
                    <p>10.3. You hereby acknowledge, accept, and give your free consent that the personal data provided by you will enter the Alpha Partner Security database only for statistical and marketing purposes.</p>
                  
                    <p className="mb-3">10.4. You hereby acknowledge that your rights provided by law are guaranteed, namely:</p>
                  
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <div className="bg-primary-800/30 p-3 rounded-md flex items-start">
                        <span className="inline-block w-5 h-5 mr-2 mt-0.5 bg-primary-700 rounded-full flex-shrink-0 flex items-center justify-center text-xs">a</span>
                        <span>to be informed about the processing of your personal data, according to the law;</span>
                      </div>
                      <div className="bg-primary-800/30 p-3 rounded-md flex items-start">
                        <span className="inline-block w-5 h-5 mr-2 mt-0.5 bg-primary-700 rounded-full flex-shrink-0 flex items-center justify-center text-xs">b</span>
                        <span>to access your personal data;</span>
                      </div>
                      <div className="bg-primary-800/30 p-3 rounded-md flex items-start">
                        <span className="inline-block w-5 h-5 mr-2 mt-0.5 bg-primary-700 rounded-full flex-shrink-0 flex items-center justify-center text-xs">c</span>
                        <span>to intervene on your personal data;</span>
                      </div>
                      <div className="bg-primary-800/30 p-3 rounded-md flex items-start">
                        <span className="inline-block w-5 h-5 mr-2 mt-0.5 bg-primary-700 rounded-full flex-shrink-0 flex items-center justify-center text-xs">d</span>
                        <span>not to be subject to an individual decision with an automatic character;</span>
                      </div>
                      <div className="bg-primary-800/30 p-3 rounded-md flex items-start md:col-span-2">
                        <span className="inline-block w-5 h-5 mr-2 mt-0.5 bg-primary-700 rounded-full flex-shrink-0 flex items-center justify-center text-xs">e</span>
                        <span>to oppose the processing of personal data concerning you and to request the rectification, updating, or deletion of data under the conditions of the law – in the case of personal data processed for direct marketing purposes, this right can be exercised at any time, free of charge and without justification;</span>
                      </div>
                      <div className="bg-primary-800/30 p-3 rounded-md flex items-start">
                        <span className="inline-block w-5 h-5 mr-2 mt-0.5 bg-primary-700 rounded-full flex-shrink-0 flex items-center justify-center text-xs">f</span>
                        <span>to address justice in case violations of the legislation in the matter have been found.</span>
                      </div>
                    </div>
                  
                    <p className="mt-5">10.5. Based on a written, dated, and signed request, sent to the address of Alpha Partner Security: Strada Bradului 200 Sâncraiu de Mureș, Mureș County or by sending an email to the email address contact@aps-ms.ro, you can exercise, free of charge, the following rights:</p>
                  
                    <ul className="space-y-2 list-none pl-0 mt-3">
                      <li className="flex items-start p-3 bg-primary-800/30 rounded-lg">
                        <span className="inline-block w-5 h-5 mr-3 mt-0.5 bg-primary-700 rounded-full flex-shrink-0 flex items-center justify-center text-xs">—</span>
                        <span>once a year, to be informed whether your personal data are processed or not by Alpha Partner Security;</span>
                      </li>
                      <li className="flex items-start p-3 bg-primary-800/30 rounded-lg">
                        <span className="inline-block w-5 h-5 mr-3 mt-0.5 bg-primary-700 rounded-full flex-shrink-0 flex items-center justify-center text-xs">—</span>
                        <span>to access and intervene on the transmitted data;</span>
                      </li>
                      <li className="flex items-start p-3 bg-primary-800/30 rounded-lg">
                        <span className="inline-block w-5 h-5 mr-3 mt-0.5 bg-primary-700 rounded-full flex-shrink-0 flex items-center justify-center text-xs">—</span>
                        <span>to oppose the processing of data for well-founded and legitimate reasons related to their particular situation (except for the processing of direct marketing, in which case you can oppose at any time free of charge and without justification);</span>
                      </li>
                      <li className="flex items-start p-3 bg-primary-800/30 rounded-lg">
                        <span className="inline-block w-5 h-5 mr-3 mt-0.5 bg-primary-700 rounded-full flex-shrink-0 flex items-center justify-center text-xs">—</span>
                        <span>to request the deletion of data, except for the situations provided by law.</span>
                      </li>
                    </ul>
                  
                    <p className="mt-5">10.6. Personal information is information that you provide to us and that identifies you personally, such as name, email address, billing information, or other data that can be easily associated by Google or Facebook with such information, such as information associated with the Google Account, respectively Facebook.</p>
                  
                    <p className="mt-2">10.7. Alpha Partner Security uses personal data to provide the best quality services to clients/buyers, as well as, if applicable, marketing, advertising and publicity services, development, market research, statistics, tracking and monitoring of sales.</p>
                  </div>
                  
                  <div className="flex items-center bg-primary-800/50 p-4 rounded-t-lg">
                    <Mail className="text-primary-300 mr-3" size={24} />
                    <h3 className="text-xl font-bold text-white m-0">11. Newsletter</h3>
                  </div>
                  
                  <div className="p-6 bg-primary-900/40 rounded-b-lg mb-8">
                    <p className="mt-0">11.1. The Newsletter represents an electronic message (e-mail) sent periodically to you, if you expressly and unequivocally agree to the terms and conditions of this website. Any user can subscribe to the newsletter completely free. Subscription to the newsletter is done by completing the newsletter form. Once subscribed, the user gives his express and unequivocal agreement to all the provisions of these terms and conditions.</p>
                  
                    <p>11.2. You must ensure that the newsletter sent by Alpha Partner Security reaches the Inbox. In case the newsletter reaches the Spam / Junk / Bulk / Trash folder, you must press Not Spam / Not Junk.</p>
                  
                    <div className="p-4 bg-primary-800/40 rounded-lg mt-3">
                      <p className="text-primary-100 m-0">Alpha Partner Security respects your right to privacy, and if you no longer wish to receive newsletters sent by Alpha Partner Security, it is enough to unsubscribe. Unsubscription takes place immediately, and you will no longer receive subsequent newsletters unless you resubscribe.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center bg-primary-800/50 p-4 rounded-t-lg">
                    <Lock className="text-primary-300 mr-3" size={24} />
                    <h3 className="text-xl font-bold text-white m-0">12. Confidentiality</h3>
                  </div>
                  
                  <div className="p-6 bg-primary-900/40 rounded-b-lg mb-8">
                    <p className="mt-0">12.1. The Alpha Partner Security team tries to protect as much as possible the right to privacy and image of the website users. We aim to offer you, the website users, a safe online experience that does not negatively affect your personal life. In this sense, we make every effort to ensure that the information you enter into our database is used only for the purposes that you have in mind, that you know and have given your acceptance.</p>
                  
                    <p>12.2. You understand, accept, and agree that all Alpha Partner Security information that has been offered to you, regardless of the method of transmission, e-mail, telephone, represents confidential information of Alpha Partner Security and you hereby undertake to strictly maintain the confidential nature of these. Otherwise, Alpha Partner Security is entitled to claim damages.</p>
                  </div>
                  
                  <div className="flex items-center bg-primary-800/50 p-4 rounded-t-lg">
                    <BookOpen className="text-primary-300 mr-3" size={24} />
                    <h3 className="text-xl font-bold text-white m-0">13. Cookies</h3>
                  </div>
                  
                  <div className="p-6 bg-primary-900/40 rounded-b-lg mb-8">
                    <p className="mt-0">13.1. The cookie is a small text file that a website saves on your computer or mobile device when you visit it. Due to cookies, the website remembers, for a limited period of time, your actions and preferences (login, language, font size, and other display preferences). Thus, you no longer have to reintroduce them every time you return to the website or navigate from one page to another.</p>
                  
                    <div className="p-4 bg-primary-800/40 rounded-lg mt-3 mb-3 flex items-center">
                      <Link to="/privacy" className="text-primary-300 hover:text-primary-200 flex items-center">
                        <Shield size={20} className="mr-2" />
                        <span>To find out more information about cookies, please visit our cookie policy page</span>
                      </Link>
                    </div>
                  </div>
                  
                  <div className="flex items-center bg-primary-800/50 p-4 rounded-t-lg">
                    <Scale className="text-primary-300 mr-3" size={24} />
                    <h3 className="text-xl font-bold text-white m-0">14. Applicable law</h3>
                  </div>
                  
                  <div className="p-6 bg-primary-900/40 rounded-b-lg mb-8">
                    <p className="mt-0">14.1. This contract is subject to Romanian law. Any disputes arising between Alpha Partner Security and clients/buyers will be resolved amicably or, if this will not be possible, the disputes will be solved by the competent Romanian courts of law, from the headquarters of Alpha Partner Security.</p>
                  
                    <p>14.2. Alternative dispute resolution routes. According to EU regulations, a voluntary online dispute resolution platform operates accessible at the following link:</p>
                  
                    <div className="p-3 bg-primary-800/40 rounded-lg mt-3">
                      <a href="http://ec.europa.eu/consumers/odr" className="text-primary-300 hover:text-primary-200 flex items-center">
                        <span className="inline-block w-5 h-5 mr-2 mt-0.5 bg-primary-700 rounded-full flex-shrink-0 flex items-center justify-center text-xs">→</span>
                        http://ec.europa.eu/consumers/odr
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center bg-primary-800/50 p-4 rounded-t-lg">
                    <Leaf className="text-primary-300 mr-3" size={24} />
                    <h3 className="text-xl font-bold text-white m-0">15. Information on the obligation to protect the environment</h3>
                  </div>
                  
                  <div className="p-6 bg-primary-900/40 rounded-b-lg mb-8">
                    <p className="mt-0">15.1. Alpha Partner Security warns buyers that waste from any of the purchased equipment, including but not limited to electrical and electronic equipment (WEEE), may contain hazardous substances that have a negative impact on the environment and human health if not collected selectively.</p>
                  
                    <div className="p-4 bg-primary-800/40 rounded-lg my-4">
                      <p className="m-0 text-primary-100">Taking into account the provisions of GEO 195/2005 – regarding environmental protection, G.D 1037/2010, regarding waste electrical and electronic equipment, clients will consider the following:</p>
                    </div>
                  
                    <ul className="space-y-3 list-none pl-0 mt-5">
                      <li className="flex items-start p-3 bg-primary-800/30 rounded-lg">
                        <span className="inline-block w-7 h-7 mr-3 mt-0.5 bg-primary-700 rounded-full flex-shrink-0 flex items-center justify-center text-sm">1</span>
                        <span>Buyers have the obligation not to dispose of waste electrical and electronic equipment (WEEE) as unsorted municipal waste and to collect these WEEE selectively;</span>
                      </li>
                      <li className="flex items-start p-3 bg-primary-800/30 rounded-lg">
                        <span className="inline-block w-7 h-7 mr-3 mt-0.5 bg-primary-700 rounded-full flex-shrink-0 flex items-center justify-center text-sm">2</span>
                        <span>Alpha Partner Security will be exonerated from any claims coming from third parties and/or competent authorities, for and against any claims related to the improper collection and non-sorting of waste resulting from the equipment purchased by the buyer.</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="flex items-center bg-primary-800/50 p-4 rounded-t-lg">
                    <RefreshCw className="text-primary-300 mr-3" size={24} />
                    <h3 className="text-xl font-bold text-white m-0">16. Changes to Alpha Partner Security General Terms and Conditions</h3>
                  </div>
                  
                  <div className="p-6 bg-primary-900/40 rounded-b-lg mb-8">
                    <p className="mt-0">16.1. Alpha Partner Security reserves the right to periodically modify the content of this document, as well as the content of any section of the website it hosts, without prior notification of the Website Users/Clients/Buyers. You as a user/Client/Buyer understand, accept, and agree to periodically review this document as well as periodically check any policy of operation of the website.</p>
                  
                    <div className="p-4 bg-primary-800/50 rounded-lg mt-4">
                      <p className="m-0 text-primary-100">16.2. Thank you for using our services. We assure you that we will always try to offer you the best services and to remain an exceptional partner.</p>
                    </div>
                  </div>
                  
                  <p className="text-right mt-8 text-primary-200 italic font-medium">Last modified 16.02.2020</p>
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

export default TermsPage;