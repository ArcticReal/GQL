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
import {CustRequestCommEventInputType} from '../../order/CustRequestCommEvent/CustRequestCommEventInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';


const createCustRequestCommEvent = {
  type: GraphQLString,
  description: 'mutation for ofbiz createCustRequestCommEvent method',
  args:{custRequestCommEventToBeAdded: {type: CustRequestCommEventInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`order/custRequest/custRequestCommEvents/add?`, args.custRequestCommEventToBeAdded, req);
  }
};
export {createCustRequestCommEvent};


const deleteCustRequestCommEventByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteCustRequestCommEventByIdUpdated method',
  args:{custRequestCommEventId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`order/custRequest/custRequestCommEvents/${args.custRequestCommEventId}?`, null, req);
  }
};
export {deleteCustRequestCommEventByIdUpdated};


const updateCustRequestCommEvent = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateCustRequestCommEvent method',
  args:{custRequestCommEventToBeUpdated: {type: CustRequestCommEventInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`order/custRequest/custRequestCommEvents/${args.nullVal}?`, args.custRequestCommEventToBeUpdated, req);
  }
};
export {updateCustRequestCommEvent};
