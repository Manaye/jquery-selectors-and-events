'use strict';

const objectArray = [];
const nameArray = [''];



function HornImage(imageObject){
  this.image_url = imageObject.image_url;
  this.title = imageObject.title;
  this.description = imageObject.description;
  this.keyword = imageObject.keyword;
  this.horn = imageObject.horn;
}

HornImage.prototype.render = function() {
  $('main').append('<div class = "clone"></div>');
  let $imgContainer = $('div[class="clone"]');
  console.log($imgContainer);

  let $clonedImage = $('#photo-template').html();

  $imgContainer.html($clonedImage);
  $imgContainer.find('h2').text(this.title);
  $imgContainer.find('img').attr('src', this.image_url);
  $imgContainer.find('p').text(this.description);
  $imgContainer.attr('class', '');
}

// HornImage.prototype.populateSelect = function() {
//   // for (let i = 0; i < objectArray.length; i++){
//   populateFilter(objectArray);
//   // }
// }

let readJSON = function(){
  $.get('./data/page-1.json',data => {
    data.forEach(imageObject => {
      let newHorn = new HornImage(imageObject);
      objectArray.push(newHorn);

    })
  }).then(renderImage).then(renderSelect)
}

function renderImage() {
  objectArray.forEach(HornImage => {
    HornImage.render();
  })
}

function renderSelect() {
  objectArray.forEach(text => {
    populateFilter(text);
  })
}

function populateFilter(text) {
  // for (let i = 0; i < nameArray.length; i++){
  //   console.log(text.keyword);
  //   if (text.keyword === nameArray[i]){
  //     break;
  //   } else {
  //     nameArray.push(text.keyword);
  //     break;
  //   }
  // }
  // console.log(nameArray);

  $('select').append('<option class ="clone"></option>');
  let $optContainer = $('option[class="clone"]');

  $optContainer.text(text.keyword);
  $optContainer.attr('class', '');

}


readJSON();
