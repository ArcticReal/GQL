
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

import {TermTypeType} from '../party/TermType.js';


const TermTypeAttrType = new GraphQLObjectType({
  name: 'TermTypeAttrType',
  description: 'Type for TermTypeAttr in party',

  fields: () => ({
    termType: {
      type: TermTypeType,
      args : {termTypeId: {type: GraphQLString}},
      resolve: (termTypeAttr, args, {loaders}) => loaders.ofbiz.load(`termTypes/find?termTypeId=${termTypeAttr.termTypeId}`)
    },
    description: {type: GraphQLString},
    attrName: {type: GraphQLString}
  })
});

export {TermTypeAttrType};
    




const TermTypeAttrInputType = new GraphQLInputObjectType({
  name: 'TermTypeAttrInputType',
  description: 'input type for TermTypeAttr in party',

  fields: () => ({
    termTypeId: {type: GraphQLString},
    description: {type: GraphQLString},
    attrName: {type: GraphQLString}
  })
});

export {TermTypeAttrInputType};
    