import { Option } from '../../../core/core.model';

export class Player {
  id?: string;
  name?: string;
  username?: string;
  password?: string;
  birthday?: Date;
  icon?: string;
  isGraduated?: boolean;
}

export const Roles: Option[] = [
  { key: 0, viewValue: '管理者' },
  { key: 1, viewValue: '一般' },
];

export enum Role {
  Admin = 0,
  General = 1,
}
