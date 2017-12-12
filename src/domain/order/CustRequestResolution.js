
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

import {CustRequestItemType} from '../order/CustRequestItem.js';
import {CustRequestTypeType} from '../order/CustRequestType.js';


const CustRequestResolutionType = new GraphQLObjectType({
  name: 'CustRequestResolutionType',
  description: 'Type for CustRequestResolution in order',

  fields: () => ({
    custRequestResolutionId: {type: GraphQLString},
    description: {type: GraphQLString},
    custRequestType: {
      type: CustRequestTypeType,
      args : {custRequestTypeId: {type: GraphQLString}},
      resolve: (custRequestResolution, args, {loaders}) => loaders.ofbiz.load(`order/custRequest/custRequestTypes/find?custRequestTypeId=${custRequestResolution.custRequestTypeId}`)
    },
    custRequestItems: {
      type: new GraphQLList(CustRequestItemType),
      args : {},
      resolve: (custRequestResolution, args, {loaders}) => loaders.ofbizArray.load(`order/custRequest/custRequestItems/find?custRequestResolutionId=${custRequestResolution.custRequestResolutionId}`)
    }
  })
});

export {CustRequestResolutionType};
    




const CustRequestResolutionInputType = new GraphQLInputObjectType({
  name: 'CustRequestResolutionInputType',
  description: 'input type for CustRequestResolution in order',

  fields: () => ({
    custRequestResolutionId: {type: GraphQLString},
    description: {type: GraphQLString},
    custRequestTypeId: {type: GraphQLString}
  })
});

export {CustRequestResolutionInputType};
    