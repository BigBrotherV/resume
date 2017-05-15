$(document).ready(function() {

  console.log('Hello! \n该简历代码已开源在GitHub(https://github.com/BigBrotherV/resume\n很多灵感来源于@赵柯宇，非常感谢！\n如果有任何建议或者意见，可通过简历中的联系方式联系我\n互相学习，互相进步')

  $('.mask').animate({
    height: '100%'
  }, 700, function() {
    $('.mask').fadeOut(300);
  });

  $("#fullpage").fullpage({

    anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'fifthPage', 'sixthPage'],

    loopHorizontal: false,

    controlArrowColor: '#eaeaea',

    menu: '#myMenu',

    afterLoad: function(anchorLink, index) {

      if (index == 2) {
        $('.info-l-con,.info-r-con,.about-me,.info-l,.info-r').css('display', '');
        $(".about-me").animate({
          width: "80%"
        }, 500, function() {
          var en = $('.en').html();
          if (en == 'EN') {
            $('.about-me-con').html('About Me');
          } else {
            $('.about-me-con').html('关&nbsp;于&nbsp;我');
          }
          $('.info-l').animate({
            height: "65%"
          }, 500, function() {
            $('.info-r').animate({
              width: "48%"
            }, 500, function() {
              $('.info-l-con,.info-r-con,.about-me-con').fadeIn('400');
            });
          });
        });
      } else {
        $('.about-me-con').html("");
        $('.info-l-con,.info-r-con,.about-me,.info-l,.info-r').css('display', 'none');
        $(".about-me").animate({
          width: "0"
        }, 10, function() {
          $('.info-l').animate({
            height: "0"
          }, 10, function() {
            $('.info-r').animate({
              width: "0"
            }, 10);
          });
        });
      }

      if (index == 5) {
        $('.lang').hide();
        $('.slide-r').animate({
          width: "35%",
          padding: "20px"
        }, 500, function() {
          $('.slide-r-con').fadeIn(500);
        });
        $('#myMenu').hide(300);
        $('.fp-controlArrow.fp-next').show(300);
      } else {
        $('.lang').show();
        $('.slide-r-con').hide();
        $('.slide-r').css({
          padding: '0px',
          width: '0px'
        });
        $('#myMenu').show();
        $('.fp-controlArrow.fp-next').hide();
      }

      if (index == 6) {
        $('.arrow').hide();
      } else {
        $('.arrow').show();
      }

    }

  });

  $('body').backstretch(["image/tm-bg-slide-1.jpg", "image/tm-bg-slide-2.jpg", "image/tm-bg-slide-3.jpg"], {
    duration: 3200,
    fade: 1300
  });

  $('.tabs').tabulous({
    effect: 'scaleUp'
  });

  $('.photo').mouseover(function() {
    $(this).css('box-shadow', '0 0 20px #0CC')
  });

  $('.photo').mouseout(function() {
    $(this).css('box-shadow', '')
  });

  $('.sixth-page .contect li i:eq(0)').mouseover(function() {
    $('.sixth-page .contect div:eq(0)').show();
  });

  $('.sixth-page .contect li i:eq(0)').mouseout(function() {
    $('.sixth-page .contect div:eq(0)').hide();
  });

  $('.sixth-page .contect li i:eq(1)').mouseover(function() {
    $('.sixth-page .contect div:eq(1)').show();
  });

  $('.sixth-page .contect li i:eq(1)').mouseout(function() {
    $('.sixth-page .contect div:eq(1)').hide();
  });

  $('.sixth-page .contect li i:eq(2)').mouseover(function() {
    $('.sixth-page .contect div:eq(2)').show();
  });

  $('.sixth-page .contect li i:eq(2)').mouseout(function() {
    $('.sixth-page .contect div:eq(2)').hide();
  });

  $('.fourth-page .nav li:eq(0)').on('click', function() {
    $(this).css({
      background: '#000',
      color: '#fff'
    });
    $('.fourth-page .nav li:eq(1)').css({
      background: '#fff',
      color: '#000'
    });
    $('.work-exp').hide('1000', function() {
      $('.edu-exp').show(1000);
    });
  });

  $('.fourth-page .nav li:eq(1)').on('click', function() {
    $(this).css({
      background: '#000',
      color: '#fff'
    });
    $('.fourth-page .nav li:eq(0)').css({
      background: '#fff',
      color: '#000'
    });
    $('.edu-exp').hide('1000', function() {
      $('.work-exp').show(1000);
    });
  });

  $('.zh').on('click', function(e) {
    e.preventDefault();
    $('.lan-move').animate({
      left: "0"
    }, 300, chinese());
  });

  $('.en').on('click', function(e) {
    e.preventDefault();
    $('.lan-move').animate({
      left: "30px"
    }, 300, english());
  });

  function chinese() {
    $('.zh').html("中");
    $('.en').html("英");
    $('.p1').html("生命在于折腾！或者…被折腾……");
    $('.item1').html("我是 <strong>姚崴</strong>");
    $('.item2').html("正奔跑在前端工程师的路上");
    $('.about-me-con').html("关&nbsp;于&nbsp;我");
    $('.info-age').html("年龄/23岁");
    $('.info-edu').html("学历/本科");
    $('.info-gps').html("定位/北京");
    $('.info-sta').html("状态/离职");
    $('.info-r-con').html("大学开始自学前端，基础扎实</br>对新技术充满兴趣，紧跟潮流</br>主观能动性强，今日事今日毕</br>自学能力出众，时刻不忘提升自己</br>善于分析问题，解决问题</br>有轻度代码洁癖，看到诗一样的代码会心情舒畅</br>性格幽默，正直诚信");
    $('.third-page .title').html('技&nbsp;术&nbsp;栈');
    $('.tec-desc a:eq(0)').html('信手拈来');
    $('.tec-desc a:eq(1)').html('融会贯通');
    $('.tec-desc a:eq(2)').html('略有起色');
    $('#tabs-1 p:eq(0)').html('Web标准');
    $('#tabs-1 p:eq(3)').html('浏览器兼容性问题');
    $('#tabs-1 p:eq(4)').html('BootStrap响应式开发');
    $('#tabs-2 p:eq(0)').html('原生JS');
    $('#tabs-2 p:eq(3)').html('面向对象编程思想');
    $('#tabs-2 p:eq(4)').html('Git/GitHub的使用');
    $('#tabs-2 p:eq(5)').html('FireBug调试工具');
    $('#tabs-2 p:eq(6)').html('Linux命令行');
    $('#tabs-3 p:eq(2)').html('MV*思想');
    $('.fourth-page .title').html('经&nbsp;&nbsp;历');
    $('.edu-exp-con').css('top', '15%');
    $('.work-exp-con').css('top', '12%');
    $('.edu-exp-con h3').html('北京信息科技大学');
    $('.edu-exp-con p:eq(0)').html('<b>自动化学院</b>');
    $('.edu-exp-con p:eq(2)').html('<b>班级情况：</b>');
    $('.edu-exp-con p:eq(3)').html('&nbsp;&nbsp;任预备党员，班级组织委员，负责组织各项班级活动');
    $('.edu-exp-con p:eq(4)').html('<b>社团情况：</b>');
    $('.edu-exp-con p:eq(5)').html('&nbsp;&nbsp;加入北京市十佳社团学生信息科技协会，应用技术部，开始了自学前端的生涯');
    $('.work-exp-con h3').html('英孚教育青少儿英语');
    $('.work-exp-con p:eq(1)').html('课程顾问');
    $('.work-exp-con p:eq(2)').html('预约、招生、服务、培训');
    $('.work-exp-con p:eq(3)').html('&nbsp;&nbsp;毕业后因个人原因，未从事前端，而选择了课程顾问');
    $('.work-exp-con p:eq(4)').html('&nbsp;&nbsp;从零开始，一年中为企业创造了200余万业绩');
    $('.work-exp-con p:eq(5)').html('&nbsp;&nbsp;帮助一百余位青少儿爱上英语');
    $('.work-exp-con p:eq(6)').html('&nbsp;&nbsp;家长满意度极高，退费率远远低于标准线');
    $('.work-exp-con p:eq(7)').html('<b>更了解用户需求，所以更注重用户体验</b>');
    $('.work-exp-con p:eq(8)').html('<b>只要是我选择的工作，一定会尽最大努力，做到最好！</b>');
    $('.sixth-page .title').html('联系我');
    $('.sixth-page .main p:eq(0)').html('爱健身&nbsp;&nbsp;爱读书&nbsp;&nbsp;爱音乐&nbsp;&nbsp;爱美食');
    $('.sixth-page .main p:eq(1)').html('最重要的是');
    $('.sixth-page .main p:eq(2)').html('热爱前端');
    $('.sixth-page .main p:eq(3)').html('还在等什么');
    $('.sixth-page .main p:eq(4)').html('赶快把我收到碗里吧');

  }

  function english() {
    $('.zh').html("CN");
    $('.en').html("EN");
    $('.p1').html("Life is depend on toss! Or... Be toss......");
    $('.item1').html("I am <strong>Peter.Yao</strong>");
    $('.item2').html("Running on the way to be a front-end web developer");
    $('.about-me-con').html("About Me");
    $('.info-age').html("age/23");
    $('.info-edu').html("Edu./B.S.");
    $('.info-gps').html("Add./BeiJing");
    $('.info-sta').html("Status/No Job");
    $('.info-r-con').html("Solid professional knowledge, work hard, have good psychological quality, and innovation capability.</br>My analytical nature makes me great at problem-solving.</br>I have mild cleanliness of code, when I see the code as same as poem will be happy.</br>I am open, easy going, and seen of humor.");
    $('.third-page .title').html('Skills');
    $('.tec-desc a:eq(0)').html('Skillful');
    $('.tec-desc a:eq(1)').html('Digesting');
    $('.tec-desc a:eq(2)').html('Still raw');
    $('#tabs-1 p:eq(0)').html('Web standard');
    $('#tabs-1 p:eq(3)').html('CSS Hack');
    $('#tabs-1 p:eq(4)').html('BootStrap responsive development');
    $('#tabs-2 p:eq(0)').html('Protogenesis JavaScript');
    $('#tabs-2 p:eq(3)').html('Object Oriented thinking');
    $('#tabs-2 p:eq(4)').html('Use of Git/GitHub');
    $('#tabs-2 p:eq(5)').html('FireBug debugging tools');
    $('#tabs-2 p:eq(6)').html('Linux Command Line');
    $('#tabs-3 p:eq(2)').html('MV* thinking');
    $('.fourth-page .title').html('Experience');
    $('.edu-exp-con').css('top', '5%');
    $('.work-exp-con').css('top', '3%');
    $('.edu-exp-con h3').html('Beijing Information Science and Technology University');
    $('.edu-exp-con p:eq(0)').html('<b>College of Automation</b>');
    $('.edu-exp-con p:eq(2)').html('<b>Class situation:</b>');
    $('.edu-exp-con p:eq(3)').html('&nbsp;&nbsp;Probationary Party member, Member of a class organization, responsible for organizing class activities');
    $('.edu-exp-con p:eq(4)').html('<b>Club situation：</b>');
    $('.edu-exp-con p:eq(5)').html('&nbsp;&nbsp;Joined the Student Information Technology Association, applied technology department, began self-study front end career');
    $('.work-exp-con h3').html('EF English ');
    $('.work-exp-con p:eq(1)').html('Course Consultant');
    $('.work-exp-con p:eq(2)').html('Appointment、Recruit、Service、Train');
    $('.work-exp-con p:eq(3)').html('&nbsp;&nbsp;After graduation, I chose to be a course consultant');
    $('.work-exp-con p:eq(4)').html('&nbsp;&nbsp;I created more than 2 million results for the company');
    $('.work-exp-con p:eq(5)').html('&nbsp;&nbsp;To help more than one hundred children fall in love with English');
    $('.work-exp-con p:eq(6)').html('&nbsp;&nbsp;The satisfaction of parents is extremely high, refund rate is far below the standard line');
    $('.work-exp-con p:eq(7)').html('<b>More understanding of user needs, so pay more attention to user experience</b>');
    $('.work-exp-con p:eq(8)').html('<b>I will do my best to achieve perfection with my work!</b>');
    $('.sixth-page .title').html('Contact me');
    $('.sixth-page .main p:eq(0)').html('Fitness&nbsp;&nbsp;Reading&nbsp;&nbsp;Music&nbsp;&nbsp;Delicacy');
    $('.sixth-page .main p:eq(1)').html('Most important of all');
    $('.sixth-page .main p:eq(2)').html('Love fore-end');
    $('.sixth-page .main p:eq(3)').html('What are you waiting for');
    $('.sixth-page .main p:eq(4)').html('Please put me in the bowl as soon as possible');
  }

});