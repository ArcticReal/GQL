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

const PayrollPreferenceResponseType = new GraphQLObjectType({
  name: 'PayrollPreferenceResponseType',
  description: 'response type for PayrollPreference',

  fields: () => ({
    accountNumber: {type: GraphQLString},
    bankName: {type: GraphQLString},
    deductionTypeId: {type: GraphQLString},
    flatAmount: {type: GraphQLFloat},
    fromDate: {type: GraphQLString},
    partyId: {type: GraphQLString},
    paymentMethodTypeId: {type: GraphQLString},
    payrollPreferenceSeqId: {type: GraphQLString},
    percentage: {type: GraphQLFloat},
    periodTypeId: {type: GraphQLString},
    roleTypeId: {type: GraphQLString},
    routingNumber: {type: GraphQLString},
    thruDate: {type: GraphQLString}
  })
});

export {PayrollPreferenceResponseType};
    