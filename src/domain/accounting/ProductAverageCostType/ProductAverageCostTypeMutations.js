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
import {ProductAverageCostTypeInputType} from '../../accounting/ProductAverageCostType/ProductAverageCostTypeInputType.js';
import {ProductAverageCostTypeResponseType} from '../../accounting/ProductAverageCostType/ProductAverageCostTypeResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createProductAverageCostType = {
  type: ProductAverageCostTypeResponseType,
  description: 'mutation for ofbiz createProductAverageCostType method',
  args:{productAverageCostTypeToBeAdded: {type: ProductAverageCostTypeInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`accounting/productAverageCost/productAverageCostTypes/add?`, args.productAverageCostTypeToBeAdded, req);
  }
};
export {createProductAverageCostType};


const updateProductAverageCostType = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateProductAverageCostType method',
  args:{productAverageCostTypeToBeUpdated: {type: ProductAverageCostTypeInputType},productAverageCostTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`accounting/productAverageCost/productAverageCostTypes/${args.productAverageCostTypeId}?`, args.productAverageCostTypeToBeUpdated, req);
  }
};
export {updateProductAverageCostType};


const deleteProductAverageCostTypeByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteProductAverageCostTypeByIdUpdated method',
  args:{productAverageCostTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`accounting/productAverageCost/productAverageCostTypes/${args.productAverageCostTypeId}?`, null, req);
  }
};
export {deleteProductAverageCostTypeByIdUpdated};
