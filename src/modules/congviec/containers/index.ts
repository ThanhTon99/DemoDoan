import { from } from "rxjs";
import { LsCvComponent } from "./ls-cv/ls-cv.component";
import { PhancongCvComponent } from "./phancong-cv/phancong-cv.component";
import { QlCvComponent } from "./ql-cv/ql-cv.component";
import { QlbaocaoCvComponent } from "./qlbaocao-cv/qlbaocao-cv.component";

export const containers = [PhancongCvComponent, QlbaocaoCvComponent, QlCvComponent, LsCvComponent]

export * from './phancong-cv/phancong-cv.component';
export * from './ql-cv/ql-cv.component';
export * from './qlbaocao-cv/qlbaocao-cv.component';
export * from './ls-cv/ls-cv.component';