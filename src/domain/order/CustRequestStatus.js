
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

import {CustRequestType} from '../order/CustRequest.js';
import {UserLoginType} from '../login/UserLogin.js';


const CustRequestStatusType = new GraphQLObjectType({
  name: 'CustRequestStatusType',
  description: 'Type for CustRequestStatus in order',

  fields: () => ({
    statusDate: {type: GraphQLString},
    statusId: {type: GraphQLString},
    custRequest: {
      type: CustRequestType,
      args : {custRequestId: {type: GraphQLString}},
      resolve: (custRequestStatus, args, {loaders}) => loaders.ofbiz.load(`order/custRequests/find?custRequestId=${custRequestStatus.custRequestId}`)
    },
    custRequestStatusId: {type: GraphQLString},
    changeByUserLogin: {
      type: UserLoginType,
      args : {changeByUserLoginId: {type: GraphQLString}},
      resolve: (custRequestStatus, args, {loaders}) => loaders.ofbiz.load(`login/userLogins/find?userLoginId=${custRequestStatus.changeByUserLoginId}`)
    },
    custRequestItemSeqId: {type: GraphQLString}
  })
});

export {CustRequestStatusType};
    




const CustRequestStatusInputType = new GraphQLInputObjectType({
  name: 'CustRequestStatusInputType',
  description: 'input type for CustRequestStatus in order',

  fields: () => ({
    statusDate: {type: GraphQLString},
    statusId: {type: GraphQLString},
    custRequestId: {type: GraphQLString},
    custRequestStatusId: {type: GraphQLString},
    changeByUserLoginId: {type: GraphQLString},
    custRequestItemSeqId: {type: GraphQLString}
  })
});

export {CustRequestStatusInputType};
    