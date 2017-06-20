function submitPost() {
    var name = document.getElementById("name").value;
    var text = document.getElementById("text").value;
    var data = {"name":name,"text":text}
    console.log ("its working")

   $.ajax({
        type:"post",
        url:'/blog' ,
        processData: false,
        datatype:'json',
        contentType:"application/json",
        data:JSON.stringify(data),
        success:function(res){
            console.log("success");
        }
   })
}
