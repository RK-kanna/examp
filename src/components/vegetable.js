import React from "react";
import Search from './search';
import Button from 'react-bootstrap/Button';



import './vegetable.css';

function Vegetable(){
    return (
        
        <div>
            <Search />
            <h3 className="txt">Vegetables</h3>
            <div className="vege-row">
                <img className="onion-img" src='https://www.freshpoint.com/wp-content/uploads/commodity-red-onion.jpg'></img>
                <img className="carrot-img" src="https://a-z-animals.com/media/2022/09/shutterstock_440493100-e1666516567945.jpg"></img>
                <img className="tomato-img" src="https://www.avtmccormick.com/wp-content/uploads/2019/12/p3.jpg"></img>
            </div>
            <div className="name-row">
                <h3 className="oni-txt">Onions</h3>
                <form>
                    <input className="inp" type="text"></input>
                    <button>Add</button>
                </form>
                <h3 className="carr-txt">Carrot</h3>
                <form>
                    <input className="inp" type="text"></input>
                    <button>Add</button>
                </form>
                <h3 className="toma-txt">Tomato</h3>
                <form>
                    <input className="inp" type="text"></input>
                    <button>Add</button>
                </form>
            </div>
            <div className="vege-row">
                <img className="onion-img" src='https://www.netafimindia.com/4932fe/contentassets/98512e81691249368e1ca89dcaa7abcd/potatoes_challenge-1-1.png?height=0&width=750&mode=crop&quality=80'></img>
                <img className="carrot-img" src="https://m.media-amazon.com/images/I/415dp8WEpGL._AC_UF1000,1000_QL80_.jpg"></img>
                <img className="tomato-img" src="https://fastandfresh.in/cdn/shop/products/roundbrinjal_600x.jpg?v=1655523147"></img>
            </div>
            <div className="name-row">
                <h3 className="oni-txt">Potato</h3>
                <form>
                    <input className="inp" type="text"></input>
                    <button>Add</button>
                </form>
                
                <h3 className="carr-txt">Drumstick</h3>
                <form>
                    <input className="inp" type="text"></input>
                    <button>Add</button>
                </form>
                <h3 className="toma-txt">Brinjal</h3>
                <form>
                    <input className="inp" type="text"></input>
                    <button>Add</button>
                </form>
            </div>
            
        </div>
    );
}
export default Vegetable;