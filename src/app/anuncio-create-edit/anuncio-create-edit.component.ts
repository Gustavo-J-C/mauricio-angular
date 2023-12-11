// anuncio-create-edit.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AnuncioService } from '../anuncio.service';

@Component({
  selector: 'app-anuncio-create-edit',
  templateUrl: './anuncio-create-edit.component.html',
  styleUrls: ['./anuncio-create-edit.component.css'],
})
export class AnuncioCreateEditComponent implements OnInit {
  anuncio: any = {};
  editMode: boolean = false;

  constructor(private route: ActivatedRoute, private router: Router, private anuncioService: AnuncioService) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const anuncioId = params.get('id');
      if (anuncioId) {
        this.editMode = true;
        this.anuncioService.getAnuncioById(parseInt(anuncioId)).subscribe((data) => {
          this.anuncio = data;
        });
      }
    });
  }

  submitForm() {
    if (this.editMode) {
      // Verifique se uma nova imagem foi fornecida
      const fileInput = document.getElementById('foto') as HTMLInputElement;
      const newImageFile = fileInput?.files?.[0];

      if (newImageFile) {
        // Se uma nova imagem foi fornecida, faça o upload dela antes de atualizar o anúncio
        this.uploadImagem(this.anuncio.id, newImageFile);
      } else {
        // Se nenhuma nova imagem foi fornecida, atualize o anúncio diretamente
        this.anuncioService.updateAnuncio(this.anuncio.id, this.anuncio).subscribe(() => {
          this.router.navigate(['/']);
        });
      }
    } else {
      // Crie o anúncio sem a imagem
      this.anuncioService.createAnuncio(this.anuncio).subscribe(
        (response) => {
          const newAnuncioId = response.id;

          // Após criar o anúncio, faça o upload da imagem se houver uma fornecida
          const fileInput = document.getElementById('foto') as HTMLInputElement;
          const newImageFile = fileInput?.files?.[0];

          if (newImageFile) {
            this.uploadImagem(newAnuncioId, newImageFile);
          } else {
            this.router.navigate(['/']);
          }
        },
        (error) => {
          console.error('Erro ao criar o anúncio:', error);
        }
      );
    }
  }

  uploadImagem(anuncioId: number, file: File) {
    const formData = new FormData();
    formData.append('foto', file);

    // Adapte a URL para a rota no seu servidor que lida com o upload de imagens,
    // e inclua o ID do anúncio na URL
    this.anuncioService.uploadImagem(anuncioId, formData).subscribe(
      (response) => {
        // A resposta do servidor pode conter informações sobre o caminho da nova imagem
        console.log('Imagem carregada com sucesso:', response);

        // Atualize o caminho da nova imagem no objeto de anúncio
        this.anuncio.foto = response.path;

        // Após o upload da imagem, atualize o anúncio
        this.anuncioService.updateAnuncio(anuncioId, this.anuncio).subscribe(() => {
          this.router.navigate(['/']);
        });
      },
      (error) => {
        console.error('Erro ao carregar a nova imagem:', error);
      }
    );
  }
}
