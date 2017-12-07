
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {TermTypeType} from '../party/TermTypeType.js';


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
    