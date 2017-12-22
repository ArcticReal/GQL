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

const QuoteAttributeResponseType = new GraphQLObjectType({
  name: 'QuoteAttributeResponseType',
  description: 'response type for QuoteAttribute',

  fields: () => ({
    attrDescription: {type: GraphQLString},
    attrName: {type: GraphQLString},
    attrValue: {type: GraphQLString},
    quoteId: {type: GraphQLString}
  })
});

export {QuoteAttributeResponseType};
    