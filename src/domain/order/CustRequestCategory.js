
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
import {CustRequestTypeType} from '../order/CustRequestType.js';


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
    custRequests: {
      type: new GraphQLList(CustRequestType),
      args : {custRequestCategoryId: {type: GraphQLString}},
      resolve: (custRequestCategory, args, {loaders}) => loaders.ofbizArray.load(`custRequests/find?custRequestCategoryId=${custRequestCategory.custRequestCategoryId}`)
    }
  })
});

export {CustRequestCategoryType};
    




const CustRequestCategoryInputType = new GraphQLInputObjectType({
  name: 'CustRequestCategoryInputType',
  description: 'input type for CustRequestCategory in order',

  fields: () => ({
    description: {type: GraphQLString},
    custRequestTypeId: {type: GraphQLString},
    custRequestCategoryId: {type: GraphQLString}
  })
});

export {CustRequestCategoryInputType};
    