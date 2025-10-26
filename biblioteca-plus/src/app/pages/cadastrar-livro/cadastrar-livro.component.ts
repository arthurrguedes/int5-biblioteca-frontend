import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { CadastroService } from '../../services/cadastro.service';
import { Genero } from '../../models/livro.model';

@Component({
  selector: 'app-cadastrar-livro',
  standalone: true,
  templateUrl: './cadastrar-livro.component.html',
  styleUrls: ['./cadastrar-livro.component.scss'],
  imports: [CommonModule, FormsModule, RouterModule]
})
export class CadastrarLivroComponent implements OnInit {

  livro = {
    titulo: '',
    ano: null,
    edicao: null,
    editora: '',
    isbn: '',
    autorNome: '',
    quantidade: 0
  };

  generos: Genero[] = [];
  generosSelecionados: number[] = [];

  constructor(private cadastroService: CadastroService, private router: Router) {}

  ngOnInit(): void {
    this.cadastroService.getGeneros().subscribe(g => this.generos = g);
  }

  toggleGenero(id: number, marcado: boolean) {
    if (marcado) this.generosSelecionados.push(id);
    else this.generosSelecionados = this.generosSelecionados.filter(x => x !== id);
  }

  salvar() {
    if(!this.livro.titulo || !this.livro.autorNome || this.generosSelecionados.length === 0){
      alert('Preencha todos os campos obrigatórios.');
      return;
    }

    const payload = {
      ...this.livro,
      generos: this.generosSelecionados
    };

    this.cadastroService.criarLivro(payload).subscribe({
      next: () => {
        alert("Livro cadastrado com sucesso!");
        this.router.navigate(['/estoque']);
      },
      error: (erro) => {
        console.error("Erro ao salvar livro:", erro);
        alert("Erro ao salvar.");
      }
    });
  }
}
