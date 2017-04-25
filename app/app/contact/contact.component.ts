import {Component, Inject} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Http} from "@angular/http";

declare let alert: any;

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  form: FormGroup;
  submitted: boolean = false;
  is_loading: boolean = false;
  success: boolean = false;

  constructor(@Inject(FormBuilder) fb: FormBuilder, @Inject(Http) public http: Http) {
    this.form = fb.group({
      name: ['', Validators.required],
      subject: ['', Validators.required],
      email: ['', [Validators.required, Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]],
      body: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  message(){
    console.log(this.form);
    this.submitted = true;
    if (this.form.valid){
      this.is_loading = true;
      this.http.post('http://laurendylam.com/api/contact', this.form.value)
        .subscribe((res) => {
          let data = res.json();
          if(data.status === 'error'){
            alert(data.message);
            this.success = false;
          } else {
            this.form.reset();
            this.success = true;
          }
          this.is_loading = false;
        }, (res) => {
          alert(res);
          this.is_loading = false;
        });
    }
  }

}
