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
import {QuantityBreakTypeResponseType} from '../../product/QuantityBreakType/QuantityBreakTypeResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createQuantityBreakType = {
  type: QuantityBreakTypeResponseType,
  description: 'mutation for ofbiz createQuantityBreakType method',
  args:{quantityBreakTypeToBeAdded: {type: QuantityBreakTypeInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`product/quantityBreak/quantityBreakTypes/add?`, args.quantityBreakTypeToBeAdded, req);
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
