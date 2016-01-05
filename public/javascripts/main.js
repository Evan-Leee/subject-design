function timeFormat(time) {
  var milliSeconds = parseInt(time);
  var date = new Date(milliSeconds);

  var year = date.getFullYear().toString();
  var month = date.getMonth() + 1 > 10 ?
      (date.getMonth() + 1).toString() :
  '0' + (date.getMonth() + 1);
  var day = date.getDate() > 10 ?
      date.getDate().toString() :
  '0' + date.getDate();

  return year + '-' + month + '-' + day;
}

function listEvents(index, events) {
  $("div.result").remove();

  for (var i = index; i < index + 10 && i < events.length; i++) {

    var div, divStart, divMiddle, divEnd, event;
    event = events[i];
    divStart = "<div class='result wow animated fadeInUp'><div class='result-content'><span class='title' title=\"" + event.title + "\">";
    divEnd = "</span><span class='created'>Created @ " +
        timeFormat(event.created) +
        "</span></div></div>";

    divMiddle = event.title;

    div = divStart + divMiddle + divEnd;
    $(".events").append(div);
  }

}


function listStu(index, key, students) {
  $("div.student").remove();
  var reg = new RegExp(key, "gim");

  for (var i = index; i < index + 10 && i < students.length; i++) {

    var div, divStart, divMiddle, divEnd, student;
    student = students[i];
    divStart = "<div class='student wow animated fadeInUp'>" + "<div class=\" panel panel-default\">" +
        "<div class=\"panel-heading\" role=\"tab\" id=\"heading" + student.id + "\">" +
        "<h4 class=\"panel-title\">" +
        "<a class=\"collapsed\" role=\"button\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapse" + student.id + "\" aria-expanded=\"false\" aria-controls=\"collapse" + student.id + "\">";

    divEnd = "</a>" + "<a class=\"delete\" name=\""+ student.id +"\">删除</a>" +
        "</h4>" +
        "</div>" +
        "<div id=\"collapse" + student.id + "\" class=\"panel-collapse collapse\" role=\"tabpanel\" aria-labelledby=\"heading" + student.id + "\">" +
        "<div class=\"panel-body\">" +
        "电话:" + student.info.phoneNumber + "家庭住址:" + student.info.address +
        "</div></div></div></div>";

    if (key !== '') {
      divMiddle = "姓名:" + student.info.name.replace(reg, "<em class='high-light'>$&</em>") + "  " + "班级:" + student.info.klass;
    } else {
      divMiddle = "姓名:" + student.info.name + "  " + "班级:" + student.info.klass;
    }

    div = divStart + divMiddle + divEnd;

    $(".content-middle").append(div);
  }

}

function setRight(res) {
  if (res.type !== 'stu' && res.type !== 'admin') {
    $(".panel-title a").removeAttr('href').css('cursor', 'default');
  }

  if (res.type === 'admin') {
    $("a.delete").css('display', 'block');
    $("button.add").css('display', 'block');
  } else {
    $("a.delete").css('display', 'none');
    $("button.add").css('display', 'none');
  }
}

function render(data) {
  var key = $("#search").val();
  var reg = new RegExp(key, "gim");
  var result = data.filter(function (elem) {
    return elem.info.name.search(reg) >= 0;
  });

  if (!result.length && key === '')result = data;

  listStu(0, key, result);

  var total = result.length;

  $(".content-head em").html(total);
  $("#page").pagination('setPageIndex', 0);
  $("#page").pagination('render', [total]);
}


