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

const MarketInterestInputType = new GraphQLInputObjectType({
  name: 'MarketInterestInputType',
  description: 'input type for MarketInterest',

  fields: () => ({
    fromDate: {type: GraphQLString},
    partyClassificationGroupId: {type: GraphQLString},
    productCategoryId: {type: GraphQLString},
    thruDate: {type: GraphQLString}
  })
});

export {MarketInterestInputType};
    