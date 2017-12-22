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
import {ProductPriceCondResponseType} from '../../product/ProductPriceCond/ProductPriceCondResponseType.js';
import {ProductPriceCondInputType} from '../../product/ProductPriceCond/ProductPriceCondInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createProductPriceCond = {
  type: ProductPriceCondResponseType,
  description: 'mutation for ofbiz createProductPriceCond method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`product/product/productPriceConds/add?`, null, req);
  }
};
export {createProductPriceCond};


const deleteProductPriceCondByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteProductPriceCondByIdUpdated method',
  args:{productPriceCondId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`product/product/productPriceConds/${args.productPriceCondId}?`, null, req);
  }
};
export {deleteProductPriceCondByIdUpdated};


const updateProductPriceCond = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateProductPriceCond method',
  args:{productPriceCondToBeUpdated: {type: ProductPriceCondInputType},productPriceCondSeqId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`product/product/productPriceConds/${args.productPriceCondSeqId}?`, args.productPriceCondToBeUpdated, req);
  }
};
export {updateProductPriceCond};
