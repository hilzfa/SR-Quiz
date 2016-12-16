app.controller('profileCtrl',function($scope){
    $.ajax({
        "url": "https://api.mlab.com/api/1/databases/srquiz/collections/questions?q={'version':'02-2016'}&apiKey=v3PSrViTDDYV-FESlSPMCn0nu5tbG1LR",
        "type":"GET",
        "contentType":"application/json",
        success:function(data){
            console.log("anzahl der Fragen: "+data.length);
        }
    });
    $scope.keys = [];
    $('#myTest').on("keydown", function(event){
        if(event.keyCode == 13){
            $.ajax({
                "url": "https://api.mlab.com/api/1/databases/srquiz/collections/answers?q={'question_id':'5776771fdcba0f4363813c32'}&apiKey=v3PSrViTDDYV-FESlSPMCn0nu5tbG1LR",
                "type":"GET",
                "contentType":"application/json",
                success:function(data){
                    console.log(data[0].keys);
                    for(var i in data[0].keys){
                        console.log(i);
                        if($(this).val().indexOf(i)>=0){
                            console.log("das wort "+i+" ist vorhanden");
                        }
                        else{
                            console.log("das wort "+i+" ist nicht vorhanden")
                        }
                    }
                }
            });



        }
    })
});
