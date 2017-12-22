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

const MarketInterestResponseType = new GraphQLObjectType({
  name: 'MarketInterestResponseType',
  description: 'response type for MarketInterest',

  fields: () => ({
    fromDate: {type: GraphQLString},
    partyClassificationGroupId: {type: GraphQLString},
    productCategoryId: {type: GraphQLString},
    thruDate: {type: GraphQLString}
  })
});

export {MarketInterestResponseType};
    