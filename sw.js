     
    var i=0;
    var arraySW = new Array();
    
    function controller(){
        
        document.getElementById("body").addEventListener('click',function(){
            
            if (event.target.id == 'start' || event.target.id == 'stop' || event.target.id == 'reset' ) {
                disabler(event.target);
                execute(event.target);
            }
            if(event.target.id == 'split'){
                execute(event.target);  
            }
        });
 
     }
    
    //Function to disable the buttons based on click of other buttons
    function disabler(target){

            console.log("disabler started");
            console.log(target.id )
    
            if(target.id == "start"){
                target.parentElement.lastElementChild.disabled=false;
                target.nextElementSibling.disabled=false;    
            }
            
            if(target.id == "stop"){
                target.previousElementSibling.disabled=true ;     
                target.nextElementSibling.nextElementSibling.disabled=true;
            }  
            if(target.id == "reset"){
                target.previousElementSibling.previousElementSibling.disabled=false ;      
                target.previousElementSibling.disabled=true;
                target.nextElementSibling.disabled=true;    
            }
        
    }
    
    //this function calls perform based on the action
    function execute(target){
            
            action=target.id;
            var stopWatchId=target.parentNode.parentNode.id ;
            var display= document.getElementById(stopWatchId).firstElementChild ; //the display box of the stop-watch
            for(var j=0;j<arraySW.length;j++){
                if(j==stopWatchId){  
                arraySW[j].perform(action,display,this);
                }
            }
    }

    //the stopWatch Object
    function sw(){
            this.hr=0;
            this.min=0;
            this.sec=0;
            this.ms=0;
            //perform method perform the task of start,stop,reset,split
            this.perform= perform;
            this.timeout=null;
            this.history = new Array();  
            this.lastSplitAdded=0;
            this.summary="";
    }
        
    //create a new Stop Watch and Dispaly it on Screen
    function newSW(){

            arraySW[i] = new sw();
            var  div = document.getElementById("template");
            var divClone = div.cloneNode(true);
            divClone.setAttribute("id" , i);
            divClone.style.display = 'block';
            document.body.appendChild(divClone);
            i++;
            
    }
        
        
        

       
        



    
   