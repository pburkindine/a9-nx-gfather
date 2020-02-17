import { Input, Directive } from "@angular/core";

import { InstanceClass1 } from "./instant-class";
import { GrandparentComponentBase } from '@a9-nx-gfather/shared';

@Directive()
export abstract class ParentComponentBase extends GrandparentComponentBase<
  InstanceClass1
> {
  @Input() foo: number;
}
