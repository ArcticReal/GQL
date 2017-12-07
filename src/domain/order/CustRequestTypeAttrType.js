
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {CustRequestTypeType} from '../order/CustRequestTypeType.js';


const CustRequestTypeAttrType = new GraphQLObjectType({
  name: 'CustRequestTypeAttrType',
  description: 'Type for CustRequestTypeAttr in order',

  fields: () => ({
    description: {type: GraphQLString},
    custRequestType: {
      type: CustRequestTypeType,
      args : {custRequestTypeId: {type: GraphQLString}},
      resolve: (custRequestTypeAttr, args, {loaders}) => loaders.ofbiz.load(`custRequestTypes/find?custRequestTypeId=${custRequestTypeAttr.custRequestTypeId}`)
    },
    attrName: {type: GraphQLString}
  })
});

export {CustRequestTypeAttrType};
    