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
import {ProductMeterTypeResponseType} from '../../product/ProductMeterType/ProductMeterTypeResponseType.js';
import {ProductMeterTypeInputType} from '../../product/ProductMeterType/ProductMeterTypeInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createProductMeterType = {
  type: ProductMeterTypeResponseType,
  description: 'mutation for ofbiz createProductMeterType method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`product/product/productMeterTypes/add?`, null, req);
  }
};
export {createProductMeterType};


const updateProductMeterType = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateProductMeterType method',
  args:{productMeterTypeToBeUpdated: {type: ProductMeterTypeInputType},productMeterTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`product/product/productMeterTypes/${args.productMeterTypeId}?`, args.productMeterTypeToBeUpdated, req);
  }
};
export {updateProductMeterType};


const deleteProductMeterTypeByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteProductMeterTypeByIdUpdated method',
  args:{productMeterTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`product/product/productMeterTypes/${args.productMeterTypeId}?`, null, req);
  }
};
export {deleteProductMeterTypeByIdUpdated};
