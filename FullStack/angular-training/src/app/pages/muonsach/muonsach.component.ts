import { ToastrService } from 'ngx-toastr';
import { MuonsachService } from './../../shared/services/muonsach.service';
import { Page } from './../../shared/model/page';
import { Validators, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-muonsach',
  templateUrl: './muonsach.component.html',
  styleUrls: ['./muonsach.component.scss']
})
export class MuonsachComponent implements OnInit {
  items = [];
  page = new Page();
  columns = [
    { name: 'id', prop: 'id', flexGrow: 0.5 },
    { name: 'idBandoc', prop: 'idBandoc', flexGrow: 0.5 },
    { name: 'idSach', prop: 'idSach', flexGrow: 0.5 },
    { name: 'soluongMuonsach', prop: 'soluongMuonsach', flexGrow: 0.5 },
    { name: 'ngaymuonMuonsach', prop: 'ngaymuonMuonsach', flexGrow: 0.5 },
    { name: 'ngaytraMuonsach', prop: 'ngaytraMuonsach', flexGrow: 0.5 },
    { name: 'TrangThai', prop: 'TrangThai', flexGrow: 0.5 },
    { name: 'ghichuMuonsach', prop: 'ghichuMuonsach', flexGrow: 0.5 },
    { name: 'Actions', prop: 'actions', flexGrow: 1},
  ];
  formGroup = this.fb.group({
    id: ['',Validators.required],
    idBandoc: ['',Validators.required],
    idSach: ['',Validators.required],
    soluongMuonsach: [''],
    ngaymuonMuonsach: [''],
    ngaytraMuonsach: [''],
    TrangThai: [''],
    ghichuMuonsach: [''],
  });

  constructor(
    private fb: FormBuilder,
    private muonsachService: MuonsachService,
    private toastrService: ToastrService,

  ) { }

  ngOnInit(): void {
    this.prepareData();
  }
  prepareData() {
    this.getMuonSach();
  }
  doSubmit() {
    console.log("hhhhhhhhhhh",this.formGroup.value);
    this.formGroup.markAllAsTouched();
    if (this.formGroup.invalid) {
        return;
    }
    if (this.formGroup.getRawValue().id) {
     
      
        this.muonsachService.updateMuonSach(this.formGroup.getRawValue())
            .subscribe({
                next: () => {
                    this.toastrService.success(`Successful`);
                    this.formGroup.reset();
                    this.getMuonSach();
                }, error: (error) => {
                    this.toastrService.error(`Failed !!!`);
                    console.error(error);
                }
            })
    } else {
        this.muonsachService.addMuonSach(this.formGroup.getRawValue())
            .subscribe(_ => {
                this.toastrService.success(`Successful`);
                this.formGroup.reset();
                this.getMuonSach();
            }, error => {
                this.toastrService.error(`Failed !!!`);
                console.error(error);
            });
    }

}
  getMuonSach() {
    this.muonsachService.getMuonSach()
      .subscribe((next: any) => {
        console.log('next', next);
        this.items = next.data;
      });
  }
  edit(row: any) {
    console.log(row,'===');
    console.log(this.formGroup,'===');
    // if(row.trangThai===1){
    //   this.checked=true;
    // }else{
    //   this.checked=true;
    // }
    this.formGroup.patchValue(row); 
  }
  delete(id: any) {
    this.muonsachService.deleteMuonSach(id).subscribe({
      next: () => {
        this.toastrService.success(`Successful`);
        this.formGroup.reset();
        this.getMuonSach();
      }, error: (error) => {
        this.toastrService.error(`Failed !!!`);
        console.error(error);
      }
    })
  }
}

