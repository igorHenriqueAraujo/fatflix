import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Home from './pages/Home'
import CadastroVideos from './pages/cadastro/Video'
import CadastroCategoria from './pages/cadastro/Categoria'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

const Pagina404 = () => (<div>Não Encontrada</div>)

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact/>
      <Route path="/cadastro/videos" component={CadastroVideos} />
      <Route path="/cadastro/categoria" component={CadastroCategoria} />
      <Route component={Pagina404}/>
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
