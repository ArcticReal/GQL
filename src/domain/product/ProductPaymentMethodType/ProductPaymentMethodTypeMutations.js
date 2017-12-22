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
import {ProductPaymentMethodTypeInputType} from '../../product/ProductPaymentMethodType/ProductPaymentMethodTypeInputType.js';
import {ProductPaymentMethodTypeResponseType} from '../../product/ProductPaymentMethodType/ProductPaymentMethodTypeResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createProductPaymentMethodType = {
  type: ProductPaymentMethodTypeResponseType,
  description: 'mutation for ofbiz createProductPaymentMethodType method',
  args:{productPaymentMethodTypeToBeAdded: {type: ProductPaymentMethodTypeInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`product/product/productPaymentMethodTypes/add?`, args.productPaymentMethodTypeToBeAdded, req);
  }
};
export {createProductPaymentMethodType};


const updateProductPaymentMethodType = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateProductPaymentMethodType method',
  args:{productPaymentMethodTypeToBeUpdated: {type: ProductPaymentMethodTypeInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`product/product/productPaymentMethodTypes/${args.nullVal}?`, args.productPaymentMethodTypeToBeUpdated, req);
  }
};
export {updateProductPaymentMethodType};


const deleteProductPaymentMethodTypeByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteProductPaymentMethodTypeByIdUpdated method',
  args:{productPaymentMethodTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`product/product/productPaymentMethodTypes/${args.productPaymentMethodTypeId}?`, null, req);
  }
};
export {deleteProductPaymentMethodTypeByIdUpdated};
