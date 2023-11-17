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
import { FormItemKindTextEnum } from './form-item-kind-text-enum';


export interface FormItemText { 
    key: string;
    kind: FormItemKindTextEnum;
    initialValue?: string | null;
    label?: string | null;
    required: boolean;
    readonly: boolean;
    disabled: boolean;
    description?: string | null;
    hint?: string | null;
    length?: number | null;
    maxLength?: number | null;
    minLength?: number | null;
}
export namespace FormItemText {
}


