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
import { Any } from './any';


export interface PaginatedResponseDto { 
    total: number;
    filtered?: number | null;
    showing: number;
    limit: number;
    offset: number;
    data: Array<Any>;
}

