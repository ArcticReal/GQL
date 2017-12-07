
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {CustRequestItemType} from '../order/CustRequestItemType.js';
import {CustRequestTypeType} from '../order/CustRequestTypeType.js';


const CustRequestResolutionType = new GraphQLObjectType({
  name: 'CustRequestResolutionType',
  description: 'Type for CustRequestResolution in order',

  fields: () => ({
    custRequestResolutionId: {type: GraphQLString},
    description: {type: GraphQLString},
    custRequestType: {
      type: CustRequestTypeType,
      args : {custRequestTypeId: {type: GraphQLString}},
      resolve: (custRequestResolution, args, {loaders}) => loaders.ofbiz.load(`custRequestTypes/find?custRequestTypeId=${custRequestResolution.custRequestTypeId}`)
    },
    custRequestItem: {
      type: new GraphQLList(CustRequestItemType),
      args : {custRequestResolutionId: {type: GraphQLString}},
      resolve: (custRequestResolution, args, {loaders}) => loaders.ofbizArray.load(`custRequestItems/find?custRequestResolutionId=${custRequestResolution.custRequestResolutionId}`)
    }
  })
});

export {CustRequestResolutionType};
    