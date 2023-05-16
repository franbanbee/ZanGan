var num=1;//宣告邊數num 變數值為1

$(".minus").click(
  function(){
    num=num-1;
    $(".num").text(num);
    check();//執行check裏頭的if與else
  }
);

$(".add").click(
  function(){
    num=num+1;
    $(".num").text(num);
    check();//執行check裏頭的if與else
  }
);
