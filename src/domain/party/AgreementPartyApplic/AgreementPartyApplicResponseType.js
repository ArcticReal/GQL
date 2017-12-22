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

const AgreementPartyApplicResponseType = new GraphQLObjectType({
  name: 'AgreementPartyApplicResponseType',
  description: 'response type for AgreementPartyApplic',

  fields: () => ({
    agreementId: {type: GraphQLString},
    agreementItemSeqId: {type: GraphQLString},
    partyId: {type: GraphQLString}
  })
});

export {AgreementPartyApplicResponseType};
    