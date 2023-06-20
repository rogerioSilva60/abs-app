import { Component, OnInit } from '@angular/core';

import { UsuarioService } from './services/usuarios.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  agrupadosPorEstados: Array<any> = [];
  imcPorFaixaEtarias: Array<any> = [];
  percetualDeObesosPorGenero: any = {};

  constructor(
    private usuarioService: UsuarioService
  ) {}

  ngOnInit(): void {
    this.buscarAgrupadosPorEstado();
    this.buscarImcPorFaixaEtariaDeDezEmDezAnos();
    this.buscarPercetualDeObesosPorGenero();
  }

  buscarAgrupadosPorEstado() {
    this.usuarioService.buscarAgrupadoPorEstado()
    .subscribe({
      next: (dados: any) => {
        this.agrupadosPorEstados = dados;
      },
      error: error => {
        this.agrupadosPorEstados = [];
      }
    })
  }

  buscarImcPorFaixaEtariaDeDezEmDezAnos() {
    this.usuarioService.buscarImcMedioPorFaixaEtariadeDezEmDezAnos()
    .subscribe({
      next: (dados: any) => {
        this.imcPorFaixaEtarias = dados;
      },
      error: error => {
        this.imcPorFaixaEtarias = [];
      }
    })
  }

  buscarPercetualDeObesosPorGenero() {
    this.usuarioService.buscarPercentualDeObesosPorGenero()
    .subscribe({
      next: (dados: any) => {
        this.percetualDeObesosPorGenero = dados;
      },
      error: error => {
        this.percetualDeObesosPorGenero = {};
      }
    })
  }

}
