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
    