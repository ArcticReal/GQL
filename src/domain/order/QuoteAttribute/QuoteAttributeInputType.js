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

const QuoteAttributeInputType = new GraphQLInputObjectType({
  name: 'QuoteAttributeInputType',
  description: 'input type for QuoteAttribute',

  fields: () => ({
    attrDescription: {type: GraphQLString},
    attrName: {type: GraphQLString},
    attrValue: {type: GraphQLString},
    quoteId: {type: GraphQLString}
  })
});

export {QuoteAttributeInputType};
    