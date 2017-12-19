
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


const CustRequestAttributeType = new GraphQLObjectType({
  name: 'CustRequestAttributeType',
  description: 'Type for CustRequestAttribute in order',

  fields: () => ({
    attrDescription: {type: GraphQLString},
    custRequest: {
      type: CustRequestType,
      args : {custRequestId: {type: GraphQLString}},
      resolve: (custRequestAttribute, args, {loaders}) => loaders.ofbiz.load(`order/custRequests/find?custRequestId=${custRequestAttribute.custRequestId}`)
    },
    attrValue: {type: GraphQLString},
    attrName: {type: GraphQLString}
  })
});

export {CustRequestAttributeType};
    