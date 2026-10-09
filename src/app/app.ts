import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './componentes/header/header';
import { Hero } from './componentes/hero/hero';
import { Nosotros } from './componentes/nosotros/nosotros';
import { Carreras } from './componentes/carreras/carreras';
import { Facultades } from './componentes/facultades/facultades';
import { Admision } from './componentes/admision/admision';
import { Noticias } from './componentes/noticias/noticias';
import { Contacto } from './componentes/contacto/contacto';
import { Footer } from './componentes/footer/footer';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    Header, Hero, Nosotros, Carreras, Facultades,
    Admision, Noticias, Contacto, Footer
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('uni-continental');
}