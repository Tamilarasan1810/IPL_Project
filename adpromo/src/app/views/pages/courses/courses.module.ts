import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Grade1Component } from './grade1/grade1.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { CoursesComponent } from './courses.component';
import { FeahterIconModule } from 'src/app/core/feather-icon/feather-icon.module';
import { ChapterComponent } from './chapter/chapter.component';
import { CampComponent } from './camp/camp.component';
const routes: Routes = [
  {
    path: '',
    component: CoursesComponent,
    children: [
      {
        path: '',
        redirectTo: 'grade1',
        pathMatch: 'full',
      },
      {
        path: 'grade1',
        component: Grade1Component,
      },
    ],
  },
  {
    path: 'chapter',
    component: ChapterComponent,
  },
  {
    path: 'unit1',
    component: CampComponent,
  },
];
@NgModule({
  declarations: [
    CoursesComponent,
    Grade1Component,
    ChapterComponent,
    CampComponent,
  ],
  imports: [CommonModule, RouterModule.forChild(routes), FeahterIconModule],
})
export class CoursesModule {}
// export const routingComponents = [CoursesComponent, ChapterComponent];
