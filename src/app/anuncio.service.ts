// anuncio.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AnuncioService {
  private apiUrl = 'http://localhost:3000/api/anuncios';

  constructor(private http: HttpClient) {}

  getAnuncios() {
    return this.http.get<any[]>(this.apiUrl);
  }

  getAnuncioById(id: number) {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  createAnuncio(anuncio: any) {
    return this.http.post<any>(this.apiUrl, anuncio);
  }

  uploadImagem(anuncioId: number, formData: FormData) {
    // Incluímos o ID do anúncio na URL
    return this.http.post<any>(`${this.apiUrl}/${anuncioId}/upload-imagem`, formData);
  }

  updateAnuncio(id: number, anuncio: any) {
    return this.http.put<any>(`${this.apiUrl}/${id}`, anuncio);
  }

  deleteAnuncio(id: number) {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}
