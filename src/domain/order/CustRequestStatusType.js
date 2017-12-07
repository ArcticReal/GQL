
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {CustRequestType} from '../order/CustRequestType.js';
import {UserLoginType} from '../login/UserLoginType.js';


const CustRequestStatusType = new GraphQLObjectType({
  name: 'CustRequestStatusType',
  description: 'Type for CustRequestStatus in order',

  fields: () => ({
    statusDate: {type: GraphQLString},
    statusId: {type: GraphQLString},
    custRequest: {
      type: CustRequestType,
      args : {custRequestId: {type: GraphQLString}},
      resolve: (custRequestStatus, args, {loaders}) => loaders.ofbiz.load(`custRequests/find?custRequestId=${custRequestStatus.custRequestId}`)
    },
    custRequestStatusId: {type: GraphQLString},
    changeByUserLogin: {
      type: UserLoginType,
      args : {changeByUserLoginId: {type: GraphQLString}},
      resolve: (custRequestStatus, args, {loaders}) => loaders.ofbiz.load(`userLogins/find?userLoginId=${custRequestStatus.changeByUserLoginId}`)
    },
    custRequestItemSeqId: {type: GraphQLString}
  })
});

export {CustRequestStatusType};
    