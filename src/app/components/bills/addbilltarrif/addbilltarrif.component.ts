import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormArray,
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';

enum TariffType {
  source_of_use = 'source_of_use',
  standard = 'standard',
}

@Component({
  selector: 'app-addbilltarrif',
  templateUrl: './addbilltarrif.component.html',
  styleUrls: ['./addbilltarrif.component.scss'],
})
export class AddbilltarrifComponent implements OnInit {
  myForm: FormGroup = new FormGroup({});

  structureOptions = [
    { value: TariffType.standard, label: 'Standard' },
    { value: TariffType.source_of_use, label: 'Source-of-Use' },
  ];

  sourceOfUseTemplates = [
    {
      title: 'Standard Dual Tariff',
      key: 'standard',
      children: [
        {
          title: 'Grid',
          key: 'grid',
          isLeaf: true,
          disabled: true,
        },
        {
          title: 'Gen',
          key: 'gen',
          isLeaf: true,
          disabled: true,
        },
      ],
    },
    {
      title: 'Johns Hybrid System with Solar',
      key: 'hybrid',
      children: [
        {
          title: 'Solar',
          key: 'solar',
          isLeaf: true,
          disabled: true,
        },
        {
          title: 'Gen',
          key: 'gen',
          isLeaf: true,
          disabled: true,
        },
        {
          title: 'Inverter',
          key: 'inverter',
          isLeaf: true,
          disabled: true,
        },
      ],
    },
  ];

  activeEnergysource: any = {};

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.myForm = this.fb.group({
      tariffType: [TariffType.standard, [Validators.required]],
      tariffValues: this.fb.group({
        rate: [null, [Validators.required, Validators.min(0)]],
      }),
      minimumAccountBalanceCents: [
        null,
        [Validators.required, Validators.min(0)],
      ],
    });
  }

  onSubmit(form: FormGroup) {
    //console.log(form.controls);
    //console.log('Valid?', form.valid);
  }

  isSourceOfUseTariffType() {
    return this.myForm.value.tariffType == TariffType.source_of_use;
  }

  changeTarrifsource() {
    //console.log(this.myForm.value.tariffType);
    if (this.myForm.value.tariffType == TariffType.standard) {
      this.addTariffValuesCtrl();
      this.myForm.removeControl('sourceOfUseTemplate');
      this.myForm.removeControl('energySourceTariffs');
      this.myForm.removeControl('energySourceTariffsArray');
    } else if (this.myForm.value.tariffType == TariffType.source_of_use) {
      this.myForm.removeControl('tariffValues');
      this.addTarrifsourceOfUseTemplate();
      this.addenergysource();
    }
  }

  changeSourceofUse() {
    //console.log(this.myForm.value.sourceOfUseTemplate);
    this.addenergysource();
  }

  addTariffValuesCtrl(): void {
    this.myForm.addControl(
      'tariffValues',
      this.fb.group({
        rate: [null, [Validators.required, Validators.min(0)]],
      })
    );
  }

  addTarrifsourceOfUseTemplate(): void {
    this.myForm.addControl(
      'sourceOfUseTemplate',
      this.fb.control(0, Validators.required)
    );
  }

  addenergysource() {
    this.myForm.removeControl('energySourceTariffs');
    this.myForm.removeControl('energySourceTariffsArray');

    this.activeEnergysource =
      this.sourceOfUseTemplates[this.myForm.value.sourceOfUseTemplate];
    //console.log(this.activeEnergysource);
    const energySourceTariffsConfig: any = {};

    //Using Object Method to create Dynamic form
    this.activeEnergysource.children?.forEach((node: any) => {
      energySourceTariffsConfig[node.title] = this.fb.control(
        null,
        Validators.required
      );
    });
    //console.log(energySourceTariffsConfig);
    this.myForm.addControl(
      'energySourceTariffs',
      this.fb.group(energySourceTariffsConfig)
    );

    //Using Array Method to create Dynamic form.
    this.myForm.addControl('energySourceTariffsArray', this.fb.array([]));
    this.activeEnergysource.children?.forEach((node: any) => {
      this.addenergySourceTariffsarrays();
    });
  }

  get energySourceTariffsarrays(): FormArray {
    return this.myForm.controls['energySourceTariffsArray'] as FormArray;
  }

  addenergySourceTariffsarrays() {
    const newform = this.fb.group({
      rates: ['', Validators.required],
    });
    this.energySourceTariffsarrays.push(newform);
  }

  removeenergySourceTariffsarrays(i: number) {
    this.energySourceTariffsarrays.removeAt(i);
  }

  get energySourceTariffs(): FormGroup {
    return this.myForm.controls['energySourceTariffs'] as FormGroup;
  }
}
