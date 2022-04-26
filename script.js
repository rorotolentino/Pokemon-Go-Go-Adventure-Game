$(".button3") .hide();
$(".button4") .hide();
$(".button5") .hide();
$(".button6") .hide();
$(".button7") .hide();
$(".button8") .hide();
 $(".button9") .hide();
 $(".button10") .hide();
 $(".button11") .hide();
$(".button12") .hide();

$(".button1").click(function(){
    $(".sentence1") .text("wow good job, you made pikachu sad");
    $(".pikachu") .attr ("src", "https://fictionhorizon.com/wp-content/uploads/2020/07/AshDie.jpeg");
    $(".button1") .hide();
     $(".button2") .hide();
});

$(".button2").click(function() {  
    $(".sentence1") .text("yay! click continue");
    $(".button3") .show();
    $(".pikachu") .attr ("src", "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5abce78e-01ca-401f-81e1-b9b7f9931e98/defx41p-f90b31db-6185-4411-b68e-9a2f52b0f6cc.png/v1/fill/w_1280,h_960,q_80,strp/very_happy_pikachu_by_tatsunokoisthebest_defx41p-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9OTYwIiwicGF0aCI6IlwvZlwvNWFiY2U3OGUtMDFjYS00MDFmLTgxZTEtYjliN2Y5OTMxZTk4XC9kZWZ4NDFwLWY5MGIzMWRiLTYxODUtNDQxMS1iNjhlLTlhMmY1MmIwZjZjYy5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.R34pKr_nLkmry9nsh1LINrGnxAHE8m_HIi1qMbBs7RU");
     $(".button2") .hide();
     $(".button1") .hide();
});


$(".button3").click(function() {  
    $(".sentence1") .text("oh no! there's two paths, help pikachu choose which one.");
    $(".pikachu") .attr ("src", "https://i.imgflip.com/298oe5.jpg");
    $(".button4") .show();
    $(".button5") .show();
    $(".button3") .hide();
});

$(".button4").click(function(){
    $(".sentence1") .text("oh no! its team rocket");
    $(".pikachu") .attr ("src", "https://i.pinimg.com/736x/cb/ed/d6/cbedd639d501e711e0a96ac30e779af1.jpg");
    $(".button4") .hide();
     $(".button5") .hide();
    $(".button6") .show();
     $(".button7") .show();
});

$(".button6").click(function(){
    $(".sentence1") .text("they picked tyranitar. quick click tyranitar to help pikachu make a move");
    $(".pikachu") .attr ("src", "https://static.wikia.nocookie.net/pokemon/images/0/0c/Team_Rocket_Tyranitar.png/revision/latest?cb=20191201111652");
     $(".button6") .hide();
     $(".button7") .hide();
});

$(".pikachu").click(function() {  
    $(".sentence1") .text("yay pikachu used thunderbolt, click continue");
    $(".pikachu") .attr ("src", "https://qph.fs.quoracdn.net/main-qimg-be923653f45a6969fe77290930f3d607");
    $(".button8") .show();
});

$(".button8").click(function(){
    $(".sentence1") .text("yay good job you helped pikachu defeat team rocket");
    $(".pikachu") .attr ("src", "https://gonintendo.com/uploads/file_upload/upload/66430/Team-Rocket-2-548x308.png");
    $(".button8") .hide();
     $(".button9") .show();
});

$(".button9").click(function(){
    $(".sentence1") .text("look it's ash! good job you helped pikachu. pikachu is very happy!");
    $(".pikachu") .attr ("src", "https://images.nintendolife.com/ce0215c1a817d/maxresdefault.large.jpg");
    $(".button9") .hide();
});

$(".button5").click(function(){
    $(".sentence1") .text("shhh it's a sleeping snorlax, click continue to get passed the sleeping snorlax");
    $(".pikachu") .attr ("src", "https://staticg.sportskeeda.com/editor/2021/05/478d6-16220968321094-800.jpg");
    $(".button10") .show();
     $(".button4") .hide();
     $(".button5") .hide();
});

$(".button10").click(function(){
    $(".sentence1") .text("look you found ash! trying to ride a rapidash =D");
    $(".pikachu") .attr ("src", "https://external-preview.redd.it/om_q7wYOPwrMZ7TD7TGlcFaVyvkCQIRebkwofxY-8eY.gif?format=png8&s=b4c4ddaf8ebbf8d96d0867435af777bb3bd5330d");
    $(".button10") .hide();
});

$(".button7").click(function(){
    $(".sentence1") .text("oh no! you encountered a herd of angry primeapes");
    $(".pikachu") .attr ("src", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3X_qsC7Cy7hOAVpp-K10oS3-u1XOlTp876Q&usqp=CAU");
    $(".button6") .hide();
    $(".button7") .hide();
    $(".button11") .show();
});

$(".button11").click(function(){
    $(".sentence1") .text("click continue to find out what scared pikachu");
    $(".pikachu") .attr ("src", "https://gameranx.com/wp-content/uploads/2016/09/PokemonGO2.jpg");
    $(".button11") .hide();
    $(".button12") .show();
});

$(".button12").click(function(){
    $(".sentence1") .text("is that ash what the heck!");
    $(".pikachu") .attr ("src", "https://external-preview.redd.it/TGjTfrEhhJoeyI-Z9sfmBOTdG9NzWlFf5VFOB2jbjAo.jpg?auto=webp&s=0251a6e40c46c434ccc3a4b14dad5ccb40411b99");
    $(".button12") .hide();
    });