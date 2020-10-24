function inputFunc() {
  $.ajax(
    {
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: {
        query: $('#inputName').val()
    },
    headers: { Authorization: "KakaoAK 4bc0ff66a5f568c6398d17ef3e753d43" }
  }).done(function(msg) {
      console.log(msg)
    console.log(msg.documents[0].title);
    let intro = document.getElementById('intro');
    intro.innerHTML =  "<img src=' " + msg.documents[0].thumbnail + "'>" + '<div class="word"><a href="">제목 : ' + msg.documents[0].title  + '.</a> <br><a href="">가격 : ' + msg.documents[0].price + '.</a> <br><br><a href="">설명 : ' + msg.documents[0].contents + '</a></div>'

  }); 
}