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
import { FormItemWithChildrenEnum } from './form-item-with-children-enum';
import { WithChildrenInner } from './with-children-inner';


export interface FormItemWithChildren { 
    kind: FormItemWithChildrenEnum;
    children: Array<WithChildrenInner>;
}
export namespace FormItemWithChildren {
}


