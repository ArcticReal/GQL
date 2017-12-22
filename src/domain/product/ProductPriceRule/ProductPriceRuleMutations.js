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
import {ProductPriceRuleInputType} from '../../product/ProductPriceRule/ProductPriceRuleInputType.js';
import {ProductPriceRuleResponseType} from '../../product/ProductPriceRule/ProductPriceRuleResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createProductPriceRule = {
  type: ProductPriceRuleResponseType,
  description: 'mutation for ofbiz createProductPriceRule method',
  args:{productPriceRuleToBeAdded: {type: ProductPriceRuleInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`product/product/productPriceRules/add?`, args.productPriceRuleToBeAdded, req);
  }
};
export {createProductPriceRule};


const updateProductPriceRule = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateProductPriceRule method',
  args:{productPriceRuleToBeUpdated: {type: ProductPriceRuleInputType},productPriceRuleId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`product/product/productPriceRules/${args.productPriceRuleId}?`, args.productPriceRuleToBeUpdated, req);
  }
};
export {updateProductPriceRule};


const deleteProductPriceRuleByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteProductPriceRuleByIdUpdated method',
  args:{productPriceRuleId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`product/product/productPriceRules/${args.productPriceRuleId}?`, null, req);
  }
};
export {deleteProductPriceRuleByIdUpdated};
