import food from '../image/food.png';
import "./Header.css";
import {Link} from "react-router-dom"
export default function Header(){
    return(
        <header>
            <div className='left'>
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>
          We are a family owned Mediterranean restaurant, focused on traditional
          recipes served with a modern twist.
        </p>
        <button>
          <Link to="/BookFrontPage" className='table-button'>Reserve a table</Link>
        </button>
      </div>
      <div className='right'>
        <img src={food} />
      </div>
      </header>
    );
}