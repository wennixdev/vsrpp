import React, { useState } from 'react';
import { CheckCircle2, ChevronDown, ChevronUp } from 'lucide-react';

interface RuleCategory {
  title: string;
  rules: {
    title: string;
    description: string;
  }[];
}

const Rules = () => {
  const [expandedCategory, setExpandedCategory] = useState<number | null>(null);

  const ruleCategories: RuleCategory[] = [
    {
      title: "Základní pojmy a pravidla",
      rules: [
        {
          title: "STEAM NAME",
          description: "Zakázáno je používat jakoukoli formu reklamy nebo urážlivého textu ve vašem uživatelském jméně."
        },
        {
          title: "ADVERTISING",
          description: "Zakázáno je propagovat jiné servery nebo webové stránky bez předchozího povolení od správců serveru."
        },
        {
          title: "RESPEKTOVÁNÍ ADMINISTRATIVNÍHO TÝMU",
          description: "Vždy musíte projevovat respekt vůči členům administrativního týmu (ATEAMU) a akceptovat jejich rozhodnutí. Bez ohledu na to, zda hodnotí porušení pravidel ve hře, nějaký formát RP, porušení pravidel nebo chování hráče na Discordu. TRASHTALK VŮČI ČLENU ATEAMU/CELÉMU SERVERU = TRVALÝ BAN VE HŘE A NA DISCORDU."
        },
        {
          title: "STREAMOVÁNÍ",
          description: "Streamer je povinen mít vypnutý zvuk na svém živém vysílání během řešení reportu nebo ticketu. Zakázáno je streamovat obsah ticketů a lokace nelegálních frakcí a drogových míst."
        }
      ]
    },
    {
      title: "Roleplay základy",
      rules: [
        {
          title: "ROLEPLAY (RP)",
          description: "Hraní vytvořené postavy a jejího příběhu v uměle vytvořeném (herním) světě. Hráč je v podstatě herec, který se vždy snaží autenticky reagovat na situace, jako by se nacházel ve skutečném světě. RP musí být dodržováno v každém časovém okamžiku!"
        },
        {
          title: "LORE",
          description: "Lore představuje příběh vaší postavy, obsahující informace jako jméno postavy, původ, životní příběh, a jak se postava dostala do Los Santos. K lore jsou následně přiřazovány záznamy o událostech, které se v průběhu RP staly."
        },
        {
          title: "IC (In Character)",
          description: "Všechny události a situace, které se odehrávají za hranicemi vaší postavy. V rámci RP je Blackmarket & Darkchat anonymní, nezjistitelný a v souladu s RP principy NEDOSTUPNÝ PRO HACKING."
        },
        {
          title: "OOC (Out Of Character)",
          description: "Komunikace mimo herní postavu, například sdílení informací mimo herní scény, je povoleno pouze po vyzvání ze strany správce (ADMIN)."
        }
      ]
    },
    {
      title: "Herní mechaniky",
      rules: [
        {
          title: "/ME",
          description: "Popisuje specifickou činnost a nahrazuje animaci, kterou nelze provést přímo ve hře. Například: /me vezme láhev a umístí ji do batohu."
        },
        {
          title: "/DO",
          description: "Slouží k popisu provedení činnosti s očekáváním reakce jiného hráče nebo k popisu prostředí. Lhaní v /do je zakázáno."
        },
        {
          title: "BUNNYHOPPING",
          description: "Zákaz využívání zrychlení chůze při poskakování."
        },
        {
          title: "INVENTORY",
          description: "Veškeré předměty, které postava má u sebe, musí být reálně unesitelné. Předměty lze ukládat do kufrů, přihrádek vozidel, nemovitostí a frakčního skladu."
        }
      ]
    },
    {
      title: "Zakázané chování",
      rules: [
        {
          title: "METAGAMING",
          description: "Používání informací, které jste se dozvěděli OOC, a ne za svoji IC postavu. Nepoznávání postav podle hlasu, tváře, oblečení, pokud nemáte s člověkem delší interakci."
        },
        {
          title: "COMBATLOG",
          description: "Zákaz odpojení z RP akce nebo opuštění PC během RP. Zákaz odpojení při vloupání, okrádání, honičkách s LSPD. Při pádu hry se musíte vrátit na původní místo."
        },
        {
          title: "POWERGAMING",
          description: "Hraní na něco, co neexistuje nebo nelze v reálu umět. Zakázáno mluvit s dead screenem. Zakázáno hrát dvě státní složky na jedné postavě současně."
        },
        {
          title: "VDM (Vehicle Deathmatch)",
          description: "Bezdůvodné bourání do aut nebo bezdůvodné srážení lidí."
        }
      ]
    },
    {
      title: "RP Situace",
      rules: [
        {
          title: "FEAR RP",
          description: "Strach o svůj život v RP; každý musí projevovat strach o svůj život a hrát jej podle situace. Zahrnuje Dogfear, Jobfear a JailFear."
        },
        {
          title: "NON RP INJURIES",
          description: "Ignorování zranění, které vaše postava utrpěla. Střelná zranění se RPí až po skončení přestřelky."
        },
        {
          title: "KOS (Kill on Sight)",
          description: "Zabití bez předchozího RP. Není adekvátní důvod někoho zastřelit/zabít jen proto, že byl sražen nějakou osobou."
        },
        {
          title: "RDM (Random Death Match)",
          description: "Jakékoliv fyzické zaútočení na hráče bez předešlého RP. Bezdůvodné střílení po hráčích a místních bez předešlého adekvátního RP."
        }
      ]
    },
    {
      title: "Frakční pravidla",
      rules: [
        {
          title: "VSTUP DO FRAKCE",
          description: "Při vstupu do jakékoliv frakce musíte mít whitelist."
        },
        {
          title: "NELEGÁLNÍ FRAKCE",
          description: "Zákaz spolupráce mezi nelegálními skupinami a frakcemi při vykrádání. Gangy mohou využívat vše, co získají."
        },
        {
          title: "FRAKČNÍ DISCORD",
          description: "Každý člen frakce musí být připojen na frakčním Discordu. Je zakázáno používat jiný Discord bez souhlasu A-Teamu."
        },
        {
          title: "PRAVIDLA KORUPCE",
          description: "Chcete-li hrát jako korupční člen státních složek, musíte mít povolení přes ticket od A-Teamu."
        }
      ]
    },
    {
      title: "Speciální pravidla",
      rules: [
        {
          title: "GROSS RP",
          description: "Nechutný RP je povolen pouze za určitých podmínek a se souhlasem všech zúčastněných. Zahrnuje situace jako znásilnění, kanibalismus, mučení a další nechutné aktivity."
        },
        {
          title: "CHARACTER KILL (CK)",
          description: "Zabití postavy nastálo musí být schválené A-TEAMEM. Po CK nesmí hráč 1 měsíc hrát ve stejné frakci nebo nelegální skupině."
        },
        {
          title: "WATER EVADING",
          description: "Unikání přes oceán nebo moře, kdy hráč skočí do vody a začne plavat co nejdále od břehu, je zakázáno. Neplatí pro Alamo Sea."
        },
        {
          title: "CHEATING",
          description: "Jakékoliv používání hacků/cheatů nebo modifikace hry bude potrestáno trvalým banem a smazáním veškerého majetku, včetně VIP věcí."
        }
      ]
    }
  ];

  return (
    <div className="bg-gray-800 py-24" id="rules">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Pravidla serveru</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Pro zajištění příjemného herního zážitku pro všechny hráče prosím dodržujte následující pravidla.
          </p>
        </div>
        
        <div className="space-y-6">
          {ruleCategories.map((category, categoryIndex) => (
            <div 
              key={categoryIndex} 
              className="bg-gray-900 rounded-xl border border-lime-500/10 overflow-hidden"
            >
              <button
                onClick={() => setExpandedCategory(expandedCategory === categoryIndex ? null : categoryIndex)}
                className="w-full px-6 py-4 flex items-center justify-between text-left bg-gray-900 hover:bg-gray-800 transition-colors"
              >
                <h3 className="text-xl font-bold text-white">{category.title}</h3>
                {expandedCategory === categoryIndex ? (
                  <ChevronUp className="h-5 w-5 text-lime-400" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-lime-400" />
                )}
              </button>
              
              {expandedCategory === categoryIndex && (
                <div className="px-6 pb-6 space-y-4">
                  {category.rules.map((rule, ruleIndex) => (
                    <div key={ruleIndex} className="flex gap-4 pt-4 border-t border-gray-800">
                      <CheckCircle2 className="h-6 w-6 text-lime-400 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="text-lg font-bold text-white mb-2">{rule.title}</h4>
                        <p className="text-gray-400">{rule.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Rules;