var ajax = function(form) {
  var formtarget = form,
    data = $(formtarget).serialize();
  // jqxhr = $.post("./ajax.php", data, onAjaxSuccess);

  onAjaxSuccess(
    '{"status": "success", "message": "Заявка принята! Менеджер свяжется с Вами в ближайшее (рабочее) время."}'
  );

  function onAjaxSuccess(data) {
    var json = JSON.parse(data),
      status = json.status,
      message = json.message,
      formid = json.formid;

    if (status === "success") {
      $(formtarget).addClass("disabled");

      reachGoal("form");
    }

    addNotify(status, message, $(formtarget).find(".form__result"));
  }
};

var addNotify = function(status, msg, el) {
  var responseEl = $(el)
    .removeClass("success error")
    .addClass(status)
    .text(msg);

  //   status === "success" && Shop._clearBasket();
};

var reachGoal = function(id, google) {
  //   yaCounter55705045.reachGoal(id);
  //   google && ga("send", "event", "forma", "zakaz");
};

var playerVideo = document.querySelector(".player__video"),
  player = $(".player"),
  playBtn = $(".player__play");

function onYouTubeIframeAPIReady() {
    playBtn.on("click", function() {
        var player = new YT.Player(playerVideo, {
            height: "100",
            width: "100",
            videoId: "GTRAEpllGZo",
            events: {
              onReady: onPlayerReady
            }
          });
      });
  
}

function onPlayerReady(event) {
        event.target.playVideo();
        player.addClass("playing");
}

$(function() {
  $(".form").on("submit", function(e) {
    e.preventDefault();
    ajax(this);
  });
});
