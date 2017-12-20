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
import {ResopnseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createQuantityBreakType = {
  type: ResopnseType,
  description: 'mutation for ofbiz createQuantityBreakType method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`product/quantityBreak/quantityBreakTypes/add?`, null, req);
  }
};
export {createQuantityBreakType};


const updateQuantityBreakType = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateQuantityBreakType method',
  args:{quantityBreakTypeToBeUpdated: {type: QuantityBreakTypeInputType},quantityBreakTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`product/quantityBreak/quantityBreakTypes/${args.quantityBreakTypeId}?`, args.quantityBreakTypeToBeUpdated, req);
  }
};
export {updateQuantityBreakType};


const deleteQuantityBreakTypeByIdUpdated = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteQuantityBreakTypeByIdUpdated method',
  args:{quantityBreakTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`product/quantityBreak/quantityBreakTypes/${args.quantityBreakTypeId}?`, null, req);
  }
};
export {deleteQuantityBreakTypeByIdUpdated};
