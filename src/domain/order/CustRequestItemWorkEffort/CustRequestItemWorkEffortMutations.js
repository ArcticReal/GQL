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
import {CustRequestItemWorkEffortInputType} from '../../order/CustRequestItemWorkEffort/CustRequestItemWorkEffortInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';


const createCustRequestItemWorkEffort = {
  type: GraphQLString,
  description: 'mutation for ofbiz createCustRequestItemWorkEffort method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`order/custRequest/custRequestItemWorkEfforts/add?`, null, req);
  }
};
export {createCustRequestItemWorkEffort};


const updateCustRequestItemWorkEffort = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateCustRequestItemWorkEffort method',
  args:{custRequestItemWorkEffortToBeUpdated: {type: CustRequestItemWorkEffortInputType},custRequestItemSeqId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`order/custRequest/custRequestItemWorkEfforts/${args.custRequestItemSeqId}?`, args.custRequestItemWorkEffortToBeUpdated, req);
  }
};
export {updateCustRequestItemWorkEffort};


const deleteCustRequestItemWorkEffortByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteCustRequestItemWorkEffortByIdUpdated method',
  args:{custRequestItemWorkEffortId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`order/custRequest/custRequestItemWorkEfforts/${args.custRequestItemWorkEffortId}?`, null, req);
  }
};
export {deleteCustRequestItemWorkEffortByIdUpdated};
