import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-quick-quote',
  templateUrl: './quick-quote.component.html',
  styleUrls: ['./quick-quote.component.css']
})
export class QuickQuoteComponent implements OnInit {

  public num1: number;
  public num2: number;
  public num3: number;
  public message = '';
  // tslint:disable-next-line:variable-name
  public error_msg = '';
  // tslint:disable-next-line:variable-name
  public show_spinner = false;

  constructor(private http: HttpClient) {
    this.num1 = Math.floor(Math.random() * 11);
    this.num2 = Math.floor(Math.random() * 11);
    this.num3 = this.num1 + this.num2;
  }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  onSubmit(form: NgForm){
    this.show_spinner = true;
    const formData = form.value;
    // tslint:disable-next-line:triple-equals
    if (this.num3 == formData.captcha){
      // @ts-ignore
      this.message = '';
      console.log(formData);
      this.http.post(
        // 'http://localhost/php.php',
        'http://turktronics.com/mail.php',
        formData,
        {
          headers: new HttpHeaders(
            {
              'Content-Security-Policy': 'upgrade-insecure-requests',
              'Content-Type': 'application/json',
              'Access-Control-Allow-Headers': '*'
            }
          )
        }
      ).subscribe(dataFromServer => {
        if (dataFromServer){
          // @ts-ignore
          this.message = 'Email Sent Successfully!';
          this.error_msg = 'success';
          this.show_spinner = false;
        }else{
          this.show_spinner = false;
          // @ts-ignore
          this.message = 'Error Occurred while sending mail :(';
          this.error_msg = 'danger';
        }
      });
    }
    else{
      // @ts-ignore
      this.message = 'Captcha value error';
      this.error_msg = 'danger';
      this.show_spinner = false;
    }
  }

  // tslint:disable-next-line:typedef
  openQuickQuoteModel(){
    this.num1 = Math.floor(Math.random() * 11);
    this.num2 = Math.floor(Math.random() * 11);
    this.num3 = this.num1 + this.num2;
  }

}
