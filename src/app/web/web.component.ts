import { Component, OnInit } from '@angular/core'
import { Site } from './site'

@Component({
  selector: 'app-web',
  templateUrl: './web.component.html',
  styleUrls: ['./web.component.less']
})
export class WebComponent implements OnInit {
  sites:Site[] = [
    {
      url: 'http://www.q-solutionsgroup.com',
      title: 'Q-Solutions Challenge',
      owner: 'Freelance',
      description: 'See how much your call center could save by taking the Q-Solutions Challenge!  This web page takes information about your call center, then calculates how much money you could save by using the Q-Solution.',
      date: new Date(2016, 2),
      serverLibs: [
        {
          lib: 'VB'
        },
        {
          lib: 'ASP.NET',
          version: '4.0'
        },
        {
          lib: 'Windows Forms'
        },
        {
          lib: 'SQL Server'
        }
      ],
      clientLibs: [
        {
          lib: 'JS'
        }
      ],
      styleLibs: [
        {
          lib: 'HTML',
          version: '5'
        },
        {
          lib: 'CSS',
          version: '3'
        },
        {
          lib: 'Telerik'
        }
      ]
    },
    {
      url: 'http://aecs1980qg.appspot.com/',
      title: 'PharmGenius',
      owner: 'University of Pittsburgh Pharmacy Department',
      description: 'An easy, fun way to help pharmacy students learn and study.',
      date: new Date(2016, 2),
      serverLibs: [
        {
          lib: 'Python',
          version: '2.7'
        },
        {
          lib: 'Django'
        },
        {
          lib: 'Google Cloud SDK'
        },
        {
          lib: 'Google App Engine'
        }
      ],
      clientLibs: [
        {
          lib: 'JS'
        },
        {
          lib: 'jQuery',
          version: '2.1.3'
        }
      ],
      styleLibs: [
        {
          lib: 'HTML',
          version: '5'
        },
        {
          lib: 'CSS',
          version: '3'
        },
        {
          lib: 'Bootstrap',
          version: '3.3.6'
        },
        {
          lib: 'Font-Awesome',
          version: '4.2.0'
        }
      ]
    },
    {
      url: 'https://www.ztentertainment.com/',
      title: 'ZT Entertainment',
      owner: 'Freelance',
      description: 'DJ, photography, and videography services for a reasonable price.',
      date: new Date(2017, 1),
      serverLibs: [
        {
          lib: 'C#'
        },
        {
          lib: 'ASP.NET',
          version: '4.5.2'
        }
      ],
      clientLibs: [
        {
          lib: 'JS'
        },
        {
          lib: 'jQuery',
          version: '1.10.2'
        }
      ],
      styleLibs: [
        {
          lib: 'HTML',
          version: '5'
        },
        {
          lib: 'CSS',
          version: '3'
        },
        {
          lib: 'Bootstrap',
          version: '3.0.0'
        },
        {
          lib: 'Font-Awesome',
          version: '4.7.0'
        }
      ]
    },
    {
      url: '',
      title: 'MapMaker',
      owner: 'Post-Gazette',
      description: 'Create leaflet.js maps for embedding in Post-Gazette articles.',
      date: new Date(2017, 10),
      serverLibs: [
        {
          lib: 'PHP',
          version: '5.7'
        }
      ],
      clientLibs: [
        {
          lib: 'JS'
        },
        {
          lib: 'jQuery',
          version: '3.2.4'
        },
        {
          lib: 'Leaflet',
          version: '1.3.1'
        },
        {
          lib: 'Leaflet Responsive Popup',
          version: '0.2.0'
        },
        {
          lib: 'Leaflet Extra Markers',
          version: '1.0.8'
        },
        {
          lib: 'Leaflet Gesture Handling',
          version: '1.0.0'
        },
        {
          lib: 'Leaflet PM',
          version: '0.20.0'
        },
        {
          lib: 'Papa Parse',
          version: '4.5.0'
        },
        {
          lib: 'File Saver',
          version: '1.3.3'
        }
      ],
      styleLibs: [
        {
          lib: 'HTML',
          version: '5'
        },
        {
          lib: 'CSS',
          version: '3'
        },
        {
          lib: 'Bootstrap',
          version: '3.3.7'
        },
        {
          lib: 'Font-Awesome',
          version: '4.7.0'
        }
      ]
    },
    {
      url: 'https://www.tandnmarketing.com/',
      title: 'T&N Marketing',
      owner: 'Freelance',
      description: 'Unleash the power of social media marketing!',
      date: new Date(2017, 2),
      serverLibs: [
        {
          lib: 'C#'
        },
        {
          lib: 'ASP.NET',
          version: '4.5.2'
        }
      ],
      clientLibs: [
        {
          lib: 'JS'
        },
        {
          lib: 'jQuery',
          version: '1.10.2'
        }
      ],
      styleLibs: [
        {
          lib: 'HTML',
          version: '5'
        },
        {
          lib: 'CSS',
          version: '3'
        },
        {
          lib: 'Bootstrap',
          version: '3.0.0'
        },
        {
          lib: 'Font-Awesome',
          version: '4.7.0'
        }
      ]
    },
    {
      url: 'https://www.dacierno.com',
      title: 'D\'Acierno',
      owner: 'Freelance',
      description: 'Listen to D\'Acierno\'s latest EP, "Cato Singles," studio recordings, beats, and videos!',
      date: new Date(2017, 10),
      serverLibs: [
        {
          lib: 'C#'
        },
        {
          lib: 'ASP.NET',
          version: '4.5.2'
        }
      ],
      clientLibs: [
        {
          lib: 'JS'
        },
        {
          lib: 'jQuery',
          version: '1.10.2'
        }
      ],
      styleLibs: [
        {
          lib: 'HTML',
          version: '5'
        },
        {
          lib: 'CSS',
          version: '3'
        },
        {
          lib: 'Bootstrap',
          version: '3.0.0'
        },
        {
          lib: 'Font-Awesome',
          version: '4.7.0'
        }
      ]
    },
    {
      url: 'https://newsinteractive.post-gazette.com/threeriverstwomysteries/',
      title: 'Three Rivers, Two Mysteries',
      owner: 'Post-Gazette',
      description: 'Homepage of the Post-Gazette\'s 8-part podcast detailing the mystery behind the disappearance of Paul Kochu and Dakota James',
      date: new Date(2017, 10),
      serverLibs: [
        {
          lib: 'PHP',
          version: '5.7'
        }
      ],
      clientLibs: [
        {
          lib: 'JS'
        },
        {
          lib: 'jQuery',
          version: '3.2.1'
        },
        {
          lib: 'jQuery UI',
          version: '1.12.1'
        },
        {
          lib: 'Google Tag Manager'
        },
        {
          lib: 'Chartbeat'
        },
        {
          lib: 'Brightcove'
        }
      ],
      styleLibs: [
        {
          lib: 'HTML',
          version: '5'
        },
        {
          lib: 'CSS',
          version: '3'
        },
        {
          lib: 'Bootstrap',
          version: '3.3.7'
        },
        {
          lib: 'Font-Awesome',
          version: '4.7.0'
        }
      ]
    },
    {
      url: 'https://newsinteractive.post-gazette.com/drink-map/',
      title: 'Drink Map',
      owner: 'Pittsburgh Post-Gazette',
      description: 'Find local breweries, wineries, and distilleries in the Pittsburgh area!',
      date: new Date(2018, 1),
      serverLibs: [
        {
          lib: 'PHP',
          version: '5.7'
        }
      ],
      clientLibs: [
        {
          lib: 'JS'
        },
        {
          lib: 'jQuery',
          version: '1.10.2'
        },
        {
          lib: 'Leaflet',
          version: '1.0.3'
        },
        {
          lib: 'Leaflet Extra Markers',
          version: '1.0.1'
        },
        {
          lib: 'Google Tag Manager'
        },
        {
          lib: 'Chartbeat'
        }
      ],
      styleLibs: [
        {
          lib: 'HTML',
          version: '5'
        },
        {
          lib: 'CSS',
          version: '3'
        },
        {
          lib: 'Bootstrap',
          version: '4.0.0'
        },
        {
          lib: 'Font-Awesome',
          version: '4.7.0'
        },
      ]
    },
    {

    },
    {
      url: 'https://newsinteractive.post-gazette.com/hq2/',
      title: 'Primed for Amazon',
      owner: 'Post-Gazette',
      description: 'Pittsburgh runs the analytics on what HQ2 would deliver.',
      date: new Date(2018, 3),
      serverLibs: [
        {
          lib: 'PHP',
          version: '5.7'
        }
      ],
      clientLibs: [
        {
          lib: 'JS'
        },
        {
          lib: 'jQuery',
          version: '3.2.1'
        },
        {
          lib: 'Slick',
          version: '1.8.1'
        },
        {
          lib: 'Google Tag Manager'
        },
        {
          lib: 'Chartbeat'
        }
      ],
      styleLibs: [
        {
          lib: 'HTML',
          version: '5'
        },
        {
          lib: 'CSS',
          version: '3'
        },
        {
          lib: 'Bootstrap',
          version: '4.0.0'
        },
        {
          lib: 'Font-Awesome',
          version: '4.7.0'
        }
      ]
    }
    /*,
    {
      url:string,
        title:string,
        owner:string,
        description:string,
        date:Date,
        serverLibs:Lib[],
        clientLibs:Lib[],
        styleLibs:Lib[]
    }*/
  ]
  constructor() { }

  ngOnInit() { }

}
