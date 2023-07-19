import { FormBuilder, FormGroup, Validators } from "@angular/forms";

export class CreateUserPageForm {
    private formBuilder: FormBuilder;

    constructor(formBuilder: FormBuilder) {
        this.formBuilder = formBuilder;
    }

    createForm(): FormGroup {
        return this.formBuilder.group({
            email: ['', [Validators.required, Validators.email]],
            username: ['', [Validators.required]],
            password: ['', [Validators.required]],
            firstName: ['', [Validators.required]],
            lastName: ['', [Validators.required]],
            ageName: ['', [Validators.required]],
            gender: ['', [Validators.required]],
        });
    }
}