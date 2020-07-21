import { AppCommonService } from './app-common.service';
import { PermissionService } from './permission.service';
import { UserCommonService } from './user-common.service';

export const services = [AppCommonService, PermissionService, UserCommonService];

export * from './app-common.service';
export * from './permission.service';
export * from './user-common.service';
