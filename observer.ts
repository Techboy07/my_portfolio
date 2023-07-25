
function createObeserver(target:Element, classType="visible-backwards", full=false){

    const observer = new IntersectionObserver(([entry])=>{




        const observedClass = entry.target.classList
        if(entry.isIntersecting){
            observedClass.add(classType)
            observer.unobserve(target)

        }else{
            observedClass.remove(classType)

        }
    },(full == true)?{threshold: 0.5}:{threshold: 0})

    observer.observe(target)

}



export default createObeserver;
