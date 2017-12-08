
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

import {PartyType} from '../party/Party.js';


const OldPartyTaxInfoType = new GraphQLObjectType({
  name: 'OldPartyTaxInfoType',
  description: 'Type for OldPartyTaxInfo in party',

  fields: () => ({
    fromDate: {type: GraphQLString},
    partyTaxId: {type: GraphQLString},
    geoId: {type: GraphQLString},
    isExempt: {type: GraphQLBoolean},
    party: {
      type: PartyType,
      args : {partyId: {type: GraphQLString}},
      resolve: (oldPartyTaxInfo, args, {loaders}) => loaders.ofbiz.load(`partys/find?partyId=${oldPartyTaxInfo.partyId}`)
    },
    thruDate: {type: GraphQLString}
  })
});

export {OldPartyTaxInfoType};
    




const OldPartyTaxInfoInputType = new GraphQLInputObjectType({
  name: 'OldPartyTaxInfoInputType',
  description: 'input type for OldPartyTaxInfo in party',

  fields: () => ({
    fromDate: {type: GraphQLString},
    partyTaxId: {type: GraphQLString},
    geoId: {type: GraphQLString},
    isExempt: {type: GraphQLBoolean},
    partyId: {type: GraphQLString},
    thruDate: {type: GraphQLString}
  })
});

export {OldPartyTaxInfoInputType};
    