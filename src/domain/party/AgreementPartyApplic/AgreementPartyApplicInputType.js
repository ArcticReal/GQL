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

const AgreementPartyApplicInputType = new GraphQLInputObjectType({
  name: 'AgreementPartyApplicInputType',
  description: 'input type for AgreementPartyApplic',

  fields: () => ({
    agreementId: {type: GraphQLString},
    agreementItemSeqId: {type: GraphQLString},
    partyId: {type: GraphQLString}
  })
});

export {AgreementPartyApplicInputType};
    