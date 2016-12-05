/**
 * Created by D062653 on 05.07.2016.
 */
app.controller('adminCtrl', function($scope, $timeout, $route){
    $scope.questionArray = [];
    $scope.fetchQuestions = function () {

        $scope.loading=true;
        $.ajax({
            "type":"GET",
            "url":"https://api.mlab.com/api/1/databases/srquiz/collections/questions?apiKey=v3PSrViTDDYV-FESlSPMCn0nu5tbG1LR",
            "contentType":"application/json",
            success:function(questions){
                var allAnswers = [];
                $.ajax({
                    "type":"GET",
                    "url":"https://api.mlab.com/api/1/databases/srquiz/collections/answers?apiKey=v3PSrViTDDYV-FESlSPMCn0nu5tbG1LR",
                    "contentType":"application/json",
                    success:function(answers){
                        $timeout(function(){
                            allAnswers = answers;

                            for(var i = 0; i < questions.length;i++){

                                var matchedEntry = allAnswers.find(function(id){
                                    return id.question_id.$oid==questions[i]._id.$oid;
                                });
                                questions[i].answer = (matchedEntry.answer);

                                    $scope.questionArray.push(questions[i]);
                                    console.log(questions[i].question);
                            }

                            $scope.loading=false;
                        },1);
                    }
                });
            },
            error:function(){
                $timeout(function(){
                    $scope.loading=false;
                    $scope.showError("Keine Daten gefunden!");

                },2000);
            }
        });
    };

    $scope.fetchQuestions();

    $scope.showError = function(sMsg){
        $timeout(function(){
            $scope.errorMsg = false;
        },5000);
        $scope.errorMsg = true;
        $('#errorMsg').html(sMsg);

    };

    $scope.createNewEntry = function(){

        var newEntry = {};
        if($scope.newAnswer && $scope.newQuestion){
            newEntry.question = $scope.newQuestion;
            newEntry.answer = $scope.newAnswer;
            $scope.loading=true;
            $.ajax({
                "type":"POST",
                "url":"/createQuestionEntry",
                "contentType":"application/json",
                "data":JSON.stringify(newEntry),
                success:function(data){

                    $timeout(function(){
                        $scope.questionArray.push(data[0]);
                        $scope.newAnswer = "";
                        $scope.newQuestion = "";
                        $('#addEntryBtn').click();
                        $scope.loading=false;
                    },1);
                }
            });
        }
        else{
            return;
        }

    };

    $scope.refresh = function(){
      $route.reload();
    }





});
