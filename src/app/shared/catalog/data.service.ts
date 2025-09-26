import { Injectable } from '@angular/core';

export type Categoria =
  | 'Humor' | 'Tecnologia' | 'Romance' | 'Autoajuda' | 'Terror'
  | 'Ficção Científica' | 'Fantasia' | 'Mistério' | 'Aventura' | 'Histórico';

export interface Livro {
  id: number;
  titulo: string;
  autor: string;
  categoria: Categoria;
  capa: string;
  editora: string;
  isbn: string;
  edicaoAno: string;
  idioma: string;
  paginas: number;
}

const cover = (t: string) => `https://via.placeholder.com/300x420?text=${encodeURIComponent(t)}`;

@Injectable({ providedIn: 'root' })
export class CatalogDataService {
  private livros: Livro[] = [
    { id:1,  titulo:'Angular na Prática', autor:'Vários', categoria:'Tecnologia', capa:cover('Angular'),
      editora:'TechPress', isbn:'978000000001', edicaoAno:'2ª (2023)', idioma:'Português', paginas:352 },
    { id:2,  titulo:'TypeScript Essencial', autor:'Vários', categoria:'Tecnologia', capa:cover('TS'),
      editora:'TechPress', isbn:'978000000002', edicaoAno:'1ª (2022)', idioma:'Português', paginas:280 },
    { id:3,  titulo:'Clean Code', autor:'Robert C. Martin', categoria:'Tecnologia', capa:cover('Clean Code'),
      editora:'Alta Books', isbn:'9788576082675', edicaoAno:'1ª (2009)', idioma:'Português', paginas:464 },
    { id:4,  titulo:'Algoritmos', autor:'T. Cormen', categoria:'Tecnologia', capa:cover('Algoritmos'),
      editora:'MIT Press', isbn:'9780262033848', edicaoAno:'3ª (2014)', idioma:'Inglês', paginas:1312 },
    { id:5,  titulo:'Git & GitHub', autor:'Vários', categoria:'Tecnologia', capa:cover('Git'),
      editora:'TechPress', isbn:'978000000005', edicaoAno:'1ª (2021)', idioma:'Português', paginas:240 },
    { id:6,  titulo:'Banco de Dados', autor:'C. J. Date', categoria:'Tecnologia', capa:cover('SQL'),
      editora:'Pearson', isbn:'9780133970777', edicaoAno:'7ª (2015)', idioma:'Inglês', paginas:720 },

    { id:7,  titulo:'Piadas do Dia', autor:'Anon', categoria:'Humor', capa:cover('Piadas do Dia'),
      editora:'Editora Diverte', isbn:'978000010001', edicaoAno:'1ª (2019)', idioma:'Português', paginas:272 },
    { id:8,  titulo:'Risadas & Cia', autor:'Anon', categoria:'Humor', capa:cover('Risadas & Cia'),
      editora:'Editora Diverte', isbn:'978000010002', edicaoAno:'1ª (2020)', idioma:'Português', paginas:224 },

    { id:10, titulo:'Amor & Outras Coisas', autor:'A. Autor', categoria:'Romance', capa:cover('Romance'),
      editora:'Romanceiros', isbn:'978000020001', edicaoAno:'1ª (2021)', idioma:'Português', paginas:320 },
    { id:11, titulo:'Viagem ao Desconhecido', autor:'Sci Writer', categoria:'Ficção Científica', capa:cover('Sci-Fi'),
      editora:'Galáxia', isbn:'978000030001', edicaoAno:'1ª (2020)', idioma:'Português', paginas:288 },
    { id:12, titulo:'Manual do Herói', autor:'F. Fant', categoria:'Fantasia', capa:cover('Fantasia'),
      editora:'Reinos', isbn:'978000040001', edicaoAno:'1ª (2018)', idioma:'Português', paginas:350 },
    { id:13, titulo:'O Mistério da Rua 7', autor:'M. Misto', categoria:'Mistério', capa:cover('Mistério'),
      editora:'Sombras', isbn:'978000050001', edicaoAno:'1ª (2022)', idioma:'Português', paginas:310 },
    { id:14, titulo:'A Grande Aventura', autor:'A. Ventura', categoria:'Aventura', capa:cover('Aventura'),
      editora:'Trilhas', isbn:'978000060001', edicaoAno:'1ª (2017)', idioma:'Português', paginas:295 },
    { id:15, titulo:'Respire Fundo', autor:'Coach', categoria:'Autoajuda', capa:cover('Autoajuda'),
      editora:'Vida', isbn:'978000070001', edicaoAno:'1ª (2019)', idioma:'Português', paginas:210 },
    { id:16, titulo:'Noite Sombria', autor:'T. Error', categoria:'Terror', capa:cover('Terror'),
      editora:'Medo Books', isbn:'978000080001', edicaoAno:'1ª (2016)', idioma:'Português', paginas:260 },
    { id:9,  titulo:'Direito Civil', autor:'Vários', categoria:'Histórico', capa:cover('Civil'),
      editora:'Jurídica', isbn:'978000090001', edicaoAno:'3ª (2020)', idioma:'Português', paginas:540 },
  ];

  list(){ return this.livros.slice(); }
  get(id: number){ return this.livros.find(l => l.id === id) ?? null; }
  byCategory(cat: Categoria){ return this.livros.filter(l => l.categoria === cat); }

  search(term: string, cat?: Categoria | 'Todas'){
    const t = (term || '').toLowerCase();
    return this.livros.filter(l =>
      (!cat || cat === 'Todas' || l.categoria === cat) &&
      (!t || l.titulo.toLowerCase().includes(t) || l.autor.toLowerCase().includes(t)));
  }
}
