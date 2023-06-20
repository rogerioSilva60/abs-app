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
  mediaIdadeParaCadaGrupoSanguineo: Array<any> = [];
  quantidadePossiveisDeDoadoresParaCadaGrupo: Array<any> = [];

  constructor(
    private usuarioService: UsuarioService
  ) {}

  ngOnInit(): void {
    this.buscarAgrupadosPorEstado();
    this.buscarImcPorFaixaEtariaDeDezEmDezAnos();
    this.buscarPercetualDeObesosPorGenero();
    this.buscarMediaIdadeParaCadaGrupoSanguineo();
    this.buscarQuantidadePossiveisDeDoadoresParaCadaGrupo();
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

  buscarMediaIdadeParaCadaGrupoSanguineo() {
    this.usuarioService.buscarMediaIdadeParaCadaGrupoSanguineo()
    .subscribe({
      next: (dados: any) => {
        console.log(dados);
        this.mediaIdadeParaCadaGrupoSanguineo = dados;
      },
      error: error => {
        this.mediaIdadeParaCadaGrupoSanguineo = [];
      }
    })
  }

  buscarQuantidadePossiveisDeDoadoresParaCadaGrupo() {
    this.usuarioService.buscarQuantidadePossiveisDeDoadoresParaCadaGrupo()
    .subscribe({
      next: (dados: any) => {
        console.log(dados);
        this.quantidadePossiveisDeDoadoresParaCadaGrupo = dados;
      },
      error: error => {
        this.quantidadePossiveisDeDoadoresParaCadaGrupo = [];
      }
    })
  }

}
