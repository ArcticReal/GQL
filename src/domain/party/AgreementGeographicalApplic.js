
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

import {AgreementItemType} from '../party/AgreementItem.js';


const AgreementGeographicalApplicType = new GraphQLObjectType({
  name: 'AgreementGeographicalApplicType',
  description: 'Type for AgreementGeographicalApplic in party',

  fields: () => ({
    geoId: {type: GraphQLString},
    agreement: {
      type: AgreementItemType,
      args : {agreementId: {type: GraphQLString}},
      resolve: (agreementGeographicalApplic, args, {loaders}) => loaders.ofbiz.load(`party/agreement/agreementItems/find?agreementId=${agreementGeographicalApplic.agreementId}`)
    },
    agreementItemSeqId: {type: GraphQLString}
  })
});

export {AgreementGeographicalApplicType};
    




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
    