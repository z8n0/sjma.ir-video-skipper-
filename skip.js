$.ajax({
    headers: {
        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
    },
    type: "POST",
    url: '/seller/start-video',
   data: " (get category data on js source on f12 on line ~ 300 to 310) ",
    success: function(response) {  
        console.log(':white_check_mark: درخواست با موفقیت ارسال شد!', response);
        alert("موفق باشید ، شما ویدئو را تا پایان مشاهده نموده اید");
    },
    error: function(xhr) {
        console.log(':x: خطا در ارسال:', xhr.responseText);
    }
});
