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
import {QuantityBreakTypeInputType} from '../../product/QuantityBreakType/QuantityBreakTypeInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';


const createQuantityBreakType = {
  type: GraphQLString,
  description: 'mutation for ofbiz createQuantityBreakType method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`product/quantityBreak/quantityBreakTypes/add?`, null, req);
  }
};
export {createQuantityBreakType};


const updateQuantityBreakType = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateQuantityBreakType method',
  args:{quantityBreakTypeToBeUpdated: {type: QuantityBreakTypeInputType},quantityBreakTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`product/quantityBreak/quantityBreakTypes/${args.quantityBreakTypeId}?`, args.quantityBreakTypeToBeUpdated, req);
  }
};
export {updateQuantityBreakType};


const deleteQuantityBreakTypeByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteQuantityBreakTypeByIdUpdated method',
  args:{quantityBreakTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`product/quantityBreak/quantityBreakTypes/${args.quantityBreakTypeId}?`, null, req);
  }
};
export {deleteQuantityBreakTypeByIdUpdated};
