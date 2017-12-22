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
import {CustRequestWorkEffortInputType} from '../../order/CustRequestWorkEffort/CustRequestWorkEffortInputType.js';
import {CustRequestWorkEffortResponseType} from '../../order/CustRequestWorkEffort/CustRequestWorkEffortResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createCustRequestWorkEffort = {
  type: CustRequestWorkEffortResponseType,
  description: 'mutation for ofbiz createCustRequestWorkEffort method',
  args:{custRequestWorkEffortToBeAdded: {type: CustRequestWorkEffortInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`order/custRequest/custRequestWorkEfforts/add?`, args.custRequestWorkEffortToBeAdded, req);
  }
};
export {createCustRequestWorkEffort};


const deleteCustRequestWorkEffortByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteCustRequestWorkEffortByIdUpdated method',
  args:{custRequestWorkEffortId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`order/custRequest/custRequestWorkEfforts/${args.custRequestWorkEffortId}?`, null, req);
  }
};
export {deleteCustRequestWorkEffortByIdUpdated};


const updateCustRequestWorkEffort = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateCustRequestWorkEffort method',
  args:{custRequestWorkEffortToBeUpdated: {type: CustRequestWorkEffortInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`order/custRequest/custRequestWorkEfforts/${args.nullVal}?`, args.custRequestWorkEffortToBeUpdated, req);
  }
};
export {updateCustRequestWorkEffort};
