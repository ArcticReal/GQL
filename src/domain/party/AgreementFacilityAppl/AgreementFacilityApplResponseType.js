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

const AgreementFacilityApplResponseType = new GraphQLObjectType({
  name: 'AgreementFacilityApplResponseType',
  description: 'response type for AgreementFacilityAppl',

  fields: () => ({
    agreementId: {type: GraphQLString},
    agreementItemSeqId: {type: GraphQLString},
    facilityId: {type: GraphQLString}
  })
});

export {AgreementFacilityApplResponseType};
    