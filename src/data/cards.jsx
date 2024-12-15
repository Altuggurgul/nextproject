import resim1 from '@/images/Report1/7_Sat_page_1.png';
import resim2 from '@/images/Report2/Satıs_page_1.png';
import resim3 from '@/images/Report3/Stok__page_1.png';
import resim4 from '@/images/Report4/1_Uru_page_1.png';
import resim5 from '@/images/Report5/Satıs_page_1.png';
import resim6 from '@/images/Report6/HR_Da_page_1.png';
import resim7 from '@/images/Report7/Sosya_page_1.png';
import resim8 from '@/images/Report8/Muste_page_1.png';
import resim9 from '@/images/Report9/1_Fin_page_1.png';
import resim10 from '@/images/Report10/1_Web_page_1.png';
import resim11 from '@/images/Report11/HR_Da_page_1.png';
import resim12 from '@/images/Report12/Satıs_page_1.png';
import resim13 from '@/images/Report13/fp_20_page_1.png';
import resim14 from '@/images/Report14/fp_20_page_1.png';
import resim15 from '@/images/Report15/HR_Da_page_1.png';
import resim16 from '@/images/Report16/REPFi_page_1.png';
import resim17 from '@/images/Report17/20_Cu_page_1.png';
import resim18 from '@/images/Report18/21_Ex_page_1.png';
import resim19 from '@/images/Report19/22_Pr_page_1.png';
import resim20 from '@/images/Report20/23_Re_page_1.png';
import resim21 from '@/images/Report21/24_HR_page_1.png';
import resim22 from '@/images/Report22/25_Cr_page_1.png';
import resim23 from '@/images/Report23/26_ca_page_1.png';
import resim24 from '@/images/Report24/1. Xm_page_1.png';
import resim25 from '@/images/Report25/CRM Sayfa1.png';

const importAllImages = (r) => {
    return r.keys().map(r);
  };

const report1Images = importAllImages(require.context('@/images/Report1', false, /\.(jpe?g|png)$/));
const report2Images = importAllImages(require.context('@/images/Report2', false, /\.(jpe?g|png)$/));
const report3Images = importAllImages(require.context('@/images/Report3', false, /\.(jpe?g|png)$/));
const report4Images = importAllImages(require.context('@/images/Report4', false, /\.(jpe?g|png)$/));
const report5Images = importAllImages(require.context('@/images/Report5', false, /\.(jpe?g|png)$/));
const report6Images = importAllImages(require.context('@/images/Report6', false, /\.(jpe?g|png)$/));
const report7Images = importAllImages(require.context('@/images/Report7', false, /\.(jpe?g|png)$/));
const report8Images = importAllImages(require.context('@/images/Report8', false, /\.(jpe?g|png)$/));
const report9Images = importAllImages(require.context('@/images/Report9', false, /\.(jpe?g|png)$/));
const report10Images = importAllImages(require.context('@/images/Report10', false, /\.(jpe?g|png)$/));
const report11Images = importAllImages(require.context('@/images/Report11', false, /\.(jpe?g|png)$/));
const report12Images = importAllImages(require.context('@/images/Report12', false, /\.(jpe?g|png)$/));
const report13Images = importAllImages(require.context('@/images/Report13', false, /\.(jpe?g|png)$/));
const report14Images = importAllImages(require.context('@/images/Report14', false, /\.(jpe?g|png)$/));
const report15Images = importAllImages(require.context('@/images/Report15', false, /\.(jpe?g|png)$/));
const report16Images = importAllImages(require.context('@/images/Report16', false, /\.(jpe?g|png)$/));
const report17Images = importAllImages(require.context('@/images/Report17', false, /\.(jpe?g|png)$/));
const report18Images = importAllImages(require.context('@/images/Report18', false, /\.(jpe?g|png)$/));
const report19Images = importAllImages(require.context('@/images/Report19', false, /\.(jpe?g|png)$/));
const report20Images = importAllImages(require.context('@/images/Report20', false, /\.(jpe?g|png)$/));
const report21Images = importAllImages(require.context('@/images/Report21', false, /\.(jpe?g|png)$/));
const report22Images = importAllImages(require.context('@/images/Report22', false, /\.(jpe?g|png)$/));
const report23Images = importAllImages(require.context('@/images/Report23', false, /\.(jpe?g|png)$/));
const report24Images = importAllImages(require.context('@/images/Report24', false, /\.(jpe?g|png)$/));
const report25Images = importAllImages(require.context('@/images/Report25', false, /\.(jpe?g|png)$/));

