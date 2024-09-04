const names = [
    {
        ID: "4321652774",
        nameFA: "حسین رزاقی ",
        nameEN: "Hossein Razaghi"
    },
    {
        ID: "8337923253",
        nameFA: "مصطفی علی بابایی بندبونی",
        nameEN: "Mostafa Alibabaie bandebuni"
    },
    {
        ID: "5282661195",
        nameFA: "حامد آگاهی فرد",
        nameEN: "Hamed Agahi Fard"
    },
    {
        ID: "9026972024",
        nameFA: "سعید بابایی",
        nameEN: "Saied Babaie"
    },
    {
        ID: "8297300544",
        nameFA: "ایمان الماسی",
        nameEN: "Iman Almasi"
    },
    {
        ID: "1580549251",
        nameFA: "ابوالفصل زائرکعبه",
        nameEN: "Abolfazl Zaerkabe"
    },
    {
        ID: "0321688481",
        nameFA: "شهرام عباسی طلابری",
        nameEN: "Shahram Abbasi Talabari"
    },
    {
        ID: "0083025995",
        nameFA: "دانیال تقی خان",
        nameEN: "Danial Taghikhan"
    },
    {
        ID: "0080596155",
        nameFA: "حمید داودوندی",
        nameEN: "Hamid Davoudvandi"
    },
    {
        ID: "0221652132",
        nameFA: "علیرضا صدق گوی حکم آبادی",
        nameEN: "Alireza Sedghgooye Hokm Abadi"
    },
    {
        ID: "0084016213",
        nameFA: "کوشیار حاجی محمد",
        nameEN: "Kooshyar Haji Mohammad"
    },
    {
        ID: "1286350611",
        nameFA: "کامبیز بهبهانی",
        nameEN: "Kambiz Behbahani"
    },
    {
        ID: "3718559870",
        nameFA: "ابوذر نظرپور",
        nameEN: "Abuzar NazarPour"
    },
    {
        ID: "0736932615",
        nameFA: "سحر سادات حسینی",
        nameEN: "Sahar Sadat Hosseini"
    },
    {
        ID: "3258540020",
        nameFA: "سیده فاطمه افتخاری",
        nameEN: "Seyede Fatemeh Eftekhari"
    },
    {
        ID: "1219324515",
        nameFA: "احسان مقیم نژآد سرحمامی",
        nameEN: "Ehsan Moghim Nezhad Sarhamami"
    },
    {
        ID: "7493379041",
        nameFA: "محمد منظمی تقدسی",
        nameEN: "Mohammad Monazzami Taghaddosi"
    },
    {
        ID: "2128288029",
        nameFA: "محسن بابابی",
        nameEN: "Mohsen Babaie"
    },
    {
        ID: "0084510773",
        nameFA: "بهنام سپهری",
        nameEN: "Behnam Sepehri"
    },
    {
        ID: "0071347291",
        nameFA: "حسین خدری",
        nameEN: "Hossein Khedri"
    },
    {
        ID: "0016306988",
        nameFA: "شایان قادری",
        nameEN: "Shayan Ghaderi"
    },
    {
        ID: "5879056732",
        nameFA: "محمد میرزاپور",
        nameEN: "Mohammd MirzaPour"
    },
    {
        ID: "0177242965",
        nameFA: "مهدی اسدی جامکانی",
        nameEN: "Mehdi Asadi Jamakani"
    },
    {
        ID: "0323968880",
        nameFA: "پیمان منتظری",
        nameEN: "Peyman Montazeri"
    },
    {
        ID: "2740855516",
        nameFA: "رضا قلیزاده یوسف آباد",
        nameEN: "Reza Gholizadeh Yousef Abad"
    },
    {
        ID: "0078470803",
        nameFA: "علیرضا نوری",
        nameEN: "Alireza nouri"
    },
    {
        ID: "0077035933",
        nameFA: "مجید غفاری",
        nameEN: "Majid Ghaffari"
    },
    {
        ID: "4280799865",
        nameFA: "مجید حقانی",
        nameEN: "Majid Haghani"
    },
    {
        ID: "1582216665",
        nameFA: "هادی حمید سعید",
        nameEN: "Hadi Hamid Saied"
    },
    {
        ID: "2221550056",
        nameFA: "احسان بحریه جهرمی",
        nameEN: "Ehsan Bahrieh Jahromi"
    },
    {
        ID: "1583184805",
        nameFA: "سعید مختاری",
        nameEN: "Saied Mokhtari"
    },
    {
        ID: "0011699345",
        nameFA: "حسین واشقانی فراهانی",
        nameEN: "Hossein Vasheghani Farahani"
    },
    {
        ID: "3341456767",
        nameFA: "علی پرنا",
        nameEN: "Ali Parna"
    },
    {
        ID: "5390005600",
        nameFA: "سید حسن موسوی",
        nameEN: "Seyyed Hassan Mosavi"
    },
    {
        ID: "0010711198",
        nameFA: "پارسا حسنی مرند",
        nameEN: "Parsa Hassani Marand"
    },
    {
        ID: "1582160317",
        nameFA: "حسین حمید سعید",
        nameEN: "Hossein Hamid Saied"
    },
    {
        ID: "1652995846",
        nameFA: "امین برزگری",
        nameEN: "Amin Barzegari"
    },
    {
        ID: "1382786808",
        nameFA: "مهدی نیرومند",
        nameEN: "Mehdi Niroumand"
    },
    {
        ID: "5030017501",
        nameFA: "محمد عابدین پور",
        nameEN: "Mohammad AbedinPour"
    },
    {
        ID: "4648938526",
        nameFA: "محمد میرزایی دیزج",
        nameEN: "Mohammad Mirzaie Dizaj"
    },
    {
        ID: "0063563576",
        nameFA: "علیرضا گلشائی",
        nameEN: "Alireza Golshaie"
    },
    {
        ID: "0084486163",
        nameFA: "عبدالرضا رحیمی راد",
        nameEN: "Abdolreza Rahimi Rad"
    },
    {
        ID: "0078027004",
        nameFA: "علی نقوی",
        nameEN: "Ali Naghavi"
    },
    {
        ID: "0493342222",
        nameFA: "سید مهدی سجادی",
        nameEN: "Seyyed Mehdi Sajjadi"
    },
    {
        ID: "4569897241",
        nameFA: "مجتبی سلیمانی",
        nameEN: "Mojtaba Soleymani"
    },
    {
        ID: "5938248078",
        nameFA: "علی باویله",
        nameEN: "Ali Bavileh"
    },
    {
        ID: "4324321132",
        nameFA: "علی رزاقی",
        nameEN: "Ali Razaghi"
    },
    {
        ID: "1651861994",
        nameFA: "اکبر منوچهری",
        nameEN: "Akbar Manouchehri"
    },
    {
        ID: "9202926476",
        nameFA: "سید رضا علوی طباطبایی",
        nameEN: "Seyyed Reza Alavi Tabatabaie"
    },
    {
        ID: "0945551940",
        nameFA: "مجتبی قربانی مقدم",
        nameEN: "Mojtaba Ghorbani Moghaddam"
    },
    {
        ID: "0014012987",
        nameFA: "امیر واشقانی فراهانی",
        nameEN: "Amir Vasheghani Farahani"
    },
    {
        ID: "0080467032",
        nameFA: "حسین محمدعلیزاده کله محله",
        nameEN: "Hossein Mohammad Alizadeh Kolle Mahaleh"
    },
    {
        ID: "1379283639",
        nameFA: "جواد محمدزاده خضرلو",
        nameEN: "Javad Mohammad Zahdeh Khezrloo"
    },
    {
        ID: "5866177226",
        nameFA: "مهدی آگاه",
        nameEN: "Mehdi Agah"
    },
    {
        ID: "3242136322",
        nameFA: "بهنیا رستمی",
        nameEN: "Behnia Rostami"
    },
    {
        ID: "1360852107",
        nameFA: "رضا عزیزی",
        nameEN: "Reza Azizi"
    },
    {
        ID: "4900178977",
        nameFA: "بابک نوروزی افشار",
        nameEN: "Babak Norouzi Afshar"
    },
    {
        ID: "6309341650",
        nameFA: "مجید رمضانی",
        nameEN: "Majid Ramezani"
    },
    {
        ID: "0840242255",
        nameFA: "شبنم نعمتی عرب",
        nameEN: "Shabnam Nemati Arab"
    },
    {
        ID: "9497599404",
        nameFA: "حامد استروشن",
        nameEN: "Hamed Estroshen"
    },
    {
        ID: "4322355579",
        nameFA: "سحرسادات حسینی",
        nameEN: "Sahar Sadat Hosseini"
    },
    {
        ID: "0014978555",
        nameFA: "زهرا علی بابا",
        nameEN: "Zahra Alibaba"
    },
    {
        ID: "0082537674",
        nameFA: "مهدی شریعتی",
        nameEN: "Mehdi Shariati"
    },
    {
        ID: "0080841449",
        nameFA: "حسین جاورسیانی",
        nameEN: "Hossein Javersiani"
    },
    {
        ID: "6653759555",
        nameFA: "محسن بابایی",
        nameEN: "Mohsen Babaie"
    },
    {
        ID: "0077058501",
        nameFA: "حامد سلطانشاه",
        nameEN: "Hamed Soltanshah"
    },
    {
        ID: "7620063307",
        nameFA: "علیرضا صدق گوی",
        nameEN: "Alireza Sedgh Gooy"
    },
    {
        ID: "0082793921",
        nameFA: "محمدهادی علیمحمدی",
        nameEN: "Mohammad Hadi Ali Mohammadi"
    },
    {
        ID: "0025066544",
        nameFA: "فاطمه واشقانی فراهانی",
        nameEN: "Fatemeh Vasheghani Farahani"
    },
    {
        ID: "5829648806",
        nameFA: "اکبرقاسمی",
        nameEN: "Akbar Ghasemi"
    },
    {
        ID: "1817115456",
        nameFA: "کامبیر بهبهانی",
        nameEN: "Kambiz Behbahani"
    },
    {
        ID: "4410466021",
        nameFA: "حسینعلی شکورلی",
        nameEN: "Hossein Ali Shakoorli"
    },
    {
        ID: "1582190240",
        nameFA: "یاسر حسنی مرند",
        nameEN: "Yaser Hassani Marand"
    },
    {
        ID: "711758862",
        nameFA: "مجتبی محمدزاده",
        nameEN: "Mojtaba Mohammad Zadeh"
    },
    {
        ID: "3605142370",
        nameFA: "سعید مولایی حسنوند",
        nameEN: "Saied Molaie Hasanvand"
    },
    {
        ID: "1451062060",
        nameFA: "ناصر اسدی",
        nameEN: "Naser Asadi"
    },
    {
        ID: "4111250831",
        nameFA: "حسین حسین قربان",
        nameEN: "Hossein Hossein Ghorban"
    },
    {
        ID: "9917644148",
        nameFA: "محسن غفاری",
        nameEN: "Mohsen Ghaffari"
    },
    {
        ID: "0064270122",
        nameFA: "محمد منظمی تقدسی ",
        nameEN: "Mohammad Monazzami Taghaddosi"
    },
    {
        ID: "0440453641",
        nameFA: "سید رضا علوی طبطبایی",
        nameEN: "Seyyed Reza Alavi Tabatabaie"
    },
    {
        ID: "3320046322",
        nameFA: "ابوذر نظر پور",
        nameEN: "Aboozar Nazarpour"
    },
    {
        ID: "1580221793",
        nameFA: "محمد میرزایی",
        nameEN: "Mohammad Mirzaie"
    },
    {
        ID: "4989968635",
        nameFA: "احسان مقیم نژاد",
        nameEN: "Ehsan Moghim Nezhad"
    },
    {
        ID: "0673962504",
        nameFA: "هادی بداغ آبادی",
        nameEN: "Hadi Bodagh Abadi"
    },
    {
        ID: "8243759883",
        nameFA: "عباس ترکمنی",
        nameEN: "Abbas Torkamani"
    },
    {
        ID: "8463796141",
        nameFA: "مجید رمضانی",
        nameEN: "Majid Ramezani"
    }

]

export default names