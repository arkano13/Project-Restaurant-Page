
import backgroundImg from "./assets/background.jpeg"
const d=document

export const background=(BodyHeigth)=>{

    d.body.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${backgroundImg})`;
    d.body.style.backgroundSize = "cover";
    d.body.style.backgroundPosition= "center";
    d.body.style.backgroundRepeat = "no-repeat";
    d.body.style.backgroundAttachment = 'fixed';
    d.body.style.height=BodyHeigth  

}


 export const title=(mainDiv, titlePg)=>{

    const $h1= d.createElement('h1') 
       $h1.textContent= titlePg
       $h1.className='title';
       mainDiv.appendChild($h1)


}


export const text=(mainDiv,infomation)=>{

    const $p= d.createElement('p')
    $p.className='paragrahp';
    $p.innerHTML= infomation

        mainDiv.appendChild($p)

}

export const maindiv=(mainDivHeigth,mainDivwidth)=>{

    const divcontent= d.getElementById('content');

    divcontent.innerHTML = '';

    const mainDiv= d.createElement('div')
    mainDiv.className= 'mainDiv';
    mainDiv.style.height = mainDivHeigth; 
    mainDiv.style.width = mainDivwidth; 


    divcontent.appendChild(mainDiv);


    return mainDiv

}

export const home=()=>{
    const titlePg= `Joes's Restaurant`;
    const infomation= `Joe's Restaurant: At Joe's Restaurant, we offer 
    an unforgettable dining experience with a variety of dishes crafted
     from fresh, high-quality ingredients. Enjoy a cozy and elegant
      atmosphere, perfect for a relaxed meal or a special occasion.
       Our friendly team is dedicated to providing exceptional service
        and ensuring that every visit is memorable. Come and discover 
        why Joe's Restaurant is the perfect destination for food enthusiasts.`;

        const mainDivHeigth= "400px";
        const mainDivwidth= "800px";
        const BodyHeigth="100vh";


    background(BodyHeigth);
    const mainDiv=maindiv(mainDivHeigth,mainDivwidth);
    title(mainDiv,titlePg);
    text(mainDiv,infomation);
}

export default home();


