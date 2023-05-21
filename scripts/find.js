
$('button').on('click',function(){
    console.log("A BUTTON IS CLICKED");
});


const target = document.getElementById("app");
//const target2 = document.getElementsByClassName("v-table-dynamic");
const config = {
    childList:true,
    subtree:true
    
};
const callback = (mutationList,observer)=>{
    console.log("MUTATION OBSERVER FIRED");
    //console.log(mutationList[1]);
    //console.log(MutationRecord);
    //console.log(document.querySelectorAll(".table-mainpanel"));
    //console.log(observer);
};
const observer = new MutationObserver(callback);
observer.observe(target,config);
//observer.disconnect();