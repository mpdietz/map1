// photo gallery
 var galleryimages = [

  {
    title: 'Brooklyn Bridge, New York City',
    caption: '',
    url: 'http://trulydietz.com/home/wp-content/uploads/2015/05/PSX_20140825_001017_small.jpg',
    geolocation: [40.707385,-73.986568],
  },
  {
    title: 'Central Park, New York City',
    caption: '',
    url: 'http://trulydietz.com/home/wp-content/uploads/2015/05/PSX_20150127_184501_small.jpg',
    geolocation: [40.786066,-73.967857],
  },
  {
    title: 'Gaustavino Subway Entrance, New York City',
    caption: '',
    url: 'http://trulydietz.com/home/wp-content/uploads/2015/05/IMG_20150118_122828_small.jpg',
    geolocation: [40.715582,-73.996181],
  },

   {
    title: 'Lower East Side Roofs, New York City',
    caption: '',
    url: 'http://trulydietz.com/home/wp-content/uploads/2015/05/PSX_20140913_142838_small.jpg',
    geolocation: [40.718835,-73.988800],
      },
   {
    title: 'Delancy Street, New York City',
    caption: '',
    url: 'http://trulydietz.com/home/wp-content/uploads/2015/05/PSX_20140913_142631_small.jpg',
    geolocation: [40.717664,-73.984509],
  },

   {
    title: 'Public Art',
    caption: '',
    url: 'http://trulydietz.com/home/wp-content/uploads/2015/05/PSX_20140916_150207_small.jpg',
    geolocation: [40.721486,-73.991890],
  },

   {
    title: 'Skyline, New York City',
    caption: '',
    url: 'http://trulydietz.com/home/wp-content/uploads/2015/05/PSX_20150501_200113_small.jpg',
    geolocation: [40.646913,-74.075661],
    
  },

  {
    title: 'Subway - Years of Infrastructure, New York City',
    caption: '',
    url: 'http://trulydietz.com/home/wp-content/uploads/2014/10/PSX_20140926_213329.jpg',
    geolocation: [40.657592,-73.931465],
    
  },

   {
    title: 'Moveable Chairs- New York City',
    caption: '',
    url: 'http://trulydietz.com/home/wp-content/uploads/2015/05/PSX_20140831_012614_small.jpg',
    geolocation: [40.742786,-74.008327],
    
  },

  {
    title: 'Sunset Over the Hudson',
    caption: '',
    url: 'http://trulydietz.com/home/wp-content/uploads/2015/05/PSX_20140831_012405_small.jpg',
    geolocation: [40.733161,-74.010901],
    
  }
]

galleryimages.forEach(function(element) {
    $('#gallery').append('<img src =' + element.url + " width='100' height='100'/>" + " ");
  });


  //CartoDB Basemap
var map = L.map('myMap').setView([40.7127837, -74.0059413], 11);

var layer = L.tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="http://cartodb.com/attributions">CartoDB</a>'
});

map.addLayer(layer)

      // Good for testing map markers
        // 
        // var myMapData = [
        //   {
        //     name: "Sunset Over the Hudson",
        //     coord: [40.733161,-74.010901],
        //     url: 'http://trulydietz.com/home/wp-content/uploads/2015/05/PSX_20140831_012405_small.jpg',
        //   },
        //   {
        //     name: "Moveable Chairs- New York City",
        //     coord: [40.742786,-74.008327],
        //     url: 'http://trulydietz.com/home/wp-content/uploads/2015/05/PSX_20140831_012614_small.jpg',
        //   },
        //   {
        //     name: "Subway - Years of Infrastructure, New York City",
        //     coord: [40.657592,-73.931465],
        //     url: 'http://trulydietz.com/home/wp-content/uploads/2014/10/PSX_20140926_213329.jpg'
        //   },
        // ]

        // myMapData.forEach(function(element) {
        //   var marker = L.marker(element.coord).addTo(map);
        //   marker.bindPopup(element.name + "<b> </b>" + '<div class ="galleryimg">' + "<img src =" + element.url + ">" +  '</div>')
        // });

  var panOptions = {
    animate: true,
    duration: 2
  }

  // galleryimages.forEach(function(element) {
  // var marker = L.marker(element.geolocation).addTo(map);
  // marker.bindPopup(element.title + "<b> </b>" + '<div class ="galleryimg">' + "<img src =" + element.url + " width='300' height='300'/>" + 
  //    '</div>')
  // element.hover(function()){
  //     $(this).fadeTo(500,.2)
  //   },function() {
  //          $(this).fadeTo(500,1)
  //       });
  // element.click(function(element) {
  //      map.panto(element.geolocation, panOptions)
  //   }
  // });

  // $(function () {

  //       $('.gallery img').hover(function() {
  //          $(this).fadeTo(500,.2)
  //       }, 
  //       function() {
  //          $(this).fadeTo(500,1)
  //       });
  //   });

  // $(function () {

  //       $('.gallery img').click(function(element) {
  //         map.panto(element.geolocation, panOptions)
  //       }, 
  //       function() {
  //          $(this).fadeTo(500,1)
  //       });
  //   });
      

  galleryimg.click(function() {
    map.panTo(galleryimg.geolocation),panOptions);
  });

    // marker.click(function() {
    //     map.panTo($(this).url, panOptions);
    // });