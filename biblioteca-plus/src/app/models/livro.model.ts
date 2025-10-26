export interface Autor {
  idAutor: number;
  nome: string;
  nacionalidade: string;
  matricula?: string;
}

export interface Genero {
  idGenero: number;
  nomeDoGenero: string;
  descricao?: string;
}

export interface Estoque {
  idEstoque: number;
  quantidade: number;
}

export interface Livro {
livrogenero: any;
livroautor: any;
  idLivro: number;
  titulo: string;
  ano?: number;
  edicao?: number;
  editora?: string;
  isbn: string;
  autores?: Autor[];
  generos?: Genero[];
  estoque?: Estoque[];
}
