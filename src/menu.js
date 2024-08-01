import { background, maindiv,title, text} from './home';

const d= document;





    export const menu=()=>{


        const  titlePg = `Joe's Restaurant Menu`
        const menuText=  `
        <p>
          <strong>Entrantes:</strong> <br>
          Bruschetta: Pan tostado con tomate, albahaca y mozzarella. <br><br>
          Ensalada Caprese: Tomates frescos, mozzarella, albahaca y un toque de aceite de oliva. <br><br>
          Calamares a la Romana: Calamares rebozados y fritos, servidos con salsa alioli. <br><br>
          
          <strong>Plato Principal:</strong> <br>
          Pollo al Limón: Pechuga de pollo a la parrilla con salsa de limón, acompañada de arroz y verduras. <br><br>
          Pasta Carbonara: Pasta con salsa cremosa de huevo, queso parmesano y panceta. <br><br>
          Filete de Salmón a la Parrilla: Salmón fresco a la parrilla con hierbas y limón, servido con puré de papas. <br><br>
          
          <strong>Postre:</strong> <br>
          Tiramisú: Delicioso postre italiano con capas de mascarpone y café. <br><br>
          Cheesecake: Pastel de queso suave y cremoso, servido con una salsa de frutas rojas. <br><br>
          Crème Brûlée: Flan de vainilla con una capa crujiente de azúcar caramelizado. <br>
        </p>`;
        
        const BodyHeigth="150vh"



    

        background(BodyHeigth);
        const mainDiv=maindiv("800px","800px");



        title(mainDiv, titlePg)
        text(mainDiv,menuText);
        
        


    }
    export default menu();