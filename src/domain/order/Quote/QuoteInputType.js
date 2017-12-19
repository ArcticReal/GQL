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

const QuoteInputType = new GraphQLInputObjectType({
  name: 'QuoteInputType',
  description: 'input type for Quote',

  fields: () => ({
    currencyUomId: {type: GraphQLString},
    description: {type: GraphQLString},
    issueDate: {type: GraphQLString},
    partyId: {type: GraphQLString},
    productStoreId: {type: GraphQLString},
    quoteId: {type: GraphQLString},
    quoteName: {type: GraphQLString},
    quoteTypeId: {type: GraphQLString},
    salesChannelEnumId: {type: GraphQLString},
    statusId: {type: GraphQLString},
    validFromDate: {type: GraphQLString},
    validThruDate: {type: GraphQLString}
  })
});

export {QuoteInputType};
    