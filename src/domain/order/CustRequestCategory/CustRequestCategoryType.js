
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

import {CustRequestType} from '../../order/CustRequest/CustRequestType.js';
import {CustRequestTypeType} from '../../order/CustRequestType/CustRequestTypeType.js';


const CustRequestCategoryType = new GraphQLObjectType({
  name: 'CustRequestCategoryType',
  description: 'Type for CustRequestCategory in order',

  fields: () => ({
    description: {type: GraphQLString},
    custRequestType: {
      type: CustRequestTypeType,
      args : {custRequestTypeId: {type: GraphQLString}},
      resolve: (custRequestCategory, args, {loaders}) => loaders.ofbiz.load(`order/custRequest/custRequestTypes/find?custRequestTypeId=${custRequestCategory.custRequestTypeId}`)
    },
    custRequestCategoryId: {type: GraphQLString},
    custRequests: {
      type: new GraphQLList(CustRequestType),
      args : {},
      resolve: (custRequestCategory, args, {loaders}) => loaders.ofbizArray.load(`order/custRequests/find?custRequestCategoryId=${custRequestCategory.custRequestCategoryId}`)
    }
  })
});

export {CustRequestCategoryType};
    