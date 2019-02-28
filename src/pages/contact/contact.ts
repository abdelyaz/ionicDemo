import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "page-contact",
  templateUrl: "contact.html"
})
export class ContactPage {
  public requestInProgress = false;
  public ContactForm: FormGroup;

  constructor(public navCtrl: NavController, public formBuilder: FormBuilder) {
    this.ContactForm = this.formBuilder.group({
      firstName: ["", Validators.required],
      lastName: ["", Validators.required],
      email: ["", Validators.compose([Validators.email, Validators.required])],
      message: ["", Validators.required],
      terms: ["false", Validators.required]
    });

    console.log(this.ContactForm.errors);
  }

  public contactForm() {
    console.log("Sent successfully");
  }
}
