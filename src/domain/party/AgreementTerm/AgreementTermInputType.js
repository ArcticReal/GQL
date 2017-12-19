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

const AgreementTermInputType = new GraphQLInputObjectType({
  name: 'AgreementTermInputType',
  description: 'input type for AgreementTerm',

  fields: () => ({
    agreementId: {type: GraphQLString},
    agreementItemSeqId: {type: GraphQLString},
    agreementTermId: {type: GraphQLString},
    description: {type: GraphQLString},
    fromDate: {type: GraphQLString},
    invoiceItemTypeId: {type: GraphQLString},
    maxQuantity: {type: GraphQLFloat},
    minQuantity: {type: GraphQLFloat},
    termDays: {type: GraphQLInt},
    termTypeId: {type: GraphQLString},
    termValue: {type: GraphQLFloat},
    textValue: {type: GraphQLString},
    thruDate: {type: GraphQLString}
  })
});

export {AgreementTermInputType};
    