import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpService } from '../services/api/api.service'; 

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  showModal = false;
  emailForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private http: HttpService
  ) {}

  ngOnInit(){
    this.emailForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
    });
  }

  // emailForm(){
    
  // }

  emailPayload(form:any){
     let payload = {
      'name': form.name,
      'email': form.email,
      'message': form.message,
     }
     return payload
  }

  saveEmailForm(){
     let payload = this.emailPayload(this.emailForm.value);
     console.log('Email Form:-', payload);
     this.http.postForm('email', payload).subscribe((response:any) =>{
     },(error: any) => {
      console.error('SEE API SERVICES FILE', error)
     });
  }

  submitEmail() { }
  closeModal() {
    this.showModal = false;
  }

}
