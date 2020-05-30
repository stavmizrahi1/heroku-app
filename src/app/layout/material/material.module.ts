import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTableModule } from '@angular/material/table';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatMenuModule } from '@angular/material/menu';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import {MatBadgeModule} from '@angular/material/badge';





@NgModule({
  imports: [
    MatIconModule,
    MatButtonModule,
    MatChipsModule,
    MatTabsModule,
    MatSnackBarModule,
    MatTooltipModule,
    MatTableModule,
    MatAutocompleteModule,
    MatMenuModule,
    MatFormFieldModule,
    MatSelectModule,
    MatBadgeModule
  ],

  exports: [
    MatIconModule,
    MatButtonModule,
    MatChipsModule,
    MatTabsModule,
    MatSnackBarModule,
    MatTooltipModule,
    MatTableModule,
    MatAutocompleteModule,
    MatMenuModule,
    MatFormFieldModule,
    MatSelectModule,
    MatBadgeModule
  ]
})
export class MaterialModule { }
