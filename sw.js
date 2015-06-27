        var i=0;
        var arraySW = new Array();

        function splitTime(hr,min,sec,ms){
            
        this.hr=hr;
        this.min=min;
        this.sec=sec;
        this.ms=ms; 
            
        }
        
        function sw(){
        this.hr=0;
        this.min=0;
        this.sec=0;
        this.ms=0; 
        this.perform= Perform;
        this.timeout=null;
        this.history = new Array();  
        this.lastSplitAdded=0;
            
        this.summary="";
        }

        function newSW(){
            
             
            arraySW[i] = new sw();
            var  div = document.getElementById("template");
            var divClone = div.cloneNode(true);
            divClone.setAttribute("id" , i);
            divClone.style.display = 'block';
            document.body.appendChild(divClone);
            i++;
            
        }
        
        
        function execute(ele,activity){

           var divId=ele.parentNode.parentNode.id ;
            
           var display= document.getElementById(divId).firstElementChild ;

           for(var j=0;j<arraySW.length;j++){
                
                if(j==divId){  
                arraySW[j].perform(activity , display ,ele);
                
                }
            
            }
            
        }
        

    
        function disabler(ele,action){
            
            
            if(action == "start"){
            
             ele.parentElement.lastElementChild.disabled=false;
             
            ele.nextElementSibling.disabled=false;
                
                
            }
            
            
            if(action == "stop"){
            
            ele.previousElementSibling.disabled=true ;
            
            ele.nextElementSibling.nextElementSibling.disabled=true;

                
            }
            
            
            if(action == "reset"){
            
            ele.previousElementSibling.previousElementSibling.disabled=false ;      
            ele.previousElementSibling.disabled=true;
            ele.nextElementSibling.disabled=true;
            
                
            }
        
        
        }



    
   