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

const TermTypeAttrResponseType = new GraphQLObjectType({
  name: 'TermTypeAttrResponseType',
  description: 'response type for TermTypeAttr',

  fields: () => ({
    attrName: {type: GraphQLString},
    description: {type: GraphQLString},
    termTypeId: {type: GraphQLString}
  })
});

export {TermTypeAttrResponseType};
    