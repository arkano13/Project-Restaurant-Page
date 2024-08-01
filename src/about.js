import { background, maindiv,title, text} from './home';

const d= document;

export const about=()=>{


    const  titlePg = `About us`
    const menuText=  `<p>
        <strong>About Us:</strong> <br><br>
        Welcome to Joe's Restaurant, where we offer an unforgettable dining experience. <br><br>
        Our story began with a passion for high-quality ingredients and a dedication to creating a cozy and elegant atmosphere. <br><br>
        At Joe's, we pride ourselves on exceptional service and a menu that features a variety of dishes crafted from the freshest ingredients. Whether you're here for a relaxed meal or a special occasion, our friendly team is committed to ensuring that every visit is memorable. <br><br>
        Discover why Joe's Restaurant is the perfect destination for food enthusiasts. Join us and experience the best in dining, where every meal is a celebration.
        </p>`;
    
    const BodyHeigth="100vh"





    background(BodyHeigth);
    const mainDiv=maindiv("500px","800px");



    title(mainDiv, titlePg)
    text(mainDiv,menuText);
    
    


}
export default about();

