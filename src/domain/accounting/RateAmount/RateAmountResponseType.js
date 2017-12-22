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

const RateAmountResponseType = new GraphQLObjectType({
  name: 'RateAmountResponseType',
  description: 'response type for RateAmount',

  fields: () => ({
    emplPositionTypeId: {type: GraphQLString},
    fromDate: {type: GraphQLString},
    partyId: {type: GraphQLString},
    periodTypeId: {type: GraphQLString},
    rateAmount: {type: GraphQLFloat},
    rateCurrencyUomId: {type: GraphQLString},
    rateTypeId: {type: GraphQLString},
    thruDate: {type: GraphQLString},
    workEffortId: {type: GraphQLString}
  })
});

export {RateAmountResponseType};
    