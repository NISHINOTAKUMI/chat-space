$(function(){
  function buildHTML(message){
    if ( message.image ) {
      let html =
        `<div class="main-chat__message" data-message-id=${message.id}>
          <div class="main-chat__name_and_time">
            <div class="main-chat__name">
              ${message.user_name}
            </div>
            <div class="main-chat__time">
              ${message.created_at}
            </div>
          </div>
          <div class="main-chat__comment">
            <p class="Message__content">
              ${message.content}
            </p>
            <img class="Message__image" src="${message.image}">
          </div>
        </div>`
      return html;
    } else {
      let html =
      `<div class="main-chat__message" data-message-id=${message.id}>
        <div class="main-chat__name_and_time">
          <div class="main-chat__name">
            ${message.user_name}
          </div>
          <div class="main-chat__time">
            ${message.created_at}
          </div>
        </div>
        <div class="main-chat__comment">
          <p class="Message__content">
            ${message.content}
          </p>
        </div>
      </div>`
      return html;
    };
  }

  $('.Form').on('submit', function(e){
    e.preventDefault()
    let formData = new FormData(this);
    let url = $(this).attr('action');
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      let html = buildHTML(data);
      $('.main-chat__message-form').append(html);      
      $('form')[0].reset();
      $('.submit-btn').prop('disabled', false);
      $('.main-chat__message-form').animate({ scrollTop: $('.main-chat__message-form')[0].scrollHeight});
    })

    .fail(function() {
      alert("メッセージ送信に失敗しました");
    });
    
  });
});