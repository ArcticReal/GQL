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

const RateAmountInputType = new GraphQLInputObjectType({
  name: 'RateAmountInputType',
  description: 'input type for RateAmount',

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

export {RateAmountInputType};
    