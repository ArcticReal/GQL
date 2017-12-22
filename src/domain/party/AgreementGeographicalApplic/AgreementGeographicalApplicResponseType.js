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

const AgreementGeographicalApplicResponseType = new GraphQLObjectType({
  name: 'AgreementGeographicalApplicResponseType',
  description: 'response type for AgreementGeographicalApplic',

  fields: () => ({
    agreementId: {type: GraphQLString},
    agreementItemSeqId: {type: GraphQLString},
    geoId: {type: GraphQLString}
  })
});

export {AgreementGeographicalApplicResponseType};
    