import { Component, OnInit } from '@angular/core';
import { Aluno } from 'src/alunos/alunos.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title!: 'Students List';

  //Cria uma lista de Alunos vazia
  listaAlunos: Aluno[] = [];
  
  //Cria aluno 01
  aluno01: Aluno = new Aluno(
    'Gilberto Araujo Gomes Junior',
    143586,
    'Análise e Desenvolvimento de Sistemas',
    new Date('1987-06-26')
  )

  //Cria aluno 02
  aluno02: Aluno = new Aluno(
    'Guilherme de Lacerda',
    123456,
    'Contabilidade',
    new Date('1992-09-11')
  )

  //Cria aluno 03
  aluno03: Aluno = new Aluno(
    'Allybonny  Ziomek',
    198765,
    'Análise e Desenvolvimento de Sistemas',
    new Date('1994-05-24')
  )

  //Cria aluno 04
  aluno04: Aluno = new Aluno(
    'Pamela Martins Vieira',
    573268,
    'Enfermagem',
    new Date('1995-08-1')
  )

  //Cria aluno 05
  aluno05: Aluno = new Aluno(
    'Marli Ugucioni',
    123987,
    'Administração',
    new Date('1977-08-1')
  )

  //Método que é executado ao iniciar o componente
  ngOnInit(): void {
    //Preenche a lista de alunos que estava vazia
    //com os alunos criados acima
    this.listaAlunos.push(this.aluno01);
    this.listaAlunos.push(this.aluno02);
    this.listaAlunos.push(this.aluno03);
    this.listaAlunos.push(this.aluno04);
    this.listaAlunos.push(this.aluno05);
  }
}
