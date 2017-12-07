
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
import {CustRequestTypeType} from '../order/CustRequestTypeType.js';


const CustRequestCategoryType = new GraphQLObjectType({
  name: 'CustRequestCategoryType',
  description: 'Type for CustRequestCategory in order',

  fields: () => ({
    description: {type: GraphQLString},
    custRequestType: {
      type: CustRequestTypeType,
      args : {custRequestTypeId: {type: GraphQLString}},
      resolve: (custRequestCategory, args, {loaders}) => loaders.ofbiz.load(`custRequestTypes/find?custRequestTypeId=${custRequestCategory.custRequestTypeId}`)
    },
    custRequestCategoryId: {type: GraphQLString},
    custRequest: {
      type: new GraphQLList(CustRequestType),
      args : {custRequestCategoryId: {type: GraphQLString}},
      resolve: (custRequestCategory, args, {loaders}) => loaders.ofbizArray.load(`custRequests/find?custRequestCategoryId=${custRequestCategory.custRequestCategoryId}`)
    }
  })
});

export {CustRequestCategoryType};
    