// Initialize Firebase
var config = {
  apiKey: "AIzaSyALtReiEHZ3WunvDWWSNOH4TIbxMPQUm9I",
  authDomain: "js-development-test-7b354.firebaseapp.com",
  databaseURL: "https://js-development-test-7b354.firebaseio.com",
  projectId: "js-development-test-7b354",
  storageBucket: "js-development-test-7b354.appspot.com",
  messagingSenderId: "171303960914"
};
firebase.initializeApp(config);

var messageAppReference = firebase.database();

$(document).ready(function(){
  $('#message-form').submit(function(event){
    event.preventDefault();
    var message = $('#message').val();
    $('#message').val('');
    var messageReference = messageAppReference.ref('messages');

    messageReference.push({
      message: message,
      votes: 0
    });
  });
  
  var fuck = 'shit'
  
  function getMessages(){
    var messageReference = messageAppReference.ref('messages')
    messageReference.on('value', function(results){
      results.forEach(function(message){
        console.log(message.getKey());
        var tempLi = "<li id='"+message.getKey()+"'>"+message.val().message+"</li><button>delete</button>";
        $('#comments').append(tempLi);
      })
    });
  };
  function updateMessage(id,votes){
    var messageReference = messageAppReference.ref('messages').child(id);
    messageReference.update({
      votes: votes
    })
  };
  function deleteMessage(id){
    var messageReference = messageAppReference.ref('messages').child(id);
    messageReference.remove()
  }

  getMessages();
  updateMessage('-KpI3NCK43_KDybx2wK9', 1);
});