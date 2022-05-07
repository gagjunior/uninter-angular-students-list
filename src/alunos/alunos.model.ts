/*
 * Desenvolvido por Gilberto Junior
 * RU: 143586
 * 
 * Classe que representa um Aluno 
*/

export class Aluno {
    constructor(
        public nome:string,
        public ru: number,
        public nomeDoCurso : string,
        public dataDeAniversario : Date
    ){}
}