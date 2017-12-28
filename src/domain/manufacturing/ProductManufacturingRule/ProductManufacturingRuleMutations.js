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
import {ProductManufacturingRuleInputType} from '../../manufacturing/ProductManufacturingRule/ProductManufacturingRuleInputType.js';
import {ProductManufacturingRuleResponseType} from '../../manufacturing/ProductManufacturingRule/ProductManufacturingRuleResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createProductManufacturingRule = {
  type: ProductManufacturingRuleResponseType,
  description: 'mutation for ofbiz createProductManufacturingRule method',
  args:{productManufacturingRuleToBeAdded: {type: ProductManufacturingRuleInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`manufacturing/productManufacturingRules/add?`, args.productManufacturingRuleToBeAdded, req);
  }
};
export {createProductManufacturingRule};


const deleteProductManufacturingRuleByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteProductManufacturingRuleByIdUpdated method',
  args:{productManufacturingRuleId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`manufacturing/productManufacturingRules/${args.productManufacturingRuleId}?`, null, req);
  }
};
export {deleteProductManufacturingRuleByIdUpdated};


const updateProductManufacturingRule = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateProductManufacturingRule method',
  args:{productManufacturingRuleToBeUpdated: {type: ProductManufacturingRuleInputType},ruleId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`manufacturing/productManufacturingRules/${args.ruleId}?`, args.productManufacturingRuleToBeUpdated, req);
  }
};
export {updateProductManufacturingRule};
