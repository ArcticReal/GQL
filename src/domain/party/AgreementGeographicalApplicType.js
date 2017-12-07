
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {AgreementItemType} from '../party/AgreementItemType.js';


const AgreementGeographicalApplicType = new GraphQLObjectType({
  name: 'AgreementGeographicalApplicType',
  description: 'Type for AgreementGeographicalApplic in party',

  fields: () => ({
    geoId: {type: GraphQLString},
    agreement: {
      type: AgreementItemType,
      args : {agreementId: {type: GraphQLString}},
      resolve: (agreementGeographicalApplic, args, {loaders}) => loaders.ofbiz.load(`agreementItems/find?agreementId=${agreementGeographicalApplic.agreementId}`)
    },
    agreementItemSeqId: {type: GraphQLString}
  })
});

export {AgreementGeographicalApplicType};
    