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
import {QuantityBreakInputType} from '../../product/QuantityBreak/QuantityBreakInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';


const createQuantityBreak = {
  type: GraphQLString,
  description: 'mutation for ofbiz createQuantityBreak method',
  args:{quantityBreakToBeAdded: {type: QuantityBreakInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`product/quantityBreaks/add?`, args.quantityBreakToBeAdded, req);
  }
};
export {createQuantityBreak};


const updateQuantityBreak = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateQuantityBreak method',
  args:{quantityBreakToBeUpdated: {type: QuantityBreakInputType},quantityBreakId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`product/quantityBreaks/${args.quantityBreakId}?`, args.quantityBreakToBeUpdated, req);
  }
};
export {updateQuantityBreak};


const deleteQuantityBreakByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteQuantityBreakByIdUpdated method',
  args:{quantityBreakId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`product/quantityBreaks/${args.quantityBreakId}?`, null, req);
  }
};
export {deleteQuantityBreakByIdUpdated};
