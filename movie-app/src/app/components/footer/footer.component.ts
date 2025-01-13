import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

showModal = false;
emailForm!: FormGroup;


constructor(private fb: FormBuilder) {
  this.emailForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    message: ['', Validators.required],
  });
}

submitEmail() {
throw new Error('Method not implemented.');
}
closeModal() {
  this.showModal = false;
}


openEmailModal(){

}

}