export const cardsData = [
    {
        category: 'CRM',
        imageSrc: resim25,
        modalImages: report25Images,
        title: 'CRM Pipeline Satış Analizi',
        "description": "Bu dashboard, satış hunisi performansını analiz ederken toplam anlaşma değeri, kapanan satışlar, kayıp anlaşmalar ve müşteri dönüşüm oranlarına dair kapsamlı içgörüler sunar. Satış temsilcilerinin performansını ve endüstri bazlı trendleri inceleyerek stratejik karar almayı kolaylaştırır.",
        link: 'https://app.powerbi.com/view?r=eyJrIjoiYzRjZWRiMGYtYTg3ZC00NGFjLWJhZWQtNDcxM2Q3Yjc0MWY1IiwidCI6IjlmZTNjZTM5LTIwOWQtNGM5NS1hMWQxLWViZjA0NjY3NDkyYyIsImMiOjl9',
        "insights": [
            {
                "title": "Toplam Anlaşma Değeri",
                "description": "Toplam anlaşma değeri $8,3M olarak gerçekleşti. Bunun $931,3K'sı kapanan anlaşmalardan elde edildi."
            },
            {
                "title": "Kapanan ve Kayıp Anlaşmalar",
                "description": "Kapanan anlaşma sayısı 348 iken kayıp anlaşma sayısı 61 olarak gerçekleşti. Kayıp oranı %2 seviyesinde."
            },
            {
                "title": "En Yüksek Performans Gösteren Satış Temsilcileri",
                "description": "Laura Thompson, toplam $218,624 değerinde anlaşma kapatarak en iyi performansı sergiledi. Michael Brown ve Jessica Martinez de öne çıkan temsilciler arasında yer aldı."
            },
            {
                "title": "Endüstri Bazlı Kapanan Anlaşmalar",
                "description": "IT & IT Hizmetleri, Ulaşım ve Profesyonel Hizmetler en yüksek kapanan anlaşma sayılarına sahip endüstriler oldu."
            },
            {
                "title": "Müşteri Terk Oranı",
                "description": "Toplam churn müşteri sayısı 177 olup, %59'luk bir terk oranı gözlemlendi."
            },
            {
                "title": "Aylık Kapanan Anlaşma Trendleri",
                "description": "Nisan ve Mayıs aylarında kapanan anlaşmalar zirve yaptı, Ağustos ve Eylül aylarında düşüş görüldü."
            },
            {
                "title": "Satış Ürünlerine Göre Dağılım",
                "description": "SAAS ürünleri %45 ile en yüksek kapanan anlaşma oranına sahipken, hizmetler ve özel çözümler diğer ürün kategorilerini oluşturdu."
            },
            {
                "title": "Endüstri Bazlı Kayıp Anlaşmalar",
                "description": "Hükümet, Tarım ve Bankacılık sektörlerinde kayıp anlaşma oranı en yüksek seviyelerde gerçekleşti."
            }
        ],
    },
    {
        category: 'Sales',
        imageSrc: resim24,
        modalImages: report24Images,
        title: 'Yılbaşı Hediye Satış Analizi',
        "description": "Bu dashboard, yılbaşı hediye satışlarını müşteri segmentasyonu, kanal performansı, kârlılık ve ülke bazlı analizlerle detaylı bir şekilde sunar. Satış eğilimlerini, müşteri davranışlarını ve en çok tercih edilen ürünleri analiz ederek stratejik karar almayı kolaylaştırır.",
        link: 'https://app.powerbi.com/view?r=eyJrIjoiYzRjZWRiMGYtYTg3ZC00NGFjLWJhZWQtNDcxM2Q3Yjc0MWY1IiwidCI6IjlmZTNjZTM5LTIwOWQtNGM5NS1hMWQxLWViZjA0NjY3NDkyYyIsImMiOjl9',
        "insights": [
            {
                "title": "Toplam Satışlar ve Kâr",
                "description": "Son sezon toplam satış €7,09M ve kâr €5,45M olarak gerçekleşti, önceki sezona göre %1,9'luk bir artış gösterdi."
            },
            {
                "title": "En İyi Performans Gösteren Ülkeler",
                "description": "İsveç, Hollanda ve Almanya en yüksek satış rakamlarını elde eden ülkeler arasında yer aldı."
            },
            {
                "title": "Müşteri Segmentasyonu",
                "description": "1-11 yaş arası ürün grubu müşteriler satışların %39'unu oluştururken, erkek ve kadın müşteriler arasında oran %49-%51 olarak gerçekleşti."
            },
            {
                "title": "Satış Kanalları Performansı",
                "description": "Satışların %74'ü mağaza içi alışverişte gerçekleşirken, online ve yılbaşı pazarları da önemli katkılar sağladı."
            },
            {
                "title": "Ödeme Yöntemleri",
                "description": "Nakit ödeme, 1-11 yaş arası ürün grubu müşteriler arasında %86 oranında tercih edilirken, yetişkinler daha fazla kredi kartı ve PayPal kullanmayı tercih etti."
            },
            {
                "title": "En Çok Satan Ürünler ve Kategoriler",
                "description": "Oyuncaklar (%15,8), giyim (%11,4) ve aksesuarlar (%9,9) en çok tercih edilen ürün kategorileri oldu."
            },
            {
                "title": "Ay Bazlı Satış Analizi",
                "description": "Aralık ayında satışlar zirve yaptı (%77), Ocak ayında ise %45 seviyelerine geriledi."
            },
            {
                "title": "Müşteri Alışveriş Alışkanlıkları",
                "description": "Çocuklar ve gençler sabah saatlerinde alışveriş yaparken, yetişkinler akşam saatlerini tercih etti."
            }
        ],
    },
  {
    category: 'CRM',
    imageSrc: resim13,
    modalImages: report13Images,
    title: 'CRM Dashboard',
    description: 'Bu dashboard ile müşteri ilişkilerinizi daha verimli bir şekilde yönetebilir, satış süreçlerinizdeki kritik metrikleri analiz edebilir ve iyileştirme alanlarını tespit edebilirsiniz. Toplam potansiyel müşteri sayısından kapalı anlaşma değerlerine, dönüşüm oranlarından kayıp oranlarına kadar tüm önemli verileri görselleştirerek iş stratejilerinizi optimize edebilirsiniz. Ayrıca, satış temsilcilerinizin performansını takip edebilir ve ürün bazlı karlılığı değerlendirerek daha etkili pazar stratejileri geliştirebilirsiniz.',
    link: 'https://app.powerbi.com/view?r=eyJrIjoiYzRjZWRiMGYtYTg3ZC00NGFjLWJhZWQtNDcxM2Q3Yjc0MWY1IiwidCI6IjlmZTNjZTM5LTIwOWQtNGM5NS1hMWQxLWViZjA0NjY3NDkyYyIsImMiOjl9',
    insights: [
        {
            title: 'Toplam Satış Potansiyeli',
            description: '3.000 toplam potansiyel müşteriyle satış süreçleri daha verimli bir şekilde yönetildi.'
        },
        {
            title: 'Kapalı Anlaşma Değeri',
            description: '$931,3K toplam anlaşma değeriyle büyüme sağlandı.'
        },
        {
            title: 'Aylık Dönüşüm Oranı',
            description: '%11,6 dönüşüm oranı ile pazar stratejileri güçlendirildi.'
        },
        {
            title: 'Kaybedilen Oran',
            description: '%2 oranında kayıp ile süreçler optimize edildi.'
        },
        {
            title: 'Ürün Performansları',
            description: 'SAAS %43 ile en çok katkı sağlayan ürün oldu.'
        },
        {
            title: 'Ürün Bazlı Değerler',
            description: 'Custom çözümler toplam anlaşma değerinin %22\'sini oluşturdu.'
        },
        {
            title: 'Satış Ajan Performansı',
            description: 'Laura Thompson $2.048,3K ile en yüksek katkıya sahip oldu.'
        },
        {
            title: 'Ülke Bazlı Dönüşüm Oranı',
            description: 'Hollanda %15 dönüşüm oranıyla lider durumda.'
        },
        {
            title: 'Kapalı Anlaşma Detayları',
            description: '348 anlaşma kapatıldı, ortalama kapanış süresi 63 hafta olarak hesaplandı.'
        },
        {
            title: 'Satış Trendleri',
            description: 'Asya Pasifik bölgesi satış artışında başı çekiyor.'
        }
    ]
},

  {
    category: 'E-commerce',
    imageSrc: resim14,
    modalImages: report14Images,
    title: 'E-Commerce Dashboard',
    description: 'Bu dashboard ile e-ticaret performansınızı detaylı bir şekilde analiz edebilir, satış ve kârlılık trendlerini takip edebilir, müşteri ve ürün bazlı stratejiler geliştirebilirsiniz. Satış, kârlılık ve ürün kategorileri hakkında detaylı analizler yaparak operasyonel kararlarınızı veri odaklı bir yaklaşımla destekleyebilirsiniz. Ayrıca, pazar bazlı satış stratejilerini optimize etmek ve en çok satan ürünlere odaklanarak büyüme fırsatlarını değerlendirmek mümkün.',
    link: 'https://app.powerbi.com/view?r=eyJrIjoiYzRjZWRiMGYtYTg3ZC00NGFjLWJhZWQtNDcxM2Q3Yjc0MWY1IiwidCI6IjlmZTNjZTM5LTIwOWQtNGM5NS1hMWQxLWViZjA0NjY3NDkyYyIsImMiOjl9',
    insights: [
      {
          title: 'Toplam Satış',
          description: '6,52M toplam satışla büyüme oranı %23,8 olarak hesaplandı (son yıl 2,2M).'
      },
      {
          title: 'Kâr Marjı',
          description: '1,07M toplam kâr elde edildi, ancak 2023 yılı %15 altına düştü, strateji değişikliği gerekiyor.'
      },
      {
          title: 'Miktar Analizi',
          description: '278K toplam satış miktarıyla büyüme oranı %24,2 olarak gerçekleşti.'
      },
      {
          title: 'Pazar Performansı',
          description: 'Avrupa lider kârlılık, Asya Pasifik en yüksek satış oranına sahip.'
      },
      {
          title: 'Kategori Bazlı Satış',
          description: 'Body care ürünleri %41,2 ile en çok satan kategoridir.'
      },
      {
          title: 'En Çok Satan Ürünler',
          description: 'Herbal Essences Bio ve Rose Gold Petal Studs en yüksek satışları gerçekleştirdi.'
      },
      {
          title: 'Müşteri Performansı',
          description: 'ABD ve Avustralya en çok gelir sağlayan müşterilere sahip.'
      },
      {
          title: 'Sipariş Dağılımı',
          description: 'Siparişlerin çoğu küçük hacimlidir; toplu alım promosyonlarıyla artış hedeflenebilir.'
      },
      {
          title: 'Satış Trendleri',
          description: 'Yıllık satış büyümesi her yıl %20’nin üzerine çıkmıştır.'
      },
      {
          title: 'Kârlılık Analizi',
          description: 'Kâr marjları bazı kategorilerde hedeflerin altında; optimizasyon fırsatları mevcut.'
      }
  ]
  },
  {
    category: 'HR',
    imageSrc: resim15,
    modalImages: report15Images,
    title: 'HR Analysis Dashboard',
    description: 'Bu dashboard ile iş gücünüzü ve çalışan bağlılığı oranlarını detaylı bir şekilde analiz edebilir, insan kaynakları stratejilerinizi optimize edebilirsiniz. Çalışan devir oranlarını, maaş dağılımlarını ve demografik bilgileri görselleştirerek organizasyonel hedeflerinize uygun kararlar alabilirsiniz. Ayrıca, yıllık maaş ortalamaları ve bağlılık oranları arasındaki ilişkiyi inceleyerek, iyileştirme fırsatlarını değerlendirebilirsiniz.',
    link: 'https://app.powerbi.com/view?r=eyJrIjoiYzRjZWRiMGYtYTg3ZC00NGFjLWJhZWQtNDcxM2Q3Yjc0MWY1IiwidCI6IjlmZTNjZTM5LTIwOWQtNGM5NS1hMWQxLWViZjA0NjY3NDkyYyIsImMiOjl9',
    insights: [
      {
          title: 'Çalışan Bağlılık Oranı',
          description: '%89,79 bağlılık oranı ile çalışan memnuniyeti sağlanmaktadır.'
      },
      {
          title: 'Devir Oranı',
          description: '%10,21 çalışan devir oranı ile sektörel ortalamalar karşılaştırılabilir.'
      },
      {
          title: 'Dönemsel İşe Alım ve Ayrılmalar',
          description: '548 yeni işe alım ve 69 çalışan çıkışı ile iş gücü dinamikleri izlenebilir.'
      },
      {
          title: 'Maaş ve Bağlılık Oranı İlişkisi',
          description: 'Yıllık maaş ortalamaları ve bağlılık oranları arasında pozitif bir korelasyon tespit edilmiştir.'
      },
      {
          title: 'Demografik Veriler',
          description: 'Çalışanların yaş, etnik köken ve lokasyon bazlı dağılımı görselleştirilmiştir.'
      },
      {
          title: 'Maaş Dağılımı',
          description: 'Strateji departmanı en yüksek yıllık maaş ortalamasına sahip, üretim departmanı ise en düşük seviyededir.'
      },
      {
          title: 'İş Gücü Dağılımı',
          description: 'Kadın çalışan oranı %51,8, erkek çalışan oranı %48,2 olarak belirlenmiştir.'
      },
      {
          title: 'Zaman İçinde Bağlılık Oranı',
          description: '2013’ten 2022’ye kadar bağlılık oranı istikrarlı bir şekilde yüksek tutulmuştur.'
      },
      {
          title: 'Departman Bazlı Performans',
          description: 'Araştırma ve geliştirme departmanında çalışan bağlılık oranı yüksek; iyileştirme odaklı stratejiler geliştirilebilir.'
      },
      {
          title: 'İşe Alım ve Maaş Stratejisi',
          description: 'Demografik ve departman bazlı maaş analizleri ile etkili işe alım ve ücretlendirme politikaları oluşturulabilir.'
      }
  ]
  },
  {
    category: 'Finance',
    imageSrc: resim16,
    modalImages: report16Images,
    title: 'Financial Dashboard',
    description: 'Bu dashboard ile işletmenizin gelir, gider ve nakit akışı yönetimini detaylı bir şekilde analiz edebilirsiniz. Ana gelir kaynaklarını, harcama kalemlerini ve dönemsel kârlılık oranlarını takip ederek stratejik kararlar alabilir ve iş performansınızı optimize edebilirsiniz. Ayrıca, nakit akışı analiziyle ödeme süreçlerini planlayabilir, finansal riskleri minimize edebilirsiniz.',
    link: 'https://app.powerbi.com/view?r=eyJrIjoiYzRjZWRiMGYtYTg3ZC00NGFjLWJhZWQtNDcxM2Q3Yjc0MWY1IiwidCI6IjlmZTNjZTM5LTIwOWQtNGM5NS1hMWQxLWViZjA0NjY3NDkyYyIsImMiOjl9',
    insights: [
      {
          title: 'Toplam Gelir',
          description: '$18,419M toplam gelir, hizmet sağlama %57 ile en büyük katkı sağlayan grup.'
      },
      {
          title: 'Toplam Gider',
          description: '$25,095M gider ile, gider yönetimi stratejisi gözden geçirilebilir.'
      },
      {
          title: 'Katkı Marjı',
          description: '$3,161M katkı marjı ile ürün ve hizmetlerin kârlılığı analiz edilmiştir.'
      },
      {
          title: 'Yıllık Değişim Oranı',
          description: 'Gelirlerde %-33,4 oranında düşüş, yeni pazar stratejileri gerektirebilir.'
      },
      {
          title: 'Gelir Kaynakları',
          description: 'Hizmet sağlama ve ürün satışları toplam gelirin büyük bölümünü oluşturuyor.'
      },
      {
          title: 'Nakit Akışı Analizi',
          description: 'Dönemsel nakit giriş ve çıkışları analiz edilerek ödeme planlamaları yapılabilir.'
      },
      {
          title: 'Harcamaların Dağılımı',
          description: 'Sabit ve değişken gider oranları görselleştirilmiştir (%28 sabit, %72 değişken).'
      },
      {
          title: 'Dönemsel Gelir Takibi',
          description: 'Aylık gelir performansındaki dalgalanmalar izlenerek aksiyon planı oluşturulabilir.'
      },
      {
          title: 'Sonuç ve Denge',
          description: 'Son dönem nakit denge $-4,864M olarak hesaplanmıştır.'
      },
      {
          title: 'Harcama Oranları',
          description: 'Ay bazlı gider oranları karşılaştırılarak bütçe optimizasyonu sağlanabilir.'
      }
  ]
  },
    {
      category: 'Sales',
      imageSrc: resim1,
      modalImages: report1Images,
      title: 'Performance Dashboard',
      description: "Bu dashboard seti, satış performansı, bütçe analizleri, müşteri segmentasyonu, stok yönetimi ve nakit akışı gibi çeşitli iş süreçlerine yönelik içgörüler sunar.",
      link: 'https://app.powerbi.com/view?r=eyJrIjoiY2FiZGI5OTUtZDU3MC00Yzg0LTg3ZTItNGE4NmVhOGIzNTlkIiwidCI6IjlmZTNjZTM5LTIwOWQtNGM5NS1hMWQxLWViZjA0NjY3NDkyYyIsImMiOjl9',
      insights: [
        {
            "title": "Aylık Satış Performansı",
            "description": "Şubat ayında 216B satışla en yüksek seviyeye ulaşılmıştır."
        },
        {
            "title": "Bölgesel Satış Dağılımı",
            "description": "İstanbul, toplam satışların %43,63'ünü oluşturarak lider konumdadır."
        },
        {
            "title": "En Çok Satılan Ürün",
            "description": "Parliament Aqua Blue KS, 25.676 satışla en çok satan ürün olmuştur."
        },
        {
            "title": "Toplam Gelir",
            "description": "Toplam gelir 1.353.868,00 olarak kaydedilmiştir."
        },
        {
            "title": "Bütçe Karşılaştırması",
            "description": "Mart ayında bütçeye kıyasla 3M'lik bir fark oluşmuştur."
        },
        {
            "title": "Kâr Oranı",
            "description": "%58,58 ile Şubat ayında en yüksek kârlılık elde edilmiştir."
        },
        {
            "title": "Müşteri Segmentasyonu",
            "description": "Toplam 31.406 müşteri farklı segmentlere ayrılarak analiz edilmiştir."
        },
        {
            "title": "Stok Yönetimi",
            "description": "FLR025 kodlu ürünün %50,3 oranında stok maliyeti oluşturarak stok lideri olduğu görülmüştür."
        },
        {
            "title": "Nakit Akışı",
            "description": "Ocak ayında toplam nakit girişi 0,11M olarak kaydedilmiştir."
        },
        {
            "title": "Ürün Bazlı Satış Performansı",
            "description": "Kategori 1 ürünlerinde toplam satış 8.512.725,20 olarak hesaplanmıştır."
        }
    ]
    },
    {
      category: 'Sales',
      imageSrc: resim2,
      modalImages: report2Images,
      title: "Satış Raporu Dashboard",
      description: "Bu dashboard, aylık satış performansı, bölge-mağaza bazında analizler ve ürün kategorilerine göre detaylı satış bilgileri sunar. İşletmelerin satış süreçlerini daha verimli yönetmelerine yardımcı olacak stratejik içgörüler sağlar.",
      link: 'https://app.powerbi.com/view?r=eyJrIjoiM2QwMzM1YzUtY2VlNi00ODM5LWI2ODAtM2ZiNDEyNzkwNjQ3IiwidCI6IjlmZTNjZTM5LTIwOWQtNGM5NS1hMWQxLWViZjA0NjY3NDkyYyIsImMiOjl9',
      insights: [
        {
            "title": "Toplam Satışlar",
            "description": "2009 yılında toplam satışlar ₺45,72M olarak kaydedilmiştir."
        },
        {
            "title": "Satılan Ürün Adetleri",
            "description": "Toplamda 348 bin adet ürün satılmıştır."
        },
        {
            "title": "İade Ürün Adetleri",
            "description": "3063 adet ürün iadesi gerçekleştirilmiştir."
        },
        {
            "title": "Bölge ve Mağaza Performansı",
            "description": "İstanbul-Maslak, ₺15M satış ile en yüksek performans gösteren bölgedir."
        },
        {
            "title": "Aylık Performans",
            "description": "Haziran ve Temmuz ayları en yüksek satış performansına sahip dönemlerdir."
        },
        {
            "title": "Kar Marjı",
            "description": "Genel kar marjı %55,74 olarak hesaplanmıştır."
        },
        {
            "title": "En Çok Satılan Ürünler",
            "description": "NT Bluetooth Stereo Headphones E52 Blue, 5.260 adet satış ile öne çıkmaktadır."
        },
        {
            "title": "Ürün Kategorisi Bazında Satış",
            "description": "MP4&MP3 kategorisi, toplam satışların büyük bir bölümünü oluşturmaktadır."
        }
    ]
    },
    {
      category: 'Stock',
      imageSrc: resim3,
      modalImages: report3Images,
      title: "Stok Raporu Dashboard",
      description: "Bu dashboard, ürün stoklarını, satış performansını ve envanter durumunu analiz etmek için kapsamlı bir görünüm sunar. İşletmelerin stok yönetim süreçlerini optimize etmeleri ve karlılığı artırmaları için stratejik bilgiler sağlar.",
      link: 'https://app.powerbi.com/view?r=eyJrIjoiNDQ1YmEzZjYtOGZhNC00OGVlLTg0MTgtYjQ3OTI0YWE2MDg4IiwidCI6IjlmZTNjZTM5LTIwOWQtNGM5NS1hMWQxLWViZjA0NjY3NDkyYyIsImMiOjl9',
      insights: [
        {
            "title": "Ürün Stok Değeri",
            "description": "AXW291 kodlu ürünün stok değeri toplamın %22,02'sini oluşturmaktadır."
        },
        {
            "title": "12 Aylık Satış Performansı",
            "description": "GUT930 kodlu ürün, 12 ayda toplam 249 satış adedine ulaşmıştır."
        },
        {
            "title": "En Çok Satın Alan Müşteriler",
            "description": "En yüksek satın alma adedi 867 ile Eli tarafından gerçekleştirilmiştir."
        },
        {
            "title": "Stok Durumu Dağılımı",
            "description": "Toplam stokta %94,97 oranında güvenli stok bulunmakta."
        },
        {
            "title": "Stok İncelemesi",
            "description": "Cep Telefonu 3, 242 adet stokta bulunmakta ve stok durumu güvenli olarak değerlendirilmiştir."
        },
        {
            "title": "Tedarikçi Performansı",
            "description": "ALK-Abello Corp, 1,4B ürün tedarik ederek en yüksek tedarikçi olarak öne çıkmaktadır."
        },
        {
            "title": "Stok ve Satış Karşılaştırması",
            "description": "Son 12 ayda toplam stok adedi 12.103 ve satış geliri ₺10,9M olarak kaydedilmiştir."
        },
        {
            "title": "Stok Değeri ve Maliyet Dağılımı",
            "description": "FLR025 kodlu ürün maliyetin %26,09'unu oluşturmaktadır."
        }
    ]
    },
    {
      category: 'Sales-Budget',
      imageSrc: resim4,
      modalImages: report4Images,
      title: "Ürün Satış Özet Dashboard",
      description: "Bu dashboard, ürün kategorileri ve şehir bazında satış performansını detaylı bir şekilde sunar. Ayrıca, indirim analizi ve bütçe takibi gibi kritik metriklerle iş kararları için önemli içgörüler sağlar.",
      link: 'https://app.powerbi.com/view?r=eyJrIjoiZjlmMjRhY2EtYjg2OS00ZWY3LWE1ZTUtN2ZiMTQ0MzhmMWI5IiwidCI6IjlmZTNjZTM5LTIwOWQtNGM5NS1hMWQxLWViZjA0NjY3NDkyYyIsImMiOjl9',
      insights: [
        {
            "title": "Toplam Satış Performansı",
            "description": "13.12.2015 - 19.11.2017 tarihleri arasında toplam satış ₺2,14M olarak kaydedilmiştir."
        },
        {
            "title": "En Çok Satış Yapılan Bölge",
            "description": "Marmara Bölgesi, toplam ₺1,4M satış ile öne çıkmıştır."
        },
        {
            "title": "Şehirlere Göre Satış",
            "description": "İstanbul, ₺1,3M satış ile lider şehir olmuştur."
        },
        {
            "title": "İndirim Analizi",
            "description": "İndirim dahil ürünlerde talep oranı %20 artış göstermiştir."
        },
        {
            "title": "Bütçe Performansı",
            "description": "Bütçe ile gerçekleşen satışlar arasında toplamda ₺3M fark tespit edilmiştir."
        },
        {
            "title": "Satış-Kar Dağılımı",
            "description": "2017 yılında, kar marjı güçlü olan ürünler arasında %138,53 oranında artış görülmüştür."
        },
        {
            "title": "Depo Satış ve Siparişler",
            "description": "AXW291 deposu toplam ₺90,67M satış ile en yüksek performansı göstermiştir."
        },
        {
            "title": "Bölgeye Göre Satış Dağılımı",
            "description": "Marmara bölgesi %67,32 ile toplam satış dağılımında en yüksek paya sahiptir."
        }
    ]
    },
    {
      category: 'Sales',
      imageSrc: resim5,
      modalImages: report5Images,
      title: "Satış Performansı Dashboard",
      description: "Bu dashboard, bölgelere, mağazalara ve ürün kategorilerine göre satış performansını detaylıca analiz eder. Şirketlerin satış stratejilerini optimize etmeleri ve kârlılıklarını artırmaları için kapsamlı bir görünüm sunar.",
      link: 'https://app.powerbi.com/view?r=eyJrIjoiZTc5NzJhYzItYjU4Ny00MzkwLWJmMjMtODU1Y2M0ZTFmOGI3IiwidCI6IjlmZTNjZTM5LTIwOWQtNGM5NS1hMWQxLWViZjA0NjY3NDkyYyIsImMiOjl9',
      insights: [
        {
            "title": "Aylık Satış Performansı",
            "description": "Kasım ayında satışlar 3,6M ile yılın en yüksek seviyesine ulaşmıştır."
        },
        {
            "title": "Bölgelere Göre Satışlar",
            "description": "En yüksek satış performansı 5M ile İstanbul'da gerçekleştirilmiştir."
        },
        {
            "title": "Mağaza Satış Performansı",
            "description": "Mağaza-27, 1M satışla en yüksek performansı göstermiştir."
        },
        {
            "title": "Ürün Satış Performansı",
            "description": "Product 1, 1,18M satışla en çok satan ürün olmuştur."
        },
        {
            "title": "Ürün Kategorisi Satış Dağılımı",
            "description": "Cat-1 kategorisi toplam satışların %56'sını oluşturmaktadır."
        },
        {
            "title": "Yıllık Satış ve Kârlılık",
            "description": "Toplam satışlar 38,51M, brüt kâr ise 14,39M olarak kaydedilmiştir."
        },
        {
            "title": "Kâr Marjı Analizi",
            "description": "Genel kâr marjı %37,37 olarak hesaplanmıştır."
        },
        {
            "title": "Büyüme Oranları",
            "description": "Satışlar, geçen yılın aynı dönemine göre %15,4 oranında artmıştır."
        }
    ]
    },
    {
      category: 'HR',
      imageSrc: resim6,
      modalImages: report6Images,
      title: "Performans Analizi Dashboard",
      description: "Bu dashboard, çalışanların yıllara, cinsiyetlere ve konumlara göre maaş, çalışan sayısı ve performans analizlerini detaylıca sunar. Şirket içi verimliliği artırmak ve çalışanlar için daha adil politikalar geliştirmek için etkili içgörüler sağlar.",
      link: 'https://app.powerbi.com/view?r=eyJrIjoiYjc0ZTA5MmEtZWY3OC00Y2RlLWE2N2ItZDk1OTc1ZGQ5NDkyIiwidCI6IjlmZTNjZTM5LTIwOWQtNGM5NS1hMWQxLWViZjA0NjY3NDkyYyIsImMiOjl9',
      insights: [
        {
            "title": "Yıla Göre Maaş Artışı",
            "description": "2020 yılı itibarıyla toplam maaş ₺196,42B'ye ulaşmıştır."
        },
        {
            "title": "Cinsiyete Göre Maaş Dağılımı",
            "description": "Kadın çalışanlar ortalama ₺198B, erkek çalışanlar ₺194B maaş almıştır."
        },
        {
            "title": "Konuma Göre Maaş",
            "description": "En yüksek maaş ortalaması ₺130M ile İstanbul'dadır."
        },
        {
            "title": "Çalışma Yılına Göre Maaş",
            "description": "5-10 yıl çalışanların ortalama maaşı ₺66,4M olarak hesaplanmıştır."
        },
        {
            "title": "Yıllara Göre Çalışan Sayısı",
            "description": "2020 yılında toplam çalışan sayısı 1.999 olarak kaydedilmiştir."
        },
        {
            "title": "Performans Puanı Dağılımı",
            "description": "2020 performans puanı ortalaması 3,49 olup, hedeflenen seviyenin %95,2'sine ulaşılmıştır."
        },
        {
            "title": "Şehirlere Göre Çalışan Dağılımı",
            "description": "En fazla çalışan 728 kişi ile İstanbul'da bulunmaktadır."
        },
        {
            "title": "Konuma Göre Performans Ortalaması",
            "description": "Bursa, en yüksek performans ortalamasına sahip şehir olarak öne çıkmaktadır."
        }
    ]
    },
    {
      category: 'Social Media',
      imageSrc: resim7,
      modalImages: report7Images,
      title: 'Sosyal Medya Dashboard',
      description: 'Bu dashboard ile farklı platformlarda içerik performansını analiz edebilir, görüntülenme ve etkileşim oranlarını karşılaştırabilirsiniz. Facebook, Instagram ve Twitter üzerinde çeyrek bazında performans trendlerini izleyebilir ve içerik stratejinizi optimize edebilirsiniz.',
      link: 'https://app.powerbi.com/view?r=eyJrIjoiYTZhODMxNGEtZjQ4ZC00NjNjLTg2MmUtODYzM2NiNDkyYWIxIiwidCI6IjlmZTNjZTM5LTIwOWQtNGM5NS1hMWQxLWViZjA0NjY3NDkyYyIsImMiOjl9',
      insights: [
        {
            title: 'Toplam Görüntülenme',
            description: 'Facebook 75M ile en yüksek görüntülenmeye sahiptir.'
        },
        {
            title: 'Platform Görüntülenme Dağılımı',
            description: 'Görüntülenmelerin %62’si Facebook, %23’ü Twitter, %15’i Instagram üzerinden gelmiştir.'
        },
        {
            title: 'Çeyrek Bazında Görüntülenme',
            description: 'Q4 dönemi 40M ile en yüksek görüntülenme oranını yakalamıştır.'
        },
        {
            title: 'İçerik Tipi Performansı',
            description: 'Facebook video içerikleri 71.8M ile en çok görüntülenen içerik türüdür.'
        },
        {
            title: 'Aylık Platform Performansı',
            description: 'Ekim ayında Instagram, 3.9M görüntülenme ile zirve yapmıştır.'
        },
        {
            title: 'Instagram Performansı',
            description: 'Instagram beğenileri 15.8M ile en yüksek etkileşim türüdür.'
        },
        {
            title: 'Twitter Etkileşimleri',
            description: 'Twitter toplam etkileşimleri 28M seviyesindedir.'
        },
        {
            title: 'Facebook Gönderi Performansı',
            description: 'Facebook gönderi etkileşimleri toplamda 3.5M olarak hesaplanmıştır.'
        }
    ]
    },
    {
      category: 'Customer',
      imageSrc: resim8,
      modalImages: report8Images,
      title: 'Müşteri Analizi Dashboard',
      description: 'Bu dashboard ile müşterilerinizin satın alma alışkanlıklarını, kar oranlarını ve ürün performanslarını detaylı bir şekilde analiz edebilirsiniz. Bölgesel satış trendlerini gözlemleyebilir, müşteri segmentlerini değerlendirebilir ve stratejik kararlar için önemli veriler elde edebilirsiniz.',
      link: 'https://app.powerbi.com/view?r=eyJrIjoiMzhlODAxYzctNTBmYS00NGU3LTg1ZWItYzI4ZjM3NzZlZTQ4IiwidCI6IjlmZTNjZTM5LTIwOWQtNGM5NS1hMWQxLWViZjA0NjY3NDkyYyIsImMiOjl9',
      insights: [
        {
            title: 'Kümülatif Satış Performansı',
            description: 'Seçilen tarihler arasında toplam $1.88M satış gerçekleştirilmiştir.'
        },
        {
            title: 'Ürün Satış Performansı',
            description: 'En yüksek satış $0.31M ile Product 7 ürününe aittir.'
        },
        {
            title: 'Müşteri Segmentleri',
            description: 'Üst segment müşteriler toplam $10.82B kar ile en karlı gruptur.'
        },
        {
            title: 'Kar Marjı Analizi',
            description: '%51.58 ile en yüksek kar marjı belirlenmiştir.'
        },
        {
            title: 'Bölgesel Performans',
            description: 'İzmir bölgesinde $114.89K satış ile lider performans sergilenmiştir.'
        },
        {
            title: 'Sipariş Özeti',
            description: 'En çok sipariş verilen ürün: Product 13.'
        },
        {
            title: 'Kar ve Satış Trendleri',
            description: 'Kar tutarları Ağustos ayında $70B’ye ulaşarak en yüksek seviyeye çıkmıştır.'
        }
    ]
    },
    {
      category: 'Finance',
      imageSrc: resim9,
      modalImages: report9Images,
      title: 'Finans Dashboard',
      description: 'Bu dashboard, finansal performansı detaylı bir şekilde analiz etmenizi sağlar. Satış, kâr, müşteri ve ürün adetleri gibi kritik metriklerle finansal stratejilerinizi optimize edebilirsiniz.',
      link: 'https://app.powerbi.com/view?r=eyJrIjoiMzhlODAxYzctNTBmYS00NGU3LTg1ZWItYzI4ZjM3NzZlZTQ4IiwidCI6IjlmZTNjZTM5LTIwOWQtNGM5NS1hMWQxLWViZjA0NjY3NDkyYyIsImMiOjl9',
      insights: [
        {
            title: 'Toplam Satış ve Kâr',
            description: '€1.35M toplam satış ve €793K kâr elde edilmiştir.'
        },
        {
            title: 'Satış Performansı',
            description: 'Şubat ayında satışlar zirve yapmış, yıl sonunda tekrar yükseliş trendine girmiştir.'
        },
        {
            title: 'Kategori Bazlı Satışlar',
            description: 'Confectionery & Food Items €15.6B ile en yüksek satış kategorisidir.'
        },
        {
            title: 'Alt Kategori Performansı',
            description: 'Çay kategorisi 684 ürün satışı ile öne çıkmaktadır.'
        },
        {
            title: 'Performans Oranı',
            description: '%63.06 satış, %36.94 kâr oranı ile güçlü bir finansal denge sağlanmıştır.'
        },
        {
            title: 'Çeyrek Bazlı Performans',
            description: 'İlk çeyrekte en yüksek satış, ikinci çeyrekte ise düşüş gözlemlenmiştir.'
        },
        {
            title: 'Satış Trendleri',
            description: 'Aralık ayında satışlar tekrar yükselişe geçerek yıl sonu hedeflerini desteklemiştir.'
        }
    ]
    },
    {
      category: 'Web Site',
      imageSrc: resim10,
      modalImages: report10Images,
      title: 'Website Analitiği Dashboard',
      description: 'Bu dashboard, web sitesi performansını ve kullanıcı davranışlarını analiz etmenize olanak sağlar. Sayfa görüntülenme istatistikleri, bounce ve exit rate gibi metrikler ile ziyaretçi etkileşimlerini detaylı bir şekilde takip edebilirsiniz.',
      link: 'https://app.powerbi.com/view?r=eyJrIjoiMzhlODAxYzctNTBmYS00NGU3LTg1ZWItYzI4ZjM3NzZlZTQ4IiwidCI6IjlmZTNjZTM5LTIwOWQtNGM5NS1hMWQxLWViZjA0NjY3NDkyYyIsImMiOjl9',
      insights: [
        {
            title: 'Toplam Sayfa Görüntülenme',
            description: '3652 görüntülenme ile en yoğun ay Haziran olarak kaydedilmiştir.'
        },
        {
            title: 'Benzersiz Sayfa Görüntülenme',
            description: '1798 benzersiz görüntülenme ile kullanıcı etkileşimleri analiz edilmiştir.'
        },
        {
            title: 'Bounce Rate',
            description: '13,67% oranında ziyaretçiler sayfadan hemen ayrılmıştır.'
        },
        {
            title: 'Exit Rate',
            description: '16,52% çıkış oranı ile en yüksek oran Ağustos ayında görülmüştür.'
        },
        {
            title: 'Aylık Sayfa Görüntülenme Trendleri',
            description: 'Ortalama 304 görüntülenme ile Haziran ayında büyük bir artış gözlemlenmiştir.'
        },
        {
            title: 'Top Sayfalar',
            description: 'Kaynaklar sayfası 3150 görüntülenme ile en çok ziyaret edilen sayfa olmuştur.'
        },
        {
            title: 'H1 ve H2 Dağılımı',
            description: 'Sayfa görüntülenmelerinin %56’sı yılın ikinci yarısında gerçekleşmiştir.'
        }
    ]
    },
    {
      category: 'HR',
      imageSrc: resim11,
      modalImages: report11Images,
      title: 'HR Dashboard',
      description: 'Bu dashboard, çalışan yönetimi, departman performansı ve ücret analizlerini görselleştirerek organizasyonel kararları destekler. Çalışan demografik dağılımı, maaş trendleri ve bölgesel analizler gibi detayları içerir.',
      link: 'https://app.powerbi.com/view?r=eyJrIjoiZDNmZmNmMWQtNWM1Yy00ZmIwLTgwYTYtYWViYTZkMmE1ZWMxIiwidCI6IjlmZTNjZTM5LTIwOWQtNGM5NS1hMWQxLWViZjA0NjY3NDkyYyIsImMiOjl9',
      insights: [
        {
            title: 'Toplam Çalışan Sayısı',
            description: '1.999 çalışan ile farklı departmanlarda dengeli bir yapı sunulmaktadır.'
        },
        {
            title: 'Ortalama Maaş ve Yaş',
            description: 'Çalışanların ortalama maaşı ₺196.424,89 ve yaş ortalaması 32,97 olarak raporlanmıştır.'
        },
        {
            title: 'Departman Cinsiyet Dağılımı',
            description: 'IT departmanı erkek çalışan oranında öne çıkarken, İdari İşler departmanı kadın çalışan oranında liderdir.'
        },
        {
            title: 'Bölge Performansı',
            description: 'İstanbul 728 çalışan ile en yüksek bölgesel çalışan sayısına sahiptir.'
        },
        {
            title: 'Ortalama Maaş Trendi',
            description: '2010-2020 yılları arasında ortalama maaş yıllık %5 oranında artış göstermiştir.'
        },
        {
            title: 'Departman Maaş Dağılımı',
            description: 'Satış Pazarlama ₺123,21M ile en yüksek toplam ücret dağılımına sahiptir.'
        },
        {
            title: 'Çalışma Süresi Analizi',
            description: '1-3 yıl arasında çalışma süresine sahip çalışanlar toplamda 703 kişi ile en büyük grubu oluşturmaktadır.'
        },
        {
            title: 'Detaylı Çalışan Verileri',
            description: 'Departman, cinsiyet ve yaş bazında çalışan detayları analiz edilmiştir.'
        }
    ]
    },
    {
      category: 'Sales',
      imageSrc: resim12,
      modalImages: report12Images,
      title: 'Satış Analizi Dashboard',
      description: 'Bu dashboard, satış performansınızı detaylı bir şekilde analiz etmenizi sağlar. Bölgesel satış verilerini, ürün performansını ve mağaza satışlarını inceleyerek stratejik kararlar almanıza yardımcı olur.',
      link: 'https://app.powerbi.com/view?r=eyJrIjoiYzRjZWRiMGYtYTg3ZC00NGFjLWJhZWQtNDcxM2Q3Yjc0MWY1IiwidCI6IjlmZTNjZTM5LTIwOWQtNGM5NS1hMWQxLWViZjA0NjY3NDkyYyIsImMiOjl9',
      insights: [
        {
            title: 'Toplam Satışlar',
            description: 'Haziran-Kasım ayları arasında toplam 22.08M satış gerçekleştirilmiştir.'
        },
        {
            title: 'Bölgesel Satış Performansı',
            description: 'İstanbul bölgesi, 54K gelir ile lider konumdadır.'
        },
        {
            title: 'Ürün Performansı',
            description: 'WWI 1GB Pulse Smartwatch, en yüksek satış rakamına ulaşmıştır.'
        },
        {
            title: 'Top 10 Mağaza',
            description: 'Maslak mağazası 8.1M gelir ile en yüksek satış performansını göstermiştir.'
        },
        {
            title: 'Ürün Segment Performansı',
            description: 'Deluxe segmenti, satış hacminde liderdir.'
        },
        {
            title: 'Satış Detayları',
            description: 'Contoso 2G MP3 Player E200 Silver, en çok kâr marjına sahip üründür (%48.32).'
        },
        {
            title: 'İade Ürün Analizi',
            description: 'Toplam 1,451 iade işlemi gerçekleştirilmiştir.'
        }
    ]
    },
    {
      category: 'Customer',
      imageSrc: resim17,
      modalImages: report17Images,
      title: 'Müşteri Analizi Dashboard',
      description: 'Bu dashboard ile müşteri segmentlerini, yaş gruplarına göre gelir dağılımını ve bölgesel satış performansını analiz edebilirsiniz. Korelasyon analizi ile müşteri davranışlarını anlamlandırarak hedef kitlenizi daha etkili bir şekilde yönetebilirsiniz.',
      link: 'https://app.powerbi.com/view?r=eyJrIjoiYzRjZWRiMGYtYTg3ZC00NGFjLWJhZWQtNDcxM2Q3Yjc0MWY1IiwidCI6IjlmZTNjZTM5LTIwOWQtNGM5NS1hMWQxLWViZjA0NjY3NDkyYyIsImMiOjl9',
      insights: [
        {
            title: 'Ortalama Yaş ve Gelir',
            description: 'Müşteri yaş ortalaması 52.83, gelir ortalaması ise $52,194.4 olarak hesaplanmıştır.'
        },
        {
            title: 'Yaş Gruplarına Göre Gelir',
            description: '35-44 yaş grubu müşteriler toplam gelirde en yüksek payı sağlamaktadır.'
        },
        {
            title: 'Bölgesel Satış Performansı',
            description: 'İstanbul $54K ile bölgesel satış performansında liderdir.'
        },
        {
            title: 'Segment Bazlı Gelir',
            description: 'Loyal Customers segmenti $5.14M ile en yüksek geliri sağlamaktadır.'
        },
        {
            title: 'Korelasyon Analizi',
            description: 'Yaş ile 2 yıllık harcama arasında pozitif bir korelasyon gözlemlenmiştir.'
        },
        {
            title: 'Yaş Dağılımı ve Harcama',
            description: '65+ yaş grubu müşteriler ortalama $5,202 harcama ile en yüksek harcamayı yapmıştır.'
        },
        {
            title: 'Kategori Bazlı Gelir Yönetimi',
            description: 'Segment analizleriyle müşteri sadakati artırılabilir ve düşük performanslı segmentler hedeflenebilir.'
        },
        {
            title: 'Hedef Kitle Optimizasyonu',
            description: 'Segment bazlı müşteri yönetimiyle gelir artışı ve müşteri kaybı önlenebilir.'
        }
    ]
    },
    {
      category: 'Finance',
      imageSrc: resim18,
      modalImages: report18Images,
      title: 'Yönetici İçgörüleri Dashboard',
      description: 'Bu dashboard ile kümülatif satış performansını, kanal bazlı satış dağılımını ve ürün performanslarını analiz edebilirsiniz. Bölgesel satış trendlerini izleyerek stratejik kararlar alabilir ve kârlılık oranlarınızı optimize edebilirsiniz.',
      link: 'https://app.powerbi.com/view?r=eyJrIjoiYzRjZWRiMGYtYTg3ZC00NGFjLWJhZWQtNDcxM2Q3Yjc0MWY1IiwidCI6IjlmZTNjZTM5LTIwOWQtNGM5NS1hMWQxLWViZjA0NjY3NDkyYyIsImMiOjl9',
      insights: [
        {
            title: 'Kümülatif Satış Performansı',
            description: '$1M üzerinde kümülatif satış gerçekleştirilmiştir.'
        },
        {
            title: 'Günlük Satış Performansı',
            description: 'Günlük bazda $60K maksimum satış değerine ulaşılmıştır.'
        },
        {
            title: 'Bölgesel Satış Performansı',
            description: 'Christchurch $78K satışla en yüksek performansı göstermiştir.'
        },
        {
            title: 'Ürün Bazlı Performans',
            description: 'Product 2, $250K ile en yüksek satış değerine ulaşmıştır.'
        },
        {
            title: 'Satış Kanalı Dağılımı',
            description: 'Toptan satış kanalı %68 pay ile en yüksek katkıyı sağlamıştır.'
        },
        {
            title: 'Aylık Satış Performansı',
            description: 'Ağustos ayında $200K seviyesinde satış gerçekleştirilmiştir.'
        },
        {
            title: 'Kârlılık ve Performans',
            description: 'Toplam kârlılık $176,10K seviyesinde olup geçen yıla göre %12 artış göstermiştir.'
        },
        {
            title: 'Performans Trendleri',
            description: 'Satışlar Ağustos 2016’dan itibaren düzenli bir artış göstermiştir.'
        }
    ]
    },
    {
      category: 'Sales-Budget',
      imageSrc: resim19,
      modalImages: report19Images,
      title: 'Ürün Bütçe Analizi Dashboard',
      description: 'Bu dashboard ile ürün performansını, bütçe gerçekleşmelerini ve satış hedeflerini detaylı bir şekilde analiz edebilirsiniz. Kümülatif satış ve bütçe farklarını inceleyerek stratejik planlama yapabilir, satış temsilcilerinin performanslarını değerlendirebilir ve ürün bazında bütçe optimizasyonu sağlayabilirsiniz.',
      link: 'https://app.powerbi.com/view?r=eyJrIjoiYzRjZWRiMGYtYTg3ZC00NGFjLWJhZWQtNDcxM2Q3Yjc0MWY1IiwidCI6IjlmZTNjZTM5LTIwOWQtNGM5NS1hMWQxLWViZjA0NjY3NDkyYyIsImMiOjl9',
      insights: [
        {
            title: 'Kümülatif Satış ve Bütçe',
            description: '$2M toplam satış, $1.69M bütçe ile uyumlu analiz edilmiştir.'
        },
        {
            title: 'Satış-Bütçe Farkı',
            description: '$112K fark ile hedeflerin altında kalan ürünler belirlenmiştir.'
        },
        {
            title: 'Aylık Bütçe vs Gerçekleşen',
            description: 'Ocak-Mayıs ayları arasında satışlar bütçeyi aşmış, Temmuz ayında geride kalmıştır.'
        },
        {
            title: 'Ürün Performansı',
            description: 'iPhone 13 bütçesini %22.8 aşarak en yüksek performansı göstermiştir.'
        },
        {
            title: 'Satış Temsilcisi Performansı',
            description: 'Ahmet Yavuz $71K satış ile lider satış temsilcisidir.'
        },
        {
            title: 'Ürün Bazlı Performans',
            description: 'Adidas Originals ve Bosch Serie 6 ürünlerinde bütçe farkları negatif yönde dikkat çekmektedir.'
        },
        {
            title: 'Kümülatif Satış Trendi',
            description: 'Satışlar yılın ilk çeyreğinde artış göstermiş, ancak yılın ortalarında düşüş trendine girmiştir.'
        },
        {
            title: 'Bütçe Yönetimi',
            description: 'Ürün bazlı bütçe gerçekleşme oranları ile maliyet optimizasyonu sağlanabilir.'
        }
    ]
    },
    {
      category: 'Customer',
      imageSrc: resim20,
      modalImages: report20Images,
      title: 'Perakende Müşteri Segmentasyonu ve Sadakat Analizi',
      description: 'Bu dashboard ile müşteri segmentlerini ve sadakat oranlarını analiz ederek, satış stratejilerinizi geliştirebilir, müşteri tutma oranlarını optimize edebilirsiniz. Kohort analizi sayesinde müşteri davranışlarını derinlemesine inceleyebilir ve harcama eğilimlerini değerlendirerek gelir artırıcı aksiyonlar alabilirsiniz.',
      link: 'https://app.powerbi.com/view?r=eyJrIjoiYzRjZWRiMGYtYTg3ZC00NGFjLWJhZWQtNDcxM2Q3Yjc0MWY1IiwidCI6IjlmZTNjZTM5LTIwOWQtNGM5NS1hMWQxLWViZjA0NjY3NDkyYyIsImMiOjl9',
      insights: [
        {
            title: 'Kohort Analizi',
            description: 'Müşterilerin ilk satın alımdan sonraki davranışları detaylı şekilde görselleştirilmiştir.'
        },
        {
            title: 'Müşteri Elde Tutma',
            description: 'Yeniden kazanılan müşteriler, toplam müşteri kitlesine önemli katkılar sağlamaktadır.'
        },
        {
            title: 'Harcama Eğilimleri',
            description: 'Toplam ve ortalama harcama eğilimleri aylık bazda analiz edilmiştir.'
        },
        {
            title: 'Sadakat Dağılımı',
            description: 'Sadakat oranı dönemsel olarak %70’in üzerinde tutulmuştur.'
        },
        {
            title: 'Müşteri Segmentasyonu',
            description: 'Yeni, geri dönen ve yeniden kazanılan müşteriler için segment bazlı analiz sağlanmıştır.'
        },
        {
            title: 'Aylık Ortalama Harcama',
            description: 'Ortalama harcamalar, düzenli artışlarla müşteri memnuniyeti ile ilişkilendirilmiştir.'
        },
        {
            title: 'Gelir Artışı',
            description: 'Müşteri sadakati yüksek olan gruplar, gelir artışında kilit rol oynamaktadır.'
        },
        {
            title: 'Satış ve Sadakat İlişkisi',
            description: 'Sadakat artışı ile aylık harcama arasında doğrudan bir ilişki tespit edilmiştir.'
        }
    ]
    },
    {
      category: 'HR',
      imageSrc: resim21,
      modalImages: report21Images,
      title: 'HR Dashboard',
      description: 'Bu dashboard ile çalışan sayıları, cinsiyet dağılımları, yaş grupları ve işe alım tarihleri gibi insan kaynakları verilerinizi detaylı bir şekilde analiz edebilirsiniz. Bölgesel dağılımları görselleştirerek, kaynak tahsisini optimize edebilir, ortalama çalışma sürelerini ve maaş bilgilerini inceleyerek personel yönetimi stratejilerinizi geliştirebilirsiniz.',
      link: 'https://app.powerbi.com/view?r=eyJrIjoiYzRjZWRiMGYtYTg3ZC00NGFjLWJhZWQtNDcxM2Q3Yjc0MWY1IiwidCI6IjlmZTNjZTM5LTIwOWQtNGM5NS1hMWQxLWViZjA0NjY3NDkyYyIsImMiOjl9',
      insights: [
        {
            title: 'Çalışan Sayısı',
            description: 'Toplam 90 çalışanla Midwest bölgesi 35 çalışanla lider durumdadır.'
        },
        {
            title: 'Cinsiyet Dağılımı',
            description: 'Kadın çalışan oranı %60, erkek çalışan oranı %40’tır.'
        },
        {
            title: 'Ortalama Maaş',
            description: '$120,965.8 ile şirket genelinde ortalama maaş bilgisi sağlanmıştır.'
        },
        {
            title: 'Ortalama Çalışma Süresi',
            description: 'Çalışanlar ortalama 6.89 yıl süreyle şirkette çalışmaktadır.'
        },
        {
            title: 'Yaş Dağılımı',
            description: 'Çalışanların %31’i 31-40 yaş grubunda yer almaktadır.'
        },
        {
            title: 'En Son İşe Alınanlar',
            description: 'Pamela Wright ve Wayne Watson en son işe alınan çalışanlar arasında bulunmaktadır.'
        },
        {
            title: 'Bölgesel Dağılım',
            description: 'South bölgesi 33 çalışanla Midwest’in ardından ikinci sıradadır.'
        },
        {
            title: 'Yeni Çalışanlar',
            description: '2015 yılından itibaren işe alımlarda düzenli bir artış gözlemlenmektedir.'
        },
        {
            title: 'Yaş Gruplarına Göre Dağılım',
            description: '18-25 yaş arası çalışan sayısı toplamda 19’dur.'
        }
    ]
    },
    {
      category: 'Sales',
      imageSrc: resim22,
      modalImages: report22Images,
      title: 'Çapraz Satış Detay İncelemesi',
      description: 'Bu dashboard ile ürünler arasında çapraz satış ilişkilerini analiz edebilir, müşteri alışkanlıklarını daha iyi anlayarak satış stratejilerinizi optimize edebilirsiniz. En çok birlikte satın alınan ürünleri ve müşteri dağılımlarını inceleyerek stok yönetimi ve ürün öneri sistemlerinizi geliştirebilirsiniz.',
      link: 'https://app.powerbi.com/view?r=eyJrIjoiYzRjZWRiMGYtYTg3ZC00NGFjLWJhZWQtNDcxM2Q3Yjc0MWY1IiwidCI6IjlmZTNjZTM5LTIwOWQtNGM5NS1hMWQxLWViZjA0NjY3NDkyYyIsImMiOjl9',
      insights: [
        {
            title: 'Müşteri Dağılımları',
            description: 'Birlikte satın alınan ürünlere göre müşteri davranışları detaylı bir şekilde görselleştirilmiştir.'
        },
        {
            title: 'Müşteri Sayıları',
            description: 'Ürün bazlı müşteri sayıları analiz edilerek çapraz satış fırsatları tespit edilmiştir.'
        },
        {
            title: 'En Çok Satın Alınan Ürünler',
            description: 'Product 26, $78M satışla lider konumdadır.'
        },
        {
            title: 'Birlikte Satın Alınan Ürünler',
            description: 'Product 11 ve Product 6, en sık birlikte satın alınan ürünler arasındadır.'
        },
        {
            title: 'Ürün Kombinasyonları',
            description: 'Popüler ürün kombinasyonları sayesinde paket kampanyaları oluşturulabilir.'
        },
        {
            title: 'Zaman Bazlı Satış',
            description: 'Dönemsel veriler kullanılarak satış tahminlemesi ve kampanya planlaması yapılabilir.'
        },
        {
            title: 'Stok Yönetimi',
            description: 'En çok satan ürünlerin stok durumları optimize edilerek müşteri memnuniyeti artırılabilir.'
        },
        {
            title: 'Satış Hedefleri',
            description: 'Satışları artırmak için ürün gruplarına yönelik stratejik hedefler belirlenebilir.'
        }
    ]
    },
    {
      category: 'Call Center',
      imageSrc: resim23,
      modalImages: report23Images,
      title: 'Çağrı Merkezi Performansı Dashboard',
      description: 'Bu dashboard ile çağrı merkezi performansını detaylı bir şekilde analiz edebilir, müşteri memnuniyeti oranlarını, çağrı çözümleme hızını ve temsilci performansını ölçebilirsiniz. Çağrı sayılarını dönemsel olarak inceleyerek kapasite planlaması yapabilir, temsilci bazlı performans istatistikleriyle eğitim ve geliştirme ihtiyaçlarını belirleyebilirsiniz.',
      link: 'https://app.powerbi.com/view?r=eyJrIjoiYzRjZWRiMGYtYTg3ZC00NGFjLWJhZWQtNDcxM2Q3Yjc0MWY1IiwidCI6IjlmZTNjZTM5LTIwOWQtNGM5NS1hMWQxLWViZjA0NjY3NDkyYyIsImMiOjl9',
      insights: [
        {
            title: 'Ortalama Yanıt Süresi',
            description: '67,52 saniye ile hızlı yanıt süreleri sağlanmaktadır.'
        },
        {
            title: 'Ortalama Görüşme Süresi',
            description: '3 dakika 45 saniye ile etkili müşteri görüşmeleri gerçekleştirilmektedir.'
        },
        {
            title: 'Günlük Çağrı Sayısı',
            description: 'Günlük ortalama 56 çağrı ile yoğunluk analiz edilmektedir.'
        },
        {
            title: 'Müşteri Memnuniyeti',
            description: '3,40 memnuniyet derecesi ile müşteri beklentileri karşılanmaktadır.'
        },
        {
            title: 'Yanıtlanan Çağrılar',
            description: 'Tüm çağrıların %81’i başarıyla yanıtlanmıştır.'
        },
        {
            title: 'Çözüm Oranı',
            description: 'Çözüm sağlanan çağrı oranı %73 olarak belirlenmiştir.'
        },
        {
            title: 'Konu Bazlı Çözümler',
            description: 'Teknik destek %20,33 ile en fazla çözüm sağlanan kategoridir.'
        },
        {
            title: 'Temsilci Performansı',
            description: 'Salih Cengiz %80,48 yanıt oranıyla en yüksek performansı göstermiştir.'
        },
        {
            title: 'Dönemsel Çağrı Analizi',
            description: 'Ocak ayında en yüksek çağrı sayısına ulaşılmıştır (1.8K).'
        },
        {
            title: 'Günlük Trendler',
            description: 'Pazar günleri en yoğun çağrı günü olarak belirlenmiştir (716 çağrı).'
        }
    ]
    },

  ];