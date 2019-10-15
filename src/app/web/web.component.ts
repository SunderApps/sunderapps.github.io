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
      url: 'https://newsinteractive.post-gazette.com/fish-fries/',
      title: 'Fish Fries Map 2018',
      owner: 'Post-Gazette',
      description: 'Find a fish fry for the 2018 Lent season.',
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
        }
      ]
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
    },
    {
      url: 'https://newsinteractive.post-gazette.com/in-the-lead/',
      title: 'In The Lead 2018',
      owner: 'Post-Gazette',
      description: 'The landing page for the Post-Gazette\'s annual special section, In The Lead (2018 Edition).',
      date: new Date(2018, 5),
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
          version: '4.0.0'
        },
        {
          lib: 'Font-Awesome',
          version: '4.7.0'
        }
      ]
    },
    {
      url: '',
      title: 'Hype Manager',
      owner: 'Post-Gazette',
      description: 'Organizes and prepares Tumult Hype files for embedding in Post-Gazette NewsInteractive and NewsSlide.',
      date: new Date(2018, 6),
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
          version: '3.3.1'
        },
        {
          lib: 'jQuery UI',
          version: '1.12.1'
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
    },
    {
      url: 'https://dr.dacierno.com',
      title: 'Dr. D\'Acierno',
      owner: 'Freelance',
      description: 'Homepage of Dr. Dayna D\'Acierno, Dr. of Chiropractic.',
      date: new Date(2018, 7),
      serverLibs: [
        {
          lib: 'C#'
        },
        {
          lib: 'ASP.NET Core',
          version: '2.0'
        }
      ],
      clientLibs: [
        {
          lib: 'JS'
        },
        {
          lib: 'jQuery',
          version: '3.2.1'
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
    },
    {
      url: '',
      title: 'MapMaker 2',
      owner: 'Post-Gazette',
      description: 'MapMaker 1 but better!',
      date: new Date(2018, 9),
      serverLibs: [
        {
          lib: 'PHP',
          version: '7.2',
        },
        {
          lib: 'Slim',
          version: '3.12'
        },
        {
          lib: 'Slim-Session',
          version: '3.6.1'
        },
        {
          lib: 'Twig',
          version: '2.7.2'
        },
        {
          lib: 'Twig-View',
          version: '2.4'
        },
        {
          lib: 'Doctrine ORM',
          version: '2.6.3'
        },
        {
          lib: 'Google API Client',
          version: '2.2.2'
        }
      ],
      clientLibs: [
        {
          lib: 'JS'
        },
        {
          lib: 'jQuery',
          version: '3.3.1'
        },
        {
          lib: 'Slick',
          version: '1.9.0'
        },
        {
          lib: 'Quill',
          version: '1.3.6'
        },
        {
          lib: 'Leaflet',
          version: '1.3.1'
        },
        {
          lib: 'Leaflet Providers',
          version: '1.3.1'
        },
        {
          lib: 'Leaflet Extra Markers',
          version: '1.0.8'
        },
        {
          lib: 'Leaflet Gesture Handling',
          version: '1.1.8'
        },
        {
          lib: 'Leaflet Responsive Popup',
          version: '0.6.3'
        },
        {
          lib: 'Leaflet Marker Cluster',
          version: '1.4.1'
        },
        {
          lib: 'Leaflet PM',
          version: '0.25.0'
        },
        {
          lib: 'Location API'
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
          lib: 'LESS'
        },
        {
          lib: 'Bootstrap',
          version: '4.1.1'
        },
        {
          lib: 'Font-Awesome',
          version: '4.7.0'
        },
      ]
    },
    {
      url: 'https://newsinteractive.post-gazette.com/consumer-alerts/',
      title: 'Consumer Alerts Map',
      owner: 'Post-Gazette',
      description: 'What restaurants in the local Pittsburgh area have had health warnings and violations?  Find out here!',
      date: new Date(2018, 10),
      serverLibs: [
        {
          lib: 'PHP',
          version: '7.2',
        },
        {
          lib: 'Slim',
          version: '3.12'
        },
        {
          lib: 'Slim-Session',
          version: '3.6.1'
        },
        {
          lib: 'Twig',
          version: '2.7.2'
        },
        {
          lib: 'Twig-View',
          version: '2.4'
        },
        {
          lib: 'Doctrine ORM',
          version: '2.6.3'
        },
        {
          lib: 'Google API Client',
          version: '2.2.2'
        }
      ],
      clientLibs: [
        {
          lib: 'JS'
        },
        {
          lib: 'jQuery',
          version: '3.3.1'
        },
        {
          lib: 'Slick',
          version: '1.9.0'
        },
        {
          lib: 'Quill',
          version: '1.3.6'
        },
        {
          lib: 'Leaflet',
          version: '1.3.1'
        },
        {
          lib: 'Leaflet Extra Markers',
          version: '1.0.8'
        },
        {
          lib: 'Leaflet Gesture Handling',
          version: '1.1.8'
        },
        {
          lib: 'Leaflet Responsive Popup',
          version: '0.6.3'
        },
        {
          lib: 'Leaflet Marker Cluster',
          version: '1.4.1'
        },
        {
          lib: 'Location API'
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
          lib: 'LESS'
        },
        {
          lib: 'Bootstrap',
          version: '4.1.1'
        },
        {
          lib: 'Font-Awesome',
          version: '4.7.0'
        },
      ]
    },
    {
      url: 'https://newsinteractive.post-gazette.com/pittsburgh-squirrel-hill-synagogue-massacre/',
      title: 'Unbroken',
      owner: 'Post-Gazette',
      description: '[Pulitzer Prize Winner] The Tree of Life mass shooting wrought death and anguish, but also fierce resolve.',
      date: new Date(2018, 11),
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
          version: '3.3.1'
        },
        {
          lib: 'ScrollMagic',
          version: '2.0.6'
        },
        {
          lib: 'GSAP TweenMax',
          version: '2.0.2'
        },
        {
          lib: 'WebVTT'
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
          lib: 'LESS'
        },
        {
          lib: 'Font-Awesome',
          version: '5.5.0'
        }
      ]
    },
    {
      url: 'https://www.brahctopus.com',
      title: 'Brahctopus',
      owner: 'Freelance',
      description: 'The official website of local Pittsburgh band, Brahctopus.  Includes an audio visualizer and video game.',
      date: new Date(2019, 1),
      serverLibs: [
        {
          lib: 'C#'
        },
        {
          lib: 'ASP.NET Core',
          version: '2.0'
        },
        {
          lib: 'Square Connect API'
        },
        {
          lib: 'MailChimp API'
        }
      ],
      clientLibs: [
        {
          lib: 'JS'
        },
        {
          lib: 'jQuery',
          version: '3.3.1'
        },
        {
          lib: 'Photoswipe',
          version: '4.1.2'
        },
        {
          lib: 'WebGL'
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
          version: '4.2.1'
        },
        {
          lib: 'Font-Awesome',
          version: '5.4.1'
        }
      ]
    },
    {
      url: 'https://www.sunderapps.com',
      title: 'Sunder',
      owner: 'Freelance',
      description: 'My website!',
      date: new Date(2019, 2),
      serverLibs: [
        {
          lib: 'Azure Functions'
        }
      ],
      clientLibs: [
        {
          lib: 'JS'
        },
        {
          lib: 'jQuery',
          version: '3.3.1'
        },
        {
          lib: 'Sunder Server',
          version: '0.1.0'
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
          lib: 'Font-Awesome',
          version: '5.7.2'
        }
      ]
    },
    {
      url: 'https://newsinteractive.post-gazette.com/business-of-pittsburgh-monthly-report/',
      title: 'Business of Pittsburgh',
      owner: 'Post-Gazette',
      description: 'The Business of Pittsburgh - a monthly report on the top Pittsburgh businesses and business leaders.',
      date: new Date(2019, 2),
      serverLibs: [
        {
          lib: 'PHP',
          version: '7.2'
        }
      ],
      clientLibs: [
        {
          lib: 'JS'
        },
        {
          lib: 'jQuery',
          version: '3.3.1'
        },
        {
          lib: 'Slick',
          version: '1.9.0'
        },
        {
          lib: 'Google Tag Manager'
        },
        {
          lib: 'Chartbeat'
        },
        {
          lib: 'Brightcove'
        },
        {
          lib: 'Hearken'
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
          lib: 'LESS'
        },
        {
          lib: 'Font-Awesome',
          version: '5.7.2'
        }
      ]
    },
    {
      url: 'https://newsinteractive.post-gazette.com/fish-fries/2019/',
      title: 'Fish Fries Map 2019',
      owner: 'Post-Gazette',
      description: 'Find a fish fry for the 2019 Lent season!',
      date: new Date(2019, 3),
      serverLibs: [
        {
          lib: 'PHP',
          version: '7.2'
        }
      ],
      clientLibs: [
        {
          lib: 'JS'
        },
        {
          lib: 'jQuery',
          version: '1.11.2'
        },
        {
          lib: 'Leaflet',
          version: '1.0.3'
        },
        {
          lib: 'Google Tag Manager'
        },
        {
          lib: 'Chartbeat'
        },
        {
          lib: 'Gigya Comments'
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
          lib: 'LESS'
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
    },
    {
      url: 'https://newsinteractive.post-gazette.com/pittsburgh-pirates-broadcaster-bingo-game/',
      title: 'Pittsburgh Pirates Broadcaster Bingo',
      owner: 'Post-Gazette',
      description: 'Play BINGO while watching the Pittsburgh Pirates broadcasters.',
      date: new Date(2019, 4),
      serverLibs: [
        {
          lib: 'PHP',
          version: '7.2'
        }
      ],
      clientLibs: [
        {
          lib: 'JS'
        },
        {
          lib: 'jQuery',
          version: '3.3.1'
        },
        {
          lib: 'Sunder Server',
          version: '0.1.0'
        },
        {
          lib: 'HTML2Canvas',
          version: '0.5.0-beta4'
        },
        {
          lib: 'FileSaver',
          version: '1.3.8'
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
          lib: 'LESS'
        },
        {
          lib: 'Font-Awesome',
          version: '5.7.2'
        }
      ]
    },
    {
      url: '',
      title: '',
      owner: 'Post-Gazette',
      description: '',
      date: new Date(),
      serverLibs: [

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
        }
      ]
    },
  ]
  constructor() { }

  ngOnInit() { }

}
