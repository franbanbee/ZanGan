// 課程的數量增減
var num = 1;//宣告邊數num 變數值為1

$(".minus").click(
  function () {
    num = num - 1;
    $(".num").text(num);
    check();//執行check裏頭的if與else
  }
);

$(".add").click(
  function () {
    num = num + 1;
    $(".num").text(num);
    check();//執行check裏頭的if與else
  }
);

// 活動的數量增減
var num1 = 1;//宣告邊數num 變數值為1

$(".minus1").click(
  function () {
    num1 = num1 - 1;
    $(".num1").text(num1);
    check();//執行check裏頭的if與else
  }
);

$(".add1").click(
  function () {
    num1 = num1 + 1;
    $(".num1").text(num1);
    check();//執行check裏頭的if與else
  }
);

