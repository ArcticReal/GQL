
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

import {CustRequestTypeType} from '../order/CustRequestType.js';


const CustRequestTypeAttrType = new GraphQLObjectType({
  name: 'CustRequestTypeAttrType',
  description: 'Type for CustRequestTypeAttr in order',

  fields: () => ({
    description: {type: GraphQLString},
    custRequestType: {
      type: CustRequestTypeType,
      args : {custRequestTypeId: {type: GraphQLString}},
      resolve: (custRequestTypeAttr, args, {loaders}) => loaders.ofbiz.load(`order/custRequest/custRequestTypes/find?custRequestTypeId=${custRequestTypeAttr.custRequestTypeId}`)
    },
    attrName: {type: GraphQLString}
  })
});

export {CustRequestTypeAttrType};
    




const CustRequestTypeAttrInputType = new GraphQLInputObjectType({
  name: 'CustRequestTypeAttrInputType',
  description: 'input type for CustRequestTypeAttr',

  fields: () => ({
    attrName: {type: GraphQLString},
    custRequestTypeId: {type: GraphQLString},
    description: {type: GraphQLString}
  })
});

export {CustRequestTypeAttrInputType};
    