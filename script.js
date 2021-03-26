var tigaImagesElement = document.getElementById('imagesTIGA');
var bpImagesElement = document.getElementById('imagesBP');
var sbcImagesElement = document.getElementById('imagesSBC');
var sthImagesElement = document.getElementById('imagesSTH');
var posterImagesElement = document.getElementById('imagesPoster');
var SMAImagesElement = document.getElementById('imagesSMA');

var jsonData = [

      {

        "title" : "The Idea Girl Agency",
        "image" : "GOODBODY GOOD SOLUTIONS-HAIR PARTING_Cover 1.jpg",
        "caption" : "Social media template creted for GoodBody, creative direction and copy done by The Idea Girl.",
        "link": "https://www.instagram.com/p/CDFhcyqpeDj/?utm_source=ig_web_copy_link"
      },

      {

        "title" : "The Idea Girl Agency",
        "image" : "GB HAIR-SCOPE PART 2_COVER 2-16.jpg",
        "caption" : "Social media template creted for GoodBody, creative direction and copy done by The Idea Girl.",
        "link": "https://www.instagram.com/p/CDcpA4NprET/?utm_source=ig_web_copy_link"
      },

      {

        "title" : "The Idea Girl Agency",
        "image" : "Make Do_3.gif",
        "caption" : "Animated Logo for the Creative Business School, creative direction and branding by The Idea Girl.",
        "link": "https://www.instagram.com/p/B8_crmhpMr2/?utm_source=ig_web_copy_link"
      },

      {
        "title" : "The Idea Girl Agency",
        "image" : "retrack-footsteps-gif.gif",
        "caption" : "An animated, motivational quote created for the studio's instagram.",
        "link": "https://www.instagram.com/p/B89O8s1lYOu/?utm_source=ig_web_copy_link"
      },

      {
        "title" : "The Idea Girl Agency",
        "image" : "Taking Up Space Quote-05.jpg",
        "caption" : "Motivational Quote for the studio's instagram",
        "link" : "https://www.instagram.com/p/B94ixysF8aH/?utm_source=ig_web_copy_link"
      },

      {
        "title" : "The Idea Girl Agency",
        "image" : "SERIF MY TYPE_SERIF-SLIDE 1.jpg",
        "caption" : "#ThatMyType is a series of education post on typography",
        "link": "https://www.instagram.com/p/CAMJ0XApO4S/?utm_source=ig_web_copy_link"
      },

      {
        "title" : "BlackPrint",
        "image" : "BP Mockup.png",
        "caption" : "A mock up of the website.",
        "link" : "https://stxne.github.io/BlackPrintMagazine/"
      },
      {
        "title" : "BlackPrint",
        "image" : "BP Web Layout 2.png",
        "caption" : "A mock up of the website.",
        "link" : "https://stxne.github.io/BlackPrintMagazine/"
      },

      {
        "title" : "BlackCreatives",
        "image" : "SBC Mockup.png",
        "caption" : "A mockup of the website.",
        "link" : "https://stxne.github.io/SupportBlackCreatives2/"
      },

      {
        "title" : "BlackCreatives",
        "image" : "SBC Web Layout.png",
        "caption" : "A mockup of the website.",
        "link" : "https://stxne.github.io/SupportBlackCreatives2/"
      },

      {
        "title" : "BlackCreatives",
        "image" : "SBC Poster.jpg",
        "caption" : "A mockup of the website.",
        "link" : "https://stxne.github.io/SupportBlackCreatives2/"
      },

      {
        "title" : "Silver Tea",
        "image" : "STH Logo suite-15.png",
        "caption" : "Primary logo, secondary logo, and sublogo",
        "link": "#"
      },

      {
        "title" : "Social Media Addict",
        "image" : "SMALAPTOPSCREEN-01.png",
        "caption" : "A mock up of the website.",
        "link" : "https://stxne.github.io/SocialMediaAddict/"
      },

      {
        "title" : "Social Media Addict",
        "image" : "SMAHOME.png",
        "caption" : "A mock up of the website.",
        "link" : "https://stxne.github.io/SocialMediaAddict/"
      },

      {
        "title" : "Silver Tea",
        "image" : "STH Menu Mockup.png",
        "caption" : "Print menu for the fictional brand.",
        "link": "#"
      },
      {
        "title" : "Silver Tea",
        "image" : "STH Menu Mockup 2.png",
        "caption" : "Print menu for the fictional brand.",
        "link": "#"
      },

      {
        "title" : "Silver Tea",
        "image" : "STH Moblie Menu Mockup.png",
        "caption" : "A prototype of a mobile menu for the fictional brand.",
        "link": "#"
      },

      {
        "title" : "Poster",
        "image" : "POSTER CHALLENGE DAY 1-LINES.jpg",
        "caption" : "DAY 1",
        "link": "#"
      },

      {
        "title" : "Poster",
        "image" : "POSTER CHALLENGE DAY 2-SHAPES.jpg",
        "caption" : "DAY 2",
        "link": "#"
      },
      {
        "title" : "Poster",
        "image" : "POSTER CHALLENGE DAY 3-FORM.jpg",
        "caption" : "DAY 3",
        "link": "#"
      },
      {
        "title" : "Poster",
        "image" : "POSTER CHALLENGE DAY 4-COLOR.jpg",
        "caption" : "DAY 4",
        "link": "#"
      },
      {
        "title" : "Poster",
        "image" : "POSTER CHALLENGE DAY 5-TEXTURE.jpg",
        "caption" : "DAY 5",
        "link": "#"
      },
      {
        "title" : "Poster",
        "image" : "POSTER CHALLENGE DAY 6-SPACE.jpg",
        "caption" : "DAY 6",
        "link": "#"
      },
      {
        "title" : "Poster",
        "image" : "POSTER CHALLENGE DAY 7-VALUE.jpg",
        "caption" : "DAY 7",
        "link": "#"
      },
      {
        "title" : "Poster",
        "image" : "POSTER CHALLENGE DAY 8-PATTERNS.jpg",
        "caption" : "DAY 8",
        "link": "#"
      },
      {
        "title" : "Poster",
        "image" : "POSTER CHALLENGE DAY 9-CONTRAST.jpg",
        "caption" : "DAY 9",
        "link": "#"
      },
      {
        "title" : "Poster",
        "image" : "POSTER CHALLENGE DAY 10-EMPHASIS.jpg",
        "caption" : "DAY 10",
        "link": "#"
      },
      {
        "title" : "Poster",
        "image" : "POSTER CHALLENGE DAY 11-BALANCE.jpg",
        "caption" : "DAY 11",
        "link": "#"
      },
      {
        "title" : "Poster",
        "image" : "POSTER CHALLENGE DAY 12-PERSPECTIVE.jpg",
        "caption" : "DAY 12",
        "link": "#"
      },
      {
        "title" : "Poster",
        "image" : "POSTER CHALLENGE DAY 13-HARMONY.jpg",
        "caption" : "DAY 13",
        "link": "#"
      },
      {
        "title" : "Poster",
        "image" : "POSTER CHALLENGE DAY 14-MOVEMENT.jpg",
        "caption" : "DAY 14",
        "link": "#"
      },
      {
        "title" : "Poster",
        "image" : "POSTER CHALLENGE DAY 15-CASA REGULAR-01.jpg",
        "caption" : "DAY 15",
        "link": "#"
      },
      {
        "title" : "Poster",
        "image" : "POSTER CHALLENGE DAY 16-CHEE.jpg",
        "caption" : "DAY 16",
        "link": "#"
      },
      {
        "title" : "Poster",
        "image" : "POSTER CHALLENGE DAY 17-COOPER.jpg",
        "caption" : "DAY 17",
        "link": "#"
      },
      {
        "title" : "Poster",
        "image" : "POSTER CHALLENGE DAY 18-DIDOT-04.jpg",
        "caption" : "DAY 18",
        "link": "#"
      },
      {
        "title" : "Poster",
        "image" : "POSTER CHALLENGE DAY 19-TITLING GOTHIC.jpg",
        "caption" : "DAY 19",
        "link": "#"
      },
      {
        "title" : "Poster",
        "image" : "POSTER CHALLENGE DAY 20-DIGESTIVE.jpg",
        "caption" : "DAY 20",
        "link": "#"
      },
      {
        "title" : "Poster",
        "image" : "POSTER CHALLENGE DAY 21-CENTURY GOTHIC.jpg",
        "caption" : "DAY 21",
        "link": "#"
      },
      {
        "title" : "Poster",
        "image" : "POSTER CHALLENGE DAY 22-WILLOW-01.jpg",
        "caption" : "DAY 22",
        "link": "#"
      },
      {
        "title" : "Poster",
        "image" : "POSTER CHALLENGE DAY 23-THE 1975-01-noise - Copy.jpg",
        "caption" : "DAY 23",
        "link": "#"
      },
      {
        "title" : "Poster",
        "image" : "POSTER CHALLENGE DAY 24-HARRY STYLES-01.jpg",
        "caption" : "DAY 24",
        "link": "#"
      },
      {
        "title" : "Poster",
        "image" : "POSTER CHALLENGE DAY 25-TAME IMPALA (1).jpg",
        "caption" : "DAY 25",
        "link": "#"
      },
      {
        "title" : "Poster",
        "image" : "POSTER CHALLENGE DAY 26-DOMINIC FIKE.jpg",
        "caption" : "DAY 26",
        "link": "#"
      },
      {
        "title" : "Poster",
        "image" : "POSTER CHALLENGE DAY 27-SZA.jpg",
        "caption" : "DAY 27",
        "link": "#"
      },
      {
        "title" : "Poster",
        "image" : "POSTER CHALLENGE DAY 28-RICO NASTY-04.jpg",
        "caption" : "DAY 28",
        "link": "#"
      },
      {
        "title" : "Poster",
        "image" : "POSTER CHALLENGE DAY 29-ONLY YESTERDAY.jpg",
        "caption" : "DAY 29",
        "link": "#"
      },
      {
        "title" : "Poster",
        "image" : "POSTER CHALLENGE DAY 30-CRAZY RICH ASIANS.jpg",
        "caption" : "DAY 30",
        "link": "#"
      },
      {
        "title" : "Poster",
        "image" : "POSTER CHALLENGE DAY 31-LOGAN-01.jpg",
        "caption" : "DAY 31",
        "link": "#"
      },
      {
        "title" : "Poster",
        "image" : "POSTER CHALLENGE DAY 32-ALICE IN WONDERLAND.jpg",
        "caption" : "DAY 32",
        "link": "#"
      },
      {
        "title" : "Poster",
        "image" : "POSTER CHALLENGE DAY 33-TRAIN TO BUSAN.jpg",
        "caption" : "DAY 33",
        "link": "#"
      },
      {
        "title" : "Poster",
        "image" : "POSTER CHALLENGE DAY 34-MIDSOMMER-04.jpg",
        "caption" : "DAY 34",
        "link": "#"
      },
      {
        "title" : "Poster",
        "image" : "POSTER CHALLENGE DAY 35-BIG HERO SIX.jpg",
        "caption" : "DAY 35",
        "link": "#"
      },
      {
        "title" : "Poster",
        "image" : "POSTER CHALLENGE DAY 36-CULTURAL APPROPRIATION.jpg",
        "caption" : "DAY 36",
        "link": "#"
      },
      {
        "title" : "Poster",
        "image" : "POSTER CHALLENGE DAY 37-BLACK EXPERIENCE.jpg",
        "caption" : "DAY 37",
        "link": "#"
      },
      {
        "title" : "Poster",
        "image" : "POSTER CHALLENGE DAY 38-END SARS-01.jpg",
        "caption" : "DAY 38",
        "link": "#"
      },
      {
        "title" : "Poster",
        "image" : "POSTER CHALLENGE DAY 39-SAY THEIR NAMES.jpg",
        "caption" : "DAY 39",
        "link": "#"
      },
      {
        "title" : "Poster",
        "image" : "POSTER CHALLENGE DAY 40-VOTE .jpg",
        "caption" : "DAY 40",
        "link": "#"
      },
      {
        "title" : "Poster",
        "image" : "POSTER CHALLENGE DAY 41-BLACK BEAUTY.jpg",
        "caption" : "DAY 41",
        "link": "#"
      },
      {
        "title" : "Poster",
        "image" : "POSTER CHALLENGE DAY 42-TRANS RIGHTS.jpg",
        "caption" : "DAY 42",
        "link": "#"
      },
      {
        "title" : "Poster",
        "image" : "POSTER CHALLENGE DAY 43-RICO NASTY REDESIGN 1.jpg",
        "caption" : "DAY 43",
        "link": "#"
      },
      {
        "title" : "Poster",
        "image" : "POSTER CHALLENGE DAY 44-RICO NASTY REDESIGN 2-01.jpg",
        "caption" : "DAY 44",
        "link": "#"
      },
      {
        "title" : "Poster",
        "image" : "POSTER CHALLENGE DAY 45-RICO NASTY REDESIGN 3.jpg",
        "caption" : "DAY 45",
        "link": "#"
      },
      {
        "title" : "Poster",
        "image" : "POSTER CHALLENGE DAY 46-RICO NASTY REDESIGN 4.jpg",
        "caption" : "DAY 46",
        "link": "#"
      },
      {
        "title" : "Poster",
        "image" : "POSTER CHALLENGE DAY 47-RICO NASTY REDESIGN 5.jpg",
        "caption" : "DAY 47",
        "link": "#"
      },
      {
        "title" : "Poster",
        "image" : "POSTER CHALLENGE DAY 48-RICO NASTY REDESIGN 6.jpg",
        "caption" : "DAY 48",
        "link": "#"
      },
      {
        "title" : "Poster",
        "image" : "POSTER CHALLENGE DAY 49-RICO NASTY REDESIGN 7.jpg",
        "caption" : "DAY 49",
        "link": "#"
      }

    ];



