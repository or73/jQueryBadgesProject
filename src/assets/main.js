$(function() {
  // your code will go here
  $.ajax( {
    url: 'https://www.codeschool.com/users/or73.json',
    dataType: 'jsonp',
    success: function ( response ) {
      // console.log( 'response: ', response);
      addCourses( response.courses.completed );
    }
  } );
  
  function addCourses( courses ) {
    let $badges = $( '#badges' );
    
    courses.forEach( function ( course ) {
      let $course = $( '<div />', {
        'class': 'course'
      } ).appendTo( $badges );
      
      $( '<h3 />', {
        text: course.title
      }).appendTo( $course );
      
      $('<img />', {
        src: course.badge
      }).appendTo( $course );
      
      $( '<a />', {
        'class': 'btn btn-primary',
        target: '_black',
        href: course.url,
        text: 'See Course'
      }).appendTo( $course );
    });
  }
});
