import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HomeService } from 'web/domain/services/home.service';
import { DiretoriaService } from 'web/domain/services/diretoria.service';
import { OrganizacaoService } from 'web/domain/services/organizacao.service';
import { Organizacao } from 'web/domain/entity/organizacao';

/**
 * @author Victor Carvalho
 *
 * @version 1.1.0
 * @since 1.0.0, 23/04/2019
 */
@Component({
    selector: 'diretoria-form',
    templateUrl: './diretoria-form.component.html'
})
export class DiretoriaFormComponent implements OnInit {

    // Atributos que devem ser acessados pelo .html devem ser public
    public diretoria: any = {};
    public organizacoes: Array<Organizacao> = new Array<Organizacao>();

    // Dependencias devem ser private
    constructor(
        private activatedRoute: ActivatedRoute,
        private diretoriaService: DiretoriaService,
        private homeService: HomeService,
        private organizacaoService: OrganizacaoService
    ) {
        // O acesso aos parametros da requisicao deve ser feito no construtor
        if (!this.activatedRoute.snapshot.params.id) {
            // Troca de informações de componentes filhos -> pai devem ser feitas via EventEmitter
            this.homeService.sendTitleChange.emit('Diretoria / Adicionar');
        } else {
            this.homeService.sendTitleChange.emit('Diretoria / Editar');
            this.diretoria.id = +this.activatedRoute.snapshot.params.id;
        }
    }

    // Metodo que inicializa o componente
    // Ver: https://angular.io/guide/lifecycle-hooks#lifecycle-sequence
    ngOnInit() { 
        //Para acessar as propriedades e dependencias deve-se sempre utilizar o 'this'
        if (this.diretoria && this.diretoria.id) {
            this.findById();
        }

        this.organizacoes = this.listOrganizacoes();
    }

    // Metodos publicos ou com retorno void nao precisam ter as declaracoes
    findById() {
        this.diretoriaService.findDiretoriaById(this.diretoria.id)
            .then((result) => {
                this.diretoria = result;
            })
            .catch(err => console.error(err));// Importante implementar o metodo de tratamento de excecao
    }

    // Importante definir o tipo de retorno dos metodos que não retornam void
    private listOrganizacoes(): Array<Organizacao>{
        //Supondo que o metodo listAll() retorne uma lista de Organizacao
        return this.organizacaoService.listAll();
    }

}
