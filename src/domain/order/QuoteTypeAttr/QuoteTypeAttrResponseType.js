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

const QuoteTypeAttrResponseType = new GraphQLObjectType({
  name: 'QuoteTypeAttrResponseType',
  description: 'response type for QuoteTypeAttr',

  fields: () => ({
    attrName: {type: GraphQLString},
    description: {type: GraphQLString},
    quoteTypeId: {type: GraphQLString}
  })
});

export {QuoteTypeAttrResponseType};
    