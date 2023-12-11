// anuncio-list.component.ts
import { Component, OnInit } from '@angular/core';
import { AnuncioService } from '../anuncio.service';

@Component({
  selector: 'app-anuncio-list',
  templateUrl: './anuncio-list.component.html',
  styleUrls: ['./anuncio-list.component.css'],
})
export class AnuncioListComponent implements OnInit {
  anuncios: any[] = [];
  anunciosFiltrados: any[] = [];
  filtro: any = { titulo: '', data: '', preco: null };

  constructor(private anuncioService: AnuncioService) {}

  ngOnInit(): void {
    this.carregarAnuncios();
  }

  carregarAnuncios() {
    this.anuncioService.getAnuncios().subscribe((data) => {
      this.anuncios = data;
      // Inicializa a lista de anúncios filtrados com a lista original
      this.anunciosFiltrados = data;
    });
  }

  aplicarFiltro() {
    // Implemente a lógica de filtro aqui, por exemplo:
    // (Você pode modificar conforme necessário para atender aos seus requisitos)
    if (this.filtro.titulo !== '') {
      this.anunciosFiltrados = this.anuncios.filter(anuncio =>
        anuncio.titulo.toLowerCase().includes(this.filtro.titulo.toLowerCase())
      );
    }

    if (this.filtro.data !== '') {
      console.log(this.filtro.data);
      this.anunciosFiltrados = this.anuncios.filter(anuncio =>
        anuncio.dataCriacao.includes(this.filtro.data)
      );
    }

    if (this.filtro.preco !== null) {
      this.anunciosFiltrados = this.anuncios.filter(anuncio =>
        anuncio.preco <= this.filtro.preco
      );
    }
  }

  limparFiltro() {
    this.filtro = { titulo: '', data: '', preco: null };
    // Restaura a lista de anúncios filtrados para a lista original
    this.anunciosFiltrados = [...this.anuncios];
  }
}
