import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms/src/directives/ng_form';

import { CursoService } from '../../services/curso.service';

import { CursoInterface } from '../../models/cursoInterface';

@Component({
  selector: 'app-add-curso',
  templateUrl: './add-curso.component.html',
  styleUrls: ['./add-curso.component.css']
})
export class AddCursoComponent implements OnInit {
	curso: CursoInterface={
		nombre: '',
		formador: '',
		precio: '',
		idioma: '',
		tecnologia: '',
		fecha: '',
		descripcion: ''
	};

	constructor(private cursoService: CursoService){

	}

	ngOnInit() {

	}

	onGuardarCurso(myForm: NgForm){
		if(myForm.valid==true){
			const fechaNow = Date.now();
			this.cursoService.addCurso(this.curso);
			myForm.resetForm();
		}else{
			console.log("Algo va mal");
		}
	}

}
