import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInputObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';
import {ShippingDocumentInputType} from '../../shipment/ShippingDocument/ShippingDocumentInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResopnseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createShippingDocument = {
  type: ResopnseType,
  description: 'mutation for ofbiz createShippingDocument method',
  args:{shippingDocumentToBeAdded: {type: ShippingDocumentInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`shipment/shippingDocuments/add?`, args.shippingDocumentToBeAdded, req);
  }
};
export {createShippingDocument};


const updateShippingDocument = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateShippingDocument method',
  args:{shippingDocumentToBeUpdated: {type: ShippingDocumentInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`shipment/shippingDocuments/${args.nullVal}?`, args.shippingDocumentToBeUpdated, req);
  }
};
export {updateShippingDocument};


const deleteShippingDocumentByIdUpdated = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteShippingDocumentByIdUpdated method',
  args:{shippingDocumentId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`shipment/shippingDocuments/${args.shippingDocumentId}?`, null, req);
  }
};
export {deleteShippingDocumentByIdUpdated};
