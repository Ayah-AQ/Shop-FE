//styles
import{Item} from "../style"
//components
import Animelist from"./Animelist"

function Home(props) {
   return (
      <div>
        <Item>
      <h1 > Anime Army </h1>  
       <h4 > welcome to my simple shop enjoy ur time </h4>
      <img alt = "anime" src = "https://cdn.vox-cdn.com/thumbor/1S7mDgXKPLF7mww1c05QVjaon7w=/1400x788/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19661987/acastro_190807_3592_best_anime_2019_0001__1_.jpg"
         /> 
             </Item>
   <Animelist/>
   </div>
  );
};
 
export default (Home);