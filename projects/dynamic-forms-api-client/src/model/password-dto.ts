/**
 * Training plans marketplace - API
 * Aplicacion de venta de rutinas de ejercicios
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { PasswordStatusEnum } from './password-status-enum';


export interface PasswordDto { 
    id: string;
    createdAt?: string | null;
    updatedAt?: string | null;
    /**
     * Reference to id field of users documents
     */
    user: string;
    password: string;
    status: PasswordStatusEnum;
    expireAt?: string | null;
}
export namespace PasswordDto {
}


