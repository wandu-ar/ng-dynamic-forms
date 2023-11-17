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
import { Mixed } from './mixed';
import { FormItemKindInputOrUnknownEnum } from './form-item-kind-input-or-unknown-enum';


export interface FormItemInput { 
    key: string;
    kind: FormItemKindInputOrUnknownEnum;
    initialValue?: Mixed;
    label?: string | null;
    required: boolean;
    readonly: boolean;
    disabled: boolean;
    description?: string | null;
    hint?: string | null;
}
export namespace FormItemInput {
}

