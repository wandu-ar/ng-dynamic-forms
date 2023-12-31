/**
 * NestJS Dynamic Forms - Basic example
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { FormItemKindHiddenDateEnum } from './form-item-kind-hidden-date-enum';


export interface FormItemHiddenDate { 
    key: string;
    kind: FormItemKindHiddenDateEnum;
    initialValue?: string | null;
    label?: string | null;
    required: boolean;
    readonly: boolean;
    disabled: boolean;
    description?: string | null;
    hint?: string | null;
}
export namespace FormItemHiddenDate {
}


