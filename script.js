let tigaImagesElement = document.getElementById('imagesTIGA');
let bpImagesElement = document.getElementById('imagesBP');
let sbcImagesElement = document.getElementById('imagesSBC');
let sthImagesElement = document.getElementById('imagesSTH');
let posterImagesElement = document.getElementById('imagesPoster');

let jsonData = [

      {

        "title" : "The Idea Girl Agency",
        "image" : "GOODBODY GOOD SOLUTIONS-HAIR PARTING_Cover 1.png",
        "caption" : "Social media template creted for GoodBody, creative direction and copy done by The Idea Girl.",
        "link": "https://www.instagram.com/p/CDFhcyqpeDj/?utm_source=ig_web_copy_link"
      },

      {

        "title" : "The Idea Girl Agency",
        "image" : "GB HAIR-SCOPE PART 2_COVER 2-16.png",
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
        "image" : "Taking Up Space Quote-05.png",
        "caption" : "Motivational Quote for the studio's instagram",
        "link" : "https://www.instagram.com/p/B94ixysF8aH/?utm_source=ig_web_copy_link"
      },

      {
        "title" : "The Idea Girl Agency",
        "image" : "SERIF MY TYPE_SERIF-SLIDE 1.png",
        "caption" : "#ThatMyType is a series of education post on typography",
        "link": "https://www.instagram.com/p/CAMJ0XApO4S/?utm_source=ig_web_copy_link"
      },

      {
        "title" : "BlackPrint",
        "image" : "BP Mockup.png",
        "caption" : "A mock up of the website.",
        "link" : "https://stxne.github.io/MobileMediaQueries/"
      },
      {
        "title" : "BlackPrint",
        "image" : "BP Web Layout 2.png",
        "caption" : "A mock up of the website.",
        "link" : "https://stxne.github.io/MobileMediaQueries/"
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
        "image" : "SBC Poster.png",
        "caption" : "A mockup of the website.",
        "link" : "https://stxne.github.io/SupportBlackCreatives2/"
      },

      {
        "title" : "Silver Tea",
        "image" : "STH Logo suite-15.png",
        "caption" : "Primary logo, secondary logo, and sublogo",
      },

      {
        "title" : "Silver Tea",
        "image" : "STH Menu Mockup.png",
        "caption" : "Print menu for the fictional brand.",
      },
      {
        "title" : "Silver Tea",
        "image" : "STH Menu Mockup 2.png",
        "caption" : "Print menu for the fictional brand.",
      },

      {
        "title" : "Silver Tea",
        "image" : "STH Moblie Menu Mockup.png",
        "caption" : "A prototype of a mobile menu for the fictional brand.",
      },

      {
        "title" : "Poster",
        "image" : "POSTER CHALLENGE DAY 1-LINES.png",
        "caption" : "DAY 1",
      },
      {
        "title" : "Poster",
        "image" : "POSTER CHALLENGE DAY 2-SHAPES.jpg",
        "caption" : "DAY 2",
      },
      {
        "title" : "Poster",
        "image" : "POSTER CHALLENGE DAY 3-FORM.png",
        "caption" : "DAY 3",
      },
      {
        "title" : "Poster",
        "image" : "POSTER CHALLENGE DAY 4-COLOR.png",
        "caption" : "DAY 4",
      },
      {
        "title" : "Poster",
        "image" : "POSTER CHALLENGE DAY 5-TEXTURE.png",
        "caption" : "DAY 5",
      },
      {
        "title" : "Poster",
        "image" : "POSTER CHALLENGE DAY 6-SPACE.png",
        "caption" : "DAY 6",
      },
      {
        "title" : "Poster",
        "image" : "POSTER CHALLENGE DAY 7-VALUE.png",
        "caption" : "DAY 7",
      },
      {
        "title" : "Poster",
        "image" : "POSTER CHALLENGE DAY 8-PATTERNS.png",
        "caption" : "DAY 8",
      },
      {
        "title" : "Poster",
        "image" : "POSTER CHALLENGE DAY 9-CONTRAST.png",
        "caption" : "DAY 9",
      },
      {
        "title" : "Poster",
        "image" : "",
        "caption" : "DAY 3",
      },
      {
        "title" : "Poster",
        "image" : "POSTER CHALLENGE DAY 10-EMPHASIS.png",
        "caption" : "DAY 10",
      },
      {
        "title" : "Poster",
        "image" : "POSTER CHALLENGE DAY 11-BALANCE.png",
        "caption" : "DAY 11",
      },
      {
        "title" : "Poster",
        "image" : "POSTER CHALLENGE DAY 12-PERSPECTIVE.png",
        "caption" : "DAY 12",
      },
      {
        "title" : "Poster",
        "image" : "POSTER CHALLENGE DAY 13-HARMONY.png",
        "caption" : "DAY 13",
      },
      {
        "title" : "Poster",
        "image" : "POSTER CHALLENGE DAY 14-MOVEMENT.png",
        "caption" : "DAY 14",
      },
      {
        "title" : "Poster",
        "image" : "POSTER CHALLENGE DAY 15-CASA REGULAR-01.png",
        "caption" : "DAY 15",
      },
      {
        "title" : "Poster",
        "image" : "POSTER CHALLENGE DAY 16-CHEE.png",
        "caption" : "DAY 16",
      },
      {
        "title" : "Poster",
        "image" : "POSTER CHALLENGE DAY 17-COOPER.png",
        "caption" : "DAY 17",
      },
      {
        "title" : "Poster",
        "image" : "POSTER CHALLENGE DAY 18-DIDOT-04.png",
        "caption" : "DAY 18",
      },
      {
        "title" : "Poster",
        "image" : "POSTER CHALLENGE DAY 19-TITLING GOTHIC.png",
        "caption" : "DAY 19",
      },
      {
        "title" : "Poster",
        "image" : "POSTER CHALLENGE DAY 20-DIGESTIVE.png",
        "caption" : "DAY 20",
      },
      {
        "title" : "Poster",
        "image" : "POSTER CHALLENGE DAY 21-CENTURY GOTHIC.png",
        "caption" : "DAY 21",
      },
      {
        "title" : "Poster",
        "image" : "POSTER CHALLENGE DAY 22-WILLOW-01.png",
        "caption" : "DAY 22",
      },
      {
        "title" : "Poster",
        "image" : "POSTER CHALLENGE DAY 23-THE 1975-01-noise - Copy.png",
        "caption" : "DAY 23",
      },
      {
        "title" : "Poster",
        "image" : "POSTER CHALLENGE DAY 24-HARRY STYLES-01.png",
        "caption" : "DAY 24",
      },
      {
        "title" : "Poster",
        "image" : "POSTER CHALLENGE DAY 25-TAME IMPALA (1).png",
        "caption" : "DAY 25",
      },
      {
        "title" : "Poster",
        "image" : "POSTER CHALLENGE DAY 26-DOMINIC FIKE.png",
        "caption" : "DAY 26",
      },
      {
        "title" : "Poster",
        "image" : "POSTER CHALLENGE DAY 27-SZA.png",
        "caption" : "DAY 27",
      },
      {
        "title" : "Poster",
        "image" : "POSTER CHALLENGE DAY 28-RICO NASTY-04.png",
        "caption" : "DAY 28",
      },
      {
        "title" : "Poster",
        "image" : "POSTER CHALLENGE DAY 29-ONLY YESTERDAY.png",
        "caption" : "DAY 29",
      },
      {
        "title" : "Poster",
        "image" : "POSTER CHALLENGE DAY 30-CRAZY RICH ASIANS.png",
        "caption" : "DAY 30",
      },
      {
        "title" : "Poster",
        "image" : "POSTER CHALLENGE DAY 31-LOGAN-01.png",
        "caption" : "DAY 31",
      },
      {
        "title" : "Poster",
        "image" : "POSTER CHALLENGE DAY 32-ALICE IN WONDERLAND.png",
        "caption" : "DAY 32",
      },
      {
        "title" : "Poster",
        "image" : "POSTER CHALLENGE DAY 33-TRAIN TO BUSAN.png",
        "caption" : "DAY 33",
      },
      {
        "title" : "Poster",
        "image" : "POSTER CHALLENGE DAY 34-MIDSOMMER-04.png",
        "caption" : "DAY 34",
      },
      {
        "title" : "Poster",
        "image" : "POSTER CHALLENGE DAY 35-BIG HERO SIX.png",
        "caption" : "DAY 35",
      },
      {
        "title" : "Poster",
        "image" : "POSTER CHALLENGE DAY 36-CULTURAL APPROPRIATION.png",
        "caption" : "DAY 36",
      },
      {
        "title" : "Poster",
        "image" : "POSTER CHALLENGE DAY 37-BLACK EXPERIENCE.png",
        "caption" : "DAY 37",
      },
      {
        "title" : "Poster",
        "image" : "POSTER CHALLENGE DAY 38-END SARS-01.png",
        "caption" : "DAY 38",
      },
      {
        "title" : "Poster",
        "image" : "POSTER CHALLENGE DAY 39-SAY THEIR NAMES.png",
        "caption" : "DAY 39",
      },
      {
        "title" : "Poster",
        "image" : "POSTER CHALLENGE DAY 40-VOTE .png",
        "caption" : "DAY 40",
      },
      {
        "title" : "Poster",
        "image" : "POSTER CHALLENGE DAY 41-BLACK BEAUTY.png",
        "caption" : "DAY 41",
      },
      {
        "title" : "Poster",
        "image" : "POSTER CHALLENGE DAY 42-TRANS RIGHTS.png",
        "caption" : "DAY 42",
      },
      {
        "title" : "Poster",
        "image" : "POSTER CHALLENGE DAY 43-RICO NASTY REDESIGN 1.png",
        "caption" : "DAY 43",
      },
      {
        "title" : "Poster",
        "image" : "POSTER CHALLENGE DAY 44-RICO NASTY REDESIGN 2-01.png",
        "caption" : "DAY 44",
      },
      {
        "title" : "Poster",
        "image" : "POSTER CHALLENGE DAY 45-RICO NASTY REDESIGN 3.png",
        "caption" : "DAY 45",
      },
      {
        "title" : "Poster",
        "image" : "POSTER CHALLENGE DAY 46-RICO NASTY REDESIGN 4.png",
        "caption" : "DAY 46",
      },
      {
        "title" : "Poster",
        "image" : "POSTER CHALLENGE DAY 47-RICO NASTY REDESIGN 5.png",
        "caption" : "DAY 47",
      },
      {
        "title" : "Poster",
        "image" : "POSTER CHALLENGE DAY 48-RICO NASTY REDESIGN 6.png",
        "caption" : "DAY 48",
      },
      {
        "title" : "Poster",
        "image" : "POSTER CHALLENGE DAY 49-RICO NASTY REDESIGN 7.png",
        "caption" : "DAY 49",
      },

]

function createElement(incomingJSON){
  for (let i = 0; i < incomingJSON.length; i++) {
    let newContentElement = document.createElement("DIV");
    newContentElement.classList.add('contentItem');

    //create imgs of the gift ideas
    let workImage = document.createElement("IMG");
    workImage.classList.add("img");
    workImage.src = incomingJSON[i]['image'];
    newContentElement.appendChild(workImage);

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

    else if (incomingJSON[i]['title'] == 'BlackCreatives' && pageName == 'SBC'){
      sbcImagesElement.appendChild(newContentElement);
    }
    else if (incomingJSON[i]['title'] == 'Silver Tea' && pageName == 'STH'){
      sthImagesElement.appendChild(newContentElement);
    }
    else if (incomingJSON[i]['title'] == 'Poster' && pageName == 'posters'){
      posterImagesElement.appendChild(newContentElement);
    }
  }


}
createElement(jsonData);