$(document).ready(function () {

  $.get("/user", function (res) {

    listStu(0, '', res.data);

    $("#page").pagination({
      pageSize: 10,
      pageBtnCount: 8,
      showFirstLastBtn: true,
      firstBtnText: '首页',
      lastBtnText: '尾页',
      total: res.data.length
    });
    setRight(res);

    $(".content-head em").html(res.data.length);
  });


  $("#search").bind("input", function () {

    $.get("/user", function (res) {
      render(res.data);
      setRight(res);
    });

  });

  $("#page").on("pageClicked", function (event, data) {
    var index = data.pageIndex * 10;
    var key = $("#search").val();
    var reg = new RegExp(key, "gim");
    $.get("/user", function (res) {
      var result = res.data.filter(function (elem) {
        return elem.info.name.search(reg) >= 0;
      });

      if (!result.length)result = data;
      listStu(index, key, result);

      setRight(res);
    });

  });

  $("#add").on('click', function () {
    if ($("#event").val() === '') {
      $(".error").css("display", "block");
    } else {
      $.post("/event/add",
          {
            event: $("#event").val()
          }, function (data) {
            render(data);
          });
      $("#addEvent").modal('hide');
    }
  });


  $("div.content-middle").delegate('button.delete', 'click', function () {

    if (confirm("确定要删除吗？")) {
      $.post("/bookmarks/delete",
          {
            title: $(this).prev().children(0)[0].innerHTML
          },
          function (data) {
            render(data);
          }
      );
    }

  });

  $("span.menu").click(function () {
    $(".top-nav ul").slideToggle(500, function () {
    });
  });

  $("button.login").click(function () {
    if ($('#userName').val() === '' || $('#password').val() === '') {
      alert('用户名/密码不能为空!');

    } else {
      $.post('login/verify',
          {userId: $('#userName').val(), password: $('#password').val()},
          function (res) {
            if (res.isCorrect) {
              $('form.login-form').submit()
            } else {
              alert('用户名或密码错误!')
            }

          });
    }
  });

  $('button.addmessage').click(function () {
    if ($('#msId').val() === '' || $('textarea.message').val() === '') {
      alert('关键信息不能为空!');
      return;
    } else {
      $.post('/message/add',
          {
            id: $('#msId').val(),
            message: $('textarea.message').val()
          }, function (res) {
            if (res === 'OK') {
              alert('发送成功!');
              $('#msId').val('');
              $('textarea.message').val('');
            }
          }
      )
    }
  });

  $.get("/events/content", function (temp) {

    listEvents(0, temp.events);

    $("#eventpage").pagination({
      pageSize: 10,
      pageBtnCount: 8,
      showFirstLastBtn: true,
      firstBtnText: '首页',
      lastBtnText: '尾页',
      total: temp.events.length
    });
  });



  $("#eventpage").on("pageClicked", function (event, data) {
    var index = data.pageIndex * 10;

    $.get("/events/content", function (res) {
      listEvents(index, res.events);

    });

  });

  $('#profile button.submit').click(function(){
    $.post('/profile',
        {
          userName: $('#user-name').val(),
          userClass: $('#user-class').val(),
          userPhone: $('#user-phone').val(),
          userAddress: $('#user-address').val()
        }, function(res){
          if(res.isSuccess){
            alert('修改成功!');
          }
        })
  });

  $('#modify button.submit').click(function(){
    if($('#new-psd').val() === '' || $('#confirm').val() === ''){
      alert('密码不能为空!');
    }else if($('#new-psd').val() !== $('#confirm').val()){
      alert('两次密码不一致!');
    }else{
      $.post('/profile/modify',
          {
            newPassword: $('#new-psd').val()
          },function(res){
            if(res.isSuccess){
              alert('修改成功!请重新登录');
              location.href='/logout';
            }
          })
    }

  });

  $('.content-middle').delegate('a.delete','click', function(){
    var id = $(this).attr('name');
    console.log(id);
    $.post('/user/delete',
        {
          userId: id
        },function(res){
          if(res.isDelete){
            alert('删除成功!');
            location.href='/'
          }
        })
  });

  $('button.adduser').click(function(){
    $.post('/user/add',
        {
          id:$('#Id').val(),
          password:$('#psd').val(),
          type:$('#type').val(),
          name:$('#name').val(),
          klass:$('#klass').val(),
          phone:$('#phone').val(),
          address:$('#address').val()
        },function(res){
          if(res.isAdd){
            alert('添加成功!');
            $('#addUser').modal('hide');
            location.href='/'
          }
        })
  });

});



