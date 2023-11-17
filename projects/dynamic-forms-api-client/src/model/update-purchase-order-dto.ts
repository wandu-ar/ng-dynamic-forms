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
import { StatusEnum } from './status-enum';
import { PurchaseOrderForUserDtoRecipient } from './purchase-order-for-user-dto-recipient';


export interface UpdatePurchaseOrderDto { 
    id?: string;
    createdAt?: string;
    updatedAt?: string;
    /**
     * Reference to id field of plans documents
     */
    plan?: string;
    /**
     * Reference to id field of routines documents
     */
    routine?: string;
    /**
     * Reference to id field of users documents
     */
    user?: string;
    price?: number;
    discount?: number;
    status?: StatusEnum;
    userComments?: string | null;
    adminComments?: string | null;
    invoice?: string | null;
    /**
     * Reference to id field of goals documents
     */
    goal?: string;
    recipient?: PurchaseOrderForUserDtoRecipient | null;
    forGift?: boolean | null;
    total?: number | null;
}
export namespace UpdatePurchaseOrderDto {
}


