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

const AgreementFacilityApplInputType = new GraphQLInputObjectType({
  name: 'AgreementFacilityApplInputType',
  description: 'input type for AgreementFacilityAppl',

  fields: () => ({
    agreementId: {type: GraphQLString},
    agreementItemSeqId: {type: GraphQLString},
    facilityId: {type: GraphQLString}
  })
});

export {AgreementFacilityApplInputType};
    