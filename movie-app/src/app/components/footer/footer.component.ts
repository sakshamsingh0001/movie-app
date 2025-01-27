import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpService } from '../services/email-api/email.service';
import { ToastrService } from 'ngx-toastr';

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
    private http: HttpService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.emailForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
    });
  }


  emailPayload(form: any) {
    let payload = {
      'recipient': form.email,
      'subject': form.name,
      'message': form.message,
    }
    return payload
  }

  saveEmailForm() {
    let payload = this.emailPayload(this.emailForm.value);
    console.log('Email Form:-', payload);
    this.http.postForm(payload).subscribe((response: any) => {
      console.log('Email Sent Successfully')
      this.submitEmail()
    }, (error: any) => {
      console.error('SEE API SERVICES FILE', error)
    });
  }

  // submitEmail() {
  //   console.log('Submit Email Function Called Succesfully')
  //    this.toastr.success('Email Sent Successfully')
  //  }

  submitEmail() {
    console.log('Submit Email Function Called Successfully');
    this.toastr.error('Email Sent Successfully', 'Success')
      .onShown.subscribe(() => {
        console.log('Toastr notification is displayed!');
      });
  }
  closeModal() {
    this.showModal = false;
  }
}
