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

export const cardsData = [
    {
      category: 'Sales',
      imageSrc: resim1,
      modalImages: report1Images,
      title: 'Rapor 1',
      description: 'Satış performansını analiz eden önemli metrikler ve trendler.',
      link: 'https://app.powerbi.com/view?r=eyJrIjoiY2FiZGI5OTUtZDU3MC00Yzg0LTg3ZTItNGE4NmVhOGIzNTlkIiwidCI6IjlmZTNjZTM5LTIwOWQtNGM5NS1hMWQxLWViZjA0NjY3NDkyYyIsImMiOjl9'
    },
    {
      category: 'Sales',
      imageSrc: resim2,
      modalImages: report2Images,
      title: 'Rapor 2',
      description: 'Satış performansını analiz eden önemli metrikler ve trendler.',
      link: 'https://app.powerbi.com/view?r=eyJrIjoiM2QwMzM1YzUtY2VlNi00ODM5LWI2ODAtM2ZiNDEyNzkwNjQ3IiwidCI6IjlmZTNjZTM5LTIwOWQtNGM5NS1hMWQxLWViZjA0NjY3NDkyYyIsImMiOjl9'
    },
    {
      category: 'Stock',
      imageSrc: resim3,
      modalImages: report3Images,
      title: 'Rapor 3',
      description: 'Satış performansını analiz eden önemli metrikler ve trendler.',
      link: 'https://app.powerbi.com/view?r=eyJrIjoiNDQ1YmEzZjYtOGZhNC00OGVlLTg0MTgtYjQ3OTI0YWE2MDg4IiwidCI6IjlmZTNjZTM5LTIwOWQtNGM5NS1hMWQxLWViZjA0NjY3NDkyYyIsImMiOjl9'
    },
    {
      category: 'Sales-Budget',
      imageSrc: resim4,
      modalImages: report4Images,
      title: 'Rapor 4',
      description: 'Pazarlama stratejileri ve müşteri kazanımı üzerine analizler.',
      link: 'https://app.powerbi.com/view?r=eyJrIjoiZjlmMjRhY2EtYjg2OS00ZWY3LWE1ZTUtN2ZiMTQ0MzhmMWI5IiwidCI6IjlmZTNjZTM5LTIwOWQtNGM5NS1hMWQxLWViZjA0NjY3NDkyYyIsImMiOjl9'
    },
    {
      category: 'Sales',
      imageSrc: resim5,
      modalImages: report5Images,
      title: 'Rapor 5',
      description: 'Satış performansını analiz eden önemli metrikler ve trendler.',
      link: 'https://app.powerbi.com/view?r=eyJrIjoiZTc5NzJhYzItYjU4Ny00MzkwLWJmMjMtODU1Y2M0ZTFmOGI3IiwidCI6IjlmZTNjZTM5LTIwOWQtNGM5NS1hMWQxLWViZjA0NjY3NDkyYyIsImMiOjl9'
    },
    {
      category: 'HR',
      imageSrc: resim6,
      modalImages: report6Images,
      title: 'Rapor 6',
      description: 'İnsan kaynakları süreçleri ve performans değerlendirmeleri.',
      link: 'https://app.powerbi.com/view?r=eyJrIjoiYjc0ZTA5MmEtZWY3OC00Y2RlLWE2N2ItZDk1OTc1ZGQ5NDkyIiwidCI6IjlmZTNjZTM5LTIwOWQtNGM5NS1hMWQxLWViZjA0NjY3NDkyYyIsImMiOjl9'
    },
    {
      category: 'Social Media',
      imageSrc: resim7,
      modalImages: report7Images,
      title: 'Rapor 7',
      description: 'Sosyal medya platformlarında içerik görüntülenme analizleri.',
      link: 'https://app.powerbi.com/view?r=eyJrIjoiYTZhODMxNGEtZjQ4ZC00NjNjLTg2MmUtODYzM2NiNDkyYWIxIiwidCI6IjlmZTNjZTM5LTIwOWQtNGM5NS1hMWQxLWViZjA0NjY3NDkyYyIsImMiOjl9'
    },
    {
      category: 'Customer',
      imageSrc: resim8,
      modalImages: report8Images,
      title: 'Rapor 8',
      description: 'Müşteri bazında satış, karlılık ve performans analizleri.',
      link: 'https://app.powerbi.com/view?r=eyJrIjoiMzhlODAxYzctNTBmYS00NGU3LTg1ZWItYzI4ZjM3NzZlZTQ4IiwidCI6IjlmZTNjZTM5LTIwOWQtNGM5NS1hMWQxLWViZjA0NjY3NDkyYyIsImMiOjl9'
    },
    {
      category: 'Finance',
      imageSrc: resim9,
      modalImages: report9Images,
      title: 'Rapor 9',
      description: 'Bu, finans sektörüne yönelik bir raporun özetini içerir.',
      link: 'https://app.powerbi.com/view?r=eyJrIjoiMzhlODAxYzctNTBmYS00NGU3LTg1ZWItYzI4ZjM3NzZlZTQ4IiwidCI6IjlmZTNjZTM5LTIwOWQtNGM5NS1hMWQxLWViZjA0NjY3NDkyYyIsImMiOjl9'
    },
    {
      category: 'Web Site',
      imageSrc: resim10,
      modalImages: report10Images,
      title: 'Rapor 10',
      description: 'Web sitesi sayfa görüntülenme ve kullanıcı davranış analizleri.',
      link: 'https://app.powerbi.com/view?r=eyJrIjoiMzhlODAxYzctNTBmYS00NGU3LTg1ZWItYzI4ZjM3NzZlZTQ4IiwidCI6IjlmZTNjZTM5LTIwOWQtNGM5NS1hMWQxLWViZjA0NjY3NDkyYyIsImMiOjl9'
    },
    {
      category: 'HR',
      imageSrc: resim11,
      modalImages: report11Images,
      title: 'Rapor 11',
      description: 'İnsan kaynakları süreçleri ve performans değerlendirmeleri.',
      link: 'https://app.powerbi.com/view?r=eyJrIjoiZDNmZmNmMWQtNWM1Yy00ZmIwLTgwYTYtYWViYTZkMmE1ZWMxIiwidCI6IjlmZTNjZTM5LTIwOWQtNGM5NS1hMWQxLWViZjA0NjY3NDkyYyIsImMiOjl9'
    },
    {
      category: 'Sales',
      imageSrc: resim12,
      modalImages: report12Images,
      title: 'Rapor 12',
      description: 'Satış performansını analiz eden önemli metrikler ve trendler.',
      link: 'https://app.powerbi.com/view?r=eyJrIjoiYzRjZWRiMGYtYTg3ZC00NGFjLWJhZWQtNDcxM2Q3Yjc0MWY1IiwidCI6IjlmZTNjZTM5LTIwOWQtNGM5NS1hMWQxLWViZjA0NjY3NDkyYyIsImMiOjl9'
    },
    {
      category: 'CRM',
      imageSrc: resim13,
      modalImages: report13Images,
      title: 'Rapor 13',
      description: 'Satış performansını analiz eden önemli metrikler ve trendler.',
      link: 'https://app.powerbi.com/view?r=eyJrIjoiYzRjZWRiMGYtYTg3ZC00NGFjLWJhZWQtNDcxM2Q3Yjc0MWY1IiwidCI6IjlmZTNjZTM5LTIwOWQtNGM5NS1hMWQxLWViZjA0NjY3NDkyYyIsImMiOjl9'
    },
    {
      category: 'E-commerce',
      imageSrc: resim14,
      modalImages: report14Images,
      title: 'Rapor 13',
      description: 'Satış performansını analiz eden önemli metrikler ve trendler.',
      link: 'https://app.powerbi.com/view?r=eyJrIjoiYzRjZWRiMGYtYTg3ZC00NGFjLWJhZWQtNDcxM2Q3Yjc0MWY1IiwidCI6IjlmZTNjZTM5LTIwOWQtNGM5NS1hMWQxLWViZjA0NjY3NDkyYyIsImMiOjl9'
    },
    {
      category: 'HR',
      imageSrc: resim15,
      modalImages: report15Images,
      title: 'Rapor 13',
      description: 'Satış performansını analiz eden önemli metrikler ve trendler.',
      link: 'https://app.powerbi.com/view?r=eyJrIjoiYzRjZWRiMGYtYTg3ZC00NGFjLWJhZWQtNDcxM2Q3Yjc0MWY1IiwidCI6IjlmZTNjZTM5LTIwOWQtNGM5NS1hMWQxLWViZjA0NjY3NDkyYyIsImMiOjl9'
    },
    {
      category: 'Finance',
      imageSrc: resim16,
      modalImages: report16Images,
      title: 'Rapor 13',
      description: 'Satış performansını analiz eden önemli metrikler ve trendler.',
      link: 'https://app.powerbi.com/view?r=eyJrIjoiYzRjZWRiMGYtYTg3ZC00NGFjLWJhZWQtNDcxM2Q3Yjc0MWY1IiwidCI6IjlmZTNjZTM5LTIwOWQtNGM5NS1hMWQxLWViZjA0NjY3NDkyYyIsImMiOjl9'
    },
  ];