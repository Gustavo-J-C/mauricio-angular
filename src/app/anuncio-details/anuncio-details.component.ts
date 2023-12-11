// anuncio-details.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AnuncioService } from '../anuncio.service';

@Component({
  selector: 'app-anuncio-details',
  templateUrl: './anuncio-details.component.html',
  styleUrls: ['./anuncio-details.component.css'],
})
export class AnuncioDetailsComponent implements OnInit {
  anuncio: any;

  constructor(private route: ActivatedRoute, private router: Router, private anuncioService: AnuncioService) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const anuncioId = params.get('id');
      if (anuncioId) {
        this.anuncioService.getAnuncioById(parseInt(anuncioId)).subscribe(data => {
          this.anuncio = data;
        });
      }
    });
  }

  editarAnuncio() {
    // Redirecionar para a página de edição com base no ID do anúncio
    if (this.anuncio) {
      this.router.navigate(['/edit', this.anuncio.id]);
    }
  }

  excluirAnuncio() {
    const confirmaExclusao = confirm('Tem certeza que deseja excluir este anúncio?');
    if (confirmaExclusao) {
      this.anuncioService.deleteAnuncio(this.anuncio.id).subscribe(() => {
        // Redirecionar de volta para a lista de anúncios após excluir
        this.router.navigate(['/']);
      });
    }
  }
}
