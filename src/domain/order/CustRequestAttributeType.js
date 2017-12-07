
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


const CustRequestAttributeType = new GraphQLObjectType({
  name: 'CustRequestAttributeType',
  description: 'Type for CustRequestAttribute in order',

  fields: () => ({
    attrDescription: {type: GraphQLString},
    custRequest: {
      type: CustRequestType,
      args : {custRequestId: {type: GraphQLString}},
      resolve: (custRequestAttribute, args, {loaders}) => loaders.ofbiz.load(`custRequests/find?custRequestId=${custRequestAttribute.custRequestId}`)
    },
    attrValue: {type: GraphQLInt},
    attrName: {type: GraphQLString}
  })
});

export {CustRequestAttributeType};
    