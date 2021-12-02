import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CadastroProdutoComponent } from './cadastroProduto/cadastroProduto.component';
import { PainelPedidoComponent } from './painelPedido/painelPedido.component';
import { CadastroPedidoComponent } from './cadastroPedido/cadastroPedido.component';
import { MenuComponent } from './menu/menu.component';
import { ListaUsuariosComponent } from './listaUsuarios/listaUsuarios.component';
import { DetalhePedidoComponent } from './detalhePedido/detalhePedido.component';
import { ListaProdutosComponent } from './listaProdutos/listaProdutos.component';


@NgModule({
  declarations: [										
    AppComponent,
      HomeComponent,
      CadastroProdutoComponent,
      PainelPedidoComponent,
      CadastroPedidoComponent,
      MenuComponent,
      ListaUsuariosComponent,
      DetalhePedidoComponent,
      ListaProdutosComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
