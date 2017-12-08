
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


const VendorType = new GraphQLObjectType({
  name: 'VendorType',
  description: 'Type for Vendor in party',

  fields: () => ({
    manifestCompanyTitle: {type: GraphQLString},
    manifestPolicies: {type: GraphQLString},
    manifestLogoUrl: {type: GraphQLString},
    party: {
      type: PartyType,
      args : {partyId: {type: GraphQLString}},
      resolve: (vendor, args, {loaders}) => loaders.ofbiz.load(`partys/find?partyId=${vendor.partyId}`)
    },
    manifestCompanyName: {type: GraphQLString}
  })
});

export {VendorType};
    




const VendorInputType = new GraphQLInputObjectType({
  name: 'VendorInputType',
  description: 'input type for Vendor in party',

  fields: () => ({
    manifestCompanyTitle: {type: GraphQLString},
    manifestPolicies: {type: GraphQLString},
    manifestLogoUrl: {type: GraphQLString},
    partyId: {type: GraphQLString},
    manifestCompanyName: {type: GraphQLString}
  })
});

export {VendorInputType};
    