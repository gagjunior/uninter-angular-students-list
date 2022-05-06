import { Component, OnInit } from '@angular/core';
import { Aluno } from 'src/alunos/alunos.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  listaAlunos: Aluno[] = [];
  
  aluno01: Aluno = new Aluno(
    'Gilberto Araujo Gomes Junior',
    143586,
    'Análise e Desenvolvimento de Sistemas',
    new Date('1987-06-26')
  )

  aluno02: Aluno = new Aluno(
    'Guilherme de Lacerda',
    123456,
    'Contabilidade',
    new Date('1992-09-11')
  )

  aluno03: Aluno = new Aluno(
    'Allybonny  Ziomek',
    198765,
    'Análise e Desenvolvimento de Sistemas',
    new Date('1994-05-24')
  )

  aluno04: Aluno = new Aluno(
    'Pamela Martins Vieira',
    573268,
    'Enfermagem',
    new Date('1995-08-1')
  )

  aluno05: Aluno = new Aluno(
    'Marli Ugucioni',
    123987,
    'Administração',
    new Date('1977-08-1')
  )

  ngOnInit(): void {
    this.listaAlunos.push(this.aluno01);
    this.listaAlunos.push(this.aluno02);
    this.listaAlunos.push(this.aluno03);
    this.listaAlunos.push(this.aluno04);
    this.listaAlunos.push(this.aluno05);
  }


}
