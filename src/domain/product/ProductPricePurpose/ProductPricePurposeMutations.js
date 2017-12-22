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
import {ProductPricePurposeResponseType} from '../../product/ProductPricePurpose/ProductPricePurposeResponseType.js';
import {ProductPricePurposeInputType} from '../../product/ProductPricePurpose/ProductPricePurposeInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createProductPricePurpose = {
  type: ProductPricePurposeResponseType,
  description: 'mutation for ofbiz createProductPricePurpose method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`product/product/productPricePurposes/add?`, null, req);
  }
};
export {createProductPricePurpose};


const updateProductPricePurpose = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateProductPricePurpose method',
  args:{productPricePurposeToBeUpdated: {type: ProductPricePurposeInputType},productPricePurposeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`product/product/productPricePurposes/${args.productPricePurposeId}?`, args.productPricePurposeToBeUpdated, req);
  }
};
export {updateProductPricePurpose};


const deleteProductPricePurposeByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteProductPricePurposeByIdUpdated method',
  args:{productPricePurposeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`product/product/productPricePurposes/${args.productPricePurposeId}?`, null, req);
  }
};
export {deleteProductPricePurposeByIdUpdated};
