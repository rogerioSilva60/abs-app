import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) {}

  buscarAgrupadoPorEstado() {
    return this.http.get("http://127.0.0.1:8080/v1/usuarios/agrupado-por-estado");
  }

  buscarImcMedioPorFaixaEtariadeDezEmDezAnos() {
    return this.http.get("http://127.0.0.1:8080/v1/usuarios/imc-faixa-etaria-dez-em-dez-anos");
  }

  buscarPercentualDeObesosPorGenero() {
    return this,this.http.get("http://127.0.0.1:8080/v1/usuarios/percentual-obeso-por-genero");
  }

}