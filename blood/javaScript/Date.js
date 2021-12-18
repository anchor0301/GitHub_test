
$(function () {
    $("#Date").datepicker({
        changeMonth: true,
        changeYear: true,
        dayNamesMin: ['월', '화', '수', '목', '금', '토', '일'],
        monthNamesShort: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
        nextText: "다음 달",
        prevText: "이전 달",
        dateFormat: "yy-mm-dd",
        closeText: '"닫기"'
    });
});


function printName() {
    const name = document.getElementById('Date').value;


    let tDate = new Date(name)
    tDate.setMinutes(tDate.getMinutes() + 56)

    //날짜 년도 포멧 변경
    let year = tDate.getFullYear();  //년도를 재정의
    let month = ('0' + (tDate.getMonth() + 3)).slice(-2);  //월을 재정의
    let day = ('0' + tDate.getDate()+26).slice(-2);  //일을 재정의

    let dateString = year + '년' + month + '월' + day + '일';

    //메인페이지에 띄우기
    document.getElementById("result").innerText = dateString
}

