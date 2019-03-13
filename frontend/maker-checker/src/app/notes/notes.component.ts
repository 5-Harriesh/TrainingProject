import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { NotesService } from '../core/services/notes.service';


@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss'],
  providers:[NotesService]
})
export class NotesComponent implements OnInit {

  notesForm: FormGroup;
  submitted: boolean = false;

  constructor(private formBuilder: FormBuilder, private notesService: NotesService) { }

  ngOnInit() {
    this.prepareForm();
  }

  prepareForm(): any {
    this.notesForm = this.formBuilder.group({
      INotes: new FormGroup({
        notes: new FormControl
      })
    })
  }

  onSubmit(buttonType): void {
    if (buttonType === "Save") {
      this.onSave();
    }
    if (buttonType === "Load") {
      this.onLoad();
    }

  }

  onSave() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.notesForm.invalid) {
      return;
    }
    console.log('submitted!! :-)\n\n' + this.notesForm.value.INotes)

    this.notesService.saveNotes(this.notesForm.value.INotes).subscribe((response:any) =>{
      console.log(response);
    })
  }




  onLoad() {

    this.notesService.getNotes();
  }




}
