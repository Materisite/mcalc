const currencyPairs = {
    "MYREUR": "MYR/EUR",
    "CHFMYR": "CHF/MYR",
    "EURTZS": "EUR/TZS",
    "EURKZT": "EUR/KZT",
    "GBPCNY": "GBP/CNY",
    "TRYDKK": "TRY/DKK",
    "KRWTHB": "KRW/THB",
    "NZDAED": "NZD/AED",
    "GBPTRY": "GBP/TRY",
    "CHFMXN": "CHF/MXN",
    "CNYPLN": "CNY/PLN",
    "TRYPLN": "TRY/PLN",
    "USDZAR": "USD/ZAR",
    "NZDZAR": "NZD/ZAR",
    "CADZAR": "CAD/ZAR",
    "GBPZAR": "GBP/ZAR",
    "TWDZAR": "TWD/ZAR",
    "EURZAR": "EUR/ZAR",
    "JPYZAR": "JPY/ZAR",
    "AUDZAR": "AUD/ZAR",
    "INREUR": "INR/EUR",
    "GBPARS": "GBP/ARS",
    "NOKZAR": "NOK/ZAR",
    "EURBRL": "EUR/BRL",
    "KWDUSD": "KWD/USD",
    "GHSEUR": "GHS/EUR",
    "GBPMWK": "GBP/MWK",
    "SLLUSD": "SLL/USD",
    "KRWBRL": "KRW/BRL",
    "SARUSD": "SAR/USD",
    "THBGBP": "THB/GBP",
    "AUDINR": "AUD/INR",
    "ZARUSD": "ZAR/USD",
    "KRWSGD": "KRW/SGD",
    "USDQAR": "USD/QAR",
    "BRLARS": "BRL/ARS",
    "TRYCHF": "TRY/CHF",
    "SGDARS": "SGD/ARS",
    "XAGUSD": "XAG/USD",
    "ZARTHB": "ZAR/THB",
    "SGDSEK": "SGD/SEK",
    "CADRUB": "CAD/RUB",
    "EURNPR": "EUR/NPR",
    "EURCZK": "EUR/CZK",
    "EURLSL": "EUR/LSL",
    "KZTGBP": "KZT/GBP",
    "USDARS": "USD/ARS",
    "NGNJPY": "NGN/JPY",
    "EURSOS": "EUR/SOS",
    "CHFDKK": "CHF/DKK",
    "JPYCZK": "JPY/CZK",
    "CADMXN": "CAD/MXN",
    "AEDCHF": "AED/CHF",
    "USDMDL": "USD/MDL",
    "EURTTD": "EUR/TTD",
    "BRLAUD": "BRL/AUD",
    "CNYNZD": "CNY/NZD",
    "EURDKK": "EUR/DKK",
    "GBPCOP": "GBP/COP",
    "USDRWF": "USD/RWF",
    "CHFBRL": "CHF/BRL",
    "USDGHS": "USD/GHS",
    "TWDSEK": "TWD/SEK",
    "LRDUSD": "LRD/USD",
    "GBPXPF": "GBP/XPF",
    "IDRUSD": "IDR/USD",
    "USDMUR": "USD/MUR",
    "CHFPKR": "CHF/PKR",
    "TWDHKD": "TWD/HKD",
    "SEKCAD": "SEK/CAD",
    "ZARAED": "ZAR/AED",
    "USDHUF": "USD/HUF",
    "MYRSGD": "MYR/SGD",
    "MXNJPY": "MXN/JPY",
    "USDINR": "USD/INR",
    "MXNHKD": "MXN/HKD",
    "IDRJPY": "IDR/JPY",
    "KRWEUR": "KRW/EUR",
    "IDRAUD": "IDR/AUD",
    "EURLBP": "EUR/LBP",
    "NOKPLN": "NOK/PLN",
    "MYRUSD": "MYR/USD",
    "KESEUR": "KES/EUR",
    "GBPEGP": "GBP/EGP",
    "EURCNY": "EUR/CNY",
    "AEDINR": "AED/INR",
    "JPYBRL": "JPY/BRL",
    "EURCRC": "EUR/CRC",
    "SEKPLN": "SEK/PLN",
    "USDPLN": "USD/PLN",
    "TWDCNY": "TWD/CNY",
    "GBPDZD": "GBP/DZD",
    "SEKGBP": "SEK/GBP",
    "ZARNZD": "ZAR/NZD",
    "USDPHP": "USD/PHP",
    "BRLCHF": "BRL/CHF",
    "GBPTHB": "GBP/THB",
    "USDTZS": "USD/TZS",
    "AUDTWD": "AUD/TWD",
    "EURNIO": "EUR/NIO",
    "NZDDKK": "NZD/DKK",
    "SGDIDR": "SGD/IDR",
    "ILSGBP": "ILS/GBP",
    "CADKWD": "CAD/KWD",
    "USDKWD": "USD/KWD",
    "QARPKR": "QAR/PKR",
    "BRLZAR": "BRL/ZAR",
    "USDBDT": "USD/BDT",
    "NZDIDR": "NZD/IDR",
    "AEDNOK": "AED/NOK",
    "CZKPLN": "CZK/PLN",
    "EURHNL": "EUR/HNL",
    "KRWJPY": "KRW/JPY",
    "CADTHB": "CAD/THB",
    "CDFUSD": "CDF/USD",
    "EURMOP": "EUR/MOP",
    "MADGBP": "MAD/GBP",
    "EURPGK": "EUR/PGK",
    "KRWCHF": "KRW/CHF",
    "CHFIDR": "CHF/IDR",
    "GBPMAD": "GBP/MAD",
    "GBPBWP": "GBP/BWP",
    "USDALL": "USD/ALL",
    "BHDPKR": "BHD/PKR",
    "CADPLN": "CAD/PLN",
    "EURLAK": "EUR/LAK",
    "CADTRY": "CAD/TRY",
    "JPYTHB": "JPY/THB",
    "CADBRL": "CAD/BRL",
    "DKKAUD": "DKK/AUD",
    "MYRJPY": "MYR/JPY",
    "GBPISK": "GBP/ISK",
    "UYUUSD": "UYU/USD",
    "JPYMXN": "JPY/MXN",
    "GBPGTQ": "GBP/GTQ",
    "INRPKR": "INR/PKR",
    "GBPLBP": "GBP/LBP",
    "EURKES": "EUR/KES",
    "USDBND": "USD/BND",
    "AUDDKK": "AUD/DKK",
    "BRLHKD": "BRL/HKD",
    "HRKEUR": "HRK/EUR",
    "USDLKR": "USD/LKR",
    "PHPGBP": "PHP/GBP",
    "NZDTRY": "NZD/TRY",
    "EURBAM": "EUR/BAM",
    "AEDNZD": "AED/NZD",
    "USDRON": "USD/RON",
    "MYRIDR": "MYR/IDR",
    "DKKISK": "DKK/ISK",
    "GBPSCR": "GBP/SCR",
    "GBPINR": "GBP/INR",
    "CNHKRW": "CNH/KRW",
    "GBPPGK": "GBP/PGK",
    "USDNOK": "USD/NOK",
    "USDKZT": "USD/KZT",
    "CHFPLN": "CHF/PLN",
    "GBPKWD": "GBP/KWD",
    "AEDPKR": "AED/PKR",
    "USDSAR": "USD/SAR",
    "PLNILS": "PLN/ILS",
    "GBPXAF": "GBP/XAF",
    "CHFUZS": "CHF/UZS",
    "CADKRW": "CAD/KRW",
    "GBPMXN": "GBP/MXN",
    "BRLMXN": "BRL/MXN",
    "HUFDKK": "HUF/DKK",
    "SGDCNY": "SGD/CNY",
    "SEKAUD": "SEK/AUD",
    "CNHIDR": "CNH/IDR",
    "QARAED": "QAR/AED",
    "NOKJPY": "NOK/JPY",
    "DKKSEK": "DKK/SEK",
    "USDEGP": "USD/EGP",
    "NOKCHF": "NOK/CHF",
    "USDAED": "USD/AED",
    "THBPKR": "THB/PKR",
    "MWKGBP": "MWK/GBP",
    "AEDSAR": "AED/SAR",
    "GBPNGN": "GBP/NGN",
    "RONUSD": "RON/USD",
    "TWDJPY": "TWD/JPY",
    "KWDPKR": "KWD/PKR",
    "ILSPLN": "ILS/PLN",
    "EURKWD": "EUR/KWD",
    "CHFKRW": "CHF/KRW",
    "GBPBND": "GBP/BND",
    "EURBBD": "EUR/BBD",
    "KRWIDR": "KRW/IDR",
    "CADISK": "CAD/ISK",
    "JPYNOK": "JPY/NOK",
    "MXNUSD": "MXN/USD",
    "KRWMYR": "KRW/MYR",
    "CNYAUD": "CNY/AUD",
    "CHFILS": "CHF/ILS",
    "HKDIDR": "HKD/IDR",
    "BWPEUR": "BWP/EUR",
    "USDOMR": "USD/OMR",
    "CHFTHB": "CHF/THB",
    "USDDJF": "USD/DJF",
    "GBPDJF": "GBP/DJF",
    "ISKGBP": "ISK/GBP",
    "QARGBP": "QAR/GBP",
    "USDBRL": "USD/BRL",
    "HKDDKK": "HKD/DKK",
    "EUROMR": "EUR/OMR",
    "JPYDKK": "JPY/DKK",
    "BWPUSD": "BWP/USD",
    "AUDCZK": "AUD/CZK",
    "CADARS": "CAD/ARS",
    "GBPFJD": "GBP/FJD",
    "EURBND": "EUR/BND",
    "USDBMD": "USD/BMD",
    "EGPPKR": "EGP/PKR",
    "CNYZAR": "CNY/ZAR",
    "ILSEUR": "ILS/EUR",
    "GBPOMR": "GBP/OMR",
    "GBPKES": "GBP/KES",
    "GBPJMD": "GBP/JMD",
    "AUDNOK": "AUD/NOK",
    "MYRAUD": "MYR/AUD",
    "THBHKD": "THB/HKD",
    "BHDUSD": "BHD/USD",
    "MXNCHF": "MXN/CHF",
    "XAUUSD": "XAU/USD",
    "CADAED": "CAD/AED",
    "USDNIO": "USD/NIO",
    "USDCUP": "USD/CUP",
    "SEKJPY": "SEK/JPY",
    "THBIDR": "THB/IDR",
    "BGNUSD": "BGN/USD",
    "MXNZAR": "MXN/ZAR",
    "NOKISK": "NOK/ISK",
    "CNHTWD": "CNH/TWD",
    "EURLYD": "EUR/LYD",
    "INRCNY": "INR/CNY",
    "KRWCAD": "KRW/CAD",
    "USDMKD": "USD/MKD",
    "USDLAK": "USD/LAK",
    "JPYILS": "JPY/ILS",
    "BRLSEK": "BRL/SEK",
    "JPYMYR": "JPY/MYR",
    "SAREUR": "SAR/EUR",
    "INRUSD": "INR/USD",
    "NOKDKK": "NOK/DKK",
    "MKDUSD": "MKD/USD",
    "INRNZD": "INR/NZD",
    "EURUYU": "EUR/UYU",
    "USDTRY": "USD/TRY",
    "YERUSD": "YER/USD",
    "TWDMYR": "TWD/MYR",
    "DKKCHF": "DKK/CHF",
    "THBCHF": "THB/CHF",
    "GBPRUB": "GBP/RUB",
    "ZARHKD": "ZAR/HKD",
    "NZDCNY": "NZD/CNY",
    "IDRKRW": "IDR/KRW",
    "FJDUSD": "FJD/USD",
    "BRLSGD": "BRL/SGD",
    "GBPIDR": "GBP/IDR",
    "EURXPF": "EUR/XPF",
    "EGPEUR": "EGP/EUR",
    "ILSCHF": "ILS/CHF",
    "GBPPEN": "GBP/PEN",
    "NZDTWD": "NZD/TWD",
    "ZARCNY": "ZAR/CNY",
    "EURCVE": "EUR/CVE",
    "CADILS": "CAD/ILS",
    "SEKINR": "SEK/INR",
    "EURMKD": "EUR/MKD",
    "AUDILS": "AUD/ILS",
    "MXNDKK": "MXN/DKK",
    "EURGNF": "EUR/GNF",
    "EURCLP": "EUR/CLP",
    "MDLUSD": "MDL/USD",
    "AEDZAR": "AED/ZAR",
    "MUREUR": "MUR/EUR",
    "GBPXCD": "GBP/XCD",
    "USDRSD": "USD/RSD",
    "GBPLKR": "GBP/LKR",
    "EURVND": "EUR/VND",
    "USDDOP": "USD/DOP",
    "TWDEUR": "TWD/EUR",
    "RUBJPY": "RUB/JPY",
    "GBPNIO": "GBP/NIO",
    "JPYARS": "JPY/ARS",
    "GBPTND": "GBP/TND",
    "EURBGN": "EUR/BGN",
    "USDSOS": "USD/SOS",
    "USDBGN": "USD/BGN",
    "AEDCAD": "AED/CAD",
    "NGNGBP": "NGN/GBP",
    "THBSGD": "THB/SGD",
    "ARSJPY": "ARS/JPY",
    "HKDZAR": "HKD/ZAR",
    "EURBZD": "EUR/BZD",
    "USDYER": "USD/YER",
    "USDPYG": "USD/PYG",
    "ILSUSD": "ILS/USD",
    "IDRZAR": "IDR/ZAR",
    "RUBCHF": "RUB/CHF",
    "PLNEUR": "PLN/EUR",
    "CNHJPY": "CNH/JPY",
    "SZLUSD": "SZL/USD",
    "BHDEUR": "BHD/EUR",
    "JPYTWD": "JPY/TWD",
    "MYRCNY": "MYR/CNY",
    "ARSBRL": "ARS/BRL",
    "GBPETB": "GBP/ETB",
    "DZDUSD": "DZD/USD",
    "CNYUSD": "CNY/USD",
    "PKRJPY": "PKR/JPY",
    "GBPHNL": "GBP/HNL",
    "JPYKRW": "JPY/KRW",
    "CRCGBP": "CRC/GBP",
    "PLNCHF": "PLN/CHF",
    "DKKHUF": "DKK/HUF",
    "EURGHS": "EUR/GHS",
    "PHPNZD": "PHP/NZD",
    "USDCDF": "USD/CDF",
    "GBPSAR": "GBP/SAR",
    "DKKINR": "DKK/INR",
    "SZLGBP": "SZL/GBP",
    "CZKSEK": "CZK/SEK",
    "MYRZAR": "MYR/ZAR",
    "NZDCZK": "NZD/CZK",
    "USDXDR": "USD/XDR",
    "KRWSEK": "KRW/SEK",
    "HUFUSD": "HUF/USD",
    "CHFTWD": "CHF/TWD",
    "EURBWP": "EUR/BWP",
    "USDTHB": "USD/THB",
    "GBPNOK": "GBP/NOK",
    "USDSZL": "USD/SZL",
    "SEKISK": "SEK/ISK",
    "ZARBRL": "ZAR/BRL",
    "INRAUD": "INR/AUD",
    "EURPHP": "EUR/PHP",
    "CZKJPY": "CZK/JPY",
    "JPYISK": "JPY/ISK",
    "THBEUR": "THB/EUR",
    "KRWTWD": "KRW/TWD",
    "ZARKRW": "ZAR/KRW",
    "EURETB": "EUR/ETB",
    "EURBSD": "EUR/BSD",
    "USDSVC": "USD/SVC",
    "CHFINR": "CHF/INR",
    "SGDMXN": "SGD/MXN",
    "AUDPLN": "AUD/PLN",
    "INRHKD": "INR/HKD",
    "HKDINR": "HKD/INR",
    "EURMVR": "EUR/MVR",
    "RSDEUR": "RSD/EUR",
    "CHFAED": "CHF/AED",
    "SGDMYR": "SGD/MYR",
    "KRWUSD": "KRW/USD",
    "CADSEK": "CAD/SEK",
    "GBPMUR": "GBP/MUR",
    "GBPBDT": "GBP/BDT",
    "EURUZS": "EUR/UZS",
    "NZDSEK": "NZD/SEK",
    "TWDPKR": "TWD/PKR",
    "TRYUSD": "TRY/USD",
    "CHFUSD": "CHF/USD",
    "PHPAUD": "PHP/AUD",
    "CHFSGD": "CHF/SGD",
    "CHFRUB": "CHF/RUB",
    "CHFNOK": "CHF/NOK",
    "MXNGBP": "MXN/GBP",
    "SGDDKK": "SGD/DKK",
    "USDJOD": "USD/JOD",
    "SCRGBP": "SCR/GBP",
    "DJFGBP": "DJF/GBP",
    "AUDCNH": "AUD/CNH",
    "DKKNOK": "DKK/NOK",
    "IDRTWD": "IDR/TWD",
    "EURBIF": "EUR/BIF",
    "AEDSEK": "AED/SEK",
    "INRTWD": "INR/TWD",
    "USDUAH": "USD/UAH",
    "USDPGK": "USD/PGK",
    "USDILS": "USD/ILS",
    "GBPBRL": "GBP/BRL",
    "AEDJPY": "AED/JPY",
    "MYRNZD": "MYR/NZD",
    "NOKCAD": "NOK/CAD",
    "IDRMYR": "IDR/MYR",
    "USDZAC": "USD/ZAC",
    "USDCVE": "USD/CVE",
    "USDBWP": "USD/BWP",
    "TWDIDR": "TWD/IDR",
    "USDBHD": "USD/BHD",
    "XCDGBP": "XCD/GBP",
    "BRLUSD": "BRL/USD",
    "GBPMVR": "GBP/MVR",
    "IDRCNY": "IDR/CNY",
    "USDNAD": "USD/NAD",
    "ZARCHF": "ZAR/CHF",
    "AUDBRL": "AUD/BRL",
    "USDUZS": "USD/UZS",
    "THBUSD": "THB/USD",
    "PHPUSD": "PHP/USD",
    "EURMDL": "EUR/MDL",
    "USDCNY": "USD/CNY",
    "PLNHUF": "PLN/HUF",
    "THBKRW": "THB/KRW",
    "OMRGBP": "OMR/GBP",
    "EURDOP": "EUR/DOP",
    "RUBGBP": "RUB/GBP",
    "MYRKRW": "MYR/KRW",
    "MYRINR": "MYR/INR",
    "EURSEK": "EUR/SEK",
    "EURBDT": "EUR/BDT",
    "ISKDKK": "ISK/DKK",
    "EURILS": "EUR/ILS",
    "EUREGP": "EUR/EGP",
    "AUDTRY": "AUD/TRY",
    "HUFCHF": "HUF/CHF",
    "SGDKRW": "SGD/KRW",
    "EURSAR": "EUR/SAR",
    "HKDBRL": "HKD/BRL",
    "MYRTWD": "MYR/TWD",
    "CADTWD": "CAD/TWD",
    "OMRUSD": "OMR/USD",
    "NZDMXN": "NZD/MXN",
    "GBPDOP": "GBP/DOP",
    "HKDCNY": "HKD/CNY",
    "BDTJPY": "BDT/JPY",
    "KESZAR": "KES/ZAR",
    "EURALL": "EUR/ALL",
    "NOKEUR": "NOK/EUR",
    "KRWINR": "KRW/INR",
    "NZDTHB": "NZD/THB",
    "USDAMD": "USD/AMD",
    "NZDKRW": "NZD/KRW",
    "SCRUSD": "SCR/USD",
    "JPYIDR": "JPY/IDR",
    "ETBGBP": "ETB/GBP",
    "MYRTHB": "MYR/THB",
    "JODUSD": "JOD/USD",
    "USDCOP": "USD/COP",
    "MYRCHF": "MYR/CHF",
    "INRKRW": "INR/KRW",
    "DKKEUR": "DKK/EUR",
    "THBCAD": "THB/CAD",
    "DKKJPY": "DKK/JPY",
    "USDVND": "USD/VND",
    "HRKUSD": "HRK/USD",
    "GBPBGN": "GBP/BGN",
    "AUDHUF": "AUD/HUF",
    "USDIQD": "USD/IQD",
    "USDTND": "USD/TND",
    "EURNAD": "EUR/NAD",
    "EURNZD": "EUR/NZD",
    "AUDEUR": "AUD/EUR",
    "HKDCHF": "HKD/CHF",
    "JPYCAD": "JPY/CAD",
    "EURUSD": "EUR/USD",
    "AUDJPY": "AUD/JPY",
    "GBPCHF": "GBP/CHF",
    "NZDSGD": "NZD/SGD",
    "CADSGD": "CAD/SGD",
    "NZDJPY": "NZD/JPY",
    "CHFEUR": "CHF/EUR",
    "AUDGBP": "AUD/GBP",
    "NZDHKD": "NZD/HKD",
    "CHFCAD": "CHF/CAD",
    "GBPSGD": "GBP/SGD",
    "HKDNZD": "HKD/NZD",
    "EURCHF": "EUR/CHF",
    "EURGBP": "EUR/GBP",
    "NZDGBP": "NZD/GBP",
    "NZDEUR": "NZD/EUR",
    "CADUSD": "CAD/USD",
    "NZDCHF": "NZD/CHF",
    "NZDCAD": "NZD/CAD",
    "JPYAUD": "JPY/AUD",
    "NZDAUD": "NZD/AUD",
    "USDMXN": "USD/MXN",
    "USDNGN": "USD/NGN",
    "USDIDR": "USD/IDR",
    "EURRWF": "EUR/RWF",
    "CADPKR": "CAD/PKR",
    "CNHINR": "CNH/INR",
    "EURPLN": "EUR/PLN",
    "NOKSEK": "NOK/SEK",
    "IDRCAD": "IDR/CAD",
    "TWDCAD": "TWD/CAD",
    "GBPBHD": "GBP/BHD",
    "EURINR": "EUR/INR",
    "PHPEUR": "PHP/EUR",
    "CNHPHP": "CNH/PHP",
    "HKDSEK": "HKD/SEK",
    "THBMYR": "THB/MYR",
    "IDRTHB": "IDR/THB",
    "ZARPKR": "ZAR/PKR",
    "TWDGBP": "TWD/GBP",
    "TRYJPY": "TRY/JPY",
    "PKRGBP": "PKR/GBP",
    "PENGBP": "PEN/GBP",
    "AEDAUD": "AED/AUD",
    "PLNDKK": "PLN/DKK",
    "CHFZAR": "CHF/ZAR",
    "HKDPKR": "HKD/PKR",
    "EURAED": "EUR/AED",
    "MURGBP": "MUR/GBP",
    "CNYGBP": "CNY/GBP",
    "CHFSEK": "CHF/SEK",
    "CNHTHB": "CNH/THB",
    "ARSEUR": "ARS/EUR",
    "MYRCAD": "MYR/CAD",
    "THBJPY": "THB/JPY",
    "GBPCZK": "GBP/CZK",
    "GHSUSD": "GHS/USD",
    "EURUGX": "EUR/UGX",
    "GBPHUF": "GBP/HUF",
    "CHFISK": "CHF/ISK",
    "ARSGBP": "ARS/GBP",
    "CNYCAD": "CNY/CAD",
    "ISKCHF": "ISK/CHF",
    "KRWCNY": "KRW/CNY",
    "EURCOP": "EUR/COP",
    "EURMYR": "EUR/MYR",
    "GBPTZS": "GBP/TZS",
    "PLNJPY": "PLN/JPY",
    "AEDUSD": "AED/USD",
    "USDNZD": "USD/NZD",
    "USDJPY": "USD/JPY",
    "HKDUSD": "HKD/USD",
    "CHFHKD": "CHF/HKD",
    "JPYCLP": "JPY/CLP",
    "CZKUSD": "CZK/USD",
    "JMDGBP": "JMD/GBP",
    "GBPHRK": "GBP/HRK",
    "DKKPKR": "DKK/PKR",
    "SARPKR": "SAR/PKR",
    "CZKEUR": "CZK/EUR",
    "USDMYR": "USD/MYR",
    "QARUSD": "QAR/USD",
    "PLNSEK": "PLN/SEK",
    "EURNOK": "EUR/NOK",
    "GBPEUR": "GBP/EUR",
    "HUFEUR": "HUF/EUR",
    "NZDPKR": "NZD/PKR",
    "INRMYR": "INR/MYR",
    "USDDZD": "USD/DZD",
    "EURMAD": "EUR/MAD",
    "GBPCRC": "GBP/CRC",
    "EURPEN": "EUR/PEN",
    "SEKCZK": "SEK/CZK",
    "EURHUF": "EUR/HUF",
    "EURSZL": "EUR/SZL",
    "EURHTG": "EUR/HTG",
    "USDXOF": "USD/XOF",
    "RONGBP": "RON/GBP",
    "KWDGBP": "KWD/GBP",
    "AUDPHP": "AUD/PHP",
    "USDHRK": "USD/HRK",
    "CNYJPY": "CNY/JPY",
    "EURPYG": "EUR/PYG",
    "AEDGBP": "AED/GBP",
    "EURMMK": "EUR/MMK",
    "JPYRUB": "JPY/RUB",
    "TWDINR": "TWD/INR",
    "GBPVND": "GBP/VND",
    "THBNZD": "THB/NZD",
    "KRWGBP": "KRW/GBP",
    "AEDEUR": "AED/EUR",
    "GBPUAH": "GBP/UAH",
    "EURMXN": "EUR/MXN",
    "HKDTHB": "HKD/THB",
    "NZDPLN": "NZD/PLN",
    "USDKRW": "USD/KRW",
    "DOPGBP": "DOP/GBP",
    "CADNOK": "CAD/NOK",
    "GBPCLP": "GBP/CLP",
    "USDRUB": "USD/RUB",
    "EURRUB": "EUR/RUB",
    "USDBIF": "USD/BIF",
    "MXNBRL": "MXN/BRL",
    "JPYPKR": "JPY/PKR",
    "ZARJPY": "ZAR/JPY",
    "INRCAD": "INR/CAD",
    "GBPPHP": "GBP/PHP",
    "GBPTTD": "GBP/TTD",
    "THBZAR": "THB/ZAR",
    "EURNGN": "EUR/NGN",
    "SGDZAR": "SGD/ZAR",
    "EURISK": "EUR/ISK",
    "LKRUSD": "LKR/USD",
    "ZARSGD": "ZAR/SGD",
    "INRTHB": "INR/THB",
    "USDLSL": "USD/LSL",
    "USDAFN": "USD/AFN",
    "TWDSGD": "TWD/SGD",
    "TNDGBP": "TND/GBP",
    "CHFTRY": "CHF/TRY",
    "USDCLP": "USD/CLP",
    "EURKRW": "EUR/KRW",
    "CZKCHF": "CZK/CHF",
    "CADCNY": "CAD/CNY",
    "SGDPKR": "SGD/PKR",
    "USDMOP": "USD/MOP",
    "KRWHKD": "KRW/HKD",
    "KESUSD": "KES/USD",
    "CHFBWP": "CHF/BWP",
    "SEKZAR": "SEK/ZAR",
    "RUBUSD": "RUB/USD",
    "TWDNZD": "TWD/NZD",
    "ARSUSD": "ARS/USD",
    "GBPPKR": "GBP/PKR",
    "MYRGBP": "MYR/GBP",
    "SGDTWD": "SGD/TWD",
    "MXNSGD": "MXN/SGD",
    "EURAMD": "EUR/AMD",
    "USDDKK": "USD/DKK",
    "GBPDKK": "GBP/DKK",
    "USDBOB": "USD/BOB",
    "PHPJPY": "PHP/JPY",
    "USDFJD": "USD/FJD",
    "EURTWD": "EUR/TWD",
    "CADINR": "CAD/INR",
    "NZDNOK": "NZD/NOK",
    "HKDKRW": "HKD/KRW",
    "INRJPY": "INR/JPY",
    "RSDUSD": "RSD/USD",
    "IDRGBP": "IDR/GBP",
    "ZARMXN": "ZAR/MXN",
    "DKKUSD": "DKK/USD",
    "CADMYR": "CAD/MYR",
    "ZARGBP": "ZAR/GBP",
    "SEKILS": "SEK/ILS",
    "CLPGBP": "CLP/GBP",
    "USDCNH": "USD/CNH",
    "SGDTHB": "SGD/THB",
    "EURGTQ": "EUR/GTQ",
    "USDXAF": "USD/XAF",
    "USDGNF": "USD/GNF",
    "NZDPHP": "NZD/PHP",
    "INRZAR": "INR/ZAR",
    "MXNCAD": "MXN/CAD",
    "EGPJPY": "EGP/JPY",
    "USDLYD": "USD/LYD",
    "GBPBMD": "GBP/BMD",
    "LBPUSD": "LBP/USD",
    "BDTGBP": "BDT/GBP",
    "IDREUR": "IDR/EUR",
    "SGDINR": "SGD/INR",
    "NZDHUF": "NZD/HUF",
    "CHFARS": "CHF/ARS",
    "INRGBP": "INR/GBP",
    "KRWAUD": "KRW/AUD",
    "AUDMYR": "AUD/MYR",
    "NZDINR": "NZD/INR",
    "USDMXV": "USD/MXV",
    "EURTND": "EUR/TND",
    "EURJMD": "EUR/JMD",
    "CNYEUR": "CNY/EUR",
    "CNHHKD": "CNH/HKD",
    "EURIDR": "EUR/IDR",
    "EURSCR": "EUR/SCR",
    "DKKPLN": "DKK/PLN",
    "EURUAH": "EUR/UAH",
    "BRLEUR": "BRL/EUR",
    "DKKCAD": "DKK/CAD",
    "THBCNY": "THB/CNY",
    "SGDBRL": "SGD/BRL",
    "NOKGBP": "NOK/GBP",
    "ZARAUD": "ZAR/AUD",
    "CNYCHF": "CNY/CHF",
    "TWDCHF": "TWD/CHF",
    "EURKHR": "EUR/KHR",
    "GBPUGX": "GBP/UGX",
    "HKDTWD": "HKD/TWD",
    "PGKGBP": "PGK/GBP",
    "AUDARS": "AUD/ARS",
    "DKKGBP": "DKK/GBP",
    "USDSCR": "USD/SCR",
    "USDHTG": "USD/HTG",
    "USDCRC": "USD/CRC",
    "HKDPLN": "HKD/PLN",
    "PLNCZK": "PLN/CZK",
    "USDMAD": "USD/MAD",
    "USDBZD": "USD/BZD",
    "SEKDKK": "SEK/DKK",
    "GBPALL": "GBP/ALL",
    "AUDSEK": "AUD/SEK",
    "GBPJOD": "GBP/JOD",
    "IDRNZD": "IDR/NZD",
    "RUBEUR": "RUB/EUR",
    "ZARTWD": "ZAR/TWD",
    "CHFCNY": "CHF/CNY",
    "AUDTHB": "AUD/THB",
    "UAHUSD": "UAH/USD",
    "EURRON": "EUR/RON",
    "NZDMYR": "NZD/MYR",
    "MADUSD": "MAD/USD",
    "EURJOD": "EUR/JOD",
    "CHFCZK": "CHF/CZK",
    "EURBOB": "EUR/BOB",
    "DKKHKD": "DKK/HKD",
    "EURLKR": "EUR/LKR",
    "USDGMD": "USD/GMD",
    "DKKZAR": "DKK/ZAR",
    "GBPILS": "GBP/ILS",
    "EURTHB": "EUR/THB",
    "USDETB": "USD/ETB",
    "THBTWD": "THB/TWD",
    "DKKTHB": "DKK/THB",
    "SEKCNH": "SEK/CNH",
    "AUDAED": "AUD/AED",
    "OMRAED": "OMR/AED",
    "EURDJF": "EUR/DJF",
    "CHFSZL": "CHF/SZL",
    "AUDIDR": "AUD/IDR",
    "VNDJPY": "VND/JPY",
    "USDKMF": "USD/KMF",
    "SEKUSD": "SEK/USD",
    "TRYZAR": "TRY/ZAR",
    "GBPKRW": "GBP/KRW",
    "BRLJPY": "BRL/JPY",
    "GBPSZL": "GBP/SZL",
    "AUDPKR": "AUD/PKR",
    "JPYSEK": "JPY/SEK",
    "USDISK": "USD/ISK",
    "TWDUSD": "TWD/USD",
    "EURBHD": "EUR/BHD",
    "NOKUSD": "NOK/USD",
    "USDNPR": "USD/NPR",
    "GBPQAR": "GBP/QAR",
    "TTDGBP": "TTD/GBP",
    "XPDUSD": "XPD/USD",
    "GBPBIF": "GBP/BIF",
    "IDRCHF": "IDR/CHF",
    "TWDAUD": "TWD/AUD",
    "HKDMXN": "HKD/MXN",
    "ILSJPY": "ILS/JPY",
    "USDCZK": "USD/CZK",
    "ZARBWP": "ZAR/BWP",
    "RUBPLN": "RUB/PLN",
    "GBPSEK": "GBP/SEK",
    "USDXPF": "USD/XPF",
    "USDGTQ": "USD/GTQ",
    "PKRZAR": "PKR/ZAR",
    "CLPUSD": "CLP/USD",
    "TWDTHB": "TWD/THB",
    "GBPTWD": "GBP/TWD",
    "IDRINR": "IDR/INR",
    "EURMWK": "EUR/MWK",
    "JPYINR": "JPY/INR",
    "ZARINR": "ZAR/INR",
    "USDLRD": "USD/LRD",
    "GBPGBP": "GBP/GBP",
    "DKKSGD": "DKK/SGD",
    "MYRHKD": "MYR/HKD",
    "USDKES": "USD/KES",
    "MXNEUR": "MXN/EUR",
    "USDKHR": "USD/KHR",
    "GBPMYR": "GBP/MYR",
    "SEKEUR": "SEK/EUR",
    "SEKCHF": "SEK/CHF",
    "EURCUP": "EUR/CUP",
    "IDRSGD": "IDR/SGD",
    "EURMUR": "EUR/MUR",
    "GBPHTG": "GBP/HTG",
    "AUDKRW": "AUD/KRW",
    "USDUYU": "USD/UYU",
    "BRLKRW": "BRL/KRW",
    "THBAUD": "THB/AUD",
    "GBPIQD": "GBP/IQD",
    "USDSLL": "USD/SLL",
    "MXNAUD": "MXN/AUD",
    "TRYEUR": "TRY/EUR",
    "THBINR": "THB/INR",
    "MVRUSD": "MVR/USD",
    "CHFHUF": "CHF/HUF",
    "AUDFJD": "AUD/FJD",
    "PLNRUB": "PLN/RUB",
    "DKKCZK": "DKK/CZK",
    "CADIDR": "CAD/IDR",
    "SEKNOK": "SEK/NOK",
    "MURUSD": "MUR/USD",
    "TNDUSD": "TND/USD",
    "EURYER": "EUR/YER",
    "AUDCHF": "AUD/CHF",
    "CADEUR": "CAD/EUR",
    "HKDGBP": "HKD/GBP",
    "GBPAUD": "GBP/AUD",
    "SGDUSD": "SGD/USD",
    "HKDEUR": "HKD/EUR",
    "JPYNZD": "JPY/NZD",
    "CADGBP": "CAD/GBP",
    "SGDNZD": "SGD/NZD",
    "EURCAD": "EUR/CAD",
    "EURAUD": "EUR/AUD",
    "JPYSGD": "JPY/SGD",
    "EURJPY": "EUR/JPY",
    "AUDCAD": "AUD/CAD",
    "CADCHF": "CAD/CHF",
    "JPYHKD": "JPY/HKD",
    "EURSGD": "EUR/SGD",
    "USDHKD": "USD/HKD",
    "GBPHKD": "GBP/HKD",
    "USDGBP": "USD/GBP",
    "USDEUR": "USD/EUR",
    "GBPCAD": "GBP/CAD",
    "USDCHF": "USD/CHF",
    "USDCAD": "USD/CAD",
    "USDAUD": "USD/AUD",
    "GBPJPY": "GBP/JPY",
    "EURHKD": "EUR/HKD",
    "JPYUSD": "JPY/USD",
    "JPYGBP": "JPY/GBP",
    "HKDSGD": "HKD/SGD",
    "CADNZD": "CAD/NZD",
    "CADHKD": "CAD/HKD",
    "JPYCHF": "JPY/CHF",
    "CHFAUD": "CHF/AUD",
    "SGDJPY": "SGD/JPY",
    "CHFJPY": "CHF/JPY",
    "JPYEUR": "JPY/EUR",
    "GBPNZD": "GBP/NZD",
    "SGDHKD": "SGD/HKD",
    "AUDNZD": "AUD/NZD",
    "SGDGBP": "SGD/GBP",
    "HKDCAD": "HKD/CAD",
    "AUDSGD": "AUD/SGD",
    "SGDEUR": "SGD/EUR",
    "CHFGBP": "CHF/GBP",
    "CHFNZD": "CHF/NZD",
    "SGDCHF": "SGD/CHF",
    "SGDCAD": "SGD/CAD",
    "HKDAUD": "HKD/AUD",
    "HKDJPY": "HKD/JPY",
    "GBPUSD": "GBP/USD",
    "AUDHKD": "AUD/HKD",
    "CADAUD": "CAD/AUD",
    "CADJPY": "CAD/JPY",
    "SGDAUD": "SGD/AUD",
    "NZDUSD": "NZD/USD",
    "JPYPLN": "JPY/PLN",
    "TWDKRW": "TWD/KRW",
    "USDTWD": "USD/TWD",
    "SGDPLN": "SGD/PLN",
    "EURPAB": "EUR/PAB",
    "USDUSD": "USD/USD",
    "USDMWK": "USD/MWK",
    "CLPEUR": "CLP/EUR",
    "USDLBP": "USD/LBP",
    "EGPUSD": "EGP/USD",
    "HKDMYR": "HKD/MYR",
    "DKKNZD": "DKK/NZD",
    "JPYCNY": "JPY/CNY",
    "CADDKK": "CAD/DKK",
    "KRWZAR": "KRW/ZAR",
    "CZKDKK": "CZK/DKK",
    "GBPAED": "GBP/AED",
    "INRCHF": "INR/CHF",
    "USDSEK": "USD/SEK",
    "USDMMK": "USD/MMK",
    "USDHNL": "USD/HNL",
    "USDMVR": "USD/MVR",
    "ZARDKK": "ZAR/DKK",
    "JPYAED": "JPY/AED",
    "GBPPLN": "GBP/PLN",
    "EURARS": "EUR/ARS",
    "PLNUSD": "PLN/USD",
    "KRWNZD": "KRW/NZD",
    "CNYHKD": "CNY/HKD",
    "EURPKR": "EUR/PKR",
    "OMRPKR": "OMR/PKR",
    "EURXOF": "EUR/XOF",
    "EURXAF": "EUR/XAF",
    "EURTRY": "EUR/TRY",
    "EURSVC": "EUR/SVC",
    "EURQAR": "EUR/QAR",
    "BRLRUB": "BRL/RUB",
    "EURKYD": "EUR/KYD",
    "EURIQD": "EUR/IQD",
    "EURFJD": "EUR/FJD",
    "EUREUR": "EUR/EUR",
    "EURDZD": "EUR/DZD",
    "ZARSEK": "ZAR/SEK",
    "ZARPLN": "ZAR/PLN",
    "ZARPHP": "ZAR/PHP",
    "ZARNOK": "ZAR/NOK",
    "ZARKES": "ZAR/KES",
    "ZARIDR": "ZAR/IDR",
    "USDSGD": "USD/SGD",
    "ZAREUR": "ZAR/EUR",
    "USDPEN": "USD/PEN",
    "USDPAB": "USD/PAB",
    "ZARCAD": "ZAR/CAD",
    "AUDUSD": "AUD/USD",
    "AUDMXN": "AUD/MXN",
    "AUDCNY": "AUD/CNY",
    "USDPKR": "USD/PKR"
}