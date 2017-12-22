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
import {ProductPromoRuleInputType} from '../../product/ProductPromoRule/ProductPromoRuleInputType.js';
import {ProductPromoRuleResponseType} from '../../product/ProductPromoRule/ProductPromoRuleResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createProductPromoRule = {
  type: ProductPromoRuleResponseType,
  description: 'mutation for ofbiz createProductPromoRule method',
  args:{productPromoRuleToBeAdded: {type: ProductPromoRuleInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`product/product/productPromoRules/add?`, args.productPromoRuleToBeAdded, req);
  }
};
export {createProductPromoRule};


const updateProductPromoRule = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateProductPromoRule method',
  args:{productPromoRuleToBeUpdated: {type: ProductPromoRuleInputType},productPromoRuleId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`product/product/productPromoRules/${args.productPromoRuleId}?`, args.productPromoRuleToBeUpdated, req);
  }
};
export {updateProductPromoRule};


const deleteProductPromoRuleByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteProductPromoRuleByIdUpdated method',
  args:{productPromoRuleId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`product/product/productPromoRules/${args.productPromoRuleId}?`, null, req);
  }
};
export {deleteProductPromoRuleByIdUpdated};
