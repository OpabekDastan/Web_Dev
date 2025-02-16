export interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
    href: string;
    img: string[];
    rating: string;
    
  }
  
  export const products = [
    {
      id: 1,
      name: 'iPhone 13',
      price: 799,
      description: '128Gb Midnight черный',
      href: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-midnight-chernyi-102298404/?c=750000000',
      img:[
        'https://resources.cdn-kaspi.kz/img/m/p/h32/h70/84378448199710.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hfe/h17/64208876634142.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h3d/h8e/64208874405918.jpg?format=gallery-medium'
      ],
      rating: '4.5'
    },
    {
      id: 2,
      name: 'iPhone 14',
      price: 699,
      description: '128Gb черный',
      href: 'https://kaspi.kz/shop/p/apple-iphone-14-128gb-chernyi-106363023/?c=750000000',
      img: [
        'https://resources.cdn-kaspi.kz/img/m/p/h98/h2b/64400497737758.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hc8/h0b/64400500097054.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h6e/h4f/64400506159134.jpg?format=gallery-medium'
      ],
      rating: '4.6'
    },
    {
      id: 3,
      name: 'iPhone 15 Pro Max',
      price: 299,
      description: '256Gb серый',
      href: 'https://kaspi.kz/shop/p/apple-iphone-15-pro-max-256gb-seryi-113138420/?c=750000000',
      img: ['https://resources.cdn-kaspi.kz/img/m/p/hc1/h65/83559848181790.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hfb/hf5/83559848214558.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hcf/h00/83559848247326.png?format=gallery-medium'
      ],
      rating: '4.9'
    },
    {
      id: 4,
      name: 'Apple MacBook Air 13',
      price: 799,
      description: 'MGN93 серебристый',
      href: 'https://kaspi.kz/shop/p/apple-macbook-air-13-mgn93-serebristyi-100798912/?c=750000000',
      img: ['https://resources.cdn-kaspi.kz/img/m/p/h9a/h35/64082972704798.jpg?format=gallery-medium',
    'https://resources.cdn-kaspi.kz/img/m/p/hf9/h31/64082981224478.jpg?format=gallery-medium',
    'https://resources.cdn-kaspi.kz/img/m/p/hf8/he3/64082978111518.jpg?format=gallery-medium'
    ],
      rating: '4.7'
    },
    {
      id: 5,
      name: 'Chuwi HeroBook Pro 14.1',
      price: 699,
      description: 'B08316YSKH серебристый',
      href: 'https://kaspi.kz/shop/p/chuwi-herobook-pro-14-1-b08316yskh-serebristyi-101675028/?c=750000000',
      img: ['https://resources.cdn-kaspi.kz/img/m/p/hfd/hed/64321380974622.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/hee/hd1/64321418035230.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h56/h5a/64321420034078.jpg?format=gallery-medium'
    ],
      rating: '4.8'
    },
    {
      id: 6,
      name: 'ASUS TUF Gaming F15',
      price: 299,
      description: 'HN040 90NR0724-M00ZS0 черный',
      href: 'https://kaspi.kz/shop/p/asus-tuf-gaming-f15-fx506hc-hn040-90nr0724-m00zs0-chernyi-114694062/?c=750000',
      img: ['https://resources.cdn-kaspi.kz/img/m/p/h52/h28/84526606942238.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/hd6/ha0/84526607007774.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h52/h28/84526606942238.jpg?format=gallery-medium'
    ],
      rating: '4.7'
    },
    {
      id: 7,
      name: 'Apple MacBook Pro 16',
      price: 799,
      description: 'MK183 серый',
      href: 'https://kaspi.kz/shop/p/apple-macbook-pro-16-mk183-seryi-102892102/?c=750000000',
      img: ['https://resources.cdn-kaspi.kz/img/m/p/h88/h18/64372891975710.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/h4a/h4f/64372927299614.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/hd3/hb3/64372936474654.jpg?format=gallery-medium'
    ],
      rating: '4.5'
    },
    {
      id: 8,
      name: 'Dream Machines',
      price: 699,
      description: ' RG3050Ti-15KZ25 черный',
      href: 'https://kaspi.kz/shop/p/dream-machines-rg3050ti-15kz25-chernyi-103582336/?c=750000000',
      img: ['https://resources.cdn-kaspi.kz/img/m/p/h3e/h0e/64841481158686.jpg?format=gallery-medium',
    'https://resources.cdn-kaspi.kz/img/m/p/h89/h56/64841484107806.jpg?format=gallery-medium',
    'https://resources.cdn-kaspi.kz/img/m/p/hbc/h4c/64841487024158.jpg?format=gallery-medium'
    ],
      rating: '4.6'
    },
    {
      id: 9,
      name: ' LG 43UP76006LC ',
      price: 299,
      description: '109 см',
      href: 'https://kaspi.kz/shop/p/lg-43up76006lc-109-sm-chernyi-101585668/?c=750000000',
      img: ['https://resources.cdn-kaspi.kz/img/m/p/h39/h73/64332873957406.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/heb/hb0/64332880314398.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h8c/h96/64332951945246.jpg?format=gallery-medium'
    ],
      rating: '4.8'
    },
    {
      id: 10,
      name: 'Xiaomi L32M7-EARU',
      price: 299,
      description: '81 см черный',
      href: 'https://kaspi.kz/shop/p/xiaomi-l32m7-earu-81-sm-chernyi-108977524/?c=750000000',
      img: ['https://resources.cdn-kaspi.kz/img/m/p/h93/hfd/69218658058270.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h92/hae/80564067729438.png?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h77/hcd/80564067663902.png?format=gallery-medium'
    ],
      rating: '4.9'
    }

  ];
