
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
      resolve: (agreementGeographicalApplic, args, {loaders}) => loaders.ofbiz.load(`agreementItems/find?agreementId=${agreementGeographicalApplic.agreementId}`)
    },
    agreementItemSeqId: {type: GraphQLString}
  })
});

export {AgreementGeographicalApplicType};
    




const AgreementGeographicalApplicInputType = new GraphQLInputObjectType({
  name: 'AgreementGeographicalApplicInputType',
  description: 'input type for AgreementGeographicalApplic in party',

  fields: () => ({
    geoId: {type: GraphQLString},
    agreementId: {type: GraphQLString},
    agreementItemSeqId: {type: GraphQLString}
  })
});

export {AgreementGeographicalApplicInputType};
    