//Data normalisation, using Hash Tables
const SHOP_DATA = {
  boots:{//UrlParameter same as the title
    id: 1,
    title: 'Boots',
    routeName: 'boots',
    items: [
      {
        id: 1,
        name: 'Light Blue Adidas',
        imageUrl: 'https://gdurl.com/jJtD',
        price: 25
      },
      {
        id: 2,
        name: 'Black Adidas',
        imageUrl: 'https://gdurl.com/4kxc',
        price: 18
      },
      {
        id: 3,
        name: 'Black Red Adidas',
        imageUrl: 'https://gdurl.com/FlaV',
        price: 35
      },
      {
        id: 4,
        name: 'Black White CCC',
        imageUrl: 'https://gdurl.com/VEQd',
        price: 25
      },
      {
        id: 5,
        name: 'Black Nike',
        imageUrl: 'https://gdurl.com/AT_J',
        price: 18
      },
      {
        id: 6,
        name: 'Black Orange Nike',
        imageUrl: 'https://gdurl.com/xHl5',
        price: 14
      },
      {
        id: 7,
        name: 'Light Blue Nike',
        imageUrl: 'https://gdurl.com/5Rpy',
        price: 18
      },
      {
        id: 8,
        name: 'White Puma King',
        imageUrl: 'https://gdurl.com/qInd',
        price: 14
      }
    ]
  },
  watches:{
    id: 2,
    title: 'Watches',
    routeName: 'watches',
    items: [
      {
        id: 9,
        name: 'Black Polar Vantage',
        imageUrl: 'https://gdurl.com/WoSJ',
        price: 220
      },
      {
        id: 10,
        name: 'Fitbit Versa',
        imageUrl: 'https://gdurl.com/22y3',
        price: 280
      },
      {
        id: 11,
        name: 'Garmin',
        imageUrl: 'https://gdurl.com/MFAG',
        price: 110
      },
      {
        id: 12,
        name: 'Huawei Smart Band',
        imageUrl: 'https://gdurl.com/41d4 ',
        price: 160
      },
      {
        id: 13,
        name: 'Red AmazfitPace',
        imageUrl: 'https://gdurl.com/pw0e',
        price: 160
      },
      {
        id: 14,
        name: 'Samsung Active Band',
        imageUrl: 'hhttps://gdurl.com/9XoB',
        price: 160
      },
      {
        id: 15,
        name: 'Tom Tom Runner',
        imageUrl: 'https://gdurl.com/6W3M',
        price: 190
      }
    ]
  },
  backpacks:{
    id: 3,
    title: 'BackPacks',
    routeName: 'backpacks',
    items: [
      {
        id: 16,
        name: 'Black Jean Shearling',
        imageUrl: 'https://gdurl.com/PICt',
        price: 125
      },
      {
        id: 17,
        name: 'Black & Grey Stripe Nike',
        imageUrl: 'https://gdurl.com/fqSk',
        price: 90
      },
      {
        id: 18,
        name: 'Blue Puma',
        imageUrl: 'https://gdurl.com/Avht',
        price: 90
      },
      {
        id: 19,
        name: 'Green Puma',
        imageUrl: 'https://gdurl.com/bSnn',
        price: 165
      },
      {
        id: 20,
        name: 'Black & Grey Puma',
        imageUrl: 'https://gdurl.com/yLNc',
        price: 185
      },
      {
        id: 21,
        name: 'Pink Reebok',
        imageUrl: 'https://gdurl.com/ltsu',
        price: 185
      },
      {
        id: 22,
        name: 'Pink Reebok',
        imageUrl: 'https://gdurl.com/3BCl',
        price: 185
      },
      {
        id: 23,
        name: 'Pink Reebok',
        imageUrl: 'https://gdurl.com/J8v8',
        price: 185
      }	  
    ]
  },

  tshirts:{
    id: 4,
    title: 'Tshirts',
    routeName: 'tshirts',
    items: [
      {
        id: 24,
        name: 'Pink Nike',
        imageUrl: 'https://gdurl.com/CVnU',
        price: 25
      },
      {
        id: 25,
        name: 'SA Rugby',
        imageUrl: 'https://gdurl.com/KC-1',
        price: 20
      },
      {
        id: 26,
        name: 'Blue Nike',
        imageUrl: 'https://gdurl.com/yN0F',
        price: 80
      },
      {
        id: 26,
        name: 'Navy Blue CCC',
        imageUrl: 'https://gdurl.com/5wtS',
        price: 80
      },
      {
        id: 27,
        name: 'Light Blue Nike',
        imageUrl: 'https://gdurl.com/A6uT',
        price: 45
      },
      {
        id: 28,
        name: 'Black Adidas',
        imageUrl: 'https://gdurl.com/7j_r',
        price: 135
      },
      {
        id: 29,
        name: 'Red Adidas',
        imageUrl: 'https://gdurl.com/jLgt',
        price: 20
      },
	  {
        id: 30,
        name: 'Blue Adidas',
        imageUrl: 'https://gdurl.com/55NG',
        price: 20
      }
    ]
  },
  shorts:{
    id: 5,
    title: 'Shorts',
    routeName: 'shorts',
    items: [
      {
        id: 31,
        name: 'Blue Nike',
        imageUrl: 'https://gdurl.com/qfFC',
        price: 325
      },
      {
        id: 32,
        name: 'White CCC',
        imageUrl: 'https://gdurl.com/6cPyN',
        price: 20
      },
      {
        id: 33,
        name: 'Black Nike',
        imageUrl: 'https://gdurl.com/tRTC',
        price: 25
      },
      {
        id: 34,
        name: 'White Adidas',
        imageUrl: 'https://gdurl.com/8_9a',
        price: 25
      },
      {
        id: 35,
        name: 'Grey Reebok',
        imageUrl: 'https://gdurl.com/QLae',
        price: 40
      },
      {
        id: 36,
        name: 'Blue CCC',
        imageUrl: 'https://gdurl.com/Cshp',
        price: 25
      }
    ]
  },
  
    jerseys:{
    id: 6,
    title: 'Jerseys',
    routeName: 'jerseys',
    items: [
      {
        id: 37,
        name: 'Blue Adidas',
        imageUrl: 'https://gdurl.com/KAJz',
        price: 325
      },
      {
        id: 38,
        name: 'England CCC',
        imageUrl: 'https://gdurl.com/JKnJ',
        price: 20
      },
      {
        id: 39,
        name: 'Aus Wallabies',
        imageUrl: 'https://gdurl.com/izn9',
        price: 25
      },
      {
        id: 40,
        name: 'All Blacks',
        imageUrl: 'https://gdurl.com/3vhq',
        price: 25
      },
      {
        id: 41,
        name: 'Ireland CCC',
        imageUrl: 'https://gdurl.com/8pv0',
        price: 40
      },
      {
        id: 42,
        name: 'Blue White CCC',
        imageUrl: 'https://gdurl.com/1CsA',
        price: 25
      }
	  ,
      {
        id: 43,
        name: 'Kenya Simba',
        imageUrl: 'https://gdurl.com/wvDr',
        price: 25
      }
	  ,
      {
        id: 44,
        name: 'SA Blitzbokke',
        imageUrl: 'https://gdurl.com/3W_F',
        price: 25
      }
    ]
  },
  
  
    balls:{
    id: 7,
    title: 'Balls',
    routeName: 'balls',
    items: [
      {
        id: 45,
        name: 'RWC Gilbert',
        imageUrl: 'https://gdurl.com/q3GE',
        price: 125
      },
      {
        id: 46,
        name: 'England Gilbert',
        imageUrl: 'https://gdurl.com/JMwT',
        price: 90
      },
      {
        id: 47,
        name: 'Red White CCC',
        imageUrl: 'https://gdurl.com/BRYt',
        price: 90
      },
      {
        id: 48,
        name: 'SA Springboks',
        imageUrl: 'https://gdurl.com/ZOgs',
        price: 165
      },
      {
        id: 49,
        name: 'Aus Wallabie',
        imageUrl: 'https://gdurl.com/PCrQ',
        price: 185
      },
      {
        id: 50,
        name: 'Rhino Cyclone',
        imageUrl: 'https://gdurl.com/tVtK',
        price: 185
      },
      {
        id: 51,
        name: 'RWC Ireland',
        imageUrl: 'https://gdurl.com/ERA3',
        price: 185
      }
    ]
  },
  
  socks:{
    id: 8,
    title: 'Socks',
    routeName: 'socks',
    items: [
      {
        id: 52,
        name: 'Blue Adidas',
        imageUrl: 'https://gdurl.com/Qll0',
        price: 325
      },
      {
        id: 53,
        name: 'Light Blue Adidas',
        imageUrl: 'https://gdurl.com/diVb',
        price: 20
      },
      {
        id: 54,
        name: 'Dark Blue Nike',
        imageUrl: 'https://gdurl.com/ia6o',
        price: 25
      },
      {
        id: 55,
        name: 'White Grey Black Nike',
        imageUrl: 'https://gdurl.com/dob4',
        price: 25
      },
      {
        id: 56,
        name: 'Red Orange Nike',
        imageUrl: 'https://gdurl.com/OjqO',
        price: 40
      },
      {
        id: 57,
        name: 'Pink Brown Puma',
        imageUrl: 'https://gdurl.com/m8gZ',
        price: 25
      },
	{
        id: 58,
        name: 'Grey Puma',
        imageUrl: 'https://gdurl.com/mCtb',
        price: 25
      },
		{
        id: 59,
        name: 'Black Red Puma',
        imageUrl: 'https://gdurl.com/cX8n',
        price: 25
      }
    ]
  }
};

export default SHOP_DATA;
