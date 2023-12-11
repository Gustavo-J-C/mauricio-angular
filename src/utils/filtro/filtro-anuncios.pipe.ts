// filtro-anuncios.pipe.ts
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroAnuncios'
})
export class FiltroAnunciosPipe implements PipeTransform {
  transform(anuncios: any[], filtro: any): any[] {
    if (!anuncios || !filtro) {
      return anuncios;
    }

    return anuncios.filter(anuncio =>
      anuncio.titulo.toLowerCase().includes(filtro.titulo?.toLowerCase() || '') &&
      anuncio.dataCriacao.includes(filtro.data || '') &&
      (filtro.preco ? anuncio.preco <= filtro.preco : true)
    );
  }
}
