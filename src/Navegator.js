import React from 'react';
import { BrowserRouter as Router, Route, Switch, NavLink,Link } from 'react-router-dom';
import Pagina1 from './Pagina1';
import Pagina2 from './Pagina2';
import Pagina3 from './Pagina3';
import Pagina4 from './Pagina4';
function Navegator() {
    return (
         <Router>
          <div>
            <nav>
              <ul id="principal_menu">
                <li class="principal_menu_item" ><NavLink exact to="/pagina1" activeClassName="active" className="stylelink">INICIO</NavLink></li>
                <li class="principal_menu_item" ><NavLink to="/pagina2" activeClassName="active" className="stylelink">ENTRADA DE DATOS</NavLink></li>
                <li class="principal_menu_item" ><NavLink to="/pagina3" activeClassName="active" className="stylelink">CONJUTO DE DATOS</NavLink></li>
                <li class="principal_menu_item" ><NavLink to="/pagina4" activeClassName="active" className="stylelink">RECURSOS</NavLink></li>
              </ul>
            </nav>
            <Switch>
              <Route path="/pagina1" component={Pagina1} />
              <Route path="/pagina2" component={Pagina2} />
              <Route path="/pagina3" component={Pagina3} />
              <Route path="/pagina4" component={Pagina4} />
            </Switch>
          </div>
    </Router>
    );
}

export default Navegator;