function createElement(incomingJSON){
  for (var i = 0; i < incomingJSON.length; i++) {
    var newContentElement = document.createElement("DIV");
    newContentElement.classList.add('contentItem');

    //create imgs of the gift ideas
    var workLink = document.createElement("A");
    workLink.href = incomingJSON[i]['link'];
    var workImage = document.createElement("IMG");
    workImage.classList.add("img");
    workImage.src = incomingJSON[i]['image'];
    workLink.appendChild(workImage);
    newContentElement.appendChild(workLink);

    //create h4 with item name
    //let newContentName = document.createElement("P");
    //newContentName.classList.add('imgDescription');
  //  newContentName.innerText = incomingJSON[i]['caption'];
    //newContentElement.appendChild(newContentName);

    if (incomingJSON[i]['title'] == 'The Idea Girl Agency' && pageName == 'TIGA'){
      tigaImagesElement.appendChild(newContentElement);
    }

    else if (incomingJSON[i]['title'] == 'BlackPrint' && pageName == 'BPMag'){
      bpImagesElement.appendChild(newContentElement);
    }

    else if (incomingJSON[i]['title'] == 'Social Media Addict' && pageName == 'SMA'){
      SMAImagesElement.appendChild(newContentElement);
    }

    else if (incomingJSON[i]['title'] == 'BlackCreatives' && pageName == 'SBC'){
      sbcImagesElement.appendChild(newContentElement);
    }
    else if (incomingJSON[i]['title'] == 'Silver Tea' && pageName == 'STH'){
      sthImagesElement.appendChild(newContentElement);
    }
    else if (incomingJSON[i]['title'] == 'Poster' && pageName == 'posters'){
      posterImagesElement.appendChild(newContentElement);
    }
    //else if (incomingJSON[i]['title'] == 'Planted Haircare' && pageName == 'planted'){
      //plantedImagesElement.appendChild(newContentElement);
    //}
   }
 }



createElement(jsonData);
