let tigaImagesElement = document.getElementById('imagesTIGA');
let bpImagesElement = document.getElementById('imagesBP');
let sbcImagesElement = document.getElementById('imagesSBC');
let sthImagesElement = document.getElementById('imagesSTH');
let plantedImagesElement = document.getElementById('imagesPlanted');
//let posterImagesElement = document.getElementById('imagesPoster');

let jsonData = [

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
        "title" : "Planted Haircare",
        "image" : "PLANTED INSTA HIGHLIGHTS-hair #1.png",
        "caption" : "Illustration for instagram highlights",
        "link": "#"
      },
      {
        "title" : "Planted Haircare",
        "image" : "PLANTED INSTA HIGHLIGHTS-PRODUCTS #1.png",
        "caption" : "Illustration for instagram highlights",
        "link": "#"
      },
      {
        "title" : "Planted Haircare",
        "image" : "PLANTED INSTA HIGHLIGHTS-REVIEWS #1.png",
        "caption" : "Illustration for instagram highlights",
        "link": "#"
      },
      {
        "title" : "Planted Haircare",
        "image" : "PLANTED INSTA HIGHLIGHTS-WASH DAY #5.png",
        "caption" : "Illustration for instagram highlights",
        "link": "#"
      }


]



function createElement(incomingJSON){
  for (let i = 0; i < incomingJSON.length; i++) {
    let newContentElement = document.createElement("DIV");
    newContentElement.classList.add('contentItem');

    //create imgs of the gift ideas
    let workLink = document.createElement("A");
    workLink.href = incomingJSON[i]['link'];
    let workImage = document.createElement("IMG");
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

    else if (incomingJSON[i]['title'] == 'BlackCreatives' && pageName == 'SBC'){
      sbcImagesElement.appendChild(newContentElement);
    }
    else if (incomingJSON[i]['title'] == 'Silver Tea' && pageName == 'STH'){
      sthImagesElement.appendChild(newContentElement);
    }
    //else if (incomingJSON[i]['title'] == 'Poster' && pageName == 'posters'){
      //posterImagesElement.appendChild(newContentElement);
    //}
    else if (incomingJSON[i]['title'] == 'Planted Haircare' && pageName == 'planted'){
      plantedImagesElement.appendChild(newContentElement);
    }
  }


}
createElement(jsonData);
