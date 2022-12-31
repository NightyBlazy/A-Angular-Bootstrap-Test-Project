import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { TsunaddingService } from '../tsunadding.service';

@Component({
  selector: 'app-tform',
  templateUrl: './tform.component.html',
  styleUrls: ['./tform.component.css']
})
export class TformComponent {
  title = 'form-test1';
  types = ['Classic','Modern'];

  constructor(private _tsunaddingService:TsunaddingService, private FB: FormBuilder){}

  tsunAddForm = this.FB.group({
    tsunName: ['',[Validators.required]],
    Gender: ['female',[Validators.required]],
    Affiliation:[''],
    hairStyle: ['',[Validators.required]],
    hairColor: ['',[Validators.required]],
    Type: ['',[Validators.required]]
  })

  get tsunName(){
    return this.tsunAddForm.controls.tsunName;
  }

  get hairStyle(){
    return this.tsunAddForm.controls.hairStyle;
  }

  get hairColor(){
    return this.tsunAddForm.controls.hairColor;
  }

  get Type(){
    return this.tsunAddForm.controls.Type;
  }

  onSubmit(){
    this._tsunaddingService.tsunadd(this.tsunAddForm.value)
    .subscribe(
      data=>console.log('Success!',data)
    )
    console.log('Succes!',this.tsunAddForm.value)
  }

}
