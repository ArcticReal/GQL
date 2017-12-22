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
import {ProductPriceTypeInputType} from '../../product/ProductPriceType/ProductPriceTypeInputType.js';
import {ProductPriceTypeResponseType} from '../../product/ProductPriceType/ProductPriceTypeResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createProductPriceType = {
  type: ProductPriceTypeResponseType,
  description: 'mutation for ofbiz createProductPriceType method',
  args:{productPriceTypeToBeAdded: {type: ProductPriceTypeInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`product/product/productPriceTypes/add?`, args.productPriceTypeToBeAdded, req);
  }
};
export {createProductPriceType};


const updateProductPriceType = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateProductPriceType method',
  args:{productPriceTypeToBeUpdated: {type: ProductPriceTypeInputType},productPriceTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`product/product/productPriceTypes/${args.productPriceTypeId}?`, args.productPriceTypeToBeUpdated, req);
  }
};
export {updateProductPriceType};


const deleteProductPriceTypeByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteProductPriceTypeByIdUpdated method',
  args:{productPriceTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`product/product/productPriceTypes/${args.productPriceTypeId}?`, null, req);
  }
};
export {deleteProductPriceTypeByIdUpdated};
