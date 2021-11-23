import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './container/home/home.component';
import { ProdutosComponent } from './container/produtos/produtos.component';
import { PedidosComponent } from './container/pedidos/pedidos.component';
import { ConfiguracoesComponent } from './container/configuracoes/configuracoes.component';

@NgModule({
  declarations: [
    HomeComponent,
    ProdutosComponent,
    PedidosComponent,
    ConfiguracoesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }
