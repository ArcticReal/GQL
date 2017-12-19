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

const QuoteTypeAttrInputType = new GraphQLInputObjectType({
  name: 'QuoteTypeAttrInputType',
  description: 'input type for QuoteTypeAttr',

  fields: () => ({
    attrName: {type: GraphQLString},
    description: {type: GraphQLString},
    quoteTypeId: {type: GraphQLString}
  })
});

export {QuoteTypeAttrInputType};
    