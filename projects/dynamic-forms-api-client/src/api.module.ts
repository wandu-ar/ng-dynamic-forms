import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { Configuration } from './configuration';
import { HttpClient } from '@angular/common/http';

import { ActivityLogsApiService } from './api/activity-logs.service';
import { AuthenticationApiService } from './api/authentication.service';
import { AvailableForUsersApiService } from './api/available-for-users.service';
import { ConfigsApiService } from './api/configs.service';
import { EmailsApiService } from './api/emails.service';
import { FaqsApiService } from './api/faqs.service';
import { FavouritesApiService } from './api/favourites.service';
import { FilesApiService } from './api/files.service';
import { GoalsApiService } from './api/goals.service';
import { MailerEmailsApiService } from './api/mailer-emails.service';
import { PasswordsApiService } from './api/passwords.service';
import { PaymentsApiService } from './api/payments.service';
import { PlansApiService } from './api/plans.service';
import { PublicAPIApiService } from './api/public-api.service';
import { PurchaseOrdersApiService } from './api/purchase-orders.service';
import { RoutineSessionsApiService } from './api/routine-sessions.service';
import { RoutinesApiService } from './api/routines.service';
import { SessionsApiService } from './api/sessions.service';
import { TipsApiService } from './api/tips.service';
import { UserPlansApiService } from './api/user-plans.service';
import { UsersApiService } from './api/users.service';

@NgModule({
  imports:      [],
  declarations: [],
  exports:      [],
  providers: [
    ActivityLogsApiService,
    AuthenticationApiService,
    AvailableForUsersApiService,
    ConfigsApiService,
    EmailsApiService,
    FaqsApiService,
    FavouritesApiService,
    FilesApiService,
    GoalsApiService,
    MailerEmailsApiService,
    PasswordsApiService,
    PaymentsApiService,
    PlansApiService,
    PublicAPIApiService,
    PurchaseOrdersApiService,
    RoutineSessionsApiService,
    RoutinesApiService,
    SessionsApiService,
    TipsApiService,
    UserPlansApiService,
    UsersApiService ]
})
export class ApiModule {
    public static forRoot(configurationFactory: () => Configuration): ModuleWithProviders<ApiModule> {
        return {
            ngModule: ApiModule,
            providers: [ { provide: Configuration, useFactory: configurationFactory } ]
        };
    }

    constructor( @Optional() @SkipSelf() parentModule: ApiModule,
                 @Optional() http: HttpClient) {
        if (parentModule) {
            throw new Error('ApiModule is already loaded. Import in your base AppModule only.');
        }
        if (!http) {
            throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
            'See also https://github.com/angular/angular/issues/20575');
        }
    }
}
