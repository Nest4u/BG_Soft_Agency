
import icon33 from '../assets/cost.png';
import icon1 from '../assets/Angular.svg';
import icon2 from '../assets/React.svg';
import icon3 from '../assets/Vue.svg';
import icon4 from '../assets/java.svg';
import icon5 from '../assets/net.svg';
import icon6 from '../assets/PHP.svg';
import icon7 from '../assets/Python.svg';
import icon8 from '../assets/Node.svg';
import icon9 from '../assets/Ruby.svg';
import icon10 from '../assets/rust.svg';
import icon11 from '../assets/Cplusplus.svg';
import icon12 from '../assets/Android.svg';
import icon13 from '../assets/iOS.svg';
import icon14 from '../assets/flutter.svg';
import coments from '../assets/coments.jpg';

export const vacancies = [
    {id:'1', title: 'Frontend Developer',
     block: 'Full-time Remote Engineering Ukraine',
      detailsLink: '#',location:'Ukraine',
       language:'English',type:'remout',
        color: 'bg-or1',
        status: 'Active',
        description:"Investing portal/online wallet with deposits, banking cards, crypto and payments. Project from the scratch. Project Stack: AWS, CI/CD, Auth0, ReactJS, TypeScript, NestJS, REST API" ,
        responsibilities: "Developing UI and Features  Bug fixes from the previous project iteration  Connect and communicate with other team members",
        qualifications:'ReactJS, TypeScript  PrimeReact  HTTP(S)  Good Communication and Soft Skills',
        offer: "The decent salary level and regular revision based on performance review results  Employment by individual entrepreneur/self-employment contract without the need to be based in a specific location  Time off throughout the year: 15 paid working days a year of vacation, national holidays due to the Ukrainian calendar, up to 15 days a year of unpaid leave, unlimited unpaid leave days in case of working off  Regular long-term working hours (40 hours a week), flexible schedule  Resources to help improve your overall well-being: free gym and half-paid team events  English classes  Professional development support through conferences and paid qualified education",

      },
    {id:'2', 
     title: 'Frontend Developer',
      block: 'Full-time Remote Engineering',
       detailsLink: '#',
       location:'Ukraine',
        language:'English',
        status: 'Disable',
        type:'remout2',
         color: 'bg-or2' },
    {id:'3', 
     title: 'Frontend Developer',
      block: 'Description for Frontend', 
      detailsLink: '#',
      location:'ukr',
      status: 'Disable',
       language:'eng',
       type:'remout3', 
       color: 'bg-or3' },
    {id:'4',  
    title: 'Frontend Developer',
     block: 'Description for Frontend', 
     detailsLink: '#',
     location:'ukr', 
     status: 'Disable',
     language:'eng',
     type:'remout4', 
     color: 'bg-or4' },
  ];
  export const dropmenu = [
    {
        number: "01/",
        text: "Front-end Development",
        maintext: "Sometimes, existing tech teams’ workload gets too big, and without IT staff augmentation, it results in fast burnouts, overdue tasks, big backlogs, a high churn rate. With the services of an IT staff augmentation company, your business will be able to get seasoned developers and extend the IT department with top-tier specialists. Hiring professionals equipped with specific knowledge and dedication to the tech industry is easier and more efficient with an IT staff augmentation service provider."
    },
    {
        number: "02/",
        text: "Front-end Development",
        maintext: "Want to strengthen your team for an upcoming release? Need extra help for the holidays? Looking for some additional hands during the vacation season? Our IT staff augmentation service got you covered! With "
    },
    {
        number: "03/",
        text: "Front-end Development",
        maintext: "Businesses turn to IT staff augmentation not only when they have short-term augmentation needs. IT staff augmentation is also a perfect solution for businesses that need to hire long-term employees and get permanent solutions to their tech staff shortages."
    },
    {
        number: "04/",
        text: "Front-end Development",
        maintext: "An IT staff augmentation service is not only about short-term solutions. It is also about being able to build a required tech team from scratch. Build your developing team and all its processes according to your business requirements. Scale it as needed with top-tier seasoned IT professionals and be sure of your project’s continued succe"
    }

  ]
  export const menus = [
    {
      id:"01/",
      title: "Front-end Development",
      description: "Equip your company with reliable and user-friendly front-ends...",
      points: "B&G Soft agency's Front-end department has:",
      pointData: [
        "850+ Front-end developers",
        "High customer satisfaction rates",
        "Extensive project portfolios"
      ],
      iconData: [
        { id: 1, image: icon1, text: "Angular" },
        { id: 2, image: icon2, text: "React" },
        { id: 3, image: icon3, text: "Vue" }
      ]
    },
    {
      id:"02/",
      title: "Back-end Development",
      description: "B&G Soft agency's Back-end development experts will help you obtain properly functioning and secure solutions, ensuring seamless data flows with the most suitable technologies.",
      points: "Our Back-end Development department has::",
      pointData: [
        "740+ Back-end developers;",
        "5 years of experience;",
        "Extensive project portfolios;"
      ],
      iconData: [
        { id: 1, image: icon4, text: "Java" },
        { id: 2, image: icon5, text: ".NET" },
        { id: 3, image: icon6, text: "PHP" },
        { id: 4, image: icon7, text: "Python" },
        { id: 5, image: icon8, text: "Node" },
        { id: 6, image: icon9, text: "Ruby" },
        { id: 7, image: icon10, text: "Rust" },
        { id: 8, image: icon11, text: "C/C++" }
      ]
    },
    {
      id:"03/",
      title: "Mobile App Development",
      description: "Obtain high-performing mobile software to address your industry-specific challenges, and the result will fully meet your usability, utility, and data safety expectations.",
      points: "What our Mobile development department has to offer:",
      pointData: [
        "290+ Mobile developers;",
        "5 years of experience;",
        "Extensive project portfolios"
      ],
      iconData: [
        { id: 1, image: icon12, text: "Android" },
        { id: 2, image: icon13, text: "IOS" },
        { id: 3, image: icon2, text: "React Native" },
        { id: 4, image: icon14, text: "Flutter" }
      ]
    },
    // Добавьте другие конфигурации меню здесь
  ];

  export const testimonials = [
    {
      company: 'Cody Ua',
      name: 'Max Gontar, CCO',
      text: 'We have cooperated with this company four times already,‘and each time they quickly and efficiently find us thenecessary developers for outstaffing. Their ability to quicklyrespond to our needs and find professionals that fit ourbudget was impressive. They made it much easier for us tofind and hire qualified specialists. We are pleased with the results of the cooperation.',
     img: coments
    },
    {
        company: 'OneTwoBit',
        name: 'Victor Meyer, CEO',
        text: 'We have worked with this company on our biggest projects and it has proven to be a reliable and efficient partner. They have particularly impressed us with their communication skills and commitment to the process. We appreciate their dedication and are very satisfied with the services provided.',
        img: coments
      },
      {
        company: 'Incoded',
        name: 'Leo Ortiz, CEO',
        text: 'Our collaboration with this company has been amazing and professional. They provide a high level of expertise and their attention to details is very impressive. During our entire work with them, they have reduced our workload by a third and helped us minimize costs. We are happy and pleased with the results of our partnership.',
        img: coments
      },
  
  ];

  export const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    adaptiveWidth: true,
    arrows: false,
    pauseOnHover: true,
    appendDots: dots => (
      <div
        style={{
          position: 'absolute',
          bottom: '5px',  // Положение точек
          display: 'flex',
          justifyContent: 'center',
          width: '100%',
        }}
      >
        <ul style={{ margin: '0px' }}> {dots} </ul>
      </div>
    ),
    customPaging: i => (
      <div className="w-2.5 h-2.5 border border-gray-500 bg-transparent rounded-full transition-colors duration-300"></div>
    ),
  };
  export const outlist = [
    {
        text1: "On-demand Talent Augmentation",
        text2: "IT staff augmentation services, you can choose the skills you need most for your projectsto succeed and grow."
    },
    {
        text1: "Flexible Workforce",
        text2: "Our outstaffing team will provide you with any type of cooperation: long-term and short-term tech teams, tech professionals with any level of seniority and skill set. Together with you, we will adapt your hiring pace to any kind of market changes."
    },
    {
        text1: "Access to Different Time Zones",
        text2: "Get access to the global tech talent pool and become bigger, stronger, and more advanced. Expand your team with diverse tech talent that match your schedule."
    },
    {
        text1: "You are in the Loop",
        text2: "Our IT staff augmentation services do not end after onboarding. After the launch of your tech team, we will keep you in the loop and will always keep you updated on the team’s operations and well-being."
    },
    {
        text1: "People Ops on us",
        text2: "Forget wasting your time on paperwork. Upon request, we will take on the entire scope of paperwork. We will gladly take care of all the operational routine and administrative duties, which will allow you to focus on your business growth and developme"
    },
    {
        text1: "Quality Control in Your Hands",
        text2: "While our IT staff augmentation services will permeate your hiring process, we still leave as much control over the team’s process and performance to you as you want. You can also freely communicate with your team and conduct quality control as needed."
    },


  ];
  export const rolebase = [
    {
        text1: "On- ",
        image: icon1,
    },
    {
      text1: "On-demand On-demandOn-demandOn-demand ",
      image: icon1,
  },
  {
    text1: "On-demand ",
    image: icon1,
},
{
  text1: "On-demandавава ",
  image: icon1,
},
{
  text1: "On-demand ",
  image: icon1,
},
{
  text1: "On-demand ",
  image: icon1,
},
{
  text1: "On-demand ",
  image: icon1,
},
{
  text1: "On-demand ",
  image: icon1,
},
{
  text1: "On-demand ",
  image: icon1,
},
{
  text1: "On-demand ",
  image: icon1,
},


  ];