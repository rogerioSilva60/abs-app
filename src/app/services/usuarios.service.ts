import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";

@Injectable({
    providedIn: 'root'
})
export class UsuarioService {

  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  buscarAgrupadoPorEstado() {
    return this.http.get(`${this.baseUrl}/v1/usuarios/agrupado-por-estado`);
  }

  buscarImcMedioPorFaixaEtariadeDezEmDezAnos() {
    return this.http.get(`${this.baseUrl}/v1/usuarios/imc-faixa-etaria-dez-em-dez-anos`);
  }

  buscarPercentualDeObesosPorGenero() {
    return this,this.http.get(`${this.baseUrl}/v1/usuarios/percentual-obeso-por-genero`);
  }

  buscarMediaIdadeParaCadaGrupoSanguineo() {
    return this.http.get(`${this.baseUrl}/v1/usuarios/media-idade-grupo-sanguineo`);
  }

  buscarQuantidadePossiveisDeDoadoresParaCadaGrupo() {
    return this.http.get(`${this.baseUrl}/v1/usuarios/possiveis-doadores-por-grupo-sanguineo`);
  }
}