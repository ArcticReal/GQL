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

const AgreementGeographicalApplicInputType = new GraphQLInputObjectType({
  name: 'AgreementGeographicalApplicInputType',
  description: 'input type for AgreementGeographicalApplic',

  fields: () => ({
    agreementId: {type: GraphQLString},
    agreementItemSeqId: {type: GraphQLString},
    geoId: {type: GraphQLString}
  })
});

export {AgreementGeographicalApplicInputType};
    