
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
      resolve: (termTypeAttr, args, {loaders}) => loaders.ofbiz.load(`party/termTypes/find?termTypeId=${termTypeAttr.termTypeId}`)
    },
    description: {type: GraphQLString},
    attrName: {type: GraphQLString}
  })
});

export {TermTypeAttrType};
    




const TermTypeAttrInputType = new GraphQLInputObjectType({
  name: 'TermTypeAttrInputType',
  description: 'input type for TermTypeAttr',

  fields: () => ({
    attrName: {type: GraphQLString},
    description: {type: GraphQLString},
    termTypeId: {type: GraphQLString}
  })
});

export {TermTypeAttrInputType};
    