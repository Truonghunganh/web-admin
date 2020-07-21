import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { AuthService } from '@modules/auth/services';
import { first, map, tap } from 'rxjs/operators';
import { Admin } from '@modules/auth/models';
import {  Observable } from 'rxjs';

@Component({
    selector: 'sb-login',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './login.component.html',
    styleUrls: ['login.component.scss'],
})
export class LoginComponent implements OnInit {
    error = ""
    submitted = false;
    returnUrl = "/dashboard";
    loading = false;
    loginForm: FormGroup = new FormGroup({
        phone: new FormControl(),
        password: new FormControl(),
    });
    admin$: Observable<Admin> = new Observable<Admin>();
    public admin: Admin = new Admin(0,0,"", "");
    constructor( 
        private formBuilder: FormBuilder,
        private router: Router,
        private authService: AuthService) {
        }
        

    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            phone: ['', Validators.required],
            password: ['', Validators.required]
        });
    }

    get f() { return this.loginForm.controls; }

    onSubmit() {
        this.submitted = true;

        if (this.loginForm.invalid) {
            return;
        }

        this.authService.login(this.f.phone.value, this.f.password.value)
            .pipe(first())
            .subscribe(
                data => {
                    this.router.navigate([this.returnUrl]);
                },
                error => {
                    this.error = error.error.messages;
                });
    }   

    resetForm() {
        this.loginForm.reset()
    }
}
